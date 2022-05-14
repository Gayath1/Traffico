from flask import Response, request, jsonify
from database.models import Drivers
from flask_restful import Resource
# import numpy as np
# from urllib.request import urlopen, Request
# import matplotlib.pyplot as plt
# from fer import FER
import tensorflow as tf
# from flask_cors import CORS, cross_origin
# import base64
import cv2
import time
import numpy as np
import winsound
from tensorflow import keras
from keras.models import load_model
import base64
import io
from imageio import imread
import sys
from tensorflow.python.platform import gfile




class DrunkApi(Resource):
    def post(self):

        face_cascade = cv2.CascadeClassifier(
            'haarcascade/haarcascade_frontalface_default.xml')

        # read image file string data
        file = request.files['image']
        print("file", file)

        npimg = np.fromfile(file, np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        # Convert into grayscale
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        # Detect faces
        faces = face_cascade.detectMultiScale(
            gray, scaleFactor=1.1, minNeighbors=15, minSize=(30, 30), flags=cv2.CASCADE_SCALE_IMAGE)
        print("[INFO] {} faces detected...".format(len(faces)))
        if (faces is None):
            print('Failed to detect face')
            return 0

        for (x, y, w, h) in faces:

            faceimg = img[y:y+h, x:x+w]

        r1 = 106/faceimg.shape[0]
        r2 = 106/faceimg.shape[1]

        cropped = cv2.resize(faceimg, (0, 0), fx=r2, fy=r1)

        cv2.imshow("face crop", cropped)
        cv2.waitKey(0)

        # img_shape = faces.shape
        # img = cv2.resize(faces, (0, 0), fx=min_w /img_shape[1], fy=min_h / img_shape[0], interpolation=cv2.INTER_AREA)
        # print(cropped.shape)

        y = np.expand_dims(cropped, axis=0)
        votes = []
        result = []

        DrunkKerasModel = load_model('api/DrunkKerasModel.h5')
        p = DrunkKerasModel.predict(y)
        print("DrunkKerasModel_predict", p[0])
        if(p[0][0] > p[0][1]):

            votes.append(0)
            # result.append('sober')
            print("person is not drunk")

        elif(p[0][0] <= p[0][1]):

            votes.append(1)
            # result.append('drunk')
            print("person is drunk")

        best_model_VGG = load_model('api/best_model_VGG.h5')
        p1 = best_model_VGG.predict(y)
        print("best_model_VGG_predict", p1)
        if(p1[0][0] > p1[0][1]):

            votes.append(1)
            # result.append('drunk')
            print("person is drunk")

        elif(p1[0][0] <= p1[0][1]):

            votes.append(0)
            # result.append('sober')
            print("person is not drunk")

        best_model_DrunkKeras_layer4 = load_model(
            'api/best_model_DrunkKeras_layer4.h5')
        p2 = best_model_DrunkKeras_layer4.predict(y)
        print("best_model_DrunkKeras_layer4", p2)
        if(p2[0][0] > p2[0][1]):

            votes.append(1)
            # result.append('drunk')
            print("person is drunk")

        elif(p2[0][0] <= p2[0][1]):

            votes.append(0)
            # result.append('sober')
            print("person is not drunk")

        print(votes)
        DrunkVotes = (votes.count(1))
        SoberVotes = (votes.count(0))
        
        if(DrunkVotes > SoberVotes):
            print("person is drunk")
            return True
        elif(DrunkVotes < SoberVotes):
            print("person is not drunk")
            return False    


def initialize_routes_drunkDetect(api):
    api.add_resource(DrunkApi, '/api/getResults')

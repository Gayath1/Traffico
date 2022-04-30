from flask import Response, request, jsonify
from database.models import Drivers
from flask_restful import Resource
# import numpy as np
# from urllib.request import urlopen, Request
# import matplotlib.pyplot as plt
# from fer import FER
# import tensorflow as tf
# from flask_cors import CORS, cross_origin
# import base64
import boto3
import cv2
import time
import numpy as np
import winsound
from keras.models import load_model
from tensorflow import keras
import base64

rek = boto3.client('rekognition', region_name='ap-southeast-1')

# model = tf.keras.models.load_model("model.h5")


class DrunkApi(Resource):
    def post(self):

        # model = keras.models.load_model('api/model2.h5')
        model = load_model('api/DrunkKerasModel.h5')
        l = []
        i = 0
        t = 0
        # x = cv2.imread('api/averagewomanface.jpg')
        # x = cv2.imread(r'C:/Users/Gayath/Desktop/drinks/new samples/no drink/PXL_20220408_135333575.jpg')

        # read image file string data
        file = request.files['image']
        npimg = np.fromfile(file, np.uint8)
        x = cv2.imdecode(npimg, cv2.IMREAD_COLOR)

        # print(x.shape)
        r1 = 106/x.shape[0]
        r2 = 106/x.shape[1]

        cropped = cv2.resize(x, (0, 0), fx=r2, fy=r1)
        # print(cropped.shape)
        y = np.expand_dims(cropped, axis=0)
        p = model.predict(y)
        print("predict", p)
        if(p[0][0] > p[0][1]):
            i = 0
            l.append(0)
            print("person is not drunk")
            return jsonify("person is not drunk")
            print(p[0][0])
            print(p[0][1])
        elif(p[0][0] <= p[0][1]):
            i = 1
            l.append(1)
            print("person is  drunk")
            return jsonify("person is drunk")
            print(p[0][0])
            print(p[0][1])

        # image_dict = {'S3Object': {
        #     'Bucket': 'traffico', 'Name': 'celebrities-show-off-their-best-drunk-faces-1.jpg'}}

        # response = rek.detect_faces(Image=image_dict, Attributes=['ALL'])

        # for faceDetail in response['FaceDetails']:
        #     for emotion in faceDetail['Emotions']:
        #         print(emotion)
        # face_emotion_confidence = 0
        # face_emotion = None
        # for emotion in faceDetail.get('Emotions'):
        #     if emotion.get('Confidence') >= face_emotion_confidence:
        #         face_emotion_confidence = emotion['Confidence']
        #         face_emotion = emotion.get('Type')
        #         print(face_emotion,face_emotion_confidence)

        # print(str(emotion['Type']) + '\t\t' + str(emotion['Confidence']))
        # print('\n')
        # if(str(emotion['Type']) + '\t\t' + str(emotion['Confidence'])) >= '0.9':
        #     return jsonify({"status": "Drunk"})

        # face_emotion_confidence = 0

        # for emotion in response['FaceDetails']:
        #     print(emotion)
        #     if emotion.get('Confidence') >= face_emotion_confidence:
        #         face_emotion_confidence = emotion['Confidence']
        #         face_emotion = emotion.get('Type')
        #         print(face_emotion_confidence)
        #         if face_emotion_confidence >= 0.9:
        #             return jsonify({
        #             "drunk": True
        #         })
        #         else:
        #             return jsonify({
        #             "drunk": False
        #         })

        # if str(emotion['Confidence']) >= '0.9':
        #     return jsonify({
        #         "drunk": False
        #     })
        # else:
        #     return jsonify({
        #         "drunk": True
        #     })
        # data = request.form.get("image")

        # hdr = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
        #           'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        #            'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
        #            'Accept-Encoding': 'none',
        #            'Accept-Language': 'en-US,en;q=0.8',
        #            'Connection': 'keep-alive'}

        # req = Request(data, headers=hdr)

        # f = urlopen(req)
        # img = plt.imread(f, 0)
        # detector = FER(mtcnn=True)
        # emotions = detector.detect_emotions(img)[0]['emotions']

        # test = np.array([[ 0, emotions["angry"], 0, emotions["disgust"], emotions["fear"], emotions["happy"], emotions["neutral"], emotions["sad"], emotions["surprise"], 0 ]])
        # prediction = model.predict(test)
        # print(prediction)

        # if prediction[0][0] >= 0.9:
        #     return jsonify({
        #     "drunk": True
        # })
        # else:
        #     return jsonify({
        #     "drunk": False
        # })


def initialize_routes_drunkDetect(api):
    api.add_resource(DrunkApi, '/api/getResults')

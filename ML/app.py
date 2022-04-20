import cv2
import numpy as np
from keras.models import model_from_json
from fer import FER
import matplotlib.pyplot as plt


# test_image_one = plt.imread(
#     "C:/Users/Gayath/Desktop/drinks/new samples/no dunk/PXL_20220408_135243688.jpg")
# emo_detector = FER(mtcnn=True)
# # Capture all the emotions on the image
# captured_emotions = emo_detector.detect_emotions(test_image_one)
# # Print all captured emotions with the image
# print(captured_emotions)
# plt.imshow(test_image_one)
# # Use the top Emotion() function to call for the dominant emotion in the image
# dominant_emotion, emotion_score = emo_detector.top_emotion(test_image_one)
# print(dominant_emotion, emotion_score)
from scipy.spatial import distance

from imutils import face_utils

import imutils

import dlib


def eyer(eye):

    x = distance.euclidean(eye[1], eye[5])
    y = distance.euclidean(eye[2], eye[4])
    z = distance.euclidean(eye[0], eye[3])
    q = (x+y)/(2.0*z)

    return q


thresh = 0.26

frame_check = 20

detect = dlib.get_frontal_face_detector()

# Dat file is the crux of the code
predict = dlib.shape_predictor(
    r"E:/Users/Traffico/ML/haarcascades/shape_predictor_68_face_landmarks.dat")


(lStart, lEnd) = face_utils.FACIAL_LANDMARKS_IDXS["left_eye"]
(rStart, rEnd) = face_utils.FACIAL_LANDMARKS_IDXS["right_eye"]

# cap = cv2.imread(
#     "C:/Users/Gayath/Desktop/drinks/new samples/glass 2/PXL_20220408_161250010.jpg")

cap = cv2.imread("E:/Users/Traffico/Backend/api/image.jpg")    

flag = 0


frame = imutils.resize(cap, width=450)

gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)


subjects = detect(gray, 0)

for subject in subjects:

    shape = predict(gray, subject)
    
    shape = face_utils.shape_to_np(shape)  # converting to NumPy Array
    
    leftEye = shape[lStart:lEnd]
    
    rightEye = shape[rStart:rEnd]
    
    leftEAR = eyer(leftEye)
    
    rightEAR = eyer(rightEye)
    
    ear = (leftEAR + rightEAR) / 2.0
    
    leftEyeHull = cv2.convexHull(leftEye)
    
    rightEyeHull = cv2.convexHull(rightEye)
    
    # cv2.drawContours(frame, [leftEyeHull], -1, (0, 255, 0), 1)

    # cv2.drawContours(frame, [rightEyeHull], -1, (0, 255, 0), 1)
    print ("ear",ear)
    print ("thresh",thresh)
    if ear <= thresh:
        
        flag += 1

        print(flag)

        # if flag >= frame_check:
        print ("flag",flag)
        print ("frame_check",frame_check)
        print ("Drowsy")


    else:

        flag = 0
        print ("Sober")


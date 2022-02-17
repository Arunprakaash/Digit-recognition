import pickle
import matplotlib.pyplot as plt
import cv2

model = pickle.load(open("model/digits.pkl","rb"))

image = cv2.imread("img/digit-9.png",0)
print(image.shape)



# cv2.imshow("digit.png",image)



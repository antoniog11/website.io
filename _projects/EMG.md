---
title: Electromyogram (EMG) and EMG Controlled Servo Motor 
position: left
picture: assets/images/EMG.gif
alt: EMG
---
During muscle contraction, motor neurons and muscle cells generate voltage differences that can be detected. I constructed a simple EMG circuit capable of detecting these voltage differences as well as applying successive filtering to generate a cleanly rectified voltage signal on an Oscilloscope. Using this voltage, I also wrote a short Arduino script to control a servo motor that rotated in proportion to the degree of muscle contraction my forearm engaged in as measured by the voltage level.
# smart-garden-devices-watering-timer

# tention regulator

I will use a [LM317LZ](http://www.ti.com/lit/ds/symlink/lm317.pdf). In the datasheet we can found at "8. Application and Implementation" how to use the LM317 in typical DC power application.

We need power ESP8266 betwen 3.0V~3.6V. 

![V_{OUT}=V_{REF}*(1+\frac{R2}{R1})+(I_{ADJ}*R2)](http://latex.codecogs.com/gif.latex?V_%7BOUT%7D%3DV_%7BREF%7D*%281&plus;%5Cfrac%7BR2%7D%7BR1%7D%29&plus;%28I_%7BADJ%7D*R2%29)

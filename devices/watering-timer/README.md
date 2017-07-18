# smart-garden-devices-watering-timer

# tention regulator

We need power ESP8266 betwen 3.0V~3.6V. 

I will use a LM317LZ an adjustable regulator. In it's [datasheet](http://www.ti.com/lit/ds/symlink/lm317.pdf) we can found at "8. Application and Implementation" how to use the LM317 in typical DC power application.

We need power ESP8266 betwen 3.0V < VOUT < 3.6V. Lets go an calculate all resistance.

![V_{OUT}=V_{REF}*(1+\frac{R2}{R1})+(I_{ADJ}*R2)](http://latex.codecogs.com/gif.latex?V_%7BOUT%7D%3DV_%7BREF%7D*%281&plus;%5Cfrac%7BR2%7D%7BR1%7D%29&plus;%28I_%7BADJ%7D*R2%29)

## Know values
* VOUT = 3.3v 
* VREF = 1.25v
* R1 = 220&#937;
* IADJ => "8.2.2 Detailed Design Procedure" say > "IADJ is typically 50 µA and negligible in most applications."

## Calcul
* ![V_{OUT}=V_{REF}*(1+\frac{R2}{R1})](http://latex.codecogs.com/gif.latex?V_%7BOUT%7D%3DV_%7BREF%7D*%281&plus;%5Cfrac%7BR2%7D%7BR1%7D%29)
![1+\frac{R2}{R1}=\frac{V_{OUT}}{V_{REF}}](http://latex.codecogs.com/gif.latex?1&plus;%5Cfrac%7BR2%7D%7BR1%7D%3D%5Cfrac%7BV_%7BOUT%7D%7D%7BV_%7BREF%7D%7D)
* ![\frac{R2}{R1}=\frac{V_{OUT}}{V_{REF}}-1](http://latex.codecogs.com/gif.latex?%5Cfrac%7BR2%7D%7BR1%7D%3D%5Cfrac%7BV_%7BOUT%7D%7D%7BV_%7BREF%7D%7D-1)
* ![R2=(\frac{V_{OUT}}{V_{REF}}-1)*R1](http://latex.codecogs.com/gif.latex?R2%3D%28%5Cfrac%7BV_%7BOUT%7D%7D%7BV_%7BREF%7D%7D-1%29*R1)
* ![R2=(\frac{3.3}{1.25}-1)*240=360\Omega](http://latex.codecogs.com/gif.latex?R2%3D%28%5Cfrac%7B3.3%7D%7B1.25%7D-1%29*220%3D360%5COmega)

## Check E12 resistance
In E12 serie we only have 390&#937; check if it can suit.

* ![V_{OUT}=V_{REF}*(1+\frac{R2}{R1})](http://latex.codecogs.com/gif.latex?V_%7BOUT%7D%3DV_%7BREF%7D*%281&plus;%5Cfrac%7BR2%7D%7BR1%7D%29)
* ![V_{OUT}=1.25*(1+\frac{390}{220})=3.46v](http://latex.codecogs.com/gif.latex?V_%7BOUT%7D%3D1.25*%281&plus;%5Cfrac%7B390%7D%7B220%7D%29%3D3.46v)

3.0V < 3.46V < 3.6V it's right


---
prev:
  text: "Hardware & Assembly"
  link: "/build-base/hardware-assembly"
next:
  text: "Software installation"
  link: "/build-base/software/installation"
---
# Build a base station using Septentrio Mosaic X5 receiver

## Bill of materials

Here is the list of components required to set up a triple-frequency GNSS base using the [Septentrio Mosaic X5](https://www.septentrio.com/en/products/gnss-receivers/gnss-receiver-modules/mosaic-x5):

<img src="/assets/images/build-base/receivers/mosaic-x5/mosaic-X5_650x650.avif" width="200">

|Hardware|Price (excl. tax)|
|--------|----|
| [simpleRTK3B Pro](https://www.ardusimple.com/product/simplertk3b-x5/) or [Linnet Mosaic-X5](https://www.systork.io/en/product/linnet-mosaic-x5/) |~€550|
|[Budget Survey Tripleband GNSS Antenna](https://www.ardusimple.com/product/budget-survey-tripleband-gnss-antenna-ip66/) or [BT-800S](https://store.beitian.com/products/beitian-high-gain-high-precision-gnss-antenna-provide-stability-and-reliability-gnss-signal-for-positioning-applications-bt-800s?_pos=1&_sid=bcd57f6d3&_ss=r&variant=44374047490335)|~€100|

### Assembly

First, perform an initial setup without the enclosure:

* Mount the antenna on its support
* Connect the antenna cable to the GNSS receiver
* Connect the USB cable between the GNSS receiver and the Raspberry Pi / Orange Pi
* Connect the [RJ45 Ethernet cable](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) to your network (internet router, powerline adapter, RJ45 wall socket)
* Prepare the [power supply](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51) but do **not power it on yet**.

### Finally

* Take the [16GB Micro SD](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) and proceed to the next step: [Software installation](../../software/installation.md)
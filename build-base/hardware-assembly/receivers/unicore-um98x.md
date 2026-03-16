---
prev:
  text: "Hardware & Assembly"
  link: "/build-base/hardware-assembly"
next:
  text: "Software installation"
  link: "/build-base/software/installation"
---
# Build a base station using Unicore UM98x receiver

## Bill of materials

Here is the list of items needed to set up a full-frequency **GNSS base** using the [Unicore UM980](https://en.unicore.com/products/surveying-grade-gnss-um980/):

<img src="/assets/images/build-base/receivers/um98x/um980.avif" width="200">

| Hardware                                                                                                                                                                                                                                                                                                                                                     | Price (excl. VAT) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| [simpleRTK3B Budget](https://www.ardusimple.com/product/simplertk3b-budget/) or [UM980 RTK GNSS receiver](https://gnss.store/unicore-gnss-modules/248-elt0223.html)                                                                                                                                                                                          | ~200€             |
| [BT-800S](https://store.beitian.com/products/beitian-high-gain-high-precision-gnss-antenna-provide-stability-and-reliability-gnss-signal-for-positioning-applications-bt-800s?_pos=1&_sid=bcd57f6d3&_ss=r&variant=44374047490335) or [Budget Survey Tripleband GNSS Antenna](https://www.ardusimple.com/product/budget-survey-tripleband-gnss-antenna-ip66/) | ~100€             |

---

### Firmware Update

To update the firmware, first download the software [UPrecise](https://github.com/sparkfun/SparkFun_RTK_Torch/blob/main/UM980_Firmware/uprecise-v2-0.exe) (**Windows only**).

Also download the latest version of the [firmware](https://github.com/sparkfun/SparkFun_RTK_Torch/tree/main/UM980_Firmware).

* Open **UPrecise**, then wait for the board to be detected after connecting it to the PC.
* Click **Receiver upgrade** in the vertical menu on the left.

![uprecise](/assets/images/build-base/receivers/um98x/uprecise-upgrade-rcvr.avif)

* A new window will open.
* Choose the firmware file (`.pkg`) by clicking **Select upgrade file**.
* Select **Soft reset**, then start the update.

![uprecise](/assets/images/build-base/receivers/um98x/uprecise-upgrade.avif)

* The process may take some time; follow the progress bar.

---

### Assembly

First perform an initial setup **without the enclosure**:

* Mount the antenna on its support.
* Connect the antenna cable to the GNSS receiver.
* Connect the USB cable between the GNSS receiver and the **Raspberry Pi / Orange Pi**.
* Connect the [RJ45 Ethernet cable](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) to your network (internet router, powerline adapter, RJ45 wall socket).
* Prepare the [power supply](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51), but **do not power it on yet**.

---

### Finally

* Take the [16GB Micro SD card](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) and move on to the next step: **[Software installation](../../software/installation.md)**.

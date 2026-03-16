---
prev:
  text: "Hardware & Assembly"
  link: "/build-base/hardware-assembly"
next:
  text: "Software installation"
  link: "/build-base/software/installation"
---
# **THIS GNSS RECEIVER IS OBSOLETE AND NOT ACCEPTED ANYMORE!!**

**Since the arrival of full-frequency GNSS receivers at a very similar price, this dual-frequency solution is no longer relevant.**

**Do not buy the hardware below!!**

### List

Here is the list of elements required to set up a dual-frequency GNSS base using the [Ublox F9p](https://www.u-blox.com/en/product/zed-f9p-module) module:  
<img src="/assets/images/build-base/receivers/zed-f9p/ZED-F9P-top-bottom.avif" width="200">

|Hardware|Price (excl. tax)|
|--------|----|
|[F9P drotek: 5% discount code CENTIPEDERTK](https://store-drotek.com/891-rtk-zed-f9p-gnss.html) or [F9P ardusimple](https://www.ardusimple.com/product/simplertk2b/)|180€|
|[D910 antenna](https://store.drotek.com/da-910-multiband-gnss-antenna) or [survey](https://www.ardusimple.com/product/survey-gnss-multiband-antenna/), not the ublox ANN-MB!!!|100€|

### Assembly

![component](/assets/images/build-base/receivers/zed-f9p/zed-f9p-base-bom.avif)

First, perform an initial assembly without the enclosure:

   * Assemble the [DA910](https://store.drotek.com/da-910-multiband-gnss-antenna) antenna on its mount  
   * Connect the antenna cable to the [F9P](https://store-drotek.com/891-rtk-zed-f9p-gnss.html) receiver  
   * Connect the USB cable between the [F9P](https://store.drotek.com/rtk-zed-f9p-gnss) and the [Raspberry Pi 3/4](https://www.kubii.fr/les-cartes-raspberry-pi/2119-raspberry-pi-3-modele-b-1-gb-kubii-713179640259.html)  
   * Connect the [RJ45 ethernet cable](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) to your network (internet router, powerline adapter, RJ45 wall socket) and to the [Raspberry Pi 3/4](https://www.kubii.fr/les-cartes-raspberry-pi/2119-raspberry-pi-3-modele-b-1-gb-kubii-713179640259.html)  
   * Prepare the [power supply](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51) but **do not power it on yet**.

### Update the firmware of your GNSS F9P module

First, you must update the [firmware](https://fr.wikipedia.org/wiki/Firmware) of your GNSS F9P module:

   * [Install U-center](https://www.u-blox.com/en/product/u-center) (Windows only). Be careful **not to install U-Center 2**, but **U-Center**:  
   ![u-center](/assets/images/build-base/receivers/zed-f9p/u_center_1_on_u-blox_website.avif)

   If U-Center refuses to start with an error such as **"MSVCR120.dll not found"**, install this package: [vc_redist 2013 x64](https://download.microsoft.com/download/f/e/c/fece8bbd-3379-4db1-8006-b8f47783b2cb/vcredist_x86.exe).

   * Update the F9P firmware:
     * [Download the latest firmware update file](https://www.u-blox.com/en/product/zed-f9p-module?file_category=Firmware%2520Update). As of 2026-03-15, the version is [1.51](https://content.u-blox.com/sites/default/files/2024-11/UBX_F9_100_HPG151_ZED_F9P.6c43b30ccfed539322eccedfb96ad933.bin)
     * Connect the F9P receiver to your PC via USB
     * Open u-center
     * Connect the receiver (button at the top left) to the correct COM port  

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-com.avif)

   * Verify that the receiver is correctly connected  

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-com2.avif)

   * Click **Tools** > **Firmware update...**
       * Select the previously downloaded `.bin` file in **Firmware image**
       * Check **Use this baudrate for update** and select **9600**
       * Uncheck the other four options (Enter safeboot, ...)

   * Click **GO** (bottom left of the window)

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-fw-upd.avif)

   * Wait for the update procedure to finish

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-fw-upd2.avif)

### Finally

   * Take the [Micro SD 16GB](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) and proceed to the next step: [Software installation](../../software/installation.md)
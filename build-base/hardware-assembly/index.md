---
prev: false
next:
  text: "Select a base GNSS receiver"
  link: "/build-base/hardware-assembly/select-receiver"
---

# Hardware & Assembly

We will use the open-source software [RTKBase](https://github.com/Stefal/rtkbase) to build a homemade GNSS base. These bases are also available as kits or preassembled on [rtkbase.eu](https://rtkbase.eu). This website is managed by the developer of RTKBase.

This step should help you anticipate which hardware to purchase depending on the installation area of the RTK antenna and your possibilities for connecting to an Internet network to broadcast the corrections produced. At the end of the page you can choose between different GNSS receivers.

### Assembly (excluding the GNSS receiver)

|Material|Price* (excl. tax)|
|--------|----|
|[Orange Pi Zero LTS](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-Zero-LTS.html)|€44|
|[Micro SD 32GB](https://fr.rs-online.com/web/p/cartes-sd/1873617)|€23|
|[Power supply](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51)|€10|
|[Heat sink](https://www.kubii.fr/composants-raspberry-pi/1676-heat-sink-aluminium-pour-raspberry-pi-3-kubii-3272496005099.html)|€1|
|[USB to micro USB cable](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-USB/Cordon-USB-vers-micro-USB.html)|€2.5|
|[SMA male to TNC male antenna cable 3m (length to be adapted)](https://www.mhzshop.com/shop/Cables-et-cordons/Sur-mesure/50-ohms-WiFi-4G/Cordon-sur-mesure-en-coax-faible-perte-WLL-240-2-4-5-GHz-6-1mm.html)|€19|
|[Ethernet RJ45 cable (length to be adapted)](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/)|€6|
|[JE-200 waterproof box](https://www.mhzshop.com/shop/Accessoires-MHz/Boites-etanches/Boite-etanche-avec-fixation-mat-203x203x65mm-GentleBOX-JE-200.html)|€16|

**Prices are indicative and may vary depending on the time and location.*

If there is no mains outlet near the base station, and/or to simplify the installation, it is possible to use [PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet) to power the base station through the Ethernet cable:

![POE base diagram](/assets/images/build-base/schema_POE.avif)

[POE Injector Model](https://www.trendnet.com/langfr/products/poe-splitters-injectors-extenders/tpe-115GI-v2.1) and [POE Splitter Model](https://www.trendnet.com/langfr/products/PoE/Gigabit-PoE-Splitter-TPE-104GS-v2)

![POE](/assets/images/build-base/base_f9p_raspberry_pi.avif)
<p align="center"><sup><i>picture from Stéphane Péneau (rtkbase.eu)</i></sup></p>

[RTKbase Assembly VIDEO](https://rtkbase.eu/assemblage_base_gnss_brut.mp4)

### Choosing the GNSS receiver
Now let's move on to choosing the GNSS receiver and configuring it

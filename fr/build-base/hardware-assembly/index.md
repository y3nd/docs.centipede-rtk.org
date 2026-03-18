---
prev: false
next:
  text: "Sélection d'un récepteur"
  link: "/fr/build-base/hardware-assembly/select-receiver"
---

# Matériel et assemblage

Nous utiliserons le logiciel open source [RTKBase](https://github.com/Stefal/rtkbase) pour construire une base GNSS maison. Ces bases sont aussi disponibles en kits ou déjà assemblées sur [rtkbase.eu](https://rtkbase.eu). Ce site est géré par le développeur de RTKBase.

Cette étape doit vous aider à anticiper le matériel à acheter selon la zone d'installation de l'antenne RTK et vos possibilités de connexion à un réseau Internet pour diffuser les corrections produites. En bas de page, vous pourrez choisir entre différents récepteurs GNSS, à double fréquence et à triple fréquence.

### Assemblage (hors récepteur GNSS)

|Matériel|Prix (HT)|
|--------|----|
|[Orange Pi Zero LTS](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-Zero-LTS.html)|44 €|
|[Micro SD 32 Go](https://fr.rs-online.com/web/p/cartes-sd/1873617)|23 €|
|[Alimentation](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51)|10 €|
|[Radiateur](https://www.kubii.fr/composants-raspberry-pi/1676-heat-sink-aluminium-pour-raspberry-pi-3-kubii-3272496005099.html)|1 €|
|[Câble USB vers micro USB](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-USB/Cordon-USB-vers-micro-USB.html)|2,5 €|
|[Câble d'antenne SMA mâle vers TNC mâle 3 m (longueur à adapter)](https://www.mhzshop.com/shop/Cables-et-cordons/Sur-mesure/50-ohms-WiFi-4G/Cordon-sur-mesure-en-coax-faible-perte-WLL-240-2-4-5-GHz-6-1mm.html)|19 €|
|[Câble Ethernet RJ45 (longueur à adapter)](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/)|6 €|
|[Boîtier étanche JE-200](https://www.mhzshop.com/shop/Accessoires-MHz/Boites-etanches/Boite-etanche-avec-fixation-mat-203x203x65mm-GentleBOX-JE-200.html)|16 €|

S'il n'y a pas de prise 230 V près de la base, et/ou pour simplifier l'installation, il est possible d'utiliser [le PoE](https://en.wikipedia.org/wiki/Power_over_Ethernet) pour alimenter la base via le câble Ethernet :

![POE base diagram](/assets/images/build-base/schema_POE.avif)

[Modèle d'injecteur POE](https://www.trendnet.com/langfr/products/poe-splitters-injectors-extenders/tpe-115GI-v2.1) et [modèle de splitter POE](https://www.trendnet.com/langfr/products/PoE/Gigabit-PoE-Splitter-TPE-104GS-v2)

![POE](/assets/images/build-base/base_f9p_raspberry_pi.avif)
<p align="center"><sup><i>photo de Stéphane Péneau (rtkbase.eu)</i></sup></p>

[VIDÉO d'assemblage RTKbase](https://rtkbase.eu/assemblage_base_gnss_brut.mp4)

### Choisir le récepteur GNSS
Passons maintenant au choix du récepteur GNSS et à sa configuration

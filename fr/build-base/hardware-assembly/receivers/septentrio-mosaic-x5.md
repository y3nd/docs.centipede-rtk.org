---
prev:
  text: "Matériel et assemblage"
  link: "/fr/build-base/hardware-assembly"
next:
  text: "Installation logicielle"
  link: "/fr/build-base/software/installation"
---
# Construire une station de base avec un récepteur Septentrio Mosaic X5

## Liste du matériel

Voici la liste des composants nécessaires pour mettre en place une base GNSS triple fréquence à l'aide du [Septentrio Mosaic X5](https://www.septentrio.com/en/products/gnss-receivers/gnss-receiver-modules/mosaic-x5) :

<img src="/assets/images/build-base/receivers/mosaic-x5/mosaic-X5_650x650.avif" width="200">

|Matériel|Prix (HT)|
|--------|----|
| [simpleRTK3B Pro](https://www.ardusimple.com/product/simplertk3b-x5/) ou [Linnet Mosaic-X5](https://www.systork.io/en/product/linnet-mosaic-x5/) |~550 €|
|[Antenne GNSS Budget Survey Tripleband](https://www.ardusimple.com/product/budget-survey-tripleband-gnss-antenna-ip66/) ou [BT-800S](https://store.beitian.com/products/beitian-high-gain-high-precision-gnss-antenna-provide-stability-and-reliability-gnss-signal-for-positioning-applications-bt-800s?_pos=1&_sid=bcd57f6d3&_ss=r&variant=44374047490335)|~100 €|

### Assemblage

Commencez par une configuration initiale sans le boîtier :

* Montez l'antenne sur son support
* Connectez le câble d'antenne au récepteur GNSS
* Connectez le câble USB entre le récepteur GNSS et le Raspberry Pi / Orange Pi
* Connectez le [câble Ethernet RJ45](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) à votre réseau (routeur Internet, adaptateur CPL, prise murale RJ45)
* Préparez l'[alimentation](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51) mais **ne l'allumez pas encore**.

### Pour finir

* Prenez la [Micro SD 16 Go](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) et passez à l'étape suivante : [Installation logicielle](../../software/installation.md)

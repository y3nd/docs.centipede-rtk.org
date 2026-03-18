---
prev:
  text: "Matériel et assemblage"
  link: "/fr/build-base/hardware-assembly"
next:
  text: "Installation logicielle"
  link: "/fr/build-base/software/installation"
---
# Construire une station de base avec un récepteur Unicore UM98x

## Liste du matériel

Voici la liste des éléments nécessaires pour mettre en place une **base GNSS** full-frequency à l'aide du [Unicore UM980/UM982](https://en.unicore.com/products/surveying-grade-gnss-um980/) :

<img src="/assets/images/build-base/receivers/um98x/um980.avif" width="200">

| Matériel | Prix (HT) |
| --- | --- |
| [simpleRTK3B Budget](https://www.ardusimple.com/product/simplertk3b-budget/) ou [récepteur GNSS UM980 RTK](https://gnss.store/unicore-gnss-modules/248-elt0223.html) | ~200 € |
| [BT-800S](https://store.beitian.com/products/beitian-high-gain-high-precision-gnss-antenna-provide-stability-and-reliability-gnss-signal-for-positioning-applications-bt-800s?_pos=1&_sid=bcd57f6d3&_ss=r&variant=44374047490335) ou [Antenne GNSS Budget Survey Tripleband](https://www.ardusimple.com/product/budget-survey-tripleband-gnss-antenna-ip66/) | ~100 € |

---

### Mise à jour du firmware

Pour mettre à jour le firmware, téléchargez d'abord le logiciel [UPrecise](https://github.com/sparkfun/SparkFun_RTK_Torch/blob/main/UM980_Firmware/uprecise-v2-0.exe) (**Windows uniquement**).

Téléchargez aussi la dernière version du [firmware](https://github.com/sparkfun/SparkFun_RTK_Torch/tree/main/UM980_Firmware).

* Ouvrez **UPrecise**, puis attendez que la carte soit détectée après l'avoir connectée au PC.
* Cliquez sur **Receiver upgrade** dans le menu vertical à gauche.

![uprecise](/assets/images/build-base/receivers/um98x/uprecise-upgrade-rcvr.avif)

* Une nouvelle fenêtre s'ouvre.
* Choisissez le fichier de firmware (`.pkg`) en cliquant sur **Select upgrade file**.
* Sélectionnez **Soft reset**, puis lancez la mise à jour.

![uprecise](/assets/images/build-base/receivers/um98x/uprecise-upgrade.avif)

* Le processus peut prendre un certain temps ; suivez la barre de progression.

---

### Assemblage

Commencez par une installation initiale **sans le boîtier** :

* Montez l'antenne sur son support.
* Connectez le câble d'antenne au récepteur GNSS.
* Connectez le câble USB entre le récepteur GNSS et le **Raspberry Pi / Orange Pi**.
* Connectez le [câble Ethernet RJ45](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) à votre réseau (routeur Internet, adaptateur CPL, prise murale RJ45).
* Préparez l'[alimentation](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51), mais **ne l'allumez pas encore**.

---

### Pour finir

* Prenez la [carte Micro SD 16 Go](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) et passez à l'étape suivante : **[Installation logicielle](../../software/installation.md)**.

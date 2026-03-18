---
prev:
  text: "Matériel et assemblage"
  link: "/fr/build-base/hardware-assembly"
next:
  text: "Installation logicielle"
  link: "/fr/build-base/software/installation"
---
# **CE RÉCEPTEUR GNSS EST OBSOLÈTE ET N'EST PLUS ACCEPTÉ !!**

**Depuis l'arrivée de récepteurs GNSS full-frequency à un prix très proche, cette solution double fréquence n'est plus pertinente.**

**N'achetez pas le matériel ci-dessous !!**

### Liste

Voici la liste des éléments nécessaires pour mettre en place une base GNSS double fréquence à l'aide du module [Ublox F9p](https://www.u-blox.com/en/product/zed-f9p-module) :  
<img src="/assets/images/build-base/receivers/zed-f9p/ZED-F9P-top-bottom.avif" width="200">

|Matériel|Prix (HT)|
|--------|----|
|[F9P drotek : code promo 5 % CENTIPEDERTK](https://store-drotek.com/891-rtk-zed-f9p-gnss.html) ou [F9P ardusimple](https://www.ardusimple.com/product/simplertk2b/)|180 €|
|[Antenne D910](https://store.drotek.com/da-910-multiband-gnss-antenna) ou [survey](https://www.ardusimple.com/product/survey-gnss-multiband-antenna/), pas l'ublox ANN-MB !!!|100 €|

### Assemblage

![component](/assets/images/build-base/receivers/zed-f9p/zed-f9p-base-bom.avif)

Commencez par un assemblage initial sans le boîtier :

   * Assemblez l'antenne [DA910](https://store.drotek.com/da-910-multiband-gnss-antenna) sur son support  
   * Connectez le câble d'antenne au récepteur [F9P](https://store-drotek.com/891-rtk-zed-f9p-gnss.html)  
   * Connectez le câble USB entre le [F9P](https://store.drotek.com/rtk-zed-f9p-gnss) et le [Raspberry Pi 3/4](https://www.kubii.fr/les-cartes-raspberry-pi/2119-raspberry-pi-3-modele-b-1-gb-kubii-713179640259.html)  
   * Connectez le [câble Ethernet RJ45](https://www.mhzshop.com/shop/Cables-et-cordons/Cordons-reseau/) à votre réseau (routeur Internet, adaptateur CPL, prise murale RJ45) et au [Raspberry Pi 3/4](https://www.kubii.fr/les-cartes-raspberry-pi/2119-raspberry-pi-3-modele-b-1-gb-kubii-713179640259.html)  
   * Préparez l'[alimentation](https://www.kubii.fr/les-officiels-raspberry-pi-kubii/2593-alimentation-officielle-raspberry-pi-3-eu-micro-usb-51v-25a-kubii-3272496297586.html?search_query=SC0136&results=51) mais **ne l'allumez pas encore**.

### Mettre à jour le firmware de votre module GNSS F9P

Vous devez d'abord mettre à jour le [firmware](https://fr.wikipedia.org/wiki/Firmware) de votre module GNSS F9P :

   * [Installez U-center](https://www.u-blox.com/en/product/u-center) (Windows uniquement). Attention à **ne pas installer U-Center 2**, mais **U-Center** :  
   ![u-center](/assets/images/build-base/receivers/zed-f9p/u_center_1_on_u-blox_website.avif)

   Si U-Center refuse de démarrer avec une erreur du type **"MSVCR120.dll not found"**, installez ce paquet : [vc_redist 2013 x64](https://download.microsoft.com/download/f/e/c/fece8bbd-3379-4db1-8006-b8f47783b2cb/vcredist_x86.exe).

   * Mettez à jour le firmware du F9P :
     * [Téléchargez le dernier fichier de mise à jour du firmware](https://www.u-blox.com/en/product/zed-f9p-module?file_category=Firmware%2520Update). Au 2026-03-15, la version est [1.51](https://content.u-blox.com/sites/default/files/2024-11/UBX_F9_100_HPG151_ZED_F9P.6c43b30ccfed539322eccedfb96ad933.bin)
     * Connectez le récepteur F9P à votre PC via USB
     * Ouvrez u-center
     * Connectez le récepteur (bouton en haut à gauche) au bon port COM  

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-com.avif)

   * Vérifiez que le récepteur est correctement connecté  

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-com2.avif)

   * Cliquez sur **Tools** > **Firmware update...**
       * Sélectionnez le fichier `.bin` téléchargé précédemment dans **Firmware image**
       * Cochez **Use this baudrate for update** et sélectionnez **9600**
       * Décochez les quatre autres options (Enter safeboot, ...)

   * Cliquez sur **GO** (en bas à gauche de la fenêtre)

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-fw-upd.avif)

   * Attendez la fin de la procédure de mise à jour

   ![firmware](/assets/images/build-base/receivers/zed-f9p/u-center-fw-upd2.avif)

### Pour finir

   * Prenez la [Micro SD 16 Go](https://www.kubii.fr/carte-sd-et-stockage/2359-carte-microsd-16go-classe-10-u1-sandisk-kubii-619659161347.html) et passez à l'étape suivante : [Installation logicielle](../../software/installation.md)

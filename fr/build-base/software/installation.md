# Installation logicielle

### 1. Télécharger l'image pour Raspberry Pi / Orange Pi

Téléchargez depuis votre ordinateur l'image RTKBase correspondant à votre carte :
 - Orange Pi Zero : [BaseGNSS_2.7.0_Opi-Zero](https://github.com/Stefal/build/releases/download/2.7.0_25.11/Armbian-unofficial_25.11.1_RTKBase_2.7.0_Orangepizero_trixie_current_6.12.58_minimal.zip)
 - Orange Pi Zero 2 : [BaseGNSS_2.7.0_Opi-Zero2](https://github.com/Stefal/build/releases/download/2.7.0_25.11/Armbian-unofficial_25.11.1_RTKBase_2.7.0_Orangepizero2_trixie_current_6.12.58_minimal.zip)
 - Orange Pi Zero 3 : [BaseGNSS_2.7.0_Opi-Zero3](https://github.com/Stefal/build/releases/download/2.7.0_25.11/Armbian-unofficial_25.11.1_RTKBase_2.7.0_Orangepizero3_trixie_current_6.12.58_minimal.zip)
 - Raspberry Pi 64b : [BaseGNSS_2.7.0_Raspberry_Pi](https://github.com/Stefal/build/releases/download/2.7.0_25.11/Armbian-unofficial_25.11.1_RTKBase_2.7.0_Rpi4b_trixie_current_6.12.58_minimal.zip)

**Avertissement :** ne copiez pas directement l'image `Base_GNSS_X.X.X.zip` sur la carte micro SD !!!

### 2. Télécharger et installer ETCHER

Téléchargez et installez BalenaEtcher sur votre ordinateur (Windows, Linux, Mac). Ce programme vous permettra d'installer correctement l'image BaseGNSS téléchargée sur la carte micro SD : <https://www.balena.io/etcher>. Si vous utilisez Windows, vous pouvez choisir la version portable :

  ![Etcher Website](/assets/images/build-base/software/installation/balena_etcher_website.avif)

### 3. Insérer la carte Micro SD dans l'ordinateur

   ![SD](/assets/images/build-base/software/installation/sd-adapter.avif)

### 4. Flasher la carte SD avec l'image

Lancez BalenaEtcher, sélectionnez l'image téléchargée, la carte SD (normalement déjà sélectionnée), puis flashez la carte :

   ![etcher](/assets/images/build-base/software/installation/etcher.avif)

### 5. Retirer la carte SD du PC

Vous pouvez maintenant retirer la carte SD du PC et l'insérer dans le Raspberry Pi.

----

### 6. Assemblage et premier démarrage

1. Connectez un câble Ethernet à votre réseau afin que votre base puisse envoyer ses données au caster Centipede-RTK.
2. Connectez le récepteur GNSS à la carte Raspberry Pi / Orange Pi ou à une autre carte.
3. Insérez la carte micro SD dans le Raspberry Pi / Orange Pi et mettez-le sous tension.

    > Selon le modèle de carte, il peut être possible de connecter un écran HDMI pour visualiser le processus d'installation.

4. Les LED verte et/ou rouge de la carte Raspberry Pi / Orange Pi s'allument et/ou clignotent pendant ce premier démarrage (démarrage des services). (~ 5 min ou plus).

5. Sur un PC connecté au même réseau, ouvrez un navigateur web et accédez à l'interface de la base RTK via l'URL : **<http://basegnss.local>** ou en utilisant l'adresse IP du Raspberry Pi si vous êtes sur un réseau.

> Mot de passe : `admin`

Si vous ne voyez pas de position ou de barres sur le graphique, cela signifie que l'initialisation de votre module GNSS ne s'est pas terminée correctement. Il est recommandé de vérifier les connexions, de reflasher la carte SD et de recommencer l'installation.

Passez ensuite à la [Configuration](./configuration)

#### Connexion SSH pour les développeurs ou le débogage

* utilisateur : `ssh basegnss@basegnss.local`
* mot de passe : `basegnss!`

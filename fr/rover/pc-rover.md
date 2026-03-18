# Rover RTK avec application PC (RTKLIB)

## Prérequis

### Matériel

* Une tablette ou un PC sous Windows 10 ou Linux
* Une antenne GNSS à double fréquence
* Un récepteur u-blox ZED-F9P-0xB

### Logiciel

* La dernière version du logiciel [RTKLIB-ex](https://github.com/rtklibexplorer/RTKLIB/releases) > Calcul de position dans [RTK](https://en.wikipedia.org/wiki/Real-time_kinematic_positioning) à l'aide de [RTKLIB](http://www.rtklib.com/) pour une géolocalisation centimétrique.

## Connexion et configuration

### Connexion de l'antenne GNSS

* Connectez l'antenne + le récepteur ZED-F9P via USB.

* Ouvrez ensuite le [Gestionnaire de périphériques](https://support.microsoft.com/en-us/help/4026149/windows-open-device-manager) et vérifiez le port COM créé sous Windows ou le point de montage `/dev/ttyXXX` sous Linux.

### RTKLIB

> RTKLIB convertit le signal de positionnement de l'antenne GNSS à l'aide d'une correction RTCM3 (réseau Centipede-RTK par exemple) en un signal de géolocalisation précis au centimètre lorsque les conditions le permettent.

* Téléchargez la dernière version de [RTKLIB version Rtkexplorer demo5](http://rtkexplorer.com/downloads/rtklib-code/).
* Extrayez-la dans le dossier de votre choix.
* Ouvrez **RTKNavi**.

![RTKnavi](/assets/images/pc-rover/3.avif)

* Téléchargez ce [fichier de configuration](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/RTKLIB_windows.conf).
* Cliquez sur **option ...**
* Cliquez sur **LOAD** et sélectionnez le [fichier téléchargé précédemment](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/RTKLIB_windows.conf), puis cliquez sur **OK**.

> Cela configure automatiquement plusieurs paramètres RTKLIB.

![RTKnavi](/assets/images/pc-rover/a2.avif)

* Cliquez sur l'icône **I** en haut à droite.
* Cliquez sur **ROVER** > **Opt**.

![RTKnavi](/assets/images/pc-rover/4.avif)

* Modifiez le port **COM7** (entrée USB de l'antenne GNSS) si nécessaire selon votre configuration.
* Téléchargez ce [fichier de configuration](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/ZED-F9P.cmd).
* Cliquez sur **ROVER** > **Cmd**.

![RTKnavi](/assets/images/pc-rover/a1.avif)

* Cliquez sur **LOAD** et sélectionnez le [fichier téléchargé précédemment](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/ZED-F9P.cmd).
* Cochez **Commands at startup**.

> Cela charge les paramètres injectés dans le module ZED-F9P à chaque démarrage.

* Cliquez sur **Base Station** > **Opt**.
* Modifiez le **Mountpoint** pour la station [Centipede](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) la plus proche de votre emplacement.

![RTKnavi](/assets/images/pc-rover/5.avif)

* Cliquez sur l'icône **O** en haut à droite.
* Cliquez sur **Solution** > **Option**.
* Modifiez le port **COM9** (sortie NMEA de RTKLIB) si nécessaire selon votre configuration.

![RTKnavi](/assets/images/pc-rover/6.avif)

* Cliquez sur **EXIT** puis rouvrez **RTKNavi** pour enregistrer les paramètres.

### Premier démarrage

* Cliquez sur **Start** et attendez (de 30 secondes à plusieurs minutes) une position **FIX RTK**.

> L'antenne de réception doit bien sûr être placée à l'extérieur dans un environnement dégagé.

![RTKnavi](/assets/images/pc-rover/9.avif)

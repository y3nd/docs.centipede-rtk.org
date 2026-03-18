# Définir les coordonnées de la base dans rtkbase

* Revenez sur votre interface **http://basegnss.local** ou sur l'adresse IP de votre Raspberry Pi.
* Allez dans l'onglet <span style="color:#007BFF">**SETTINGS**</span> > **Main Service** > **Base Coordinates** et remplacez la position par celle calculée précédemment. Exemple : **```47.0600276632 -1.3504949994 84.9147```** <br>
Attention à utiliser les coordonnées **RGF93** affichées en bas du texte, et non les coordonnées ITRF2014 ou ETRS89 affichées au-dessus.
![base gnss](/assets/images/build-base/configure-position/base_coordinates.avif)

Une fois ce paramètre enregistré en cliquant sur le bouton **Save**, la position exacte sera représentée par la cible visible sur la carte (onglet <span style="color:#007BFF">**STATUS**</span>).

![base gnss](/assets/images/build-base/configure-position/basegnss_coord_check.avif)

Si vous constatez que la position de la cible est complètement incorrecte, vérifiez que vous n'avez pas inversé la latitude et la longitude, ou laissé un « - » devant l'une des coordonnées. Un écart de quelques mètres entre les deux positions est normal.

* Vérifiez que vous avez activé le **Ntrip service** et que ses options sont correctement configurées. Si vous modifiez un paramètre, n'oubliez pas de cliquer sur **Save**.
![base gnss](/assets/images/build-base/configure-position/basegnss_position.avif)

* Vous pouvez maintenant désactiver le **File service**, sauf si vous en avez besoin pour le post-traitement.

* C'est aussi un bon moment pour créer une sauvegarde des paramètres de votre base afin de pouvoir les restaurer facilement en cas de réinitialisation. Pour cela, en bas de l'onglet <span style="color:#007BFF">**SETTINGS**</span>, cliquez sur le bouton **Backup**, puis conservez le fichier téléchargé.
![base gnss](/assets/images/build-base/configure-position/rtkbase_backup_settings.avif)

* Presque terminé : [déclarez maintenant votre base sur le réseau Centipede-RTK](./declaration.md)

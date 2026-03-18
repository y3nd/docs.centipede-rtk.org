# Mise à jour de RTKBase

De temps en temps, des mises à jour de RTKBase sont publiées, apportant des améliorations, de nouvelles fonctionnalités ou des corrections de bogues. Dans la plupart des cas, il suffit d'aller dans l'onglet <span style="color:#007BFF">**SETTINGS**</span>, de cliquer sur le bouton **Check Update**, puis de confirmer la mise à jour si elle est disponible.

![base gnss](/assets/images/build-base/update/update_1.avif)

Si vous n'avez pas effectué de mise à jour depuis longtemps, il peut être nécessaire de répéter cette procédure plusieurs fois pour rattraper toutes les mises à jour en attente.

## Si la mise à jour est refusée (votre système d'exploitation est trop ancien)

Pas de panique !  
Ce message signifie que le système d'exploitation qui fait tourner RTKBase est trop ancien et doit lui aussi être mis à jour. La méthode la plus simple consiste à :

* Sauvegarder les paramètres de votre base avec le bouton **Backup**, puis l'éteindre en cliquant sur **Shutdown**.
* Retirer la carte microSD de la base.
* Suivre les étapes 2 à 6 de la page [Installation](./installation).
* Restaurer vos paramètres avec le bouton **Restore** en sélectionnant le fichier de sauvegarde créé précédemment.

![base gnss](/assets/images/build-base/update/backup_restore_1.avif)

Réactivez les services dont vous avez besoin, généralement **Main service** et **Ntrip A service**.

Et voilà ! Votre base fonctionne maintenant avec la dernière version de RTKBase ainsi qu'avec la version la plus récente du système d'exploitation.

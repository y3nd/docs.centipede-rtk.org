# Déclaration sur le réseau Centipede-RTK

Enfin, envoyez un e-mail à [**contact@centipede.fr**](mailto:contact@centipede.fr) pour activer votre base sur la [carte](https://centipede.fr) :

* Prénom Nom
* Profession
* E-mail
* Nom du mountpoint de votre base GNSS RTK (4 caractères en lettres MAJUSCULES et/ou chiffres). **Vérifiez que votre mountpoint n'est pas déjà utilisé en consultant** **[ce tableau](https://gf.centipede-rtk.org/d/ef4e1ohu7fgg0a/mount-point-list?orgId=7)**
* Matériel utilisé : modèle de l'antenne et du récepteur.
* Documents nécessaires pour vérifier la position de votre base :
  * Pour la FRANCE :
    * le rapport de calcul de positionnement envoyé par l'IGN (fichier `.tar.gz`)
    * votre fichier RINEX envoyé précédemment à l'IGN
  * En Europe géographique :
    * le fichier de position `.txt` produit par le système de conversion ETRF2000 : https://nrcan2etrf.centipede.fr/nrcan_itrf-ectt_etrf-epsg_io.html
    * votre fichier RINEX (`.obs`) envoyé précédemment au NRCAN
  * Hors de ces zones :
    * le rapport de calcul de positionnement envoyé par le NRCAN (`full_output.zip`)
    * une copie des valeurs du lien "summary" envoyé par le NRCAN
    * votre fichier RINEX envoyé précédemment au NRCAN
* Plusieurs photos (minimum 2) de l'installation de l'antenne (gros plan et vue d'ensemble).

Une fois votre base déclarée par un administrateur, elle apparaîtra sur la carte :

* D'abord en bleu 🔵 :
  * la base est pré-déclarée sur le caster mais en attente de vérification de son positionnement géographique.
  * elle n'est pas accessible dans la liste des bases mais peut être utilisée en saisissant manuellement le Mount Point.
* Puis en orange 🟠 :
  * la base est disponible dans la liste des mount points http://crtk.net:2101, elle est accessible et utilisable.
  * ses informations (type d'antenne, rapport de positionnement, etc.) sont en cours de vérification ; cela peut prendre plusieurs jours selon la disponibilité des validateurs.
* Enfin en vert 🟢 :
  * la base est accessible, validée et utilisable par la communauté.
  * l'état de la base (allumée 🟢, éteinte 🔴) est disponible sur la [carte](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) avec une mise à jour toutes les 30 secondes. Un e-mail automatique est envoyé au propriétaire si une coupure dure plus de 5 minutes.
  * les métadonnées de la base (rapport de positionnement, position, état, messages diffusés, journaux de déconnexion, etc.) sont disponibles en cliquant sur votre base sur la [carte](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede)
  * vous recevrez un e-mail de confirmation.

> Selon la disponibilité des administrateurs, le traitement de votre e-mail peut prendre plusieurs jours, mais votre base peut être utilisée immédiatement.

> Un test de bon fonctionnement est effectué toutes les 15 secondes sur l'ensemble du réseau. Si votre base RTK ne renvoie plus de signal au caster (coupure de courant, interruption réseau, problème matériel, etc.), un e-mail automatique vous sera envoyé pour vous prévenir du dysfonctionnement et la base apparaîtra en rouge sur la carte. Vous recevrez un autre e-mail lorsqu'elle se reconnectera au caster.

> Le nombre de connexions sur votre base peut être surveillé en temps réel sur la [carte](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) en cliquant sur votre base > Journaux de déconnexion. Les déconnexions de la base et les connexions des rovers sont affichées. L'équipe Centipede-RTK réalise des contrôles qualité constants sur le réseau, qui peuvent signaler des rovers toujours connectés ou des connexions de courte durée.

<figure class="map">
  <iframe src="https://centipede.fr/index.php/view/map/?repository=cent&project=centipede" width="100%" height="700" allowfullscreen="true"> </iframe>
</figure>

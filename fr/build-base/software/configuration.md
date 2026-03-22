# Configuration logicielle

<script setup>
import MountpointAvailabilityChecker from '../../../components/MountpointAvailabilityChecker.vue'
</script>

## Connexion
Pour accéder à la page web RTKBase, entrez l'adresse `http://basegnss.local` dans un navigateur web. Si cela ne fonctionne pas, vous pouvez utiliser l'application **Find_rtkbase**, qui tentera de détecter la base et vous permettra d'ouvrir son interface en cliquant sur le bouton **"Open"**. (nécessite RTKBase 2.6.3)

![Find_rtkbase screen](/assets/images/build-base/software/configuration/find_rtkbase_screenshot.avif)
- Télécharger Find_rtkbase [(Windows)](https://github.com/Stefal/rtkbase/raw/refs/heads/master/tools/find_rtkbase/dist/find_rtkbase.exe) [(Linux)](https://github.com/Stefal/rtkbase/raw/refs/heads/master/tools/find_rtkbase/dist/find_rtkbase)

Une autre solution consiste à saisir l'adresse IP de la base dans votre navigateur. Cette adresse IP peut être trouvée depuis l'interface de votre modem/routeur (Livebox, Freebox, etc.) ou avec des outils comme [Angry IP Scanner (Windows)](https://angryip.org/) ou [Port Authority (Android)](https://play.google.com/store/apps/details?id=com.aaronjwood.portauthority.free&pli=1).

<div style="display: flex; gap: 10px; align-items: center;">
  <a href="/assets/images/build-base/software/configuration/ip_livebox.avif">
    <img src="/assets/images/build-base/software/configuration/ip_livebox.avif" alt="livebox" style="height: 200px; object-fit: contain;">
  </a>

  <a href="/assets/images/build-base/software/configuration/ip_angry_ip_scanner.avif">
    <img src="/assets/images/build-base/software/configuration/ip_angry_ip_scanner.avif" alt="angry ip scanner" style="height: 200px; object-fit: contain;">
  </a>

  <a href="/assets/images/build-base/software/configuration/ip_port_authority.avif">
    <img src="/assets/images/build-base/software/configuration/ip_port_authority.avif" alt="port authority" style="height: 200px; object-fit: contain;">
  </a>
</div>

Dans les exemples ci-dessus, on voit que la base utilise l'IP **192.168.1.12** ; dans la barre d'adresse du navigateur, vous pouvez donc saisir `http://192.168.1.12`  
Vous remarquerez peut-être aussi que le suffixe `.local` de la base est devenu `.home`. Cela est dû à la Livebox ; cela peut être différent dans votre configuration.

Une fois sur la page de connexion, entrez simplement le mot de passe par défaut (`admin`). Il est recommandé de le changer ensuite.

## Configuration

Nous allons maintenant gérer la configuration initiale de la base.

RTKBase comporte trois onglets : <span style="color:#007BFF">**STATUS**</span>, <span style="color:#007BFF">**SETTINGS**</span> et <span style="color:#007BFF">**LOGS**</span>. Commencez par aller dans l'onglet <span style="color:#007BFF">**SETTINGS**</span> et activez **"Main Service"** s'il n'est pas déjà actif.

![Main Service active](/assets/images/build-base/software/configuration/rtkbase_main_service.avif) 

Ensuite, allez dans l'onglet <span style="color:#007BFF">**STATUS**</span> où vous devriez voir le niveau de réception des satellites. Après quelques secondes de calcul, la position approximative de la base apparaîtra, représentée par le marqueur bleu sur la carte, ainsi que les coordonnées enregistrées de la base, représentées par la cible noire :

![STATUS tab](/assets/images/build-base/software/configuration/rtkbase_status.avif)

Tout semble correct ? Si oui, retournez dans l'onglet <span style="color:#007BFF">**SETTINGS**</span> et cliquez sur le bouton `Options` du service **Ntrip A**. Le paramètre important est le nom de la base, que vous saisissez dans le champ **"mount name"**. Ce nom doit :
- être choisi par vous,
- comporter **au maximum 4 caractères en majuscules**,
- ne pas être déjà utilisé par une autre base,
- et éviter les noms de grandes villes (par exemple, **LYON** serait une mauvaise idée).

<MountpointAvailabilityChecker lang="fr" />

Les autres options du service **Ntrip A** doivent être :

* **Caster address** : valeur par défaut `crtk.net`
* **Caster port** : valeur par défaut `2101`
* **Caster password** : le mot de passe du caster Centipede-RTK est `centipede` (en minuscules, sans accents)

Cliquez sur **Save** et c'est terminé.

![Ntrip settings](/assets/images/build-base/software/configuration/rtkbase_ntrip_service.avif)

N'activez **pas** encore le service Ntrip, sinon vous commenceriez à envoyer des signaux de correction avec des coordonnées incorrectes.

En revanche, vous devez activer le **File Service** :

![File service active](/assets/images/build-base/software/configuration/rtkbase_file_service.avif)

Ce service enregistre le signal de base et crée une archive chaque jour à **04:00**. Pour effectuer le calcul précis, nous avons besoin d'une archive contenant **24 heures d'enregistrement de 00:00 à 23:59**. Donc si nous sommes mardi, il faudra attendre jeudi matin.

Passez ensuite au calcul du [positionnement de la base](../positioning/)

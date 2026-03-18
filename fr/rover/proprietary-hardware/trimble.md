# Utiliser Centipede-RTK sur du matériel Trimble

### [Trimble R4](https://www.trimble.com/support_trl.aspx?Nav=Collection-65944&pt=Trimble%20R4) et Trimble Juno

* Le message 1008 n'est pas requis sur la base.
* Ajoutez soit une carte SIM M2M déverrouillée, soit établissez une connexion Wi-Fi avec votre smartphone en mode partage de connexion. Dans notre cas, il n'a pas été possible d'utiliser la carte SIM M2M intégrée à l'antenne, car elle est verrouillée pour un fournisseur RTK payant.
* Type de relevé - votre type de relevé - options du rover : vous devez utiliser le format de diffusion **RTCM RTK**.

![trimbleR4](/assets/images/proprietary-hardware/trimble/trimble1.avif)

* Type de relevé - votre type de relevé - liaison de données mobile - cliquez sur la flèche à droite du contact GNSS - nouveau

![trimbleR4](/assets/images/proprietary-hardware/trimble/trimble2.avif)

![trimbleR4](/assets/images/proprietary-hardware/trimble/trimble3.avif)

---

### Trimble R2

Les récepteurs GPS TRIMBLE R2 sont compatibles avec le **système de correction Centipede-RTK** et utilisent des **corrections RTCM 3**.  
Le smartphone (connecté à l'antenne via Bluetooth) doit être relié à Internet via un **réseau 4G ou Wi-Fi**.

* Pour configurer **NTRIP**, ouvrez l'application **GNSS Status (Trimble)** et allez dans **"Real-Time Config"**.

![image](/assets/images/proprietary-hardware/trimble/ntripconfig1.avif)

* Appuyez ensuite sur **Edit** et définissez l'accès à Centipede.  
  Vous devrez choisir la base de référence dans **"NTRIP SOURCE"**, puis saisir les identifiants Centipede-RTK :  
  **Username:** centipede  
  **Password:** centipede  
  Cliquez enfin sur **"Save"** en haut.  
  *(Pensez à noter la configuration d'origine si vous souhaitez réaliser des tests comparatifs.)*

![image](/assets/images/proprietary-hardware/trimble/ntripconfig2.avif)

![image](/assets/images/proprietary-hardware/trimble/ntripconfig3.avif)

![image](/assets/images/proprietary-hardware/trimble/ntripconfig4.avif)

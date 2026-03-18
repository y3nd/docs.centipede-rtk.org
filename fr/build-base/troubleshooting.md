# Dépannage
## Les LED clignotent mais je ne peux pas me connecter à la base via basegnss.local ou l'adresse IP
  - Vérifiez que vous êtes sur le même réseau local que la base (connecté au même réseau Wi-Fi ou Ethernet).
  - Vérifiez que l'adresse IP de la base est correcte. Vous pouvez la vérifier sur votre routeur ou avec un outil de scan réseau.
  - Redémarrez la base en débranchant le câble d'alimentation puis en le rebranchant.
  - En dernier recours, reflashez la carte SD avec une nouvelle image de RTKBase.
  - Si vous avez une Orange Livebox 5 et une carte Orange Pi Zero, vous pouvez rencontrer un problème de compatibilité. Dans ce cas, vous pouvez essayer de connecter d'abord la base à un switch, puis le switch à la Livebox. Cela devrait résoudre le problème.
## La base est absente de la carte ou désactivée
  - Vérifiez que le nom de la base est disponible sur la carte.
  - La position configurée dans la base est peut-être incorrecte. Vérifiez qu'elle correspond bien à celle calculée à l'étape précédente et que vous n'avez pas inversé latitude et longitude ou saisi une mauvaise altitude.
  - Vérifiez que le service Ntrip est activé et correctement configuré.
  - Vérifiez que la base dispose d'une connexion Internet permettant d'atteindre crtk.net (vérifiez les paramètres réseau et essayez de pinguer crtk.net depuis la base).
## La base a un marqueur bleu sur la carte
  - La base n'est pas encore déclarée sur le réseau Centipede-RTK. Suivez les instructions de la page suivante pour la déclarer.
  - Attendez quelques jours pour que la base soit déclarée.
  - Notez que le mountpoint reste utilisable même si la base n'est pas encore déclarée.
## La base affiche peu ou pas de signaux sur les graphiques de la page d'accueil rtkbase
  - Le service principal doit être activé.
  - Le récepteur doit être connecté à l'antenne et à l'ordinateur.
  - Le récepteur doit être configuré correctement. Essayez « Detect and configure » dans les paramètres RTKBase.
  - Vérifiez que l'antenne, le câble et ses connecteurs ne sont pas endommagés ou corrodés. Les connecteurs doivent être propres et correctement serrés.

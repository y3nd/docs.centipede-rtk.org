# Mountpoint NEAR
- Le mountpoint `NEAR` fournit les corrections de la base la plus proche de votre position.
- Seules les bases déclarées, présentes dans la table des mountpoints du caster, sont prises en compte pour le mountpoint `NEAR`.
- Une hystérésis de 1 km est appliquée afin d'éviter des basculements fréquents entre les bases lorsque l'on se déplace.
- Le mountpoint `NEAR4` fournit les mêmes corrections que `NEAR`, mais avec une version compacte des messages RTCM3, ce qui réduit la consommation de données et améliore la stabilité de la connexion. Il est recommandé d'utiliser `NEAR4` dans la plupart des cas, car cela [ne réduit en rien la précision](#comparaison-de-la-résolution-des-mesures).

## NEAR4
- Sur le mountpoint `NEAR4`, les messages MSM7 du flux `NEAR` sont convertis en messages MSM4, ce qui supprime certaines informations telles que
  - les décimales des pseudodistances et des phases de porteuse, déjà sous le niveau de bruit des mesures (< 1 mm)
  - les décimales de l'intensité du signal (C/No), qui ne sont pas utiles pour le rover
  - les informations Doppler, utiles seulement pour des applications extrêmement spécifiques et non prises en charge par la plupart des rovers
- Le flux RTCM3 obtenu est plus petit que le flux MSM7 d'origine, ce qui réduit la consommation de données et peut améliorer la stabilité de la connexion

## Comparaison de la résolution des mesures
| Observable                  | Résolution MSM4                         | Résolution MSM7                          | Notes                                       |
| --------------------------- | --------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| **Fine Pseudorange**        | **1/1024 m ≈ 0,0009765625 m (0,98 mm)** | **1/16384 m ≈ 0,000061035 m (0,061 mm)** | MSM7 est 16× plus fin                       |
| **Fine Carrier Phase**      | **1/256 cycle ≈ 0,00390625 cycle**      | **1/4096 cycle ≈ 0,0002441406 cycle**    | MSM7 est 16× plus fin                       |
| **C/N0 (Carrier-to-Noise)** | **1 dB-Hz**                             | **0,0625 dB-Hz (1/16)**                  | MSM7 permet un reporting plus fin du signal |

### Phase de porteuse en unités de distance

La résolution de la phase de porteuse dépend de la longueur d'onde du signal. Par exemple, avec **GPS L1 (λ ≈ 0,19029367 m)** :

| Observable               | MSM4          | MSM7           |
| ------------------------ | ------------- | -------------- |
| Résolution de phase porteuse | ≈ **0,74 mm** | ≈ **0,046 mm** |

### Résumé des différences

* **MSM7 offre une précision 16× supérieure** à MSM4 pour la pseudodistance et la phase de porteuse.
* **La précision du C/N0 passe de 1 dB-Hz à 0,0625 dB-Hz**.

### Impact pratique

* Dans les récepteurs GNSS réels, le bruit brut de mesure est généralement :

  * **Code :** ~20 à 30 cm
  * **Phase de porteuse :** ~1 à 2 mm

### Conclusion
**MSM4 dépasse déjà le bruit du récepteur pour les mesures de code**


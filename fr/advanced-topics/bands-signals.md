# Bandes et signaux
Les récepteurs GNSS modernes haut de gamme peuvent suivre plusieurs bandes de fréquences, et chaque bande peut transporter plusieurs signaux. Plus un récepteur peut suivre de bandes et de signaux, meilleures seront ses performances en matière de précision et de fiabilité.

## Bandes

Les fabricants qualifient souvent leurs récepteurs GNSS de « dual-band », « triple-band », « quad-band » ou même « multi-band ». Ces termes peuvent toutefois être trompeurs, car ils ne précisent pas quelles bandes et quels signaux sont pris en charge. Par exemple, un récepteur « dual-band » peut prendre en charge les bandes L1 et L2, tandis qu'un autre récepteur « dual-band » peut prendre en charge les bandes L1 et L5. « Triple-band » correspond *généralement* à L1, L2 et L5, et « quad-band » correspond *généralement* à L1, L2, L5 et E6, également appelé L6. En outre, les signaux en bande L pour les services de correction par satellite peuvent aussi être inclus, ce qui rend le récepteur « full-band ».

## Signaux

Pour que le RTK fonctionne entre une base et un rover, ils doivent tous deux être capables de suivre les mêmes signaux. Par exemple, si la base ne suit que les signaux A et B, mais que le rover peut suivre les signaux A, B et C, alors le rover ne pourra utiliser que les signaux A et B pour les corrections RTK, ce qui peut entraîner une précision et une fiabilité moindres que dans un scénario où la base et le rover suivent les trois signaux.

La meilleure façon de déterminer exactement les bandes et signaux pris en charge est de consulter la documentation technique du récepteur, qui devrait fournir une liste détaillée des fréquences et des types de signaux que le récepteur peut suivre. Consultez aussi le plan des signaux s'il est disponible, car certaines combinaisons de signaux ne sont pas prises en charge.

Les noms des signaux sont standardisés par chaque système satellitaire, mais ils peuvent être déroutants car ils comportent souvent plusieurs noms et/ou des noms qui se recoupent.

- [Plan de signal GPS](https://gssc.esa.int/navipedia/index.php?title=GPS_Signal_Plan)
- [Plan de signal GLONASS](https://gssc.esa.int/navipedia/index.php?title=GLONASS_Signal_Plan)
- [Plan de signal Galileo](https://gssc.esa.int/navipedia/index.php?title=Galileo_Signal_Plan)
- [Plan de signal Beidou](https://gssc.esa.int/navipedia/index.php?title=Beidou_Signal_Plan)
- [Plan de signal QZSS](https://gssc.esa.int/navipedia/index.php?title=QZSS_Signal_Plan)
- [Plan de signal IRNSS](https://gssc.esa.int/navipedia/index.php?title=IRNSS_Signal_Plan)

Une autre norme est le code d'observation RINEX, utilisé dans les fichiers RINEX pour identifier les signaux observés par un récepteur. Le code d'observation RINEX se compose d'une lettre indiquant le système satellitaire (G pour GPS, R pour GLONASS, E pour Galileo, C pour Beidou, J pour QZSS et I pour IRNSS), suivie d'un chiffre indiquant le type de signal (1 pour L1/E1/B1, 2 pour L2/E5b/B2, 5 pour L5/E5a/B3, 6 pour E6/B3I, etc.). Par exemple, G1C signifie le signal GPS L1C, R2P le signal GLONASS L2P, E5Q le signal Galileo E5aQ, C3I le signal Beidou B2I, J1S le signal QZSS L1S et I5X le signal IRNSS L5X.

## Outils
- [RTCM3 NTRIP Live Stream Analyzer](https://y3n.co/ntrip-rtcm-analyzer/)

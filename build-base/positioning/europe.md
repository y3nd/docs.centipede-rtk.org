---
prev:
  text: "Positioning"
  link: "/build-base/positioning"
next:
  text: "Setting base coordinates"
  link: "/build-base/setting-base-coordinates"
---
# Positioning an RTK Base station in Europe

### 1. Convert a log file into a RINEX file

* Go to the <span style="color:#007BFF">**LOGS**</span> tab of your RTK base and click the pencil (```edit```) on a complete **24-hour .zip** file.

![log2rinex](/assets/images/build-base/positioning/log2rinex1.avif)

* A window opens offering to convert the log file into a RINEX file.
* If you are outside France: **Use a log file older than 15 days**, then choose the **NRCAN** preset, which is compatible with NRCAN's online services for precise positioning calculation. Click **Create Rinex File**.

![log2rinex](/assets/images/build-base/positioning/log2rinex1_nrcan.avif)

* Wait while the RINEX file is created; this may take several minutes.

![log2rinex](/assets/images/build-base/positioning/log2rinex3.avif)

* Download the generated file. Once the window is closed (```close```), the RINEX file is also available in the logs list with a name like **YYYY-MM-DD-your_mountpoint_name_nrcan.obs** and a size of about **4 MB**.

![log2rinex](/assets/images/build-base/positioning/log2rinex4.avif)


### 2. Post-processing

**Make sure to use a RINEX file older than 15 days to obtain precise positioning!**  
This step corrects the raw data from your RTK base using the PPP method provided by [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php).

* Go to the [NRCAN website](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php)
* Start a session by entering your information
* Choose **static** processing mode and **ITRF**
* Upload the RINEX observation file generated previously
* Click **Submit to PPP**

![log2rinex](/assets/images/build-base/positioning/nrcan.avif)

Download links are sent to your email after a few minutes:

* Click **full_output.zip** to download it
* Click **summary** to display it

The two documents (**summary** and **full_output.zip**) + the previously generated **RINEX** file will be required when declaring your station, so make sure to keep all of this information.


### 3. Interpreting the report

* Copy the **summary**

> Example of an NRCAN summary file:

```

The estimated coordinates ITRF20 2023-05-24 for the 2023-05-25-CT_nrcan_1_.obs RINEX file are as follows:
Latitude	N46° 09' 53.4007"	± 0.002 m (95%)
Longitude	W0° 56' 54.7154"	± 0.002 m (95%)
Ellipsoidal Height	65.270 m	± 0.008 m (95%)
[46.16483353,-0.94853206,65.270] <---- Your coordinates in ITRF20!!

UTM Zone 30 (North)
Northing	5114407.540 m
Easting	658376.222 m
Scale factor (point)	0.99990835
Scale factor (combined)	0.99989812
[5114407.540,658376.222,65.270]

Cartesian coordinates
X	4424561.087	± 0.006 m (95%)
Y	-73255.334	± 0.002 m (95%)
Z	4578002.990	± 0.006 m (95%)
[4424561.087,-73255.334,4578002.990]

Orbits and Clocks Used: NRCan/IGS Final
GNSS Data: GPS & GLONASS
GRS80 ellipsoid used for (x,y,z) to (lat,lon,h) transformation

```

* Go to [ITRF20 to ETRF2000 conversion](https://nrcan2etrf.centipede.fr/nrcan_itrf-ectt_etrf-epsg_io.html), paste the **summary**, and click **1. Extract data**

![itrf2etrf](/assets/images/build-base/positioning/europe/itrf2etrf_1.avif)

* Click **2. Click to display the ECTT result...** to convert the ITRF2020 coordinates into [ETRF2000](https://epsg.io/7931). A new tab will open with the converter from the [EUREF Permanent GNSS Network](https://www.epncb.oma.be/_productsservices/coord_trans/index.php). **Copy the entire RESULTS section**.

![itrf2etrf](/assets/images/build-base/positioning/europe/itrf2etrf_2.avif)

* Return to the previous page and paste the values, then click **3. Convert XYZ to Lat Long Elev**

![itrf2etrf](/assets/images/build-base/positioning/europe/itrf2etrf_3.avif)

* The final coordinates of your GNSS base are now displayed. Click **4. Export Form Data .txt ...** to download the conversion report so you can send it when declaring your station on the Centipede-RTK network.

![itrf2etrf](/assets/images/build-base/positioning/europe/itrf2etrf_4.avif)

* Click **5. Finally, Copy Converted Coordinates for...** to copy these values and insert them into the coordinate parameters of your GNSS base.

![itrf2etrf](/assets/images/build-base/positioning/rtkbase-coordinates.avif)

> Your geographic coordinates are now expressed in a global system for geographic Europe that takes into account the movement of the Eurasian tectonic plate.  
Each country often also has its own local coordinate system, such as **RGF93** in France, to account for local movements. The differences are minor for RTK positioning (**< 1 cm**).
If you need your coordinates to match the coordinate system used in your country, please let us know your requirements on the [forum](https://forum.geocommuns.fr/c/rtk-centipede/18).

* Now proceed to the final step: [Configuring the positioning of your RTK Base](../setting-base-coordinates.md)
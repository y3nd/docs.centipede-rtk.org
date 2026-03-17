---
prev:
  text: "Positioning"
  link: "/build-base/positioning"
next:
  text: "Setting base coordinates"
  link: "/build-base/setting-base-coordinates"
---
# Positioning an RTK Base station in North America
Countries: United States, Canada, Mexico

### 1. Convert a log file to a RINEX file

* Go to the <span style="color:#007BFF">**LOGS**</span> tab of your RTK base and click the pencil (`edit`) of a complete **24h .zip** file.

![log2rinex](/assets/images/build-base/positioning/log2rinex1.avif)

* A window opens offering to convert the log file into a RINEX file.
* If you are outside France: **Use a log file older than 15 days**, then choose the **NRCAN** preset, which is compatible with NRCAN's online services for precise positioning calculations. Click **Create Rinex File**.

![log2rinex](/assets/images/build-base/positioning/log2rinex1_nrcan.avif)

* Wait while the RINEX file is being created; this may take several minutes.

![log2rinex](/assets/images/build-base/positioning/log2rinex3.avif)

* Download the generated file. Once the window is closed (`close`), the RINEX file will also appear in the logs list with a name like **YYYY-MM-DD-your_mountpoint_name_nrcan.obs**, with a size of about **4 MB**.

![log2rinex](/assets/images/build-base/positioning/log2rinex4.avif)

---

### 2. Post-processing

**Make sure to use a RINEX file older than 15 days to obtain precise positioning!**
This step corrects the raw data from your RTK base using the PPP method from [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php).

* Go to the [NRCAN](https://webapp.csrs-scrs.nrcan-rncan.gc.ca/geod/tools-outils/ppp.php) website
* Start a session by entering your identity information
* Choose **Static** processing mode and **NAD83**
* Select the epoch **Epoch of GNSS data**
* Upload the **RINEX observation file** generated earlier
* Click **Submit to PPP**

![log2rinex](/assets/images/build-base/positioning/canada/nrcan_nad83.avif)

Download links are sent to your email after a few minutes:

* Click **full_output.zip** to download it
* Click **summary** to view it

The **two documents (summary and full_output.zip)** plus the **RINEX file created earlier** will be required when declaring your base, so make sure to keep all of them.

---

### 3. Report interpretation

> Example of an NRCAN summary file:

```
The NAD83(SCRS) 2025-03-22 coordinates calculated for the RINEX file SEPT0810.25O are as follows:
Latitude	N46° 17' 54.9219"	± 0.002 m (95%)
Longitude	W71° 39' 25.7527"	± 0.002 m (95%)
Ellipsoidal height	134.493 m	± 0.007 m (95%)
Orthometric height	CGVD2013 CGG2013a 162.4271 m
[46.29858940,-71.65715354,134.493]

UTM Zone 19 (North)
Northing	5130655.391 m
Easting	295363.233 m
Scale factor (point)	1.00011479
Scale factor (combined)	1.00009371
[5130655.391,295363.233,134.493]

Cartesian coordinates
X	1389246.816	± 0.003 m (95%)
Y	-4190180.681	± 0.005 m (95%)
Z	4588337.806	± 0.005 m (95%)
[1389246.816,-4190180.681,4588337.806]

Orbits and clocks used: RNCan/IGS final
GNSS data: GPS & GLONASS
GRS80 ellipsoid used for the transformation from (x,y,z) to (lat,lon,h)
```

* Retrieve the coordinates from the report, for example:

  * **[46.29858940,-71.65715354,134.493]** <---- Your coordinates in **NAD83**
* Adapt them to insert into your GNSS base: remove the **"[]"** and replace the **","** with spaces →
  **46.29858940 -71.65715354 134.493**

![itrf2etrf](/assets/images/build-base/positioning/rtkbase-coordinates.avif)

> Your geographic coordinates are now in a global international reference system.
> Each continent and/or country often also has its own **local coordinate system**, such as **ETRF2000 in Europe**, **RGF93 in France**, or **NAD83 in Canada**, in order to account for local tectonic movements.

If you need coordinates that match your country's local coordinate system, please let us know your requirements on the [forum](https://forum.geocommuns.fr/c/rtk-centipede/18).

* Next step: finalize the [RTK Base positioning configuration](../setting-base-coordinates.md).

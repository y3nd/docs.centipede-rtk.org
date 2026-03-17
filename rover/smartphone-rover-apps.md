# RTK rover with smartphone applications

To be noted that currently all the solutions require an external RTK receiver and antenna. The smartphone's internal GNSS receiver is not yet capable of providing RTK-level precision. However, the applications mentioned below allow you to connect an external RTK receiver (such as a U-blox F9P) to your smartphone via Bluetooth or USB, enabling you to receive RTK corrections and achieve centimeter-level positioning accuracy on your mobile device.

![rover architecture](/assets/images/smartphone-apps/mm_rover_small.avif)

## Lefebure Application (Proprietary)

![Lefebure](/assets/images/smartphone-apps/lefebure.avif)

The Lefebure NTRIP Client application for Android allows you to send corrections from a mount point on the Centipede-RTK network to the GNSS receiver (ublox-F9P) and receive a corrected NMEA stream.  

The **Enable Mock Location** option allows your RTK GNSS receiver to be used for geolocation across all applications on your Android smartphone/tablet, such as GIS tools like [Mergin Maps](https://play.google.com/store/apps/details?id=uk.co.lutraconsulting&hl=fr&gl=fr), [Qfield](https://play.google.com/store/apps/details?id=ch.opengis.qfield&hl=fr&gl=fr), and [OsmAnd](https://play.google.com/store/apps/details?id=net.osmand&hl=fr&gl=US).

It is possible to save multiple usage profiles depending on your movement between Centipede-RTK network mount points.

[Lefebure NtripClient on the Play Store](https://play.google.com/store/apps/details?id=com.lefebure.ntripclient&hl=fr&gl=fr)

[Lefebure NtripClient documentation](http://lefebure.com/software/android-ntripclient/)

<div class="container">
  <div class="video">
    <video style="display:block; width:50%; height:auto;" controls="true">
      <source src="/assets/videos/lefebure.webm" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

[Tutorial: Using a Rover with Centipede-RTK and Lefebure (french)](https://www.agrotic.org/wp-content/uploads/2019/10/Utiliser-un-Rover-RTK-Centipede-sur-Android-avec-Input-et-Lefebure.docx-1.pdf)

---

## Bluetooth GNSS (Open Source)

![Bluetooth gnss](/assets/images/smartphone-apps/bluetooth-gnss.avif)

An equivalent to the Lefebure application but open source. This application supports merging data streams from an NTRIP server for professional RTK positioning.

The application displays precision estimates from U-Blox `PUBX` precision messages instead of the commonly used `HDOP × CEP` method.  

This PUBX precision reading corresponds exactly to the same precision source shown in the **U-Center PC** tool when it is connected directly to M8030 (EcoDroidGPS) or ZED-F9P (EcoDroidGPS + ArduSimple) devices via USB.

[GitHub libbluetooth_gnss](https://github.com/ykasidit/libbluetooth_gnss)

[Bluetooth GNSS on the Play Store](https://play.google.com/store/apps/details?id=com.clearevo.bluetooth_gnss)

<div class="container">
  <div class="video">
    <video style="display:block; width:50%; height:auto;" controls="true">
      <source src="/assets/videos/BT_Gnss.webm" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</div>

---

## SW MAPS Application (Proprietary)

![swmaps](/assets/images/smartphone-apps/sw-maps.avif)

SW Maps is a free **GIS and mobile mapping application** for collecting, presenting, and sharing geographic information.

Whether you are conducting a large-scale GNSS survey using high-precision instruments, collecting large amounts of location data using only your phone, or simply displaying shapefiles with labels on a background map while in the field, SW Maps supports all these use cases.

You can record **points, lines, polygons, and even photos**, display them on your chosen background map, and attach custom attribute data to any feature. Supported attribute types include text, numbers, predefined choice lists, photos, audio clips, and videos.

Perform **high-precision GPS surveys** using RTK-compatible external receivers via Bluetooth or USB Serial.

Draw features on the map by adding markers and measure distances and areas.

Reuse layers and attributes from a previous project for another survey, or create templates and share them with other users.

Share collected data with others as **Geopackages, KMZ, or shapefiles**, or export them to your device storage. Data can also be exported as **spreadsheets (XLS / ODS)** or **CSV files**.

[SWMAPS on the Play Store](https://play.google.com/store/apps/details?id=np.com.softwel.swmaps&hl=fr&gl=fr)
[SW Maps on the App Store](https://apps.apple.com/fr/app/sw-maps/id6444248083)

[Tutorial: Using SW Maps with an RTK Surveyor and Centipede-RTK](https://www-iuem.univ-brest.fr/pops/attachments/2589)

---

## QField 7025 beta (Open Source)

![qfield](/assets/images/smartphone-apps/qfield_logo.svg)

QField is a free and open source **GIS and mobile mapping application** for collecting, presenting, and sharing geographic information. \

QField native Ntrip support is [currently in development (PR 7025)](https://github.com/opengisch/QField/pull/7025), but [some early builds](https://files.y3n.co/crtk/qfield/QField%20Beta%20PR%207025%20arm.apk) are available for testing.

[QField on the Play Store](https://play.google.com/store/apps/details?id=ch.opengis.qfield&hl=fr&gl=fr)
[QField on the App Store](https://apps.apple.com/fr/app/qfield-for-qgis/id1531726814)
[QField GitHub](https://github.com/qgis/QField)

---
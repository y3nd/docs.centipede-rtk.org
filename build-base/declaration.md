# Declaration on the Centipede-RTK Network

Finally, send an email to [**contact@centipede.fr**](mailto:contact@centipede.fr) to activate your base on the [Map](https://centipede.fr):

* First name Last name
* Profession
* Email
* Mount point name for your GNSS RTK base (4 characters in UPPERCASE letters and/or numbers). **Make sure your Mount Point is not already taken by checking** **[in this table](https://gf.centipede-rtk.org/d/ef4e1ohu7fgg0a/mount-point-list?orgId=7)**
* Equipment used: model of your antenna and receiver.
* Documents required to verify the position of your base:
  * For FRANCE:
    * the positioning calculation report sent by IGN (file `.tar.gz`)
    * your RINEX file previously sent to IGN
  * In geographic Europe:
    * the `.txt` position file produced by the ETRF200 conversion system: https://nrcan2etrf.centipede.fr/nrcan_itrf-ectt_etrf-epsg_io.html
    * your RINEX file (`.obs`) previously sent to NRCAN
  * Outside these zones:
    * the positioning calculation report sent by NRCAN (`full_output.zip`)
    * a copy of the values from the "summary" link sent by NRCAN
    * your RINEX file previously sent to NRCAN
* Several photos (minimum 2) of the antenna installation (close-up and overall view).

Once your base has been declared by an administrator, it will appear on the map:

* First in blue 🔵:
  * the base is pre-declared on the caster but awaiting verification of its geographic positioning.
  * it is not accessible in the base list but can be used by manually entering the Mount Point.
* Then in orange 🟠:
  * the base is available in the mount point list http://crtk.net:2101, it is accessible and usable.
  * its information (antenna type, positioning report, etc.) is under verification; this may take several days depending on validator availability.
* Finally in green 🟢:
  * the base is accessible, validated, and usable by the community.
  * the base status (powered on 🟢, powered off 🔴) is available on the [map](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) with updates every 30 seconds. An automatic email is sent to the base owner if an outage lasts more than 5 minutes.
  * the base metadata (positioning report, position, status, broadcast messages, disconnection logs, etc.) are available by clicking your base on the [map](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede)
  * you will receive a confirmation email.

> Depending on administrator availability, processing your email may take several days, but your base can be used immediately.

> A functionality test is performed every 15 seconds across the entire network. If your RTK base does not return a signal to the caster (power outage, network interruption, hardware issue, etc.), an automatic email will be sent to notify you of the malfunction and the base will appear in red on the map. You will receive another email when it reconnects to the caster.

> The number of connections on your base can be monitored in real-time on the [map](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) by clicking on your base > Disconnections logs. Both disconnections of the base and connections of rovers are displayed. The Centipede-RTK team runs constant quality checks on the network, which might indicate always-connected rovers or short-term rover connections.

<figure class="map">
  <iframe src="https://centipede.fr/index.php/view/map/?repository=cent&project=centipede" width="100%" height="700" allowfullscreen="true"> </iframe>
</figure>
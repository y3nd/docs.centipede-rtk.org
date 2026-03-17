# RTK rover with PC application (RTKLIB)

## Prerequisites

### Hardware

* A tablet or PC running Windows 10 or Linux
* A dual-frequency GNSS antenna
* An u-blox ZED-F9P-0xB receiver

### Software

* The latest version of the software [RTKLIB-ex](https://github.com/rtklibexplorer/RTKLIB/releases) > Position calculation in [RTK](https://en.wikipedia.org/wiki/Real-time_kinematic_positioning) using [RTKLIB](http://www.rtklib.com/) for centimeter-level geolocation.

## Connection and configuration

### Connecting the GNSS antenna

* Connect the antenna + ZED-F9P receiver via USB.

* Then open the [Device Manager](https://support.microsoft.com/en-us/help/4026149/windows-open-device-manager) and check the COM port created under Windows or the mount point `/dev/ttyXXX` for Linux.

### RTKLIB

> RTKLIB converts the positioning signal from the GNSS antenna using an RTCM3 correction (Centipede-RTK Network for example) into a precise geolocation signal accurate to the centimeter level when conditions allow.

* Download the latest version of [RTKLIB version Rtkexplorer demo5](http://rtkexplorer.com/downloads/rtklib-code/).
* Extract it into the folder of your choice.
* Open **RTKNavi**.

![RTKnavi](/assets/images/pc-rover/3.avif)

* Download this [configuration file](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/RTKLIB_windows.conf).
* Click **option ...**
* Click **LOAD** and select the previously [downloaded file](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/RTKLIB_windows.conf), then click **OK**.

> This automatically configures several RTKLIB parameters.

![RTKnavi](/assets/images/pc-rover/a2.avif)

* Click the **I** icon at the top right.
* Click **ROVER** > **Opt**.

![RTKnavi](/assets/images/pc-rover/4.avif)

* Modify the **COM7** port (USB input of the GNSS antenna) if needed according to your configuration.
* Download this [configuration file](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/ZED-F9P.cmd).
* Click **ROVER** > **Cmd**.

![RTKnavi](/assets/images/pc-rover/a1.avif)

* Click **LOAD** and select the previously [downloaded file](https://raw.githubusercontent.com/jancelin/docs-centipedeRTK/master/assets/param_rtklib/ZED-F9P.cmd).
* Check **Commands at startup**.

> This loads parameters that are injected into the ZED-F9P module at each startup.

* Click **Base Station** > **Opt**.
* Change the **Mountpoint** to the nearest [Centipede](https://map.centipede-rtk.org/index.php/view/map?repository=cent&project=centipede) base station to your location.

![RTKnavi](/assets/images/pc-rover/5.avif)

* Click the **O** icon at the top right.
* Click **Solution** > **Option**.
* Modify the **COM9** port (RTKLIB NMEA output) if needed according to your configuration.

![RTKnavi](/assets/images/pc-rover/6.avif)

* Click **EXIT** and reopen **RTKNavi** to save the parameters.

### First start

* Click **Start** and wait (from 30 seconds to several minutes) for a **FIX RTK** position.

> The receiving antenna must of course be placed outdoors in an open environment.

![RTKnavi](/assets/images/pc-rover/9.avif)
<div align="center">

<img src="firefox.svg" alt="Firefox Logo" width="120px"/>

<h1>Firefox Overlay Scrollbars</h1>


[![](https://img.shields.io/badge/license-MIT-6c5eee?style=flat-square)](../LICENSE)
</div>
<h3> → <a href="https://github.com/spencerwooo/firefox-overlay-scrollbar">spencerwooo/firefox-overlay-scrollbar</a>
<h5>↓ <a href="https://github.com/Aris-t2/CustomJSforFx">Aris-t2/CustomJSforFx</a>, <a href="https://github.com/endeavoursc/firefox-overlay-scrollbars-win10">endeavoursc/firefox-overlay-scrollbars-win10</a>.

## Demo

|               Style                |                             Preview                             |
| :--------------------------------: | :-------------------------------------------------------------: |
|     Windows 10 style scrollbar     |  <img src="demo-win.gif" alt="demo-win" width="600px">   |

## Installation

*Set `about:config » toolkit.legacyUserProfileCustomizations.stylesheets` to `true` for the following procedures.*

Close all instances of Firefox and **delete Firefox's old script/startup cache** at `about:profiles » Local Directory » Open Folder`

![](https://i.loli.net/2020/01/26/wxiPjBKWothuGVf.png)

Next, **download the entire repo** with either Git or `Download ZIP`. Uncompress the downloaded zip file.

Find the folder `firefox` inside the downloaded repo directory, **copy the `defaults` folder and the file `config.js` to Firefox's installation directory**, i.e., where `firefox.exe` lives.

![](https://i.loli.net/2020/01/26/bhz1VpZav4MCKlx.png)

Find Firefox's profile folder at `about:support » Profile Folder » Open Folder`, **create a folder called `chrome` inside**

![](https://i.loli.net/2020/01/26/QwMtSFAVLbryepY.png)

Find the `profile` folder inside the downloaded repo directory, **copy the `userChrome` folder and the file `userChrome.js` to the `chrome` folder**

![](https://i.loli.net/2020/01/26/HESxRq9XmWFhBfC.png)

*Delete Firefox's old script/startup cache at `about:profiles » Local Directory » Open Folder` every time you change the script under `chrome/userChrome` folder.*

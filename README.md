# Ionic Cordova-Plugin-RSSI Demo

Demonstrates the [cordova-plugin-rssi](https://github.com/emcniece/cordova-plugin-rssi) Cordova plugin using the "blank" Ionic 4 starter app.

The `cordova-plugin-rssi` plugin only works on Android and iOS platforms. Note that this plugin **will not pass the Apple App Store Review process**.

See the code in action at [home.ts](./src/pages/home/home.ts).

## Setup

Clone, install and run as a regular Ionic project:

```sh
git clone https://github.com/emcniece/ionic-cordova-rssi-demo.git
cd ionic-cordova-rssi-demo
npm install

ionic cordova platform add android
ionic cordova build android
ionic run android

ionic cordova platform add ios
ionic cordova build ios
ionic run ios
```

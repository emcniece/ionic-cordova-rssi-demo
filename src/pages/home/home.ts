import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import get from 'lodash-es/get';

// Use a mock during development to prevent fatal errors
const MockRSSI = {
  read: () => {
    const response = {
      rssi: null,
      bars: null,
      isIPhoneX: false,
    };

    console.warn('MockRSSI Read:', response);
    return response;
  }
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rssi: number|string = '-';
  public bars: number|string = '-';
  public isIPhoneX: boolean;
  private RSSI: any;
  public countdown = 10;

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      // Lodash `get()` checks for the existence of `window.cordova.plugins.rssi`,
      // returns the mock function if any objects in the chain are missing.
      this.RSSI = get(window, 'cordova.plugins.rssi', MockRSSI);

      console.log('RSSI plugin:', this.RSSI)

      this.start();
    });
  }

  public start() {
      Observable
      .interval(1000)
      .subscribe(x => {
        this.countdown = 10 - (x%10);

        if(x % 10 === 0){
          this.read();
        }
      });
  }

  public read() {
    this.RSSI.read((data) => {
      console.log('RSSI Data:', data);
      this.rssi = data.rssi;
      this.bars = data.bars;
      this.isIPhoneX = data.isIPhoneX;
    })
  }

}

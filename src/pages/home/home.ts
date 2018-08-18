import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import get from 'lodash-es/get';

// Use a mock during development to prevent fatal errors
const MockRSSI = {
  read: () => {
    const response = {
      rssi: null,
      bars: null,
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

  // Lodash `get()` checks for the existence of `window.cordova.plugins.rssi`,
  // returns the mock function if any of those objects is missing.
  private RSSI = get(window, 'cordova.plugins.rssi', MockRSSI);

  constructor(public navCtrl: NavController) {
    console.log('RSSI plugin:', this.RSSI)
  }

  public fetch() {
    this.RSSI.read((data) => {
      console.log('RSSI Data:', data);
      this.rssi = data.rssi;
      this.bars = data.bars;
    })
  }

}

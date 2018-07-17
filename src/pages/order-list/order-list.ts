import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the OrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  testArray: string[] = ['菜单一', '菜单二', '菜单三', '菜单四'];
  testSegment: string = this.testArray[0];
  terrace: string;

  constructor(public navCtrl: NavController, private platform: Platform) {


    //判断平台  在html中通过ngif控制样式
    if (this.platform.is('ios')) {
      this.terrace = 'ios'
    } else if (this.platform.is('android')) {
      this.terrace = 'android'
    }
  }

  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.testArray.indexOf(this.testSegment) < 3) {
        this.testSegment = this.testArray[this.testArray.indexOf(this.testSegment) + 1];
      }
    }
    //向右滑
    if (event.direction == 4) {
      if (this.testArray.indexOf(this.testSegment) > 0) {
        this.testSegment = this.testArray[this.testArray.indexOf(this.testSegment) - 1];
      }
    }
  }
}

import {ThemeableBrowser} from 'ionic-native';
import {Component} from '@angular/core';
import {NavController, IonicPage, Alert, AlertController, App, Platform} from 'ionic-angular';
import {OrderListPage} from "../order-list/order-list";
import {MyApp} from "../../app/app.component";

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items = [
    {title: "我的淘宝", link: "https://h5.m.taobao.com/mlapp/mytaobao.html#mlapp-mytaobao"},
    {title: "购物车", link: "https://h5.m.taobao.com/mlapp/cart.html"},
    {title: "我的订单", link: "https://h5.m.taobao.com/mlapp/olist.html"},
    {title: "待付款", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.1&tabCode=waitPay"},
    {title: "待发货", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.2&tabCode=waitSend"},
    {title: "待收货", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.3&tabCode=waitConfirm"},
    {title: "退出", link: "https://h5.m.taobao.com/mlapp/olist.html?spm=a2141.7756461.2.4&tabCode=waitRate"}
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform) {
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: '退出应用？',
      message: '确定要退出应用吗?',
      buttons: [
        {
          text: '取消',
          role: '取消',
          handler: () => {
            alert.dismiss();
            alert.present();
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            // this.app.exitApp()
            this.platform.exitApp();
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }

  itemClick(item) {
    if (item.title == "我的订单") {
      this.navCtrl.push('OrderListPage')
    }
    else if (item.title == "退出") {
      this.presentConfirm();
    }
    else {
      let options = {
        statusbar: {
          color: '#f8285c'
        },
        toolbar: {
          height: 44,
          color: '#f8285c'
        },
        title: {
          color: '#ffffffff',
          showPageTitle: true
        },
        backButton: {
          image: 'back',
          imagePressed: 'back_pressed',
          align: 'left',
          event: 'backPressed'
        },
        backButtonCanClose: true
      };
      new ThemeableBrowser(item.link, '_self', options)
    }
  }
}

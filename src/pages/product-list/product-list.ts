import { AppService, AppGlobal } from './../../app/app.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  hasmore = true;
  products: any;
  selectedItem: any;
  spinner1: boolean = true;
  pageNo = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppService) {
    this.selectedItem = this.navParams.get("item");
  }

  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems() {
    console.log("请求地址"+AppGlobal.API.getProducts+this.pageNo)
    this.appService.httpGet(AppGlobal.API.getProducts+this.pageNo, null, d => {
      this.products = d['results'];
      this.pageNo += 1;
      this.spinner1 = false;
    });
  }

  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }
    this.appService.httpGet(AppGlobal.API.getProducts+this.pageNo,null, d => {
      if (d['results'].length > 0) {
        this.products = this.products.concat(d['results']);
        this.pageNo += 1;
      } else {
        this.hasmore = false;
        console.log("没有数据啦！")
      }
      infiniteScroll.complete();
    });
  }

}

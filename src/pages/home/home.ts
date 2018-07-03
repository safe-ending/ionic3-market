import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {AppGlobal, AppService} from "../../app/app.service";
import {ProductListPage} from "../product-list/product-list";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slides = [];
  categories = [];
  products = [];

  spinner1: boolean = true;

  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }

  constructor(public appService: AppService, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }

  //获取幻灯片
  getSlides() {
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts + "4", null, rs => {
      console.log(rs);
      this.slides = rs['results'];
      this.spinner1 = false;
    })
  }

  //获取分类
  getCategories() {
    this.appService.httpGet(AppGlobal.API.getCategories, null, rs => {
      console.log(rs);
      this.categories = rs['results'];
    })
  }

  //获取首页推荐列表
  getProducts() {
    this.appService.httpGet(AppGlobal.API.getProducts + "10", null, rs => {
      console.log(rs);
      this.products = rs['results'];
    })
  }

  //商品详情
  goDetails(item) {
    console.log('go details...')
    this.navCtrl.push('ProductDetailsPage', {item: item});
  }

  goProductList(item) {
    console.log('go productList...')
    this.navCtrl.push('ProductListPage', {item: item});
  }

}

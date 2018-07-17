import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Tabs} from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  @ViewChild('mainTabs') tabs:Tabs;

  tabRoots: Object[];
  tab1Root = 'HomePage';
  tab2Root = 'ContactPage';
  tab3Root = 'AboutPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabRoots = [
      {
        root: 'HomePage',
        tabTitle: '首页',
        tabBage: '1',
        tabIcon: 'home'

      },
      {
        root: 'ContactPage',
        tabTitle: '咨讯',
        tabBage: '1',
        tabIcon: 'notifications'
      },
      {
        root: 'AboutPage',
        tabTitle: '我的',
        tabBage: '2',
        tabIcon: 'document'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

import {Component, ViewChild} from '@angular/core';
import {App, Nav, NavController, Platform, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ControlContainer} from "@angular/forms";
import {TabsPageModule} from "../pages/tabs/tabs.module";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = 'TabsPage';
  @ViewChild('myNav') nav: Nav;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public appCtrl: App, public toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      statusBar.styleLightContent();
      statusBar.show()
      statusBar.backgroundColorByName("#551b1d23")
      setTimeout(function () {
        splashScreen.hide();
      }, 1000);
      this.exitApp();
    });
  }

  public backButtonPressed: boolean = false;

  exitApp() {
    this.platform.registerBackButtonAction(() => {
      //控制modal、系统自带提示框
      let overlay = this.appCtrl._appRoot._overlayPortal.getActive() || this.appCtrl._appRoot._modalPortal.getActive();
      if (overlay) {
        overlay.dismiss();
        return;
      }
      let activeVC = this.nav.getActive();
      let page = activeVC.instance;
      if (page.tabs) {
        let activeNav = page.tabs.getSelected();
        if (activeNav.canGoBack()) {
          return activeNav.pop();
        } else {
          return this.showExit();
        }
      }
      if (page instanceof TabsPageModule) {//查看当前页面是否是登陆页面
        this.showExit();
        return;
      }
      this.appCtrl.getActiveNav().pop();//剩余的情况全部使用全局路由进行操作
    });
  }

  //双击退出函数
  showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
      this.presentToast();//再按一次退出
      this.backButtonPressed = true;
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 1200)
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: '再按一次退出应用',
      duration: 2000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}


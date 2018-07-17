import { NgModule } from '@angular/core';
import {Alert, AlertController, IonicPageModule} from 'ionic-angular';
import { AboutPage } from './about';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
  ],
  providers:[
    AlertController
  ]
})
export class AboutPageModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {NotePage } from '../pages/note/note';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NumerosPage } from '../pages/numeros/numeros';
import { AlfabetoPage } from '../pages/alfabeto/alfabeto';
import { SobrePage } from '../pages/sobre/sobre';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { PerfilPage } from '../pages/perfil/perfil';
import { JogosPage } from '../pages/jogos/jogos';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    NotePage,
    NumerosPage,
    AlfabetoPage,
    SobrePage,
    PerfilPage,
    JogosPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    NotePage,
    NumerosPage,
    AlfabetoPage,
    SobrePage,
    PerfilPage,
    JogosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NotePage } from '../note/note';
import { NumerosPage } from '../numeros/numeros';
import { AlfabetoPage } from '../alfabeto/alfabeto';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AlfabetoPage;
  tab3Root = NumerosPage;
  tab4Root = NotePage;

  constructor() {

  }
}

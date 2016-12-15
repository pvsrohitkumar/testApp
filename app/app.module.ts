import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TestAppPage } from '../pages/test-app/test-app';
import { ListViewPage } from '../pages/list-view/list-view';
import { ModalPopupPage } from '../pages/modal-popup/modal-popup';
import { SamplePage1Page } from '../pages/sample-page1/sample-page1';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TestAppPage,
    ListViewPage,
    ModalPopupPage,
    SamplePage1Page
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TestAppPage,
    ListViewPage,
    ModalPopupPage,
    SamplePage1Page
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

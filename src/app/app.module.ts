import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicStorageModule } from '@ionic/storage';
import { PostProvider } from './providers/post-provider';
import { GetProvider } from 'src/app/providers/get-provider';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot({_forceStatusbarPadding: false }),
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    GetProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CoreModule} from './core/core.module'

import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './core/left-navigation/left-navigation.component';
import { BaseComponent } from './core/base/base.component';



@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    BaseComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

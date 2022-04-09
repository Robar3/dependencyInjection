import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello.component';
import {TimerService} from './timer.service';
import {SET_INTERVAL,DOCUMENT} from "./token";
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ProductComponent],
  bootstrap: [AppComponent],
  providers: [TimerService,
    {
      provide: DOCUMENT,
      useValue: document,
    },
    {
      provide: SET_INTERVAL,
      useValue:setInterval
    }
    ],

})

export class AppModule {
}

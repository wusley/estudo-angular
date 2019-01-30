import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';

import { CarService } from './car.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [ CarService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

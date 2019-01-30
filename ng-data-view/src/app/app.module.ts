import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from './components/dataview/dataview';
import {PanelModule} from './components/panel/panel';
import {InputTextModule} from './components/inputtext/inputtext';
import {ButtonModule} from './components/button/button';
import {DialogModule} from './components/dialog/dialog';
import {DropdownModule} from './components/dropdown/dropdown';
import {TabViewModule} from './components/tabview/tabview';

import {CodeHighlighterModule} from './components/codehighlighter/codehighlighter';

import { CarService } from './car.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    CodeHighlighterModule
  ],
  providers: [ CarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

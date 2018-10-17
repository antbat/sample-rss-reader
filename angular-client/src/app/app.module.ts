import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RedColoredComponent } from './red-colored/red-colored.component';
import { BlueColoredComponent } from './blue-colored/blue-colored.component';
import { YellowColoredComponent } from './yellow-colored/yellow-colored.component';
import { ColorUsageComponent } from './color-usage/color-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    RedColoredComponent,
    BlueColoredComponent,
    YellowColoredComponent,
    ColorUsageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

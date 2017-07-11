import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpModule }    from '@angular/http';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DevicesService } from './devices.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DevicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { MdToolbarModule } from '@angular/material';
import { MdButtonToggleModule } from '@angular/material';
import { DevicesService } from './devices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'smart-garden';
  wateringTimer: any;
  devicesService: DevicesService;

  constructor(devicesService: DevicesService){
    this.devicesService = devicesService;
  }

  ngOnInit(): void {
    this.devicesService.getDevice(1190842).then(wateringTimer => this.wateringTimer = wateringTimer);
  }

}

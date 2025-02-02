import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DevicesService {

  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  getDevice(id: number): Promise<any> {
    return this.http.get("/api/devices/" + id)
    .toPromise()
    .then(response => {
      let device = response.json();
      device.lastAccess = new Date(device.lastAccess);
      return device;
    })
    .catch(this.handleError);
  }

  updateDevice(device: any): Promise<any> {
    let updated = {status: device.status ? 1 : 0};
    return this.http.put("/api/devices/" + device.id, updated)
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

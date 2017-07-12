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
    return this.http.get("http://smart-garden.famaridon.com:53000/api/devices/" + id)
    .toPromise()
    .then(response => response.json() as any )
    .catch(this.handleError);
  }

  updateDevice(device: any): Promise<any> {
    let updated = {status: device.status ? 1 : 0};
    return this.http.put("http://smart-garden.famaridon.com:53000/api/devices/" + device.id, updated)
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

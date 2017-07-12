import * as winston from "winston";
import * as cors from "cors";
import { NextFunction, Request, Response, Router } from "express";

export class ApiRoute  {

  private router: Router;
  private devices: Map<number, Device>;

  constructor(router: Router) {
    //log
    this.router = router;
    router.use(cors());
    this.devices = new Map();

    this.router.route('/devices/:id')
    .get((req: Request, res: Response, next: NextFunction) => {
      this.getDevice(req, res);
    })
    .put((req: Request, res: Response, next: NextFunction) => {
      this.putDevice(req, res);
    });

  }

  private async getDevice(req: Request, res: Response):Promise<void> {
    let id : number = req.params.id
    winston.info(`GET /devices/${id}`);
    let device: Device | undefined = this.devices.get(id);
    if(!device){
      device = new Device();
      device.id = id;
      this.devices.set(id, device);
    }
    if(req.header("X-Device-ID") && req.header("X-Device-ID") == id.toString()){
      device.lastAccess = new Date();
      winston.info(`Update lastAccess on device ${id} at ${device.lastAccess}.`)
    }
    device.accessCount++;
    res.json(device);
  }

  private async putDevice(req: Request, res: Response):Promise<void> {
    let id : number = req.params.id
    let updatedDevice:Device = req.body;
    winston.debug(`PUT /devices/${id}`);

    let device: Device | undefined = this.devices.get(id);
    if(!device){
      device = new Device();
      device.id = id;
      this.devices.set(id, device);
      res.status(201);
    }
    device.status = updatedDevice.status;
    res.end();
  }

}

export class Device {
  public id : number;
  public status : number;
  public accessCount : number;
  public lastAccess : Date;
  constructor(){
    this.accessCount = 0;
  }
}

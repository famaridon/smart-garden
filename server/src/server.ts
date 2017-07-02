import * as winston from "winston";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from "path";

import {ApiRoute} from './api/ApiRoute'


class Server {

  public app: express.Application;
  public router: express.Router;
  public api: ApiRoute;

  public static async bootstrap(): Promise<Server> {
    winston.info('bootstrap server and init all services.');
    return new Server();
  }

  constructor() {
    //create expressjs application
    this.app = express();
    this.app.use(bodyParser.json());
    this.router = express.Router();
    this.api= new ApiRoute(this.router);
    this.app.use('/api', this.router);
  }

  public async start(): Promise<void>{
    winston.info('starting server.');
    this.app.listen(3000, () => {
      winston.info(`api is ready on http://localhost:3000/api/`);
    });
    winston.info('server started');
  }
}

Server.bootstrap().then((server) => {
  server.start();
})

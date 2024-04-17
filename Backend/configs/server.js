'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.port = process.env.PORT;
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan('dev'));
  }

  routes() {}

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running on port', this.port);
    });
  }
}

export default Server;

import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { join } from 'path';

@Module( {
  imports: [],
  controllers: [ ClientController ],
  providers: [ ClientService ],
} )
export class ClientModule { }

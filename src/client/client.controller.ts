import { Controller, Get, Render } from '@nestjs/common';
import { ClientService } from './client.service'

@Controller( 'webchat' )
export class ClientController {
  constructor( private readonly clientService: ClientService ) {}

  @Get( 'react' )
  @Render('index')
  root() {
    return { message: 'Hello World' };
  }
}
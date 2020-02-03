import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { TokenService } from './token.service'

@Controller( 'directline' )
export class TokenController {
  constructor( private readonly tokenService: TokenService ) {}

  @Post('token')
  getToken(): Observable<any> {
    console.log('Someone requested a token...')
    return this.tokenService.getDirectLineToken();
  }
  
  @Post( 'refresh' )
  refreshToken( @Req() request: Request ): Observable<any> {
    console.log( 'Someone refreshed a token...' );
    return this.tokenService.refreshDirectLineToken(request);
  }
}
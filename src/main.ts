import { NestFactory } from '@nestjs/core';
import { BotModule } from './bot_server/bot.module';
import { TokenModule } from './token_server/token.module';

import { resolve } from 'path';
import { config } from 'dotenv';
config( { path: resolve( __dirname, "../.env" ) } )

async function bootstrap() {
  const port = {};
  const host = {};
  const botApp = await NestFactory.create( BotModule );
  port[ 'bot' ] = 3978;
  host[ 'bot' ] = 'server:bot';
  await botApp.listen( port[ 'bot' ], () => {
    console.log( `\n${ host[ 'bot' ] } is listening on port ${ port[ 'bot' ] }` )
  } );

  const tokenApp = await NestFactory.create( TokenModule );
  port[ 'token' ] = 3500;
  host[ 'token' ] = 'server:token';
  await tokenApp.enableCors()
  await tokenApp.listen( port[ 'token' ], () => {
    console.log( `\n${ host[ 'token' ] } is listening on port ${ port[ 'token' ] }` )
  } );
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';
import { config } from 'dotenv';
import { BotModule } from './bot_server/bot.module';
import { TokenModule } from './token_server/token.module';
import { ClientModule } from './client/client.module';

const ENV_FILE = path.join( __dirname, '..', '.env' );
config( { path: ENV_FILE } );

const port = {};
const host = {};

async function bootstrap() {
  const botApp = await NestFactory.create( BotModule );
  port[ 'bot' ] = 3978;
  host[ 'bot' ] = 'server:bot';
  await botApp.listen( port[ 'bot' ], () => {
    console.log( `\n${ host[ 'bot' ] } is listening on port ${ port[ 'bot' ] }` )
  } );

  const corsOptions = {
    origin: [
      'http://localhost:8080'
    ],
    optionsSuccessStatus: 200
  }

  const tokenApp = await NestFactory.create( TokenModule );
  port[ 'token' ] = 3500;
  host[ 'token' ] = 'server:token';
  tokenApp.enableCors( corsOptions );
  await tokenApp.listen( port[ 'token' ], () => {
    console.log( `\n${ host[ 'token' ] } is listening on port ${ port[ 'token' ] }` )
  } );

  const clientApp = await NestFactory.create<NestExpressApplication>( ClientModule );
  port[ 'webchat' ] = 8080;
  host[ 'webchat' ] = 'client:webchat';
  clientApp.setViewEngine( 'pug' )
  await clientApp.listen( port[ 'webchat' ], () => {
    console.log( `\n${ host[ 'webchat' ] } is listening on port ${ port[ 'webchat' ] }\n` )
  } );
}
bootstrap();

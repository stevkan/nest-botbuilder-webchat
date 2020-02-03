import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { BotService } from './bot.service';

// Import required bot services.
// See https://aka.ms/bot-services to learn more about the different parts of a bot.
import { BotFrameworkAdapter } from 'botbuilder';

// This bot's main dialog.
import { EchoBot } from './bot/echoBot';

@Controller('api')
export class BotController {
  constructor( private readonly botService: BotService ) {
    this['adapter'] = new BotFrameworkAdapter( {
      appId: process.env.MicrosoftAppId,
      appPassword: process.env.MicrosoftAppPassword
    } );

    // Catch-all for errors.
    this['onTurnErrorHandler'] = async ( context, error ) => {
      // This check writes out errors to console log .vs. app insights.
      // NOTE: In production environment, you should consider logging this to Azure
      //       application insights.
      console.error( `\n [onTurnError] unhandled error: ${ error }` );

      // Send a trace activity, which will be displayed in Bot Framework Emulator
      await context.sendTraceActivity(
        'OnTurnError Trace',
        `${ error }`,
        'https://www.botframework.com/schemas/error',
        'TurnError'
      );

      // Send a message to the user
      await context.sendActivity( 'The bot encountered an error or bug.' );
      await context.sendActivity( 'To continue to run this bot, please fix the bot source code.' );
    };    
  }

    
    // Create the main dialog.
    myBot = new EchoBot();
    
    @Post('messages')
    postActivities( @Req() req: Request, @Res() res: Response ): string {
      // Set the onTurnError for the singleton BotFrameworkAdapter.
      this['adapter'].onTurnError = this['onTurnErrorHandler'];

      this[ 'adapter' ].processActivity( req, res, async ( context ) => {
        await this.myBot.run( context );
      })
      return this.botService.postActivities();
  }
}

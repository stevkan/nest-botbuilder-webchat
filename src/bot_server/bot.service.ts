import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class BotService {
  postActivities( ): string {
    return 'test'
  }
}

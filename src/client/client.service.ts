import { Injectable, HttpService } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class ClientService {
  openReact(): string {
    return 'WebChat'
  }
}

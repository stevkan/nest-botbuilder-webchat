import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TokenService {
  constructor( private readonly http: HttpService ) { }

  getDirectLineToken(): Observable<any> {
    return this.http
      .post( 'https://directline.botframework.com/v3/directline/tokens/generate',
        {
          "user": {
            "id": "dl_abc123"
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${ process.env.DIRECT_LINE_SECRET}`
          }
        },
      )
      .pipe(
        map( response => {
          return response.data;
        } )
      );
  }

  refreshDirectLineToken( request ): Observable<any> {
    return this.http
      .post( 'https://directline.botframework.com/v3/directline/tokens/refresh',
        {
          "token": `${request.body.token}`
        },
        {
          headers: {
            'Authorization': `Bearer ${ request.body.token }`
          }
        },
      )
      .pipe(
        map( response => {
          return response.data;
        } )
      );
  }
}

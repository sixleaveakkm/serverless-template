/**
 *
 * @param origin: headers.origin
 * @param statusCode: int
 * @param body: string | any.
 * @param headers
 * @return {{headers: *, body: *, statusCode: *}|{body: *, statusCode: *}}
 */
import {HeaderObject} from '@/lib/APIresponse/APIProxyResponseHeaders'

export class Res{
  constructor(private origin?: string){}
  public ponse( statusCode: number, body?: any, headers?: HeaderObject){
    let bodyValue = ''
    if (typeof body === 'string') bodyValue = body
    else if(body) bodyValue = JSON.stringify(body)

    if (!headers) {
      headers = {}
    }

    const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
    if (this.origin){
      const originsArr = ALLOWED_ORIGINS.split(',')
      let return_origin = '*'

      if(originsArr.includes(this.origin)){
        return_origin = this.origin
      }
      headers['Access-Control-Allow-Origin'] = return_origin
      if (return_origin !== '*') {
        headers['Access-Control-Allow-Credentials'] = true
      }
    }

    const response = {
      statusCode: statusCode,
      headers: headers,
      body: bodyValue
    }
    console.debug(response)
    return response
  }
}

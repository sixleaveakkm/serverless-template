import {Res} from '@/lib/APIresponse/APIProxyResponse'
import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  const res = new Res()
  return res.ponse(200, {
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
  })
}

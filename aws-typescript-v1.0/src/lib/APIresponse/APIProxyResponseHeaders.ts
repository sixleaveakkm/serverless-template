export interface HeaderObject {
  'Access-Control-Allow-Origin'?: string
  'Access-Control-Allow-Credentials'?: boolean
  'Location'?: string
  'Set-Cookie'?: string
  [key: string]: any
}

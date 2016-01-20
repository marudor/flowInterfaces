type Frame = {
  tag: string,
  attribs: Object,
  text: string,
  tagPosition: number,
}

type SanitizeOptions = {
  allowedTags?: Array<string>|false,
  allowedAttributes?: {[key: string]: Array<string>}[]|false,
  transformTags?: {[key: string]: string|(tagName: string, attribs: Object) => { tagName: string, attribs: Object}},
  exclusiveFilter?: (frame: Frame) => bool,
  textFilter?: (text: string) => string,
  allowedClasses?: {[key: string]: Array<string>},
  allowedSchemes?: Array<string>|{[key: string]: Array<string>},
  nonTextTags?: Array<string>,
  parser?: Object,

}

declare module 'sanitize-html' {
  declare function exports(dirty: string, options?: SanitizeOptions): string;
}

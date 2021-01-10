import Ajv, { JSONSchemaType } from 'ajv'
import addFormats from 'ajv-formats'

const ajv = new Ajv()
addFormats(ajv, ['uri'])
const schema: JSONSchemaType<string> = {
  $schema: 'http://json-schema.org/draft-07/schema#'
, type: 'string'
, format: 'uri'
}
const validateURI = ajv.compile(schema)

export function isURI(val: unknown): val is string | String {
  return validateURI(val)
}

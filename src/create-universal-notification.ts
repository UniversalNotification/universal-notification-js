import { isString } from '@blackglory/types'
import { isURI } from '@utils/is-uri'
import { UniversalNotification } from './types'

type UnknownOf<T> = {
  [P in keyof T]: unknown
}

export function createUniversalNotification(params: Partial<UnknownOf<UniversalNotification>>): UniversalNotification {
  const result: UniversalNotification = {}

  if ('title' in params && isString(params.title)) result.title = params.title.toString()
  if ('message' in params && isString(params.message)) result.message = params.message.toString()
  if ('iconUrl' in params && isURI(params.iconUrl)) result.iconUrl = params.iconUrl.toString()
  if ('imageUrl' in params && isURI(params.imageUrl)) result.imageUrl = params.imageUrl.toString()
  if ('url' in params && isURI(params.url)) result.url = params.url.toString()

  return result
}

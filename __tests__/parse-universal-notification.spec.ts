import { parseUniversalNotification } from '@src/parse-universal-notification'

describe('parseUniversalNotification', () => {
  it('return UniversalNotification', () => {
    const notification = {
      title: 'title'
    , message: 'message'
    , iconUrl: 'https://example.com/icon.png'
    , imageUrl: 'https://example.com/image.png'
    , url: 'https://example.com'
    }
    const text = JSON.stringify(notification)

    const result = parseUniversalNotification(text)

    expect(result).toStrictEqual(notification)
  })

  it('return null', () => {
    const notification = {
      title: 'title'
    , message: 'message'
    , iconUrl: ''
    , imageUrl: ''
    , url: ''
    }
    const text = JSON.stringify(notification)

    const result = parseUniversalNotification(text)

    expect(result).toBeNull()
  })
})

import { createUniversalNotification } from '@src/create-universal-notification'

describe('createUniversalNotification', () => {
  describe('valid params', () => {
    it('return UniversalNotification', () => {
      const params = {
        title: 'title'
      , message: 'message'
      , iconUrl: 'https://example.com/icon.png'
      , imageUrl: 'https://example.com/image.png'
      , url: 'https://example.com'
      }

      const result = createUniversalNotification(params)

      expect(result).toStrictEqual({
        title: 'title'
      , message: 'message'
      , iconUrl: 'https://example.com/icon.png'
      , imageUrl: 'https://example.com/image.png'
      , url: 'https://example.com'
      })
    })
  })

  describe('invalid params', () => {
    it('return UniversalNotification', () => {
      const params = {
        title: 'title'
      , message: 'message'
      , iconUrl: ''
      , imageUrl: ''
      , url: ''
      }

      const result = createUniversalNotification(params)

      expect(result).toStrictEqual({
        title: 'title'
      , message: 'message'
      })
    })
  })

  describe('empty parmas', () => {
    it('return UniversalNotification', () => {
      const params = {}

      const result = createUniversalNotification(params)

      expect(result).toStrictEqual({})
    })
  })
})

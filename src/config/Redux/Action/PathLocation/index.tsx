import type { SetPathLocation } from './types'

export const setPathLocation = (payload: string): SetPathLocation => {
  return {
    type: 'GET_PATH_LOCATION',
    payload: {
      pathLocation: payload
    }
  }
}

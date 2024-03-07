import type { PathLocationType } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: PathLocationType = {
  pathLocation: '/'
}

export const pathLocationReducer = (state = initialState, action: PayloadAction<PathLocationType>): PathLocationType => {
  if (action.type === 'GET_PATH_LOCATION') {
    return {
      pathLocation: action.payload.pathLocation
    }
  }
  return state
}

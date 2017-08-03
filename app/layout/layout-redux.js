// see: https://github.com/erikras/ducks-modular-redux
//
import {createAction, handleActions} from 'redux-actions'
import debug from 'debug'

const dbg = debug('app:layout:redux')

const TOGGLE_DRAWER = 'layout/toggle-drawer'
const CLOSE_DRAWER = 'layout/close-drawer'
const SET_TITLE = 'layout/set-title'

export const toggleDrawer = createAction(TOGGLE_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
export const setTitle = createAction(SET_TITLE)

const title = 'React Scratch'

export default handleActions(
  {
    [TOGGLE_DRAWER]: (state, action) => {
      dbg('reducer: toggle-drawer: state=%o, action=%o', state, action)
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      }
    },
    [CLOSE_DRAWER]: (state, action) => {
      dbg('reducer: close-drawer: state=%o, action=%o', state, action)
      return {
        ...state,
        isDrawerOpen: false
      }
    },
    [SET_TITLE]: (state, action) => {
      dbg('reducer: set-title: state=%o, action=%o', state, action)
      return {
        ...state,
        title: `${title}: ${action.payload}`
      }
    }
  },
  {
    isDrawerOpen: false,
    title
  }
)

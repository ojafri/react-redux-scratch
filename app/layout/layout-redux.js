// see: https://github.com/erikras/ducks-modular-redux
//
import {createAction, handleActions} from 'redux-actions'
import debug from 'debug'

const dbg = debug('app:layout:redux')

const TOGGLE_DRAWER = 'layout/toggle-drawer'
const CLOSE_DRAWER = 'layout/close-drawer'
const SET_TITLE = 'layout/set-title'
const OPEN_SNACKBAR = 'layout/open-snackbar'
const CLOSE_SNACKBAR = 'layout/close-snackbar'

export const toggleDrawer = createAction(TOGGLE_DRAWER)
export const closeDrawer = createAction(CLOSE_DRAWER)
export const setTitle = createAction(SET_TITLE)
export const openSnackbar = createAction(OPEN_SNACKBAR)
export const closeSnackbar = createAction(CLOSE_SNACKBAR)

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
        title: action.payload
      }
    },
    [OPEN_SNACKBAR]: (state, action) => {
      dbg('reducer: open-snackbar: state=%o, action=%o', state, action)
      return {
        ...state,
        snackbar: {
          open: true,
          message: action.payload
        }
      }
    },
    [CLOSE_SNACKBAR]: (state, action) => {
      dbg('reducer: close-snackbar: state=%o, action=%o', state, action)
      return {
        ...state,
        snackbar: {
          open: false,
          message: ''
        }
      }
    }
  },
  {
    isDrawerOpen: false,
    title: '',
    snackbar: {
      open: false,
      message: null
    }
  }
)

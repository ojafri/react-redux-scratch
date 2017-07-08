import {createAction, handleActions} from 'redux-actions'
import debug from 'debug'

const dbg = debug('test:_duck')
const ACTION_1 = 'my-app/widgets/ACTION_1'
const ACTION_2 = 'my-app/widgets/ACTION_2'

export const action1 = createAction(ACTION_1)
export const action2 = createAction(ACTION_2)

export default handleActions(
  {
    ACTION_1: (state, action) => {
      dbg('action-1: state=%o, action=%o', state, action)
    },
    ACTION_2: (state, action) => {
      dbg('action-2: state=%o, action=%o', state, action)
    }
  },
  {}
)

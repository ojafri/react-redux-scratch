import debug from 'debug'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './layout-redux'
import Snackbar from './snack-bar'

const dbg = debug('app:snackbar-container')

export default connect(
  state => {
    dbg('connect: state=%o', state)
    return {
      layout: state.layout
    }
  },
  dispatch => {
    dbg('connect: actions=%o', actions)
    return bindActionCreators(actions, dispatch)
  }
)(Snackbar)

import debug from 'debug'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../session/session'
import TopNav from './top-nav'

const dbg = debug('app:top-nav-container')

export default connect(
  state => {
    dbg('connect: state=%o', state)
    return {
      session: state.session
    }
  },
  dispatch => {
    dbg('connect: actions=%o', actions)
    return bindActionCreators(actions, dispatch)
  }
)(TopNav)

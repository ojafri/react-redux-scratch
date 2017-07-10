import debug from 'debug'
import _ from 'lodash'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import auth from 'react-redux-auth'
import TopNav from './top-nav0'

const dbg = debug('app:top-nav-container')

export default withRouter(
  connect(
    state => {
      dbg('connect: state=%o', state)
      return {
        scope: _.get(state, auth.scopePath)
      }
    },
    dispatch => {
      dbg('connect: actions=%o', auth.actions)
      return bindActionCreators(auth.actions, dispatch)
    }
  )(TopNav)
)

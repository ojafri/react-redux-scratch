import debug from 'debug'
import _ from 'lodash'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import auth from 'react-redux-auth'
// import auth from '../auth'
import * as layoutActions from './layout-redux'
import TopNav from './top-nav'

const dbg = debug('app:top-nav-container')
dbg('la=%o', layoutActions)
const actions = {...auth.actions, ...layoutActions}

export default withRouter(
  connect(
    state => {
      dbg('connect: state=%o', state)
      return {
        scope: _.get(state, auth.scopePath),
        layout: state.layout,
        session: state.session
      }
    },
    dispatch => {
      dbg('connect: actions=%o', actions)
      return bindActionCreators(actions, dispatch)
    }
  )(TopNav)
)

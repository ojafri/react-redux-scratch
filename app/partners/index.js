import debug from 'debug'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as layoutActions from '../layout/layout-redux'
import partnerRedux from './redux'
import component from './partners'

const dbg = debug('app:partners:index')

const actions = {...layoutActions, ...partnerRedux.actions}

export default withRouter(
  connect(
    state => {
      dbg('connect: state=%o', state)
      return {
        partners: state.partners
      }
    },
    dispatch => {
      dbg('connect: actions=%o', actions)
      return bindActionCreators(actions, dispatch)
    }
  )(component)
)

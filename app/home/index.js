import debug from 'debug'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as actions from '../layout/layout-redux'
import component from './home'

const dbg = debug('app:home:index')

export default withRouter(
  connect(
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
  )(component)
)

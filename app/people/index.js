import debug from 'debug'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as layoutActions from '../layout/layout-redux'
import peopleRedux from './redux'
import component from './people'

const dbg = debug('app:people:index')

const actions = {...layoutActions, ...peopleRedux.actions}

export default withRouter(
  connect(
    state => {
      dbg('connect: state=%o', state)
      return {
        people: state.people
      }
    },
    dispatch => {
      dbg('connect: actions=%o', actions)
      return bindActionCreators(actions, dispatch)
    }
  )(component)
)

import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {withStyles} from 'material-ui/styles'
import debug from 'debug'
import Home from '../home'
import Partners from '../partners'
import Users from '../users'
import Endpoints from '../endpoints'
import Routes from '../routes'
import TopNavContainer from './top-nav-container'
import SnackbarContainer from './snackbar-container'
import Footer from './footer'

const dbg = debug('app:layout')

const styles = theme => ({
  container: {
    display: 'flex',
    'flex-direction': 'column',
    height: '100%',
    '@global': {
      a: {
        textDecoration: 'none',
        '&:visited': {
          color: theme.palette.primary[500]
        }
      }
    }
  },
  middle: {
    flex: 'auto',
    position: 'relative',
    'overflow-y': 'auto',
    paddingTop: 100,
    padding: 40
  },
  top: {
    flex: 'none'
    // position: 'none'
  },
  ends: {
    // 'flex-shrink': 0,
    flex: 'none'
  }
})

class layout extends Component {
  render() {
    dbg('props=%o', this.props)
    const {classes} = this.props
    return (
      <div className={classes.container}>
        <TopNavContainer className={classes.ends} />
        <div className={classes.middle}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/partners" component={Partners} />
            <Route path="/users" component={Users} />
            <Route path="/endpoints" component={Endpoints} />
            <Route path="/routes" component={Routes} />
          </Switch>
        </div>
        <Footer className={classes.ends} />
        <SnackbarContainer />
      </div>
    )
  }
}

export default withStyles(styles)(layout)

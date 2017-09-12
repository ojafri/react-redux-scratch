import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import {withStyles} from 'material-ui/styles'
import debug from 'debug'
import Home from '../home'
import Stuff from '../stuff'
import Such from '../such'
import Nonsense from '../nonsense'
import People from '../people'
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
            <Route path="/stuff" component={Stuff} />
            <Route path="/such" component={Such} />
            <Route path="/nonsense" component={Nonsense} />
            <Route path="/people" component={People} />
          </Switch>
        </div>
        <Footer className={classes.ends} />
        <SnackbarContainer />
      </div>
    )
  }
}

export default withStyles(styles)(layout)

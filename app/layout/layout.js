import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {MuiThemeProvider, withStyles, createStyleSheet} from 'material-ui/styles'
import debug from 'debug'
import Home from '../home'
import Stuff from '../stuff'
import Such from '../such'
import Nonsense from '../nonsense'
import TopNavContainer from './top-nav-container'
import Footer from './footer'
import theme from './get-theme'

const dbg = debug('app:layout')

const styleSheet = createStyleSheet({
  container: {
    display: 'flex',
    'flex-direction': 'column',
    height: '100%'
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

const layout = function layout(props) {
  dbg('theme=%o', theme)
  const {classes} = props
  return (
    <MuiThemeProvider theme={theme} className="mui-theme-provider">
      {/* <div className="layout greedy-height">
        <div id="wrap" className="wrap greedy-height">
          <TopNavContainer />
          <div id="main" className="container greedy-height">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/stuff" component={Stuff} />
              <Route path="/such" component={Such} />
              <Route path="/nonsense" component={Nonsense} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div> */}
      <div className={classes.container}>
        <TopNavContainer className={classes.ends} />
        <div className={classes.middle}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/such" component={Such} />
            <Route path="/nonsense" component={Nonsense} />
          </Switch>
        </div>
        <Footer className={classes.ends} />
      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styleSheet)(layout)

import debug from 'debug'
import React, {Component} from 'react'
// import {NavLink} from 'react-router-dom'
// import {IfAuthorizedContainer} from 'react-redux-auth'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu'
import {withStyles, createStyleSheet} from 'material-ui/styles'
import logo from '../react-logo-2.png'
import AppBarImage from '../shared/mui/app-bar-image'
import NavDrawer from './nav-drawer'

const dbg = debug('app:top-nav')

const styleSheet = createStyleSheet('button-app-bar', {
  flex: {
    flex: 1
  }
})

function toolBarRef(ref) {
  dbg('tool-bar-ref=%o', ref)
}

export default withStyles(styleSheet)(
  class extends Component {
    handleLoginClicked = () => {
      const {login, history} = this.props
      dbg('handle-login-clicked: history=%o', history)
      login({history})
    }

    render() {
      dbg('render: props=%o', this.props)
      // const {scope, logout} = this.props
      const {classes, toggleDrawer, closeDrawer, layout} = this.props
      return (
        <div>
          <AppBar>
            <Toolbar ref={toolBarRef}>
              <IconButton color="contrast" aria-label="Menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <AppBarImage logo={logo} />
              <Typography type="title" color="inherit" className={classes.flex}>
                {layout.title}
              </Typography>
              <Button color="contrast">Login</Button>
            </Toolbar>
          </AppBar>
          <NavDrawer
            toggleDrawer={toggleDrawer}
            closeDrawer={closeDrawer}
            isOpen={layout.isDrawerOpen}
          />
          {/* <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                React Scratch
              </a>
            </div>
            <div id="navbar" className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <IfAuthorizedContainer path="to">
                    <NavLink exact to="/stuff">
                      Stuff
                    </NavLink>
                  </IfAuthorizedContainer>
                </li>
                <li>
                  <NavLink exact to="/such">
                    Such
                  </NavLink>
                </li>
                <li>
                  <IfAuthorizedContainer path="to">
                    <NavLink exact to="/nonsense">
                      Nonsense
                    </NavLink>
                  </IfAuthorizedContainer>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                {scope
                  ? <li>
                      <button onClick={logout} className="btn btn-default navbar-btn">
                        Logout
                      </button>
                    </li>
                  : <li>
                      <button
                        onClick={this.handleLoginClicked}
                        className="btn btn-default navbar-btn"
                      >
                        Login
                      </button>
                    </li>}
              </ul>
            </div>
          </div>
        </nav> */}
        </div>
      )
    }

    handleDrawerToggle = () => {
      this.setState({drawerOpen: !this.state.drawerOpen})
    }

    componentWillMount() {
      dbg('cwm')
    }

    componentWillUnmount() {
      dbg('cwu')
    }
  }
)

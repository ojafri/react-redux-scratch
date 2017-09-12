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
// import {withStyles, withTheme} from 'material-ui/styles'
import {withStyles} from 'material-ui/styles'
// import logo from '../aetna-logo-green.png'
// import AppBarImage from '../shared/mui/app-bar-image'
import NavDrawer from './nav-drawer'

const dbg = debug('app:top-nav')

const styles = {
  title: {
    paddingLeft: 10,
    color: 'white'
  },
  login: {
    marginLeft: 'auto'
  }
}

function toolBarRef(ref) {
  dbg('tool-bar-ref=%o', ref)
}

class topNav extends Component {
  handleLoginClicked = () => {
    dbg('handle-login-clicked: props=%o', this.props)
    const {login, logout, history, session} = this.props
    session.token ? logout() : login({history})
  }

  render() {
    dbg('render: props=%o', this.props)
    // const {scope, logout} = this.props
    const {classes, toggleDrawer, closeDrawer, layout, session} = this.props
    return (
      <div>
        <AppBar>
          <Toolbar ref={toolBarRef}>
            <IconButton color="contrast" aria-label="Menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            {/* <AppBarImage logo={logo} />
            <Typography type="title" className={classes.title}>
              Universal Data Exchange
            </Typography> */}
            <Typography type="title" className={classes.title}>
              {layout.title}
            </Typography>
            <div className={classes.login}>
              <Button raised onClick={this.handleLoginClicked}>
                {session.token ? 'Logout' : 'Login'}
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <NavDrawer
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawer}
          isOpen={layout.isDrawerOpen}
        />
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

// export default withTheme(withStyles(styles)(topNav))
export default withStyles(styles)(topNav)

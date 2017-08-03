import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {withStyles, createStyleSheet} from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
// import {MenuItem} from 'material-ui/Menu'
// import Divider from 'material-ui/Divider'
import HomeIcon from 'material-ui-icons/Home'
import PlaneIcon from 'material-ui-icons/Flight'
import TrainIcon from 'material-ui-icons/Train'
import AutoIcon from 'material-ui-icons/AirportShuttle'
// import DraftsIcon from 'material-ui-icons/Drafts'
// import StarIcon from 'material-ui-icons/Star'
// import SendIcon from 'material-ui-icons/Send'
// import MailIcon from 'material-ui-icons/Mail'
// import DeleteIcon from 'material-ui-icons/Delete'
// import ReportIcon from 'material-ui-icons/Report'
import {NavLink} from 'react-router-dom'

const styleSheet = createStyleSheet({
  list: {
    width: 250,
    flex: 'initial'
  }
})

class NavDrawer extends Component {
  render() {
    const {toggleDrawer, isOpen} = this.props
    return (
      <Drawer open={isOpen} onClick={toggleDrawer}>
        <List>
          <NavLink to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          <NavLink to="/stuff">
            <ListItem button>
              <ListItemIcon>
                <PlaneIcon />
              </ListItemIcon>
              <ListItemText primary="Stuff" />
            </ListItem>
          </NavLink>
          <NavLink to="/such">
            <ListItem button>
              <ListItemIcon>
                <TrainIcon />
              </ListItemIcon>
              <ListItemText primary="Such" />
            </ListItem>
          </NavLink>
          <NavLink to="/nonsense">
            <ListItem button>
              <ListItemIcon>
                <AutoIcon />
              </ListItemIcon>
              <ListItemText primary="Nonsense" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    )
  }
}

NavDrawer.propTypes = {
  // classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(NavDrawer)

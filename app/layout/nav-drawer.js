import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
// import {MenuItem} from 'material-ui/Menu'
// import Divider from 'material-ui/Divider'
import GroupIcon from 'material-ui-icons/Group'
import PlaneIcon from 'material-ui-icons/Flight'
import TrainIcon from 'material-ui-icons/Train'
import AutoIcon from 'material-ui-icons/AirportShuttle'
// import DraftsIcon from 'material-ui-icons/Drafts'
// import StarIcon from 'material-ui-icons/Star'
// import SendIcon from 'material-ui-icons/Send'
// import MailIcon from 'material-ui-icons/Mail'
// import DeleteIcon from 'material-ui-icons/Delete'
// import ReportIcon from 'material-ui-icons/Report'
import {NavLink, withRouter} from 'react-router-dom'
// import {IfAuthorizedContainer} from '../auth'
// import {IfAuthorizedContainer} from 'react-redux-auth'

/*
partner index
add/edit partner
user index
add/edit user
endpoint index
inbound hosted sftp endpoint
outbound hosted sftp endpoint
hosted mft setup (consisting of from/to folder/endpoints)
route index
add/edit route
*/

const styles = {
  list: {
    width: 250,
    flex: 'initial'
  }
}

class NavDrawer extends Component {
  render() {
    const {toggleDrawer, isOpen} = this.props
    return (
      <Drawer open={isOpen} onClick={toggleDrawer}>
        <List>
          <NavLink to="/">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
          {/* <IfAuthorizedContainer path="to"> */}
          <NavLink to="/partners">
            <ListItem button>
              <ListItemIcon>
                <PlaneIcon />
              </ListItemIcon>
              <ListItemText primary="Partners" />
            </ListItem>
          </NavLink>
          {/* </IfAuthorizedContainer>
          <IfAuthorizedContainer path="to"> */}
          <NavLink to="/users">
            <ListItem button>
              <ListItemIcon>
                <TrainIcon />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </NavLink>
          {/* </IfAuthorizedContainer> */}
          <NavLink to="/endpoints">
            <ListItem button>
              <ListItemIcon>
                <AutoIcon />
              </ListItemIcon>
              <ListItemText primary="Endpoints" />
            </ListItem>
          </NavLink>
          <NavLink to="/routes">
            <ListItem button>
              <ListItemIcon>
                <AutoIcon />
              </ListItemIcon>
              <ListItemText primary="Routes" />
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

export default withRouter(withStyles(styles)(NavDrawer))

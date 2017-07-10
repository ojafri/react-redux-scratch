import debug from 'debug'
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {IfAuthorizedContainer} from 'react-redux-auth'
// import {Menu, Image} from 'semantic-ui-react'

const dbg = debug('app:top-nav')

export default class extends Component {
  handleLoginClicked = () => {
    const {login, history} = this.props
    dbg('handle-login-clicked: history=%o', history)
    login({history})
  }

  render() {
    dbg('render: props=%o', this.props)
    // const {scope, logout} = this.props
    return (
      // <Menu fixed="top" borderless="true" size="small" pointing>
      //   <Menu.Item>
      //     <Image src="https://vignette4.wikia.nocookie.net/batman/images/7/74/BrokenBat.png" size="tiny" />
      //   </Menu.Item>
      //   <Menu.Item>
      //     <IfAuthorizedContainer path="to">
      //       <NavLink exact to="/stuff">
      //         Stuff
      //       </NavLink>
      //     </IfAuthorizedContainer>
      //   </Menu.Item>
      //   <Menu.Item>
      //     <NavLink exact to="/such">
      //       Such
      //     </NavLink>
      //   </Menu.Item>
      //   <Menu.Item>
      //     <NavLink exact to="/nonsense">
      //       Nonsense
      //     </NavLink>
      //   </Menu.Item>
      // </Menu>
      <div className="ui top fixed secondary pointing menu">
        <NavLink exact to="/">
          <img
            id="logo"
            className="ui tiny image item"
            src="https://vignette4.wikia.nocookie.net/batman/images/7/74/BrokenBat.png"
          />
        </NavLink>
        <IfAuthorizedContainer path="to" className="item">
          <NavLink exact to="/stuff">
            Stuff
          </NavLink>
        </IfAuthorizedContainer>
        <div className="ui dropdown item">
          More
          <i className="dropdown icon" />
          <div className="menu">
            <a className="item">
              <i className="edit icon" /> Edit Profile
            </a>
            <a className="item">
              <i className="globe icon" /> Choose Language
            </a>
            <a className="item">
              <i className="settings icon" /> Account Settings
            </a>
          </div>
        </div>
        <NavLink exact to="/such" className="item">
          <a className="item">
            <i className="edit icon" /> Such
          </a>
        </NavLink>
      </div>
      // <nav className="navbar navbar-default navbar-fixed-top">
      //   <div className="container">
      //     <div className="navbar-header">
      //       <a className="navbar-brand" href="#">
      //         React Scratch
      //       </a>
      //     </div>
      //     <div id="navbar" className="collapse navbar-collapse">
      //       <ul className="nav navbar-nav">
      //         <li>
      //           <IfAuthorizedContainer path="to">
      //             <NavLink exact to="/stuff">
      //               Stuff
      //             </NavLink>
      //           </IfAuthorizedContainer>
      //         </li>
      //         <li>
      //           <NavLink exact to="/such">
      //             Such
      //           </NavLink>
      //         </li>
      //         <li>
      //           <IfAuthorizedContainer path="to">
      //             <NavLink exact to="/nonsense">
      //               Nonsense
      //             </NavLink>
      //           </IfAuthorizedContainer>
      //         </li>
      //       </ul>
      //       <ul className="nav navbar-nav navbar-right">
      //         {scope
      //           ? <li>
      //               <button onClick={logout} className="btn btn-default navbar-btn">
      //                 Logout
      //               </button>
      //             </li>
      //           : <li>
      //               <button onClick={this.handleLoginClicked} className="btn btn-default navbar-btn">
      //                 Login
      //               </button>
      //             </li>}
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    )
  }

  componentWillMount() {
    dbg('cwm')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

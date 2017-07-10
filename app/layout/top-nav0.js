import debug from 'debug'
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {IfAuthorizedContainer} from 'react-redux-auth'
import 'semantic-ui-css/components/dropdown'

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
        <div ref={this.handleRef} className="ui dropdown item">
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
    )
  }

  handleRef = c => {
    dbg('handle-ref: c=%o', c)
    this.ref = c
  }

  componentWillMount() {
    dbg('cwm: dd-ref=%o', this.ref)
    this.ref.dropdown()
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

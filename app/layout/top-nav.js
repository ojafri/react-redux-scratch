import debug from 'debug'
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {IfAuthorizedContainer} from 'react-redux-auth'

const dbg = debug('app:top-nav')

export default class extends Component {
  handleLoginClicked = () => {
    const {login, history} = this.props
    dbg('handle-login-clicked: history=%o', history)
    login({history})
  }

  render() {
    dbg('render: props=%o', this.props)
    const {scope, logout} = this.props
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
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
                    <button onClick={this.handleLoginClicked} className="btn btn-default navbar-btn">
                      Login
                    </button>
                  </li>}
            </ul>
          </div>
        </div>
      </nav>
    )
  }

  componentWillMount() {
    dbg('cwm')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

import debug from 'debug'
import React from 'react'
import {Link} from 'react-router'

const dbg = debug('app:top-nav')

export default function topNav({session, login, logout}) {
  dbg('render: session=%o', session)
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">React Scratch</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/home" activeClassName="active">Home</Link>
            </li>
            <li>
              <Link to="/stuff" activeClassName="active">Stuff</Link>
            </li>
            <li>
              <Link to="/nonsense" activeClassName="active">Nonsense</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {session.token
              ? <li>
                  <button onClick={logout} className="btn btn-default navbar-btn">
                    Logout
                  </button>
                </li>
              : <li>
                  <button onClick={() => login('stuff')} className="btn btn-default navbar-btn">
                    Login
                  </button>
                </li>}
          </ul>
        </div>
      </div>
    </nav>
  )
}

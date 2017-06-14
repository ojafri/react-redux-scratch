import debug from 'debug'
import React from 'react'
import {Link} from 'react-router'

const dbg = debug('app:top-nav')

export default function topNav(props) {
  dbg('render: props=%o', props)
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
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/home'
import Stuff from '../stuff/stuff'
import Such from '../such/such'
import Nonsense from '../nonsense/nonsense'
import TopNavContainer from './top-nav-container'
import Footer from './footer'

export default function layout() {
  return (
    <div className="layout greedy-height">
      <div id="wrap" className="wrap greedy-height">
        <TopNavContainer />
        <div id="main" className="greedy-height">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/such" component={Such} />
            <Route path="/nonsense" component={Nonsense} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  )
}

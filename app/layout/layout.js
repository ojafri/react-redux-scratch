import React from 'react'
import TopNavContainer from './top-nav-container'
import Footer from './footer'

export default function layout(props) {
  return (
    <div className="layout greedy-height">
      <div id="wrap" className="wrap greedy-height">
        <TopNavContainer />
        <div id="main" className="container greedy-height">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

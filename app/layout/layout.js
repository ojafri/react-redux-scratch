import React from 'react'
import TopNav from './top-nav'
import Footer from './footer'

export default function layout(props) {
  return (
    <div className="layout greedy-height">
      <div id="wrap" className="wrap greedy-height">
        <TopNav />
        <div id="main" className="container greedy-height">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

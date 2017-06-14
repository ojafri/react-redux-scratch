import debug from 'debug'
import React from 'react'

const dbg = debug('app:home')

export default function home(props) {
  dbg('render: props=%o', props)
  return (
    <div>
      <div className="jumbotron">
        <h1>Welcome to React Scratch</h1>
        <p className="lead">
          The premier web destination for those fans of React and Redux
        </p>
        <iframe
          src="https://ghbtns.com/github-btn.html?user=tony-kerz&repo=redux-scratch&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="160px"
          height="30px"
        />
      </div>
    </div>
  )
}

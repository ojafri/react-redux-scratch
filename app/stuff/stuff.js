import debug from 'debug'
import React from 'react'

const dbg = debug('app:stuff')

export default props => {
  dbg('render: props=%o', props)
  return (
    <div>
      <div className="jumbotron">
        <h1>Stuff</h1>
      </div>
    </div>
  )
}

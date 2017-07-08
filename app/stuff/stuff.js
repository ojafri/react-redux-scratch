import debug from 'debug'
import React from 'react'
import {AuthContainer} from 'react-redux-auth'

const dbg = debug('app:stuff')

export default props => {
  dbg('render: props=%o', props)
  return (
    <AuthContainer>
      <div>
        <div className="jumbotron">
          <h1>Stuff</h1>
        </div>
      </div>
    </AuthContainer>
  )
}

import debug from 'debug'
import React from 'react'
import {AuthContainer} from 'react-redux-auth'

const dbg = debug('app:nonsense')

export default props => {
  dbg('render: props=%o', props)
  return (
    <AuthContainer>
      <div className="jumbotron">
        <h1>Nonsense</h1>
      </div>
    </AuthContainer>
  )
}

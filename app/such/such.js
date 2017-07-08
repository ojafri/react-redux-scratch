import debug from 'debug'
import React, {Component} from 'react'

const dbg = debug('app:such')

export default class extends Component {
  render() {
    dbg('render: props=%o', this.props)
    return (
      <div>
        <div className="jumbotron">
          <h1>Such</h1>
        </div>
      </div>
    )
  }

  componentWillMount() {
    dbg('cwm')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

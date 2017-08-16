import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'
import debug from 'debug'

const dbg = debug('app:layout:snackbar')

class snackbar extends Component {
  render() {
    const {layout} = this.props
    return (
      <Snackbar
        open={layout.snackbar.open}
        autoHideDuration={5e3}
        message={layout.snackbar.message}
        onRequestClose={this.handleRequestClose}
      />
    )
  }

  handleRequestClose = (event, reason) => {
    dbg('handle-request-close: event=%o, reason=%o', event, reason)
    // if (reason === 'clickaway') {
    //   return
    // }

    this.props.closeSnackbar()
  }
}

// snackbar.propTypes = {
//   layout: PropTypes.object.isRequired
// }

export default snackbar

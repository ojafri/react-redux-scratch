import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
// import {AuthContainer} from '../auth'
// import {AuthContainer} from 'react-redux-auth'

const dbg = debug('app:routes')

const styles = theme => ({
  root: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16
    })
  },
  stars: {
    display: 'flex',
    'justify-content': 'center'
  }
})

class routes extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        <Typography align="center" type="headline" gutterBottom>
          Routes
        </Typography>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Routes')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

export default withStyles(styles)(routes)

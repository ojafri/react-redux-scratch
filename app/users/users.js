import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
// import {AuthContainer} from '../auth'
import {AuthContainer} from 'react-redux-auth'

const dbg = debug('app:users')

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

class users extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <AuthContainer>
        <Paper className={classes.root} elevation={5}>
          <Typography align="center" type="headline" gutterBottom>
            Users
          </Typography>
        </Paper>
      </AuthContainer>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Users')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

export default withStyles(styles)(users)

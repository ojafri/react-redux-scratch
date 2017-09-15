import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import {AuthContainer} from '../auth'

const dbg = debug('app:such')

const styles = theme => ({
  root: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16
    })
  },
  stars: {
    display: 'flex',
    justifyContent: 'center'
  }
})

class such extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <AuthContainer>
        <Paper className={classes.root} elevation={5}>
          <Typography align="center" type="headline" gutterBottom>
            Such
          </Typography>
        </Paper>
      </AuthContainer>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Such')
  }
}

export default withStyles(styles)(such)

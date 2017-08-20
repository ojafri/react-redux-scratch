import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

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
    'justify-content': 'center'
  }
})

class such extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        <Typography align="center" type="headline" gutterBottom>
          Such
        </Typography>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Such')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

export default withStyles(styles)(such)

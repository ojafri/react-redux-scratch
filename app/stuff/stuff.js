import debug from 'debug'
import React, {Component} from 'react'
import {withStyles, createStyleSheet} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const dbg = debug('app:stuff')

const styleSheet = createStyleSheet(theme => ({
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
}))

class home extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        <Typography align="center" type="headline" gutterBottom>
          Stuff
        </Typography>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Stuff')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

export default withStyles(styleSheet)(home)

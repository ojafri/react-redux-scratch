import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const dbg = debug('app:home')

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

class home extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        {/* <Title render={title} /> */}
        <Typography align="center" type="headline" gutterBottom>
          Welcome to Universal Data Exchange
        </Typography>
        <Typography align="center" type="subheading" paragraph>
          Enabling Data Interchange with our Valued Partners
        </Typography>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Home')
  }

  componentWillUnmount() {
    dbg('cwu')
  }
}

export default withStyles(styles)(home)

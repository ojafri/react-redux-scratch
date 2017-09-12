import React, {Component} from 'react'
import debug from 'debug'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import aetnaLogo from '../aetna-logo-green.png'
import phoenixLogo from '../phoenix-logo.png'

const dbg = debug('app:footer')

const height = 30

const styles = theme => {
  const {social, grey} = theme.scratch.colors
  return {
    // left/center/right spacing: https://stackoverflow.com/a/43211815/2371903
    root: {
      display: 'flex',
      alignItems: 'center',
      zIndex: 10,
      padding: [10, 20, 10, 20],
      '& > *': {
        display: 'flex',
        flex: 1
      }
    },
    logos: {
      '& img': {
        height
      },
      justifyContent: 'flex-start'
    },
    text: {
      justifyContent: 'center'
    },
    social: {
      '& a': {
        padding: [0, 5, 0, 5],
        color: social,
        textDecoration: 'none',
        fontSize: 20,
        '&:visited': {
          extend: '&',
          '&:hover': {
            color: grey
          }
        }
      },
      justifyContent: 'flex-end'
    }
  }
}

class footer extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper id="footer" className={classes.root} elevation={5}>
        <div className={classes.logos}>
          <a href="http://www.aetna.com">
            <img src={aetnaLogo} />
          </a>
          <img src={phoenixLogo} />
        </div>
        <Typography type="subheading" className={classes.text}>
          Universal Data Exchange
        </Typography>
        <div className={classes.social}>
          <a href="http://www.facebook.com/aetna">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="http://twitter.com/aetna">
            <i className="fa fa-twitter-square" />
          </a>
          <a href="http://linkedin.com/company/aetna">
            <i className="fa fa-linkedin-square" />
          </a>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(footer)

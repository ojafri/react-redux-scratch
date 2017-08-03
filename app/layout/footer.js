import React from 'react'
import debug from 'debug'
import {withStyles, createStyleSheet} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const dbg = debug('app:footer')

const styleSheet = createStyleSheet(theme => {
  const {social, grey} = theme.scratch.colors
  return {
    root: {
      ...theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16
      }),
      display: 'flex',
      'justify-content': 'space-between'
    },
    text: {
      paddingTop: 5
    },
    social: {
      '& a': {
        padding: [0, 5, 0, 5],
        color: social,
        'text-decoration': 'none',
        'font-size': 20,
        '&:visited': {
          extend: '&',
          '&:hover': {
            color: grey
          }
        }
      }
    }
  }
})

function footer(props) {
  dbg('render: props=%o', props)
  const {classes} = props
  return (
    <Paper id="footer" className={classes.root} elevation={5}>
      <Typography type="body1" component="p" className={classes.text}>
        Powered by <a href="https://facebook.github.io/react/">React</a> and{' '}
        <a href="http://redux.js.org/">Redux</a>
      </Typography>
      <div className={classes.social}>
        <a href="https://plus.google.com/u/2/+TonyKerz">
          <i className="fa fa-google-plus-square" />
        </a>
        <a href="http://twitter.com/tony_kerz">
          <i className="fa fa-twitter-square" />
        </a>
        <a href="http://linkedin.com/in/tkerz">
          <i className="fa fa-linkedin-square" />
        </a>
        <a href="http://tony-kerz.github.io">
          <i className="fa fa-github-square" />
        </a>
      </div>
    </Paper>
  )
}

export default withStyles(styleSheet)(footer)

import debug from 'debug'
import React, {Component} from 'react'
import {withStyles, createStyleSheet} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
// import Title from 'react-title-component'

const dbg = debug('app:home')

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

// const title = prev => `${prev} - Home`

class home extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        {/* <Title render={title} /> */}
        <Typography align="center" type="headline" gutterBottom>
          Welcome to React Scratch
        </Typography>
        <Typography align="center" type="subheading" paragraph>
          The premier web destination for those fans of React and Redux
        </Typography>
        <div className={classes.stars}>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=tony-kerz&repo=redux-scratch&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="120px"
            height="30px"
          />
        </div>
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

export default withStyles(styleSheet)(home)

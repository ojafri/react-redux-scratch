// import assert from 'assert'
import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import classNames from 'classnames'
import debug from 'debug'
// import _ from 'lodash'

const dbg = debug('lib:app-bar-image')

const styles = theme => {
  dbg('theme=%o', theme)
  //const height = _.get(theme, 'appBar.height')
  //assert(height, 'theme.appBar.height required')
  return {
    image: {
      height: 50,
      paddingRight: 10
    }
  }
}

const AppBarImage = props => {
  dbg('props=%o', props)
  const {classes, className, logo} = props
  //   return <img className={classNames(classes.image, className)} src={logo} />
  return <img className={classNames(classes.image, className)} src={logo} />
}

AppBarImage.propTypes = {
  logo: PropTypes.string.isRequired
}

export default withStyles(styles)(AppBarImage)

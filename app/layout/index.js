import React from 'react'
import {MuiThemeProvider} from 'material-ui/styles'
import theme from './get-theme'
import Layout from './layout'

export default function() {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout />
    </MuiThemeProvider>
  )
}

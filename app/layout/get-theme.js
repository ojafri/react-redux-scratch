// import {createMuiTheme, createPalette} from 'material-ui/styles'
import {createMuiTheme} from 'material-ui/styles'
import createPalette from 'material-ui/styles/createPalette'
import blue from 'material-ui/colors/blue'
// import purple from 'material-ui/colors/purple'
// import green from 'material-ui/colors/green'
// import red from 'material-ui/colors/red'
import indigo from 'material-ui/colors/indigo'

export default createMuiTheme({
  palette: createPalette({
    // palette: {
    primary: blue,
    secondary: indigo
    // error: red
  }),
  scratch: {
    colors: {
      social: 'rgba(71, 138, 247, 0.72)',
      grey: '#dddddd'
    }
  }
})

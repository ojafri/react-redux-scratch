import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import SearchForm from './search-form'
import Results from './results'

const dbg = debug('app:partners')

const styles = theme => ({
  root: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16
    })
  }
})

class partners extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes, partners, onSort, onPage} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        <Grid container direction="column">
          <Grid item>
            <SearchForm onSubmit={this.props.onFilter} />
          </Grid>
          {partners.data &&
            <Grid item>
              <Results page={partners} onSort={onSort} onPage={onPage} />
            </Grid>}
        </Grid>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('Partners')
  }
}

export default withStyles(styles)(partners)

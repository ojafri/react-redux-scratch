import debug from 'debug'
import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import SearchForm from './search-form'
import Results from './results'

const dbg = debug('app:people')

const styles = theme => ({
  root: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16
    })
  }
})

class people extends Component {
  render() {
    dbg('render: props=%o', this.props)
    const {classes, people, onSort, onPage} = this.props
    return (
      <Paper className={classes.root} elevation={5}>
        <Grid container direction="column">
          <Grid item>
            <SearchForm onSubmit={this.props.onFilter} />
          </Grid>
          {people.data &&
            <Grid item>
              <Results page={people} onSort={onSort} onPage={onPage} />
            </Grid>}
        </Grid>
      </Paper>
    )
  }

  componentWillMount() {
    dbg('cwm')
    this.props.setTitle('People')
  }
}

export default withStyles(styles)(people)

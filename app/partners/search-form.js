import debug from 'debug'
import React from 'react'
import {withStyles} from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {TextField} from '@gfpacheco/redux-form-material-ui'
import {reduxForm, Field} from 'redux-form'

const dbg = debug('app:partners:search-form')

const styles = theme => ({
  root: {
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16
    })
  }
})

let form = props => {
  dbg('render: props=%o', props)
  const {handleSubmit} = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container direction="column">
          <Grid container item>
            <legend>
              <Typography type="subheading" gutterBottom>
                Search
              </Typography>
            </legend>
            <Grid item>
              <Field name="name" component={TextField} label="Name" />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item>
              <Button raised dense type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

form = reduxForm({form: 'partnerSearch'})(form)
export default withStyles(styles)(form)

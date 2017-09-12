import debug from 'debug'
import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import {TextField} from '@gfpacheco/redux-form-material-ui'
import {reduxForm, Field} from 'redux-form'

const dbg = debug('app:people:search-form')

const form = props => {
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
              <Field name="firstName" component={TextField} label="First Name" />
            </Grid>
            <Grid item>
              <Field name="lastName" component={TextField} label="Last Name" />
            </Grid>
            <Grid item>
              <Field name="ssn" component={TextField} label="SSN" />
            </Grid>
          </Grid>
          <Grid container item>
            <Grid item>
              <Button raised dense type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item>
              <Button raised dense>
                Clear
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

const _form = reduxForm({form: 'peopleSearch'})(form)
export default _form

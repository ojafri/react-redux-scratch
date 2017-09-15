import debug from 'debug'
import React from 'react'
import Paper from 'material-ui/Paper'
import DataTable from 'material-ui-data-table'

const dbg = debug('app:people:results')

const columns = [
  {id: 'ssn'},
  {id: 'fullName'},
  {id: 'firstName'},
  {id: 'lastName'},
  {id: 'dateOfBirth', label: 'birth date'},
  {id: 'phoneNumber'},
  {id: 'address'},
  {id: 'city'},
  {id: 'state'},
  {id: 'zip'}
]

const results = props => {
  dbg('render: props=%o', props)
  const {page, onSort, onPage} = props

  return (
    <Paper elevation={5}>
      <DataTable columns={columns} page={page} onSort={onSort} onPage={onPage} />
    </Paper>
  )
}

export default results

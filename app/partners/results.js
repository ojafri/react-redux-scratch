import debug from 'debug'
import React from 'react'
import Paper from 'material-ui/Paper'
import DataTable from 'material-ui-data-table'

const dbg = debug('app:partners:results')

const columns = [{id: 'id'}, {id: 'name'}, {id: 'createdAt'}, {id: 'updatedAt'}]

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

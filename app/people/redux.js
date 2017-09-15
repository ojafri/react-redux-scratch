import config from 'config'
// import getRedux from 'redux-page'
import {feathers} from 'web-helpr'
import getRedux from '../shared/redux-page'
import {openSnackbar} from '../layout/layout-redux'

const url = config.api.url
const resource = 'people'
const index = feathers.getIndex({url, resource})
export default getRedux({resource: 'people', index, limit: 3, onFailure: openSnackbar})

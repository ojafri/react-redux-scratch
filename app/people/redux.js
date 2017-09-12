import config from 'config'
import getRedux from 'redux-page'
import {feathers} from 'web-helpr'

const url = config.api.url
const resource = 'people'
const index = feathers.getIndex({url, resource})
export default getRedux({resource: 'people', index, limit: 3})

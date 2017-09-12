import config from 'config'
import getRedux from 'redux-page'
import {feathers} from 'web-helpr'

const url = config.api.url
const resource = 'partners'
const index = feathers.getIndex({url, resource})
export default getRedux({resource: 'partners', index, limit: 5})

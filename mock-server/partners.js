import faker from 'faker'
// import _ from 'lodash'
// import RandExp from 'randexp'
// import debug from 'debug'
import {feathers} from 'json-server-helpr'
import resource from './resource'

// const dbg = debug('app:mock:people')

const {pre, post} = feathers

export default Object.assign({}, resource, {
  fake: index => {
    return {
      id: index,
      name: faker.company.companyName(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    }
  },

  pre,
  post
})

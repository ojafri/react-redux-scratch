import test from 'ava'
import debug from 'debug'
import * as actions from './_duck'

const dbg = debug('test:duck')

dbg('actions=%o', actions)

test('duck', t => {
  t.truthy(actions.action1 && actions.action2 && actions.default)
})

import test from 'ava'
import minimatch from 'minimatch'

test('minimatch', t => {
  const options = {matchBase: true}
  t.truthy(minimatch('/stuff', '/stuff', options))
  t.truthy(minimatch('/stuff/such', '/stuff/**', options))
})

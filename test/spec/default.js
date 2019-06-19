import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import vscodeJsdoc_1 from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof vscodeJsdoc_1, 'function')
  },
  async 'calls package without error'() {
    await vscodeJsdoc_1()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await vscodeJsdoc_1({
      text,
    })
    ok(res, text)
  },
}

export default T
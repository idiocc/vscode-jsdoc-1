import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import vscodeJsdoc_1 from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await vscodeJsdoc_1({
      text: this.input,
    })
    return res
  },
  context: Context,
})
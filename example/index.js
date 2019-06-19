/* alanode example/ */
import vscodeJsdoc_1 from '../src'

(async () => {
  const res = await vscodeJsdoc_1({
    text: 'example',
  })
  console.log(res)
})()
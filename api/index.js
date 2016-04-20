/**
 * Mocking client-server processing
 */
import _products from './stubbed.json'

const TIMEOUT = 1000

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_products), timeout || TIMEOUT)
  },

  buyProducts(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  }
}

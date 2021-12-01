import api from '../../api'
import SKUModel from '../../models/sku'
export default {
  namespaced: true,
  state () {
    return {
      all: [],
      productId: null
    }
  },
  getters: {
    all: state => state.all.filter(x => state.productId === null? true : x.productId === state.productId)
  },
  mutations: {
    SET_ALL (state, value) {
      state.all = value
    },
    SET_PRODUCT_ID (state, value) {
      state.productId = value
    }
  },
  actions: {
    getAll ({commit}) {
      return api.getAllSKU().then(({result}) => {
        const skuList = []
        result.forEach(({_id, productId, name, desc, price, image, isShopee, isLazada}) => {
          skuList.push(new SKUModel(_id, productId, name, desc, price, image, isShopee, isLazada))
        })
        commit('SET_ALL', skuList)
        // TODO: throw something to router for handle state
        return Promise.resolve('200')
      }).catch(err => {
        console.error(err)
        return Promise.resolve('200')
      })
    },
    filterById ({commit}, productId) {
      commit('SET_PRODUCT_ID', productId)
    },
    draft () {
      return Promise.resolve(new SKUModel('', null, '', '', 0,'https://www.fenwick.co.uk/dw/image/v2/BBKK_PRD/on/demandware.static/-/Sites-fenwick-master-catalog/default/dw46146d85/images/large/0000102333.jpg', false, false))
    },
  }
}
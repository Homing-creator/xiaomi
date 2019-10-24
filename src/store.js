import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [{
      isSelect: true,
      id: '10',
      name: 'Redmi 8A',
      price: [
        {
          version: '3GB+32GB',
          price: '699'
        }
      ],
      color: [
        {
          imgSrc: require('./assets/product/pms_1571387275.0163295.jpg'),
          name: '深海蓝'
        }
      ],
      number: '1'
    }]
  },
  mutations: {
    addGoods (state, data) {
      state.cartList.push(data)
    },
    deleteGood (state, index) {
      state.cartList.splice(index, 1)
    }
  },
  actions: {

  }
})

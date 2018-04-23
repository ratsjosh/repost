import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      {name: 'Banana Skin', price: 20},
      {name: 'Skim Milk', price: 40},
      {name: 'Mango Pie', price: 20},
      {name: 'Apple Juice', price: 60}
    ]
  },
  getters: {
    products: state => {
      return state.products
    },
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
    }
  }
})

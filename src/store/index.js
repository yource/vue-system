import Vue from 'vue'
import Vuex from 'vuex'
import menu from './modules/menu'
import overview from './modules/overview'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        menu,
        overview
    }
})
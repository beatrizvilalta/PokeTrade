import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PokemonList from '../views/PokemonList.vue'
import Trades from '../views/Trades.vue'
import Historic from '../views/Historic.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trades',
    name: 'Trade',
    component: Trades
  },
  {
    path: '/pokemons',
    name: 'Pokemons',
    component: PokemonList
  },
{
    path: '/historic',
    name: 'Historic',
    component: Historic
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

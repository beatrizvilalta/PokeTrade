<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <hr>
      <h4 class="is-size-4">Pokedex</h4>
      <input input class="input is-rounded" type="text" placeholder="Buscar pokemon pelo nome">
      <button class="button is-fullwidth is-success" id="searchBtn" @click="search_pokemon">Buscar</button>
      <div v-for="(poke,index) in filteresPokemons" :key="index"> 
      <Pokemon :name="poke.name" :url="poke.url" :num="index+1"/>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from '/Users/beatrizvilalta/Desktop/pokedex/src/components/Pokemon';
export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      filteresPokemons: [],
      search: ''
    }
  },
  created: function() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(response => {
      console.log("Get pokemon list");
      this.pokemons = response.data.results;
      this.filteresPokemons = response.data.results;
    })
  },
  components: {
    Pokemon
  // },
  // computed: {
  //   resultSearch: function() {
  //     if(this.search == '' || this.search == ' ') {
  //       return this.pokemons;
  //     } else {
  //       return this.pokemons.filter(pokemon => pokemon.name == this.search);
  //     }
  //   }
  },
  methods: {
    search_pokemon: function() {
      this.filteresPokemons = this.pokemons;
      if(this.search == '' || this.search == ' ') {
        this.filteresPokemons = this.pokemons;
      } else {
        this.filteresPokemons = this.pokemons.filter(pokemon => pokemon.name == this.search);
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#searchBtn {
  margin-top: 2%;
}
</style>

<template>
  <div class="pokemons">
    <div class="column is-half is-offset-one-quarter">
      <h4 class="title is-5">Pokemon List</h4>
      <h4>Checkout the first generation Pokemons for your trade.</h4>
      <router-link to="/trades" tag="button" class="button is-rounded is-small is-success is-fullwidth">Start Trade</router-link>
      <div v-for="(poke, index) in pokemons" :key="index">
        <Pokemon :name="poke.name" :url="poke.url" :num="index + 1" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemon from "@/components/Pokemon.vue";
import axios from "axios";

export default {
  name: "pokemon",
  data() {
    return {
      pokemons: []
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        this.pokemons = response.data.results;
      });
  },
  components: {
    Pokemon
  },
};
</script>


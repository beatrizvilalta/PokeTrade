<template>
  <div class="trades">
    <h1 class="title is-3">Pokemon Trade</h1>
    <h4 class="title is-5">Choose your decks</h4>
    <small>Don't know which pokemon to choose? Checkout the <router-link to="/pokemons" id="linkList">Pokemons List</router-link>.</small>
    <Trade />
  </div>
</template>

<script>
import Trade from "@/components/Trade.vue";

export default {
  components: {
    Trade
  }
}
</script>

<style>
  #linkList {
    color: #42b983;
  }
</style>

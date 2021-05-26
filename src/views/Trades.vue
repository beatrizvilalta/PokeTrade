<template>
  <div class="trades">
    <h1 class="title is-3">Pokemon Trade</h1>
    <h4 class="title is-5">Choose your decks</h4>
    <small>Don't know which pokemon to choose? Checkout the <router-link to="/pokemons" id="linkList">Pokemons List</router-link>.</small>
    <TradeComponent />
  </div>
</template>

<script>
import TradeComponent from "@/components/TradeComponent.vue";

export default {
  components: {
    TradeComponent
  }
}
</script>

<style>
  #linkList {
    color: #42b983;
  }
</style>

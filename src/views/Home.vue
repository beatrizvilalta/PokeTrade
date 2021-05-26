<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pokemon-logo.png">
    <h1  class="title is-2">Pokemon Trade</h1>
    <h4 class="title is-3">Choose your decks and see if it is worth the trade</h4>
    <router-link to="/trades" tag="button" class="button is-rounded" id="startBtn">Start Trade</router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style>
  #startBtn {
    width: 30%;
    background-color: #42b983;
    color: white;
  }
</style>



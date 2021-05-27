<template>
  <div class="container">
    <div id="pokemon">
      <div class="card">
        <div class="card-image">
          <figure>
            <img :src="currentImg" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left"></div>
            <div class="media-content">
              <p class="title is-4">{{ num }} - {{ name | upper }}</p>
              <p class="subtitle is-6">Power: {{ pokemon.power }}</p>
            </div>
          </div>

          <div class="content">
            <button class="button is-medium" @click="changeSprite">
              Change Sprite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tradeList: [
        {
          tradeOne: [
            {
              givenPokemons: [
                {
                  name: "Pikachu",
                  power: 10,
                },
                {
                  name: "Charmander",
                  power: 20,
                },
              ],
              givenTotalPower: 30,
              OfferPokemons: [
                {
                  name: "Poke1",
                  power: 40,
                },
                {
                  name: "Poke2",
                  power: 60,
                },
              ],
              offerTotalPower: 100,
              date: "21/05/2021",
            },
          ],
          tradeTwo: [
            {
              givenPokemons: [
                {
                  name: "Teste",
                  power: 30,
                },
                {
                  name: "Teste 2",
                  power: 20,
                },
              ],
              givenTotalPower: 50,
              OfferPokemons: [
                {
                  name: "Teste 3",
                  power: 60,
                },
                {
                  name: "Teste 4",
                  power: 60,
                },
              ],
              offerTotalPower: 120,
              date: "24/05/2021",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>
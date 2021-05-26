<template>
  <div class="container" id="container">
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="text-center">Giving cards</h2>
        <div class="list-group">
          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 0)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 1)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 2)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 3)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 4)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 5)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <p>Total given power: {{ totalGivenPower }}</p>
        </div>
      </div>

      <div class="col">
        <h2 class="text-center">Offer cards</h2>

        <div class="list-group">
          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 0)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 1)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 2)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 3)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 4)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 5)">
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index">
              {{ pokemon.name }}
            </option>
          </select>

          <p>Total offer power: {{ totalOfferPower }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <button type="submit" class="button is-medium is-rounded is-success" @click="tradeDidPress()">
          Trade
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <p>{{ tradeMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pokemons: [],
      tradeLimit: 6,
      givenPokemons: new Array(6),
      totalGivenPower: 0,
      offerPokemons: new Array(6),
      totalOfferPower: 0,
      tradeMessage: "",
    };
  },
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((response) => {
        this.pokemons = response.data.results;
        this.pokemons.unshift({ name: "Choose one pokemon", url: "" });
      });
  },
  methods: {
    addGivenPower(pokemonIndex, index) {      

      if (pokemonIndex == 0) {
        delete this.givenPokemons[index];
      } else {
        axios
        .get(this.pokemons[pokemonIndex].url)
        .then((response) => {
          this.givenPokemons.splice(index, 1, {name: this.pokemons[pokemonIndex].name, power: response.data.base_experience});
          this.totalGivenPower = this.givenPokemons.reduce( (total, current) => total + current.power, 0 );
          this.updateTradeMessage();
        });
      }

      this.totalGivenPower = this.givenPokemons.reduce( (total, current) => total + current.power, 0 );
      this.updateTradeMessage();
    },
    addOfferPower(pokemonIndex, index) {
      if (pokemonIndex == 0) {
        delete this.offerPokemons[index];
      } else {
          axios.get(this.pokemons[pokemonIndex].url).then((response) => {
            this.offerPokemons.splice(index, 1, {name: this.pokemons[pokemonIndex].name, power: response.data.base_experience});
            this.totalOfferPower = this.offerPokemons.reduce((total, current) => total + current.power, 0);
            this.updateTradeMessage();
          });
      }
      this.totalOfferPower = this.offerPokemons.reduce((total, current) => total + current.power, 0);
      this.updateTradeMessage();
    },
    updateTradeMessage() {
      if (this.totalGivenPower == 0 && this.totalOfferPower == 0) {
        this.tradeMessage = "";
      } else if (this.totalGivenPower < this.totalOfferPower){
        this.tradeMessage = "Trade is worth it";
      } else {
        this.tradeMessage = "Trade is not worth it.";
      }
    },
    tradeDidPress() {
      if (this.totalOfferPower > this.totalGivenPower) {
        alert('Trade is not worth it');
      } else if(this.totalGivenPower == 0 && this.totalOfferPower == 0) {
        alert('Choose your pokemons');
      } else {
        console.log("GIVEN");
        console.log(this.givenPokemons);

        console.log("OFFER");
        console.log(this.offerPokemons);
      }
      
    }
  }
};
</script>

<style>
#container {
  margin-top: 30px;
}
</style>

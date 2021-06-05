<template>
  <div class="container" id="container">
    <div class="row" id="messageContainer">
      <div class="col text-center">
        <p
          v-bind:class="[worthIt ? 'message is-success' : 'message is-danger']"
        >
          {{ tradeMessage }}
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col">
        <h2 class="text-center title is-5">Giving cards</h2>
        <div class="list-group">
          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 0)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 1)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 2)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 3)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 4)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addGivenPower($event.target.value, 5)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <p>Total given power: {{ totalGivenPower }}</p>
        </div>
      </div>

      <div class="col">
        <h2 class="text-center title is-5">Offer cards</h2>

        <div class="list-group">
          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 0)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 1)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 2)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 3)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 4)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            v-on:change="addOfferPower($event.target.value, 5)"
          >
            <option
              v-for="(pokemon, index) in pokemons"
              :key="index"
              :value="index"
            >
              {{ pokemon.name }}
            </option>
          </select>

          <p>Total offer power: {{ totalOfferPower }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <button
          type="submit"
          class="button is-medium is-rounded is-success"
          @click="tradeDidPress()"
          id="tradeBtn"
        >
          Trade
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index";
import BACKEND_URL from '../../utils/requests';

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
      worthIt: true,
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
        axios.get(this.pokemons[pokemonIndex].url).then((response) => {
          this.givenPokemons.splice(index, 1, {
            name: this.pokemons[pokemonIndex].name,
            power: response.data.base_experience,
          });
          this.totalGivenPower = this.givenPokemons.reduce(
            (total, current) => total + current.power,
            0
          );
          this.updateTradeMessage();
        });
      }

      this.totalGivenPower = this.givenPokemons.reduce(
        (total, current) => total + current.power,
        0
      );
      this.updateTradeMessage();
    },
    addOfferPower(pokemonIndex, index) {
      if (pokemonIndex == 0) {
        delete this.offerPokemons[index];
      } else {
        axios.get(this.pokemons[pokemonIndex].url).then((response) => {
          this.offerPokemons.splice(index, 1, {
            name: this.pokemons[pokemonIndex].name,
            power: response.data.base_experience,
          });
          this.totalOfferPower = this.offerPokemons.reduce(
            (total, current) => total + current.power,
            0
          );
          this.updateTradeMessage();
        });
      }
      this.totalOfferPower = this.offerPokemons.reduce(
        (total, current) => total + current.power,
        0
      );
      this.updateTradeMessage();
    },
    updateTradeMessage() {
      if (this.totalGivenPower == 0 && this.totalOfferPower == 0) {
        this.tradeMessage = "";
      } else if (this.totalGivenPower < this.totalOfferPower) {
        this.tradeMessage = "Trade is worth it";
        this.worthIt = true;
      } else {
        this.tradeMessage = "Trade is not worth it.";
        this.worthIt = false;
      }
    },
    tradeDidPress() {
      if (this.totalGivenPower == 0 && this.totalOfferPower == 0) {
        alert("Choose your pokemons");
      } else if (!this.worthIt) {
        alert("Trade is not worth it");
      } else {
        console.log("else");
        let trade = {
          given_total_power: this.totalGivenPower,
          offer_total_power: this.totalOfferPower,
        };
        axios
          .post(BACKEND_URL+ "/api/trades", trade)
          .then((response) => {

            if (response.status == 200) {
              this.givenRequest(this.givenPokemons, response.data.id);
              this.offerRequest(this.offerPokemons, response.data.id);
              router.push('Historic')
            }
          })
          .catch(console.error());
      }
    },
    givenRequest(givenList, tradeId) {
      givenList.forEach((current) => {
        let given = {
          name: current.name,
          offer: false,
          trade_id: tradeId,
        };
        axios
          .post(BACKEND_URL + "/api/cards", given)
          .then()
          .catch(console.error());
      });
    },
    offerRequest(offerList, tradeId) {
      offerList.forEach((current) => {
        let offerRequest = {
          name: current.name,
          offer: true,
          trade_id: tradeId,
        };
        axios
          .post(BACKEND_URL + "/api/cards", offerRequest)
          .then()
          .catch(console.error());
      });
    }
  }
};
</script>

<style>
#container {
  margin-top: 30px;
}

#messageContainer {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

#tradeBtn {
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>

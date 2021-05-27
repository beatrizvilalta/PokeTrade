<template>
  <div class="container" id="historic">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Trade #{{this.id}} - {{ formatDate(createdAt) }}</h1>
          <table style="width: 100%">
            <thead>
              <tr>
                <th>Given Cards</th>
                <th>Offer Cards</th>
              </tr>
            </thead>
            <tbody>
                <td> <ul> 
                    <li v-for="(pokemon, index) in this.givenCards" :key="index"> {{pokemon.name}} </li> 
                </ul></td>
                <td> <ul> <li v-for="(pokemon, index) in this.offerCards" :key="index"> {{pokemon.name}} </li> </ul> </td>
            </tbody>
            <tfoot>
              <tr>
                <td>
                  <b>Given Total Power: {{ givenTotalPower }} </b>
                </td>
                <td>
                  <b>Offer Total Power: {{ offerTotalPower }}</b>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios
    .get("http://localhost:9090/api/cards/"+ this.id)
    .then((response) => {
      
      this.offerCards = response.data.filter(poke => { return poke.offer } );
      this.givenCards = response.data.filter(poke => { return !poke.offer } );
    }).catch(console.error());
  },
  data() {
    return {
      givenCards: [],
      offerCards: []
    };
  },
  props: {
    id: Number,
    givenTotalPower: Number,
    offerTotalPower: Number,
    createdAt: String,
  },
  methods: {
    formatDate(value) {
      let date = new Date(value);
      return date.getDate() + '/'+ (date.getMonth()) + '/' + date.getFullYear();
    }
  }
};
</script>

<style>
#historic {
  margin-top: 2%;
}

li {
    list-style-type: none;
}
</style>
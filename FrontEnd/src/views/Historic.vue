<template>
  <div class="historic">
    <div class="column is-half is-offset-one-quarter">
      <h4 class="title is-5">Trade History</h4>
      <h4>Check the previous trades registered</h4>
      <div v-for="(trade, index) in trades" :key="index">
        <Historic :id="trade.id" :givenTotalPower="trade.given_total_power" :offerTotalPower="trade.offer_total_power" :createdAt="trade.createdAt"/>
      </div>
    </div>
  </div>
</template>

<script>
import Historic from "@/components/HistoricComponent.vue";
import axios from 'axios';

export default {
  name: "historic",
  components: {
    Historic
  },
  data() {
    return {
      trades:[]
    };
  },
  created() {
    axios
    .get("http://localhost:9090/api/trades")
    .then((response) => {
      this.trades = response.data;
    }).catch(console.error());
  }
}
</script>

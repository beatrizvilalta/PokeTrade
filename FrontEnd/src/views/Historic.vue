<template>
  <div class="historic">
    <h1 class="title is-3">Historic</h1>
    <h4>Check the previous trades registered</h4>
    <div v-for="(trade, index) in trades" :key="index">
      <Historic />
    </div>
  </div>
</template>

<script>
import Historic from "@/components/HistoricComponent.vue";

export default {
  components: {
    Historic
  },
  data() {
    return {
      trades: [{
        tradeOne: [],
        tradeTwo: []
      }
      ]
    }
  }
}
</script>

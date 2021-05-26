<template>
    <div class="container" id="container">
            <div class="row justify-content-center">
                <div class="col">
                    <h2 class="text-center">Giving cards</h2>
                    <div class="list-group">
                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 0)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 1)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 2)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 3)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 4)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addGivenPower($event.target.value, 5)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>
                                                
                        <p>Total given power: {{totalGivenPower}}</p>
                    </div>
                </div>

                <div class="col">
                    <h2 class="text-center">Offer cards</h2>

                    <div class="list-group">

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 0)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 1)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 2)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 3)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 4)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <select class="form-select form-select-lg mb-3" v-on:change="addOfferPower($event.target.value, 5)"> 
                            <option v-for="(pokemon, index) in pokemons" :key="index" :value="index"> {{pokemon.name}} </option>                                    
                        </select>

                        <p>Total offer power: {{totalOfferPower}}</p>
                    </div>
                </div>

                
            </div>            
             <div class="row">
                <div class="col text-center">
                    <button type="submit" class="btn btn-primary" @click="tradeDidPress()">Trade</button>
                </div>
              </div>
              <div class="row">
                <div class="col text-center">
                    <p>{{tradeMessage}}</p>
                </div>
              </div>
        </div>
  
</template>

<script>
export default {
    data() {
        return {                        
            pokemons: [
                {
                    name: "Choose one pokemon",
                    power: 0
                },
                {
                    name: "Poke-1",
                    power: 10
                },
                {
                    name: "Poke-2",
                    power: 15
                },
                {
                    name: "Poke-3",
                    power: 20
                }
            ],
            tradeLimit: 6,
            givenPokemons: new Array(6),            
            totalGivenPower: 0,
            offerPokemons: new Array(6),            
            totalOfferPower: 0,
            tradeMessage: ""
        }
    }, 
    methods: {        
        addGivenPower(pokemonIndex, index) {                             
            if (pokemonIndex == 0) {                                                
                delete this.givenPokemons[index];                
            } else {
                this.givenPokemons.splice(index, 1, this.pokemons[pokemonIndex])
            }


            this.totalGivenPower = this.givenPokemons.reduce((total, current) => total + current.power, 0);
            this.updateTradeMessage()
        },
        addOfferPower(pokemonIndex, index) {
            if (pokemonIndex == 0) {                                                
                delete this.offerPokemons[index];
            } else {
                this.offerPokemons.splice(index, 1, this.pokemons[pokemonIndex])
            }
            
            this.totalOfferPower = this.offerPokemons.reduce((total, current) => total + current.power, 0);
            this.updateTradeMessage()
        },
        updateTradeMessage() {            
            if (this.totalGivenPower <= this.totalOfferPower) {
                this.tradeMessage = "Tá valendo"
            } else {
                this.tradeMessage = "Vale não po, mas se quiser pode ir lá"
            }
        },
        tradeDidPress() {
            console.log("GIVEN")
            console.log(this.givenPokemons)

            console.log("OFFER")
            console.log(this.offerPokemons)
        }
    }

}
</script>

<style>
    #container {
        margin-top: 30px;
    }
</style>

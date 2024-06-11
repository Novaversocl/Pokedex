<script>
import CardPokemon from "./components/CardPokemon.vue";
import { getPokemonPerPage } from "./helpers/fetchPokemon.js";

export default {
  name: 'App',
  components: {
    CardPokemon,
  },
  data() {
    return {
      pokemonList: [],
      contadorDescubiertos: 0, // Contador de Pokémon descubiertos
    };
  },
  methods: {
    async setPokemonList() {
      const pokemonListData = await getPokemonPerPage();
      this.pokemonList = pokemonListData;
    },
    incrementarContador() {
      this.contadorDescubiertos++;
    }
  },
  mounted() {
    this.setPokemonList();
  },

};
</script>


<template>

  <h1 class="textocentrado press-start-2p-regular">¿Quién es ese Pokémon?</h1>


  <section class="poke">


<div class="pokedex__capa2">
  <!-- pokedex__capa2 -->
  <div class="pokedex">
      <div class="screen">

        <h1 class="texto__screen press-start-2p-regular">Pokedex</h1>

        <p class="texto__screen press-start-2p-regular__2">Pokémons descubiertos: {{ contadorDescubiertos }}</p>


      </div>

<div class="controls-container">

  <div class="controls__2">
        <button class="prev-btn"></button>
      </div>


      <div class="controls">
        
        <!-- <button class="prev-btn"></button> -->
        <button class="next-btn"></button>
        <button class="next-btn"></button>
        <button class="next-btn"></button>
        <button class="next-btn"></button>
      </div>

</div>
    </div>




  <!-- pokedex__capa2 -->
</div>






  </section>



  <h1 class="  press-start-2p-regular__3 ">Pokemon API</h1>
  <div>
    <!-- <p class="press-start-2p-regular__2">Pokémons descubiertos: {{ contadorDescubiertos }}</p> -->
  </div>

  <div v-if="pokemonList.length === 0">No hay Pokemon en la lista</div>
  <div v-else class="container">
    <div class="card" v-for="pokemon in pokemonList" :key="pokemon.name">
      <CardPokemon :pokemon="pokemon" @incrementar-contador="incrementarContador" />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.press-start-2p-regular {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}


.press-start-2p-regular__3 {

  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  color: rgb(255, 234, 5);
  padding: 1rem;

}


.press-start-2p-regular__2 {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
}



.textocentrado {

  padding: 2rem;
  color: rgb(255, 234, 5);
  text-align: center;

}


.controls-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px; */
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

@media (min-width: 992px) {

  /* Pantallas lg (≥ 992px) */
  .container {
    grid-template-columns: repeat(4, 1fr);
    /* Máximo 4 columnas */
  }
}


.titulo {

  font-family: Arial, sans-serif;
  /* Fuente del texto */
  font-weight: bold;
  /* Grosor de la fuente */
  background: linear-gradient(90deg, #9f8c8c, #ee5e04, #1114dc);
  /* Degradado de colores */
  -webkit-background-clip: text;
  /* Aplicar el gradiente al texto */
  -webkit-text-fill-color: transparent;
  /* Hacer transparente el color del texto */



}


.poke {
  background-color: #a3b23400;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
}


.pokedex__capa2{

  width: 350px;
  height: 550px;
  background-color: #e40f0f;
  border: 5px solid #000;
  border-radius: 0px 0px 0px 20px ;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);


}


.pokedex {
  width: 300px;
  background-color: #faf5f5;
  border: 5px solid #000;
  border-radius: 0px 0px 0px 20px ;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}


.screen {
  background-color: #a3b434;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border: 2px solid #000;
  border-radius: 10px;
}

.texto__screen {

  padding: 1rem;
  color: #1f4301;
  text-align: center;

}

.screen img {
  width: 100%;
  height: auto;
}

.controls {

  /* margin-top: 30px; */
  display: flex;

  display: grid;
  justify-content: right;
}

.controls__2 {

  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}




.prev-btn {

  padding: 10px;

  border-radius: 100%;
  background-color: #b61e1e;
  color: #fff;
  cursor: pointer;

}


.next-btn {
  /* padding: 10px 20px 1px 10px; */
  width: 35px;
  height: 1px;
  margin: 1px;
  border-radius: 5px;
  background-color: #41554a;
  color: #fff;
  cursor: pointer;
}

.prev-btn:hover {

  background-color: #ce2121;

}



.next-btn:hover {
  background-color: #1cd569;
}
</style>

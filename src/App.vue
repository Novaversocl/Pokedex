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

    <h1 class="textocentrado press-start-2p-regular">GAME 3D Pokedex Pokémon</h1>

  <h2 class="textocentrado press-start-2p-regular">¿Quién es ese Pokémon?</h2>


  <section class="poke">


    <div class="pokedex__capa2">

      <div class="contenedor__superior">
        <button class="prev-btn__superior" :class="{ 'prev-btn__superioraudio': contadorDescubiertos > 0 }"></button>

        <!-- <button class="prev-btn__superior"></button> -->
        <button class="prev-btn__superiorrojo"></button>
        <button class="prev-btn__superioramarillo"></button>
        <button class="prev-btn__superiorverde"></button>

      </div>

      <div class="salto__linea"></div>

      <div class="linea"></div>

      

      <div class="salto_carcasa"></div>
      <!-- pokedex__capa2 -->
      <div class="pokedex">
        <div class="screen">

          <h1 class="texto__screen press-start-2p-regular">Pokedex</h1>

          <p class="texto__screenby press-start-2p-regularby">Novaverso</p>


          <p class="texto__screen2 press-start-2p-regular__2">Pokémons descubiertos: {{ contadorDescubiertos }}</p>


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

<div class="container__palanca">


<button class="cuadrado"></button>


<div class="signo__suma">+</div>

</div>
<div class="linea"></div>

<!-- <div class="cuadrado">-</div>

<div class="signo__suma">+</div> -->

      <!-- pokedex__capa2 -->
    </div>






  </section>

  <div class="salto__linea"></div>


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

.red-button {
  background-color: red;
}
.container__palanca {
        display: flex;
        justify-content: space-between;
    }

.cuadrado{

  width: 300px;
  height: 70px;
  margin: 60px;
  border-radius: 5px;
  background-color: #148245;
  color: #fff;
  cursor: pointer;

}





.signo__suma {
        color: #012f2d;
        font-size: 10rem;
        font-weight: bold;
        text-align: right;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-stroke-width: 1.0rem;
        -webkit-text-stroke-color: #041413;

        
    }

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.press-start-2p-regular {
  font-family: "Press Start 2P", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 2rem;
}


.press-start-2p-regularby {
  font-family: "Press Start 2P", system-ui;
  font-weight: 100;
  font-style: normal;
  font-size: 0.5rem;
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
  font-weight: 200;
  font-style: normal;
  font-size: 0.9rem;
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


.salto_carcasa {

  padding-bottom: 3rem;

}

.salto__linea {

padding-bottom: 1rem;

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


.pokedex__capa2 {

  width: 350px;
  height: 620px;

  background: linear-gradient(#fa0101, #a80606);

  border: 5px solid #000;
  border-radius: 20px 20px 20px 20px;
  padding: 20px;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
  box-shadow: 
    5px 5px 15px rgba(0, 0, 0, 0.3), /* General shadow for the 3D effect */
    -5px -5px 10px rgba(204, 87, 87, 0.5) inset, /* Top-left highlight for 3D effect */
    5px 5px 10px rgba(0, 0, 0, 0.1) inset; /* Bottom-right shadow for 3D effect */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  transform: perspective(1000px) rotateX(20deg) rotateY(-20deg);

}
.pokedex__capa2:hover {
  transform: perspective(1000px) rotateX(0) rotateY(0);
  box-shadow: 
    10px 10px 30px rgba(0, 0, 0, 0.3), /* General shadow for the 3D effect */
    -10px -10px 20px rgba(4, 4, 4, 0.5) inset, /* Top-left highlight for 3D effect */
    10px 10px 20px rgba(0, 0, 0, 0.1) inset; /* Bottom-right shadow for 3D effect */
}


.pokedex {
  width: 300px;
  background-color: #faf5f5;
  border: 1.5px solid #000;
  border-radius: 0px 0px 0px 20px;
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

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  white-pace: nowrap; /* Keeps the content on a single line */
  
  animation: 
    typing 3.5s steps(30, end), 
    blink-caret .75s step-end infinite;

}/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}


.texto__screen2 {

padding: 1rem;
color: #1f4301;
text-align: center;

overflow: hidden; /* Ensures the content is not revealed until the animation */
white-pace: nowrap; /* Keeps the content on a single line */

animation: 
  typing .5s steps(30, end), 
  blink-caret .75s step-end infinite;

}/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: orange; }
}


.texto__screenby {

padding: 0;
color: #1f4301;
text-align: center;

overflow: hidden; /* Ensures the content is not revealed until the animation */
white-pace: nowrap; /* Keeps the content on a single line */

animation: 
  typing 8.5s steps(30, end), 
  blink-caret .95s step-end infinite;

}/* The typing effect */
@keyframes typing {
from { width: 0 }
to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
from, to { border-color: transparent }
50% { border-color: orange; }
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

.contenedor__superior {
          
        }
        .prev-btn__superior, 
        .prev-btn__superiorrojo, 
        .prev-btn__superioramarillo, 
        .prev-btn__superiorverde {
            margin-right: 0.5rem;
        }
        .contenedor__superior button:last-child {
            margin-right: 0; /* Eliminar el margen derecho del último botón */
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
  border: none;
  outline: none;
  font-size: 16px;
  animation: blink 0.5s infinite;
}

@keyframes blink {
  0%, 100% {
    background-color: rgb(52, 3, 3);
   
    
  }
  50% {
    background-color: rgb(255, 21, 21);
   
    box-shadow: 0 0 10px 0.1px #f60909;


  }
}

.prev-btn__superior {
  padding: 1.5rem;
  border-radius: 100%;
  background-image: linear-gradient(#1e23ad, #0bfdfd);
  cursor: pointer;
  color: white;
  box-shadow: 0 0 7px 7px #437cac;
}

.prev-btn__superioraudio {
  padding: 1.5rem;
  border-radius: 100%;
  background-image: linear-gradient(#1e23ad, #0bfdfd);
  cursor: pointer;
  color: white;
  box-shadow: 0 0 7px 7px #437cac;
  animation: blink2 0.5s infinite;
}@keyframes blink2 {
  0%, 100% {
    background-color: #4a4eb4;
   
    
  }
  50% {
    background-color: #4247cc;
   
    box-shadow: 0 0 10px 0.1px #191fd0;


  }
}




.prev-btn__superiorrojo {
  padding: 0.5rem;
  border-radius: 100%;
  background-image: linear-gradient(#e50a0a, #ea3810);
  cursor: pointer;
  color: white;

}
.prev-btn__superioramarillo {
  padding: 0.5rem;
  border-radius: 100%;
  background-image: linear-gradient(#efd80e, #b3b90e);
  cursor: pointer;
  color: white;

}

.prev-btn__superiorverde {
  padding: 0.5rem;
  border-radius: 100%;
  background-image: linear-gradient(#19ef0e, #30cd1c);
  cursor: pointer;
  color: white;

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

.linea {
 
            position: relative;
            width: 100%; /* Ancho de la línea */
            height: 2px; /* Grosor de la línea */
            background-color: black; /* Color de la línea */
            overflow: hidden; /* Ocultar parte del pseudo-elemento diagonal que se sale de la caja */
            opacity: 0.5; /* Opacidad de la línea */
       
          }

          
   
</style>

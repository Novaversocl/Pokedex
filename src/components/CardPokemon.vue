<script>
export default {
    
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            nombreIngresado: "",
            mostrarDescubrir: false,
            coincidencia: false,
            mostrarDescubierto: false,
            // contadorDescubiertos: 0, // Contador de Pokémon descubiertos
        };
    },
    
    methods: {
        descubrirPokemon() {
            this.mostrarDescubrir = true;
            this.coincidencia = this.nombreIngresado === this.pokemon.name;
            if (this.coincidencia) {
                this.mostrarDescubierto = true; // Mostrar el nombre descubierto
                this.$emit('incrementar-contador'); // Emitir evento para incrementar contador en App.vue
                this.playAudio(); // Llamar al método para reproducir el audio
                setTimeout(() => {
          this.speak(this.pokemon.name); // Llamar a la función speak después de 5 segundos
        }, 5000); // 5000 milisegundos = 5 segundos
            
            
            }
            if (!this.coincidencia) {
                this.nombreIngresado = ""; // Limpiar el campo si el nombre no coincide
            }
        },

        speak(text) {
      const message = `Es el pokemon ${text}`;
      const utterance = new SpeechSynthesisUtterance(message);
      speechSynthesis.speak(utterance);
    },

        playAudio() {
            
    //         this.$refs.audioPlayer2.play();
    //   setTimeout(() => {
    //     this.$refs.audioPlayer2.pause();
    //   }, 15000);


            this.$refs.audioPlayer.play();
        },

        
    },
};
</script>

<template>
            
    
    <section>
        <div class="card">
            <div class="card__img" :class="{ 'sin-filtro': coincidencia }">
                <img :src="pokemon.image" alt="Imagen del Pokémon" />
            </div>

<!-- <h1>{{ pokemon.name }}</h1> -->


            <div class="card__title">
                <h2 v-if="mostrarDescubierto || coincidencia">{{ pokemon.name }}</h2>
            </div>

            <div class="card__content">
                <input type="text" v-model="nombreIngresado" v-if="!mostrarDescubierto">
                <div class="salto"></div>
                <button @click="descubrirPokemon" v-if="!mostrarDescubierto">Descubrir</button>

                <div>

                    <audio ref="audioPlayer2" src="intro.mp3"></audio> <!-- Audio de introducción -->
                     <audio ref="audioPlayer" src="audio.mp3"></audio>
  </div>


            </div>

            <!-- Mensaje para cuando se presiona el botón "Descubrir" -->
            <div v-if="mostrarDescubrir">
                <p v-if="coincidencia"></p>
            </div>

            <!-- Mostrar contador de Pokémon descubiertos -->


        </div>
    </section>
</template>



<style scoped>
/* Estilos */
.card__img {
    margin-bottom: 1rem; /* Espacio entre la imagen y el nombre */
    width: 200px; /* Ancho fijo */
    height: 200px; /* Alto fijo */
    display: flex;
    justify-content: center;
    align-items: center;
  
    
}

.card__img img {
   /* Flotar el contenido a la izquierda */
    width: 60%;
    height: auto;
    border-radius: 0.25rem;
    filter: blur(5px) grayscale(0%); /* Aplicar filtro por defecto */
   
    
}

.sin-filtro img {
    filter: none; /* Eliminar el filtro cuando la clase sin-filtro esté presente */
}

.salto{
    padding-bottom:1rem;
}

.card__content {
    display: flex;
    flex-direction: column;

}

.card {
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 20px 0px 20px 0px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column; /* Cambia la dirección del contenedor a vertical */
    align-items: center; /* Centra los elementos horizontalmente */
    padding: 1rem;
    max-width: 18rem;
    background-image: url('/public/fondo.jpg');
    background-size: 100% 100%; /* Ajustar la imagen al tamaño del contenedor */
    background-position: center;
}



.card__title {
    width: 100%; /* Para ocupar todo el ancho del contenedor */
    text-align: center;
    font-size: 1.2rem;
    font-family: Arial, sans-serif;
    color: #fbfbfb;

    /* Fondo con degradado */
    background: linear-gradient(#0e1149, #187534);
    border-radius: 20px 0px 20px 0px;
}


.card__content input[type="color"],
.card__content textarea {
    margin-bottom: 0.5rem;
}

.card__content textarea {
    resize: vertical;
}

.card__content button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    text-align: center;
    vertical-align: center;
    height: 35px;
   
    padding: 10px 16px;
    transition: color 100ms;
    background-color: #11501c;
    color: #fff;
    cursor: pointer;
}

.card__content button:hover {
    background-color: #129c2b;
}



input {
    border-radius: 8px;
    border: none;
    box-shadow: 1px 1px 5px #021a3a;
    height: 1.2rem;
    margin-bottom: 8px;
    font-family: Arial, Helvetica, sans-serif;
    /* font-size: 10px; */
  }


</style>
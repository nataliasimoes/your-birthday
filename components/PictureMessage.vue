<script setup lang="ts">
const birthdayStore = useBirthdayStore();
const { user } = storeToRefs(birthdayStore);

const props = defineProps({
  hasImage: Boolean,
});

const emit = defineEmits("next");

function next() {
  emit("next");
}

function playSound() {
  const audio = new Audio("/click.mp3");
  audio.play();
}

const loading = ref(true);

function mounted() {
  setTimeout(() => {
    if (props.hasImage) {
      playSound();
    }
  }, 2500);

  setTimeout(() => {
    loading.value = false;
  }, 3000);
}

mounted();
</script>

<template>
  <v-card v-if="loading" variant="flat">
    <v-card-text class="text-center mt-5">
      <v-row>
        <v-col>
          <span class="loader text-center"></span>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <span class="font-weight-bold text-green text-h6">
            Verificando...
          </span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-card v-else>
    <v-card-title class="text-center">
      <span v-if="!hasImage" class="font-weight-bold text-green text-h6">Só mais uma verificação</span>
      <span v-else class="font-weight-bold text-green text-h6">
        Verificação concluída
      </span>
    </v-card-title>

    <v-card-text>
      <span class="mb-5" v-if="!hasImage">
        Apesar de ter acertado para quem este site foi feito, não estou 100%
        convencida que é você. Para ter certeza, vou precisar de uma foto sua.
        Calma, nada de julgamento — estou usando uma inteligência artificial super poderosa só pra confirmar sua
        identidade!
        Na próxima página, é só clicar no botão de tirar foto, tá bom?
      </span>
      <div v-else>
        <span>A foto ficou ótima, a IA confirmou que é você mesmo {{ user.name }},
          pode seguir vendo o seu presente</span>
        <v-img class="mt-4" src="../public/perfil.jpg"></v-img>
      </div>

      <v-row class="text-center mt-5">
        <v-col>
          <v-btn class="mx-auto" color="green" @click="next()">{{
            hasImage ? "Próximo" : "Verificar"
          }}</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
/* .loader {
  position: relative;
  border: 24px solid #53b257;
  border-radius: 50%;
  box-sizing: border-box;
  animation: eat 1s linear infinite;
}

.loader::after,
.loader::before {
  content: "";
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  background: #53b257;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  box-sizing: border-box;
  opacity: 0;
  animation: move 2s linear infinite;
}

.loader::before {
  animation-delay: 1s;
}

@keyframes eat {

  0%,
  49% {
    border-right-color: #53b257;
  }

  50%,
  100% {
    border-right-color: #0000;
  }
}

@keyframes move {
  0% {
    left: 75px;
    opacity: 1;
  }

  50% {
    left: 0px;
    opacity: 1;
  }

  52%,
  100% {
    left: -5px;
    opacity: 0;
  }
} */

.loader {
  width: 40px;
  height: 98px;
  display: inline-block;
  position: relative;
  border: 2px solid #53b257;
  box-sizing: border-box;
  color: rgba(197, 5, 5, 0.9);
  border-radius: 20px 20px 4px 4px;
  background: #53b257;
  animation: fill 2s linear infinite alternate;
}

.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -95%);
  border: 2px solid #53b257;
  border-bottom: none;
  background: #53b257;
  width: 15px;
  height: 35px;
  animation: fillNeck 2s linear infinite alternate;
}

@keyframes fill {
  0% {
    box-shadow: 0 0 inset
  }

  50%,
  100% {
    box-shadow: 0 -98px inset
  }
}


@keyframes fillNeck {

  0%,
  50% {
    box-shadow: 0 0 inset
  }

  100% {
    box-shadow: 0 -20px inset
  }
}
</style>

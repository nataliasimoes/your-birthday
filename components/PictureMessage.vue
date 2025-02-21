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

const loading = ref(true);

function mounted() {
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
      <span v-if="!hasImage" class="font-weight-bold text-green text-h6"
        >Só mais uma verificação</span
      >
      <span v-else class="font-weight-bold text-green text-h6">
        Verificação concluída
      </span>
    </v-card-title>

    <v-card-text>
      <span class="mb-5" v-if="!hasImage">
        Apesar de ter acertado para quem este site foi feito, não estou 100%
        convencida que é você mesmo, preciso de uma foto sua para ter certeza e
        estou usando uma I.A muito potente que irá fazer essa verificação, na
        próxima página clique no botão de foto, por favor!
      </span>
      <div v-else>
        <span
          >A foto ficou ótima, a IA confirmou que é você mesmo {{ user.name }},
          pode seguir vendo o seu presente</span
        >
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
.loader {
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
}
</style>

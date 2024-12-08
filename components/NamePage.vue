<script setup lang="ts">
const birthdayStore = useBirthdayStore();

const nome = ref("");

const emit = defineEmits("next");

function setNameAndNext() {
  if (!nome.value) {
    alert("Acho que você esqueceu de digitar seu nome");
    return;
  }
  birthdayStore.setUserName(nome.value);
  emit("next");
}
</script>

<template>
  <v-card>
    <v-card-title class="text-center">
      <span class="font-weight-bold text-green text-h6"
        >Hoje é seu aniversário! 🎈🎂</span
      >
    </v-card-title>
    <v-card-text>
      <span>
        Você é uma pessoa muito especial para mim, fiz esse projeto como uma
        forma de mostrar a sua importância. Obviamente, sei seu nome (já que fiz
        esse projeto especialmente para você), mas poderia digitar seu lindo
        nome no campo abaixo? Só para eu confirmar que é você mesmo...
      </span>
      <v-text-field
        variant="outlined"
        density="compact"
        v-model="nome"
        class="mt-5"
        color="green"
        @keyup.enter="setNameAndNext()"
      ></v-text-field>
      <v-row class="text-center">
        <v-col>
          <v-btn class="mx-auto" color="green" @click="setNameAndNext()"
            >Verificar</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

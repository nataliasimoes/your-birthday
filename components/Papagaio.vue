<script setup lang="ts">
const you = ref([]);
const papagaio = ref<string[]>([]);
const text = ref("");

const phrases = [
  "Lôro quer bolacha",
  "Vovó lá vem a polícia",
  "Uma vez Flamengo, sempre Flamengo, Flamengo sempre eu ei",
  "Alguém tem um esqueiro?",
  "Você não é um papagaio! Não é um papagaio! Vou ler Freud",
];

function talk() {
  if (text.value.trim() === "") {
    return;
  }

  let aux = text.value;
  const randomNumber = Math.floor(Math.random() * 101);
  const randomPhrase = Math.floor(Math.random() * 5);

  if (randomNumber < 35) {
    aux = phrases[randomPhrase];
  }

  you.value.push(text.value);
  papagaio.value.push("...");
  setTimeout(() => {
    papagaio.value.pop();
    addSlowly(aux);
  }, 2000);

  text.value = "";
}

const asyncTimeout = async (t: number) => {
  await new Promise((resolve) => setTimeout(resolve, t));
};
const addSlowly = async (text: String) => {
  papagaio.value.push("");
  const index = papagaio.value.length - 1;
  for (let i = 0; i < text.length; i++) {
    await asyncTimeout(100);
    papagaio.value[index] += text[i];
  }
};

const mergedArray = computed(() => {
  const maxLength = Math.max(you.value.length, papagaio.value.length);

  const result = [];
  for (let i = 0; i < maxLength; i++) {
    if (you.value[i] !== undefined) result.push(`🥳: ${you.value[i]}`);
    if (papagaio.value[i] !== undefined)
      result.push(`🦜: ${papagaio.value[i]}`);
  }
  return result;
});
</script>

<template>
  <v-card>
    <v-card-title class="text-center mb-4">
      <span class="font-weight-bold text-green">Tome seu paraguaio!</span>
    </v-card-title>
    <v-card-text>
      <span>
        Feliz aniversário e fale com seu papagaio que te dei de aniversário!
      </span>

      <v-img class="mt-4" src="../public/papagaio.jpg"></v-img>

      <v-row class="text-center" align="center">
        <v-col cols="12" xs="12" md="8" class="mt-5">
          <v-text-field
            variant="outlined"
            justify="center"
            color="green"
            density="compact"
            v-model="text"
            @keyup.enter="talk()"
          ></v-text-field
        ></v-col>
        <v-col>
          <v-btn color="green" @click="talk()">falar</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <div class="mb-5">
            <span>Chat com seu papagaio: </span>
          </div>

          <div v-for="item in mergedArray" :key="item">
            <v-card class="custom-chip" variant="text" density="compact">
              <v-card-text>
                {{ item }}
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.custom-chip {
  display: inline-block;
  border-radius: 16px;
  background-color: #e0e0e0;
  margin: 2px;
}
</style>

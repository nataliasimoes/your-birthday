<script setup lang="ts">
const birthdayStore = useBirthdayStore();
const { user, birthday, birthMonth } = storeToRefs(birthdayStore);

const emit = defineEmits("next");

function nextPage() {
  emit("next");
}
</script>

<template>
  <v-card>
    <v-card-title class="text-center mb-4">
      <span class="font-weight-bold text-green">Parabéééééns!</span>
    </v-card-title>
    <v-card-text>
      <span>
        Que bom que é você {{ user.name }}, quando comecei a fazer esse código
        eu logo pensei "{{ user.name }} vai gostar muito disso". Todo dia {{ birthday }} de {{ birthMonth }}, fico
        esperando ansiosamente a hora de falar com você e comemorar o seu dia. É sempre especial ter esse momento e
        mais ainda: ter você por perto.
      </span>
      <v-row class="text-center mt-5">
        <v-col>
          <v-btn class="mx-auto" color="green" @click="nextPage()">próximo</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

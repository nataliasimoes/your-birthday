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
        eu logo pensei "{{ user.name }} vai gostar muito disso". Todo dia
        {{ birthday }} de {{ birthMonth }} eu espero ansiosamente o momento para
        falar contigo e te parabenizar pelo seu dia, sou muito grata de ter você
        em minha vida e agradeço muito a sua existência.
      </span>
      <v-row class="text-center mt-5">
        <v-col>
          <v-btn class="mx-auto" color="green" @click="nextPage()"
            >próximo</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

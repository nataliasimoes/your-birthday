<script setup lang="ts">
const emit = defineEmits("next");

function nextPage() {
  emit("next");
}
</script>

<template>
  <v-card>
    <v-card-title class="text-center mb-4">
      <span class="font-weight-bold text-green">Volidar um presente!</span>
    </v-card-title>
    <v-card-text>
      <span>
        Me peguei aqui lembrando daquele dia que eu te contei aquela piada e
        você riu muito kkkkkkkkkk Enfim, temos muitos momentos especiais e fiz
        algo especialmente para você: já que sei que você gosta de animais, te
        fiz um papagaio para você conversar, um xêro e espero que seu
        aniversário seja do jeito que você esperava que fosse!
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

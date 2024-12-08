<script setup lang="ts">
const currentPage = ref(0);
</script>

<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="h-screen">
      <v-col cols="12" md="4" class="mx-auto">
        <NamePage v-if="currentPage == 0" @next="currentPage++"></NamePage>
        <BirthdayMessage
          v-if="currentPage == 1"
          @next="currentPage++"
        ></BirthdayMessage>
        <BirthdayGift
          v-if="currentPage == 2"
          @next="currentPage++"
        ></BirthdayGift>
        <Papagaio v-if="currentPage == 3"></Papagaio>
      </v-col>
    </v-row>
  </v-container>
</template>

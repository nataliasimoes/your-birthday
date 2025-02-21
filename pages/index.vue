<script setup lang="ts">
const currentPage = ref(0);
</script>

<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4" class="mx-auto">
        <NamePage v-if="currentPage == 0" @next="currentPage++"></NamePage>
        <PictureMessage
          :hasImage="false"
          v-if="currentPage == 1"
          @next="currentPage++"
        ></PictureMessage>
        <Picture v-if="currentPage == 2" @next="currentPage++"></Picture>
        <PictureMessage
          :hasImage="true"
          v-if="currentPage == 3"
          @next="currentPage++"
        ></PictureMessage>
        <BirthdayMessage
          v-if="currentPage == 4"
          @next="currentPage++"
        ></BirthdayMessage>
        <BirthdayGift
          v-if="currentPage == 5"
          @next="currentPage++"
        ></BirthdayGift>
        <Papagaio v-if="currentPage == 6"></Papagaio>
      </v-col>
    </v-row>
  </v-container>
</template>

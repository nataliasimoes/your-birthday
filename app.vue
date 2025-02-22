<script setup lang="ts">
import { useTitle } from "@vueuse/core";

const title = useTitle("Your Birthday");
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<template>
  <h1><b>Home</b> | <router-link to="/about">About</router-link></h1>
  <img id="logo" alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello from Home with Vue 3 + TypeScript + Vite" />
</template>

<style lang="postcss"></style>

<script lang="ts">
  import { defineComponent } from "vue";
  import HelloWorld from "@/components/HelloWorld.vue";

  export default defineComponent({
    name: "Home",
    components: {
      HelloWorld,
    },
  });
</script>

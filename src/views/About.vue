<template>
  <h1>
    <router-link to="/">Home</router-link> | <b>About</b>
  </h1>
  <img id="logo" alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello from About with Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  import HelloWorld from "../components/HelloWorld.vue";

  export default defineComponent({
    name: "About",
    components: {
      HelloWorld,
    }
  });
</script>

<style lang="postcss" scoped></style>

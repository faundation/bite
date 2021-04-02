<template>
  <header class="flex flex-col">
    <h1
      class="flex flex-row space-x-5 justify-center items-center text-lg font-semibold"
    >
      <img
        src="/src/assets/Text/1 Template.png"
        alt="BITE Text Logo"
        width="225"
      />
      <span
        class="text-gradient bg-gradient-to-t from-primary-dark to-primary-light"
      >
        Vite
      </span>
      <span
        class="text-gradient bg-gradient-to-t from-secondary-dark to-secondary-light"
      >
        Template
      </span>
    </h1>
    <h2 class="text-sm flex flex-row space-x-4 justify-center align-center">
      <router-link
       to="/"
       :class="{ 'font-bold': route.path == '/' }"
      >
        Home
      </router-link>
      <span>|</span>
      <router-link
        to="/about"
        :class="{ 'font-bold': route.path == '/about' }"
      >
        About
      </router-link>
    </h2>
  </header>
  <router-view/>
</template>

<style lang="postcss">
  body {
    @apply flex flex-row justify-center items-center;
    font-size: 1em;

    * {
      @apply focus:outline-none;
    }
  }
</style>

<script lang="ts">
  import { defineComponent } from "vue";
  import { useRoute } from "vue-router";

  export default defineComponent({
    name: "App",
    setup() {
      const route = useRoute();
      return {
        route,
      };
    },
  });
</script>

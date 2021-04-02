<template>
  <section class="flex flex-col">
    <div class="flex flex-row justify-center items-center">
      <img src="/src/assets/Logo/1 Template.png" alt="" srcset="" />
      <img src="/src/assets/Logo/1.png" alt="" srcset="" />
    </div>
    <Stepper />
  </section>
</template>

<style lang="postcss" scoped></style>

<script lang="ts">
  import { defineComponent } from "vue";
  import Stepper from "@/components/Stepper.vue";
  export default defineComponent({
    name: "About",
    components: { Stepper },
  });
</script>

<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<style scoped>
  .storybook-button {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }
  .storybook-button--primary {
    color: white;
    background-color: #1ea7fd;
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
</style>

<script lang="ts">
  import { computed, defineComponent } from "vue";

  export default defineComponent({
    name: "my-button",

    props: {
      label: {
        type: String,
        required: true,
      },
      primary: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        validator: function (value) {
          return ["small", "medium", "large"].indexOf(value) !== -1;
        },
      },
      backgroundColor: {
        type: String,
      },
    },

    emits: ["click"],

    setup({ primary, size, label, backgroundColor }, { emit }) {
      return {
        classes: computed(() => ({
          "storybook-button": true,
          "storybook-button--primary": primary,
          "storybook-button--secondary": !primary,
          [`storybook-button--${size || "medium"}`]: true,
        })),
        style: computed(() => ({
          backgroundColor,
        })),
        onClick() {
          emit("click");
        },
      };
    },
  });
</script>

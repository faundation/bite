<template>
  <div class="wrap">
    <Up class="text-primary-dark opacity-70"/>
    <div
      class="stepper"
      :style="{ transform: `translateY(${position / 2}px)` }"
      @mousedown="mousedown"
    >
      <span
        class="first"
        :class="{ active: isActive, next: !isActive, hide: isHide }"
      >
        {{ count }}
      </span>

      <span
        class="second"
        :class="{ active: !isActive, next: isActive, hide: isHide }"
      >
      </span>
    </div>
    <Down class="text-primary-dark opacity-70"/>
  </div>
</template>

<style lang="postcss" scoped>
  * {
    -webkit-user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .wrap {
    @apply flex flex-col justify-center items-center space-y-4;
  }

  .stepper {
    @apply text-white bg-gradient-to-t from-primary-dark to-primary-light;
    @apply cursor-pointer w-32 h-32 rounded-md;
    @apply flex flex-col justify-center items-center;
    @apply text-lg;
    @apply shadow-lg;
    overflow: hidden;
    z-index: 2;

    span {
      user-select: none;
      position: absolute;
      top: 28px;
      left: 50%;
      /* transform: translateY(0); */
      transform: translateY(0) translateX(-50%);

      &.active {
        /* transform: translateY(0); */
        transform: translateY(0) translateX(-50%);
      }

      &.hide {
        opacity: 0;
      }
    }
  }
</style>

<script lang="ts">
  import { defineComponent, reactive, ref } from "vue";
  import { useToggle } from "@vueuse/core";
  import anime from "animejs";

  import Up from "@/assets/Stepper/Up.svg"
  import Down from "@/assets/Stepper/Down.svg"

  export default defineComponent({
    name: "Stepper",
    setup() {
      const mousePos = ref(0);
      const currentPos = ref(0);
      const position = ref(0);
      const draggable = ref(false);
      const countAnime = reactive({
        plus: ref(anime.timeline()),
        minus: ref(anime.timeline()),
      });
      const offset = ref(130);
      const direction = ref("");
      const dur = 2000;
      const count = ref(15);
      const blockAnime = ref(
        anime({
          targets: ".stepper",
          duration: dur,
          translateY: 0,
        })
      );
      const [isActive, toggleActive] = useToggle(true);
      const isHide = ref(true);

      function mousedown() {
        currentPos.value = mousePos.value;
        draggable.value = true;
        blockAnime.value.pause();
        toggleActive();
        if (direction.value == "plus") countAnime.plus.pause();
        if (direction.value == "minus") countAnime.minus.pause();
      }

      document.addEventListener("mousemove", (event) => {
        mousePos.value = event.pageY;

        if (draggable.value) position.value = mousePos.value - currentPos.value;

        if (position.value <= offset.value * -1 && draggable.value) {
          center();
          count.value++;
          plus();
        }

        if (position.value >= offset.value && draggable.value) {
          center();
          count.value--;
          minus();
        }
      });

      document.addEventListener("mouseup", () => {
        if (draggable.value) {
          center();
        }
      });

      function center() {
        draggable.value = false;
        blockAnime.value = anime({
          targets: ".stepper",
          duration: dur,
          translateY: 0,
        });
      }

      function plus() {
        direction.value = "plus";
        countAnime.plus = anime.timeline();
        // TODO:
        // $(".next")
        //   .text(count.value)
        //   .css("transform", "translateY(-100px) translateX(-50%)");

        countAnime.plus
          .add({
            targets: ".active",
            translateY: 100,
            translateX: "-50%",
            duration: dur,
          })
          .add({
            targets: ".next",
            translateY: 0,
            translateX: "-50%",
            duration: dur,
            offset: "-=" + dur,
          });
      }

      function minus() {
        direction.value = "minus";
        countAnime.minus = anime.timeline();
        // TODO:
        // $(".next")
        //   .text(count.value)
        //   .css("transform", "translateY(100px) translateX(-50%)");
        countAnime.minus
          .add({
            targets: ".active",
            translateY: -100,
            translateX: "-50%",
            duration: dur,
          })
          .add({
            targets: ".next",
            translateY: 0,
            translateX: "-50%",
            duration: 1500,
            offset: "-=" + dur,
          });
      }

      center();
      plus();
      setTimeout(() => {
        isHide.value = false;
      }, 300);

      return {
        count,
        draggable,
        position,
        direction,
        isActive,
        isHide,
        mousedown,
      };
    },
    components: {
      Up,
      Down,
    }
  });
</script>

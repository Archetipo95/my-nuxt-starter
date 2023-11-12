import { defineComponent, h } from "vue";

export default defineComponent({
  name: "NuxtImage",
  props: {
    src: String,
  },
  setup(props, ctx) {
    return () =>
      h(
        "img",
        {
          src: props.src,
          ...ctx.attrs,
        },
        []
      );
  },
});

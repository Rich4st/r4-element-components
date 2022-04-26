import { defineComponent, ref, onMounted, resolveComponent, openBlock, createElementBlock, createVNode } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    percentage: {
      type: Number,
      default: 0,
      required: true
    },
    type: {
      type: String,
      default: "line"
    },
    isAnimation: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: ""
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number,
      default: 6
    }
  },
  setup(__props) {
    const props = __props;
    const per = ref(0);
    onMounted(() => {
      if (props.isAnimation) {
        const t = Math.ceil(props.duration * 1e3 / props.percentage);
        console.log(t);
        const timer = setInterval(() => {
          per.value++;
          if (per.value >= props.percentage) {
            per.value = props.percentage;
            clearInterval(timer);
          }
        }, t);
      } else {
        per.value = props.percentage;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_progress = resolveComponent("el-progress");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_progress, {
          percentage: per.value,
          indeterminate: __props.isAnimation,
          duration: __props.duration,
          color: __props.color,
          "stroke-width": __props.strokeWidth,
          "show-text": __props.showText,
          "text-inside": __props.textInside,
          type: __props.type
        }, null, 8, ["percentage", "indeterminate", "duration", "color", "stroke-width", "show-text", "text-inside", "type"])
      ]);
    };
  }
});
var progress = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52b6b5d2"]]);
var index = {
  install(app) {
    app.component("MProgress", progress);
  }
};
export { index as default };

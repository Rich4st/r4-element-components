import { defineComponent, useSlots, computed, openBlock, createElementBlock, createElementVNode, unref, normalizeStyle, renderSlot, toDisplayString, createBlock, resolveDynamicComponent } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "trend" };
const _hoisted_2 = { class: "text" };
const _hoisted_3 = { class: "icon" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    upIcon: {
      type: String,
      default: "arrowup"
    },
    downIcon: {
      type: String,
      default: "arrowdown"
    },
    type: {
      type: String,
      default: "up"
    },
    text: {
      type: String,
      default: "\u6587\u5B57"
    },
    upIconColor: {
      type: String,
      default: "red"
    },
    downIconColor: {
      type: String,
      default: "green"
    },
    upTextColor: {
      type: String,
      default: "#000"
    },
    downTextColor: {
      type: String,
      default: "#000"
    },
    reverseColor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const textColor = computed(() => {
      return props.type === "up" ? props.upTextColor : props.downTextColor;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          unref(slots).default ? (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle({ color: unref(textColor) })
          }, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ], 4)) : (openBlock(), createElementBlock("div", {
            key: 1,
            style: normalizeStyle({ color: unref(textColor) })
          }, toDisplayString(__props.text), 5))
        ]),
        createElementVNode("div", _hoisted_3, [
          __props.type === "up" ? (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${__props.upIcon}`), {
            key: 0,
            style: normalizeStyle({ color: __props.reverseColor ? __props.downIconColor : __props.upIconColor })
          }, null, 8, ["style"])) : (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${__props.downIcon}`), {
            key: 1,
            style: normalizeStyle({ color: __props.reverseColor ? __props.upIconColor : __props.downIconColor })
          }, null, 8, ["style"]))
        ])
      ]);
    };
  }
});
var trend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c2d83e78"]]);
var index = {
  install(app) {
    app.component("MTrend", trend);
  }
};
export { index as default };

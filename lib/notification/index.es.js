import { defineComponent, resolveComponent, openBlock, createBlock, withCtx, renderSlot, createVNode, resolveDynamicComponent, unref } from "vue";
const toLine = (value) => {
  return value.replace(/(A-Z)g/, "-$1").toLocaleLowerCase();
};
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
    icon: {
      type: String,
      default: "Bell"
    },
    value: {
      type: [String, Number],
      default: ""
    },
    max: {
      type: Number,
      default: 30
    },
    isDot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_badge = resolveComponent("el-badge");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        placement: "bottom",
        width: 300,
        trigger: "click",
        content: "this is content, this is content, this is content"
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        reference: withCtx(() => [
          createVNode(_component_el_badge, {
            value: __props.value,
            max: __props.max,
            "is-dot": __props.isDot,
            style: { "cursor": "pointer" }
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(__props.icon)}`)))
            ]),
            _: 1
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
      });
    };
  }
});
var notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5724abe0"]]);
var index = {
  install(app) {
    app.component("MNotification", notification);
  }
};
export { index as default };

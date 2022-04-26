import { defineComponent, ref, resolveComponent, openBlock, createElementBlock, createVNode, mergeProps } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "block" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const value2 = ref("");
    return (_ctx, _cache) => {
      const _component_el_date_picker = resolveComponent("el-date-picker");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_date_picker, mergeProps({
          modelValue: value2.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value2.value = $event),
          type: "datetimerange"
        }, _ctx.$attrs), null, 16, ["modelValue"])
      ]);
    };
  }
});
var chooseDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23e40dab"]]);
var index = {
  install(app) {
    app.component("MChooseDate", chooseDate);
  }
};
export { index as default };

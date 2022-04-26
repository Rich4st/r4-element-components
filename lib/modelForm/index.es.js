import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createVNode, mergeProps, withCtx, createElementVNode, renderSlot } from "vue";
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
    visible: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      required: true
    }
  },
  emits: ["update:visible"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const form = ref();
    const dialogVisible = ref(props.visible);
    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });
    watch(() => dialogVisible.value, (val) => {
      emits("update:visible", val);
    });
    return (_ctx, _cache) => {
      const _component_m_form = resolveComponent("m-form");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createElementBlock("div", null, [
        createVNode(_component_el_dialog, mergeProps({
          modelValue: dialogVisible.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dialogVisible.value = $event)
        }, _ctx.$attrs), {
          default: withCtx(() => [
            createElementVNode("div", null, [
              createVNode(_component_m_form, {
                ref_key: "form",
                ref: form,
                options: __props.options
              }, {
                uploadTip: withCtx(() => [
                  renderSlot(_ctx.$slots, "uploadTip", {}, void 0, true)
                ]),
                uploadArea: withCtx(() => [
                  renderSlot(_ctx.$slots, "uploadArea", {}, void 0, true)
                ]),
                _: 3
              }, 8, ["options"])
            ])
          ]),
          footer: withCtx(() => [
            renderSlot(_ctx.$slots, "footer", { form: form.value }, void 0, true)
          ]),
          _: 3
        }, 16, ["modelValue"])
      ]);
    };
  }
});
var modelForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6d7fb939"]]);
var index = {
  install(app) {
    app.component("MModelForm", modelForm);
  }
};
export { index as default };

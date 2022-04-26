var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, watch, resolveComponent, openBlock, createElementBlock, createElementVNode, createVNode, mergeProps } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = {
  class: "time-picker-wrap",
  style: { "display": "flex" }
};
const _hoisted_2 = {
  class: "star-time-wrap",
  style: { "margin-right": "20px" }
};
const _hoisted_3 = { class: "end-time-wrap" };
const __default__ = {
  inheritAttrs: true
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    startPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    stimeStart: {
      type: String,
      default: "08:00"
    },
    step: {
      type: String,
      default: "00:30"
    },
    stimeEnd: {
      type: String,
      default: "24:00"
    },
    endPlaceholder: {
      type: String,
      default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4"
    },
    etimeStart: {
      type: String,
      default: "08:00"
    },
    etimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["updateStartTime", "updateEndTime"],
  setup(__props, { emit: emits }) {
    const startTime = ref("");
    const endTime = ref("");
    const disabledEnd = ref(true);
    watch(() => startTime.value, (val) => {
      if (val) {
        disabledEnd.value = false;
        emits("updateStartTime", val);
      } else {
        endTime.value = "";
        disabledEnd.value = true;
      }
    });
    watch(() => endTime.value, (val) => {
      emits("updateEndTime", {
        startTime: startTime.value,
        endTime: val
      });
    });
    return (_ctx, _cache) => {
      const _component_el_time_select = resolveComponent("el-time-select");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(_component_el_time_select, mergeProps({
            modelValue: startTime.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => startTime.value = $event),
            "max-time": endTime.value,
            class: "mr-4",
            placeholder: __props.startPlaceholder,
            start: __props.stimeStart,
            step: __props.step,
            end: __props.stimeEnd
          }, _ctx.$attrs), null, 16, ["modelValue", "max-time", "placeholder", "start", "step", "end"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createVNode(_component_el_time_select, {
            modelValue: endTime.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => endTime.value = $event),
            "min-time": startTime.value,
            placeholder: __props.endPlaceholder,
            start: __props.etimeStart,
            step: __props.step,
            end: __props.etimeEnd,
            disabled: disabledEnd.value
          }, null, 8, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}));
var datePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8453764"]]);
var index = {
  install(app) {
    app.component("MDatePicker", datePicker);
  }
};
export { index as default };

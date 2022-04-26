import { defineComponent, resolveComponent, openBlock, createElementBlock, createVNode, withCtx, Fragment, renderList, createBlock, createCommentVNode, createElementVNode, toDisplayString, createTextVNode, normalizeClass, resolveDynamicComponent, unref } from "vue";
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
const _hoisted_1 = { class: "list-container" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = {
  key: 0,
  class: "avatar"
};
const _hoisted_4 = {
  key: 1,
  class: "content"
};
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = {
  key: 0,
  class: "desc"
};
const _hoisted_8 = {
  key: 1,
  class: "time"
};
const _hoisted_9 = { class: "actions" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = {
  key: 0,
  class: "a-icon"
};
const _hoisted_12 = { class: "a-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["onItemClick", "onActionClick"],
  setup(__props, { emit: emits }) {
    const onItemClick = (item, index2) => {
      emits("onItemClick", { item, index: index2 });
    };
    const onActionClick = (item, index2) => {
      emits("onActionClick", { item, index: index2 });
    };
    return (_ctx, _cache) => {
      const _component_el_avatar = resolveComponent("el-avatar");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_scrollbar = resolveComponent("el-scrollbar");
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_tabs, null, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.list, (item, index2) => {
              return openBlock(), createBlock(_component_el_tab_pane, {
                key: index2,
                label: item.title
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_scrollbar, { height: "250px" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(item.content, (item1, index1) => {
                        return openBlock(), createElementBlock("div", {
                          class: "container",
                          onClick: ($event) => onItemClick(item1, index1),
                          key: index1
                        }, [
                          item1.avatar ? (openBlock(), createElementBlock("div", _hoisted_3, [
                            createVNode(_component_el_avatar, {
                              src: item1.avatar
                            }, null, 8, ["src"])
                          ])) : createCommentVNode("", true),
                          item1.title ? (openBlock(), createElementBlock("div", _hoisted_4, [
                            createElementVNode("div", _hoisted_5, [
                              createElementVNode("div", null, toDisplayString(item1.title), 1),
                              item1.tag ? (openBlock(), createElementBlock("div", _hoisted_6, [
                                createVNode(_component_el_tag, {
                                  type: item1.tagType
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item1.tag), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["type"])
                              ])) : createCommentVNode("", true)
                            ]),
                            item1.desc ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(item1.desc), 1)) : createCommentVNode("", true),
                            item1.time ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(item1.time), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ], 8, _hoisted_2);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024),
                  createElementVNode("div", _hoisted_9, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.actions, (action, index3) => {
                      return openBlock(), createElementBlock("div", {
                        class: normalizeClass(["a-item", { "border": index3 !== __props.actions.length - 1 }]),
                        key: index3,
                        onClick: ($event) => onActionClick(action, index3)
                      }, [
                        action.icon ? (openBlock(), createElementBlock("div", _hoisted_11, [
                          (openBlock(), createBlock(resolveDynamicComponent(`el-icon-${unref(toLine)(action.icon)}`)))
                        ])) : createCommentVNode("", true),
                        createElementVNode("div", _hoisted_12, toDisplayString(action.text), 1)
                      ], 10, _hoisted_10);
                    }), 128))
                  ])
                ]),
                _: 2
              }, 1032, ["label"]);
            }), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
});
var list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e3b1b42"]]);
var index = {
  install(app) {
    app.component("MList", list);
  }
};
export { index as default };

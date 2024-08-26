import { defineComponent, watchEffect, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { useRouter } from "vue-router";
import { a as useUserStore } from "../main.mjs";
import "nprogress";
import "pinia";
import "vite-ssg";
import "@vueuse/core";
import "@vueuse/head";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]",
  __ssrInlineRender: true,
  props: {
    name: null
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const user = useUserStore();
    watchEffect(() => {
      user.setNewName(props.name);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ "text-center": "" }, _attrs))}><div text-4xl><div i-carbon-pedestrian inline-block></div></div><p>${ssrInterpolate(props.name)}</p><div><button m="3 t6" text-sm btn> 返回 </button></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/hi/[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

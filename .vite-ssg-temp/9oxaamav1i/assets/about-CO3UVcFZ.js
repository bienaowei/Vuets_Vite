import { defineComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate } from "vue/server-renderer";
import { u as useI18n } from "../main.mjs";
import "nprogress";
import "pinia";
import "vite-ssg";
import "vue-router";
import "@vueuse/core";
import "@vueuse/head";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`${ssrInterpolate(unref(t)("button.go"))} 11 `);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

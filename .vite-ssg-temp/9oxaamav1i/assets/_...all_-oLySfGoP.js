import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc, b as block0 } from "../main.mjs";
import { useSSRContext } from "vue";
import "nprogress";
import "pinia";
import "vite-ssg";
import "vue-router";
import "@vueuse/core";
import "@vueuse/head";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Not-Found </div>`);
}
if (typeof block0 === "function") block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____all_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ____all_ as default
};

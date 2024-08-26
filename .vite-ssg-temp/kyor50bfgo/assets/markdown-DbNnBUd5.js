import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
const title = "markdown";
const meta = [{ "property": "og:title", "content": "markdown" }, { "name": "twitter:title", "content": "markdown" }];
const _sfc_main = {
  __name: "markdown",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "markdown", "meta": [{ "property": "og:title", "content": "markdown" }, { "name": "twitter:title", "content": "markdown" }] };
    __expose({ frontmatter });
    const head = { "title": "markdown", "meta": [{ "property": "og:title", "content": "markdown" }, { "name": "twitter:title", "content": "markdown" }] };
    useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose prose-sm m-auto text-left" }, _attrs))}><div><div i-carbon-dicom-overlay class="text-4xl mb-6 m-auto"></div><h3>markdown</h3></div><pre hidden></pre><div class="shiki-container language-js"><pre class="shiki shiki-dark vitesse-dark" style="${ssrRenderStyle({ "background-color": "#121212" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#CB7676" })}">function</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#80A665" })}">encode</span><span style="${ssrRenderStyle({ "color": "#666666" })}">()</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#CB7676" })}">const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}">foo</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#666666" })}">=</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">bar</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}">  </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}">console</span><span style="${ssrRenderStyle({ "color": "#666666" })}">.</span><span style="${ssrRenderStyle({ "color": "#80A665" })}">log</span><span style="${ssrRenderStyle({ "color": "#666666" })}">(</span><span style="${ssrRenderStyle({ "color": "#BD976A" })}">foo</span><span style="${ssrRenderStyle({ "color": "#666666" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#666666" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#CB7676" })}">const</span><span style="${ssrRenderStyle({ "color": "#DBD7CAEE" })}"> </span><span style="${ssrRenderStyle({ "color": "#BD976A" })}">test</span><span style="${ssrRenderStyle({ "color": "#666666" })}">=</span><span style="${ssrRenderStyle({ "color": "#80A665" })}">ref</span><span style="${ssrRenderStyle({ "color": "#666666" })}">(</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#C98A7D" })}">这是markdown的内容</span><span style="${ssrRenderStyle({ "color": "#C98A7D99" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#666666" })}">)</span></span>
<span class="line"></span></code></pre><pre class="shiki shiki-light vitesse-light" style="${ssrRenderStyle({ "background-color": "#ffffff" })}" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#AB5959" })}">function</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#59873A" })}">encode</span><span style="${ssrRenderStyle({ "color": "#999999" })}">()</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#AB5959" })}">const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">foo</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">bar</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&#39;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#393A34" })}">  </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">console</span><span style="${ssrRenderStyle({ "color": "#999999" })}">.</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">log</span><span style="${ssrRenderStyle({ "color": "#999999" })}">(</span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">foo</span><span style="${ssrRenderStyle({ "color": "#999999" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#999999" })}">}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#AB5959" })}">const</span><span style="${ssrRenderStyle({ "color": "#393A34" })}"> </span><span style="${ssrRenderStyle({ "color": "#B07D48" })}">test</span><span style="${ssrRenderStyle({ "color": "#999999" })}">=</span><span style="${ssrRenderStyle({ "color": "#59873A" })}">ref</span><span style="${ssrRenderStyle({ "color": "#999999" })}">(</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#B56959" })}">这是markdown的内容</span><span style="${ssrRenderStyle({ "color": "#B5695999" })}">&quot;</span><span style="${ssrRenderStyle({ "color": "#999999" })}">)</span></span>
<span class="line"></span></code></pre></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/markdown.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default,
  meta,
  title
};

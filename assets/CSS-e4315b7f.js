import{g as a,o as n,c as e,h as p}from"./app-da83c031.js";const o={class:"prose prose-sm m-auto text-left"},t=p(`<h1>CSS</h1><h3>border-radius圆角边框</h3><p><strong>1个值</strong>：border-radius:5px，那么左上角、右上角、右下角、左下角的圆角半径为5px的圆。即，值复制，第二、第三、第四个值都是复制第一个值</p><p><strong>2个值</strong>：border-radius:5px 10px，那么左上和右下角、右上和左下角圆的半径相同，即第三个复制第一个，第四个复制第二个的值</p><p><strong>3个值</strong>：border-radius:5px 10px 15px，那么左上角半径为5px的圆，右上角和左下角半径为10px的圆，右下角半径为15px的圆，即第四个复制第二个的值</p><p><strong>4个值</strong>：border-radius:5px 10px 15px 20px，那么左上角半径为5px的圆，右上角半径为10px的圆，右下角半径为15px的圆，左下角半径为20的圆，这里的值没有复制</p><h3>box-shadow阴影</h3><pre hidden></pre><div class="shiki-container language-string"><pre class="shiki shiki-dark vitesse-dark" style="background-color:#121212;" tabindex="0"><code><span class="line"><span style="color:#dbd7caee;">第一个参数是x轴阴影段长度（水平阴影的位置）</span></span>
<span class="line"><span style="color:#dbd7caee;">第二个参数是y轴阴影段长度（垂直阴影的位置）</span></span>
<span class="line"><span style="color:#dbd7caee;">第三个参数是往四周阴影模糊半径（模糊距离）</span></span>
<span class="line"><span style="color:#dbd7caee;">第四个参数是往四周阴影扩展半径（扩展距离）</span></span>
<span class="line"><span style="color:#dbd7caee;">第五个参数是阴影颜色（阴影颜色）</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki shiki-light vitesse-light" style="background-color:#ffffff;" tabindex="0"><code><span class="line"><span style="color:#393a34;">第一个参数是x轴阴影段长度（水平阴影的位置）</span></span>
<span class="line"><span style="color:#393a34;">第二个参数是y轴阴影段长度（垂直阴影的位置）</span></span>
<span class="line"><span style="color:#393a34;">第三个参数是往四周阴影模糊半径（模糊距离）</span></span>
<span class="line"><span style="color:#393a34;">第四个参数是往四周阴影扩展半径（扩展距离）</span></span>
<span class="line"><span style="color:#393a34;">第五个参数是阴影颜色（阴影颜色）</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3>文字无法选中</h3><p>user-select:none;</p><h3>设置光标</h3><p>当前为抓取</p><p>cursor: grab;</p><p>覆盖行内样式(important重要的)</p><p>如：height:30px !important;</p>`,16),r=[t],g="CSS 技巧",b=[],m={__name:"CSS",setup(l,{expose:s}){return s({frontmatter:{name:"CSS 技巧",meta:[]}}),a({meta:[]}),(d,h)=>(n(),e("div",o,r))}};export{m as default,b as meta,g as name};

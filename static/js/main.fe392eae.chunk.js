(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(8),r=n(5),u=n(1),a=n(4),l=n.n(a),b=(n(13),n(14),n(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(u.useState)(j),e=Object(r.a)(t,1)[0],n=Object(u.useState)(!1),s=Object(r.a)(n,2),o=s[0],a=s[1],h=Object(u.useState)(c.NONE),d=Object(r.a)(h,2),O=d[0],N=d[1],f=function(t){N((function(){return t}))},E=O!==c.NONE||o;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":O!==c.ALPHABET}),onClick:function(){f(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":O!==c.LENGTH}),onClick:function(){f(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!o}),onClick:function(){a((function(){return!o}))},children:"Reverse"}),E&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return a((function(){return!1})),void N((function(){return c.NONE}))},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:function(t){var e=Object(i.a)(t);return e.sort((function(t,e){switch(O){case c.ALPHABET:return t.localeCompare(e);case c.LENGTH:return t.length-e.length;default:return 0}})),o&&e.reverse(),e}(e).map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fe392eae.chunk.js.map
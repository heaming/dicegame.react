(this.webpackJsonphello_react=this.webpackJsonphello_react||[]).push([[0],[,,,,,,,,,,,,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var a=t(7),s=t.n(a),i=t(5),n=t(6),d=t(1),o=t.p+"static/media/dice-blue-1.46ea1848.svg",r=t.p+"static/media/dice-blue-2.f95a9460.svg",l=t.p+"static/media/dice-blue-3.067ae228.svg",j=t.p+"static/media/dice-blue-4.e11e6c54.svg",b=t.p+"static/media/dice-blue-5.ec1687ca.svg",u=t.p+"static/media/dice-blue-6.85b4d41e.svg",m=t.p+"static/media/dice-red-1.a9a39d36.svg",p=t.p+"static/media/dice-red-2.03dd6934.svg",h=t.p+"static/media/dice-red-3.3297d6b8.svg",v=t.p+"static/media/dice-red-4.ce794180.svg",O=t.p+"static/media/dice-red-5.8adaa7ef.svg",g=t.p+"static/media/dice-red-6.3ee98ff0.svg",x=(t(12),t(0)),f={blue:[o,r,l,j,b,u],red:[m,p,h,v,O,g]};var N=function(e){var c=e.color,t=void 0===c?"blue":c,a=e.num,s=void 0===a?1:a,i=f[t][s-1],n="".concat(t," ").concat(s);return Object(x.jsx)("img",{className:"Dice",src:i,alt:n})};t(14);var B=function(e){var c=e.name,t=e.color,a=e.history,s=e.className,i=void 0===s?"":s,n=a[a.length-1]||1,d=a.reduce((function(e,c){return e+c}),0),o="Board ".concat(i);return Object(x.jsxs)("div",{className:o,children:[Object(x.jsx)("h1",{className:"Board-heading",children:c}),Object(x.jsx)(N,{color:t,num:n}),Object(x.jsx)("h2",{className:"Board-heading",children:"\ucd1d\uc810"}),Object(x.jsx)("p",{children:d}),Object(x.jsx)("h2",{className:"Board-heading",children:"\uae30\ub85d"}),Object(x.jsx)("p",{children:a.join(", ")})]})};t(15);var A=function(e){var c=e.color,t=void 0===c?"playButton":c,a=e.children,s=e.onClick,i=e.className,n=void 0===i?"":i,d="Button ".concat(t," ").concat(n);return Object(x.jsx)("button",{className:d,onClick:s,children:a})},k=(t(16),t.p+"static/media/logo.bd05682d.png");function y(e){return Math.ceil(Math.random()*e)}var C=function(){var e=Object(d.useState)([]),c=Object(n.a)(e,2),t=c[0],a=c[1],s=Object(d.useState)([]),o=Object(n.a)(s,2),r=o[0],l=o[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"App-logo",src:k,alt:"\uc8fc\uc0ac\uc704\uac8c\uc784 \ub85c\uace0"}),Object(x.jsx)("h1",{className:"App-title",children:"\uc8fc\uc0ac\uc704\uac8c\uc784"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)(A,{className:"App-button",color:"playButton",onClick:function(){var e=y(6),c=y(6);a([].concat(Object(i.a)(t),[e])),l([].concat(Object(i.a)(r),[c]))},children:"\ub358\uc9c0\uae30"}),Object(x.jsx)(A,{className:"App-button",color:"resetButton",onClick:function(){a([]),l([])},children:"\ub9ac\uc14b"})]}),Object(x.jsxs)("div",{className:"App-boards",children:[Object(x.jsx)(B,{className:"App-board",name:"\ub098",color:"blue",history:t}),Object(x.jsx)(B,{className:"App-board",name:"\uc0c1\ub300",color:"red",history:r})]})]})};t(17);s.a.render(Object(x.jsx)(C,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.766243e5.chunk.js.map
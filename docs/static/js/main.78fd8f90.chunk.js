(this.webpackJsonpmines=this.webpackJsonpmines||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"a":"0.1.3"}')},19:function(e,t,n){e.exports=n(30)},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(12),i=n.n(l),c=(n(24),n(1)),o=n(3),u=n(2),f=n(5),s=n(6),L=function(){function e(t,n,r,a,l){Object(f.a)(this,e),this.row=t,this.col=n,this.mine=r,this.state=a,this.minesAround=l}return Object(s.a)(e,null,[{key:"isAnyOpenedState",value:function(e){return"OPENED"===e.state||"EXPLODED"===e.state||"FLAGGED_WRONG"===e.state}},{key:"isAnyHiddenState",value:function(e){return"HIDDEN"===e.state||"FLAGGED"===e.state||"QUESTIONED"===e.state}},{key:"emptyCell",value:function(e,t){return{row:e,col:t,minesAround:0,mine:!1,state:"HIDDEN"}}}]),e}(),m=function(e){var t=e.condition,n=e.children;return a.a.createElement(a.a.Fragment,null,t?n:null)};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E=a.a.createElement("defs",null,a.a.createElement("path",{d:"",id:"a1xRldyBUq"}),a.a.createElement("path",{d:"M106.15 25.25L109.17 25.56L112.16 25.98L115.11 26.52L118.01 27.18L120.88 27.95L123.7 28.83L126.46 29.81L129.18 30.9L131.85 32.09L134.45 33.38L137 34.76L139.49 36.24L141.92 37.82L144.28 39.48L146.58 41.23L148.8 43.06L149.5 43.68L167.3 25.88L174.37 32.95L156.55 50.77L156.94 51.2L158.77 53.42L160.52 55.72L162.18 58.08L163.76 60.51L165.24 63L166.62 65.55L167.91 68.15L169.1 70.82L170.19 73.54L171.17 76.3L172.05 79.12L172.82 81.99L173.48 84.89L174.02 87.84L174.44 90.83L174.75 93.85L174.82 95L200 95L200 95.13L200.12 95.12L200.12 105.12L174.81 105.13L174.75 106.15L174.44 109.17L174.02 112.16L173.48 115.11L172.82 118.01L172.05 120.88L171.17 123.7L170.19 126.46L169.1 129.18L167.91 131.85L166.62 134.45L165.24 137L163.76 139.49L162.18 141.92L160.52 144.28L158.77 146.58L156.94 148.8L156.43 149.36L174.37 167.3L167.3 174.37L149.36 156.43L148.8 156.94L146.58 158.77L144.28 160.52L141.92 162.18L139.49 163.76L137 165.24L134.45 166.62L131.85 167.91L129.18 169.1L126.46 170.19L123.7 171.17L120.88 172.05L118.01 172.82L115.11 173.48L112.16 174.02L109.17 174.44L106.15 174.75L105 174.82L105 200L95 200L95 174.82L93.85 174.75L90.83 174.44L87.84 174.02L84.89 173.48L81.99 172.82L79.12 172.05L76.3 171.17L73.54 170.19L70.82 169.1L68.15 167.91L65.55 166.62L63 165.24L60.51 163.76L58.08 162.18L55.72 160.52L53.42 158.77L51.2 156.94L50.77 156.55L32.95 174.37L25.88 167.3L43.68 149.5L43.06 148.8L41.23 146.58L39.48 144.28L37.82 141.92L36.24 139.49L34.76 137L33.38 134.45L32.09 131.85L30.9 129.18L29.81 126.46L28.83 123.7L27.95 120.88L27.18 118.01L26.52 115.11L25.98 112.16L25.56 109.17L25.25 106.15L25.19 105.13L0.12 105.13L0.13 105L0 105L0 95L25.18 95L25.25 93.85L25.56 90.83L25.98 87.84L26.52 84.89L27.18 81.99L27.95 79.12L28.83 76.3L29.81 73.54L30.9 70.82L32.09 68.15L33.38 65.55L34.76 63L36.24 60.51L37.82 58.08L39.48 55.72L41.23 53.42L43.06 51.2L43.57 50.64L25.88 32.95L32.95 25.88L50.64 43.57L51.2 43.06L53.42 41.23L55.72 39.48L58.08 37.82L60.51 36.24L63 34.76L65.55 33.38L68.15 32.09L70.82 30.9L73.54 29.81L76.3 28.83L79.12 27.95L81.99 27.18L84.89 26.52L87.84 25.98L90.83 25.56L93.85 25.25L95 25.18L95 0L105 0L105 25.18L106.15 25.25Z",id:"aBqu81OL9"})),b=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a1xRldyBUq",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:1,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#aBqu81OL9",opacity:1,fill:"#000000",fillOpacity:1})))),g=function(e){var t=e.svgRef,n=e.title,r=d(e,["svgRef","title"]);return a.a.createElement("svg",p({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,E,b)},h=a.a.forwardRef((function(e,t){return a.a.createElement(g,p({svgRef:t},e))}));n.p;function v(){var e=Object(c.a)(["\n  width: 65%;\n  height: 65%;\n"]);return v=function(){return e},e}function O(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%; \n  display: flex;\n  justify-content: center;\n  align-items: center;\n    &.exploded {\n    background-color: #FF0000;\n  }\n"]);return O=function(){return e},e}var y=u.b.div(O()),x=Object(u.b)(h)(v()),k=function(e){var t=e.cell;return a.a.createElement(y,{className:"EXPLODED"===t.state?"exploded":""},a.a.createElement(x,null))};function w(){var e=Object(c.a)(["\n  text-align: center;\n  font-size: ","px;\n  font-weight: bold;\n  &.color1 {\n    color: #0000FF;\n  }\n  &.color2 {\n    color: #007B00;\n  }\n  &.color3 {\n    color: #FF0000;\n  }\n  &.color4 {\n    color: #00007B;\n  }\n  &.color5 {\n    color: #7B0000;\n  }\n  &.color6 {\n    color: #007B7B;\n  }\n  &.color7 {\n    color: #000000;\n  }\n  &.color8 {\n    color: #7B7B7B;\n  }\n"]);return w=function(){return e},e}var j=u.b.div(w(),45),C=function(e){var t=e.minesAround;return a.a.createElement(j,{className:"color".concat(t," text")},0===t?"":t)};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D=a.a.createElement("defs",null,a.a.createElement("path",{d:"M109.17 25.56L112.16 25.98L115.11 26.52L118.01 27.18L120.88 27.95L123.7 28.83L126.46 29.81L129.18 30.9L131.85 32.09L134.45 33.38L137 34.76L139.49 36.24L141.92 37.82L144.28 39.48L146.58 41.23L148.8 43.06L149.5 43.68L167.3 25.88L174.37 32.95L156.55 50.77L156.94 51.2L158.77 53.42L160.52 55.72L162.18 58.08L163.76 60.51L165.24 63L166.62 65.55L167.91 68.15L169.1 70.82L170.19 73.54L171.17 76.3L172.05 79.12L172.82 81.99L173.48 84.89L174.02 87.84L174.44 90.83L174.75 93.85L174.82 95L200 95L200 95.13L200.12 95.12L200.12 105.12L174.81 105.13L174.75 106.15L174.44 109.17L174.02 112.16L173.48 115.11L172.82 118.01L172.05 120.88L171.17 123.7L170.19 126.46L169.1 129.18L167.91 131.85L166.62 134.45L165.24 137L163.76 139.49L162.18 141.92L160.52 144.28L158.77 146.58L156.94 148.8L156.43 149.36L174.37 167.3L167.3 174.37L149.36 156.43L148.8 156.94L146.58 158.77L144.28 160.52L141.92 162.18L139.49 163.76L137 165.24L134.45 166.62L131.85 167.91L129.18 169.1L126.46 170.19L123.7 171.17L120.88 172.05L118.01 172.82L115.11 173.48L112.16 174.02L109.17 174.44L106.15 174.75L105 174.82L105 200L95 200L95 174.82L93.85 174.75L90.83 174.44L87.84 174.02L84.89 173.48L81.99 172.82L79.12 172.05L76.3 171.17L73.54 170.19L70.82 169.1L68.15 167.91L65.55 166.62L63 165.24L60.51 163.76L58.08 162.18L55.72 160.52L53.42 158.77L51.2 156.94L50.77 156.55L32.95 174.37L25.88 167.3L43.68 149.5L43.06 148.8L41.23 146.58L39.48 144.28L37.82 141.92L36.24 139.49L34.76 137L33.38 134.45L32.09 131.85L30.9 129.18L29.81 126.46L28.83 123.7L27.95 120.88L27.18 118.01L26.52 115.11L25.98 112.16L25.56 109.17L25.25 106.15L25.19 105.13L0.12 105.13L0.13 105L0 105L0 95L25.18 95L25.25 93.85L25.56 90.83L25.98 87.84L26.52 84.89L27.18 81.99L27.95 79.12L28.83 76.3L29.81 73.54L30.9 70.82L32.09 68.15L33.38 65.55L34.76 63L36.24 60.51L37.82 58.08L39.48 55.72L41.23 53.42L43.06 51.2L43.57 50.64L25.88 32.95L32.95 25.88L50.64 43.57L51.2 43.06L53.42 41.23L55.72 39.48L58.08 37.82L60.51 36.24L63 34.76L65.55 33.38L68.15 32.09L70.82 30.9L73.54 29.81L76.3 28.83L79.12 27.95L81.99 27.18L84.89 26.52L87.84 25.98L90.83 25.56L93.85 25.25L95 25.18L95 0L105 0L105 25.18L106.15 25.25L109.17 25.56Z",id:"a3fKv36N"}),a.a.createElement("path",{d:"M1.93 10.57L10.57 1.93L198.07 189.43L189.43 198.07L1.93 10.57Z",id:"b5ILaYqCTA"}),a.a.createElement("path",{d:"M190.71 0.77L199.35 9.41L10.63 198.13L1.99 189.49L190.71 0.77Z",id:"d1QI2kfkwJ"})),R=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a3fKv36N",opacity:1,fill:"#000000",fillOpacity:1}),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a3fKv36N",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:1,strokeOpacity:0}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#b5ILaYqCTA",opacity:1,fill:"#ff0000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#d1QI2kfkwJ",opacity:1,fill:"#ff0000",fillOpacity:1})))),S=function(e){var t=e.svgRef,n=e.title,r=F(e,["svgRef","title"]);return a.a.createElement("svg",B({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,D,R)},N=a.a.forwardRef((function(e,t){return a.a.createElement(S,B({svgRef:t},e))}));n.p;function H(){var e=Object(c.a)(["  \n  display: flex;\n  justify-content: center;\n  align-items: center;  \n  & svg {\n    width: 25px;\n    height: 25px;\n  }\n"]);return H=function(){return e},e}function A(){var e=Object(c.a)(["  \n  ","\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;  \n  width: 100%;\n  height: 100%; \n  box-sizing: border-box;\n"]);return A=function(){return e},e}function M(){var e=Object(c.a)(["\n  border-left: 2px solid #7B7B7B;\n  border-top: 2px solid #7B7B7B; \n"]);return M=function(){return e},e}var P=Object(u.a)(M()),G=u.b.div(A(),P),I=u.b.div(H()),W=function(e){var t=e.cell;return a.a.createElement(G,null,"FLAGGED_WRONG"===t.state?a.a.createElement(I,null,a.a.createElement(N,null)):t.mine?a.a.createElement(k,{cell:t}):a.a.createElement(C,{minesAround:t.minesAround}))};function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q=a.a.createElement("defs",null,a.a.createElement("path",{d:"",id:"a1xRldyBUq"}),a.a.createElement("path",{d:"M15.63 193.75L187.5 193.75L187.5 156.79L15.63 156.79L15.63 193.75Z",id:"c2OZcBAtNB"}),a.a.createElement("path",{d:"M49.48 133.31L150.52 133.31L150.52 176.05L49.48 176.05L49.48 133.31Z",id:"b6nHF4mwc"}),a.a.createElement("path",{d:"M124 10L132 10L132 180L124 180L124 10Z",id:"b30ukE3LC6"}),a.a.createElement("path",{d:"M71.51 34.83L129.01 9.27L129.01 60.39L129.01 111.5L71.51 85.95L14.02 60.39L71.51 34.83Z",id:"eT53pXORs"}),a.a.createElement("path",{d:"M123.5 8.99L132.5 8.99L132.5 111.67L123.5 111.67L123.5 8.99Z",id:"c3y6pJgyRA"})),z=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a1xRldyBUq",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:1,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c2OZcBAtNB",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#b6nHF4mwc",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#b30ukE3LC6",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#eT53pXORs",opacity:1,fill:"#ff0000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c3y6pJgyRA",opacity:1,fill:"#ff0000",fillOpacity:1})))),U=function(e){var t=e.svgRef,n=e.title,r=T(e,["svgRef","title"]);return a.a.createElement("svg",Z({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,q,z)},X=a.a.forwardRef((function(e,t){return a.a.createElement(U,Z({svgRef:t},e))}));n.p;function J(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%; \n"]);return J=function(){return e},e}function Q(){var e=Object(c.a)(["\n    font-family: sans-serif;\n    font-size: ","px;\n    font-weight: bold;\n    cursor: default;\n    animation: "," 0.15s ease-in;\n    &.HIDDEN {\n      display: none;\n    }\n    &.HIDDEN.touched {\n      animation: "," 0.15s ease-out;      \n    }\n"]);return Q=function(){return e},e}function V(){var e=Object(c.a)(["\n  width: 75%;\n  height: 75%;\n  animation: "," 0.15s ease-in;\n"]);return V=function(){return e},e}function Y(){var e=Object(c.a)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: scale(8, 8);\n    opacity: 0;\n  }\n"]);return Y=function(){return e},e}function _(){var e=Object(c.a)(["\n  from {\n    transform: scale(8, 8);\n    opacity: 0.3;\n  }\n\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n"]);return _=function(){return e},e}function K(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%; \n  background-color: #C0C0C0;\n  border-top: 4px solid #FFFFFF;\n  border-right: 4px solid #808080;\n  border-bottom: 4px solid #808080;\n  border-left: 4px solid #FFFFFF;\n  box-sizing: border-box;\n"]);return K=function(){return e},e}var $=u.b.div(K()),ee=Object(u.c)(_()),te=Object(u.c)(Y()),ne=Object(u.b)(X)(V(),ee),re=u.b.div(Q(),40,ee,te),ae=u.b.div(J()),le=function(e){var t=e.cell,n=Object(r.useState)(""),l=Object(o.a)(n,2),i=l[0],c=l[1];return function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){n.current?n.current=!1:e()}),t)}((function(){c("touched")}),[t.state]),a.a.createElement($,{className:t.state},a.a.createElement(ae,null,a.a.createElement(m,{condition:"QUESTIONED"===t.state||"HIDDEN"===t.state},a.a.createElement(re,{className:"text ".concat(t.state," ").concat(i)},"?")),a.a.createElement(m,{condition:"FLAGGED"===t.state},a.a.createElement(ne,null))))},ie=n(18),ce=function(e){var t=e.children,n=e.onLeftClick,l=e.onRightClick,i=e.onBothClick,c=Object(ie.a)(e,["children","onLeftClick","onRightClick","onBothClick"]),u=Object(r.useState)(!1),f=Object(o.a)(u,2),s=f[0],L=f[1],m=Object(r.useState)(!1),p=Object(o.a)(m,2),d=p[0],E=p[1],b=function(){d&&s?i():s?n():d&&l(),E(!1),L(!1)};return a.a.createElement("div",Object.assign({onClick:function(){return b()},onMouseDown:function(e){1===e.nativeEvent.which?L(!0):3===e.nativeEvent.which&&E(!0)},onContextMenu:function(e){e.preventDefault(),b()}},c),t)};var oe=void 0,ue=function(e){oe=e};function fe(){var e=Object(c.a)(["\n  display: flex;\n  width: ","px;\n  height: ","px;\n"]);return fe=function(){return e},e}var se=Object(u.b)(ce)(fe(),50,50),Le=a.a.memo((function(e){var t=e.cell,n=e.onClick,l=e.onRightClick,i=e.onBothClick,c=function(){i(t)},u=function(){l(t)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=Object(r.useState)(!1),a=Object(o.a)(n,2),l=a[0],i=a[1];return Object(r.useEffect)((function(){var n=0;return l?n=setTimeout(e,t):clearTimeout(n),function(){clearTimeout(n)}}),[l]),{onTouchStart:function(){return i(!0)},onTouchEnd:function(){return i(!1)}}}((function(){L.isAnyOpenedState(t)&&c(),L.isAnyHiddenState(t)&&u()})),s=f.onTouchStart,p=f.onTouchEnd;return a.a.createElement(se,{onLeftClick:function(){"HIDDEN"===t.state?n(t):"OPENED"===t.state&&i(t)},onRightClick:u,onBothClick:c,onTouchStart:function(){(function(e){return null!=oe&&(oe.col!==e.col||oe.row!==e.row)})(t)||(s(),ue(t))},onTouchEnd:function(){p(),ue(void 0)}},a.a.createElement(m,{condition:L.isAnyHiddenState(t)},a.a.createElement(le,{cell:t})),a.a.createElement(m,{condition:L.isAnyOpenedState(t)},a.a.createElement(W,{cell:t})))}),(function(e,t){return e.cell.state===t.cell.state&&e.onClick===t.onClick&&e.onRightClick===t.onRightClick&&e.onBothClick===t.onBothClick}));function me(){var e=Object(c.a)(["\n  position: absolute;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n"]);return me=function(){return e},e}function pe(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]);return pe=function(){return e},e}function de(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border-top: 5px solid #7B7B7B;\n  border-right: 5px solid #FFFFFF;\n  border-bottom: 5px solid #FFFFFF;\n  border-left: 5px solid #7B7B7B;\n  box-sizing: border-box;\n  background-color: #BDBDBD;  \n  position: relative;\n  touch-action: manipulation;\n"]);return de=function(){return e},e}var Ee=u.b.div(de()),be=u.b.div(pe()),ge=u.b.div(me()),he=function(e){var t=e.board,n=e.onCellClick,r=e.onCellRightClick,l=e.onCellBothClick,i=e.game;return a.a.createElement(Ee,{onDragStart:function(e){return e.preventDefault()},onDrag:function(e){return e.preventDefault()}},a.a.createElement(m,{condition:"WON"===i.state||"LOST"===i.state},a.a.createElement(ge,{onContextMenu:function(e){return e.preventDefault()}})),t.map((function(e,t){return a.a.createElement(be,{key:t},e.map((function(e,i){return a.a.createElement(Le,{key:"".concat(t,"_").concat(i),cell:e,onClick:n,onRightClick:r,onBothClick:l})})))})))},ve=n(7),Oe=n(4),ye=function(e){return Array(e).fill(0)},xe=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},ke=function(e,t){return e.row===t.row&&e.col===t.col},we=function(e,t){return Boolean(t.find((function(t){return ke(t,e)})))},je=function(e,t){return[t[e.row-1]&&t[e.row-1][e.col],t[e.row-1]&&t[e.row-1][e.col+1],t[e.row]&&t[e.row][e.col+1],t[e.row+1]&&t[e.row+1][e.col+1],t[e.row+1]&&t[e.row+1][e.col],t[e.row+1]&&t[e.row+1][e.col-1],t[e.row]&&t[e.row][e.col-1],t[e.row-1]&&t[e.row-1][e.col-1]].filter((function(e){return!!e}))},Ce=function(e,t){return e.mine?e.minesAround:je(e,t).reduce((function(e,t){return t.mine?e+1:e}),0)},Be=function(e,t){return e.map((function(e){return e.map(t)}))},Fe=function(e,t){return Object(ve.a)({},e,{state:t})},De=function(e){return Fe(e,"OPENED")},Re=function(e){return Fe(e,"FLAGGED")},Se=function(e){return Fe(e,"QUESTIONED")},Ne=function(e){return Fe(e,"HIDDEN")},He=function(e,t){var n=function(e,t){for(var n=[t],r=0;;){for(var a=0,l=r;l<n.length;l++){for(var i=n[l],c=je(i,e),o=function(e){var t=c[e];0===t.minesAround&&n.every((function(e){return!ke(e,t)}))&&(n.push(t),a++)},u=0;u<c.length;u++)o(u);r++}if(0===a)break}return n}(e,t),r=function(e,t){return t.reduce((function(t,n){return[].concat(Object(Oe.a)(t),Object(Oe.a)(je(n,e)))}),[])}(e,n),a=[].concat(Object(Oe.a)(n),Object(Oe.a)(r));return Be(e,(function(e){return"HIDDEN"===e.state&&we(e,a)?De(e):e}))},Ae=function(e,t,n){return Be(e,(function(e){return ke(e,t)?n(e):e}))},Me=function(e,t){return Be(e,(function(e){return ke(e,t)?function(e){return Fe(e,"EXPLODED")}(e):e.mine||"FLAGGED"!==e.state?e.mine&&"FLAGGED"!==e.state?De(e):e:function(e){return Fe(e,"FLAGGED_WRONG")}(e)}))},Pe=function(e,t){return e[t.row][t.col]},Ge=function(e,t){for(var n=Object(Oe.a)(e),r=0;r<t.length;r++){var a=Pe(e,t[r]);if(a.mine)return Me(e,a);0===a.minesAround&&(n=He(n,a)),n=Ae(n,a,De)}return n},Ie=function(e,t){var n=je(t,e).filter((function(e){return!function(e){return e.mine&&"FLAGGED"===e.state}(e)}));return function(e,t){return je(e,t).reduce((function(e,t){return"FLAGGED"===t.state?e+1:e}),0)}(t,e)===t.minesAround?Ge(e,n):e},We=function(e,t,n){var r=function(e,t){for(var n=[];n.length<e.mines;){var r={row:xe(0,e.rows-1),col:xe(0,e.columns-1)},a=!we(r,n),l=!we(r,t);a&&l&&n.push(r)}return n}(e,[n].concat(Object(Oe.a)(je(n,t)))),a=Be(t,(function(e){return Object(ve.a)({},e,{mine:we(e,r),minesAround:-1})}));return Be(a,(function(e){return Object(ve.a)({},e,{minesAround:Ce(e,a)})}))},Ze=function(e){return ye(e.rows).map((function(t,n){return ye(e.columns).map((function(e,t){return L.emptyCell(n,t)}))}))},Te=function(){function e(t,n){Object(f.a)(this,e),this.state=t,this.minesLeft=n}return Object(s.a)(e,null,[{key:"newGame",value:function(e){return{state:"NEW",minesLeft:e}}}]),e}();function qe(){return(qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ze(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ue=a.a.createElement("defs",null,a.a.createElement("path",{d:"M198.13 100.62C198.13 154.44 154.44 198.12 100.63 198.12C46.81 198.12 3.13 154.44 3.13 100.62C3.13 46.81 46.81 3.13 100.63 3.13C154.44 3.13 198.13 46.81 198.13 100.62Z",id:"b7S1p7KrE"}),a.a.createElement("path",{d:"",id:"e18XDkrHD"}),a.a.createElement("path",{d:"M112.5 63.52C112.5 68.13 109.53 71.88 105.86 71.88C102.2 71.88 99.22 68.13 99.22 63.52C99.22 58.91 102.2 55.17 105.86 55.17C109.53 55.17 112.5 58.91 112.5 63.52Z",id:"d8CN6wkfF"}),a.a.createElement("path",{d:"M166.95 110.13C166.95 138.28 137.95 161.13 102.22 161.13C66.5 161.13 37.5 138.28 37.5 110.13C37.5 81.98 66.5 59.13 102.22 59.13C137.95 59.13 166.95 81.98 166.95 110.13Z",id:"c1EDLayw71"}),a.a.createElement("path",{d:"M27.42 48.43L171.88 48.43L171.88 113.74L27.42 113.74L27.42 48.43Z",id:"asqPA0UpS"}),a.a.createElement("path",{d:"M149.25 74.38C149.25 82.65 142.53 89.37 134.25 89.37C125.97 89.37 119.25 82.65 119.25 74.38C119.25 66.1 125.97 59.38 134.25 59.38C142.53 59.38 149.25 66.1 149.25 74.38Z",id:"a1X6VNVfdZ"}),a.a.createElement("path",{d:"M84.37 74.38C84.37 82.65 77.65 89.37 69.38 89.37C61.1 89.37 54.38 82.65 54.38 74.38C54.38 66.1 61.1 59.38 69.38 59.38C77.65 59.38 84.37 66.1 84.37 74.38Z",id:"dpLtcRXhG"})),Xe=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#b7S1p7KrE",opacity:1,fill:"#ffff00",fillOpacity:1}),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#b7S1p7KrE",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:5,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#e18XDkrHD",opacity:1,fillOpacity:0,stroke:"#330f19",strokeWidth:1,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#d8CN6wkfF",opacity:1,fill:"#ffff00",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c1EDLayw71",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#asqPA0UpS",opacity:1,fill:"#ffff00",fillOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a1X6VNVfdZ",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#dpLtcRXhG",opacity:1,fill:"#000000",fillOpacity:1})))),Je=function(e){var t=e.svgRef,n=e.title,r=ze(e,["svgRef","title"]);return a.a.createElement("svg",qe({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,Ue,Xe)},Qe=a.a.forwardRef((function(e,t){return a.a.createElement(Je,qe({svgRef:t},e))}));n.p;function Ve(){return(Ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ye(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _e=a.a.createElement("defs",null,a.a.createElement("path",{d:"M198.13 100.62C198.13 154.44 154.44 198.12 100.63 198.12C46.81 198.12 3.13 154.44 3.13 100.62C3.13 46.81 46.81 3.13 100.63 3.13C154.44 3.13 198.13 46.81 198.13 100.62Z",id:"c6EN07Oglp"}),a.a.createElement("path",{d:"",id:"a4aCJQVy9q"}),a.a.createElement("path",{d:"M142.88 75L156.25 88.37L148.76 95.86L135.39 82.49L122.02 95.86L114.53 88.37L127.9 75L114.53 61.63L122.02 54.14L135.39 67.51L148.76 54.14L156.25 61.63L142.88 75Z",id:"j16qPVuo60"}),a.a.createElement("path",{d:"M171.87 138.59C171.87 150.8 140.37 160.72 101.56 160.72C62.76 160.72 31.25 150.8 31.25 138.59C31.25 126.38 62.76 116.46 101.56 116.46C140.37 116.46 171.87 126.38 171.87 138.59Z",id:"agCqTw4Qc"}),a.a.createElement("path",{d:"M75.23 73.99L88.6 87.36L81.11 94.85L67.74 81.48L54.36 94.85L46.88 87.36L60.25 73.99L46.88 60.61L54.36 53.13L67.74 66.5L81.11 53.13L88.6 60.61L75.23 73.99Z",id:"cxBtrJOy"})),Ke=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c6EN07Oglp",opacity:1,fill:"#ffff00",fillOpacity:1}),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c6EN07Oglp",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:5,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a4aCJQVy9q",opacity:1,fillOpacity:0,stroke:"#330f19",strokeWidth:1,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#j16qPVuo60",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#agCqTw4Qc",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#cxBtrJOy",opacity:1,fill:"#000000",fillOpacity:1})))),$e=function(e){var t=e.svgRef,n=e.title,r=Ye(e,["svgRef","title"]);return a.a.createElement("svg",Ve({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,_e,Ke)},et=a.a.forwardRef((function(e,t){return a.a.createElement($e,Ve({svgRef:t},e))}));n.p;function tt(){return(tt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var rt=a.a.createElement("defs",null,a.a.createElement("path",{d:"M198.13 100.62C198.13 154.44 154.44 198.12 100.63 198.12C46.81 198.12 3.13 154.44 3.13 100.62C3.13 46.81 46.81 3.13 100.63 3.13C154.44 3.13 198.13 46.81 198.13 100.62Z",id:"gwlcDM8t2"}),a.a.createElement("path",{d:"",id:"a2vbYZB0a"}),a.a.createElement("path",{d:"M112.5 63.52C112.5 68.13 109.53 71.88 105.86 71.88C102.2 71.88 99.22 68.13 99.22 63.52C99.22 58.91 102.2 55.17 105.86 55.17C109.53 55.17 112.5 58.91 112.5 63.52Z",id:"a2010s2CU6"}),a.a.createElement("path",{d:"M166.95 110.13C166.95 138.28 137.95 161.13 102.22 161.13C66.5 161.13 37.5 138.28 37.5 110.13C37.5 81.98 66.5 59.13 102.22 59.13C137.95 59.13 166.95 81.98 166.95 110.13Z",id:"g5b1V17lj"}),a.a.createElement("path",{d:"M27.42 48.43L171.88 48.43L171.88 113.74L27.42 113.74L27.42 48.43Z",id:"c2gqW9Byhk"}),a.a.createElement("path",{d:"M78.3 51.7C86.83 51.7 93.75 57.96 93.75 65.69C93.75 87.09 62.85 97.72 62.85 98.3C62.85 98.3 62.85 98.3 62.85 98.3C62.85 97.72 31.94 87.09 31.94 65.69C31.94 57.96 38.86 51.7 47.39 51.7C55.93 51.7 62.85 57.19 62.84 64.91C62.84 57.19 69.76 51.7 78.3 51.7Z",id:"a77o9lLzg"}),a.a.createElement("path",{d:"M156.42 51.7C164.96 51.7 171.87 57.96 171.87 65.69C171.88 87.09 140.97 97.72 140.97 98.3C140.97 98.3 140.97 98.3 140.97 98.3C140.97 97.72 110.06 87.09 110.06 65.69C110.06 57.96 116.98 51.7 125.52 51.7C134.05 51.7 140.97 57.19 140.97 64.91C140.97 57.19 147.89 51.7 156.42 51.7Z",id:"e2gWCO5Egi"})),at=a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#gwlcDM8t2",opacity:1,fill:"#ffff00",fillOpacity:1}),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#gwlcDM8t2",opacity:1,fillOpacity:0,stroke:"#000000",strokeWidth:5,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a2vbYZB0a",opacity:1,fillOpacity:0,stroke:"#330f19",strokeWidth:1,strokeOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a2010s2CU6",opacity:1,fill:"#ffff00",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#g5b1V17lj",opacity:1,fill:"#000000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#c2gqW9Byhk",opacity:1,fill:"#ffff00",fillOpacity:1}))),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#a77o9lLzg",opacity:1,fill:"#ff0000",fillOpacity:1})),a.a.createElement("g",null,a.a.createElement("use",{xlinkHref:"#e2gWCO5Egi",opacity:1,fill:"#ff0000",fillOpacity:1})))),lt=function(e){var t=e.svgRef,n=e.title,r=nt(e,["svgRef","title"]);return a.a.createElement("svg",tt({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 200 200",width:200,height:200,ref:t},r),n?a.a.createElement("title",null,n):null,rt,at)},it=a.a.forwardRef((function(e,t){return a.a.createElement(lt,tt({svgRef:t},e))})),ct=(n.p,function(e){var t=e.state,n=Object(r.useState)(0),l=Object(o.a)(n,2),i=l[0],c=l[1];return Object(r.useEffect)((function(){var e=0;return"NEW"===t&&(clearTimeout(e),c(0)),"IN_PROCESS"===t&&(0===i&&c((function(e){return e+1})),e=setTimeout((function(){return c((function(e){return e+1}))}),1e3)),function(){return clearTimeout(e)}}),[t,i]),a.a.createElement(a.a.Fragment,null,mt(i))});function ot(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & svg {\n    width: 40px;\n    height: 40px; \n  }\n"]);return ot=function(){return e},e}function ut(){var e=Object(c.a)(["\n  background-color: #BDBDBD;\n  box-sizing: border-box;\n  padding: 0;\n  border: 0;\n  border-top: 5px solid #FFF;\n  border-right: 5px solid #7B7B7B;\n  border-bottom: 5px solid #7B7B7B;\n  border-left: 5px solid #FFF;\n  width: 60px;\n  height: 60px;\n\n  &:active {\n    border: 4px solid #7B7B7B;\n  }\n"]);return ut=function(){return e},e}function ft(){var e=Object(c.a)(["\n  padding: 0 7px;\n  background-color: #000;\n  color: #FF0000;\n  font-size: 50px;\n  line-height: 60px;\n  font-family: monospace;\n"]);return ft=function(){return e},e}function st(){var e=Object(c.a)(["\n  border-bottom: 18px solid #BDBDBD;\n"]);return st=function(){return e},e}function Lt(){var e=Object(c.a)(["\n  background-color: #C0C0C0;\n  border-top: 5px solid #7B7B7B;\n  border-right: 5px solid #FFFFFF;\n  border-bottom: 5px solid #FFFFFF;\n  border-left: 5px solid #7B7B7B;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n"]);return Lt=function(){return e},e}var mt=function(e){return e>999?"999":e<0?"000":e.toString().padStart(3,"0")},pt=u.b.div(Lt()),dt=u.b.div(st()),Et=u.b.span(ft()),bt=u.b.button(ut()),gt=u.b.div(ot()),ht=function(e){var t=e.onNewGame,n=e.game;return a.a.createElement(dt,null,a.a.createElement(pt,null,a.a.createElement(Et,{className:"text"},mt(n.minesLeft)),a.a.createElement(bt,{onClick:t},a.a.createElement(gt,null,function(){switch(n.state){case"WON":return a.a.createElement(it,null);case"LOST":return a.a.createElement(et,null);default:return a.a.createElement(Qe,null)}}())),a.a.createElement(Et,{className:"text"},a.a.createElement(ct,{state:n.state}))))};function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ot(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var yt=a.a.createElement("path",{d:"M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"}),xt=function(e){var t=e.svgRef,n=e.title,r=Ot(e,["svgRef","title"]);return a.a.createElement("svg",vt({height:"32px",id:"Layer_1",style:{enableBackground:"new 0 0 32 32"},viewBox:"0 0 32 32",width:"32px",xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,yt)},kt=a.a.forwardRef((function(e,t){return a.a.createElement(xt,vt({svgRef:t},e))})),wt=(n.p,n(15));function jt(){var e=Object(c.a)(["\n  background: none!important;\n  border: none;\n  padding: 0!important;\n  color: #0000FF;\n  cursor: pointer;\n"]);return jt=function(){return e},e}function Ct(){var e=Object(c.a)(["\n  list-style-type: none;\n  font-size: 16px;\n  line-height: 30px;\n "]);return Ct=function(){return e},e}function Bt(){var e=Object(c.a)(["\n  position: fixed;\n  top: 20px;\n  left: 20px;\n  cursor: pointer;\n"]);return Bt=function(){return e},e}function Ft(){var e=Object(c.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: #3a3a3a80;\n"]);return Ft=function(){return e},e}function Dt(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: ",";\n  height: 100%;\n  background-color: #fff;\n  z-index: 1;\n  transition: transform 0.2s ease-in 0s;\n  transform: translate3d(-",", 0px, 0px);\n  &.opened {\n    transform: translate3d(0px, 0px, 0px);\n  }\n"]);return Dt=function(){return e},e}var Rt=u.b.div(Dt(),"200px","200px"),St=u.b.div(Ft()),Nt=Object(u.b)(kt)(Bt()),Ht=u.b.li(Ct()),At=u.b.button(jt()),Mt=function(e){var t=e.onChange,n=Object(r.useState)(!1),l=Object(o.a)(n,2),i=l[0],c=l[1],u=function(e){t(e)};return a.a.createElement(a.a.Fragment,null,a.a.createElement(Nt,{onClick:function(){return c(!0)}}),a.a.createElement(Rt,{className:i?"opened":""},a.a.createElement("nav",{style:{display:"flex",flexDirection:"column",height:"100%"}},a.a.createElement("ul",{style:{flex:1}},a.a.createElement(Ht,null,a.a.createElement(At,{onClick:function(){return u("Beginner")}},"Beginner")),a.a.createElement(Ht,null,a.a.createElement(At,{onClick:function(){return u("Intermediate")}},"Intermediate")),a.a.createElement(Ht,null,a.a.createElement(At,{onClick:function(){return u("Expert")}},"Expert"))),a.a.createElement("ul",{style:{flex:0}},a.a.createElement(Ht,null,wt.a)))),a.a.createElement(m,{condition:i},a.a.createElement(St,{onClick:function(){return c(!1)}})))};function Pt(){var e=Object(c.a)(["\n  margin: 0 auto;\n  border-top: 3px solid #FFF;\n  border-right: 3px solid #7B7B7B;\n  border-bottom: 3px solid #7B7B7B;\n  border-left: 3px solid #FFF;\n"]);return Pt=function(){return e},e}function Gt(){var e=Object(c.a)(["\n  border: 18px solid #BDBDBD;\n"]);return Gt=function(){return e},e}function It(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 100%;\n  min-height: 100%;\n"]);return It=function(){return e},e}var Wt={rows:9,columns:9,mines:10},Zt={rows:16,columns:16,mines:40},Tt={rows:16,columns:30,mines:99},qt=u.b.div(It()),zt=u.b.div(Gt()),Ut=u.b.div(Pt()),Xt=function(){var e=Object(r.useState)(Wt),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(r.useState)((function(){return Ze(n)})),c=Object(o.a)(i,2),u=c[0],f=c[1],s=Object(r.useState)((function(){return Te.newGame(n.mines)})),m=Object(o.a)(s,2),p=m[0],d=m[1];Object(r.useEffect)((function(){d(function(e,t){for(var n=e.rows*e.columns,r=0,a=0,l=0,i=0,c=0,o=0;o<e.rows;o++)for(var u=0;u<e.columns;u++){var f=t[o][u];L.isAnyHiddenState(f)&&r++,"EXPLODED"===f.state&&a++,"OPENED"===f.state&&l++,"FLAGGED"===f.state&&(f.mine&&i++,c++)}var s=i===e.mines&&l===n-e.mines;return{state:r===n?"NEW":a>0?"LOST":s?"WON":"IN_PROCESS",minesLeft:e.mines-c}}(n,u))}),[u,n]);var E=Object(r.useCallback)((function(e){L.isAnyOpenedState(e)||f((function(t){var r="NEW"===p.state?We(n,t,e):t;return Ge(r,[e])}))}),[p.state,n]),b=Object(r.useCallback)((function(e){f((function(t){return function(e,t){switch(t.state){case"HIDDEN":return Ae(e,t,Re);case"FLAGGED":return Ae(e,t,Se);case"QUESTIONED":return Ae(e,t,Ne);default:return e}}(t,e)}))}),[]),g=Object(r.useCallback)((function(e){f((function(t){return"NEW"!==p.state?Ie(t,e):t}))}),[p.state]),h=Object(r.useCallback)((function(){f(Ze(n)),d(Te.newGame(n.mines))}),[n]);return a.a.createElement(qt,null,a.a.createElement(Ut,null,a.a.createElement(zt,null,a.a.createElement(ht,{onNewGame:h,game:p}),a.a.createElement(he,{board:u,size:n,onCellClick:E,onCellRightClick:b,onCellBothClick:g,game:p}))),a.a.createElement(Mt,{onChange:function(e){var t=function(e){l(e),f(Ze(e)),d(Te.newGame(e.mines))};switch(e.toLocaleUpperCase()){case"BEGINNER":return t(Wt);case"INTERMEDIATE":return t(Zt);case"EXPERT":return t(Tt)}}}))},Jt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(Xt,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");Jt?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qt(t,e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.78fd8f90.chunk.js.map
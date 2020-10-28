(this.webpackJsonpMyGame2048=this.webpackJsonpMyGame2048||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),c=n(4),i=n.n(c),o=(n(15),n(5)),l=n(6),h=n(9),u=n(8),d=n(2),m=n(7),f=n.n(m),j=(n(16),new Array(4).fill(new Array(4)));function v(e){return f()("gameBlock__item",{"gameBlock__item--2":2===e,"gameBlock__item--4":4===e,"gameBlock__item--8":8===e,"gameBlock__item--16":16===e,"gameBlock__item--32":32===e,"gameBlock__item--64":64===e,"gameBlock__item--128":128===e,"gameBlock__item--256":256===e,"gameBlock__item--512":512===e,"gameBlock__item--1024":1024===e,"gameBlock__item--2048":2048===e})}function b(){return Math.floor(4*Math.random())}function p(){var e=Object(d.a)(j),t=new Array(4),n=new Array(4);return t[b()]=2,n[b()]=2,e[b()]=t,e[b()]=n,e}var g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={arrays:j,score:0,bestScore:0},e.generateNumbers=function(){var t=b(),n=b(),r=e.state.arrays;r[t][n]?e.generateNumbers():(r[t][n]=2,e.refreshArray(r))},e.swipeLeft=function(t){"ArrowLeft"===t.code&&(e.horizontallySwipe("left"),setTimeout((function(){e.generateNumbers()}),300))},e.swipeRight=function(t){"ArrowRight"===t.code&&(e.horizontallySwipe("right"),setTimeout((function(){e.generateNumbers()}),300))},e.swipeUp=function(t){"ArrowUp"===t.code&&(e.VerticalSwipe("up"),setTimeout((function(){e.generateNumbers()}),300))},e.swipeDown=function(t){"ArrowDown"===t.code&&(e.VerticalSwipe("down"),setTimeout((function(){e.generateNumbers()}),300))},e}return Object(l.a)(n,[{key:"refreshArray",value:function(e){this.setState({arrays:e})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.swipeLeft),document.addEventListener("keydown",this.swipeRight),document.addEventListener("keydown",this.swipeUp),document.addEventListener("keydown",this.swipeDown)}},{key:"newGame",value:function(){this.setState((function(e){var t=e.score,n=e.bestScore;return{arrays:p(),bestScore:t>n?t:n,score:0}}))}},{key:"horizontallySwipe",value:function(e){for(var t=this,n=Object(d.a)(this.state.arrays),r=[],s=function(s){for(var a=n[s].filter((function(e){return e})),c=[],i=function(e){a[e]===a[e+1]?(c.push(2*a[e]),t.setState((function(t){t.score+=a[e]})),e++):c.push(a[e]),o=e},o=0;o<a.length;o++)i(o);var l=new Array(4-c.length);if("left"===e){for(var h=0;h<l.length;h++)c.push(l[h]);r.push(c)}else{for(var u=0;u<c.length;u++)l.push(c[u]);r.push(l)}},a=0;a<n.length;a++)s(a);this.refreshArray(r)}},{key:"VerticalSwipe",value:function(e){for(var t=this,n=Object(d.a)(this.state.arrays),r=[],s=[[],[],[],[]],a=0;a<n.length;a++)s[0].push(n[a][0]),s[1].push(n[a][1]),s[2].push(n[a][2]),s[3].push(n[a][3]);for(var c=[],i=function(n){for(var r=s[n].filter((function(e){return e})),a=[],i=function(e){r[e]===r[e+1]?(a.push(2*r[e]),t.setState((function(t){t.score+=r[e]})),e++):a.push(r[e]),o=e},o=0;o<r.length;o++)i(o);var l=new Array(4-a.length);if("up"===e){for(var h=0;h<l.length;h++)a.push(l[h]);c.push(a)}else{for(var u=0;u<a.length;u++)l.push(a[u]);c.push(l)}},o=0;o<s.length;o++)i(o);for(var l=0;l<c.length;l++){for(var h=[],u=0;u<c.length;u++)h.push(c[u][l]);r.push(h)}this.refreshArray(r)}},{key:"render",value:function(){var e=this,t=this.state,n=t.arrays,s=t.score,a=t.bestScore;return Object(r.jsxs)("div",{className:"game",children:[Object(r.jsxs)("div",{className:"gamePanel",children:[Object(r.jsxs)("div",{className:"gamePanel__scores",children:[Object(r.jsx)("h1",{children:"2048"}),Object(r.jsxs)("h2",{children:["Score:",s]}),Object(r.jsxs)("h3",{children:["Best Score:",a]})]}),Object(r.jsx)("button",{type:"button",onClick:function(){return e.newGame()},name:"btn",id:"newGame",children:"NEW GAME"})]}),Object(r.jsxs)("div",{className:"gameBlock",children:[Object(r.jsx)("div",{className:v(n[0][0]),children:n[0][0]}),Object(r.jsx)("div",{className:v(n[0][1]),children:n[0][1]}),Object(r.jsx)("div",{className:v(n[0][2]),children:n[0][2]}),Object(r.jsx)("div",{className:v(n[0][3]),children:n[0][3]}),Object(r.jsx)("div",{className:v(n[1][0]),children:n[1][0]}),Object(r.jsx)("div",{className:v(n[1][1]),children:n[1][1]}),Object(r.jsx)("div",{className:v(n[1][2]),children:n[1][2]}),Object(r.jsx)("div",{className:v(n[1][3]),children:n[1][3]}),Object(r.jsx)("div",{className:v(n[2][0]),children:n[2][0]}),Object(r.jsx)("div",{className:v(n[2][1]),children:n[2][1]}),Object(r.jsx)("div",{className:v(n[2][2]),children:n[2][2]}),Object(r.jsx)("div",{className:v(n[2][3]),children:n[2][3]}),Object(r.jsx)("div",{className:v(n[3][0]),children:n[3][0]}),Object(r.jsx)("div",{className:v(n[3][1]),children:n[3][1]}),Object(r.jsx)("div",{className:v(n[3][2]),children:n[3][2]}),Object(r.jsx)("div",{className:v(n[3][3]),children:n[3][3]})]})]})}}]),n}(a.a.Component),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),s(e),a(e),c(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),w()}},[[17,1,2]]]);
//# sourceMappingURL=main.965ff784.chunk.js.map
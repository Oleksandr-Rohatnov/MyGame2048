(this.webpackJsonpMyGame2048=this.webpackJsonpMyGame2048||[]).push([[0],{15:function(e,t,r){},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),s=r.n(a),i=r(5),c=r.n(i),o=(r(15),r(6)),l=r(7),h=r(9),u=r(8),d=r(3),m=r(2),f=r.n(m),j=(r(16),new Array(4).fill(new Array(4)));function v(e){return f()("gameBlock__item",{"gameBlock__item--2":2===e,"gameBlock__item--4":4===e,"gameBlock__item--8":8===e,"gameBlock__item--16":16===e,"gameBlock__item--32":32===e,"gameBlock__item--64":64===e,"gameBlock__item--128":128===e,"gameBlock__item--256":256===e,"gameBlock__item--512":512===e,"gameBlock__item--1024":1024===e,"gameBlock__item--2048":2048===e})}function g(){return Math.floor(4*Math.random())}function w(){var e=Object(d.a)(j),t=new Array(4),r=new Array(4);return t[g()]=2,r[g()]=2,e[g()]=t,e[g()]=r,e}var p=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={arrays:w(),score:0,bestScore:0,gameStatus:!0,winStatus:!1},e.arrayCheck=function(e,t){var r=0;if(t){for(var n=!0,a=0;a<e.length;a++)for(var s=0;s<e.length;s++)e[a][s]!==t[a][s]&&(n=!1);return n}for(var i=0;i<e.length;i++)for(var c=0;c<e.length;c++)e[i][c]&&r++;return 16!==r},e.winCheck=function(e){return e.some((function(e){return e.some((function(e){return 2048===e}))}))},e.generateNumbers=function(t){var r=g(),n=g(),a=t;a[r][n]?e.generateNumbers(a):(a[r][n]=2,e.refreshArray(a)),console.log("generate")},e.swipeLeft=function(t){"ArrowLeft"===t.code&&(e.horizontallySwipe("left"),e.setState({gameStatus:e.horizontallySwipe("left")}))},e.swipeRight=function(t){"ArrowRight"===t.code&&(e.horizontallySwipe("right"),e.setState({gameStatus:e.horizontallySwipe("right")}))},e.swipeUp=function(t){"ArrowUp"===t.code&&(e.VerticalSwipe("up"),e.setState({gameStatus:e.VerticalSwipe("up")}))},e.swipeDown=function(t){"ArrowDown"===t.code&&(e.VerticalSwipe("down"),e.setState({gameStatus:e.VerticalSwipe("down")}))},e}return Object(l.a)(r,[{key:"refreshArray",value:function(e){this.setState({arrays:e}),console.log("refresh")}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.swipeLeft),document.addEventListener("keydown",this.swipeRight),document.addEventListener("keydown",this.swipeUp),document.addEventListener("keydown",this.swipeDown)}},{key:"newGame",value:function(){this.setState((function(e){var t=e.score,r=e.bestScore;return{arrays:w(),bestScore:t>r?t:r,score:0,gameStatus:!0,winStatus:!1}}))}},{key:"horizontallySwipe",value:function(e){for(var t=this,r=Object(d.a)(this.state.arrays),n=[],a=function(a){for(var s=r[a].filter((function(e){return e})),i=[],c=function(e){s[e]===s[e+1]?(i.push(2*s[e]),t.setState((function(t){t.score+=s[e]})),e++):i.push(s[e]),o=e},o=0;o<s.length;o++)c(o);var l=new Array(4-i.length);if("left"===e){for(var h=0;h<l.length;h++)i.push(l[h]);n.push(i)}else{for(var u=0;u<i.length;u++)l.push(i[u]);n.push(l)}},s=0;s<r.length;s++)a(s);return this.winCheck(n)&&this.setState({winStatus:!0}),this.arrayCheck(n,r)||(this.refreshArray(n),setTimeout((function(){t.generateNumbers(t.state.arrays)}),300)),this.arrayCheck(n)}},{key:"VerticalSwipe",value:function(e){for(var t=this,r=Object(d.a)(this.state.arrays),n=[],a=[[],[],[],[]],s=0;s<r.length;s++)a[0].push(r[s][0]),a[1].push(r[s][1]),a[2].push(r[s][2]),a[3].push(r[s][3]);for(var i=[],c=function(r){for(var n=a[r].filter((function(e){return e})),s=[],c=function(e){n[e]===n[e+1]?(s.push(2*n[e]),t.setState((function(t){t.score+=n[e]})),e++):s.push(n[e]),o=e},o=0;o<n.length;o++)c(o);var l=new Array(4-s.length);if("up"===e){for(var h=0;h<l.length;h++)s.push(l[h]);i.push(s)}else{for(var u=0;u<s.length;u++)l.push(s[u]);i.push(l)}},o=0;o<a.length;o++)c(o);for(var l=0;l<i.length;l++){for(var h=[],u=0;u<i.length;u++)h.push(i[u][l]);n.push(h)}return this.winCheck(n)&&this.setState({winStatus:!0}),this.arrayCheck(n,r)||(this.refreshArray(n),setTimeout((function(){t.generateNumbers(t.state.arrays)}),300)),this.arrayCheck(n)}},{key:"render",value:function(){var e=this,t=this.state,r=t.arrays,a=t.score,s=t.bestScore,i=t.gameStatus,c=t.winStatus;return Object(n.jsxs)("div",{className:"game",children:[Object(n.jsxs)("div",{className:"gamePanel",children:[Object(n.jsxs)("div",{className:"gamePanel__scores",children:[Object(n.jsx)("h1",{children:"2048"}),Object(n.jsxs)("h2",{children:["Score:",a]}),Object(n.jsxs)("h3",{children:["Best Score:",s]})]}),Object(n.jsx)("button",{type:"button",onClick:function(){return e.newGame()},name:"btn",id:"newGame",children:"NEW GAME"})]}),Object(n.jsxs)("div",{className:"gameBlock",children:[Object(n.jsx)("div",{className:v(r[0][0]),children:r[0][0]}),Object(n.jsx)("div",{className:v(r[0][1]),children:r[0][1]}),Object(n.jsx)("div",{className:v(r[0][2]),children:r[0][2]}),Object(n.jsx)("div",{className:v(r[0][3]),children:r[0][3]}),Object(n.jsx)("div",{className:v(r[1][0]),children:r[1][0]}),Object(n.jsx)("div",{className:v(r[1][1]),children:r[1][1]}),Object(n.jsx)("div",{className:v(r[1][2]),children:r[1][2]}),Object(n.jsx)("div",{className:v(r[1][3]),children:r[1][3]}),Object(n.jsx)("div",{className:v(r[2][0]),children:r[2][0]}),Object(n.jsx)("div",{className:v(r[2][1]),children:r[2][1]}),Object(n.jsx)("div",{className:v(r[2][2]),children:r[2][2]}),Object(n.jsx)("div",{className:v(r[2][3]),children:r[2][3]}),Object(n.jsx)("div",{className:v(r[3][0]),children:r[3][0]}),Object(n.jsx)("div",{className:v(r[3][1]),children:r[3][1]}),Object(n.jsx)("div",{className:v(r[3][2]),children:r[3][2]}),Object(n.jsx)("div",{className:v(r[3][3]),children:r[3][3]}),Object(n.jsx)("div",{className:f()("gameOver",{"gameOver--hidden":i}),children:"Game Over"}),Object(n.jsx)("div",{className:f()("win",{"win--hidden":!c}),children:"You win!!!"})]})]})}}]),r}(s.a.Component),b=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,18)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),s(e),i(e)}))};c.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.5077edb7.chunk.js.map
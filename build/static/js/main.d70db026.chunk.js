(this["webpackJsonpclicky-app"]=this["webpackJsonpclicky-app"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Fuu","image":"./photos/Fuu.jpg"},{"id":2,"name":"Jin","image":"./photos/Jin.jpg"},{"id":3,"name":"Kariya","image":"./photos/Kariya.jpg"},{"id":4,"name":"Momo","image":"./photos/Momo.png"},{"id":5,"name":"Mugen","image":"./photos/Mugen.jpg"},{"id":6,"name":"Oniwakamaru","image":"./photos/Oniwakamaru.jpg"},{"id":7,"name":"Rikiei","image":"./photos/Rikiei.jpg"},{"id":8,"name":"Sara","image":"./photos/Sara.png"},{"id":9,"name":"Shino","image":"./photos/Shino.jpg"},{"id":10,"name":"Shoryu","image":"./photos/Shoryu.jpg"},{"id":11,"name":"Yagyu","image":"./photos/Yagyu.jpg"},{"id":12,"name":"Yatsuha","image":"./photos/Yatsuha.jpg"}]')},,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),i=c(4),o=c.n(i),s=(c(14),c(5)),h=c(6),d=c(8),l=c(7),m=(c(15),function(e){return Object(a.jsx)("div",{className:"card",id:e.id,onClick:function(){return e.handleClick(e.id)},children:Object(a.jsx)("div",{className:"img-container",children:Object(a.jsx)("img",{alt:e.name,src:e.image})})})});c(16);var u=function(e){return Object(a.jsxs)("div",{className:"header",children:[" ",Object(a.jsx)("h1",{children:Object(a.jsx)("strong",{children:"Samurai Champloo Clicky Game!"})}),Object(a.jsx)("h3",{children:"Click on a character but don't click on the same one twice!"}),Object(a.jsx)("h4",{children:Object(a.jsxs)("strong",{children:["Score: ",e.score," | Top Score: ",e.topScore]})})]})},p=function(e){return Object(a.jsx)("div",{className:"container",children:e.children})},j=c(3);function g(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[c],e[c]=a}return e}var S=function(e){Object(d.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={characters:j,score:0,topScore:0,correctIncorrect:"",clicked:[]},e.handleClick=function(t){-1===e.state.clicked.indexOf(t)?(e.handleIncrement(),e.setState({clicked:e.state.clicked.concat(t)})):e.handleReset()},e.handleIncrement=function(){var t=e.state.currentScore+1;e.setState({currentScore:t,correctIncorrect:"Correct!"}),t>=e.state.topScore?e.setState({topScore:t}):12===t&&e.setState({correctIncorrect:"Winner!"}),e.handleShuffle()},e.handleReset=function(){e.setState({currentScore:0,topScore:e.state.topScore,correctIncorrect:"Wrong!",clicked:[]}),e.handleShuffle()},e.handleShuffle=function(){var t=g(j);e.setState({characters:t})},e}return Object(h.a)(c,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(p,{children:[Object(a.jsx)(u,{score:this.state.score,message:this.state.message,topScore:this.state.topScore}),Object(a.jsx)("div",{class:"container",children:Object(a.jsx)("div",{class:"row",children:this.state.characters.map((function(t){return Object(a.jsx)(m,{id:t.id,name:t.name,image:t.image,clickedImage:e.clickedImage},t.id)}))})})]})}}]),c}(n.Component);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.d70db026.chunk.js.map
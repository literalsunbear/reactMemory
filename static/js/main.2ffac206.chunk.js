(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{11:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var a=t(1),i=t.n(a),r=t(4),n=t.n(r),s=t(2),d=[{text:"BMO",imgURL:t.p+"static/media/card-BMO.0acb0685.png"},{text:"Princess Bubblegum",imgURL:t.p+"static/media/card-bubblegum.d266deb9.png"},{text:"Cake",imgURL:t.p+"static/media/card-cake.42fbb2d5.png"},{text:"Choose Goose",imgURL:t.p+"static/media/card-choose-goose.0ca84de4.png"},{text:"Finn",imgURL:t.p+"static/media/card-finn.1b7e3efb.png"},{text:"Fiona",imgURL:t.p+"static/media/card-fiona.d9d37a66.png"},{text:"Prince Gumball",imgURL:t.p+"static/media/card-gumball.4510c422.png"},{text:"Ice King",imgURL:t.p+"static/media/card-ice-king.a56ea7f2.png"},{text:"Ice Queen",imgURL:t.p+"static/media/card-ice-queen.c596d634.png"},{text:"Jake",imgURL:t.p+"static/media/card-jake.1e27c240.png"},{text:"Lumpy Space Prince",imgURL:t.p+"static/media/card-LSP-2.a691ffb5.png"},{text:"Lumpy Space Princess",imgURL:t.p+"static/media/card-LSP.0549c8c6.png"},{text:"Marceline",imgURL:t.p+"static/media/card-marceline.3ed1b94c.png"},{text:"Marshall Lee",imgURL:t.p+"static/media/card-marshall.e15fbd13.png"},{text:"Memow",imgURL:t.p+"static/media/card-memow.5338e071.png"},{text:"Tiffany",imgURL:t.p+"static/media/card-tiffany.bc8c3c9a.png"}],o=t(5),m=t(0),l=function(e){return Object(m.jsx)(o.a,{tiltReverse:!0,scale:1.1,transitionSpeed:600,children:Object(m.jsx)("div",{className:"card",id:e.flavor,alt:e.flavor,onClick:function(){e.handleClick(e.flavor)},children:Object(m.jsx)("img",{src:e.imgURL,alt:e.flavor})})})},g=function(e){var c=e.cards.map((function(c){return Object(m.jsx)(l,{flavor:c.text,imgURL:c.imgURL,handleClick:e.handleClick})}));return Object(m.jsx)("div",{className:"card-grid",children:c})},b=function(e){return Object(m.jsxs)("div",{className:"score-box",children:[Object(m.jsxs)("div",{className:"current-score",children:[Object(m.jsx)("p",{children:"CURRENT SCORE:"}),Object(m.jsx)("p",{children:e.currentScore})]}),Object(m.jsxs)("div",{className:"current-score",children:[Object(m.jsx)("p",{children:"HIGH SCORE:"}),Object(m.jsx)("p",{children:e.highScore})]})]})},j=t.p+"static/media/header-bg.e9987d9d.jpeg",p=function(e){return Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)(b,{currentScore:e.currentScore,highScore:e.highScore}),Object(m.jsx)("h1",{children:"MEMORY TIME"}),Object(m.jsx)("img",{src:j,alt:"Jake The Dog reading a book"})]})},u=(t(11),function(){var e=Object(a.useState)(0),c=Object(s.a)(e,2),t=c[0],i=c[1],r=Object(a.useState)(0),n=Object(s.a)(r,2),o=n[0],l=n[1],b=Object(a.useState)(d),j=Object(s.a)(b,2),u=j[0],h=j[1],x=Object(a.useState)([]),f=Object(s.a)(x,2),O=f[0],R=f[1];var L=function(){alert("aw dang, you already clicked that. try to beat ".concat(t," this time!")),t>o&&l(t),i(0);R([])};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{currentScore:t,highScore:o}),Object(m.jsx)(g,{handleClick:function(e){!function(){for(var e=u,c=e.length-1;c>0;c--){var t=Math.floor(Math.random()*(c+1)),a=e[c];e[c]=e[t],e[t]=a}h(e),console.log("shuffled the cards"),console.log(u)}(),function(e){if(O.includes(e))L();else{var c=O;c.push(e),R(c),i(t+1)}}(e)},cards:u})]})});n.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(u,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2ffac206.chunk.js.map
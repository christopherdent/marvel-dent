(this["webpackJsonpmarvel-dent"]=this["webpackJsonpmarvel-dent"]||[]).push([[0],{36:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(9),o=n.n(i),a=(n(36),n(10)),s=n(11),l=n(15),j=n(14),h=n(68),b=n(1);var d=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsxs)(h.a,{children:[Object(b.jsx)("a",{href:"http://www.christopher-dent.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png",height:"40px",id:"cjdlogo"})}),Object(b.jsxs)("a",{href:"https://christopherdent.github.io/marvel-dent/",target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png",id:"mlogo",alt:"logo",height:"100px"}),Object(b.jsx)("br",{}),Object(b.jsxs)("center",{children:[" ",Object(b.jsx)("span",{id:"collector_link",children:"comic collector!"})," "]})]}),Object(b.jsx)("a",{href:"http://www.christopher-dent.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png",height:"40px",id:"cjdlogo2"})})," "]})]})},m=n(69);var u=function(e){var t=function(e,t){for(var n="",r=0,c=0;r<e.length;r++)c>=t&&" "===e[r]?(c=0,n+="\n"):(c++,n+=e[r]);return n=n.split("\n").map((function(e,t){return Object(b.jsxs)("span",{children:[e,Object(b.jsx)("br",{})]},t)}))}(e.title,20),n="https://www.google.com/search?tbm=shop&q="+encodeURIComponent(e.title);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m.a,{id:"air-tiles",children:[Object(b.jsx)("img",{src:e.image}),Object(b.jsxs)("div",{id:"info-box",children:[Object(b.jsxs)("span",{children:[" ",t," "]}),Object(b.jsxs)("ul",{id:"hover-box",children:[Object(b.jsx)("li",{children:e.creators}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.moreinfo,target:"_blank",rel:"noopener noreferrer",children:"\u2022 More Info"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:"\u2022 Check Prices / Buy"})})]})]})]})})};var p=n(65),f=n(66),O=n(67),g=n(12);var x=function(e){var t=Object(r.useState)(""),n=Object(g.a)(t,2);return n[0],n[1],Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"searchArea",children:[Object(b.jsx)("input",{type:"text",id:"header-search",placeholder:"Enter title",name:"s",onChange:e.onChange}),Object(b.jsx)("br",{}),Object(b.jsxs)("button",{name:"s",type:"submit",className:"btn btn-danger",onClick:e.onClick,onKeyDown:e.onClick,children:[" Search Marvel for  ",e.term?e.term:"  ......."]}),Object(b.jsx)("br",{})]})})},v=n(17),k=n(26),C=n.n(k),w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).configObj={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.onChange=function(t){e.setState({filter:t.target.value})},e.onClick=function(t){t.preventDefault(),e.fetchComics("&titleStartsWith=".concat(e.state.filter))},e.fetchComics=function(t){var n="https://gateway.marvel.com/v1/public/comics?ts=1&apikey=".concat("8ba20045db37b24d33e34f26c4be8257","&hash=").concat("4c2e71d472bde5cbb7bc4a17eac68621","&limit=100")+t;Object(v.trackPromise)(fetch(n,e.configObj).then((function(e){return e.json()})).then((function(t){var n=t.data;console.log(n.results),e.setState({comics:n.results})})))},e.state={comics:[],filter:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchComics()}},{key:"render",value:function(){var e=this.state.comics.map((function(e){return Object(b.jsx)(p.a,{sm:6,md:4,lg:4,children:Object(b.jsx)(u,{title:e.title,image:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"!==e.thumbnail.path?e.thumbnail.path+"."+e.thumbnail.extension:"https://i5.walmartimages.com/asr/7c39143f-6d73-4f81-8c4e-9418804f47f2_1.0a075aa7294b8a62fe99895a82618550.jpeg",creators:e.creators.items[0]?e.creators.items[0].name+" et al.":null,moreinfo:e.urls[0].url},e.id)})}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(f.a,{children:[Object(b.jsx)(x,{onChange:this.onChange,onClick:this.onClick,term:this.state.filter}),Object(b.jsx)(O.a,{id:"listComics",children:e})]})})}}]),n}(c.a.Component),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(w,{})]})}}]),n}(c.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))},F=(n(61),function(e){return Object(v.usePromiseTracker)().promiseInProgress&&Object(b.jsx)(C.a,{type:"Puff",color:"#00BFFF",height:300,width:300,timeout:5e3,id:"loader"})});o.a.render(Object(b.jsxs)(c.a.StrictMode,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(F,{})]}),document.getElementById("root")),_()}},[[62,1,2]]]);
//# sourceMappingURL=main.76e71994.chunk.js.map
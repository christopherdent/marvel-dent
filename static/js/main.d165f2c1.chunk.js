(this["webpackJsonpmarvel-dent"]=this["webpackJsonpmarvel-dent"]||[]).push([[0],{38:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),i=r(9),a=r.n(i),o=(r(38),r(10)),s=r(11),l=r(15),j=r(14),h=r(69),b=r(1);var d=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("br",{}),Object(b.jsxs)(h.a,{children:[Object(b.jsx)("a",{href:"http://www.christopher-dent.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png",height:"40px",id:"cjdlogo"})}),Object(b.jsxs)("a",{href:"https://christopherdent.github.io/marvel-dent/",target:"_blank",rel:"noopener noreferrer",children:[Object(b.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png",id:"mlogo",alt:"logo",height:"100px"}),Object(b.jsx)("br",{}),Object(b.jsxs)("center",{children:[" ",Object(b.jsx)("span",{id:"collector_link",children:"comic collector!"})," "]})]}),Object(b.jsx)("a",{href:"http://www.christopher-dent.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"https://cjdportfolio.s3.amazonaws.com/android-chrome-512x512.png",height:"40px",id:"cjdlogo2"})})," "]})]})},m=r(71);var u=function(e){var t=function(e,t){for(var r="",n=0,c=0;n<e.length;n++)c>=t&&" "===e[n]?(c=0,r+="\n"):(c++,r+=e[n]);return r=r.split("\n").map((function(e,t){return Object(b.jsxs)("span",{children:[e,Object(b.jsx)("br",{})]},t)}))}(e.title,20);return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(m.a,{id:"air-tiles",children:[Object(b.jsx)("img",{src:e.image}),Object(b.jsxs)("div",{id:"info-box",children:[Object(b.jsxs)("span",{children:[" ",t," "]}),Object(b.jsxs)("ul",{id:"hover-box",children:[Object(b.jsx)("li",{children:e.creators}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.moreinfo,target:"_blank",rel:"noopener noreferrer",children:"More Info"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:" http://www.google.com/search?tbm=shop&q=".concat(e.title," "),target:"_blank",rel:"noopener noreferrer",children:"Check Prices / Buy"})})]})]})]})})};var f=r(33),p=r(67),g=r(68);r(7),r(70);var O=r(12);var x=function(e){var t=Object(n.useState)(""),r=Object(O.a)(t,2);return r[0],r[1],Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:"searchArea",children:[Object(b.jsx)("input",{type:"text",id:"header-search",placeholder:"Enter title",name:"s",onChange:e.onChange}),Object(b.jsx)("br",{}),Object(b.jsxs)("button",{type:"submit",className:"btn btn-danger",onClick:e.onClick,onKeyDown:e.onClick,children:[" Search Marvel for  ",e.term?e.term:"  ......."]}),Object(b.jsx)("br",{})]})})},v=r(22),k=r(26),C=r.n(k),w=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.call(this)).onChange=function(t){e.setState({filter:t.target.value})},e.onClick=function(t){t.preventDefault(),e.fetchComics("&titleStartsWith=".concat(e.state.filter))},e.configObj={headers:{"Content-Type":"application/json",Accept:"application/json"}},e.fetchComics=function(t){var r="https://gateway.marvel.com/v1/public/comics?ts=1&apikey=".concat("8ba20045db37b24d33e34f26c4be8257","&hash=").concat("4c2e71d472bde5cbb7bc4a17eac68621","&limit=100")+t;Object(v.trackPromise)(fetch(r,e.configObj).then((function(e){return e.json()})).then((function(t){var r=t.data;console.log(r.results),e.setState({comics:r.results})})))},e.handleCheckbox=function(t){"All"===t.target.value?e.setState({filter:"none"}):e.setState({filter:t.target.value})},e.state={comics:[],filter:null},e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.fetchComics()}},{key:"render",value:function(){var e=this.state.comics.map((function(e){return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"!==e.thumbnail.path?Object(b.jsx)(f.a,{sm:6,md:4,lg:4,children:Object(b.jsx)(u,{title:e.title,image:e.thumbnail.path+"."+e.thumbnail.extension,creators:e.creators.items[0]?e.creators.items[0].name+" et al.":null,moreinfo:e.urls[0].url},e.id)}):Object(b.jsx)(f.a,{sm:6,md:4,lg:4,children:Object(b.jsx)(u,{title:e.title,image:"https://i5.walmartimages.com/asr/7c39143f-6d73-4f81-8c4e-9418804f47f2_1.0a075aa7294b8a62fe99895a82618550.jpeg",creators:e.creators.items[0]?e.creators.items[0].name+" et al.":null,moreinfo:e.urls[0].url},e.id)})}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(p.a,{children:[Object(b.jsx)(x,{onChange:this.onChange,onClick:this.onClick,term:this.state.filter}),Object(b.jsx)(g.a,{children:e})]})})}}]),r}(c.a.Component),y=function(e){Object(l.a)(r,e);var t=Object(j.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(w,{})]})}}]),r}(c.a.Component),_=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,72)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),i(e),a(e)}))},F=(r(63),function(e){return Object(v.usePromiseTracker)().promiseInProgress&&Object(b.jsx)(C.a,{type:"Puff",color:"#00BFFF",height:300,width:300,timeout:5e3,id:"loader"})});a.a.render(Object(b.jsxs)(c.a.StrictMode,{children:[Object(b.jsx)(y,{}),Object(b.jsx)(F,{})]}),document.getElementById("root")),_()}},[[64,1,2]]]);
//# sourceMappingURL=main.d165f2c1.chunk.js.map
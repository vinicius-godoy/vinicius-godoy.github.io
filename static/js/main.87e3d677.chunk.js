(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(9),i=c(3),s=c(1),a=c(0),l=Object(s.createContext)(),r=function(e){var t=e.children,c=Object(s.useState)("light"),n=Object(i.a)(c,2),r=n[0],o=n[1];Object(s.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://vinicius-godoy.github.io",j="<vinicius-godoy>",b="Vin\xedcius Godoy",u="Full Stack Developer",h="Brazilian Full Stack Developer working with React and NodeJS to bring websites to life.",d="https://www.linkedin.com/ambry/?x-li-ambry-ep=AQFInNFe5gKnVAAAAXuZiTY7VBQPKQo1KKaOhEh72LR_eGKKTSXBbmJhFYHnGtfhEFzm752YSJK_XiTeN4CHAiqqzPLeTUpUP7ovkoYXsGWZBgbwqvGneBcQOZlbjhSBvWSOjfp02nTj0wulCCQyvOGeb22ZWWh-HXd727azcLfcF2NHWD71dsbZuPTFMK1n5T_yrgPPC7AEHH1zHhNrLHZ5_pnhormM58iIZLlewXhY3Wow7YgSJhicLH22WCNHf_lCSuONjAmUypuYv6E-Gw__fjp5DxYy5nnJ8IccUBydS_j5-0GlvDdvf5jWOkjaHm1Ca97qwV0Az0pXm4p2WeujRC4_c_Pz6RG72dE72U2DWBSK3nONIIJB_B8lBsgVaxarOFba6yMsKXprb8Sq5xf5cGd_lhdhxba7UUvRtVW3MeKxBeKLTJsP5TvEKD9OfYgspQuQ_MflRwsDrgs6mrZcDKGwBu5Zf4yyHHbxUfJZes9sBA3ic-9WVOmffiFBGVXgJgMZ7QNmEQuNzl0lLw",m={linkedin:"https://www.linkedin.com/in/-vinicius-godoy/",github:"https://github.com/vinicius-godoy"},O=[{name:"Netflix Clone",description:"Recreation of the Netflix interface using HTML, CSS and JavaScript",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/vinicius-godoy/Interface-Netflix"},{name:"Snake Game",description:"Snake Game created with CSS and JavaScript to practice JSs Documento Object Model",stack:["HTML","CSS","JavaScript"],sourceCode:"https://github.com/vinicius-godoy/Jogo-Cobrinha"},{name:"Alurakut",description:"Project done during the React Imersion made by Alura, has the purpose of being a copy of the old Orkut using React and NextJS to practice its contents.",stack:["React","NextJS","CSS"],sourceCode:"https://github.com/vinicius-godoy/alurakut",livePreview:"https://alurakut-vinicius-godoy.vercel.app/login"}],x=["Git","HTML","CSS","JavaScript","React","NextJS","Node","SQL"],f="v.godoyrodrigues@gmail.com",p=c(14),v=c.n(p),g=c(12),k=c.n(g),N=c(16),_=c.n(N),S=c(15),C=c.n(S),w=(c(26),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],c=t.themeName,n=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],u=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:u,className:"link link--nav",children:"Projects"})}):null,x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:u,className:"link link--nav",children:"Skills"})}):null,f?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:u,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:n,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===c?Object(a.jsx)(k.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:u,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(C.a,{}):Object(a.jsx)(_.a,{})})]})}),y=(c(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(w,{})]})}),J=c(10),H=c.n(J),B=c(17),G=c.n(B),L=(c(33),function(){var e=b,t=u,c=h,n=d,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[n&&Object(a.jsx)("a",{href:n,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(H.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(G.a,{})})]})]})]})}),P=c(7),T=c.n(P),K=c(18),A=c.n(K),E=(c(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(H.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})}),R=(c(36),function(){return O.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(a.jsx)(E,{project:e},T()())}))})]}):null}),W=(c(37),function(){return x.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),F=c(19),I=c.n(F),M=(c(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),c?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(I.a,{fontSize:"large"})})}):null}),Z=(c(39),function(){return f?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(f),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(c(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),Q=(c(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(L,{}),Object(a.jsx)(R,{}),Object(a.jsx)(W,{}),Object(a.jsx)(Z,{})]}),Object(a.jsx)(M,{}),Object(a.jsx)(D,{})]})});c(42);Object(n.render)(Object(a.jsx)(r,{children:Object(a.jsx)(Q,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.87e3d677.chunk.js.map
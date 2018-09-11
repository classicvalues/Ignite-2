(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{61:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=l(o(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0)),r=l(o(2)),s=l(o(80));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,o,i){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===r)t.children=i;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const h=e=>{let{to:t}=e,o=m(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=i.default.join("/Ignite/","home.html")+t),n.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(i.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(n),!1}})))};h.defaultProps={href:"",onClick:()=>{}};const p={"images/markdown.png":()=>o.e(21).then(o.t.bind(null,320,7)),"images/config.png":()=>o.e(22).then(o.t.bind(null,321,7)),"images/component.png":()=>o.e(23).then(o.t.bind(null,322,7)),"images/deploy.png":()=>o.e(24).then(o.t.bind(null,323,7)),"images/blog.png":()=>o.e(25).then(o.t.bind(null,324,7))};class v extends n.default.Component{constructor(...e){super(...e),c(this,"state",{image:null,ImageProvider:p[this.props.src]})}componentDidMount(){this.state.image||this.state.ImageProvider().then(e=>{this.setState({image:e.default})})}render(){let{image:e}=this.state;return e&&"object"===typeof e?n.default.createElement(s.default,u({},this.props,{className:(0,r.default)("image",this.props.className),src:e.src.src,width:e.src.width||e.width,height:e.src.height||e.height,placeholder:{lqip:e.preSrc},srcSet:e.src.images?e.src.images.map(e=>(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),a.forEach(function(t){c(e,t,o[t])})}return e})({},e,{src:e.path})):[{src:e.src,width:e.width}]})):d("img",{className:(0,r.default)("image",this.props.className),src:e})}}const f=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),c(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},c(t,"defaultProps",{shouldLoad:!0}),o};f(()=>o.e(26).then(o.bind(null,59))),f(()=>o.e(26).then(o.bind(null,81)));var g=d("h1",{className:"title"},void 0,"Ignite"),b=d("p",{className:"has-text-centered"},void 0,"Ignite makes documenting your open source project as easy as adding files to a folder. The barrier to writing documentation should be low, encouraging us to write more of it!"),y=d("p",{},void 0,"They're just React Components. Use NPM packages or write your own."),w=d("p",{},void 0,"Great for things that aren't quite documentation but need explanation."),N=d("p",{},void 0,"All images are minified and transformed into various formats for a progressive image loading experience."),P=d("p",{},void 0,"Every page, plugin, and image is lazy loaded, making the initial bundle download as small as possible."),O=d("p",{},void 0,"Build your website as a Single Page App or a collection of HTML Files. You Choose"),k=d("section",{className:"hero is-info is-small has-text-centered"},void 0,d("div",{className:"hero-body"},void 0,d("p",{className:"title"},void 0,"Using Ignite"))),j=d("section",{className:"hero is-small"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"title columns"},void 0,d("div",{className:"undefined column feature"},void 0,d("h1",{},void 0,"Write Markdown")),d("div",{className:"undefined column"},void 0,d("p",{},void 0,d(v,{src:"images/markdown.png",alt:"Markdown"})))))),x=d("div",{className:"undefined column featureImages"},void 0,d("p",{},void 0,d(v,{src:"images/config.png",alt:"Markdown"}),d(v,{src:"images/component.png",alt:"Markdown"}))),C=d("h1",{},void 0,"Add Plugins"),S=d("p",{},void 0,"Ignite uses React, so we thought the simplest plugin system would just be plain old React components."),I=d("h1",{},void 0,"Deploy"),L=d("strong",{},void 0,"built in"),M=d("div",{className:"undefined column"},void 0,d("p",{},void 0,d(v,{src:"images/deploy.png",alt:"Markdown"}))),E=d("section",{className:"hero is-info is-small has-text-centered"},void 0,d("div",{className:"hero-body"},void 0,d("p",{className:"title"},void 0,"Blog"))),_=d("div",{className:"hero"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"columns"},void 0,d("div",{className:"home column content is-two-thirds-tablet is-three-quarters-desktop"},void 0,d("p",{},void 0,"Blogging shouldn't be hard either! Why host posts about your product anywhere but with your documentation? All information about your project should be accessible from one easy to search location. Ignite makes this simple."),d("p",{},void 0,d("br",{})))))),D=d("section",{className:"hero is-small is-light no-margin"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"title columns"},void 0,d("div",{className:"undefined column feature"},void 0,d("h1",{},void 0,"Just Add Posts to ",d("code",{},void 0,"blog/")),d("p",{},void 0,"Ignite will generate a blog for you and add an item to the header")),d("div",{className:"undefined column fadeBottom"},void 0,d("p",{},void 0,d(v,{src:"images/blog.png",alt:"Markdown"})))))),z=d("h1",{className:"no-link title is-4 has-text-centered"},void 0,"Even this pages is markdown. What are you waiting for?");var q=e=>d("div",{},void 0,d("div",{className:"homePage"},void 0,d("section",{className:"hero is-primary is-bold is-medium has-text-centered"},void 0,d("div",{className:"hero-body"},void 0,g,d("h2",{id:"zero-hassle-documentation",className:"subtitle"},void 0,"Zero Hassle Documentation ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#zero-hassle-documentation","aria-hidden":"true"})))),d("div",{className:"hero"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"columns"},void 0,d("div",{className:"home column content is-two-thirds-tablet is-three-quarters-desktop"},void 0,d("h2",{className:"no-link has-text-primary has-text-centered",id:"finally%2C-a-markdown-documentation-generation-tool-built-around-plugins."},void 0,"Finally, a markdown documentation generation tool built around plugins. ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#finally%2C-a-markdown-documentation-generation-tool-built-around-plugins.","aria-hidden":"true"})),b,d("div",{className:"columns has-text-centered wide"},void 0,d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"plugins"},void 0,"Plugins ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#plugins","aria-hidden":"true"})),y)),d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"themeable"},void 0,"Themeable ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#themeable","aria-hidden":"true"})),d("p",{},void 0,"Built on ",d(h,{currentPage:e.currentPage,target:"_blank",to:"https://bulma.io/documentation/overview/customize/",className:"external-link"},void 0,"Bulma")))),d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"blog"},void 0,"Blog ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#blog","aria-hidden":"true"})),w))),d("div",{className:"columns has-text-centered wide"},void 0,d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"optimized-images"},void 0,"Optimized Images ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#optimized-images","aria-hidden":"true"})),N)),d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"lazy-loading"},void 0,"Lazy Loading ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#lazy-loading","aria-hidden":"true"})),P)),d("div",{className:"column "},void 0,d("div",{className:"box"},void 0,d("h3",{id:"static-builds"},void 0,"Static Builds ",d(h,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#static-builds","aria-hidden":"true"})),O))))))),k,j,d("section",{className:"hero is-light is-small"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"title columns"},void 0,x,d("div",{className:"undefined column feature"},void 0,C,S,d("p",{},void 0,"This means any react component can be exposed as a plugin for Ignite. The possibilities for expressive documentation are endless! Read more ",d(h,{currentPage:e.currentPage,to:"/Ignite/pages/IgnitePlugins.html"},void 0,"here")))))),d("section",{className:"hero is-small"},void 0,d("div",{className:"hero-body"},void 0,d("div",{className:"title columns"},void 0,d("div",{className:"undefined column feature"},void 0,I,d("p",{},void 0,"Ignite has Github-Pages publishing ",L," and setup is ",d(h,{currentPage:e.currentPage,to:"/Ignite/pages/Publishing.html"},void 0,"easy"))),M))),E,_,D,d("section",{className:"hero is-link is-small has-text-centered"},void 0,d("div",{className:"hero-body"},void 0,z,d("button",{className:"button  is-large is-link is-bold is-inverted is-outlined"},void 0,d("p",{},void 0,d(h,{currentPage:e.currentPage,to:"/Ignite/pages/GettingStarted.html"},void 0,"Get Started \ud83c\udf89")))))));t.default=q,e.exports=t.default},76:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=r(o(3)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0));r(o(2)),r(o(80));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,i){a||(a="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===r)t.children=i;else if(r>1){for(var l=new Array(r),d=0;d<r;d++)l[d]=arguments[d+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,a,i=function(e,t){if(null==e)return{};var o,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}const u=e=>{let{to:t}=e,o=c(e,["to"]);return t.includes("http")?n.default.createElement("a",d({},e,{href:t})):("#"===t[0]&&(t=i.default.join("/Ignite/","pages/home.html")+t),n.default.createElement("a",d({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(i.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(n),!1}})))};u.defaultProps={href:"",onClick:()=>{}};const m=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};m(()=>o.e(26).then(o.bind(null,59))),m(()=>o.e(26).then(o.bind(null,81)));var h=s("h1",{},void 0,"Home Page"),p=s("code",{},void 0,"home.md"),v=s("article",{className:"message column is-warning is-three-fifths is-offset-one-fifth"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"\u26a0\ufe0f All hero sections in the home page are given full width to make the look pretty.")));var f=e=>s("div",{className:e.className},void 0,s("section",{},void 0,h,s("p",{},void 0,"If you want to have a home page (or a cover page) for your documentation website, all you have to do is add a ",p," to your source folder. This page is good for summing up the features of whatever you are documenting. Head over ",s(u,{currentPage:e.currentPage,to:"/Ignite/home.html"},void 0,"here")," to see our home page."),v));t.default=f,e.exports=t.default}}]);
//# sourceMappingURL=home.js.map
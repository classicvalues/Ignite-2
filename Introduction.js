(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{68:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=i(n(3)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));i(n(2)),i(n(82));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,o){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var u=new Array(i),s=0;s<i;s++)u[s]=arguments[s+3];t.children=u}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const c=e=>{let{to:t}=e,n=d(e,["to"]);return t.includes("http")?a.default.createElement("a",s({},e,{href:t})):("#"===t[0]&&(t=o.default.join("/Ignite/","pages/Introduction.html")+t),a.default.createElement("a",s({},n,{href:t,onClick:n=>{if(n.preventDefault(),"#"===e.to)return!1;const r=new URL(o.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const a=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(a),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const f=e=>{var t,n;return n=t=class extends a.default.Component{constructor(...e){super(...e),u(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?a.default.createElement(e,this.props,null):null}},u(t,"defaultProps",{shouldLoad:!0}),n};f(()=>n.e(21).then(n.bind(null,60))),f(()=>n.e(21).then(n.bind(null,81)));var p=l("h1",{},void 0,"\ud83d\udd25 Ignite \ud83d\udd25"),h=l("p",{},void 0,"Modern markdown documentation generator."),v=l("p",{},void 0,"Ignite makes it super easy to get a documentation website running."),y=l("ul",{},void 0,l("li",{},void 0,"Easy Setup - define an index file and get to documenting!"),l("li",{},void 0,"Themeable - Easily change the overall look of your app or just change 1 value"),l("li",{},void 0,"Plugins - Extend any part of documentation generation or use any ",l("code",{},void 0,"markdown-it")," plugin."),l("li",{},void 0,"Easy Publishing"));var m=e=>l("div",{className:e.className},void 0,l("section",{},void 0,p,h,v,l("h2",{id:"features"},void 0,"Features ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#features","aria-hidden":"true"})),y));t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=Introduction.js.map
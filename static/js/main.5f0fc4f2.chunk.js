(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));var i=function(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]}),": ",e.alert.msg]})};function d(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode1," bg-").concat(e.mode1),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"/about",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode1?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode1?"white":"rgb(2 26 60)"},children:[Object(o.jsx)("h2",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",onChange:function(e){console.log("On change"),console.log(e.target.value),s(e.target.value)},style:{backgroundColor:"dark"===e.mode1?"grey":"white",color:"dark"===e.mode1?"white":"rgb(2 26 60)"},value:n,id:"myBox",rows:"9"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Uppercase was clicked"+n);var t=n.toUpperCase();s(t),e.showAlert("Converted to UpperCase!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("Lowercase was clicked"+n);var t=n.toLowerCase();s(t),e.showAlert("Converted to LowerCase!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(t){console.log("On change");s(" "),e.showAlert("Text Cleared!","success")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"cantainer my-3",style:{color:"dark"===e.mode1?"white":"rgb(2 26 60)"},children:[Object(o.jsx)("h2",{children:"Your Text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," minutes read time"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter a something in textbox above to preview it"})]})]})}d.defaultProps={title:"hello",aboutText:"About"};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),r=Object(l.a)(s,2),h=r[0],j=r[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),3e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{title:"Textutil",mode1:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.background="rgb(2 26 60)",u("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.background="white",u("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(i,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter the text to analyze",showAlert:u,mode1:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.5f0fc4f2.chunk.js.map
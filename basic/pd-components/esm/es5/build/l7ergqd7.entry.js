import{h}from"../pdstenciltutorial.core.js";var Spinner=function(){function e(){}return e.prototype.render=function(){return[h("div",null)]},Object.defineProperty(e,"is",{get:function(){return"pd-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div{display:inline-block;width:64px;height:64px}div:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border-color:#fff transparent;border-style:solid;border-width:5px;-webkit-animation:lds-dual-ring 1.2s linear infinite;animation:lds-dual-ring 1.2s linear infinite}\@-webkit-keyframes lds-dual-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\@keyframes lds-dual-ring{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"},enumerable:!0,configurable:!0}),e}();export{Spinner as PdSpinner};
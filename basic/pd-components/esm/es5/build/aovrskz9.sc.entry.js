import{h}from"../pdstenciltutorial.core.js";import{a as AV_API_KEY}from"./chunk-8133c1d5.js";var StockPrice=function(){function t(){this.validInput=!1,this.loading=!1,this.apiUrl="https://www.alphavantage.co/query?function=GLOBAL_QUOTE"}return t.prototype.stockSymbolChanged=function(t,e){t&&t!==e&&(this.fetchStockPrice(t),this.stockInput=t,this.validInput=!0)},t.prototype.onStockInput=function(t){this.stockInput=t.target.value.trim(),this.validInput=Boolean(this.stockInput)},t.prototype.onFetchStockPrice=function(t){t.preventDefault(),this.stockSymbol=this.stockInput},t.prototype.componentWillLoad=function(){this.stockSymbol&&(this.stockInput=this.stockSymbol,this.validInput=!0)},t.prototype.componentDidLoad=function(){this.stockSymbol&&this.fetchStockPrice(this.stockSymbol)},t.prototype.onStockSymbolSelected=function(t){console.log("selected"),t.detail&&t.detail!==this.stockSymbol&&(this.stockSymbol=t.detail)},t.prototype.fetchStockPrice=function(t){var e=this;this.loading=!0,fetch(this.apiUrl+"&symbol="+t+"&apikey="+AV_API_KEY).then(function(t){if(200!==t.status)throw new Error("Invalid!");return t.json()}).then(function(t){if(!t["Global Quote"]["05. price"])throw new Error("Invalid symbol!");e.error=null,e.fetchedPrice=+t["Global Quote"]["05. price"],e.loading=!1}).catch(function(t){e.error=t.message,e.fetchedPrice=null,e.loading=!1})},t.prototype.hostData=function(){return{class:this.error&&"error"}},t.prototype.render=function(){var t=h("p",null," ");return this.loading?t=h("pd-spinner",null):this.error?t=h("p",null,this.error):this.fetchedPrice&&(t=h("p",null,"Price: $",this.fetchedPrice)),[h("form",{onSubmit:this.onFetchStockPrice.bind(this)},h("input",{name:"stock-symbol",value:this.stockInput,onInput:this.onStockInput.bind(this)}),h("button",{type:"submit",disabled:!this.validInput||this.loading},"Fetch price")),t]},Object.defineProperty(t,"is",{get:function(){return"pd-stock-price"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{error:{state:!0},fetchedPrice:{state:!0},loading:{state:!0},stockInput:{state:!0},stockSymbol:{type:String,attr:"stock-symbol",reflectToAttr:!0,mutable:!0,watchCallbacks:["stockSymbolChanged"]},validInput:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:pdStockSelected",method:"onStockSymbolSelected"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-pd-stock-price-h{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:1rem;padding:.5rem;background-color:#2e8b57}.error.sc-pd-stock-price-h{background-color:#c71585}"},enumerable:!0,configurable:!0}),t}();export{StockPrice as PdStockPrice};
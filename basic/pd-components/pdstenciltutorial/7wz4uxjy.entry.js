const t=window.pdStencilTutorial.h;import{a as e}from"./chunk-8133c1d5.js";class s{constructor(){this.apiUrl="https://www.alphavantage.co/query?function=SYMBOL_SEARCH",this.results=[],this.loading=!1}onSearchSubmit(t){t.preventDefault(),this.loading=!0,fetch(`${this.apiUrl}&keywords=${this.searchInput.value}&apikey=${e}`).then(t=>t.json()).then(t=>{this.results=t.bestMatches.map(t=>({symbol:t["1. symbol"],name:t["2. name"]})),this.loading=!1}).catch(t=>{console.log(t),this.loading=!1})}onSelectSymbol(t){this.pdStockSelected.emit(t)}render(){let e=this.results.map(e=>t("p",{onClick:this.onSelectSymbol.bind(this,e.symbol)},e.symbol,": ",e.name));return this.loading&&(e=[t("pd-spinner",null)]),[t("form",{onSubmit:this.onSearchSubmit.bind(this)},t("input",{name:"stock-symbol",ref:t=>this.searchInput=t}),t("button",{type:"submit"},"Search")),e]}static get is(){return"pd-stock-finder"}static get encapsulation(){return"shadow"}static get properties(){return{loading:{state:!0},results:{state:!0}}}static get events(){return[{name:"pdStockSelected",method:"pdStockSelected",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{display:inline-block;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-top:1rem;padding:.5rem;background-color:#6a5acd}"}}export{s as PdStockFinder};
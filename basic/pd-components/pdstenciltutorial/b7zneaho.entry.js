const t=window.pdStencilTutorial.h;class e{showHideElement(){const t=document.getElementById(this.for);t.hidden=!t.hidden}render(){return t("button",{onClick:this.showHideElement.bind(this)},t("slot",null))}static get is(){return"rcn-show-hide"}static get encapsulation(){return"shadow"}static get properties(){return{for:{type:String,attr:"for"}}}static get style(){return":host(.close){position:absolute;top:0;right:0}:host(.close) button{border:none;background:none;font-size:2rem;padding:.5rem 1rem}:host(.backdrop){position:fixed;top:0;left:0;right:0;height:100vh;width:100%;z-index:0;background:#000;opacity:.5}:host(.backdrop) button{height:100%;width:100%;opacity:0}"}}class r{render(){return[t("rcn-show-hide",{for:this.id},"Menu"),t("rcn-show-hide",{class:"backdrop",for:this.id}),t("aside",null,t("rcn-show-hide",{class:"close",for:this.id},"×"),t("slot",null))]}static get is(){return"rcn-side-drawer"}static get encapsulation(){return"shadow"}static get properties(){return{id:{type:String,attr:"id"}}}static get style(){return"aside{-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;top:0;left:0;width:30rem;max-width:80%;height:100vh;background:#555;-webkit-box-shadow:0 0 1em rgba(0,0,0,.7);box-shadow:0 0 1em rgba(0,0,0,.7);padding:1em;z-index:10;-webkit-transition:all .4s;transition:all .4s}:host([hidden]),aside{display:block}:host([hidden]) aside{left:-31rem;pointer-events:none}.backdrop{-webkit-transition:all .4s ease-in;transition:all .4s ease-in}:host([hidden]) .backdrop{opacity:0;pointer-events:none}"}}export{e as RcnShowHide,r as RcnSideDrawer};
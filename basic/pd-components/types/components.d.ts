/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface RcnShowHide {
    'for': string;
  }
  interface RcnShowHideAttributes extends StencilHTMLAttributes {
    'for'?: string;
  }

  interface RcnSideDrawer {
    'id': string;
  }
  interface RcnSideDrawerAttributes extends StencilHTMLAttributes {
    'id'?: string;
  }

  interface PdSpinner {}
  interface PdSpinnerAttributes extends StencilHTMLAttributes {}

  interface PdStockFinder {}
  interface PdStockFinderAttributes extends StencilHTMLAttributes {
    'onPdStockSelected'?: (event: CustomEvent<string>) => void;
  }

  interface PdStockPrice {
    'stockSymbol': string;
  }
  interface PdStockPriceAttributes extends StencilHTMLAttributes {
    'stockSymbol'?: string;
  }

  interface RcnTooltip {
    'tip': string;
  }
  interface RcnTooltipAttributes extends StencilHTMLAttributes {
    'tip'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'RcnShowHide': Components.RcnShowHide;
    'RcnSideDrawer': Components.RcnSideDrawer;
    'PdSpinner': Components.PdSpinner;
    'PdStockFinder': Components.PdStockFinder;
    'PdStockPrice': Components.PdStockPrice;
    'RcnTooltip': Components.RcnTooltip;
  }

  interface StencilIntrinsicElements {
    'rcn-show-hide': Components.RcnShowHideAttributes;
    'rcn-side-drawer': Components.RcnSideDrawerAttributes;
    'pd-spinner': Components.PdSpinnerAttributes;
    'pd-stock-finder': Components.PdStockFinderAttributes;
    'pd-stock-price': Components.PdStockPriceAttributes;
    'rcn-tooltip': Components.RcnTooltipAttributes;
  }


  interface HTMLRcnShowHideElement extends Components.RcnShowHide, HTMLStencilElement {}
  var HTMLRcnShowHideElement: {
    prototype: HTMLRcnShowHideElement;
    new (): HTMLRcnShowHideElement;
  };

  interface HTMLRcnSideDrawerElement extends Components.RcnSideDrawer, HTMLStencilElement {}
  var HTMLRcnSideDrawerElement: {
    prototype: HTMLRcnSideDrawerElement;
    new (): HTMLRcnSideDrawerElement;
  };

  interface HTMLPdSpinnerElement extends Components.PdSpinner, HTMLStencilElement {}
  var HTMLPdSpinnerElement: {
    prototype: HTMLPdSpinnerElement;
    new (): HTMLPdSpinnerElement;
  };

  interface HTMLPdStockFinderElement extends Components.PdStockFinder, HTMLStencilElement {}
  var HTMLPdStockFinderElement: {
    prototype: HTMLPdStockFinderElement;
    new (): HTMLPdStockFinderElement;
  };

  interface HTMLPdStockPriceElement extends Components.PdStockPrice, HTMLStencilElement {}
  var HTMLPdStockPriceElement: {
    prototype: HTMLPdStockPriceElement;
    new (): HTMLPdStockPriceElement;
  };

  interface HTMLRcnTooltipElement extends Components.RcnTooltip, HTMLStencilElement {}
  var HTMLRcnTooltipElement: {
    prototype: HTMLRcnTooltipElement;
    new (): HTMLRcnTooltipElement;
  };

  interface HTMLElementTagNameMap {
    'rcn-show-hide': HTMLRcnShowHideElement
    'rcn-side-drawer': HTMLRcnSideDrawerElement
    'pd-spinner': HTMLPdSpinnerElement
    'pd-stock-finder': HTMLPdStockFinderElement
    'pd-stock-price': HTMLPdStockPriceElement
    'rcn-tooltip': HTMLRcnTooltipElement
  }

  interface ElementTagNameMap {
    'rcn-show-hide': HTMLRcnShowHideElement;
    'rcn-side-drawer': HTMLRcnSideDrawerElement;
    'pd-spinner': HTMLPdSpinnerElement;
    'pd-stock-finder': HTMLPdStockFinderElement;
    'pd-stock-price': HTMLPdStockPriceElement;
    'rcn-tooltip': HTMLRcnTooltipElement;
  }


}

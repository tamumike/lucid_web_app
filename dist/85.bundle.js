(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'C:/Users/mlinden.LUCIDENERGY/Desktop/Web Apps/Node Dev/esri-webpack-template/node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D':"./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[85],{

/***/ "./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/extendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/Handles */ \"./node_modules/arcgis-js-api/core/Handles.js\"),__webpack_require__(/*! ../../../core/Logger */ \"./node_modules/arcgis-js-api/core/Logger.js\"),__webpack_require__(/*! ../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../layers/support/ExportImageParameters */ \"./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js\"),__webpack_require__(/*! ../engine/BitmapSource */ \"./node_modules/arcgis-js-api/views/2d/engine/BitmapSource.js\"),__webpack_require__(/*! ../engine/Canvas2DContainer */ \"./node_modules/arcgis-js-api/views/2d/engine/Canvas2DContainer.js\"),__webpack_require__(/*! ./LayerView2D */ \"./node_modules/arcgis-js-api/views/2d/layers/LayerView2D.js\"),__webpack_require__(/*! ./support/ExportStrategy */ \"./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js\"),__webpack_require__(/*! ../../layers/RefreshableLayerView */ \"./node_modules/arcgis-js-api/views/layers/RefreshableLayerView.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,i,o,n,s,p,u,h,c,l,m,d){var g=n.getLogger(\"esri.views.2d.layers.MapImageLayerView2D\");return function(e){function t(){var t=e.call(this)||this;return t._handles=new o,t.container=new c,t.container.hidpi=!0,t}return a(t,e),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this.strategy.update(e),this.notifyChange(\"updating\")},t.prototype.attach=function(){var e=this,t=this.layer,r=t.imageMaxWidth,a=t.imageMaxHeight,i=t.version,o=i>=10.3,n=i>=10;this.strategy=new m({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:r,imageMaxHeight:a,imageRotationSupported:o,imageNormalizationSupported:n,hidpi:!0}),this._exportImageParameters=new u({layer:this.layer}),this._handles.add(this._exportImageParameters.watch(\"version\",function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())}))},t.prototype.detach=function(){this.container.removeAllChildren(),this.strategy.destroy(),this._handles.removeAll(),this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.getPopupData=function(e){var t=this.view.scale;return this.layer.allSublayers.filter(function(e){var r=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&a}).map(function(t){var r=t.createQuery();return r.geometry=e,r.outFields=t.popupTemplate.requiredFields,t.queryFeatures(r).then(function(e){return e.features})})},t.prototype.fetchImage=function(e,t,a,i){var o=this;return this._exportImageParameters.scale!==this.view.scale&&(this._exportImageParameters.scale=this.view.scale,this._exportImageVersion=this._exportImageParameters.version),i=r({timestamp:this.refreshTimestamp},i),this.layer.fetchImage(e,t,a,i).then(function(e){return o.notifyChange(\"updating\"),new h.default(e)}).catch(function(e){return\"cancel\"!==e.dojoType&&g.error(e),o.notifyChange(\"updating\"),s.reject(e)})},t=i([p.subclass(\"esri.views.2d.layers.MapImageLayerView2D\")],t)}(p.declared(l,d))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8yZC9sYXllcnMvTWFwSW1hZ2VMYXllclZpZXcyRC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmNnaXMtanMtYXBpL3ZpZXdzLzJkL2xheWVycy9NYXBJbWFnZUxheWVyVmlldzJELmpzPzZkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09QWVJJR0hUIMKpIDIwMTggRXNyaVxuLy9cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQgdW5kZXIgdGhlIGNvcHlyaWdodCBsYXdzIG9mIHRoZSBVbml0ZWQgU3RhdGVzXG4vLyBhbmQgYXBwbGljYWJsZSBpbnRlcm5hdGlvbmFsIGxhd3MsIHRyZWF0aWVzLCBhbmQgY29udmVudGlvbnMuXG4vL1xuLy8gVGhpcyBtYXRlcmlhbCBpcyBsaWNlbnNlZCBmb3IgdXNlIHVuZGVyIHRoZSBFc3JpIE1hc3RlciBMaWNlbnNlXG4vLyBBZ3JlZW1lbnQgKE1MQSksIGFuZCBpcyBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhhdCBhZ3JlZW1lbnQuXG4vLyBZb3UgbWF5IHJlZGlzdHJpYnV0ZSBhbmQgdXNlIHRoaXMgY29kZSB3aXRob3V0IG1vZGlmaWNhdGlvbixcbi8vIHByb3ZpZGVkIHlvdSBhZGhlcmUgdG8gdGhlIHRlcm1zIG9mIHRoZSBNTEEgYW5kIGluY2x1ZGUgdGhpc1xuLy8gY29weXJpZ2h0IG5vdGljZS5cbi8vXG4vLyBTZWUgdXNlIHJlc3RyaWN0aW9ucyBhdCBodHRwOi8vd3d3LmVzcmkuY29tL2xlZ2FsL3BkZnMvbWxhX2UyMDRfZTMwMC9lbmdsaXNoXG4vL1xuLy8gRm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGNvbnRhY3Q6XG4vLyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4vLyBBdHRuOiBDb250cmFjdHMgYW5kIExlZ2FsIFNlcnZpY2VzIERlcGFydG1lbnRcbi8vIDM4MCBOZXcgWW9yayBTdHJlZXRcbi8vIFJlZGxhbmRzLCBDYWxpZm9ybmlhLCBVU0EgOTIzNzNcbi8vIFVTQVxuLy9cbi8vIGVtYWlsOiBjb250cmFjdHNAZXNyaS5jb21cbi8vXG4vLyBTZWUgaHR0cDovL2pzLmFyY2dpcy5jb20vNC44L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cblxuZGVmaW5lKFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIi4uLy4uLy4uL2NvcmUvdHNTdXBwb3J0L2Fzc2lnbkhlbHBlclwiLFwiLi4vLi4vLi4vY29yZS90c1N1cHBvcnQvZXh0ZW5kc0hlbHBlclwiLFwiLi4vLi4vLi4vY29yZS90c1N1cHBvcnQvZGVjb3JhdGVIZWxwZXJcIixcIi4uLy4uLy4uL2NvcmUvSGFuZGxlc1wiLFwiLi4vLi4vLi4vY29yZS9Mb2dnZXJcIixcIi4uLy4uLy4uL2NvcmUvcHJvbWlzZVV0aWxzXCIsXCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzXCIsXCIuLi8uLi8uLi9sYXllcnMvc3VwcG9ydC9FeHBvcnRJbWFnZVBhcmFtZXRlcnNcIixcIi4uL2VuZ2luZS9CaXRtYXBTb3VyY2VcIixcIi4uL2VuZ2luZS9DYW52YXMyRENvbnRhaW5lclwiLFwiLi9MYXllclZpZXcyRFwiLFwiLi9zdXBwb3J0L0V4cG9ydFN0cmF0ZWd5XCIsXCIuLi8uLi9sYXllcnMvUmVmcmVzaGFibGVMYXllclZpZXdcIl0sZnVuY3Rpb24oZSx0LHIsYSxpLG8sbixzLHAsdSxoLGMsbCxtLGQpe3ZhciBnPW4uZ2V0TG9nZ2VyKFwiZXNyaS52aWV3cy4yZC5sYXllcnMuTWFwSW1hZ2VMYXllclZpZXcyRFwiKTtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCgpe3ZhciB0PWUuY2FsbCh0aGlzKXx8dGhpcztyZXR1cm4gdC5faGFuZGxlcz1uZXcgbyx0LmNvbnRhaW5lcj1uZXcgYyx0LmNvbnRhaW5lci5oaWRwaT0hMCx0fXJldHVybiBhKHQsZSksdC5wcm90b3R5cGUuaGl0VGVzdD1mdW5jdGlvbihlLHQpe3JldHVybiBudWxsfSx0LnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oZSl7dGhpcy5zdHJhdGVneS51cGRhdGUoZSksdGhpcy5ub3RpZnlDaGFuZ2UoXCJ1cGRhdGluZ1wiKX0sdC5wcm90b3R5cGUuYXR0YWNoPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PXRoaXMubGF5ZXIscj10LmltYWdlTWF4V2lkdGgsYT10LmltYWdlTWF4SGVpZ2h0LGk9dC52ZXJzaW9uLG89aT49MTAuMyxuPWk+PTEwO3RoaXMuc3RyYXRlZ3k9bmV3IG0oe2NvbnRhaW5lcjp0aGlzLmNvbnRhaW5lcixmZXRjaFNvdXJjZTp0aGlzLmZldGNoSW1hZ2UuYmluZCh0aGlzKSxyZXF1ZXN0VXBkYXRlOnRoaXMucmVxdWVzdFVwZGF0ZS5iaW5kKHRoaXMpLGltYWdlTWF4V2lkdGg6cixpbWFnZU1heEhlaWdodDphLGltYWdlUm90YXRpb25TdXBwb3J0ZWQ6byxpbWFnZU5vcm1hbGl6YXRpb25TdXBwb3J0ZWQ6bixoaWRwaTohMH0pLHRoaXMuX2V4cG9ydEltYWdlUGFyYW1ldGVycz1uZXcgdSh7bGF5ZXI6dGhpcy5sYXllcn0pLHRoaXMuX2hhbmRsZXMuYWRkKHRoaXMuX2V4cG9ydEltYWdlUGFyYW1ldGVycy53YXRjaChcInZlcnNpb25cIixmdW5jdGlvbih0KXtlLl9leHBvcnRJbWFnZVZlcnNpb24hPT10JiYoZS5fZXhwb3J0SW1hZ2VWZXJzaW9uPXQsZS5yZXF1ZXN0VXBkYXRlKCkpfSkpfSx0LnByb3RvdHlwZS5kZXRhY2g9ZnVuY3Rpb24oKXt0aGlzLmNvbnRhaW5lci5yZW1vdmVBbGxDaGlsZHJlbigpLHRoaXMuc3RyYXRlZ3kuZGVzdHJveSgpLHRoaXMuX2hhbmRsZXMucmVtb3ZlQWxsKCksdGhpcy5fZXhwb3J0SW1hZ2VQYXJhbWV0ZXJzLmxheWVyPW51bGwsdGhpcy5fZXhwb3J0SW1hZ2VQYXJhbWV0ZXJzLmRlc3Ryb3koKSx0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnM9bnVsbH0sdC5wcm90b3R5cGUubW92ZVN0YXJ0PWZ1bmN0aW9uKCl7fSx0LnByb3RvdHlwZS52aWV3Q2hhbmdlPWZ1bmN0aW9uKCl7fSx0LnByb3RvdHlwZS5tb3ZlRW5kPWZ1bmN0aW9uKCl7dGhpcy5yZXF1ZXN0VXBkYXRlKCl9LHQucHJvdG90eXBlLmRvUmVmcmVzaD1mdW5jdGlvbigpe3RoaXMucmVxdWVzdFVwZGF0ZSgpfSx0LnByb3RvdHlwZS5pc1VwZGF0aW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXR0YWNoZWQmJih0aGlzLnN0cmF0ZWd5LnVwZGF0aW5nfHx0aGlzLnVwZGF0ZVJlcXVlc3RlZCl9LHQucHJvdG90eXBlLmdldFBvcHVwRGF0YT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnZpZXcuc2NhbGU7cmV0dXJuIHRoaXMubGF5ZXIuYWxsU3VibGF5ZXJzLmZpbHRlcihmdW5jdGlvbihlKXt2YXIgcj0wPT09ZS5taW5TY2FsZXx8dDw9ZS5taW5TY2FsZSxhPTA9PT1lLm1heFNjYWxlfHx0Pj1lLm1heFNjYWxlO3JldHVybiBlLnBvcHVwVGVtcGxhdGUmJmUucG9wdXBFbmFibGVkJiZlLnZpc2libGUmJnImJmF9KS5tYXAoZnVuY3Rpb24odCl7dmFyIHI9dC5jcmVhdGVRdWVyeSgpO3JldHVybiByLmdlb21ldHJ5PWUsci5vdXRGaWVsZHM9dC5wb3B1cFRlbXBsYXRlLnJlcXVpcmVkRmllbGRzLHQucXVlcnlGZWF0dXJlcyhyKS50aGVuKGZ1bmN0aW9uKGUpe3JldHVybiBlLmZlYXR1cmVzfSl9KX0sdC5wcm90b3R5cGUuZmV0Y2hJbWFnZT1mdW5jdGlvbihlLHQsYSxpKXt2YXIgbz10aGlzO3JldHVybiB0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMuc2NhbGUhPT10aGlzLnZpZXcuc2NhbGUmJih0aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMuc2NhbGU9dGhpcy52aWV3LnNjYWxlLHRoaXMuX2V4cG9ydEltYWdlVmVyc2lvbj10aGlzLl9leHBvcnRJbWFnZVBhcmFtZXRlcnMudmVyc2lvbiksaT1yKHt0aW1lc3RhbXA6dGhpcy5yZWZyZXNoVGltZXN0YW1wfSxpKSx0aGlzLmxheWVyLmZldGNoSW1hZ2UoZSx0LGEsaSkudGhlbihmdW5jdGlvbihlKXtyZXR1cm4gby5ub3RpZnlDaGFuZ2UoXCJ1cGRhdGluZ1wiKSxuZXcgaC5kZWZhdWx0KGUpfSkuY2F0Y2goZnVuY3Rpb24oZSl7cmV0dXJuXCJjYW5jZWxcIiE9PWUuZG9qb1R5cGUmJmcuZXJyb3IoZSksby5ub3RpZnlDaGFuZ2UoXCJ1cGRhdGluZ1wiKSxzLnJlamVjdChlKX0pfSx0PWkoW3Auc3ViY2xhc3MoXCJlc3JpLnZpZXdzLjJkLmxheWVycy5NYXBJbWFnZUxheWVyVmlldzJEXCIpXSx0KX0ocC5kZWNsYXJlZChsLGQpKX0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/2d/layers/MapImageLayerView2D.js\n");

/***/ })

}]);
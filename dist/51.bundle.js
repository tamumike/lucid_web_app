(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/views/3d/layers/FeatureLikeLayerView3D':"./node_modules/arcgis-js-api/views/3d/layers/FeatureLikeLayerView3D.js",
	'esri/views/3d/layers/graphics/stats':"./node_modules/arcgis-js-api/views/3d/layers/graphics/stats.js",
	'esri/views/3d/layers/support/projectExtentUtils':"./node_modules/arcgis-js-api/views/3d/layers/support/projectExtentUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/arcgis-js-api/views/3d/layers/FeatureLikeLayerView3D.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/FeatureLikeLayerView3D.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js\"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js\"),__webpack_require__(/*! ../../../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../core/watchUtils */ \"./node_modules/arcgis-js-api/core/watchUtils.js\"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ../../../layers/graphics/dehydratedFeatures */ \"./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js\"),__webpack_require__(/*! ../../../layers/graphics/QueryEngine */ \"./node_modules/arcgis-js-api/layers/graphics/QueryEngine.js\"),__webpack_require__(/*! ../../../renderers/support/renderingInfoUtils */ \"./node_modules/arcgis-js-api/renderers/support/renderingInfoUtils.js\"),__webpack_require__(/*! ./LayerView3D */ \"./node_modules/arcgis-js-api/views/3d/layers/LayerView3D.js\"),__webpack_require__(/*! ./graphics/Graphics3DFeatureLikeLayerView */ \"./node_modules/arcgis-js-api/views/3d/layers/graphics/Graphics3DFeatureLikeLayerView.js\"),__webpack_require__(/*! ./graphics/stats */ \"./node_modules/arcgis-js-api/views/3d/layers/graphics/stats.js\"),__webpack_require__(/*! ./support/projectExtentUtils */ \"./node_modules/arcgis-js-api/views/3d/layers/support/projectExtentUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,s,o,p,a,c,u,h,l,d,y,g,f){return function(e){function t(t){var r=e.call(this)||this;return r.controller=null,r.asyncGraphicsUpdates=!1,r.suspendResumeExtentMode=\"computed\",r.supportsDraping=!0,r.overlayUpdating=!1,r.fullExtentInLocalViewSpatialReference=null,r.suspendResumeExtent=null,r._queryEngine=null,r._controllerCreated=!1,r._controllerClientSideFiltering=!1,r.clippingExtent=null,r.supportsHeightUnitConversion=!0,r}return r(t,e),t.prototype.initialize=function(){var e=this;this._set(\"graphics3d\",new y({owner:this,layer:this.layer,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,asyncGraphicsUpdates:this.asyncGraphicsUpdates,suspendResumeExtentMode:this.suspendResumeExtentMode,updateClippingExtent:function(t){return e.updateClippingExtent(t)}})),this.handles.add([this.watch(\"asyncGraphicsUpdates\",function(t){e.graphics3d.graphicsCore.asyncUpdates=t}),this.watch(\"suspendResumeExtentMode\",function(t){e.graphics3d.suspendResumeExtentMode=t})]),this.drawingOrder=this.view.getDrawingOrder(this.layer.uid),this.addResolvingPromise(this.graphics3d.setup().then(function(){return e.validateGeometryType()}).then(function(){return f.toViewIfLocal(e)}).then(function(t){e.fullExtentInLocalViewSpatialReference=t}).then(function(){return e.initializeController()})),this.notifyChange(\"updating\")},t.prototype.destroy=function(){this.controller&&(this.controller.destroy(),this.controller=null),this.graphics3d&&(this.graphics3d.destroy(),this._set(\"graphics3d\",null)),this.loadedGraphics=null},Object.defineProperty(t.prototype,\"drawingOrder\",{set:function(e){this.graphics3d.graphicsCore.setDrawingOrder(e),this._set(\"drawingOrder\",e)},enumerable:!0,configurable:!0}),t.prototype.getRenderingInfo=function(e){var t=l.getRenderingInfo(e,{renderer:this.layer.renderer});if(t&&t.color){var r=t.color;r[0]=r[0]/255,r[1]=r[1]/255,r[2]=r[2]/255}return t},t.prototype.getGraphicFromGraphicUid=function(e){var t=this,r=null;return this.loadedGraphics&&this.loadedGraphics.some(function(i){return i.uid===e&&(r=u.hydrateGraphic(i,t.layer),!0)}),p.create(function(e,t){null!==r?e(r):t()})},Object.defineProperty(t.prototype,\"graphics3DGraphics\",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphics:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,\"graphics3DGraphicsKeys\",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsKeys:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,\"symbolUpdateType\",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.symbolUpdateType:null},enumerable:!0,configurable:!0}),t.prototype.whenGraphicBounds=function(e,t){return this.graphics3d?this.graphics3d.graphicsCore.whenGraphicBounds(e,t):null},t.prototype.queryFeatures=function(e){return this._queryEngine?this._queryEngine.queryFeatures(e):this._rejectQuery()},t.prototype.queryObjectIds=function(e){return this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery()},t.prototype.queryFeatureCount=function(e){return this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery()},t.prototype.queryExtent=function(e){return this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery()},t.prototype.highlight=function(e,t){return this.graphics3d.highlight(e,t,this.layer.objectIdField)},t.prototype.getStats=function(){var e=g.stats(this,this.graphics3d.graphicsCore);return e.elevationUpdating=this.graphics3d.elevationAlignment.updating,e.visibilityFrustum=!this.graphics3d.frustumVisibility.suspended,e.visibilityScale=!this.graphics3d.scaleVisibility.suspended,e},t.prototype.canResume=function(){return!!this.inherited(arguments)&&(!this.graphics3d||!this.graphics3d.suspended)},t.prototype.isUpdating=function(){return!(!this.graphics3d||this.graphics3d.destroyed)&&(!this._controllerCreated||this.controller&&this.controller.updating||this.overlayUpdating||!(this.view.basemapTerrain&&this.view.basemapTerrain.ready)||this.graphics3d.updating)},t.prototype.initializeController=function(){return s(this,void 0,void 0,function(){var e;return n(this,function(t){switch(t.label){case 0:return[4,this.createController()];case 1:return e=t.sent(),[4,e.when()];case 2:return t.sent(),this.setControllerWhenInitialized(e),[2]}})})},t.prototype.setControllerWhenInitialized=function(e){return s(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this.when()];case 1:return r.sent(),[3,3];case 2:return t=r.sent(),[3,3];case 3:return this._controllerCreated=!0,this.notifyChange(\"updating\"),this.isResolved()?[4,a.whenTrueOnce(this.view,\"basemapTerrain.ready\")]:[2];case 4:return r.sent(),this.controller=e,this.loadedGraphics=e.graphics,this._queryEngine=new h({layer:this.layer,features:this.loadedGraphics,objectIdField:this.layer.objectIdField,dataSpatialReference:this.view.spatialReference}),this.notifyChange(\"updating\"),[2]}})})},t.prototype.updateClippingExtent=function(e){if(this.clippingExtent=e,!this.controller)return!1;switch(this.controller.type){case\"memory\":case\"stream\":return!1;case\"snapshot\":return!this._controllerClientSideFiltering&&(this.controller.extent?(this.controller.extent=null,this._controllerClientSideFiltering=!0,!0):(this.controller.extent=e,!0));case\"feature-tile-3d\":return this.controller.extent=e,!0}},t.prototype.validateGeometryType=function(){var e=this.layer;switch(e.geometryType){case\"multipatch\":case\"multipoint\":return p.reject(new o(\"featurelayerview3d:unsupported-geometry-type\",\"Unsupported geometry type ${geometryType}\",{geometryType:e.geometryType}))}},t.prototype._rejectQuery=function(){return p.reject(new o(\"featurelayerview3d:query\",\"Not ready to execute query\"))},i([c.property()],t.prototype,\"loadedGraphics\",void 0),i([c.property({dependsOn:[\"graphics3d.suspended\"]})],t.prototype,\"suspended\",void 0),i([c.property({dependsOn:[\"graphics3d.updating\",\"controller.updating\",\"overlayUpdating\"]})],t.prototype,\"updating\",void 0),i([c.property()],t.prototype,\"controller\",void 0),i([c.property()],t.prototype,\"graphics3d\",void 0),i([c.property({readOnly:!0})],t.prototype,\"asyncGraphicsUpdates\",void 0),i([c.property({readOnly:!0})],t.prototype,\"suspendResumeExtentMode\",void 0),i([c.property({aliasOf:\"graphics3d.graphicsCore.hasDraped\"})],t.prototype,\"hasDraped\",void 0),i([c.property({readOnly:!0,type:Boolean})],t.prototype,\"supportsDraping\",void 0),i([c.property({type:Boolean})],t.prototype,\"overlayUpdating\",void 0),i([c.property()],t.prototype,\"drawingOrder\",null),t=i([c.subclass(\"esri.views.3d.layers.FeatureLikeLayerView3D\")],t)}(c.declared(d))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvRmVhdHVyZUxpa2VMYXllclZpZXczRC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmNnaXMtanMtYXBpL3ZpZXdzLzNkL2xheWVycy9GZWF0dXJlTGlrZUxheWVyVmlldzNELmpzP2UwZjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09QWVJJR0hUIMKpIDIwMTggRXNyaVxuLy9cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQgdW5kZXIgdGhlIGNvcHlyaWdodCBsYXdzIG9mIHRoZSBVbml0ZWQgU3RhdGVzXG4vLyBhbmQgYXBwbGljYWJsZSBpbnRlcm5hdGlvbmFsIGxhd3MsIHRyZWF0aWVzLCBhbmQgY29udmVudGlvbnMuXG4vL1xuLy8gVGhpcyBtYXRlcmlhbCBpcyBsaWNlbnNlZCBmb3IgdXNlIHVuZGVyIHRoZSBFc3JpIE1hc3RlciBMaWNlbnNlXG4vLyBBZ3JlZW1lbnQgKE1MQSksIGFuZCBpcyBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhhdCBhZ3JlZW1lbnQuXG4vLyBZb3UgbWF5IHJlZGlzdHJpYnV0ZSBhbmQgdXNlIHRoaXMgY29kZSB3aXRob3V0IG1vZGlmaWNhdGlvbixcbi8vIHByb3ZpZGVkIHlvdSBhZGhlcmUgdG8gdGhlIHRlcm1zIG9mIHRoZSBNTEEgYW5kIGluY2x1ZGUgdGhpc1xuLy8gY29weXJpZ2h0IG5vdGljZS5cbi8vXG4vLyBTZWUgdXNlIHJlc3RyaWN0aW9ucyBhdCBodHRwOi8vd3d3LmVzcmkuY29tL2xlZ2FsL3BkZnMvbWxhX2UyMDRfZTMwMC9lbmdsaXNoXG4vL1xuLy8gRm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGNvbnRhY3Q6XG4vLyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4vLyBBdHRuOiBDb250cmFjdHMgYW5kIExlZ2FsIFNlcnZpY2VzIERlcGFydG1lbnRcbi8vIDM4MCBOZXcgWW9yayBTdHJlZXRcbi8vIFJlZGxhbmRzLCBDYWxpZm9ybmlhLCBVU0EgOTIzNzNcbi8vIFVTQVxuLy9cbi8vIGVtYWlsOiBjb250cmFjdHNAZXNyaS5jb21cbi8vXG4vLyBTZWUgaHR0cDovL2pzLmFyY2dpcy5jb20vNC44L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cblxuZGVmaW5lKFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIi4uLy4uLy4uL2NvcmUvdHNTdXBwb3J0L2RlY2xhcmVFeHRlbmRzSGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9kZWNvcmF0ZUhlbHBlclwiLFwiLi4vLi4vLi4vY29yZS90c1N1cHBvcnQvZ2VuZXJhdG9ySGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL3RzU3VwcG9ydC9hd2FpdGVySGVscGVyXCIsXCIuLi8uLi8uLi9jb3JlL0Vycm9yXCIsXCIuLi8uLi8uLi9jb3JlL3Byb21pc2VVdGlsc1wiLFwiLi4vLi4vLi4vY29yZS93YXRjaFV0aWxzXCIsXCIuLi8uLi8uLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzXCIsXCIuLi8uLi8uLi9sYXllcnMvZ3JhcGhpY3MvZGVoeWRyYXRlZEZlYXR1cmVzXCIsXCIuLi8uLi8uLi9sYXllcnMvZ3JhcGhpY3MvUXVlcnlFbmdpbmVcIixcIi4uLy4uLy4uL3JlbmRlcmVycy9zdXBwb3J0L3JlbmRlcmluZ0luZm9VdGlsc1wiLFwiLi9MYXllclZpZXczRFwiLFwiLi9ncmFwaGljcy9HcmFwaGljczNERmVhdHVyZUxpa2VMYXllclZpZXdcIixcIi4vZ3JhcGhpY3Mvc3RhdHNcIixcIi4vc3VwcG9ydC9wcm9qZWN0RXh0ZW50VXRpbHNcIl0sZnVuY3Rpb24oZSx0LHIsaSxuLHMsbyxwLGEsYyx1LGgsbCxkLHksZyxmKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdCh0KXt2YXIgcj1lLmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIHIuY29udHJvbGxlcj1udWxsLHIuYXN5bmNHcmFwaGljc1VwZGF0ZXM9ITEsci5zdXNwZW5kUmVzdW1lRXh0ZW50TW9kZT1cImNvbXB1dGVkXCIsci5zdXBwb3J0c0RyYXBpbmc9ITAsci5vdmVybGF5VXBkYXRpbmc9ITEsci5mdWxsRXh0ZW50SW5Mb2NhbFZpZXdTcGF0aWFsUmVmZXJlbmNlPW51bGwsci5zdXNwZW5kUmVzdW1lRXh0ZW50PW51bGwsci5fcXVlcnlFbmdpbmU9bnVsbCxyLl9jb250cm9sbGVyQ3JlYXRlZD0hMSxyLl9jb250cm9sbGVyQ2xpZW50U2lkZUZpbHRlcmluZz0hMSxyLmNsaXBwaW5nRXh0ZW50PW51bGwsci5zdXBwb3J0c0hlaWdodFVuaXRDb252ZXJzaW9uPSEwLHJ9cmV0dXJuIHIodCxlKSx0LnByb3RvdHlwZS5pbml0aWFsaXplPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLl9zZXQoXCJncmFwaGljczNkXCIsbmV3IHkoe293bmVyOnRoaXMsbGF5ZXI6dGhpcy5sYXllcixmcnVzdHVtVmlzaWJpbGl0eUVuYWJsZWQ6ITAsc2NhbGVWaXNpYmlsaXR5RW5hYmxlZDohMCxlbGV2YXRpb25BbGlnbm1lbnRFbmFibGVkOiEwLGVsZXZhdGlvbkZlYXR1cmVFeHByZXNzaW9uRW5hYmxlZDohMCxhc3luY0dyYXBoaWNzVXBkYXRlczp0aGlzLmFzeW5jR3JhcGhpY3NVcGRhdGVzLHN1c3BlbmRSZXN1bWVFeHRlbnRNb2RlOnRoaXMuc3VzcGVuZFJlc3VtZUV4dGVudE1vZGUsdXBkYXRlQ2xpcHBpbmdFeHRlbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIGUudXBkYXRlQ2xpcHBpbmdFeHRlbnQodCl9fSkpLHRoaXMuaGFuZGxlcy5hZGQoW3RoaXMud2F0Y2goXCJhc3luY0dyYXBoaWNzVXBkYXRlc1wiLGZ1bmN0aW9uKHQpe2UuZ3JhcGhpY3MzZC5ncmFwaGljc0NvcmUuYXN5bmNVcGRhdGVzPXR9KSx0aGlzLndhdGNoKFwic3VzcGVuZFJlc3VtZUV4dGVudE1vZGVcIixmdW5jdGlvbih0KXtlLmdyYXBoaWNzM2Quc3VzcGVuZFJlc3VtZUV4dGVudE1vZGU9dH0pXSksdGhpcy5kcmF3aW5nT3JkZXI9dGhpcy52aWV3LmdldERyYXdpbmdPcmRlcih0aGlzLmxheWVyLnVpZCksdGhpcy5hZGRSZXNvbHZpbmdQcm9taXNlKHRoaXMuZ3JhcGhpY3MzZC5zZXR1cCgpLnRoZW4oZnVuY3Rpb24oKXtyZXR1cm4gZS52YWxpZGF0ZUdlb21ldHJ5VHlwZSgpfSkudGhlbihmdW5jdGlvbigpe3JldHVybiBmLnRvVmlld0lmTG9jYWwoZSl9KS50aGVuKGZ1bmN0aW9uKHQpe2UuZnVsbEV4dGVudEluTG9jYWxWaWV3U3BhdGlhbFJlZmVyZW5jZT10fSkudGhlbihmdW5jdGlvbigpe3JldHVybiBlLmluaXRpYWxpemVDb250cm9sbGVyKCl9KSksdGhpcy5ub3RpZnlDaGFuZ2UoXCJ1cGRhdGluZ1wiKX0sdC5wcm90b3R5cGUuZGVzdHJveT1mdW5jdGlvbigpe3RoaXMuY29udHJvbGxlciYmKHRoaXMuY29udHJvbGxlci5kZXN0cm95KCksdGhpcy5jb250cm9sbGVyPW51bGwpLHRoaXMuZ3JhcGhpY3MzZCYmKHRoaXMuZ3JhcGhpY3MzZC5kZXN0cm95KCksdGhpcy5fc2V0KFwiZ3JhcGhpY3MzZFwiLG51bGwpKSx0aGlzLmxvYWRlZEdyYXBoaWNzPW51bGx9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImRyYXdpbmdPcmRlclwiLHtzZXQ6ZnVuY3Rpb24oZSl7dGhpcy5ncmFwaGljczNkLmdyYXBoaWNzQ29yZS5zZXREcmF3aW5nT3JkZXIoZSksdGhpcy5fc2V0KFwiZHJhd2luZ09yZGVyXCIsZSl9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksdC5wcm90b3R5cGUuZ2V0UmVuZGVyaW5nSW5mbz1mdW5jdGlvbihlKXt2YXIgdD1sLmdldFJlbmRlcmluZ0luZm8oZSx7cmVuZGVyZXI6dGhpcy5sYXllci5yZW5kZXJlcn0pO2lmKHQmJnQuY29sb3Ipe3ZhciByPXQuY29sb3I7clswXT1yWzBdLzI1NSxyWzFdPXJbMV0vMjU1LHJbMl09clsyXS8yNTV9cmV0dXJuIHR9LHQucHJvdG90eXBlLmdldEdyYXBoaWNGcm9tR3JhcGhpY1VpZD1mdW5jdGlvbihlKXt2YXIgdD10aGlzLHI9bnVsbDtyZXR1cm4gdGhpcy5sb2FkZWRHcmFwaGljcyYmdGhpcy5sb2FkZWRHcmFwaGljcy5zb21lKGZ1bmN0aW9uKGkpe3JldHVybiBpLnVpZD09PWUmJihyPXUuaHlkcmF0ZUdyYXBoaWMoaSx0LmxheWVyKSwhMCl9KSxwLmNyZWF0ZShmdW5jdGlvbihlLHQpe251bGwhPT1yP2Uocik6dCgpfSl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcImdyYXBoaWNzM0RHcmFwaGljc1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ncmFwaGljczNkP3RoaXMuZ3JhcGhpY3MzZC5ncmFwaGljc0NvcmUuZ3JhcGhpY3MzREdyYXBoaWNzOm51bGx9LGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZ3JhcGhpY3MzREdyYXBoaWNzS2V5c1wiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ncmFwaGljczNkP3RoaXMuZ3JhcGhpY3MzZC5ncmFwaGljc0NvcmUuZ3JhcGhpY3MzREdyYXBoaWNzS2V5czpudWxsfSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcInN5bWJvbFVwZGF0ZVR5cGVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ3JhcGhpY3MzZD90aGlzLmdyYXBoaWNzM2QuZ3JhcGhpY3NDb3JlLnN5bWJvbFVwZGF0ZVR5cGU6bnVsbH0sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITB9KSx0LnByb3RvdHlwZS53aGVuR3JhcGhpY0JvdW5kcz1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmdyYXBoaWNzM2Q/dGhpcy5ncmFwaGljczNkLmdyYXBoaWNzQ29yZS53aGVuR3JhcGhpY0JvdW5kcyhlLHQpOm51bGx9LHQucHJvdG90eXBlLnF1ZXJ5RmVhdHVyZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX3F1ZXJ5RW5naW5lP3RoaXMuX3F1ZXJ5RW5naW5lLnF1ZXJ5RmVhdHVyZXMoZSk6dGhpcy5fcmVqZWN0UXVlcnkoKX0sdC5wcm90b3R5cGUucXVlcnlPYmplY3RJZHM9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX3F1ZXJ5RW5naW5lP3RoaXMuX3F1ZXJ5RW5naW5lLnF1ZXJ5T2JqZWN0SWRzKGUpOnRoaXMuX3JlamVjdFF1ZXJ5KCl9LHQucHJvdG90eXBlLnF1ZXJ5RmVhdHVyZUNvdW50PWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9xdWVyeUVuZ2luZT90aGlzLl9xdWVyeUVuZ2luZS5xdWVyeUZlYXR1cmVDb3VudChlKTp0aGlzLl9yZWplY3RRdWVyeSgpfSx0LnByb3RvdHlwZS5xdWVyeUV4dGVudD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fcXVlcnlFbmdpbmU/dGhpcy5fcXVlcnlFbmdpbmUucXVlcnlFeHRlbnQoZSk6dGhpcy5fcmVqZWN0UXVlcnkoKX0sdC5wcm90b3R5cGUuaGlnaGxpZ2h0PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuZ3JhcGhpY3MzZC5oaWdobGlnaHQoZSx0LHRoaXMubGF5ZXIub2JqZWN0SWRGaWVsZCl9LHQucHJvdG90eXBlLmdldFN0YXRzPWZ1bmN0aW9uKCl7dmFyIGU9Zy5zdGF0cyh0aGlzLHRoaXMuZ3JhcGhpY3MzZC5ncmFwaGljc0NvcmUpO3JldHVybiBlLmVsZXZhdGlvblVwZGF0aW5nPXRoaXMuZ3JhcGhpY3MzZC5lbGV2YXRpb25BbGlnbm1lbnQudXBkYXRpbmcsZS52aXNpYmlsaXR5RnJ1c3R1bT0hdGhpcy5ncmFwaGljczNkLmZydXN0dW1WaXNpYmlsaXR5LnN1c3BlbmRlZCxlLnZpc2liaWxpdHlTY2FsZT0hdGhpcy5ncmFwaGljczNkLnNjYWxlVmlzaWJpbGl0eS5zdXNwZW5kZWQsZX0sdC5wcm90b3R5cGUuY2FuUmVzdW1lPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmluaGVyaXRlZChhcmd1bWVudHMpJiYoIXRoaXMuZ3JhcGhpY3MzZHx8IXRoaXMuZ3JhcGhpY3MzZC5zdXNwZW5kZWQpfSx0LnByb3RvdHlwZS5pc1VwZGF0aW5nPWZ1bmN0aW9uKCl7cmV0dXJuISghdGhpcy5ncmFwaGljczNkfHx0aGlzLmdyYXBoaWNzM2QuZGVzdHJveWVkKSYmKCF0aGlzLl9jb250cm9sbGVyQ3JlYXRlZHx8dGhpcy5jb250cm9sbGVyJiZ0aGlzLmNvbnRyb2xsZXIudXBkYXRpbmd8fHRoaXMub3ZlcmxheVVwZGF0aW5nfHwhKHRoaXMudmlldy5iYXNlbWFwVGVycmFpbiYmdGhpcy52aWV3LmJhc2VtYXBUZXJyYWluLnJlYWR5KXx8dGhpcy5ncmFwaGljczNkLnVwZGF0aW5nKX0sdC5wcm90b3R5cGUuaW5pdGlhbGl6ZUNvbnRyb2xsZXI9ZnVuY3Rpb24oKXtyZXR1cm4gcyh0aGlzLHZvaWQgMCx2b2lkIDAsZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gbih0aGlzLGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6cmV0dXJuWzQsdGhpcy5jcmVhdGVDb250cm9sbGVyKCldO2Nhc2UgMTpyZXR1cm4gZT10LnNlbnQoKSxbNCxlLndoZW4oKV07Y2FzZSAyOnJldHVybiB0LnNlbnQoKSx0aGlzLnNldENvbnRyb2xsZXJXaGVuSW5pdGlhbGl6ZWQoZSksWzJdfX0pfSl9LHQucHJvdG90eXBlLnNldENvbnRyb2xsZXJXaGVuSW5pdGlhbGl6ZWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHModGhpcyx2b2lkIDAsdm9pZCAwLGZ1bmN0aW9uKCl7dmFyIHQ7cmV0dXJuIG4odGhpcyxmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOnJldHVybiByLnRyeXMucHVzaChbMCwyLCwzXSksWzQsdGhpcy53aGVuKCldO2Nhc2UgMTpyZXR1cm4gci5zZW50KCksWzMsM107Y2FzZSAyOnJldHVybiB0PXIuc2VudCgpLFszLDNdO2Nhc2UgMzpyZXR1cm4gdGhpcy5fY29udHJvbGxlckNyZWF0ZWQ9ITAsdGhpcy5ub3RpZnlDaGFuZ2UoXCJ1cGRhdGluZ1wiKSx0aGlzLmlzUmVzb2x2ZWQoKT9bNCxhLndoZW5UcnVlT25jZSh0aGlzLnZpZXcsXCJiYXNlbWFwVGVycmFpbi5yZWFkeVwiKV06WzJdO2Nhc2UgNDpyZXR1cm4gci5zZW50KCksdGhpcy5jb250cm9sbGVyPWUsdGhpcy5sb2FkZWRHcmFwaGljcz1lLmdyYXBoaWNzLHRoaXMuX3F1ZXJ5RW5naW5lPW5ldyBoKHtsYXllcjp0aGlzLmxheWVyLGZlYXR1cmVzOnRoaXMubG9hZGVkR3JhcGhpY3Msb2JqZWN0SWRGaWVsZDp0aGlzLmxheWVyLm9iamVjdElkRmllbGQsZGF0YVNwYXRpYWxSZWZlcmVuY2U6dGhpcy52aWV3LnNwYXRpYWxSZWZlcmVuY2V9KSx0aGlzLm5vdGlmeUNoYW5nZShcInVwZGF0aW5nXCIpLFsyXX19KX0pfSx0LnByb3RvdHlwZS51cGRhdGVDbGlwcGluZ0V4dGVudD1mdW5jdGlvbihlKXtpZih0aGlzLmNsaXBwaW5nRXh0ZW50PWUsIXRoaXMuY29udHJvbGxlcilyZXR1cm4hMTtzd2l0Y2godGhpcy5jb250cm9sbGVyLnR5cGUpe2Nhc2VcIm1lbW9yeVwiOmNhc2VcInN0cmVhbVwiOnJldHVybiExO2Nhc2VcInNuYXBzaG90XCI6cmV0dXJuIXRoaXMuX2NvbnRyb2xsZXJDbGllbnRTaWRlRmlsdGVyaW5nJiYodGhpcy5jb250cm9sbGVyLmV4dGVudD8odGhpcy5jb250cm9sbGVyLmV4dGVudD1udWxsLHRoaXMuX2NvbnRyb2xsZXJDbGllbnRTaWRlRmlsdGVyaW5nPSEwLCEwKToodGhpcy5jb250cm9sbGVyLmV4dGVudD1lLCEwKSk7Y2FzZVwiZmVhdHVyZS10aWxlLTNkXCI6cmV0dXJuIHRoaXMuY29udHJvbGxlci5leHRlbnQ9ZSwhMH19LHQucHJvdG90eXBlLnZhbGlkYXRlR2VvbWV0cnlUeXBlPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5sYXllcjtzd2l0Y2goZS5nZW9tZXRyeVR5cGUpe2Nhc2VcIm11bHRpcGF0Y2hcIjpjYXNlXCJtdWx0aXBvaW50XCI6cmV0dXJuIHAucmVqZWN0KG5ldyBvKFwiZmVhdHVyZWxheWVydmlldzNkOnVuc3VwcG9ydGVkLWdlb21ldHJ5LXR5cGVcIixcIlVuc3VwcG9ydGVkIGdlb21ldHJ5IHR5cGUgJHtnZW9tZXRyeVR5cGV9XCIse2dlb21ldHJ5VHlwZTplLmdlb21ldHJ5VHlwZX0pKX19LHQucHJvdG90eXBlLl9yZWplY3RRdWVyeT1mdW5jdGlvbigpe3JldHVybiBwLnJlamVjdChuZXcgbyhcImZlYXR1cmVsYXllcnZpZXczZDpxdWVyeVwiLFwiTm90IHJlYWR5IHRvIGV4ZWN1dGUgcXVlcnlcIikpfSxpKFtjLnByb3BlcnR5KCldLHQucHJvdG90eXBlLFwibG9hZGVkR3JhcGhpY3NcIix2b2lkIDApLGkoW2MucHJvcGVydHkoe2RlcGVuZHNPbjpbXCJncmFwaGljczNkLnN1c3BlbmRlZFwiXX0pXSx0LnByb3RvdHlwZSxcInN1c3BlbmRlZFwiLHZvaWQgMCksaShbYy5wcm9wZXJ0eSh7ZGVwZW5kc09uOltcImdyYXBoaWNzM2QudXBkYXRpbmdcIixcImNvbnRyb2xsZXIudXBkYXRpbmdcIixcIm92ZXJsYXlVcGRhdGluZ1wiXX0pXSx0LnByb3RvdHlwZSxcInVwZGF0aW5nXCIsdm9pZCAwKSxpKFtjLnByb3BlcnR5KCldLHQucHJvdG90eXBlLFwiY29udHJvbGxlclwiLHZvaWQgMCksaShbYy5wcm9wZXJ0eSgpXSx0LnByb3RvdHlwZSxcImdyYXBoaWNzM2RcIix2b2lkIDApLGkoW2MucHJvcGVydHkoe3JlYWRPbmx5OiEwfSldLHQucHJvdG90eXBlLFwiYXN5bmNHcmFwaGljc1VwZGF0ZXNcIix2b2lkIDApLGkoW2MucHJvcGVydHkoe3JlYWRPbmx5OiEwfSldLHQucHJvdG90eXBlLFwic3VzcGVuZFJlc3VtZUV4dGVudE1vZGVcIix2b2lkIDApLGkoW2MucHJvcGVydHkoe2FsaWFzT2Y6XCJncmFwaGljczNkLmdyYXBoaWNzQ29yZS5oYXNEcmFwZWRcIn0pXSx0LnByb3RvdHlwZSxcImhhc0RyYXBlZFwiLHZvaWQgMCksaShbYy5wcm9wZXJ0eSh7cmVhZE9ubHk6ITAsdHlwZTpCb29sZWFufSldLHQucHJvdG90eXBlLFwic3VwcG9ydHNEcmFwaW5nXCIsdm9pZCAwKSxpKFtjLnByb3BlcnR5KHt0eXBlOkJvb2xlYW59KV0sdC5wcm90b3R5cGUsXCJvdmVybGF5VXBkYXRpbmdcIix2b2lkIDApLGkoW2MucHJvcGVydHkoKV0sdC5wcm90b3R5cGUsXCJkcmF3aW5nT3JkZXJcIixudWxsKSx0PWkoW2Muc3ViY2xhc3MoXCJlc3JpLnZpZXdzLjNkLmxheWVycy5GZWF0dXJlTGlrZUxheWVyVmlldzNEXCIpXSx0KX0oYy5kZWNsYXJlZChkKSl9KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/FeatureLikeLayerView3D.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/graphics/stats.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/graphics/stats.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function t(e,n){var t=n.graphics3DGraphics,i=\"null\",u=e.suspendResumeExtent;u&&(i=[u[0],u[1],u[2],u[3]].map(function(e){return e.toPrecision(4)}).join(\", \"));var r=\"null\",s=n.computedExtent;return s&&(r=[s.xmin,s.ymin,s.xmax,s.ymax].map(function(e){return e.toPrecision(4)}).join(\", \")),{numCollection:e.loadedGraphics.length,numGraphics:Object.keys(t).length,graphicsUpdating:n.updating,resumeExtent:i,computedExtent:r,updating:e.updating,suspended:e.suspended}}Object.defineProperty(n,\"__esModule\",{value:!0}),n.stats=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvZ3JhcGhpY3Mvc3RhdHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvZ3JhcGhpY3Mvc3RhdHMuanM/ODQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiXSxmdW5jdGlvbihlLG4pe2Z1bmN0aW9uIHQoZSxuKXt2YXIgdD1uLmdyYXBoaWNzM0RHcmFwaGljcyxpPVwibnVsbFwiLHU9ZS5zdXNwZW5kUmVzdW1lRXh0ZW50O3UmJihpPVt1WzBdLHVbMV0sdVsyXSx1WzNdXS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9QcmVjaXNpb24oNCl9KS5qb2luKFwiLCBcIikpO3ZhciByPVwibnVsbFwiLHM9bi5jb21wdXRlZEV4dGVudDtyZXR1cm4gcyYmKHI9W3MueG1pbixzLnltaW4scy54bWF4LHMueW1heF0ubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBlLnRvUHJlY2lzaW9uKDQpfSkuam9pbihcIiwgXCIpKSx7bnVtQ29sbGVjdGlvbjplLmxvYWRlZEdyYXBoaWNzLmxlbmd0aCxudW1HcmFwaGljczpPYmplY3Qua2V5cyh0KS5sZW5ndGgsZ3JhcGhpY3NVcGRhdGluZzpuLnVwZGF0aW5nLHJlc3VtZUV4dGVudDppLGNvbXB1dGVkRXh0ZW50OnIsdXBkYXRpbmc6ZS51cGRhdGluZyxzdXNwZW5kZWQ6ZS5zdXNwZW5kZWR9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG4uc3RhdHM9dH0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/graphics/stats.js\n");

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/3d/layers/support/projectExtentUtils.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/3d/layers/support/projectExtentUtils.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../../../../geometry/support/webMercatorUtils */ \"./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js\"),__webpack_require__(/*! ../../../../portal/support/geometryServiceUtils */ \"./node_modules/arcgis-js-api/portal/support/geometryServiceUtils.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,l){function n(e){var r=e.view,n=r.spatialReference,c=e.layer.fullExtent,i=c&&c.spatialReference;return i?i.equals(n)?t.resolve(c.clone()):o.canProject(i,n)?t.resolve(o.project(c,n)):e.view.state.isLocal?l.projectGeometry(c,n,e.layer.portalItem).then(function(r){if(!e.destroyed&&r)return r}).catch(function(){return null}):t.resolve(null):t.resolve(null)}Object.defineProperty(r,\"__esModule\",{value:!0}),r.toViewIfLocal=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvc3VwcG9ydC9wcm9qZWN0RXh0ZW50VXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS92aWV3cy8zZC9sYXllcnMvc3VwcG9ydC9wcm9qZWN0RXh0ZW50VXRpbHMuanM/YTFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDT1BZUklHSFQgwqkgMjAxOCBFc3JpXG4vL1xuLy8gQWxsIHJpZ2h0cyByZXNlcnZlZCB1bmRlciB0aGUgY29weXJpZ2h0IGxhd3Mgb2YgdGhlIFVuaXRlZCBTdGF0ZXNcbi8vIGFuZCBhcHBsaWNhYmxlIGludGVybmF0aW9uYWwgbGF3cywgdHJlYXRpZXMsIGFuZCBjb252ZW50aW9ucy5cbi8vXG4vLyBUaGlzIG1hdGVyaWFsIGlzIGxpY2Vuc2VkIGZvciB1c2UgdW5kZXIgdGhlIEVzcmkgTWFzdGVyIExpY2Vuc2Vcbi8vIEFncmVlbWVudCAoTUxBKSwgYW5kIGlzIGJvdW5kIGJ5IHRoZSB0ZXJtcyBvZiB0aGF0IGFncmVlbWVudC5cbi8vIFlvdSBtYXkgcmVkaXN0cmlidXRlIGFuZCB1c2UgdGhpcyBjb2RlIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxuLy8gcHJvdmlkZWQgeW91IGFkaGVyZSB0byB0aGUgdGVybXMgb2YgdGhlIE1MQSBhbmQgaW5jbHVkZSB0aGlzXG4vLyBjb3B5cmlnaHQgbm90aWNlLlxuLy9cbi8vIFNlZSB1c2UgcmVzdHJpY3Rpb25zIGF0IGh0dHA6Ly93d3cuZXNyaS5jb20vbGVnYWwvcGRmcy9tbGFfZTIwNF9lMzAwL2VuZ2xpc2hcbi8vXG4vLyBGb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiwgY29udGFjdDpcbi8vIEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbi8vIEF0dG46IENvbnRyYWN0cyBhbmQgTGVnYWwgU2VydmljZXMgRGVwYXJ0bWVudFxuLy8gMzgwIE5ldyBZb3JrIFN0cmVldFxuLy8gUmVkbGFuZHMsIENhbGlmb3JuaWEsIFVTQSA5MjM3M1xuLy8gVVNBXG4vL1xuLy8gZW1haWw6IGNvbnRyYWN0c0Blc3JpLmNvbVxuLy9cbi8vIFNlZSBodHRwOi8vanMuYXJjZ2lzLmNvbS80LjgvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuXG5kZWZpbmUoW1wicmVxdWlyZVwiLFwiZXhwb3J0c1wiLFwiLi4vLi4vLi4vLi4vY29yZS9wcm9taXNlVXRpbHNcIixcIi4uLy4uLy4uLy4uL2dlb21ldHJ5L3N1cHBvcnQvd2ViTWVyY2F0b3JVdGlsc1wiLFwiLi4vLi4vLi4vLi4vcG9ydGFsL3N1cHBvcnQvZ2VvbWV0cnlTZXJ2aWNlVXRpbHNcIl0sZnVuY3Rpb24oZSxyLHQsbyxsKXtmdW5jdGlvbiBuKGUpe3ZhciByPWUudmlldyxuPXIuc3BhdGlhbFJlZmVyZW5jZSxjPWUubGF5ZXIuZnVsbEV4dGVudCxpPWMmJmMuc3BhdGlhbFJlZmVyZW5jZTtyZXR1cm4gaT9pLmVxdWFscyhuKT90LnJlc29sdmUoYy5jbG9uZSgpKTpvLmNhblByb2plY3QoaSxuKT90LnJlc29sdmUoby5wcm9qZWN0KGMsbikpOmUudmlldy5zdGF0ZS5pc0xvY2FsP2wucHJvamVjdEdlb21ldHJ5KGMsbixlLmxheWVyLnBvcnRhbEl0ZW0pLnRoZW4oZnVuY3Rpb24ocil7aWYoIWUuZGVzdHJveWVkJiZyKXJldHVybiByfSkuY2F0Y2goZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0pOnQucmVzb2x2ZShudWxsKTp0LnJlc29sdmUobnVsbCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksci50b1ZpZXdJZkxvY2FsPW59KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/views/3d/layers/support/projectExtentUtils.js\n");

/***/ })

}]);
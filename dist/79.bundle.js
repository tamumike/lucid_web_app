(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	'esri/layers/UnsupportedLayer':"./node_modules/arcgis-js-api/layers/UnsupportedLayer.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./node_modules/arcgis-js-api/layers/UnsupportedLayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/UnsupportedLayer.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2018 Esri\n//\n// All rights reserved under the copyright laws of the United States\n// and applicable international laws, treaties, and conventions.\n//\n// This material is licensed for use under the Esri Master License\n// Agreement (MLA), and is bound by the terms of that agreement.\n// You may redistribute and use this code without modification,\n// provided you adhere to the terms of the MLA and include this\n// copyright notice.\n//\n// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english\n//\n// For additional information, contact:\n// Environmental Systems Research Institute, Inc.\n// Attn: Contracts and Legal Services Department\n// 380 New York Street\n// Redlands, California, USA 92373\n// USA\n//\n// email: contracts@esri.com\n//\n// See http://js.arcgis.com/4.8/esri/copyright.txt for details.\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js\"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ \"./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js\"),__webpack_require__(/*! ../core/Error */ \"./node_modules/arcgis-js-api/core/Error.js\"),__webpack_require__(/*! ../core/lang */ \"./node_modules/arcgis-js-api/core/lang.js\"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ \"./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js\"),__webpack_require__(/*! ../core/promiseUtils */ \"./node_modules/arcgis-js-api/core/promiseUtils.js\"),__webpack_require__(/*! ../core/scheduling */ \"./node_modules/arcgis-js-api/core/scheduling.js\"),__webpack_require__(/*! ../core/accessorSupport/decorators */ \"./node_modules/arcgis-js-api/core/accessorSupport/decorators.js\"),__webpack_require__(/*! ./Layer */ \"./node_modules/arcgis-js-api/layers/Layer.js\"),__webpack_require__(/*! ./mixins/PortalLayer */ \"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,i,p,s,u,c,l,a){return function(e){function r(r){var t=e.call(this)||this;return t.resourceInfo=null,t.type=\"unsupported\",t}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(s.create(function(r,t){u.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),o=\"Unsupported layer type\";r&&(o+=\" \"+r),t(new n(\"layer:unsupported-layer-type\",o,{layerType:r}))})}))},r.prototype.read=function(e,r){var t={resourceInfo:e};return null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),this.inherited(arguments,[t,r]),this},r.prototype.write=function(e,r){return i.mixin(e||{},this.resourceInfo,{id:this.id})},o([c.shared(\"esri.layers.UnsupportedLayer\")],r.prototype,\"declaredClass\",void 0),o([c.property({readOnly:!0})],r.prototype,\"resourceInfo\",void 0),o([c.property({json:{read:!1},readOnly:!0,value:\"unsupported\"})],r.prototype,\"type\",void 0),r=o([c.subclass()],r)}(c.declared(l,p,a))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYXJjZ2lzLWpzLWFwaS9sYXllcnMvVW5zdXBwb3J0ZWRMYXllci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hcmNnaXMtanMtYXBpL2xheWVycy9VbnN1cHBvcnRlZExheWVyLmpzP2Y1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ09QWVJJR0hUIMKpIDIwMTggRXNyaVxuLy9cbi8vIEFsbCByaWdodHMgcmVzZXJ2ZWQgdW5kZXIgdGhlIGNvcHlyaWdodCBsYXdzIG9mIHRoZSBVbml0ZWQgU3RhdGVzXG4vLyBhbmQgYXBwbGljYWJsZSBpbnRlcm5hdGlvbmFsIGxhd3MsIHRyZWF0aWVzLCBhbmQgY29udmVudGlvbnMuXG4vL1xuLy8gVGhpcyBtYXRlcmlhbCBpcyBsaWNlbnNlZCBmb3IgdXNlIHVuZGVyIHRoZSBFc3JpIE1hc3RlciBMaWNlbnNlXG4vLyBBZ3JlZW1lbnQgKE1MQSksIGFuZCBpcyBib3VuZCBieSB0aGUgdGVybXMgb2YgdGhhdCBhZ3JlZW1lbnQuXG4vLyBZb3UgbWF5IHJlZGlzdHJpYnV0ZSBhbmQgdXNlIHRoaXMgY29kZSB3aXRob3V0IG1vZGlmaWNhdGlvbixcbi8vIHByb3ZpZGVkIHlvdSBhZGhlcmUgdG8gdGhlIHRlcm1zIG9mIHRoZSBNTEEgYW5kIGluY2x1ZGUgdGhpc1xuLy8gY29weXJpZ2h0IG5vdGljZS5cbi8vXG4vLyBTZWUgdXNlIHJlc3RyaWN0aW9ucyBhdCBodHRwOi8vd3d3LmVzcmkuY29tL2xlZ2FsL3BkZnMvbWxhX2UyMDRfZTMwMC9lbmdsaXNoXG4vL1xuLy8gRm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24sIGNvbnRhY3Q6XG4vLyBFbnZpcm9ubWVudGFsIFN5c3RlbXMgUmVzZWFyY2ggSW5zdGl0dXRlLCBJbmMuXG4vLyBBdHRuOiBDb250cmFjdHMgYW5kIExlZ2FsIFNlcnZpY2VzIERlcGFydG1lbnRcbi8vIDM4MCBOZXcgWW9yayBTdHJlZXRcbi8vIFJlZGxhbmRzLCBDYWxpZm9ybmlhLCBVU0EgOTIzNzNcbi8vIFVTQVxuLy9cbi8vIGVtYWlsOiBjb250cmFjdHNAZXNyaS5jb21cbi8vXG4vLyBTZWUgaHR0cDovL2pzLmFyY2dpcy5jb20vNC44L2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cblxuZGVmaW5lKFtcInJlcXVpcmVcIixcImV4cG9ydHNcIixcIi4uL2NvcmUvdHNTdXBwb3J0L2RlY2xhcmVFeHRlbmRzSGVscGVyXCIsXCIuLi9jb3JlL3RzU3VwcG9ydC9kZWNvcmF0ZUhlbHBlclwiLFwiLi4vY29yZS9FcnJvclwiLFwiLi4vY29yZS9sYW5nXCIsXCIuLi9jb3JlL011bHRpT3JpZ2luSlNPTlN1cHBvcnRcIixcIi4uL2NvcmUvcHJvbWlzZVV0aWxzXCIsXCIuLi9jb3JlL3NjaGVkdWxpbmdcIixcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnNcIixcIi4vTGF5ZXJcIixcIi4vbWl4aW5zL1BvcnRhbExheWVyXCJdLGZ1bmN0aW9uKGUscix0LG8sbixpLHAscyx1LGMsbCxhKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gcihyKXt2YXIgdD1lLmNhbGwodGhpcyl8fHRoaXM7cmV0dXJuIHQucmVzb3VyY2VJbmZvPW51bGwsdC50eXBlPVwidW5zdXBwb3J0ZWRcIix0fXJldHVybiB0KHIsZSksci5wcm90b3R5cGUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5hZGRSZXNvbHZpbmdQcm9taXNlKHMuY3JlYXRlKGZ1bmN0aW9uKHIsdCl7dS5zY2hlZHVsZShmdW5jdGlvbigpe3ZhciByPWUucmVzb3VyY2VJbmZvJiYoZS5yZXNvdXJjZUluZm8ubGF5ZXJUeXBlfHxlLnJlc291cmNlSW5mby50eXBlKSxvPVwiVW5zdXBwb3J0ZWQgbGF5ZXIgdHlwZVwiO3ImJihvKz1cIiBcIityKSx0KG5ldyBuKFwibGF5ZXI6dW5zdXBwb3J0ZWQtbGF5ZXItdHlwZVwiLG8se2xheWVyVHlwZTpyfSkpfSl9KSl9LHIucHJvdG90eXBlLnJlYWQ9ZnVuY3Rpb24oZSxyKXt2YXIgdD17cmVzb3VyY2VJbmZvOmV9O3JldHVybiBudWxsIT1lLmlkJiYodC5pZD1lLmlkKSxudWxsIT1lLnRpdGxlJiYodC50aXRsZT1lLnRpdGxlKSx0aGlzLmluaGVyaXRlZChhcmd1bWVudHMsW3Qscl0pLHRoaXN9LHIucHJvdG90eXBlLndyaXRlPWZ1bmN0aW9uKGUscil7cmV0dXJuIGkubWl4aW4oZXx8e30sdGhpcy5yZXNvdXJjZUluZm8se2lkOnRoaXMuaWR9KX0sbyhbYy5zaGFyZWQoXCJlc3JpLmxheWVycy5VbnN1cHBvcnRlZExheWVyXCIpXSxyLnByb3RvdHlwZSxcImRlY2xhcmVkQ2xhc3NcIix2b2lkIDApLG8oW2MucHJvcGVydHkoe3JlYWRPbmx5OiEwfSldLHIucHJvdG90eXBlLFwicmVzb3VyY2VJbmZvXCIsdm9pZCAwKSxvKFtjLnByb3BlcnR5KHtqc29uOntyZWFkOiExfSxyZWFkT25seTohMCx2YWx1ZTpcInVuc3VwcG9ydGVkXCJ9KV0sci5wcm90b3R5cGUsXCJ0eXBlXCIsdm9pZCAwKSxyPW8oW2Muc3ViY2xhc3MoKV0scil9KGMuZGVjbGFyZWQobCxwLGEpKX0pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/arcgis-js-api/layers/UnsupportedLayer.js\n");

/***/ })

}]);
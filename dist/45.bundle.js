(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/UnsupportedLayer":1482})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1482:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(8),t(5),t(104),t(7),t(58),t(1),t(51),t(84)],void 0===(n=function(e,r,t,o,n,i,p,s,u,d,a,l){return function(e){function r(r){var t=e.call(this)||this;return t.resourceInfo=null,t.type="unsupported",t}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(s.create(function(r,t){u.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),o="Unsupported layer type";r&&(o+=" "+r),t(new n("layer:unsupported-layer-type",o,{layerType:r}))})}))},r.prototype.read=function(e,r){var t={resourceInfo:e};return null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),this.inherited(arguments,[t,r]),this},r.prototype.write=function(e,r){return i.mixin(e||{},this.resourceInfo,{id:this.id})},o([d.shared("esri.layers.UnsupportedLayer")],r.prototype,"declaredClass",void 0),o([d.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),o([d.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),o([d.subclass()],r)}(d.declared(a,p,l))}.apply(null,o))||(e.exports=n)}}]);
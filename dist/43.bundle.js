(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/MapNotesLayer":1483})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1483:function(e,t,n){var o,r;o=[n.dj.c(e.i),t,n(2),n(0),n(18),n(8),n(7),n(1),n(93),n(51),n(86),n(85)],void 0===(r=function(e,t,o,r,l,a,i,u,p,c,s,f){return function(e){function t(){var t=e.call(this)||this;return t.title=null,t.type="map-notes",t}return o(t,e),Object.defineProperty(t.prototype,"fullExtent",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return e?e.union(t.fullExtent):t.fullExtent},null):null},enumerable:!0,configurable:!0}),t.prototype.readFeatureCollectionsFromItem=function(e,t,n){return t.layers.map(function(e){return(new p).read(e,n)})},t.prototype.readFeatureCollectionsFromWebMap=function(e,t,n){return t.featureCollection.layers.map(function(e){return(new p).read(e,n)})},Object.defineProperty(t.prototype,"minScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.minScale:Math.min(e,t.minScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.minScale=e}),this._set("minScale",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxScale",{get:function(){return this.featureCollections?this.featureCollections.reduce(function(e,t){return null==e?t.maxScale:Math.min(e,t.maxScale)},null):0},set:function(e){this.featureCollections.forEach(function(t){t.maxScale=e}),this._set("maxScale",e)},enumerable:!0,configurable:!0}),t.prototype.load=function(){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]})),this.when()},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return i.create(function(e){return n.e(61).then(function(){var t=[n(2339)];e.apply(null,t)}.bind(this)).catch(n.oe)});case"3d":return i.reject(new a("map-notes-layer:view-not-supported","MapNotesLayer is only supported in 2D"))}},r([u.property()],t.prototype,"title",void 0),r([u.property({dependsOn:["featureCollections"],readOnly:!0})],t.prototype,"fullExtent",null),r([u.property({type:l.ofType(p)})],t.prototype,"featureCollections",void 0),r([u.reader("portal-item","featureCollections",["layers"])],t.prototype,"readFeatureCollectionsFromItem",null),r([u.reader("web-map","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollectionsFromWebMap",null),r([u.property({dependsOn:["featureCollections"]})],t.prototype,"minScale",null),r([u.property({dependsOn:["featureCollections"]})],t.prototype,"maxScale",null),r([u.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),r([u.subclass("esri.layers.MapNotesLayer")],t)}(u.declared(c,s,f))}.apply(null,o))||(e.exports=r)}}]);
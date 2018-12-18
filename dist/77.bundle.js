(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/HandleOwner":1602,"esri/views/layers/RefreshableLayerView":1617,"esri/views/layers/LayerView":1621,"esri/views/3d/layers/support/layerViewUpdatingProperties":1637,"esri/views/3d/layers/LayerView3D":1643,"esri/views/3d/layers/TiledLayerView3D":1877,"esri/views/3d/layers/WMTSLayerView3D":2516})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1602:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(4),r(13),r(1)],void 0===(n=function(e,t,r,i,n,o,a){return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.call(this)||this;return i.handles=new o,i}return r(t,e),t.prototype.destroy=function(){this.handles.destroy()},i([a.property({readOnly:!0})],t.prototype,"handles",void 0),i([a.subclass("esri.core.HandleOwner")],t)}(a.declared(n))}.apply(null,i))||(e.exports=n)},1617:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(4),r(1)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return r(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},i([o.property()],t.prototype,"layer",void 0),i([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),i([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,i))||(e.exports=n)},1621:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(32),r(1602),r(140),r(9),r(181),r(7),r(1)],void 0===(n=function(e,t,r,i,n,o,a,l,p,s,u){return function(e){function t(t){var r=e.call(this)||this;return r.layer=null,r.parent=null,r.view=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),s.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"parent",void 0),i([u.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([u.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),i([u.property()],t.prototype,"view",void 0),i([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(o,n,a.Identifiable,p))}.apply(null,i))||(e.exports=n)},1637:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.updatingPercentageValue={value:100,readOnly:!0},t.updatingPercentage={dependsOn:["updating","updatingPercentageValue"],readOnly:!0,value:0,get:function(){return this.updating?this.updatingPercentageValue:0}}}.apply(null,i))||(e.exports=n)},1643:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(7),r(14),r(1),r(536),r(1621)],void 0===(n=function(e,t,r,i,n,o,a,l,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.slicePlaneEnabled=!1,t.supportsHeightUnitConversion=!1,t}return r(t,e),t.prototype.postscript=function(e){this.inherited(arguments),l.mayHaveHeightModelInfo(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())},t.prototype._validateHeightModelInfo=function(){var e=this;return n.create(function(t,r){o.whenFalseOnce(e.view.defaultsFromMap,"isHeightModelInfoSearching",function(){var i=l.rejectLayerError(e.layer,e.view.heightModelInfo,e.supportsHeightUnitConversion);i?r(i):t()})})},i([a.property()],t.prototype,"view",void 0),i([a.property()],t.prototype,"slicePlaneEnabled",void 0),i([a.subclass("esri.views.3d.layers.LayerView3D")],t)}(a.declared(p))}.apply(null,i))||(e.exports=n)},1877:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(8),r(1),r(1643),r(1637),r(539)],void 0===(n=function(e,t,r,i,n,o,a,l,p){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minDataLevel=0,t.maxDataLevel=1/0,t._isUpdating=!1,t}return r(t,e),Object.defineProperty(t.prototype,"imageFormatIsOpaque",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isOpaque",{get:function(){return this.fullOpacity>=1&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0}),t.prototype.getTileUrl=function(e,t,r){return this.layer.getTileUrl(e,t,r)},t.prototype.updatingChanged=function(e){this._isUpdating=e,this.notifyChange("updating")},t.prototype.isUpdating=function(){return this._isUpdating},t.prototype._getTileInfoSupportError=function(e,t){var r=p.checkIfTileInfoSupportedForView(e,t,this.view.spatialReference,this.view.basemapTerrain.manifold);if(r){var i={layer:this.layer,error:r},o=void 0;switch(r.name){case"tilingscheme:local-gcs-not-supported":o=new n("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",i);break;case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":o=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",i);break;default:o=new n("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",i)}return o}return null},t.prototype._getTileInfoCompatibilityError=function(e,t){return t.compatibleWith(e)?null:new n("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")},t.prototype._updateMinMaxDataLevel=function(){var e,t=1/0,r=0;this.tileInfo.lods.forEach(function(e){t=Math.min(e.level,t),r=Math.max(e.level,r)}),e=[t,r],this.minDataLevel=e[0],this.maxDataLevel=e[1]},i([o.property({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),i([o.property(l.updatingPercentage)],t.prototype,"updatingPercentage",void 0),i([o.property(l.updatingPercentageValue)],t.prototype,"updatingPercentageValue",void 0),i([o.property()],t.prototype,"fullExtent",void 0),i([o.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],t.prototype,"isOpaque",null),i([o.property()],t.prototype,"layer",void 0),i([o.property()],t.prototype,"minDataLevel",void 0),i([o.property()],t.prototype,"maxDataLevel",void 0),i([o.property()],t.prototype,"tileInfo",void 0),i([o.subclass("esri.views.3d.layers.TiledLayerView3D")],t)}(o.declared(a))}.apply(null,i))||(e.exports=n)},2516:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(8),r(13),r(9),r(7),r(14),r(1),r(1877),r(1617)],void 0===(n=function(e,t,r,i,n,o,a,l,p,s,u,d){var c=a.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new o,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=p.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var t=function(){return new n("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!e.view.basemapTerrain.tilingSchemeLocked)return l.reject(t());var r,i=e.view.basemapTerrain.tilingScheme,o=e.layer.activeLayer;if(o&&o.tileMatrixSet){var a=(r=o.tileMatrixSet).tileInfo,p=e._getTileInfoSupportError(a,r.fullExtent)||e._getTileInfoCompatibilityError(a,i);if(p)return l.reject(p)}else{if(!(r=e._getCompatibleTileMatrixSet()))return l.reject(t());o.tileMatrixSetId=r.id}e.tileInfo=r.tileInfo,e.fullExtent=r.fullExtent,e._updateMinMaxDataLevel()});this.addResolvingPromise(t),this.when(function(){return e._initialized()})},t.prototype.destroy=function(){this._handles.removeAll()},t.prototype.refresh=function(){this.emit("data-changed")},t.prototype.canResume=function(){if(!this.inherited(arguments))return!1;var e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)},t.prototype.doRefresh=function(){this.suspended||this.emit("data-changed")},t.prototype._initialized=function(){var e=this;this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return e.refresh()})),this._handles.add(this.layer.watch("activeLayer",function(t){var r=t.tileMatrixSet;if(r){var i=e._getTileInfoError(r.tileInfo,r.fullExtent);i&&(c.error("The selected tile matrix set is not compatible with the view",i),r=null)}else(r=e._getCompatibleTileMatrixSet())?t.tileMatrixSetId=r.id:c.error("The layer does not provide a tiling scheme that is compatible with the view");e.notifyChange("suspended"),e.canResume()&&e.refresh()}))},t.prototype._getCompatibleTileMatrixSet=function(){var e=this;return this.layer.activeLayer.tileMatrixSets.find(function(t){var r=t.tileInfo;return!e._getTileInfoError(r,t.fullExtent)})},t.prototype._getTileInfoError=function(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)},i([s.property({aliasOf:"layer.fullExtent"})],t.prototype,"fullExtent",void 0),i([s.property()],t.prototype,"layer",void 0),i([s.property({dependsOn:["layer.activeLayer"]})],t.prototype,"suspended",void 0),i([s.property({aliasOf:"layer.tileInfo"})],t.prototype,"tileInfo",void 0),i([s.subclass("esri.views.3d.layers.WMTSLayerView3D")],t)}(s.declared(u,d))}.apply(null,i))||(e.exports=n)}}]);
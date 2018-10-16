(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/GroupLayerView":1465,"esri/views/layers/LayerView":1509})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1465:function(e,i,t){var r,s;r=[t(18),t(195),t(15),t(5),t(1509)],void 0===(s=function(e,i,t,r,s){var n=e.ofType(s);return s.createSubclass({declaredClass:"esri.views.layers.GroupLayerView",constructor:function(){},getDefaults:function(){return r.mixin(this.inherited(arguments),{layerViews:[]})},initialize:function(){this._watchHandles=new t,this._watchHandles.add(this.layerViews.on("change",this._layerViewsChangeHandler.bind(this))),this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this))),this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._layerViewsChangeHandler({added:this.layerViews.toArray(),removed:[],changed:[]}),this._layerViewsAfterChangesHandler()},destroy:function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},properties:{layerViews:{type:n,cast:i.castForReferenceSetter,set:function(e){this._set("layerViews",i.referenceSetter(e,this._get("layerViews"),n))}}},isUpdating:function(){return this.layerViews.some(function(e){return e.updating})},_hasLayerViewVisibleOverrides:function(){return this.layerViews.some(function(e){return e._isOverridden("visible")})},_findLayerViewForLayer:function(e){return e&&this.layerViews.find(function(i){return i.layer===e})},_firstVisibleOnLayerOrder:function(){var e=this.layer.layers.find(function(e){var i=this._findLayerViewForLayer(e);return i&&i.visible}.bind(this));return e&&this._findLayerViewForLayer(e)},_enforceExclusiveVisibility:function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach(function(i){i.visible=i===e}))},_layerViewsChangeHandler:function(e){this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map(function(e){return e.watch("visible",this._layerViewVisibleHandler.bind(this),!0)}.bind(this)).toArray(),"visible");var i=e.added[e.added.length-1],t=null;i&&i.visible&&(t=i),this._enforceVisibility(t)},_layerViewsAfterChangesHandler:function(){this._watchHandles.remove("updating"),this._watchHandles.add(this.layerViews.map(function(e){return e.watch("updating",this._updateUpdating.bind(this),!0)}.bind(this)).toArray(),"updating"),this._updateUpdating()},_enforceVisibility:function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach(function(e){e.visible=i});break;case"exclusive":this._enforceExclusiveVisibility(e)}},_visibilityModeHandler:function(e){this._enforceVisibility()},_layerViewVisibleHandler:function(e,i,t,r){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(r.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&r)}},_visibleHandler:function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()},_updateUpdating:function(){this.notifyChange("updating")}})}.apply(null,r))||(e.exports=s)},1509:function(e,i,t){var r,s;r=[t.dj.c(e.i),i,t(2),t(0),t(4),t(29),t(15),t(141),t(9),t(119),t(7),t(1)],void 0===(s=function(e,i,t,r,s,n,a,l,o,d,h,y){return function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.handles=new a,i.layer=null,i.parent=null,i.view=null,i}return t(i,e),i.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(i){if("layerview:create-error"!==i.name){var t=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return o.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+t+"')",i),h.reject(i)}})},i.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(i.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),i.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},i.prototype.isUpdating=function(){return!1},r([y.property()],i.prototype,"layer",void 0),r([y.property()],i.prototype,"parent",void 0),r([y.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],i.prototype,"suspended",null),r([y.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],i.prototype,"updating",null),r([y.property()],i.prototype,"view",void 0),r([y.property({dependsOn:["layer.visible"]})],i.prototype,"visible",null),r([y.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],i.prototype,"fullOpacity",null),r([y.subclass("esri.views.layers.LayerView")],i)}(y.declared(s,n,l,d))}.apply(null,r))||(e.exports=s)}}]);
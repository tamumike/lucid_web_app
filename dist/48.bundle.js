(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/FeatureLayerView2D":1463,"esri/views/layers/LayerView":1512,"esri/views/layers/RefreshableLayerView":1531,"esri/views/2d/layers/LayerView2D":1554,"esri/renderers/support/renderingInfoUtils":1654,"esri/views/2d/layers/support/FeaturesView2D":1716,"esri/layers/graphics/controllers/support/controllerUtils":1747,"esri/views/layers/StreamLayerView":1881,"esri/views/2d/layers/StreamLayerView2D":2312})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[48,35],{1463:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(53),r(11),r(58),r(18),r(8),r(15),r(7),r(1),r(506),r(1747),r(491),r(1748),r(1554),r(1716),r(1531)],void 0===(n=function(e,t,i,n,o,s,a,l,u,p,c,d,h,y,f,v,g,w,b){function m(e){return e&&null!=e._proxy}function _(e){return e&&null!=e.update}return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new p,t.container=new f,t}return i(t,e),Object.defineProperty(t.prototype,"labelsVisible",{get:function(){return!this.suspended&&this.layer.labelingInfo&&this.layer.labelsVisible},enumerable:!0,configurable:!0}),t.prototype.highlight=function(e,t){var r,i=this,n=this.featuresView;return e instanceof a?r=[e.getAttribute(this.layer.objectIdField)]:"number"==typeof e?r=[e]:l.isCollection(e)?r=e.map(function(e){return e.getAttribute(i.layer.objectIdField)}).toArray():Array.isArray(e)&&e.length>0&&(r="number"==typeof e[0]?e:e.map(function(e){return e.getAttribute(i.layer.objectIdField)})),r&&r.length&&function(e){return e&&null!=e.highlight}(n)?n.highlight(r):{remove:function(){}}},t.prototype.queryGraphics=function(){return this._queryEngine?this._queryEngine.queryFeatures():this._rejectQuery()},t.prototype.queryFeatures=function(e){return m(this.featuresView)?this.featuresView.queryFeatures(e):this._queryEngine?this._queryEngine.queryFeatures(e):this._rejectQuery()},t.prototype.queryFeaturesJSON=function(e){return m(this.featuresView)?this.featuresView.queryFeaturesJSON(e):this._queryEngine?this._queryEngine.queryFeatures(e).then(function(e){return e.toJSON()}):this._rejectQuery()},t.prototype.queryObjectIds=function(e){return m(this.featuresView)?this.featuresView.queryObjectIds(e):this._queryEngine?this._queryEngine.queryObjectIds(e):this._rejectQuery()},t.prototype.queryFeatureCount=function(e){return m(this.featuresView)?this.featuresView.queryFeatureCount(e):this._queryEngine?this._queryEngine.queryFeatureCount(e):this._rejectQuery()},t.prototype.queryExtent=function(e){return m(this.featuresView)?this.featuresView.queryExtent(e):this._queryEngine?this._queryEngine.queryExtent(e):this._rejectQuery()},t.prototype.hitTest=function(e,t){return this.suspended||!this.featuresView?c.resolve():this.featuresView.hitTest(e,t)},t.prototype.update=function(e){_(this.controller)?this.controller.update(e):_(this.featuresView)&&this.featuresView.update(e)},t.prototype.attach=function(){var e=this;this._canUseWebGL()?c.create(function(e){return r.e(59).then(function(){var t=[r(1949)];e.apply(null,t)}.bind(this)).catch(r.oe)}).then(function(t){if(e.attached)return new t({layer:e.layer,view:e.view}).when()}).then(function(t){e.featuresView=t,e.container.addChild(t.container),t.attached=!0,t.attach()}):this.layer.createGraphicsController({layerView:this}).then(function(t){if(e.attached){e._set("controller",t),e.requestUpdate();var r=new w;r.mapView=e.view,r.graphics=t.graphics,r.layer=e.layer,r.renderer=e.layer.renderer,e._handles.add(e.layer.watch("renderer",function(){r.renderer=e.layer.renderer})),e._handles.add(e.layer.on("graphic-update",function(e){return r.graphicUpdateHandler(e)})),e.featuresView=r,e._queryEngine=new h({layer:e.layer,dataSpatialReference:e.view.spatialReference,objectIdField:e.layer.objectIdField}),e._queryEngine.features=t.graphics,e._queryEngine.objectIdField=e.layer.objectIdField,e.container.addChild(r.container)}})},t.prototype.detach=function(){this.container.removeAllChildren(),this._handles.removeAll(),this.featuresView&&(this.featuresView.destroy(),this.featuresView=null),this.controller&&(this.controller.destroy&&this.controller.destroy(),this._set("controller",null))},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.takeScreenshot=function(e,t){return m(this.featuresView)&&this.featuresView.tileRenderer.featuresView?this.featuresView.tileRenderer.featuresView._stage.takeScreenshot(e):c.reject(new u("featurelayerview:screenshot-unavailable","takeScreenshot() is not available"))},t.prototype.doRefresh=function(){this.updateRequested||this.suspended||this.controller&&y.isRefreshable(this.controller.activeController)&&this.controller.activeController.refresh()},t.prototype.isUpdating=function(){return null==this.featuresView||!0===this.get("controller.updating")||!0===this.featuresView.updateRequested||_(this.featuresView)&&this.featuresView.updating},t.prototype._canUseWebGL=function(){var e=this;return s("esri-featurelayer-webgl")&&s("esri-webgl")&&v.isRendererWebGLCompatible(this.layer.renderer)&&(e.layer.capabilities.query.supportsQuantization&&("polygon"!==e.layer.geometryType||e.layer.capabilities.query.supportsCentroid)||e.layer.source&&"esri.layers.graphics.sources.CSVSource"===e.layer.source.declaredClass)},t.prototype._rejectQuery=function(){return c.reject(new u("FeatureLayerView2D","Not ready to execute query"))},n([d.property({readOnly:!0})],t.prototype,"controller",void 0),n([d.property()],t.prototype,"featuresView",void 0),n([d.property({dependsOn:["suspended","layer.labelingInfo","layer.labelsVisible"]})],t.prototype,"labelsVisible",null),n([d.property({dependsOn:["controller.updating","featuresView","featuresView.updating"]})],t.prototype,"updating",void 0),n([d.subclass("esri.views.2d.layers.FeatureLayerView2D")],t)}(d.declared(g,b))}.apply(null,i))||(e.exports=n)},1512:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(4),r(29),r(15),r(141),r(9),r(120),r(7),r(1)],void 0===(n=function(e,t,r,i,n,o,s,a,l,u,p,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handles=new s,t.layer=null,t.parent=null,t.view=null,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return l.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),p.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([c.property()],t.prototype,"layer",void 0),i([c.property()],t.prototype,"parent",void 0),i([c.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([c.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),i([c.property()],t.prototype,"view",void 0),i([c.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([c.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([c.subclass("esri.views.layers.LayerView")],t)}(c.declared(n,o,a,u))}.apply(null,i))||(e.exports=n)},1531:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(4),r(1)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return r(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},i([o.property()],t.prototype,"layer",void 0),i([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),i([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),i([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,i))||(e.exports=n)},1554:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(12),r(0),r(16),r(1),r(1512)],void 0===(n=function(e,t,r,i,n,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()}),n.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var r=this.view.scale,i=t.minScale,n=t.maxScale,o=!i,s=!n;!o&&r<=i&&(o=!0),!s&&r>=n&&(s=!0),e=o&&s}return e},i([o.property()],t.prototype,"attached",void 0),i([o.property()],t.prototype,"container",void 0),i([o.property()],t.prototype,"moving",void 0),i([o.property({dependsOn:["moving"]})],t.prototype,"rendering",null),i([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([o.property()],t.prototype,"updateRequested",void 0),i([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),i([o.property()],t.prototype,"view",void 0),i([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(s))}.apply(null,i))||(e.exports=n)},1654:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){if(!e||e.symbol)return null;var r=t.renderer;return e&&r&&r.getObservationRenderer?r.getObservationRenderer(e):r}function i(e,t){if(e.symbol)return e.symbol;var i=r(e,t);return i&&i.getSymbol(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderer=r,t.getSymbol=i,t.getRenderingInfo=function(e,t){var n=r(e,t),o=i(e,t);if(!o)return null;var s={renderer:n,symbol:o};if(n){if(n.colorInfo&&(s.color=n.getColor(e).toRgba()),n.sizeInfo){var a=n.getSize(e);s.size=[a,a,a]}if(n.visualVariables){a=["proportional","proportional","proportional"];for(var l=0,u=n.getVisualVariableValues(e,t);l<u.length;l++){var p=u[l],c=p.variable,d=p.value;if("color"===c.type)s.color=d.toRgba();else if("size"===c.type)if("outline"===c.target)s.outlineSize=d;else{var h=c.axis,y=c.useSymbolValue?"symbolValue":d;"width"===h?a[0]=y:"depth"===h?a[1]=y:"height"===h?a[2]=y:a[0]=a[1]="width-and-depth"===h?y:a[2]=y}else"opacity"===c.type?s.opacity=d:"rotation"===c.type&&"tilt"===c.axis?s.tilt=d:"rotation"===c.type&&"roll"===c.axis?s.roll=d:"rotation"===c.type&&(s.heading=d)}(isFinite(a[0])||isFinite(a[1])||isFinite(a[2]))&&(s.size=a)}}return s}}.apply(null,i))||(e.exports=n)},1716:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(58),r(18),r(15),r(9),r(7),r(1),r(1654),r(75),r(502),r(503),r(504),r(505)],void 0===(n=function(e,t,r,i,n,o,s,a,l,u,p,c,d,h,y,f){var v=a.getLogger("esri.views.2d.layers.support.FeaturesView2D");return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=e.apply(this,t)||this;return i._handles=new s,i._backgroundGroup=new d,i._frontGroup=new d,i._frontObjects=new Map,i._backgroundObjects=new Map,i._scale=0,i.container=new y,i.layer=null,i.container.addChild(i._backgroundGroup),i.container.addChild(i._frontGroup),i.watch("graphics",function(){return i._reset()}),i.watch("renderer",function(){return i._resymbolize()}),i.watch("mapView.scale, mapView.stationary",function(){return i._applyScale()}),i}return r(t,e),t.prototype.destroy=function(){this.graphics=null,this.renderer=null},t.prototype.hitTest=function(e,t){e+=this.mapView.position[0]-window.pageXOffset,t+=this.mapView.position[1]-window.pageYOffset;var r=this.container.hitTest(e,t);return r?l.resolve(r.graphic):l.resolve()},t.prototype.graphicUpdateHandler=function(e){},t.prototype._reset=function(){var e=this;this._handles.remove("graphics"),this.graphics&&(this.graphics.forEach(this._add,this),this._handles.add(this.graphics.on("change",function(t){return e._graphicsChangeHandler(t)}),"graphics"))},t.prototype._applyScale=function(){var e=this.get("mapView.scale"),t=this.get("mapView.stationary");e!==this._scale&&t&&(this._scale=e,this._resymbolize())},t.prototype._resymbolize=function(){var e=this;this.graphics&&this.graphics.forEach(function(t){return e._resymbolizeGraphic(t)})},t.prototype._add=function(e){if(e&&!this._frontObjects.has(e)){var t=p.getRenderingInfo(e,{renderer:this.renderer,viewingMode:"map",scale:this.mapView.state.scale,resolution:this.mapView.state.resolution,spatialReference:this.mapView.spatialReference});if(t){if(t.symbol instanceof c)return void v.error("3D symbols are not supported with MapView");var r=new h;r.graphic=e,r.renderingInfo=t,this._frontObjects.set(e,r),this._frontGroup.addChild(r);var i=t.renderer&&t.renderer.backgroundFillSymbol;if(i&&r.isPolygonMarkerSymbol){var n=new h;n.graphic=e,null!=t.outlineSize?n.renderingInfo={symbol:i,size:[t.outlineSize,t.outlineSize,t.outlineSize]}:n.renderingInfo={symbol:i},this._backgroundObjects.set(e,n),this._backgroundGroup.addChild(n)}}}},t.prototype._remove=function(e){var t=this._frontObjects.get(e);if(t&&(this._frontObjects.delete(e),this._frontGroup.removeChild(t),this._backgroundObjects.has(e))){var r=this._backgroundObjects.get(e);this._backgroundObjects.delete(e),this._backgroundGroup.removeChild(r)}},t.prototype._resymbolizeGraphic=function(e){if(this._frontObjects.has(e)){var t=p.getRenderingInfo(e,{renderer:this.renderer,viewingMode:"map",scale:this.mapView.state.scale,resolution:this.mapView.state.resolution,spatialReference:this.mapView.spatialReference});if(t){if(t.symbol instanceof c)return void v.error("3D symbols are not supported with MapView");var r=this._frontObjects.get(e);r&&(r.renderingInfo=t);var i=t.renderer&&t.renderer.backgroundFillSymbol,n=this._backgroundObjects.get(e);i&&r.isPolygonMarkerSymbol?(n||((n=new h).graphic=e,this._backgroundObjects.set(e,n),this._backgroundGroup.addChild(n)),null!=t.outlineSize?n.renderingInfo={symbol:i,size:[t.outlineSize,t.outlineSize,t.outlineSize]}:n.renderingInfo={symbol:i}):!i&&n&&(this._backgroundObjects.delete(e),this._backgroundGroup.removeChild(n))}}},t.prototype._graphicsChangeHandler=function(e){for(var t=e.added,r=e.removed,i=0,n=t;i<n.length;i++){var o=n[i];this._add(o)}for(var s=0,a=r;s<a.length;s++){o=a[s];this._remove(o)}},i([u.property()],t.prototype,"container",void 0),i([u.property(),u.cast(o.ofType(n))],t.prototype,"graphics",void 0),i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"mapView",void 0),i([u.subclass("esri.views.2d.layers.support.FeaturesView2D")],t)}(u.declared(f))}.apply(null,i))||(e.exports=n)},1747:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isRefreshable=function(e){return e&&e.refresh}}.apply(null,i))||(e.exports=n)},1881:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(4),r(8),r(29),r(15),r(7),r(16),r(1)],void 0===(n=function(e,t,r,i,n,o,s,a,l,u,p){return function(e){function t(){var t=e.call(this)||this;return t._handles=new a,t.connectionError=null,t.connectionStatus="disconnected",t.filter=null,t._handles.add(u.on(t,"controller","data-received",function(e){t.emit("data-received",e)})),t}return r(t,e),t.prototype.connect=function(){return this.controller.connection.connect()},t.prototype.disconnect=function(){this.controller.connection.disconnect()},t.prototype.updateFilter=function(e){return"connected"!==this.connectionStatus?l.reject(new o("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):this.controller.updateFilter(e).then(function(e){return e}).catch(function(e){throw e})},i([p.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],t.prototype,"connectionError",void 0),i([p.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),i([p.property()],t.prototype,"controller",void 0),i([p.property({aliasOf:"controller.filter",readOnly:!0})],t.prototype,"filter",void 0),i([p.subclass("esri.views.layers.StreamLayerView")],t)}(p.declared(n,s))}.apply(null,i))||(e.exports=n)},2312:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(2),r(0),r(1),r(1463),r(1881)],void 0===(n=function(e,t,r,i,n,o,s){return function(e){function t(){return e.call(this)||this}return r(t,e),i([n.property({aliasOf:"controller.graphics",readOnly:!0})],t.prototype,"graphics",void 0),i([n.subclass("esri.views.2d.layers.StreamLayerView2D")],t)}(n.declared(s,o))}.apply(null,i))||(e.exports=n)}}]);
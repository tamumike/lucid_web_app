(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/tiling/enums":1533,"esri/views/2d/tiling/TileStrategy":1647,"esri/views/2d/layers/features/controllers":1831,"esri/views/2d/layers/FeatureLayerView2DWebGL":1946,"esri/views/2d/layers/features/tileRenderers":2330,"esri/views/2d/layers/support/FeatureLayerProxy":2331,"esri/views/2d/layers/support/util":2332})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1533:function(e,t,r){var n,i;n=[r.dj.c(e.i),t],void 0===(i=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.NO_DATA=1]="NO_DATA",e[e.READY=2]="READY",e[e.MODIFIED=3]="MODIFIED",e[e.INVALID=4]="INVALID"}(t.TileStatus||(t.TileStatus={}))}.apply(null,n))||(e.exports=i)},1647:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(12),r(1533),r(183)],void 0===(i=function(e,t,r,n,i){function o(e,t){e.delete(t)}var s=new i(0,0,0,0),l=new Map,u=[],a=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,r=this.tileIndex,i=this.tileInfoView.getTileCoverage(e.state,this.buffer);if(i){var c=i.spans,p=i.lodInfo,f=p.level,y=e.state.resolution,h=!e.stationary&&y>this._previousResolution;this._previousResolution=y,r.forEach(function(e){return e.visible=!0}),this.tiles.length=0,l.clear();var d=0,g=0;if(c.length>0)for(var v=0,_=c;v<_.length;v++)for(var I=_[v],b=I.row,m=I.colFrom,w=I.colTo,R=m;R<=w;R++){d++;var S=s.set(f,b,p.normalizeCol(R),p.getWorldForColumn(R)).id;if(r.has(S)){if((O=r.get(S)).status!==n.TileStatus.INITIALIZED&&g++,O.attached){l.set(S,O);continue}O.attached||h||this._addParentTile(S,l)}else{var O=this.acquireTile(s);this.tileIndex.set(S,O),h||this._addParentTile(S,l)}}var T=g===d;a.length=0,u.length=0,r.forEach(function(e,r){if(s.set(r),!l.has(r)){var o=t.tileInfoView.intersects(i,s);!o||!h&&T?"purge"===t.cachePolicy&&e.status!==n.TileStatus.MODIFIED&&e.status!==n.TileStatus.READY?u.push(r):(s.level>f||!o)&&u.push(r):e.attached?a.push(r):s.level>f&&u.push(r)}});for(var x=0,q=a;x<q.length;x++){S=q[x];(O=r.get(S))&&O.attached&&l.set(S,O)}for(var P=0,F=u;P<F.length;P++){S=F[P],O=r.get(S);this.releaseTile(O),o(r,S)}l.forEach(function(e){return t.tiles.push(e)}),r.forEach(function(e){l.has(e.key.id)||(e.visible=!1)}),a.length=0,u.length=0,l.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var r=e,n=null;r=this.tileInfoView.getTileParentId(r);)if(this.tileIndex.has(r)&&(n=this.tileIndex.get(r))&&n.attached){t.has(n.key.id)||t.set(n.key.id,n);break}},e}()}.apply(null,n))||(e.exports=i)},1831:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(10),r(8),r(7)],void 0===(i=function(e,t,n,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.getControllerConfiguration=function(e){var t=e.source;return e.capabilities.operations.supportsQuery?function(e){return e&&"esri.layers.graphics.sources.CSVSource"===e.declaredClass}(t)?o.resolve().then(function(){return{type:"memory",processing:e.processing&&e.processing.toWorker()||null}}):o.resolve({type:"on-demand",gdbVersion:e.gdbVersion,historicMoment:e.historicMoment&&e.historicMoment.getTime(),processing:e.processing&&e.processing.toWorker()||null}):o.reject(new i("graphicscontroller:query-capability-required","Service requires query capabilities to be used as a feature layer",{layer:e}))},t.createController=function(e,t){return("memory"===e?o.create(function(e){return r.e(55).then(function(){var t=[r(1944)];e.apply(null,t)}.bind(this)).catch(r.oe)}):o.create(function(e){return Promise.all([r.e(23),r.e(56)]).then(function(){var t=[r(1945)];e.apply(null,t)}.bind(this)).catch(r.oe)})).then(function(e){return e.default}).then(function(e){var r=t.serviceAndViewInfo,i=t.remoteClient,o=t.tileStore;return new e(n({},r,{tileStore:o,remoteClient:i}))})}}.apply(null,n))||(e.exports=i)},1946:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(0),r(52),r(27),r(57),r(18),r(8),r(7),r(16),r(1),r(35),r(145),r(101),r(60),r(490),r(1551),r(1831),r(2330),r(2331),r(476),r(1647),r(1528)],void 0===(i=function(e,t,r,n,i,o,s,l,u,a,c,p,f,y,h,d,g,v,_,I,b,m,w,R){var S=f.ensureType(d);return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._pipelineIsUpdating=!0,t.container=new g,t}return r(t,e),t.prototype.destroy=function(){this._proxy.destroy()},t.prototype.initialize=function(){var e=this,t=this._tileInfo=y.create({spatialReference:this.view.spatialReference,size:512});this._tileInfoView=new m(t),this._tileStrategy=new w({cachePolicy:"purge",acquireTile:function(t){return e._acquireTile(t)},releaseTile:function(t){return e._releaseTile(t)},tileInfoView:this._tileInfoView,buffer:0}),this._proxy=new b.default({layer:this.layer,tileInfo:t,client:{executeProcessing:function(t){var r=e.layer.processing;return r?r.process(t.featureSet,r.options)||a.reject(new u("FeatureLayer","invalid processing.process() method, returns nothing")):t.featureSet},setUpdating:function(t){e._pipelineIsUpdating=t,e.notifyChange("updating")}}}),this.addResolvingPromise(a.all([_.getControllerConfiguration(this.layer),this._proxy.when()]).then(function(e){var t=e[0];return e[1].configure({controller:t})}))},Object.defineProperty(t.prototype,"numFeatures",{get:function(){var e=0;return this.attached&&this._tileStrategy.tiles.forEach(function(t){e+=t.iconDisplayRecords?t.iconDisplayRecords.length:0}),e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"renderingConfigHash",{get:function(){if(!this.layer)return null;var e=this.layer,t=e.definitionExpression,r=e.historicMoment,n=e.outFields,i=e.renderer,o=e.labelingInfo;return JSON.stringify({definitionExpression:t,historicMoment:r,outFields:n.slice().sort(),renderer:i,labelingInfo:o})},enumerable:!0,configurable:!0}),t.prototype.highlight=function(e,t){var r,n=this;return e instanceof s?r=[e.getAttribute(this.layer.objectIdField)]:"number"==typeof e?r=[e]:l.isCollection(e)?r=e.map(function(e){return e&&e.getAttribute(n.layer.objectIdField)}).toArray():Array.isArray(e)&&e.length>0&&(r="number"==typeof e[0]?e:e.map(function(e){return e&&e.getAttribute(n.layer.objectIdField)})),(r=r.filter(function(e){return null!=e}))&&r.length&&function(e){return e&&e.highlight}(this.tileRenderer)?this.tileRenderer.highlight(r):{remove:function(){}}},t.prototype.hitTest=function(e,t){var r=this;return this.suspended||!this.tileRenderer?a.resolve(null):this.tileRenderer.hitTest(e,t).then(function(e){return 0===e.length?null:r._proxy.queryFeatures(new d({objectIds:e,outSpatialReference:r.view.spatialReference,returnGeometry:!0})).then(function(e){if(!e.features[0])return null;var t=s.fromJSON(e.features[0]);return t.layer=r.layer,t.sourceLayer=r.layer,t.geometry&&(t.geometry.spatialReference=r.view.spatialReference),t})})},t.prototype.queryFeatures=function(e){var t=this;return this.queryFeaturesJSON(e).then(function(e){var r=h.fromJSON(e);return r.features.forEach(function(e){e.layer=t.layer,e.sourceLayer=t.layer}),r})},t.prototype.queryFeaturesJSON=function(e){return this._proxy.queryFeatures(this._cleanUpQuery(e))},t.prototype.queryObjectIds=function(e){return this._proxy.queryObjectIds(this._cleanUpQuery(e))},t.prototype.queryFeatureCount=function(e){return this._proxy.queryFeatureCount(this._cleanUpQuery(e))},t.prototype.queryExtent=function(e){return this._proxy.queryExtent(this._cleanUpQuery(e)).then(function(e){return{count:e.count,extent:o.Extent.fromJSON(e.extent)}})},t.prototype.update=function(e){this.attached&&this._tileStrategy&&this.tileRenderer&&(this._tileStrategy.update(e),this._proxy.setViewState(e.state),this.notifyChange("numFeatures"),this.notifyChange("updating"))},t.prototype.attach=function(){var e=this;this.handles.add([c.init(this,"layer.processing.version",function(t){e._proxy.redraw()}),c.init(this,"renderingConfigHash",function(){var t=e._tileRendererPromise=I.createOrReuseTileRenderer(e.tileRenderer,e.layer.renderer,{layerView:e,tileInfoView:e._tileInfoView,layer:e.layer,highlightOptions:e.view.highlightOptions}).then(function(r){if(e._tileRendererPromise===t){e._tileRendererPromise=null,e.tileRenderer!==r&&(e._tileStrategy.clear(),e.tileRenderer&&(e.tileRenderer.uninstall(e.container),e.tileRenderer.destroy()),e.tileRenderer=e._proxy.client.tileRenderer=r,r&&r.install(e.container),e.requestUpdate());var n=r.getProcessorConfiguration();e.tileRenderer.needsProcessorReconfiguration(n)?(e.tileRenderer.applyConfiguration(n,!0),e._proxy.configure({processor:n}),e.requestUpdate()):e.tileRenderer.applyConfiguration(n,!1)}},function(){return e._tileRendererPromise=null})})])},t.prototype.detach=function(){this.container.removeAllChildren(),this.handles.remove(this),this._tileRendererPromise=null,this.tileRenderer&&(this.tileRenderer.uninstall(this.container),this.tileRenderer=null),this._tileStrategy&&(this._tileStrategy.destroy(),this._tileStrategy=null)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this._proxy.refresh()},t.prototype.isUpdating=function(){return null==this.tileRenderer||this._pipelineIsUpdating||this.tileRenderer.updating},t.prototype._cleanUpQuery=function(e){var t=e?S(e):new d;return t.outSpatialReference||(t.outSpatialReference=this.view.spatialReference),t},t.prototype._acquireTile=function(e){var t=this,r=this.tileRenderer.acquireTile(e);return r.once("attach",function(){t.requestUpdate()}),r},t.prototype._releaseTile=function(e){this.tileRenderer.releaseTile(e)},n([p.property()],t.prototype,"numFeatures",null),n([p.property({dependsOn:["layer.renderer","layer.outFields","layer.definitionExpression","layer.historicMoment","layer.labelingInfo"]})],t.prototype,"renderingConfigHash",null),n([p.property()],t.prototype,"tileRenderer",void 0),n([p.property({dependsOn:["tileRenderer.updating"]})],t.prototype,"updating",void 0),n([p.subclass("esri.views.2d.layers.AutoFeatureLayerView2D")],t)}(p.declared(v,R))}.apply(null,n))||(e.exports=i)},2330:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(11),r(514),r(7),r(1745)],void 0===(i=function(e,t,n,i,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.createOrReuseTileRenderer=function(e,t,l){if(e&&e.supportsRenderer(t))return o.create(function(t){return i(function(){return t(e)})});var u=l.layer,a=n("esri-webgl")&&n("esri-featurelayer-webgl")&&s.isRendererWebGLCompatible(t)&&u.capabilities.query.supportsQuantization;switch(t.type){case"class-breaks":case"simple":case"unique-value":if(a)return o.create(function(e){i(function(){return Promise.all([r.e(0),r.e(1),r.e(2),r.e(8),r.e(63)]).then(function(){var t=[r(2339)];e.apply(null,t)}.bind(this)).catch(r.oe)})}).then(function(e){return e.default}).then(function(e){return new e(l)});break;case"heatmap":return o.create(function(e){i(function(){return r.e(69).then(function(){var t=[r(2359)];e.apply(null,t)}.bind(this)).catch(r.oe)})}).then(function(e){return e.default}).then(function(e){return new e(l)})}return o.resolve(null)}}.apply(null,n))||(e.exports=i)},2331:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(2),r(0),r(10),r(4),r(119),r(7),r(255),r(516),r(253),r(1),r(2332),r.dj.m(e)],void 0===(i=function(e,t,r,n,i,o,s,l,u,a,c,p,f,y){Object.defineProperty(t,"__esModule",{value:!0});var h=function(t){function i(e){var r=t.call(this,e)||this;return r.tileRenderer=null,r.setViewState=a.throttle(r.setViewState,50,r),r}return r(i,t),i.prototype.initialize=function(){var t=this;this.addResolvingPromise(c.open(u.getAbsMid("../features/Pipeline",e,y),{client:this.client,strategy:"dedicated"}).then(function(e){return t._connection=e,t._getStartupOptions(t.layer,t.tileInfo)}).then(function(e){return function(e){return Array.isArray(e)}(e.service.source)?t._connection.invoke("startup",e,e.service.source):t._connection.invoke("startup",e)}))},i.prototype.destroy=function(){this._connection&&this._connection.close()},i.prototype.configure=function(e){return this._connection.invoke("configure",e)},i.prototype.refresh=function(){return this._connection.invoke("controller.refresh")},i.prototype.redraw=function(){return this._connection.invoke("controller.redraw")},i.prototype.setViewState=function(e){return this._connection.invoke("setViewState",e.toJSON())},i.prototype.queryFeatures=function(e){return this._connection.invoke("controller.queryFeatures",e.toJSON())},i.prototype.queryObjectIds=function(e){return this._connection.invoke("controller.queryObjectIds",e.toJSON())},i.prototype.queryFeatureCount=function(e){return this._connection.invoke("controller.queryFeatureCount",e.toJSON())},i.prototype.queryExtent=function(e){return this._connection.invoke("controller.queryExtent",e.toJSON())},i.prototype._getStartupOptions=function(e,t){var r=e.source;return function(e){return e&&"esri.layers.graphics.sources.CSVSource"===e.declaredClass}(r)?r.openPorts().then(function(r){return{service:{capabilities:e.capabilities,fields:e.fields.map(function(e){return e.toJSON()}),fullExtent:e.fullExtent.toJSON(),geometryType:f.toJSONGeometryType(e.geometryType),objectIdField:e.objectIdField,source:r},tileInfo:t.toJSON()}}):l.resolve({service:{capabilities:e.capabilities,fields:e.fields.map(function(e){return e.toJSON()}),fullExtent:e.fullExtent.toJSON(),geometryType:f.toJSONGeometryType(e.geometryType),objectIdField:e.objectIdField,source:e.url+"/"+e.layerId},tileInfo:t.toJSON()})},n([p.property({constructOnly:!0})],i.prototype,"client",void 0),n([p.property({constructOnly:!0})],i.prototype,"layer",void 0),n([p.property({constructOnly:!0})],i.prototype,"tileInfo",void 0),n([p.property()],i.prototype,"tileRenderer",void 0),n([p.subclass()],i)}(p.declared(o,s));t.default=h}.apply(null,n))||(e.exports=i)},2332:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(17)],void 0===(i=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});t.toJSONGeometryType=function(e){return n.toJSON(e)}}.apply(null,n))||(e.exports=i)}}]);
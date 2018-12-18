(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/layers/features/support/Tile":1745,"esri/views/2d/layers/features/controllers/OnDemandController":2085,"esri/views/2d/layers/features/support/DataTile":2482,"esri/views/2d/layers/features/support/DataTileFeaturesIndex":2483,"esri/core/SetPool":2484})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1745:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(514),i(122),i(72),i(524),i(138)],void 0===(n=function(e,t,i,r,n,s,o){function a(e,t){var i=e.bounds,r=t.bounds;return e.key.id!==t.key.id&&e.key.world===t.key.world&&i[0]<=r[0]&&i[1]<=r[1]&&i[2]>=r[2]&&i[3]>=r[3]}Object.defineProperty(t,"__esModule",{value:!0}),t.isParentOf=a,t.isChildOf=function(e,t){return a(t,e)};var u=function(){function e(e,t){this.bounds=n.create(),this.key=new o(0,0,0,0),this.objectIds=new i.default,this.key.set(t);var r=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=r.resolution,this.scale=r.scale,this.level=r.level,this.needsClear=!0}return Object.defineProperty(e.prototype,"id",{get:function(){return this.key.id},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new e(this.tileInfoView,this.id)},e.prototype.createChildTiles=function(){for(var t=this.key.getChildKeys(),i=r.acquire(),n=0;n<t.length;n++)i[n]=new e(this.tileInfoView,t[n]);return i},e.prototype.getQuantizationParameters=function(){return s.default.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})},e}();t.Tile=u,t.default=u}.apply(null,r))||(e.exports=n)},2085:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(10),i(514),i(30),i(8),i(19),i(9),i(7),i(554),i(1),i(521),i(1861),i(1884),i(555),i(542),i(524),i(52),i(1579),i(1958),i(2482),i(2483),i(1745),i(2083),i(544)],void 0===(n=function(e,t,i,r,n,s,o,a,u,l,d,c,h,p,f,y,_,g,v,T,m,I,x,b,F,w,Q){Object.defineProperty(t,"__esModule",{value:!0});var E=l.getLogger("esri.views.2d.layers.features.controllers.OnDemandController"),j=u("esri-featurelayer-webgl"),q=u("esri-mobile"),O={maxDrillLevel:j&&"object"==typeof j&&null!=j.maxDrillLevel?j.maxDrillLevel:q?1:4,maxRecordCountFactor:j&&"object"==typeof j&&null!=j.maxRecordCountFactor?j.maxRecordCountFactor:q?1:3,enablePBFQuery:!j||"object"!=typeof j||null==j.enablePBFQuery||j.enablePBFQuery},P=new s.default,B=[],k=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="on-demand",t._queryInfoHash=null,t._processingInMainThread=!1,t._dataTileIndex=new b.default,t._editsQueue=new c({concurrency:1,ordered:!0,process:function(e){return t._processEditsEvent(e)}}),t}return i(t,e),t.prototype.initialize=function(){var e=this;this._fetchQueue=new Q({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t){return e._fetchTile(t)}}),this._updateQueue=new w.default({tileInfoView:this.tileStore.tileScheme,process:function(t,i){return e._updateTile(t,i)}}),this.handles.add(this.watch("processor",this._switchProcessor.bind(this)))},t.prototype.destroy=function(){this._fetchQueue.clear(),this._updateQueue.clear(),this.queryEngine&&(this.queryEngine.destroy(),this._set("queryEngine",null))},Object.defineProperty(t.prototype,"processing",{get:function(){return _.fromWorker(this.configuration.processing)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._fetchQueue.updating||this._updateQueue.updating},enumerable:!0,configurable:!0}),t.prototype.onEdits=function(e){var t=this;this._fetchQueue.pause(),this._fetchQueue.reset(),this._editsQueue.push(e).then(function(){0===t._editsQueue.length&&t._fetchQueue.resume()})},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(T.fromJSON(e))},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(T.fromJSON(e))},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(T.fromJSON(e))},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(T.fromJSON(e))},t.prototype.redraw=function(){this._updateQueue.pause(),this._manageTiles(this.tileStore.tiles),this._updateQueue.resume()},t.prototype.refresh=function(){if(this.queryEngine&&this.queryEngine.destroy(),this.spatialIndex&&this.spatialIndex.clear(),this._dataTileIndex.spatialIndex=null,this._dataTileIndex.clear(),this._editsQueue.pause(),this._fetchQueue.pause(),this._updateQueue.pause(),this._editsQueue.clear(),this._fetchQueue.reset(),this._updateQueue.clear(),this.processor){var e=this.processor.queryInfo,t=e.definitionExpression,i=e.gdbVersion,r=e.historicMoment;this._set("spatialIndex",new f.default({geometryType:this.service.geometryType,hasM:!1,hasZ:!1})),this._set("queryEngine",new y.default({definitionExpression:t,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,gdbVersion:i,historicMoment:null!=r&&new Date(r),spatialIndex:this.spatialIndex})),this._dataTileIndex.spatialIndex=this.spatialIndex,this._dataTileIndex.clear(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),this._editsQueue.resume(),this._updateQueue.resume()}},t.prototype.setViewState=function(e){this._fetchQueue.state=e,this._updateQueue.state=e},t.prototype.onTileUpdate=function(e){this.queryEngine&&this._manageTiles(e.added,e.removed)},t.prototype._manageTiles=function(e,t){void 0===t&&(t=null);for(var i=this._dataTileIndex,r=this._fetchQueue,n=this._updateQueue,s="esriGeometryPoint"===this.service.geometryType,o=this,a=0,u=e;a<u.length;a++){!function(e){var t=i.get(e.id);t?(t.displayTile=e,s?i.forEach(function(i){F.isChildOf(i,t)&&(i.displayTile=e)}):t.done=!1):((t=new x.default).tile=e.clone(),t.displayTile=e,i.add(t)),o._processDataTile(t)}(c=u[a])}if(t)for(var l=0,d=t;l<d.length;l++){var c=d[l];P.add(c),n.cancel(c.id)}i.forEach(function(e){P.has(e.displayTile)&&B.push(e)});for(var h=0,p=B;h<p.length;h++){var f=p[h];r.has(f.id)&&r.getPromise(f.id).cancel(),i.delete(f)}B.length=0,P.clear()},t.prototype._processDataTile=function(e){var t=this,i=e.displayTile,r=e.key,n=this._dataTileIndex,s=this._fetchQueue,o=r.id,u=this._queryInfoHash,l=r.level-i.key.level>=O.maxDrillLevel;if(n.add(e),e.done||s.has(o)){if(e.queryInfoHash!==u||e.returnExceeded!==l)if(e.done)e.done=!1;else{if(!s.isOngoing(o))return e.queryInfoHash=u,void(e.returnExceeded=l);s.getPromise(o).cancel()}}else e.queryInfoHash=u,e.returnExceeded=l;e.done?this._invalidateTile(e.displayTile):s.has(o)||s.push(e).then(function(i){return t._handleResponse(e,i)}).catch(function(t){"cancel"!==t.dojoType&&E.error(new a("mapview-controller","Encountered an error when handling tile response",t)),e.done=!0})},t.prototype._handleResponse=function(e,t){if(e.done=!0,p.hydrateOptimizedFeatureSet(t),t.exceededTransferLimit)if(e.returnExceeded)this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);else for(var i=0,r=e.tile.createChildTiles();i<r.length;i++){var n=r[i],s=new x.default;s.tile=n,s.displayTile=e.displayTile,this._processDataTile(s)}else this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);this._invalidateTile(e.tile)},t.prototype._deleteChildrenDataTiles=function(e){this._dataTileIndex.forEach(function(t){F.isChildOf(t,e)&&B.push(t)});for(var t=0,i=B;t<i.length;t++){var r=i[t];this._fetchQueue.has(r.id)&&this._fetchQueue.getPromise(r.id).cancel(),this._dataTileIndex.delete(r)}B.length=0},t.prototype._fetchTile=function(e){var t=this,i=this._createQuery(e.displayTile,e.tile,e.returnExceeded),r=this.service.source;return O.enablePBFQuery&&this.service.capabilities.query.supportsFormatPBF?g.executeQueryPBF(r,i,{type:"optimized"}).then(function(e){return e.data}):g.executeQuery(r,i).then(function(e){return p.convertFromFeatureSet(e.data,t.service.objectIdField)})},t.prototype._invalidateTile=function(e){for(var t=this._updateQueue,i=0,r=this.tileStore.intersections(e,this.processor.queryInfo.pixelBuffer);i<r.length;i++){var n=r[i].tile;t.push(n.id,n.updateTimestamp)}},t.prototype._updateTile=function(e,t){var i=this,r=this.tileStore.get(e),n=this.processor.queryInfo,s=n.returnCentroid,o=n.returnGeometry,a=n.pixelBuffer,u=this.queryEngine.executeTileQuery(r,{pixelBuffer:a,returnGeometry:o,returnCentroid:s}),l=u.features,d=u.objectIds,c={features:l,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:{originPosition:"upperLeft",scale:[r.resolution,r.resolution],translate:[r.bounds[0],r.bounds[3]]}};return this._applyProcessing(c).catch(function(e){return e&&"cancel"!==e.dojoType&&E.error("updating-tile",e),c}).then(function(e){var n=[],s=!0;return i._dataTileIndex.forEach(function(e){r.id!==e.id&&F.isChildOf(e,r)&&s&&!e.done&&(s=!1)}),s&&r&&r.objectIds.forEach(function(e){d.has(e)||n.push(e)}),d.forEach(function(e){r.objectIds.add(e)}),r.updateTimestamp=t,i.processor.onTileData(r,{addOrUpdate:e.features,remove:n,transformParams:m.getTransformParams(e)}).catch(function(e){e&&"cancel"!==e.dojoType&&E.error("updating-tile",e)})})},t.prototype._processEditsEvent=function(e){var t=this;return d.create(function(i,r){var n=function(e){return e.objectId},s=e.deletedFeatures.map(n),o=t._dataTileIndex.deleteFeaturesById(s),a=e.addedFeatures.concat(e.updatedFeatures).map(n);if(a.length){var u=t.service.source,l=t._createObjectIdsQuery(a);g.executeQuery(u,l).then(function(e){var i=e.data;if(i&&i.features&&i.features.length){var r=p.convertFromFeatureSet(i,t.service.objectIdField).features;o.push.apply(o,t._dataTileIndex.addOrUpdateFeatures(r));for(var n=0,s=o;n<s.length;n++){var a=s[n];t._invalidateTile(a.tile)}}}).then(i,i)}else{for(var d=0,c=o;d<c.length;d++){var h=c[d];t._invalidateTile(h.tile)}i()}})},t.prototype._switchProcessor=function(e,t){var i=e.queryInfo,r=i.definitionExpression,n=i.gdbVersion,s=i.historicMoment,o=this._createQueryInfoHash(e);this._queryInfoHash!==o&&(this._queryInfoHash=o,this.queryEngine&&this.queryEngine.destroy(),this.spatialIndex&&this.spatialIndex.clear(),this._set("spatialIndex",new f.default({geometryType:this.service.geometryType,hasM:!1,hasZ:!1})),this._set("queryEngine",new y.default({definitionExpression:r,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,gdbVersion:n,historicMoment:null!=s&&new Date(s),spatialIndex:this.spatialIndex})),this._dataTileIndex.spatialIndex=this.spatialIndex,this._dataTileIndex.forEach(function(e){e.done=!1})),this._editsQueue.pause(),this._fetchQueue.pause(),this._updateQueue.pause(),this._editsQueue.clear(),this._fetchQueue.reset(),this._updateQueue.clear(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),this._editsQueue.resume(),this._updateQueue.resume()},t.prototype._createQuery=function(e,t,i){void 0===i&&(i=!0);var r=this.service.geometryType,n=this._createDefaultQuery(),s="esriGeometryPoint"===this.service.geometryType?t:e;return n.maxRecordCountFactor=O.maxRecordCountFactor,n.resultType="tile",n.returnExceededLimitFeatures=i,n.geometry=new o.Extent({xmin:t.bounds[0],ymin:t.bounds[1],xmax:t.bounds[2],ymax:t.bounds[3],spatialReference:this.spatialReference}),this.service.capabilities.query.supportsQuantization?(n.quantizationParameters=new v.default({mode:"view",originPosition:"upper-left",tolerance:s.resolution,extent:new o.Extent({xmin:s.bounds[0],ymin:s.bounds[1],xmax:s.bounds[2],ymax:s.bounds[3],spatialReference:this.spatialReference})}),"esriGeometryPolyline"===r&&(n.maxAllowableOffset=s.resolution)):"esriGeometryPolyline"!==r&&"esriGeometryPolygon"!==r||(n.maxAllowableOffset=s.resolution),n},t.prototype._createObjectIdsQuery=function(e){var t=this._createDefaultQuery();return t.objectIds=e,t},t.prototype._createDefaultQuery=function(){var e=this,t=this.processor.queryInfo,i=new T;i.outSpatialReference=this.spatialReference;var r=t.outFields,n=t.orderByFields;return this.processing&&(r=r&&r.filter(function(t){return!e.processing.getField(t)}),n=n&&n.filter(function(t){return!e.processing.getField(t)})),r=r.length/this.service.fields.length>=.75?["*"]:r,i.gdbVersion=t.gdbVersion,i.historicMoment=null!=t.historicMoment?new Date(t.historicMoment):null,i.outFields=r,i.where=t.definitionExpression||"1=1",i.returnGeometry=!0,i.returnCentroid=t.returnCentroid,i.orderByFields=n,i},t.prototype._applyProcessing=function(e){var t=this.processing;if(!t)return d.resolve(e);if(this._processingInMainThread)return this.remoteClient.invoke("executeProcessing",{featureSet:e});try{var i=t.process(e,t.options);return i?"then"in i?i:d.resolve(i):d.reject(new a("FeatureLayer","invalid processing.process() method, returns nothing"))}catch(t){return this._processingInMainThread=!0,this.remoteClient.invoke("executeProcessing",{featureSet:e})}},t.prototype._createQueryInfoHash=function(e){var t=this,i=e.queryInfo,r=i.orderByFields,n=i.outFields,s=e.queryInfo,o=s.definitionExpression,a=s.gdbVersion,u=s.historicMoment;return this.processing&&(n=n&&n.filter(function(e){return!t.processing.getField(e)}),r=r&&r.filter(function(e){return!t.processing.getField(e)})),n&&n.sort(),r&&r.sort(),JSON.stringify({definitionExpression:o,outFields:n.length/this.service.fields.length>=.75?["*"]:n,orderByFields:r,gdbVersion:a,historicMoment:u})},r([h.property()],t.prototype,"_fetchQueue",void 0),r([h.property()],t.prototype,"_updateQueue",void 0),r([h.property()],t.prototype,"configuration",void 0),r([h.property({readOnly:!0,dependsOn:["configuration"]})],t.prototype,"processing",null),r([h.property({readOnly:!0})],t.prototype,"queryEngine",void 0),r([h.property({readOnly:!0})],t.prototype,"spatialIndex",void 0),r([h.property({dependsOn:["_fetchQueue.updating","_updateQueue.updating"]})],t.prototype,"updating",null),r([h.subclass()],t)}(h.declared(I.default));t.default=k}.apply(null,r))||(e.exports=n)},2482:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.displayTile=null,this.tile=null,this.done=!1,this.queryInfoHash=null,this.returnExceeded=!1}return Object.defineProperty(e.prototype,"key",{get:function(){return this.tile.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.tile.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this.tile.bounds},enumerable:!0,configurable:!0}),e}();t.default=i}.apply(null,r))||(e.exports=n)},2483:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1628),i(514),i(2484),i(1861),i(1745)],void 0===(n=function(e,t,i,r,n,s,o){Object.defineProperty(t,"__esModule",{value:!0});var a=[],u=new r.default,l=function(){function e(){this._tileById=new i.default,this._tilesToFeatures=new i.default,this._featureToTiles=new i.default}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,n.default.acquire()),this._tilesToFeatures.forEach(function(e,r){i!==r&&(o.isParentOf(i,r)?e.forEach(function(e){t._link(i,e)}):o.isChildOf(i,r)&&t.spatialIndex.forEachFeatureInBounds(i.bounds,function(r){e.has(r.objectId)&&t._link(i,r.objectId)}))})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return n.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return n.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,i=this.get(e.id);a.length=0,this._tilesToFeatures.get(i).forEach(function(e){var r=t._featureToTiles.get(e);r.has(i)&&1===r.size?a.push(e):t._unlink(i,e)});for(var r=0,n=a;r<n.length;r++){var s=n[r];this._unlink(i,s)}this.spatialIndex.removeManyById(a),this._tilesToFeatures.delete(i),this._tileById.delete(i.id),a.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,r=this.get(e.id);this._tilesToFeatures.has(r)||(this._tileById.set(r.id,r),this._tilesToFeatures.set(r,n.default.acquire()));for(var s=0,o=t;s<o.length;s++){var l=o[s];u.add(l.objectId)}a.length=0,this._tilesToFeatures.get(r).forEach(function(e){if(!u.has(e)){var t=i._featureToTiles.get(e);t.has(r)&&1===t.size?a.push(e):i._unlink(r,e)}});for(var d=0,c=a;d<c.length;d++){var h=c[d];this._unlink(r,h)}this.spatialIndex.removeManyById(a),this.spatialIndex.addMany(t),u.forEach(function(e){i._link(r,e)}),u.clear(),a.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,i=new r.default,n=new s.default({geometryType:this.spatialIndex.geometryType,hasM:this.spatialIndex.hasM,hasZ:this.spatialIndex.hasZ}),o=0,a=this.deleteFeaturesById(e.map(function(e){return e.objectId}));o<a.length;o++){var u=a[o];i.add(u)}n.addMany(e),this._tileById.forEach(function(e){n.forEachFeatureInBounds(e.bounds,function(r){t._link(e,r.objectId),i.add(e)})}),this.spatialIndex.addMany(e);var l=[];return i.forEach(function(e){return l.push(e)}),l},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new r.default,s=this,o=0,a=e;o<a.length;o++){!function(e){var r=s._featureToTiles.get(e);r&&(r.forEach(function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)}),n.default.release(r),s._featureToTiles.delete(e))}(a[o])}this.spatialIndex.removeManyById(e);var u=[];return i.forEach(function(e){return u.push(e)}),u},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,n.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(n.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=l}.apply(null,r))||(e.exports=n)},2484:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(514)],void 0===(n=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new i.default}return e.prototype.acquire=function(){if(0===this._pool.length)return new i.default;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return n.acquire()},e.release=function(e){return n.release(e)},e}();t.default=r;var n=new r}.apply(null,r))||(e.exports=n)}}]);
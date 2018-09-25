(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/LayerView":1325,"esri/views/layers/RefreshableLayerView":1338,"esri/views/2d/tiling/enums":1347,"esri/views/2d/layers/LayerView2D":1364,"esri/views/2d/support/Evented":1379,"esri/views/2d/tiling/TileQueue":1449,"esri/core/QueueProcessor":1450,"esri/core/Queue":1451,"esri/views/2d/tiling/TileStrategy":1461,"esri/views/2d/engine/BitmapSource":1464,"esri/views/2d/engine/Canvas2DContainer":1465,"esri/views/2d/engine/Bitmap":1466,"esri/views/2d/viewStateUtils":1473,"esri/views/2d/layers/TiledLayerView2D":1500,"esri/views/2d/engine/BitmapContainer":1536,"esri/views/2d/tiling":1547,"esri/views/2d/engine/Tiled":1619,"esri/views/2d/engine/BitmapTile":1676})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1325:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(5),i(41),i(19),i(132),i(7),i(106),i(8),i(1)],void 0===(n=function(e,t,i,r,n,s,o,a,u,h,l,c){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handles=new o,t.layer=null,t.parent=null,t.view=null,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return u.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),l.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([c.property()],t.prototype,"layer",void 0),r([c.property()],t.prototype,"parent",void 0),r([c.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([c.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([c.property()],t.prototype,"view",void 0),r([c.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([c.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([c.subclass("esri.views.layers.LayerView")],t)}(c.declared(n,s,a,h))}.apply(null,r))||(e.exports=n)},1338:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(5),i(1)],void 0===(n=function(e,t,i,r,n,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([s.property()],t.prototype,"layer",void 0),r([s.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([s.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([s.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1347:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.NO_DATA=1]="NO_DATA",e[e.READY=2]="READY",e[e.MODIFIED=3]="MODIFIED",e[e.INVALID=4]="INVALID"}(t.TileStatus||(t.TileStatus={}))}.apply(null,r))||(e.exports=n)},1364:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(0),i(17),i(1),i(1325)],void 0===(n=function(e,t,i,r,n,s,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()}),n.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.isRendering()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return this.attached&&(this.moving||this.container.renderRequested)},t.prototype.canResume=function(){var e=this.inherited(arguments),t=this.layer;if(e&&null!=t.minScale&&null!=t.minScale){var i=this.view.scale,r=t.minScale,n=t.maxScale,s=!r,o=!n;!s&&i<=r&&(s=!0),!o&&i>=n&&(o=!0),e=s&&o}return e},r([s.property()],t.prototype,"attached",void 0),r([s.property()],t.prototype,"container",void 0),r([s.property()],t.prototype,"moving",void 0),r([s.property({dependsOn:["moving"]})],t.prototype,"rendering",null),r([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([s.property()],t.prototype,"updateRequested",void 0),r([s.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([s.property()],t.prototype,"view",void 0),r([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(o))}.apply(null,r))||(e.exports=n)},1379:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this._listeners={}}return e.prototype.on=function(e,t){var i=this;null==this._listeners[e]&&(this._listeners[e]=new Map);var r={};return this._listeners[e].set(r,t),{remove:function(){return i._listeners[e].delete(r)}}},e.prototype.once=function(e,t){var i=this.on(e,function(e){i.remove(),t(e)});return i},e.prototype.emit=function(e,t){this.hasEventListener(e)&&this._listeners[e].forEach(function(e){return e(t)})},e.prototype.hasEventListener=function(e){return null!=this._listeners[e]&&this._listeners[e].size>0},e}();t.default=i}.apply(null,r))||(e.exports=n)},1449:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1450),i(92)],void 0===(n=function(e,t,i,r){var n=new Set,s=[],o=new Map,a=[0,0];return function(){function e(e){var t=this;this._keysToRequests=new Map,this.tileInfoView=null;var r=e.strategy&&"scale-first"!==e.strategy?this._peekByCenterFirst.bind(this):this._peekByScaleFirst.bind(this);this.tileInfoView=e.tileInfoView,e.tileServers&&e.tileServers.length>0?this._queues=e.tileServers.map(function(n){return new i({concurrency:e.concurrency||6,process:function(i){var r=t._keysToRequests.get(i);return e.process(r,n)},peeker:r})}):this._queues=[new i({concurrency:e.concurrency||6,process:function(i){var r=t._keysToRequests.get(i);return e.process(r)},peeker:r})]}return Object.defineProperty(e.prototype,"length",{get:function(){return this._queues.reduce(function(e,t){return e+t.length},0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onGoingCount",{get:function(){return this._keysToRequests.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].clear();this._keysToRequests.clear()},e.prototype.find=function(e,t){for(var i=this,r=0,n=this._queues;r<n.length;r++){var s=n[r].find(function(t){return e(i._keysToRequests.get(t).key)});if(s)return s}},e.prototype.get=function(e){for(var t="string"==typeof e?e:e.id,i=0,r=this._queues;i<r.length;i++){var n=r[i].get(t);if(n)return n}},e.prototype.getRequest=function(e){var t="string"==typeof e?e:e.id;return this._keysToRequests.get(t)},e.prototype.has=function(e){return"string"==typeof e?this._keysToRequests.has(e):this._keysToRequests.has(e.id)},e.prototype.isOngoing=function(e){var t="string"==typeof e?e:e.id;return this.has(t)&&this._queues.some(function(e){return e.isOngoing(t)})},e.prototype.pause=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].pause()},e.prototype.push=function(e){var t=this,i=e.key.id;if(this.has(i))return this.get(i);var r=this._queues[e.key.row%this._queues.length].push(i),n=function(){return t._keysToRequests.delete(i)};return this._keysToRequests.set(i,e),r.then(n,n),r},e.prototype.reset=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].reset()},e.prototype.resume=function(){for(var e=0,t=this._queues;e<t.length;e++)t[e].resume()},e.prototype._peekByScaleFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,i=Number.NEGATIVE_INFINITY,r=Number.POSITIVE_INFINITY,a=0,u=e;a<u.length;a++){var h=u[a],l=this._keysToRequests.get(h),c=this.tileInfoView.getTileScale(l.key);o.has(c)||(o.set(c,[]),i=Math.max(c,i),r=Math.min(c,r)),o.get(c).push(l.key),n.add(c)}var p=this.state.scale;o.has(p)||(function(e,t){e.length=0,t.forEach(function(t){return e.push(t)})}(s,n),s.sort(),p=s.reduce(function(e,t,i,r){return Math.abs(t-p)<Math.abs(e-p)?t:e},s[0])),p=Math.min(p,i),p=Math.max(p,r);var d=o.get(p),f=t.getClosestInfoForScale(p),y=f.getColumnForX(this.state.center[0]),v=f.getRowForY(this.state.center[1]);return d.sort(function(e,t){var i=f.denormalizeCol(e.col,e.world),r=f.denormalizeCol(t.col,t.world);return Math.sqrt((y-i)*(y-i)+(v-e.row)*(v-e.row))-Math.sqrt((y-r)*(y-r)+(v-t.row)*(v-t.row))}),n.clear(),o.clear(),d[0].id},e.prototype._peekByCenterFirst=function(e){if(!this.state)return e[0];for(var t=this.tileInfoView,i=this.state.center,n=Number.POSITIVE_INFINITY,s=null,o=0,u=e;o<u.length;o++){var h=u[o],l=this._keysToRequests.get(h);t.getTileCoords(a,l.key);var c=r.distance(a,i);c<n&&(n=c,s=l.key)}return s.id},e}()}.apply(null,r))||(e.exports=n)},1450:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(1451),i(53)],void 0===(n=function(e,t,i,r,n){return function(){function e(e){this._apiPromises=new Map,this._processingItems=new Map,this._isPaused=!1,this._scheduledNextHandle=null,this.concurrency=1,this.ordered=!1,e.concurrency&&(this.concurrency=e.concurrency),this.ordered=!!e.ordered,this._queue=new r(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._processingItems.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._processingItems.forEach(function(t){return e.push(t.resultPromise)}),this._processingItems.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(t){return e.push(t)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._cancelNext()},e.prototype.find=function(e,t){var i=this,r=void 0;return this._apiPromises.forEach(function(n,s){e.call(t,s)&&(r=i._apiPromises.get(s).promise)}),r},e.prototype.get=function(e){var t=this._apiPromises.get(e);return t&&t.promise||void 0},e.prototype.isOngoing=function(e){return this._processingItems.has(e)},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},e.prototype.push=function(e){var t=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var r=new i(function(i){var r=t._processingItems.get(e);r?r.resultPromise.cancel(i):(t._remove(e),t._scheduleNext())});return this._add(e,r),this._scheduleNext(),r.promise},e.prototype.reset=function(){var e=[];this._processingItems.forEach(function(t){return e.push(t)}),this._processingItems.clear();for(var t=0,i=e;t<i.length;t++){var r=i[t];r.resultPromise.isFulfilled()?this._processReset(r):(r.isReset=!0,r.resultPromise.cancel())}},e.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext())},e.prototype._scheduleNext=function(){var e=this;this._isPaused||this._scheduledNextHandle||(this._scheduledNextHandle=n.schedule(function(){e._scheduledNextHandle=null,e._next()}))},e.prototype._next=function(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())},e.prototype._processResult=function(e,t){this._remove(e.item),this._scheduleNext(),e.dfd.resolve(t)},e.prototype._processError=function(e,t){e.isReset?this._processReset(e):(this._remove(e.item),this._scheduleNext(),e.dfd.reject(t))},e.prototype._processReset=function(e){this._remove(e.item),this._add(e.item,e.dfd),this._scheduleNext()},e.prototype._processOrdered=function(e,t){var i=this,r=!1;if(e.isReset)this._processReset(e);else{e.result=t,this._itemsToProcess||(this._itemsToProcess=[]),this._processingItems.forEach(function(e){r||(e.result?i._itemsToProcess.push(e):r=!0)});for(var n=0,s=this._itemsToProcess;n<s.length;n++){var o=s[n];!1===o.result.ok?this._processError(o,o.result.error):this._processResult(o,o.result.value)}this._itemsToProcess.length=0}},e.prototype._process=function(e){var t=this;if(null!=e){var i=this._apiPromises.get(e),r=this.process(e);if(function(e){return e&&"function"==typeof e.then}(r)){var n={item:e,resultPromise:r,result:null,dfd:i,isReset:!1};this._processingItems.set(e,n),this.ordered?r.then(function(e){return t._processOrdered(n,{ok:!0,value:e})},function(e){return t._processOrdered(n,{ok:!1,error:e})}):r.then(function(e){return t._processResult(n,e)},function(e){return t._processError(n,e)})}else i.resolve(r),this._remove(e)}},e.prototype._add=function(e,t){this._apiPromises.set(e,t),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises.delete(e),this._processingItems.delete(e)},e.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},e}()}.apply(null,r))||(e.exports=n)},1451:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){return function(){function e(e){this._items=[],this._itemSet=new Set,this._peeker=function(e){return e[0]},this._length=0,e&&e.peeker&&(this._peeker=e.peeker)}return Object.defineProperty(e.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},e.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)},e.prototype.push=function(e){this.contains(e)||this._add(e)},e.prototype.contains=function(e){return this._length>0&&this._itemSet.has(e)},e.prototype.pop=function(){if(0!==this._length){var e=this.peek();return this._remove(e),e}},e.prototype.remove=function(e){this.contains(e)&&this._remove(e)},e.prototype._add=function(e){this._items.push(e),this._itemSet.add(e),this._length++},e.prototype._remove=function(e){this._itemSet.delete(e),this._items.splice(this._items.indexOf(e),1),this._length--},e}()}.apply(null,r))||(e.exports=n)},1461:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(1347),i(169)],void 0===(n=function(e,t,i,r,n){function s(e,t){e.delete(t)}var o=new n(0,0,0,0),a=new Map,u=[],h=[];return function(){function e(e){this._previousResolution=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.cachePolicy&&(this.cachePolicy=e.cachePolicy),null!=e.buffer&&(this.buffer=e.buffer)}return e.prototype.destroy=function(){this.tileIndex.clear()},e.prototype.update=function(e){var t=this,i=this.tileIndex,n=this.tileInfoView.getTileCoverage(e.state,this.buffer);if(n){var l=n.spans,c=n.lodInfo,p=c.level,d=e.state.resolution,f=!e.stationary&&d>this._previousResolution;this._previousResolution=d,i.forEach(function(e){return e.visible=!0}),this.tiles.length=0,a.clear();var y=0,v=0;if(l.length>0)for(var g=0,_=l;g<_.length;g++)for(var m=_[g],w=m.row,I=m.colFrom,R=m.colTo,x=I;x<=R;x++){y++;var b=o.set(p,w,c.normalizeCol(x),c.getWorldForColumn(x)).id;if(i.has(b)){if((T=i.get(b)).status!==r.TileStatus.INITIALIZED&&v++,T.attached){a.set(b,T);continue}T.attached||f||this._addParentTile(b,a)}else{var T=this.acquireTile(o);this.tileIndex.set(b,T),f||this._addParentTile(b,a)}}var q=v===y;h.length=0,u.length=0,i.forEach(function(e,i){if(o.set(i),!a.has(i)){var s=t.tileInfoView.intersects(n,o);!s||!f&&q?"purge"===t.cachePolicy&&e.status!==r.TileStatus.MODIFIED&&e.status!==r.TileStatus.READY?u.push(i):(o.level>p||!s)&&u.push(i):e.attached?h.push(i):o.level>p&&u.push(i)}});for(var P=0,M=h;P<M.length;P++){b=M[P];(T=i.get(b))&&T.attached&&a.set(b,T)}for(var C=0,k=u;C<k.length;C++){b=k[C],T=i.get(b);this.releaseTile(T),s(i,b)}a.forEach(function(e){return t.tiles.push(e)}),i.forEach(function(e){a.has(e.key.id)||(e.visible=!1)}),h.length=0,u.length=0,a.clear()}},e.prototype.clear=function(){var e=this,t=this.tileIndex;t.forEach(function(t){e.releaseTile(t)}),t.clear()},e.prototype._addParentTile=function(e,t){for(var i=e,r=null;i=this.tileInfoView.getTileParentId(i);)if(this.tileIndex.has(i)&&(r=this.tileIndex.get(i))&&r.attached){t.has(r.key.id)||t.set(r.key.id,r);break}},e}()}.apply(null,r))||(e.exports=n)},1464:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(91),i(1379)],void 0===(n=function(e,t,i,r,n){function s(e){return e&&"render"in e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t){var i=e.call(this)||this;return i._height=0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._width=0,i.x=0,i.y=0,i.data=t,i}return i(t,e),t.prototype.release=function(){this.data=null},Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(e){this._data=e,this._width=this._height=0,e&&(s(e)||(e instanceof HTMLImageElement?(this._width=e.naturalWidth,this._height=e.naturalHeight):e.width>0&&e.height>0&&(this._width=e.width,this._height=e.height)))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return s(this._data)?this._data.height:this._height},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"ready",{get:function(){return s(this._data)?this._data.width>0&&this._data.height>0:this._width>0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return s(this.data)?this._data.width:this._width},enumerable:!0,configurable:!0}),t.prototype.draw=function(e,t,i,r,n,o,a,u,h){this.ready&&(s(this._data)?this._data.render(e,t,i,r,n,o,a,u,h):function(e){return e&&!("render"in e)}(this._data)&&r&&n&&u&&h&&e.drawImage(this._data,t,i,r,n,o,a,u,h))},t.pool=new r(t,!0),t}(n.default);t.default=o}.apply(null,r))||(e.exports=n)},1465:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(8),i(463),i(171),i(457)],void 0===(n=function(e,t,i,r,n,s,o){var a={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenRenderParameters={context:null,pixelRatio:1,state:new n,stationary:!0},t.hidpi=!1,t}return i(t,e),t.prototype.createElement=function(){var e=document.createElement("canvas");return e.setAttribute("class","esri-display-object"),e},t.prototype.setElement=function(e){this.element=e},t.prototype.takeScreenshot=function(e){void 0===e&&(e={});var t=e.pixelRatio||1,i={context:null,pixelRatio:t,state:new n,stationary:!0};i.opacity=this._childrenRenderParameters.opacity,i.state.copy(this._childrenRenderParameters.state);var s=Math.round(t*i.state.width),u=Math.round(t*i.state.height),h={x:0,y:0,width:s,height:u},l={x:0,y:0,width:s,height:u},c=e.area;if(c&&(h.x=Math.round(t*c.x),h.y=Math.round(t*c.y),h.width=Math.round(t*c.width),h.height=Math.round(t*c.height)),void 0!==e.width&&void 0!==e.height){var p=e.width/e.height;if(h.height*p<h.width){var d=h.height*p;h.x+=Math.floor((h.width-d)/2),h.width=Math.floor(d)}else{var f=h.width/p;h.y+=Math.floor((h.height-f)/2),h.height=Math.floor(f)}l.width=e.width,l.height=e.height}else l.width=h.width,l.height=h.height;var y,v=document.createElement("canvas"),g=new Uint8Array(h.width*h.height*4);if(v.width=l.width,v.height=l.height,i.context=v.getContext("2d"),this.beforeRenderChildren(i,i),void 0!==e.rotation&&null!==e.rotation){var _=i.state,m=_.clone();m.viewpoint.rotation=e.rotation,i.state=m,this.renderChildren(i),i.state=_}else this.renderChildren(i);this.afterRenderChildren(i,i);try{y=i.context.getImageData(l.x,l.y,l.width,l.height)}catch(e){return r.reject(e)}0===h.x&&0===h.y&&h.width===s&&h.height===u&&0===l.x&&0===l.y&&l.width===s&&l.height===u||o.resampleHermite(g,h.width,h.height,y.data,l.width,l.height,!0),i.context.putImageData(y,l.x,l.y);var w=a[e.format?e.format.toLowerCase():"png"],I={dataURL:v.toDataURL(w,null!=e.quality?e.quality/100:1),x:l.x,y:l.y,width:l.width,height:l.height};return e.returnByteBuffer&&(I.data=g),r.resolve(I)},t.prototype.doRender=function(t){var i=this.element,r=i.style;if(this.visible){var n=t.state,s=t.pixelRatio,o=n.width,a=n.height;i.width=o*(this.hidpi?s:1),i.height=a*(this.hidpi?s:1),r.display="block",r.opacity=""+Math.min(this.opacity,this.parent.opacity),r.width=o+"px",r.height=a+"px",e.prototype.doRender.call(this,t)}else r.display="none"},t.prototype.prepareChildrenRenderParameters=function(e){var t=this._childrenRenderParameters;return t.context=this.element.getContext("2d"),t.pixelRatio=e.pixelRatio,t.state.copy(e.state),t.state.pixelRatio=this.hidpi?e.pixelRatio:1,t.stationary=e.stationary,t},t.prototype.beforeRenderChildren=function(e,t){var i=t.context,r=t.state;if(i.save(),r.spatialReference.isWrappable){var n=r.width,s=r.height,o=r.rotation,a=r.pixelRatio,u=this.hidpi?a:1,h=o*Math.PI/180,l=Math.abs(Math.cos(h)),c=Math.abs(Math.sin(h)),p=Math.round(n*u*l+s*u*c),d=r.worldScreenWidth*u;if(d<p){var f=n*u*.5,y=s*u*.5;h&&(i.translate(f,y),i.rotate(h),i.translate(-f,-y)),i.beginPath(),i.rect(f-.5*d,y-.5*p,d,p),i.closePath(),h&&(i.translate(f,y),i.rotate(-h),i.translate(-f,-y)),i.clip("evenodd")}}},t.prototype.afterRenderChildren=function(e,t){t.context.restore()},t.prototype.renderChild=function(e,t){t.context.save(),e.processRender(t),t.context.restore()},t}(s)}.apply(null,r))||(e.exports=n)},1466:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(244)],void 0===(n=function(e,t,i,r){var n=[0,0];return function(e){function t(t){var i=e.call(this)||this;return i.height=0,i.resolution=0,i.rotation=0,i._source=null,i._sourceHandle=null,i.width=0,i.x=0,i.y=0,i.source=t,i.requestRender=i.requestRender.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"source",{get:function(){return this._source},set:function(e){this._sourceHandle&&(this._sourceHandle.remove(),this._sourceHandle=null),this._source=e,this._source&&(this._sourceHandle=this._source.on("update",this.requestRender)),this.requestRender()},enumerable:!0,configurable:!0}),t.prototype.doRender=function(e){this.source&&this.source.ready&&this.renderCanvas2D(e)},t.prototype.renderCanvas2D=function(e){var t=this.source,i=e.context,r=e.state,s=r.resolution,o=r.rotation,a=this.resolution/s*r.pixelRatio;if(!(a<.05)){i.save();var u=r.toScreen(n,this.x,this.y),h=u[0],l=u[1];if(a>.99&&a<1.01?i.translate(Math.round(h),Math.round(l)):(i.translate(h,l),i.scale(a,a)),o){var c=o*Math.PI/180;i.rotate(c)}t.rotation&&(i.translate(.5*this.width,.5*this.height),i.rotate(-t.rotation*Math.PI/180),i.translate(.5*-this.width,.5*-this.height));var p=t.resolution||this.resolution,d=(this.x-t.x)/p,f=-(this.y-t.y)/p,y=(t.width||this.width)*(this.resolution/p),v=(t.height||this.height)*(this.resolution/p);i.clearRect(0,0,this.width,this.height),t.draw(i,Math.round(d),Math.round(f),Math.round(y),Math.round(v),0,0,this.width,this.height),i.restore()}},t}(r)}.apply(null,r))||(e.exports=n)},1473:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){function i(e){return e*r}Object.defineProperty(t,"__esModule",{value:!0});var r=Math.PI/180;t.snapToPixel=function(e,t,i){var r=i.resolution,n=i.size;return e[0]=r*(Math.round(t[0]/r)+n[0]%2*.5),e[1]=r*(Math.round(t[1]/r)+n[1]%2*.5),e},t.getOuterSize=function(e,t){var r=i(t.rotation),n=Math.abs(Math.cos(r)),s=Math.abs(Math.sin(r)),o=t.size,a=o[0],u=o[1];return e[0]=Math.round(u*s+a*n),e[1]=Math.round(u*n+a*s),e},t.getBBox=function(e,t,i,r){var n=t[0],s=t[1],o=r[0],a=r[1],u=.5*i;return e[0]=n-u*o,e[1]=s-u*a,e[2]=n+u*o,e[3]=s+u*a,e},t.bboxIntersects=function(e,t){var i=e[0],r=e[1],n=e[2],s=e[3],o=t[0],a=t[1],u=t[2],h=t[3];return!(i>u||n<o||r>h||s<a)}}.apply(null,r))||(e.exports=n)},1500:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(0),i(9),i(8),i(1),i(1536),i(1464),i(1676),i(1465),i(1364),i(1347),i(460),i(1449),i(1461),i(1338)],void 0===(n=function(e,t,i,r,n,s,o,a,u,h,l,c,p,d,f,y,v){var g=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t._tileRequests=new Map,t.container=new l,t.layer=null,t}return i(t,e),t.prototype.initialize=function(){var e,t=this.layer.tileInfo,i=t&&t.spatialReference;i||(e=new n("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),i.equals(this.view.spatialReference)||(e=new n("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),e&&this.addResolvingPromise(s.reject(e))},t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this;this._tileContainer=new a,this.container.addChild(this._tileContainer),this._tileInfoView=new d(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new f({tileInfoView:this._tileInfoView,tileServers:"tileServers"in this.layer?this.layer.tileServers:null,concurrency:this.layer.url&&-1!==this.layer.url.indexOf("tiles.arcgis.com")?12:6,process:function(t,i){return e.fetchTile(t,i)}}),this._tileStrategy=new y({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView})},t.prototype.detach=function(){this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeChild(this._tileContainer),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._tileContainer=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){var e=this;this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){return e._enqueueTileFetch(t)}),this.notifyChange("updating"))},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!e},t.prototype.getTileBounds=function(e,t){return this._tileInfoView.getTileBounds(e,t)},t.prototype.getTileCoords=function(e,t){return this._tileInfoView.getTileCoords(e,t)},t.prototype.getTileResolution=function(e){return this._tileInfoView.getTileResolution(e)},t.prototype.acquireTile=function(e){var t,i,r=h.default.pool.acquire();return r.key.set(e),t=this._tileInfoView.getTileCoords(g,r.key),r.x=t[0],r.y=t[1],r.resolution=this._tileInfoView.getTileResolution(r.key),i=this._tileInfoView.tileInfo.size,r.width=i[0],r.height=i[1],this._enqueueTileFetch(r),this.requestUpdate(),r},t.prototype.releaseTile=function(e){var t=this,i=this._tileRequests.get(e);i&&!i.isFulfilled()&&i.cancel(),this._tileRequests.delete(e),this._tileContainer.removeChild(e),e.once("detach",function(){h.default.pool.release(e),t.requestUpdate()}),this.requestUpdate()},t.prototype.fetchTile=function(e,t){var i=this,r="tilemapCache"in this.layer?this.layer.tilemapCache:null;if(r){var n=e.level,s=e.row,o=e.col;return r.fetchAvailabilityUpsample(n,s,o,e).then(function(){return i._fetchImage(e)}).catch(function(){return e.level=n,e.row=s,e.col=o,i._fetchImage(e)})}return this._fetchImage(e)},t.prototype._enqueueTileFetch=function(e){var t=this;if(!this._fetchQueue.has(e.key)){var i=this._fetchQueue.push(e.key).then(function(i){e.status=p.TileStatus.READY,e.source=i,e.once("attach",function(){return t.requestUpdate()}),t._tileContainer.addChild(e),t.requestUpdate()});this._tileRequests.set(e,i)}},t.prototype._fetchImage=function(e){var t=this;return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp}).then(function(i){var r,n=u.default.pool.acquire(i);return r=t.getTileCoords(g,e),n.x=r[0],n.y=r[1],n.resolution=t.getTileResolution(e),n})},r([o.subclass("esri.views.2d.layers.TiledLayerView2D")],t)}(o.declared(c,v))}.apply(null,r))||(e.exports=n)},1536:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(0),i(463),i(1473),i(171)],void 0===(n=function(e,t,i,r,n,s,o){var a=[0,0];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenCanvas=null,t._childrenRenderParameters={context:null,pixelRatio:1,state:new n,stationary:!0},t}return i(t,e),t.prototype.attach=function(t){return this._childrenCanvas||(this._childrenCanvas=document.createElement("canvas"),this._childrenRenderParameters.context=this._childrenCanvas.getContext("2d")),e.prototype.attach.call(this,t)},t.prototype.detach=function(t){e.prototype.detach.call(this,t),this._childrenCanvas=null,this._childrenRenderParameters.context=null},t.prototype.doRender=function(t){this.visible&&e.prototype.doRender.call(this,t)},t.prototype.prepareChildrenRenderParameters=function(e){var t=this._childrenCanvas,i=this._childrenRenderParameters,r=e.state,n=r.pixelRatio,o=i.state;o.copy(r);var u=s.getOuterSize(a,r),h=u[0],l=u[1];return h*=n,l*=n,o.size=a,o.viewpoint.rotation=0,t.width!==h||t.height!==l?(t.width=h,t.height=l):i.context.clearRect(0,0,h,l),i.pixelRatio=e.pixelRatio,i},t.prototype.beforeRenderChildren=function(e,t){this.sortChildren(function(e,t){return t.resolution-e.resolution})},t.prototype.afterRenderChildren=function(e,t){var i=e.context,r=e.state,n=t.context,s=t.state;0===r.rotation?i.drawImage(n.canvas,0,0):(i.save(),i.translate(.5*r.width,.5*r.height),i.rotate(r.rotation*Math.PI/180),i.translate(.5*-r.width,.5*-r.height),i.drawImage(n.canvas,.5*(r.width-s.width),.5*(r.height-s.height)),i.restore())},t}(o)}.apply(null,r))||(e.exports=n)},1547:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(460),i(169),i(1449),i(1461)],void 0===(n=function(e,t,i,r,n,s){Object.defineProperty(t,"__esModule",{value:!0}),t.TileInfoView=i,t.TileKey=r,t.TileQueue=n,t.TileStrategy=s}.apply(null,r))||(e.exports=n)},1619:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(495),i(1347)],void 0===(n=function(e,t,i,r,n){return function(e){var t=function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.status=n.TileStatus.INITIALIZED,r}return i(t,e),t}(e);return r.EventedMixin(t)}}.apply(null,r))||(e.exports=n)},1676:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(12),i(0),i(91),i(1547),i(1466),i(1619),i(1347)],void 0===(n=function(e,t,i,r,n,s,o,a,u){Object.defineProperty(t,"__esModule",{value:!0});var h=function(e){function t(t){var i=e.call(this,t)||this;return i.key=new s.TileKey(0,0,0,0),i}return i(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0),this.status=u.TileStatus.INITIALIZED,this.source=null},t.pool=new n(t,!0),t}(a(o));t.default=h}.apply(null,r))||(e.exports=n)}}]);
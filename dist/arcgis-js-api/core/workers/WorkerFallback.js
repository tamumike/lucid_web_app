define(["require","exports","../global","../has","./utils"],function(t,e,n,i,v){var r=function(){var e=this,t=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(s){e[s]=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t[s].apply(t,e)}})},o=n.MutationObserver||n.WebKitMutationObserver,a=function(){var e;if(n.process&&n.process.nextTick)e=function(e){n.process.nextTick(e)};else if(n.Promise)e=function(e){n.Promise.resolve().then(e)};else if(o){var r=[],s=document.createElement("div");new o(function(){for(;0<r.length;)r.shift()()}).observe(s,{attributes:!0}),e=function(e){r.push(e),s.setAttribute("queueStatus","1")}}return e}();return function(){function e(){this._dispatcher=new r,this._isInitialized=!1,this._workerPostMessage({type:v.MessageType.HANDSHAKE})}return e.prototype.terminate=function(){},Object.defineProperty(e.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),(this._onmessageHandler=e)&&this.addEventListener("message",e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onerror",{get:function(){return this._onerrorHandler},set:function(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),(this._onerrorHandler=e)&&this.addEventListener("error",e)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,r){var s=this;a(function(){s._workerMessageHandler(new MessageEvent("message",{data:e}))})},e.prototype.dispatchEvent=function(e){return this._dispatcher.dispatchEvent(e)},e.prototype.addEventListener=function(e,r,s){this._dispatcher.addEventListener(e,r,s)},e.prototype.removeEventListener=function(e,r,s){this._dispatcher.removeEventListener(e,r,s)},e.prototype._workerPostMessage=function(e,r){var s=this;a(function(){s.dispatchEvent(new MessageEvent("message",{data:e}))})},e.prototype._workerMessageHandler=function(e){var p=this,r=v.receiveMessage(e);if(r){var l=r.jobId;switch(r.type){case v.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:v.MessageType.CONFIGURED});break;case v.MessageType.OPEN:var s=r.modulePath;i("esri-webpack")?t(["esri/core/workers/RemoteClient","esri/tasks/operations/PBFWorker","esri/views/vectorTiles/WorkerTileHandler","esri/views/2d/layers/features/Pipeline","esri/views/3d/layers/PointCloudWorker","esri/views/3d/layers/SceneLayerWorker","esri/layers/graphics/sources/support/CSVSourceWorker","esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker",s],function(e,r,s,t,n,i,o,a,c){var d;switch(c){case"esri/tasks/operations/PBFWorker":d=r;break;case"esri/views/vectorTiles/WorkerTileHandler":d=s;break;case"esri/views/2d/layers/features/Pipeline":d=t;break;case"esri/views/3d/layers/PointCloudWorker":d=n;break;case"esri/views/3d/layers/SceneLayerWorker":d=i;break;case"esri/layers/graphics/sources/support/CSVSourceWorker":d=o;break;case"esri/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker":d=a;break;default:d=c}var u=e.connect(d);p._workerPostMessage({type:v.MessageType.OPENED,jobId:l,data:u})}):t(["esri/core/workers/RemoteClient",s],function(e,r){var s=e.connect(r);p._workerPostMessage({type:v.MessageType.OPENED,jobId:l,data:s})})}}},e}()});
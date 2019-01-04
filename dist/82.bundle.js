(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/webgl/Texture":1560,"esri/views/2d/engine/webgl/enums":1582,"esri/core/HandleOwner":1602,"esri/views/2d/engine/DisplayObject":1616,"esri/views/layers/RefreshableLayerView":1617,"esri/views/layers/LayerView":1621,"esri/views/2d/engine/Container":1627,"esri/views/2d/engine/Evented":1641,"esri/views/2d/layers/LayerView2D":1658,"esri/views/2d/engine/BitmapContainer":1801,"esri/views/2d/engine/Bitmap":1837,"esri/views/2d/engine/Tiled":1944,"esri/views/2d/layers/WMTSLayerView2D":2514,"esri/views/2d/layers/support/BitmapTile":2515})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1560:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(19)],void 0===(n=function(e,t,i){return function(){function e(t,r,n){this._context=null,this._glName=null,this._id=-1,this._desc=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._boundToUnits=new Set,this._context=t,this._desc={pixelFormat:r.pixelFormat,internalFormat:r.internalFormat,dataType:r.dataType,target:r.target?r.target:3553,samplingMode:r.samplingMode?r.samplingMode:9729,wrapMode:r.wrapMode?r.wrapMode:10497,maxAnisotropy:r.maxAnisotropy,flipped:void 0!==r.flipped&&r.flipped,hasMipmap:void 0!==r.hasMipmap&&r.hasMipmap,unpackAlignment:r.unpackAlignment?r.unpackAlignment:4,width:r.width,height:r.height,preMultiplyAlpha:void 0!==r.preMultiplyAlpha&&r.preMultiplyAlpha},this._id=++e._nextId,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(0),this.setData(n)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(this._context){if(this._glName){var t=this._context.gl;this._boundToUnits.forEach(function(t){e._context.bindTexture(null,t)}),t.deleteTexture(this._glName),this._glName=null}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(0),this._context=null}},e.prototype.resize=function(e,t){var i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))},e.prototype.setData=function(t){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var r=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var n=this._desc;e._validateTexture(n),i.pixelStorei(i.UNPACK_ALIGNMENT,n.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);var o=n.pixelFormat,s=n.internalFormat?n.internalFormat:o;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement)n.width&&n.height&&console.assert(t.width===n.width&&t.height===n.height),i.texImage2D(i.TEXTURE_2D,0,s,o,n.dataType,t),n.hasMipmap&&this.generateMipmap(),void 0===this._desc.width&&(this._desc.width=t.width),void 0===this._desc.height&&(this._desc.height=t.height);else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&s===i.DEPTH_STENCIL&&(s=i.DEPTH24_STENCIL8);var a=n.width,h=n.height;if(function(e){return null!=e&&"type"in e&&"compressed"===e.type}(t))for(var l=0;;++l){var p=t.levels[Math.min(l,t.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,l,s,a,h,0,p),1===a&&1===h||!n.hasMipmap)break;a=Math.max(1,a>>1),h=Math.max(1,h>>1)}else if(t)i.texImage2D(i.TEXTURE_2D,0,s,a,h,0,o,n.dataType,t),n.hasMipmap&&this.generateMipmap();else for(l=0;i.texImage2D(i.TEXTURE_2D,l,s,a,h,0,o,n.dataType,null),(1!==a||1!==h)&&n.hasMipmap;++l)a=Math.max(1,a>>1),h=Math.max(1,h>>1)}e._applySamplingMode(i,this._desc),e._applyWrapMode(i,this._desc),e._applyAnisotropicFilteringParameters(this._context,this._desc),this._context.bindTexture(r,0)},e.prototype.updateData=function(e,t,i,r,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var s=this._context.gl,a=this._desc,h=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||i<0||r>a.width||n>a.height||t+r>a.width||i+n>a.height)&&console.error("An attempt to update out of bounds of the texture!"),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?(console.assert(o.width===r&&o.height===n),s.texSubImage2D(s.TEXTURE_2D,e,t,i,a.pixelFormat,a.dataType,o)):s.texSubImage2D(s.TEXTURE_2D,e,t,i,r,n,a.pixelFormat,a.dataType,o),this._context.bindTexture(h,0)},e.prototype.generateMipmap=function(){var t=this._desc;t.hasMipmap||(t.hasMipmap=!0,e._validateTexture(t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var r=this._context.gl;r.generateMipmap(r.TEXTURE_2D),this._context.bindTexture(i,0)},e.prototype.setSamplingMode=function(t){t!==this._desc.samplingMode&&(this._desc.samplingMode=t,e._validateTexture(this._desc),this._samplingModeDirty=!0)},e.prototype.setWrapMode=function(t){t!==this._desc.wrapMode&&(this._desc.wrapMode=t,e._validateTexture(this._desc),this._wrapModeDirty=!0)},e.prototype.applyChanges=function(){var t=this._context.gl,i=this._desc;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)},e.prototype.setBoundToUnit=function(e,t){t?this._boundToUnits.add(e):this._boundToUnits.delete(e)},e._isPowerOfTwo=function(e){return 0==(e&e-1)},e._validateTexture=function(t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!"),e._isPowerOfTwo(t.width)&&e._isPowerOfTwo(t.height)||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},e._applySamplingMode=function(e,t){var i=t.samplingMode;9985===i||9987===i?i=9729:9984!==i&&9986!==i||(i=9728),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.samplingMode)},e._applyWrapMode=function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))},e._applyAnisotropicFilteringParameters=function(e,t){if(null!=t.maxAnisotropy){var i=e.capabilities.textureFilterAnisotropic;if(i){var r=e.gl;r.texParameterf(r.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}},e._nextId=0,e}()}.apply(null,r))||(e.exports=n)},1582:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){var i,r,n,o,s,a,h,l,p,d;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.WGLGeometryType||(t.WGLGeometryType={}))[i.FILL=0]="FILL",i[i.LINE=1]="LINE",i[i.MARKER=2]="MARKER",i[i.TEXT=3]="TEXT",i[i.LABEL=4]="LABEL",i[i.NONE=5]="NONE",i[i.UNKNOWN=6]="UNKNOWN",i[i.COUNT=7]="COUNT",(r=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[r.SUCCEEDED=0]="SUCCEEDED",r[r.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(n=t.WGLDrawPhase||(t.WGLDrawPhase={}))[n.NONE=0]="NONE",n[n.MAP=1]="MAP",n[n.LABEL=2]="LABEL",n[n.LABEL_ALPHA=4]="LABEL_ALPHA",n[n.HITTEST=8]="HITTEST",n[n.HIGHLIGHT=16]="HIGHLIGHT",n[n.CLIP=32]="CLIP",n[n.DEBUG=64]="DEBUG",n[n.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(o=t.VVType||(t.VVType={}))[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION",(s=t.WGLVVFlag||(t.WGLVVFlag={}))[s.NONE=0]="NONE",s[s.OPACITY=1]="OPACITY",s[s.COLOR=2]="COLOR",s[s.ROTATION=4]="ROTATION",s[s.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",s[s.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",s[s.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",s[s.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(a=t.WGLVVTarget||(t.WGLVVTarget={}))[a.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",a[a.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",a[a.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",a[a.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(h=t.CapType||(t.CapType={}))[h.UNKNOWN=0]="UNKNOWN",h[h.BUTT=1]="BUTT",h[h.ROUND=2]="ROUND",h[h.SQUARE=3]="SQUARE",(l=t.JoinType||(t.JoinType={}))[l.UNKNOWN=0]="UNKNOWN",l[l.MITER=1]="MITER",l[l.BEVEL=2]="BEVEL",l[l.ROUND=3]="ROUND",(p=t.EsriSymbolType||(t.EsriSymbolType={})).SIMPLE_MARKER="esriSMS",p.SIMPLE_LINE="esriSLS",p.SIMPLE_FILL="esriSFS",p.PICTURE_MARKER="esriPMS",p.PICTURE_FILL="esriPFS",p.TEXT="esriTS",(d=t.EsriSymbolTypeKebab||(t.EsriSymbolTypeKebab={})).SIMPLE_MARKER="simple-marker",d.SIMPLE_LINE="simple-line",d.SIMPLE_FILL="simple-fill",d.PICTURE_MARKER="picture-marker",d.PICTURE_FILL="picture-fill",d.TEXT="text"}.apply(null,r))||(e.exports=n)},1602:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(13),i(1)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new o,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([s.property({readOnly:!0})],t.prototype,"handles",void 0),r([s.subclass("esri.core.HandleOwner")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1616:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(1641)],void 0===(n=function(e,t,i,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._renderRequestedCalled=!1,t._attached=!1,t._isReady=!1,t._opacity=1,t.renderRequested=!1,t._visible=!0,t}return i(t,e),Object.defineProperty(t.prototype,"attached",{get:function(){return this._attached},set:function(e){this._attached!==e&&(this._attached=e,e?this.hasEventListener("attach")&&this.emit("attach"):this.hasEventListener("detach")&&this.emit("detach"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isReady",{get:function(){return this._attached&&this._isReady},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"opacity",{get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=e,this.requestRender())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())},enumerable:!0,configurable:!0}),t.prototype.attach=function(){return this.ready(),!0},t.prototype.detach=function(){},t.prototype.processRender=function(e){this.visible&&this.attached&&(this._renderRequestedCalled=!1,this.doRender(e),this._renderRequestedCalled||(this.renderRequested=!1),this.hasEventListener("post-render")&&this.emit("post-render"))},t.prototype.requestRender=function(){var e=this.renderRequested;this._renderRequestedCalled=!0,this.renderRequested=!0,this.parent&&this.parent.requestChildRender(this),e!==this.renderRequested&&this.hasEventListener("will-render")&&this.emit("will-render")},t.prototype.dispose=function(){},t.prototype.ready=function(){this._isReady=!0,this.hasEventListener("isReady")&&this.emit("isReady")},t}(r.Evented);t.DisplayObject=n}.apply(null,r))||(e.exports=n)},1617:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(1)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshTimestamp=null,t}return i(t,e),t.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},r([o.property()],t.prototype,"layer",void 0),r([o.aliasOf("layer.refreshInterval")],t.prototype,"refreshInterval",void 0),r([o.property({readOnly:!0})],t.prototype,"refreshTimestamp",void 0),r([o.subclass("esri.layers.mixins.RefreshableLayerView")],t)}(o.declared(n))}.apply(null,r))||(e.exports=n)},1621:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(32),i(1602),i(140),i(9),i(181),i(7),i(1)],void 0===(n=function(e,t,i,r,n,o,s,a,h,l,p){return function(e){function t(t){var i=e.call(this)||this;return i.layer=null,i.parent=null,i.view=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),l.reject(t)}})},t.prototype.destroy=function(){this.layer=this.view=this.parent=null},Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&this.isUpdating()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null!=e?e:1};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([p.property()],t.prototype,"layer",void 0),r([p.property()],t.prototype,"parent",void 0),r([p.property({readOnly:!0,dependsOn:["view","visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([p.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],t.prototype,"updating",null),r([p.property()],t.prototype,"view",void 0),r([p.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([p.subclass("esri.views.layers.LayerView")],t)}(p.declared(o,n,s.Identifiable,h))}.apply(null,r))||(e.exports=n)},1627:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(1616)],void 0===(n=function(e,t,i,r){var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ATTACHING=0]="ATTACHING",e[e.DETACHING=1]="DETACHING",e[e.RENDERING=2]="RENDERING",e[e.DONE=3]="DONE"}(n||(n={}));var o=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._childrenSet=new Set,t._childrenToAttach=[],t._childrenToDetach=[],t._renderPhase=n.DONE,t.children=[],t}return i(t,e),Object.defineProperty(t.prototype,"numChildren",{get:function(){return this.children.length},enumerable:!0,configurable:!0}),t.prototype.detach=function(){for(var e=0,t=this.children.concat(this._childrenToDetach);e<t.length;e++){var i=t[e];i.attached&&(this.detachChild(i),i.attached=!1,i.parent=null)}},t.prototype.doRender=function(e){var t=e.globalOpacity;e.globalOpacity*=this.opacity,this._renderPhase=n.ATTACHING,this.attachChildren(),this._renderPhase=n.DETACHING;for(var i=this._childrenToDetach;i.length>0;){var r=i.shift();this.detachChild(r),r.attached=!1,r.parent=null,r.stage=null}this._renderPhase=n.RENDERING,this.renderChildren(e),this._renderPhase=n.DONE,e.globalOpacity=t},t.prototype.addChild=function(e){return this.addChildAt(e,this.children.length)},t.prototype.addChildAt=function(e,t){if(void 0===t&&(t=this.numChildren),!e)return e;if(this.contains(e))return e;var i=e.parent;i&&i!==this&&i.removeChild(e),t>=this.numChildren?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e);var r=this._childrenToDetach.indexOf(e);return r>-1&&this._childrenToDetach.splice(r,1),this._childrenToAttach.push(e),this._renderPhase>=n.RENDERING&&this.requestRender(),e},t.prototype.contains=function(e){return this._childrenSet.has(e)},t.prototype.getChildIndex=function(e){return this.children.indexOf(e)},t.prototype.getChildAt=function(e){return e<0||e>this.children.length?null:this.children[e]},t.prototype.removeAllChildren=function(){for(var e=this.numChildren;e--;)this.removeChildAt(0)},t.prototype.removeChild=function(e){return this.contains(e)?this.removeChildAt(this.getChildIndex(e)):e},t.prototype.removeChildAt=function(e){var t;if(e<0||e>=this.children.length)return null;if(t=this.children.splice(e,1)[0],function(e,t){e.delete(t)}(this._childrenSet,t),t.attached)this._childrenToDetach.push(t),this._renderPhase>=n.RENDERING&&this.requestRender();else{var i=this._childrenToAttach.indexOf(t);i>-1&&this._childrenToAttach.splice(i,1)}return t},t.prototype.requestChildRender=function(e){e&&e.parent===this&&this._renderPhase>=n.RENDERING&&this.requestRender()},t.prototype.setChildIndex=function(e,t){var i=this.getChildIndex(e);i>-1&&(this.children.splice(i,1),this.children.splice(t,0,e),this._renderPhase>=n.RENDERING&&this.requestRender())},t.prototype.sortChildren=function(e){return this._renderPhase>n.RENDERING&&this.requestRender(),this.children.sort(e)},t.prototype.attachChildren=function(){var e=this._childrenToAttach;if(0!==e.length)for(var t=0,i=!1;!i;){var r=e[t];r.parent=this,r.stage=this.stage,this.attachChild(r)?(r.attached=!0,e.splice(t,1)):++t,i=e.length===t}},t.prototype.renderChildren=function(e){for(var t=this.children,i=t.length,r=0;r<i;r++)t[r].processRender(e)},t.prototype.attachChild=function(e){return e.attach()},t.prototype.detachChild=function(e){e.detach()},t}(r.DisplayObject);t.Container=o}.apply(null,r))||(e.exports=n)},1641:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(86),i(51)],void 0===(n=function(e,t,i,r,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(){}return e.prototype.on=function(e,t){return r.after(this,"on"+e,t,!0)},e.prototype.once=function(e,t){return n.once(this,e,t)},e.prototype.emit=function(e){n.emit(this,e,this)},e.prototype.hasEventListener=function(e){var t="on"+e;return!(!this[t]||!this[t].after)},e}();t.Evented=o,t.EventedMixin=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.on=function(e,t){return r.after(this,"on"+e,t,!0)},t.prototype.once=function(e,t){return n.once(this,e,t)},t.prototype.emit=function(e,t){n.emit(this,e,t)},t.prototype.hasEventListener=function(e){var t="on"+e;return!(!this[t]||!this[t].after)},t}(e)}}.apply(null,r))||(e.exports=n)},1658:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(14),i(1),i(1621)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.attached=!1,t.lastUpdateId=-1,t.moving=!1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()}),n.init(this,"suspended",function(t){e.container.visible=!t,!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),n.init(this,"fullOpacity",function(t){e.container.opacity=t},!0);var t=function(){this.notifyChange("rendering")}.bind(this);this.container.on("post-render",t),this.container.on("will-render",t)},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.updateRequested=!1,this.layer=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,s=!n;!o&&e<=r&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([o.property()],t.prototype,"attached",void 0),r([o.property()],t.prototype,"container",void 0),r([o.property()],t.prototype,"moving",void 0),r([o.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([o.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([o.property()],t.prototype,"updateRequested",void 0),r([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",null),r([o.property()],t.prototype,"view",void 0),r([o.subclass("esri.views.2d.layers.LayerView2D")],t)}(o.declared(s))}.apply(null,r))||(e.exports=n)},1801:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(0),i(1627),i(1582)],void 0===(n=function(e,t,i,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.doRender=function(t){this.visible&&t.drawPhase===o.WGLDrawPhase.MAP&&e.prototype.doRender.call(this,t)},t.prototype.renderChildren=function(e){var t=this.stage.painter,i=this.children,r=e.drawPhase;this.sortChildren(function(e,t){return t.resolution-e.resolution}),e.drawPhase=o.WGLDrawPhase.CLIP,t.startStencilBurn();for(var n=0,s=i.length;n<s;n++){(a=i[n]).attached&&a.visible&&(t.stencilRef=n,a.processRender(e))}e.drawPhase=r,t.startStencilDraw();for(n=0,s=i.length;n<s;n++){var a;(a=i[n]).attached&&a.visible&&(t.stencilRef=n,a.processRender(e))}t.endStencilDraw()},t}(n.Container);t.BitmapContainer=s}.apply(null,r))||(e.exports=n)},1837:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(514),i(1616),i(1560)],void 0===(n=function(e,t,i,r,n,o){function s(e){return e.updateTexture()}function a(e){p.has(e)&&(l.splice(l.indexOf(e),1),p.delete(e))}Object.defineProperty(t,"__esModule",{value:!0});var h=[0,0],l=[],p=new r.default,d=function(e){function t(t){void 0===t&&(t=null);var i=e.call(this)||this;return i._height=void 0,i.pixelRatio=1,i.resolution=0,i.rotation=0,i._source=null,i._width=void 0,i.x=0,i.y=0,i.source=t,i.requestRender=i.requestRender.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"height",{get:function(){return void 0!==this._height?this._height:this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height},set:function(e){this._height=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"source",{get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return void 0!==this._width?this._width:this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width},set:function(e){this._width=e},enumerable:!0,configurable:!0}),t.prototype.attach=function(){return this._texture=function(e){return new o(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,flipped:!0})}(this.stage.context),s(this),!0},t.prototype.detach=function(){this._texture.dispose(),this._texture=null,a(this),e.prototype.detach.call(this)},t.prototype.invalidateTexture=function(){this.attached?s(this):a(this)},t.prototype.updateTexture=function(){if(this._texture){var e=this.source;if(!e)return void this._texture.setData(null);this._texture.resize(this.width,this.height),function(e){return e&&"render"in e}(e)?this._texture.setData(function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(e)):function(e){return e&&!("render"in e)}(e)&&this._texture.setData(e),this.ready(),this.requestRender()}},t.prototype.doRender=function(e){if(this.source&&this.width>0&&this.isReady){var t=this.stage,i=t.context,r=t.painter,n=e.state,o=e.pixelRatio,s=n.resolution,a=n.rotation,l=this.resolution/this.pixelRatio/s;if(!(l<.05)){var p=n.toScreen(h,this.x,this.y),d=p[0],u=p[1];!(a+this.rotation)&&l<1.05&&l>.95?this._texture.setSamplingMode(9728):this._texture.setSamplingMode(9729),r.drawImage(i,this._texture,d,u,this.width*l,this.height*l,-Math.PI*a/180,-Math.PI*this.rotation/180,this.opacity*e.globalOpacity,o,e.drawPhase)}}},t}(n.DisplayObject);t.Bitmap=d}.apply(null,r))||(e.exports=n)},1944:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(1641)],void 0===(n=function(e,t,i,r){return function(e){var t=function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return e.call(this)||this}return i(t,e),t}(e);return r.EventedMixin(t)}}.apply(null,r))||(e.exports=n)},2514:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(13),i(1),i(31),i(1801),i(1658),i(2515),i(537),i(544),i(545),i(1617)],void 0===(n=function(e,t,i,r,n,o,s,a,h,l,p,d,u,c){var f=[102113,102100,3857,3785,900913];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new n,t._tileStrategy=null,t._tileInfoView=null,t._fetchQueue=null,t._tileRequests=new Map,t.container=new a.BitmapContainer,t.layer=null,t}return i(t,e),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var r=i.tileInfo.spatialReference,n=t.fullExtent&&t.fullExtent.clone();r.isWebMercator?n=s.geographicToWebMercator(n):r.isWGS84||(n=i.fullExtent),this._tileInfoView=new p(i.tileInfo,n),this._fetchQueue=new d({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new u({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return e._refresh()}))}},t.prototype.detach=function(){this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this.container=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){this.updateRequested||this.suspended||this._refresh()},t.prototype.isUpdating=function(){var e=!0;return this._tileRequests.forEach(function(t){e=e&&t.isFulfilled()}),!e},t.prototype.acquireTile=function(e){var t=this,i=l.default.pool.acquire();i.key.set(e),i.resolution=this._tileInfoView.getTileResolution(i.key),this._tileInfoView.getTileCoords(i,i.key);var r=this._fetchQueue.push(i.key).then(function(e){i.source=e,i.once("attach",function(){return t.requestUpdate()}),t.container.addChild(i)});return this._tileRequests.set(i,r),this.requestUpdate(),i},t.prototype.releaseTile=function(e){var t=this._tileRequests.get(e);t.isFulfilled()||t.cancel(),this._tileRequests.delete(e),this.container.removeChild(e),this.requestUpdate()},t.prototype.fetchTile=function(e){return this.layer.fetchTile(e.level,e.row,e.col)},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?null!==this.tileMatrixSet:e},t.prototype._refresh=function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){if(t.source){t.source=null;var i=e._fetchQueue.push(t.key).then(function(i){t.source=i,t.requestRender(),e.notifyChange("updating")});e._tileRequests.set(t,i)}}),this.notifyChange("updating")},t.prototype._getTileMatrixSetBySpatialReference=function(e){var t=this.view.spatialReference,i=e.tileMatrixSets.find(function(e){return e.tileInfo.spatialReference.wkid===t.wkid});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(function(e){return f.indexOf(e.tileInfo.spatialReference.wkid)>-1})),i},r([o.property({dependsOn:["tileMatrixSet"]})],t.prototype,"suspended",void 0),r([o.property({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],t.prototype,"tileMatrixSet",null),r([o.property({dependsOn:["updateRequested","attached"]})],t.prototype,"updating",void 0),r([o.subclass("esri.views.2d.layers.WMTSLayerView2D")],t)}(o.declared(h,c))}.apply(null,r))||(e.exports=n)},2515:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(26),i(84),i(1837),i(1944),i(138)],void 0===(n=function(e,t,i,r,n,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){var i=e.call(this,t)||this;return i.key=new s(0,0,0,0),i}return i(t,e),t.prototype.acquire=function(e){},t.prototype.release=function(){this.key.set(0,0,0,0)},t.pool=new r(t,!0),t}(o(n.Bitmap));t.BitmapTile=a,t.default=a}.apply(null,r))||(e.exports=n)}}]);
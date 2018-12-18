(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/webgl/Texture":1560,"esri/views/2d/engine/webgl/Utils":1579,"esri/views/2d/engine/webgl/enums":1582,"esri/core/HandleOwner":1602,"esri/views/2d/engine/webgl/number":1640,"esri/views/2d/engine/webgl/color":1743,"esri/views/2d/layers/features/controllers/BaseController":1958,"esri/views/2d/engine/webgl/SymbolProperties":1965,"esri/views/2d/layers/features/support/TileUpdateQueue":2083})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1560:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(19)],void 0===(n=function(e,t,i){return function(){function e(t,r,n){this._context=null,this._glName=null,this._id=-1,this._desc=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._boundToUnits=new Set,this._context=t,this._desc={pixelFormat:r.pixelFormat,internalFormat:r.internalFormat,dataType:r.dataType,target:r.target?r.target:3553,samplingMode:r.samplingMode?r.samplingMode:9729,wrapMode:r.wrapMode?r.wrapMode:10497,maxAnisotropy:r.maxAnisotropy,flipped:void 0!==r.flipped&&r.flipped,hasMipmap:void 0!==r.hasMipmap&&r.hasMipmap,unpackAlignment:r.unpackAlignment?r.unpackAlignment:4,width:r.width,height:r.height,preMultiplyAlpha:void 0!==r.preMultiplyAlpha&&r.preMultiplyAlpha},this._id=++e._nextId,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(0),this.setData(n)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(this._context){if(this._glName){var t=this._context.gl;this._boundToUnits.forEach(function(t){e._context.bindTexture(null,t)}),t.deleteTexture(this._glName),this._glName=null}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(0),this._context=null}},e.prototype.resize=function(e,t){var i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))},e.prototype.setData=function(t){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var r=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var n=this._desc;e._validateTexture(n),i.pixelStorei(i.UNPACK_ALIGNMENT,n.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);var o=n.pixelFormat,s=n.internalFormat?n.internalFormat:o;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement)n.width&&n.height&&console.assert(t.width===n.width&&t.height===n.height),i.texImage2D(i.TEXTURE_2D,0,s,o,n.dataType,t),n.hasMipmap&&this.generateMipmap(),void 0===this._desc.width&&(this._desc.width=t.width),void 0===this._desc.height&&(this._desc.height=t.height);else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&s===i.DEPTH_STENCIL&&(s=i.DEPTH24_STENCIL8);var a=n.width,l=n.height;if(function(e){return null!=e&&"type"in e&&"compressed"===e.type}(t))for(var u=0;;++u){var p=t.levels[Math.min(u,t.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,u,s,a,l,0,p),1===a&&1===l||!n.hasMipmap)break;a=Math.max(1,a>>1),l=Math.max(1,l>>1)}else if(t)i.texImage2D(i.TEXTURE_2D,0,s,a,l,0,o,n.dataType,t),n.hasMipmap&&this.generateMipmap();else for(u=0;i.texImage2D(i.TEXTURE_2D,u,s,a,l,0,o,n.dataType,null),(1!==a||1!==l)&&n.hasMipmap;++u)a=Math.max(1,a>>1),l=Math.max(1,l>>1)}e._applySamplingMode(i,this._desc),e._applyWrapMode(i,this._desc),e._applyAnisotropicFilteringParameters(this._context,this._desc),this._context.bindTexture(r,0)},e.prototype.updateData=function(e,t,i,r,n,o){o||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var s=this._context.gl,a=this._desc,l=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||i<0||r>a.width||n>a.height||t+r>a.width||i+n>a.height)&&console.error("An attempt to update out of bounds of the texture!"),o instanceof ImageData||o instanceof HTMLImageElement||o instanceof HTMLCanvasElement||o instanceof HTMLVideoElement?(console.assert(o.width===r&&o.height===n),s.texSubImage2D(s.TEXTURE_2D,e,t,i,a.pixelFormat,a.dataType,o)):s.texSubImage2D(s.TEXTURE_2D,e,t,i,r,n,a.pixelFormat,a.dataType,o),this._context.bindTexture(l,0)},e.prototype.generateMipmap=function(){var t=this._desc;t.hasMipmap||(t.hasMipmap=!0,e._validateTexture(t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var r=this._context.gl;r.generateMipmap(r.TEXTURE_2D),this._context.bindTexture(i,0)},e.prototype.setSamplingMode=function(t){t!==this._desc.samplingMode&&(this._desc.samplingMode=t,e._validateTexture(this._desc),this._samplingModeDirty=!0)},e.prototype.setWrapMode=function(t){t!==this._desc.wrapMode&&(this._desc.wrapMode=t,e._validateTexture(this._desc),this._wrapModeDirty=!0)},e.prototype.applyChanges=function(){var t=this._context.gl,i=this._desc;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)},e.prototype.setBoundToUnit=function(e,t){t?this._boundToUnits.add(e):this._boundToUnits.delete(e)},e._isPowerOfTwo=function(e){return 0==(e&e-1)},e._validateTexture=function(t){(t.width<0||t.height<0)&&console.error("Negative dimension parameters are not allowed!"),e._isPowerOfTwo(t.width)&&e._isPowerOfTwo(t.height)||("number"==typeof t.wrapMode?33071!==t.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===t.wrapMode.s&&33071===t.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),t.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},e._applySamplingMode=function(e,t){var i=t.samplingMode;9985===i||9987===i?i=9729:9984!==i&&9986!==i||(i=9728),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t.samplingMode)},e._applyWrapMode=function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))},e._applyAnisotropicFilteringParameters=function(e,t){if(null!=t.maxAnisotropy){var i=e.capabilities.textureFilterAnisotropic;if(i){var r=e.gl;r.texParameterf(r.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}},e._nextId=0,e}()}.apply(null,r))||(e.exports=n)},1579:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(124),i(100),i(8),i(9),i(27),i(1620),i(53),i(1743),i(1582),i(1965),i(92),i(1560)],void 0===(n=function(e,t,i,r,n,o,s,a,l,u,p,_,c,h){var d;Object.defineProperty(t,"__esModule",{value:!0});var T=o.getLogger("esri.views.2d.engine.webgl.Utils");function E(e){for(var t={},i=0,r=e;i<r.length;i++){var n=r[i];t[n.name]=n.strideInBytes}return t}t.C_HITTEST_SEARCH_SIZE=4,t.C_VBO_GEOMETRY="geometry",t.C_VBO_PERINSTANCE="per_instance",t.C_VBO_PERINSTANCE_VV="per_instance_vv",t.C_VBO_VISIBILITY="visibility",t.C_VBO_VISIBILITY_RANGE="visibilityRange",t.C_ICON_VERTEX_DEF=[{name:t.C_VBO_GEOMETRY,strideInBytes:24,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_ICON_VERTEX_DEF_VV=[{name:t.C_VBO_GEOMETRY,strideInBytes:40,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_FILL_VERTEX_DEF=[{name:t.C_VBO_GEOMETRY,strideInBytes:28,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_FILL_VERTEX_DEF_VV=[{name:t.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_LINE_VERTEX_DEF=[{name:t.C_VBO_GEOMETRY,strideInBytes:32,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_LINE_VERTEX_DEF_VV=[{name:t.C_VBO_GEOMETRY,strideInBytes:44,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_TEXT_VERTEX_DEF=[{name:t.C_VBO_GEOMETRY,strideInBytes:20,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_TEXT_VERTEX_DEF_VV=[{name:t.C_VBO_GEOMETRY,strideInBytes:36,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0}],t.C_LABEL_VERTEX_DEF=[{name:t.C_VBO_GEOMETRY,strideInBytes:24,divisor:0},{name:t.C_VBO_VISIBILITY,strideInBytes:1,divisor:0},{name:t.C_VBO_VISIBILITY_RANGE,strideInBytes:2,divisor:0}],t.C_ICON_STRIDE_SPEC=E(t.C_ICON_VERTEX_DEF),t.C_ICON_STRIDE_SPEC_VV=E(t.C_ICON_VERTEX_DEF_VV),t.C_FILL_STRIDE_SPEC=E(t.C_FILL_VERTEX_DEF),t.C_FILL_STRIDE_SPEC_VV=E(t.C_FILL_VERTEX_DEF_VV),t.C_LINE_STRIDE_SPEC=E(t.C_LINE_VERTEX_DEF),t.C_LINE_STRIDE_SPEC_VV=E(t.C_LINE_VERTEX_DEF_VV),t.C_TEXT_STRIDE_SPEC=E(t.C_TEXT_VERTEX_DEF),t.C_TEXT_STRIDE_SPEC_VV=E(t.C_TEXT_VERTEX_DEF_VV),t.C_LABEL_STRIDE_SPEC=E(t.C_LABEL_VERTEX_DEF),t.getStrides=function(e,i){switch(e){case p.WGLGeometryType.MARKER:return i?t.C_ICON_STRIDE_SPEC_VV:t.C_ICON_STRIDE_SPEC;case p.WGLGeometryType.FILL:return i?t.C_FILL_STRIDE_SPEC_VV:t.C_FILL_STRIDE_SPEC;case p.WGLGeometryType.LINE:return i?t.C_LINE_STRIDE_SPEC_VV:t.C_LINE_STRIDE_SPEC;case p.WGLGeometryType.TEXT:return i?t.C_TEXT_STRIDE_SPEC_VV:t.C_TEXT_STRIDE_SPEC;case p.WGLGeometryType.LABEL:return t.C_LABEL_STRIDE_SPEC}return null};var f=[t.C_VBO_GEOMETRY,t.C_VBO_VISIBILITY],y=[t.C_VBO_GEOMETRY,t.C_VBO_VISIBILITY],m=[t.C_VBO_GEOMETRY,t.C_VBO_VISIBILITY],I=[t.C_VBO_GEOMETRY,t.C_VBO_VISIBILITY],g=[t.C_VBO_GEOMETRY,t.C_VBO_VISIBILITY,t.C_VBO_VISIBILITY_RANGE];function v(e){switch(e){case p.WGLGeometryType.MARKER:return f;case p.WGLGeometryType.FILL:return y;case p.WGLGeometryType.LINE:return m;case p.WGLGeometryType.TEXT:return I;case p.WGLGeometryType.LABEL:return g}return null}function L(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function C(e){switch(e){case"esriSMS":return"simple-marker";case"esriPMS":return"picture-marker";case"esriSLS":return"simple-line";case"esriPLS":return"picture-line";case"esriSFS":return"simple-fill";case"esriPFS":return"picture-fill";case"esriTS":return"text"}return e}function S(e){var t=C(e.type);if(t){switch(t){case"simple-marker":case"picture-marker":case"CIMPointSymbol":return!0}return!1}}function M(e){var t=C(e.type);if(t){switch(t){case"simple-fill":case"picture-fill":case"CIMPolygonSymbol":return!0}return!1}}function O(e){var t=C(e.type);if(t){switch(t){case"simple-line":case"picture-line":case"CIMLineSymbol":return!0}return!1}}function R(e){var t=C(e.type);if(t){switch(t){case"text":case"CIMTextSymbol":return!0}return!1}}function N(e){return e&&e.length||0}function V(e){return"string"==typeof e}t.getNamedBuffers=v,t.strideToPackingFactor=L,t.allocateTypedArrayBuffer=function(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}},t.allocateTypedArrayBufferwithData=function(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}},t.getSymbolGeometryType=function(e){return S(e)?p.WGLGeometryType.MARKER:O(e)?p.WGLGeometryType.LINE:M(e)?p.WGLGeometryType.FILL:R(e)?p.WGLGeometryType.TEXT:p.WGLGeometryType.UNKNOWN},t.normalizeSymbolType=C,t.isMarkerSymbol=S,t.isFillSymbol=M,t.isLineSymbol=O,t.isPictureSymbol=function(e){var t=C(e.type);if(t){switch(t){case"picture-marker":case"picture-line":case"picture-fill":return!0}return!1}return!1},t.isTextSymbol=R,t.getTextProperties=function(e){return _.TextProperties.pool.acquire(e.color?u.copyAndPremultiply(e.color):[255,255,255,255],e.haloColor?u.copyAndPremultiply(e.haloColor):[255,255,255,255],s.pt2px(e.haloSize),s.pt2px(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)},t.isSameUniformValue=function(e,t){return!1},t.isSameMaterialInfo=function(e,t){if(e.materialKey!==t.materialKey)return!1;if(N(e.texBindingInfo)!==N(t.texBindingInfo))return!1;if(N(e.materialParams)!==N(t.materialParams))return!1;for(var i=e.texBindingInfo.length,r=0;r<i;++r){var n=e.texBindingInfo[r],o=t.texBindingInfo[r];if(n.unit!==o.unit||n.pageId!==o.pageId||n.semantic!==o.semantic)return!1}var s=e.materialParams.length;for(r=0;r<s;++r){var a=e.materialParams[r],l=t.materialParams[r];if(a.name!==l.name||(a.value,l.value,1))return!1}return!0},t.serializeString=function(e,t,i){for(var r=0,n=e.length,o=0;o<n;++o)t&&(t[i+r]=e.charCodeAt(o)),++r;return t&&(t[i+r]=0),++r},t.deserializeString=function(e,t,i){for(var r=0,n=!(e.s="");n;){var o=t[i+r];++r,0!==o?e.s+=String.fromCharCode(o):n=!1}return r},t.isDefined=function(e){return null!=e},t.isNumber=function(e){return"number"==typeof e},t.isString=V,t.isStringOrNull=function(e){return null==e||V(e)},t.lerp=function(e,t,i){return e+(t-e)*i};var P=function(){function e(){this._arr=[],this._push=this._push.bind(this)}return e.prototype._push=function(e,t){this._arr.push(t)},e.prototype.getKeys=function(e){return this._arr.length=0,e&&e.forEach(this._push),this._arr},e}();t.KeysGetter=P;var w=function(){function e(){this._arr=[],this._push=this._push.bind(this)}return e.prototype._push=function(e,t){this._arr.push(e)},e.prototype.getValues=function(e){return this._arr.length=0,e&&e.forEach(this._push),this._arr},e}();function A(e){var t={};switch(e){case"esriGeometryPoint":return function(e,i,r,n){return a.hydratePoint(i,t,e,r,n)};case"esriGeometryPolygon":return function(e,i,r,n){return a.hydratePolygon(i,t,e,r,n)};case"esriGeometryPolyline":return function(e,i,r,n){return a.hydratePolyline(i,t,e,r,n)};case"esriGeometryMultipoint":return function(e,i,r,n){return a.hydrateMultipoint(i,t,e,r,n)};default:return T.error(new n("mapview-arcade","Unable to handle geometryType: "+e)),function(e,t,i,r){return e}}}t.ValuesGetter=w,t.getCapType=function(e,t){switch(e){case"butt":return p.CapType.BUTT;case"round":return t?p.CapType.SQUARE:p.CapType.ROUND;case"square":return p.CapType.SQUARE;default:return T.error(new n("mapview-invalid-type","Cap type "+e+" is not a valid option. Defaulting to round")),p.CapType.ROUND}},t.getJoinType=function(e){switch(e){case"miter":return p.JoinType.MITER;case"bevel":return p.JoinType.BEVEL;case"round":return p.JoinType.ROUND;default:return T.error(new n("mapview-invalid-type","Join type "+e+" is not a valid option. Defaulting to round")),p.JoinType.ROUND}},t.getVVType=function(e){switch(e){case"opacity":return p.VVType.OPACITY;case"color":return p.VVType.COLOR;case"rotation":return p.VVType.ROTATION;case"size":return p.VVType.SIZE;default:return T.error("Cannot interpret unknown vv: "+e),null}},t.createHydrateFactory=A,t.getTransformParams=function(e){return{transform:e.transform,hasZ:e.hasZ,hasM:e.hasM}},t.createArcadeFunction=function(e,t,n){var o=t.fields,s=t.spatialReference,a=t.hasGeometryExpr,u=t.geometryType,p=l.createFunction(e),_=new r,c=new i({viewingMode:null,scale:null}),h={},d={vars:{$feature:_,$view:null},spatialReference:s},T={fields:o},E=A(u);return function(e,t,i){if(a){var r=t.transform,o=t.hasZ,u=t.hasM,f=E(e.geometry,r,o,u);f.spatialReference=s,_.repurposeFromGraphicLikeObject(f,e.attributes,T)}else _.repurposeFromGraphicLikeObject(e.geometry,e.attributes,T);i?((d.vars.$view=c).attributes.viewingMode=i.viewingMode,c.attributes.scale=i.scale):d.vars.$view=h;var y=l.executeFunction(p,d);return n?n(y):y}},t.copyMeshData=function(e,t,i,r,n,o,s){for(var a in o)for(var l=o[a].stride,u=L(l),p=o[a].data,_=i[a].data,c=l*n.vertexCount/u,h=l*e/u,d=l*n.vertexFrom/u,T=0;T<c;++T)_[T+h]=p[T+d];var E=n.indexCount;for(T=0;T<E;++T)r[T+t]=s[T+n.indexFrom]-n.vertexFrom+e},t.C_VBO_INFO=((d={})[t.C_VBO_GEOMETRY]=35044,d[t.C_VBO_VISIBILITY]=35044,d[t.C_VBO_VISIBILITY_RANGE]=35048,d),t.createGeometryData=function(e,t){for(var i=[],r=0;r<5;++r){for(var n={},o=0,s=v(r);o<s.length;o++){var a=s[o];n[a]={data:t(r,a)}}i.push({data:e(r),buffers:n})}return i},t.resampleHermite=function(e,t,i,r,n,o,s){void 0===s&&(s=!0);for(var a=t/n,l=i/o,u=Math.ceil(a/2),p=Math.ceil(l/2),_=0;_<o;_++)for(var c=0;c<n;c++){for(var h=4*(c+(s?o-_-1:_)*n),d=0,T=0,E=0,f=0,y=0,m=0,I=0,g=(_+.5)*l,v=Math.floor(_*l);v<(_+1)*l;v++)for(var L=Math.abs(g-(v+.5))/p,C=(c+.5)*a,S=L*L,M=Math.floor(c*a);M<(c+1)*a;M++){var O=Math.abs(C-(M+.5))/u,R=Math.sqrt(S+O*O);-1<=R&&R<=1&&0<(d=2*R*R*R-3*R*R+1)&&(I+=d*e[3+(O=4*(M+v*t))],E+=d,e[O+3]<255&&(d=d*e[O+3]/250),f+=d*e[O],y+=d*e[O+1],m+=d*e[O+2],T+=d)}r[h]=f/T,r[h+1]=y/T,r[h+2]=m/T,r[h+3]=I/E}},t.createTextureFromTexelData=function(e,t){var i,r;return r=c.isPowerOfTwo(t.width)&&c.isPowerOfTwo(t.height)?(i=!0,9987):(i=!1,9729),new h(e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:i,samplingMode:r,wrapMode:33071,flipped:!0},t)},t.geometryToMappedGeometry=function(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}}.apply(null,r))||(e.exports=n)},1582:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){var i,r,n,o,s,a,l,u,p,_;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.WGLGeometryType||(t.WGLGeometryType={}))[i.FILL=0]="FILL",i[i.LINE=1]="LINE",i[i.MARKER=2]="MARKER",i[i.TEXT=3]="TEXT",i[i.LABEL=4]="LABEL",i[i.NONE=5]="NONE",i[i.UNKNOWN=6]="UNKNOWN",i[i.COUNT=7]="COUNT",(r=t.WGLGeometryTransactionStatus||(t.WGLGeometryTransactionStatus={}))[r.SUCCEEDED=0]="SUCCEEDED",r[r.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(n=t.WGLDrawPhase||(t.WGLDrawPhase={}))[n.NONE=0]="NONE",n[n.MAP=1]="MAP",n[n.LABEL=2]="LABEL",n[n.LABEL_ALPHA=4]="LABEL_ALPHA",n[n.HITTEST=8]="HITTEST",n[n.HIGHLIGHT=16]="HIGHLIGHT",n[n.CLIP=32]="CLIP",n[n.DEBUG=64]="DEBUG",n[n.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(o=t.VVType||(t.VVType={}))[o.SIZE=0]="SIZE",o[o.COLOR=1]="COLOR",o[o.OPACITY=2]="OPACITY",o[o.ROTATION=3]="ROTATION",(s=t.WGLVVFlag||(t.WGLVVFlag={}))[s.NONE=0]="NONE",s[s.OPACITY=1]="OPACITY",s[s.COLOR=2]="COLOR",s[s.ROTATION=4]="ROTATION",s[s.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",s[s.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",s[s.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",s[s.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(a=t.WGLVVTarget||(t.WGLVVTarget={}))[a.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",a[a.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",a[a.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",a[a.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(l=t.CapType||(t.CapType={}))[l.UNKNOWN=0]="UNKNOWN",l[l.BUTT=1]="BUTT",l[l.ROUND=2]="ROUND",l[l.SQUARE=3]="SQUARE",(u=t.JoinType||(t.JoinType={}))[u.UNKNOWN=0]="UNKNOWN",u[u.MITER=1]="MITER",u[u.BEVEL=2]="BEVEL",u[u.ROUND=3]="ROUND",(p=t.EsriSymbolType||(t.EsriSymbolType={})).SIMPLE_MARKER="esriSMS",p.SIMPLE_LINE="esriSLS",p.SIMPLE_FILL="esriSFS",p.PICTURE_MARKER="esriPMS",p.PICTURE_FILL="esriPFS",p.TEXT="esriTS",(_=t.EsriSymbolTypeKebab||(t.EsriSymbolTypeKebab={})).SIMPLE_MARKER="simple-marker",_.SIMPLE_LINE="simple-line",_.SIMPLE_FILL="simple-fill",_.PICTURE_MARKER="picture-marker",_.PICTURE_FILL="picture-fill",_.TEXT="text"}.apply(null,r))||(e.exports=n)},1602:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(13),i(1)],void 0===(n=function(e,t,i,r,n,o,s){return function(e){function t(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var r=e.call(this)||this;return r.handles=new o,r}return i(t,e),t.prototype.destroy=function(){this.handles.destroy()},r([s.property({readOnly:!0})],t.prototype,"handles",void 0),r([s.subclass("esri.core.HandleOwner")],t)}(s.declared(n))}.apply(null,r))||(e.exports=n)},1640:function(e,t,i){var r,n;r=[i.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=new Float32Array(1),r=new Uint32Array(i.buffer);t.nextHighestPowerOfTwo=function(e){var t=e;t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16;var i=++t>>1;return e-i<t-e?i:t},t.toUint32=function(e){return i[0]=e,r[0]},t.toFloat32=function(e){return r[0]=e,i[0]},t.i1616to32=function(e,t){return 65535&e|t<<16},t.i8888to32=function(e,t,i,r){return 255&e|(255&t)<<8|(255&i)<<16|r<<24},t.i8816to32=function(e,t,i){return 255&e|(255&t)<<8|i<<16},t.numTo32=function(e){return 0|e}}.apply(null,r))||(e.exports=n)},1743:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(1640)],void 0===(n=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.white=[255,255,255,1];var r=[0,0,0,0];function n(e,t){return Array.isArray(t)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]):(e[0]=t.r,e[1]=t.g,e[2]=t.b,e[3]=t.a),e}function o(e,t,i){void 0===t&&(t=0),void 0===i&&(i=!1);var r=e[t+3];return e[t+0]*=r,e[t+1]*=r,e[t+2]*=r,i||(e[t+3]*=255),e}t.premultiplyAlpha=o,t.copyAndPremultiply=function(e){return o(n([],e))},t.premultiplyAlphaUint32=function(e){return o(n(r,e)),i.i8888to32(r[0],r[1],r[2],r[3])},t.premultiplyAlphaRGBA=function(e){var t=e.r,r=e.g,n=e.b,o=e.a,s=t*o,a=r*o,l=n*o,u=255*o;return i.i8888to32(s,a,l,u)}}.apply(null,r))||(e.exports=n)},1958:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(1602),i(1)],void 0===(n=function(e,t,i,r,n,o,s){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.processor=null,t.remoteClient=null,t.service=null,t.tileStore=null,t}return i(t,e),t.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0}),t.prototype.enableEvent=function(e){},r([s.property()],t.prototype,"processor",void 0),r([s.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),r([s.property({constructOnly:!0})],t.prototype,"service",void 0),r([s.property({dependsOn:["tileStore"]})],t.prototype,"spatialReference",null),r([s.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),r([s.property({constructOnly:!0})],t.prototype,"tileStore",void 0),r([s.subclass()],t)}(s.declared(n,o));t.default=a}.apply(null,r))||(e.exports=n)},1965:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(84)],void 0===(n=function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}return e.prototype.acquire=function(e,t,i,r,n,o,s,a,l){this.color=e,this.haloColor=t,this.haloSize=i,this.size=r,this.angle=n,this.offsetX=o,this.offsetY=s,this.hAnchor=a,this.vAnchor=l},e.prototype.release=function(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0},e.pool=new i(e),e}();t.TextProperties=r}.apply(null,r))||(e.exports=n)},2083:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(2),i(0),i(4),i(47),i(1),i(38),i(543)],void 0===(n=function(e,t,i,r,n,o,s,a,l){Object.defineProperty(t,"__esModule",{value:!0});var u=[0,0],p=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._onGoingTile=null,i._onGoingPromise=null,i._isPaused=!1,i._scheduledNextHandle=null,i._timestamp=Date.now(),i.tileInfoView=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingPromise},enumerable:!0,configurable:!0}),t.prototype.cancel=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingPromise&&(this._onGoingPromise.cancel(),this._onGoingTile=this._onGoingPromise=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){this._queue.has(e)||(this._queue.set(e,{tileId:e,key:l.TileKey.pool.acquire(e),timestamp:t||this._timestamp}),this._scheduleNext(),this.notifyChange("updating"))},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;if(e){var t=e.tileId;this.push(t,this._timestamp)}this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this._onGoingPromise=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=o.schedule(this._next))},t.prototype._next=function(){if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)this._scheduledNextHandle=null;else{this._scheduledNextHandle=null;var e=this._peek(),t=e.tileId,i=e.key;l.TileKey.pool.release(i),this._queue.delete(t),this._onGoingTile=e,this._onGoingPromise=this.process(t,this._timestamp),function(e){return e&&"function"==typeof e.then}(this._onGoingPromise)?this._onGoingPromise.then(this._finalize,this._finalize):this._finalize(),this.notifyChange("updating")}},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,i=this.state.center,r=Number.NEGATIVE_INFINITY,n=Number.POSITIVE_INFINITY,o=null;return this._queue.forEach(function(s,l){t.getTileCoords(u,s.key);var p=e._timestamp-s.timestamp;if(isNaN(p))(_=a.vec2.distance(u,i))<n&&(n=_,o=s);else if(p===r){var _;(_=a.vec2.distance(u,i))<n&&(n=_,o=s)}else p>r&&(r=p,n=Number.POSITIVE_INFINITY,o=s)}),o},r([s.property({readOnly:!0})],t.prototype,"length",null),r([s.property({constructOnly:!0})],t.prototype,"process",void 0),r([s.property()],t.prototype,"state",void 0),r([s.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),r([s.property({readOnly:!0})],t.prototype,"updating",null),r([s.subclass()],t)}(s.declared(n));t.default=p}.apply(null,r))||(e.exports=n)}}]);
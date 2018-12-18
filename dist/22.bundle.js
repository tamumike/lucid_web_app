(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/WebTileLayer":540})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{540:function(e,t,r){var l,n;l=[r.dj.c(e.i),t,r(10),r(2),r(0),r(183),r(191),r(30),r(21),r(8),r(5),r(120),r(7),r(17),r(1),r(65),r(96),r(94),r(188),r(144),r(69),r(193),r(143)],void 0===(n=function(e,t,l,n,o,i,p,a,s,u,c,y,f,d,v,h,m,w,b,g,T,R,S){return function(e){function t(t,r){var l=e.call(this)||this;return l.copyright="",l.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),l.legendEnabled=!0,l.popupEnabled=!0,l.spatialReference=a.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new S({size:256,dpi:96,format:"PNG8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new R({level:0,scale:591657527.591555,resolution:156543.033928}),new R({level:1,scale:295828763.795777,resolution:78271.5169639999}),new R({level:2,scale:147914381.897889,resolution:39135.7584820001}),new R({level:3,scale:73957190.948944,resolution:19567.8792409999}),new R({level:4,scale:36978595.474472,resolution:9783.93962049996}),new R({level:5,scale:18489297.737236,resolution:4891.96981024998}),new R({level:6,scale:9244648.868618,resolution:2445.98490512499}),new R({level:7,scale:4622324.434309,resolution:1222.99245256249}),new R({level:8,scale:2311162.217155,resolution:611.49622628138}),new R({level:9,scale:1155581.108577,resolution:305.748113140558}),new R({level:10,scale:577790.554289,resolution:152.874056570411}),new R({level:11,scale:288895.277144,resolution:76.4370282850732}),new R({level:12,scale:144447.638572,resolution:38.2185141425366}),new R({level:13,scale:72223.819286,resolution:19.1092570712683}),new R({level:14,scale:36111.909643,resolution:9.55462853563415}),new R({level:15,scale:18055.954822,resolution:4.77731426794937}),new R({level:16,scale:9027.977411,resolution:2.38865713397468}),new R({level:17,scale:4513.988705,resolution:1.19432856685505}),new R({level:18,scale:2256.994353,resolution:.597164283559817}),new R({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l}return n(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?c.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["WMTS"]}).then(function(){if(!e.urlTemplate)throw new u("layer:load","WebTileLayer (title: '"+e.title+"', id: '"+e.id+"') is missing the required 'urlTemplate' property value")});return this.addResolvingPromise(t),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&a.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new p(t),n=l.scheme?l.scheme+"://":"//",o=n+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(o);else if(r&&r.length>0&&l.authority.split(".").length>1)for(var i=0,a=r;i<a.length;i++){var s=a[i];e.push(n+l.authority.replace(/\{subDomain\}/gi,s)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new p(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t,r){e&&d.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?d.normalize(e):e},t.prototype.fetchTile=function(e,t,r,l){var n=this.getTileUrl(e,t,r),o={responseType:"image"};return l&&l.timestamp&&(o.query={_ts:l.timestamp}),s(n,o).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],n=this.tileServers[t%this.tileServers.length]+i.substitute(this.urlPath,{level:l,col:r,row:t});return n.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return f.create(function(e){return r.e(13).then(function(){var t=[r(1520)];e.apply(null,t)}.bind(this)).catch(r.oe)});case"3d":return f.create(function(e){return r.e(14).then(function(){var t=[r(1521)];e.apply(null,t)}.bind(this)).catch(r.oe)})}},o([v.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),o([v.property({type:a.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),o([v.property(T.legendEnabled)],t.prototype,"legendEnabled",void 0),o([v.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),o([v.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),o([v.property(T.popupEnabled)],t.prototype,"popupEnabled",void 0),o([v.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),o([v.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),o([v.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),o([v.property({type:S,json:{write:!0}})],t.prototype,"tileInfo",void 0),o([v.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),o([v.property({json:{read:!1}})],t.prototype,"type",void 0),o([v.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),o([v.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),o([v.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),o([v.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),o([v.property({json:{write:!0}})],t.prototype,"wmtsInfo",void 0),o([v.subclass("esri.layers.WebTileLayer")],t)}(v.declared(h,m,y,g,w,b))}.apply(null,l))||(e.exports=n)}}]);
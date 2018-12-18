(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/support/MemorySourceWorker":1546})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1546:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(83),r(10),r(8),r(19),r(7),r(59),r(521),r(1861),r(1747),r(1884),r(562),r(201),r(52)],void 0===(n=function(e,t,r,i,n,s,a,u,o,l,d,p,c,f,y){function h(e){return u.isPoint(e)?null!=e.z:!!e.hasZ}function g(e){return u.isPoint(e)?null!=e.m:!!e.hasM}function m(e,t){if(s("csp-restrictions"))return function(){return i({},e)};var r="this."+t+" = null;";for(var n in e)r+="this."+n+" = "+JSON.stringify(e[n])+";";var a=new Function(r);return function(){return new a}}Object.defineProperty(t,"__esModule",{value:!0});var b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0}},v=function(){return function(){this.code=null,this.description=null}}(),I=function(){return function(e){this.error=new v,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}(),F=function(){return function(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}(),_=function(){function e(){this._queryEngine=null,this._nextObjectId=null,this._fieldsMap=new Map}return e.prototype.load=function(e){var t=this,r=[],s=e.features,u=this._inferLayerProperties(s,e.fields),o=e.fields||[],y=null!=e.hasM?e.hasM:u.hasM,h=null!=e.hasZ?e.hasZ:u.hasZ,g=e.spatialReference||u.spatialReference,v=e.geometryType||u.geometryType,I=e.objectIdField||u.objectIdField;if(!g)return a.reject(new n("feature-layer:missing-property","spatialReference not set and couldn't be inferred from the provided features"));if(!v)return a.reject(new n("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features"));if(!I)return a.reject(new n("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields"));if(u.objectIdField&&I!==u.objectIdField&&(r.push({type:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+I+'" doesn\'t match the field name "'+u.objectIdField+'", found in the provided fields'}),I=u.objectIdField),I&&!u.objectIdField){var F=null;o.some(function(e){return e.name===I&&(F=e,!0)})?(F.type="esriFieldTypeOID",F.editable=!1,F.nullable=!1):o.unshift({alias:I,name:I,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(var _=0,j=o;_<j.length;_++){if(null==(O=j[_]).name&&(O.name=O.alias),null==O.alias&&(O.alias=O.name),!O.name)return a.reject(new n("feature-layer:invalid-field-name","field name is missing",{field:O}));if(O.name===I&&(O.type="esriFieldTypeOID"),-1===c.kebabDict.jsonValues.indexOf(O.type))return a.reject(new n("feature-layer:invalid-field-type",'invalid type for field "'+O.name+'"',{field:O}))}var w={warnings:r,featureErrors:[],layerDefinition:i({},b,{extent:null,geometryType:v,objectIdField:I,fields:o,hasZ:!!h,hasM:!!y}),assignedObjectIds:{}};this._queryEngine=new p.default({fields:o,geometryType:v,hasM:y,hasZ:h,objectIdField:I,spatialReference:g,spatialIndex:new l.default({geometryType:v,hasM:y,hasZ:h})});var E={};this._requiredFieldNames=[];for(var x=0,q=o;x<q.length;x++){var O;if("esriFieldTypeOID"!==(O=q[x]).type&&"esriFieldTypeGlobalID"!==O.type){O.editable=null==O.editable||!!O.editable,O.nullable=null==O.nullable||!!O.nullable;var T=f.getFieldDefaultValue(O);O.nullable||void 0!==T?E[O.name]=T:this._requiredFieldNames.push(O.name)}this._fieldsMap.set(O.name.trim(),O),this._fieldsMap.set(O.name.trim().toLowerCase(),O)}return this._createDefaultAttributes=m(E,I),s&&s.length?(this._nextObjectId=1+s.reduce(function(e,t){var r=t.attributes&&t.attributes[I];return null==r||isNaN(r)||!isFinite(r)?e:Math.max(e,r)},0),d.checkProjectionSupport(s,g).then(function(){return t._loadInitialFeatures(w,s)})):(this._nextObjectId=1,a.resolve(w))},e.prototype.applyEdits=function(e){var t=this,r=this._queryEngine.spatialReference;return d.checkProjectionSupport(e.adds,r).then(function(){return d.checkProjectionSupport(e.updates,r)}).then(function(){return t._applyEdits(e)})},e.prototype.queryFeatures=function(e){return this._queryEngine.executeQuery(y.fromJSON(e))},e.prototype.queryFeatureCount=function(e){return this._queryEngine.executeQueryForCount(y.fromJSON(e))},e.prototype.queryObjectIds=function(e){return this._queryEngine.executeQueryForIds(y.fromJSON(e))},e.prototype.queryExtent=function(e){return this._queryEngine.executeQueryForExtent(y.fromJSON(e))},e.prototype._inferLayerProperties=function(e,t){for(var r=void 0,i=void 0,n=null,s=null,a=null,o=0,l=e;o<l.length;o++){var d=l[o].geometry;if(d&&(n||(n=u.getJsonType(d)),s||(s=d.spatialReference),null==r&&(r=h(d)),null==i&&(i=g(d)),n&&s&&null!=r&&null!=i))break}if(t&&t.length){var p=null;t.some(function(e){var t="esriFieldTypeOID"===e.type,r=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return p=e,t||r})&&(a=p.name)}return{geometryType:n,spatialReference:s,objectIdField:a,hasM:i,hasZ:r}},e.prototype._loadInitialFeatures=function(e,t){for(var r=this._queryEngine,i=r.geometryType,n=r.hasM,s=r.hasZ,a=r.objectIdField,l=r.spatialReference,p=r.spatialIndex,c=[],f=0,y=t;f<y.length;f++){var h=y[f];if(null!=h.uid&&(e.assignedObjectIds[h.uid]=-1),h.geometry&&i!==u.getJsonType(h.geometry))e.featureErrors.push(new I("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),m=this._mixAttributes(g,h.attributes,!0);m?e.featureErrors.push(m):(this._assignObjectId(g,h.attributes,!0),h.attributes=g,null!=h.uid&&(e.assignedObjectIds[h.uid]=h.attributes[a]),h.geometry&&(h.geometry=d.project(h.geometry,h.geometry.spatialReference,l)),c.push(h))}}return p.addMany(o.convertFromFeatures([],c,i,s,n,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e},e.prototype._applyEdits=function(e){var t=this._queryEngine.spatialIndex,r=e.adds,i=e.updates,n=e.deletes,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(r&&r.length&&this._applyAddEdits(s,r),i&&i.length&&this._applyUpdateEdits(s,i),n&&n.length){for(var a=0,u=n;a<u.length;a++){var o=u[a];s.deleteResults.push(new F(o))}t.removeManyById(n)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:s}},e.prototype._applyAddEdits=function(e,t){for(var r=e.addResults,i=this._queryEngine,n=i.geometryType,s=i.hasM,a=i.hasZ,l=i.objectIdField,p=i.spatialReference,c=i.spatialIndex,f=[],y=0,h=t;y<h.length;y++){var g=h[y];if(g.geometry&&n!==u.getJsonType(g.geometry))r.push(new I("Incorrect geometry type."));else{var m=this._createDefaultAttributes(),b=this._mixAttributes(m,g.attributes);if(b)r.push(b);else{if(this._assignObjectId(m,g.attributes),g.attributes=m,null!=g.uid){var v=g.attributes[l];e.uidToObjectId[g.uid]=v}g.geometry&&(g.geometry=d.project(g.geometry,g.geometry.spatialReference,p)),f.push(g),r.push(new F(g.attributes[l]))}}}c.addMany(o.convertFromFeatures([],f,n,a,s,l))},e.prototype._applyUpdateEdits=function(e,t){for(var r=e.updateResults,i=this._queryEngine,n=i.geometryType,s=i.hasM,a=i.hasZ,l=i.objectIdField,p=i.spatialReference,c=i.spatialIndex,f=0,y=t;f<y.length;f++){var h=y[f],g=h.attributes,m=h.geometry,b=g&&g[l];if(null!=b)if(c.hasFeature(b)){var v=o.convertToFeature(c.getFeature(b),n,a,s);if(m){if(n!==u.getJsonType(m)){r.push(new I("Incorrect geometry type."));continue}v.geometry=d.project(m,m.spatialReference,p)}if(g){var _=this._mixAttributes(v.attributes,g);if(_){r.push(_);continue}}c.add(o.convertFromFeature(v,n,a,s,l)),r.push(new F(b))}else r.push(new I("Feature with object id "+b+" missing"));else r.push(new I("Identifier field "+l+" missing"))}},e.prototype._assignObjectId=function(e,t,r){void 0===r&&(r=!1);var i=this._queryEngine.objectIdField;r&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++},e.prototype._mixAttributes=function(e,t,r){for(var i in void 0===r&&(r=!1),t){var n=f.sanitizeNullFieldValue(t[i]),s=this._fieldsMap.get(i)||this._fieldsMap.get(i.toLowerCase());if(s&&(r||s.editable)){var a=f.validateFieldValue(s,n);if(a)return new I(f.validationErrorToString(a,s,n));e[s.name]=n}}for(var u=0,o=this._requiredFieldNames;u<o.length;u++){var l=o[u];if(void 0===e[l])return new I('missing required field "'+l+'"')}return null},e}();t.default=_}.apply(null,i))||(e.exports=n)}}]);
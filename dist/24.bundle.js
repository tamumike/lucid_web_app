(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/PointCloudLayer":542,"esri/renderers/PointCloudRenderer":1689,"esri/renderers/support/pointCloud/PointSizeAlgorithm":1713,"esri/renderers/PointCloudClassBreaksRenderer":1738,"esri/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm":1739,"esri/renderers/support/pointCloud/PointSizeSplatAlgorithm":1740,"esri/renderers/PointCloudStretchRenderer":1741,"esri/renderers/PointCloudUniqueValueRenderer":1742,"esri/layers/pointCloudFilters/PointCloudFilter":1809,"esri/renderers/support/pointCloud/ColorModulation":1823,"esri/renderers/support/pointCloud/pointSizeAlgorithmJSONUtils":1824,"esri/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils":1825,"esri/renderers/support/pointCloud/ColorClassBreakInfo":1826,"esri/renderers/support/pointCloud/StopInfo":1827,"esri/renderers/support/pointCloud/ColorUniqueValueInfo":1828,"esri/layers/pointCloudFilters/PointCloudBitfieldFilter":1918,"esri/layers/pointCloudFilters/PointCloudReturnFilter":1919,"esri/layers/pointCloudFilters/PointCloudValueFilter":1920,"esri/renderers/PointCloudRGBRenderer":1921,"esri/layers/pointCloudFilters/jsonUtils":2183,"esri/layers/pointCloudFilters/typeUtils":2184,"esri/renderers/support/pointCloud/jsonUtils":2185,"esri/renderers/support/pointCloud/typeUtils":2186})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1689:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(6),t(17),t(5),t(1),t(1823),t(1824),t(1825)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u,a){var d=i({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"}),c=function(e){function r(r){var t=e.call(this)||this;return t.type=void 0,t.pointSizeAlgorithm=null,t.colorModulation=null,t.pointsPerInch=10,t}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.prototype.cloneProperties=function(){return{pointSizeAlgorithm:l.clone(this.pointSizeAlgorithm),colorModulation:l.clone(this.colorModulation),pointsPerInch:l.clone(this.pointsPerInch)}},o([p.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:d.write}})],r.prototype,"type",void 0),o([p.property({types:a.pointSizeAlgorithmTypes,json:{read:u.read,write:!0}})],r.prototype,"pointSizeAlgorithm",void 0),o([p.property({type:s.default,json:{write:!0}})],r.prototype,"colorModulation",void 0),o([p.property({json:{write:!0},nonNullable:!0,type:Number})],r.prototype,"pointsPerInch",void 0),o([p.subclass("esri.renderers.PointCloudRenderer")],r)}(p.declared(n));return(c||(c={})).fieldTransformTypeKebabDict=i({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"}),c}.apply(null,o))||(e.exports=n)},1713:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(6),t(17),t(1)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.typeKebabDictionary=i({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),o([l.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:r.typeKebabDictionary.write}})],n.prototype,"type",void 0),o([l.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],n)}(l.declared(n));r.PointSizeAlgorithm=p,r.default=p}.apply(null,o))||(e.exports=n)},1738:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(2),t(0),t(5),t(1),t(1689),t(260),t(1826)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-class-breaks",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.colorClassBreakInfos=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i.clone(this.colorClassBreakInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"colorClassBreakInfos",void 0),a=n([l.subclass("esri.renderers.PointCloudClassBreaksRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1739:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(1),t(1713)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="fixed-size",r.size=0,r.useRealWorldSymbolSizes=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})},o([n.property()],r.prototype,"type",void 0),o([n.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"size",void 0),o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"useRealWorldSymbolSizes",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],r)}(n.declared(i.default));r.PointSizeFixedSizeAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1740:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(1),t(1713)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="splat",r.scaleFactor=1,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({scaleFactor:this.scaleFactor})},o([n.property()],r.prototype,"type",void 0),o([n.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],r.prototype,"scaleFactor",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],r)}(n.declared(i.default));r.PointSizeSplatAlgorithm=l,r.default=l}.apply(null,o))||(e.exports=n)},1741:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(2),t(0),t(5),t(1),t(1689),t(260),t(1827)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-stretch",t.field=null,t.legendOptions=null,t.fieldTransformType=null,t.stops=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),stops:i.clone(this.stops),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"stops",void 0),a=n([l.subclass("esri.renderers.PointCloudStretchRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1742:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(2),t(0),t(5),t(1),t(1689),t(260),t(1828)],void 0===(n=function(e,r,t,o,n,i,l,p,s,u){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-unique-value",t.field=null,t.fieldTransformType=null,t.colorUniqueValueInfos=null,t.legendOptions=null,t}var a;return o(r,e),a=r,r.prototype.clone=function(){return new a(t({},this.cloneProperties(),{field:i.clone(this.field),fieldTransformType:i.clone(this.fieldTransformType),colorUniqueValueInfos:i.clone(this.colorUniqueValueInfos),legendOptions:i.clone(this.legendOptions)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:!0},type:String})],r.prototype,"field",void 0),n([l.property({json:{read:p.fieldTransformTypeKebabDict.read,write:p.fieldTransformTypeKebabDict.write},type:String})],r.prototype,"fieldTransformType",void 0),n([l.property({type:[u.default],json:{write:!0}})],r.prototype,"colorUniqueValueInfos",void 0),n([l.property({type:s.default,json:{write:!0}})],r.prototype,"legendOptions",void 0),a=n([l.subclass("esri.renderers.PointCloudUniqueValueRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},1809:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(6),t(17),t(1)],void 0===(n=function(e,r,t,o,n,i,l){var p=i({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function r(r){return e.call(this)||this}return t(r,e),r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},o([l.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"field",void 0),o([l.property({readOnly:!0,type:String,nonNullable:!0,json:{read:!1,write:p.write}})],r.prototype,"type",void 0),o([l.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],r)}(l.declared(n))}.apply(null,o))||(e.exports=n)},1823:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(6),t(1)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0});var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.field=null,r.minValue=0,r.maxValue=255,r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,minValue:this.minValue,maxValue:this.maxValue})},o([i.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"minValue",void 0),o([i.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"maxValue",void 0),n=o([i.subclass("esri.renderers.support.pointCloud.ColorModulation")],r)}(i.declared(n));r.ColorModulation=l,r.default=l}.apply(null,o))||(e.exports=n)},1824:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(107),t(1739),t(1740)],void 0===(n=function(e,r,t,o,n){function i(e){return e&&l[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var l={pointCloudFixedSizeAlgorithm:o.default,pointCloudSplatAlgorithm:n.default};r.read=function(e,r,o){var n=i(e);if(n){var l=new n;return l.read(e,o),l}return o&&o.messages&&e&&o.messages.push(new t("pointsizealgorithm:unsupported","Point size algorithms of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=i(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},1825:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1713),t(1739),t(1740)],void 0===(n=function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.pointSizeAlgorithmTypes={key:"type",base:t.default,typeMap:{"fixed-size":o.default,splat:n.default}}}.apply(null,o))||(e.exports=n)},1826:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(25),t(6),t(5),t(1),t(36)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.minValue=0,r.maxValue=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([p.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorClassBreakInfo")],r)}(p.declared(i));r.ColorClassBreakInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1827:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(25),t(6),t(5),t(1),t(36)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.label=null,r.value=0,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({label:this.label,value:this.value,color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"value",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.StopInfo")],r)}(p.declared(i));r.StopInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1828:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(25),t(6),t(5),t(1),t(36)],void 0===(n=function(e,r,t,o,n,i,l,p,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.label=null,r.values=null,r.color=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,label:this.label,values:l.clone(this.values),color:l.clone(this.color)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({type:[String],json:{write:!0}})],r.prototype,"values",void 0),o([p.property({type:n,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),i=o([p.subclass("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],r)}(p.declared(i));r.ColorUniqueValueInfo=u,r.default=u}.apply(null,o))||(e.exports=n)},1918:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1809)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.requiredClearBits=null,t.requiredSetBits=null,t.type="bitfield",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,requiredClearBits:n.clone(this.requiredClearBits),requiredSetBits:n.clone(this.requiredSetBits)})},o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],r.prototype,"requiredClearBits",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,overridePolicy:function(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],r.prototype,"requiredSetBits",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1919:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1809)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.includedReturns=[],t.type="return",t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,includedReturns:n.clone(this.includedReturns)})},o([i.property({type:[String],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"includedReturns",void 0),o([i.property()],r.prototype,"type",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudReturnFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1920:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(2),t(0),t(5),t(1),t(1809)],void 0===(n=function(e,r,t,o,n,i,l){return function(e){function r(r){var t=e.call(this)||this;return t.mode="exclude",t.type="value",t.values=[],t}var l;return t(r,e),l=r,r.prototype.clone=function(){return new l({field:this.field,mode:this.mode,values:n.clone(this.values)})},o([i.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"mode",void 0),o([i.property()],r.prototype,"type",void 0),o([i.property({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"values",void 0),l=o([i.subclass("esri.layers.pointCloudFilters.PointCloudValueFilter")],r)}(i.declared(l))}.apply(null,o))||(e.exports=n)},1921:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(2),t(0),t(5),t(1),t(1689)],void 0===(n=function(e,r,t,o,n,i,l,p){return function(e){function r(r){var t=e.call(this)||this;return t.type="point-cloud-rgb",t.field=null,t}var p;return o(r,e),p=r,r.prototype.clone=function(){return new p(t({},this.cloneProperties(),{field:i.clone(this.field)}))},n([l.property()],r.prototype,"type",void 0),n([l.property({json:{write:{target:{field:{type:String},fieldTransformType:{type:String}},enabled:!0}},type:String})],r.prototype,"field",void 0),p=n([l.subclass("esri.renderers.PointCloudRGBRenderer")],r)}(l.declared(p))}.apply(null,o))||(e.exports=n)},2183:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(77),t(107),t(1918),t(1919),t(1920)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudValueFilter:l,pointCloudBitfieldFilter:n,pointCloudReturnFilter:i};r.read=function(e,r,t){if(e&&Array.isArray(e))return e.map(function(e){var r=p(e);if(r){var n=new r;return n.read(e,t),n}t&&t.messages&&e&&t.messages.push(new o("point-cloud-filter:unsupported","Point cloud filters of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})},r.write=function(e,r,o,n){var i=e.map(function(e){return e.write({},n)});t.setDeepValue(o,i,r)},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2184:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1918),t(1809),t(1919),t(1920)],void 0===(n=function(e,r,t,o,n,i){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{value:i,bitfield:t,return:n}}}.apply(null,o))||(e.exports=n)},2185:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(107),t(1738),t(1921),t(1741),t(1742)],void 0===(n=function(e,r,t,o,n,i,l){function p(e){return e&&s[e.type]||null}Object.defineProperty(r,"__esModule",{value:!0});var s={pointCloudClassBreaksRenderer:o,pointCloudRGBRenderer:n,pointCloudStretchRenderer:i,pointCloudUniqueValueRenderer:l};r.read=function(e,r,o){var n=p(e);if(n){var i=new n;return i.read(e,o),i}return o&&o.messages&&e&&o.messages.push(new t("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:o})),null},r.fromJSON=function(e){var r=p(e);return r?r.fromJSON(e):null}}.apply(null,o))||(e.exports=n)},2186:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(1738),t(1689),t(1921),t(1741),t(1742)],void 0===(n=function(e,r,t,o,n,i,l){Object.defineProperty(r,"__esModule",{value:!0}),r.types={key:"type",base:o,typeMap:{"point-cloud-class-breaks":t,"point-cloud-rgb":n,"point-cloud-stretch":i,"point-cloud-unique-value":l}}}.apply(null,o))||(e.exports=n)},542:function(e,r,t){var o,n;o=[t.dj.c(e.i),r,t(10),t(2),t(0),t(21),t(8),t(5),t(9),t(7),t(20),t(1),t(51),t(508),t(2183),t(2184),t(155),t(2185),t(2186),t(192)],void 0===(n=function(e,r,o,n,i,l,p,s,u,a,d,c,y,f,v,h,b,w,m,g){function C(e,r,t){return e&&((e=w.read(e,r,t)||void 0)||S.error("Failed to create renderer",{rendererDefinition:e,layer:this,context:t})),e}var S=u.getLogger("esri.layers.PointCloudLayer");return function(e){function r(r,t){var o=e.call(this)||this;return o.operationalLayerType="PointCloudLayer",o.opacity=1,o.fields=null,o.elevationInfo=null,o.legendEnabled=!0,o.renderer=null,o.type="point-cloud",o}return n(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readServiceFields=function(e,r,t){return Array.isArray(e)?e.map(function(e){var r=new b;return"FieldTypeInteger"===e.type&&((e=s.clone(e)).type="esriFieldTypeInteger"),r.read(e,t),r}):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map(function(e){return new b({name:e.name,type:"ELEVATION"===e.name?"double":"integer"})}):null},r.prototype.load=function(){var e=this,r=this.loadFromPortal({supportedTypes:["Scene Service"]}).always(function(){return e._fetchService()});return this.addResolvingPromise(r),this.when()},r.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return a.reject(new p("point-cloud-layer:view-not-supported","PointCloudLayer is only supported in 3D"));case"3d":return a.create(function(e){return Promise.all([t.e(0),t.e(1),t.e(68)]).then(function(){var r=[t(2317)];e.apply(null,r)}.bind(this)).catch(t.oe)})}},r.prototype._validateLayer=function(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new p("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new p("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new p("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})},r.prototype.hasCachedStatistics=function(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some(function(r){return r.name===e})},r.prototype.queryCachedStatistics=function(e){if(!this.hasCachedStatistics(e))return a.reject(new p("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available"));for(var r=0,t=this.attributeStorageInfo;r<t.length;r++){var o=t[r];if(o.name===e){var n=d.join(this.parsedUrl.path,"./statistics/"+o.key);return l(n,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data})}}},i([c.property({readOnly:!0})],r.prototype,"operationalLayerType",void 0),i([c.property({readOnly:!0,json:{write:!1,read:!1}})],r.prototype,"opacity",void 0),i([c.property({types:[h.types],json:{origins:{service:{read:{source:"filters",reader:v.read}}},read:{source:"layerDefinition.filters",reader:v.read},write:{target:"layerDefinition.filters",writer:v.write}}})],r.prototype,"filters",void 0),i([c.property({type:[b]})],r.prototype,"fields",void 0),i([c.reader("service","fields",["fields","attributeStorageInfo"])],r.prototype,"readServiceFields",null),i([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([c.property({type:g,json:{origins:{service:{read:{source:"elevationInfo"}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}})],r.prototype,"elevationInfo",void 0),i([c.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),i([c.property({types:m.types,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:C}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:C},write:{target:"layerDefinition.drawingInfo.renderer"}}})],r.prototype,"renderer",void 0),i([c.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([c.subclass("esri.layers.PointCloudLayer")],r)}(c.declared(y,f))}.apply(null,o))||(e.exports=n)}}]);
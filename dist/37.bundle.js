(function(){(this||window).webpackJsonp.registerAbsMids({})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1535:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(124),t(100),t(285),t(196),t(152),t(54),t(153),t(291),t(1524),t(292),t(290),t(293),t(294),t(7),t(18),t(35),t(56),t(22),t(43),t(44),t(20)],void 0===(o=function(e,r,t,n,o,a,i,c,u,s,l,f,d,h,v,p,g,E,m,N,y,w,b){function I(e){return e instanceof Error?p.reject(e):p.reject(new Error(e))}function O(e){return p.resolve(e)}function R(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(M(e,r.arguments[n]));return p.all(t)}function T(e,r,t){return p.create(function(n,o){R(e,r).then(function(a){try{n(t(e,r,a))}catch(e){o(e)}},o)})}function S(e,r,t){try{return R(e,r).then(function(n){try{var o=t(e,r,n);return function(e){return e&&"function"==typeof e.then}(o)?o:p.resolve(o)}catch(e){return I(e)}})}catch(e){return I(e)}}function M(e,r){try{switch(r.type){case"VariableDeclarator":return function(e,r){try{var t=null;return t=null===r.init?p.resolve(null):M(e,r.init),null!==e.localScope?t.then(function(t){return p.create(function(n,o){t===c.voidOperation&&(t=null);var a=r.id.name.toLowerCase();e.localScope[a]={value:t,valueset:!0,node:r.init},n(c.voidOperation)})}):t.then(function(t){return p.create(function(n,o){var a=r.id.name.toLowerCase();t===c.voidOperation&&(t=null),e.globalScope[a]={value:t,valueset:!0,node:r.init},n(c.voidOperation)})})}catch(e){return I(e)}}(e,r);case"VariableDeclaration":return function e(r,t,n){return p.create(function(o,a){n>=t.declarations.length?o(c.voidOperation):M(r,t.declarations[n]).then(function(i){n===t.declarations.length-1?o(c.voidOperation):e(r,t,n+1).then(function(e){o(c.voidOperation)},a)},a)})}(e,r,0);case"BlockStatement":return function(e,r){try{return function e(r,t,n){try{return n>=t.body.length?p.resolve(c.voidOperation):p.create(function(o,a){M(r,t.body[n]).then(function(i){try{i instanceof c.ReturnResult||i===c.breakResult||i===c.continueResult?o(i):n===t.body.length-1?o(i):e(r,t,n+1).then(o,a)}catch(e){a(e)}},a)})}catch(r){return I(r)}}(e,r,0)}catch(e){return I(e)}}(e,r);case"FunctionDeclaration":return function(e,r){try{var t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new o(r,e)},p.resolve(c.voidOperation)}catch(e){return I(e)}}(e,r);case"ReturnStatement":return function(e,r){return p.create(function(t,n){null===r.argument?t(new c.ReturnResult(c.voidOperation)):M(e,r.argument).then(function(e){try{t(new c.ReturnResult(e))}catch(e){n(e)}},n)})}(e,r);case"IfStatement":return function(e,r){return p.create(function(t,n){"AssignmentExpression"!==r.test.type&&"UpdateExpression"!==r.test.type?M(e,r.test).then(function(o){try{!0===o?M(e,r.consequent).then(t,n):!1===o?null!==r.alternate?M(e,r.alternate).then(t,n):t(c.voidOperation):n(new Error(u.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){n(e)}},n):n(new Error(u.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")))})}(e,r);case"ExpressionStatement":return function(e,r){try{return"AssignmentExpression"===r.expression.type?M(e,r.expression):(r.expression.type,M(e,r.expression).then(function(e){return p.create(function(r,t){r(e===c.voidOperation?c.voidOperation:new c.ImplicitResult(e))})}))}catch(e){return p.reject(e)}}(e,r);case"UpdateExpression":return function(e,r){try{if("MemberExpression"===r.argument.type){var o={t:null};return M(e,r.argument.object).then(function(t){return o.t=t,!0===r.argument.computed?M(e,r.argument.property):p.resolve(r.argument.property.name)}).then(function(e){return p.create(function(a,i){var u,s=o.t;if(c.isArray(s)){if(!c.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=s.length+e),e<0||e>=s.length)throw new Error("Assignment outside of array bounds");u=c.toNumber(s[e]),s[e]="++"===r.operator?u+1:u-1}else if(s instanceof t){if(!1===c.isString(e))throw new Error("Dictionary accessor must be a string");if(!0!==s.hasField(e))throw new Error("Invalid Parameter");u=c.toNumber(s.field(e)),s.setField(e,"++"===r.operator?u+1:u-1)}else{if(!(s instanceof n))throw c.isImmutableArray(s)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===c.isString(e))throw new Error("Feature accessor must be a string");if(!0!==s.hasField(e))throw new Error("Invalid Parameter");u=c.toNumber(s.field(e)),s.setField(e,"++"===r.operator?u+1:u-1)}a(!1===r.prefix?u:"++"===r.operator?u+1:u-1)})})}return p.create(function(t,n){var o,a=r.argument.name.toLowerCase();return null!==e.localScope&&void 0!==e.localScope[a]?(o=c.toNumber(e.localScope[a].value),e.localScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void 0!==e.globalScope[a]?(o=c.toNumber(e.globalScope[a].value),e.globalScope[a]={value:"++"===r.operator?o+1:o-1,valueset:!0,node:r},void t(!1===r.prefix?o:"++"===r.operator?o+1:o-1)):void n(new Error("Variable not recognised"))})}catch(e){return p.reject(e)}}(e,r);case"AssignmentExpression":return function(e,r){return p.create(function(o,a){if("MemberExpression"===r.left.type)M(e,r.right).then(function(i){try{M(e,r.left.object).then(function(u){try{(!0===r.left.computed?M(e,r.left.property):p.resolve(r.left.property.name)).then(function(e){try{if(c.isArray(u)){if(!c.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>u.length)throw new Error("Assignment outside of array bounds");if(e===u.length){if("="!==r.operator)throw new Error("Invalid Parameter");u[e]=U(i,r.operator,u[e],r)}else u[e]=U(i,r.operator,u[e],r)}else if(u instanceof t){if(!1===c.isString(e))throw new Error("Dictionary accessor must be a string");if(!0===u.hasField(e))u.setField(e,U(i,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,U(i,r.operator,null,r))}}else{if(!(u instanceof n))throw c.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===c.isString(e))throw new Error("Feature accessor must be a string");if(!0===u.hasField(e))u.setField(e,U(i,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,U(i,r.operator,null,r))}}o(c.voidOperation)}catch(e){a(e)}},a)}catch(e){a(e)}},a)}catch(e){a(e)}},a);else{var i=r.left.name.toLowerCase();null!==e.localScope&&void 0!==e.localScope[i]&&M(e,r.right).then(function(t){try{e.localScope[i]={value:U(t,r.operator,e.localScope[i].value,r),valueset:!0,node:r.right},o(c.voidOperation)}catch(e){a(e)}},a),void 0!==e.globalScope[i]?M(e,r.right).then(function(t){try{e.globalScope[i]={value:U(t,r.operator,e.globalScope[i].value,r),valueset:!0,node:r.right},o(c.voidOperation)}catch(e){a(e)}},a):a(new Error("Cannot assign undeclared variable"))}})}(e,r);case"ForStatement":return function(e,r){try{return null!==r.init?M(e,r.init).then(function(){return p.create(function(t,n){var o={testResult:!0,lastAction:c.voidOperation};A(e,r,o,function(e){t(e)},function(e){n(e)},0)})}):p.create(function(t,n){var o={testResult:!0,lastAction:c.voidOperation};A(e,r,o,function(e){t(e)},function(e){n(e)},0)})}catch(e){return p.reject(e)}}(e,r);case"ForInStatement":return function(e,r){return p.create(function(o,a){M(e,r.right).then(function(i){try{("VariableDeclaration"===r.left.type?M(e,r.left):p.resolve()).then(function(){try{var s="VariableDeclaration"===r.left.type?r.left.declarations[0].id.name:r.left.name,l=null;if(null!==e.localScope&&void 0!==e.localScope[s]&&(l=e.localScope[s]),null===l&&void 0!==e.globalScope[s]&&(l=e.globalScope[s]),null===l)return void a(new Error(u.nodeErrorMessage(r,"RUNTIME","VARIABLENOTDECLARED")));c.isArray(i)||c.isString(i)?C(e,r,i,{reject:a,resolve:o},l):c.isImmutableArray(i)?function(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(c.voidOperation);!function e(r,t,n,o,a,i,u,s,l){try{if(n.length()<=a)return void u(c.voidOperation);o.value="k"===i?n.get(a):a,M(r,t.body).then(function(f){f instanceof c.ReturnResult?u(f):f===c.breakResult?u(c.voidOperation):++l>G?(l=0,setTimeout(function(){e(r,t,n,o,a+1,i,function(e){u(e)},function(e){s(e)},l)})):e(r,t,n,o,a+1,i,function(e){u(e)},function(e){s(e)},l)},function(e){s(e)})}catch(r){s(r)}}(e,r,t,o,0,a,function(e){n.resolve(e)},function(e){n.reject(e)},0)}catch(e){n.reject(e)}}(e,r,i,{reject:a,resolve:o},l):i instanceof t||i instanceof n?function(e,r,t,n,o){try{C(e,r,t.keys(),n,o,"k")}catch(e){n.reject(e)}}(e,r,i,{reject:a,resolve:o},l):c.isFeatureSet(i)?function e(r,t,o,a,i,u,s,l){try{r.next().then(function(f){try{if(null===f)u(c.voidOperation);else{var d=n.createFromGraphicLikeObject(f.geometry,f.attributes,a);d._underlyingGraphic=f,i.value=d,M(t,o.body).then(function(n){try{n===c.breakResult?u(c.voidOperation):n instanceof c.ReturnResult?u(n):++l>G?(l=0,setTimeout(function(){e(r,t,o,a,i,function(e){u(e)},function(e){s(e)},l)})):e(r,t,o,a,i,function(e){u(e)},function(e){s(e)},l)}catch(e){s(e)}},function(e){s(e)})}}catch(e){s(e)}},function(e){s(e)})}catch(r){s(r)}}(i.iterator(e.progressTracker),e,r,i,l,function(e){o(e)},function(e){a(e)},0):C(e,r,[],{reject:a,resolve:o},l)}catch(e){a(e)}},a)}catch(e){a(e)}},a)})}(e,r);case"BreakStatement":return p.resolve(c.breakResult);case"EmptyStatement":return p.resolve(c.voidOperation);case"ContinueStatement":return p.resolve(c.continueResult);case"Identifier":return k(e,r);case"MemberExpression":return function(e,r){try{return M(e,r.object).then(function(o){try{return null===o?p.reject(new Error(u.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))):!1===r.computed?o instanceof t||o instanceof n?p.resolve(o.field(r.property.name)):o instanceof E?p.resolve(x(o,r.property.name,e,r)):p.reject(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):M(e,r.property).then(function(a){return p.create(function(i,s){if(o instanceof t||o instanceof n)c.isString(a)?i(o.field(a)):s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(o instanceof E)c.isString(a)?i(x(o,a,e,r)):s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(c.isArray(o))if(c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(u.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(o[a])}else s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(c.isImmutableArray(o))if(c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length()+a),a>=o.length()||a<0)throw new Error(u.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(o.get(a))}else s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(c.isString(o))if(c.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=o.length+a),a>=o.length||a<0)throw new Error(u.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(o[a])}else s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else s(new Error(u.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")))})})}catch(e){return I(e)}})}catch(e){return I(e)}}(e,r);case"Literal":return O(r.value);case"ThisExpression":return I(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"CallExpression":return function(e,r){try{if("Identifier"!==r.callee.type)return I(u.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){var t=e.localScope[r.callee.name.toLowerCase()];return t.value instanceof c.NativeFunction?t.value.fn(e,r):t.value instanceof o?_(e,r,t.value.definition):I(u.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){var t=e.globalScope[r.callee.name.toLowerCase()];return t.value instanceof c.NativeFunction?t.value.fn(e,r):t.value instanceof o?_(e,r,t.value.definition):I(u.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}return I(u.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))}catch(e){return I(e)}}(e,r);case"UnaryExpression":return function(e,r){try{return M(e,r.argument).then(function(e){return p.create(function(t,n){c.isBoolean(e)&&"!"===r.operator?t(!e):"-"===r.operator?t(-1*c.toNumber(e)):"+"===r.operator?t(1*c.toNumber(e)):n(new Error(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))})})}catch(e){return I(e)}}(e,r);case"BinaryExpression":return function(e,r){try{return p.all([M(e,r.left),M(e,r.right)]).then(function(e){return p.create(function(t,n){var o=e[0],a=e[1];switch(r.operator){case"==":case"=":t(c.equalityTest(o,a));break;case"!=":t(!c.equalityTest(o,a));break;case"<":case">":case"<=":case">=":t(c.greaterThanLessThan(o,a,r.operator));break;case"+":t(c.isString(o)||c.isString(a)?c.toString(o)+c.toString(a):c.toNumber(o)+c.toNumber(a));break;case"-":t(c.toNumber(o)-c.toNumber(a));break;case"*":t(c.toNumber(o)*c.toNumber(a));break;case"/":t(c.toNumber(o)/c.toNumber(a));break;case"%":t(c.toNumber(o)%c.toNumber(a));break;default:n(new Error(u.nodeErrorMessage(r,"RUNTIME","OPERATORNOTRECOGNISED")))}})})}catch(e){return I(e)}}(e,r);case"LogicalExpression":return function(e,r){return p.create(function(t,n){return"AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type?void n(new Error(u.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):"AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type?void n(new Error(u.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):void M(e,r.left).then(function(o){try{if(!c.isBoolean(o))throw new Error(u.nodeErrorMessage(r,"RUNTIME","ONLYBOOLEAN"));switch(r.operator){case"||":!0===o?t(o):M(e,r.right).then(function(e){try{if(!c.isBoolean(e))throw new Error(u.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}},n);break;case"&&":!1===o?t(o):M(e,r.right).then(function(e){try{if(!c.isBoolean(e))throw new Error(u.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}},n);break;default:throw new Error(u.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"))}}catch(e){n(e)}},n)})}(e,r);case"ConditionalExpression":return I(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return function(e,r){try{for(var t=[],n=0;n<r.elements.length;n++)t.push(M(e,r.elements[n]));return p.all(t).then(function(e){return p.create(function(t,n){for(var o=0;o<e.length;o++){if(c.isFunctionParameter(e[o]))return void n(new Error(u.nodeErrorMessage(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===c.voidOperation&&(e[o]=null)}t(e)})})}catch(e){return I(e)}}(e,r);case"ObjectExpression":return function(e,r){try{for(var n=[],o=0;o<r.properties.length;o++)n.push(M(e,r.properties[o]));return p.all(n).then(function(e){return p.create(function(r,n){for(var o={},a=0;a<e.length;a++){var i=e[a];if(c.isFunctionParameter(i.value))throw new Error("Illegal Argument");if(!1===c.isString(i.key))throw new Error("Illegal Argument");i.value===c.voidOperation?o[i.key.toString()]=null:o[i.key.toString()]=i.value}var u=new t(o);u.immutable=!1,r(u)})})}catch(e){return I(e)}}(e,r);case"Property":return function(e,r){try{return M(e,r.value).then(function(e){return p.create(function(t,n){t({key:"Identifier"===r.key.type?r.key.name:r.key.value,value:e})})})}catch(e){return p.reject(e)}}(e,r);case"Array":return I(u.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));default:return I(u.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(e){return I(e)}}function F(e,r,t){try{return M(e,r.body).then(function(n){try{return t.lastAction=n,t.lastAction===c.breakResult?(t.testResult=!1,p.resolve(t)):t.lastAction instanceof c.ReturnResult?(t.testResult=!1,p.resolve(t)):null!==r.update?M(e,r.update).then(function(e){return p.resolve(t)}):p.resolve(t)}catch(e){return p.reject(e)}})}catch(e){return p.reject(e)}}function A(e,r,t,n,o,a){try{(function(e,r,t){try{return null!==r.test?M(e,r.test).then(function(n){try{return!0===e.progressTracker.isCanceled()?p.reject(new Error("Cancelled")):(t.testResult=n,!1===t.testResult?p.resolve(t):!0!==t.testResult?p.reject(new Error(u.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):F(e,r,t))}catch(e){return p.reject(e)}}):F(e,r,t)}catch(e){return p.reject(e)}})(e,r,t).then(function(){try{!0===t.testResult?++a>G?(a=0,setTimeout(function(){A(e,r,t,function(e){n(e)},function(e){o(e)},a)})):A(e,r,t,function(e){n(e)},function(e){o(e)},a):n(t.lastAction instanceof c.ReturnResult?t.lastAction:c.voidOperation)}catch(e){o(e)}},function(e){o(e)})}catch(e){o(e)}}function C(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(c.voidOperation);!function e(r,t,n,o,a,i,u,s,l,f){try{if(o<=i)return void s(c.voidOperation);a.value="k"===u?n[i]:i,M(r,t.body).then(function(d){try{d instanceof c.ReturnResult?s(d):d===c.breakResult?s(c.voidOperation):++f>G?(f=0,setTimeout(function(){e(r,t,n,o,a,i+1,u,function(e){s(e)},function(e){l(e)},f)})):e(r,t,n,o,a,i+1,u,function(e){s(e)},function(e){l(e)},f)}catch(e){l(e)}},function(e){l(e)})}catch(r){l(r)}}(e,r,t,t.length,o,0,a,function(e){n.resolve(e)},function(e){n.reject(e)},0)}catch(e){n.reject(e)}}function U(e,r,t,n){switch(r){case"=":return e===c.voidOperation?null:e;case"/=":return c.toNumber(t)/c.toNumber(e);case"*=":return c.toNumber(t)*c.toNumber(e);case"-=":return c.toNumber(t)-c.toNumber(e);case"+=":return c.isString(t)||c.isString(e)?c.toString(t)+c.toString(e):c.toNumber(t)+c.toNumber(e);case"%=":return c.toNumber(t)%c.toNumber(e);default:throw new Error(u.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function x(e,r,n,o){var c;switch(r=r.toLowerCase()){case"hasz":var s=e.hasZ;return void 0!==s&&s;case"hasm":var l=e.hasM;return void 0!==l&&l;case"spatialreference":var f=e.spatialReference._arcadeCacheId;if(void 0===f){var d=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(d=!1),d&&(q++,e.spatialReference._arcadeCacheId=q,f=q)}var h=new t({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==f&&(h._arcadeCacheId="SPREF"+f.toString()),h}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var v=e[r];return void 0!==v?v:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new a(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new a(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,c);case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":return void 0===(c=e.cache._arcadeCacheId)&&(c=++q,e.cache._arcadeCacheId=c),new i(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,c,1);case"type":return"Multipoint"}}throw new Error(u.nodeErrorMessage(o,"RUNTIME","PROPERTYNOTFOUND"))}function k(e,r){return p.create(function(t,n){var o=r.name.toLowerCase();if(null===e.localScope||void 0===e.localScope[o])if(void 0===e.globalScope[o])n(new Error(u.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND")));else{var a=e.globalScope[o];!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,n):(a.d=M(e,a.node),a.d.then(function(e){try{a.value=e,a.valueset=!0,t(e)}catch(e){n(e)}},n))}else{var i=e.localScope[o];!0===i.valueset?t(i.value):null!==i.d?i.d.then(t,n):(i.d=M(e,i.node),i.d.then(function(e){try{i.value=e,i.valueset=!0,t(e)}catch(e){n(e)}},n))}})}function P(e){return null===e?"":c.isArray(e)?"Array":c.isImmutableArray(e)?"Array":c.isDate(e)?"Date":c.isString(e)?"String":c.isBoolean(e)?"Boolean":c.isNumber(e)?"Number":e instanceof t?"Dictionary":e instanceof n?"Feature":e instanceof N?"Point":e instanceof y?"Polygon":e instanceof w?"Polyline":e instanceof m?"Multipoint":e instanceof g?"Extent":c.isFunctionParameter(e)?"Function":c.isFeatureSet(e)?"FeatureSet":c.isFeatureSetCollection(e)?"FeatureSetCollection":e===c.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function D(e,r){try{var t=e.length,n=Math.floor(t/2);return 0===t?p.resolve([]):1===t?p.resolve([e[0]]):p.create(function(o,a){var i=[D(e.slice(0,n),r),D(e.slice(n,t),r)];p.all(i).then(function(e){try{(function e(r,t,n,o){return p.create(function(a,i){var c=o;r.length>0||t.length>0?r.length>0&&t.length>0?n(r[0],t[0]).then(function(u){try{isNaN(u)&&(u=1),u<=0?(c.push(r[0]),r=r.slice(1)):(c.push(t[0]),t=t.slice(1)),e(r,t,n,o).then(a,i)}catch(e){i(e)}},i):r.length>0?(c.push(r[0]),r=r.slice(1),e(r,t,n,o).then(a,i)):t.length>0&&(c.push(t[0]),t=t.slice(1),e(r,t,n,o).then(a,i)):a(o)})})(e[0],e[1],r,[]).then(o,a)}catch(e){a(e)}},a)})}catch(e){return I(e)}}function L(e,r){var t=e.length,n=Math.floor(t/2);return r||(r=function(e,r){return e<r?-1:e===r?0:1}),0===t?[]:1===t?[e[0]]:function(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}(L(e.slice(0,n),r),L(e.slice(n,t),r),r)}function j(e,r,t){try{var n=e.body;if(t.length!==e.params.length)return I(new Error("Invalid Parameter calls to function."));for(var o=0;o<t.length;o++)r.localScope[e.params[o].name.toLowerCase()]={d:null,value:t[o],valueset:!0,node:null};return M(r,n).then(function(e){return p.create(function(r,t){return e instanceof c.ReturnResult?void r(e.value):e===c.breakResult?void t(new Error("Cannot Break from a Function")):e===c.continueResult?void t(new Error("Cannot Continue from a Function")):e instanceof c.ImplicitResult?void r(e.value):void r(e)})})}catch(e){return p.reject(e)}}function _(e,r,t){return S(e,r,function(r,n,o){var a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,localScope:{},progressTracker:e.progressTracker,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return j(t,a,o)})}function B(e){return function(){var r={applicationCache:void 0===e.context.applicationCache?null:e.context.applicationCache,progressTracker:e.context.progressTracker,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return j(e.definition,r,arguments)}}function V(e,r){var o=new J;void 0!==e&&null!==e||(e={}),void 0!==r&&null!==r||(r={});var a=new t({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});for(var i in a.immutable=!1,o.textformatting={value:a,valueset:!0,node:null},r)o[i]={value:new c.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)e[i]&&"esri.Graphic"===e[i].declaredClass?o[i]={value:n.createFromGraphic(e[i]),valueset:!0,node:null}:o[i]={value:e[i],valueset:!0,node:null};return o}function Y(e){console.log(e)}Object.defineProperty(r,"__esModule",{value:!0});var G=100,q=0,z={};s.registerFunctions(z,T),v.registerFunctions(z,T),d.registerFunctions(z,T),f.registerFunctions(z,T),h.registerFunctions(z,T),l.registerFunctions({functions:z,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:T,standardFunctionAsync:S}),z.typeof=function(e,r){return T(e,r,function(e,r,t){c.pcCheck(t,1,1);var n=P(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n})},z.iif=function(e,r){return p.create(function(t,n){c.pcCheck(null===r.arguments?[]:r.arguments,3,3),M(e,r.arguments[0]).then(function(o){try{if(!1===c.isBoolean(o))return void n(new Error("IF Function must have a boolean test condition"));!0===o?M(e,r.arguments[1]).then(t,n):M(e,r.arguments[2]).then(t,n)}catch(e){n(e)}},n)})},z.decode=function(e,r){return p.create(function(t,n){return r.arguments.length<2?void n(new Error("Missing Parameters")):2===r.arguments.length?void M(e,r.arguments[1]).then(t,n):(r.arguments.length-1)%2==0?void n(new Error("Must have a default value result.")):void M(e,r.arguments[0]).then(function(o){try{(function e(r,t,n,o){return p.create(function(a,i){M(r,t.arguments[n]).then(function(u){try{if(c.equalityTest(u,o))return void M(r,t.arguments[n+1]).then(a,i);var s=t.arguments.length-n;return 1===s?void M(r,t.arguments[n]).then(a,i):(2===s&&a(null),3===s?void M(r,t.arguments[n+2]).then(a,i):void e(r,t,n+2,o).then(a,i))}catch(e){i(e)}},i)})})(e,r,1,o).then(t,n)}catch(e){n(e)}},n)})},z.when=function(e,r){try{return r.arguments.length<3?I("Missing Parameters"):r.arguments.length%2==0?I("Must have a default value result."):M(e,r.arguments[0]).then(function(t){return p.create(function(n,o){!1!==c.isBoolean(t)?function e(r,t,n,o){return p.create(function(a,i){!0===o?M(r,t.arguments[n+1]).then(a,i):3==t.arguments.length-n?M(r,t.arguments[n+2]).then(a,i):M(r,t.arguments[n+2]).then(function(o){try{if(!1===c.isBoolean(o))return void i(new Error("WHEN needs boolean test conditions"));e(r,t,n+2,o).then(a,i)}catch(e){i(e)}})})}(e,r,0,t).then(n,o):o(new Error("WHEN needs boolean test conditions"))})})}catch(e){return I(e)}},z.sort=function(e,r){return S(e,r,function(e,r,t){c.pcCheck(t,1,2);var n,o=t[0];if(c.isImmutableArray(o)&&(o=o.toArray()),!1===c.isArray(o))return I(Error("Illegal Argument"));if(t.length>1)return!1===c.isFunctionParameter(t[1])?I(Error("Illegal Argument")):D(n=o,B(t[1]));if(0===(n=o).length)return p.resolve([]);for(var a={},i=0;i<n.length;i++){var u=P(n[i]);""!==u&&(a[u]=!0)}if(!0===a.Array||!0===a.Dictionary||!0===a.Feature||!0===a.Point||!0===a.Polygon||!0===a.Polyline||!0===a.Multipoint||!0===a.Extent||!0===a.Function)return p.resolve(n.slice(0));var s=0,l="";for(var f in a)s++,l=f;return s>1||"String"===l?n=L(n,function(e,r){if(null===e||void 0===e||e===c.voidOperation)return null===r||void 0===r||r===c.voidOperation?0:1;if(null===r||void 0===r||r===c.voidOperation)return-1;var t=c.toString(e),n=c.toString(r);return t<n?-1:t===n?0:1}):"Number"===l?n=L(n,function(e,r){return e-r}):"Boolean"===l?n=L(n,function(e,r){return e===r?0:r?-1:1}):"Date"===l&&(n=L(n,function(e,r){return r-e})),p.resolve(n)})};var H={failDefferred:I,resolveDeffered:O,fixSpatialReference:c.fixSpatialReference,parseArguments:R,standardFunction:T,standardFunctionAsync:S,evaluateIdentifier:k,arcadeCustomFunction:B};for(var Z in z)z[Z]={value:new c.NativeFunction(z[Z]),valueset:!0,node:null};var J=function(){};J.prototype=z,J.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},J.prototype.pi={value:Math.PI,valueset:!0,node:null},r.functionHelper=H,r.extend=function(e){for(var r={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:T,standardFunctionAsync:S,failDefferred:I,evaluateIdentifier:k,arcadeCustomFunctionHandler:B},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)z[n]={value:new c.NativeFunction(r.functions[n]),valueset:!0,node:null},J.prototype[n]=z[n];for(t=0;t<r.signatures.length;t++)u.addFunctionDeclaration(r.signatures[t],"async")},r.executeScript=function(e,r,t){null!==t&&void 0!==t||(t=new b({wkid:102100}));var n=V(r.vars,r.customfunctions);return M({spatialReference:t,services:r.services,progressTracker:void 0===r.progressTracker||null===r.progressTracker?p.createDeferred().promise:r.progressTracker,globalScope:n,console:r.console?r.console:Y,lrucache:r.lrucache,localScope:null,depthCounter:1},e.body[0].body).then(function(e){return p.create(function(r,t){return e instanceof c.ReturnResult&&(e=e.value),e instanceof c.ImplicitResult&&(e=e.value),e===c.voidOperation&&(e=null),e===c.breakResult?void t(new Error("Cannot return BREAK")):e===c.continueResult?void t(new Error("Cannot return CONTINUE")):e instanceof c.NativeFunction?void t(new Error("Cannot return FUNCTION")):e instanceof o?void t(new Error("Cannot return FUNCTION")):void r(e)})})},r.extractFieldLiterals=function(e,r){return void 0===r&&(r=!1),u.findFieldLiterals(e,r)},r.validateScript=function(e,r){return u.validateScript(e,r,"full")},r.referencesMember=function(e,r){return u.referencesMember(e,r)},r.referencesFunction=function(e,r){return u.referencesFunction(e,r)},r.findFunctionCalls=function(e){return u.findFunctionCalls(e,!1)}}.apply(null,n))||(e.exports=o)}}]);
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mdAn":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return o(e)||i(e,t)||s(e,t)||l()}function o(e){if(Array.isArray(e))return e}function i(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){s=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}}function s(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){return f(e,d(e,t,"get"))}function p(e,t,r){return h(e,d(e,t,"set"),r),r}function d(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function f(e,t){return t.get?t.get.call(e):t.value}function h(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function b(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function m(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(e,t,r){m(e,t),t.set(e,r)}function v(e,t){m(e,t),t.add(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var w=[" daum[ /]"," DCV$"," deusu/","(?:^| )site","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.]+/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?$","^[\\w\\-]+$","^[^ ]{50,}$","^ace explorer","^acoon","^active","^ad muncher","^anglesharp/","^anonymous","^apple-pubsub/","^astute srm","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^blackboard safeassign","^blocknote.net","^braze sender","^captivenetworksupport","^castro","^cf-uc ","^clamav[ /]","^cobweb/","^coccoc","^custom","^dap ","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^email","^enigma browser","^evernote clip resolver","^facebook","^faraday","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^invision","^jeode/","^jetbrains","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^mailchimp\\.com$","^metauri","^microsoft bits","^microsoft data","^microsoft office existence","^microsoft office protocol discovery","^microsoft windows network diagnostics","^microsoft-cryptoapi","^microsoft-webdav-miniredir","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^my browser$","^navermailapp","^netsurf","^nginx\\W","^node-superagent","^octopus","^offline explorer","^pagething","^panscient","^perimeterx","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^shareaza","^shockwave flash","^snapchat","^space bison","^sprinklr","^svn","^swcd ","^t-online browser","^taringa","^test certificate info","^the knowledge ai","^thinklab","^thumbor/","^traackr.com","^tumblr/","^vbulletin","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^www-mechanize","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zeushdthree","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","client","cloud","crawl","daemon","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","news","nutch","offbyone","optimize","pageburst","pagespeed","parse","perl","phantom","pingdom","powermarks","preview","probe","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","spider","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","toolbar","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","valid","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];function y(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch(t){return e}return[["bot","(?<! cu)bot"],["google","(?<! (channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(lib))http"],["java","java(?!;)"]].forEach(function(t){var r=a(t,2),n=r[0],o=r[1],i=e.lastIndexOf(n);~i&&e.splice(i,1,o)}),e}y(w);var k="i",x=new WeakMap,j=new WeakMap,z=new WeakSet,O=new WeakSet,E=function(){function t(r){var o=this;e(this,t),v(this,O),v(this,z),g(this,x,{writable:!0,value:void 0}),g(this,j,{writable:!0,value:void 0}),p(this,x,r||w.slice()),b(this,z,$).call(this);return Object.defineProperties(function(e){return o.test(e)},Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function(e,t){var r=a(t,2),i=r[0],s=r[1];return"function"==typeof s.value&&Object.assign(e,n({},i,{value:o[i].bind(o)})),"function"==typeof s.get&&Object.assign(e,n({},i,{get:function(){return o[i]}})),e},{}))}return r(t,[{key:"pattern",get:function(){return new RegExp(u(this,j))}},{key:"test",value:function(e){return Boolean(e)&&u(this,j).test(e)}},{key:"find",value:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").match(u(this,j));return e&&e[0]}},{key:"matches",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return u(this,x).filter(function(t){return new RegExp(t,k).test(e)})}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.exclude(this.matches(e))}},{key:"extend",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];[].push.apply(u(this,x),t.filter(function(t){return-1===b(e,O,S).call(e,t)}).map(function(e){return e.toLowerCase()})),b(this,z,$).call(this)}},{key:"exclude",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.length;t--;){var r=b(this,O,S).call(this,e[t]);r>-1&&u(this,x).splice(r,1)}b(this,z,$).call(this)}},{key:"spawn",value:function(e){return new t(e||u(this,x))}}]),t}();function $(){p(this,j,new RegExp(u(this,x).join("|"),k))}function S(e){return u(this,x).indexOf(e.toLowerCase())}var A=new E;exports.default=A;
},{}],"s4Oy":[function(require,module,exports) {
"use strict";function t(t,n){return a(t)||o(t,n)||e(t,n)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],l=!0,u=!1;try{for(e=e.call(t);!(l=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);l=!0);}catch(i){u=!0,o=i}finally{try{l||null==e.return||e.return()}finally{if(u)throw o}}return a}}function a(t){if(Array.isArray(t))return t}function l(r){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch(e){return r}return[["bot","(?<! cu)bot"],["google","(?<! (channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(lib))http"],["java","java(?!;)"]].forEach(function(e){var n=t(e,2),o=n[0],a=n[1],l=r.lastIndexOf(o);~l&&r.splice(l,1,a)}),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.amend=l;
},{}],"Z5TU":[function(require,module,exports) {
module.exports=[" daum[ /]"," DCV$"," deusu/","(?:^| )site","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.]+/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?$","^[\\w\\-]+$","^[^ ]{50,}$","^ace explorer","^acoon","^active","^ad muncher","^anglesharp/","^anonymous","^apple-pubsub/","^astute srm","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^blackboard safeassign","^blocknote.net","^braze sender","^captivenetworksupport","^castro","^cf-uc ","^clamav[ /]","^cobweb/","^coccoc","^custom","^dap ","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^email","^enigma browser","^evernote clip resolver","^facebook","^faraday","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^invision","^jeode/","^jetbrains","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^mailchimp\\.com$","^metauri","^microsoft bits","^microsoft data","^microsoft office existence","^microsoft office protocol discovery","^microsoft windows network diagnostics","^microsoft-cryptoapi","^microsoft-webdav-miniredir","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^my browser$","^navermailapp","^netsurf","^nginx\\W","^node-superagent","^octopus","^offline explorer","^pagething","^panscient","^perimeterx","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^shareaza","^shockwave flash","^snapchat","^space bison","^sprinklr","^svn","^swcd ","^t-online browser","^taringa","^test certificate info","^the knowledge ai","^thinklab","^thumbor/","^traackr.com","^tumblr/","^vbulletin","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^www-mechanize","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zeushdthree","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","client","cloud","crawl","daemon","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","news","nutch","offbyone","optimize","pageburst","pagespeed","parse","perl","phantom","pingdom","powermarks","preview","probe","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","spider","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","toolbar","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","valid","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=r(require("..")),t=require("../src/amend/index.js"),n=r(require("../src/list.json"));function r(e){return e&&e.__esModule?e:{default:e}}var d,i=function(e){var t=e.target.value;clearTimeout(d),d=setTimeout(u,200,t)},o=function(e,t,n){if(t){var r=document.createElement("kbd");r.appendChild(document.createTextNode(n)),e.appendChild(r)}else e.appendChild(document.createTextNode(n))},a=function(t){var n,r=document.createDocumentFragment(),d=(0,e.default)(t),i=d&&e.default.find(t),a=i?null===(n=e.default.matches(t))||void 0===n?void 0:n.find(function(e){return new RegExp(e,"i").test(i)}):null;return o(r,null,d?"I think so, yes\n":"I don't think so, no\nI could not find a pattern I recognise"),i&&o(r,null,"The substring "),i&&o(r,"kbd",i),a&&o(r,null," matches the pattern "),a&&o(r,"kbd",a),r},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.innerHTML;for(e=e.trim();l.firstChild;)l.removeChild(l.firstChild);""!==e?(l.appendChild(a(e)),l.className="",setTimeout(function(){l.className="highlight"},100)):l.appendChild(document.createTextNode("Insert user agent string in the text box"))},c=document.querySelector("textarea"),l=document.querySelector("output"),s=window.location.search.replace(/\?ua=(.*)$/,"$1");(0,t.amend)(n.default),c.childNodes.forEach(function(e){var t;return null===(t=e.parentNode)||void 0===t?void 0:t.removeChild(e)}),c.appendChild(document.createTextNode(s?decodeURIComponent(s):navigator.userAgent)),c.addEventListener("keyup",i),c.addEventListener("paste",i),c.addEventListener("focus",function(){return c.select()}),u();
},{"..":"mdAn","../src/amend/index.js":"s4Oy","../src/list.json":"Z5TU"}]},{},["mpVp"], null)
//# sourceMappingURL=script.3a5cfe96.js.map
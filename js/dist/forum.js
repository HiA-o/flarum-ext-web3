/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,e,n)=>{var r=n(735).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},a=Object.prototype,s=a.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},l=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",d=c.toStringTag||"@@toStringTag";function m(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{m({},"")}catch(e){m=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),s=new S(r||[]);return i(a,"_invoke",{value:M(t,n,s)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var h="suspendedStart",w="suspendedYield",v="executing",b="completed",g={};function y(){}function x(){}function k(){}var N={};m(N,l,(function(){return this}));var j=Object.getPrototypeOf,A=j&&j(j(E([])));A&&A!==a&&s.call(A,l)&&(N=A);var _=k.prototype=y.prototype=Object.create(N);function W(t){["next","throw","return"].forEach((function(e){m(t,e,(function(t){return this._invoke(e,t)}))}))}function B(t,e){function n(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&s.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}})}function M(t,n,r){var o=h;return function(a,s){if(o===v)throw Error("Generator is already running");if(o===b){if("throw"===a)throw s;return{value:e,done:!0}}for(r.method=a,r.arg=s;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=b,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=v;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?b:w,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=b,r.method="throw",r.arg=l.arg)}}}function L(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=p(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t||""===t){var n=t[l];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(s.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(r(t)+" is not iterable")}return x.prototype=k,i(_,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:x,configurable:!0}),x.displayName=m(k,d,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,m(t,d,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},W(B.prototype),m(B.prototype,u,(function(){return this})),n.AsyncIterator=B,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var s=new B(f(t,e,r,o),a);return n.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},W(_),m(_,d,"Generator"),m(_,l,(function(){return this})),m(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=E,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&s.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return i.type="throw",i.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=s.call(a,"catchLoc"),l=s.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&s.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:E(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,e,n)=>{var r=n(24)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r);const t=flarum.core.compat["forum/app"];var e=n.n(t);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["forum/components/LogInButtons"];var s=n.n(a);const i=flarum.core.compat["forum/components/SignUpModal"];var c=n.n(i);const l=flarum.core.compat["forum/components/SettingsPage"];var u=n.n(l);function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function f(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,d(t,e)}const p=flarum.core.compat["common/Model"];var h=n.n(p),w=function(t){function e(){return t.apply(this,arguments)||this}f(e,t);var n=e.prototype;return n.address=function(){return h().attribute("address").call(this)},n.source=function(){return h().attribute("source").call(this)},n.type=function(){return h().attribute("type").call(this)},n.apiEndpoint=function(){return t.prototype.apiEndpoint.call(this).replace("/web3-accounts","/web3/accounts")},e}(h());const v=flarum.core.compat["forum/components/LogInButton"];var b=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.initAttrs=function(t){t.className=(t.className||"")+" LogInButton"},e}(n.n(v)());const g=flarum.core.compat["forum/components/LogInModal"];var y=n.n(g);const x=flarum.core.compat["common/components/Modal"];var k=n.n(x);const N=flarum.core.compat["common/components/Button"];var j=n.n(N);const A=flarum.core.compat["common/utils/ItemList"];var _=n.n(A);const W=flarum.core.compat["common/helpers/icon"];var B=n.n(W);const M=flarum.core.compat["common/components/Link"];var L=n.n(M);const P=flarum.core.compat["common/Component"];var O=n.n(P);const S=flarum.core.compat["common/components/LoadingIndicator"];var E=n.n(S);function F(t,e,n,r,o,a,s){try{var i=t[a](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function I(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){F(a,r,o,s,i,"next",t)}function i(t){F(a,r,o,s,i,"throw",t)}s(void 0)}))}}var C=n(183),T=n.n(C);const U=flarum.core.compat["common/utils/classList"];var V=n.n(U);const H=flarum.core.compat["common/components/Tooltip"];var K=n.n(H),G=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).accounts=null,e.loading=!1,e}f(n,t);var r=n.prototype;return r.view=function(){var t,n=this;return null===this.accounts?(this.attrs.wallet.getAccounts().then((function(t){n.accounts=t||[],m.redraw()})),m(E(),null)):m("div",{className:V()("WalletAccounts",{"WalletAccounts--loading":this.loading})},m("div",{className:"Form--centered"},m(j(),{className:"Button Button--text Button--block WalletAccounts-goback",icon:"fas fa-arrow-left",onclick:function(){return n.attrs.onback()}},e().translator.trans("maojindao55-web3.forum.polkadot-connect-wallet-modal.goback"))),m("div",{className:"WalletAccounts-selectedWallet"},m("div",{className:"WalletAccounts-selectedWallet-title"},this.attrs.wallet.title),m("div",{className:"WalletAccounts-selectedWallet-list"},null==(t=this.accounts)?void 0:t.map((function(t,e){return n.accountView(t,e)})))))},r.accountView=function(t,n){var r=e().web3.loadedModules(),o=r.u8aToHex,a=r.decodeAddress,s=e().web3accounts.exists(o(a(t.address))),i="maojindao55-web3.forum.polkadot-connect-wallet-modal.";switch(s){case!0:i+="unattach_address";break;case!1:e().session.user?i+="attach_address":i+="select"}return m("div",{key:n,className:V()("WalletAccounts-account",{"WalletAccounts-account--attached":s,"WalletAccounts-account--unattached":!s})},m("div",{className:"WalletAccounts-account-info"},m("div",{className:"WalletAccounts-account-title"},t.name),m("div",{className:"WalletAccounts-account-address"},t.address)),m("div",{className:"WalletAccounts-account-actions"},m(K(),{text:e().translator.trans(i)},m(j(),{className:V()("Button Button--icon",{"Button--primary":!s,"Button--danger":s}),icon:s?"fas fa-unlink":"fas fa-plus",onclick:s?this.disconnectAccount.bind(this,t.address):this.connectAccount.bind(this,t)}))))},r.connectAccount=function(){var t=I(T().mark((function t(n){var r,o,a,s,i,c,l,u,d,f,p,h;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.wallet,this.loading||(this.loading=!0,m.redraw()),t.next=4,r.enable();case 4:if(!r.signer){t.next=34;break}return t.next=7,e().web3.all();case 7:return o=t.sent,a=o.stringToHex,s=o.u8aToHex,i=o.decodeAddress,t.prev=11,c=r.signer,t.next=15,c.signRaw({type:"bytes",data:a(this.attrs.username),address:n.address});case 15:if(l=t.sent,u=l.signature,d=s(i(n.address)),f=n.type,p=this.attrs.wallet.extensionName,!e().session.user){t.next=25;break}return t.next=23,e().store.createRecord("web3-accounts").save({address:d,source:p,type:f},{errorHandler:this.onerror.bind(this),meta:{signature:u}});case 23:h=t.sent,e().web3accounts.push(h);case 25:this.attrs.onattach&&this.attrs.onattach(d,u,p,f),t.next=32;break;case 28:t.prev=28,t.t0=t.catch(11),e().alerts.show({type:"error"},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.could-not-sign")),e().alerts.show({type:"error"},t.t0.message);case 32:this.loading=!1,m.redraw();case 34:case"end":return t.stop()}}),t,this,[[11,28]])})));return function(e){return t.apply(this,arguments)}}(),r.disconnectAccount=function(){var t=I(T().mark((function t(n){var r,o,a,s;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e().web3.all();case 2:return o=t.sent,a=o.u8aToHex,s=o.decodeAddress,n=a(s(n)),t.next=8,null==(r=e().store.getBy("web3-accounts","address",n))?void 0:r.delete();case 8:e().web3accounts.remove(n),m.redraw();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.onerror=function(t){if(401!==t.status)throw t;e().alerts.show({type:"error"},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.signature-invalid"))},n}(O()),q=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).selectedWallet=null,e}f(n,t);var r=n.prototype;return r.className=function(){return"PolkadotConnectWalletModal"},r.title=function(){return e().translator.trans("maojindao55-web3.forum.polkadot-connect-wallet-modal.title")},r.view=function(){return e().web3.loaded?m("div",{className:"Form"},this.selectedWallet?this.selectedWalletView():this.walletSelectionView()):(e().web3.load().then((function(){return m.redraw()})),m(E(),null))},r.walletSelectionView=function(){return this.walletKindItems().toArray()},r.walletKindItems=function(){var t=new(_()),n={key:"polkadot",title:"Polkadot",wallets:(0,e().web3.loadedModules().getDotsamaWallets)()};return t.add("polkadot",m("div",{className:"Form-group"},this.walletKindView(n))),t},r.walletKindView=function(t,e){var n=this;return void 0===e&&(e=0),m("div",{className:"ConnectWalletModal-walletKind",key:e},m("div",{className:"ConnectWalletModal-walletKind-title"},t.title),m("div",{className:"ConnectWalletModal-walletKind-list"},t.wallets.map((function(t,e){return n.walletView(t,e)}))))},r.walletView=function(t,e){void 0===e&&(e=0);var n,r=t.installed?j():L();return n=t.installed?{onclick:this.listWalletAccounts.bind(this,t)}:{href:t.installUrl,target:"_blank",rel:"noopener noreferrer"},m(r,Object.assign({className:"Button PolkadotConnectWalletModal-wallet",key:e},n),m("div",{className:"PolkadotConnectWalletModal-wallet-logo"},m("img",Object.assign({},t.logo,{alt:""}))),m("div",{className:"PolkadotConnectWalletModal-wallet-title"},t.title),m("div",{className:"PolkadotConnectWalletModal-wallet-indicator"},t.installed?B()("fas fa-arrow-right"):B()("fas fa-download")))},r.selectedWalletView=function(){return m(G,{username:this.attrs.username,wallet:this.selectedWallet,onback:this.listWallets.bind(this),onattach:this.attrs.onattach})},r.listWallets=function(){this.selectedWallet=null},r.listWalletAccounts=function(t){this.selectedWallet=t},n}(O());function R(){return D.apply(this,arguments)}function D(){return(D=I(T().mark((function t(){var n,r,o,a,s,i;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e().forum.attribute("maojindao55-web3.infura-project-id"),t.next=3,e().web3.all();case 3:return r=t.sent,o=r.Web3Modal,a=r.CoinbaseWalletSDK,s=r.WalletConnectProvider,i={walletconnect:{package:s,options:{infuraId:n}},coinbasewallet:{package:a,options:{appName:"My Awesome App",infuraId:n}},binancechainwallet:{package:!0},opera:{package:!0}},t.abrupt("return",new o({providerOptions:i}));case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var z={evm:function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).web3Modal=void 0,e.provider=void 0,e.__providerName=void 0,e.currentAddress=void 0,e}f(n,t);var r=n.prototype;return r.oninit=function(n){t.prototype.oninit.call(this,n),e().web3accounts.load()},r.className=function(){return"EvmConnectWalletModal"},r.title=function(){return e().translator.trans("maojindao55-web3.forum.evm-connect-wallet-modal.title")},r.view=function(){var t=this;return this.currentAddress?m("div",{className:"ConnectWalletModal-walletKind"},m("div",{className:"ConnectWalletModal-walletKind-title"},"EVM"),m("div",{className:"Form-group"},m("label",null,this.currentAddress),e().web3accounts.exists(this.currentAddress)?m("[",null,m(j(),{className:"Button",onclick:function(){return t.disconnect(!1)}},e().translator.trans("maojindao55-web3.forum.evm-connect-wallet-modal.disconnect")),m(j(),{className:"Button",onclick:function(){return t.disconnect(!0)}},e().translator.trans("maojindao55-web3.forum.evm-connect-wallet-modal.disconnect-and-unbind"))):m(j(),{className:"Button",onclick:this.bind.bind(this)},e().translator.trans(e().session.user?"maojindao55-web3.forum.evm-connect-wallet-modal.bind":"maojindao55-web3.forum.evm-connect-wallet-modal.select")))):(this.getProvider().then(function(){var n=I(T().mark((function n(r){return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.request({method:"eth_requestAccounts"});case 3:t.currentAddress=n.sent[0],n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),e().modal.close();case 9:m.redraw();case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}()).catch((function(){return e().modal.close()})),m(E(),null))},r.bind=function(){var t=I(T().mark((function t(){var n,r,o,a,s,i,c;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.provider,t.prev=1,t.next=4,n.request({method:"personal_sign",params:[this.attrs.username,this.currentAddress]});case 4:return r=t.sent,t.next=7,e().web3.all();case 7:if(o=t.sent,a=o.getProviderInfo,s="eth",i="binancechainwallet"===this.__providerName?"Binance Chain":a(n).name,!e().session.user){t.next=16;break}return t.next=14,e().store.createRecord("web3-accounts").save({address:this.currentAddress,source:i,type:s},{errorHandler:this.attrs.onerror.bind(this),meta:{signature:r}});case 14:c=t.sent,e().web3accounts.push(c);case 16:this.attrs.onattach&&this.attrs.onattach(this.currentAddress,r,i,s),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(1),e().alerts.show({type:"error"},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.could-not-sign")),e().alerts.show({type:"error"},t.t0.message);case 23:m.redraw();case 24:case"end":return t.stop()}}),t,this,[[1,19]])})));return function(){return t.apply(this,arguments)}}(),r.disconnect=function(){var t=I(T().mark((function t(n){var r,o;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==(r=this.provider)||!r.close){t.next=6;break}return t.next=4,r.close();case 4:return t.next=6,this.web3Modal.clearCachedProvider();case 6:if(o=this.currentAddress,!n){t.next=10;break}return t.next=10,e().web3accounts.remove(o);case 10:delete this.currentAddress;case 11:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),r.getProvider=function(){var t=I(T().mark((function t(){var e,n=this;return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.web3Modal){t.next=4;break}return t.next=3,R();case 3:this.web3Modal=t.sent;case 4:return this.web3Modal.on("select",(function(t){n.__providerName=t})),t.next=7,this.web3Modal.connect();case 7:return(e=t.sent).on("accountsChanged",(function(t){n.currentAddress=t[0],m.redraw()})),t.abrupt("return",this.provider=e);case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n}(O()),polkadot:q},Y=function(t){function n(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).current=null,e}f(n,t);var r=n.prototype;return r.hide=function(){this.attrs.onclose(),t.prototype.hide.call(this)},r.className=function(){return"ConnectWalletModal"},r.title=function(){return e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.title")},r.content=function(){var t=this;if(this.current){var n=z[this.current];return m("div",{className:"Modal-body"},m("div",{className:"Form--centered",key:1},m(j(),{className:"Button Button--text Button--block WalletAccounts-goback",icon:"fas fa-arrow-left",onclick:function(){return t.current=null}},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.goback"))),m(n,Object.assign({onerror:this.onerror.bind(this)},this.attrs,{key:this.current})))}return m("div",{className:"Modal-body"},this.selectionView())},r.selectionView=function(){var t=this;return m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m(j(),{className:"Button maojindao55-web3-Button--polkadot Button--block",onclick:function(){return t.current="polkadot"}},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.polkadot-wallets")),m(j(),{className:"Button maojindao55-web3-Button--evm Button--block",onclick:function(){return t.current="evm"}},e().translator.trans("maojindao55-web3.forum.connect-wallet-modal.evm-wallets"))))},n}(k()),J=function(t){function n(){return t.apply(this,arguments)||this}f(n,t);var r=n.prototype;return r.title=function(){return e().translator.trans("maojindao55-web3.forum.sign-up.with-wallet")},r.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},this.fields().toArray())),m("div",{className:"Modal-footer"},this.footer())]},r.fields=function(){var n=t.prototype.fields.call(this),r=e().forum.attribute("maojindao55-web3.signup-with-email");return n.remove("password"),r||(n.remove("email"),n.remove("username")),n.setContent("submit",m(j(),{className:"Button Button--block Button--primary",type:"submit",disabled:!1,loading:this.loading},e().translator.trans("maojindao55-web3.forum.sign-up.select-wallet-account",{rightArrow:B()("fas fa-arrow-right")}))),n},r.footer=function(){return[e().forum.attribute("allowSignUp")?m("p",{className:"LogInModal-forgotPassword"},m("a",{onclick:function(){return e().modal.show(c())}},e().translator.trans("maojindao55-web3.forum.sign-up.basic-signup-link"))):m("[",null),m("p",{className:"SignUpModal-logIn"},e().translator.trans("core.forum.sign_up.log_in_text",{a:m("a",{onclick:function(){return e().modal.show(Q)}})}))]},r.onsubmit=function(t){var n=this;t.preventDefault(),t.stopPropagation(),this.loading=!0,e().modal.show(Y,{username:this.username(),onattach:function(t,r,o,a){e().modal.close(),e().request({method:"POST",url:e().forum.attribute("baseUrl")+"/web3/register",body:{username:n.username(),email:n.email(),address:t,signature:r,type:a,source:o},errorHandler:n.onerror.bind(n)}).then((function(){return window.location.reload()}),n.loaded.bind(n)).finally((function(){return n.loading=!1}))},onclose:function(){return n.loading=!1}},!0)},n}(c()),Q=function(t){function n(){return t.apply(this,arguments)||this}f(n,t);var r=n.prototype;return r.title=function(){return e().translator.trans("maojindao55-web3.forum.log-in.with-wallet")},r.content=function(){return[m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},this.fields().toArray())),m("div",{className:"Modal-footer"},this.footer())]},r.fields=function(){var n=t.prototype.fields.call(this);return n.remove("password"),n.setContent("submit",m(j(),{className:"Button Button--block Button--primary",type:"submit",disabled:!this.identification(),loading:this.loading},e().translator.trans("maojindao55-web3.forum.log-in.select-wallet-account",{rightArrow:B()("fas fa-arrow-right")}))),n},r.footer=function(){return[m("p",{className:"LogInModal-forgotPassword"},m("a",{onclick:function(){return e().modal.show(y())}},e().translator.trans("maojindao55-web3.forum.log-in.basic-login-link"))),e().forum.attribute("maojindao55-web3.allow-sign-up")?m("p",{className:"LogInModal-signUp"},e().translator.trans("core.forum.log_in.sign_up_text",{a:m("a",{onclick:function(){return e().modal.show(J)}})})):""]},r.onsubmit=function(t){var n=this;t.preventDefault(),t.stopPropagation(),this.loading=!0,e().modal.show(Y,{username:this.identification(),onattach:function(t,r){e().modal.close(),e().request({method:"POST",url:e().forum.attribute("baseUrl")+"/web3/login",body:{identification:n.identification(),address:t,signature:r,remember:n.remember()},errorHandler:n.onerror.bind(n)}).then((function(){return window.location.reload()}),n.loaded.bind(n)).finally((function(){return n.loading=!1}))},onclose:function(){return n.loading=!1}},!0)},n}(y()),X=function(){function t(){this.accounts=null}var n=t.prototype;return n.loaded=function(){return null!==this.accounts},n.load=function(){var t,n=this;return null!=(t=this.accounts)?t:e().store.find("web3/accounts").then((function(t){n.accounts=t,m.redraw()}))},n.exists=function(t){return null!==this.accounts&&this.accounts.some((function(e){return e.address()===t}))},n.all=function(){return this.accounts},n.push=function(t){null!==this.accounts&&this.accounts.push(t)},n.remove=function(t){var e;null!==this.accounts&&(null==(e=this.accounts.find((function(e){return e.address()===t})))||e.delete(),this.accounts=this.accounts.filter((function(e){return e.address()!==t})))},t}();const Z=flarum.core.compat["common/components/FieldSet"];var tt=n.n(Z);const et=flarum.core.compat["common/utils/extractText"];var nt=n.n(et),rt=function(t){function n(){return t.apply(this,arguments)||this}f(n,t);var r=n.prototype;return r.view=function(){return e().web3.loaded?m(tt(),{className:"Settings-wallets",label:e().translator.trans("maojindao55-web3.forum.settings.wallets_heading")},this.listAccountsView(),m(j(),{icon:"fas fa-wallet",className:"Button",onclick:function(){return e().modal.show(Y,{username:e().session.user.username()})}},e().translator.trans("maojindao55-web3.forum.settings.wallet-connect-button"))):(e().web3.load().then((function(){return m.redraw()})),m(E(),null))},r.listAccountsView=function(){var t=this;return e().web3accounts.loaded()?m("div",{className:"AttachedWallets-list"},e().web3accounts.all().map((function(e){return t.accountView(e)}))):(e().web3accounts.load(),m(E(),null))},r.accountView=function(t){var n=this,r="eth"===t.type(),o=e().web3.loadedModules(),a=o.getProviderInfoByName,s=o.getWalletBySource,i=o.encodeAddress,c=o.hexToU8a,l=r?a(t.source()):s(t.source()),u=r?null==l?void 0:l.logo:null==l?void 0:l.logo.src,d=r?null==l?void 0:l.name:null==l?void 0:l.title,f=r?t.address():i(c(t.address()));return m("div",{className:"AttachedWallets-account"},m("div",{className:"AttachedWallets-account-icon"},m("img",{src:u,alt:""})),m("div",{className:"AttachedWallets-account-content"},m("div",{className:"AttachedWallets-account-wallet"},d),m("div",{className:"AttachedWallets-account-address"},f)),m("div",{className:"AttachedWallets-account-actions"},m(K(),{text:e().translator.trans("maojindao55-web3.forum.settings.unbind")},m(j(),{className:"Button Button--icon",icon:"fas fa-unlink",onclick:function(){return n.unbind(t)}}))))},r.unbind=function(t){confirm(nt()(e().translator.trans("maojindao55-web3.forum.settings.unbind_confirm")))&&t.delete().then((function(){e().web3accounts.remove(t.address()),m.redraw()}))},n}(O());const ot=flarum.core.compat["forum/components/HeaderSecondary"];var at=n.n(ot),st=function(){function t(){this.loaded=!1,this.modules={}}var n=t.prototype;return n.load=function(){var t=I(T().mark((function t(){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.loaded){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,import(e().forum.attribute("baseUrl")+"/assets/extensions/maojindao55-web3/web3.js");case 4:this.modules=t.sent,this.loaded=!0;case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.module=function(){var t=I(T().mark((function t(e){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:return t.abrupt("return",this.modules[e]);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.all=function(){var t=I(T().mark((function t(){return T().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:return t.abrupt("return",this.modules);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.loadedModules=function(){return this.modules},t}();function it(){return it=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},it.apply(null,arguments)}const ct=flarum.core.compat["common/components/Alert"];var lt=n.n(ct);const ut=flarum.core.compat["forum/components/ChangeEmailModal"];var dt=function(t){function n(){return t.apply(this,arguments)||this}f(n,t);var r=n.prototype;return r.content=function(){return this.success?t.prototype.content.call(this):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("input",{type:"email",name:"email",className:"FormControl",placeholder:e().session.user.email(),bidi:this.email,disabled:this.loading})),m("div",{className:"Form-group"},j().component({className:"Button Button--primary Button--block",type:"submit",loading:this.loading},e().translator.trans("core.forum.change_email.submit_button")))))},r.onsubmit=function(t){var n=this;t.preventDefault(),this.email()!==e().session.user.email()?(this.loading=!0,this.alertAttrs=null,e().request({url:e().forum.attribute("apiUrl")+"/web3/set-email",method:"PUT",body:{data:{email:this.email()}},errorHandler:this.onerror.bind(this)}).then((function(){n.success=!0})).catch((function(){})).then(this.loaded.bind(this))):this.hide()},n}(n.n(ut)());const mt=flarum.core.compat["common/models/User"];var ft=n.n(mt);e().initializers.add("blomstra/web3",(function(){e().store.models["web3-accounts"]=w,e().web3=new st,e().web3accounts=new X,ft().prototype.isEmailFake=h().attribute("isEmailFake");var t=!1;(0,o.extend)(at().prototype,"oncreate",(function(){t||(function(t){var e=t.session.user,n=t.forum.attribute("maojindao55-web3.no-email-signup-message");if(n&&e&&e.isEmailFake()){var r=function(t){function e(){return t.apply(this,arguments)||this}return f(e,t),e.prototype.view=function(e){var n=t.prototype.view.call(this,e);return it({},n,{children:[m("div",{className:"container"},n.children)]})},e}(lt()),o=n.match(/\[link](.*?)\[\/link]/)[1],a=n.split("[link]"+o+"[/link]");n=[a[0],function(e){return m(j(),{class:"Button Button--text Button--link",onclick:function(){return t.modal.show(dt)}},e)}(o),a[1]],m.mount($('<div class="App-notices"/>').insertBefore("#content")[0],{view:function(){return m(r,{dismissible:!1,className:"Alert--emailFake"},n)}})}}(e()),t=!0)})),(0,o.extend)(u().prototype,"settingsItems",(function(t){t.add("wallets",m(rt,null),95)})),(0,o.extend)(c().prototype,"body",(function(t){t[0]=!this.attrs.token&&m(s(),{isSignUp:!0})})),(0,o.extend)(s().prototype,"items",(function(t){var n=this,r=this.attrs.isSignUp?"sign-up":"log-in";("sign-up"!==r||e().forum.attribute("maojindao55-web3.allow-sign-up"))&&t.add("web3",m(b,{className:"Button LogInButton--web3",icon:"fas fa-wallet",onclick:function(){return e().modal.show(n.attrs.isSignUp?J:Q)}},e().translator.trans("maojindao55-web3.forum."+r+".with-wallet")))})),(0,o.extend)(at().prototype,"items",(function(t){e().session.user||((e().forum.attribute("maojindao55-web3.prioritize-web3-auth-modals")&&e().forum.attribute("maojindao55-web3.allow-sign-up")||e().forum.attribute("maojindao55-web3.allow-sign-up")&&!e().forum.attribute("allowSignUp"))&&(t.has("signUp")&&t.remove("signUp"),t.add("signUp",m(j(),{className:"Button Button--link",onclick:function(){return e().modal.show(J)}},e().translator.trans("core.forum.header.sign_up_link")),10)),e().forum.attribute("maojindao55-web3.prioritize-web3-auth-modals")&&t.has("logIn")&&(t.get("logIn").attrs.onclick=function(){return e().modal.show(Q)}))}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map
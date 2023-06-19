window.__require=function e(t,n,o){function r(c,l){if(!n[c]){if(!t[c]){var u=c.split("/");if(u=u[u.length-1],!t[u]){var s="function"==typeof __require&&__require;if(!l&&s)return s(u,!0);if(i)return i(u,!0);throw new Error("Cannot find module '"+c+"'")}c=u}var a=n[c]={exports:{}};t[c][0].call(a.exports,function(e){return r(t[c][1][e]||e)},a,a.exports,e,t,n,o)}return n[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<o.length;c++)r(o[c]);return r}({Dice:[function(e,t,n){"use strict";cc._RF.push(t,"8eabasLOYlMH6BvxJ0Lmor3","Dice"),Object.defineProperty(n,"__esModule",{value:!0}),n.Dice=void 0;var o=function(){function e(){}return e.randomInt=function(e,t){return Math.floor(Math.random()*(t-e))+e},e.roll=function(t){return e.randomInt(0,t)},e.rollDifferent=function(t,n){var o=e.roll(t-1);return o<n?o:o+1},e}();n.Dice=o,cc._RF.pop()},{}],GameManager:[function(e,t,n){"use strict";cc._RF.push(t,"7462271VdFN4J38ivhu1fP1","GameManager");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{u(o.next(e))}catch(t){i(t)}}function l(e){try{u(o.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,l)}u((o=o.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(l){i=[6,l],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=e("./slots/SlotRoller"),s=e("./NetworkLog"),a=cc._decorator,p=a.ccclass,f=a.property,h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.machine=null,t.audioClick=null,t.block=!1,t.result=null,t._reelCount=0,t._tileCount=0,t}return r(t,e),Object.defineProperty(t.prototype,"reelCount",{get:function(){if(this._reelCount<=0)try{this._reelCount=this.machine.getComponent("Machine").numberOfReels}catch(e){this._reelCount=0}return this._reelCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tileCount",{get:function(){if(this._tileCount<=0)try{this._tileCount=this.machine.getChildByName("Reel").getChildByName("In").getChildByName("Tile").getComponent("Tile").tileCount}catch(e){this._tileCount=0}return this._tileCount},enumerable:!1,configurable:!0}),t.prototype.start=function(){this.machine.getComponent("Machine").createMachine()},t.prototype.update=function(){this.block&&null!=this.result&&(this.informStop(),this.result=null)},t.prototype.click=function(){cc.audioEngine.playEffect(this.audioClick,!1),!1===this.machine.getComponent("Machine").spinning?(this.block=!1,this.machine.getComponent("Machine").spin(),this.requestResult()):this.block||(this.block=!0,this.machine.getComponent("Machine").lock())},t.prototype.requestResult=function(){return c(this,void 0,Promise,function(){var e;return l(this,function(t){switch(t.label){case 0:return this.result=null,e=this,[4,this.getAnswer()];case 1:return e.result=t.sent(),[2]}})})},t.prototype.getAnswer=function(){var e=this;return new Promise(function(t){setTimeout(function(){var n=u.SlotRoller.roll(e.tileCount,e.reelCount);t(n),s.NetworkLog.appendResult(n)},1e3+500*Math.random())})},t.prototype.informStop=function(){this.machine.getComponent("Machine").stop(this.result)},i([f(cc.Node)],t.prototype,"machine",void 0),i([f({type:cc.AudioClip})],t.prototype,"audioClick",void 0),i([p],t)}(cc.Component);n.default=h,cc._RF.pop()},{"./NetworkLog":"NetworkLog","./slots/SlotRoller":"SlotRoller"}],IResult:[function(e,t){"use strict";cc._RF.push(t,"e75a2h7DDtBI4eby8Zd9t6q","IResult"),cc._RF.pop()},{}],LogGenerator:[function(e,t,n){"use strict";cc._RF.push(t,"6c700uea35D1LbqeXU/UA+6","LogGenerator"),Object.defineProperty(n,"__esModule",{value:!0}),n.LogGenerator=void 0;var o=e("./slots/SlotRoller"),r=function(){function e(){}return e.download=function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)},e.generateBaseLog=function(t,n,r){for(var i=[],c=0;c<r;c++)i.push(o.SlotRoller.roll(t,n));e.download("log.js","module.exports = {\n\thistory: "+JSON.stringify(i)+"\n}")},e}();n.LogGenerator=r,cc._RF.pop()},{"./slots/SlotRoller":"SlotRoller"}],Machine:[function(e,t,n){"use strict";cc._RF.push(t,"e75a3lPjzhNLb8z3HrM6PP0","Machine");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=e("../SlotEnum"),l=cc._decorator,u=l.ccclass,s=l.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.button=null,t.glows=null,t._reelPrefab=null,t._numberOfReels=3,t.reels=[],t.spinning=!1,t}return r(t,e),Object.defineProperty(t.prototype,"reelPrefab",{get:function(){return this._reelPrefab},set:function(e){this._reelPrefab=e,this.node.removeAllChildren(),null!==e&&this.createMachine()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"numberOfReels",{get:function(){return this._numberOfReels},set:function(e){this._numberOfReels=e,null!==this.reelPrefab&&this.createMachine()},enumerable:!1,configurable:!0}),t.prototype.createMachine=function(){var e;this.node.destroyAllChildren(),this.reels=[];for(var t=0;t<this.numberOfReels;t+=1){e=cc.instantiate(this.reelPrefab),this.node.addChild(e),this.reels[t]=e;var n=e.getComponent("Reel");n.shuffle(),n.reelAnchor.getComponent(cc.Layout).enabled=!1}this.node.getComponent(cc.Widget).updateAlignment()},t.prototype.spin=function(){this.spinning=!0,this.button.getChildByName("Label").getComponent(cc.Label).string="STOP",this.disableGlow();for(var e=0;e<this.numberOfReels;e+=1){var t=this.reels[e].getComponent("Reel");t.spinDirection=e%2?c.default.Direction.Down:c.default.Direction.Up,t.doSpin(.03*e)}},t.prototype.lock=function(){this.button.getComponent(cc.Button).interactable=!1},t.prototype.stop=function(e){var t=this;void 0===e&&(e=null),setTimeout(function(){t.spinning=!1,t.button.getComponent(cc.Button).interactable=!0,t.button.getChildByName("Label").getComponent(cc.Label).string="SPIN",t.enableGlow(e)},2500);for(var n=Math.random()/2,o=function(t){var o=t<2+n?t/4:n*(t-2)+t/4,i=r.reels[t].getComponent("Reel");setTimeout(function(){i.readyStop(e.reels[t])},1e3*o)},r=this,i=0;i<this.numberOfReels;i+=1)o(i)},t.prototype.enableGlow=function(e){void 0===e&&(e=null);for(var t=0,n=e.equalLines;t<n.length;t++){var o=n[t];try{for(var r=this.glows.children[o],i=0,c=r.children;i<c.length;i++)c[i].getComponent("sp.Skeleton").animation="loop"}catch(l){console.log(l)}}},t.prototype.disableGlow=function(){try{for(var e=0,t=this.glows.children;e<t.length;e++)for(var n=t[e],o=0,r=n.children;o<r.length;o++)r[o].getComponent("sp.Skeleton").animation=null}catch(i){console.log(i)}},i([s(cc.Node)],t.prototype,"button",void 0),i([s(cc.Node)],t.prototype,"glows",void 0),i([s(cc.Prefab)],t.prototype,"_reelPrefab",void 0),i([s({type:cc.Prefab})],t.prototype,"reelPrefab",null),i([s({type:cc.Integer})],t.prototype,"_numberOfReels",void 0),i([s({type:cc.Integer,range:[3,6],slide:!0})],t.prototype,"numberOfReels",null),i([u],t)}(cc.Component);n.default=a,cc._RF.pop()},{"../SlotEnum":"SlotEnum"}],NetworkLog:[function(e,t,n){"use strict";cc._RF.push(t,"386b8/9dP1HiJFh4GLZAlPQ","NetworkLog"),Object.defineProperty(n,"__esModule",{value:!0}),n.NetworkLog=void 0;var o=function(){function e(){}return e.appendResult=function(e){var t=new XMLHttpRequest;t.open("POST","https://slot-test-server2.firebaseapp.com/result",!0),t.setRequestHeader("Content-Type","application/json"),t.setRequestHeader("Accept","*/*"),t.send(JSON.stringify(e))},e}();n.NetworkLog=o,cc._RF.pop()},{}],Reel:[function(e,t,n){"use strict";cc._RF.push(t,"91e54zzGJ5Os6qxY73m4+B5","Reel");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c=e("../SlotEnum"),l=cc._decorator,u=l.ccclass,s=l.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.reelAnchor=null,t.spinDirection=c.default.Direction.Down,t.tiles=[],t._tilePrefab=null,t.result=[],t.stopSpinning=!1,t}return r(t,e),Object.defineProperty(t.prototype,"tilePrefab",{get:function(){return this._tilePrefab},set:function(e){this._tilePrefab=e,this.reelAnchor.removeAllChildren(),this.tiles=[],null!==e&&(this.createReel(),this.shuffle())},enumerable:!1,configurable:!0}),t.prototype.createReel=function(){for(var e,t=0;t<5;t+=1)e=cc.instantiate(this.tilePrefab),this.reelAnchor.addChild(e),this.tiles[t]=e},t.prototype.shuffle=function(){for(var e=0;e<this.tiles.length;e+=1)this.tiles[e].getComponent("Tile").setRandom()},t.prototype.readyStop=function(e){var t=this.spinDirection===c.default.Direction.Down||null==e;this.result=t?e:e.reverse(),this.stopSpinning=!0},t.prototype.changeCallback=function(e){void 0===e&&(e=null);var t=e,n=this.spinDirection===c.default.Direction.Down?-1:1;if(t.position.y*n>288){t.position=cc.v2(0,-288*n);var o=null;null!=this.result&&this.result.length>0&&(o=this.result.pop()),null!=o&&o>=0?t.getComponent("Tile").setTile(o):t.getComponent("Tile").setRandom()}},t.prototype.checkEndCallback=function(e){void 0===e&&(e=null);var t=e;this.stopSpinning?(this.getComponent(cc.AudioSource).play(),this.doStop(t)):this.doSpinning(t)},t.prototype.doSpin=function(e){var t=this;this.stopSpinning=!1,this.reelAnchor.children.forEach(function(n){var o=t.spinDirection===c.default.Direction.Down?-1:1,r=cc.tween(n).delay(e),i=cc.tween(n).by(.25,{position:cc.v2(0,144*o)},{easing:"backIn"}),l=cc.tween().call(function(){return t.changeCallback(n)}),u=cc.tween(n).call(function(){return t.doSpinning(n,5)});r.then(i).then(l).then(u).start()})},t.prototype.doSpinning=function(e,t){var n=this;void 0===e&&(e=null),void 0===t&&(t=1);var o=this.spinDirection===c.default.Direction.Down?-1:1,r=cc.tween().by(.04,{position:cc.v2(0,144*o)}),i=cc.tween().call(function(){return n.changeCallback(e)}),l=cc.tween(e).repeat(t,r.then(i)),u=cc.tween().call(function(){return n.checkEndCallback(e)});l.then(u).start()},t.prototype.doStop=function(e){var t=this;void 0===e&&(e=null);var n=this.spinDirection===c.default.Direction.Down?-1:1,o=cc.tween(e).by(.04,{position:cc.v2(0,144*n)}),r=cc.tween().call(function(){return t.changeCallback(e)}),i=cc.tween().by(.2,{position:cc.v2(0,144*n)},{easing:"bounceOut"});o.then(r).then(o).then(r).then(i).then(r).start()},i([s({type:cc.Node})],t.prototype,"reelAnchor",void 0),i([s({type:cc.Enum(c.default.Direction)})],t.prototype,"spinDirection",void 0),i([s({type:[cc.Node],visible:!1})],t.prototype,"tiles",void 0),i([s({type:cc.Prefab})],t.prototype,"_tilePrefab",void 0),i([s({type:cc.Prefab})],t.prototype,"tilePrefab",null),i([u],t)}(cc.Component);n.default=a,cc._RF.pop()},{"../SlotEnum":"SlotEnum"}],SlotEnum:[function(e,t,n){"use strict";cc._RF.push(t,"cbbb2wH3jBHYJaS87r8RQdn","SlotEnum");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(n,"__esModule",{value:!0});var c,l=cc._decorator.ccclass;(function(e){e[e.Up=0]="Up",e[e.Down=1]="Down"})(c||(c={}));var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.Direction=c,i([l],t)}(cc.Component);n.default=u,cc._RF.pop()},{}],SlotRoller:[function(e,t,n){"use strict";cc._RF.push(t,"6abe1dbO/dPpKL6YIjM54sl","SlotRoller"),Object.defineProperty(n,"__esModule",{value:!0}),n.SlotRoller=void 0;var o=e("../Dice"),r=function(){function e(){}return e.roll=function(t,n){var r=o.Dice.roll(100);return r<e.ROLL_ALL_EQUAL?e.allLinesResult(t,n):r<e.ROLL_TWO_LINES?e.twoLinesResult(t,n):r<e.ROLL_SINGLE_LINE?e.singleLineResult(t,n):e.nolineResu(t,n)},e.createEmptyMatrix=function(e){for(var t=[],n=0;n<e;n++)t.push([]);return t},e.createUnequalLine=function(e,t){for(var n=[],r=[],i=0;i<t;++i)n[i]=o.Dice.roll(e),r.includes(n[i])||r.push(n[i]);if(r.length<=1){var c=o.Dice.roll(length),l=o.Dice.rollDifferent(t,r[0]);n[c]=l}return n},e.allLinesResult=function(t,n){for(var r={reels:e.createEmptyMatrix(n),equalLines:[],equalTile:o.Dice.roll(t)},i=0;i<this.REEL_LENGTH;++i)r.equalLines.push(i);return e.popMatrix(r,t,n),r},e.nolineResu=function(t,n){var o={reels:e.createEmptyMatrix(n),equalLines:[],equalTile:-1};return e.popMatrix(o,t,n),o},e.twoLinesResult=function(t,n){for(var r={reels:e.createEmptyMatrix(n),equalLines:[],equalTile:o.Dice.roll(t)},i=o.Dice.roll(this.REEL_LENGTH),c=0;c<this.REEL_LENGTH;c++)c!=i&&r.equalLines.push(c);return e.popMatrix(r,t,n),r},e.singleLineResult=function(t,n){var r={reels:e.createEmptyMatrix(n),equalLines:[o.Dice.roll(this.REEL_LENGTH)],equalTile:o.Dice.roll(t)};return e.popMatrix(r,t,n),r},e.popMatrix=function(e,t,n){for(var o=0;o<this.REEL_LENGTH;++o)if(e.equalLines.includes(o))for(var r=0;r<n;++r)e.reels[r][o]=e.equalTile;else{var i=this.createUnequalLine(t,n);for(r=0;r<n;++r)e.reels[r][o]=i[r]}},e.ROLL_ALL_EQUAL=7,e.ROLL_TWO_LINES=10+e.ROLL_ALL_EQUAL,e.ROLL_SINGLE_LINE=33+e.ROLL_TWO_LINES,e.REEL_LENGTH=3,e}();n.SlotRoller=r,cc._RF.pop()},{"../Dice":"Dice"}],Tile:[function(e,t,n){"use strict";cc._RF.push(t,"23da8goMpRLyoF0XDrNCKrG","Tile");var o,r=this&&this.__extends||(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},c=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function c(e){try{u(o.next(e))}catch(t){i(t)}}function l(e){try{u(o.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(c,l)}u((o=o.apply(e,t||[])).next())})},l=this&&this.__generator||function(e,t){var n,o,r,i,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(e){return function(t){return u([e,t])}}function u(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,o=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(r=(r=c.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(l){i=[6,l],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=cc._decorator,s=u.ccclass,a=u.property,p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.textures=[],t}return r(t,e),Object.defineProperty(t.prototype,"tileCount",{get:function(){return this.textures.length},enumerable:!1,configurable:!0}),t.prototype.onLoad=function(){return c(this,void 0,Promise,function(){return l(this,function(e){switch(e.label){case 0:return[4,this.loadTextures()];case 1:return e.sent(),[2]}})})},t.prototype.resetInEditor=function(){return c(this,void 0,Promise,function(){return l(this,function(e){switch(e.label){case 0:return[4,this.loadTextures()];case 1:return e.sent(),this.setRandom(),[2]}})})},t.prototype.loadTextures=function(){return c(this,void 0,Promise,function(){var e;return l(this,function(){return e=this,[2,new Promise(function(t){cc.loader.loadResDir("gfx/Square",cc.SpriteFrame,function(n,o){e.textures=o,t(!0)})})]})})},t.prototype.setTile=function(e){this.node.getComponent(cc.Sprite).spriteFrame=this.textures[e]},t.prototype.setRandom=function(){var e=Math.floor(Math.random()*this.textures.length);this.setTile(e)},i([a({type:[cc.SpriteFrame],visible:!0})],t.prototype,"textures",void 0),i([s],t)}(cc.Component);n.default=p,cc._RF.pop()},{}],buttonControl:[function(e,t){"use strict";cc._RF.push(t,"3a892w7qc9EuKDe/ncSi8Hm","buttonControl"),cc.Class({extends:cc.Component,properties:{exit:{default:null,type:cc.Node},back:{default:null,type:cc.Node}},onLoad:function(){this.exit.on(cc.Node.EventType.TOUCH_START,this.betExit,this),this.back.on(cc.Node.EventType.TOUCH_START,this.betBack,this)},betExit:function(){cc.game.end()},betBack:function(){cc.director.loadScene("start")},start:function(){}}),cc._RF.pop()},{}],start:[function(e,t){"use strict";cc._RF.push(t,"fd313VhwZpCY5WUBGrIRw7x","start"),cc.Class({extends:cc.Component,properties:{play:{default:null,type:cc.Node},quit:{default:null,type:cc.Node}},onLoad:function(){this.play.on(cc.Node.EventType.TOUCH_START,this.betPlay,this),this.quit.on(cc.Node.EventType.TOUCH_START,this.betQuit,this)},betPlay:function(){cc.director.loadScene("Main")},betQuit:function(){cc.game.end()},start:function(){}}),cc._RF.pop()},{}],use_reversed_rotateBy:[function(e,t){"use strict";cc._RF.push(t,"6a2661rYQZFjKORCTmizsBC","use_reversed_rotateBy"),cc.RotateBy._reverse=!0,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,t){"use strict";cc._RF.push(t,"0fc32FF05VJ2aZgCHs2Eysc","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["use_reversed_rotateBy","use_v2.1-2.2.1_cc.Toggle_event","Dice","GameManager","LogGenerator","NetworkLog","SlotEnum","buttonControl","IResult","Machine","Reel","SlotRoller","Tile","start"]);
parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({8:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var n=320,i=240;function r(e){return e.toString(16).padStart(2,"0")}function s(e,t,n){return"#"+[e,t,n].map(r).join("")}var a=function(){function r(e,s){t(this,r),this.game=s;var a=document.createElement("canvas");a.width=n,a.height=i,document.querySelector(e).appendChild(a),this.canvas=a,this.ctx=a.getContext("2d")}return e(r,[{key:"fill",value:function(e,t,r){this.ctx.save(),this.ctx.fillStyle=s(e,t,r),this.ctx.fillRect(0,0,n,i),this.ctx.restore()}},{key:"drawPixel",value:function(e,t,n,i,r,a){this.ctx.save(),this.ctx.fillStyle=s(n,i,r),this.ctx.globalAlpha=a/255,this.ctx.fillRect(e,t,1,1),this.ctx.restore()}},{key:"drawPixels",value:function(e,t,n,i,r){var s=new Uint8ClampedArray(this.game.getMemory()),a=new ImageData(s.slice(r,r+n*i*4),n,i);this.ctx.putImageData(a,e,t)}},{key:"exportAPI",value:function(){return{graphics_fill:this.fill.bind(this),graphics_draw_pixel:this.drawPixel.bind(this),graphics_draw_pixels:this.drawPixels.bind(this)}}}]),r}(),o={LEFT:0,RIGHT:1,UP:2,DOWN:3,START:4,A:5,B:6},u={ArrowLeft:o.LEFT,ArrowRight:o.RIGHT,ArrowUp:o.UP,ArrowDown:o.DOWN,Enter:o.START,Space:o.A,Control:o.B},c=function(){function n(e){t(this,n),this.game=e,this.pressedKeys=new Set}return e(n,[{key:"press",value:function(e){this.game.cartridge.instance.exports.on_key_press&&!this.pressedKeys.has(e)&&(this.game.cartridge.instance.exports.on_key_press(e),this.pressedKeys.add(e))}},{key:"release",value:function(e){this.game.cartridge.instance.exports.on_key_release&&this.pressedKeys.has(e)&&(this.game.cartridge.instance.exports.on_key_release(e),this.pressedKeys.delete(e))}},{key:"bindToKeyboard",value:function(e){var t=this;e.addEventListener("keydown",function(e){e.key in u&&t.press(u[e.key])}),e.addEventListener("keyup",function(e){e.key in u&&t.release(u[e.key])})}},{key:"exportAPI",value:function(){return{}}}]),n}(),l=60,h=1e3/l,f=exports.Console=function(){function n(e){t(this,n),this.renderer=new a(e,this),this.cartridge=null,this.lastIterTime=null,this.timeCount=0,this.input=new c(this)}return e(n,[{key:"getMemory",value:function(){return this.cartridge.instance.exports.memory.buffer}},{key:"exportAPI",value:function(){return Object.assign({debug_log:function(e){console.log(e)},cosf:Math.cos,sinf:Math.sin},this.renderer.exportAPI(),this.input.exportAPI())}},{key:"load",value:function(e){var t=this;return fetch(e).then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,{env:t.exportAPI()})}).then(function(e){t.cartridge=e,t.start()})}},{key:"start",value:function(){this.lastIterTime=null,this.timeCount=0,this.cartridge.instance.exports.init(),this.loop()}},{key:"loop",value:function(){var e=this;requestAnimationFrame(function(t){if(null!==e.lastIterTime){var n=t-e.lastIterTime;for(e.timeCount+=n>=1e3?0:n;e.timeCount>h;)e.cartridge.instance.exports.update(h),e.timeCount-=h}e.lastIterTime=t,e.loop()})}}]),n}();
},{}],6:[function(require,module,exports) {
"use strict";var e=require("../gzel.js"),o=new e.Console("#canvas");o.input.bindToKeyboard(document.body),o.load("./breakout.wasm");
},{"../gzel.js":8}]},{},[6])
//# sourceMappingURL=website.1706eac7.map
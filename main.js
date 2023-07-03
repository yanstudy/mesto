(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function n(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}var o=function(){function e(t,r,o,i,u,c,a){var l=this,s=t.name,f=t.link,p=t.likes,y=(t._id,t.owner);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"_toggleLike",(function(e){e.currentTarget.classList.contains("elements__heart_liked")?(e.currentTarget.classList.remove("elements__heart_liked"),l._removeLike()):(e.currentTarget.classList.add("elements__heart_liked"),l._addLike())})),n(this,"deleteCard",(function(){l.element.remove()})),n(this,"_confirmDeleteCard",(function(){l._handleDeleteCard()})),n(this,"render",(function(){l.element=l._getTemplate(),l.element.querySelector(".elements__name").textContent=l.name,l.amountOfLikes=l.element.querySelector(".elements__likes"),l.amountOfLikes.textContent=l.likes.length,l.picture=l.element.querySelector(".elements__picture"),l.picture.src=l.link,l.element.querySelector(".elements__picture").alt="Картинка ".concat(l.name),l.id!==l._userId&&(l.element.querySelector(".elements__delete-button").style.display="none"),l._heart=l.element.querySelector(".elements__heart");for(var e=0;e<l.likes.length;e++)l.likes[e]._id===l._userId&&l._heart.classList.add("elements__heart_liked");return l._setEventListeners(),l.element})),this.likes=p,this.name=s,this.link=f,this.id=y._id,this._userId=a._id,this._templateSelector=r,this._handleImageClick=o,this._handleDeleteCard=i,this._addLike=u,this._removeLike=c}var r,o;return r=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this.element.querySelector(".elements__heart").addEventListener("click",this._toggleLike),this.element.querySelector(".elements__delete-button").addEventListener("click",this._confirmDeleteCard),this.picture.addEventListener("click",(function(){e._handleImageClick(e,e.picture)}))}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function c(e,t,n){return(t=a(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}var l=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_enableButton",(function(){r._buttonElement.disabled=!1,r._buttonElement.classList.remove(r._config.inactiveButtonClass)})),c(this,"_disableButton",(function(){r._buttonElement.disabled=!0,r._buttonElement.classList.add(r._config.inactiveButtonClass)})),this._config=t,this._form=n,this._buttonElement=this._form.querySelector(this._config.submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"resetError",value:function(){var e=this;this._inputList.forEach((function(t){return e._hideInputError(t)})),this._toggleButtonState()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?this._enableButton():this._disableButton()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function b(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===y(t)?t:String(t)}var d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"_handleEscClose",(function(e){"Escape"===e.key&&(e.preventDefault(),n.close())})),b(this,"_closePopupOverlay",(function(e){e.currentTarget===e.target&&n.close()})),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this),this._closePopupOverlay=this._closePopupOverlay.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popup.querySelector(".popup__close-icon").addEventListener("click",this.close),document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("mousedown",this._closePopupOverlay)}},{key:"open",value:function(){this.setEventListeners(),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._popup.querySelector(".popup__close-icon").removeEventListener("click",this.close),document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("mousedown",this._closePopupOverlay)}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function j(e,t,n){return(t=E(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e){var t=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===v(t)?t:String(t)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}(this,e)});function u(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),j(w(r=i.call(this,e)),"_getInputValues",(function(){var e={};return r._inputValues.forEach((function(t){e[t.name]=t.value})),e})),j(w(r),"setInputValues",(function(e){var t,n,o=e.name,i=e.job,u=(t=r._inputValues,n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=u[0],a=u[1];c.value=o,a.value=i})),j(w(r),"_handleSubmit",(function(e){e.preventDefault(),r.formSubmit(r._getInputValues())})),j(w(r),"reset",(function(){r._form.reset()})),j(w(r),"close",(function(){r._form.removeEventListener("submit",r._handleSubmit),k((n=w(r),O(u.prototype)),"close",n).call(n),r.reset()})),r.formSubmit=t,r._form=e.querySelector(".popup__form"),r._inputValues=Array.from(r._form.querySelectorAll(".popup__input")),r}return t=u,(n=[{key:"setEventListeners",value:function(){k(O(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,I(r.key),r)}}function I(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(t)?t:String(t)}var T=function(){function e(t){var n,r,o,i=this,u=t.name,c=t.job,a=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(){return{name:i.name.textContent,job:i.job.textContent}},(r=I(r="getUserInfo"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.name=u,this.job=c,this.avatar=a}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this.name.textContent=e.name,this.job.textContent=e.about}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},A.apply(this,arguments)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}function D(e){var t=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===q(t)?t:String(t)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}(this,e)});function u(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),n=B(t=i.call(this,e)),o=function(e,n){t.bigImage.src=n.src,t.bigImage.alt="Картинка ".concat(e.name),t.popupTitle.textContent=e.name},(r=D(r="_handleOpenPopupForBigImage"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t.bigImage=t._popup.querySelector(".popup__image"),t.popupTitle=t._popup.querySelector(".popup__title"),t}return t=u,(n=[{key:"open",value:function(e,t){A(U(u.prototype),"open",this).call(this),this._handleOpenPopupForBigImage(e,t)}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,J(r.key),r)}}function H(e,t,n){return(t=J(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){var t=function(e,t){if("object"!==N(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===N(t)?t:String(t)}var F=function(){function e(t){var n=this,r=t.baseUrl,o=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),H(this,"addLike",(function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:n.headers}).then((function(e){return n._checkResponse(e)}))})),H(this,"removeLike",(function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:n.headers}).then((function(e){return n._checkResponse(e)}))})),this.baseUrl=r,this.headers=o}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._checkResponse(t)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.nameInput,about:e.jobInput})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._checkResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this,n=e.link;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:n})}).then((function(e){return t._checkResponse(e)}))}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function $(e){return $="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==$(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==$(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===$(o)?o:String(o)),r)}var o}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function K(e,t){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K(e,t)}function Q(e){return Q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Q(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Q(r);if(o){var n=Q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===$(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e)).popupElement=e,n._confirmDelete=t,n}return t=u,(n=[{key:"setEventListeners",value:function(){G(Q(u.prototype),"setEventListeners",this).call(this),this.popupElement.querySelector(".popup__button").addEventListener("click",this._confirmDelete)}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Y,Z,ee=document.querySelector("#editPopup"),te=document.querySelector("#newPlacePopup"),ne=document.querySelector("#deletePopup"),re=document.querySelector("#editAvatar"),oe=document.querySelector("#imagePopup"),ie=document.querySelector("#formNewPlace"),ue=document.querySelector("#formEditAvatar"),ce=document.querySelector(".profile__edit-button"),ae=document.querySelector(".profile__name"),le=document.querySelector(".profile__job"),se=document.querySelector(".elements"),fe=document.querySelector(".profile__add-button"),pe=document.querySelector(".profile__avatar"),ye=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-70",headers:{authorization:"06c146c5-fdfa-4750-9867-de096eb4c728","Content-Type":"application/json"}});Promise.all([ye.getUserInfo(),ye.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,u,c=[],a=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z=o,ae.textContent=o.name,le.textContent=o.about,pe.style.backgroundImage="url(".concat(o.avatar,")"),(Y=new p({items:i,renderer:function(e){Y.addItem(_e(e))}},se)).renderItems()})).catch((function(e){console.log(e)}));var me=new T({name:ae,job:le,avatar:pe}),be=new P(ee,(function(e){ge(ee,!0),ye.editProfile(e).then((function(e){me.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){be.close(),ge(ee,!1)}))})),he=new P(te,(function(e){var t=e.name,n=e.link;ge(te,!0),ye.addNewCard({name:t,link:n}).then((function(e){Y.addItem(_e(e))})).catch((function(e){console.log(e)})).finally((function(){he.close(),ge(te,!1)})),ie.reset()})),de=new V(oe),ve=function(e,t){de.open(e,t)};function _e(e){var t=new o(e,"#elements__element-template",ve,(function(){n.open()}),(function(){var t=this;ye.addLike(e._id).then((function(e){t.likes=e.likes,t.amountOfLikes.textContent=t.likes.length})).catch((function(e){console.log(e)}))}),(function(){var t=this;ye.removeLike(e._id).then((function(e){t.likes=e.likes,t.amountOfLikes.textContent=t.likes.length})).catch((function(e){console.log(e)}))}),Z),n=new W(ne,(function(){ye.deleteCard(e._id).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),n.close(),t.deleteCard()}));return t.render()}function ge(e,t){var n=e.querySelector(".popup__button"),r=n.textContent.trim();t?(n.textContent=r+"...",n.disabled=!0):(n.textContent=r.slice(0,r.length-3),n.disabled=!1)}var Se=new P(re,(function(e){ge(re,!0),ye.editAvatar(e).then((function(e){pe.style.backgroundImage="url(".concat(e.avatar,")")})).catch((function(e){console.log(e)})).finally((function(){Se.close(),ge(re,!1)}))}));ce.addEventListener("click",(function(e){be.open(),be.reset(),ke.formEditProfile.resetError();var t=me.getUserInfo();be.setInputValues(t)})),fe.addEventListener("click",(function(){he.open(),ie.reset(),ke.formNewPlace.resetError()})),pe.addEventListener("click",(function(){Se.open(),ue.reset(),ke.formEditAvatar.resetError()}));var we,ke={};we={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_error",errorClass:"popup__input-error"},Array.from(document.querySelectorAll(we.formSelector)).forEach((function(e){var t=new l(we,e),n=e.getAttribute("name");ke[n]=t,t.enableValidation()}))})();
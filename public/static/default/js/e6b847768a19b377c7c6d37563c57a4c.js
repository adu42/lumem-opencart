/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*! Magnific Popup - v0.9.9 - 2013-11-15
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
  var t,
      n,
      i,
      o,
      r,
      a,
      s,
      l = "Close",
      c = "BeforeClose",
      d = "AfterClose",
      u = "BeforeAppend",
      p = "MarkupParse",
      f = "Open",
      m = "Change",
      g = "mfp",
      v = "." + g,
      h = "mfp-ready",
      C = "mfp-removing",
      y = "mfp-prevent-close",
      w = function w() {},
      b = !!window.jQuery,
      I = e(window),
      x = function x(e, n) {
    t.ev.on(g + e + v, n);
  },
      k = function k(t, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
  },
      T = function T(n, i) {
    t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      E = function E(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      _ = function _() {
    e.magnificPopup.instance || (t = new w(), t.init(), e.magnificPopup.instance = t);
  },
      S = function S() {
    var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
      if (t.pop() + "Transition" in e) return !0;
    }return !1;
  };w.prototype = { constructor: w, init: function init() {
      var n = navigator.appVersion;t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document.body), o = e(document), t.popupsCache = {};
    }, open: function open(n) {
      var i;if (n.isObj === !1) {
        t.items = n.items.toArray(), t.index = 0;var r,
            s = n.items;for (i = 0; s.length > i; i++) {
          if (r = s[i], r.parsed && (r = r.el[0]), r === n.el[0]) {
            t.index = i;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (t.isOpen) return t.updateItemHTML(), void 0;t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function () {
        t.close();
      }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function (e) {
        t._checkIfClose(e.target) && t.close();
      }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (i = 0; l.length > i; i++) {
        var c = l[i];c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t);
      }T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
        n.close_replaceWith = E(i.type);
      }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: I.scrollTop(), position: "absolute" }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: o.height(), position: "absolute" }), t.st.enableEscapeKey && o.on("keyup" + v, function (e) {
        27 === e.keyCode && t.close();
      }), I.on("resize" + v, function () {
        t.updateSize();
      }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);var d = t.wH = I.height(),
          u = {};if (t.fixedContentPos && t._hasScrollBar(d)) {
        var m = t._getScrollbarSize();m && (u.marginRight = m);
      }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : u.overflow = "hidden");var g = t.st.mainClass;return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), T("BuildControls"), e("html").css(u), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () {
        t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), o.on("focusin" + v, t._onFocusIn);
      }, 16), t.isOpen = !0, t.updateSize(d), T(f), n;
    }, close: function close() {
      t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      T(l);var n = C + " " + h + " ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var i = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i);
      }o.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d);
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || I.height();t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = t.st[i] ? t.st[i].markup : !1;T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0;
      }r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i = t.items[n],
          o = i.type;if (i = i.tagName ? { el: e(i) } : { data: i, src: i.src }, i.el) {
        for (var r = t.types, a = 0; r.length > a; a++) {
          if (i.el.hasClass("mfp-" + r[a])) {
            o = r[a];break;
          }
        }i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"));
      }return i.type = o || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, T("ElementParse", i), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;if (a) if (e.isFunction(a)) {
          if (!a.call(t)) return !0;
        } else if (a > I.width()) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var o = { status: e, text: i };T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;if (i && o) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
    }, _parseMarkup: function _parseMarkup(t, n, i) {
      var o;i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
        if (void 0 === n || n === !1) return !0;if (o = e.split("_"), o.length > 1) {
          var i = t.find(v + "-" + o[0]);if (i.length > 0) {
            var r = o[1];"replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n);
          }
        } else t.find(v + "-" + e).html(n);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: w.prototype, modules: [], open: function open(t, n) {
      return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function (n) {
    _();var i = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = b ? i.data("magnificPopup") : i[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({ mfpEl: o }, i, r);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);return i;
  };var P,
      O,
      z,
      M = "inline",
      B = function B() {
    z && (O.after(z.addClass(P)).detach(), z = null);
  };e.magnificPopup.registerModule(M, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push(M), x(l + "." + M, function () {
          B();
        });
      }, getInline: function getInline(n, i) {
        if (B(), n.src) {
          var o = t.st.inline,
              r = e(n.src);if (r.length) {
            var a = r[0].parentNode;a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");return n.inlineElement = r, r;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var F,
      H = "ajax",
      L = function L() {
    F && i.removeClass(F);
  },
      A = function A() {
    L(), t.req && t.req.abort();
  };e.magnificPopup.registerModule(H, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A);
      }, getAjax: function getAjax(n) {
        F && i.addClass(F), t.updateStatus("loading");var o = e.extend({ url: n.src, success: function success(i, o, r) {
            var a = { data: i, xhr: r };T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass(h);
            }, 16), t.updateStatus("ready"), T("AjaxContentAdded");
          }, error: function error() {
            L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(o), "";
      } } });var j,
      N = function N(n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
      if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
    }return "";
  };e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var e = t.st.image,
            n = ".image";t.types.push("image"), x(f + n, function () {
          "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
        }), x(l + n, function () {
          e.cursor && i.removeClass(e.cursor), I.off("resize" + v);
        }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(r) {
          j && clearInterval(j), j = setInterval(function () {
            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0);
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()));
        },
            a = function a() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            s = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), n.img[0].naturalWidth > 0 && (n.hasSize = !0);
        }return t._parseMarkup(i, { title: N(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var W,
      R = function R() {
    return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W;
  };e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var o,
              r,
              a = n.duration,
              s = function s(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
          },
              d = function d() {
            t.content.css("visibility", "visible");
          };x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  d(), setTimeout(function () {
                    r.remove(), e = r = null, T("ZoomAnimationEnded");
                  }, 16);
                }, a);
              }, 16);
            }
          }), x(c + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = a, !e) {
                if (e = t._getItemToZoom(), !e) return;r = s(e);
              }r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), x(l + i, function () {
            t._allowZoom() && (d(), r && r.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return t.currItem.hasSize ? t.currItem.img : !1;
      }, _getOffset: function _getOffset(n) {
        var i;i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);var o = i.offset(),
            r = parseInt(i.css("padding-top"), 10),
            a = parseInt(i.css("padding-bottom"), 10);o.top -= e(window).scrollTop() - r;var s = { width: i.width(), height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r };return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      } } });var Z = "iframe",
      q = "//about:blank",
      D = function D(e) {
    if (t.currTemplate[Z]) {
      var n = t.currTemplate[Z].find("iframe");n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule(Z, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push(Z), x("BeforeChange", function (e, t, n) {
          t !== n && (t === Z ? D() : n === Z && D(!0));
        }), x(l + "." + Z, function () {
          D();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = t.st.iframe;e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0;
        });var a = {};return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i;
      } } });var K = function K(e) {
    var n = t.items.length;return e > n - 1 ? e - n : 0 > e ? n + e : e;
  },
      Y = function Y(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            i = ".mfp-gallery",
            r = Boolean(e.fn.mfpFastClick);return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
          n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
            return t.items.length > 1 ? (t.next(), !1) : void 0;
          }), o.on("keydown" + i, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), x("UpdateStatus" + i, function (e, n) {
          n.text && (n.text = Y(n.text, t.currItem.index, t.items.length));
        }), x(p + i, function (e, i, o, r) {
          var a = t.items.length;o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
        }), x("BuildControls" + i, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                s = r ? "mfpFastClick" : "click";o[s](function () {
              t.prev();
            }), a[s](function () {
              t.next();
            }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a));
          }
        }), x(m + i, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), x(l + i, function () {
          o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null;
        }), void 0) : !1;
      }, next: function next() {
        t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);for (e = 1; (t.direction ? o : i) >= e; e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; (t.direction ? i : o) >= e; e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = K(n), !t.items[n].preloaded) {
          var i = t.items[n];i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });var U = "retina";e.magnificPopup.registerModule(U, { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), x("ElementParse." + U, function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      } } }), function () {
    var t = 1e3,
        n = "ontouchstart" in window,
        i = function i() {
      I.off("touchmove" + r + " touchend" + r);
    },
        o = "mfpFastClick",
        r = "." + o;e.fn.mfpFastClick = function (o) {
      return e(this).each(function () {
        var a,
            s = e(this);if (n) {
          var l, c, d, u, p, f;s.on("touchstart" + r, function (e) {
            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
              p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i());
            }).on("touchend" + r, function (e) {
              i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                a = !1;
              }, t), o());
            });
          });
        }s.on("click" + r, function () {
          a || o();
        });
      });
    }, e.fn.destroyMfpFastClick = function () {
      e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r);
    };
  }(), _();
})(window.jQuery || window.Zepto);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)
 Copyright (c) 2015 Jonathan Peterson
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */
(function (factory) {
    'use strict';
    // if (typeof define === 'function' && define.amd) {
    //     define(['jquery', 'moment'], factory);
    // } else if (typeof exports === 'object') {
    //    module.exports = factory(require('jquery'), require('moment'));
    // } else {
    //    if (typeof jQuery === 'undefined') {
    //       throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
    //   }
    //  if (typeof moment === 'undefined') {
    //     throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';
    //  }
    //  factory(jQuery, moment);
    // }
})(function ($, moment) {
    'use strict';

    if (!moment) {
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
    }

    var dateTimePicker = function dateTimePicker(element, options) {
        var picker = {},
            date,
            viewDate,
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [{
            clsName: 'days',
            navFnc: 'M',
            navStep: 1
        }, {
            clsName: 'months',
            navFnc: 'y',
            navStep: 1
        }, {
            clsName: 'years',
            navFnc: 'y',
            navStep: 10
        }, {
            clsName: 'decades',
            navFnc: 'y',
            navStep: 100
        }],
            viewModes = ['days', 'months', 'years', 'decades'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            keyMap = {
            'up': 38,
            38: 'up',
            'down': 40,
            40: 'down',
            'left': 37,
            37: 'left',
            'right': 39,
            39: 'right',
            'tab': 9,
            9: 'tab',
            'escape': 27,
            27: 'escape',
            'enter': 13,
            13: 'enter',
            'pageUp': 33,
            33: 'pageUp',
            'pageDown': 34,
            34: 'pageDown',
            'shift': 16,
            16: 'shift',
            'control': 17,
            17: 'control',
            'space': 32,
            32: 'space',
            't': 84,
            84: 't',
            'delete': 46,
            46: 'delete'
        },
            keyState = {},


        /********************************************************************************
         *
         * Private functions
         *
         ********************************************************************************/

        hasTimeZone = function hasTimeZone() {
            return moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '';
        },
            getMoment = function getMoment(d) {
            var returnMoment;

            if (d === undefined || d === null) {
                returnMoment = moment(); //TODO should this use format? and locale?
            } else if (moment.isDate(d) || moment.isMoment(d)) {
                // If the date that is passed in is already a Date() or moment() object,
                // pass it directly to moment.
                returnMoment = moment(d);
            } else if (hasTimeZone()) {
                // There is a string to parse and a default time zone
                // parse with the tz function which takes a default time zone if it is not in the format string
                returnMoment = moment.tz(d, parseFormats, options.useStrict, options.timeZone);
            } else {
                returnMoment = moment(d, parseFormats, options.useStrict);
            }

            if (hasTimeZone()) {
                returnMoment.tz(options.timeZone);
            }

            return returnMoment;
        },
            isEnabled = function isEnabled(granularity) {
            if (typeof granularity !== 'string' || granularity.length > 1) {
                throw new TypeError('isEnabled expects a single character string parameter');
            }
            switch (granularity) {
                case 'y':
                    return actualFormat.indexOf('Y') !== -1;
                case 'M':
                    return actualFormat.indexOf('M') !== -1;
                case 'd':
                    return actualFormat.toLowerCase().indexOf('d') !== -1;
                case 'h':
                case 'H':
                    return actualFormat.toLowerCase().indexOf('h') !== -1;
                case 'm':
                    return actualFormat.indexOf('m') !== -1;
                case 's':
                    return actualFormat.indexOf('s') !== -1;
                default:
                    return false;
            }
        },
            hasTime = function hasTime() {
            return isEnabled('h') || isEnabled('m') || isEnabled('s');
        },
            hasDate = function hasDate() {
            return isEnabled('y') || isEnabled('M') || isEnabled('d');
        },
            getDatePickerTemplate = function getDatePickerTemplate() {
            var headTemplate = $('<thead>').append($('<tr>').append($('<th>').addClass('prev').attr('data-action', 'previous').append($('<span>').addClass(options.icons.previous))).append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', options.calendarWeeks ? '6' : '5')).append($('<th>').addClass('next').attr('data-action', 'next').append($('<span>').addClass(options.icons.next)))),
                contTemplate = $('<tbody>').append($('<tr>').append($('<td>').attr('colspan', options.calendarWeeks ? '8' : '7')));

            return [$('<div>').addClass('datepicker-days').append($('<table>').addClass('table-condensed').append(headTemplate).append($('<tbody>'))), $('<div>').addClass('datepicker-months').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-years').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone())), $('<div>').addClass('datepicker-decades').append($('<table>').addClass('table-condensed').append(headTemplate.clone()).append(contTemplate.clone()))];
        },
            getTimePickerMainTemplate = function getTimePickerMainTemplate() {
            var topRow = $('<tr>'),
                middleRow = $('<tr>'),
                bottomRow = $('<tr>');

            if (isEnabled('h')) {
                topRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': options.tooltips.pickHour }).attr('data-action', 'showHours')));
                bottomRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(options.icons.down))));
            }
            if (isEnabled('m')) {
                if (isEnabled('h')) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>').addClass('separator').html(':'));
                    bottomRow.append($('<td>').addClass('separator'));
                }
                topRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes').append($('<span>').addClass(options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': options.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
                bottomRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes').append($('<span>').addClass(options.icons.down))));
            }
            if (isEnabled('s')) {
                if (isEnabled('m')) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>').addClass('separator').html(':'));
                    bottomRow.append($('<td>').addClass('separator'));
                }
                topRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds').append($('<span>').addClass(options.icons.up))));
                middleRow.append($('<td>').append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': options.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
                bottomRow.append($('<td>').append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds').append($('<span>').addClass(options.icons.down))));
            }

            if (!use24Hours) {
                topRow.append($('<td>').addClass('separator'));
                middleRow.append($('<td>').append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod })));
                bottomRow.append($('<td>').addClass('separator'));
            }

            return $('<div>').addClass('timepicker-picker').append($('<table>').addClass('table-condensed').append([topRow, middleRow, bottomRow]));
        },
            getTimePickerTemplate = function getTimePickerTemplate() {
            var hoursView = $('<div>').addClass('timepicker-hours').append($('<table>').addClass('table-condensed')),
                minutesView = $('<div>').addClass('timepicker-minutes').append($('<table>').addClass('table-condensed')),
                secondsView = $('<div>').addClass('timepicker-seconds').append($('<table>').addClass('table-condensed')),
                ret = [getTimePickerMainTemplate()];

            if (isEnabled('h')) {
                ret.push(hoursView);
            }
            if (isEnabled('m')) {
                ret.push(minutesView);
            }
            if (isEnabled('s')) {
                ret.push(secondsView);
            }

            return ret;
        },
            getToolbar = function getToolbar() {
            var row = [];
            if (options.showTodayButton) {
                row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': options.tooltips.today }).append($('<span>').addClass(options.icons.today))));
            }
            if (!options.sideBySide && hasDate() && hasTime()) {
                row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': options.tooltips.selectTime }).append($('<span>').addClass(options.icons.time))));
            }
            if (options.showClear) {
                row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': options.tooltips.clear }).append($('<span>').addClass(options.icons.clear))));
            }
            if (options.showClose) {
                row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': options.tooltips.close }).append($('<span>').addClass(options.icons.close))));
            }
            return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
        },
            getTemplate = function getTemplate() {
            var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                content = $('<ul>').addClass('list-unstyled'),
                toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

            if (options.inline) {
                template.removeClass('dropdown-menu');
            }

            if (use24Hours) {
                template.addClass('usetwentyfour');
            }

            if (isEnabled('s') && !use24Hours) {
                template.addClass('wider');
            }

            if (options.sideBySide && hasDate() && hasTime()) {
                template.addClass('timepicker-sbs');
                if (options.toolbarPlacement === 'top') {
                    template.append(toolbar);
                }
                template.append($('<div>').addClass('row').append(dateView.addClass('col-md-6')).append(timeView.addClass('col-md-6')));
                if (options.toolbarPlacement === 'bottom') {
                    template.append(toolbar);
                }
                return template;
            }

            if (options.toolbarPlacement === 'top') {
                content.append(toolbar);
            }
            if (hasDate()) {
                content.append($('<li>').addClass(options.collapse && hasTime() ? 'collapse in' : '').append(dateView));
            }
            if (options.toolbarPlacement === 'default') {
                content.append(toolbar);
            }
            if (hasTime()) {
                content.append($('<li>').addClass(options.collapse && hasDate() ? 'collapse' : '').append(timeView));
            }
            if (options.toolbarPlacement === 'bottom') {
                content.append(toolbar);
            }
            return template.append(content);
        },
            dataToOptions = function dataToOptions() {
            var eData,
                dataOptions = {};

            if (element.is('input') || options.inline) {
                eData = element.data();
            } else {
                eData = element.find('input').data();
            }

            if (eData.dateOptions && eData.dateOptions instanceof Object) {
                dataOptions = $.extend(true, dataOptions, eData.dateOptions);
            }

            $.each(options, function (key) {
                var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                if (eData[attributeName] !== undefined) {
                    dataOptions[key] = eData[attributeName];
                }
            });
            return dataOptions;
        },
            place = function place() {
            var position = (component || element).position(),
                offset = (component || element).offset(),
                vertical = options.widgetPositioning.vertical,
                horizontal = options.widgetPositioning.horizontal,
                parent;

            if (options.widgetParent) {
                parent = options.widgetParent.append(widget);
            } else if (element.is('input')) {
                parent = element.after(widget).parent();
            } else if (options.inline) {
                parent = element.append(widget);
                return;
            } else {
                parent = element;
                element.children().first().after(widget);
            }

            // Top and bottom logic
            if (vertical === 'auto') {
                if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() && widget.height() + element.outerHeight() < offset.top) {
                    vertical = 'top';
                } else {
                    vertical = 'bottom';
                }
            }

            // Left and right logic
            if (horizontal === 'auto') {
                if (parent.width() < offset.left + widget.outerWidth() / 2 && offset.left + widget.outerWidth() > $(window).width()) {
                    horizontal = 'right';
                } else {
                    horizontal = 'left';
                }
            }

            if (vertical === 'top') {
                widget.addClass('top').removeClass('bottom');
            } else {
                widget.addClass('bottom').removeClass('top');
            }

            if (horizontal === 'right') {
                widget.addClass('pull-right');
            } else {
                widget.removeClass('pull-right');
            }

            // find the first parent element that has a non-static css positioning
            if (parent.css('position') === 'static') {
                parent = parent.parents().filter(function () {
                    return $(this).css('position') !== 'static';
                }).first();
            }

            if (parent.length === 0) {
                throw new Error('datetimepicker component should be placed within a non-static positioned container');
            }

            widget.css({
                top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                bottom: vertical === 'top' ? parent.outerHeight() - (parent === element ? 0 : position.top) : 'auto',
                left: horizontal === 'left' ? parent === element ? 0 : position.left : 'auto',
                right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
            });
        },
            notifyEvent = function notifyEvent(e) {
            if (e.type === 'dp.change' && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate)) {
                return;
            }
            element.trigger(e);
        },
            viewUpdate = function viewUpdate(e) {
            if (e === 'y') {
                e = 'YYYY';
            }
            notifyEvent({
                type: 'dp.update',
                change: e,
                viewDate: viewDate.clone()
            });
        },
            showMode = function showMode(dir) {
            if (!widget) {
                return;
            }
            if (dir) {
                currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
            }
            widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
        },
            fillDow = function fillDow() {
            var row = $('<tr>'),
                currentDate = viewDate.clone().startOf('w').startOf('d');

            if (options.calendarWeeks === true) {
                row.append($('<th>').addClass('cw').text('#'));
            }

            while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
                row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                currentDate.add(1, 'd');
            }
            widget.find('.datepicker-days thead').append(row);
        },
            isInDisabledDates = function isInDisabledDates(testDate) {
            return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
        },
            isInEnabledDates = function isInEnabledDates(testDate) {
            return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
        },
            isInDisabledHours = function isInDisabledHours(testDate) {
            return options.disabledHours[testDate.format('H')] === true;
        },
            isInEnabledHours = function isInEnabledHours(testDate) {
            return options.enabledHours[testDate.format('H')] === true;
        },
            isValid = function isValid(targetMoment, granularity) {
            if (!targetMoment.isValid()) {
                return false;
            }
            if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
                return false;
            }
            if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
                return false;
            }
            if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                return false;
            }
            if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                return false;
            }
            if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                return false;
            }
            if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                return false;
            }
            if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                return false;
            }
            if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                var found = false;
                $.each(options.disabledTimeIntervals, function () {
                    if (targetMoment.isBetween(this[0], this[1])) {
                        found = true;
                        return false;
                    }
                });
                if (found) {
                    return false;
                }
            }
            return true;
        },
            fillMonths = function fillMonths() {
            var spans = [],
                monthsShort = viewDate.clone().startOf('y').startOf('d');
            while (monthsShort.isSame(viewDate, 'y')) {
                spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                monthsShort.add(1, 'M');
            }
            widget.find('.datepicker-months td').empty().append(spans);
        },
            updateMonths = function updateMonths() {
            var monthsView = widget.find('.datepicker-months'),
                monthsViewHeader = monthsView.find('th'),
                months = monthsView.find('tbody').find('span');

            monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
            monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
            monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);

            monthsView.find('.disabled').removeClass('disabled');

            if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                monthsViewHeader.eq(0).addClass('disabled');
            }

            monthsViewHeader.eq(1).text(viewDate.year());

            if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                monthsViewHeader.eq(2).addClass('disabled');
            }

            months.removeClass('active');
            if (date.isSame(viewDate, 'y') && !unset) {
                months.eq(date.month()).addClass('active');
            }

            months.each(function (index) {
                if (!isValid(viewDate.clone().month(index), 'M')) {
                    $(this).addClass('disabled');
                }
            });
        },
            updateYears = function updateYears() {
            var yearsView = widget.find('.datepicker-years'),
                yearsViewHeader = yearsView.find('th'),
                startYear = viewDate.clone().subtract(5, 'y'),
                endYear = viewDate.clone().add(6, 'y'),
                html = '';

            yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
            yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
            yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);

            yearsView.find('.disabled').removeClass('disabled');

            if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                yearsViewHeader.eq(0).addClass('disabled');
            }

            yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

            if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                yearsViewHeader.eq(2).addClass('disabled');
            }

            while (!startYear.isAfter(endYear, 'y')) {
                html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                startYear.add(1, 'y');
            }

            yearsView.find('td').html(html);
        },
            updateDecades = function updateDecades() {
            var decadesView = widget.find('.datepicker-decades'),
                decadesViewHeader = decadesView.find('th'),
                startDecade = moment({ y: viewDate.year() - viewDate.year() % 100 - 1 }),
                endDecade = startDecade.clone().add(100, 'y'),
                startedAt = startDecade.clone(),
                minDateDecade = false,
                maxDateDecade = false,
                endDecadeYear,
                html = '';

            decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
            decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);

            decadesView.find('.disabled').removeClass('disabled');

            if (startDecade.isSame(moment({ y: 1900 })) || options.minDate && options.minDate.isAfter(startDecade, 'y')) {
                decadesViewHeader.eq(0).addClass('disabled');
            }

            decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

            if (startDecade.isSame(moment({ y: 2000 })) || options.maxDate && options.maxDate.isBefore(endDecade, 'y')) {
                decadesViewHeader.eq(2).addClass('disabled');
            }

            while (!startDecade.isAfter(endDecade, 'y')) {
                endDecadeYear = startDecade.year() + 12;
                minDateDecade = options.minDate && options.minDate.isAfter(startDecade, 'y') && options.minDate.year() <= endDecadeYear;
                maxDateDecade = options.maxDate && options.maxDate.isAfter(startDecade, 'y') && options.maxDate.year() <= endDecadeYear;
                html += '<span data-action="selectDecade" class="decade' + (date.isAfter(startDecade) && date.year() <= endDecadeYear ? ' active' : '') + (!isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                startDecade.add(12, 'y');
            }
            html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

            decadesView.find('td').html(html);
            decadesViewHeader.eq(1).text(startedAt.year() + 1 + '-' + startDecade.year());
        },
            fillDate = function fillDate() {
            var daysView = widget.find('.datepicker-days'),
                daysViewHeader = daysView.find('th'),
                currentDate,
                html = [],
                row,
                clsNames = [],
                i;

            if (!hasDate()) {
                return;
            }

            daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
            daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
            daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);

            daysView.find('.disabled').removeClass('disabled');
            daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));

            if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                daysViewHeader.eq(0).addClass('disabled');
            }
            if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                daysViewHeader.eq(2).addClass('disabled');
            }

            currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');

            for (i = 0; i < 42; i++) {
                //always display 42 days (should show 6 weeks)
                if (currentDate.weekday() === 0) {
                    row = $('<tr>');
                    if (options.calendarWeeks) {
                        row.append('<td class="cw">' + currentDate.week() + '</td>');
                    }
                    html.push(row);
                }
                clsNames = ['day'];
                if (currentDate.isBefore(viewDate, 'M')) {
                    clsNames.push('old');
                }
                if (currentDate.isAfter(viewDate, 'M')) {
                    clsNames.push('new');
                }
                if (currentDate.isSame(date, 'd') && !unset) {
                    clsNames.push('active');
                }
                if (!isValid(currentDate, 'd')) {
                    clsNames.push('disabled');
                }
                if (currentDate.isSame(getMoment(), 'd')) {
                    clsNames.push('today');
                }
                if (currentDate.day() === 0 || currentDate.day() === 6) {
                    clsNames.push('weekend');
                }
                notifyEvent({
                    type: 'dp.classify',
                    date: currentDate,
                    classNames: clsNames
                });
                row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="' + clsNames.join(' ') + '">' + currentDate.date() + '</td>');
                currentDate.add(1, 'd');
            }

            daysView.find('tbody').empty().append(html);

            updateMonths();

            updateYears();

            updateDecades();
        },
            fillHours = function fillHours() {
            var table = widget.find('.timepicker-hours table'),
                currentHour = viewDate.clone().startOf('d'),
                html = [],
                row = $('<tr>');

            if (viewDate.hour() > 11 && !use24Hours) {
                currentHour.hour(12);
            }
            while (currentHour.isSame(viewDate, 'd') && (use24Hours || viewDate.hour() < 12 && currentHour.hour() < 12 || viewDate.hour() > 11)) {
                if (currentHour.hour() % 4 === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                currentHour.add(1, 'h');
            }
            table.empty().append(html);
        },
            fillMinutes = function fillMinutes() {
            var table = widget.find('.timepicker-minutes table'),
                currentMinute = viewDate.clone().startOf('h'),
                html = [],
                row = $('<tr>'),
                step = options.stepping === 1 ? 5 : options.stepping;

            while (viewDate.isSame(currentMinute, 'h')) {
                if (currentMinute.minute() % (step * 4) === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                currentMinute.add(step, 'm');
            }
            table.empty().append(html);
        },
            fillSeconds = function fillSeconds() {
            var table = widget.find('.timepicker-seconds table'),
                currentSecond = viewDate.clone().startOf('m'),
                html = [],
                row = $('<tr>');

            while (viewDate.isSame(currentSecond, 'm')) {
                if (currentSecond.second() % 20 === 0) {
                    row = $('<tr>');
                    html.push(row);
                }
                row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                currentSecond.add(5, 's');
            }

            table.empty().append(html);
        },
            fillTime = function fillTime() {
            var toggle,
                newDate,
                timeComponents = widget.find('.timepicker span[data-time-component]');

            if (!use24Hours) {
                toggle = widget.find('.timepicker [data-action=togglePeriod]');
                newDate = date.clone().add(date.hours() >= 12 ? -12 : 12, 'h');

                toggle.text(date.format('A'));

                if (isValid(newDate, 'h')) {
                    toggle.removeClass('disabled');
                } else {
                    toggle.addClass('disabled');
                }
            }
            timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
            timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
            timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

            fillHours();
            fillMinutes();
            fillSeconds();
        },
            update = function update() {
            if (!widget) {
                return;
            }
            fillDate();
            fillTime();
        },
            setValue = function setValue(targetMoment) {
            var oldDate = unset ? null : date;

            // case of calling setValue(null or false)
            if (!targetMoment) {
                unset = true;
                input.val('');
                element.data('date', '');
                notifyEvent({
                    type: 'dp.change',
                    date: false,
                    oldDate: oldDate
                });
                update();
                return;
            }

            targetMoment = targetMoment.clone().locale(options.locale);

            if (hasTimeZone()) {
                targetMoment.tz(options.timeZone);
            }

            if (options.stepping !== 1) {
                targetMoment.minutes(Math.round(targetMoment.minutes() / options.stepping) * options.stepping).seconds(0);

                while (options.minDate && targetMoment.isBefore(options.minDate)) {
                    targetMoment.add(options.stepping, 'minutes');
                }
            }

            if (isValid(targetMoment)) {
                date = targetMoment;
                viewDate = date.clone();
                input.val(date.format(actualFormat));
                element.data('date', date.format(actualFormat));
                unset = false;
                update();
                notifyEvent({
                    type: 'dp.change',
                    date: date.clone(),
                    oldDate: oldDate
                });
            } else {
                if (!options.keepInvalid) {
                    input.val(unset ? '' : date.format(actualFormat));
                } else {
                    notifyEvent({
                        type: 'dp.change',
                        date: targetMoment,
                        oldDate: oldDate
                    });
                }
                notifyEvent({
                    type: 'dp.error',
                    date: targetMoment,
                    oldDate: oldDate
                });
            }
        },


        /**
         * Hides the widget. Possibly will emit dp.hide
         */
        hide = function hide() {
            var transitioning = false;
            if (!widget) {
                return picker;
            }
            // Ignore event if in the middle of a picker transition
            widget.find('.collapse').each(function () {
                var collapseData = $(this).data('collapse');
                if (collapseData && collapseData.transitioning) {
                    transitioning = true;
                    return false;
                }
                return true;
            });
            if (transitioning) {
                return picker;
            }
            if (component && component.hasClass('btn')) {
                component.toggleClass('active');
            }
            widget.hide();

            $(window).off('resize', place);
            widget.off('click', '[data-action]');
            widget.off('mousedown', false);

            widget.remove();
            widget = false;

            notifyEvent({
                type: 'dp.hide',
                date: date.clone()
            });

            input.blur();

            viewDate = date.clone();

            return picker;
        },
            clear = function clear() {
            setValue(null);
        },
            parseInputDate = function parseInputDate(inputDate) {
            if (options.parseInputDate === undefined) {
                if (!moment.isMoment(inputDate) || inputDate instanceof Date) {
                    inputDate = getMoment(inputDate);
                }
            } else {
                inputDate = options.parseInputDate(inputDate);
            }
            //inputDate.locale(options.locale);
            return inputDate;
        },


        /********************************************************************************
         *
         * Widget UI interaction functions
         *
         ********************************************************************************/
        actions = {
            next: function next() {
                var navFnc = datePickerModes[currentViewMode].navFnc;
                viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
                fillDate();
                viewUpdate(navFnc);
            },

            previous: function previous() {
                var navFnc = datePickerModes[currentViewMode].navFnc;
                viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
                fillDate();
                viewUpdate(navFnc);
            },

            pickerSwitch: function pickerSwitch() {
                showMode(1);
            },

            selectMonth: function selectMonth(e) {
                var month = $(e.target).closest('tbody').find('span').index($(e.target));
                viewDate.month(month);
                if (currentViewMode === minViewModeNumber) {
                    setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                    if (!options.inline) {
                        hide();
                    }
                } else {
                    showMode(-1);
                    fillDate();
                }
                viewUpdate('M');
            },

            selectYear: function selectYear(e) {
                var year = parseInt($(e.target).text(), 10) || 0;
                viewDate.year(year);
                if (currentViewMode === minViewModeNumber) {
                    setValue(date.clone().year(viewDate.year()));
                    if (!options.inline) {
                        hide();
                    }
                } else {
                    showMode(-1);
                    fillDate();
                }
                viewUpdate('YYYY');
            },

            selectDecade: function selectDecade(e) {
                var year = parseInt($(e.target).data('selection'), 10) || 0;
                viewDate.year(year);
                if (currentViewMode === minViewModeNumber) {
                    setValue(date.clone().year(viewDate.year()));
                    if (!options.inline) {
                        hide();
                    }
                } else {
                    showMode(-1);
                    fillDate();
                }
                viewUpdate('YYYY');
            },

            selectDay: function selectDay(e) {
                var day = viewDate.clone();
                if ($(e.target).is('.old')) {
                    day.subtract(1, 'M');
                }
                if ($(e.target).is('.new')) {
                    day.add(1, 'M');
                }
                setValue(day.date(parseInt($(e.target).text(), 10)));
                if (!hasTime() && !options.keepOpen && !options.inline) {
                    hide();
                }
            },

            incrementHours: function incrementHours() {
                var newDate = date.clone().add(1, 'h');
                if (isValid(newDate, 'h')) {
                    setValue(newDate);
                }
            },

            incrementMinutes: function incrementMinutes() {
                var newDate = date.clone().add(options.stepping, 'm');
                if (isValid(newDate, 'm')) {
                    setValue(newDate);
                }
            },

            incrementSeconds: function incrementSeconds() {
                var newDate = date.clone().add(1, 's');
                if (isValid(newDate, 's')) {
                    setValue(newDate);
                }
            },

            decrementHours: function decrementHours() {
                var newDate = date.clone().subtract(1, 'h');
                if (isValid(newDate, 'h')) {
                    setValue(newDate);
                }
            },

            decrementMinutes: function decrementMinutes() {
                var newDate = date.clone().subtract(options.stepping, 'm');
                if (isValid(newDate, 'm')) {
                    setValue(newDate);
                }
            },

            decrementSeconds: function decrementSeconds() {
                var newDate = date.clone().subtract(1, 's');
                if (isValid(newDate, 's')) {
                    setValue(newDate);
                }
            },

            togglePeriod: function togglePeriod() {
                setValue(date.clone().add(date.hours() >= 12 ? -12 : 12, 'h'));
            },

            togglePicker: function togglePicker(e) {
                var $this = $(e.target),
                    $parent = $this.closest('ul'),
                    expanded = $parent.find('.in'),
                    closed = $parent.find('.collapse:not(.in)'),
                    collapseData;

                if (expanded && expanded.length) {
                    collapseData = expanded.data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        return;
                    }
                    if (expanded.collapse) {
                        // if collapse plugin is available through bootstrap.js then use it
                        expanded.collapse('hide');
                        closed.collapse('show');
                    } else {
                        // otherwise just toggle in class on the two views
                        expanded.removeClass('in');
                        closed.addClass('in');
                    }
                    if ($this.is('span')) {
                        $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                    } else {
                        $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                    }

                    // NOTE: uncomment if toggled state will be restored in show()
                    //if (component) {
                    //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                    //}
                }
            },

            showPicker: function showPicker() {
                widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                widget.find('.timepicker .timepicker-picker').show();
            },

            showHours: function showHours() {
                widget.find('.timepicker .timepicker-picker').hide();
                widget.find('.timepicker .timepicker-hours').show();
            },

            showMinutes: function showMinutes() {
                widget.find('.timepicker .timepicker-picker').hide();
                widget.find('.timepicker .timepicker-minutes').show();
            },

            showSeconds: function showSeconds() {
                widget.find('.timepicker .timepicker-picker').hide();
                widget.find('.timepicker .timepicker-seconds').show();
            },

            selectHour: function selectHour(e) {
                var hour = parseInt($(e.target).text(), 10);

                if (!use24Hours) {
                    if (date.hours() >= 12) {
                        if (hour !== 12) {
                            hour += 12;
                        }
                    } else {
                        if (hour === 12) {
                            hour = 0;
                        }
                    }
                }
                setValue(date.clone().hours(hour));
                actions.showPicker.call(picker);
            },

            selectMinute: function selectMinute(e) {
                setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                actions.showPicker.call(picker);
            },

            selectSecond: function selectSecond(e) {
                setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                actions.showPicker.call(picker);
            },

            clear: clear,

            today: function today() {
                var todaysDate = getMoment();
                if (isValid(todaysDate, 'd')) {
                    setValue(todaysDate);
                }
            },

            close: hide
        },
            doAction = function doAction(e) {
            if ($(e.currentTarget).is('.disabled')) {
                return false;
            }
            actions[$(e.currentTarget).data('action')].apply(picker, arguments);
            return false;
        },


        /**
         * Shows the widget. Possibly will emit dp.show and dp.change
         */
        show = function show() {
            var currentMoment,
                useCurrentGranularity = {
                'year': function year(m) {
                    return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                },
                'month': function month(m) {
                    return m.date(1).hours(0).seconds(0).minutes(0);
                },
                'day': function day(m) {
                    return m.hours(0).seconds(0).minutes(0);
                },
                'hour': function hour(m) {
                    return m.seconds(0).minutes(0);
                },
                'minute': function minute(m) {
                    return m.seconds(0);
                }
            };

            if (input.prop('disabled') || !options.ignoreReadonly && input.prop('readonly') || widget) {
                return picker;
            }
            if (input.val() !== undefined && input.val().trim().length !== 0) {
                setValue(parseInputDate(input.val().trim()));
            } else if (unset && options.useCurrent && (options.inline || input.is('input') && input.val().trim().length === 0)) {
                currentMoment = getMoment();
                if (typeof options.useCurrent === 'string') {
                    currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
                }
                setValue(currentMoment);
            }
            widget = getTemplate();

            fillDow();
            fillMonths();

            widget.find('.timepicker-hours').hide();
            widget.find('.timepicker-minutes').hide();
            widget.find('.timepicker-seconds').hide();

            update();
            showMode();

            $(window).on('resize', place);
            widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
            widget.on('mousedown', false);

            if (component && component.hasClass('btn')) {
                component.toggleClass('active');
            }
            place();
            widget.show();
            if (options.focusOnShow && !input.is(':focus')) {
                input.focus();
            }

            notifyEvent({
                type: 'dp.show'
            });
            return picker;
        },


        /**
         * Shows or hides the widget
         */
        toggle = function toggle() {
            return widget ? hide() : show();
        },
            keydown = function keydown(e) {
            var handler = null,
                index,
                index2,
                pressedKeys = [],
                pressedModifiers = {},
                currentKey = e.which,
                keyBindKeys,
                allModifiersPressed,
                pressed = 'p';

            keyState[currentKey] = pressed;

            for (index in keyState) {
                if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                    pressedKeys.push(index);
                    if (parseInt(index, 10) !== currentKey) {
                        pressedModifiers[index] = true;
                    }
                }
            }

            for (index in options.keyBinds) {
                if (options.keyBinds.hasOwnProperty(index) && typeof options.keyBinds[index] === 'function') {
                    keyBindKeys = index.split(' ');
                    if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                        allModifiersPressed = true;
                        for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                            if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                allModifiersPressed = false;
                                break;
                            }
                        }
                        if (allModifiersPressed) {
                            handler = options.keyBinds[index];
                            break;
                        }
                    }
                }
            }

            if (handler) {
                handler.call(picker, widget);
                e.stopPropagation();
                e.preventDefault();
            }
        },
            keyup = function keyup(e) {
            keyState[e.which] = 'r';
            e.stopPropagation();
            e.preventDefault();
        },
            change = function change(e) {
            var val = $(e.target).val().trim(),
                parsedDate = val ? parseInputDate(val) : null;
            setValue(parsedDate);
            e.stopImmediatePropagation();
            return false;
        },
            attachDatePickerElementEvents = function attachDatePickerElementEvents() {
            input.on({
                'change': change,
                'blur': options.debug ? '' : hide,
                'keydown': keydown,
                'keyup': keyup,
                'focus': options.allowInputToggle ? show : ''
            });

            if (element.is('input')) {
                input.on({
                    'focus': show
                });
            } else if (component) {
                component.on('click', toggle);
                component.on('mousedown', false);
            }
        },
            detachDatePickerElementEvents = function detachDatePickerElementEvents() {
            input.off({
                'change': change,
                'blur': blur,
                'keydown': keydown,
                'keyup': keyup,
                'focus': options.allowInputToggle ? hide : ''
            });

            if (element.is('input')) {
                input.off({
                    'focus': show
                });
            } else if (component) {
                component.off('click', toggle);
                component.off('mousedown', false);
            }
        },
            indexGivenDates = function indexGivenDates(givenDatesArray) {
            // Store given enabledDates and disabledDates as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: options.enabledDates['2014-02-27'] === true)
            var givenDatesIndexed = {};
            $.each(givenDatesArray, function () {
                var dDate = parseInputDate(this);
                if (dDate.isValid()) {
                    givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                }
            });
            return Object.keys(givenDatesIndexed).length ? givenDatesIndexed : false;
        },
            indexGivenHours = function indexGivenHours(givenHoursArray) {
            // Store given enabledHours and disabledHours as keys.
            // This way we can check their existence in O(1) time instead of looping through whole array.
            // (for example: options.enabledHours['2014-02-27'] === true)
            var givenHoursIndexed = {};
            $.each(givenHoursArray, function () {
                givenHoursIndexed[this] = true;
            });
            return Object.keys(givenHoursIndexed).length ? givenHoursIndexed : false;
        },
            initFormatting = function initFormatting() {
            var format = options.format || 'L LT';

            actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
                return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) {
                    //temp fix for #740
                    return date.localeData().longDateFormat(formatInput2) || formatInput2;
                });
            });

            parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
            if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                parseFormats.push(actualFormat);
            }

            use24Hours = actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1;

            if (isEnabled('y')) {
                minViewModeNumber = 2;
            }
            if (isEnabled('M')) {
                minViewModeNumber = 1;
            }
            if (isEnabled('d')) {
                minViewModeNumber = 0;
            }

            currentViewMode = Math.max(minViewModeNumber, currentViewMode);

            if (!unset) {
                setValue(date);
            }
        };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function () {
            ///<summary>Destroys the widget and removes all attached event listeners</summary>
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.disable = function () {
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
            hide();
            if (component && component.hasClass('btn')) {
                component.addClass('disabled');
            }
            input.prop('disabled', true);
            return picker;
        };

        picker.enable = function () {
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {
                component.removeClass('disabled');
            }
            input.prop('disabled', false);
            return picker;
        };

        picker.ignoreReadonly = function (ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function (newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function (key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.date = function (newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.date">
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
            return picker;
        };

        picker.format = function (newFormat) {
            ///<summary>test su</summary>
            ///<param name="newFormat">info about para</param>
            ///<returns type="string|boolean">returns foo</returns>
            if (arguments.length === 0) {
                return options.format;
            }

            if (typeof newFormat !== 'string' && (typeof newFormat !== 'boolean' || newFormat !== false)) {
                throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.timeZone = function (newZone) {
            if (arguments.length === 0) {
                return options.timeZone;
            }

            if (typeof newZone !== 'string') {
                throw new TypeError('newZone() expects a string parameter');
            }

            options.timeZone = newZone;

            return picker;
        };

        picker.dayViewHeaderFormat = function (newFormat) {
            if (arguments.length === 0) {
                return options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            options.dayViewHeaderFormat = newFormat;
            return picker;
        };

        picker.extraFormats = function (formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.disabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates;
            }

            if (!dates) {
                options.disabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            options.disabledDates = indexGivenDates(dates);
            options.enabledDates = false;
            update();
            return picker;
        };

        picker.enabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
            ///<returns type="array">options.enabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates;
            }

            if (!dates) {
                options.enabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            options.enabledDates = indexGivenDates(dates);
            options.disabledDates = false;
            update();
            return picker;
        };

        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return options.daysOfWeekDisabled.splice(0);
            }

            if (typeof daysOfWeekDisabled === 'boolean' && !daysOfWeekDisabled) {
                options.daysOfWeekDisabled = false;
                update();
                return picker;
            }

            if (!(daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'd')) {
                    date.add(1, 'd');
                    if (tries === 31) {
                        throw 'Tried 31 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.maxDate = function (maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if (typeof maxDate === 'boolean' && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.minDate = function (minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if (typeof minDate === 'boolean' && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone().add(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.defaultDate = function (defaultDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = getMoment();
                } else {
                    defaultDate = getMoment(defaultDate);
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if (options.defaultDate && options.inline || input.val().trim() === '') {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function (locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.stepping = function (stepping) {
            if (arguments.length === 0) {
                return options.stepping;
            }

            stepping = parseInt(stepping, 10);
            if (isNaN(stepping) || stepping < 1) {
                stepping = 1;
            }
            options.stepping = stepping;
            return picker;
        };

        picker.useCurrent = function (useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return options.useCurrent;
            }

            if (typeof useCurrent !== 'boolean' && typeof useCurrent !== 'string') {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            options.useCurrent = useCurrent;
            return picker;
        };

        picker.collapse = function (collapse) {
            if (arguments.length === 0) {
                return options.collapse;
            }

            if (typeof collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (options.collapse === collapse) {
                return picker;
            }
            options.collapse = collapse;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.icons = function (icons) {
            if (arguments.length === 0) {
                return $.extend({}, options.icons);
            }

            if (!(icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }
            $.extend(options.icons, icons);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.tooltips = function (tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, options.tooltips);
            }

            if (!(tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(options.tooltips, tooltips);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.useStrict = function (useStrict) {
            if (arguments.length === 0) {
                return options.useStrict;
            }

            if (typeof useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            options.useStrict = useStrict;
            return picker;
        };

        picker.sideBySide = function (sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function (viewMode) {
            if (arguments.length === 0) {
                return options.viewMode;
            }

            if (typeof viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (viewModes.indexOf(viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
            }

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };

        picker.toolbarPlacement = function (toolbarPlacement) {
            if (arguments.length === 0) {
                return options.toolbarPlacement;
            }

            if (typeof toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            options.toolbarPlacement = toolbarPlacement;

            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetPositioning = function (widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, options.widgetPositioning);
            }

            if ({}.toString.call(widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (widgetPositioning.horizontal) {
                if (typeof widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
            }
            if (widgetPositioning.vertical) {
                if (typeof widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                options.widgetPositioning.vertical = widgetPositioning.vertical;
            }
            update();
            return picker;
        };

        picker.calendarWeeks = function (calendarWeeks) {
            if (arguments.length === 0) {
                return options.calendarWeeks;
            }

            if (typeof calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            options.calendarWeeks = calendarWeeks;
            update();
            return picker;
        };

        picker.showTodayButton = function (showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function (showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetParent = function (widgetParent) {
            if (arguments.length === 0) {
                return options.widgetParent;
            }

            if (typeof widgetParent === 'string') {
                widgetParent = $(widgetParent);
            }

            if (widgetParent !== null && typeof widgetParent !== 'string' && !(widgetParent instanceof $)) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            options.widgetParent = widgetParent;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.keepOpen = function (keepOpen) {
            if (arguments.length === 0) {
                return options.keepOpen;
            }

            if (typeof keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            options.keepOpen = keepOpen;
            return picker;
        };

        picker.focusOnShow = function (focusOnShow) {
            if (arguments.length === 0) {
                return options.focusOnShow;
            }

            if (typeof focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            options.focusOnShow = focusOnShow;
            return picker;
        };

        picker.inline = function (inline) {
            if (arguments.length === 0) {
                return options.inline;
            }

            if (typeof inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            options.inline = inline;
            return picker;
        };

        picker.clear = function () {
            clear();
            return picker;
        };

        picker.keyBinds = function (keyBinds) {
            if (arguments.length === 0) {
                return options.keyBinds;
            }

            options.keyBinds = keyBinds;
            return picker;
        };

        picker.getMoment = function (d) {
            return getMoment(d);
        };

        picker.debug = function (debug) {
            if (typeof debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            options.debug = debug;
            return picker;
        };

        picker.allowInputToggle = function (allowInputToggle) {
            if (arguments.length === 0) {
                return options.allowInputToggle;
            }

            if (typeof allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            options.allowInputToggle = allowInputToggle;
            return picker;
        };

        picker.showClose = function (showClose) {
            if (arguments.length === 0) {
                return options.showClose;
            }

            if (typeof showClose !== 'boolean') {
                throw new TypeError('showClose() expects a boolean parameter');
            }

            options.showClose = showClose;
            return picker;
        };

        picker.keepInvalid = function (keepInvalid) {
            if (arguments.length === 0) {
                return options.keepInvalid;
            }

            if (typeof keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            options.keepInvalid = keepInvalid;
            return picker;
        };

        picker.datepickerInput = function (datepickerInput) {
            if (arguments.length === 0) {
                return options.datepickerInput;
            }

            if (typeof datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            options.datepickerInput = datepickerInput;
            return picker;
        };

        picker.parseInputDate = function (parseInputDate) {
            if (arguments.length === 0) {
                return options.parseInputDate;
            }

            if (typeof parseInputDate !== 'function') {
                throw new TypeError('parseInputDate() sholud be as function');
            }

            options.parseInputDate = parseInputDate;

            return picker;
        };

        picker.disabledTimeIntervals = function (disabledTimeIntervals) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledTimeIntervals</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals;
            }

            if (!disabledTimeIntervals) {
                options.disabledTimeIntervals = false;
                update();
                return picker;
            }
            if (!(disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            options.disabledTimeIntervals = disabledTimeIntervals;
            update();
            return picker;
        };

        picker.disabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
            ///<returns type="array">options.disabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours;
            }

            if (!hours) {
                options.disabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            options.disabledHours = indexGivenHours(hours);
            options.enabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.enabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
            ///<returns type="array">options.enabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours;
            }

            if (!hours) {
                options.enabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            options.enabledHours = indexGivenHours(hours);
            options.disabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };
        /**
         * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
         * @param {Takes string, viewDate, moment, null parameter.} newDate
         * @returns {viewDate.clone()}
         */
        picker.viewDate = function (newDate) {
            if (arguments.length === 0) {
                return viewDate.clone();
            }

            if (!newDate) {
                viewDate = date.clone();
                return picker;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            viewDate = parseInputDate(newDate);
            viewUpdate();
            return picker;
        };

        // initializing element and component attributes
        if (element.is('input')) {
            input = element;
        } else {
            input = element.find(options.datepickerInput);
            if (input.length === 0) {
                input = element.find('input');
            } else if (!input.is('input')) {
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (element.find('.datepickerbutton').length === 0) {
                component = element.find('.input-group-addon');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!options.inline && !input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        // Set defaults for date here now instead of in var declaration
        date = getMoment();
        viewDate = date.clone();

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

        if (input.prop('disabled')) {
            picker.disable();
        }
        if (input.is('input') && input.val().trim().length !== 0) {
            setValue(parseInputDate(input.val().trim()));
        } else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        if (options.inline) {
            show();
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    /**
     * See (http://jquery.com/).
     * @name jQuery
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     */
    /**
     * See (http://jquery.com/)
     * @name fn
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     * @memberOf jQuery
     */
    /**
     * Show comments
     * @class datetimepicker
     * @memberOf jQuery.fn
     */
    $.fn.datetimepicker = function (options) {
        options = options || {};

        var args = Array.prototype.slice.call(arguments, 1),
            isInstance = true,
            thisMethods = ['destroy', 'hide', 'show', 'toggle'],
            returnValue;

        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            return this.each(function () {
                var $this = $(this),
                    _options;
                if (!$this.data('DateTimePicker')) {
                    // create a private copy of the defaults object
                    _options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                    $this.data('DateTimePicker', dateTimePicker($this, _options));
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var $this = $(this),
                    instance = $this.data('DateTimePicker');
                if (!instance) {
                    throw new Error('bootstrap-datetimepicker("' + options + '") method was called on an element that is not using DateTimePicker');
                }

                returnValue = instance[options].apply(instance, args);
                isInstance = returnValue === instance;
            });

            if (isInstance || $.inArray(options, thisMethods) > -1) {
                return this;
            }

            return returnValue;
        }

        throw new TypeError('Invalid arguments for DateTimePicker: ' + options);
    };

    $.fn.datetimepicker.defaults = {
        timeZone: '',
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        keyBinds: {
            up: function up(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
            },
            down: function down(widget) {
                if (!widget) {
                    this.show();
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
            },
            'control up': function controlUp(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
            },
            'control down': function controlDown(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
            },
            left: function left(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
            },
            right: function right(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
            },
            pageUp: function pageUp(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
            },
            pageDown: function pageDown(widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
            },
            enter: function enter() {
                this.hide();
            },
            escape: function escape() {
                this.hide();
            },
            //tab: function (widget) { //this break the flow of the form. disabling for now
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
            //    if(toggle.length > 0) toggle.click();
            //},
            'control space': function controlSpace(widget) {
                if (!widget) {
                    return;
                }
                if (widget.find('.timepicker').is(':visible')) {
                    widget.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function t() {
                this.date(this.getMoment());
            },
            'delete': function _delete() {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };

    return $.fn.datetimepicker;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(9);
__webpack_require__(10);
module.exports = __webpack_require__(1);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.moment = b();
}(this, function () {
  "use strict";
  function a() {
    return sd.apply(null, arguments);
  }function b(a) {
    sd = a;
  }function c(a) {
    return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
  }function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }function e(a) {
    var b;for (b in a) {
      return !1;
    }return !0;
  }function f(a) {
    return void 0 === a;
  }function g(a) {
    return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
  }function h(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }function i(a, b) {
    var c,
        d = [];for (c = 0; c < a.length; ++c) {
      d.push(b(a[c], c));
    }return d;
  }function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function k(a, b) {
    for (var c in b) {
      j(b, c) && (a[c] = b[c]);
    }return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }function m() {
    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
  }function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }function o(a) {
    if (null == a._isValid) {
      var b = n(a),
          c = ud.call(b.parsedDateParts, function (a) {
        return null != a;
      }),
          d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;a._isValid = d;
    }return a._isValid;
  }function p(a) {
    var b = l(NaN);return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
  }function q(a, b) {
    var c, d, e;if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0) for (c = 0; c < vd.length; c++) {
      d = vd[c], e = b[d], f(e) || (a[d] = e);
    }return a;
  }function r(b) {
    q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1);
  }function s(a) {
    return a instanceof r || null != a && null != a._isAMomentObject;
  }function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }function u(a) {
    var b = +a,
        c = 0;return 0 !== b && isFinite(b) && (c = t(b)), c;
  }function v(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;for (d = 0; d < e; d++) {
      (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
    }return g + f;
  }function w(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }function x(b, c) {
    var d = !0;return k(function () {
      if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (e = "", "object" == _typeof(arguments[g])) {
            e += "\n[" + g + "] ";for (var h in arguments[0]) {
              e += h + ": " + arguments[0][h] + ", ";
            }e = e.slice(0, -2);
          } else e = arguments[g];f.push(e);
        }w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), d = !1;
      }return c.apply(this, arguments);
    }, c);
  }function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0);
  }function z(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
  }function A(a) {
    var b, c;for (c in a) {
      b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
    }this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }function B(a, b) {
    var c,
        e = k({}, a);for (c in b) {
      j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
    }for (c in a) {
      j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    }return e;
  }function C(a) {
    null != a && this.set(a);
  }function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;return z(d) ? d.call(b, c) : d;
  }function E(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }function F() {
    return this._invalidDate;
  }function G(a) {
    return this._ordinal.replace("%d", a);
  }function H(a, b, c, d) {
    var e = this._relativeTime[c];return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];return z(c) ? c(b) : c.replace(/%s/i, b);
  }function J(a, b) {
    var c = a.toLowerCase();Hd[c] = Hd[c + "s"] = Hd[b] = a;
  }function K(a) {
    return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
  }function L(a) {
    var b,
        c,
        d = {};for (c in a) {
      j(a, c) && (b = K(c), b && (d[b] = a[c]));
    }return d;
  }function M(a, b) {
    Id[a] = b;
  }function N(a) {
    var b = [];for (var c in a) {
      b.push({ unit: c, priority: Id[c] });
    }return b.sort(function (a, b) {
      return a.priority - b.priority;
    }), b;
  }function O(b, c) {
    return function (d) {
      return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
    };
  }function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }function R(a) {
    return a = K(a), z(this[a]) ? this[a]() : this;
  }function S(a, b) {
    if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
      a = L(a);for (var c = N(a), d = 0; d < c.length; d++) {
        this[c[d].unit](a[c[d].unit]);
      }
    } else if (a = K(a), z(this[a])) return this[a](b);return this;
  }function T(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }function U(a, b, c, d) {
    var e = d;"string" == typeof d && (e = function e() {
      return this[d]();
    }), a && (Md[a] = e), b && (Md[b[0]] = function () {
      return T(e.apply(this, arguments), b[1], b[2]);
    }), c && (Md[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }function V(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }function W(a) {
    var b,
        c,
        d = a.match(Jd);for (b = 0, c = d.length; b < c; b++) {
      Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
    }return function (b) {
      var e,
          f = "";for (e = 0; e < c; e++) {
        f += z(d[e]) ? d[e].call(b, a) : d[e];
      }return f;
    };
  }function X(a, b) {
    return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate();
  }function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }var d = 5;for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) {
      a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
    }return a;
  }function Z(a, b, c) {
    ce[a] = z(b) ? b : function (a, d) {
      return a && c ? c : b;
    };
  }function $(a, b) {
    return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
  }function _(a) {
    return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }));
  }function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }function ba(a, b) {
    var c,
        d = b;for ("string" == typeof a && (a = [a]), g(b) && (d = function d(a, c) {
      c[b] = u(a);
    }), c = 0; c < a.length; c++) {
      de[a[c]] = d;
    }
  }function ca(a, b) {
    ba(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }function da(a, b, c) {
    null != b && j(de, a) && de[a](b, c._a, c, a);
  }function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }function fa(a, b) {
    return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
  }function ga(a, b) {
    return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }function ha(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) {
      f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
    }return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null));
  }function ia(a, b, c) {
    var d, e, f;if (this._monthsParseExact) return ha.call(this, a, b, c);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
      if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
    }
  }function ja(a, b) {
    var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b);else if (b = a.localeData().monthsParse(b), !g(b)) return a;return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
  }function ka(b) {
    return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
  }function la() {
    return ea(this.year(), this.month());
  }function ma(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }function na(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
  }function oa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d = [],
        e = [],
        f = [];for (b = 0; b < 12; b++) {
      c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
    }for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) {
      d[b] = aa(d[b]), e[b] = aa(e[b]);
    }for (b = 0; b < 24; b++) {
      f[b] = aa(f[b]);
    }this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
  }function pa(a) {
    return qa(a) ? 366 : 365;
  }function qa(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }function ra() {
    return qa(this.year());
  }function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
  }function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
  }function ua(a, b, c) {
    var d = 7 + b - c,
        e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
  }function va(a, b, c, d, e) {
    var f,
        g,
        h = (7 + c - d) % 7,
        i = ua(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
  }function wa(a, b, c) {
    var d,
        e,
        f = ua(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
  }function xa(a, b, c) {
    var d = ua(a, b, c),
        e = ua(a + 1, b, c);return (pa(a) - d + e) / 7;
  }function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }function za() {
    return this._week.dow;
  }function Aa() {
    return this._week.doy;
  }function Ba(a) {
    var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
  }function Ca(a) {
    var b = wa(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
  }function Da(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }function Ea(a, b) {
    return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
  }function Fa(a, b) {
    return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }function Ia(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) {
      f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
    }return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
  }function Ja(a, b, c) {
    var d, e, f;if (this._weekdaysParseExact) return Ia.call(this, a, b, c);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
      if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
  }function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
  }function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;if (null != a) {
      var b = Ea(a, this.localeData());return this.day(this.day() % 7 ? b : b - 7);
    }return this.day() || 7;
  }function Na(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }function Oa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }function Pa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d,
        e,
        f,
        g = [],
        h = [],
        i = [],
        j = [];for (b = 0; b < 7; b++) {
      c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
    }for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) {
      h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
    }this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
  }function Ra() {
    return this.hours() % 12 || 12;
  }function Sa() {
    return this.hours() || 24;
  }function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }function Ua(a, b) {
    return b._meridiemParse;
  }function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }function Wa(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = Za(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && v(e, c, !0) >= b - 1) break;b--;
      }f++;
    }return null;
  }function Za(a) {
    var b = null;if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
      b = Be._abbr, $a(b);
    } catch (a) {}return Fe[a];
  }function $a(a, b) {
    var c;return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr;
  }function _a(a, b) {
    if (null !== b) {
      var c = Ee;if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;else if (null != b.parentLocale) {
        if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({ name: a, config: b }), null;c = Fe[b.parentLocale]._config;
      }return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function (a) {
        _a(a.name, a.config);
      }), $a(a), Fe[a];
    }return delete Fe[a], null;
  }function ab(a, b) {
    if (null != b) {
      var c,
          d = Ee;null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a);
    } else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);return Fe[a];
  }function bb(a) {
    var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;if (!c(a)) {
      if (b = Za(a)) return b;a = [a];
    }return Ya(a);
  }function cb() {
    return Ad(Fe);
  }function db(a) {
    var b,
        c = a._a;return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a;
  }function eb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = He.exec(h) || Ie.exec(h);if (i) {
      for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++) {
        if (Ke[b][1].exec(i[1])) {
          e = Ke[b][0], d = Ke[b][2] !== !1;break;
        }
      }if (null == e) return void (a._isValid = !1);if (i[3]) {
        for (b = 0, c = Le.length; b < c; b++) {
          if (Le[b][1].exec(i[3])) {
            f = (i[2] || " ") + Le[b][0];break;
          }
        }if (null == f) return void (a._isValid = !1);
      }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
        if (!Je.exec(i[4])) return void (a._isValid = !1);g = "Z";
      }a._f = e + (f || "") + (g || ""), lb(a);
    } else a._isValid = !1;
  }function fb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
        k = "YXWVUTSRQPONZABCDEFGHIKLM";if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
      if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
        var l = new Date(c[2]),
            m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
      }switch (c[5].length) {case 2:
          0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
          h = j[c[5]];break;default:
          h = j[" GMT"];}c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
    } else a._isValid = !1;
  }function gb(b) {
    var c = Me.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
  }function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }function ib(b) {
    var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
  }function jb(a) {
    var b,
        c,
        d,
        e,
        f = [];if (!a._d) {
      for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) {
        a._a[b] = f[b] = d[b];
      }for (; b < 7; b++) {
        a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      }24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24);
    }
  }function kb(a) {
    var b, c, d, e, f, g, h, i;if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);else {
      f = a._locale._week.dow, g = a._locale._week.doy;var j = wa(tb(), f, g);c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
    }d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear);
  }function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);if (b._f === a.RFC_2822) return void fb(b);b._a = [], n(b).empty = !0;var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        j = 0;for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) {
      f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
    }n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b);
  }function mb(a, b, c) {
    var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }function nb(a) {
    var b, c, d, e, f;if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) {
      f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
    }k(a, c || b);
  }function ob(a) {
    if (!a._d) {
      var b = L(a._i);a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10);
      }), jb(a);
    }
  }function pb(a) {
    var b = new r(db(qb(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }function qb(a) {
    var b = a._i,
        d = a._f;return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a));
  }function rb(b) {
    var e = b._i;f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
      return parseInt(a, 10);
    }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
  }function sb(a, b, f, g, h) {
    var i = {};return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i);
  }function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }function ub(a, b) {
    var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();for (d = b[0], e = 1; e < b.length; ++e) {
      b[e].isValid() && !b[e][a](d) || (d = b[e]);
    }return d;
  }function vb() {
    var a = [].slice.call(arguments, 0);return ub("isBefore", a);
  }function wb() {
    var a = [].slice.call(arguments, 0);return ub("isAfter", a);
  }function xb(a) {
    for (var b in a) {
      if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
    }for (var c = !1, d = 0; d < Re.length; ++d) {
      if (a[Re[d]]) {
        if (c) return !1;parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
      }
    }return !0;
  }function yb() {
    return this._isValid;
  }function zb() {
    return Sb(NaN);
  }function Ab(a) {
    var b = L(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble();
  }function Bb(a) {
    return a instanceof Ab;
  }function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
    });
  }function Eb(a, b) {
    var c = (b || "").match(a);if (null === c) return null;var d = c[c.length - 1] || [],
        e = (d + "").match(Se) || ["-", 0, 0],
        f = +(60 * e[1]) + u(e[2]);return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }function Fb(b, c) {
    var d, e;return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
  }function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }function Hb(b, c, d) {
    var e,
        f = this._offset || 0;if (!this.isValid()) return null != b ? this : NaN;if (null != b) {
      if ("string" == typeof b) {
        if (b = Eb(_d, b), null === b) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? f : Gb(this);
  }function Ib(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }function Jb(a) {
    return this.utcOffset(0, a);
  }function Kb(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this;
  }function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var a = Eb($d, this._i);null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }return this;
  }function Mb(a) {
    return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
  }function Nb() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (q(a, this), a = qb(a), a._a) {
      var b = a._isUTC ? l(a._a) : tb(a._a);this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  }function Pb() {
    return !!this.isValid() && !this._isUTC;
  }function Qb() {
    return !!this.isValid() && this._isUTC;
  }function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }function Sb(a, b) {
    var c,
        d,
        e,
        f = a,
        h = null;return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ge]) * c, h: u(h[he]) * c, m: u(h[ie]) * c, s: u(h[je]) * c, ms: u(Cb(1e3 * h[ke])) * c }) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == (typeof f === "undefined" ? "undefined" : _typeof(f)) && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d;
  }function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
  }function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }function Vb(a, b) {
    var c;return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
  }function Wb(a, b) {
    return function (c, d) {
      var e, f;return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this;
    };
  }function Xb(b, c, d, e) {
    var f = c._milliseconds,
        g = Cb(c._days),
        h = Cb(c._months);b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
  }function Yb(a, b) {
    var c = a.diff(b, "days", !0);return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
  }function Zb(b, c) {
    var d = b || tb(),
        e = Fb(d, this).startOf("day"),
        f = a.calendarFormat(this, e) || "sameElse",
        g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }function $b() {
    return new r(this);
  }function _b(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
  }function ac(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
  }function bc(a, b, c, d) {
    return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
  }function cc(a, b) {
    var c,
        d = s(a) ? a : tb(a);return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
  }function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }function fc(a, b, c) {
    var d, e, f, g;return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN;
  }function gc(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0;
  }function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function ic() {
    if (!this.isValid()) return null;var a = this.clone().utc();return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var a = "moment",
        b = "";this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");var c = "[" + a + '("]',
        d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        e = "-MM-DD[T]HH:mm:ss.SSS",
        f = b + '[")]';return this.format(c + d + e + f);
  }function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var c = X(this, b);return this.localeData().postformat(c);
  }function lc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function mc(a) {
    return this.from(tb(), a);
  }function nc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function oc(a) {
    return this.to(tb(), a);
  }function pc(a) {
    var b;return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this);
  }function qc() {
    return this._locale;
  }function rc(a) {
    switch (a = K(a)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }function sc(a) {
    return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
  }function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }function vc() {
    return new Date(this.valueOf());
  }function wc() {
    var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }function xc() {
    var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
  }function yc() {
    return this.isValid() ? this.toISOString() : null;
  }function zc() {
    return o(this);
  }function Ac() {
    return k({}, n(this));
  }function Bc() {
    return n(this).overflow;
  }function Cc() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }function Ec(a) {
    return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function Gc() {
    return xa(this.year(), 1, 4);
  }function Hc() {
    var a = this.localeData()._week;return xa(this.year(), a.dow, a.doy);
  }function Ic(a, b, c, d, e) {
    var f;return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
        g = ta(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
  }function Kc(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }function Lc(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
  }function Mc(a, b) {
    b[ke] = u(1e3 * ("0." + a));
  }function Nc() {
    return this._isUTC ? "UTC" : "";
  }function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }function Pc(a) {
    return tb(1e3 * a);
  }function Qc() {
    return tb.apply(null, arguments).parseZone();
  }function Rc(a) {
    return a;
  }function Sc(a, b, c, d) {
    var e = bb(),
        f = l().set(d, b);return e[c](f, a);
  }function Tc(a, b, c) {
    if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");var d,
        e = [];for (d = 0; d < 12; d++) {
      e[d] = Sc(a, d, c, "month");
    }return e;
  }function Uc(a, b, c, d) {
    "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");var e = bb(),
        f = a ? e._week.dow : 0;if (null != c) return Sc(b, (c + f) % 7, d, "day");var h,
        i = [];for (h = 0; h < 7; h++) {
      i[h] = Sc(b, (h + f) % 7, d, "day");
    }return i;
  }function Vc(a, b) {
    return Tc(a, b, "months");
  }function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }function $c() {
    var a = this._data;return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this;
  }function _c(a, b, c, d) {
    var e = Sb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }function ad(a, b) {
    return _c(this, a, b, 1);
  }function bd(a, b) {
    return _c(this, a, b, -1);
  }function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }function dd() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }function ed(a) {
    return 4800 * a / 146097;
  }function fd(a) {
    return 146097 * a / 4800;
  }function gd(a) {
    if (!this.isValid()) return NaN;var b,
        c,
        d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(fd(this._months)), a) {case "week":
        return b / 7 + d / 6048e5;case "day":
        return b + d / 864e5;case "hour":
        return 24 * b + d / 36e5;case "minute":
        return 1440 * b + d / 6e4;case "second":
        return 86400 * b + d / 1e3;case "millisecond":
        return Math.floor(864e5 * b) + d;default:
        throw new Error("Unknown unit " + a);}
  }function hd() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
  }function id(a) {
    return function () {
      return this.as(a);
    };
  }function jd(a) {
    return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
  }function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }function ld() {
    return t(this.days() / 7);
  }function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }function nd(a, b, c) {
    var d = Sb(a).abs(),
        e = uf(d.as("s")),
        f = uf(d.as("m")),
        g = uf(d.as("h")),
        h = uf(d.as("d")),
        i = uf(d.as("M")),
        j = uf(d.as("y")),
        k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
  }function od(a) {
    return void 0 === a ? uf : "function" == typeof a && (uf = a, !0);
  }function pd(a, b) {
    return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0));
  }function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();var b = this.localeData(),
        c = nd(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();var a,
        b,
        c,
        d = wf(this._milliseconds) / 1e3,
        e = wf(this._days),
        f = wf(this._months);a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }var sd, td;td = Array.prototype.some ? Array.prototype.some : function (a) {
    for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) {
      if (d in b && a.call(this, b[d], d, b)) return !0;
    }return !1;
  };var ud = td,
      vd = a.momentProperties = [],
      wd = !1,
      xd = {};a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;var yd;yd = Object.keys ? Object.keys : function (a) {
    var b,
        c = [];for (b in a) {
      j(a, b) && c.push(b);
    }return c;
  };var zd,
      Ad = yd,
      Bd = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
      Cd = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
      Dd = "Invalid date",
      Ed = "%d",
      Fd = /\d{1,2}/,
      Gd = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
      Hd = {},
      Id = {},
      Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Ld = {},
      Md = {},
      Nd = /\d/,
      Od = /\d\d/,
      Pd = /\d{3}/,
      Qd = /\d{4}/,
      Rd = /[+-]?\d{6}/,
      Sd = /\d\d?/,
      Td = /\d\d\d\d?/,
      Ud = /\d\d\d\d\d\d?/,
      Vd = /\d{1,3}/,
      Wd = /\d{1,4}/,
      Xd = /[+-]?\d{1,6}/,
      Yd = /\d+/,
      Zd = /[+-]?\d+/,
      $d = /Z|[+-]\d\d:?\d\d/gi,
      _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
      ae = /[+-]?\d+(\.\d{1,3})?/,
      be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      ce = {},
      de = {},
      ee = 0,
      fe = 1,
      ge = 2,
      he = 3,
      ie = 4,
      je = 5,
      ke = 6,
      le = 7,
      me = 8;zd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
    var b;for (b = 0; b < this.length; ++b) {
      if (this[b] === a) return b;
    }return -1;
  };var ne = zd;U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), U("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), U("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function (a, b) {
    return b.monthsShortRegex(a);
  }), Z("MMMM", function (a, b) {
    return b.monthsRegex(a);
  }), ba(["M", "MM"], function (a, b) {
    b[fe] = u(a) - 1;
  }), ba(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[fe] = e : n(c).invalidMonth = a;
  });var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      re = be,
      se = be;U("Y", 0, 0, function () {
    var a = this.year();return a <= 9999 ? "" + a : "+" + a;
  }), U(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function (b, c) {
    c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
  }), ba("YY", function (b, c) {
    c[ee] = a.parseTwoDigitYear(b);
  }), ba("Y", function (a, b) {
    b[ee] = parseInt(a, 10);
  }), a.parseTwoDigitYear = function (a) {
    return u(a) + (u(a) > 68 ? 1900 : 2e3);
  };var te = O("FullYear", !0);U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = u(a);
  });var ue = { dow: 0, doy: 6 };U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), U("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), U("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function (a, b) {
    return b.weekdaysMinRegex(a);
  }), Z("ddd", function (a, b) {
    return b.weekdaysShortRegex(a);
  }), Z("dddd", function (a, b) {
    return b.weekdaysRegex(a);
  }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : n(c).invalidWeekday = a;
  }), ca(["d", "e", "E"], function (a, b, c, d) {
    b[d] = u(a);
  });var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      ye = be,
      ze = be,
      Ae = be;U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2);
  }), U("hmmss", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), U("Hmm", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2);
  }), U("Hmmss", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function (a, b, c) {
    var d = u(a);b[he] = 24 === d ? 0 : d;
  }), ba(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), ba(["h", "hh"], function (a, b, c) {
    b[he] = u(a), n(c).bigHour = !0;
  }), ba("hmm", function (a, b, c) {
    var d = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0;
  }), ba("hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0;
  }), ba("Hmm", function (a, b, c) {
    var d = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d));
  }), ba("Hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e));
  });var Be,
      Ce = /[ap]\.?m?\.?/i,
      De = O("Hours", !0),
      Ee = { calendar: Bd, longDateFormat: Cd, invalidDate: Dd, ordinal: Ed, dayOfMonthOrdinalParse: Fd, relativeTime: Gd, months: pe, monthsShort: qe, week: ue, weekdays: ve, weekdaysMin: xe, weekdaysShort: we, meridiemParse: Ce },
      Fe = {},
      Ge = {},
      He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Je = /Z|[+-]\d\d(?::?\d\d)?/,
      Ke = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Le = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      Me = /^\/?Date\((\-?\d+)/i,
      Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a < this ? this : a : p();
  }),
      Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : p();
  }),
      Qe = function Qe() {
    return Date.now ? Date.now() : +new Date();
  },
      Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Eb(_d, a);
  });var Se = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn = Ab.prototype, Sb.invalid = zb;var Ve = Wb(1, "add"),
      We = Wb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), U(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = u(a);
  }), ca(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function (a, b) {
    b[fe] = 3 * (u(a) - 1);
  }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function (a, b) {
    return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
  }), ba(["D", "DD"], ge), ba("Do", function (a, b) {
    b[ge] = u(a.match(Sd)[0], 10);
  });var Ye = O("Date", !0);U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = u(a);
  }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);var Ze = O("Minutes", !1);U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);var $e = O("Seconds", !1);U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), U(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), U(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), U(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), U(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), U(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), U(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);var _e;for (_e = "SSSS"; _e.length <= 9; _e += "S") {
    Z(_e, Yd);
  }for (_e = "S"; _e.length <= 9; _e += "S") {
    ba(_e, Mc);
  }var af = O("Milliseconds", !1);U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");var bf = r.prototype;bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec, bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);var cf = C.prototype;cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);var df = Math.abs,
      ef = id("ms"),
      ff = id("s"),
      gf = id("m"),
      hf = id("h"),
      jf = id("d"),
      kf = id("w"),
      lf = id("M"),
      mf = id("y"),
      nf = kd("milliseconds"),
      of = kd("seconds"),
      pf = kd("minutes"),
      qf = kd("hours"),
      rf = kd("days"),
      sf = kd("months"),
      tf = kd("years"),
      uf = Math.round,
      vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      wf = Math.abs,
      xf = Ab.prototype;return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of, xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), ba("x", function (a, b, c) {
    c._d = new Date(u(a));
  }), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a, b) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = b() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : a.moment = b();
}(this, function () {
  "use strict";
  function a() {
    return re.apply(null, arguments);
  }function b(a) {
    re = a;
  }function c(a) {
    return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a);
  }function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }function e(a) {
    var b;for (b in a) {
      return !1;
    }return !0;
  }function f(a) {
    return void 0 === a;
  }function g(a) {
    return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a);
  }function h(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a);
  }function i(a, b) {
    var c,
        d = [];for (c = 0; c < a.length; ++c) {
      d.push(b(a[c], c));
    }return d;
  }function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }function k(a, b) {
    for (var c in b) {
      j(b, c) && (a[c] = b[c]);
    }return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a;
  }function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }function m() {
    return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 };
  }function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }function o(a) {
    if (null == a._isValid) {
      var b = n(a),
          c = te.call(b.parsedDateParts, function (a) {
        return null != a;
      }),
          d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;a._isValid = d;
    }return a._isValid;
  }function p(a) {
    var b = l(NaN);return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b;
  }function q(a, b) {
    var c, d, e;if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), ue.length > 0) for (c = 0; c < ue.length; c++) {
      d = ue[c], e = b[d], f(e) || (a[d] = e);
    }return a;
  }function r(b) {
    q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), ve === !1 && (ve = !0, a.updateOffset(this), ve = !1);
  }function s(a) {
    return a instanceof r || null != a && null != a._isAMomentObject;
  }function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }function u(a) {
    var b = +a,
        c = 0;return 0 !== b && isFinite(b) && (c = t(b)), c;
  }function v(a, b, c) {
    var d,
        e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;for (d = 0; d < e; d++) {
      (c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
    }return g + f;
  }function w(b) {
    a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b);
  }function x(b, c) {
    var d = !0;return k(function () {
      if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (e = "", "object" == _typeof(arguments[g])) {
            e += "\n[" + g + "] ";for (var h in arguments[0]) {
              e += h + ": " + arguments[0][h] + ", ";
            }e = e.slice(0, -2);
          } else e = arguments[g];f.push(e);
        }w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + new Error().stack), d = !1;
      }return c.apply(this, arguments);
    }, c);
  }function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c), we[b] || (w(c), we[b] = !0);
  }function z(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a);
  }function A(a) {
    var b, c;for (c in a) {
      b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
    }this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }function B(a, b) {
    var c,
        e = k({}, a);for (c in b) {
      j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
    }for (c in a) {
      j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    }return e;
  }function C(a) {
    null != a && this.set(a);
  }function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;return z(d) ? d.call(b, c) : d;
  }function E(a) {
    var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1);
    }), this._longDateFormat[a]);
  }function F() {
    return this._invalidDate;
  }function G(a) {
    return this._ordinal.replace("%d", a);
  }function H(a, b, c, d) {
    var e = this._relativeTime[c];return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];return z(c) ? c(b) : c.replace(/%s/i, b);
  }function J(a, b) {
    var c = a.toLowerCase();Ge[c] = Ge[c + "s"] = Ge[b] = a;
  }function K(a) {
    return "string" == typeof a ? Ge[a] || Ge[a.toLowerCase()] : void 0;
  }function L(a) {
    var b,
        c,
        d = {};for (c in a) {
      j(a, c) && (b = K(c), b && (d[b] = a[c]));
    }return d;
  }function M(a, b) {
    He[a] = b;
  }function N(a) {
    var b = [];for (var c in a) {
      b.push({ unit: c, priority: He[c] });
    }return b.sort(function (a, b) {
      return a.priority - b.priority;
    }), b;
  }function O(b, c) {
    return function (d) {
      return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b);
    };
  }function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }function R(a) {
    return a = K(a), z(this[a]) ? this[a]() : this;
  }function S(a, b) {
    if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
      a = L(a);for (var c = N(a), d = 0; d < c.length; d++) {
        this[c[d].unit](a[c[d].unit]);
      }
    } else if (a = K(a), z(this[a])) return this[a](b);return this;
  }function T(a, b, c) {
    var d = "" + Math.abs(a),
        e = b - d.length,
        f = a >= 0;return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d;
  }function U(a, b, c, d) {
    var e = d;"string" == typeof d && (e = function e() {
      return this[d]();
    }), a && (Le[a] = e), b && (Le[b[0]] = function () {
      return T(e.apply(this, arguments), b[1], b[2]);
    }), c && (Le[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a);
    });
  }function V(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
  }function W(a) {
    var b,
        c,
        d = a.match(Ie);for (b = 0, c = d.length; b < c; b++) {
      Le[d[b]] ? d[b] = Le[d[b]] : d[b] = V(d[b]);
    }return function (b) {
      var e,
          f = "";for (e = 0; e < c; e++) {
        f += z(d[e]) ? d[e].call(b, a) : d[e];
      }return f;
    };
  }function X(a, b) {
    return a.isValid() ? (b = Y(b, a.localeData()), Ke[b] = Ke[b] || W(b), Ke[b](a)) : a.localeData().invalidDate();
  }function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }var d = 5;for (Je.lastIndex = 0; d >= 0 && Je.test(a);) {
      a = a.replace(Je, c), Je.lastIndex = 0, d -= 1;
    }return a;
  }function Z(a, b, c) {
    bf[a] = z(b) ? b : function (a, d) {
      return a && c ? c : b;
    };
  }function $(a, b) {
    return j(bf, a) ? bf[a](b._strict, b._locale) : new RegExp(_(a));
  }function _(a) {
    return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e;
    }));
  }function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }function ba(a, b) {
    var c,
        d = b;for ("string" == typeof a && (a = [a]), g(b) && (d = function d(a, c) {
      c[b] = u(a);
    }), c = 0; c < a.length; c++) {
      cf[a[c]] = d;
    }
  }function ca(a, b) {
    ba(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e);
    });
  }function da(a, b, c) {
    null != b && j(cf, a) && cf[a](b, c._a, c, a);
  }function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }function fa(a, b) {
    return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || of).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone;
  }function ga(a, b) {
    return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[of.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }function ha(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) {
      f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
    }return c ? "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = nf.call(this._longMonthsParse, g), e !== -1 ? e : (e = nf.call(this._shortMonthsParse, g), e !== -1 ? e : null));
  }function ia(a, b, c) {
    var d, e, f;if (this._monthsParseExact) return ha.call(this, a, b, c);for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
      if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;if (!c && this._monthsParse[d].test(a)) return d;
    }
  }function ja(a, b) {
    var c;if (!a.isValid()) return a;if ("string" == typeof b) if (/^\d+$/.test(b)) b = u(b);else if (b = a.localeData().monthsParse(b), !g(b)) return a;return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a;
  }function ka(b) {
    return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month");
  }function la() {
    return ea(this.year(), this.month());
  }function ma(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = rf), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }function na(a) {
    return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = sf), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
  }function oa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d = [],
        e = [],
        f = [];for (b = 0; b < 12; b++) {
      c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
    }for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) {
      d[b] = aa(d[b]), e[b] = aa(e[b]);
    }for (b = 0; b < 24; b++) {
      f[b] = aa(f[b]);
    }this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i");
  }function pa(a) {
    return qa(a) ? 366 : 365;
  }function qa(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
  }function ra() {
    return qa(this.year());
  }function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h;
  }function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b;
  }function ua(a, b, c) {
    var d = 7 + b - c,
        e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;return -e + d - 1;
  }function va(a, b, c, d, e) {
    var f,
        g,
        h = (7 + c - d) % 7,
        i = ua(a, d, e),
        j = 1 + 7 * (b - 1) + h + i;return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), { year: f, dayOfYear: g };
  }function wa(a, b, c) {
    var d,
        e,
        f = ua(a.year(), b, c),
        g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), { week: d, year: e };
  }function xa(a, b, c) {
    var d = ua(a, b, c),
        e = ua(a + 1, b, c);return (pa(a) - d + e) / 7;
  }function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }function za() {
    return this._week.dow;
  }function Aa() {
    return this._week.doy;
  }function Ba(a) {
    var b = this.localeData().week(this);return null == a ? b : this.add(7 * (a - b), "d");
  }function Ca(a) {
    var b = wa(this, 1, 4).week;return null == a ? b : this.add(7 * (a - b), "d");
  }function Da(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10);
  }function Ea(a, b) {
    return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
  }function Fa(a, b) {
    return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone;
  }function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }function Ia(a, b, c) {
    var d,
        e,
        f,
        g = a.toLocaleLowerCase();if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) {
      f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
    }return c ? "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = nf.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = nf.call(this._weekdaysParse, g), e !== -1 ? e : (e = nf.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)));
  }function Ja(a, b, c) {
    var d, e, f;if (this._weekdaysParseExact) return Ia.call(this, a, b, c);for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
      if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b;
  }function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;var b = (this.day() + 7 - this.localeData()._week.dow) % 7;return null == a ? b : this.add(a - b, "d");
  }function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;if (null != a) {
      var b = Ea(a, this.localeData());return this.day(this.day() % 7 ? b : b - 7);
    }return this.day() || 7;
  }function Na(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = yf), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }function Oa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = zf), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }function Pa(a) {
    return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Af), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }var b,
        c,
        d,
        e,
        f,
        g = [],
        h = [],
        i = [],
        j = [];for (b = 0; b < 7; b++) {
      c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
    }for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) {
      h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
    }this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i");
  }function Ra() {
    return this.hours() % 12 || 12;
  }function Sa() {
    return this.hours() || 24;
  }function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }function Ua(a, b) {
    return b._meridiemParse;
  }function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }function Wa(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM";
  }function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = Za(e.slice(0, b).join("-"))) return d;if (c && c.length >= b && v(e, c, !0) >= b - 1) break;b--;
      }f++;
    }return null;
  }function Za(a) {
    var b = null;if (!Ff[a] && "undefined" != typeof module && module && module.exports) try {
      b = Bf._abbr, $a(b);
    } catch (a) {}return Ff[a];
  }function $a(a, b) {
    var c;return a && (c = f(b) ? bb(a) : _a(a, b), c && (Bf = c)), Bf._abbr;
  }function _a(a, b) {
    if (null !== b) {
      var c = Ef;if (b.abbr = a, null != Ff[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Ff[a]._config;else if (null != b.parentLocale) {
        if (null == Ff[b.parentLocale]) return Gf[b.parentLocale] || (Gf[b.parentLocale] = []), Gf[b.parentLocale].push({ name: a, config: b }), null;c = Ff[b.parentLocale]._config;
      }return Ff[a] = new C(B(c, b)), Gf[a] && Gf[a].forEach(function (a) {
        _a(a.name, a.config);
      }), $a(a), Ff[a];
    }return delete Ff[a], null;
  }function ab(a, b) {
    if (null != b) {
      var c,
          d = Ef;null != Ff[a] && (d = Ff[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Ff[a], Ff[a] = c, $a(a);
    } else null != Ff[a] && (null != Ff[a].parentLocale ? Ff[a] = Ff[a].parentLocale : null != Ff[a] && delete Ff[a]);return Ff[a];
  }function bb(a) {
    var b;if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Bf;if (!c(a)) {
      if (b = Za(a)) return b;a = [a];
    }return Ya(a);
  }function cb() {
    return ze(Ff);
  }function db(a) {
    var b,
        c = a._a;return c && n(a).overflow === -2 && (b = c[ef] < 0 || c[ef] > 11 ? ef : c[ff] < 1 || c[ff] > ea(c[df], c[ef]) ? ff : c[gf] < 0 || c[gf] > 24 || 24 === c[gf] && (0 !== c[hf] || 0 !== c[jf] || 0 !== c[kf]) ? gf : c[hf] < 0 || c[hf] > 59 ? hf : c[jf] < 0 || c[jf] > 59 ? jf : c[kf] < 0 || c[kf] > 999 ? kf : -1, n(a)._overflowDayOfYear && (b < df || b > ff) && (b = ff), n(a)._overflowWeeks && b === -1 && (b = lf), n(a)._overflowWeekday && b === -1 && (b = mf), n(a).overflow = b), a;
  }function eb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h = a._i,
        i = Hf.exec(h) || If.exec(h);if (i) {
      for (n(a).iso = !0, b = 0, c = Kf.length; b < c; b++) {
        if (Kf[b][1].exec(i[1])) {
          e = Kf[b][0], d = Kf[b][2] !== !1;break;
        }
      }if (null == e) return void (a._isValid = !1);if (i[3]) {
        for (b = 0, c = Lf.length; b < c; b++) {
          if (Lf[b][1].exec(i[3])) {
            f = (i[2] || " ") + Lf[b][0];break;
          }
        }if (null == f) return void (a._isValid = !1);
      }if (!d && null != f) return void (a._isValid = !1);if (i[4]) {
        if (!Jf.exec(i[4])) return void (a._isValid = !1);g = "Z";
      }a._f = e + (f || "") + (g || ""), lb(a);
    } else a._isValid = !1;
  }function fb(a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j = { " GMT": " +0000", " EDT": " -0400", " EST": " -0500", " CDT": " -0500", " CST": " -0600", " MDT": " -0600", " MST": " -0700", " PDT": " -0700", " PST": " -0800" },
        k = "YXWVUTSRQPONZABCDEFGHIKLM";if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Nf.exec(b)) {
      if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
        var l = new Date(c[2]),
            m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void (a._isValid = !1);
      }switch (c[5].length) {case 2:
          0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");break;case 4:
          h = j[c[5]];break;default:
          h = j[" GMT"];}c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0;
    } else a._isValid = !1;
  }function gb(b) {
    var c = Mf.exec(b._i);return null !== c ? void (b._d = new Date(+c[1])) : (eb(b), void (b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))));
  }function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }function ib(b) {
    var c = new Date(a.now());return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()];
  }function jb(a) {
    var b,
        c,
        d,
        e,
        f = [];if (!a._d) {
      for (d = ib(a), a._w && null == a._a[ff] && null == a._a[ef] && kb(a), null != a._dayOfYear && (e = hb(a._a[df], d[df]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[ef] = c.getUTCMonth(), a._a[ff] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) {
        a._a[b] = f[b] = d[b];
      }for (; b < 7; b++) {
        a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      }24 === a._a[gf] && 0 === a._a[hf] && 0 === a._a[jf] && 0 === a._a[kf] && (a._nextDay = !0, a._a[gf] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[gf] = 24);
    }
  }function kb(a) {
    var b, c, d, e, f, g, h, i;if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[df], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);else {
      f = a._locale._week.dow, g = a._locale._week.doy;var j = wa(tb(), f, g);c = hb(b.gg, a._a[df], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f;
    }d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[df] = h.year, a._dayOfYear = h.dayOfYear);
  }function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);if (b._f === a.RFC_2822) return void fb(b);b._a = [], n(b).empty = !0;var c,
        d,
        e,
        f,
        g,
        h = "" + b._i,
        i = h.length,
        j = 0;for (e = Y(b._f, b._locale).match(Ie) || [], c = 0; c < e.length; c++) {
      f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Le[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
    }n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[gf] <= 12 && n(b).bigHour === !0 && b._a[gf] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[gf] = mb(b._locale, b._a[gf], b._meridiem), jb(b), db(b);
  }function mb(a, b, c) {
    var d;return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b;
  }function nb(a) {
    var b, c, d, e, f;if (0 === a._f.length) return n(a).invalidFormat = !0, void (a._d = new Date(NaN));for (e = 0; e < a._f.length; e++) {
      f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
    }k(a, c || b);
  }function ob(a) {
    if (!a._d) {
      var b = L(a._i);a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10);
      }), jb(a);
    }
  }function pb(a) {
    var b = new r(db(qb(a)));return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b;
  }function qb(a) {
    var b = a._i,
        d = a._f;return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({ nullInput: !0 }) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a));
  }function rb(b) {
    var e = b._i;f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
      return parseInt(a, 10);
    }), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b);
  }function sb(a, b, f, g, h) {
    var i = {};return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i);
  }function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }function ub(a, b) {
    var d, e;if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();for (d = b[0], e = 1; e < b.length; ++e) {
      b[e].isValid() && !b[e][a](d) || (d = b[e]);
    }return d;
  }function vb() {
    var a = [].slice.call(arguments, 0);return ub("isBefore", a);
  }function wb() {
    var a = [].slice.call(arguments, 0);return ub("isAfter", a);
  }function xb(a) {
    for (var b in a) {
      if (Rf.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
    }for (var c = !1, d = 0; d < Rf.length; ++d) {
      if (a[Rf[d]]) {
        if (c) return !1;parseFloat(a[Rf[d]]) !== u(a[Rf[d]]) && (c = !0);
      }
    }return !0;
  }function yb() {
    return this._isValid;
  }function zb() {
    return Sb(NaN);
  }function Ab(a) {
    var b = L(a),
        c = b.year || 0,
        d = b.quarter || 0,
        e = b.month || 0,
        f = b.week || 0,
        g = b.day || 0,
        h = b.hour || 0,
        i = b.minute || 0,
        j = b.second || 0,
        k = b.millisecond || 0;this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble();
  }function Bb(a) {
    return a instanceof Ab;
  }function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
          c = "+";return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2);
    });
  }function Eb(a, b) {
    var c = (b || "").match(a);if (null === c) return null;var d = c[c.length - 1] || [],
        e = (d + "").match(Sf) || ["-", 0, 0],
        f = +(60 * e[1]) + u(e[2]);return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }function Fb(b, c) {
    var d, e;return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local();
  }function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }function Hb(b, c, d) {
    var e,
        f = this._offset || 0;if (!this.isValid()) return null != b ? this : NaN;if (null != b) {
      if ("string" == typeof b) {
        if (b = Eb($e, b), null === b) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this;
    }return this._isUTC ? f : Gb(this);
  }function Ib(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset();
  }function Jb(a) {
    return this.utcOffset(0, a);
  }function Kb(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this;
  }function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var a = Eb(Ze, this._i);null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }return this;
  }function Mb(a) {
    return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0);
  }function Nb() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;var a = {};if (q(a, this), a = qb(a), a._a) {
      var b = a._isUTC ? l(a._a) : tb(a._a);this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;return this._isDSTShifted;
  }function Pb() {
    return !!this.isValid() && !this._isUTC;
  }function Qb() {
    return !!this.isValid() && this._isUTC;
  }function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }function Sb(a, b) {
    var c,
        d,
        e,
        f = a,
        h = null;return Bb(a) ? f = { ms: a._milliseconds, d: a._days, M: a._months } : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Tf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: 0, d: u(h[ff]) * c, h: u(h[gf]) * c, m: u(h[hf]) * c, s: u(h[jf]) * c, ms: u(Cb(1e3 * h[kf])) * c }) : (h = Uf.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = { y: Tb(h[2], c), M: Tb(h[3], c), w: Tb(h[4], c), d: Tb(h[5], c), h: Tb(h[6], c), m: Tb(h[7], c), s: Tb(h[8], c) }) : null == f ? f = {} : "object" == (typeof f === "undefined" ? "undefined" : _typeof(f)) && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d;
  }function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));return (isNaN(c) ? 0 : c) * b;
  }function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c;
  }function Vb(a, b) {
    var c;return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : { milliseconds: 0, months: 0 };
  }function Wb(a, b) {
    return function (c, d) {
      var e, f;return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this;
    };
  }function Xb(b, c, d, e) {
    var f = c._milliseconds,
        g = Cb(c._days),
        h = Cb(c._months);b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h));
  }function Yb(a, b) {
    var c = a.diff(b, "days", !0);return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse";
  }function Zb(b, c) {
    var d = b || tb(),
        e = Fb(d, this).startOf("day"),
        f = a.calendarFormat(this, e) || "sameElse",
        g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }function $b() {
    return new r(this);
  }function _b(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf());
  }function ac(a, b) {
    var c = s(a) ? a : tb(a);return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf());
  }function bc(a, b, c, d) {
    return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c));
  }function cc(a, b) {
    var c,
        d = s(a) ? a : tb(a);return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()));
  }function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }function fc(a, b, c) {
    var d, e, f, g;return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN;
  }function gc(a, b) {
    var c,
        d,
        e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
        f = a.clone().add(e, "months");return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0;
  }function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }function ic() {
    if (!this.isValid()) return null;var a = this.clone().utc();return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";var a = "moment",
        b = "";this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");var c = "[" + a + '("]',
        d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        e = "-MM-DD[T]HH:mm:ss.SSS",
        f = b + '[")]';return this.format(c + d + e + f);
  }function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);var c = X(this, b);return this.localeData().postformat(c);
  }function lc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function mc(a) {
    return this.from(tb(), a);
  }function nc(a, b) {
    return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate();
  }function oc(a) {
    return this.to(tb(), a);
  }function pc(a) {
    var b;return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this);
  }function qc() {
    return this._locale;
  }function rc(a) {
    switch (a = K(a)) {case "year":
        this.month(0);case "quarter":case "month":
        this.date(1);case "week":case "isoWeek":case "day":case "date":
        this.hours(0);case "hour":
        this.minutes(0);case "minute":
        this.seconds(0);case "second":
        this.milliseconds(0);}return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this;
  }function sc(a) {
    return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"));
  }function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }function vc() {
    return new Date(this.valueOf());
  }function wc() {
    var a = this;return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()];
  }function xc() {
    var a = this;return { years: a.year(), months: a.month(), date: a.date(), hours: a.hours(), minutes: a.minutes(), seconds: a.seconds(), milliseconds: a.milliseconds() };
  }function yc() {
    return this.isValid() ? this.toISOString() : null;
  }function zc() {
    return o(this);
  }function Ac() {
    return k({}, n(this));
  }function Bc() {
    return n(this).overflow;
  }function Cc() {
    return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict };
  }function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }function Ec(a) {
    return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }function Gc() {
    return xa(this.year(), 1, 4);
  }function Hc() {
    var a = this.localeData()._week;return xa(this.year(), a.dow, a.doy);
  }function Ic(a, b, c, d, e) {
    var f;return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
        g = ta(f.year, 0, f.dayOfYear);return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this;
  }function Kc(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3);
  }function Lc(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;return null == a ? b : this.add(a - b, "d");
  }function Mc(a, b) {
    b[kf] = u(1e3 * ("0." + a));
  }function Nc() {
    return this._isUTC ? "UTC" : "";
  }function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }function Pc(a) {
    return tb(1e3 * a);
  }function Qc() {
    return tb.apply(null, arguments).parseZone();
  }function Rc(a) {
    return a;
  }function Sc(a, b, c, d) {
    var e = bb(),
        f = l().set(d, b);return e[c](f, a);
  }function Tc(a, b, c) {
    if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");var d,
        e = [];for (d = 0; d < 12; d++) {
      e[d] = Sc(a, d, c, "month");
    }return e;
  }function Uc(a, b, c, d) {
    "boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");var e = bb(),
        f = a ? e._week.dow : 0;if (null != c) return Sc(b, (c + f) % 7, d, "day");var h,
        i = [];for (h = 0; h < 7; h++) {
      i[h] = Sc(b, (h + f) % 7, d, "day");
    }return i;
  }function Vc(a, b) {
    return Tc(a, b, "months");
  }function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }function $c() {
    var a = this._data;return this._milliseconds = dg(this._milliseconds), this._days = dg(this._days), this._months = dg(this._months), a.milliseconds = dg(a.milliseconds), a.seconds = dg(a.seconds), a.minutes = dg(a.minutes), a.hours = dg(a.hours), a.months = dg(a.months), a.years = dg(a.years), this;
  }function _c(a, b, c, d) {
    var e = Sb(b, c);return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble();
  }function ad(a, b) {
    return _c(this, a, b, 1);
  }function bd(a, b) {
    return _c(this, a, b, -1);
  }function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }function dd() {
    var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this;
  }function ed(a) {
    return 4800 * a / 146097;
  }function fd(a) {
    return 146097 * a / 4800;
  }function gd(a) {
    if (!this.isValid()) return NaN;var b,
        c,
        d = this._milliseconds;if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;switch (b = this._days + Math.round(fd(this._months)), a) {case "week":
        return b / 7 + d / 6048e5;case "day":
        return b + d / 864e5;case "hour":
        return 24 * b + d / 36e5;case "minute":
        return 1440 * b + d / 6e4;case "second":
        return 86400 * b + d / 1e3;case "millisecond":
        return Math.floor(864e5 * b) + d;default:
        throw new Error("Unknown unit " + a);}
  }function hd() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN;
  }function id(a) {
    return function () {
      return this.as(a);
    };
  }function jd(a) {
    return a = K(a), this.isValid() ? this[a + "s"]() : NaN;
  }function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }function ld() {
    return t(this.days() / 7);
  }function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }function nd(a, b, c) {
    var d = Sb(a).abs(),
        e = tg(d.as("s")),
        f = tg(d.as("m")),
        g = tg(d.as("h")),
        h = tg(d.as("d")),
        i = tg(d.as("M")),
        j = tg(d.as("y")),
        k = e <= ug.ss && ["s", e] || e < ug.s && ["ss", e] || f <= 1 && ["m"] || f < ug.m && ["mm", f] || g <= 1 && ["h"] || g < ug.h && ["hh", g] || h <= 1 && ["d"] || h < ug.d && ["dd", h] || i <= 1 && ["M"] || i < ug.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k);
  }function od(a) {
    return void 0 === a ? tg : "function" == typeof a && (tg = a, !0);
  }function pd(a, b) {
    return void 0 !== ug[a] && (void 0 === b ? ug[a] : (ug[a] = b, "s" === a && (ug.ss = b - 1), !0));
  }function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();var b = this.localeData(),
        c = nd(this, !a, b);return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();var a,
        b,
        c,
        d = vg(this._milliseconds) / 1e3,
        e = vg(this._days),
        f = vg(this._months);a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;var g = c,
        h = f,
        i = e,
        j = b,
        k = a,
        l = d,
        m = this.asSeconds();return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D";
  }
  //! moment.js locale configuration
  //! locale : Belarusian [be]
  //! author : Dmitry Demidov : https://github.com/demidov91
  //! author: Praleska: http://praleska.pro/
  //! Author : Menelion Elensúle : https://github.com/Oire
  function sd(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function td(a, b, c) {
    var d = { mm: b ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: b ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" };return "m" === c ? b ? "хвіліна" : "хвіліну" : "h" === c ? b ? "гадзіна" : "гадзіну" : a + " " + sd(d[c], +a);
  }
  //! moment.js locale configuration
  //! locale : Breton [br]
  //! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou
  function ud(a, b, c) {
    var d = { mm: "munutenn", MM: "miz", dd: "devezh" };return a + " " + xd(d[c], a);
  }function vd(a) {
    switch (wd(a)) {case 1:case 3:case 4:case 5:case 9:
        return a + " bloaz";default:
        return a + " vloaz";}
  }function wd(a) {
    return a > 9 ? wd(a % 10) : a;
  }function xd(a, b) {
    return 2 === b ? yd(a) : a;
  }function yd(a) {
    var b = { m: "v", b: "v", d: "z" };return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1);
  }
  //! moment.js locale configuration
  //! locale : Bosnian [bs]
  //! author : Nedim Cholich : https://github.com/frontyard
  //! based on (hr) translation by Bojan Marković
  function zd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Ad(a) {
    return a > 1 && a < 5 && 1 !== ~~(a / 10);
  }function Bd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekund" : "pár sekundami";case "m":
        return b ? "minuta" : d ? "minutu" : "minutou";case "mm":
        return b || d ? e + (Ad(a) ? "minuty" : "minut") : e + "minutami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (Ad(a) ? "hodiny" : "hodin") : e + "hodinami";break;case "d":
        return b || d ? "den" : "dnem";case "dd":
        return b || d ? e + (Ad(a) ? "dny" : "dní") : e + "dny";break;case "M":
        return b || d ? "měsíc" : "měsícem";case "MM":
        return b || d ? e + (Ad(a) ? "měsíce" : "měsíců") : e + "měsíci";break;case "y":
        return b || d ? "rok" : "rokem";case "yy":
        return b || d ? e + (Ad(a) ? "roky" : "let") : e + "lety";}
  }
  //! moment.js locale configuration
  //! locale : German (Austria) [de-at]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Martin Groller : https://github.com/MadMG
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Cd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German (Switzerland) [de-ch]
  //! author : sschueller : https://github.com/sschueller
  function Dd(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : German [de]
  //! author : lluchs : https://github.com/lluchs
  //! author: Menelion Elensúle: https://github.com/Oire
  //! author : Mikolaj Dadela : https://github.com/mik01aj
  function Ed(a, b, c, d) {
    var e = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Estonian [et]
  //! author : Henry Kehlmann : https://github.com/madhenry
  //! improvements : Illimar Tambek : https://github.com/ragulka
  function Fd(a, b, c, d) {
    var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] };return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1];
  }function Gd(a, b, c, d) {
    var e = "";switch (c) {case "s":
        return d ? "muutaman sekunnin" : "muutama sekunti";case "m":
        return d ? "minuutin" : "minuutti";case "mm":
        e = d ? "minuutin" : "minuuttia";break;case "h":
        return d ? "tunnin" : "tunti";case "hh":
        e = d ? "tunnin" : "tuntia";break;case "d":
        return d ? "päivän" : "päivä";case "dd":
        e = d ? "päivän" : "päivää";break;case "M":
        return d ? "kuukauden" : "kuukausi";case "MM":
        e = d ? "kuukauden" : "kuukautta";break;case "y":
        return d ? "vuoden" : "vuosi";case "yy":
        e = d ? "vuoden" : "vuotta";}return e = Hd(a, d) + " " + e;
  }function Hd(a, b) {
    return a < 10 ? b ? $g[a] : Zg[a] : a;
  }
  //! moment.js locale configuration
  //! locale : Konkani Latin script [gom-latn]
  //! author : The Discoverer : https://github.com/WikiDiscoverer
  function Id(a, b, c, d) {
    var e = { s: ["thodde secondanim", "thodde second"], m: ["eka mintan", "ek minute"], mm: [a + " mintanim", a + " mintam"], h: ["eka horan", "ek hor"], hh: [a + " horanim", a + " hor"], d: ["eka disan", "ek dis"], dd: [a + " disanim", a + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [a + " mhoineanim", a + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [a + " vorsanim", a + " vorsam"] };return b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Croatian [hr]
  //! author : Bojan Marković : https://github.com/bmarkovic
  function Jd(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "jedna minuta" : "jedne minute";case "mm":
        return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";case "h":
        return b ? "jedan sat" : "jednog sata";case "hh":
        return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";case "dd":
        return d += 1 === a ? "dan" : "dana";case "MM":
        return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";case "yy":
        return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina";}
  }function Kd(a, b, c, d) {
    var e = a;switch (c) {case "s":
        return d || b ? "néhány másodperc" : "néhány másodperce";case "m":
        return "egy" + (d || b ? " perc" : " perce");case "mm":
        return e + (d || b ? " perc" : " perce");case "h":
        return "egy" + (d || b ? " óra" : " órája");case "hh":
        return e + (d || b ? " óra" : " órája");case "d":
        return "egy" + (d || b ? " nap" : " napja");case "dd":
        return e + (d || b ? " nap" : " napja");case "M":
        return "egy" + (d || b ? " hónap" : " hónapja");case "MM":
        return e + (d || b ? " hónap" : " hónapja");case "y":
        return "egy" + (d || b ? " év" : " éve");case "yy":
        return e + (d || b ? " év" : " éve");}return "";
  }function Ld(a) {
    return (a ? "" : "[múlt] ") + "[" + ih[this.day()] + "] LT[-kor]";
  }
  //! moment.js locale configuration
  //! locale : Icelandic [is]
  //! author : Hinrik Örn Sigurðsson : https://github.com/hinrik
  function Md(a) {
    return a % 100 === 11 || a % 10 !== 1;
  }function Nd(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";case "m":
        return b ? "mínúta" : "mínútu";case "mm":
        return Md(a) ? e + (b || d ? "mínútur" : "mínútum") : b ? e + "mínúta" : e + "mínútu";case "hh":
        return Md(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";case "d":
        return b ? "dagur" : d ? "dag" : "degi";case "dd":
        return Md(a) ? b ? e + "dagar" : e + (d ? "daga" : "dögum") : b ? e + "dagur" : e + (d ? "dag" : "degi");case "M":
        return b ? "mánuður" : d ? "mánuð" : "mánuði";case "MM":
        return Md(a) ? b ? e + "mánuðir" : e + (d ? "mánuði" : "mánuðum") : b ? e + "mánuður" : e + (d ? "mánuð" : "mánuði");case "y":
        return b || d ? "ár" : "ári";case "yy":
        return Md(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári");}
  }
  //! moment.js locale configuration
  //! locale : Luxembourgish [lb]
  //! author : mweimerskirch : https://github.com/mweimerskirch
  //! author : David Raison : https://github.com/kwisatz
  function Od(a, b, c, d) {
    var e = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] };return b ? e[c][0] : e[c][1];
  }function Pd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "a " + a : "an " + a;
  }function Qd(a) {
    var b = a.substr(0, a.indexOf(" "));return Rd(b) ? "viru " + a : "virun " + a;
  }function Rd(a) {
    if (a = parseInt(a, 10), isNaN(a)) return !1;if (a < 0) return !0;if (a < 10) return 4 <= a && a <= 7;if (a < 100) {
      var b = a % 10,
          c = a / 10;return Rd(0 === b ? c : b);
    }if (a < 1e4) {
      for (; a >= 10;) {
        a /= 10;
      }return Rd(a);
    }return a /= 1e3, Rd(a);
  }function Sd(a, b, c, d) {
    return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes";
  }function Td(a, b, c, d) {
    return b ? Vd(c)[0] : d ? Vd(c)[1] : Vd(c)[2];
  }function Ud(a) {
    return a % 10 === 0 || a > 10 && a < 20;
  }function Vd(a) {
    return nh[a].split("_");
  }function Wd(a, b, c, d) {
    var e = a + " ";return 1 === a ? e + Td(a, b, c[0], d) : b ? e + (Ud(a) ? Vd(c)[1] : Vd(c)[0]) : d ? e + Vd(c)[1] : e + (Ud(a) ? Vd(c)[1] : Vd(c)[2]);
  }function Xd(a, b, c) {
    return c ? b % 10 === 1 && b % 100 !== 11 ? a[2] : a[3] : b % 10 === 1 && b % 100 !== 11 ? a[0] : a[1];
  }function Yd(a, b, c) {
    return a + " " + Xd(oh[c], a, b);
  }function Zd(a, b, c) {
    return Xd(oh[c], a, b);
  }function $d(a, b) {
    return b ? "dažas sekundes" : "dažām sekundēm";
  }function _d(a, b, c, d) {
    var e = "";if (b) switch (c) {case "s":
        e = "काही सेकंद";break;case "m":
        e = "एक मिनिट";break;case "mm":
        e = "%d मिनिटे";break;case "h":
        e = "एक तास";break;case "hh":
        e = "%d तास";break;case "d":
        e = "एक दिवस";break;case "dd":
        e = "%d दिवस";break;case "M":
        e = "एक महिना";break;case "MM":
        e = "%d महिने";break;case "y":
        e = "एक वर्ष";break;case "yy":
        e = "%d वर्षे";} else switch (c) {case "s":
        e = "काही सेकंदां";break;case "m":
        e = "एका मिनिटा";break;case "mm":
        e = "%d मिनिटां";break;case "h":
        e = "एका तासा";break;case "hh":
        e = "%d तासां";break;case "d":
        e = "एका दिवसा";break;case "dd":
        e = "%d दिवसां";break;case "M":
        e = "एका महिन्या";break;case "MM":
        e = "%d महिन्यां";break;case "y":
        e = "एका वर्षा";break;case "yy":
        e = "%d वर्षां";}return e.replace(/%d/i, a);
  }function ae(a) {
    return a % 10 < 5 && a % 10 > 1 && ~~(a / 10) % 10 !== 1;
  }function be(a, b, c) {
    var d = a + " ";switch (c) {case "m":
        return b ? "minuta" : "minutę";case "mm":
        return d + (ae(a) ? "minuty" : "minut");case "h":
        return b ? "godzina" : "godzinę";case "hh":
        return d + (ae(a) ? "godziny" : "godzin");case "MM":
        return d + (ae(a) ? "miesiące" : "miesięcy");case "yy":
        return d + (ae(a) ? "lata" : "lat");}
  }
  //! moment.js locale configuration
  //! locale : Romanian [ro]
  //! author : Vlad Gurdiga : https://github.com/gurdiga
  //! author : Valentin Agachi : https://github.com/avaly
  function ce(a, b, c) {
    var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" },
        e = " ";return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c];
  }
  //! moment.js locale configuration
  //! locale : Russian [ru]
  //! author : Viktorminator : https://github.com/Viktorminator
  //! Author : Menelion Elensúle : https://github.com/Oire
  //! author : Коренберг Марк : https://github.com/socketpair
  function de(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function ee(a, b, c) {
    var d = { mm: b ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" };return "m" === c ? b ? "минута" : "минуту" : a + " " + de(d[c], +a);
  }function fe(a) {
    return a > 1 && a < 5;
  }function ge(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "pár sekúnd" : "pár sekundami";case "m":
        return b ? "minúta" : d ? "minútu" : "minútou";case "mm":
        return b || d ? e + (fe(a) ? "minúty" : "minút") : e + "minútami";break;case "h":
        return b ? "hodina" : d ? "hodinu" : "hodinou";case "hh":
        return b || d ? e + (fe(a) ? "hodiny" : "hodín") : e + "hodinami";break;case "d":
        return b || d ? "deň" : "dňom";case "dd":
        return b || d ? e + (fe(a) ? "dni" : "dní") : e + "dňami";break;case "M":
        return b || d ? "mesiac" : "mesiacom";case "MM":
        return b || d ? e + (fe(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";break;case "y":
        return b || d ? "rok" : "rokom";case "yy":
        return b || d ? e + (fe(a) ? "roky" : "rokov") : e + "rokmi";}
  }
  //! moment.js locale configuration
  //! locale : Slovenian [sl]
  //! author : Robert Sedovšek : https://github.com/sedovsek
  function he(a, b, c, d) {
    var e = a + " ";switch (c) {case "s":
        return b || d ? "nekaj sekund" : "nekaj sekundami";case "m":
        return b ? "ena minuta" : "eno minuto";case "mm":
        return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : a < 5 ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";case "h":
        return b ? "ena ura" : "eno uro";case "hh":
        return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : a < 5 ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";case "d":
        return b || d ? "en dan" : "enim dnem";case "dd":
        return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";case "M":
        return b || d ? "en mesec" : "enim mesecem";case "MM":
        return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : a < 5 ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";case "y":
        return b || d ? "eno leto" : "enim letom";case "yy":
        return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : a < 5 ? b || d ? "leta" : "leti" : b || d ? "let" : "leti";}
  }function ie(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "leS" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "waQ" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "nem" : b + " pIq";
  }function je(a) {
    var b = a;return b = a.indexOf("jaj") !== -1 ? b.slice(0, -3) + "Hu’" : a.indexOf("jar") !== -1 ? b.slice(0, -3) + "wen" : a.indexOf("DIS") !== -1 ? b.slice(0, -3) + "ben" : b + " ret";
  }function ke(a, b, c, d) {
    var e = le(a);switch (c) {case "mm":
        return e + " tup";case "hh":
        return e + " rep";case "dd":
        return e + " jaj";case "MM":
        return e + " jar";case "yy":
        return e + " DIS";}
  }function le(a) {
    var b = Math.floor(a % 1e3 / 100),
        c = Math.floor(a % 100 / 10),
        d = a % 10,
        e = "";return b > 0 && (e += Rh[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Rh[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Rh[d]), "" === e ? "pagh" : e;
  }function me(a, b, c, d) {
    var e = { s: ["viensas secunds", "'iensas secunds"], m: ["'n míut", "'iens míut"], mm: [a + " míuts", "" + a + " míuts"], h: ["'n þora", "'iensa þora"], hh: [a + " þoras", "" + a + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [a + " ziuas", "" + a + " ziuas"], M: ["'n mes", "'iens mes"], MM: [a + " mesen", "" + a + " mesen"], y: ["'n ar", "'iens ar"], yy: [a + " ars", "" + a + " ars"] };return d ? e[c][0] : b ? e[c][0] : e[c][1];
  }
  //! moment.js locale configuration
  //! locale : Ukrainian [uk]
  //! author : zemlanin : https://github.com/zemlanin
  //! Author : Menelion Elensúle : https://github.com/Oire
  function ne(a, b) {
    var c = a.split("_");return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && b % 10 <= 4 && (b % 100 < 10 || b % 100 >= 20) ? c[1] : c[2];
  }function oe(a, b, c) {
    var d = { mm: b ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: b ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" };return "m" === c ? b ? "хвилина" : "хвилину" : "h" === c ? b ? "година" : "годину" : a + " " + ne(d[c], +a);
  }function pe(a, b) {
    var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") };if (!a) return c.nominative;var d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";return c[d][a.day()];
  }function qe(a) {
    return function () {
      return a + "о" + (11 === this.hours() ? "б" : "") + "] LT";
    };
  }var re, se;se = Array.prototype.some ? Array.prototype.some : function (a) {
    for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++) {
      if (d in b && a.call(this, b[d], d, b)) return !0;
    }return !1;
  };var te = se,
      ue = a.momentProperties = [],
      ve = !1,
      we = {};a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;var xe;xe = Object.keys ? Object.keys : function (a) {
    var b,
        c = [];for (b in a) {
      j(a, b) && c.push(b);
    }return c;
  };var ye,
      ze = xe,
      Ae = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" },
      Be = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" },
      Ce = "Invalid date",
      De = "%d",
      Ee = /\d{1,2}/,
      Fe = { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" },
      Ge = {},
      He = {},
      Ie = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Je = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Ke = {},
      Le = {},
      Me = /\d/,
      Ne = /\d\d/,
      Oe = /\d{3}/,
      Pe = /\d{4}/,
      Qe = /[+-]?\d{6}/,
      Re = /\d\d?/,
      Se = /\d\d\d\d?/,
      Te = /\d\d\d\d\d\d?/,
      Ue = /\d{1,3}/,
      Ve = /\d{1,4}/,
      We = /[+-]?\d{1,6}/,
      Xe = /\d+/,
      Ye = /[+-]?\d+/,
      Ze = /Z|[+-]\d\d:?\d\d/gi,
      $e = /Z|[+-]\d\d(?::?\d\d)?/gi,
      _e = /[+-]?\d+(\.\d{1,3})?/,
      af = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      bf = {},
      cf = {},
      df = 0,
      ef = 1,
      ff = 2,
      gf = 3,
      hf = 4,
      jf = 5,
      kf = 6,
      lf = 7,
      mf = 8;ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
    var b;for (b = 0; b < this.length; ++b) {
      if (this[b] === a) return b;
    }return -1;
  };var nf = ye;U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), U("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  }), U("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  }), J("month", "M"), M("month", 8), Z("M", Re), Z("MM", Re, Ne), Z("MMM", function (a, b) {
    return b.monthsShortRegex(a);
  }), Z("MMMM", function (a, b) {
    return b.monthsRegex(a);
  }), ba(["M", "MM"], function (a, b) {
    b[ef] = u(a) - 1;
  }), ba(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);null != e ? b[ef] = e : n(c).invalidMonth = a;
  });var of = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      pf = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      qf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      rf = af,
      sf = af;U("Y", 0, 0, function () {
    var a = this.year();return a <= 9999 ? "" + a : "+" + a;
  }), U(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Ye), Z("YY", Re, Ne), Z("YYYY", Ve, Pe), Z("YYYYY", We, Qe), Z("YYYYYY", We, Qe), ba(["YYYYY", "YYYYYY"], df), ba("YYYY", function (b, c) {
    c[df] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
  }), ba("YY", function (b, c) {
    c[df] = a.parseTwoDigitYear(b);
  }), ba("Y", function (a, b) {
    b[df] = parseInt(a, 10);
  }), a.parseTwoDigitYear = function (a) {
    return u(a) + (u(a) > 68 ? 1900 : 2e3);
  };var tf = O("FullYear", !0);U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Re), Z("ww", Re, Ne), Z("W", Re), Z("WW", Re, Ne), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = u(a);
  });var uf = { dow: 0, doy: 6 };U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  }), U("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  }), U("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Re), Z("e", Re), Z("E", Re), Z("dd", function (a, b) {
    return b.weekdaysMinRegex(a);
  }), Z("ddd", function (a, b) {
    return b.weekdaysShortRegex(a);
  }), Z("dddd", function (a, b) {
    return b.weekdaysRegex(a);
  }), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);null != e ? b.d = e : n(c).invalidWeekday = a;
  }), ca(["d", "e", "E"], function (a, b, c, d) {
    b[d] = u(a);
  });var vf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      wf = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      xf = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      yf = af,
      zf = af,
      Af = af;U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2);
  }), U("hmmss", 0, 0, function () {
    return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), U("Hmm", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2);
  }), U("Hmmss", 0, 0, function () {
    return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
  }), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Re), Z("h", Re), Z("k", Re), Z("HH", Re, Ne), Z("hh", Re, Ne), Z("kk", Re, Ne), Z("hmm", Se), Z("hmmss", Te), Z("Hmm", Se), Z("Hmmss", Te), ba(["H", "HH"], gf), ba(["k", "kk"], function (a, b, c) {
    var d = u(a);b[gf] = 24 === d ? 0 : d;
  }), ba(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a;
  }), ba(["h", "hh"], function (a, b, c) {
    b[gf] = u(a), n(c).bigHour = !0;
  }), ba("hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d)), n(c).bigHour = !0;
  }), ba("hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e)), n(c).bigHour = !0;
  }), ba("Hmm", function (a, b, c) {
    var d = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d));
  }), ba("Hmmss", function (a, b, c) {
    var d = a.length - 4,
        e = a.length - 2;b[gf] = u(a.substr(0, d)), b[hf] = u(a.substr(d, 2)), b[jf] = u(a.substr(e));
  });var Bf,
      Cf = /[ap]\.?m?\.?/i,
      Df = O("Hours", !0),
      Ef = { calendar: Ae, longDateFormat: Be, invalidDate: Ce, ordinal: De, dayOfMonthOrdinalParse: Ee, relativeTime: Fe, months: pf, monthsShort: qf, week: uf, weekdays: vf, weekdaysMin: xf, weekdaysShort: wf, meridiemParse: Cf },
      Ff = {},
      Gf = {},
      Hf = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      If = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      Jf = /Z|[+-]\d\d(?::?\d\d)?/,
      Kf = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      Lf = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      Mf = /^\/?Date\((\-?\d+)/i,
      Nf = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
  }), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};var Of = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a < this ? this : a : p();
  }),
      Pf = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var a = tb.apply(null, arguments);return this.isValid() && a.isValid() ? a > this ? this : a : p();
  }),
      Qf = function Qf() {
    return Date.now ? Date.now() : +new Date();
  },
      Rf = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];Db("Z", ":"), Db("ZZ", ""), Z("Z", $e), Z("ZZ", $e), ba(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Eb($e, a);
  });var Sf = /([\+\-]|\d\d)/gi;a.updateOffset = function () {};var Tf = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Uf = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn = Ab.prototype, Sb.invalid = zb;var Vf = Wb(1, "add"),
      Wf = Wb(-1, "subtract");a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";var Xf = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a);
  });U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), U(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Ye), Z("g", Ye), Z("GG", Re, Ne), Z("gg", Re, Ne), Z("GGGG", Ve, Pe), Z("gggg", Ve, Pe), Z("GGGGG", We, Qe), Z("ggggg", We, Qe), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = u(a);
  }), ca(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b);
  }), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Me), ba("Q", function (a, b) {
    b[ef] = 3 * (u(a) - 1);
  }), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Re), Z("DD", Re, Ne), Z("Do", function (a, b) {
    return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient;
  }), ba(["D", "DD"], ff), ba("Do", function (a, b) {
    b[ff] = u(a.match(Re)[0], 10);
  });var Yf = O("Date", !0);U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Ue), Z("DDDD", Oe), ba(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = u(a);
  }), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Re), Z("mm", Re, Ne), ba(["m", "mm"], hf);var Zf = O("Minutes", !1);U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Re), Z("ss", Re, Ne), ba(["s", "ss"], jf);var $f = O("Seconds", !1);U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), U(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), U(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), U(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), U(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), U(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), U(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), J("millisecond", "ms"), M("millisecond", 16), Z("S", Ue, Me), Z("SS", Ue, Ne), Z("SSS", Ue, Oe);var _f;for (_f = "SSSS"; _f.length <= 9; _f += "S") {
    Z(_f, Xe);
  }for (_f = "S"; _f.length <= 9; _f += "S") {
    ba(_f, Mc);
  }var ag = O("Milliseconds", !1);U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");var bg = r.prototype;bg.add = Vf, bg.calendar = Zb, bg.clone = $b, bg.diff = fc, bg.endOf = sc, bg.format = kc, bg.from = lc, bg.fromNow = mc, bg.to = nc, bg.toNow = oc, bg.get = R, bg.invalidAt = Bc, bg.isAfter = _b, bg.isBefore = ac, bg.isBetween = bc, bg.isSame = cc, bg.isSameOrAfter = dc, bg.isSameOrBefore = ec, bg.isValid = zc, bg.lang = Xf, bg.locale = pc, bg.localeData = qc, bg.max = Pf, bg.min = Of, bg.parsingFlags = Ac, bg.set = S, bg.startOf = rc, bg.subtract = Wf, bg.toArray = wc, bg.toObject = xc, bg.toDate = vc, bg.toISOString = ic, bg.inspect = jc, bg.toJSON = yc, bg.toString = hc, bg.unix = uc, bg.valueOf = tc, bg.creationData = Cc, bg.year = tf, bg.isLeapYear = ra, bg.weekYear = Ec, bg.isoWeekYear = Fc, bg.quarter = bg.quarters = Kc, bg.month = ka, bg.daysInMonth = la, bg.week = bg.weeks = Ba, bg.isoWeek = bg.isoWeeks = Ca, bg.weeksInYear = Hc, bg.isoWeeksInYear = Gc, bg.date = Yf, bg.day = bg.days = Ka, bg.weekday = La, bg.isoWeekday = Ma, bg.dayOfYear = Lc, bg.hour = bg.hours = Df, bg.minute = bg.minutes = Zf, bg.second = bg.seconds = $f, bg.millisecond = bg.milliseconds = ag, bg.utcOffset = Hb, bg.utc = Jb, bg.local = Kb, bg.parseZone = Lb, bg.hasAlignedHourOffset = Mb, bg.isDST = Nb, bg.isLocal = Pb, bg.isUtcOffset = Qb, bg.isUtc = Rb, bg.isUTC = Rb, bg.zoneAbbr = Nc, bg.zoneName = Oc, bg.dates = x("dates accessor is deprecated. Use date instead.", Yf), bg.months = x("months accessor is deprecated. Use month instead", ka), bg.years = x("years accessor is deprecated. Use year instead", tf), bg.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bg.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);var cg = C.prototype;cg.calendar = D, cg.longDateFormat = E, cg.invalidDate = F, cg.ordinal = G, cg.preparse = Rc, cg.postformat = Rc, cg.relativeTime = H, cg.pastFuture = I, cg.set = A, cg.months = fa, cg.monthsShort = ga, cg.monthsParse = ia, cg.monthsRegex = na, cg.monthsShortRegex = ma, cg.week = ya, cg.firstDayOfYear = Aa, cg.firstDayOfWeek = za, cg.weekdays = Fa, cg.weekdaysMin = Ha, cg.weekdaysShort = Ga, cg.weekdaysParse = Ja, cg.weekdaysRegex = Na, cg.weekdaysShortRegex = Oa, cg.weekdaysMinRegex = Pa, cg.isPM = Va, cg.meridiem = Wa, $a("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);var dg = Math.abs,
      eg = id("ms"),
      fg = id("s"),
      gg = id("m"),
      hg = id("h"),
      ig = id("d"),
      jg = id("w"),
      kg = id("M"),
      lg = id("y"),
      mg = kd("milliseconds"),
      ng = kd("seconds"),
      og = kd("minutes"),
      pg = kd("hours"),
      qg = kd("days"),
      rg = kd("months"),
      sg = kd("years"),
      tg = Math.round,
      ug = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      vg = Math.abs,
      wg = Ab.prototype;wg.isValid = yb, wg.abs = $c, wg.add = ad, wg.subtract = bd, wg.as = gd, wg.asMilliseconds = eg, wg.asSeconds = fg, wg.asMinutes = gg, wg.asHours = hg, wg.asDays = ig, wg.asWeeks = jg, wg.asMonths = kg, wg.asYears = lg, wg.valueOf = hd, wg._bubble = dd, wg.get = jd, wg.milliseconds = mg, wg.seconds = ng, wg.minutes = og, wg.hours = pg, wg.days = qg, wg.weeks = ld, wg.months = rg, wg.years = sg, wg.humanize = qd, wg.toISOString = rd, wg.toString = rd, wg.toJSON = rd, wg.locale = pc, wg.localeData = qc, wg.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), wg.lang = Xf, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Ye), Z("X", _e), ba("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10));
  }), ba("x", function (a, b, c) {
    c._d = new Date(u(a));
  }),
  //! moment.js
  //! version : 2.18.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  a.version = "2.18.1", b(tb), a.fn = bg, a.min = vb, a.max = wb, a.now = Qf, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bg,
  //! moment.js locale configuration
  //! locale : Afrikaans [af]
  //! author : Werner Mollentze : https://github.com/wernerm
  a.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function isPM(a) {
      return (/^nm$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "vm" : "VM" : c ? "nm" : "NM";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Algeria) [ar-dz]
  //! author : Noureddine LOUAHEDJ : https://github.com/noureddineme
  a.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Kuwait) [ar-kw]
  //! author : Nusret Parlak: https://github.com/nusretparlak
  a.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Lybia) [ar-ly]
  //! author : Ali Hmer: https://github.com/kikoanis
  var xg = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
      yg = function yg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      zg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ag = function Ag(a) {
    return function (b, c, d, e) {
      var f = yg(b),
          g = zg[a][yg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Bg = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];a.defineLocale("ar-ly", { months: Bg, monthsShort: Bg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ag("s"), m: Ag("m"), mm: Ag("m"), h: Ag("h"), hh: Ag("h"), d: Ag("d"), dd: Ag("d"), M: Ag("M"), MM: Ag("M"), y: Ag("y"), yy: Ag("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return xg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Arabic (Morocco) [ar-ma]
  //! author : ElFadili Yassine : https://github.com/ElFadiliY
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Arabic (Saudi Arabia) [ar-sa]
  //! author : Suhail Alkowaileet : https://github.com/xsoh
  var Cg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Dg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };a.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function preparse(a) {
      return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Dg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Cg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale  :  Arabic (Tunisia) [ar-tn]
  //! author : Nader Toukabri : https://github.com/naderio
  a.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Arabic [ar]
  //! author : Abdel Said: https://github.com/abdelsaid
  //! author : Ahmed Elkhatib
  //! author : forabi https://github.com/forabi
  var Eg = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
      Fg = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
      Gg = function Gg(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && a % 100 <= 10 ? 3 : a % 100 >= 11 ? 4 : 5;
  },
      Hg = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
      Ig = function Ig(a) {
    return function (b, c, d, e) {
      var f = Gg(b),
          g = Hg[a][Gg(b)];return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b);
    };
  },
      Jg = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];a.defineLocale("ar", { months: Jg, monthsShort: Jg, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function isPM(a) {
      return "م" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ص" : "م";
    }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: Ig("s"), m: Ig("m"), mm: Ig("m"), h: Ig("h"), hh: Ig("h"), d: Ig("d"), dd: Ig("d"), M: Ig("M"), MM: Ig("M"), y: Ig("y"), yy: Ig("y") }, preparse: function preparse(a) {
      return a.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) {
        return Fg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eg[a];
      }).replace(/,/g, "،");
    }, week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Azerbaijani [az]
  //! author : topchiyev : https://github.com/topchiyev
  var Kg = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };a.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function isPM(a) {
      return (/^(gündüz|axşam)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "gecə" : a < 12 ? "səhər" : a < 17 ? "gündüz" : "axşam";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "-ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Kg[b] || Kg[c] || Kg[d]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function nextWeek() {
        return "[У] dddd [ў] LT";
      }, lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return "[У мінулую] dddd [ў] LT";case 1:case 2:case 4:
            return "[У мінулы] dddd [ў] LT";}
      }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: td, mm: td, h: td, hh: td, d: "дзень", dd: td, M: "месяц", MM: td, y: "год", yy: td }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function isPM(a) {
      return (/^(дня|вечара)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночы" : a < 12 ? "раніцы" : a < 17 ? "дня" : "вечара";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і";case "D":
          return a + "-га";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Bulgarian [bg]
  //! author : Krasen Borisov : https://github.com/kraz
  a.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:
            return "[В изминалия] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Bengali [bn]
  //! author : Kaushik Gandhi : https://github.com/kaushikgandhi
  var Lg = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
      Mg = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };a.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function preparse(a) {
      return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) {
        return Mg[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Lg[a];
      });
    }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "রাত" === b && a >= 4 || "দুপুর" === b && a < 5 || "বিকাল" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "রাত" : a < 10 ? "সকাল" : a < 17 ? "দুপুর" : a < 20 ? "বিকাল" : "রাত";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Tibetan [bo]
  //! author : Thupten N. Chakrishar : https://github.com/vajradog
  var Ng = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
      Og = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };a.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function preparse(a) {
      return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) {
        return Og[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ng[a];
      });
    }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "མཚན་མོ" === b && a >= 4 || "ཉིན་གུང" === b && a < 5 || "དགོང་དག" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "མཚན་མོ" : a < 10 ? "ཞོགས་ཀས" : a < 17 ? "ཉིན་གུང" : a < 20 ? "དགོང་དག" : "མཚན་མོ";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: ud, h: "un eur", hh: "%d eur", d: "un devezh", dd: ud, M: "ur miz", MM: ud, y: "ur bloaz", yy: vd }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "añ" : "vet";return a + b;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: zd, mm: zd, h: zd, hh: zd, d: "dan", dd: zd, M: "mjesec", MM: zd, y: "godinu", yy: zd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Catalan [ca]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "[el] D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "[el] D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function sameDay() {
        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextDay: function nextDay() {
        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastDay: function lastDay() {
        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function ordinal(a, b) {
      var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";return "w" !== b && "W" !== b || (c = "a"), a + c;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Czech [cs]
  //! author : petrbela : https://github.com/petrbela
  var Pg = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
      Qg = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");a.defineLocale("cs", { months: Pg, monthsShort: Qg, monthsParse: function (a, b) {
      var c,
          d = [];for (c = 0; c < 12; c++) {
        d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
      }return d;
    }(Pg, Qg), shortMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Qg), longMonthsParse: function (a) {
      var b,
          c = [];for (b = 0; b < 12; b++) {
        c[b] = new RegExp("^" + a[b] + "$", "i");
      }return c;
    }(Pg), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v neděli v] LT";case 1:case 2:
            return "[v] dddd [v] LT";case 3:
            return "[ve středu v] LT";case 4:
            return "[ve čtvrtek v] LT";case 5:
            return "[v pátek v] LT";case 6:
            return "[v sobotu v] LT";}
      }, lastDay: "[včera v] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulou neděli v] LT";case 1:case 2:
            return "[minulé] dddd [v] LT";case 3:
            return "[minulou středu v] LT";case 4:case 5:
            return "[minulý] dddd [v] LT";case 6:
            return "[minulou sobotu v] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: Bd, m: Bd, mm: Bd, h: Bd, hh: Bd, d: Bd, dd: Bd, M: Bd, MM: Bd, y: Bd, yy: Bd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Chuvash [cv]
  //! author : Anatoly Mironov : https://github.com/mirontoli
  a.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function future(a) {
        var b = /сехет$/i.exec(a) ? "рен" : /ҫул$/i.exec(a) ? "тан" : "ран";return a + b;
      }, past: "%s каялла", s: "пӗр-ик ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Welsh [cy]
  //! author : Robert Allen : https://github.com/robgallen
  //! author : https://github.com/ryangreaves
  a.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function ordinal(a) {
      var b = a,
          c = "",
          d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Danish [da]
  //! author : Ulrik Nielsen : https://github.com/mrbase
  a.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Cd, mm: "%d Minuten", h: Cd, hh: "%d Stunden", d: Cd, dd: Cd, M: Cd, MM: Cd, y: Cd, yy: Cd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH.mm", LLLL: "dddd, D. MMMM YYYY HH.mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Dd, mm: "%d Minuten", h: Dd, hh: "%d Stunden", d: Dd, dd: Dd, M: Dd, MM: Dd, y: Dd, yy: Dd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: Ed, mm: "%d Minuten", h: Ed, hh: "%d Stunden", d: Ed, dd: Ed, M: Ed, MM: Ed, y: Ed, yy: Ed }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Maldivian [dv]
  //! author : Jawish Hameed : https://github.com/jawish
  var Rg = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
      Sg = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];a.defineLocale("dv", { months: Rg, monthsShort: Rg, weekdays: Sg, weekdaysShort: Sg, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function isPM(a) {
      return "މފ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "މކ" : "މފ";
    }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 7, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Greek [el]
  //! author : Aggelos Karalias : https://github.com/mehiel
  a.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function months(a, b) {
      return a ? /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] : this._monthsNominativeEl;
    }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ";
    }, isPM: function isPM(a) {
      return "μ" === (a + "").toLowerCase()[0];
    }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 6:
            return "[το προηγούμενο] dddd [{}] LT";default:
            return "[την προηγούμενη] dddd [{}] LT";}
      }, sameElse: "L" }, calendar: function calendar(a, b) {
      var c = this._calendarEl[a],
          d = b && b.hours();return z(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις");
    }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Australia) [en-au]
  //! author : Jared Morse : https://github.com/jarcoal
  a.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Canada) [en-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    } }),
  //! moment.js locale configuration
  //! locale : English (United Kingdom) [en-gb]
  //! author : Chris Gedrim : https://github.com/chrisgedrim
  a.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (Ireland) [en-ie]
  //! author : Chris Cartlidge : https://github.com/chriscartlidge
  a.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : English (New Zealand) [en-nz]
  //! author : Luke McGregor : https://github.com/lukemcgregor
  a.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Esperanto [eo]
  //! author : Colin Dean : https://github.com/colindean
  //! author : Mia Nordentoft Imperatori : https://github.com/miestasmia
  //! comment : miestasmia corrected the translation by colindean
  a.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function isPM(a) {
      return "p" === a.charAt(0).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M.";
    }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Spanish (Dominican Republic) [es-do]
  var Tg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Ug = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Ug[a.month()] : Tg[a.month()] : Tg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Spanish [es]
  //! author : Julio Napurí : https://github.com/julionc
  var Vg = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
      Wg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");a.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Wg[a.month()] : Vg[a.month()] : Vg;
    }, monthsParseExact: !0, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastDay: function lastDay() {
        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: Fd, m: Fd, mm: Fd, h: Fd, hh: Fd, d: Fd, dd: "%d päeva", M: Fd, MM: Fd, y: Fd, yy: Fd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Basque [eu]
  //! author : Eneko Illarramendi : https://github.com/eillarra
  a.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Persian [fa]
  //! author : Ebrahim Byagowi : https://github.com/ebraminio
  var Xg = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
      Yg = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };a.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function isPM(a) {
      return (/بعد از ظهر/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "قبل از ظهر" : "بعد از ظهر";
    }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/[۰-۹]/g, function (a) {
        return Yg[a];
      }).replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Xg[a];
      }).replace(/,/g, "،");
    }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } });
  //! moment.js locale configuration
  //! locale : Finnish [fi]
  //! author : Tarmo Aidantausta : https://github.com/bleadof
  var Zg = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
      $g = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Zg[7], Zg[8], Zg[9]];a.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: Gd, m: Gd, mm: Gd, h: Gd, hh: Gd, d: Gd, dd: Gd, M: Gd, MM: Gd, y: Gd, yy: Gd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Faroese [fo]
  //! author : Ragnar Johannesen : https://github.com/ragnar123
  a.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French (Canada) [fr-ca]
  //! author : Jonathan Abourbih : https://github.com/jonbca
  a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    } }),
  //! moment.js locale configuration
  //! locale : French (Switzerland) [fr-ch]
  //! author : Gaspard Bucher : https://github.com/gaspard
  a.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function ordinal(a, b) {
      switch (b) {default:case "M":case "Q":case "D":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : French [fr]
  //! author : John Fischer : https://github.com/jfroffice
  a.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + (1 === a ? "er" : "");default:case "M":case "Q":case "DDD":case "d":
          return a + (1 === a ? "er" : "e");case "w":case "W":
          return a + (1 === a ? "re" : "e");}
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Frisian [fy]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  var _g = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
      ah = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");a.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? ah[a.month()] : _g[a.month()] : _g;
    }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Scottish Gaelic [gd]
  //! author : Jon Ashdown : https://github.com/jonashdown
  var bh = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
      ch = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
      dh = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
      eh = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
      fh = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"];a.defineLocale("gd", { months: bh, monthsShort: ch, monthsParseExact: !0, weekdays: dh, weekdaysShort: eh, weekdaysMin: fh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function ordinal(a) {
      var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";return a + b;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Galician [gl]
  //! author : Juan G. Hurtado : https://github.com/juanghurtado
  a.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function sameDay() {
        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextDay: function nextDay() {
        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
      }, nextWeek: function nextWeek() {
        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, lastDay: function lastDay() {
        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
      }, lastWeek: function lastWeek() {
        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT";
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return 0 === a.indexOf("un") ? "n" + a : "en " + a;
      }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: Id, m: Id, mm: Id, h: Id, hh: Id, d: Id, dd: Id, M: Id, MM: Id, y: Id, yy: Id }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function ordinal(a, b) {
      switch (b) {case "D":
          return a + "er";default:case "M":case "Q":case "DDD":case "d":case "w":case "W":
          return a;}
    }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "rati" === b ? a < 4 ? a : a + 12 : "sokalli" === b ? a : "donparam" === b ? a > 12 ? a : a + 12 : "sanje" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "rati" : a < 12 ? "sokalli" : a < 16 ? "donparam" : a < 20 ? "sanje" : "rati";
    } }),
  //! moment.js locale configuration
  //! locale : Hebrew [he]
  //! author : Tomer Cohen : https://github.com/tomer
  //! author : Moshe Simantov : https://github.com/DevelopmentIL
  //! author : Tal Ater : https://github.com/TalAter
  a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function hh(a) {
        return 2 === a ? "שעתיים" : a + " שעות";
      }, d: "יום", dd: function dd(a) {
        return 2 === a ? "יומיים" : a + " ימים";
      }, M: "חודש", MM: function MM(a) {
        return 2 === a ? "חודשיים" : a + " חודשים";
      }, y: "שנה", yy: function yy(a) {
        return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים";
      } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function isPM(a) {
      return (/^(אחה"צ|אחרי הצהריים|בערב)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 5 ? "לפנות בוקר" : a < 10 ? "בבוקר" : a < 12 ? c ? 'לפנה"צ' : "לפני הצהריים" : a < 18 ? c ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
    } });
  //! moment.js locale configuration
  //! locale : Hindi [hi]
  //! author : Mayank Singhal : https://github.com/mayanksinghal
  var gh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      hh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return hh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return gh[a];
      });
    }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात" === b ? a < 4 ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात" : a < 10 ? "सुबह" : a < 17 ? "दोपहर" : a < 20 ? "शाम" : "रात";
    }, week: { dow: 0, doy: 6 } }), a.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[jučer u] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:
            return "[prošlu] dddd [u] LT";case 6:
            return "[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:
            return "[prošli] dddd [u] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: Jd, mm: Jd, h: Jd, hh: Jd, d: "dan", dd: Jd, M: "mjesec", MM: Jd, y: "godinu", yy: Jd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Hungarian [hu]
  //! author : Adam Brunner : https://github.com/adambrunner
  var ih = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");a.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function isPM(a) {
      return "u" === a.charAt(1).toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU";
    }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function nextWeek() {
        return Ld.call(this, !0);
      }, lastDay: "[tegnap] LT[-kor]", lastWeek: function lastWeek() {
        return Ld.call(this, !1);
      }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: Kd, m: Kd, mm: Kd, h: Kd, hh: Kd, d: Kd, dd: Kd, M: Kd, MM: Kd, y: Kd, yy: Kd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Armenian [hy-am]
  //! author : Armendarabyan : https://github.com/armendarabyan
  a.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function nextWeek() {
        return "dddd [օրը ժամը] LT";
      }, lastWeek: function lastWeek() {
        return "[անցած] dddd [օրը ժամը] LT";
      }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function isPM(a) {
      return (/^(ցերեկվա|երեկոյան)$/.test(a)
      );
    }, meridiem: function meridiem(a) {
      return a < 4 ? "գիշերվա" : a < 12 ? "առավոտվա" : a < 17 ? "ցերեկվա" : "երեկոյան";
    }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function ordinal(a, b) {
      switch (b) {case "DDD":case "w":case "W":case "DDDo":
          return 1 === a ? a + "-ին" : a + "-րդ";default:
          return a;}
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Indonesian [id]
  //! author : Mohammad Satrio Utomo : https://github.com/tyok
  //! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan
  a.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }), a.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: Nd, m: Nd, mm: Nd, h: "klukkustund", hh: Nd, d: Nd, dd: Nd, M: Nd, MM: Nd, y: Nd, yy: Nd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Italian [it]
  //! author : Lorenzo : https://github.com/aliem
  //! author: Mattia Larentis: https://github.com/nostalgiaz
  a.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[la scorsa] dddd [alle] LT";default:
            return "[lo scorso] dddd [alle] LT";}
      }, sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a;
      }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Japanese [ja]
  //! author : LI Long : https://github.com/baryon
  a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 HH:mm dddd", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日 HH:mm dddd" }, meridiemParse: /午前|午後/i, isPM: function isPM(a) {
      return "午後" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "午前" : "午後";
    }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";default:
          return a;}
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }),
  //! moment.js locale configuration
  //! locale : Javanese [jv]
  //! author : Rony Lantip : https://github.com/lantip
  //! reference: http://jv.wikipedia.org/wiki/Basa_Jawa
  a.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "enjing" : a < 15 ? "siyang" : a < 19 ? "sonten" : "ndalu";
    }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Georgian [ka]
  //! author : Irakli Janiashvili : https://github.com/irakli-janiashvili
  a.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function future(a) {
        return (/(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
        );
      }, past: function past(a) {
        return (/(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის უკან") : void 0
        );
      }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function ordinal(a) {
      return 0 === a ? a : 1 === a ? a + "-ლი" : a < 20 || a <= 100 && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე";
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Kazakh [kk]
  //! authors : Nurlan Rakhimzhanov : https://github.com/nurlan
  var jh = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };a.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (jh[a] || jh[b] || jh[c]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Cambodian [km]
  //! author : Kruy Vanna : https://github.com/kruyvanna
  a.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Kannada [kn]
  //! author : Rajeev Naik : https://github.com/rajeevnaikte
  var kh = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
      lh = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };a.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function preparse(a) {
      return a.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (a) {
        return lh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return kh[a];
      });
    }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ರಾತ್ರಿ" === b ? a < 4 ? a : a + 12 : "ಬೆಳಿಗ್ಗೆ" === b ? a : "ಮಧ್ಯಾಹ್ನ" === b ? a >= 10 ? a : a + 12 : "ಸಂಜೆ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ರಾತ್ರಿ" : a < 10 ? "ಬೆಳಿಗ್ಗೆ" : a < 17 ? "ಮಧ್ಯಾಹ್ನ" : a < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ";
    }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function ordinal(a) {
      return a + "ನೇ";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Korean [ko]
  //! author : Kyungwook, Park : https://github.com/kyungw00k
  //! author : Jeeeyul Lee <jeeeyul@gmail.com>
  a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function isPM(a) {
      return "오후" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "오전" : "오후";
    } });
  //! moment.js locale configuration
  //! locale : Kyrgyz [ky]
  //! author : Chyngyz Arystan uulu : https://github.com/chyngyz
  var mh = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };a.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кече саат] LT", lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a >= 100 ? 100 : null;return a + (mh[a] || mh[b] || mh[c]);
    }, week: { dow: 1, doy: 7 } }), a.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 2:case 4:
            return "[Leschten] dddd [um] LT";default:
            return "[Leschte] dddd [um] LT";}
      } }, relativeTime: { future: Pd, past: Qd, s: "e puer Sekonnen", m: Od, mm: "%d Minutten", h: Od, hh: "%d Stonnen", d: Od, dd: "%d Deeg", M: Od, MM: "%d Méint", y: Od, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Lao [lo]
  //! author : Ryan Hart : https://github.com/ryanhart2
  a.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function isPM(a) {
      return "ຕອນແລງ" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
    }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function ordinal(a) {
      return "ທີ່" + a;
    } });
  //! moment.js locale configuration
  //! locale : Lithuanian [lt]
  //! author : Mindaugas Mozūras : https://github.com/mmozuras
  var nh = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };a.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: Sd, m: Td, mm: Wd, h: Td, hh: Wd, d: Td, dd: Wd, M: Td, MM: Wd, y: Td, yy: Wd }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function ordinal(a) {
      return a + "-oji";
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Latvian [lv]
  //! author : Kristaps Karlsons : https://github.com/skakri
  //! author : Jānis Elmeris : https://github.com/JanisE
  var oh = { m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };a.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: $d, m: Zd, mm: Yd, h: Zd, hh: Yd, d: Zd, dd: Yd, M: Zd, MM: Yd, y: Zd, yy: Yd }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Montenegrin [me]
  //! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac
  var ph = { words: { m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = ph.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + ph.correctGrammaticalCase(a, d);
    } };a.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedjelju] [u] LT";case 3:
            return "[u] [srijedu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", m: ph.translate, mm: ph.translate, h: ph.translate, hh: ph.translate, d: "dan", dd: ph.translate, M: "mjesec", MM: ph.translate, y: "godinu", yy: ph.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Maori [mi]
  //! author : John Corrigan <robbiecloset@gmail.com> : https://github.com/johnideal
  a.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Macedonian [mk]
  //! author : Borislav Mickov : https://github.com/B0k0
  a.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 6:
            return "[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:
            return "[Изминатиот] dddd [во] LT";}
      }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = a % 100;return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && c < 20 ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти";
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malayalam [ml]
  //! author : Floyd Pink : https://github.com/floydpink
  a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "രാത്രി" === b && a >= 4 || "ഉച്ച കഴിഞ്ഞ്" === b || "വൈകുന്നേരം" === b ? a + 12 : a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "രാത്രി" : a < 12 ? "രാവിലെ" : a < 17 ? "ഉച്ച കഴിഞ്ഞ്" : a < 20 ? "വൈകുന്നേരം" : "രാത്രി";
    } });
  //! moment.js locale configuration
  //! locale : Marathi [mr]
  //! author : Harshad Kale : https://github.com/kalehv
  //! author : Vivek Athalye : https://github.com/vnathalye
  var qh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      rh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: _d, m: _d, mm: _d, h: _d, hh: _d, d: _d, dd: _d, M: _d, MM: _d, y: _d, yy: _d }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return rh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return qh[a];
      });
    }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "रात्री" === b ? a < 4 ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "रात्री" : a < 10 ? "सकाळी" : a < 17 ? "दुपारी" : a < 20 ? "सायंकाळी" : "रात्री";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms-my]
  //! note : DEPRECATED, the correct one is [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Malay [ms]
  //! author : Weldan Jamili : https://github.com/weldan
  a.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "pagi" : a < 15 ? "tengahari" : a < 19 ? "petang" : "malam";
    }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Burmese [my]
  //! author : Squar team, mysquar.com
  //! author : David Rossellat : https://github.com/gholadr
  //! author : Tin Aung Lin : https://github.com/thanyawzinmin
  var sh = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
      th = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };a.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function preparse(a) {
      return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) {
        return th[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return sh[a];
      });
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Norwegian Bokmål [nb]
  //! authors : Espen Hovlandsdal : https://github.com/rexxars
  //!           Sigurd Gartmann : https://github.com/sigurdga
  a.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Nepalese [ne]
  //! author : suvash : https://github.com/suvash
  var uh = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
      vh = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };a.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function preparse(a) {
      return a.replace(/[१२३४५६७८९०]/g, function (a) {
        return vh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return uh[a];
      });
    }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "राति" === b ? a < 4 ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "साँझ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 3 ? "राति" : a < 12 ? "बिहान" : a < 16 ? "दिउँसो" : a < 20 ? "साँझ" : "राति";
    }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Dutch (Belgium) [nl-be]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var wh = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      xh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      yh = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      zh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? xh[a.month()] : wh[a.month()] : wh;
    }, monthsRegex: zh, monthsShortRegex: zh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: yh, longMonthsParse: yh, shortMonthsParse: yh, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Dutch [nl]
  //! author : Joris Röling : https://github.com/jorisroling
  //! author : Jacob Middag : https://github.com/middagj
  var Ah = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
      Bh = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      Ch = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
      Dh = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;a.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function monthsShort(a, b) {
      return a ? /-MMM-/.test(b) ? Bh[a.month()] : Ah[a.month()] : Ah;
    }, monthsRegex: Dh, monthsShortRegex: Dh, monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: Ch, longMonthsParse: Ch, shortMonthsParse: Ch, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function ordinal(a) {
      return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Nynorsk [nn]
  //! author : https://github.com/mechuwind
  a.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Punjabi (India) [pa-in]
  //! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit
  var Eh = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
      Fh = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };a.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function preparse(a) {
      return a.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (a) {
        return Fh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Eh[a];
      });
    }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ਰਾਤ" === b ? a < 4 ? a : a + 12 : "ਸਵੇਰ" === b ? a : "ਦੁਪਹਿਰ" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾਮ" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ਰਾਤ" : a < 10 ? "ਸਵੇਰ" : a < 17 ? "ਦੁਪਹਿਰ" : a < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ";
    }, week: { dow: 0, doy: 6 } });
  //! moment.js locale configuration
  //! locale : Polish [pl]
  //! author : Rafal Hirsz : https://github.com/evoL
  var Gh = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
      Hh = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");a.defineLocale("pl", { months: function months(a, b) {
      return a ? "" === b ? "(" + Hh[a.month()] + "|" + Gh[a.month()] + ")" : /D MMMM/.test(b) ? Hh[a.month()] : Gh[a.month()] : Gh;
    }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[W zeszłą niedzielę o] LT";case 3:
            return "[W zeszłą środę o] LT";case 6:
            return "[W zeszłą sobotę o] LT";default:
            return "[W zeszły] dddd [o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: be, mm: be, h: be, hh: be, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: be, y: "rok", yy: be }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Portuguese (Brazil) [pt-br]
  //! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
  a.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" }),
  //! moment.js locale configuration
  //! locale : Portuguese [pt]
  //! author : Jefferson : https://github.com/jalex79
  a.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function lastWeek() {
        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
      }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }), a.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: ce, h: "o oră", hh: ce, d: "o zi", dd: ce, M: "o lună", MM: ce, y: "un an", yy: ce }, week: { dow: 1, doy: 7 } });var Ih = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];a.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: Ih, longMonthsParse: Ih, shortMonthsParse: Ih, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function nextWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В следующее] dddd [в] LT";case 1:case 2:case 4:
            return "[В следующий] dddd [в] LT";case 3:case 5:case 6:
            return "[В следующую] dddd [в] LT";}
      }, lastWeek: function lastWeek(a) {
        if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";switch (this.day()) {case 0:
            return "[В прошлое] dddd [в] LT";case 1:case 2:case 4:
            return "[В прошлый] dddd [в] LT";case 3:case 5:case 6:
            return "[В прошлую] dddd [в] LT";}
      }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: ee, mm: ee, h: "час", hh: ee, d: "день", dd: ee, M: "месяц", MM: ee, y: "год", yy: ee }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function isPM(a) {
      return (/^(дня|вечера)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночи" : a < 12 ? "утра" : a < 17 ? "дня" : "вечера";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":
          return a + "-й";case "D":
          return a + "-го";case "w":case "W":
          return a + "-я";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Sindhi [sd]
  //! author : Narain Sagar : https://github.com/narainsagar
  var Jh = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
      Kh = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];a.defineLocale("sd", { months: Jh, monthsShort: Jh, weekdays: Kh, weekdaysShort: Kh, weekdaysMin: Kh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Northern Sami [se]
  //! authors : Bård Rolstad Henriksen : https://github.com/karamell
  a.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Sinhalese [si]
  //! author : Sampath Sitinamaluwa : https://github.com/sampathsris
  a.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function ordinal(a) {
      return a + " වැනි";
    }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function isPM(a) {
      return "ප.ව." === a || "පස් වරු" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "ප.ව." : "පස් වරු" : c ? "පෙ.ව." : "පෙර වරු";
    } });
  //! moment.js locale configuration
  //! locale : Slovak [sk]
  //! author : Martin Minka : https://github.com/k2s
  //! based on work of petrbela : https://github.com/petrbela
  var Lh = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
      Mh = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");a.defineLocale("sk", { months: Lh, monthsShort: Mh, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v nedeľu o] LT";case 1:case 2:
            return "[v] dddd [o] LT";case 3:
            return "[v stredu o] LT";case 4:
            return "[vo štvrtok o] LT";case 5:
            return "[v piatok o] LT";case 6:
            return "[v sobotu o] LT";}
      }, lastDay: "[včera o] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[minulú nedeľu o] LT";case 1:case 2:
            return "[minulý] dddd [o] LT";case 3:
            return "[minulú stredu o] LT";case 4:case 5:
            return "[minulý] dddd [o] LT";case 6:
            return "[minulú sobotu o] LT";}
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: ge, m: ge, mm: ge, h: ge, hh: ge, d: ge, dd: ge, M: ge, MM: ge, y: ge, yy: ge }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }), a.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[v] [nedeljo] [ob] LT";case 3:
            return "[v] [sredo] [ob] LT";case 6:
            return "[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[v] dddd [ob] LT";}
      }, lastDay: "[včeraj ob] LT", lastWeek: function lastWeek() {
        switch (this.day()) {case 0:
            return "[prejšnjo] [nedeljo] [ob] LT";case 3:
            return "[prejšnjo] [sredo] [ob] LT";case 6:
            return "[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
            return "[prejšnji] dddd [ob] LT";}
      }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: he, m: he, mm: he, h: he, hh: he, d: he, dd: he, M: he, MM: he, y: he, yy: he }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Albanian [sq]
  //! author : Flakërim Ismani : https://github.com/flakerimi
  //! author : Menelion Elensúle : https://github.com/Oire
  //! author : Oerd Cukalla : https://github.com/oerd
  a.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function isPM(a) {
      return "M" === a.charAt(0);
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "PD" : "MD";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Serbian Cyrillic [sr-cyrl]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Nh = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Nh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Nh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[у] [недељу] [у] LT";case 3:
            return "[у] [среду] [у] LT";case 6:
            return "[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:
            return "[у] dddd [у] LT";}
      }, lastDay: "[јуче у] LT", lastWeek: function lastWeek() {
        var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: Nh.translate, mm: Nh.translate, h: Nh.translate, hh: Nh.translate, d: "дан", dd: Nh.translate, M: "месец", MM: Nh.translate, y: "годину", yy: Nh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Serbian [sr]
  //! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j
  var Oh = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function correctGrammaticalCase(a, b) {
      return 1 === a ? b[0] : a >= 2 && a <= 4 ? b[1] : b[2];
    }, translate: function translate(a, b, c) {
      var d = Oh.words[c];return 1 === c.length ? b ? d[0] : d[1] : a + " " + Oh.correctGrammaticalCase(a, d);
    } };a.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function nextWeek() {
        switch (this.day()) {case 0:
            return "[u] [nedelju] [u] LT";case 3:
            return "[u] [sredu] [u] LT";case 6:
            return "[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
            return "[u] dddd [u] LT";}
      }, lastDay: "[juče u] LT", lastWeek: function lastWeek() {
        var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];return a[this.day()];
      }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: Oh.translate, mm: Oh.translate, h: Oh.translate, hh: Oh.translate, d: "dan", dd: Oh.translate, M: "mesec", MM: Oh.translate, y: "godinu", yy: Oh.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : siSwati [ss]
  //! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies
  a.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function meridiem(a, b, c) {
      return a < 11 ? "ekuseni" : a < 15 ? "emini" : a < 19 ? "entsambama" : "ebusuku";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "ekuseni" === b ? a : "emini" === b ? a >= 11 ? a : a + 12 : "entsambama" === b || "ebusuku" === b ? 0 === a ? 0 : a + 12 : void 0;
    }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swedish [sv]
  //! author : Jens Alm : https://github.com/ulmus
  a.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Swahili [sw]
  //! author : Fahad Kassim : https://github.com/fadsel
  a.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Tamil [ta]
  //! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404
  var Ph = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
      Qh = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };a.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function ordinal(a) {
      return a + "வது";
    }, preparse: function preparse(a) {
      return a.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (a) {
        return Qh[a];
      });
    }, postformat: function postformat(a) {
      return a.replace(/\d/g, function (a) {
        return Ph[a];
      });
    }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function meridiem(a, b, c) {
      return a < 2 ? " யாமம்" : a < 6 ? " வைகறை" : a < 10 ? " காலை" : a < 14 ? " நண்பகல்" : a < 18 ? " எற்பாடு" : a < 22 ? " மாலை" : " யாமம்";
    }, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "யாமம்" === b ? a < 2 ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12;
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Telugu [te]
  //! author : Krishna Chaitanya Thota : https://github.com/kcthota
  a.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "రాత్రి" === b ? a < 4 ? a : a + 12 : "ఉదయం" === b ? a : "మధ్యాహ్నం" === b ? a >= 10 ? a : a + 12 : "సాయంత్రం" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "రాత్రి" : a < 10 ? "ఉదయం" : a < 17 ? "మధ్యాహ్నం" : a < 20 ? "సాయంత్రం" : "రాత్రి";
    }, week: { dow: 0, doy: 6 } }),
  //! moment.js locale configuration
  //! locale : Tetun Dili (East Timor) [tet]
  //! author : Joshua Brooks : https://github.com/joshbrooks
  //! author : Onorio De J. Afonso : https://github.com/marobo
  a.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", m: "minutu ida", mm: "minutus %d", h: "horas ida", hh: "horas %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Thai [th]
  //! author : Kridsada Thanabulpong : https://github.com/sirn
  a.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function isPM(a) {
      return "หลังเที่ยง" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
    }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }),
  //! moment.js locale configuration
  //! locale : Tagalog (Philippines) [tl-ph]
  //! author : Dan Hagman : https://github.com/hagmandan
  a.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Klingon [tlh]
  //! author : Dominika Kruk : https://github.com/amaranthrose
  var Rh = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");a.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: ie, past: je, s: "puS lup", m: "wa’ tup", mm: ke, h: "wa’ rep", hh: ke, d: "wa’ jaj", dd: ke, M: "wa’ jar", MM: ke, y: "wa’ DIS", yy: ke }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } });
  //! moment.js locale configuration
  //! locale : Turkish [tr]
  //! authors : Erhan Gundogan : https://github.com/erhangundogan,
  //!           Burak Yiğit Kaya: https://github.com/BYK
  var Sh = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };a.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function ordinal(a) {
      if (0 === a) return a + "'ıncı";var b = a % 10,
          c = a % 100 - b,
          d = a >= 100 ? 100 : null;return a + (Sh[b] || Sh[c] || Sh[d]);
    }, week: { dow: 1, doy: 7 } }),
  //! moment.js locale configuration
  //! locale : Talossan [tzl]
  //! author : Robin van der Vliet : https://github.com/robin0van0der0v
  //! author : Iustì Canun
  a.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function isPM(a) {
      return "d'o" === a.toLowerCase();
    }, meridiem: function meridiem(a, b, c) {
      return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A";
    }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: me, m: me, mm: me, h: me, hh: me, d: me, dd: me, M: me, MM: me, y: me, yy: me }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight Latin [tzm-latn]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }),
  //! moment.js locale configuration
  //! locale : Central Atlas Tamazight [tzm]
  //! author : Abdel Said : https://github.com/abdelsaid
  a.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }), a.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: pe, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: qe("[Сьогодні "), nextDay: qe("[Завтра "), lastDay: qe("[Вчора "), nextWeek: qe("[У] dddd ["), lastWeek: function lastWeek() {
        switch (this.day()) {case 0:case 3:case 5:case 6:
            return qe("[Минулої] dddd [").call(this);case 1:case 2:case 4:
            return qe("[Минулого] dddd [").call(this);}
      }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: oe, mm: oe, h: "годину", hh: oe, d: "день", dd: oe, M: "місяць", MM: oe, y: "рік", yy: oe }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function isPM(a) {
      return (/^(дня|вечора)$/.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 4 ? "ночі" : a < 12 ? "ранку" : a < 17 ? "дня" : "вечора";
    }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function ordinal(a, b) {
      switch (b) {case "M":case "d":case "DDD":case "w":case "W":
          return a + "-й";case "D":
          return a + "-го";default:
          return a;}
    }, week: { dow: 1, doy: 7 } });
  //! moment.js locale configuration
  //! locale : Urdu [ur]
  //! author : Sawood Alam : https://github.com/ibnesayeed
  //! author : Zack : https://github.com/ZackVision
  var Th = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
      Uh = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
  //! moment.js locale configuration
  //! locale : Uzbek Latin [uz-latn]
  //! author : Rasulbek Mirzayev : github.com/Rasulbeeek
  //! moment.js locale configuration
  //! locale : Uzbek [uz]
  //! author : Sardor Muminov : https://github.com/muminoff
  //! moment.js locale configuration
  //! locale : Vietnamese [vi]
  //! author : Bang Nguyen : https://github.com/bangnk
  //! moment.js locale configuration
  //! locale : Pseudo [x-pseudo]
  //! author : Andrew Hood : https://github.com/andrewhood125
  //! moment.js locale configuration
  //! locale : Yoruba Nigeria [yo]
  //! author : Atolagbe Abisoye : https://github.com/andela-batolagbe
  //! moment.js locale configuration
  //! locale : Chinese (China) [zh-cn]
  //! author : suupic : https://github.com/suupic
  //! author : Zeno Zeng : https://github.com/zenozeng
  //! moment.js locale configuration
  //! locale : Chinese (Hong Kong) [zh-hk]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  //! author : Konstantin : https://github.com/skfd
  //! moment.js locale configuration
  //! locale : Chinese (Taiwan) [zh-tw]
  //! author : Ben : https://github.com/ben-lin
  //! author : Chris Lam : https://github.com/hehachris
  return a.defineLocale("ur", { months: Th, monthsShort: Th, weekdays: Uh, weekdaysShort: Uh, weekdaysMin: Uh, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function isPM(a) {
      return "شام" === a;
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? "صبح" : "شام";
    }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function preparse(a) {
      return a.replace(/،/g, ",");
    }, postformat: function postformat(a) {
      return a.replace(/,/g, "،");
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }), a.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }), a.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function isPM(a) {
      return (/^ch$/i.test(a)
      );
    }, meridiem: function meridiem(a, b, c) {
      return a < 12 ? c ? "sa" : "SA" : c ? "ch" : "CH";
    }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function ordinal(a) {
      return a;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function ordinal(a) {
      var b = a % 10,
          c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";return a + c;
    }, week: { dow: 1, doy: 4 } }), a.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } }), a.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日Ah点mm分", LLLL: "YYYY年MMMD日ddddAh点mm分", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "周";default:
          return a;}
    }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } }), a.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日 HH:mm", LLLL: "YYYY年MMMD日dddd HH:mm", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日 HH:mm", llll: "YYYY年MMMD日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function meridiemHour(a, b) {
      return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0;
    }, meridiem: function meridiem(a, b, c) {
      var d = 100 * a + b;return d < 600 ? "凌晨" : d < 900 ? "早上" : d < 1130 ? "上午" : d < 1230 ? "中午" : d < 1800 ? "下午" : "晚上";
    }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function ordinal(a, b) {
      switch (b) {case "d":case "D":case "DDD":
          return a + "日";case "M":
          return a + "月";case "w":case "W":
          return a + "週";default:
          return a;}
    }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }), a.locale("en"), a;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ })
/******/ ]);
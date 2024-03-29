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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
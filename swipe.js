!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var e, t, i = e = "undefined" == typeof document ? {
        body: {},
        addEventListener: function e() {},
        removeEventListener: function e() {},
        activeElement: {
            blur: function e() {},
            nodeName: ""
        },
        querySelector: function e() {
            return null
        },
        querySelectorAll: function e() {
            return []
        },
        getElementById: function e() {
            return null
        },
        createEvent: function e() {
            return {
                initEvent: function e() {}
            }
        },
        createElement: function e() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function e() {},
                getElementsByTagName: function e() {
                    return []
                }
            }
        },
        location: {
            hash: ""
        }
    } : document, s = t = "undefined" == typeof window ? {
        document: i,
        navigator: {
            userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function e() {
            return this
        },
        addEventListener: function e() {},
        removeEventListener: function e() {},
        getComputedStyle: function e() {
            return {
                getPropertyValue: function e() {
                    return ""
                }
            }
        },
        Image: function e() {},
        Date: function e() {},
        screen: {},
        setTimeout: function e() {},
        clearTimeout: function e() {}
    } : window, a = function e(t) {
        for (var i = this, s = 0; s < t.length; s += 1)
            i[s] = t[s];
        return i.length = t.length,
        this
    };
    function r(e, t) {
        var r = []
          , n = 0;
        if (e && !t && e instanceof a)
            return e;
        if (e) {
            if ("string" == typeof e) {
                var o, l, d = e.trim();
                if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
                    var p = "div";
                    for (0 === d.indexOf("<li") && (p = "ul"),
                    0 === d.indexOf("<tr") && (p = "tbody"),
                    (0 === d.indexOf("<td") || 0 === d.indexOf("<th")) && (p = "tr"),
                    0 === d.indexOf("<tbody") && (p = "table"),
                    0 === d.indexOf("<option") && (p = "select"),
                    (l = i.createElement(p)).innerHTML = d,
                    n = 0; n < l.childNodes.length; n += 1)
                        r.push(l.childNodes[n])
                } else
                    for (n = 0,
                    o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])]; n < o.length; n += 1)
                        o[n] && r.push(o[n])
            } else if (e.nodeType || e === s || e === i)
                r.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (n = 0; n < e.length; n += 1)
                    r.push(e[n])
        }
        return new a(r)
    }
    function n(e) {
        for (var t = [], i = 0; i < e.length; i += 1)
            -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    r.fn = a.prototype,
    r.Class = a,
    r.Dom7 = a;
    var o = {
        addClass: function e(t) {
            if (void 0 === t)
                return this;
            for (var i = t.split(" "), s = 0; s < i.length; s += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== this[a].classList && this[a].classList.add(i[s]);
            return this
        },
        removeClass: function e(t) {
            for (var i = t.split(" "), s = 0; s < i.length; s += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== this[a].classList && this[a].classList.remove(i[s]);
            return this
        },
        hasClass: function e(t) {
            return !!this[0] && this[0].classList.contains(t)
        },
        toggleClass: function e(t) {
            for (var i = t.split(" "), s = 0; s < i.length; s += 1)
                for (var a = 0; a < this.length; a += 1)
                    void 0 !== this[a].classList && this[a].classList.toggle(i[s]);
            return this
        },
        attr: function e(t, i) {
            var s = arguments
              , a = this;
            if (1 === arguments.length && "string" == typeof t)
                return this[0] ? this[0].getAttribute(t) : void 0;
            for (var r = 0; r < this.length; r += 1)
                if (2 === s.length)
                    a[r].setAttribute(t, i);
                else
                    for (var n in t)
                        a[r][n] = t[n],
                        a[r].setAttribute(n, t[n]);
            return this
        },
        removeAttr: function e(t) {
            for (var i = 0; i < this.length; i += 1)
                this[i].removeAttribute(t);
            return this
        },
        data: function e(t, i) {
            var s;
            if (void 0 === i) {
                if (s = this[0]) {
                    if (s.dom7ElementDataStorage && t in s.dom7ElementDataStorage)
                        return s.dom7ElementDataStorage[t];
                    var a = s.getAttribute("data-" + t);
                    if (a)
                        return a
                }
                return
            }
            for (var r = 0; r < this.length; r += 1)
                (s = this[r]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
                s.dom7ElementDataStorage[t] = i;
            return this
        },
        transform: function e(t) {
            for (var i = 0; i < this.length; i += 1) {
                var s = this[i].style;
                s.webkitTransform = t,
                s.transform = t
            }
            return this
        },
        transition: function e(t) {
            "string" != typeof t && (t += "ms");
            for (var i = 0; i < this.length; i += 1) {
                var s = this[i].style;
                s.webkitTransitionDuration = t,
                s.transitionDuration = t
            }
            return this
        },
        on: function e() {
            for (var t, i, s = [], a = arguments.length; a--; )
                s[a] = arguments[a];
            var n = s[0]
              , o = s[1]
              , l = s[2]
              , d = s[3];
            function p(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (0 > i.indexOf(e) && i.unshift(e),
                    r(t).is(o))
                        l.apply(t, i);
                    else
                        for (var s = r(t).parents(), a = 0; a < s.length; a += 1)
                            r(s[a]).is(o) && l.apply(s[a], i)
                }
            }
            function h(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                0 > t.indexOf(e) && t.unshift(e),
                l.apply(this, t)
            }
            "function" == typeof s[1] && (n = (t = s)[0],
            l = t[1],
            d = t[2],
            o = void 0),
            d || (d = !1);
            for (var c = n.split(" "), u = 0; u < this.length; u += 1) {
                var v = this[u];
                if (o)
                    for (i = 0; i < c.length; i += 1) {
                        var f = c[i];
                        v.dom7LiveListeners || (v.dom7LiveListeners = {}),
                        v.dom7LiveListeners[f] || (v.dom7LiveListeners[f] = []),
                        v.dom7LiveListeners[f].push({
                            listener: l,
                            proxyListener: p
                        }),
                        v.addEventListener(f, p, d)
                    }
                else
                    for (i = 0; i < c.length; i += 1) {
                        var m = c[i];
                        v.dom7Listeners || (v.dom7Listeners = {}),
                        v.dom7Listeners[m] || (v.dom7Listeners[m] = []),
                        v.dom7Listeners[m].push({
                            listener: l,
                            proxyListener: h
                        }),
                        v.addEventListener(m, h, d)
                    }
            }
            return this
        },
        off: function e() {
            for (var t, i = [], s = arguments.length; s--; )
                i[s] = arguments[s];
            var a = i[0]
              , r = i[1]
              , n = i[2]
              , o = i[3];
            "function" == typeof i[1] && (a = (t = i)[0],
            n = t[1],
            o = t[2],
            r = void 0),
            o || (o = !1);
            for (var l = a.split(" "), d = 0; d < l.length; d += 1)
                for (var p = l[d], h = 0; h < this.length; h += 1) {
                    var c = this[h]
                      , u = void 0;
                    if (!r && c.dom7Listeners ? u = c.dom7Listeners[p] : r && c.dom7LiveListeners && (u = c.dom7LiveListeners[p]),
                    u && u.length)
                        for (var v = u.length - 1; v >= 0; v -= 1) {
                            var f = u[v];
                            n && f.listener === n ? (c.removeEventListener(p, f.proxyListener, o),
                            u.splice(v, 1)) : n || (c.removeEventListener(p, f.proxyListener, o),
                            u.splice(v, 1))
                        }
                }
            return this
        },
        trigger: function e() {
            for (var t = [], a = arguments.length; a--; )
                t[a] = arguments[a];
            for (var r = t[0].split(" "), n = t[1], o = 0; o < r.length; o += 1)
                for (var l = r[o], d = 0; d < this.length; d += 1) {
                    var p = this[d]
                      , h = void 0;
                    try {
                        h = new s.CustomEvent(l,{
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (c) {
                        (h = i.createEvent("Event")).initEvent(l, !0, !0),
                        h.detail = n
                    }
                    p.dom7EventData = t.filter(function(e, t) {
                        return t > 0
                    }),
                    p.dispatchEvent(h),
                    p.dom7EventData = [],
                    delete p.dom7EventData
                }
            return this
        },
        transitionEnd: function e(t) {
            var i, s = ["webkitTransitionEnd", "transitionend"], a = this;
            function r(e) {
                if (e.target === this)
                    for (t.call(this, e),
                    i = 0; i < s.length; i += 1)
                        a.off(s[i], r)
            }
            if (t)
                for (i = 0; i < s.length; i += 1)
                    a.on(s[i], r);
            return this
        },
        outerWidth: function e(t) {
            if (this.length > 0) {
                if (t) {
                    var i = this.styles();
                    return this[0].offsetWidth + parseFloat(i.getPropertyValue("margin-right")) + parseFloat(i.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function e(t) {
            if (this.length > 0) {
                if (t) {
                    var i = this.styles();
                    return this[0].offsetHeight + parseFloat(i.getPropertyValue("margin-top")) + parseFloat(i.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function e() {
            if (this.length > 0) {
                var t = this[0]
                  , a = t.getBoundingClientRect()
                  , r = i.body
                  , n = t.clientTop || r.clientTop || 0
                  , o = t.clientLeft || r.clientLeft || 0
                  , l = t === s ? s.scrollY : t.scrollTop
                  , d = t === s ? s.scrollX : t.scrollLeft;
                return {
                    top: a.top + l - n,
                    left: a.left + d - o
                }
            }
            return null
        },
        css: function e(t, i) {
            var a, r = this;
            if (1 === arguments.length) {
                if ("string" == typeof t) {
                    if (this[0])
                        return s.getComputedStyle(this[0], null).getPropertyValue(t)
                } else {
                    for (a = 0; a < this.length; a += 1)
                        for (var n in t)
                            r[a].style[n] = t[n];
                    return this
                }
            }
            if (2 === arguments.length && "string" == typeof t)
                for (a = 0; a < this.length; a += 1)
                    r[a].style[t] = i;
            return this
        },
        each: function e(t) {
            if (!t)
                return this;
            for (var i = 0; i < this.length && !1 !== t.call(this[i], i, this[i]); i += 1)
                ;
            return this
        },
        html: function e(t) {
            var i = this;
            if (void 0 === t)
                return this[0] ? this[0].innerHTML : void 0;
            for (var s = 0; s < this.length; s += 1)
                i[s].innerHTML = t;
            return this
        },
        text: function e(t) {
            var i = this;
            if (void 0 === t)
                return this[0] ? this[0].textContent.trim() : null;
            for (var s = 0; s < this.length; s += 1)
                i[s].textContent = t;
            return this
        },
        is: function e(t) {
            var n, o, l = this[0];
            if (!l || void 0 === t)
                return !1;
            if ("string" == typeof t) {
                if (l.matches)
                    return l.matches(t);
                if (l.webkitMatchesSelector)
                    return l.webkitMatchesSelector(t);
                if (l.msMatchesSelector)
                    return l.msMatchesSelector(t);
                for (o = 0,
                n = r(t); o < n.length; o += 1)
                    if (n[o] === l)
                        return !0;
                return !1
            }
            if (t === i)
                return l === i;
            if (t === s)
                return l === s;
            if (t.nodeType || t instanceof a) {
                for (o = 0,
                n = t.nodeType ? [t] : t; o < n.length; o += 1)
                    if (n[o] === l)
                        return !0
            }
            return !1
        },
        index: function e() {
            var t, i = this[0];
            if (i) {
                for (t = 0; null !== (i = i.previousSibling); )
                    1 === i.nodeType && (t += 1);
                return t
            }
        },
        eq: function e(t) {
            if (void 0 === t)
                return this;
            var i, s = this.length;
            return t > s - 1 ? new a([]) : t < 0 ? new a((i = s + t) < 0 ? [] : [this[i]]) : new a([this[t]])
        },
        append: function e() {
            for (var t, s = [], r = arguments.length; r--; )
                s[r] = arguments[r];
            for (var n = 0; n < s.length; n += 1) {
                t = s[n];
                for (var o = 0; o < this.length; o += 1)
                    if ("string" == typeof t) {
                        var l = i.createElement("div");
                        for (l.innerHTML = t; l.firstChild; )
                            this[o].appendChild(l.firstChild)
                    } else if (t instanceof a)
                        for (var d = 0; d < t.length; d += 1)
                            this[o].appendChild(t[d]);
                    else
                        this[o].appendChild(t)
            }
            return this
        },
        prepend: function e(t) {
            var s, r;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof t) {
                    var n = i.createElement("div");
                    for (n.innerHTML = t,
                    r = n.childNodes.length - 1; r >= 0; r -= 1)
                        this[s].insertBefore(n.childNodes[r], this[s].childNodes[0])
                } else if (t instanceof a)
                    for (r = 0; r < t.length; r += 1)
                        this[s].insertBefore(t[r], this[s].childNodes[0]);
                else
                    this[s].insertBefore(t, this[s].childNodes[0]);
            return this
        },
        next: function e(t) {
            if (this.length > 0) {
                if (t)
                    return new a(this[0].nextElementSibling && r(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : []);
                if (this[0].nextElementSibling)
                    return new a([this[0].nextElementSibling])
            }
            return new a([])
        },
        nextAll: function e(t) {
            var i = []
              , s = this[0];
            if (!s)
                return new a([]);
            for (; s.nextElementSibling; ) {
                var n = s.nextElementSibling;
                t ? r(n).is(t) && i.push(n) : i.push(n),
                s = n
            }
            return new a(i)
        },
        prev: function e(t) {
            if (this.length > 0) {
                var i = this[0];
                if (t)
                    return new a(i.previousElementSibling && r(i.previousElementSibling).is(t) ? [i.previousElementSibling] : []);
                if (i.previousElementSibling)
                    return new a([i.previousElementSibling])
            }
            return new a([])
        },
        prevAll: function e(t) {
            var i = []
              , s = this[0];
            if (!s)
                return new a([]);
            for (; s.previousElementSibling; ) {
                var n = s.previousElementSibling;
                t ? r(n).is(t) && i.push(n) : i.push(n),
                s = n
            }
            return new a(i)
        },
        parent: function e(t) {
            for (var i = [], s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (t ? r(this[s].parentNode).is(t) && i.push(this[s].parentNode) : i.push(this[s].parentNode));
            return r(n(i))
        },
        parents: function e(t) {
            for (var i = [], s = 0; s < this.length; s += 1)
                for (var a = this[s].parentNode; a; )
                    t ? r(a).is(t) && i.push(a) : i.push(a),
                    a = a.parentNode;
            return r(n(i))
        },
        closest: function e(t) {
            var i = this;
            return void 0 === t ? new a([]) : (i.is(t) || (i = i.parents(t).eq(0)),
            i)
        },
        find: function e(t) {
            for (var i = [], s = 0; s < this.length; s += 1)
                for (var r = this[s].querySelectorAll(t), n = 0; n < r.length; n += 1)
                    i.push(r[n]);
            return new a(i)
        },
        children: function e(t) {
            for (var i = [], s = 0; s < this.length; s += 1)
                for (var o = this[s].childNodes, l = 0; l < o.length; l += 1)
                    t ? 1 === o[l].nodeType && r(o[l]).is(t) && i.push(o[l]) : 1 === o[l].nodeType && i.push(o[l]);
            return new a(n(i))
        },
        remove: function e() {
            for (var t = 0; t < this.length; t += 1)
                this[t].parentNode && this[t].parentNode.removeChild(this[t]);
            return this
        },
        add: function e() {
            for (var t, i, s = [], a = arguments.length; a--; )
                s[a] = arguments[a];
            var n = this;
            for (t = 0; t < s.length; t += 1) {
                var o = r(s[t]);
                for (i = 0; i < o.length; i += 1)
                    n[n.length] = o[i],
                    n.length += 1
            }
            return n
        },
        styles: function e() {
            return this[0] ? s.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(o).forEach(function(e) {
        r.fn[e] = o[e]
    });
    var l, d, p, h = {
        deleteProps: function e(t) {
            var i = t;
            Object.keys(i).forEach(function(e) {
                try {
                    i[e] = null
                } catch (t) {}
                try {
                    delete i[e]
                } catch (s) {}
            })
        },
        nextTick: function e(t, i) {
            return void 0 === i && (i = 0),
            setTimeout(t, i)
        },
        now: function e() {
            return Date.now()
        },
        getTranslate: function e(t, i) {
            void 0 === i && (i = "x");
            var a, r, n, o = s.getComputedStyle(t, null);
            return s.WebKitCSSMatrix ? ((r = o.transform || o.webkitTransform).split(",").length > 6 && (r = r.split(", ").map(function(e) {
                return e.replace(",", ".")
            }).join(", ")),
            n = new s.WebKitCSSMatrix("none" === r ? "" : r)) : a = (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
            "x" === i && (r = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
            "y" === i && (r = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
            r || 0
        },
        parseUrlQuery: function e(t) {
            var i, a, r, n, o = {}, l = t || s.location.href;
            if ("string" == typeof l && l.length)
                for (i = 0,
                n = (a = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                    return "" !== e
                })).length; i < n; i += 1)
                    o[decodeURIComponent((r = a[i].replace(/#\S+/g, "").split("="))[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
            return o
        },
        isObject: function e(t) {
            return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
        },
        extend: function e() {
            for (var t = [], i = arguments.length; i--; )
                t[i] = arguments[i];
            for (var s = Object(t[0]), a = 1; a < t.length; a += 1) {
                var r = t[a];
                if (null != r)
                    for (var n = Object.keys(Object(r)), o = 0, l = n.length; o < l; o += 1) {
                        var d = n[o]
                          , p = Object.getOwnPropertyDescriptor(r, d);
                        void 0 !== p && p.enumerable && (h.isObject(s[d]) && h.isObject(r[d]) ? h.extend(s[d], r[d]) : !h.isObject(s[d]) && h.isObject(r[d]) ? (s[d] = {},
                        h.extend(s[d], r[d])) : s[d] = r[d])
                    }
            }
            return s
        }
    }, c = (l = i.createElement("div"),
    {
        touch: s.Modernizr && !0 === s.Modernizr.touch || !!("ontouchstart"in s || s.DocumentTouch && i instanceof s.DocumentTouch),
        pointerEvents: !!(s.navigator.pointerEnabled || s.PointerEvent),
        prefixedPointerEvents: !!s.navigator.msPointerEnabled,
        transition: "transition"in (d = l.style) || "webkitTransition"in d || "MozTransition"in d,
        transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || "webkitPerspective"in (p = l.style) || "MozPerspective"in p || "OPerspective"in p || "MsPerspective"in p || "perspective"in p,
        flexbox: function e() {
            for (var t = l.style, i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), s = 0; s < i.length; s += 1)
                if (i[s]in t)
                    return !0;
            return !1
        }(),
        observer: "MutationObserver"in s || "WebkitMutationObserver"in s,
        passiveListener: function e() {
            var t = !1;
            try {
                var i = Object.defineProperty({}, "passive", {
                    get: function e() {
                        t = !0
                    }
                });
                s.addEventListener("testPassiveListener", null, i)
            } catch (a) {}
            return t
        }(),
        gestures: "ongesturestart"in s
    }), u = function e(t) {
        void 0 === t && (t = {});
        var i = this;
        i.params = t,
        i.eventsListeners = {},
        i.params && i.params.on && Object.keys(i.params.on).forEach(function(e) {
            i.on(e, i.params.on[e])
        })
    }, v = {
        components: {
            configurable: !0
        }
    };
    u.prototype.on = function e(t, i, s) {
        var a = this;
        if ("function" != typeof i)
            return a;
        var r = s ? "unshift" : "push";
        return t.split(" ").forEach(function(e) {
            a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][r](i)
        }),
        a
    }
    ,
    u.prototype.once = function e(t, i, s) {
        var a = this;
        if ("function" != typeof i)
            return a;
        function r() {
            for (var e = [], s = arguments.length; s--; )
                e[s] = arguments[s];
            i.apply(a, e),
            a.off(t, r)
        }
        return a.on(t, r, s)
    }
    ,
    u.prototype.off = function e(t, i) {
        var s = this;
        return s.eventsListeners && t.split(" ").forEach(function(e) {
            void 0 === i ? s.eventsListeners[e] = [] : s.eventsListeners[e].forEach(function(t, a) {
                t === i && s.eventsListeners[e].splice(a, 1)
            })
        }),
        s
    }
    ,
    u.prototype.emit = function e() {
        for (var t, i, s, a = [], r = arguments.length; r--; )
            a[r] = arguments[r];
        var n = this;
        return n.eventsListeners ? ("string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0],
        i = a.slice(1, a.length),
        s = n) : (t = a[0].events,
        i = a[0].data,
        s = a[0].context || n),
        (Array.isArray(t) ? t : t.split(" ")).forEach(function(e) {
            if (n.eventsListeners && n.eventsListeners[e]) {
                var t = [];
                n.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }),
                t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        }),
        n) : n
    }
    ,
    u.prototype.useModulesParams = function e(t) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var s = i.modules[e];
            s.params && h.extend(t, s.params)
        })
    }
    ,
    u.prototype.useModules = function e(t) {
        void 0 === t && (t = {});
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var s = i.modules[e]
              , a = t[e] || {};
            s.instance && Object.keys(s.instance).forEach(function(e) {
                var t = s.instance[e];
                "function" == typeof t ? i[e] = t.bind(i) : i[e] = t
            }),
            s.on && i.on && Object.keys(s.on).forEach(function(e) {
                i.on(e, s.on[e])
            }),
            s.create && s.create.bind(i)(a)
        })
    }
    ,
    v.components.set = function(e) {
        this.use && this.use(e)
    }
    ,
    u.installModule = function e(t) {
        for (var i = [], s = arguments.length - 1; s-- > 0; )
            i[s] = arguments[s + 1];
        var a = this;
        a.prototype.modules || (a.prototype.modules = {});
        var r = t.name || Object.keys(a.prototype.modules).length + "_" + h.now();
        return a.prototype.modules[r] = t,
        t.proto && Object.keys(t.proto).forEach(function(e) {
            a.prototype[e] = t.proto[e]
        }),
        t.static && Object.keys(t.static).forEach(function(e) {
            a[e] = t.static[e]
        }),
        t.install && t.install.apply(a, i),
        a
    }
    ,
    u.use = function e(t) {
        for (var i = [], s = arguments.length - 1; s-- > 0; )
            i[s] = arguments[s + 1];
        var a = this;
        return Array.isArray(t) ? (t.forEach(function(e) {
            return a.installModule(e)
        }),
        a) : a.installModule.apply(a, [t].concat(i))
    }
    ,
    Object.defineProperties(u, v);
    var f = function e() {
        var t = s.navigator.userAgent
          , a = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: s.cordova || s.phonegap,
            phonegap: s.cordova || s.phonegap
        }
          , r = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/)
          , n = t.match(/(Android);?[\s\/]+([\d.]+)?/)
          , o = t.match(/(iPad).*OS\s([\d_]+)/)
          , l = t.match(/(iPod)(.*OS\s([\d_]+))?/)
          , d = !o && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (r && (a.os = "windows",
        a.osVersion = r[2],
        a.windows = !0),
        n && !r && (a.os = "android",
        a.osVersion = n[2],
        a.android = !0,
        a.androidChrome = t.toLowerCase().indexOf("chrome") >= 0),
        (o || d || l) && (a.os = "ios",
        a.ios = !0),
        d && !l && (a.osVersion = d[2].replace(/_/g, "."),
        a.iphone = !0),
        o && (a.osVersion = o[2].replace(/_/g, "."),
        a.ipad = !0),
        l && (a.osVersion = l[3] ? l[3].replace(/_/g, ".") : null,
        a.iphone = !0),
        a.ios && a.osVersion && t.indexOf("Version/") >= 0 && "10" === a.osVersion.split(".")[0] && (a.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]),
        a.desktop = !(a.os || a.android || a.webView),
        a.webView = (d || o || l) && t.match(/.*AppleWebKit(?!.*Safari)/i),
        a.os && "ios" === a.os) {
            var p = a.osVersion.split(".")
              , h = i.querySelector('meta[name="viewport"]');
            a.minimalUi = !a.webView && (l || d) && (1 * p[0] == 7 ? 1 * p[1] >= 1 : 1 * p[0] > 7) && h && h.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return a.pixelRatio = s.devicePixelRatio || 1,
        a
    }();
    function m(e) {
        var t = this
          , a = t.touchEventsData
          , n = t.params
          , o = t.touches;
        if (!t.animating || !n.preventIntercationOnTransition) {
            var l = e;
            if (l.originalEvent && (l = l.originalEvent),
            a.isTouchEvent = "touchstart" === l.type,
            (a.isTouchEvent || !("which"in l) || 3 !== l.which) && (!a.isTouched || !a.isMoved)) {
                if (n.noSwiping && r(l.target).closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) {
                    t.allowClick = !0;
                    return
                }
                if (!n.swipeHandler || r(l).closest(n.swipeHandler)[0]) {
                    o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX,
                    o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                    var d = o.currentX
                      , p = o.currentY;
                    if (!f.ios || f.cordova || !n.iOSEdgeSwipeDetection || !(d <= n.iOSEdgeSwipeThreshold) && !(d >= s.screen.width - n.iOSEdgeSwipeThreshold)) {
                        if (h.extend(a, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }),
                        o.startX = d,
                        o.startY = p,
                        a.touchStartTime = h.now(),
                        t.allowClick = !0,
                        t.updateSize(),
                        t.swipeDirection = void 0,
                        n.threshold > 0 && (a.allowThresholdMove = !1),
                        "touchstart" !== l.type) {
                            var c = !0;
                            r(l.target).is(a.formElements) && (c = !1),
                            i.activeElement && r(i.activeElement).is(a.formElements) && i.activeElement !== l.target && i.activeElement.blur(),
                            c && t.allowTouchMove && l.preventDefault()
                        }
                        t.emit("touchStart", l)
                    }
                }
            }
        }
    }
    function g(e) {
        var t, s = this, a = s.touchEventsData, n = s.params, o = s.touches, l = s.rtlTranslate, d = e;
        if (d.originalEvent && (d = d.originalEvent),
        !a.isTouched) {
            a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", d);
            return
        }
        if (!a.isTouchEvent || "mousemove" !== d.type) {
            var p = "touchmove" === d.type ? d.targetTouches[0].pageX : d.pageX
              , c = "touchmove" === d.type ? d.targetTouches[0].pageY : d.pageY;
            if (d.preventedByNestedSwiper) {
                o.startX = p,
                o.startY = c;
                return
            }
            if (!s.allowTouchMove) {
                s.allowClick = !1,
                a.isTouched && (h.extend(o, {
                    startX: p,
                    startY: c,
                    currentX: p,
                    currentY: c
                }),
                a.touchStartTime = h.now());
                return
            }
            if (a.isTouchEvent && n.touchReleaseOnEdges && !n.loop) {
                if (s.isVertical()) {
                    if (c < o.startY && s.translate <= s.maxTranslate() || c > o.startY && s.translate >= s.minTranslate()) {
                        a.isTouched = !1,
                        a.isMoved = !1;
                        return
                    }
                } else if (p < o.startX && s.translate <= s.maxTranslate() || p > o.startX && s.translate >= s.minTranslate())
                    return
            }
            if (a.isTouchEvent && i.activeElement && d.target === i.activeElement && r(d.target).is(a.formElements)) {
                a.isMoved = !0,
                s.allowClick = !1;
                return
            }
            if (a.allowTouchCallbacks && s.emit("touchMove", d),
            !d.targetTouches || !(d.targetTouches.length > 1)) {
                o.currentX = p,
                o.currentY = c;
                var u = o.currentX - o.startX
                  , v = o.currentY - o.startY;
                if (void 0 === a.isScrolling && (s.isHorizontal() && o.currentY === o.startY || s.isVertical() && o.currentX === o.startX ? a.isScrolling = !1 : u * u + v * v >= 25 && (t = 180 * Math.atan2(Math.abs(v), Math.abs(u)) / Math.PI,
                a.isScrolling = s.isHorizontal() ? t > n.touchAngle : 90 - t > n.touchAngle)),
                a.isScrolling && s.emit("touchMoveOpposite", d),
                "undefined" == typeof startMoving && (o.currentX !== o.startX || o.currentY !== o.startY) && (a.startMoving = !0),
                a.isScrolling) {
                    a.isTouched = !1;
                    return
                }
                if (a.startMoving) {
                    s.allowClick = !1,
                    d.preventDefault(),
                    n.touchMoveStopPropagation && !n.nested && d.stopPropagation(),
                    a.isMoved || (n.loop && s.loopFix(),
                    a.startTranslate = s.getTranslate(),
                    s.setTransition(0),
                    s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                    a.allowMomentumBounce = !1,
                    n.grabCursor && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!0),
                    s.emit("sliderFirstMove", d)),
                    s.emit("sliderMove", d),
                    a.isMoved = !0;
                    var f = s.isHorizontal() ? u : v;
                    o.diff = f,
                    f *= n.touchRatio,
                    l && (f = -f),
                    s.swipeDirection = f > 0 ? "prev" : "next",
                    a.currentTranslate = f + a.startTranslate;
                    var m = !0
                      , g = n.resistanceRatio;
                    if (n.touchReleaseOnEdges && (g = 0),
                    f > 0 && a.currentTranslate > s.minTranslate() ? (m = !1,
                    n.resistance && (a.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + a.startTranslate + f, g))) : f < 0 && a.currentTranslate < s.maxTranslate() && (m = !1,
                    n.resistance && (a.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - a.startTranslate - f, g))),
                    m && (d.preventedByNestedSwiper = !0),
                    !s.allowSlideNext && "next" === s.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate),
                    !s.allowSlidePrev && "prev" === s.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate),
                    n.threshold > 0) {
                        if (Math.abs(f) > n.threshold || a.allowThresholdMove) {
                            if (!a.allowThresholdMove) {
                                a.allowThresholdMove = !0,
                                o.startX = o.currentX,
                                o.startY = o.currentY,
                                a.currentTranslate = a.startTranslate,
                                o.diff = s.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY;
                                return
                            }
                        } else {
                            a.currentTranslate = a.startTranslate;
                            return
                        }
                    }
                    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (s.updateActiveIndex(),
                    s.updateSlidesClasses()),
                    n.freeMode && (0 === a.velocities.length && a.velocities.push({
                        position: o[s.isHorizontal() ? "startX" : "startY"],
                        time: a.touchStartTime
                    }),
                    a.velocities.push({
                        position: o[s.isHorizontal() ? "currentX" : "currentY"],
                        time: h.now()
                    })),
                    s.updateProgress(a.currentTranslate),
                    s.setTranslate(a.currentTranslate))
                }
            }
        }
    }
    function $(e) {
        var t = this
          , i = t.touchEventsData
          , s = t.params
          , a = t.touches
          , r = t.rtlTranslate
          , n = t.$wrapperEl
          , o = t.slidesGrid
          , l = t.snapGrid
          , d = e;
        if (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        i.allowTouchCallbacks = !1,
        !i.isTouched) {
            i.isMoved && s.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            i.startMoving = !1;
            return
        }
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p = h.now()
          , c = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d),
        t.emit("tap", d),
        c < 300 && p - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
        i.clickTimeout = h.nextTick(function() {
            t && !t.destroyed && t.emit("click", d)
        }, 300)),
        c < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout),
        t.emit("doubleTap", d))),
        i.lastClickTime = h.now(),
        h.nextTick(function() {
            t.destroyed || (t.allowClick = !0)
        }),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) {
            i.isTouched = !1,
            i.isMoved = !1,
            i.startMoving = !1;
            return
        }
        if (i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1,
        u = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate,
        s.freeMode) {
            if (u < -t.minTranslate()) {
                t.slideTo(t.activeIndex);
                return
            }
            if (u > -t.maxTranslate()) {
                t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                return
            }
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var u, v, f, m, g = i.velocities.pop(), $ = i.velocities.pop(), b = g.position - $.position, w = g.time - $.time;
                    t.velocity = b / w,
                    t.velocity /= 2,
                    Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
                    (w > 150 || h.now() - g.time > 300) && (t.velocity = 0)
                } else
                    t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio,
                i.velocities.length = 0;
                var y = 1e3 * s.freeModeMomentumRatio
                  , _ = t.velocity * y
                  , x = t.translate + _;
                r && (x = -x);
                var E = !1
                  , T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (x < t.maxTranslate())
                    s.freeModeMomentumBounce ? (x + t.maxTranslate() < -T && (x = t.maxTranslate() - T),
                    v = t.maxTranslate(),
                    E = !0,
                    i.allowMomentumBounce = !0) : x = t.maxTranslate(),
                    s.loop && s.centeredSlides && (f = !0);
                else if (x > t.minTranslate())
                    s.freeModeMomentumBounce ? (x - t.minTranslate() > T && (x = t.minTranslate() + T),
                    v = t.minTranslate(),
                    E = !0,
                    i.allowMomentumBounce = !0) : x = t.minTranslate(),
                    s.loop && s.centeredSlides && (f = !0);
                else if (s.freeModeSticky) {
                    for (var S = 0; S < l.length; S += 1)
                        if (l[S] > -x) {
                            m = S;
                            break
                        }
                    x = -(x = Math.abs(l[m] - x) < Math.abs(l[m - 1] - x) || "next" === t.swipeDirection ? l[m] : l[m - 1])
                }
                if (f && t.once("transitionEnd", function() {
                    t.loopFix()
                }),
                0 !== t.velocity)
                    y = r ? Math.abs((-x - t.translate) / t.velocity) : Math.abs((x - t.translate) / t.velocity);
                else if (s.freeModeSticky) {
                    t.slideToClosest();
                    return
                }
                s.freeModeMomentumBounce && E ? (t.updateProgress(v),
                t.setTransition(y),
                t.setTranslate(x),
                t.transitionStart(!0, t.swipeDirection),
                t.animating = !0,
                n.transitionEnd(function() {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"),
                    t.setTransition(s.speed),
                    t.setTranslate(v),
                    n.transitionEnd(function() {
                        t && !t.destroyed && t.transitionEnd()
                    }))
                })) : t.velocity ? (t.updateProgress(x),
                t.setTransition(y),
                t.setTranslate(x),
                t.transitionStart(!0, t.swipeDirection),
                t.animating || (t.animating = !0,
                n.transitionEnd(function() {
                    t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(x),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
            } else if (s.freeModeSticky) {
                t.slideToClosest();
                return
            }
            (!s.freeModeMomentum || c >= s.longSwipesMs) && (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
            return
        }
        for (var C = 0, z = t.slidesSizesGrid[0], k = 0; k < o.length; k += s.slidesPerGroup)
            void 0 !== o[k + s.slidesPerGroup] ? u >= o[k] && u < o[k + s.slidesPerGroup] && (C = k,
            z = o[k + s.slidesPerGroup] - o[k]) : u >= o[k] && (C = k,
            z = o[o.length - 1] - o[o.length - 2]);
        var P = (u - o[C]) / z;
        if (c > s.longSwipesMs) {
            if (!s.longSwipes) {
                t.slideTo(t.activeIndex);
                return
            }
            "next" === t.swipeDirection && (P >= s.longSwipesRatio ? t.slideTo(C + s.slidesPerGroup) : t.slideTo(C)),
            "prev" === t.swipeDirection && (P > 1 - s.longSwipesRatio ? t.slideTo(C + s.slidesPerGroup) : t.slideTo(C))
        } else {
            if (!s.shortSwipes) {
                t.slideTo(t.activeIndex);
                return
            }
            "next" === t.swipeDirection && t.slideTo(C + s.slidesPerGroup),
            "prev" === t.swipeDirection && t.slideTo(C)
        }
    }
    function b() {
        var e = this
          , t = e.params
          , i = e.el;
        if (!i || 0 !== i.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var s = e.allowSlideNext
              , a = e.allowSlidePrev
              , r = e.snapGrid;
            if (e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n),
                e.updateActiveIndex(),
                e.updateSlidesClasses(),
                t.autoHeight && e.updateAutoHeight()
            } else
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = a,
            e.allowSlideNext = s,
            e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    function w(e) {
        !this.allowClick && (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
        e.stopImmediatePropagation()))
    }
    var y, _ = {
        isIE: !!s.navigator.userAgent.match(/Trident/g) || !!s.navigator.userAgent.match(/MSIE/g),
        isSafari: (y = s.navigator.userAgent.toLowerCase()).indexOf("safari") >= 0 && 0 > y.indexOf("chrome") && 0 > y.indexOf("android"),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
    }, x = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventIntercationOnTransition: !1,
        iOSEdgeSwipeDetection: !1,
        iOSEdgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, E = {
        update: {
            updateSize: function e() {
                var t, i, s = this.$el;
                t = void 0 !== this.params.width ? this.params.width : s[0].clientWidth,
                i = void 0 !== this.params.height ? this.params.height : s[0].clientHeight,
                !(0 === t && this.isHorizontal() || 0 === i && this.isVertical()) && (t = t - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10),
                i = i - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10),
                h.extend(this, {
                    width: t,
                    height: i,
                    size: this.isHorizontal() ? t : i
                }))
            },
            updateSlides: function e() {
                var t, i, a, r = this, n = r.params, o = r.$wrapperEl, l = r.size, d = r.rtlTranslate, p = r.wrongRTL, u = r.virtual && n.virtual.enabled, v = u ? r.virtual.slides.length : r.slides.length, f = o.children("." + r.params.slideClass), m = u ? r.virtual.slides.length : f.length, g = [], $ = [], b = [], w = n.slidesOffsetBefore;
                "function" == typeof w && (w = n.slidesOffsetBefore.call(r));
                var y = n.slidesOffsetAfter;
                "function" == typeof y && (y = n.slidesOffsetAfter.call(r));
                var _ = r.snapGrid.length
                  , x = r.snapGrid.length
                  , E = n.spaceBetween
                  , T = -w
                  , S = 0
                  , C = 0;
                if (void 0 !== l) {
                    "string" == typeof E && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * l),
                    r.virtualSize = -E,
                    d ? f.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : f.css({
                        marginRight: "",
                        marginBottom: ""
                    }),
                    n.slidesPerColumn > 1 && (t = Math.floor(m / n.slidesPerColumn) === m / r.params.slidesPerColumn ? m : Math.ceil(m / n.slidesPerColumn) * n.slidesPerColumn,
                    "auto" !== n.slidesPerView && "row" === n.slidesPerColumnFill && (t = Math.max(t, n.slidesPerView * n.slidesPerColumn)));
                    for (var z = n.slidesPerColumn, k = t / z, P = k - (n.slidesPerColumn * k - m), L = 0; L < m; L += 1) {
                        i = 0;
                        var M = f.eq(L);
                        if (n.slidesPerColumn > 1) {
                            var D = void 0
                              , I = void 0
                              , O = void 0;
                            "column" === n.slidesPerColumnFill ? (I = Math.floor(L / z),
                            O = L - I * z,
                            (I > P || I === P && O === z - 1) && (O += 1) >= z && (O = 0,
                            I += 1),
                            D = I + O * t / z,
                            M.css({
                                "-webkit-box-ordinal-group": D,
                                "-moz-box-ordinal-group": D,
                                "-ms-flex-order": D,
                                "-webkit-order": D,
                                order: D
                            })) : (O = Math.floor(L / k),
                            I = L - O * k),
                            M.css("margin-" + (r.isHorizontal() ? "top" : "left"), 0 !== O && n.spaceBetween && n.spaceBetween + "px").attr("data-swiper-column", I).attr("data-swiper-row", O)
                        }
                        if ("none" !== M.css("display")) {
                            if ("auto" === n.slidesPerView) {
                                var A = s.getComputedStyle(M[0], null)
                                  , G = M[0].style.transform
                                  , H = M[0].style.webkitTransform;
                                G && (M[0].style.transform = "none"),
                                H && (M[0].style.webkitTransform = "none"),
                                i = r.isHorizontal() ? M[0].getBoundingClientRect().width + parseFloat(A.getPropertyValue("margin-left")) + parseFloat(A.getPropertyValue("margin-right")) : M[0].getBoundingClientRect().height + parseFloat(A.getPropertyValue("margin-top")) + parseFloat(A.getPropertyValue("margin-bottom")),
                                G && (M[0].style.transform = G),
                                H && (M[0].style.webkitTransform = H),
                                n.roundLengths && (i = Math.floor(i))
                            } else
                                i = (l - (n.slidesPerView - 1) * E) / n.slidesPerView,
                                n.roundLengths && (i = Math.floor(i)),
                                f[L] && (r.isHorizontal() ? f[L].style.width = i + "px" : f[L].style.height = i + "px");
                            f[L] && (f[L].swiperSlideSize = i),
                            b.push(i),
                            n.centeredSlides ? (T = T + i / 2 + S / 2 + E,
                            0 === S && 0 !== L && (T = T - l / 2 - E),
                            0 === L && (T = T - l / 2 - E),
                            .001 > Math.abs(T) && (T = 0),
                            n.roundLengths && (T = Math.floor(T)),
                            C % n.slidesPerGroup == 0 && g.push(T),
                            $.push(T)) : (n.roundLengths && (T = Math.floor(T)),
                            C % n.slidesPerGroup == 0 && g.push(T),
                            $.push(T),
                            T = T + i + E),
                            r.virtualSize += i + E,
                            S = i,
                            C += 1
                        }
                    }
                    if (r.virtualSize = Math.max(r.virtualSize, l) + y,
                    d && p && ("slide" === n.effect || "coverflow" === n.effect) && o.css({
                        width: r.virtualSize + n.spaceBetween + "px"
                    }),
                    (!c.flexbox || n.setWrapperSize) && (r.isHorizontal() ? o.css({
                        width: r.virtualSize + n.spaceBetween + "px"
                    }) : o.css({
                        height: r.virtualSize + n.spaceBetween + "px"
                    })),
                    n.slidesPerColumn > 1 && (r.virtualSize = (i + n.spaceBetween) * t,
                    r.virtualSize = Math.ceil(r.virtualSize / n.slidesPerColumn) - n.spaceBetween,
                    r.isHorizontal() ? o.css({
                        width: r.virtualSize + n.spaceBetween + "px"
                    }) : o.css({
                        height: r.virtualSize + n.spaceBetween + "px"
                    }),
                    n.centeredSlides)) {
                        a = [];
                        for (var N = 0; N < g.length; N += 1) {
                            var B = g[N];
                            n.roundLengths && (B = Math.floor(B)),
                            g[N] < r.virtualSize + g[0] && a.push(B)
                        }
                        g = a
                    }
                    if (!n.centeredSlides) {
                        a = [];
                        for (var X = 0; X < g.length; X += 1) {
                            var Y = g[X];
                            n.roundLengths && (Y = Math.floor(Y)),
                            g[X] <= r.virtualSize - l && a.push(Y)
                        }
                        g = a,
                        Math.floor(r.virtualSize - l) - Math.floor(g[g.length - 1]) > 1 && g.push(r.virtualSize - l)
                    }
                    0 === g.length && (g = [0]),
                    0 !== n.spaceBetween && (r.isHorizontal() ? d ? f.css({
                        marginLeft: E + "px"
                    }) : f.css({
                        marginRight: E + "px"
                    }) : f.css({
                        marginBottom: E + "px"
                    })),
                    h.extend(r, {
                        slides: f,
                        snapGrid: g,
                        slidesGrid: $,
                        slidesSizesGrid: b
                    }),
                    m !== v && r.emit("slidesLengthChange"),
                    g.length !== _ && (r.params.watchOverflow && r.checkOverflow(),
                    r.emit("snapGridLengthChange")),
                    $.length !== x && r.emit("slidesGridLengthChange"),
                    (n.watchSlidesProgress || n.watchSlidesVisibility) && r.updateSlidesOffset()
                }
            },
            updateAutoHeight: function e(t) {
                var i, s = [], a = 0;
                if ("number" == typeof t ? this.setTransition(t) : !0 === t && this.setTransition(this.params.speed),
                "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
                    for (i = 0; i < Math.ceil(this.params.slidesPerView); i += 1) {
                        var r = this.activeIndex + i;
                        if (r > this.slides.length)
                            break;
                        s.push(this.slides.eq(r)[0])
                    }
                else
                    s.push(this.slides.eq(this.activeIndex)[0]);
                for (i = 0; i < s.length; i += 1)
                    if (void 0 !== s[i]) {
                        var n = s[i].offsetHeight;
                        a = n > a ? n : a
                    }
                a && this.$wrapperEl.css("height", a + "px")
            },
            updateSlidesOffset: function e() {
                for (var t = this.slides, i = 0; i < t.length; i += 1)
                    t[i].swiperSlideOffset = this.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
            },
            updateSlidesProgress: function e(t) {
                void 0 === t && (t = this && this.translate || 0);
                var i = this.params
                  , s = this.slides
                  , a = this.rtlTranslate;
                if (0 !== s.length) {
                    void 0 === s[0].swiperSlideOffset && this.updateSlidesOffset();
                    var r = -t;
                    a && (r = t),
                    s.removeClass(i.slideVisibleClass);
                    for (var n = 0; n < s.length; n += 1) {
                        var o = s[n]
                          , l = (r + (i.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                        if (i.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset)
                              , p = d + this.slidesSizesGrid[n];
                            (d >= 0 && d < this.size || p > 0 && p <= this.size || d <= 0 && p >= this.size) && s.eq(n).addClass(i.slideVisibleClass)
                        }
                        o.progress = a ? -l : l
                    }
                }
            },
            updateProgress: function e(t) {
                void 0 === t && (t = this && this.translate || 0);
                var i = this.params
                  , s = this.maxTranslate() - this.minTranslate()
                  , a = this.progress
                  , r = this.isBeginning
                  , n = this.isEnd
                  , o = r
                  , l = n;
                0 === s ? (a = 0,
                r = !0,
                n = !0) : (r = (a = (t - this.minTranslate()) / s) <= 0,
                n = a >= 1),
                h.extend(this, {
                    progress: a,
                    isBeginning: r,
                    isEnd: n
                }),
                (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(t),
                r && !o && this.emit("reachBeginning toEdge"),
                n && !l && this.emit("reachEnd toEdge"),
                (o && !r || l && !n) && this.emit("fromEdge"),
                this.emit("progress", a)
            },
            updateSlidesClasses: function e() {
                var t, i = this.slides, s = this.params, a = this.$wrapperEl, r = this.activeIndex, n = this.realIndex, o = this.virtual && s.virtual.enabled;
                i.removeClass(s.slideActiveClass + " " + s.slideNextClass + " " + s.slidePrevClass + " " + s.slideDuplicateActiveClass + " " + s.slideDuplicateNextClass + " " + s.slideDuplicatePrevClass),
                (t = o ? this.$wrapperEl.find("." + s.slideClass + '[data-swiper-slide-index="' + r + '"]') : i.eq(r)).addClass(s.slideActiveClass),
                s.loop && (t.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(s.slideDuplicateActiveClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(s.slideDuplicateActiveClass));
                var l = t.nextAll("." + s.slideClass).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === l.length && (l = i.eq(0)).addClass(s.slideNextClass);
                var d = t.prevAll("." + s.slideClass).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = i.eq(-1)).addClass(s.slidePrevClass),
                s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicateNextClass),
                d.hasClass(s.slideDuplicateClass) ? a.children("." + s.slideClass + ":not(." + s.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass) : a.children("." + s.slideClass + "." + s.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(s.slideDuplicatePrevClass))
            },
            updateActiveIndex: function e(t) {
                var i, s = this, a = s.rtlTranslate ? s.translate : -s.translate, r = s.slidesGrid, n = s.snapGrid, o = s.params, l = s.activeIndex, d = s.realIndex, p = s.snapIndex, c = t;
                if (void 0 === c) {
                    for (var u = 0; u < r.length; u += 1)
                        void 0 !== r[u + 1] ? a >= r[u] && a < r[u + 1] - (r[u + 1] - r[u]) / 2 ? c = u : a >= r[u] && a < r[u + 1] && (c = u + 1) : a >= r[u] && (c = u);
                    o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if ((i = n.indexOf(a) >= 0 ? n.indexOf(a) : Math.floor(c / o.slidesPerGroup)) >= n.length && (i = n.length - 1),
                c === l) {
                    i !== p && (s.snapIndex = i,
                    s.emit("snapIndexChange"));
                    return
                }
                var v = parseInt(s.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                h.extend(s, {
                    snapIndex: i,
                    realIndex: v,
                    previousIndex: l,
                    activeIndex: c
                }),
                s.emit("activeIndexChange"),
                s.emit("snapIndexChange"),
                d !== v && s.emit("realIndexChange"),
                s.emit("slideChange")
            },
            updateClickedSlide: function e(t) {
                var i = this
                  , s = i.params
                  , a = r(t.target).closest("." + s.slideClass)[0]
                  , n = !1;
                if (a)
                    for (var o = 0; o < i.slides.length; o += 1)
                        i.slides[o] === a && (n = !0);
                if (a && n)
                    i.clickedSlide = a,
                    i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(r(a).attr("data-swiper-slide-index"), 10) : i.clickedIndex = r(a).index();
                else {
                    i.clickedSlide = void 0,
                    i.clickedIndex = void 0;
                    return
                }
                s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function e(t) {
                void 0 === t && (t = this.isHorizontal() ? "x" : "y");
                var i = this.params
                  , s = this.rtlTranslate
                  , a = this.translate
                  , r = this.$wrapperEl;
                if (i.virtualTranslate)
                    return s ? -a : a;
                var n = h.getTranslate(r[0], t);
                return s && (n = -n),
                n || 0
            },
            setTranslate: function e(t, i) {
                var s, a = this, r = a.rtlTranslate, n = a.params, o = a.$wrapperEl, l = a.progress, d = 0, p = 0;
                a.isHorizontal() ? d = r ? -t : t : p = t,
                n.roundLengths && (d = Math.floor(d),
                p = Math.floor(p)),
                n.virtualTranslate || (c.transforms3d ? o.transform("translate3d(" + d + "px, " + p + "px, 0px)") : o.transform("translate(" + d + "px, " + p + "px)")),
                a.previousTranslate = a.translate,
                a.translate = a.isHorizontal() ? d : p;
                var h = a.maxTranslate() - a.minTranslate();
                (s = 0 === h ? 0 : (t - a.minTranslate()) / h) !== l && a.updateProgress(t),
                a.emit("setTranslate", a.translate, i)
            },
            minTranslate: function e() {
                return -this.snapGrid[0]
            },
            maxTranslate: function e() {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        },
        transition: {
            setTransition: function e(t, i) {
                this.$wrapperEl.transition(t),
                this.emit("setTransition", t, i)
            },
            transitionStart: function e(t, i) {
                void 0 === t && (t = !0);
                var s = this.activeIndex
                  , a = this.params
                  , r = this.previousIndex;
                a.autoHeight && this.updateAutoHeight();
                var n = i;
                if (n || (n = s > r ? "next" : s < r ? "prev" : "reset"),
                this.emit("transitionStart"),
                t && s !== r) {
                    if ("reset" === n) {
                        this.emit("slideResetTransitionStart");
                        return
                    }
                    this.emit("slideChangeTransitionStart"),
                    "next" === n ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            },
            transitionEnd: function e(t, i) {
                void 0 === t && (t = !0);
                var s = this
                  , a = s.activeIndex
                  , r = s.previousIndex;
                s.animating = !1,
                s.setTransition(0);
                var n = i;
                if (n || (n = a > r ? "next" : a < r ? "prev" : "reset"),
                s.emit("transitionEnd"),
                t && a !== r) {
                    if ("reset" === n) {
                        s.emit("slideResetTransitionEnd");
                        return
                    }
                    s.emit("slideChangeTransitionEnd"),
                    "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
                }
            }
        },
        slide: {
            slideTo: function e(t, i, s, a) {
                void 0 === t && (t = 0),
                void 0 === i && (i = this.params.speed),
                void 0 === s && (s = !0);
                var r, n = this, o = t;
                o < 0 && (o = 0);
                var l = n.params
                  , d = n.snapGrid
                  , p = n.slidesGrid
                  , h = n.previousIndex
                  , u = n.activeIndex
                  , v = n.rtlTranslate;
                if (n.animating && l.preventIntercationOnTransition)
                    return !1;
                var f = Math.floor(o / l.slidesPerGroup);
                f >= d.length && (f = d.length - 1),
                (u || l.initialSlide || 0) === (h || 0) && s && n.emit("beforeSlideChangeStart");
                var m = -d[f];
                if (n.updateProgress(m),
                l.normalizeSlideIndex)
                    for (var g = 0; g < p.length; g += 1)
                        -Math.floor(100 * m) >= Math.floor(100 * p[g]) && (o = g);
                return !(n.initialized && o !== u && (!n.allowSlideNext && m < n.translate && m < n.minTranslate() || !n.allowSlidePrev && m > n.translate && m > n.maxTranslate() && (u || 0) !== o)) && ((r = o > u ? "next" : o < u ? "prev" : "reset",
                v && -m === n.translate || !v && m === n.translate) ? (n.updateActiveIndex(o),
                l.autoHeight && n.updateAutoHeight(),
                n.updateSlidesClasses(),
                "slide" !== l.effect && n.setTranslate(m),
                "reset" !== r && (n.transitionStart(s, r),
                n.transitionEnd(s, r)),
                !1) : (0 !== i && c.transition ? (n.setTransition(i),
                n.setTranslate(m),
                n.updateActiveIndex(o),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", i, a),
                n.transitionStart(s, r),
                n.animating || (n.animating = !0,
                n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function e(t) {
                    n && !n.destroyed && t.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                    n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd),
                    n.transitionEnd(s, r))
                }
                ),
                n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0),
                n.setTranslate(m),
                n.updateActiveIndex(o),
                n.updateSlidesClasses(),
                n.emit("beforeTransitionStart", i, a),
                n.transitionStart(s, r),
                n.transitionEnd(s, r)),
                !0))
            },
            slideToLoop: function e(t, i, s, a) {
                void 0 === t && (t = 0),
                void 0 === i && (i = this.params.speed),
                void 0 === s && (s = !0);
                var r = t;
                return this.params.loop && (r += this.loopedSlides),
                this.slideTo(r, i, s, a)
            },
            slideNext: function e(t, i, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var a = this
                  , r = a.params
                  , n = a.animating;
                if (r.loop) {
                    if (n)
                        return !1;
                    a.loopFix(),
                    a._clientLeft = a.$wrapperEl[0].clientLeft
                }
                return a.slideTo(a.activeIndex + r.slidesPerGroup, t, i, s)
            },
            slidePrev: function e(t, i, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var a, r = this, n = r.params, o = r.animating, l = r.snapGrid, d = r.slidesGrid, p = r.rtlTranslate;
                if (n.loop) {
                    if (o)
                        return !1;
                    r.loopFix(),
                    r._clientLeft = r.$wrapperEl[0].clientLeft
                }
                var h = p ? r.translate : -r.translate;
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                var u = c(h)
                  , v = l.map(function(e) {
                    return c(e)
                });
                d.map(function(e) {
                    return c(e)
                }),
                l[v.indexOf(u)];
                var f = l[v.indexOf(u) - 1];
                return void 0 !== f && (a = d.indexOf(f)) < 0 && (a = r.activeIndex - 1),
                r.slideTo(a, t, i, s)
            },
            slideReset: function e(t, i, s) {
                return void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                this.slideTo(this.activeIndex, t, i, s)
            },
            slideToClosest: function e(t, i, s) {
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0);
                var a = this.activeIndex
                  , r = Math.floor(a / this.params.slidesPerGroup);
                if (r < this.snapGrid.length - 1) {
                    var n = this.rtlTranslate ? this.translate : -this.translate
                      , o = this.snapGrid[r];
                    n - o > (this.snapGrid[r + 1] - o) / 2 && (a = this.params.slidesPerGroup)
                }
                return this.slideTo(a, t, i, s)
            },
            slideToClickedSlide: function e() {
                var t, i = this, s = i.params, a = i.$wrapperEl, n = "auto" === s.slidesPerView ? i.slidesPerViewDynamic() : s.slidesPerView, o = i.clickedIndex;
                if (s.loop) {
                    if (i.animating)
                        return;
                    t = parseInt(r(i.clickedSlide).attr("data-swiper-slide-index"), 10),
                    s.centeredSlides ? o < i.loopedSlides - n / 2 || o > i.slides.length - i.loopedSlides + n / 2 ? (i.loopFix(),
                    o = a.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(),
                    h.nextTick(function() {
                        i.slideTo(o)
                    })) : i.slideTo(o) : o > i.slides.length - n ? (i.loopFix(),
                    o = a.children("." + s.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + s.slideDuplicateClass + ")").eq(0).index(),
                    h.nextTick(function() {
                        i.slideTo(o)
                    })) : i.slideTo(o)
                } else
                    i.slideTo(o)
            }
        },
        loop: {
            loopCreate: function e() {
                var t = this
                  , s = t.params
                  , a = t.$wrapperEl;
                a.children("." + s.slideClass + "." + s.slideDuplicateClass).remove();
                var n = a.children("." + s.slideClass);
                if (s.loopFillGroupWithBlank) {
                    var o = s.slidesPerGroup - n.length % s.slidesPerGroup;
                    if (o !== s.slidesPerGroup) {
                        for (var l = 0; l < o; l += 1) {
                            var d = r(i.createElement("div")).addClass(s.slideClass + " " + s.slideBlankClass);
                            a.append(d)
                        }
                        n = a.children("." + s.slideClass)
                    }
                }
                "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
                t.loopedSlides = parseInt(s.loopedSlides || s.slidesPerView, 10),
                t.loopedSlides += s.loopAdditionalSlides,
                t.loopedSlides > n.length && (t.loopedSlides = n.length);
                var p = []
                  , h = [];
                n.each(function(e, i) {
                    var s = r(i);
                    e < t.loopedSlides && h.push(i),
                    e < n.length && e >= n.length - t.loopedSlides && p.push(i),
                    s.attr("data-swiper-slide-index", e)
                });
                for (var c = 0; c < h.length; c += 1)
                    a.append(r(h[c].cloneNode(!0)).addClass(s.slideDuplicateClass));
                for (var u = p.length - 1; u >= 0; u -= 1)
                    a.prepend(r(p[u].cloneNode(!0)).addClass(s.slideDuplicateClass))
            },
            loopFix: function e() {
                var t, i = this, s = i.params, a = i.activeIndex, r = i.slides, n = i.loopedSlides, o = i.allowSlidePrev, l = i.allowSlideNext, d = i.snapGrid, p = i.rtlTranslate;
                i.allowSlidePrev = !0,
                i.allowSlideNext = !0;
                var h = -d[a] - i.getTranslate();
                a < n ? (t = r.length - 3 * n + a,
                t += n,
                i.slideTo(t, 0, !1, !0) && 0 !== h && i.setTranslate((p ? -i.translate : i.translate) - h)) : ("auto" === s.slidesPerView && a >= 2 * n || a >= r.length - n) && (t = -r.length + a + n,
                t += n,
                i.slideTo(t, 0, !1, !0) && 0 !== h && i.setTranslate((p ? -i.translate : i.translate) - h)),
                i.allowSlidePrev = o,
                i.allowSlideNext = l
            },
            loopDestroy: function e() {
                var t = this.$wrapperEl
                  , i = this.params
                  , s = this.slides;
                t.children("." + i.slideClass + "." + i.slideDuplicateClass).remove(),
                s.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function e(t) {
                if (!c.touch && this.params.simulateTouch && (!this.params.watchOverflow || !this.isLocked)) {
                    var i = this.el;
                    i.style.cursor = "move",
                    i.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab",
                    i.style.cursor = t ? "-moz-grabbin" : "-moz-grab",
                    i.style.cursor = t ? "grabbing" : "grab"
                }
            },
            unsetGrabCursor: function e() {
                var t = this;
                !c.touch && (!t.params.watchOverflow || !t.isLocked) && (t.el.style.cursor = "")
            }
        },
        manipulation: {
            appendSlide: function e(t) {
                var i = this.$wrapperEl
                  , s = this.params;
                if (s.loop && this.loopDestroy(),
                "object" == typeof t && "length"in t)
                    for (var a = 0; a < t.length; a += 1)
                        t[a] && i.append(t[a]);
                else
                    i.append(t);
                s.loop && this.loopCreate(),
                s.observer && c.observer || this.update()
            },
            prependSlide: function e(t) {
                var i = this.params
                  , s = this.$wrapperEl
                  , a = this.activeIndex;
                i.loop && this.loopDestroy();
                var r = a + 1;
                if ("object" == typeof t && "length"in t) {
                    for (var n = 0; n < t.length; n += 1)
                        t[n] && s.prepend(t[n]);
                    r = a + t.length
                } else
                    s.prepend(t);
                i.loop && this.loopCreate(),
                i.observer && c.observer || this.update(),
                this.slideTo(r, 0, !1)
            },
            addSlide: function e(t, i) {
                var s = this
                  , a = s.$wrapperEl
                  , r = s.params
                  , n = s.activeIndex;
                r.loop && (n -= s.loopedSlides,
                s.loopDestroy(),
                s.slides = a.children("." + r.slideClass));
                var o = s.slides.length;
                if (t <= 0) {
                    s.prependSlide(i);
                    return
                }
                if (t >= o) {
                    s.appendSlide(i);
                    return
                }
                for (var l = n > t ? n + 1 : n, d = [], p = o - 1; p >= t; p -= 1) {
                    var h = s.slides.eq(p);
                    h.remove(),
                    d.unshift(h)
                }
                if ("object" == typeof i && "length"in i) {
                    for (var u = 0; u < i.length; u += 1)
                        i[u] && a.append(i[u]);
                    l = n > t ? n + i.length : n
                } else
                    a.append(i);
                for (var v = 0; v < d.length; v += 1)
                    a.append(d[v]);
                r.loop && s.loopCreate(),
                r.observer && c.observer || s.update(),
                r.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
            },
            removeSlide: function e(t) {
                var i, s = this, a = s.params, r = s.$wrapperEl, n = s.activeIndex;
                a.loop && (n -= s.loopedSlides,
                s.loopDestroy(),
                s.slides = r.children("." + a.slideClass));
                var o = n;
                if ("object" == typeof t && "length"in t) {
                    for (var l = 0; l < t.length; l += 1)
                        i = t[l],
                        s.slides[i] && s.slides.eq(i).remove(),
                        i < o && (o -= 1);
                    o = Math.max(o, 0)
                } else
                    i = t,
                    s.slides[i] && s.slides.eq(i).remove(),
                    i < o && (o -= 1),
                    o = Math.max(o, 0);
                a.loop && s.loopCreate(),
                a.observer && c.observer || s.update(),
                a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
            },
            removeAllSlides: function e() {
                for (var t = [], i = 0; i < this.slides.length; i += 1)
                    t.push(i);
                this.removeSlide(t)
            }
        },
        events: {
            attachEvents: function e() {
                var t = this
                  , s = t.params
                  , a = t.touchEvents
                  , r = t.el
                  , n = t.wrapperEl;
                t.onTouchStart = m.bind(t),
                t.onTouchMove = g.bind(t),
                t.onTouchEnd = $.bind(t),
                t.onClick = w.bind(t);
                var o = "container" === s.touchEventsTarget ? r : n
                  , l = !!s.nested;
                if (!c.touch && (c.pointerEvents || c.prefixedPointerEvents))
                    o.addEventListener(a.start, t.onTouchStart, !1),
                    i.addEventListener(a.move, t.onTouchMove, l),
                    i.addEventListener(a.end, t.onTouchEnd, !1);
                else {
                    if (c.touch) {
                        var d = "touchstart" === a.start && !!c.passiveListener && !!s.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        o.addEventListener(a.start, t.onTouchStart, d),
                        o.addEventListener(a.move, t.onTouchMove, c.passiveListener ? {
                            passive: !1,
                            capture: l
                        } : l),
                        o.addEventListener(a.end, t.onTouchEnd, d)
                    }
                    (s.simulateTouch && !f.ios && !f.android || s.simulateTouch && !c.touch && f.ios) && (o.addEventListener("mousedown", t.onTouchStart, !1),
                    i.addEventListener("mousemove", t.onTouchMove, l),
                    i.addEventListener("mouseup", t.onTouchEnd, !1))
                }
                (s.preventClicks || s.preventClicksPropagation) && o.addEventListener("click", t.onClick, !0),
                t.on(f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b, !0)
            },
            detachEvents: function e() {
                var t = this.params
                  , s = this.touchEvents
                  , a = this.el
                  , r = this.wrapperEl
                  , n = "container" === t.touchEventsTarget ? a : r
                  , o = !!t.nested;
                if (!c.touch && (c.pointerEvents || c.prefixedPointerEvents))
                    n.removeEventListener(s.start, this.onTouchStart, !1),
                    i.removeEventListener(s.move, this.onTouchMove, o),
                    i.removeEventListener(s.end, this.onTouchEnd, !1);
                else {
                    if (c.touch) {
                        var l = "onTouchStart" === s.start && !!c.passiveListener && !!t.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        n.removeEventListener(s.start, this.onTouchStart, l),
                        n.removeEventListener(s.move, this.onTouchMove, o),
                        n.removeEventListener(s.end, this.onTouchEnd, l)
                    }
                    (t.simulateTouch && !f.ios && !f.android || t.simulateTouch && !c.touch && f.ios) && (n.removeEventListener("mousedown", this.onTouchStart, !1),
                    i.removeEventListener("mousemove", this.onTouchMove, o),
                    i.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", this.onClick, !0),
                this.off(f.ios || f.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", b)
            }
        },
        breakpoints: {
            setBreakpoint: function e() {
                var t = this
                  , i = t.activeIndex
                  , s = t.initialized
                  , a = t.loopedSlides;
                void 0 === a && (a = 0);
                var r = t.params
                  , n = r.breakpoints;
                if (n && (!n || 0 !== Object.keys(n).length)) {
                    var o = t.getBreakpoint(n);
                    if (o && t.currentBreakpoint !== o) {
                        var l = o in n ? n[o] : t.originalParams
                          , d = r.loop && l.slidesPerView !== r.slidesPerView;
                        h.extend(t.params, l),
                        h.extend(t, {
                            allowTouchMove: t.params.allowTouchMove,
                            allowSlideNext: t.params.allowSlideNext,
                            allowSlidePrev: t.params.allowSlidePrev
                        }),
                        t.currentBreakpoint = o,
                        d && s && (t.loopDestroy(),
                        t.loopCreate(),
                        t.updateSlides(),
                        t.slideTo(i - a + t.loopedSlides, 0, !1)),
                        t.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function e(t) {
                if (t) {
                    var i = !1
                      , a = [];
                    Object.keys(t).forEach(function(e) {
                        a.push(e)
                    }),
                    a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var r = 0; r < a.length; r += 1) {
                        var n = a[r];
                        n >= s.innerWidth && !i && (i = n)
                    }
                    return i || "max"
                }
            }
        },
        checkOverflow: {
            checkOverflow: function e() {
                var t = this
                  , i = t.isLocked;
                t.isLocked = 1 === t.snapGrid.length,
                t.allowSlideNext = !t.isLocked,
                t.allowSlidePrev = !t.isLocked,
                i !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"),
                i && i !== t.isLocked && (t.isEnd = !1,
                t.navigation.update())
            }
        },
        classes: {
            addClasses: function e() {
                var t = this.classNames
                  , i = this.params
                  , s = this.rtl
                  , a = this.$el
                  , r = [];
                r.push(i.direction),
                i.freeMode && r.push("free-mode"),
                c.flexbox || r.push("no-flexbox"),
                i.autoHeight && r.push("autoheight"),
                s && r.push("rtl"),
                i.slidesPerColumn > 1 && r.push("multirow"),
                f.android && r.push("android"),
                f.ios && r.push("ios"),
                _.isIE && (c.pointerEvents || c.prefixedPointerEvents) && r.push("wp8-" + i.direction),
                r.forEach(function(e) {
                    t.push(i.containerModifierClass + e)
                }),
                a.addClass(t.join(" "))
            },
            removeClasses: function e() {
                var t = this.$el
                  , i = this.classNames;
                t.removeClass(i.join(" "))
            }
        },
        images: {
            loadImage: function e(t, i, a, r, n, o) {
                var l;
                function d() {
                    o && o()
                }
                t.complete && n ? d() : i ? ((l = new s.Image).onload = d,
                l.onerror = d,
                r && (l.sizes = r),
                a && (l.srcset = a),
                i && (l.src = i)) : d()
            },
            preloadImages: function e() {
                var t = this;
                function i() {
                    null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
                    t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(),
                    t.emit("imagesReady")))
                }
                t.imagesToLoad = t.$el.find("img");
                for (var s = 0; s < t.imagesToLoad.length; s += 1) {
                    var a = t.imagesToLoad[s];
                    t.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, i)
                }
            }
        }
    }, T = {}, S = function(e) {
        function t() {
            for (var i, s, a, n = [], o = arguments.length; o--; )
                n[o] = arguments[o];
            1 === n.length && n[0].constructor && n[0].constructor === Object ? a = n[0] : (s = (i = n)[0],
            a = i[1]),
            a || (a = {}),
            a = h.extend({}, a),
            s && !a.el && (a.el = s),
            e.call(this, a),
            Object.keys(E).forEach(function(e) {
                Object.keys(E[e]).forEach(function(i) {
                    t.prototype[i] || (t.prototype[i] = E[e][i])
                })
            });
            var l = this;
            void 0 === l.modules && (l.modules = {}),
            Object.keys(l.modules).forEach(function(e) {
                var t = l.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0]
                      , s = t.params[i];
                    if ("object" != typeof s || !(i in a && "enabled"in s))
                        return;
                    !0 === a[i] && (a[i] = {
                        enabled: !0
                    }),
                    "object" != typeof a[i] || "enabled"in a[i] || (a[i].enabled = !0),
                    a[i] || (a[i] = {
                        enabled: !1
                    })
                }
            });
            var d = h.extend({}, x);
            l.useModulesParams(d),
            l.params = h.extend({}, d, T, a),
            l.originalParams = h.extend({}, l.params),
            l.passedParams = h.extend({}, a),
            l.$ = r;
            var p = r(l.params.el);
            if (s = p[0]) {
                if (p.length > 1) {
                    var u = [];
                    return p.each(function(e, i) {
                        var s = h.extend({}, a, {
                            el: i
                        });
                        u.push(new t(s))
                    }),
                    u
                }
                s.swiper = l,
                p.data("swiper", l);
                var v, f, m = p.children("." + l.params.wrapperClass);
                return h.extend(l, {
                    $el: p,
                    el: s,
                    $wrapperEl: m,
                    wrapperEl: m[0],
                    classNames: [],
                    slides: r(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function e() {
                        return "horizontal" === l.params.direction
                    },
                    isVertical: function e() {
                        return "vertical" === l.params.direction
                    },
                    rtl: "rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction"),
                    rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === p.css("direction")),
                    wrongRTL: "-webkit-box" === m.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: (v = ["touchstart", "touchmove", "touchend"],
                    f = ["mousedown", "mousemove", "mouseup"],
                    c.pointerEvents ? f = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    l.touchEventsTouch = {
                        start: v[0],
                        move: v[1],
                        end: v[2]
                    },
                    l.touchEventsDesktop = {
                        start: f[0],
                        move: f[1],
                        end: f[2]
                    },
                    c.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video",
                        lastClickTime: h.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                l.useModules(),
                l.params.init && l.init(),
                l
            }
        }
        e && (t.__proto__ = e),
        t.prototype = Object.create(e && e.prototype),
        t.prototype.constructor = t;
        var i = {
            extendedDefaults: {
                configurable: !0
            },
            defaults: {
                configurable: !0
            },
            Class: {
                configurable: !0
            },
            $: {
                configurable: !0
            }
        };
        return t.prototype.slidesPerViewDynamic = function e() {
            var t = this.params
              , i = this.slides
              , s = this.slidesGrid
              , a = this.size
              , r = this.activeIndex
              , n = 1;
            if (t.centeredSlides) {
                for (var o, l = i[r].swiperSlideSize, d = r + 1; d < i.length; d += 1)
                    i[d] && !o && (l += i[d].swiperSlideSize,
                    n += 1,
                    l > a && (o = !0));
                for (var p = r - 1; p >= 0; p -= 1)
                    i[p] && !o && (l += i[p].swiperSlideSize,
                    n += 1,
                    l > a && (o = !0))
            } else
                for (var h = r + 1; h < i.length; h += 1)
                    s[h] - s[r] < a && (n += 1);
            return n
        }
        ,
        t.prototype.update = function e() {
            var t, i = this;
            if (i && !i.destroyed) {
                var s = i.snapGrid
                  , a = i.params;
                a.breakpoints && i.setBreakpoint(),
                i.updateSize(),
                i.updateSlides(),
                i.updateProgress(),
                i.updateSlidesClasses(),
                i.params.freeMode ? (r(),
                i.params.autoHeight && i.updateAutoHeight()) : (t = ("auto" === i.params.slidesPerView || i.params.slidesPerView > 1) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || r(),
                a.watchOverflow && s !== i.snapGrid && i.checkOverflow(),
                i.emit("update")
            }
            function r() {
                var e = Math.min(Math.max(i.rtlTranslate ? -1 * i.translate : i.translate, i.maxTranslate()), i.minTranslate());
                i.setTranslate(e),
                i.updateActiveIndex(),
                i.updateSlidesClasses()
            }
        }
        ,
        t.prototype.init = function e() {
            var t = this;
            !t.initialized && (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"))
        }
        ,
        t.prototype.destroy = function e(t, i) {
            void 0 === t && (t = !0),
            void 0 === i && (i = !0);
            var s = this
              , a = s.params
              , r = s.$el
              , n = s.$wrapperEl
              , o = s.slides;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            i && (s.removeClasses(),
            r.removeAttr("style"),
            n.removeAttr("style"),
            o && o.length && o.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach(function(e) {
                s.off(e)
            }),
            !1 !== t && (s.$el[0].swiper = null,
            s.$el.data("swiper", null),
            h.deleteProps(s)),
            s.destroyed = !0),
            null
        }
        ,
        t.extendDefaults = function e(t) {
            h.extend(T, t)
        }
        ,
        i.extendedDefaults.get = function() {
            return T
        }
        ,
        i.defaults.get = function() {
            return x
        }
        ,
        i.Class.get = function() {
            return e
        }
        ,
        i.$.get = function() {
            return r
        }
        ,
        Object.defineProperties(t, i),
        t
    }(u), C = {
        func: s.MutationObserver || s.WebkitMutationObserver,
        attach: function e(t, i) {
            void 0 === i && (i = {});
            var s = this
              , a = new C.func(function(e) {
                e.forEach(function(e) {
                    s.emit("observerUpdate", e)
                })
            }
            );
            a.observe(t, {
                attributes: void 0 === i.attributes || i.attributes,
                childList: void 0 === i.childList || i.childList,
                characterData: void 0 === i.characterData || i.characterData
            }),
            s.observer.observers.push(a)
        },
        init: function e() {
            if (c.observer && this.params.observer) {
                if (this.params.observeParents)
                    for (var t = this.$el.parents(), i = 0; i < t.length; i += 1)
                        this.observer.attach(t[i]);
                this.observer.attach(this.$el[0], {
                    childList: !1
                }),
                this.observer.attach(this.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy: function e() {
            var t = this;
            t.observer.observers.forEach(function(e) {
                e.disconnect()
            }),
            t.observer.observers = []
        }
    }, z = {
        update: function e(t) {
            var i, s, a, r = this, n = r.params, o = n.slidesPerView, l = n.slidesPerGroup, d = n.centeredSlides, p = r.virtual, c = p.from, u = p.to, v = p.slides, f = p.slidesGrid, m = p.renderSlide, g = p.offset;
            r.updateActiveIndex();
            var $ = r.activeIndex || 0;
            i = r.rtlTranslate ? "right" : r.isHorizontal() ? "left" : "top",
            d ? (s = Math.floor(o / 2) + l,
            a = Math.floor(o / 2) + l) : (s = o + (l - 1),
            a = l);
            var b = Math.max(($ || 0) - a, 0)
              , w = Math.min(($ || 0) + s, v.length - 1)
              , y = (r.slidesGrid[b] || 0) - (r.slidesGrid[0] || 0);
            function _() {
                r.updateSlides(),
                r.updateProgress(),
                r.updateSlidesClasses(),
                r.lazy && r.params.lazy.enabled && r.lazy.load()
            }
            if (h.extend(r.virtual, {
                from: b,
                to: w,
                offset: y,
                slidesGrid: r.slidesGrid
            }),
            c === b && u === w && !t) {
                r.slidesGrid !== f && y !== g && r.slides.css(i, y + "px"),
                r.updateProgress();
                return
            }
            if (r.params.virtual.renderExternal) {
                r.params.virtual.renderExternal.call(r, {
                    offset: y,
                    from: b,
                    to: w,
                    slides: function e() {
                        for (var t = [], i = b; i <= w; i += 1)
                            t.push(v[i]);
                        return t
                    }()
                }),
                _();
                return
            }
            var x = []
              , E = [];
            if (t)
                r.$wrapperEl.find("." + r.params.slideClass).remove();
            else
                for (var T = c; T <= u; T += 1)
                    (T < b || T > w) && r.$wrapperEl.find("." + r.params.slideClass + '[data-swiper-slide-index="' + T + '"]').remove();
            for (var S = 0; S < v.length; S += 1)
                S >= b && S <= w && (void 0 === u || t ? E.push(S) : (S > u && E.push(S),
                S < c && x.push(S)));
            E.forEach(function(e) {
                r.$wrapperEl.append(m(v[e], e))
            }),
            x.sort(function(e, t) {
                return e < t
            }).forEach(function(e) {
                r.$wrapperEl.prepend(m(v[e], e))
            }),
            r.$wrapperEl.children(".swiper-slide").css(i, y + "px"),
            _()
        },
        renderSlide: function e(t, i) {
            var s = this
              , a = s.params.virtual;
            if (a.cache && s.virtual.cache[i])
                return s.virtual.cache[i];
            var n = a.renderSlide ? r(a.renderSlide.call(s, t, i)) : r('<div class="' + s.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
            return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i),
            a.cache && (s.virtual.cache[i] = n),
            n
        },
        appendSlide: function e(t) {
            this.virtual.slides.push(t),
            this.virtual.update(!0)
        },
        prependSlide: function e(t) {
            var i = this;
            if (i.virtual.slides.unshift(t),
            i.params.virtual.cache) {
                var s = i.virtual.cache
                  , a = {};
                Object.keys(s).forEach(function(e) {
                    a[e + 1] = s[e]
                }),
                i.virtual.cache = a
            }
            i.virtual.update(!0),
            i.slideNext(0)
        }
    }, k = {
        handle: function e(t) {
            var a = this.rtlTranslate
              , r = t;
            r.originalEvent && (r = r.originalEvent);
            var n = r.keyCode || r.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === n || this.isVertical() && 40 === n) || !this.allowSlidePrev && (this.isHorizontal() && 37 === n || this.isVertical() && 38 === n))
                return !1;
            if (!r.shiftKey && !r.altKey && !r.ctrlKey && !r.metaKey && (!i.activeElement || !i.activeElement.nodeName || "input" !== i.activeElement.nodeName.toLowerCase() && "textarea" !== i.activeElement.nodeName.toLowerCase())) {
                if (this.params.keyboard.onlyInViewport && (37 === n || 39 === n || 38 === n || 40 === n)) {
                    var o = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length)
                        return;
                    var l = s.innerWidth
                      , d = s.innerHeight
                      , p = this.$el.offset();
                    a && (p.left -= this.$el[0].scrollLeft);
                    for (var h = [[p.left, p.top], [p.left + this.width, p.top], [p.left, p.top + this.height], [p.left + this.width, p.top + this.height]], c = 0; c < h.length; c += 1) {
                        var u = h[c];
                        u[0] >= 0 && u[0] <= l && u[1] >= 0 && u[1] <= d && (o = !0)
                    }
                    if (!o)
                        return
                }
                this.isHorizontal() ? ((37 === n || 39 === n) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                (39 === n && !a || 37 === n && a) && this.slideNext(),
                (37 === n && !a || 39 === n && a) && this.slidePrev()) : ((38 === n || 40 === n) && (r.preventDefault ? r.preventDefault() : r.returnValue = !1),
                40 === n && this.slideNext(),
                38 === n && this.slidePrev()),
                this.emit("keyPress", n)
            }
        },
        enable: function e() {
            var t = this;
            !t.keyboard.enabled && (r(i).on("keydown", t.keyboard.handle),
            t.keyboard.enabled = !0)
        },
        disable: function e() {
            var t = this;
            t.keyboard.enabled && (r(i).off("keydown", t.keyboard.handle),
            t.keyboard.enabled = !1)
        }
    }, P = {
        lastScrollTime: h.now(),
        event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : !function e() {
            var t = "onwheel"
              , s = t in i;
            if (!s) {
                var a = i.createElement("div");
                a.setAttribute(t, "return;"),
                s = "function" == typeof a[t]
            }
            return !s && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (s = i.implementation.hasFeature("Events.wheel", "3.0")),
            s
        }() ? "mousewheel" : "wheel",
        normalize: function e(t) {
            var i = 0
              , s = 0
              , a = 0
              , r = 0;
            return "detail"in t && (s = t.detail),
            "wheelDelta"in t && (s = -t.wheelDelta / 120),
            "wheelDeltaY"in t && (s = -t.wheelDeltaY / 120),
            "wheelDeltaX"in t && (i = -t.wheelDeltaX / 120),
            "axis"in t && t.axis === t.HORIZONTAL_AXIS && (i = s,
            s = 0),
            a = 10 * i,
            r = 10 * s,
            "deltaY"in t && (r = t.deltaY),
            "deltaX"in t && (a = t.deltaX),
            (a || r) && t.deltaMode && (1 === t.deltaMode ? (a *= 40,
            r *= 40) : (a *= 800,
            r *= 800)),
            a && !i && (i = a < 1 ? -1 : 1),
            r && !s && (s = r < 1 ? -1 : 1),
            {
                spinX: i,
                spinY: s,
                pixelX: a,
                pixelY: r
            }
        },
        handleMouseEnter: function e() {
            var t = this;
            t.mouseEntered = !0
        },
        handleMouseLeave: function e() {
            var t = this;
            t.mouseEntered = !1
        },
        handle: function e(t) {
            var i = t
              , a = this
              , r = a.params.mousewheel;
            if (!a.mouseEntered && !r.releaseOnEdges)
                return !0;
            i.originalEvent && (i = i.originalEvent);
            var n = 0
              , o = a.rtlTranslate ? -1 : 1
              , l = P.normalize(i);
            if (r.forceToAxis) {
                if (a.isHorizontal()) {
                    if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                        return !0;
                    n = l.pixelX * o
                } else {
                    if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                        return !0;
                    n = l.pixelY
                }
            } else
                n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
            if (0 === n)
                return !0;
            if (r.invert && (n = -n),
            a.params.freeMode) {
                a.params.loop && a.loopFix();
                var d = a.getTranslate() + n * r.sensitivity
                  , p = a.isBeginning
                  , c = a.isEnd;
                if (d >= a.minTranslate() && (d = a.minTranslate()),
                d <= a.maxTranslate() && (d = a.maxTranslate()),
                a.setTransition(0),
                a.setTranslate(d),
                a.updateProgress(),
                a.updateActiveIndex(),
                a.updateSlidesClasses(),
                (!p && a.isBeginning || !c && a.isEnd) && a.updateSlidesClasses(),
                a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout),
                a.mousewheel.timeout = h.nextTick(function() {
                    a.slideToClosest()
                }, 300)),
                a.emit("scroll", i),
                a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(),
                d === a.minTranslate() || d === a.maxTranslate())
                    return !0
            } else {
                if (h.now() - a.mousewheel.lastScrollTime > 60) {
                    if (n < 0) {
                        if (a.isEnd && !a.params.loop || a.animating) {
                            if (r.releaseOnEdges)
                                return !0
                        } else
                            a.slideNext(),
                            a.emit("scroll", i)
                    } else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (r.releaseOnEdges)
                            return !0
                    } else
                        a.slidePrev(),
                        a.emit("scroll", i)
                }
                a.mousewheel.lastScrollTime = new s.Date().getTime()
            }
            return i.preventDefault ? i.preventDefault() : i.returnValue = !1,
            !1
        },
        enable: function e() {
            var t = this;
            if (!P.event || t.mousewheel.enabled)
                return !1;
            var i = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (i = r(t.params.mousewheel.eventsTarged)),
            i.on("mouseenter", t.mousewheel.handleMouseEnter),
            i.on("mouseleave", t.mousewheel.handleMouseLeave),
            i.on(P.event, t.mousewheel.handle),
            t.mousewheel.enabled = !0,
            !0
        },
        disable: function e() {
            var t = this;
            if (!P.event || !t.mousewheel.enabled)
                return !1;
            var i = t.$el;
            return "container" !== t.params.mousewheel.eventsTarged && (i = r(t.params.mousewheel.eventsTarged)),
            i.off(P.event, t.mousewheel.handle),
            t.mousewheel.enabled = !1,
            !0
        }
    }, L = {
        update: function e() {
            var t = this.params.navigation;
            if (!this.params.loop) {
                var i = this.navigation
                  , s = i.$nextEl
                  , a = i.$prevEl;
                a && a.length > 0 && (this.isBeginning ? a.addClass(t.disabledClass) : a.removeClass(t.disabledClass),
                a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass)),
                s && s.length > 0 && (this.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass),
                s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        },
        init: function e() {
            var t, i, s = this, a = s.params.navigation;
            (a.nextEl || a.prevEl) && (a.nextEl && (t = r(a.nextEl),
            s.params.uniqueNavElements && "string" == typeof a.nextEl && t.length > 1 && 1 === s.$el.find(a.nextEl).length && (t = s.$el.find(a.nextEl))),
            a.prevEl && (i = r(a.prevEl),
            s.params.uniqueNavElements && "string" == typeof a.prevEl && i.length > 1 && 1 === s.$el.find(a.prevEl).length && (i = s.$el.find(a.prevEl))),
            t && t.length > 0 && t.on("click", function(e) {
                e.preventDefault(),
                (!s.isEnd || s.params.loop) && s.slideNext()
            }),
            i && i.length > 0 && i.on("click", function(e) {
                e.preventDefault(),
                (!s.isBeginning || s.params.loop) && s.slidePrev()
            }),
            h.extend(s.navigation, {
                $nextEl: t,
                nextEl: t && t[0],
                $prevEl: i,
                prevEl: i && i[0]
            }))
        },
        destroy: function e() {
            var t = this.navigation
              , i = t.$nextEl
              , s = t.$prevEl;
            i && i.length && (i.off("click"),
            i.removeClass(this.params.navigation.disabledClass)),
            s && s.length && (s.off("click"),
            s.removeClass(this.params.navigation.disabledClass))
        }
    }, M = {
        update: function e() {
            var t = this
              , i = t.rtl
              , s = t.params.pagination;
            if (s.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                var a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                  , n = t.pagination.$el
                  , o = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? ((l = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > a - 1 - 2 * t.loopedSlides && (l -= a - 2 * t.loopedSlides),
                l > o - 1 && (l -= o),
                l < 0 && "bullets" !== t.params.paginationType && (l = o + l)) : l = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0,
                "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    var l, d, p, h, c = t.pagination.bullets;
                    if (s.dynamicBullets && (t.pagination.bulletSize = c.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    n.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"),
                    s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += l - t.previousIndex,
                    t.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)),
                    h = ((p = (d = l - t.pagination.dynamicBulletIndex) + (Math.min(c.length, s.dynamicMainBullets) - 1)) + d) / 2),
                    c.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"),
                    n.length > 1)
                        c.each(function(e, t) {
                            var i = r(t)
                              , a = i.index();
                            a === l && i.addClass(s.bulletActiveClass),
                            s.dynamicBullets && (a >= d && a <= p && i.addClass(s.bulletActiveClass + "-main"),
                            a === d && i.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                            a === p && i.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                    else if (c.eq(l).addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        for (var u = c.eq(d), v = c.eq(p), f = d; f <= p; f += 1)
                            c.eq(f).addClass(s.bulletActiveClass + "-main");
                        u.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"),
                        v.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var m = Math.min(c.length, s.dynamicMainBullets + 4)
                          , g = (t.pagination.bulletSize * m - t.pagination.bulletSize) / 2 - h * t.pagination.bulletSize;
                        c.css(t.isHorizontal() ? i ? "right" : "left" : "top", g + "px")
                    }
                }
                if ("fraction" === s.type && (n.find("." + s.currentClass).text(s.formatFractionCurrent(l + 1)),
                n.find("." + s.totalClass).text(s.formatFractionTotal(o))),
                "progressbar" === s.type) {
                    $ = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    var $, b = (l + 1) / o, w = 1, y = 1;
                    "horizontal" === $ ? w = b : y = b,
                    n.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(t.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (n.html(s.renderCustom(t, l + 1, o)),
                t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0]),
                n[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        },
        render: function e() {
            var t = this
              , i = t.params.pagination;
            if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                var s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
                  , a = t.pagination.$el
                  , r = "";
                if ("bullets" === i.type) {
                    for (var n = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, o = 0; o < n; o += 1)
                        i.renderBullet ? r += i.renderBullet.call(t, o, i.bulletClass) : r += "<" + i.bulletElement + ' class="' + i.bulletClass + '"></' + i.bulletElement + ">";
                    a.html(r),
                    t.pagination.bullets = a.find("." + i.bulletClass)
                }
                "fraction" === i.type && (r = i.renderFraction ? i.renderFraction.call(t, i.currentClass, i.totalClass) : '<span class="' + i.currentClass + '"></span> / <span class="' + i.totalClass + '"></span>',
                a.html(r)),
                "progressbar" === i.type && (r = i.renderProgressbar ? i.renderProgressbar.call(t, i.progressbarFillClass) : '<span class="' + i.progressbarFillClass + '"></span>',
                a.html(r)),
                "custom" !== i.type && t.emit("paginationRender", t.pagination.$el[0])
            }
        },
        init: function e() {
            var t = this
              , i = t.params.pagination;
            if (i.el) {
                var s = r(i.el);
                0 !== s.length && (t.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.$el.find(i.el).length && (s = t.$el.find(i.el)),
                "bullets" === i.type && i.clickable && s.addClass(i.clickableClass),
                s.addClass(i.modifierClass + i.type),
                "bullets" === i.type && i.dynamicBullets && (s.addClass("" + i.modifierClass + i.type + "-dynamic"),
                t.pagination.dynamicBulletIndex = 0,
                i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
                "progressbar" === i.type && i.progressbarOpposite && s.addClass(i.progressbarOppositeClass),
                i.clickable && s.on("click", "." + i.bulletClass, function e(i) {
                    i.preventDefault();
                    var s = r(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (s += t.loopedSlides),
                    t.slideTo(s)
                }),
                h.extend(t.pagination, {
                    $el: s,
                    el: s[0]
                }))
            }
        },
        destroy: function e() {
            var t = this.params.pagination;
            if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var i = this.pagination.$el;
                i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", "." + t.bulletClass)
            }
        }
    }, D = {
        setTranslate: function e() {
            var t = this;
            if (t.params.scrollbar.el && t.scrollbar.el) {
                var i = t.scrollbar
                  , s = t.rtlTranslate
                  , a = t.progress
                  , r = i.dragSize
                  , n = i.trackSize
                  , o = i.$dragEl
                  , l = i.$el
                  , d = t.params.scrollbar
                  , p = r
                  , h = (n - r) * a;
                s ? (h = -h) > 0 ? (p = r - h,
                h = 0) : -h + r > n && (p = n + h) : h < 0 ? (p = r + h,
                h = 0) : h + r > n && (p = n - h),
                t.isHorizontal() ? (c.transforms3d ? o.transform("translate3d(" + h + "px, 0, 0)") : o.transform("translateX(" + h + "px)"),
                o[0].style.width = p + "px") : (c.transforms3d ? o.transform("translate3d(0px, " + h + "px, 0)") : o.transform("translateY(" + h + "px)"),
                o[0].style.height = p + "px"),
                d.hide && (clearTimeout(t.scrollbar.timeout),
                l[0].style.opacity = 1,
                t.scrollbar.timeout = setTimeout(function() {
                    l[0].style.opacity = 0,
                    l.transition(400)
                }, 1e3))
            }
        },
        setTransition: function e(t) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(t)
        },
        updateSize: function e() {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var t, i = this.scrollbar, s = i.$dragEl, a = i.$el;
                s[0].style.width = "",
                s[0].style.height = "";
                var r = this.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight
                  , n = this.size / this.virtualSize
                  , o = n * (r / this.size);
                t = "auto" === this.params.scrollbar.dragSize ? r * n : parseInt(this.params.scrollbar.dragSize, 10),
                this.isHorizontal() ? s[0].style.width = t + "px" : s[0].style.height = t + "px",
                n >= 1 ? a[0].style.display = "none" : a[0].style.display = "",
                this.params.scrollbarHide && (a[0].style.opacity = 0),
                h.extend(i, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: t
                }),
                i.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        },
        setDragPosition: function e(t) {
            var i, s, a = this.scrollbar, r = this.rtlTranslate, n = a.$el, o = a.dragSize, l = a.trackSize;
            s = Math.max(Math.min(s = ((i = this.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - o / 2) / (l - o), 1), 0),
            r && (s = 1 - s);
            var d = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * s;
            this.updateProgress(d),
            this.setTranslate(d),
            this.updateActiveIndex(),
            this.updateSlidesClasses()
        },
        onDragStart: function e(t) {
            var i = this
              , s = i.params.scrollbar
              , a = i.scrollbar
              , r = i.$wrapperEl
              , n = a.$el
              , o = a.$dragEl;
            i.scrollbar.isTouched = !0,
            t.preventDefault(),
            t.stopPropagation(),
            r.transition(100),
            o.transition(100),
            a.setDragPosition(t),
            clearTimeout(i.scrollbar.dragTimeout),
            n.transition(0),
            s.hide && n.css("opacity", 1),
            i.emit("scrollbarDragStart", t)
        },
        onDragMove: function e(t) {
            var i = this.scrollbar
              , s = this.$wrapperEl
              , a = i.$el
              , r = i.$dragEl;
            this.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            i.setDragPosition(t),
            s.transition(0),
            a.transition(0),
            r.transition(0),
            this.emit("scrollbarDragMove", t))
        },
        onDragEnd: function e(t) {
            var i = this
              , s = i.params.scrollbar
              , a = i.scrollbar.$el;
            i.scrollbar.isTouched && (i.scrollbar.isTouched = !1,
            s.hide && (clearTimeout(i.scrollbar.dragTimeout),
            i.scrollbar.dragTimeout = h.nextTick(function() {
                a.css("opacity", 0),
                a.transition(400)
            }, 1e3)),
            i.emit("scrollbarDragEnd", t),
            s.snapOnRelease && i.slideToClosest())
        },
        enableDraggable: function e() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , s = this.touchEvents
                  , a = this.touchEventsDesktop
                  , r = this.params
                  , n = t.$el[0]
                  , o = !!c.passiveListener && !!r.passiveListener && {
                    passive: !1,
                    capture: !1
                }
                  , l = !!c.passiveListener && !!r.passiveListener && {
                    passive: !0,
                    capture: !1
                };
                !c.touch && (c.pointerEvents || c.prefixedPointerEvents) ? (n.addEventListener(a.start, this.scrollbar.onDragStart, o),
                i.addEventListener(a.move, this.scrollbar.onDragMove, o),
                i.addEventListener(a.end, this.scrollbar.onDragEnd, l)) : (c.touch && (n.addEventListener(s.start, this.scrollbar.onDragStart, o),
                n.addEventListener(s.move, this.scrollbar.onDragMove, o),
                n.addEventListener(s.end, this.scrollbar.onDragEnd, l)),
                (r.simulateTouch && !f.ios && !f.android || r.simulateTouch && !c.touch && f.ios) && (n.addEventListener("mousedown", this.scrollbar.onDragStart, o),
                i.addEventListener("mousemove", this.scrollbar.onDragMove, o),
                i.addEventListener("mouseup", this.scrollbar.onDragEnd, l)))
            }
        },
        disableDraggable: function e() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , s = this.touchEvents
                  , a = this.touchEventsDesktop
                  , r = this.params
                  , n = t.$el[0]
                  , o = !!c.passiveListener && !!r.passiveListener && {
                    passive: !1,
                    capture: !1
                }
                  , l = !!c.passiveListener && !!r.passiveListener && {
                    passive: !0,
                    capture: !1
                };
                !c.touch && (c.pointerEvents || c.prefixedPointerEvents) ? (n.removeEventListener(a.start, this.scrollbar.onDragStart, o),
                i.removeEventListener(a.move, this.scrollbar.onDragMove, o),
                i.removeEventListener(a.end, this.scrollbar.onDragEnd, l)) : (c.touch && (n.removeEventListener(s.start, this.scrollbar.onDragStart, o),
                n.removeEventListener(s.move, this.scrollbar.onDragMove, o),
                n.removeEventListener(s.end, this.scrollbar.onDragEnd, l)),
                (r.simulateTouch && !f.ios && !f.android || r.simulateTouch && !c.touch && f.ios) && (n.removeEventListener("mousedown", this.scrollbar.onDragStart, o),
                i.removeEventListener("mousemove", this.scrollbar.onDragMove, o),
                i.removeEventListener("mouseup", this.scrollbar.onDragEnd, l)))
            }
        },
        init: function e() {
            if (this.params.scrollbar.el) {
                var t = this.scrollbar
                  , i = this.$el
                  , s = this.params.scrollbar
                  , a = r(s.el);
                this.params.uniqueNavElements && "string" == typeof s.el && a.length > 1 && 1 === i.find(s.el).length && (a = i.find(s.el));
                var n = a.find("." + this.params.scrollbar.dragClass);
                0 === n.length && (n = r('<div class="' + this.params.scrollbar.dragClass + '"></div>'),
                a.append(n)),
                h.extend(t, {
                    $el: a,
                    el: a[0],
                    $dragEl: n,
                    dragEl: n[0]
                }),
                s.draggable && t.enableDraggable()
            }
        },
        destroy: function e() {
            this.scrollbar.disableDraggable()
        }
    }, I = {
        setTransform: function e(t, i) {
            var s = this.rtl
              , a = r(t)
              , n = s ? -1 : 1
              , o = a.attr("data-swiper-parallax") || "0"
              , l = a.attr("data-swiper-parallax-x")
              , d = a.attr("data-swiper-parallax-y")
              , p = a.attr("data-swiper-parallax-scale")
              , h = a.attr("data-swiper-parallax-opacity");
            l || d ? (l = l || "0",
            d = d || "0") : this.isHorizontal() ? (l = o,
            d = "0") : (d = o,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i * n + "%" : l * i * n + "px",
            d = d.indexOf("%") >= 0 ? parseInt(d, 10) * i + "%" : d * i + "px",
            null != h && (a[0].style.opacity = h - (h - 1) * (1 - Math.abs(i))),
            null == p ? a.transform("translate3d(" + l + ", " + d + ", 0px)") : a.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + (p - (p - 1) * (1 - Math.abs(i))) + ")")
        },
        setTranslate: function e() {
            var t = this
              , i = t.$el
              , s = t.slides
              , a = t.progress
              , n = t.snapGrid;
            i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                t.parallax.setTransform(i, a)
            }),
            s.each(function(e, i) {
                var s = i.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(e / 2) - a * (n.length - 1)),
                s = Math.min(Math.max(s, -1), 1),
                r(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                    t.parallax.setTransform(i, s)
                })
            })
        },
        setTransition: function e(t) {
            void 0 === t && (t = this.params.speed),
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, i) {
                var s = r(i)
                  , a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                0 === t && (a = 0),
                s.transition(a)
            })
        }
    }, O = {
        getDistanceBetweenTouches: function e(t) {
            if (t.targetTouches.length < 2)
                return 1;
            var i, s = t.targetTouches[0].pageX, a = t.targetTouches[0].pageY, r = t.targetTouches[1].pageX;
            return Math.sqrt(Math.pow(r - s, 2) + Math.pow(t.targetTouches[1].pageY - a, 2))
        },
        onGestureStart: function e(t) {
            var i = this
              , s = i.params.zoom
              , a = i.zoom
              , n = a.gesture;
            if (a.fakeGestureTouched = !1,
            a.fakeGestureMoved = !1,
            !c.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                    return;
                a.fakeGestureTouched = !0,
                n.scaleStart = O.getDistanceBetweenTouches(t)
            }
            if ((!n.$slideEl || !n.$slideEl.length) && (n.$slideEl = r(t.target).closest(".swiper-slide"),
            0 === n.$slideEl.length && (n.$slideEl = i.slides.eq(i.activeIndex)),
            n.$imageEl = n.$slideEl.find("img, svg, canvas"),
            n.$imageWrapEl = n.$imageEl.parent("." + s.containerClass),
            n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio,
            0 === n.$imageWrapEl.length)) {
                n.$imageEl = void 0;
                return
            }
            n.$imageEl.transition(0),
            i.zoom.isScaling = !0
        },
        onGestureChange: function e(t) {
            var i = this
              , s = i.params.zoom
              , a = i.zoom
              , r = a.gesture;
            if (!c.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                    return;
                a.fakeGestureMoved = !0,
                r.scaleMove = O.getDistanceBetweenTouches(t)
            }
            r.$imageEl && 0 !== r.$imageEl.length && (c.gestures ? i.zoom.scale = t.scale * a.currentScale : a.scale = r.scaleMove / r.scaleStart * a.currentScale,
            a.scale > r.maxRatio && (a.scale = r.maxRatio - 1 + Math.pow(a.scale - r.maxRatio + 1, .5)),
            a.scale < s.minRatio && (a.scale = s.minRatio + 1 - Math.pow(s.minRatio - a.scale + 1, .5)),
            r.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        },
        onGestureEnd: function e(t) {
            var i = this.params.zoom
              , s = this.zoom
              , a = s.gesture;
            if (!c.gestures) {
                if (!s.fakeGestureTouched || !s.fakeGestureMoved || "touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !f.android)
                    return;
                s.fakeGestureTouched = !1,
                s.fakeGestureMoved = !1
            }
            a.$imageEl && 0 !== a.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, a.maxRatio), i.minRatio),
            a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + s.scale + ")"),
            s.currentScale = s.scale,
            s.isScaling = !1,
            1 === s.scale && (a.$slideEl = void 0))
        },
        onTouchStart: function e(t) {
            var i = this.zoom
              , s = i.gesture
              , a = i.image;
            s.$imageEl && 0 !== s.$imageEl.length && !a.isTouched && (f.android && t.preventDefault(),
            a.isTouched = !0,
            a.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
            a.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY)
        },
        onTouchMove: function e(t) {
            var i = this
              , s = i.zoom
              , a = s.gesture
              , r = s.image
              , n = s.velocity;
            if (a.$imageEl && 0 !== a.$imageEl.length && (i.allowClick = !1,
            r.isTouched && a.$slideEl)) {
                !r.isMoved && (r.width = a.$imageEl[0].offsetWidth,
                r.height = a.$imageEl[0].offsetHeight,
                r.startX = h.getTranslate(a.$imageWrapEl[0], "x") || 0,
                r.startY = h.getTranslate(a.$imageWrapEl[0], "y") || 0,
                a.slideWidth = a.$slideEl[0].offsetWidth,
                a.slideHeight = a.$slideEl[0].offsetHeight,
                a.$imageWrapEl.transition(0),
                i.rtl && (r.startX = -r.startX,
                r.startY = -r.startY));
                var o = r.width * s.scale
                  , l = r.height * s.scale;
                if (!(o < a.slideWidth) || !(l < a.slideHeight)) {
                    if (r.minX = Math.min(a.slideWidth / 2 - o / 2, 0),
                    r.maxX = -r.minX,
                    r.minY = Math.min(a.slideHeight / 2 - l / 2, 0),
                    r.maxY = -r.minY,
                    r.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    r.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    !r.isMoved && !s.isScaling && (i.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x) || !i.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y))) {
                        r.isTouched = !1;
                        return
                    }
                    t.preventDefault(),
                    t.stopPropagation(),
                    r.isMoved = !0,
                    r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX,
                    r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY,
                    r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)),
                    r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)),
                    r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)),
                    r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)),
                    n.prevPositionX || (n.prevPositionX = r.touchesCurrent.x),
                    n.prevPositionY || (n.prevPositionY = r.touchesCurrent.y),
                    n.prevTime || (n.prevTime = Date.now()),
                    n.x = (r.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2,
                    n.y = (r.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2,
                    2 > Math.abs(r.touchesCurrent.x - n.prevPositionX) && (n.x = 0),
                    2 > Math.abs(r.touchesCurrent.y - n.prevPositionY) && (n.y = 0),
                    n.prevPositionX = r.touchesCurrent.x,
                    n.prevPositionY = r.touchesCurrent.y,
                    n.prevTime = Date.now(),
                    a.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
                }
            }
        },
        onTouchEnd: function e() {
            var t = this.zoom
              , i = t.gesture
              , s = t.image
              , a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length) {
                if (!s.isTouched || !s.isMoved) {
                    s.isTouched = !1,
                    s.isMoved = !1;
                    return
                }
                s.isTouched = !1,
                s.isMoved = !1;
                var r = 300
                  , n = 300
                  , o = a.x * r
                  , l = s.currentX + o
                  , d = a.y * n
                  , p = s.currentY + d;
                0 !== a.x && (r = Math.abs((l - s.currentX) / a.x)),
                0 !== a.y && (n = Math.abs((p - s.currentY) / a.y));
                var h = Math.max(r, n);
                s.currentX = l,
                s.currentY = p;
                var c = s.width * t.scale
                  , u = s.height * t.scale;
                s.minX = Math.min(i.slideWidth / 2 - c / 2, 0),
                s.maxX = -s.minX,
                s.minY = Math.min(i.slideHeight / 2 - u / 2, 0),
                s.maxY = -s.minY,
                s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX),
                s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY),
                i.$imageWrapEl.transition(h).transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
            }
        },
        onTransitionEnd: function e() {
            var t = this.zoom
              , i = t.gesture;
            i.$slideEl && this.previousIndex !== this.activeIndex && (i.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            i.$imageWrapEl.transform("translate3d(0,0,0)"),
            i.$slideEl = void 0,
            i.$imageEl = void 0,
            i.$imageWrapEl = void 0,
            t.scale = 1,
            t.currentScale = 1)
        },
        toggle: function e(t) {
            var i = this.zoom;
            i.scale && 1 !== i.scale ? i.out() : i.in(t)
        },
        in: function e(t) {
            var i, s, a, n, o, l, d, p, h, c, u, v, f, m, g, $, b, w, y = this.zoom, _ = this.params.zoom, x = y.gesture, E = y.image;
            x.$slideEl || (x.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex),
            x.$imageEl = x.$slideEl.find("img, svg, canvas"),
            x.$imageWrapEl = x.$imageEl.parent("." + _.containerClass)),
            x.$imageEl && 0 !== x.$imageEl.length && (x.$slideEl.addClass("" + _.zoomedSlideClass),
            void 0 === E.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
            s = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = E.touchesStart.x,
            s = E.touchesStart.y),
            y.scale = x.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio,
            y.currentScale = x.$imageWrapEl.attr("data-swiper-zoom") || _.maxRatio,
            t ? (b = x.$slideEl[0].offsetWidth,
            w = x.$slideEl[0].offsetHeight,
            a = x.$slideEl.offset().left,
            n = x.$slideEl.offset().top,
            o = a + b / 2 - i,
            l = n + w / 2 - s,
            h = x.$imageEl[0].offsetWidth,
            c = x.$imageEl[0].offsetHeight,
            u = h * y.scale,
            v = c * y.scale,
            f = Math.min(b / 2 - u / 2, 0),
            m = Math.min(w / 2 - v / 2, 0),
            g = -f,
            $ = -m,
            d = o * y.scale,
            p = l * y.scale,
            d < f && (d = f),
            d > g && (d = g),
            p < m && (p = m),
            p > $ && (p = $)) : (d = 0,
            p = 0),
            x.$imageWrapEl.transition(300).transform("translate3d(" + d + "px, " + p + "px,0)"),
            x.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
        },
        out: function e() {
            var t = this.zoom
              , i = this.params.zoom
              , s = t.gesture;
            s.$slideEl || (s.$slideEl = this.clickedSlide ? r(this.clickedSlide) : this.slides.eq(this.activeIndex),
            s.$imageEl = s.$slideEl.find("img, svg, canvas"),
            s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)),
            s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1,
            t.currentScale = 1,
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            s.$slideEl = void 0)
        },
        enable: function e() {
            var t = this.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var i = "touchstart" === this.touchEvents.start && !!c.passiveListener && !!this.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                c.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i),
                this.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i),
                this.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", t.onGestureStart, i),
                this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", t.onGestureChange, i),
                this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)),
                this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, t.onTouchMove)
            }
        },
        disable: function e() {
            var t = this
              , i = t.zoom;
            if (i.enabled) {
                t.zoom.enabled = !1;
                var s = "touchstart" === t.touchEvents.start && !!c.passiveListener && !!t.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                c.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", i.onGestureStart, s),
                t.$wrapperEl.off("gesturechange", ".swiper-slide", i.onGestureChange, s),
                t.$wrapperEl.off("gestureend", ".swiper-slide", i.onGestureEnd, s)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", i.onGestureStart, s),
                t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", i.onGestureChange, s),
                t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", i.onGestureEnd, s)),
                t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, i.onTouchMove)
            }
        }
    }, A = {
        loadInSlide: function e(t, i) {
            void 0 === i && (i = !0);
            var s = this
              , a = s.params.lazy;
            if (void 0 !== t && 0 !== s.slides.length) {
                var n = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children("." + s.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : s.slides.eq(t)
                  , o = n.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
                !n.hasClass(a.elementClass) || n.hasClass(a.loadedClass) || n.hasClass(a.loadingClass) || (o = o.add(n[0])),
                0 !== o.length && o.each(function(e, t) {
                    var o = r(t);
                    o.addClass(a.loadingClass);
                    var l = o.attr("data-background")
                      , d = o.attr("data-src")
                      , p = o.attr("data-srcset")
                      , h = o.attr("data-sizes");
                    s.loadImage(o[0], d || l, p, h, !1, function() {
                        if (null != s && s && (!s || s.params) && !s.destroyed) {
                            if (l ? (o.css("background-image", 'url("' + l + '")'),
                            o.removeAttr("data-background")) : (p && (o.attr("srcset", p),
                            o.removeAttr("data-srcset")),
                            h && (o.attr("sizes", h),
                            o.removeAttr("data-sizes")),
                            d && (o.attr("src", d),
                            o.removeAttr("data-src"))),
                            o.addClass(a.loadedClass).removeClass(a.loadingClass),
                            n.find("." + a.preloaderClass).remove(),
                            s.params.loop && i) {
                                var e = n.attr("data-swiper-slide-index");
                                if (n.hasClass(s.params.slideDuplicateClass)) {
                                    var t = s.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + s.params.slideDuplicateClass + ")");
                                    s.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var r = s.$wrapperEl.children("." + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    s.lazy.loadInSlide(r.index(), !1)
                                }
                            }
                            s.emit("lazyImageReady", n[0], o[0])
                        }
                    }),
                    s.emit("lazyImageLoad", n[0], o[0])
                })
            }
        },
        load: function e() {
            var t = this
              , i = t.$wrapperEl
              , s = t.params
              , a = t.slides
              , n = t.activeIndex
              , o = t.virtual && s.virtual.enabled
              , l = s.lazy
              , d = s.slidesPerView;
            function p(e) {
                if (o) {
                    if (i.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function h(e) {
                return o ? r(e).attr("data-swiper-slide-index") : r(e).index()
            }
            if ("auto" === d && (d = 0),
            t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0),
            t.params.watchSlidesVisibility)
                i.children("." + s.slideVisibleClass).each(function(e, i) {
                    var s = o ? r(i).attr("data-swiper-slide-index") : r(i).index();
                    t.lazy.loadInSlide(s)
                });
            else if (d > 1)
                for (var c = n; c < n + d; c += 1)
                    p(c) && t.lazy.loadInSlide(c);
            else
                t.lazy.loadInSlide(n);
            if (l.loadPrevNext) {
                if (d > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
                    for (var u = l.loadPrevNextAmount, v = d, f = Math.min(n + v + Math.max(u, v), a.length), m = Math.max(n - Math.max(v, u), 0), g = n + d; g < f; g += 1)
                        p(g) && t.lazy.loadInSlide(g);
                    for (var $ = m; $ < n; $ += 1)
                        p($) && t.lazy.loadInSlide($)
                } else {
                    var b = i.children("." + s.slideNextClass);
                    b.length > 0 && t.lazy.loadInSlide(h(b));
                    var w = i.children("." + s.slidePrevClass);
                    w.length > 0 && t.lazy.loadInSlide(h(w))
                }
            }
        }
    }, G = {
        LinearSpline: function e(t, i) {
            var s, a, r, n, o, l = function(e, t) {
                for (a = -1,
                s = e.length; s - a > 1; )
                    e[r = s + a >> 1] <= t ? a = r : s = r;
                return s
            };
            return this.x = t,
            this.y = i,
            this.lastIndex = t.length - 1,
            this.interpolate = function e(t) {
                return t ? (n = (o = l(this.x, t)) - 1,
                (t - this.x[n]) * (this.y[o] - this.y[n]) / (this.x[o] - this.x[n]) + this.y[n]) : 0
            }
            ,
            this
        },
        getInterpolateFunction: function e(t) {
            var i = this;
            i.controller.spline || (i.controller.spline = i.params.loop ? new G.LinearSpline(i.slidesGrid,t.slidesGrid) : new G.LinearSpline(i.snapGrid,t.snapGrid))
        },
        setTranslate: function e(t, i) {
            var s, a, r = this, n = r.controller.control;
            function o(e) {
                var t = r.rtlTranslate ? -r.translate : r.translate;
                "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e),
                a = -r.controller.spline.interpolate(-t)),
                a && "container" !== r.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()),
                a = (t - r.minTranslate()) * s + e.minTranslate()),
                r.params.controller.inverse && (a = e.maxTranslate() - a),
                e.updateProgress(a),
                e.setTranslate(a, r),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            if (Array.isArray(n))
                for (var l = 0; l < n.length; l += 1)
                    n[l] !== i && n[l]instanceof S && o(n[l]);
            else
                n instanceof S && i !== n && o(n)
        },
        setTransition: function e(t, i) {
            var s, a = this, r = a.controller.control;
            function n(e) {
                e.setTransition(t, a),
                0 !== t && (e.transitionStart(),
                e.$wrapperEl.transitionEnd(function() {
                    r && (e.params.loop && "slide" === a.params.controller.by && e.loopFix(),
                    e.transitionEnd())
                }))
            }
            if (Array.isArray(r))
                for (s = 0; s < r.length; s += 1)
                    r[s] !== i && r[s]instanceof S && n(r[s]);
            else
                r instanceof S && i !== r && n(r)
        }
    }, H = {
        makeElFocusable: function e(t) {
            return t.attr("tabIndex", "0"),
            t
        },
        addElRole: function e(t, i) {
            return t.attr("role", i),
            t
        },
        addElLabel: function e(t, i) {
            return t.attr("aria-label", i),
            t
        },
        disableEl: function e(t) {
            return t.attr("aria-disabled", !0),
            t
        },
        enableEl: function e(t) {
            return t.attr("aria-disabled", !1),
            t
        },
        onEnterKey: function e(t) {
            var i = this.params.a11y;
            if (13 === t.keyCode) {
                var s = r(t.target);
                this.navigation && this.navigation.$nextEl && s.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(),
                this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)),
                this.navigation && this.navigation.$prevEl && s.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(),
                this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)),
                this.pagination && s.is("." + this.params.pagination.bulletClass) && s[0].click()
            }
        },
        notify: function e(t) {
            var i = this.a11y.liveRegion;
            0 !== i.length && (i.html(""),
            i.html(t))
        },
        updateNavigation: function e() {
            if (!this.params.loop) {
                var t = this.navigation
                  , i = t.$nextEl
                  , s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? this.a11y.disableEl(s) : this.a11y.enableEl(s)),
                i && i.length > 0 && (this.isEnd ? this.a11y.disableEl(i) : this.a11y.enableEl(i))
            }
        },
        updatePagination: function e() {
            var t = this
              , i = t.params.a11y;
            t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(e, s) {
                var a = r(s);
                t.a11y.makeElFocusable(a),
                t.a11y.addElRole(a, "button"),
                t.a11y.addElLabel(a, i.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        },
        init: function e() {
            this.$el.append(this.a11y.liveRegion);
            var t, i, s = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (i = this.navigation.$prevEl),
            t && (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, s.nextSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
            i && (this.a11y.makeElFocusable(i),
            this.a11y.addElRole(i, "button"),
            this.a11y.addElLabel(i, s.prevSlideMessage),
            i.on("keydown", this.a11y.onEnterKey)),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        },
        destroy: function e() {
            var t, i;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
            this.navigation && this.navigation.$nextEl && (t = this.navigation.$nextEl),
            this.navigation && this.navigation.$prevEl && (i = this.navigation.$prevEl),
            t && t.off("keydown", this.a11y.onEnterKey),
            i && i.off("keydown", this.a11y.onEnterKey),
            this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, N = {
        init: function e() {
            var t = this;
            if (t.params.history) {
                if (!s.history || !s.history.pushState) {
                    t.params.history.enabled = !1,
                    t.params.hashNavigation.enabled = !0;
                    return
                }
                var i = t.history;
                i.initialized = !0,
                i.paths = N.getPathValues(),
                (i.paths.key || i.paths.value) && (i.scrollToSlide(0, i.paths.value, t.params.runCallbacksOnInit),
                t.params.history.replaceState || s.addEventListener("popstate", t.history.setHistoryPopState))
            }
        },
        destroy: function e() {
            this.params.history.replaceState || s.removeEventListener("popstate", this.history.setHistoryPopState)
        },
        setHistoryPopState: function e() {
            var t = this;
            t.history.paths = N.getPathValues(),
            t.history.scrollToSlide(t.params.speed, t.history.paths.value, !1)
        },
        getPathValues: function e() {
            var t, i = s.location.pathname.slice(1).split("/").filter(function(e) {
                return "" !== e
            }), a = i.length;
            return {
                key: i[a - 2],
                value: i[a - 1]
            }
        },
        setHistory: function e(t, i) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(i)
                  , r = N.slugify(a.attr("data-history"));
                s.location.pathname.includes(t) || (r = t + "/" + r);
                var n = s.history.state;
                (!n || n.value !== r) && (this.params.history.replaceState ? s.history.replaceState({
                    value: r
                }, null, r) : s.history.pushState({
                    value: r
                }, null, r))
            }
        },
        slugify: function e(t) {
            return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function e(t, i, s) {
            if (i)
                for (var a = 0, r = this.slides.length; a < r; a += 1) {
                    var n = this.slides.eq(a);
                    if (N.slugify(n.attr("data-history")) === i && !n.hasClass(this.params.slideDuplicateClass)) {
                        var o = n.index();
                        this.slideTo(o, t, s)
                    }
                }
            else
                this.slideTo(0, t, s)
        }
    }, B = {
        onHashCange: function e() {
            var t = i.location.hash.replace("#", "");
            t !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index())
        },
        setHash: function e() {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) {
                if (this.params.hashNavigation.replaceState && s.history && s.history.replaceState)
                    s.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash"));
                else {
                    var t = this.slides.eq(this.activeIndex)
                      , a = t.attr("data-hash") || t.attr("data-history");
                    i.location.hash = a || ""
                }
            }
        },
        init: function e() {
            var t = this;
            if (t.params.hashNavigation.enabled && (!t.params.history || !t.params.history.enabled)) {
                t.hashNavigation.initialized = !0;
                var a = i.location.hash.replace("#", "");
                if (a)
                    for (var n = 0, o = t.slides.length; n < o; n += 1) {
                        var l = t.slides.eq(n);
                        if ((l.attr("data-hash") || l.attr("data-history")) === a && !l.hasClass(t.params.slideDuplicateClass)) {
                            var d = l.index();
                            t.slideTo(d, 0, t.params.runCallbacksOnInit, !0)
                        }
                    }
                t.params.hashNavigation.watchState && r(s).on("hashchange", t.hashNavigation.onHashCange)
            }
        },
        destroy: function e() {
            this.params.hashNavigation.watchState && r(s).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, X = {
        run: function e() {
            var t = this
              , i = t.slides.eq(t.activeIndex)
              , s = t.params.autoplay.delay;
            i.attr("data-swiper-autoplay") && (s = i.attr("data-swiper-autoplay") || t.params.autoplay.delay),
            t.autoplay.timeout = h.nextTick(function() {
                t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(),
                t.slidePrev(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.params.loop ? (t.loopFix(),
                t.slideNext(t.params.speed, !0, !0),
                t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0),
                t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0),
                t.emit("autoplay"))
            }, s)
        },
        start: function e() {
            var t = this;
            return void 0 === t.autoplay.timeout && !t.autoplay.running && (t.autoplay.running = !0,
            t.emit("autoplayStart"),
            t.autoplay.run(),
            !0)
        },
        stop: function e() {
            var t = this;
            return !!t.autoplay.running && void 0 !== t.autoplay.timeout && (t.autoplay.timeout && (clearTimeout(t.autoplay.timeout),
            t.autoplay.timeout = void 0),
            t.autoplay.running = !1,
            t.emit("autoplayStop"),
            !0)
        },
        pause: function e(t) {
            var i = this;
            i.autoplay.running && !i.autoplay.paused && (i.autoplay.timeout && clearTimeout(i.autoplay.timeout),
            i.autoplay.paused = !0,
            0 !== t && i.params.autoplay.waitForTransition ? (i.$wrapperEl[0].addEventListener("transitionend", i.autoplay.onTransitionEnd),
            i.$wrapperEl[0].addEventListener("webkitTransitionEnd", i.autoplay.onTransitionEnd)) : (i.autoplay.paused = !1,
            i.autoplay.run()))
        }
    }, Y = {
        setTranslate: function e() {
            for (var t = this.slides, i = 0; i < t.length; i += 1) {
                var s = this.slides.eq(i)
                  , a = -s[0].swiperSlideOffset;
                this.params.virtualTranslate || (a -= this.translate);
                var r = 0;
                this.isHorizontal() || (r = a,
                a = 0);
                var n = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                s.css({
                    opacity: n
                }).transform("translate3d(" + a + "px, " + r + "px, 0px)")
            }
        },
        setTransition: function e(t) {
            var i = this
              , s = i.slides
              , a = i.$wrapperEl;
            if (s.transition(t),
            i.params.virtualTranslate && 0 !== t) {
                var r = !1;
                s.transitionEnd(function() {
                    if (!r && i && !i.destroyed) {
                        r = !0,
                        i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1)
                            a.trigger(e[t])
                    }
                })
            }
        }
    }, V = {
        setTranslate: function e() {
            var t, i = this.$el, s = this.$wrapperEl, a = this.slides, n = this.width, o = this.height, l = this.rtlTranslate, d = this.size, p = this.params.cubeEffect, h = this.isHorizontal(), c = this.virtual && this.params.virtual.enabled, u = 0;
            p.shadow && (h ? (0 === (t = s.find(".swiper-cube-shadow")).length && (t = r('<div class="swiper-cube-shadow"></div>'),
            s.append(t)),
            t.css({
                height: n + "px"
            })) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = r('<div class="swiper-cube-shadow"></div>'),
            i.append(t)));
            for (var v = 0; v < a.length; v += 1) {
                var f = a.eq(v)
                  , m = v;
                c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                var g = 90 * m
                  , $ = Math.floor(g / 360);
                l && ($ = Math.floor(-(g = -g) / 360));
                var b = Math.max(Math.min(f[0].progress, 1), -1)
                  , w = 0
                  , y = 0
                  , x = 0;
                m % 4 == 0 ? (w = -(4 * $) * d,
                x = 0) : (m - 1) % 4 == 0 ? (w = 0,
                x = -(4 * $) * d) : (m - 2) % 4 == 0 ? (w = d + 4 * $ * d,
                x = d) : (m - 3) % 4 == 0 && (w = -d,
                x = 3 * d + 4 * d * $),
                l && (w = -w),
                h || (y = w,
                w = 0);
                var E = "rotateX(" + (h ? 0 : -g) + "deg) rotateY(" + (h ? g : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && b > -1 && (u = 90 * m + 90 * b,
                l && (u = -(90 * m) - 90 * b)),
                f.transform(E),
                p.slideShadows) {
                    var T = h ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")
                      , S = h ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = r('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'),
                    f.append(T)),
                    0 === S.length && (S = r('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'),
                    f.append(S)),
                    T.length && (T[0].style.opacity = Math.max(-b, 0)),
                    S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (s.css({
                "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
                "transform-origin": "50% 50% -" + d / 2 + "px"
            }),
            p.shadow) {
                if (h)
                    t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                else {
                    var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90)
                      , z = p.shadowScale
                      , k = p.shadowScale / (1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2))
                      , P = p.shadowOffset;
                    t.transform("scale3d(" + z + ", 1, " + k + ") translate3d(0px, " + (o / 2 + P) + "px, " + -o / 2 / k + "px) rotateX(-90deg)")
                }
            }
            var L = _.isSafari || _.isUiWebView ? -d / 2 : 0;
            s.transform("translate3d(0px,0," + L + "px) rotateX(" + (this.isHorizontal() ? 0 : u) + "deg) rotateY(" + (this.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function e(t) {
            var i = this.$el;
            this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
            this.params.cubeEffect.shadow && !this.isHorizontal() && i.find(".swiper-cube-shadow").transition(t)
        }
    }, R = {
        setTranslate: function e() {
            for (var t = this.slides, i = this.rtlTranslate, s = 0; s < t.length; s += 1) {
                var a = t.eq(s)
                  , n = a[0].progress;
                this.params.flipEffect.limitRotation && (n = Math.max(Math.min(a[0].progress, 1), -1));
                var o = a[0].swiperSlideOffset
                  , l = -180 * n
                  , d = 0
                  , p = -o
                  , h = 0;
                if (this.isHorizontal() ? i && (l = -l) : (h = p,
                p = 0,
                d = -l,
                l = 0),
                a[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                this.params.flipEffect.slideShadows) {
                    var c = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                      , u = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                    0 === c.length && (c = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'),
                    a.append(c)),
                    0 === u.length && (u = r('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'),
                    a.append(u)),
                    c.length && (c[0].style.opacity = Math.max(-n, 0)),
                    u.length && (u[0].style.opacity = Math.max(n, 0))
                }
                a.transform("translate3d(" + p + "px, " + h + "px, 0px) rotateX(" + d + "deg) rotateY(" + l + "deg)")
            }
        },
        setTransition: function e(t) {
            var i = this
              , s = i.slides
              , a = i.activeIndex
              , r = i.$wrapperEl;
            if (s.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
            i.params.virtualTranslate && 0 !== t) {
                var n = !1;
                s.eq(a).transitionEnd(function e() {
                    if (!n && i && !i.destroyed) {
                        n = !0,
                        i.animating = !1;
                        for (var t = ["webkitTransitionEnd", "transitionend"], s = 0; s < t.length; s += 1)
                            r.trigger(t[s])
                    }
                })
            }
        }
    }, W = {
        setTranslate: function e() {
            for (var t = this.width, i = this.height, s = this.slides, a = this.$wrapperEl, n = this.slidesSizesGrid, o = this.params.coverflowEffect, l = this.isHorizontal(), d = this.translate, p = l ? -d + t / 2 : -d + i / 2, h = l ? o.rotate : -o.rotate, u = o.depth, v = 0, f = s.length; v < f; v += 1) {
                var m = s.eq(v)
                  , g = n[v]
                  , $ = (p - m[0].swiperSlideOffset - g / 2) / g * o.modifier
                  , b = l ? h * $ : 0
                  , w = l ? 0 : h * $
                  , y = -u * Math.abs($)
                  , _ = l ? 0 : o.stretch * $
                  , x = l ? o.stretch * $ : 0;
                .001 > Math.abs(x) && (x = 0),
                .001 > Math.abs(_) && (_ = 0),
                .001 > Math.abs(y) && (y = 0),
                .001 > Math.abs(b) && (b = 0),
                .001 > Math.abs(w) && (w = 0);
                var E = "translate3d(" + x + "px," + _ + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
                if (m.transform(E),
                m[0].style.zIndex = -Math.abs(Math.round($)) + 1,
                o.slideShadows) {
                    var T = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top")
                      , S = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = r('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'),
                    m.append(T)),
                    0 === S.length && (S = r('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'),
                    m.append(S)),
                    T.length && (T[0].style.opacity = $ > 0 ? $ : 0),
                    S.length && (S[0].style.opacity = -$ > 0 ? -$ : 0)
                }
            }
            (c.pointerEvents || c.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = p + "px 50%")
        },
        setTransition: function e(t) {
            this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
        }
    }, F = [{
        name: "device",
        proto: {
            device: f
        },
        static: {
            device: f
        }
    }, {
        name: "support",
        proto: {
            support: c
        },
        static: {
            support: c
        }
    }, {
        name: "browser",
        proto: {
            browser: _
        },
        static: {
            browser: _
        }
    }, {
        name: "resize",
        create: function e() {
            var t = this;
            h.extend(t, {
                resize: {
                    resizeHandler: function e() {
                        t && !t.destroyed && t.initialized && (t.emit("beforeResize"),
                        t.emit("resize"))
                    },
                    orientationChangeHandler: function e() {
                        t && !t.destroyed && t.initialized && t.emit("orientationchange")
                    }
                }
            })
        },
        on: {
            init: function e() {
                s.addEventListener("resize", this.resize.resizeHandler),
                s.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            },
            destroy: function e() {
                s.removeEventListener("resize", this.resize.resizeHandler),
                s.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }, {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1
        },
        create: function e() {
            h.extend(this, {
                observer: {
                    init: C.init.bind(this),
                    attach: C.attach.bind(this),
                    destroy: C.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init: function e() {
                this.observer.init()
            },
            destroy: function e() {
                this.observer.destroy()
            }
        }
    }, {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null
            }
        },
        create: function e() {
            h.extend(this, {
                virtual: {
                    update: z.update.bind(this),
                    appendSlide: z.appendSlide.bind(this),
                    prependSlide: z.prependSlide.bind(this),
                    renderSlide: z.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit: function e() {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var t = {
                        watchSlidesProgress: !0
                    };
                    h.extend(this.params, t),
                    h.extend(this.originalParams, t),
                    this.virtual.update()
                }
            },
            setTranslate: function e() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }, {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create: function e() {
            h.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: k.enable.bind(this),
                    disable: k.disable.bind(this),
                    handle: k.handle.bind(this)
                }
            })
        },
        on: {
            init: function e() {
                this.params.keyboard.enabled && this.keyboard.enable()
            },
            destroy: function e() {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    }, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create: function e() {
            h.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: P.enable.bind(this),
                    disable: P.disable.bind(this),
                    handle: P.handle.bind(this),
                    handleMouseEnter: P.handleMouseEnter.bind(this),
                    handleMouseLeave: P.handleMouseLeave.bind(this),
                    lastScrollTime: h.now()
                }
            })
        },
        on: {
            init: function e() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy: function e() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create: function e() {
            h.extend(this, {
                navigation: {
                    init: L.init.bind(this),
                    update: L.update.bind(this),
                    destroy: L.destroy.bind(this)
                }
            })
        },
        on: {
            init: function e() {
                this.navigation.init(),
                this.navigation.update()
            },
            toEdge: function e() {
                this.navigation.update()
            },
            fromEdge: function e() {
                this.navigation.update()
            },
            destroy: function e() {
                this.navigation.destroy()
            },
            click: function e(t) {
                var i = this.navigation
                  , s = i.$nextEl
                  , a = i.$prevEl;
                this.params.navigation.hideOnClick && !r(t.target).is(a) && !r(t.target).is(s) && (s && s.toggleClass(this.params.navigation.hiddenClass),
                a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(e) {
                    return e
                },
                formatFractionTotal: function(e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function e() {
            h.extend(this, {
                pagination: {
                    init: M.init.bind(this),
                    render: M.render.bind(this),
                    update: M.update.bind(this),
                    destroy: M.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init: function e() {
                this.pagination.init(),
                this.pagination.render(),
                this.pagination.update()
            },
            activeIndexChange: function e() {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            },
            snapIndexChange: function e() {
                this.params.loop || this.pagination.update()
            },
            slidesLengthChange: function e() {
                this.params.loop && (this.pagination.render(),
                this.pagination.update())
            },
            snapGridLengthChange: function e() {
                this.params.loop || (this.pagination.render(),
                this.pagination.update())
            },
            destroy: function e() {
                this.pagination.destroy()
            },
            click: function e(t) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !r(t.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create: function e() {
            h.extend(this, {
                scrollbar: {
                    init: D.init.bind(this),
                    destroy: D.destroy.bind(this),
                    updateSize: D.updateSize.bind(this),
                    setTranslate: D.setTranslate.bind(this),
                    setTransition: D.setTransition.bind(this),
                    enableDraggable: D.enableDraggable.bind(this),
                    disableDraggable: D.disableDraggable.bind(this),
                    setDragPosition: D.setDragPosition.bind(this),
                    onDragStart: D.onDragStart.bind(this),
                    onDragMove: D.onDragMove.bind(this),
                    onDragEnd: D.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function e() {
                this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate()
            },
            update: function e() {
                this.scrollbar.updateSize()
            },
            resize: function e() {
                this.scrollbar.updateSize()
            },
            observerUpdate: function e() {
                this.scrollbar.updateSize()
            },
            setTranslate: function e() {
                this.scrollbar.setTranslate()
            },
            setTransition: function e(t) {
                this.scrollbar.setTransition(t)
            },
            destroy: function e() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create: function e() {
            h.extend(this, {
                parallax: {
                    setTransform: I.setTransform.bind(this),
                    setTranslate: I.setTranslate.bind(this),
                    setTransition: I.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                var t = this;
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0)
            },
            init: function e() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTranslate: function e() {
                this.params.parallax && this.parallax.setTranslate()
            },
            setTransition: function e(t) {
                this.params.parallax && this.parallax.setTransition(t)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create: function e() {
            var t = this
              , i = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                }
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                i[e] = O[e].bind(t)
            }),
            h.extend(t, {
                zoom: i
            })
        },
        on: {
            init: function e() {
                this.params.zoom.enabled && this.zoom.enable()
            },
            destroy: function e() {
                this.zoom.disable()
            },
            touchStart: function e(t) {
                this.zoom.enabled && this.zoom.onTouchStart(t)
            },
            touchEnd: function e(t) {
                this.zoom.enabled && this.zoom.onTouchEnd(t)
            },
            doubleTap: function e(t) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(t)
            },
            transitionEnd: function e() {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function e() {
            h.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: A.load.bind(this),
                    loadInSlide: A.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                var t = this;
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
            },
            init: function e() {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            },
            scroll: function e() {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            },
            resize: function e() {
                this.params.lazy.enabled && this.lazy.load()
            },
            scrollbarDragMove: function e() {
                this.params.lazy.enabled && this.lazy.load()
            },
            transitionStart: function e() {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            },
            transitionEnd: function e() {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create: function e() {
            h.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: G.getInterpolateFunction.bind(this),
                    setTranslate: G.setTranslate.bind(this),
                    setTransition: G.setTransition.bind(this)
                }
            })
        },
        on: {
            update: function e() {
                var t = this;
                t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                delete t.controller.spline)
            },
            resize: function e() {
                var t = this;
                t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                delete t.controller.spline)
            },
            observerUpdate: function e() {
                var t = this;
                t.controller.control && t.controller.spline && (t.controller.spline = void 0,
                delete t.controller.spline)
            },
            setTranslate: function e(t, i) {
                this.controller.control && this.controller.setTranslate(t, i)
            },
            setTransition: function e(t, i) {
                this.controller.control && this.controller.setTransition(t, i)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function e() {
            var t = this;
            h.extend(t, {
                a11y: {
                    liveRegion: r('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                }
            }),
            Object.keys(H).forEach(function(e) {
                t.a11y[e] = H[e].bind(t)
            })
        },
        on: {
            init: function e() {
                this.params.a11y.enabled && (this.a11y.init(),
                this.a11y.updateNavigation())
            },
            toEdge: function e() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge: function e() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate: function e() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy: function e() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create: function e() {
            h.extend(this, {
                history: {
                    init: N.init.bind(this),
                    setHistory: N.setHistory.bind(this),
                    setHistoryPopState: N.setHistoryPopState.bind(this),
                    scrollToSlide: N.scrollToSlide.bind(this),
                    destroy: N.destroy.bind(this)
                }
            })
        },
        on: {
            init: function e() {
                this.params.history.enabled && this.history.init()
            },
            destroy: function e() {
                this.params.history.enabled && this.history.destroy()
            },
            transitionEnd: function e() {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create: function e() {
            h.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: B.init.bind(this),
                    destroy: B.destroy.bind(this),
                    setHash: B.setHash.bind(this),
                    onHashCange: B.onHashCange.bind(this)
                }
            })
        },
        on: {
            init: function e() {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            },
            destroy: function e() {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            },
            transitionEnd: function e() {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create: function e() {
            var t = this;
            h.extend(t, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: X.run.bind(t),
                    start: X.start.bind(t),
                    stop: X.stop.bind(t),
                    pause: X.pause.bind(t),
                    onTransitionEnd: function e(i) {
                        t && !t.destroyed && t.$wrapperEl && i.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                        t.autoplay.paused = !1,
                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init: function e() {
                this.params.autoplay.enabled && this.autoplay.start()
            },
            beforeTransitionStart: function e(t, i) {
                this.autoplay.running && (i || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(t) : this.autoplay.stop())
            },
            sliderFirstMove: function e() {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            },
            destroy: function e() {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create: function e() {
            h.extend(this, {
                fadeEffect: {
                    setTranslate: Y.setTranslate.bind(this),
                    setTransition: Y.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    h.extend(this.params, t),
                    h.extend(this.originalParams, t)
                }
            },
            setTranslate: function e() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition: function e(t) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create: function e() {
            h.extend(this, {
                cubeEffect: {
                    setTranslate: V.setTranslate.bind(this),
                    setTransition: V.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    };
                    h.extend(this.params, t),
                    h.extend(this.originalParams, t)
                }
            },
            setTranslate: function e() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition: function e(t) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create: function e() {
            h.extend(this, {
                flipEffect: {
                    setTranslate: R.setTranslate.bind(this),
                    setTransition: R.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"),
                    this.classNames.push(this.params.containerModifierClass + "3d");
                    var t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    };
                    h.extend(this.params, t),
                    h.extend(this.originalParams, t)
                }
            },
            setTranslate: function e() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition: function e(t) {
                "flip" === this.params.effect && this.flipEffect.setTransition(t)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create: function e() {
            h.extend(this, {
                coverflowEffect: {
                    setTranslate: W.setTranslate.bind(this),
                    setTransition: W.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit: function e() {
                var t = this;
                "coverflow" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "coverflow"),
                t.classNames.push(t.params.containerModifierClass + "3d"),
                t.params.watchSlidesProgress = !0,
                t.originalParams.watchSlidesProgress = !0)
            },
            setTranslate: function e() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition: function e(t) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(t)
            }
        }
    }];
    return void 0 === S.use && (S.use = S.Class.use,
    S.installModule = S.Class.installModule),
    S.use(F),
    S
});

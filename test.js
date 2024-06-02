if (!window.CFIConfig) {
    "object" !== typeof JSON && (JSON = {});
    (function() {
        function m(a) {
            return 10 > a ? "0" + a : a
        }
        function r(a) {
            s.lastIndex = 0;
            return s.test(a) ? '"' + a.replace(s, function(a) {
                var c = u[a];
                return "string" === typeof c ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }
        function p(a, l) {
            var c, d, h, q, g = e, f, b = l[a];
            b && "object" === typeof b && "function" === typeof b.toJSON && (b = b.toJSON(a));
            "function" === typeof k && (b = k.call(l, a, b));
            switch (typeof b) {
            case "string":
                return r(b);
            case "number":
                return isFinite(b) ? String(b) : "null";
            case "boolean":
            case "null":
                return String(b);
            case "object":
                if (!b)
                    return "null";
                e += n;
                f = [];
                if ("[object Array]" === Object.prototype.toString.apply(b)) {
                    q = b.length;
                    for (c = 0; c < q; c += 1)
                        f[c] = p(c, b) || "null";
                    h = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]" : "[" + f.join(",") + "]";
                    e = g;
                    return h
                }
                if (k && "object" === typeof k)
                    for (q = k.length,
                    c = 0; c < q; c += 1)
                        "string" === typeof k[c] && (d = k[c],
                        (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h));
                else
                    for (d in b)
                        Object.prototype.hasOwnProperty.call(b, d) && (h = p(d, b)) && f.push(r(d) + (e ? ": " : ":") + h);
                h = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}" : "{" + f.join(",") + "}";
                e = g;
                return h
            }
        }
        "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + m(this.getUTCMonth() + 1) + "-" + m(this.getUTCDate()) + "T" + m(this.getUTCHours()) + ":" + m(this.getUTCMinutes()) + ":" + m(this.getUTCSeconds()) + "Z" : null
        }
        ,
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
        );
        var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, s = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, e, n, u = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, k;
        "function" !== typeof JSON.stringify && (JSON.stringify = function(a, l, c) {
            var d;
            n = e = "";
            if ("number" === typeof c)
                for (d = 0; d < c; d += 1)
                    n += " ";
            else
                "string" === typeof c && (n = c);
            if ((k = l) && "function" !== typeof l && ("object" !== typeof l || "number" !== typeof l.length))
                throw Error("JSON.stringify");
            return p("", {
                "": a
            })
        }
        );
        "function" !== typeof JSON.parse && (JSON.parse = function(a, e) {
            function c(a, d) {
                var g, f, b = a[d];
                if (b && "object" === typeof b)
                    for (g in b)
                        Object.prototype.hasOwnProperty.call(b, g) && (f = c(b, g),
                        void 0 !== f ? b[g] = f : delete b[g]);
                return e.call(a, d, b)
            }
            var d;
            a = String(a);
            t.lastIndex = 0;
            t.test(a) && (a = a.replace(t, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return d = eval("(" + a + ")"),
                "function" === typeof e ? c({
                    "": d
                }, "") : d;
            throw new SyntaxError("JSON.parse");
        }
        )
    }
    )();
    "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
    );
    "function" != typeof document.getElementsByClassName && (document.getElementsByClassName = function() {
        var e = document.getElementsByTagName("*")
          , t = new Array;
        for (i = 0; i < e.length; i++)
            if (e[i].getAttribute("class"))
                for (ecl = e[i].getAttribute("class").split(" "),
                j = 0; j < ecl.length; j++)
                    ecl[j].toLowerCase() == arguments[0].toLowerCase() && t.push(e[i]);
            else if (e[i].className)
                for (ecl = e[i].className.split(" "),
                j = 0; j < ecl.length; j++)
                    ecl[j].toLowerCase() == arguments[0].toLowerCase() && t.push(e[i]);
        return t
    }
    );
    var CFIScriptInit = false;
    if (window.CFICustomVariables === undefined)
        window.CFICustomVariables = [];
    var CFIConfig = {
        debug: 0
    };
    var CFIScript = {
        IntervalId: null,
        Enabled: true,
        WaitTime: 0,
        Debug: false,
        TimeEnterPage: null,
        ClickTracker: {
            stateKey: '__cfi_click_state__',
            url: '',
            startX: 0,
            startY: 0,
            totalMoves: 0,
            startDate: null,
            elapsed: null
        },
        SessionData: {
            GUID: 0,
            EmailPhone: '',
            HttpReferer: null,
            PageViews: 0,
            CurrentRuleId: null,
            CurrentPType: 0,
            Activity: 'Browse',
            SessionStart: new Date().getTime(),
            UnloadDate: null,
            WindowCount: 0,
            LastPageStayTime: null,
            AcceptOrDecline: {},
            FirstBrowsePage: null,
            FirstBrowseTime: 0,
            FinallyLeaveTime: 0,
            FinallyBrowsePage: null,
            SiteReferrer: null,
            LastPopUpPage: null,
            TimeSpentonSite: 0,
            GoogleAnalyticsValue: null,
            Dimension: null,
            CookiePath: '/',
            AdditionalAttributes: {},
            ClickTracker: '',
            PageIndex: 0
        },
        PersistentData: {
            LastAccept: null,
            LastDecline: null
        },
        init: function() {
            CFIScript.loadSessionData();
            if ((CFIScript.SessionData.GUID == 0 || CFIScript.SessionData.GUID == null || CFIScript.SessionData.GUID == undefined) || (CFIScript.SessionData.PageViews == 0 && CFIScript.SessionData.FirstBrowsePage == null)) {
                CFIScript.SessionData.FirstBrowsePage = null;
                CFIScript.SessionData.LastPopUpPage = null;
                CFIScript.SessionData.FirstBrowsePage = null;
                CFIScript.SessionData.FinallyBrowsePage = null;
                CFIScript.SessionData.SiteReferrer = null;
                CFIScript.SessionData.GoogleAnalyticsValue = null;
                CFIScript.SessionData.FinallyLeaveTime = 0;
                CFIScript.SessionData.FirstBrowseTime = 0;
                CFIScript.saveSessionData();
                CFIScript.SessionData.GUID = CFIScript.createNewGuid();
            }
            CFIScript.SessionData.PageViews++;
            CFIScript.TimeEnterPage = new Date().getTime();
            if (CFIScript.SessionData.HttpReferer == null || CFIScript.SessionData.HttpReferer == '') {
                CFIScript.SessionData.HttpReferer = document.referrer == undefined ? '' : document.referrer;
            }
            if (CFIScript.SessionData.FirstBrowsePage == null || (CFIScript.SessionData.FinallyLeaveTime > 0 && CFIScript.SessionData.FirstBrowseTime > 0 && CFIScript.SessionData.FinallyLeaveTime > (CFIScript.SessionData.FirstBrowseTime + 30 * 60 * 1000))) {
                CFIScript.SessionData.FirstBrowseTime = FirstBrowseTime = (new Date).getTime();
                CFIScript.SessionData.FirstBrowsePage = window.location.href + '';
                CFIScript.SessionData.SiteReferrer = (document.referrer == undefined ? "" : document.referrer);
            }
            CFIScript.SessionData.FinallyBrowsePage = window.location.href + '';
            CFIScript.SessionData.FinallyLeaveTime = (new Date).getTime();
            if (CFIScript.SessionData.UnloadDate != null) {
                CFIScript.SessionData.UnloadDate = null;
            }
            CFIScript.SessionData.WindowCount++;
            CFIScript.saveSessionData();
            if (!(navigator.userAgent.indexOf('Safari') > -1 && !navigator.userAgent.indexOf('Chrome') > -1)) {
                if (window.addEventListener)
                    window.addEventListener('unload', CFIScript.pageLeave, false);
                else
                    window.attachEvent('onunload', CFIScript.pageLeave, false);
            }
            if (window.addEventListener)
                window.addEventListener('beforeunload', CFIScript.beforeUnload, false);
            else
                window.attachEvent('onbeforeunload', CFIScript.beforeUnload, false);
            if (CFIScript.detectMobile()) {
                window.addEventListener('pagehide', CFIScript.beforeUnload, false);
            }
            if (CFIScript.SessionData.CurrentPType == '1') {
                CFIScript.postMobileData('init', 'mobile_open');
            }
            CFIScript.initGlobalRules();
            if (typeof (window.onpopstate) === 'function') {
                window.onpopstate = function(e) {
                    if (CFIScript.SessionData.CurrentPType == '1') {
                        CFIScript.beforeUnload();
                    } else {
                        CFIScript.pageLeave();
                    }
                    CFIScript.singlePageInit(document.location);
                    CFIScript.checkRule();
                }
            }
            if (typeof (window.history) === 'object') {
                var history = window.history
                  , saved = {}
                  , functions = ['pushState', 'replaceState', 'back', 'forward'];
                for (var func in functions) {
                    var funcName = functions[func];
                    if (typeof (history[funcName]) === 'function') {
                        saved[funcName] = history[funcName];
                        history[funcName] = (function(f) {
                            return function() {
                                if (CFIScript.SessionData.CurrentPType == '1') {
                                    CFIScript.beforeUnload();
                                } else {
                                    CFIScript.pageLeave();
                                }
                                CFIScript.singlePageInit(arguments.length > 2 ? arguments[2] : '');
                                CFIScript.checkRule();
                                saved[f].apply(this, arguments);
                            }
                        }
                        )(funcName);
                    }
                }
            }
            window.CFIScriptInit = true;
            CFIScript.updateCustomVariables();
        },
        detectMobile: function() {
            return /.*Mobile.*/.test(navigator.userAgent);
        },
        singlePageInit: function(location) {
            CFIScript.SessionData.PageViews++;
            CFIScript.TimeEnterPage = new Date().getTime();
            if (CFIScript.SessionData.HttpReferer == null || CFIScript.SessionData.HttpReferer == '') {
                CFIScript.SessionData.HttpReferer = document.referrer == undefined ? '' : document.referrer;
            }
            CFIScript.SessionData.FinallyBrowsePage = location + '';
            CFIScript.SessionData.FinallyLeaveTime = (new Date).getTime();
            if (CFIScript.SessionData.UnloadDate != null) {
                CFIScript.SessionData.UnloadDate = null;
            }
            CFIScript.SessionData.WindowCount++;
            CFIScript.saveSessionData();
            if (CFIScript.SessionData.CurrentPType == '1') {
                CFIScript.postMobileData('init', 'mobile_open');
            }
            window.CFIScriptInit = true;
            CFIScript.updateCustomVariables();
        },
        initGlobalRules: function() {
            var ruleId = 0;
            var clickTrackerEnabled = false;
        },
        beforeUnload: function(evt) {
            if (navigator.userAgent.indexOf('Safari') > -1 && !navigator.userAgent.indexOf('Chrome') > -1) {
                CFIScript.pageLeave();
            }
            CFIScript.postMobileData('unload', 'mobile_closed');
        },
        postMobileData: function(_ot, _type) {
            if (CFIScript.SessionData.CurrentRuleId != null && CFIScript.getCookie('CFIWebMonPhoneOREmail-' + CFIScript.SessionData.CurrentRuleId) != null) {
                if (CFIScript.SessionData.CurrentRuleId != null && CFIScript.SessionData.CurrentRuleId != '' && CFIScript.SessionData.AcceptOrDecline[CFIScript.SessionData.CurrentRuleId] === 'A') {
                    var _tourl = encodeURIComponent(CFIScript.getRedirectURL(CFIScript.SessionData.CurrentRuleId));
                    var _rid = CFIScript.SessionData.CurrentRuleId;
                    var _guid = CFIScript.SessionData.GUID;
                    var _ep = CFIScript.getCookie('CFIWebMonPhoneOREmail-' + CFIScript.SessionData.CurrentRuleId);
                    var _navigator = navigator.userAgent.toLowerCase();
                    var jsUrl = 'https://wmon.cfigroup.com' + '/source/ActionDetailCount.ashx?type=' + _type + '&ot=' + _ot;
                    jsUrl += '&tourl=' + _tourl;
                    jsUrl += '&rid=' + _rid;
                    jsUrl += '&guid=' + _guid;
                    jsUrl += '&ep=' + _ep;
                    jsUrl += '&navigator=' + encodeURIComponent(_navigator);
                    jsUrl += '&time=' + new Date().getTime();
                    try {
                        var fileref = document.createElement('script');
                        fileref.setAttribute("type", "text/javascript");
                        fileref.setAttribute("src", jsUrl);
                        document.getElementsByTagName("head")[0].appendChild(fileref);
                    } catch (emm) {}
                }
            }
        },
        setLastPopUpPage: function() {
            CFIScript.loadSessionData();
            CFIScript.SessionData.LastPopUpPage = window.location.href + '';
            CFIScript.saveSessionData();
        },
        checkRule: function() {
            var u = navigator.userAgent;
            CFIScript.loadSessionData();
            if (CFIScript.SessionData.PType == 0 && (CFIScript.detectMobile() || (typeof document.body.style.maxHeight === 'undefined'))) {
                return;
            }
            if (CFIScript.SessionData.PType == 1 && !CFIScript.detectMobile()) {
                return;
            }
            var ruleId = null;
            var fullPath = location.href;
            var acceptOrDecline = CFIScript.SessionData.AcceptOrDecline;
            var httpTestReferer = CFIScript.SessionData.HttpReferer;
            var userAgent = navigator.userAgent;
            var timeSinceSessionStart = (new Date().getTime() - CFIScript.SessionData.SessionStart) / 1000;
            var pageHitsThisSession = CFIScript.SessionData.PageViews;
            var surveyVisitorPercent = Math.random() * 100;
            var lastPageStayTime = CFIScript.SessionData.LastPageStayTime / 1000;
            var httpReferer = document.referrer == undefined ? '' : document.referrer;
            var ruleId = 0;
        },
        checkEligibility: function(daysBetweenAccept, daysBetweenDecline) {
            if (((CFIScript.PersistentData.LastAccept == null) || (((new Date().getTime() - CFIScript.PersistentData.LastAccept) / 86400000) >= daysBetweenAccept)) && ((CFIScript.PersistentData.LastDecline == null) || (((new Date().getTime() - CFIScript.PersistentData.LastDecline) / 86400000) >= daysBetweenDecline))) {
                return true;
            }
            return false;
        },
        updateHttp: function(url) {
            var https = document.URL.indexOf('https') > -1 ? true : false;
            if (https) {
                url = url.replace('http://', 'https://');
            }
            return url;
        },
        createPopup: function() {
            if (CFIScript.SessionData.CurrentPType == 0) {
                var jsUrl = '//cdnmon.cfigroup.com' + '/source/webmon/' + 'd0b6ef54081072/' + CFIScript.SessionData.CurrentRuleId + '.js' + '?time=' + (new Date().getTime());
                jsUrl = CFIScript.updateHttp(jsUrl);
                var fileref = document.createElement('script');
                fileref.setAttribute("type", "text/javascript");
                fileref.setAttribute("src", jsUrl);
                document.getElementsByTagName("head")[0].appendChild(fileref);
            } else {
                var jsUrlb = '//cdnmon.cfigroup.com' + '/source/webmon/' + 'd0b6ef54081072/' + CFIScript.SessionData.CurrentRuleId + '.js' + '?time=' + (new Date().getTime());
                var b = document.createElement('script');
                b.type = 'text/javascript';
                b.async = true;
                jsUrlb = CFIScript.updateHttp(jsUrlb);
                b.src = jsUrlb;
                document.getElementsByTagName("head")[0].appendChild(b);
                var m = document.createElement('meta');
                m.name = "viewport";
                m.content = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=2.0,user-scalable=no";
                document.getElementsByTagName("head")[0].appendChild(m);
            }
        },
        accept: function(ruleId) {
            CFIScript.SessionData.AcceptOrDecline[ruleId] = 'A';
            CFIScript.PersistentData.LastAccept = new Date().getTime();
            CFIScript.saveSessionData();
            if (!CFIScript.Debug) {
                var ruleId = CFIScript.SessionData.CurrentRuleId;
                CFIScript.savePersistentData(ruleId);
            }
            CFIScript.detect(location.href);
            if (CFIScript.SessionData.CurrentPType == 0)
                CFIScript.openWindow();
            else
                CFIScript.obtainEmail();
        },
        decline: function(ruleId) {
            CFIScript.SessionData.AcceptOrDecline[ruleId] = 'D';
            CFIScript.PersistentData.LastDecline = new Date().getTime();
            CFIScript.saveSessionData();
            if (!CFIScript.Debug) {
                var ruleId = CFIScript.SessionData.CurrentRuleId;
                CFIScript.savePersistentData(ruleId);
            }
            return;
        },
        pageLeave: function() {
            CFIScript.loadSessionData();
            if (CFIScript.SessionData.WindowCount > 0) {
                CFIScript.SessionData.WindowCount--;
            }
            if (CFIScript.SessionData.WindowCount <= 0) {
                CFIScript.SessionData.UnloadDate = new Date().getTime();
            }
            CFIScript.SessionData.LastPageStayTime = new Date().getTime() - CFIScript.TimeEnterPage;
            CFIScript.updateCustomVariables();
            CFIScript.saveSessionData();
        },
        obtainEmail: function() {
            var jsUrl = '//cdnmon.cfigroup.com' + '/source/webmon/' + 'd0b6ef54081072/' + CFIScript.SessionData.CurrentRuleId + '_e.js' + '?time=' + (new Date().getTime());
            jsUrl = CFIScript.updateHttp(jsUrl);
            var a = document.createElement('script');
            a.type = 'text/javascript';
            a.async = true;
            jsUrl = CFIScript.updateHttp(jsUrl);
            a.src = jsUrl;
            document.getElementsByTagName("head")[0].appendChild(a);
            document.getElementById('cfi_previewFormFirst').parentElement.removeChild(document.getElementById('cfi_previewFormFirst'));
        },
        detectIE: function() {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }
            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }
            return false;
        },
        openWindow: function() {
            var popURL = "about:blank";
            var puShown = false;
            var popWidth = 480;
            var popHeight = 320;
            var popLeft = Math.floor((screen.availWidth - 480) / 2);
            var popTop = Math.floor((screen.availHeight - 320) / 2);
            var PopFocus = 0;
            var popID = "ad_" + Math.floor(89999999 * Math.random() + 10000000);
            var _top = null;
            _top = CFIScript.initPu(_top);
            var PopWin = _top.window.open('', popID, 'scrollbars=1,resizable=1,width=' + popWidth + ',height=' + popHeight);
            PopWin.moveTo(popLeft, popTop);
            PopWin.document.write(unescape(CFIConfig[CFIScript.SessionData.CurrentRuleId].DetectingHtml));
            var a = PopWin.document.createElement('script');
            a.type = 'text/javascript';
            a.async = true;
            var jsUrl = '//cdnmon.cfigroup.com/source/webmon/d0b6ef54081072/webmon.js';
            jsUrl = CFIScript.updateHttp(jsUrl);
            a.src = jsUrl;
            PopWin.document.getElementsByTagName("head")[0].appendChild(a);
            if (PopWin && CFIConfig[CFIScript.SessionData.CurrentRuleId].PopUnder && !CFIScript.detectIE()) {
                puShown = true;
                if (PopFocus == 0) {
                    PopWin.blur();
                    if (navigator.userAgent.toLowerCase().indexOf("applewebkit") > -1) {
                        _top.window.blur();
                        _top.window.focus();
                    }
                }
                PopWin.Init = function(e) {
                    with (e) {
                        Params = e.Params;
                        Main = function() {
                            try {
                                if (window.navigator.userAgent.indexOf("Chrome") === -1) {
                                    var x = window.open("about:blank");
                                    if (x)
                                        x.close();
                                }
                                opener.window.focus();
                            } catch (err) {}
                        }
                        Main();
                    }
                }
                ;
                PopWin.Params = {
                    PopURL: ''
                }
                PopWin.Init(PopWin);
            }
            return PopWin;
        },
        initPu: function(_top) {
            _top = self;
            if (top != self) {
                try {
                    if (top.document.location.toString())
                        _top = top;
                } catch (err) {}
            }
            return _top
        },
        detect: function(fullPath) {
            CFIScript.detectUrl(fullPath);
            CFIScript.detectEvent();
        },
        detectUrl: function(fullPath) {
            var ruleId = CFIScript.SessionData.CurrentRuleId;
            if (ruleId == null || CFIScript.SessionData.Activity == 'Purchase') {
                return;
            }
            var urls = CFIConfig[ruleId].AbandonTrackingUrls.split(',');
            for (var i = 0; i < urls.length; i++) {
                var url = urls[i].trim();
                if (url != '' && fullPath.indexOf(url) != -1) {
                    CFIScript.triggerAbandon();
                }
            }
            urls = CFIConfig[ruleId].PurchaseTrackingUrls.split(',');
            for (var i = 0; i < urls.length; i++) {
                var url = urls[i].trim();
                if (url != '' && fullPath.indexOf(url) != -1) {
                    CFIScript.triggerPurchase();
                }
            }
        },
        detectEvent: function() {
            var ruleId = CFIScript.SessionData.CurrentRuleId;
            if (ruleId == null) {
                return;
            }
            var abandonEvents = CFIConfig[ruleId].AbandonTrackingEvent.split(',');
            for (var i = 0; i < abandonEvents.length; i++) {
                var abandonEvent = abandonEvents[i].trim();
                if (abandonEvent != '') {
                    var abandonEl = document.getElementById(abandonEvent);
                    if (abandonEl != null) {
                        CFIScript.attachEvent(abandonEl, 'click', function() {
                            CFIScript.triggerAbandon();
                        });
                    }
                    var abandonClassEl = document.getElementsByClassName(abandonEvent);
                    for (var ace = 0; ace < abandonClassEl.length; ace++) {
                        abandonEl = abandonClassEl[ace];
                        CFIScript.attachEvent(abandonEl, 'click', function() {
                            CFIScript.triggerAbandon();
                        });
                    }
                }
            }
            var purchaseEvents = CFIConfig[ruleId].PurchaseTrackingEvent.split(',');
            for (var i = 0; i < purchaseEvents.length; i++) {
                var purchaseEvent = purchaseEvents[i].trim();
                if (purchaseEvent != '') {
                    var purchaseEl = document.getElementById(purchaseEvent);
                    if (purchaseEl != null) {
                        CFIScript.attachEvent(purchaseEl, 'click', function() {
                            CFIScript.triggerPurchase();
                        });
                    }
                    var purchaseClassEl = document.getElementsByClassName(purchaseEvent);
                    for (var pce = 0; pce < purchaseClassEl.length; pce++) {
                        purchaseEl = purchaseClassEl[pce];
                        CFIScript.attachEvent(purchaseEl, 'click', function() {
                            CFIScript.triggerPurchase();
                        });
                    }
                }
            }
        },
        attachEvent: function(el, event, handler) {
            if (el.addEventListener) {
                el.addEventListener(event, handler, false);
            } else if (el.attachEvent) {
                el.attachEvent(event, handler);
            }
        },
        triggerAbandon: function() {
            if (CFIScript.SessionData.Activity == 'Browse') {
                CFIScript.SessionData.Activity = 'Abandon';
                CFIScript.saveSessionData();
            }
        },
        triggerPurchase: function() {
            if (CFIScript.SessionData.Activity == 'Browse' || CFIScript.SessionData.Activity == 'Abandon') {
                CFIScript.SessionData.Activity = 'Purchase';
                CFIScript.saveSessionData();
            }
        },
        monitorRedirect: function() {
            setInterval(function() {
                CFIScript.checkRedirect();
                return false;
            }, CFIConfig.RedirectRefreshSeconds * 1000);
        },
        googleAnalyticsKey: function() {
            var googleKey = '';
            var _allScripts = document.getElementsByTagName('script');
            for (var i = 0; i < _allScripts.length; i++) {
                var _contentScriptContent = _allScripts[i].innerHTML;
                if (_contentScriptContent.indexOf('analytics') != -1 && _contentScriptContent.indexOf('google') != -1 && _contentScriptContent.indexOf('UA-') != -1) {
                    var _contentScriptContentSplit = (_contentScriptContent.split('"').join('\'')).split('\'');
                    for (var j = 0; j < _contentScriptContentSplit.length; j++) {
                        if (_contentScriptContentSplit[j].indexOf('UA') != -1 && _contentScriptContentSplit[j].indexOf('-') != -1) {
                            googleKey = _contentScriptContentSplit[j];
                            break;
                        }
                    }
                }
            }
            if (googleKey == '') {
                var isUsingGaJs = false;
                for (var i = 0; i < _allScripts.length; i++) {
                    var _contentScriptContent = _allScripts[i].innerHTML;
                    if (googleKey == '' && _contentScriptContent.indexOf('_gaq') != -1 && _contentScriptContent.indexOf('_setAccount') != -1 && _contentScriptContent.indexOf('UA-') != -1) {
                        var _contentScriptContentSplit = (_contentScriptContent.split('"').join('\'')).split('\'');
                        for (var j = 0; j < _contentScriptContentSplit.length; j++) {
                            if (_contentScriptContentSplit[j].indexOf('UA') != -1 && _contentScriptContentSplit[j].indexOf('-') != -1) {
                                googleKey = _contentScriptContentSplit[j];
                                break;
                            }
                        }
                    }
                    if (_contentScriptContent.indexOf('analytics') != -1 && _contentScriptContent.indexOf('google') != -1 && _contentScriptContent.indexOf('ga.js') != -1) {
                        isUsingGaJs = true;
                    }
                }
            }
            if (googleKey == '' && (window.ga && window.ga.loaded)) {
                googleKey = 'found';
            }
            if (googleKey != '') {
                CFIScript.loadSessionData();
                var dimension = CFIScript.SessionData.Dimension;
                var ResponseID = "";
                var t = "GUIDCookie=";
                var guidcookie = document.cookie.length > 0 ? (offset = document.cookie.indexOf(t),
                offset != -1 ? (offset += t.length,
                end = document.cookie.indexOf(";", offset),
                end == -1 && (end = document.cookie.length),
                unescape(document.cookie.substring(offset, end))) : null) : null;
                if (!guidcookie) {
                    ResponseID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                        var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0
                          , v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                    var path = "/";
                    if (CFIScript.SessionData.CookiePath !== undefined && CFIScript.SessionData.CookiePath.length > 0) {
                        path = CFIScript.SessionData.CookiePath;
                    }
                    document.cookie = "GUIDCookie=" + ResponseID + "; path=" + path;
                    ga('set', dimension, ResponseID);
                    ga('send', 'event', 'WebMon', 'track', 'uniqueid', {
                        nonInteraction: true
                    });
                }
                CFIScript.SessionData.GoogleAnalyticsValue = ResponseID;
                CFIScript.saveSessionData();
            }
            return googleKey;
        },
        getRedirectURL: function(ruleId) {
            var now = new Date();
            var diffSeconds = Math.ceil((now.getTime() - CFIScript.SessionData.UnloadDate) / 1000);
            var surveyUrl = CFIConfig[ruleId].SurveyUrl;
            if (surveyUrl.indexOf('?') == -1) {
                surveyUrl += '?';
            }
            if (surveyUrl.indexOf('?') < surveyUrl.length - 1) {
                surveyUrl += '&';
            }
            var pageCountString = "";
            if (CFIConfig[ruleId].PageViewCode != null && CFIConfig[ruleId].PageViewCode != '')
                pageCountString = CFIConfig[ruleId].PageViewCode + "=" + CFIScript.SessionData.PageViews + "&";
            surveyUrl += pageCountString + CFIConfig[ruleId].AdditionalParameters[CFIScript.SessionData.Activity].Value + '&BRAND=0' + CFIScript.getAdditionalAttributes();
            if (CFIConfig[ruleId].GoogleAnalytics != '' && CFIScript.SessionData.GoogleAnalyticsValue != null && CFIScript.SessionData.GoogleAnalyticsValue != '') {
                surveyUrl += '&' + CFIConfig[ruleId].GoogleAnalytics + '=' + CFIScript.SessionData.GoogleAnalyticsValue;
            }
            if (CFIConfig[ruleId].AdobeAnalytics != '' && CFIScript.getCookie('AdobeAnalytics') != null) {
                surveyUrl += '&' + CFIConfig[ruleId].AdobeAnalytics + '=' + CFIScript.getUrlEncodedCookie('AdobeAnalytics');
            }
            if (CFIConfig[ruleId].Omniture != '' && CFIScript.getCookie('Omniture') != null) {
                surveyUrl += '&' + CFIConfig[ruleId].Omniture + '=' + CFIScript.getUrlEncodedCookie('Omniture');
            }
            if (CFIConfig[ruleId].Webtrends != '' && CFIScript.getCookie('Webtrends') != null) {
                surveyUrl += '&' + CFIConfig[ruleId].Webtrends + '=' + CFIScript.getUrlEncodedCookie('Webtrends');
            }
            if (CFIConfig[ruleId].FirstBrowsePage != null && CFIConfig[ruleId].FirstBrowsePage != '') {
                surveyUrl += '&' + CFIConfig[ruleId].FirstBrowsePage + '=' + encodeURIComponent(CFIScript.SessionData.FirstBrowsePage);
            }
            if (CFIConfig[ruleId].LastPopUpPage != null && CFIConfig[ruleId].LastPopUpPage != '') {
                surveyUrl += '&' + CFIConfig[ruleId].LastPopUpPage + '=' + encodeURIComponent(CFIScript.SessionData.LastPopUpPage);
            }
            if (CFIConfig[ruleId].FinallyBrowsePage != null && CFIConfig[ruleId].FinallyBrowsePage != '') {
                surveyUrl += '&' + CFIConfig[ruleId].FinallyBrowsePage + '=' + encodeURIComponent(CFIScript.SessionData.FinallyBrowsePage);
            }
            if (CFIConfig[ruleId].SiteReferrer != null && CFIConfig[ruleId].SiteReferrer != '' && CFIScript.SessionData.SiteReferrer != '') {
                surveyUrl += '&' + CFIConfig[ruleId].SiteReferrer + '=' + encodeURIComponent(CFIScript.SessionData.SiteReferrer);
            }
            if (CFIConfig[ruleId].TimeSpentonSite != 0 && CFIConfig[ruleId].TimeSpentonSite != '') {
                CFIScript.SessionData.TimeSpentonSite = (((new Date).getTime()) - CFIScript.SessionData.FirstBrowseTime) / 1000;
                surveyUrl += '&' + CFIConfig[ruleId].TimeSpentonSite + '=' + CFIScript.SessionData.TimeSpentonSite;
            }
            if (CFIConfig[ruleId].AllCookies != null && CFIConfig[ruleId].AllCookies.length > 0) {
                var _cookieItems = CFIConfig[ruleId].AllCookies.split(';');
                if (_cookieItems.length > 0) {
                    for (var i = 0; i < _cookieItems.length; i++) {
                        if (_cookieItems[i].length > 0 && CFIScript.getCookie(_cookieItems[i]) != null) {
                            surveyUrl += '&' + _cookieItems[i] + '=' + CFIScript.getUrlEncodedCookie(_cookieItems[i]);
                        }
                    }
                }
            }
            if (CFIConfig[ruleId].AllCustomVariables != null && CFIConfig[ruleId].AllCustomVariables.length > 0) {
                var _customVariableItems = CFIConfig[ruleId].AllCustomVariables.split(';');
                if (_customVariableItems.length > 0) {
                    for (var i = 0; i < _customVariableItems.length; i++) {
                        var _customVariable = JSON.parse(_customVariableItems[i]);
                        if (_customVariableItems[i].length > 0 && CFIScript.getCustomVariableValue(_customVariable.Name) != null) {
                            surveyUrl += '&' + _customVariable.Name + '=' + CFIScript.getCustomVariableValue(_customVariable.Name);
                        }
                    }
                }
            }
            if (CFIConfig[ruleId].ClickTracker != null && CFIConfig[ruleId].ClickTracker.length > 0) {
                surveyUrl += '&' + CFIConfig[ruleId].ClickTracker + '=' + encodeURIComponent(CFIScript.SessionData.ClickTracker);
            }
            return surveyUrl.split('&&').join('&');
        },
        checkRedirect: function() {
            CFIScript.loadSessionData();
            var ruleId = CFIScript.SessionData.CurrentRuleId;
            if (ruleId != null) {
                if (CFIScript.SessionData.UnloadDate != null) {
                    CFIScript.loadSessionData();
                    CFIScript.SessionData.FinallyLeaveTime = (new Date).getTime();
                    CFIScript.saveSessionData();
                    var now = new Date();
                    var diffSeconds = Math.ceil((now.getTime() - CFIScript.SessionData.UnloadDate) / 1000);
                    if (CFIConfig[ruleId].RedirectRefreshSeconds <= diffSeconds) {
                        var surveyUrl = CFIConfig[ruleId].SurveyUrl;
                        if (surveyUrl.indexOf('?') == -1) {
                            surveyUrl += '?';
                        }
                        if (surveyUrl.indexOf('?') < surveyUrl.length - 1) {
                            surveyUrl += '&';
                        }
                        var pageCountString = "";
                        if (CFIConfig[ruleId].PageViewCode != null && CFIConfig[ruleId].PageViewCode != '')
                            pageCountString = CFIConfig[ruleId].PageViewCode + "=" + CFIScript.SessionData.PageViews + "&";
                        surveyUrl += pageCountString + CFIConfig[ruleId].AdditionalParameters[CFIScript.SessionData.Activity].Value + '&BRAND=0' + CFIScript.getAdditionalAttributes();
                        if (CFIConfig[ruleId].GoogleAnalytics != '' && CFIScript.SessionData.GoogleAnalyticsValue != null && CFIScript.SessionData.GoogleAnalyticsValue != '') {
                            surveyUrl += '&' + CFIConfig[ruleId].GoogleAnalytics + '=' + CFIScript.SessionData.GoogleAnalyticsValue;
                        }
                        if (CFIConfig[ruleId].AdobeAnalytics != '' && CFIScript.getCookie('AdobeAnalytics') != null) {
                            surveyUrl += '&' + CFIConfig[ruleId].AdobeAnalytics + '=' + CFIScript.getUrlEncodedCookie('AdobeAnalytics');
                        }
                        if (CFIConfig[ruleId].Omniture != '' && CFIScript.getCookie('Omniture') != null) {
                            surveyUrl += '&' + CFIConfig[ruleId].Omniture + '=' + CFIScript.getUrlEncodedCookie('Omniture');
                        }
                        if (CFIConfig[ruleId].Webtrends != '' && CFIScript.getCookie('Webtrends') != null) {
                            surveyUrl += '&' + CFIConfig[ruleId].Webtrends + '=' + CFIScript.getUrlEncodedCookie('Webtrends');
                        }
                        if (CFIConfig[ruleId].FirstBrowsePage != null && CFIConfig[ruleId].FirstBrowsePage != '') {
                            surveyUrl += '&' + CFIConfig[ruleId].FirstBrowsePage + '=' + encodeURIComponent(CFIScript.SessionData.FirstBrowsePage);
                        }
                        if (CFIConfig[ruleId].LastPopUpPage != null && CFIConfig[ruleId].LastPopUpPage != '') {
                            surveyUrl += '&' + CFIConfig[ruleId].LastPopUpPage + '=' + encodeURIComponent(CFIScript.SessionData.LastPopUpPage);
                        }
                        if (CFIConfig[ruleId].FinallyBrowsePage != null && CFIConfig[ruleId].FinallyBrowsePage != '') {
                            surveyUrl += '&' + CFIConfig[ruleId].FinallyBrowsePage + '=' + encodeURIComponent(CFIScript.SessionData.FinallyBrowsePage);
                        }
                        if (CFIConfig[ruleId].SiteReferrer != null && CFIConfig[ruleId].SiteReferrer != '' && CFIScript.SessionData.SiteReferrer != '') {
                            surveyUrl += '&' + CFIConfig[ruleId].SiteReferrer + '=' + encodeURIComponent(CFIScript.SessionData.SiteReferrer);
                        }
                        if (CFIConfig[ruleId].TimeSpentonSite != 0 && CFIConfig[ruleId].TimeSpentonSite != '') {
                            CFIScript.SessionData.TimeSpentonSite = ((new Date).getTime() - CFIScript.SessionData.FirstBrowseTime) / 1000;
                            surveyUrl += '&' + CFIConfig[ruleId].TimeSpentonSite + '=' + CFIScript.SessionData.TimeSpentonSite;
                        }
                        if (CFIConfig[ruleId].AllCookies != null && CFIConfig[ruleId].AllCookies.length > 0) {
                            var _cookieItems = CFIConfig[ruleId].AllCookies.split(';');
                            if (_cookieItems.length > 0) {
                                for (var i = 0; i < _cookieItems.length; i++) {
                                    if (_cookieItems[i].length > 0 && CFIScript.getCookie(_cookieItems[i]) != null) {
                                        surveyUrl += '&' + _cookieItems[i] + '=' + CFIScript.getUrlEncodedCookie(_cookieItems[i]);
                                    }
                                }
                            }
                        }
                        if (CFIConfig[ruleId].AllCustomVariables != null && CFIConfig[ruleId].AllCustomVariables.length > 0) {
                            var _customVariableItems = CFIConfig[ruleId].AllCustomVariables.split(';');
                            if (_customVariableItems.length > 0) {
                                for (var i = 0; i < _customVariableItems.length; i++) {
                                    var _customVariable = JSON.parse(_customVariableItems[i]);
                                    if (_customVariableItems[i].length > 0 && CFIScript.getCustomVariableValue(_customVariable.Name) != null) {
                                        surveyUrl += '&' + _customVariable.Name + '=' + CFIScript.getCustomVariableValue(_customVariable.Name);
                                    }
                                }
                            }
                        }
                        if (CFIConfig[ruleId].ClickTracker != null && CFIConfig[ruleId].ClickTracker.length > 0) {
                            surveyUrl += '&' + CFIConfig[ruleId].ClickTracker + '=' + encodeURIComponent(CFIScript.SessionData.ClickTracker);
                        }
                        CFIScript.loadSessionData();
                        CFIScript.SessionData.FirstBrowsePage = null;
                        CFIScript.SessionData.LastPopUpPage = null;
                        CFIScript.SessionData.FinallyBrowsePage = null;
                        CFIScript.SessionData.SiteReferrer = null;
                        CFIScript.SessionData.GoogleAnalyticsValue = null;
                        CFIScript.SessionData.FinallyLeaveTime = 0;
                        CFIScript.SessionData.FirstBrowseTime = 0;
                        CFIScript.saveSessionData();
                        surveyUrl = surveyUrl.split('&&').join('&');
                        window.location.replace(surveyUrl);
                        window.resizeTo(screen.availWidth, screen.availHeight);
                        window.moveTo(0, 0);
                        return;
                    }
                }
                setTimeout(CFIScript.checkRedirect, CFIConfig[ruleId].RedirectRefreshSeconds * 1000)
            }
        },
        getAdditionalAttributes: function() {
            var results = "";
            if (CFIScript.SessionData.AdditionalAttributes) {
                for (var key in CFIScript.SessionData.AdditionalAttributes) {
                    results += '&' + key + '=' + CFIScript.SessionData.AdditionalAttributes[key];
                }
            }
            return results;
        },
        getUrlEncodedCookie: function(Name) {
            var search = Name + "="
            if (document.cookie.length > 0) {
                offset = document.cookie.indexOf(search)
                if (offset != -1) {
                    offset += search.length
                    end = document.cookie.indexOf(";", offset)
                    if (end == -1)
                        end = document.cookie.length
                    return encodeURIComponent(document.cookie.substring(offset, end));
                } else
                    return null;
            }
            return null;
        },
        getCookie: function(Name) {
            var search = Name + "="
            if (document.cookie.length > 0) {
                offset = document.cookie.indexOf(search)
                if (offset != -1) {
                    offset += search.length
                    end = document.cookie.indexOf(";", offset)
                    if (end == -1)
                        end = document.cookie.length
                    return unescape(document.cookie.substring(offset, end));
                } else
                    return null;
            }
            return null;
        },
        getCustomVariable: function(Name) {
            if (CFIScript.SessionData.AllCustomVariables != null && CFIScript.SessionData.AllCustomVariables.length > 0) {
                var _customVariableItems = CFIScript.SessionData.AllCustomVariables.split(';');
                if (_customVariableItems.length > 0) {
                    for (var i = 0; i < _customVariableItems.length; i++) {
                        var _customVariable = JSON.parse(_customVariableItems[i]);
                        if (_customVariableItems[i].length > 0 && _customVariable.Name.toUpperCase() === Name.toUpperCase()) {
                            return _customVariable;
                        }
                    }
                }
            }
            return null;
        },
        getCustomVariableValue: function(Name) {
            if (CFIScript.SessionData.CustomVariables === undefined || CFIScript.SessionData.CustomVariables === null || CFIScript.SessionData.CustomVariables[Name] === undefined || CFIScript.SessionData.CustomVariables[Name] === null)
                return null;
            return CFIScript.SessionData.CustomVariables[Name];
        },
        setCookie: function(name, value) {
            var argv = CFIScript.setCookie.arguments;
            var argc = CFIScript.setCookie.arguments.length;
            var expires = (argc > 2) ? argv[2] : null;
            var str = name + "=" + escape(value);
            if (expires != null) {
                var LargeExpDate = new Date();
                LargeExpDate.setTime(LargeExpDate.getTime() + (expires * 1000 * 3600 * 24));
                str += "; expires=" + LargeExpDate.toGMTString();
            }
            var path = "/";
            if (CFIScript.SessionData.CookiePath !== undefined && CFIScript.SessionData.CookiePath.length > 0) {
                path = CFIScript.SessionData.CookiePath;
            }
            str += "; path=" + path;
            document.cookie = str;
        },
        clearCookie: function(name) {
            var expires = ";expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            document.cookie = name + "=" + expires + "; path=/";
            if (CFIScript.SessionData.CookiePath !== undefined && CFIScript.SessionData.CookiePath.length > 0) {
                document.cookie = name + "=" + expires + "; path=" + CFIScript.SessionData.CookiePath;
            }
        },
        _setCustomVariable: function(CustomVariable, Value) {
            if (CFIScript.SessionData.CustomVariables === undefined || CFIScript.SessionData.CustomVariables === null) {
                CFIScript.SessionData.CustomVariables = {};
            }
            var canSet = false;
            switch (CustomVariable.RecordTime) {
            case 1:
                canSet = CFIScript.SessionData.CustomVariables[CustomVariable.Name] === undefined || CFIScript.SessionData.CustomVariables[CustomVariable.Name] === null || CFIScript.SessionData.CustomVariables[CustomVariable.Name] == '';
                break;
            case 2:
                canSet = (CFIScript.SessionData.CustomVariables[CustomVariable.Name] === undefined || CFIScript.SessionData.CustomVariables[CustomVariable.Name] === null || CFIScript.SessionData.CustomVariables[CustomVariable.Name] == '') && !(CFIScript.SessionData.LastPopUpPage === undefined || CFIScript.SessionData.LastPopUpPage === null || CFIScript.SessionData.LastPopUpPage == '');
                break;
            case 3:
            default:
                canSet = true;
                break;
            }
            if (canSet) {
                CFIScript.SessionData.CustomVariables[CustomVariable.Name] = Value;
            }
        },
        setCustomVariable: function(Name, Value) {
            var customVariable = CFIScript.getCustomVariable(Name);
            if (customVariable != null) {
                CFScript._setCustomVariable(customVariable, Value);
            }
        },
        updateCustomVariables: function() {
            var ruleId = 0;
            CFIScript.saveSessionData();
        },
        loadSessionData: function() {
            var cookieData = CFIScript.getCookie('CFIWebMonSession');
            if (cookieData != null) {
                CFIScript.SessionData = JSON.parse(cookieData);
            }
        },
        saveSessionData: function() {
            cookieData = JSON.stringify(CFIScript.SessionData);
            CFIScript.clearCookie('CFIWebMonSession');
            CFIScript.setCookie('CFIWebMonSession', cookieData);
        },
        loadPersistentData: function(ruleId) {
            var cookieData = CFIScript.getCookie('CFIWebMonPersistent-' + ruleId);
            if (cookieData != null) {
                CFIScript.PersistentData = JSON.parse(cookieData);
                return;
            }
            CFIScript.PersistentData = {
                LastAccept: null,
                LastDecline: null
            };
        },
        savePersistentData: function(ruleId) {
            var ruleId = CFIScript.SessionData.CurrentRuleId;
            if (ruleId == null) {
                return;
            }
            cookieData = JSON.stringify(CFIScript.PersistentData);
            CFIScript.setCookie('CFIWebMonPersistent-' + ruleId, cookieData, 99999);
        },
        createNewGuid: function() {
            var g = "";
            var i = 32;
            var arr = new Array();
            var d = new Date()
            var tTime = '*' + d.getTime() + '';
            tTime = tTime.split('*1').join('');
            tTime = tTime.split('*').join('');
            i = i - tTime.length;
            while (i--) {
                g += Math.floor(Math.random() * 16.0).toString(16);
            }
            g = g + tTime;
            for (var i = 0; i < g.length; i++) {
                arr.push(g[i]);
            }
            var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20, 32);
            str = str.replace(/,/g, "");
            return str;
        },
        trackWindow: function(window) {
            var self = CFIScript.ClickTracker;
            window.onload = function(e) {
                CFIScript.startTracking(window.location.href, e);
            }
            window.onunload = function() {
                CFIScript.endTracking();
            }
            window.onmousemove = function(e) {
                if (self.startX == null) {
                    self.startX = e.clientX;
                    self.startY = e.clientY;
                    return;
                }
                var dist = Math.round(Math.sqrt(Math.pow(self.startY - e.clientY, 2) + Math.pow(self.startX - e.clientX, 2)));
                if (!isNaN(dist)) {
                    self.startX = e.clientX;
                    self.startY = e.clientY;
                    self.totalMoves += dist;
                }
            }
            if (typeof (window.onpopstate) === 'function') {
                window.onpopstate = function(e) {
                    CFIScript.endTracking();
                    CFIScript.startTracking(document.location);
                }
            }
            if (typeof (window.history) === 'object') {
                var history = window.history
                  , saved = {}
                  , functions = ['pushState', 'replaceState', 'back', 'forward'];
                for (var func in functions) {
                    var funcName = functions[func];
                    if (typeof (history[funcName]) === 'function') {
                        saved[funcName] = history[funcName];
                        history[funcName] = (function(f) {
                            return function() {
                                CFIScript.endTracking();
                                CFIScript.startTracking(arguments.length > 2 ? arguments[2] : '');
                                saved[f].apply(this, arguments);
                            }
                        }
                        )(funcName);
                    }
                }
            }
        },
        startTracking: function(url, e) {
            CFIScript.ClickTracker.url = url;
            CFIScript.ClickTracker.startX = !!e ? e.clientX : null;
            CFIScript.ClickTracker.startY = !!e ? e.clientY : null;
            CFIScript.ClickTracker.totalMoves = 0;
            CFIScript.ClickTracker.startDate = new Date();
        },
        endTracking: function() {
            CFIScript.ClickTracker.elapsed = new Date() - CFIScript.ClickTracker.startDate;
            if (CFIScript.SessionData.ClickTracker.length > 0)
                CFIScript.SessionData.ClickTracker += '|';
            CFIScript.SessionData.ClickTracker += 'url=' + encodeURIComponent(CFIScript.ClickTracker.url) + '&p=' + CFIScript.SessionData.PageIndex + '&elapsed=' + CFIScript.ClickTracker.elapsed + 'ms&movement=' + CFIScript.ClickTracker.totalMoves + 'px';
            CFIScript.SessionData.PageIndex++;
            CFIScript.saveSessionData();
        }
    };
    if (window.cfiDetectPopup == true || document.getElementById('cfiDetectPopup') != null) {
        CFIScript.checkRedirect();
    } else {
        CFIScript.init();
        if (window.addEventListener)
            window.addEventListener('load', CFIScript.checkRule, false);
        else
            window.attachEvent('onload', CFIScript.checkRule, false);
    }
}

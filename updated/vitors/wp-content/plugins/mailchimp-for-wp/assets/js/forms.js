( () => {
    var e = {
        999: e => {
            function t() {
                this.listeners = {}
            }
            t.prototype.emit = function(e, t) {
                this.listeners[e] = this.listeners[e] ?? [],
                this.listeners[e].forEach((e => e.apply(null, t)))
            }
            ,
            t.prototype.on = function(e, t) {
                this.listeners[e] = this.listeners[e] ?? [],
                this.listeners[e].push(t)
            }
            ,
            e.exports = t
        }
        ,
        1677: () => {
            function e(e) {
                const t = !!e.getAttribute("data-show-if")
                  , n = t ? e.getAttribute("data-show-if").split(":") : e.getAttribute("data-hide-if").split(":")
                  , r = n[0]
                  , o = (n.length > 1 ? n[1] : "*").split("|")
                  , i = function(e, t) {
                    const n = []
                      , r = e.querySelectorAll('input[name="' + t + '"],select[name="' + t + '"],textarea[name="' + t + '"]');
                    for (let e = 0; e < r.length; e++) {
                        const t = r[e];
                        ("radio" !== t.type && "checkbox" !== t.type || t.checked) && n.push(t.value)
                    }
                    return n
                }(function(e) {
                    let t = e;
                    for (; t.parentElement; )
                        if (t = t.parentElement,
                        "FORM" === t.tagName)
                            return t;
                    return null
                }(e), r);
                let s = !1;
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    if (s = o.indexOf(t) > -1 || o.indexOf("*") > -1 && t.length > 0,
                    s)
                        break
                }
                e.style.display = t ? s ? "" : "none" : s ? "none" : "";
                const a = e.querySelectorAll("input,select,textarea");
                for (let e = 0; e < a.length; e++) {
                    const n = a[e];
                    (s || t) && n.getAttribute("data-was-required") && (n.required = !0,
                    n.removeAttribute("data-was-required")),
                    s && t || !n.required || (n.setAttribute("data-was-required", "true"),
                    n.required = !1)
                }
            }
            function t() {
                const t = document.querySelectorAll(".mc4wp-form [data-show-if],.mc4wp-form [data-hide-if]");
                for (let n = 0; n < t.length; n++)
                    e(t[n])
            }
            function n(t) {
                if (!t.target || !t.target.form || t.target.form.className.indexOf("mc4wp-form") < 0)
                    return;
                const n = t.target.form.querySelectorAll("[data-show-if],[data-hide-if]");
                for (let t = 0; t < n.length; t++)
                    e(n[t])
            }
            document.addEventListener("keyup", n, !0),
            document.addEventListener("change", n, !0),
            document.addEventListener("mc4wp-refresh", t, !0),
            window.addEventListener("load", t),
            t()
        }
        ,
        2573: (e, t, n) => {
            const r = n(7422)
              , o = n(3409)
              , i = function(e, t) {
                this.id = e,
                this.element = t || document.createElement("form"),
                this.name = this.element.getAttribute("data-name") || "Form #" + this.id,
                this.errors = [],
                this.started = !1
            };
            i.prototype.setData = function(e) {
                try {
                    o(this.element, e)
                } catch (e) {
                    console.error(e)
                }
            }
            ,
            i.prototype.getData = function() {
                return r(this.element, {
                    hash: !0,
                    empty: !0
                })
            }
            ,
            i.prototype.getSerializedData = function() {
                return r(this.element, {
                    hash: !1,
                    empty: !0
                })
            }
            ,
            i.prototype.setResponse = function(e) {
                this.element.querySelector(".mc4wp-response").innerHTML = e
            }
            ,
            i.prototype.reset = function() {
                this.setResponse(""),
                this.element.querySelector(".mc4wp-form-fields").style.display = "",
                this.element.reset()
            }
            ,
            e.exports = i
        }
        ,
        8592: (e, t, n) => {
            const r = n(2573)
              , o = []
              , i = new (n(999));
            function s(e, t) {
                t = t || parseInt(e.getAttribute("data-id")) || 0;
                const n = new r(t,e);
                return o.push(n),
                n
            }
            e.exports = {
                get: function(e) {
                    e = parseInt(e);
                    for (let t = 0; t < o.length; t++)
                        if (o[t].id === e)
                            return o[t];
                    return s(document.querySelector(".mc4wp-form-" + e), e)
                },
                getByElement: function(e) {
                    const t = e.form || e;
                    for (let e = 0; e < o.length; e++)
                        if (o[e].element === t)
                            return o[e];
                    return s(t)
                },
                on: function(e, t) {
                    i.on(e, t)
                },
                trigger: function(e, t) {
                    "submit" === e || e.indexOf(".submit") > 0 ? (i.emit(t[0].id + "." + e, t),
                    i.emit(e, t)) : window.setTimeout((function() {
                        i.emit(t[0].id + "." + e, t),
                        i.emit(e, t)
                    }
                    ), 10)
                }
            }
        }
        ,
        7422: e => {
            var t = /^(?:submit|button|image|reset|file)$/i
              , n = /^(?:input|select|textarea|keygen)/i
              , r = /(\[[^\[\]]*\])/g;
            function o(e, t, n) {
                if (0 === t.length)
                    return n;
                var r = t.shift()
                  , i = r.match(/^\[(.+?)\]$/);
                if ("[]" === r)
                    return e = e || [],
                    Array.isArray(e) ? e.push(o(null, t, n)) : (e._values = e._values || [],
                    e._values.push(o(null, t, n))),
                    e;
                if (i) {
                    var s = i[1]
                      , a = +s;
                    isNaN(a) ? (e = e || {})[s] = o(e[s], t, n) : (e = e || [])[a] = o(e[a], t, n)
                } else
                    e[r] = o(e[r], t, n);
                return e
            }
            function i(e, t, n) {
                if (t.match(r))
                    o(e, function(e) {
                        var t = []
                          , n = new RegExp(r)
                          , o = /^([^\[\]]*)/.exec(e);
                        for (o[1] && t.push(o[1]); null !== (o = n.exec(e)); )
                            t.push(o[1]);
                        return t
                    }(t), n);
                else {
                    var i = e[t];
                    i ? (Array.isArray(i) || (e[t] = [i]),
                    e[t].push(n)) : e[t] = n
                }
                return e
            }
            function s(e, t, n) {
                return n = n.replace(/(\r)?\n/g, "\r\n"),
                n = (n = encodeURIComponent(n)).replace(/%20/g, "+"),
                e + (e ? "&" : "") + encodeURIComponent(t) + "=" + n
            }
            e.exports = function(e, r) {
                "object" != typeof r ? r = {
                    hash: !!r
                } : void 0 === r.hash && (r.hash = !0);
                for (var o = r.hash ? {} : "", a = r.serializer || (r.hash ? i : s), c = e && e.elements ? e.elements : [], l = Object.create(null), u = 0; u < c.length; ++u) {
                    var f = c[u];
                    if ((r.disabled || !f.disabled) && f.name && n.test(f.nodeName) && !t.test(f.type)) {
                        var d = f.name
                          , h = f.value;
                        if ("checkbox" !== f.type && "radio" !== f.type || f.checked || (h = void 0),
                        r.empty) {
                            if ("checkbox" !== f.type || f.checked || (h = ""),
                            "radio" === f.type && (l[f.name] || f.checked ? f.checked && (l[f.name] = !0) : l[f.name] = !1),
                            null == h && "radio" == f.type)
                                continue
                        } else if (!h)
                            continue;
                        if ("select-multiple" !== f.type)
                            o = a(o, d, h);
                        else {
                            h = [];
                            for (var p = f.options, m = !1, g = 0; g < p.length; ++g) {
                                var y = p[g]
                                  , v = r.empty && !y.value
                                  , b = y.value || v;
                                y.selected && b && (m = !0,
                                o = r.hash && "[]" !== d.slice(d.length - 2) ? a(o, d + "[]", y.value) : a(o, d, y.value))
                            }
                            !m && r.empty && (o = a(o, d, ""))
                        }
                    }
                }
                if (r.empty)
                    for (var d in l)
                        l[d] || (o = a(o, d, ""));
                return o
            }
        }
        ,
        3409: e => {
            e.exports && (e.exports = function e(t, n, r) {
                for (const o in n) {
                    if (!n.hasOwnProperty(o))
                        continue;
                    const i = o;
                    let s = n[o];
                    if (void 0 === s && (s = ""),
                    null === s && (s = ""),
                    void 0 !== r && (i = r + "[" + o + "]"),
                    s.constructor === Array)
                        i += "[]";
                    else if ("object" == typeof s) {
                        e(t, s, i);
                        continue
                    }
                    const a = t.elements.namedItem(i);
                    if (!a)
                        continue;
                    const c = a.type || a[0].type;
                    switch (c) {
                    default:
                        a.value = s;
                        break;
                    case "radio":
                    case "checkbox":
                        {
                            const e = s.constructor === Array ? s : [s];
                            for (let t = 0; t < a.length; t++)
                                a[t].checked = e.indexOf(a[t].value) > -1
                        }
                        break;
                    case "select-multiple":
                        {
                            const e = s.constructor === Array ? s : [s];
                            for (let t = 0; t < a.options.length; t++)
                                a.options[t].selected = e.indexOf(a.options[t].value) > -1
                        }
                        break;
                    case "select":
                    case "select-one":
                        a.value = s.toString() || s;
                        break;
                    case "date":
                        a.value = new Date(s).toISOString().split("T")[0]
                    }
                    const l = new Event("change",{
                        bubbles: !0
                    });
                    switch (c) {
                    default:
                        a.dispatchEvent(l);
                        break;
                    case "radio":
                    case "checkbox":
                        for (let e = 0; e < a.length; e++)
                            a[e].checked && a[e].dispatchEvent(l)
                    }
                }
            }
            )
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    ( () => {
        const e = window.mc4wp || {}
          , t = n(8592);
        function r(e, t) {
            document.addEventListener(e, (e => {
                if (!e.target)
                    return;
                const n = e.target;
                ("string" == typeof n.className && n.className.indexOf("mc4wp-form") > -1 || "function" == typeof n.matches && n.matches(".mc4wp-form *")) && t.call(e, e)
            }
            ), !0)
        }
        n(1677),
        r("submit", (function(e) {
            if (e.defaultPrevented)
                return;
            const n = t.getByElement(e.target);
            t.trigger("submit", [n, e])
        }
        )),
        r("focus", (function(e) {
            const n = t.getByElement(e.target);
            n.started || (t.trigger("started", [n, e]),
            n.started = !0)
        }
        )),
        r("change", (function(e) {
            const n = t.getByElement(e.target);
            t.trigger("change", [n, e])
        }
        )),
        e.listeners && ([].forEach.call(e.listeners, (function(e) {
            t.on(e.event, e.callback)
        }
        )),
        delete e.listeners),
        e.forms = t,
        window.mc4wp = e
    }
    )()
}
)();

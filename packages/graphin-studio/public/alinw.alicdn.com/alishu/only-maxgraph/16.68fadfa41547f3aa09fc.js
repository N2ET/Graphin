(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[16], {
    1300: function(e, n, t) {
        "use strict";
        function i(e, n) {
            e.prototype = Object.create(n.prototype);
            e.prototype.constructor = e;
            e.__proto__ = n
        }
        var a = t(1);
        var r = t.n(a);
        var o = t(0);
        var c = t.n(o);
        var d = t(354);
        var u = t(891);
        var l = t.n(u);
        var s = t(892);
        var f = t.n(s);
        var p = 1073741823;
        function h(e, n) {
            if (e === n) {
                return e !== 0 || 1 / e === 1 / n
            } else {
                return e !== e && n !== n
            }
        }
        function m(e) {
            var n = [];
            return {
                on: function e(t) {
                    n.push(t)
                },
                off: function e(t) {
                    n = n.filter((function(e) {
                        return e !== t
                    }
                    ))
                },
                get: function n() {
                    return e
                },
                set: function t(i, a) {
                    e = i;
                    n.forEach((function(n) {
                        return n(e, a)
                    }
                    ))
                }
            }
        }
        function _(e) {
            return Array.isArray(e) ? e[0] : e
        }
        function v(e, n) {
            var t, i;
            var r = "__create-react-context-" + f()() + "__";
            var o = function(e) {
                l()(t, e);
                function t() {
                    var n;
                    n = e.apply(this, arguments) || this;
                    n.emitter = m(n.props.value);
                    return n
                }
                var i = t.prototype;
                i.getChildContext = function e() {
                    var n;
                    return n = {},
                    n[r] = this.emitter,
                    n
                }
                ;
                i.componentWillReceiveProps = function e(t) {
                    if (this.props.value !== t.value) {
                        var i = this.props.value;
                        var a = t.value;
                        var r;
                        if (h(i, a)) {
                            r = 0
                        } else {
                            r = typeof n === "function" ? n(i, a) : p;
                            if (false) {}
                            r |= 0;
                            if (r !== 0) {
                                this.emitter.set(t.value, r)
                            }
                        }
                    }
                }
                ;
                i.render = function e() {
                    return this.props.children
                }
                ;
                return t
            }(a["Component"]);
            o.childContextTypes = (t = {},
            t[r] = c.a.object.isRequired,
            t);
            var d = function(n) {
                l()(t, n);
                function t() {
                    var e;
                    e = n.apply(this, arguments) || this;
                    e.state = {
                        value: e.getValue()
                    };
                    e.onUpdate = function(n, t) {
                        var i = e.observedBits | 0;
                        if ((i & t) !== 0) {
                            e.setState({
                                value: e.getValue()
                            })
                        }
                    }
                    ;
                    return e
                }
                var i = t.prototype;
                i.componentWillReceiveProps = function e(n) {
                    var t = n.observedBits;
                    this.observedBits = t === undefined || t === null ? p : t
                }
                ;
                i.componentDidMount = function e() {
                    if (this.context[r]) {
                        this.context[r].on(this.onUpdate)
                    }
                    var n = this.props.observedBits;
                    this.observedBits = n === undefined || n === null ? p : n
                }
                ;
                i.componentWillUnmount = function e() {
                    if (this.context[r]) {
                        this.context[r].off(this.onUpdate)
                    }
                }
                ;
                i.getValue = function n() {
                    if (this.context[r]) {
                        return this.context[r].get()
                    } else {
                        return e
                    }
                }
                ;
                i.render = function e() {
                    return _(this.props.children)(this.state.value)
                }
                ;
                return t
            }(a["Component"]);
            d.contextTypes = (i = {},
            i[r] = c.a.object,
            i);
            return {
                Provider: o,
                Consumer: d
            }
        }
        var g = r.a.createContext || v;
        var y = g;
        var b = t(200);
        var w = t(131);
        var E = t(869);
        var S = t.n(E);
        var k = t(868);
        function x(e, n) {
            if (e == null)
                return {};
            var t = {};
            var i = Object.keys(e);
            var a, r;
            for (r = 0; r < i.length; r++) {
                a = i[r];
                if (n.indexOf(a) >= 0)
                    continue;
                t[a] = e[a]
            }
            return t
        }
        var O = t(859);
        var F = t.n(O);
        t.d(n, "a", (function() {
            return B
        }
        ));
        t.d(n, "b", (function() {
            return K
        }
        ));
        t.d(n, "c", (function() {
            return j
        }
        ));
        t.d(n, "d", (function() {
            return te
        }
        ));
        t.d(n, "e", (function() {
            return ce
        }
        ));
        var N = function e(n) {
            var t = y();
            t.displayName = n;
            return t
        };
        var D = N("Router");
        var j = function(e) {
            i(n, e);
            n.computeRootMatch = function e(n) {
                return {
                    path: "/",
                    url: "/",
                    params: {},
                    isExact: n === "/"
                }
            }
            ;
            function n(n) {
                var t;
                t = e.call(this, n) || this;
                t.state = {
                    location: n.history.location
                };
                t._isMounted = false;
                t._pendingLocation = null;
                if (!n.staticContext) {
                    t.unlisten = n.history.listen((function(e) {
                        if (t._isMounted) {
                            t.setState({
                                location: e
                            })
                        } else {
                            t._pendingLocation = e
                        }
                    }
                    ))
                }
                return t
            }
            var t = n.prototype;
            t.componentDidMount = function e() {
                this._isMounted = true;
                if (this._pendingLocation) {
                    this.setState({
                        location: this._pendingLocation
                    })
                }
            }
            ;
            t.componentWillUnmount = function e() {
                if (this.unlisten)
                    this.unlisten()
            }
            ;
            t.render = function e() {
                return r.a.createElement(D.Provider, {
                    children: this.props.children || null,
                    value: {
                        history: this.props.history,
                        location: this.state.location,
                        match: n.computeRootMatch(this.state.location.pathname),
                        staticContext: this.props.staticContext
                    }
                })
            }
            ;
            return n
        }(r.a.Component);
        if (false) {}
        var P = function(e) {
            i(n, e);
            function n() {
                var n;
                for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) {
                    i[a] = arguments[a]
                }
                n = e.call.apply(e, [this].concat(i)) || this;
                n.history = Object(d["createMemoryHistory"])(n.props);
                return n
            }
            var t = n.prototype;
            t.render = function e() {
                return r.a.createElement(j, {
                    history: this.history,
                    children: this.props.children
                })
            }
            ;
            return n
        }(r.a.Component);
        if (false) {}
        var T = function(e) {
            i(n, e);
            function n() {
                return e.apply(this, arguments) || this
            }
            var t = n.prototype;
            t.componentDidMount = function e() {
                if (this.props.onMount)
                    this.props.onMount.call(this, this)
            }
            ;
            t.componentDidUpdate = function e(n) {
                if (this.props.onUpdate)
                    this.props.onUpdate.call(this, this, n)
            }
            ;
            t.componentWillUnmount = function e() {
                if (this.props.onUnmount)
                    this.props.onUnmount.call(this, this)
            }
            ;
            t.render = function e() {
                return null
            }
            ;
            return n
        }(r.a.Component);
        function I(e) {
            var n = e.message
              , t = e.when
              , i = t === void 0 ? true : t;
            return r.a.createElement(D.Consumer, null, (function(e) {
                !e ? false ? undefined : Object(b["a"])(false) : void 0;
                if (!i || e.staticContext)
                    return null;
                var t = e.history.block;
                return r.a.createElement(T, {
                    onMount: function e(i) {
                        i.release = t(n)
                    },
                    onUpdate: function e(i, a) {
                        if (a.message !== n) {
                            i.release();
                            i.release = t(n)
                        }
                    },
                    onUnmount: function e(n) {
                        n.release()
                    },
                    message: n
                })
            }
            ))
        }
        if (false) {
            var C
        }
        var L = {};
        var R = 1e4;
        var A = 0;
        function G(e) {
            if (L[e])
                return L[e];
            var n = S.a.compile(e);
            if (A < R) {
                L[e] = n;
                A++
            }
            return n
        }
        function z(e, n) {
            if (e === void 0) {
                e = "/"
            }
            if (n === void 0) {
                n = {}
            }
            return e === "/" ? e : G(e)(n, {
                pretty: true
            })
        }
        function B(e) {
            var n = e.computedMatch
              , t = e.to
              , i = e.push
              , a = i === void 0 ? false : i;
            return r.a.createElement(D.Consumer, null, (function(e) {
                !e ? false ? undefined : Object(b["a"])(false) : void 0;
                var i = e.history
                  , o = e.staticContext;
                var c = a ? i.push : i.replace;
                var u = Object(d["createLocation"])(n ? typeof t === "string" ? z(t, n.params) : Object(w["a"])({}, t, {
                    pathname: z(t.pathname, n.params)
                }) : t);
                if (o) {
                    c(u);
                    return null
                }
                return r.a.createElement(T, {
                    onMount: function e() {
                        c(u)
                    },
                    onUpdate: function e(n, t) {
                        var i = Object(d["createLocation"])(t.to);
                        if (!Object(d["locationsAreEqual"])(i, Object(w["a"])({}, u, {
                            key: i.key
                        }))) {
                            c(u)
                        }
                    },
                    to: t
                })
            }
            ))
        }
        if (false) {}
        var M = {};
        var X = 1e4;
        var V = 0;
        function W(e, n) {
            var t = "" + n.end + n.strict + n.sensitive;
            var i = M[t] || (M[t] = {});
            if (i[e])
                return i[e];
            var a = [];
            var r = S()(e, a, n);
            var o = {
                regexp: r,
                keys: a
            };
            if (V < X) {
                i[e] = o;
                V++
            }
            return o
        }
        function U(e, n) {
            if (n === void 0) {
                n = {}
            }
            if (typeof n === "string" || Array.isArray(n)) {
                n = {
                    path: n
                }
            }
            var t = n
              , i = t.path
              , a = t.exact
              , r = a === void 0 ? false : a
              , o = t.strict
              , c = o === void 0 ? false : o
              , d = t.sensitive
              , u = d === void 0 ? false : d;
            var l = [].concat(i);
            return l.reduce((function(n, t) {
                if (!t && t !== "")
                    return null;
                if (n)
                    return n;
                var i = W(t, {
                    end: r,
                    strict: c,
                    sensitive: u
                })
                  , a = i.regexp
                  , o = i.keys;
                var d = a.exec(e);
                if (!d)
                    return null;
                var l = d[0]
                  , s = d.slice(1);
                var f = e === l;
                if (r && !f)
                    return null;
                return {
                    path: t,
                    url: t === "/" && l === "" ? "/" : l,
                    isExact: f,
                    params: o.reduce((function(e, n, t) {
                        e[n.name] = s[t];
                        return e
                    }
                    ), {})
                }
            }
            ), null)
        }
        function q(e) {
            return r.a.Children.count(e) === 0
        }
        function H(e, n, t) {
            var i = e(n);
            false ? undefined : void 0;
            return i || null
        }
        var K = function(e) {
            i(n, e);
            function n() {
                return e.apply(this, arguments) || this
            }
            var t = n.prototype;
            t.render = function e() {
                var n = this;
                return r.a.createElement(D.Consumer, null, (function(e) {
                    !e ? false ? undefined : Object(b["a"])(false) : void 0;
                    var t = n.props.location || e.location;
                    var i = n.props.computedMatch ? n.props.computedMatch : n.props.path ? U(t.pathname, n.props) : e.match;
                    var a = Object(w["a"])({}, e, {
                        location: t,
                        match: i
                    });
                    var o = n.props
                      , c = o.children
                      , d = o.component
                      , u = o.render;
                    if (Array.isArray(c) && c.length === 0) {
                        c = null
                    }
                    return r.a.createElement(D.Provider, {
                        value: a
                    }, a.match ? c ? typeof c === "function" ? false ? undefined : c(a) : c : d ? r.a.createElement(d, a) : u ? u(a) : null : typeof c === "function" ? false ? undefined : c(a) : null)
                }
                ))
            }
            ;
            return n
        }(r.a.Component);
        if (false) {}
        function Y(e) {
            return e.charAt(0) === "/" ? e : "/" + e
        }
        function Z(e, n) {
            if (!e)
                return n;
            return Object(w["a"])({}, n, {
                pathname: Y(e) + n.pathname
            })
        }
        function J(e, n) {
            if (!e)
                return n;
            var t = Y(e);
            if (n.pathname.indexOf(t) !== 0)
                return n;
            return Object(w["a"])({}, n, {
                pathname: n.pathname.substr(t.length)
            })
        }
        function $(e) {
            return typeof e === "string" ? e : Object(d["createPath"])(e)
        }
        function Q(e) {
            return function() {
                false ? undefined : Object(b["a"])(false)
            }
        }
        function ee() {}
        var ne = function(e) {
            i(n, e);
            function n() {
                var n;
                for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) {
                    i[a] = arguments[a]
                }
                n = e.call.apply(e, [this].concat(i)) || this;
                n.handlePush = function(e) {
                    return n.navigateTo(e, "PUSH")
                }
                ;
                n.handleReplace = function(e) {
                    return n.navigateTo(e, "REPLACE")
                }
                ;
                n.handleListen = function() {
                    return ee
                }
                ;
                n.handleBlock = function() {
                    return ee
                }
                ;
                return n
            }
            var t = n.prototype;
            t.navigateTo = function e(n, t) {
                var i = this.props
                  , a = i.basename
                  , r = a === void 0 ? "" : a
                  , o = i.context
                  , c = o === void 0 ? {} : o;
                c.action = t;
                c.location = Z(r, Object(d["createLocation"])(n));
                c.url = $(c.location)
            }
            ;
            t.render = function e() {
                var n = this.props
                  , t = n.basename
                  , i = t === void 0 ? "" : t
                  , a = n.context
                  , o = a === void 0 ? {} : a
                  , c = n.location
                  , u = c === void 0 ? "/" : c
                  , l = x(n, ["basename", "context", "location"]);
                var s = {
                    createHref: function e(n) {
                        return Y(i + $(n))
                    },
                    action: "POP",
                    location: J(i, Object(d["createLocation"])(u)),
                    push: this.handlePush,
                    replace: this.handleReplace,
                    go: Q("go"),
                    goBack: Q("goBack"),
                    goForward: Q("goForward"),
                    listen: this.handleListen,
                    block: this.handleBlock
                };
                return r.a.createElement(j, Object(w["a"])({}, l, {
                    history: s,
                    staticContext: o
                }))
            }
            ;
            return n
        }(r.a.Component);
        if (false) {}
        var te = function(e) {
            i(n, e);
            function n() {
                return e.apply(this, arguments) || this
            }
            var t = n.prototype;
            t.render = function e() {
                var n = this;
                return r.a.createElement(D.Consumer, null, (function(e) {
                    !e ? false ? undefined : Object(b["a"])(false) : void 0;
                    var t = n.props.location || e.location;
                    var i, a;
                    r.a.Children.forEach(n.props.children, (function(n) {
                        if (a == null && r.a.isValidElement(n)) {
                            i = n;
                            var o = n.props.path || n.props.from;
                            a = o ? U(t.pathname, Object(w["a"])({}, n.props, {
                                path: o
                            })) : e.match
                        }
                    }
                    ));
                    return a ? r.a.cloneElement(i, {
                        location: t,
                        computedMatch: a
                    }) : null
                }
                ))
            }
            ;
            return n
        }(r.a.Component);
        if (false) {}
        function ie(e) {
            var n = "withRouter(" + (e.displayName || e.name) + ")";
            var t = function n(t) {
                var i = t.wrappedComponentRef
                  , a = x(t, ["wrappedComponentRef"]);
                return r.a.createElement(D.Consumer, null, (function(n) {
                    !n ? false ? undefined : Object(b["a"])(false) : void 0;
                    return r.a.createElement(e, Object(w["a"])({}, a, n, {
                        ref: i
                    }))
                }
                ))
            };
            t.displayName = n;
            t.WrappedComponent = e;
            if (false) {}
            return F()(t, e)
        }
        var ae = r.a.useContext;
        function re() {
            if (false) {}
            return ae(D).history
        }
        function oe() {
            if (false) {}
            return ae(D).location
        }
        function ce() {
            if (false) {}
            var e = ae(D).match;
            return e ? e.params : {}
        }
        function de(e) {
            if (false) {}
            return e ? U(oe().pathname, e) : ae(D).match
        }
        if (false) {
            var ue, le, se, fe, pe
        }
    },
    133: function(e, n, t) {
        "use strict";
        t.r(n);
        t.d(n, "EnumNodeType", (function() {
            return w
        }
        ));
        t.d(n, "EnumDisplayType", (function() {
            return E
        }
        ));
        t.d(n, "EnumNodeDataType", (function() {
            return S
        }
        ));
        t.d(n, "EnumInstanceStatus", (function() {
            return k
        }
        ));
        var i = t(14);
        var a = t.n(i);
        var r = t(57);
        var o = t.n(r);
        var c = t(12);
        var d = t.n(c);
        var u = undefined && undefined.__assign || function() {
            u = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return u.apply(this, arguments)
        }
        ;
        var l = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var s = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var f = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var p = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var h = "/rest/db/list";
        var m = "/rest/tesla/engine/metric";
        var _ = "/rest/graph/schema";
        var v = "/rest/graph/schema/Edge";
        var g = "/rest/graph/schema/Vertex";
        var y = "/rest/db/check";
        var b = "/rest/graph/schema/display";
        var w;
        (function(e) {
            e["VERTEX"] = "VERTEX";
            e["EDGE"] = "EDGE"
        }
        )(w || (w = {}));
        var E;
        (function(e) {
            e[e["NAME"] = 1] = "NAME";
            e[e["COMMENT"] = 2] = "COMMENT";
            e[e["PROPERTY"] = 3] = "PROPERTY";
            e[e["DISPLAY_NAME"] = 4] = "DISPLAY_NAME"
        }
        )(E || (E = {}));
        var S;
        (function(e) {
            e["BOOL"] = "BOOL";
            e["INT"] = "INT";
            e["LONG"] = "LONG";
            e["FLOAT"] = "FLOAT";
            e["DOUBLE"] = "DOUBLE";
            e["BYTES"] = "BYTES";
            e["STRING"] = "STRING";
            e["LIST<INT>"] = "LIST<INT>";
            e["LIST<LONG>"] = "LIST<LONG>";
            e["LIST<FLOAT>"] = "LIST<FLOAT>";
            e["LIST<DOUBLE>"] = "LIST<DOUBLE>";
            e["LIST<STRING>"] = "LIST<STRING>";
            e["LIST<BYTES>"] = "LIST<BYTES>"
        }
        )(S || (S = {}));
        var k;
        (function(e) {
            e[e["STARTING"] = 1] = "STARTING";
            e[e["RESTARTING"] = 2] = "RESTARTING";
            e[e["STOPPING"] = 3] = "STOPPING";
            e[e["SERVING"] = 4] = "SERVING";
            e[e["STOPPED"] = 5] = "STOPPED";
            e[e["ABNORMAL"] = 6] = "ABNORMAL"
        }
        )(k || (k = {}));
        var x = function() {
            function e() {}
            e.prototype.getInstances = function() {
                return f(this, void 0, void 0, (function() {
                    var e;
                    return p(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, a.a.get(h, {
                                mask: true,
                                verbose: true,
                                pageSize: 5e3
                            })];
                        case 1:
                            e = n.sent();
                            return [2, e]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getInstanceStatusByName = function(e, n) {
                return f(this, void 0, void 0, (function() {
                    var t;
                    return p(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, a.a.get(m, {
                                instanceId: e,
                                dbname: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._convertDisplayPropertyToCaptionLabel = function(e, n) {
                if (e === E.NAME || !e)
                    return "<label>";
                if (e === E.COMMENT)
                    return "<comment>";
                if (e === E.DISPLAY_NAME)
                    return "<displayName>";
                return n
            }
            ;
            e.prototype._convertCaptionLabelToDisplayProperty = function(e) {
                if (e === "<label>" || !e)
                    return {
                        displayType: E.NAME
                    };
                if (e === "<comment>")
                    return {
                        displayType: E.COMMENT
                    };
                if (e === "<displayName>")
                    return {
                        displayType: E.DISPLAY_NAME
                    };
                return {
                    displayType: E.PROPERTY,
                    displayPropertyName: e
                }
            }
            ;
            e.prototype.getInstanceSchemaByName = function(e) {
                return f(this, void 0, void 0, (function() {
                    var n, t;
                    var i = this;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, a.a.get(_, {
                                name: e
                            })];
                        case 1:
                            n = r.sent();
                            t = u(u({}, n), {
                                types: n.types.map((function(e) {
                                    var n = c["flatMap"](e.typeDef.indexes, (function(e) {
                                        if (e.indexType === "PRIMARY_KEY")
                                            return e.propertyNames;
                                        return []
                                    }
                                    ));
                                    return u(u({}, e.typeDef), {
                                        color: e.color,
                                        size: e.size,
                                        bid: e.bid,
                                        displayName: e.displayName,
                                        caption: i._convertDisplayPropertyToCaptionLabel(e.displayType, e.displayPropertyName),
                                        propertyDefList: e.typeDef.propertyDefList.map((function(e) {
                                            return u(u({}, e), {
                                                key: c["includes"](n, e.name)
                                            })
                                        }
                                        ))
                                    })
                                }
                                ))
                            });
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.newInstanceEdge = function(e, n) {
                return f(this, void 0, void 0, (function() {
                    var t, i;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            t = u({
                                name: e,
                                color: n.color,
                                displayName: n.displayName,
                                dataSource: n.dataSource
                            }, this._convertCaptionLabelToDisplayProperty(n.caption));
                            return [4, a.a.post(v, u(u({}, t), {
                                typeDef: u({
                                    gIdToPId: {},
                                    isDimensionType: false,
                                    typeOption: {
                                        storageEngine: "ROCKSDB"
                                    }
                                }, {
                                    label: n.label,
                                    type: n.type,
                                    comment: n.comment,
                                    propertyDefList: n.propertyDefList,
                                    rawRelationShips: n.relationShipSet
                                })
                            }))];
                        case 1:
                            i = r.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.createInstanceEdge = function(e) {
                return f(this, void 0, void 0, (function() {
                    var n;
                    return p(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, a.a.post(v, e)];
                        case 1:
                            n = t.sent();
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.updateInstanceEdge = function(e, n) {
                return f(this, void 0, void 0, (function() {
                    var t, i;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            t = u({
                                name: e,
                                color: n.color,
                                id: n.id,
                                bid: n.bid,
                                displayName: n.displayName
                            }, this._convertCaptionLabelToDisplayProperty(n.caption));
                            return [4, a.a.put(v, u(u({}, t), {
                                typeDef: u({
                                    id: n.id,
                                    label: n.label,
                                    type: n.type,
                                    comment: n.comment,
                                    propertyDefList: n.propertyDefList,
                                    rawRelationShips: n.relationShipSet,
                                    gIdToPId: n.gIdToPId || {},
                                    isDimensionType: n.isDimensionType || false,
                                    typeOption: n.typeOption || {
                                        typeOption: {
                                            storageEngine: "ROCKSDB"
                                        }
                                    }
                                })
                            }))];
                        case 1:
                            i = r.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deleteInstanceEdge = function(e, n, t) {
                return f(this, void 0, void 0, (function() {
                    return p(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, a.a.del(_, {
                                name: e,
                                label: n,
                                bid: t
                            })];
                        case 1:
                            i.sent();
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.newInstanceVertex = function(e, n) {
                return f(this, void 0, void 0, (function() {
                    var t, i;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            t = u({
                                name: e,
                                color: n.color,
                                size: n.size,
                                displayName: n.displayName,
                                dataSource: n.dataSource
                            }, this._convertCaptionLabelToDisplayProperty(n.caption));
                            return [4, a.a.post(g, u(u({}, t), {
                                typeDef: u({
                                    gIdToPId: {},
                                    indexes: [{
                                        indexType: "PRIMARY_KEY",
                                        name: "PRIMARY_KEY",
                                        propertyNames: n.propertyDefList.filter((function(e) {
                                            return e.key
                                        }
                                        )).map((function(e) {
                                            return e.name
                                        }
                                        ))
                                    }],
                                    isDimensionType: false,
                                    typeOption: {
                                        storageEngine: "ROCKSDB"
                                    }
                                }, {
                                    label: n.label,
                                    type: n.type,
                                    comment: n.comment,
                                    propertyDefList: n.propertyDefList
                                })
                            }))];
                        case 1:
                            i = r.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.createInstanceVertex = function(e) {
                return f(this, void 0, void 0, (function() {
                    var n;
                    return p(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, a.a.post(g, e)];
                        case 1:
                            n = t.sent();
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.updateInstanceVertex = function(e, n) {
                return f(this, void 0, void 0, (function() {
                    var t, i;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            t = u({
                                name: e,
                                color: n.color,
                                size: n.size,
                                id: n.id,
                                bid: n.bid,
                                displayName: n.displayName
                            }, this._convertCaptionLabelToDisplayProperty(n.caption));
                            return [4, a.a.put(g, u(u({}, t), {
                                typeDef: u({
                                    indexes: n.indexes || [{
                                        indexType: "PRIMARY_KEY",
                                        name: "PRIMARY_KEY",
                                        propertyNames: n.propertyDefList.filter((function(e) {
                                            return e.key
                                        }
                                        )).map((function(e) {
                                            return e.name
                                        }
                                        ))
                                    }]
                                }, {
                                    id: n.id,
                                    label: n.label,
                                    type: n.type,
                                    comment: n.comment,
                                    propertyDefList: n.propertyDefList,
                                    gIdToPId: n.gIdToPId || {},
                                    isDimensionType: n.isDimensionType || false,
                                    typeOption: n.typeOption || {
                                        storageEngine: "ROCKSDB"
                                    }
                                })
                            }))];
                        case 1:
                            i = r.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deleteInstanceVertex = function(e, n, t) {
                return f(this, void 0, void 0, (function() {
                    return p(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, a.a.del(_, {
                                name: e,
                                label: n,
                                bid: t
                            })];
                        case 1:
                            i.sent();
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.checkInstance = function(e) {
                return f(this, void 0, void 0, (function() {
                    return p(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            if (this._checker) {
                                this._checker.abort();
                                delete this._checker
                            }
                            this._checker = a.a.get(y, {
                                name: e
                            });
                            return [4, this._checker];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getSchemaDisplayInformation = function(e) {
                return f(this, void 0, void 0, (function() {
                    var n;
                    return p(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, a.a.get(b, {
                                graphName: e
                            })];
                        case 1:
                            n = t.sent();
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.uploadSchemaDisplayInformation = function(e, n, t) {
                return f(this, void 0, void 0, (function() {
                    var i;
                    return p(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, a.a.post(b, {
                                id: e,
                                graphName: n,
                                position: t
                            })];
                        case 1:
                            i = r.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            l([r["error"].omit, s("design:type", Function), s("design:paramtypes", [String, String]), s("design:returntype", Promise)], e.prototype, "getInstanceStatusByName", null);
            l([r["error"].omit, s("design:type", Function), s("design:paramtypes", [String]), s("design:returntype", Promise)], e.prototype, "getInstanceSchemaByName", null);
            l([r["error"].omit, s("design:type", Function), s("design:paramtypes", [String]), s("design:returntype", Promise)], e.prototype, "checkInstance", null);
            return e
        }();
        n["default"] = new x
    },
    835: function(e, n, t) {
        "use strict";
        t.r(n);
        var i = t(1);
        var a = t(0);
        var r = t.n(a);
        var o = t(1300);
        var c = t(57);
        var d = t(950);
        var u = t(885);
        var l = [new u["a"], new u["b"], new u["j"], new u["k"], new u["d"], new u["e"], new u["h"], new u["i"], new u["m"], new u["l"], new u["f"]];
        var s = {
            readOnly: true,
            panel: {
                search: null,
                information: null,
                control: {
                    zoom: true,
                    fit: true,
                    layout: true,
                    fullScreen: true,
                    facade: null
                },
                statistics: false,
                preview: null
            }
        };
        function f() {
            var e = {
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            };
            return i["createElement"]("div", {
                style: e
            }, i["createElement"](u["o"], {
                instanceId: window.DataWorksConfig.data.data.instance.id,
                id: window.DataWorksConfig.data.data.information.id,
                plugins: l,
                options: s,
                data: window.DataWorksConfig.data.data,
                onReady: function(e) {}
            }))
        }
        var p = f;
        t.d(n, "default", (function() {
            return h
        }
        ));
        function h(e) {
            return i["createElement"](o["c"], {
                history: e.history
            }, i["createElement"](c["react"].boundary, null, i["createElement"](d["a"], null, i["createElement"](o["d"], null, i["createElement"](o["b"], {
                path: "/",
                exact: true,
                component: p
            }), i["createElement"](o["a"], {
                to: "/"
            })))))
        }
        h.defaultProps = {
            history: {}
        };
        h.propTypes = {
            history: r.a.object
        }
    },
    845: function(e, n) {},
    859: function(e, n, t) {
        "use strict";
        var i = t(868);
        var a = {
            childContextTypes: true,
            contextType: true,
            contextTypes: true,
            defaultProps: true,
            displayName: true,
            getDefaultProps: true,
            getDerivedStateFromError: true,
            getDerivedStateFromProps: true,
            mixins: true,
            propTypes: true,
            type: true
        };
        var r = {
            name: true,
            length: true,
            prototype: true,
            caller: true,
            callee: true,
            arguments: true,
            arity: true
        };
        var o = {
            $$typeof: true,
            render: true,
            defaultProps: true,
            displayName: true,
            propTypes: true
        };
        var c = {
            $$typeof: true,
            compare: true,
            defaultProps: true,
            displayName: true,
            propTypes: true,
            type: true
        };
        var d = {};
        d[i.ForwardRef] = o;
        function u(e) {
            if (i.isMemo(e)) {
                return c
            }
            return d[e["$$typeof"]] || a
        }
        var l = Object.defineProperty;
        var s = Object.getOwnPropertyNames;
        var f = Object.getOwnPropertySymbols;
        var p = Object.getOwnPropertyDescriptor;
        var h = Object.getPrototypeOf;
        var m = Object.prototype;
        function _(e, n, t) {
            if (typeof n !== "string") {
                if (m) {
                    var i = h(n);
                    if (i && i !== m) {
                        _(e, i, t)
                    }
                }
                var a = s(n);
                if (f) {
                    a = a.concat(f(n))
                }
                var o = u(e);
                var c = u(n);
                for (var d = 0; d < a.length; ++d) {
                    var v = a[d];
                    if (!r[v] && !(t && t[v]) && !(c && c[v]) && !(o && o[v])) {
                        var g = p(n, v);
                        try {
                            l(e, v, g)
                        } catch (e) {}
                    }
                }
            }
            return e
        }
        e.exports = _
    },
    868: function(e, n, t) {
        "use strict";
        if (true) {
            e.exports = t(890)
        } else {}
    },
    869: function(e, n, t) {
        var i = t(893);
        e.exports = g;
        e.exports.parse = r;
        e.exports.compile = o;
        e.exports.tokensToFunction = u;
        e.exports.tokensToRegExp = v;
        var a = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function r(e, n) {
            var t = [];
            var i = 0;
            var r = 0;
            var o = "";
            var c = n && n.delimiter || "/";
            var d;
            while ((d = a.exec(e)) != null) {
                var u = d[0];
                var f = d[1];
                var p = d.index;
                o += e.slice(r, p);
                r = p + u.length;
                if (f) {
                    o += f[1];
                    continue
                }
                var h = e[r];
                var m = d[2];
                var _ = d[3];
                var v = d[4];
                var g = d[5];
                var y = d[6];
                var b = d[7];
                if (o) {
                    t.push(o);
                    o = ""
                }
                var w = m != null && h != null && h !== m;
                var E = y === "+" || y === "*";
                var S = y === "?" || y === "*";
                var k = d[2] || c;
                var x = v || g;
                t.push({
                    name: _ || i++,
                    prefix: m || "",
                    delimiter: k,
                    optional: S,
                    repeat: E,
                    partial: w,
                    asterisk: !!b,
                    pattern: x ? s(x) : b ? ".*" : "[^" + l(k) + "]+?"
                })
            }
            if (r < e.length) {
                o += e.substr(r)
            }
            if (o) {
                t.push(o)
            }
            return t
        }
        function o(e, n) {
            return u(r(e, n), n)
        }
        function c(e) {
            return encodeURI(e).replace(/[\/?#]/g, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function d(e) {
            return encodeURI(e).replace(/[?#]/g, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function u(e, n) {
            var t = new Array(e.length);
            for (var a = 0; a < e.length; a++) {
                if (typeof e[a] === "object") {
                    t[a] = new RegExp("^(?:" + e[a].pattern + ")$",p(n))
                }
            }
            return function(n, a) {
                var r = "";
                var o = n || {};
                var u = a || {};
                var l = u.pretty ? c : encodeURIComponent;
                for (var s = 0; s < e.length; s++) {
                    var f = e[s];
                    if (typeof f === "string") {
                        r += f;
                        continue
                    }
                    var p = o[f.name];
                    var h;
                    if (p == null) {
                        if (f.optional) {
                            if (f.partial) {
                                r += f.prefix
                            }
                            continue
                        } else {
                            throw new TypeError('Expected "' + f.name + '" to be defined')
                        }
                    }
                    if (i(p)) {
                        if (!f.repeat) {
                            throw new TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(p) + "`")
                        }
                        if (p.length === 0) {
                            if (f.optional) {
                                continue
                            } else {
                                throw new TypeError('Expected "' + f.name + '" to not be empty')
                            }
                        }
                        for (var m = 0; m < p.length; m++) {
                            h = l(p[m]);
                            if (!t[s].test(h)) {
                                throw new TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(h) + "`")
                            }
                            r += (m === 0 ? f.prefix : f.delimiter) + h
                        }
                        continue
                    }
                    h = f.asterisk ? d(p) : l(p);
                    if (!t[s].test(h)) {
                        throw new TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + h + '"')
                    }
                    r += f.prefix + h
                }
                return r
            }
        }
        function l(e) {
            return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1")
        }
        function s(e) {
            return e.replace(/([=!:$\/()])/g, "\\$1")
        }
        function f(e, n) {
            e.keys = n;
            return e
        }
        function p(e) {
            return e && e.sensitive ? "" : "i"
        }
        function h(e, n) {
            var t = e.source.match(/\((?!\?)/g);
            if (t) {
                for (var i = 0; i < t.length; i++) {
                    n.push({
                        name: i,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        partial: false,
                        asterisk: false,
                        pattern: null
                    })
                }
            }
            return f(e, n)
        }
        function m(e, n, t) {
            var i = [];
            for (var a = 0; a < e.length; a++) {
                i.push(g(e[a], n, t).source)
            }
            var r = new RegExp("(?:" + i.join("|") + ")",p(t));
            return f(r, n)
        }
        function _(e, n, t) {
            return v(r(e, t), n, t)
        }
        function v(e, n, t) {
            if (!i(n)) {
                t = n || t;
                n = []
            }
            t = t || {};
            var a = t.strict;
            var r = t.end !== false;
            var o = "";
            for (var c = 0; c < e.length; c++) {
                var d = e[c];
                if (typeof d === "string") {
                    o += l(d)
                } else {
                    var u = l(d.prefix);
                    var s = "(?:" + d.pattern + ")";
                    n.push(d);
                    if (d.repeat) {
                        s += "(?:" + u + s + ")*"
                    }
                    if (d.optional) {
                        if (!d.partial) {
                            s = "(?:" + u + "(" + s + "))?"
                        } else {
                            s = u + "(" + s + ")?"
                        }
                    } else {
                        s = u + "(" + s + ")"
                    }
                    o += s
                }
            }
            var h = l(t.delimiter || "/");
            var m = o.slice(-h.length) === h;
            if (!a) {
                o = (m ? o.slice(0, -h.length) : o) + "(?:" + h + "(?=$))?"
            }
            if (r) {
                o += "$"
            } else {
                o += a && m ? "" : "(?=" + h + "|$)"
            }
            return f(new RegExp("^" + o,p(t)), n)
        }
        function g(e, n, t) {
            if (!i(n)) {
                t = n || t;
                n = []
            }
            t = t || {};
            if (e instanceof RegExp) {
                return h(e, n)
            }
            if (i(e)) {
                return m(e, n, t)
            }
            return _(e, n, t)
        }
    },
    885: function(e, n, t) {
        "use strict";
        var i = t(1);
        var a = t(12);
        var r = t.n(a);
        var o = t(955);
        var c = t(839);
        var d = {
            OptionService: Symbol.for("Service:Option"),
            LogService: Symbol.for("Service:Log"),
            HttpService: Symbol.for("Service:Http"),
            TaskService: Symbol.for("Service:Task"),
            BackendService: Symbol.for("Service:Backend"),
            GraphinDataService: Symbol.for("Service:GraphinData"),
            PluginStorageService: Symbol.for("Service:PluginStorage"),
            GraphinFacadeService: Symbol.for("Service:GraphinFacadeService"),
            SearchPanelService: Symbol.for("Service:SearchPanel"),
            StatisticPanelService: Symbol.for("Service:StatisticPanel"),
            PreviewPanelService: Symbol.for("Service:PreviewPanel"),
            GraphinCommandService: Symbol.for("Service:GraphinCommand"),
            AnalysisTaskInformation: Symbol.for("Service:AnalyserTaskInformation"),
            SnapshotService: Symbol.for("Service:Snapshot"),
            CommandService: Symbol.for("Service:Command"),
            DownstreamSync: Symbol.for("Service.DownstreamSync"),
            PluginRegisterService: Symbol.for("Service:PluginRegister"),
            UserAccessedDataService: Symbol.for("Service:UserAccessedDataService")
        };
        var u = d;
        var l;
        (function(e) {
            e["INFO"] = "info";
            e["DEBUG"] = "debug";
            e["WARN"] = "warn";
            e["ERROR"] = "error"
        }
        )(l || (l = {}));
        var s = t(20);
        var f = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var p = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var h = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var m = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var _;
        var v = "Default";
        var g = function() {
            function e() {}
            Object.defineProperty(e.prototype, "id", {
                get: function() {
                    return e.id++
                },
                enumerable: true,
                configurable: true
            });
            e.id = 0;
            return e
        }();
        var y = (_ = {},
        _[l.DEBUG] = "#35B534",
        _[l.INFO] = "#00C1DE",
        _[l.WARN] = "#FFA40F",
        _[l.ERROR] = "#10121A",
        _);
        var b = function() {
            function e() {
                this.name = "GraphAnalyserLoggerService";
                this._initialize();
                this.onLog(this._writeToConsole.bind(this))
            }
            e.prototype._writeToConsole = function(e) {
                if (e.type !== l.ERROR && "production" !== "development") {
                    return
                }
                console.log("%c" + a["toUpper"](e.type) + " %c" + s(e.time).format("YYYY-MM-DD hh:mm:ss") + " %c" + e.category, "color: " + y[e.type], "color: default", "color: #9F78FF", e.code ? "[" + e.code + "]:" + e.message : e.message)
            }
            ;
            e.prototype.activate = function() {
                return h(this, void 0, void 0, (function() {
                    return m(this, (function(e) {
                        this._destroy(),
                        this._initialize();
                        this.onLog(this._writeToConsole.bind(this));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._initialize = function() {
                if (this._idGenerator)
                    return;
                this._listeners = new Map;
                this._idGenerator = new g
            }
            ;
            e.prototype.update = function() {
                return h(this, void 0, void 0, (function() {
                    return m(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return h(this, void 0, void 0, (function() {
                    return m(this, (function(e) {
                        this._destroy();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._destroy = function() {
                this._listeners.clear();
                delete this._idGenerator
            }
            ;
            e.prototype.onLog = function(e) {
                var n = this._idGenerator.id;
                this._listeners.set(n, e);
                return n
            }
            ;
            e.prototype.offLog = function(e) {
                this._listeners.delete(e)
            }
            ;
            e.prototype._log = function(e, n, t, i) {
                var a;
                var r = new Date;
                var o = {
                    type: e,
                    category: n,
                    time: r,
                    message: ""
                };
                if (typeof t === "string") {
                    o.message = t
                } else {
                    o.code = t;
                    o.message = i
                }
                (a = this._listeners) === null || a === void 0 ? void 0 : a.forEach((function(e) {
                    e(o)
                }
                ))
            }
            ;
            e.prototype.info = function(e, n) {
                if (n) {
                    this._log(l.INFO, e, n)
                } else {
                    this._log(l.INFO, v, n)
                }
            }
            ;
            e.prototype.debug = function(e, n) {
                if (n) {
                    this._log(l.DEBUG, e, n)
                } else {
                    this._log(l.DEBUG, v, n)
                }
            }
            ;
            e.prototype.warn = function(e, n) {
                if (n) {
                    this._log(l.WARN, e, n)
                } else {
                    this._log(l.WARN, v, n)
                }
            }
            ;
            e.prototype.error = function(e, n, t) {
                if (typeof e === "string") {
                    this._log(l.ERROR, e, n, t)
                } else {
                    this._log(l.ERROR, v, e, n)
                }
            }
            ;
            e = f([Object(c["injectable"])(), p("design:paramtypes", [])], e);
            return e
        }();
        var w = b;
        var E = t(14);
        var S = "";
        var k = 24 * 60 * 60 * 1e3;
        var x = undefined && undefined.__assign || function() {
            x = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return x.apply(this, arguments)
        }
        ;
        var O = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var F = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var N = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var D = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var j = "HttpService";
        var P = {
            error: {
                isThrow: true,
                handler: function(e) {}
            },
            csrf: {
                url: S,
                timeout: k
            },
            default: {
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            }
        };
        function T() {
            return function(e, n, t) {
                var i = t.value;
                t.value = function(e, n, t, a) {
                    return N(this, void 0, void 0, (function() {
                        var r, o;
                        return D(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                c.trys.push([0, 2, , 3]);
                                this._log.debug(j, "==> Sending [" + e + "] Request with [" + (n && JSON.stringify(n)) + "]");
                                return [4, i.call(this, e, n, t, a)];
                            case 1:
                                r = c.sent();
                                this._log.debug(j, "<== Got [" + e + "] Response: [" + (r && JSON.stringify(r)) + "]");
                                return [2, r];
                            case 2:
                                o = c.sent();
                                this._log.error(j, o.code, "Request [" + e + "] Failed: " + o.message);
                                throw o;
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ;
                return t
            }
        }
        var I = function() {
            function e() {
                this.name = "GraphAnalyserHttpService";
                this._setting = a["cloneDeep"](P)
            }
            e.prototype.activate = function() {
                return N(this, void 0, void 0, (function() {
                    return D(this, (function(e) {
                        this._http = Object(E["init"])(x(x({}, this._setting), this._options.get("core.http"))).create();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return N(this, void 0, void 0, (function() {
                    return D(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return N(this, void 0, void 0, (function() {
                    return D(this, (function(e) {
                        this._http = null;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.registerIntercept = function(e) {
                this._setting.error.handler = e;
                this._http.config(this._setting)
            }
            ;
            e.prototype.get = function() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    e[n] = arguments[n]
                }
                return N(this, void 0, void 0, (function() {
                    var n;
                    return D(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = this._http).get.apply(n, e)];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.post = function() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    e[n] = arguments[n]
                }
                return N(this, void 0, void 0, (function() {
                    var n;
                    return D(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = this._http).post.apply(n, e)];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.put = function() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    e[n] = arguments[n]
                }
                return N(this, void 0, void 0, (function() {
                    var n;
                    return D(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = this._http).put.apply(n, e)];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.del = function() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    e[n] = arguments[n]
                }
                return N(this, void 0, void 0, (function() {
                    var n;
                    return D(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = this._http).del.apply(n, e)];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.patch = function() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    e[n] = arguments[n]
                }
                return N(this, void 0, void 0, (function() {
                    var n;
                    return D(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (n = this._http).patch.apply(n, e)];
                        case 1:
                            return [2, t.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.clone = function() {
                var e;
                var n = [];
                for (var t = 0; t < arguments.length; t++) {
                    n[t] = arguments[t]
                }
                return (e = this._http).clone.apply(e, n)
            }
            ;
            var n, t;
            O([Object(c["inject"])(u.LogService), F("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            O([Object(c["inject"])(u.OptionService), F("design:type", typeof (t = typeof undefined !== "undefined" && undefined) === "function" ? t : Object)], e.prototype, "_options", void 0);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", Promise)], e.prototype, "get", null);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", Promise)], e.prototype, "post", null);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", Promise)], e.prototype, "put", null);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", Promise)], e.prototype, "del", null);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", Promise)], e.prototype, "patch", null);
            O([T(), F("design:type", Function), F("design:paramtypes", [Object]), F("design:returntype", void 0)], e.prototype, "clone", null);
            e = O([Object(c["injectable"])()], e);
            return e
        }();
        var C = I;
        var L = 10000001;
        var R = 10000002;
        var A = 10010001;
        var G = 10010002;
        var z = 10020001;
        var B = 10030001;
        var M = 10030001;
        var X = 10040001;
        var V = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        var W = function(e) {
            V(n, e);
            function n(n, t) {
                var i = e.call(this, t) || this;
                i.code = n;
                return i
            }
            return n
        }(Error);
        var U = W;
        var q = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var H = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var K = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Y = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Z = "TaskService";
        var J = function() {
            function e() {
                this.name = "GraphAnalyserTaskService"
            }
            e.prototype.activate = function() {
                return K(this, void 0, void 0, (function() {
                    return Y(this, (function(e) {
                        this._tasks = new Map;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return K(this, void 0, void 0, (function() {
                    return Y(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return K(this, void 0, void 0, (function() {
                    return Y(this, (function(e) {
                        this._tasks.forEach((function(e) {
                            return e.state === "stopping"
                        }
                        ));
                        this._tasks.clear();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.sleep = function(e) {
                return K(this, void 0, void 0, (function() {
                    return Y(this, (function(n) {
                        return [2, new Promise((function(n) {
                            setTimeout(n, e)
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.kill = function(e) {
                return K(this, void 0, Promise, (function() {
                    var n;
                    return Y(this, (function(t) {
                        this._log.debug(Z, "Task[" + e.displayName + "] will be killed");
                        n = this._tasks.get(e);
                        n !== null && n !== void 0 ? n : n.state = "stopping";
                        return [2, false]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.shouldStop = function(e, n) {
                var t = new Date;
                var i = this._tasks.get(e);
                if (n)
                    return true;
                if (t.getTime() - i.begin.getTime() > e.timeout) {
                    throw new U(L,"Task has been timeout")
                }
                if (i.state === "stopping") {
                    throw new U(R,"Task has been killed")
                }
            }
            ;
            e.prototype.do = function(e, n) {
                return K(this, void 0, Promise, (function() {
                    var t, i, a, r;
                    return Y(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            o.trys.push([0, 7, 8, 9]);
                            this._log.debug(Z, "Task[" + e.displayName + "] will be executed");
                            this._tasks.set(e, {
                                task: e,
                                state: "ready",
                                begin: new Date
                            });
                            return [4, e.submit(n)];
                        case 1:
                            t = o.sent();
                            this._log.debug(Z, "Task[" + e.displayName + "]'s poll id is [" + t + "]");
                            this._tasks.get(e).state = "running";
                            i = false;
                            o.label = 2;
                        case 2:
                            if (!!i)
                                return [3, 5];
                            this._log.debug(Z, "Task[" + e.displayName + "] is polling");
                            return [4, e.poll(t)];
                        case 3:
                            i = o.sent();
                            if (this.shouldStop(e, i))
                                return [3, 5];
                            return [4, this.sleep(e.interval)];
                        case 4:
                            o.sent();
                            return [3, 2];
                        case 5:
                            return [4, e.gain(t)];
                        case 6:
                            a = o.sent();
                            this._log.debug(Z, "Gained Task[" + e.displayName + "]: " + (a && JSON.stringify(a)));
                            return [2, a];
                        case 7:
                            r = o.sent();
                            throw r;
                        case 8:
                            this._tasks.get(e).state = "stopped";
                            return [7];
                        case 9:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            var n;
            q([Object(c["inject"])(u.LogService), H("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            e = q([Object(c["injectable"])()], e);
            return e
        }();
        var $ = J;
        var Q = {
            readOnly: false,
            panel: {
                search: {
                    edge: true,
                    vertex: true
                },
                information: {
                    statistics: true,
                    statement: true,
                    log: true,
                    excel: true
                },
                control: {
                    zoom: true,
                    fit: true,
                    layout: true,
                    fullScreen: true,
                    facade: {
                        filter: true,
                        style: true,
                        tooltip: true
                    }
                },
                statistics: true,
                preview: {
                    action: {
                        expand: true,
                        pin: true
                    },
                    property: true,
                    neighbors: true
                }
            },
            graph: {
                draggable: true,
                zoomable: true,
                clickable: true,
                dbClickable: true,
                rClickable: true,
                showOutDegree: true,
                hasLabel: true,
                hasTooltip: false,
                hasContextMenu: true
            }
        };
        var ee = Q;
        var ne = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var te = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ie = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ae = function() {
            function e() {
                this.name = "GraphAnalyserOptionService"
            }
            e.prototype.get = function(e) {
                var n = r.a.get(this._options, e);
                return n
            }
            ;
            e.prototype.activate = function(e) {
                return te(this, void 0, void 0, (function() {
                    return ie(this, (function(n) {
                        this._options = r.a.merge(r.a.cloneDeep(ee), e.options);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return te(this, void 0, void 0, (function() {
                    return ie(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return te(this, void 0, void 0, (function() {
                    return ie(this, (function(n) {
                        this._options = r.a.merge(r.a.cloneDeep(ee), e.options);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e = ne([Object(c["injectable"])()], e);
            return e
        }();
        var re = ae;
        var oe = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var ce = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var de = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ue = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var le = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var se = function() {
            function e() {
                this.name = "GraphAnalyserGraphinDataService";
                this._data = this._setDefaultData()
            }
            e.prototype._setDefaultData = function() {
                return {
                    nodes: [],
                    edges: []
                }
            }
            ;
            e.prototype._changeFacade = function() {
                var e = this._facade.getCurrentFacadeProvider();
                this._data.nodes.forEach((function(n) {
                    var t;
                    n.shape = ((t = e) === null || t === void 0 ? void 0 : t.name) + "-node"
                }
                ));
                this._data.edges.forEach((function(n) {
                    var t;
                    n.shape = ((t = e) === null || t === void 0 ? void 0 : t.name) + "-edge"
                }
                ))
            }
            ;
            e.prototype.activate = function(e) {
                return de(this, void 0, void 0, (function() {
                    return ue(this, (function(n) {
                        e.data && (this._data = e.data.data);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return de(this, void 0, void 0, (function() {
                    return ue(this, (function(n) {
                        e.data && (this._data = e.data.data);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return de(this, void 0, void 0, (function() {
                    return ue(this, (function(e) {
                        this._data = this._setDefaultData();
                        delete this._graphin;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.set = function(e) {
                this._graphin = e
            }
            ;
            e.prototype.get = function() {
                return this._graphin
            }
            ;
            e.prototype.refreshData = function() {
                if (!this._data)
                    this._data;
                this._changeFacade();
                this._data = {
                    nodes: le(this._data.nodes),
                    edges: le(this._data.edges)
                };
                this._data = this._facade.facade.pinker.pink(this._data);
                return this._data
            }
            ;
            e.prototype.getData = function() {
                return this._data
            }
            ;
            e.prototype.setData = function(e) {
                this._data = e
            }
            ;
            e.prototype.clear = function() {
                this._data = this._setDefaultData()
            }
            ;
            var n;
            oe([Object(c["inject"])(u.GraphinFacadeService), ce("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_facade", void 0);
            e = oe([Object(c["injectable"])()], e);
            return e
        }();
        var fe = se;
        var pe = 2;
        var he = .1;
        var me = function() {
            function e() {
                this._minZoom = he;
                this._maxZoom = pe;
                this._step = .1;
                this._currentZoom = 1
            }
            e.prototype.deactivate = function() {}
            ;
            e.prototype.active = function(e) {
                this._graphin = e
            }
            ;
            e.prototype.update = function(e) {
                this._graphin = e
            }
            ;
            e.prototype._getCenter = function() {
                var e, n, t;
                var i = (e = this._graphin) === null || e === void 0 ? void 0 : e.graphDOM.getBoundingClientRect();
                return {
                    x: ((n = i) === null || n === void 0 ? void 0 : n.width) / 2,
                    y: ((t = i) === null || t === void 0 ? void 0 : t.height) / 2
                }
            }
            ;
            e.prototype._zoom = function(e) {
                var n;
                var t = this._currentZoom + (e ? this._step : -this._step);
                t = t < this._minZoom ? this._minZoom : t;
                t = t > this._maxZoom ? this._maxZoom : t;
                this._currentZoom = t;
                (n = this._graphin) === null || n === void 0 ? void 0 : n.graph.zoomTo(this._currentZoom, this._getCenter())
            }
            ;
            e.prototype.zoomIn = function() {
                this._zoom(true)
            }
            ;
            e.prototype.zoomOut = function() {
                this._zoom(false)
            }
            ;
            e.prototype.zoom = function() {
                return this._currentZoom
            }
            ;
            return e
        }();
        var _e = me;
        var ve = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ge = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ye = function() {
            function e() {
                this._locking = false;
                this._rect = {}
            }
            e.prototype.deactivate = function() {
                this._refresh = null;
                this._target = null
            }
            ;
            e.prototype.active = function(e, n) {
                this._graphin = e;
                this._target = n
            }
            ;
            e.prototype.update = function(e, n) {
                this._graphin = e;
                this._target = n
            }
            ;
            e.prototype.setPanelRefresh = function(e) {
                var n = this;
                this._refresh = function(t) {
                    var i = t ? n._rect.fullscreen : n._rect.raw;
                    i && n._graphin.graph.changeSize(i.width, i.height);
                    e()
                }
            }
            ;
            e.prototype.isFullscreen = function() {
                return !!document.fullscreenElement
            }
            ;
            e.prototype._disableEventListener = function() {
                this._locking = true
            }
            ;
            e.prototype._enableEventListener = function() {
                this._locking = false
            }
            ;
            e.prototype.enterFullscreen = function() {
                return ve(this, void 0, void 0, (function() {
                    var e;
                    var n = this;
                    return ge(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            if (this._locking)
                                return [2];
                            this._disableEventListener();
                            t.label = 1;
                        case 1:
                            t.trys.push([1, 3, 4, 5]);
                            if (!this._graphin)
                                return [2];
                            this._target.onfullscreenchange = function(e) {
                                if (document.fullscreenElement !== e.target) {
                                    n.clearEvents();
                                    n._refresh(false)
                                }
                            }
                            ;
                            this._target.onfullscreenerror = function(e) {
                                n.clearEvents()
                            }
                            ;
                            this._rect.raw = this._target.getBoundingClientRect();
                            return [4, this._target.requestFullscreen()];
                        case 2:
                            t.sent();
                            this._rect.fullscreen = this._target.getBoundingClientRect();
                            this._refresh(true);
                            return [3, 5];
                        case 3:
                            e = t.sent();
                            throw e;
                        case 4:
                            this._enableEventListener();
                            return [7];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.clearEvents = function() {
                this._target.onfullscreenchange = null;
                this._target.onfullscreenerror = null
            }
            ;
            e.prototype.exitFullscreen = function() {
                return ve(this, void 0, void 0, (function() {
                    var e;
                    return ge(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            if (this._locking)
                                return [2];
                            this._disableEventListener();
                            n.label = 1;
                        case 1:
                            n.trys.push([1, 3, 4, 5]);
                            return [4, document.exitFullscreen()];
                        case 2:
                            n.sent();
                            return [3, 5];
                        case 3:
                            e = n.sent();
                            throw e;
                        case 4:
                            this._enableEventListener();
                            return [7];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var be = ye;
        var we;
        (function(e) {
            e["ZOOM_IN"] = "graphin:zoom-in";
            e["ZOOM_OUT"] = "graphin:zoom-out";
            e["ENTER_FULLSCREEN"] = "graphin:enter-fullscreen";
            e["EXIT_FULLSCREEN"] = "graphin.exit-fullscreen";
            e["LAYOUT"] = "graphin:layout";
            e["FACE"] = "graphin:face"
        }
        )(we || (we = {}));
        var Ee = t(3);
        var Se = function() {
            return [{
                name: "circle",
                desc: Ee["get"]("graph-analyser.layout.circle").d("圆形布局"),
                icon: "shitu-yuanxingbuju"
            }, {
                name: "dagre",
                desc: Ee["get"]("graph-analyser.layout.degre").d("有向分层"),
                icon: "shitu-youxiangbuju"
            }, {
                name: "radial",
                desc: Ee["get"]("graph-analyser.layout.radial").d("径向布局"),
                icon: "shitu-jingxiangbuju"
            }, {
                name: "grid",
                desc: Ee["get"]("graph-analyser.layout.grid").d("横纵布局"),
                icon: "shitu-hengzongbuju"
            }, {
                name: "concentric",
                desc: Ee["get"]("graph-analyser.layout.concentric").d("同心圆布局"),
                icon: "shitu-yuanxingbuju"
            }, {
                name: "force",
                desc: Ee["get"]("graph-analyser.layout.force").d("力导布局"),
                icon: "shitu-lidaobuju"
            }]
        };
        var ke = function() {
            function e() {}
            e.prototype.deactivate = function() {
                delete this._layout
            }
            ;
            e.prototype.active = function(e) {
                this._graphin = e;
                this._layout = this._layout || "concentric"
            }
            ;
            e.prototype.update = function(e) {
                this._graphin = e
            }
            ;
            Object.defineProperty(e.prototype, "supportedLayout", {
                get: function() {
                    return Se()
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(e.prototype, "current", {
                get: function() {
                    return this._layout
                },
                enumerable: true,
                configurable: true
            });
            e.prototype.change = function(e) {
                this._layout = e
            }
            ;
            return e
        }();
        var xe = ke;
        var Oe = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Fe = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Ne = undefined && undefined.__param || function(e, n) {
            return function(t, i) {
                n(t, i, e)
            }
        }
        ;
        var De = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var je = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Pe = "GraphinService";
        var Te = function() {
            function e(e) {
                this.name = "GraphAnalyserGraphinCommandService";
                this.controllers = {
                    zoom: new _e,
                    fullscreen: new be,
                    layout: new xe
                };
                this._releaseQ = [];
                this._command = e
            }
            e.prototype._registerCommands = function() {
                var e = this;
                this._log.debug(Pe, "Register Commands");
                this._command.register(we.ZOOM_IN, (function() {
                    return De(e, void 0, void 0, (function() {
                        return je(this, (function(e) {
                            this._log.debug(Pe, "Graphin is zooming in");
                            this.controllers.zoom.zoomIn();
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ));
                this._command.register(we.ZOOM_OUT, (function() {
                    return De(e, void 0, void 0, (function() {
                        return je(this, (function(e) {
                            this._log.debug(Pe, "Graphin is zooming out");
                            this.controllers.zoom.zoomOut();
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ));
                this._command.register(we.LAYOUT, (function(n) {
                    return De(e, void 0, void 0, (function() {
                        var e;
                        return je(this, (function(t) {
                            this._log.debug(Pe, "Graphin is changing layout to [" + n + "]");
                            this.controllers.layout.change(n);
                            (e = this._core) === null || e === void 0 ? void 0 : e.refresh();
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ));
                this._command.register(we.FACE, (function(n) {
                    return De(e, void 0, void 0, (function() {
                        var e;
                        return je(this, (function(t) {
                            this._log.debug(Pe, "Graphin is changing face to [" + n + "]");
                            this._facade.changeCurrentFacadeProvider(n);
                            (e = this._core) === null || e === void 0 ? void 0 : e.refresh(true);
                            return [2]
                        }
                        ))
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.activate = function(e) {
                return De(this, void 0, void 0, (function() {
                    return je(this, (function(n) {
                        this._log.debug(Pe, "Active the Graphin Service");
                        this._core = e;
                        this._registerCommands();
                        this._core.data && this.controllers.layout.change(this._core.data.layout);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return De(this, void 0, void 0, (function() {
                    return je(this, (function(n) {
                        this._log.debug(Pe, "Update the Graphin Service");
                        this._core = e;
                        this._core.data && this.controllers.layout.change(this._core.data.layout);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return De(this, void 0, void 0, (function() {
                    return je(this, (function(e) {
                        this._log.debug(Pe, "deactivate the Graphin Service");
                        this._releaseQ.forEach((function(e) {
                            return e()
                        }
                        ));
                        delete this._graphin;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._dispatchGraphIn = function(e) {
                var n = this;
                Object.values(this.controllers).forEach((function(t) {
                    return e ? t.update(n.get(), n._core.target) : t.active(n.get(), n._core.target)
                }
                ));
                this._releaseQ.push((function() {
                    Object.values(n.controllers).forEach((function(e) {
                        return e.deactivate()
                    }
                    ))
                }
                ));
                this.controllers.fullscreen.setPanelRefresh(this._core.refresh.bind(this._core))
            }
            ;
            e.prototype.set = function(e) {
                this._log.debug(Pe, "Set Graphin Ref");
                var n = !!this._graphin;
                this._graphin = e;
                this._dispatchGraphIn(n)
            }
            ;
            e.prototype.get = function() {
                this._log.debug(Pe, "Get Graphin Ref");
                return this._graphin
            }
            ;
            e.prototype.getOptions = function() {
                this._log.debug(Pe, "Get Options");
                return {
                    zoom: this.controllers.zoom.zoom(),
                    isFullscreen: this.controllers.fullscreen.isFullscreen(),
                    layout: {
                        current: this.controllers.layout.current,
                        supported: this.controllers.layout.supportedLayout
                    }
                }
            }
            ;
            e.prototype.requestFullscreen = function() {
                return De(this, void 0, void 0, (function() {
                    var e;
                    return je(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            this._log.debug(Pe, "Try to Request Full Screen");
                            n.label = 1;
                        case 1:
                            n.trys.push([1, 3, , 4]);
                            return [4, this.controllers.fullscreen.enterFullscreen()];
                        case 2:
                            n.sent();
                            return [3, 4];
                        case 3:
                            e = n.sent();
                            this._log.error(Pe, A, e.message);
                            return [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.exitFullscreen = function() {
                return De(this, void 0, void 0, (function() {
                    var e;
                    return je(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            this._log.debug(Pe, "Try to Exit Full Screen");
                            n.label = 1;
                        case 1:
                            n.trys.push([1, 3, , 4]);
                            return [4, this.controllers.fullscreen.exitFullscreen()];
                        case 2:
                            n.sent();
                            return [3, 4];
                        case 3:
                            e = n.sent();
                            this._log.error(Pe, G, e.message);
                            return [3, 4];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            var n, t, i;
            Oe([Object(c["inject"])(u.LogService), Fe("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            Oe([Object(c["inject"])(u.GraphinFacadeService), Fe("design:type", typeof (t = typeof undefined !== "undefined" && undefined) === "function" ? t : Object)], e.prototype, "_facade", void 0);
            e = Oe([Object(c["injectable"])(), Ne(0, Object(c["inject"])(new c["LazyServiceIdentifer"]((function() {
                return u.CommandService
            }
            )))), Fe("design:paramtypes", [typeof (i = typeof undefined !== "undefined" && undefined) === "function" ? i : Object])], e);
            return e
        }();
        var Ie = Te;
        var Ce = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Le = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Re = undefined && undefined.__param || function(e, n) {
            return function(t, i) {
                n(t, i, e)
            }
        }
        ;
        var Ae = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Ge = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ze = function() {
            function e(e) {
                this.name = "GraphAnalyserSnapshotService";
                this._graphin = e
            }
            e.prototype.activate = function(e) {
                return Ae(this, void 0, void 0, (function() {
                    return Ge(this, (function(n) {
                        this._core = e;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return Ae(this, void 0, void 0, (function() {
                    return Ge(this, (function(n) {
                        this._core = e;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Ae(this, void 0, void 0, (function() {
                    return Ge(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.take = function() {
                return {
                    data: a["cloneDeep"](this._graphin.getData()),
                    setting: {}
                }
            }
            ;
            e.prototype.restore = function(e) {
                this._graphin.setData(e.data);
                this._core.refresh()
            }
            ;
            var n;
            e = Ce([Object(c["injectable"])(), Re(0, Object(c["inject"])(new c["LazyServiceIdentifer"]((function() {
                return u.GraphinDataService
            }
            )))), Le("design:paramtypes", [typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object])], e);
            return e
        }();
        var Be = ze;
        var Me = t(962);
        var Xe = undefined && undefined.__assign || function() {
            Xe = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Xe.apply(this, arguments)
        }
        ;
        var Ve;
        (function(e) {
            e[e["DFS"] = 0] = "DFS";
            e[e["BFS"] = 1] = "BFS"
        }
        )(Ve || (Ve = {}));
        var We = function() {
            function e() {
                this._dispatcher = 0;
                this._root = {
                    id: this._dispatchIdentity(),
                    isMainPath: true,
                    children: [],
                    parent: null
                };
                this._current = this._root
            }
            e.prototype.history = function(e, n, t) {
                this.walk((function(e) {
                    e.isMainPath = false
                }
                ));
                var i = {
                    id: this._dispatchIdentity(),
                    isMainPath: true,
                    children: [],
                    parent: this._current,
                    data: {
                        type: e,
                        args: n,
                        snapshot: t
                    }
                };
                this._current.children.push(i);
                this._current = i;
                var a = function(e) {
                    e.isMainPath = true;
                    if (e.parent)
                        a(e.parent)
                };
                a(this._current)
            }
            ;
            e.prototype.undo = function() {
                var e;
                var n = this._current;
                this._current = this._current.parent || this._root;
                return (e = n) === null || e === void 0 ? void 0 : e.data
            }
            ;
            e.prototype.redo = function() {
                var e = this._current;
                var n = e.children.find((function(e) {
                    return e.isMainPath
                }
                ));
                if (!n)
                    return;
                this._current = n;
                return e.data
            }
            ;
            e.prototype._dispatchIdentity = function() {
                return this._dispatcher++
            }
            ;
            e.prototype._walkByDFS = function(e) {
                var n = function(t) {
                    e(t);
                    t.children.forEach(n)
                };
                n(this._root)
            }
            ;
            e.prototype._walkByBFS = function(e) {
                var n = [this._root];
                while (n.length > 0) {
                    var t = n.pop();
                    e(t);
                    n.push.apply(n, t.children)
                }
            }
            ;
            e.prototype.walk = function(e, n) {
                if (n === void 0) {
                    n = Ve.BFS
                }
                if (n === Ve.BFS)
                    return this._walkByBFS(e);
                if (n === Ve.DFS)
                    return this._walkByDFS(e)
            }
            ;
            e.prototype.dump = function() {
                var e = function(n) {
                    var t = Xe(Xe({}, n), {
                        parent: n.parent.id,
                        children: n.children.map((function(n) {
                            return e(n)
                        }
                        ))
                    });
                    return t
                };
                return {
                    root: e(this._root),
                    currentId: this._current.id,
                    dispatcher: this._dispatcher
                }
            }
            ;
            e.prototype.findHistoryById = function(e) {
                var n = null;
                this.walk((function(t) {
                    if (t.id === e)
                        n = t
                }
                ));
                if (!n)
                    throw new Error("Can not find current history [" + e + "]");
                return n
            }
            ;
            e.prototype.restore = function(e) {
                var n = function(e, t) {
                    var i = Xe(Xe({}, t), {
                        parent: e,
                        children: t.children.map((function(e) {
                            return n(i, e)
                        }
                        ))
                    });
                    e && e.children.push(i);
                    return i
                };
                this._root = n(null, e.root);
                this._current = this.findHistoryById(e.currentId);
                this._dispatcher = e.dispatcher
            }
            ;
            e.prototype.getMainPath = function() {
                var e = [];
                var n = this._current;
                do {
                    e.push(n);
                    n = n.parent
                } while (n);return e.reverse()
            }
            ;
            return e
        }();
        var Ue = We;
        var qe = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var He = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Ke = undefined && undefined.__param || function(e, n) {
            return function(t, i) {
                n(t, i, e)
            }
        }
        ;
        var Ye = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Ze = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Je = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var $e = function() {
            function e(e, n, t) {
                this.name = "GraphAnalyserCommandService";
                this._history = new Ue;
                this._providers = new Map;
                this._graphin = e;
                this._snapshot = n;
                this._log = t
            }
            e.prototype.register = function(e, n) {
                return Ye(this, void 0, void 0, (function() {
                    return Ze(this, (function(t) {
                        if (!this._providers.has(e))
                            this._providers.set(e, []);
                        this._providers.get(e).push({
                            callback: n
                        });
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.replay = function() {
                return Ye(this, void 0, void 0, (function() {
                    var e, n;
                    return Ze(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            e = this._history.getMainPath();
                            t.label = 1;
                        case 1:
                            if (!(e.length >= 0))
                                return [3, 3];
                            n = e.pop();
                            return [4, this._do.apply(this, Je([true, n.data.type], n.data.args))];
                        case 2:
                            t.sent();
                            return [3, 1];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.undo = function() {
                var e = this._history.undo();
                var n = e.snapshot.unpatch;
                var t = this._apply_patch(n, this.image);
                this._snapshot.restore({
                    data: JSON.parse(t.data),
                    setting: JSON.parse(t.setting)
                })
            }
            ;
            e.prototype.redo = function() {
                var e = this._history.redo();
                var n = e.snapshot.patch;
                var t = this._apply_patch(n, this.image);
                this._snapshot.restore({
                    data: JSON.parse(t.data),
                    setting: JSON.parse(t.setting)
                })
            }
            ;
            e.prototype._patch = function(e, n) {
                if (n === void 0) {
                    n = {
                        data: "",
                        setting: ""
                    }
                }
                var t = new Me["diff_match_patch"];
                return {
                    patch: {
                        data: t.patch_toText(t.patch_make(n.data, e.data)),
                        setting: t.patch_toText(t.patch_make(n.setting, e.setting))
                    },
                    unpatch: {
                        data: t.patch_toText(t.patch_make(e.data, n.data)),
                        setting: t.patch_toText(t.patch_make(e.setting, n.setting))
                    }
                }
            }
            ;
            e.prototype._apply_patch = function(e, n) {
                var t = new Me["diff_match_patch"];
                return {
                    data: t.patch_apply(t.patch_fromText(n.data), e.data)[0],
                    setting: t.patch_apply(t.patch_fromText(n.data), e.setting)[0]
                }
            }
            ;
            e.prototype._generateImage = function(e) {
                var n = JSON.stringify(e.data || {}, null, 4);
                var t = JSON.stringify(e.setting || {}, null, 4);
                return {
                    data: n,
                    setting: t
                }
            }
            ;
            e.prototype._recoverSnapshot = function(e) {
                return {
                    data: JSON.parse(e.data),
                    setting: JSON.parse(e.setting)
                }
            }
            ;
            e.prototype._do = function(e, n) {
                var t = [];
                for (var i = 2; i < arguments.length; i++) {
                    t[i - 2] = arguments[i]
                }
                var a;
                return Ye(this, void 0, void 0, (function() {
                    var i, r, o;
                    return Ze(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            c.trys.push([0, 2, , 3]);
                            i = this.image;
                            return [4, Promise.all((a = this._providers.get(n)) === null || a === void 0 ? void 0 : a.map((function(e) {
                                var n = e.callback;
                                return n.apply(void 0, t)
                            }
                            )))];
                        case 1:
                            c.sent();
                            r = this._snapshot.take();
                            this.image = this._generateImage(r);
                            if (!e) {
                                this._history.history(n, t, this._patch(this.image, i))
                            }
                            return [3, 3];
                        case 2:
                            o = c.sent();
                            this.image && this._snapshot.restore(this._recoverSnapshot(this.image));
                            throw o;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.do = function(e) {
                var n = [];
                for (var t = 1; t < arguments.length; t++) {
                    n[t - 1] = arguments[t]
                }
                return Ye(this, void 0, void 0, (function() {
                    return Ze(this, (function(t) {
                        this._do.apply(this, Je([false, e], n));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.dumpHistoryTree = function() {
                return this._history.dump()
            }
            ;
            e.prototype.restoreHistoryTree = function(e) {
                return this._history.restore(e)
            }
            ;
            e.prototype.activate = function() {
                return Ye(this, void 0, void 0, (function() {
                    return Ze(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return Ye(this, void 0, void 0, (function() {
                    return Ze(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Ye(this, void 0, void 0, (function() {
                    return Ze(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            var n, t, i;
            e = qe([Object(c["injectable"])(), Ke(0, Object(c["inject"])(new c["LazyServiceIdentifer"]((function() {
                return u.GraphinDataService
            }
            )))), Ke(1, Object(c["inject"])(new c["LazyServiceIdentifer"]((function() {
                return u.SnapshotService
            }
            )))), Ke(2, Object(c["inject"])(u.LogService)), He("design:paramtypes", [typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object, typeof (t = typeof undefined !== "undefined" && undefined) === "function" ? t : Object, typeof (i = typeof undefined !== "undefined" && undefined) === "function" ? i : Object])], e);
            return e
        }();
        var Qe = $e;
        var en = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var nn = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var tn = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var an = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var rn = "PluginStorageService";
        var on = function() {
            function e() {
                this.name = "GraphAnalyserPluginStorageService";
                this._plugins = new Map
            }
            e.prototype.activate = function() {
                return tn(this, void 0, void 0, (function() {
                    return an(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return tn(this, void 0, void 0, (function() {
                    return an(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return tn(this, void 0, void 0, (function() {
                    return an(this, (function(e) {
                        this._plugins.clear();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.all = function() {
                return Array.from(this._plugins.values())
            }
            ;
            e.prototype.get = function(e) {
                return this._plugins.get(e)
            }
            ;
            e.prototype.set = function(e) {
                var n = this;
                var t = Array.isArray(e) ? e : [e];
                t.forEach((function(e) {
                    if (n._plugins.has(e.name)) {
                        return n._logService.error(rn, M, "Plugin[" + e.name + "] exists")
                    }
                    n._plugins.set(e.name, e)
                }
                ))
            }
            ;
            var n;
            en([Object(c["inject"])(u.LogService), nn("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_logService", void 0);
            e = en([Object(c["injectable"])()], e);
            return e
        }();
        var cn = on;
        var dn;
        (function(e) {
            e[e["LEFT_TOP"] = 0] = "LEFT_TOP";
            e[e["RIGHT_TOP"] = 1] = "RIGHT_TOP";
            e[e["LEFT_BOTTOM"] = 2] = "LEFT_BOTTOM";
            e[e["RIGHT_BOTTOM"] = 3] = "RIGHT_BOTTOM"
        }
        )(dn || (dn = {}));
        var un;
        (function(e) {
            e[e["NODE"] = 0] = "NODE";
            e[e["EDGE"] = 1] = "EDGE"
        }
        )(un || (un = {}));
        var ln;
        (function(e) {
            e[e["LAYOUT"] = 0] = "LAYOUT";
            e[e["FOCUS"] = 1] = "FOCUS";
            e[e["ZOOM"] = 2] = "ZOOM";
            e[e["FIT"] = 3] = "FIT";
            e[e["SELECT"] = 4] = "SELECT";
            e[e["CLEAR"] = 5] = "CLEAR";
            e[e["FACE"] = 6] = "FACE"
        }
        )(ln || (ln = {}));
        var sn;
        (function(e) {
            e["XS"] = "XS";
            e["S"] = "S";
            e["M"] = "M";
            e["L"] = "L";
            e["XL"] = "XL"
        }
        )(sn || (sn = {}));
        var fn;
        (function(e) {
            e["PRIMARY"] = "primary";
            e["PURPLE"] = "purple";
            e["BLUE"] = "blue";
            e["PINK"] = "pink";
            e["RED"] = "red";
            e["YELLOW"] = "yellow";
            e["ORANGE"] = "orange";
            e["GREEN"] = "green";
            e["GREY"] = "grey"
        }
        )(fn || (fn = {}));
        var pn;
        (function(e) {
            e["SOLID"] = "solid";
            e["DASH_1"] = "dash_1";
            e["DASH_2"] = "dash_2";
            e["DASH_3"] = "dash_3"
        }
        )(pn || (pn = {}));
        var hn;
        (function(e) {
            e["NORMAL"] = "normal";
            e["SELECTED"] = "selected";
            e["LIGHT"] = "highlight.light";
            e["DARK"] = "highlight.dark";
            e["HOVERED"] = "hovered"
        }
        )(hn || (hn = {}));
        var mn;
        (function(e) {
            e[e["NODE"] = 0] = "NODE";
            e[e["EDGE"] = 1] = "EDGE"
        }
        )(mn || (mn = {}));
        var _n;
        (function(e) {
            e[e["WITH_ICON"] = 0] = "WITH_ICON";
            e[e["WITHOUT_ICON"] = 1] = "WITHOUT_ICON";
            e[e["LONG"] = 2] = "LONG";
            e[e["MINI"] = 3] = "MINI"
        }
        )(_n || (_n = {}));
        var vn;
        function gn(e, n, t) {
            var i = function(i) {
                return "rgba(" + [e, n, t].join(",") + ", " + i + ")"
            };
            return {
                normal: i(1),
                dark: i(.7)
            }
        }
        var yn = (vn = {},
        vn[fn.PRIMARY] = gn(0, 193, 222),
        vn[fn.PURPLE] = gn(107, 46, 230),
        vn[fn.BLUE] = gn(46, 138, 230),
        vn[fn.PINK] = gn(230, 46, 169),
        vn[fn.RED] = gn(230, 46, 77),
        vn[fn.YELLOW] = gn(230, 168, 46),
        vn[fn.ORANGE] = gn(230, 101, 46),
        vn[fn.GREEN] = gn(53, 181, 52),
        vn[fn.GREY] = gn(30, 32, 45),
        vn);
        var bn = yn;
        var wn, En;
        var Sn = (wn = {},
        wn[sn.XS] = .5,
        wn[sn.S] = .75,
        wn[sn.M] = 1,
        wn[sn.L] = 2,
        wn[sn.XL] = 3,
        wn);
        var kn = (En = {},
        En[sn.XS] = .5,
        En[sn.S] = .75,
        En[sn.M] = 1,
        En[sn.L] = 2,
        En[sn.XL] = 3,
        En);
        var xn = {
            node: Sn,
            edge: kn
        };
        var On;
        var Fn = (On = {},
        On[pn.DASH_3] = [2, 2],
        On[pn.DASH_2] = [4, 4],
        On[pn.DASH_1] = [6, 6],
        On[pn.SOLID] = [],
        On);
        var Nn = Fn;
        var Dn = t(845);
        var jn = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Pn = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Tn = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var In = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Cn = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var Ln = "1.0";
        var Rn = function() {
            function e() {
                this.name = "GraphAnalyserPluginService"
            }
            e.prototype.activate = function() {
                return Tn(this, void 0, void 0, (function() {
                    return In(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return Tn(this, void 0, void 0, (function() {
                    return In(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Tn(this, void 0, void 0, (function() {
                    return In(this, (function(e) {
                        this._storage.all().map((function(e) {
                            return e.deactivate()
                        }
                        ));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._generatePluginCore = function() {
                var e = this;
                var n = this;
                return {
                    version: Ln,
                    core: {
                        getData: function() {
                            return {
                                schema: e._analysis.schema,
                                instance: e._analysis.instance,
                                analysis: e._analysis.information,
                                data: e._data.getData(),
                                iconfont: e._facade.getIconfontProvider().provide().iconfont
                            }
                        }
                    },
                    utils: {
                        color: bn,
                        size: xn,
                        lineStyle: Nn,
                        http: this._http,
                        task: this._task,
                        font: {
                            transformToUnicode: function(n, t) {
                                var i;
                                var a = Cn(e._facade.getIconfontProvider().provide().iconfont, [e._facade.getSystemIconfont()]);
                                var r = a.find((function(e) {
                                    return e.fontFamily === n
                                }
                                ));
                                var o = (i = r) === null || i === void 0 ? void 0 : i.map.find((function(e) {
                                    return e.font_class === t
                                }
                                ));
                                return o && String.fromCodePoint(o.unicode_decimal)
                            }
                        }
                    },
                    graph: {
                        provideSearchPanel: this._search.provideSearchPanel.bind(this._search),
                        provideStatisticsPanel: this._statistic.provideStatisticsPanel.bind(this._statistic),
                        providePreviewPanel: this._preview.providePreviewPanel.bind(this._preview),
                        provideFacade: this._facade.provideFacade.bind(this._facade),
                        provideIconfont: this._facade.provideIconfont.bind(this._facade),
                        getZoomLevel: function() {
                            return 1
                        },
                        getLayouts: function() {
                            return []
                        },
                        get hasLabel() {
                            return n._options.get("graph.hasLabel")
                        }
                    }
                }
            }
            ;
            e.prototype.register = function(e) {
                this._storage.set(e);
                e.activate(this._generatePluginCore())
            }
            ;
            var n, t, i, a, r, o, d, l, s, f, p, h;
            jn([Object(c["inject"])(u.LogService), Pn("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            jn([Object(c["inject"])(u.CommandService), Pn("design:type", typeof (t = typeof undefined !== "undefined" && undefined) === "function" ? t : Object)], e.prototype, "_command", void 0);
            jn([Object(c["inject"])(u.PluginStorageService), Pn("design:type", typeof (i = typeof undefined !== "undefined" && undefined) === "function" ? i : Object)], e.prototype, "_storage", void 0);
            jn([Object(c["inject"])(u.GraphinDataService), Pn("design:type", typeof (a = typeof undefined !== "undefined" && undefined) === "function" ? a : Object)], e.prototype, "_data", void 0);
            jn([Object(c["inject"])(u.GraphinFacadeService), Pn("design:type", typeof (r = typeof undefined !== "undefined" && undefined) === "function" ? r : Object)], e.prototype, "_facade", void 0);
            jn([Object(c["inject"])(u.SearchPanelService), Pn("design:type", typeof (o = typeof Dn["IGraphAnalyserSearchPanelService"] !== "undefined" && Dn["IGraphAnalyserSearchPanelService"]) === "function" ? o : Object)], e.prototype, "_search", void 0);
            jn([Object(c["inject"])(u.AnalysisTaskInformation), Pn("design:type", typeof (d = typeof Dn["IGraphAnalyserAnalysisTaskInformationService"] !== "undefined" && Dn["IGraphAnalyserAnalysisTaskInformationService"]) === "function" ? d : Object)], e.prototype, "_analysis", void 0);
            jn([Object(c["inject"])(u.StatisticPanelService), Pn("design:type", typeof (l = typeof Dn["IGraphAnalyserStaticsPanelService"] !== "undefined" && Dn["IGraphAnalyserStaticsPanelService"]) === "function" ? l : Object)], e.prototype, "_statistic", void 0);
            jn([Object(c["inject"])(u.PreviewPanelService), Pn("design:type", typeof (s = typeof Dn["IGraphAnalyserPreviewPanelService"] !== "undefined" && Dn["IGraphAnalyserPreviewPanelService"]) === "function" ? s : Object)], e.prototype, "_preview", void 0);
            jn([Object(c["inject"])(u.HttpService), Pn("design:type", typeof (f = typeof undefined !== "undefined" && undefined) === "function" ? f : Object)], e.prototype, "_http", void 0);
            jn([Object(c["inject"])(u.TaskService), Pn("design:type", typeof (p = typeof undefined !== "undefined" && undefined) === "function" ? p : Object)], e.prototype, "_task", void 0);
            jn([Object(c["inject"])(u.OptionService), Pn("design:type", typeof (h = typeof undefined !== "undefined" && undefined) === "function" ? h : Object)], e.prototype, "_options", void 0);
            e = jn([Object(c["injectable"])()], e);
            return e
        }();
        var An = Rn;
        var Gn = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var zn = function() {
            function e(e) {
                this._service = e
            }
            e.prototype._adaptIcons = function() {
                var e = this;
                var n = this._service.getIconfontProvider();
                var t = n.provide().iconfont;
                return function() {
                    return Gn(t, [e._service.getSystemIconfont()])
                }
            }
            ;
            e.prototype._adaptEdgeFacade = function() {
                var e = function(e) {
                    var n = e.provideEdgeFacadePainter();
                    return {
                        name: e.name,
                        register: function(t) {
                            t.registerEdge(e.name + "-edge", {
                                draw: n.draw,
                                afterDraw: n.afterDraw,
                                update: n.update,
                                afterUpdate: n.afterUpdate,
                                setState: function(e, t, i) {
                                    var a, r;
                                    if (!e || !t)
                                        return (a = n) === null || a === void 0 ? void 0 : a.setState.call(this, hn.NORMAL, t, i);
                                    return (r = n) === null || r === void 0 ? void 0 : r.setState.call(this, e, t, i)
                                }
                            })
                        }
                    }
                };
                var n = this._service.getAllFacadeProviders();
                return function() {
                    return n.map(e)
                }
            }
            ;
            e.prototype._adaptNodeFacade = function() {
                var e = function(e) {
                    var n = e.provideNodeFacadePainter();
                    return {
                        name: e.name,
                        register: function(t) {
                            t.registerNode(e.name + "-node", {
                                draw: n.draw,
                                afterDraw: n.afterDraw,
                                update: n.update,
                                afterUpdate: n.afterUpdate,
                                setState: function(e, t, i) {
                                    var a, r;
                                    if (!e || !t)
                                        return (a = n) === null || a === void 0 ? void 0 : a.setState.call(this, hn.NORMAL, t, i);
                                    return (r = n) === null || r === void 0 ? void 0 : r.setState.call(this, e, t, i)
                                },
                                getAnchorPoints: n.getAnchorPoints
                            })
                        }
                    }
                };
                var n = this._service.getAllFacadeProviders();
                return function(t) {
                    return n.map(e)
                }
            }
            ;
            e.prototype.adapt = function() {
                try {
                    return {
                        extend: {
                            icon: this._adaptIcons()
                        },
                        register: {
                            nodeShape: this._adaptNodeFacade(),
                            edgeShape: this._adaptEdgeFacade()
                        }
                    }
                } catch (e) {
                    console.error(e)
                }
            }
            ;
            return e
        }();
        var Bn = zn;
        var Mn = undefined && undefined.__assign || function() {
            Mn = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Mn.apply(this, arguments)
        }
        ;
        var Xn = function() {
            function e(e) {
                this._controller = e
            }
            e.prototype._storeSetting = function(e, n, t) {
                var i = e.find((function(e) {
                    return a["isEqual"](e.path, n)
                }
                ));
                if (i) {
                    i.setting = Mn(Mn({}, i.setting), t)
                } else {
                    e.push({
                        path: n,
                        setting: t
                    })
                }
                this._controller.core.refresh(true);
                return e
            }
            ;
            e.prototype.setNodeType = function(e, n) {
                this._controller.setting.nodes.type = this._storeSetting(this._controller.setting.nodes.type, e, n)
            }
            ;
            e.prototype.setNodePropertyKey = function(e, n) {
                this._controller.setting.nodes.propertyKey = this._storeSetting(this._controller.setting.nodes.propertyKey, e, n)
            }
            ;
            e.prototype.setNodePropertyValue = function(e, n) {
                this._controller.setting.nodes.propertyValue = this._storeSetting(this._controller.setting.nodes.propertyValue, e, n)
            }
            ;
            e.prototype.setEdgeType = function(e, n) {
                this._controller.setting.edges.type = this._storeSetting(this._controller.setting.edges.type, e, n)
            }
            ;
            e.prototype.setEdgePropertyKey = function(e, n) {
                this._controller.setting.edges.propertyKey = this._storeSetting(this._controller.setting.edges.propertyKey, e, n)
            }
            ;
            e.prototype.setEdgePropertyValue = function(e, n) {
                this._controller.setting.edges.propertyValue = this._storeSetting(this._controller.setting.edges.propertyValue, e, n)
            }
            ;
            return e
        }();
        var Vn = Xn;
        var Wn = function(e) {
            var n = /^<[a-zA-Z0-9\s]+>$/;
            if (n.test(e.caption)) {
                return e.caption.substring(1, e.caption.length - 1)
            }
            return "properties." + e.caption
        };
        var Un = function(e) {
            var n = e.facade.display || Wn(e.data.schema);
            if (n === "id") {
                return e.data.id
            }
            if (n.startsWith("properties.")) {
                n = a["get"](e.data, n)
            } else {
                n = a["get"](e.data.schema, n)
            }
            return n
        };
        var qn = function() {
            function e(e) {
                this._controller = e
            }
            e.prototype._initTree = function(e, n) {
                var t = this;
                return n.reduce((function(n, i) {
                    var r = t._controller.core.getService(u.GraphinFacadeService);
                    var o = r.getIconfontProvider().provide().default;
                    var c = i.data.schema;
                    if (!n[c.label]) {
                        n[c.label] = {
                            properties: {},
                            count: 0,
                            display: i.facade.display || Wn(i.data.schema),
                            color: c.color || fn.GREEN,
                            size: c.size || sn.M,
                            hidden: false
                        };
                        e === "node" && (n[c.label].icon = o.name);
                        e === "node" && (n[c.label].fontFamily = o.fontFamily);
                        e === "edge" && (n[c.label].lineStyle = pn.SOLID)
                    }
                    var d = n[c.label];
                    d.count++;
                    a["forEach"](i.data.properties || {}, (function(n, t) {
                        if (!d.properties[t]) {
                            d.properties[t] = {
                                count: 0,
                                selected: true,
                                type: c.propertyDefList.find((function(e) {
                                    return e.name === t
                                }
                                )).data_type,
                                values: {}
                            }
                        }
                        var i = d.properties[t];
                        i.count++;
                        if (!i.values[n]) {
                            i.values[n] = {
                                count: 0,
                                color: c.color || fn.GREEN,
                                size: c.size || sn.M,
                                hidden: false
                            };
                            e === "edge" && (i.values[n].lineStyle = pn.SOLID);
                            e === "node" && (i.values[n].icon = o.name);
                            e === "node" && (i.values[n].fontFamily = o.fontFamily)
                        }
                        i.values[n].count++
                    }
                    ));
                    return n
                }
                ), {})
            }
            ;
            e.prototype._decorateTreeBySchemaType = function(e, n) {
                e.forEach((function(e) {
                    var t = n[e.path[0]];
                    if (!t)
                        return;
                    t.color = e.setting.color || t.color;
                    t.size = e.setting.size || t.size;
                    t.hidden = !a["isNil"](e.setting.hidden) ? e.setting.hidden : t.hidden;
                    t.display = e.setting.display || t.display;
                    t.icon = e.setting.icon || t.icon;
                    t.fontFamily = e.setting.fontFamily || t.fontFamily;
                    t.lineStyle = e.setting.lineStyle || t.lineStyle;
                    a["each"](t.properties || {}, (function(n) {
                        a["each"](n.values, (function(n) {
                            n.color = e.setting.color || n.color;
                            n.size = e.setting.size || n.size;
                            n.hidden = !a["isNil"](e.setting.hidden) ? e.setting.hidden : n.hidden;
                            n.lineStyle = e.setting.lineStyle || n.lineStyle;
                            n.icon = e.setting.icon || n.icon;
                            n.fontFamily = e.setting.fontFamily || n.fontFamily
                        }
                        ))
                    }
                    ))
                }
                ));
                return n
            }
            ;
            e.prototype._decorateTreeBySchemaPropertyKey = function(e, n) {
                e.forEach((function(e) {
                    if (!n[e.path[0]])
                        return;
                    var t = n[e.path[0]].properties[e.path[1]];
                    t.selected = a["isNil"](e.setting.selected) ? t.selected : e.setting.selected;
                    t.type = e.setting.type || t.type
                }
                ));
                return n
            }
            ;
            e.prototype._decorateTreeBySchemaPropertyValue = function(e, n) {
                e.forEach((function(e) {
                    if (!n[e.path[0]])
                        return;
                    var t = n[e.path[0]].properties[e.path[1]].values[e.path[2]];
                    t.color = e.setting.color || t.color;
                    t.size = e.setting.size || t.size;
                    t.hidden = !a["isNil"](e.setting.hidden) ? e.setting.hidden : t.hidden;
                    t.lineStyle = e.setting.lineStyle;
                    t.icon = e.setting.icon || t.icon;
                    t.fontFamily = e.setting.fontFamily || t.fontFamily
                }
                ));
                return n
            }
            ;
            e.prototype.generate = function(e) {
                var n = this._initTree("node", e.nodes);
                var t = this._initTree("edge", e.edges);
                n = this._decorateTreeBySchemaType(this._controller.setting.nodes.type, n);
                t = this._decorateTreeBySchemaType(this._controller.setting.edges.type, t);
                n = this._decorateTreeBySchemaPropertyKey(this._controller.setting.nodes.propertyKey, n);
                t = this._decorateTreeBySchemaPropertyKey(this._controller.setting.edges.propertyKey, t);
                n = this._decorateTreeBySchemaPropertyValue(this._controller.setting.nodes.propertyValue, n);
                t = this._decorateTreeBySchemaPropertyValue(this._controller.setting.edges.propertyValue, t);
                return {
                    nodes: n,
                    edges: t
                }
            }
            ;
            return e
        }();
        var Hn = qn;
        var Kn = function() {
            function e(e) {
                this._controller = e
            }
            e.prototype._clearGraphinDataHidden = function(e) {
                e.nodes.map((function(e) {
                    e.facade.hidden = false;
                    return e
                }
                ));
                e.edges.map((function(e) {
                    e.facade.hidden = false;
                    return e
                }
                ));
                return e
            }
            ;
            e.prototype._pinkGraphinDataBySchemaType = function(e) {
                this._controller.setting.nodes.type.map((function(n) {
                    e.nodes.filter((function(e) {
                        return e.data.schema.label === n.path[0]
                    }
                    )).forEach((function(e) {
                        e.facade.color = n.setting.color || e.facade.color;
                        e.facade.size = n.setting.size || e.facade.size;
                        e.facade.hidden = !a["isNil"](n.setting.hidden) ? n.setting.hidden : e.facade.hidden;
                        e.facade.display = n.setting.display || e.facade.display || Wn(e.data.schema);
                        e.data.icon = n.setting.icon || e.data.icon;
                        e.data.fontFamily = n.setting.fontFamily || e.data.fontFamily;
                        e.label = Un(e)
                    }
                    ))
                }
                ));
                this._controller.setting.edges.type.map((function(n) {
                    e.edges.filter((function(e) {
                        return e.data.schema.label === n.path[0]
                    }
                    )).forEach((function(e) {
                        e.facade.color = n.setting.color || e.facade.color;
                        e.facade.size = n.setting.size || e.facade.size;
                        e.facade.hidden = !a["isNil"](n.setting.hidden) ? n.setting.hidden : e.facade.hidden;
                        e.facade.style = n.setting.lineStyle || e.facade.style;
                        e.facade.display = n.setting.display || e.facade.display || Wn(e.data.schema);
                        e.label = Un(e)
                    }
                    ))
                }
                ));
                return e
            }
            ;
            e.prototype._pinkGraphinDataBySchemaPropertyKey = function(e) {
                e.nodes.map((function(e) {
                    return e.facade.tooltip = Object.keys(e.data.properties)
                }
                ));
                this._controller.setting.nodes.propertyKey.map((function(n) {
                    e.nodes.filter((function(e) {
                        return e.data.schema.label === n.path[0] && Object.keys(e.data.properties).find((function(e) {
                            return e === n.path[1]
                        }
                        ))
                    }
                    )).forEach((function(e) {
                        e.facade.tooltip = e.facade.tooltip || [];
                        !n.setting.selected && a["find"](e.facade.tooltip, (function(e) {
                            return e === n.path[1]
                        }
                        )) && (e.facade.tooltip = (e.facade.tooltip || []).filter((function(e) {
                            return e !== n.path[1]
                        }
                        )))
                    }
                    ))
                }
                ));
                e.edges.map((function(e) {
                    return e.facade.tooltip = Object.keys(e.data.properties)
                }
                ));
                this._controller.setting.edges.propertyKey.map((function(n) {
                    e.edges.filter((function(e) {
                        return e.data.schema.label === n.path[0] && Object.keys(e.data.properties).find((function(e) {
                            return e === n.path[1]
                        }
                        ))
                    }
                    )).forEach((function(e) {
                        e.facade.tooltip = e.facade.tooltip || [];
                        !n.setting.selected && a["find"](e.facade.tooltip, (function(e) {
                            return e === n.path[1]
                        }
                        )) && (e.facade.tooltip = (e.facade.tooltip || []).filter((function(e) {
                            return e !== n.path[1]
                        }
                        )))
                    }
                    ))
                }
                ));
                return e
            }
            ;
            e.prototype._pinkGraphinDataBySchemaPropertyValue = function(e) {
                this._controller.setting.nodes.propertyValue.map((function(n) {
                    e.nodes.filter((function(e) {
                        return e.data.schema.label === n.path[0] && e.data.properties[n.path[1]] === n.path[2]
                    }
                    )).forEach((function(e) {
                        e.facade.color = n.setting.color || e.facade.color;
                        e.facade.size = n.setting.size || e.facade.size;
                        e.facade.hidden = !a["isNil"](n.setting.hidden) ? n.setting.hidden : e.facade.hidden;
                        e.data.icon = n.setting.icon || e.data.icon;
                        e.data.fontFamily = n.setting.fontFamily || e.data.fontFamily
                    }
                    ))
                }
                ));
                this._controller.setting.edges.propertyValue.map((function(n) {
                    e.edges.filter((function(e) {
                        return e.data.schema.label === n.path[0] && e.data.properties[n.path[1]] === n.path[2]
                    }
                    )).forEach((function(e) {
                        e.facade.color = n.setting.color || e.facade.color;
                        e.facade.size = n.setting.size || e.facade.size;
                        e.facade.hidden = !a["isNil"](n.setting.hidden) ? n.setting.hidden : e.facade.hidden;
                        e.facade.style = n.setting.lineStyle || e.facade.style
                    }
                    ))
                }
                ));
                return e
            }
            ;
            e.prototype._pinkGraphinDataByForceHidden = function(e) {
                e.nodes.map((function(e) {
                    e.facade.hidden = e.facade.forceHidden || e.facade.hidden;
                    return e
                }
                ));
                e.edges.map((function(e) {
                    e.facade.hidden = e.facade.forceHidden || e.facade.hidden;
                    return e
                }
                ));
                return e
            }
            ;
            e.prototype.pink = function(e) {
                var n = function() {
                    var e = [];
                    for (var n = 0; n < arguments.length; n++) {
                        e[n] = arguments[n]
                    }
                    return function(n) {
                        return e.reduce((function(e, n) {
                            return n(e)
                        }
                        ), n)
                    }
                };
                return n(this._clearGraphinDataHidden.bind(this), this._pinkGraphinDataBySchemaType.bind(this), this._pinkGraphinDataBySchemaPropertyKey.bind(this), this._pinkGraphinDataBySchemaPropertyValue.bind(this), this._pinkGraphinDataByForceHidden.bind(this))(e)
            }
            ;
            return e
        }();
        var Yn = Kn;
        var Zn = function() {
            function e(e) {
                this.core = e;
                this.setting = this._getDefaultSettings();
                this.updater = new Vn(this);
                this.treeFactory = new Hn(this);
                this.pinker = new Yn(this)
            }
            e.prototype._getDefaultSettings = function() {
                return {
                    nodes: {
                        type: [],
                        propertyKey: [],
                        propertyValue: []
                    },
                    edges: {
                        type: [],
                        propertyKey: [],
                        propertyValue: []
                    }
                }
            }
            ;
            e.prototype.dump = function() {
                return this.setting
            }
            ;
            e.prototype.restore = function(e) {
                this.setting = e
            }
            ;
            e.prototype.clear = function() {
                this.setting = this._getDefaultSettings()
            }
            ;
            return e
        }();
        var Jn = Zn;
        var $n = t(896);
        var Qn = t(897);
        var et = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var nt = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var tt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var it = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var at = "GraphinFacadeService";
        var rt = function() {
            function e() {
                this.name = "GraphAnalyserGraphinFacadeService";
                this._facadeProviders = new Map;
                this._systemIconfont = {
                    fontFamily: $n.font_family,
                    fontDisplayName: "系统",
                    isSystem: true,
                    map: $n.glyphs
                }
            }
            e.prototype.activate = function(e) {
                return tt(this, void 0, void 0, (function() {
                    return it(this, (function(n) {
                        this.facade = new Jn(e);
                        e.data && (this.facade.restore(e.data.facade),
                        this.changeCurrentFacadeProvider(e.data.shape));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return tt(this, void 0, void 0, (function() {
                    return it(this, (function(e) {
                        delete this.facade;
                        this._currentFacade = null;
                        this._facadeProviders.clear();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return tt(this, void 0, void 0, (function() {
                    return it(this, (function(n) {
                        e.data && (this.facade.restore(e.data.facade),
                        this.changeCurrentFacadeProvider(e.data.shape));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.provideFacade = function(e) {
                if (this._facadeProviders.has(e.name)) {
                    return this._log.error(at, z, "Facade[" + e.name + "] is already existed")
                }
                this._facadeProviders.set(e.name, e);
                if (!this._currentFacade)
                    this._currentFacade = e.name
            }
            ;
            e.prototype.getCurrentFacadeProvider = function() {
                if (!this._facadeProviders.has(this._currentFacade)) {
                    this._log.warn(at, "Facade[" + this._currentFacade + "] does not existed")
                }
                return this._facadeProviders.get(this._currentFacade)
            }
            ;
            e.prototype.getAllFacadeProviders = function() {
                return Array.from(this._facadeProviders.values())
            }
            ;
            e.prototype.changeCurrentFacadeProvider = function(e) {
                if (!this._facadeProviders.has(e)) {
                    return this._log.warn(at, "Facade[" + e + "] does not existed")
                }
                this._currentFacade = e
            }
            ;
            e.prototype.getFacadeProviderByName = function(e) {
                if (!this._facadeProviders.has(e)) {
                    return this._log.warn(at, "Facade[" + e + "] does not existed")
                }
                return this._facadeProviders.get(e)
            }
            ;
            e.prototype.getGraphinExtendAndRegister = function() {
                return new Bn(this).adapt()
            }
            ;
            e.prototype.provideIconfont = function(e) {
                this._iconfontProvider = e
            }
            ;
            e.prototype.getIconfontProvider = function() {
                return this._iconfontProvider
            }
            ;
            e.prototype.getSystemIconfont = function() {
                return this._systemIconfont
            }
            ;
            var n;
            et([Object(c["inject"])(u.LogService), nt("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            e = et([Object(c["injectable"])()], e);
            return e
        }();
        var ot = rt;
        var ct = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var dt = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ut = "/rest/analysis";
        var lt = function() {
            function e(e) {
                this._http = e
            }
            e.prototype.getAnalysis = function(e, n) {
                return ct(this, void 0, void 0, (function() {
                    var t;
                    return dt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.get(ut, {
                                instanceId: e,
                                id: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getVertexOutCount = function(e, n, t) {
                return ct(this, void 0, void 0, (function() {
                    var i;
                    return dt(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this._http.get("/rest/analysis/vertex/out/num", {
                                instanceId: e,
                                instanceName: n,
                                vertexId: t
                            })];
                        case 1:
                            i = a.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getVertexOutDistribution = function(e, n, t) {
                return ct(this, void 0, void 0, (function() {
                    var i;
                    return dt(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this._http.get("/rest/analysis/vertex/out/distribution", {
                                instanceId: e,
                                instanceName: n,
                                vertexId: t
                            })];
                        case 1:
                            i = a.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getVertexExtensionOptions = function(e, n, t, i) {
                return ct(this, void 0, void 0, (function() {
                    var a;
                    return dt(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this._http.get("/rest/analysis/vertex/extension/options", {
                                instanceId: e,
                                instanceName: n,
                                vertexId: t,
                                edgeLabel: i
                            })];
                        case 1:
                            a = r.sent();
                            return [2, a]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.storeAnalysisContent = function(e, n, t) {
                return ct(this, void 0, void 0, (function() {
                    var i;
                    return dt(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, this._http.put("/rest/analysis/content", {
                                instanceId: e,
                                id: n,
                                content: t
                            })];
                        case 1:
                            i = a.sent();
                            return [2, i]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.loadAnalysisContent = function(e, n) {
                return ct(this, void 0, void 0, (function() {
                    var t;
                    return dt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.get("/rest/analysis/content", {
                                instanceId: e,
                                id: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var st = lt;
        var ft;
        (function(e) {
            e["VERTEX"] = "VERTEX";
            e["EDGE"] = "EDGE"
        }
        )(ft || (ft = {}));
        var pt;
        (function(e) {
            e[e["NAME"] = 1] = "NAME";
            e[e["COMMENT"] = 2] = "COMMENT";
            e[e["PROPERTY"] = 3] = "PROPERTY";
            e[e["DISPLAY_NAME"] = 4] = "DISPLAY_NAME"
        }
        )(pt || (pt = {}));
        var ht;
        (function(e) {
            e["BOOL"] = "BOOL";
            e["INT"] = "INT";
            e["LONG"] = "LONG";
            e["FLOAT"] = "FLOAT";
            e["DOUBLE"] = "DOUBLE";
            e["BYTES"] = "BYTES";
            e["STRING"] = "STRING";
            e["LIST<INT>"] = "LIST<INT>";
            e["LIST<LONG>"] = "LIST<LONG>";
            e["LIST<FLOAT>"] = "LIST<FLOAT>";
            e["LIST<DOUBLE>"] = "LIST<DOUBLE>";
            e["LIST<STRING>"] = "LIST<STRING>";
            e["LIST<BYTES>"] = "LIST<BYTES>"
        }
        )(ht || (ht = {}));
        var mt;
        (function(e) {
            e[e["STARTING"] = 1] = "STARTING";
            e[e["RESTARTING"] = 2] = "RESTARTING";
            e[e["STOPPING"] = 3] = "STOPPING";
            e[e["SERVING"] = 4] = "SERVING";
            e[e["STOPPED"] = 5] = "STOPPED";
            e[e["ABNORMAL"] = 6] = "ABNORMAL"
        }
        )(mt || (mt = {}));
        var _t = undefined && undefined.__assign || function() {
            _t = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return _t.apply(this, arguments)
        }
        ;
        var vt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var gt = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var yt = "/rest/db/list";
        var bt = "/rest/graph/schema";
        var wt = "/rest/analysis/vertex/extension/options";
        var Et = "/rest/analysis/vertex/out/num";
        var St = "/rest/analysis/vertex/out/distribution";
        var kt = function() {
            function e(e) {
                this._http = e
            }
            e.prototype._convertDisplayPropertyToCaptionLabel = function(e, n) {
                if (e === pt.NAME || !e)
                    return "<label>";
                if (e === pt.COMMENT)
                    return "<comment>";
                if (e === pt.DISPLAY_NAME)
                    return "<displayName>";
                return n
            }
            ;
            e.prototype.getInstances = function() {
                return vt(this, void 0, void 0, (function() {
                    var e;
                    return gt(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this._http.get(yt, {
                                mask: true,
                                verbose: true,
                                pageSize: 5e3
                            })];
                        case 1:
                            e = n.sent();
                            return [2, e]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getInstanceSchemaByName = function(e) {
                return vt(this, void 0, void 0, (function() {
                    var n, t;
                    var i = this;
                    return gt(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, this._http.get(bt, {
                                name: e
                            })];
                        case 1:
                            n = r.sent();
                            t = _t(_t({}, n), {
                                types: n.types.map((function(e) {
                                    var n = a["flatMap"](e.typeDef.indexes, (function(e) {
                                        if (e.indexType === "PRIMARY_KEY")
                                            return e.propertyNames;
                                        return []
                                    }
                                    ));
                                    return _t(_t({}, e.typeDef), {
                                        color: e.color,
                                        size: e.size,
                                        bid: e.bid,
                                        displayName: e.displayName,
                                        caption: i._convertDisplayPropertyToCaptionLabel(e.displayType, e.displayPropertyName),
                                        propertyDefList: e.typeDef.propertyDefList.map((function(e) {
                                            return _t(_t({}, e), {
                                                key: a["find"](n, e.name)
                                            })
                                        }
                                        ))
                                    })
                                }
                                ))
                            });
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var xt = kt;
        var Ot = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Ft = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Nt = function() {
            function e(e) {
                this._http = e
            }
            e.prototype.submit = function(e) {
                return Ot(this, void 0, void 0, (function() {
                    var n;
                    return Ft(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this._http.post("/rest/analysis/job/extension", e)];
                        case 1:
                            n = t.sent();
                            return [2, n.jobId]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.poll = function(e, n) {
                return Ot(this, void 0, void 0, (function() {
                    var t;
                    return Ft(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.get("/rest/job/log", {
                                offset: n,
                                jobId: e,
                                sqlIndex: 0
                            })];
                        case 1:
                            t = i.sent();
                            if (!t.hasResult && t.logEnd)
                                throw new Error("Request Failed: " + t.logContent);
                            return [2, {
                                isEnded: t.logEnd,
                                offset: t.readLogLength
                            }]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.gain = function(e, n) {
                return Ot(this, void 0, void 0, (function() {
                    var t;
                    return Ft(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.get("/rest/analysis/job/extension/result", {
                                instanceId: e,
                                jobId: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var Dt = Nt;
        var jt = undefined && undefined.__assign || function() {
            jt = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return jt.apply(this, arguments)
        }
        ;
        var Pt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Tt = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var It = "/rest/analysis/share";
        var Ct = function() {
            function e(e) {
                this._http = e
            }
            e.prototype.create = function(e, n, t, i, a, r) {
                return Pt(this, void 0, void 0, (function() {
                    var o;
                    return Tt(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return [4, this._http.post(It, {
                                analysisFileId: e,
                                instanceId: n,
                                instanceName: t,
                                snapshotTimestamp: r,
                                data: JSON.stringify(i),
                                settings: JSON.stringify(a)
                            })];
                        case 1:
                            o = c.sent();
                            return [2, jt(jt({}, o), {
                                data: JSON.parse(o.data),
                                settings: JSON.parse(o.settings)
                            })]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e, n, t, i, a) {
                return Pt(this, void 0, void 0, (function() {
                    var r;
                    return Tt(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            return [4, this._http.put(It, {
                                id: e,
                                instanceId: n,
                                snapshotTimestamp: a,
                                data: JSON.stringify(t),
                                settings: JSON.stringify(i)
                            })];
                        case 1:
                            r = o.sent();
                            return [2, jt(jt({}, r), {
                                data: JSON.parse(r.data),
                                settings: JSON.parse(r.settings)
                            })]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.delete = function(e, n) {
                return Pt(this, void 0, void 0, (function() {
                    var t;
                    return Tt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.del(It, {
                                id: e,
                                instanceId: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.fetch = function(e, n) {
                return Pt(this, void 0, void 0, (function() {
                    var t;
                    return Tt(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._http.get(It, {
                                id: e,
                                instanceId: n
                            })];
                        case 1:
                            t = i.sent();
                            return [2, jt(jt({}, t), {
                                data: JSON.parse(t.data),
                                settings: JSON.parse(t.settings)
                            })]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var Lt = Ct;
        var Rt = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var At = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Gt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var zt = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Bt = function() {
            function e() {
                this.name = "GraphAnalyserBackendService"
            }
            e.prototype.activate = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return zt(this, (function(e) {
                        this.analysis = new st(this._http);
                        this.instance = new xt(this._http);
                        this.extend = new Dt(this._http);
                        this.sharing = new Lt(this._http);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return Gt(this, void 0, void 0, (function() {
                    return zt(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Gt(this, void 0, void 0, (function() {
                    return zt(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            var n;
            Rt([Object(c["inject"])(u.HttpService), At("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_http", void 0);
            e = Rt([Object(c["injectable"])()], e);
            return e
        }();
        var Mt = Bt;
        var Xt = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Vt = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Wt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Ut = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var qt = function() {
            function e() {
                this.name = "GraphAnalyserAnalysisTaskInformationService"
            }
            e.prototype._syncAnalysis = function() {
                return Wt(this, void 0, void 0, (function() {
                    var e;
                    return Ut(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            e = this;
                            return [4, this._backend.analysis.getAnalysis(this._core.instanceId, this._core.id.toString())];
                        case 1:
                            e.information = n.sent();
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._syncInstance = function() {
                return Wt(this, void 0, void 0, (function() {
                    var e, n;
                    var t = this;
                    return Ut(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this._backend.instance.getInstances()];
                        case 1:
                            e = i.sent();
                            this.instance = e.find((function(e) {
                                return e.instanceId === t._core.instanceId
                            }
                            ));
                            n = this;
                            return [4, this._backend.instance.getInstanceSchemaByName(this.instance.name)];
                        case 2:
                            n.schema = i.sent();
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.activate = function(e) {
                return Wt(this, void 0, void 0, (function() {
                    return Ut(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            this._core = e;
                            if (this._core.data) {
                                this.information = this._core.data.information;
                                this.schema = this._core.data.schema;
                                this.instance = this._core.data.instance
                            }
                            if (!!this._options.get("readOnly"))
                                return [3, 2];
                            return [4, Promise.all([this._syncAnalysis(), this._syncInstance()])];
                        case 1:
                            n.sent();
                            n.label = 2;
                        case 2:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Wt(this, void 0, void 0, (function() {
                    return Ut(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return Wt(this, void 0, void 0, (function() {
                    return Ut(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            var n, t;
            Xt([Object(c["inject"])(u.OptionService), Vt("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_options", void 0);
            Xt([Object(c["inject"])(u.BackendService), Vt("design:type", typeof (t = typeof Dn["IGraphAnalyserBackendService"] !== "undefined" && Dn["IGraphAnalyserBackendService"]) === "function" ? t : Object)], e.prototype, "_backend", void 0);
            e = Xt([Object(c["injectable"])()], e);
            return e
        }();
        var Ht = qt;
        var Kt = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Yt = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Zt = function() {
            function e(e) {
                this._service = e;
                this._backend = this._service.core.getService(u.BackendService);
                this._information = this._service.core.getService(u.AnalysisTaskInformation)
            }
            e.prototype._getId = function() {
                return {
                    instanceId: this._information.instance.instanceId,
                    instanceName: this._information.instance.name,
                    id: this._information.information.id,
                    sharedId: this._information.information.shareId
                }
            }
            ;
            e.prototype.fetch = function() {
                return Kt(this, void 0, void 0, (function() {
                    var e;
                    return Yt(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            e = this._getId();
                            if (!e.sharedId)
                                return [2, null];
                            return [4, this._backend.sharing.fetch(e.sharedId, e.instanceId)];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.delete = function() {
                return Kt(this, void 0, void 0, (function() {
                    var e, n;
                    return Yt(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            e = this._getId();
                            return [4, this._backend.sharing.delete(e.sharedId, e.instanceId)];
                        case 1:
                            n = t.sent();
                            if (!n)
                                return [2];
                            this._information.information.shareId = null;
                            this._information.information.shareEnabled = false;
                            this._information.information.shareViewCount = 0;
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e, n, t) {
                return Kt(this, void 0, void 0, (function() {
                    var i;
                    return Yt(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            i = this._getId();
                            return [4, this._backend.sharing.update(i.sharedId, i.instanceId, e, n, t)];
                        case 1:
                            return [2, a.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.create = function(e, n, t) {
                return Kt(this, void 0, void 0, (function() {
                    var i, a;
                    return Yt(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            i = this._getId();
                            return [4, this._backend.sharing.create(i.id, i.instanceId, i.instanceName, e, n, t)];
                        case 1:
                            a = r.sent();
                            this._information.information.shareId = a.id;
                            this._information.information.shareEnabled = true;
                            this._information.information.shareViewCount = 0;
                            return [2, a]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var Jt = Zt;
        var $t = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Qt = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var ei = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ni = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ti = "1.0";
        var ii = function() {
            function e() {
                this.name = "GraphAnalyserUserAccessedDataService"
            }
            e.prototype.activate = function(e) {
                return ei(this, void 0, void 0, (function() {
                    return ni(this, (function(n) {
                        this.core = e;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return ei(this, void 0, void 0, (function() {
                    return ni(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return ei(this, void 0, void 0, (function() {
                    return ni(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.takeSnapshot = function(e) {
                if (e === void 0) {
                    e = true
                }
                var n = this.graphinDataService.getData();
                var t = this.graphinFacadeService.facade.dump();
                var i = this.graphinCommonService.getOptions().layout.current;
                var a = this.graphinFacadeService.getCurrentFacadeProvider().name;
                if (e) {
                    return {
                        data: n,
                        facade: t,
                        layout: i,
                        shape: a,
                        version: ti
                    }
                }
                return {
                    data: n,
                    facade: t,
                    layout: i,
                    shape: a,
                    version: ti,
                    information: this.analysisTaskInformation.information,
                    schema: this.analysisTaskInformation.schema,
                    instance: this.analysisTaskInformation.instance
                }
            }
            ;
            e.prototype._store = function() {
                return ei(this, void 0, void 0, (function() {
                    var e;
                    return ni(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            e = this.takeSnapshot();
                            return [4, this.backendService.analysis.storeAnalysisContent(this.analysisTaskInformation.instance.instanceId, this.core.id.toString(), JSON.stringify(e))];
                        case 1:
                            n.sent();
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._load = function() {
                var e;
                return ei(this, void 0, void 0, (function() {
                    var n, t;
                    return ni(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return [4, this.backendService.analysis.loadAnalysisContent(this.analysisTaskInformation.instance.instanceId, this.core.id.toString())];
                        case 1:
                            n = i.sent();
                            t = ((e = n) === null || e === void 0 ? void 0 : e.length) > 0 ? JSON.parse(n) : {
                                version: ti
                            };
                            if (t.version !== ti)
                                throw new Error("Version No. is incorrect");
                            t.data && this.graphinDataService.setData(t.data);
                            t.facade && this.graphinFacadeService.facade.restore(t.facade);
                            t.layout && this.graphinCommonService.controllers.layout.change(t.layout);
                            t.shape && this.graphinFacadeService.changeCurrentFacadeProvider(t.shape);
                            this.core.refresh(true);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._clear = function() {
                return ei(this, void 0, void 0, (function() {
                    return ni(this, (function(e) {
                        this.graphinDataService.clear();
                        this.graphinFacadeService.facade.clear();
                        this.core.refresh(true);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            Object.defineProperty(e.prototype, "data", {
                get: function() {
                    var e = this;
                    var n = new Jt(this);
                    return {
                        analysis: {
                            id: this.analysisTaskInformation.information.id,
                            name: this.analysisTaskInformation.information.name,
                            description: this.analysisTaskInformation.information.description,
                            instance: {
                                id: this.analysisTaskInformation.instance.instanceId,
                                name: this.analysisTaskInformation.instance.name
                            }
                        },
                        schema: this.analysisTaskInformation.schema,
                        action: {
                            store: this._store.bind(this),
                            load: this._load.bind(this),
                            saveAsPNG: function() {
                                return e.graphinDataService.get().graph.toDataURL()
                            },
                            clear: this._clear.bind(this),
                            takeSnapshot: function() {
                                return e.takeSnapshot(false)
                            },
                            sharing: {
                                fetch: n.fetch.bind(n),
                                update: n.update.bind(n),
                                delete: n.delete.bind(n),
                                create: n.create.bind(n)
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            var n, t, i, a, r;
            $t([Object(c["inject"])(u.AnalysisTaskInformation), Qt("design:type", typeof (n = typeof Dn["IGraphAnalyserAnalysisTaskInformationService"] !== "undefined" && Dn["IGraphAnalyserAnalysisTaskInformationService"]) === "function" ? n : Object)], e.prototype, "analysisTaskInformation", void 0);
            $t([Object(c["inject"])(u.GraphinDataService), Qt("design:type", typeof (t = typeof fe !== "undefined" && fe) === "function" ? t : Object)], e.prototype, "graphinDataService", void 0);
            $t([Object(c["inject"])(u.GraphinFacadeService), Qt("design:type", typeof (i = typeof ot !== "undefined" && ot) === "function" ? i : Object)], e.prototype, "graphinFacadeService", void 0);
            $t([Object(c["inject"])(u.GraphinCommandService), Qt("design:type", typeof (a = typeof Ie !== "undefined" && Ie) === "function" ? a : Object)], e.prototype, "graphinCommonService", void 0);
            $t([Object(c["inject"])(u.BackendService), Qt("design:type", typeof (r = typeof Mt !== "undefined" && Mt) === "function" ? r : Object)], e.prototype, "backendService", void 0);
            e = $t([Object(c["injectable"])()], e);
            return e
        }();
        var ai = ii;
        var ri = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var oi = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var ci = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var di = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ui = "SearchPanelService";
        var li = function() {
            function e() {
                this.name = "GraphAnalyserSearchPanelService";
                this._searchPanelProviders = new Map
            }
            e.prototype.activate = function(e) {
                return ci(this, void 0, void 0, (function() {
                    return di(this, (function(e) {
                        this._searchPanelProviders = new Map;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return ci(this, void 0, void 0, (function() {
                    return di(this, (function(e) {
                        delete this._currentSearchPanel;
                        this._searchPanelProviders.clear();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return ci(this, void 0, void 0, (function() {
                    return di(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.provideSearchPanel = function(e) {
                if (this._searchPanelProviders.has(e.name)) {
                    return this._log.error(ui, B, "SearchPanel[" + e.name + "] is already existed")
                }
                this._searchPanelProviders.set(e.name, e);
                if (!this._currentSearchPanel)
                    this._currentSearchPanel = e.name
            }
            ;
            e.prototype.getCurrentSearchPanel = function() {
                if (!this._searchPanelProviders.has(this._currentSearchPanel)) {
                    this._log.warn(ui, "SearchPanel[" + this._currentSearchPanel + "] does not existed")
                }
                return this._searchPanelProviders.get(this._currentSearchPanel)
            }
            ;
            e.prototype.getAllSearchPanelProviders = function() {
                return Array.from(this._searchPanelProviders.values())
            }
            ;
            e.prototype.changeCurrentSearchPanelProvider = function(e) {
                if (!this._searchPanelProviders.has(e)) {
                    this._log.warn(ui, "SearchPanel[" + e + "] does not existed")
                }
                this._log.debug(ui, "SearchPanel change to [" + e + "]");
                this._currentSearchPanel = e
            }
            ;
            e.prototype.getSearchPanelProviderByName = function(e) {
                if (!this._searchPanelProviders.has(e)) {
                    this._log.warn(ui, "SearchPanel[" + this._currentSearchPanel + "] does not existed")
                }
                return this._searchPanelProviders.get(e)
            }
            ;
            var n;
            ri([Object(c["inject"])(u.LogService), oi("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            e = ri([Object(c["injectable"])()], e);
            return e
        }();
        var si = li;
        var fi = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var pi = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var hi = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var mi = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var _i = "StaticsPanelService";
        var vi = function() {
            function e() {
                this.name = "GraphAnalyserStaticsPanelService"
            }
            e.prototype.activate = function(e) {
                return hi(this, void 0, void 0, (function() {
                    return mi(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return hi(this, void 0, void 0, (function() {
                    return mi(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return hi(this, void 0, void 0, (function() {
                    return mi(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.provideStatisticsPanel = function(e) {
                if (this._provider) {
                    this._log.warn(_i, "Statistic Panel[" + this._provider.name + "] will be overwrite")
                }
                this._provider = e
            }
            ;
            e.prototype.getStatisticsPanelProvider = function() {
                return this._provider
            }
            ;
            var n;
            fi([Object(c["inject"])(u.LogService), pi("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            e = fi([Object(c["injectable"])()], e);
            return e
        }();
        var gi = vi;
        var yi = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var bi = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var wi = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Ei = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Si = "PreviewPanelService";
        var ki = function() {
            function e() {
                this.name = "GraphAnalyserPreviewPanelService"
            }
            e.prototype.activate = function(e) {
                return wi(this, void 0, void 0, (function() {
                    return Ei(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return wi(this, void 0, void 0, (function() {
                    return Ei(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e) {
                return wi(this, void 0, void 0, (function() {
                    return Ei(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.providePreviewPanel = function(e) {
                if (this._provider) {
                    this._log.warn(Si, "Preview Panel[" + this._provider.name + "] will be overwrite")
                }
                this._provider = e
            }
            ;
            e.prototype.getPreviewPanelProvider = function() {
                return this._provider
            }
            ;
            var n;
            yi([Object(c["inject"])(u.LogService), bi("design:type", typeof (n = typeof undefined !== "undefined" && undefined) === "function" ? n : Object)], e.prototype, "_log", void 0);
            e = yi([Object(c["injectable"])()], e);
            return e
        }();
        var xi = ki;
        var Oi = undefined && undefined.__decorate || function(e, n, t, i) {
            var a = arguments.length, r = a < 3 ? n : i === null ? i = Object.getOwnPropertyDescriptor(n, t) : i, o;
            if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                r = Reflect.decorate(e, n, t, i);
            else
                for (var c = e.length - 1; c >= 0; c--)
                    if (o = e[c])
                        r = (a < 3 ? o(r) : a > 3 ? o(n, t, r) : o(n, t)) || r;
            return a > 3 && r && Object.defineProperty(n, t, r),
            r
        }
        ;
        var Fi = undefined && undefined.__metadata || function(e, n) {
            if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                return Reflect.metadata(e, n)
        }
        ;
        var Ni = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Di = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var ji = function() {
            function e() {
                this.name = "GraphAnalyserDownstreamService";
                this._mapping = new Map
            }
            e.prototype._onSync = function(e) {
                return Ni(this, void 0, void 0, (function() {
                    var n, t, i, r;
                    return Di(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            if (this._options.get("readOnly"))
                                return [2];
                            n = e.item.getModel();
                            t = this._graphin.getData().nodes.find((function(e) {
                                return n.id === e.id
                            }
                            ));
                            if (!t || !a["isNil"](t.data.downstream) || this._mapping.has(n.id))
                                return [2];
                            this._mapping.set(n.id, true);
                            i = this._information.instance;
                            return [4, this._backend.analysis.getVertexOutCount(i.instanceId, i.name, t.id)];
                        case 1:
                            r = o.sent();
                            t.data.downstream = r;
                            this._core.refresh(true);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.activate = function(e) {
                return Ni(this, void 0, void 0, (function() {
                    return Di(this, (function(n) {
                        this._core = e;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function() {
                return Ni(this, void 0, void 0, (function() {
                    return Di(this, (function(e) {
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                var e, n;
                return Ni(this, void 0, void 0, (function() {
                    return Di(this, (function(t) {
                        (n = (e = this._graphin.get()) === null || e === void 0 ? void 0 : e.graph) === null || n === void 0 ? void 0 : n.off("node:click", this._onSync.bind(this));
                        this._mapping.clear();
                        this._isHooking = false;
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.hook = function() {
                if (this._isHooking)
                    return;
                var e = this._graphin.get();
                e.graph.on("node:click", this._onSync.bind(this));
                this._isHooking = true
            }
            ;
            var n, t, i, r;
            Oi([Object(c["inject"])(u.BackendService), Fi("design:type", typeof (n = typeof Dn["IGraphAnalyserBackendService"] !== "undefined" && Dn["IGraphAnalyserBackendService"]) === "function" ? n : Object)], e.prototype, "_backend", void 0);
            Oi([Object(c["inject"])(u.GraphinDataService), Fi("design:type", typeof (t = typeof undefined !== "undefined" && undefined) === "function" ? t : Object)], e.prototype, "_graphin", void 0);
            Oi([Object(c["inject"])(u.AnalysisTaskInformation), Fi("design:type", typeof (i = typeof Dn["IGraphAnalyserAnalysisTaskInformationService"] !== "undefined" && Dn["IGraphAnalyserAnalysisTaskInformationService"]) === "function" ? i : Object)], e.prototype, "_information", void 0);
            Oi([Object(c["inject"])(u.OptionService), Fi("design:type", typeof (r = typeof undefined !== "undefined" && undefined) === "function" ? r : Object)], e.prototype, "_options", void 0);
            e = Oi([Object(c["injectable"])()], e);
            return e
        }();
        var Pi = ji;
        function Ti(e) {
            return function(n, t) {
                e.bind(n).to(t).inSingletonScope()
            }
        }
        function Ii(e, n) {
            var t = new c["Container"];
            t.parent = n;
            e.forEach((function(e) {
                return Ti(t)(e.type, e.service)
            }
            ));
            return t
        }
        function Ci() {
            return Ii([{
                type: u.LogService,
                service: w
            }, {
                type: u.OptionService,
                service: re
            }, {
                type: u.HttpService,
                service: C
            }, {
                type: u.TaskService,
                service: $
            }])
        }
        function Li(e) {
            return Ii([{
                type: u.GraphinFacadeService,
                service: ot
            }, {
                type: u.SearchPanelService,
                service: si
            }, {
                type: u.StatisticPanelService,
                service: gi
            }, {
                type: u.PreviewPanelService,
                service: xi
            }, {
                type: u.GraphinDataService,
                service: fe
            }, {
                type: u.PluginStorageService,
                service: cn
            }], e)
        }
        function Ri(e) {
            return Ii([{
                type: u.BackendService,
                service: Mt
            }], e)
        }
        function Ai(e) {
            return Ii([{
                type: u.AnalysisTaskInformation,
                service: Ht
            }, {
                type: u.GraphinCommandService,
                service: Ie
            }, {
                type: u.SnapshotService,
                service: Be
            }, {
                type: u.CommandService,
                service: Qe
            }, {
                type: u.PluginRegisterService,
                service: An
            }, {
                type: u.DownstreamSync,
                service: Pi
            }], e)
        }
        function Gi(e) {
            return Ii([{
                type: u.UserAccessedDataService,
                service: ai
            }], e)
        }
        function zi() {
            var e = Ci();
            var n = Li(e);
            var t = Ri(n);
            var i = Ai(t);
            var a = Gi(i);
            return a
        }
        var Bi = t(963);
        var Mi = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Xi = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Vi = "ON_ACTIVATED_MITT";
        var Wi = "ON_UPDATED_MITT";
        var Ui = "ON_DEACTIVATED_MITT";
        var qi = "MainProcess";
        var Hi = function() {
            function e(e) {
                this._refresh = e;
                this._container = zi();
                this._isActivated = false;
                this._mitt = Object(Bi["a"])();
                this._isRefreshing = "IDLE"
            }
            e.prototype.refresh = function(e) {
                var n = this;
                if (this._isRefreshing !== "IDLE") {
                    this._isRefreshing = e ? "FORCE_REFRESH" : this._isRefreshing
                }
                this._isRefreshing = e ? "FORCE_REFRESH" : "REFRESH";
                Promise.resolve().then((function() {
                    n._refresh(n._isRefreshing === "FORCE_REFRESH");
                    n._isRefreshing = "IDLE"
                }
                ))
            }
            ;
            e.prototype._installServices = function() {
                return Mi(this, void 0, void 0, (function() {
                    var e, n, t, i, a;
                    return Xi(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            e = this.getService(u.LogService);
                            n = this.getAllServices();
                            t = 0,
                            i = n;
                            r.label = 1;
                        case 1:
                            if (!(t < i.length))
                                return [3, 4];
                            a = i[t];
                            e.debug(qi, "[Activating] " + a.name);
                            return [4, a.activate(this)];
                        case 2:
                            r.sent();
                            e.debug(qi, "[Activated] " + a.name);
                            r.label = 3;
                        case 3:
                            t++;
                            return [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._uninstallServices = function() {
                return Mi(this, void 0, void 0, (function() {
                    var e, n, t, i, a;
                    return Xi(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            e = this.getAllServices().reverse();
                            n = this.getService(u.LogService);
                            t = 0,
                            i = e;
                            r.label = 1;
                        case 1:
                            if (!(t < i.length))
                                return [3, 4];
                            a = i[t];
                            n.debug(qi, "[Deactivating] " + a.name);
                            return [4, a.deactivate()];
                        case 2:
                            r.sent();
                            n.debug(qi, "[Deactivated] " + a.name);
                            r.label = 3;
                        case 3:
                            t++;
                            return [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._updateServices = function() {
                return Mi(this, void 0, void 0, (function() {
                    var e, n, t, i, a;
                    return Xi(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            e = this.getAllServices();
                            n = this.getService(u.LogService);
                            t = 0,
                            i = e;
                            r.label = 1;
                        case 1:
                            if (!(t < i.length))
                                return [3, 4];
                            a = i[t];
                            n.debug(qi, "[Updating] " + a.name);
                            return [4, a.update(this)];
                        case 2:
                            r.sent();
                            n.debug(qi, "[Updated] " + a.name);
                            r.label = 3;
                        case 3:
                            t++;
                            return [3, 1];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype._installPlugins = function() {
                return Mi(this, void 0, void 0, (function() {
                    var e;
                    return Xi(this, (function(n) {
                        e = this.getService(u.PluginRegisterService);
                        this.plugins.forEach((function(n) {
                            e.register(n)
                        }
                        ));
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.active = function(e, n, t, i, a, r) {
                return Mi(this, void 0, void 0, (function() {
                    return Xi(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            this.target = e;
                            this.id = n;
                            this.instanceId = t;
                            this.data = r;
                            this.plugins = Array.isArray(i) ? i : [i];
                            this.options = a;
                            return [4, this._installServices()];
                        case 1:
                            o.sent();
                            return [4, this._installPlugins()];
                        case 2:
                            o.sent();
                            this._isActivated = true;
                            this._mitt.emit(Vi, [n, t, i, a]);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.onActivated = function(e) {
                return Mi(this, void 0, void 0, (function() {
                    var n;
                    var t = this;
                    return Xi(this, (function(i) {
                        n = function(n) {
                            e.apply(void 0, n)
                        }
                        ;
                        this._mitt.on(Vi, n);
                        return [2, function() {
                            t._mitt.off(Vi, n)
                        }
                        ]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.deactivate = function() {
                return Mi(this, void 0, void 0, (function() {
                    return Xi(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, this._uninstallServices()];
                        case 1:
                            e.sent();
                            this._isActivated = false;
                            this._mitt.emit(Ui);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.ondeactivate = function(e) {
                return Mi(this, void 0, void 0, (function() {
                    var n;
                    var t = this;
                    return Xi(this, (function(i) {
                        n = function(n) {
                            e.apply(void 0, n)
                        }
                        ;
                        this._mitt.on(Ui, n);
                        return [2, function() {
                            t._mitt.off(Ui, n)
                        }
                        ]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.update = function(e, n, t, i, a, r) {
                return Mi(this, void 0, void 0, (function() {
                    return Xi(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            this.target = e;
                            this.id = n;
                            this.instanceId = t;
                            this.data = r;
                            this.plugins = Array.isArray(i) ? i : [i];
                            this.options = a;
                            return [4, this._updateServices()];
                        case 1:
                            o.sent();
                            this._mitt.emit(Wi, [n, t, i, a]);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.onUpdated = function(e) {
                return Mi(this, void 0, void 0, (function() {
                    var n;
                    var t = this;
                    return Xi(this, (function(i) {
                        n = function(n) {
                            e.apply(void 0, n)
                        }
                        ;
                        this._mitt.on(Wi, n);
                        return [2, function() {
                            t._mitt.off(Wi, n)
                        }
                        ]
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getService = function(e) {
                if (!a["find"](u, (function(n) {
                    return n === e
                }
                )))
                    throw new Error("Can not find Service[" + Symbol.keyFor(e) + "]");
                return this._container.get(e)
            }
            ;
            e.prototype.getAllServices = function() {
                var e = this;
                var n = Object.values(u).map((function(n) {
                    return e._container.get(n)
                }
                ));
                return n
            }
            ;
            Object.defineProperty(e.prototype, "isActivated", {
                get: function() {
                    return this._isActivated
                },
                enumerable: true,
                configurable: true
            });
            return e
        }();
        var Ki = Hi;
        var Yi = undefined && undefined.__assign || function() {
            Yi = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Yi.apply(this, arguments)
        }
        ;
        function Zi(e) {
            var n;
            var t = e.prefix || "gonggongtubiao";
            var a = {
                fontSize: e.fontSize || "14px"
            };
            var r = (n = e.onClick,
            n !== null && n !== void 0 ? n : {
                cursor: "pointer"
            });
            return i["createElement"]("i", {
                className: t + " " + e.name,
                style: Yi(Yi({}, a), r),
                onClick: e.onClick
            })
        }
        var Ji = t(898);
        var $i = t(8);
        var Qi = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ea = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var na = "SearchOperationPanel";
        function ta(e) {
            var n = this;
            var t;
            var a = i["useMemo"]((function() {
                return new Map
            }
            ), []);
            var r = e.main.getService(u.SearchPanelService);
            var o = r.getAllSearchPanelProviders();
            var c = r.getCurrentSearchPanel();
            var d = i["useState"](false)
              , l = d[0]
              , s = d[1];
            var f = i["useState"]([])
              , p = f[0]
              , h = f[1];
            var m = i["useMemo"]((function() {
                return o.map((function(e) {
                    return e.provide()
                }
                ))
            }
            ), []);
            var _ = function(n) {
                r.changeCurrentSearchPanelProvider(n);
                e.main.refresh()
            };
            var v = function() {
                return Qi(n, void 0, void 0, (function() {
                    var n, t, i, r;
                    return ea(this, (function(o) {
                        switch (o.label) {
                        case 0:
                            e.onLoading(true),
                            s(true);
                            o.label = 1;
                        case 1:
                            o.trys.push([1, 3, 4, 5]);
                            n = a.get(c.name);
                            return [4, n.search()];
                        case 2:
                            t = o.sent();
                            e.onSearch(t.type, t.data);
                            return [3, 5];
                        case 3:
                            i = o.sent();
                            r = e.main.getService(u.LogService);
                            r.error(na, X, i.message);
                            return [3, 5];
                        case 4:
                            e.onLoading(false),
                            s(false);
                            return [7];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            };
            var g = function(e, n) {
                a.set(e.name, n)
            };
            return i["createElement"]("div", {
                className: "ga-search-operation-panel"
            }, i["createElement"]($i["Tab"], {
                size: "small",
                defaultActiveKey: c.name,
                onChange: _,
                className: "ga-search-operation-panel-content"
            }, o.map((function(e, n) {
                var t = m[n];
                return i["createElement"]($i["Tab"].Item, {
                    key: e.name,
                    title: e.display
                }, i["createElement"](t, {
                    register: g.bind(undefined, e),
                    onErrors: h
                }))
            }
            ))), i["createElement"]("div", {
                className: "ga-search-operation-panel-tail"
            }, i["createElement"]($i["Button"], {
                loading: l,
                onClick: v,
                type: "primary",
                disabled: ((t = p) === null || t === void 0 ? void 0 : t.length) > 0
            }, Ee["get"]("search").d("搜索")), i["createElement"]($i["Button"], {
                loading: l,
                onClick: e.onClose
            }, Ee["get"]("close").d("关闭"))))
        }
        var ia = undefined && undefined.__assign || function() {
            ia = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return ia.apply(this, arguments)
        }
        ;
        var aa = 20;
        function ra(e) {
            var n = ua(e) ? e.data.edges.length : e.data.nodes.length;
            var t = aa;
            return i["createElement"]("div", {
                className: "ga-search-result-panel-title"
            }, i["createElement"]("span", null, Ee["get"]("search-result").d("搜索结果")), !e.loading && Ee["getHTML"]("graph-analyser.search.resultPanel.count", {
                length: n
            }).d(i["createElement"]("span", null, i["createElement"]("span", null, n), "条搜索结果")), !e.loading && n > t && i["createElement"]("span", null, Ee["get"]("graph-analyser.search.resultPanel.maxCount", {
                max: t
            }).d("（最多可选择" + t + "条）")))
        }
        function oa(e) {
            var n = a["flatMap"](e.item.properties, (function(e, n) {
                return [i["createElement"]("span", {
                    key: n
                }, e), i["createElement"]("span", {
                    className: "separator",
                    key: "slice-" + n
                }, "|")]
            }
            ));
            n = n.length > 0 ? a["take"](n, n.length - 1) : [];
            return i["createElement"]("div", null, i["createElement"]("div", {
                className: "ga-search-result-panel-body-item-l1"
            }, e.item.label, " (#", e.item.id, ")", i["createElement"]("span", null, e.item.schema.label)), n.length > 0 && i["createElement"]("div", {
                className: "ga-search-result-panel-body-item-l2"
            }, n))
        }
        function ca(e) {
            var n = e.data.nodes.find((function(n) {
                return n.id === e.item.srcId
            }
            ));
            var t = e.data.nodes.find((function(n) {
                return n.id === e.item.dstId
            }
            ));
            var r = n.label;
            var o = t.label;
            var c = a["flatMap"](e.item.properties, (function(e, n) {
                return [i["createElement"]("span", {
                    key: n
                }, e), i["createElement"]("span", {
                    className: "separator",
                    key: "slice-" + n
                }, "|")]
            }
            ));
            c = c.length > 0 ? a["take"](c, c.length - 1) : [];
            return i["createElement"]("div", null, i["createElement"]("div", {
                className: "ga-search-result-panel-body-item-l1"
            }, r, " (#", n.id, ")", i["createElement"]("i", {
                className: "gonggongtubiao zhixiangjiantou arrow"
            }), o, " (#", t.id, ")", i["createElement"]("span", null, e.item.label)), c.length > 0 && i["createElement"]("div", {
                className: "ga-search-result-panel-body-item-l2"
            }, c))
        }
        function da(e) {
            if (ua(e)) {
                return i["createElement"](ca, {
                    item: e.item,
                    data: e.data
                })
            }
            return i["createElement"](oa, {
                item: e.item,
                data: e.data
            })
        }
        function ua(e) {
            return e.type === mn.EDGE
        }
        function la(e) {
            var n = ua(e) ? e.data.edges : e.data.nodes;
            var t = aa;
            var r = i["useState"]([])
              , o = r[0]
              , c = r[1];
            var d = o.length;
            var l = function() {
                var t = e.main.getService(u.GraphinFacadeService).getIconfontProvider().provide().default;
                var i = function(e, n) {
                    if (n === void 0) {
                        n = fn.BLUE
                    }
                    return e.color ? e.color : n
                };
                var r = function(e, n) {
                    if (n === void 0) {
                        n = sn.M
                    }
                    return e.size ? e.size : n
                };
                var c = function(e) {
                    var n = /^<[a-zA-Z0-9\s]+>$/;
                    if (n.test(e.caption)) {
                        return e.caption.substring(1, e.caption.length - 1)
                    }
                    return "properties." + e.caption
                };
                var d = function(e) {
                    var n = c(e.schema);
                    if (n.startsWith("properties.")) {
                        n = a["get"](e, n)
                    } else {
                        n = a["get"](e.schema, n)
                    }
                    return n
                };
                var l = e.main.getService(u.GraphinDataService);
                var s = e.main.getService(u.GraphinFacadeService);
                var f = l.getData();
                var p = function() {
                    var e = n.filter((function(e) {
                        return a["includes"](o, e.id)
                    }
                    )).filter((function(e) {
                        return !a["find"](f.nodes, (function(n) {
                            return e.id === n.id
                        }
                        ))
                    }
                    ));
                    f.nodes = f.nodes.concat(e.map((function(e) {
                        var n = e.schema;
                        return {
                            id: e.id,
                            label: d(e),
                            facade: {
                                color: i(n),
                                size: r(n),
                                display: c(n)
                            },
                            data: ia(ia({}, e), {
                                icon: t.name,
                                fontFamily: t.fontFamily,
                                downstream: null
                            }),
                            shape: s.getCurrentFacadeProvider().name + "-node"
                        }
                    }
                    )));
                    l.setData(ia({}, f))
                };
                var h = function() {
                    var u = n.filter((function(e) {
                        return a["includes"](o, e.id)
                    }
                    )).filter((function(e) {
                        return !a["find"](f.edges, (function(n) {
                            return e.id === n.id
                        }
                        ))
                    }
                    ));
                    var p = a["flatten"](u.map((function(n) {
                        return [e.data.nodes.find((function(e) {
                            return e.id === n.srcId
                        }
                        )), e.data.nodes.find((function(e) {
                            return e.id === n.dstId
                        }
                        ))]
                    }
                    )));
                    p = a["uniq"](p);
                    p = p.filter((function(e) {
                        return !f.nodes.find((function(n) {
                            return n.id === e.id
                        }
                        ))
                    }
                    ));
                    f.nodes = f.nodes.concat(p.map((function(e) {
                        var n = e.schema;
                        return {
                            id: e.id,
                            label: d(e),
                            facade: {
                                display: c(n),
                                color: i(n),
                                size: r(n)
                            },
                            data: ia(ia({}, e), {
                                icon: t.name,
                                fontFamily: t.fontFamily,
                                downstream: null
                            }),
                            shape: s.getCurrentFacadeProvider().name + "-node"
                        }
                    }
                    )));
                    f.edges = f.edges.concat(u.map((function(e) {
                        var n = e.schema;
                        return {
                            id: e.id,
                            label: d(e),
                            source: e.srcId,
                            target: e.dstId,
                            facade: {
                                display: c(n),
                                style: pn.SOLID,
                                color: i(n, fn.GREY),
                                size: r(n, sn.S)
                            },
                            data: e,
                            shape: s.getCurrentFacadeProvider().name + "-edge"
                        }
                    }
                    )));
                    l.setData(ia({}, f))
                };
                ua(e) ? h() : p();
                e.onClose();
                e.main.refresh(true)
            };
            return i["createElement"](i["Fragment"], null, i["createElement"]("div", {
                className: "ga-search-result-panel-body"
            }, i["createElement"]($i["Checkbox"].Group, {
                value: o,
                onChange: function(e) {
                    return c(e)
                }
            }, n.map((function(n) {
                return i["createElement"]("div", {
                    key: n.id,
                    className: "ga-search-result-panel-body-item"
                }, i["createElement"]("div", null, i["createElement"]($i["Checkbox"], {
                    value: n.id,
                    disabled: o.length >= t && !o.find((function(e) {
                        return n.id === e
                    }
                    ))
                })), i["createElement"](da, {
                    item: n,
                    type: e.type,
                    data: e.data
                }))
            }
            )))), i["createElement"]("div", {
                className: "ga-search-result-panel-tail"
            }, i["createElement"]("div", null, i["createElement"]($i["Checkbox"], {
                disabled: n.length >= t,
                indeterminate: o.length > 0 && o.length < n.length,
                onChange: function(e) {
                    e ? c(n.map((function(e) {
                        return e.id
                    }
                    ))) : c([])
                }
            })), i["createElement"]("div", null, i["createElement"]($i["Button"], {
                type: "primary",
                disabled: d <= 0,
                onClick: l
            }, ua(e) ? Ee["get"]("graph-analyser.search.resultPanel.edges.selectedCount", d).d("添加选中的" + d + "条边") : Ee["get"]("graph-analyser.search.resultPanel.nodes.selectedCount", d).d("添加选中的" + d + "个节点")))))
        }
        function sa(e) {
            return i["createElement"]("div", {
                className: "ga-search-result-panel"
            }, i["createElement"](ra, ia({}, e)), i["createElement"]($i["Loading"], {
                style: {
                    display: "block",
                    height: "calc(100% - 48px)"
                },
                visible: e.loading
            }, i["createElement"](la, ia({}, e))))
        }
        function fa(e) {
            var n = i["useState"](false)
              , t = n[0]
              , a = n[1];
            var r = i["useState"](false)
              , o = r[0]
              , c = r[1];
            var d = i["useState"]()
              , u = d[0]
              , l = d[1];
            var s = function() {
                a(true)
            };
            var f = function() {
                a(false)
            };
            var p = function(e, n) {
                l({
                    data: n,
                    type: e
                })
            };
            return i["createElement"]("div", {
                className: "ga-search-container"
            }, i["createElement"]("div", {
                className: "ga-search-panel",
                onClick: !t ? s : function() {}
            }, !t && i["createElement"](i["Fragment"], null, i["createElement"]("span", null, i["createElement"](Zi, {
                name: "sousuo1",
                prefix: "gonggongtubiao",
                fontSize: "16px"
            })), i["createElement"]("span", null, Ee["get"]("graph-analyser.panel.search.placeholder").d("点击搜索"))), t && i["createElement"](ta, {
                onClose: f,
                onSearch: p,
                main: e.main,
                onLoading: c
            })), t && u && i["createElement"](sa, {
                type: u.type,
                data: u.data,
                loading: o,
                main: e.main,
                onClose: f
            }))
        }
        var pa = fa;
        var ha = t(899);
        var ma = t(13);
        var _a = t(900);
        var va = t(901);
        function ga(e) {
            var n;
            return i["createElement"]("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1",
                style: {
                    width: e.length,
                    height: e.width
                }
            }, i["createElement"]("line", {
                x1: "0",
                y1: "0",
                x2: e.length,
                y2: "0",
                style: {
                    stroke: e.color,
                    strokeWidth: e.width,
                    strokeDasharray: (n = e.dash) === null || n === void 0 ? void 0 : n.join(",")
                }
            }))
        }
        var ya = $i["Grid"].Row
          , ba = $i["Grid"].Col;
        function wa(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-color"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-color-selector"
            }, a["map"](bn, (function(n, t) {
                return i["createElement"]("div", {
                    key: t,
                    className: t === e.value ? "ga-current-color" : "",
                    style: {
                        background: n.normal
                    },
                    onClick: function() {
                        e.onChange(t)
                    }
                })
            }
            ))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-color-default",
                onClick: function() {
                    e.onChange(e.default)
                }
            }, Ee["get"]("graph-analyser.panel.facade.default").d("恢复默认值")))
        }
        function Ea(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-size"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-size-selector"
            }, a["map"](xn.node, (function(n, t) {
                return i["createElement"](ya, {
                    onClick: function() {
                        e.onChange(t)
                    },
                    key: t
                }, i["createElement"](ba, {
                    className: "ga-facade-panel-popup-node-size-selector-circle " + (t === e.value ? "ga-current-node-size" : ""),
                    span: 12
                }, i["createElement"]("div", {
                    style: {
                        width: 24 * n,
                        height: 24 * n,
                        borderRadius: 12 * n
                    }
                })), i["createElement"](ba, {
                    span: 12,
                    className: "ga-facade-panel-popup-node-size-selector-label"
                }, n * 100 + "%"))
            }
            ))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-size-default",
                onClick: function() {
                    e.onChange(e.default)
                }
            }, Ee["get"]("graph-analyser.panel.facade.default").d("恢复默认值")))
        }
        function Sa(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-line-style"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-line-style-selector"
            }, a["map"](Nn, (function(n, t) {
                return i["createElement"]("div", {
                    key: t,
                    onClick: function() {
                        e.onChange(t)
                    }
                }, i["createElement"](ga, {
                    width: 2,
                    length: 160,
                    dash: n,
                    color: t === e.value ? "#00C1DE" : "#545872"
                }))
            }
            ))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-line-style-default",
                onClick: function() {
                    e.onChange(e.default)
                }
            }, Ee["get"]("graph-analyser.panel.facade.default").d("恢复默认值")))
        }
        function ka(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-size"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-size-selector"
            }, a["map"](xn.edge, (function(n, t) {
                return i["createElement"]("div", {
                    key: t,
                    onClick: function() {
                        e.onChange(t)
                    }
                }, i["createElement"]("div", null, n * 100 + "%"), i["createElement"](ga, {
                    width: 2 * n,
                    length: 160,
                    dash: Nn[pn.SOLID],
                    color: t === e.value ? "#00C1DE" : "#545872"
                }))
            }
            ))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-edge-size-default",
                onClick: function() {
                    e.onChange(e.default)
                }
            }, Ee["get"]("graph-analyser.panel.facade.default").d("恢复默认值")))
        }
        function xa(e) {
            var n = i["useState"](e.value.fontFamily)
              , t = n[0]
              , r = n[1];
            var o = i["useState"]("")
              , c = o[0]
              , d = o[1];
            var u = e.dataSource.map((function(e) {
                var n = e.fontFamily
                  , t = e.fontFamilyDisplayName;
                return {
                    value: n,
                    label: t || n
                }
            }
            ));
            var l = e.dataSource.find((function(e) {
                return e.fontFamily === t
            }
            )).icons.filter((function(e) {
                return e.name.includes(c) || e.key.includes(c)
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-icon"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-icon-title"
            }, Ee["get"]("graph-analyser.panel.facade.icon.title").d("编辑图标")), i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-icon-filter"
            }, i["createElement"]($i["Select"], {
                followTrigger: true,
                dataSource: u,
                defaultValue: t,
                onChange: function(e) {
                    r(e)
                }
            }), i["createElement"]($i["Input"], {
                placeholder: "",
                defaultValue: c,
                onChange: function(e) {
                    d(e)
                }
            })), i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-icon-content"
            }, a["map"](l, (function(n) {
                return i["createElement"]("div", {
                    key: n.key,
                    onClick: function() {
                        e.onChange({
                            fontFamily: t,
                            icon: n.key
                        })
                    }
                }, i["createElement"]("div", null, i["createElement"]("i", {
                    className: t + " " + t + "-" + n.key
                })))
            }
            ))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-node-icon-default",
                onClick: function() {
                    e.onChange(e.default)
                }
            }, Ee["get"]("graph-analyser.panel.facade.default").d("恢复默认值")))
        }
        function Oa(e) {
            var n = i["useState"](e.value)
              , t = n[0]
              , a = n[1];
            var r = function(e) {
                return a(e)
            };
            var o = function() {
                e.onChange(t);
                e.onClose()
            };
            var c = function() {
                e.onClose()
            };
            return i["createElement"]("div", {
                className: "ga-facade-panel-popup-label"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-popup-label-title"
            }, Ee["get"]("graph-analyser.panel.facade.label.title").d("设置显示字段")), i["createElement"]("div", {
                className: "ga-facade-panel-popup-label-content"
            }, i["createElement"]($i["Form"], {
                labelCol: {
                    fixedSpan: 6
                },
                wrapperCol: {
                    span: 14
                }
            }, i["createElement"]($i["Form"].Item, {
                label: e.type === "node" ? Ee["get"]("graph-analyser.panel.facade.label.form.node.title").d("点类型的显示字段") : Ee["get"]("graph-analyser.panel.facade.label.form.edge.title").d("边类型的显示字段"),
                required: true
            }, i["createElement"]($i["CascaderSelect"], {
                followTrigger: true,
                dataSource: e.dataSource,
                value: t,
                onChange: r
            })))), i["createElement"]("div", {
                className: "ga-facade-panel-popup-label-footer"
            }, i["createElement"]($i["Button"], {
                onClick: o,
                type: "primary"
            }, Ee["get"]("ok").d("确认")), i["createElement"]($i["Button"], {
                onClick: c
            }, Ee["get"]("cancel").d("取消"))))
        }
        var Fa = undefined && undefined.__assign || function() {
            Fa = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Fa.apply(this, arguments)
        }
        ;
        function Na(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-color"
            }, i["createElement"]("div", {
                style: {
                    background: bn[e.value].normal
                }
            }));
            return i["createElement"]($i["Balloon"], {
                trigger: n,
                triggerType: "click",
                align: "l",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](wa, Fa({}, e)))
        }
        function Da(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-size"
            }, xn.node[e.value] * 100 + "%");
            return i["createElement"]($i["Balloon"], {
                trigger: n,
                triggerType: "click",
                align: "lb",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](Ea, Fa({}, e)))
        }
        function ja(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-edge-line-style"
            }, i["createElement"]("i", {
                className: "gonggongtubiao xushiqiehuan"
            }));
            return i["createElement"]($i["Balloon"], {
                trigger: n,
                triggerType: "click",
                align: "lb",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](Sa, Fa({}, e)))
        }
        function Pa(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-size"
            }, xn.node[e.value] * 100 + "%");
            return i["createElement"]($i["Balloon"], {
                trigger: n,
                triggerType: "click",
                align: "lb",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](ka, Fa({}, e)))
        }
        function Ta(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-hide",
                onClick: function() {
                    return e.onChange(!e.value)
                }
            }, i["createElement"]("i", {
                className: "gonggongtubiao " + (e.value ? "shitu-yulanbukejian" : "shitu-yulan")
            }))
        }
        function Ia(e) {
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-property-select",
                onClick: function() {
                    return e.onChange(!e.value)
                }
            }, i["createElement"]("i", {
                className: "gonggongtubiao " + (e.value ? "guanbi" : "jia")
            }))
        }
        function Ca(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-node-icon"
            }, i["createElement"]("i", {
                className: e.value.fontFamily + " " + e.value.fontFamily + "-" + e.value.icon
            }));
            return i["createElement"]($i["Balloon"], {
                trigger: n,
                triggerType: "click",
                align: "lb",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](xa, Fa({}, e)))
        }
        function La(e) {
            var n = i["useState"](false)
              , t = n[0]
              , a = n[1];
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-label"
            }, i["createElement"]("i", {
                className: "gonggongtubiao xinxi"
            }));
            return i["createElement"]($i["Balloon"], {
                visible: t,
                onVisibleChange: function(e) {
                    a(e)
                },
                trigger: r,
                triggerType: "click",
                align: "tl",
                className: "ga-facade-panel-tree-leaf-actions-popup"
            }, i["createElement"](Oa, Fa({}, e, {
                onClose: function() {
                    return a(false)
                }
            })))
        }
        function Ra(e) {
            var n = [{
                label: "ID",
                value: "id"
            }, {
                label: Ee["get"]("labelName").d("类型名"),
                value: "label"
            }, {
                label: Ee["get"]("displayName").d("显示名"),
                value: "displayName"
            }, {
                label: Ee["get"]("comment").d("备注"),
                value: "comment"
            }];
            var t = e.propertyDefList;
            if (t.length > 0) {
                n.push({
                    label: Ee["get"]("property").d("属性"),
                    value: "properties",
                    children: t.map((function(e) {
                        return {
                            value: "properties." + e.name,
                            label: e.name
                        }
                    }
                    ))
                })
            }
            return n
        }
        function Aa(e, n, t, a, r) {
            var o = r.getService(u.GraphinFacadeService);
            var c = o.getIconfontProvider().provide();
            var d = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[2]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, (o.getCurrentFacadeProvider().type === _n.WITH_ICON || o.getCurrentFacadeProvider().type === _n.LONG) && i["createElement"](Ca, {
                default: {
                    fontFamily: c.default.fontFamily,
                    icon: c.default.name
                },
                value: {
                    fontFamily: n.fontFamily,
                    icon: n.icon
                },
                dataSource: c.iconfont.map((function(e) {
                    return {
                        fontFamily: e.fontFamily,
                        fontFamilyDisplayName: e.fontFamilyDisplayName,
                        icons: e.map.map((function(e) {
                            return {
                                name: e.name,
                                key: e.font_class
                            }
                        }
                        ))
                    }
                }
                )),
                onChange: function(n) {
                    a.setNodePropertyValue(e, {
                        fontFamily: n.fontFamily,
                        icon: n.icon
                    });
                    return
                }
            }), i["createElement"](Na, {
                value: n.color,
                default: t.color,
                onChange: function(n) {
                    a.setNodePropertyValue(e, {
                        color: n
                    })
                }
            }), i["createElement"](Da, {
                value: n.size,
                default: t.size,
                onChange: function(n) {
                    a.setNodePropertyValue(e, {
                        size: n
                    })
                }
            })));
            return {
                label: d,
                key: e.join(","),
                isLeaf: true
            }
        }
        function Ga(e, n, t, r, o) {
            var c = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[1]));
            return {
                label: c,
                key: e.join(","),
                children: a["map"](n.values, (function(n, i) {
                    return Aa([e[0], e[1], i], n, t, r, o)
                }
                ))
            }
        }
        function za(e, n, t, r, o) {
            var c = o.getService(u.GraphinFacadeService);
            var d = c.getIconfontProvider().provide();
            var l = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, (c.getCurrentFacadeProvider().type === _n.WITH_ICON || c.getCurrentFacadeProvider().type === _n.LONG) && i["createElement"](Ca, {
                default: {
                    fontFamily: d.default.fontFamily,
                    icon: d.default.name
                },
                value: {
                    fontFamily: n.fontFamily,
                    icon: n.icon
                },
                dataSource: d.iconfont.map((function(e) {
                    return {
                        fontFamily: e.fontFamily,
                        fontFamilyDisplayName: e.fontFamilyDisplayName,
                        icons: e.map.map((function(e) {
                            return {
                                name: e.name,
                                key: e.font_class
                            }
                        }
                        ))
                    }
                }
                )),
                onChange: function(n) {
                    r.setNodeType(e, {
                        fontFamily: n.fontFamily,
                        icon: n.icon
                    });
                    return
                }
            }), i["createElement"](La, {
                type: "node",
                value: n.display,
                dataSource: Ra(t),
                onChange: function(n) {
                    r.setNodeType(e, {
                        display: n
                    })
                }
            }), i["createElement"](Na, {
                value: n.color,
                default: t.color,
                onChange: function(n) {
                    r.setNodeType(e, {
                        color: n
                    })
                }
            }), i["createElement"](Da, {
                value: n.size,
                default: t.size,
                onChange: function(n) {
                    r.setNodeType(e, {
                        size: n
                    })
                }
            })));
            return [{
                label: l,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return Ga([e[0], i], n, t, r, o)
                }
                ))
            }]
        }
        function Ba(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).nodes;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(t) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: t.key,
                    isLabelBlock: true,
                    dataSource: za([t.key], t.value, r.types.find((function(e) {
                        return e.label === t.key
                    }
                    )), n.facade.updater, e.main)
                })
            }
            )))
        }
        function Ma(e, n, t, a) {
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[2]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"](ja, {
                value: n.lineStyle,
                default: pn.SOLID,
                onChange: function(n) {
                    a.setEdgePropertyValue(e, {
                        lineStyle: n
                    })
                }
            }), i["createElement"](Na, {
                value: n.color,
                default: t.color,
                onChange: function(n) {
                    a.setEdgePropertyValue(e, {
                        color: n
                    })
                }
            }), i["createElement"](Pa, {
                value: n.size,
                default: t.size,
                onChange: function(n) {
                    a.setEdgePropertyValue(e, {
                        size: n
                    })
                }
            })));
            return {
                label: r,
                key: e.join(","),
                isLeaf: true
            }
        }
        function Xa(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[1]));
            return {
                label: o,
                key: e.join(","),
                children: a["map"](n.values, (function(n, i) {
                    return Ma([e[0], e[1], i], n, t, r)
                }
                ))
            }
        }
        function Va(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"](La, {
                type: "edge",
                value: n.display,
                dataSource: Ra(t),
                onChange: function(n) {
                    r.setEdgeType(e, {
                        display: n
                    })
                }
            }), i["createElement"](ja, {
                value: n.lineStyle,
                default: pn.SOLID,
                onChange: function(n) {
                    r.setEdgeType(e, {
                        lineStyle: n
                    })
                }
            }), i["createElement"](Na, {
                value: n.color,
                default: t.color,
                onChange: function(n) {
                    r.setEdgeType(e, {
                        color: n
                    })
                }
            }), i["createElement"](Pa, {
                value: n.size,
                default: t.size,
                onChange: function(n) {
                    r.setEdgeType(e, {
                        size: n
                    })
                }
            })));
            return [{
                label: o,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return Xa([e[0], i], n, t, r)
                }
                ))
            }]
        }
        function Wa(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).edges;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(e) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: e.key,
                    isLabelBlock: true,
                    dataSource: Va([e.key], e.value, r.types.find((function(n) {
                        return n.label === e.key
                    }
                    )), n.facade.updater)
                })
            }
            )))
        }
        function Ua(e, n, t, a) {
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[2]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-count"
            }, n.count), i["createElement"](Ta, {
                value: n.hidden,
                onChange: function(n) {
                    a.setNodePropertyValue(e, {
                        hidden: n
                    })
                }
            })));
            return {
                label: r,
                key: e.join(","),
                isLeaf: true
            }
        }
        function qa(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[1], i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label-tag"
            }, n.type)));
            return {
                label: o,
                key: e.join(","),
                children: a["map"](n.values, (function(n, i) {
                    return Ua([e[0], e[1], i], n, t, r)
                }
                ))
            }
        }
        function Ha(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-count"
            }, n.count), i["createElement"](Ta, {
                value: n.hidden,
                onChange: function(n) {
                    r.setNodeType(e, {
                        hidden: n
                    })
                }
            })));
            return [{
                label: o,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return qa([e[0], i], n, t, r)
                }
                ))
            }]
        }
        function Ka(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).nodes;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(e) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: e.key,
                    isLabelBlock: true,
                    dataSource: Ha([e.key], e.value, r.types.find((function(n) {
                        return n.label === e.key
                    }
                    )), n.facade.updater)
                })
            }
            )))
        }
        function Ya(e, n, t, a) {
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[2]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-count"
            }, n.count), i["createElement"](Ta, {
                value: n.hidden,
                onChange: function(n) {
                    a.setEdgePropertyValue(e, {
                        hidden: n
                    })
                }
            })));
            return {
                label: r,
                key: e.join(","),
                isLeaf: true
            }
        }
        function Za(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[1], i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label-tag"
            }, n.type)));
            return {
                label: o,
                key: e.join(","),
                children: a["map"](n.values, (function(n, i) {
                    return Ya([e[0], e[1], i], n, t, r)
                }
                ))
            }
        }
        function Ja(e, n, t, r) {
            var o = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-count"
            }, n.count), i["createElement"](Ta, {
                value: n.hidden,
                onChange: function(n) {
                    r.setEdgeType(e, {
                        hidden: n
                    })
                }
            })));
            return [{
                label: o,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return Za([e[0], i], n, t, r)
                }
                ))
            }]
        }
        function $a(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).edges;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(e) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: e.key,
                    isLabelBlock: true,
                    dataSource: Ja([e.key], e.value, r.types.find((function(n) {
                        return n.label === e.key
                    }
                    )), n.facade.updater)
                })
            }
            )))
        }
        function Qa(e, n, t, a) {
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, i["createElement"]("span", {
                className: n.selected ? "ga-facade-panel-tree-leaf-label-selected" : ""
            }, e[1])), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"](Ia, {
                value: n.selected,
                onChange: function(n) {
                    a.setNodePropertyKey(e, {
                        selected: n
                    })
                }
            })));
            return {
                label: r,
                key: e.join(","),
                isLeaf: true
            }
        }
        function er(e, n, t, r) {
            var o = function() {
                a["map"](n.properties, (function(n, t) {
                    r.setNodePropertyKey([e[0], t], {
                        selected: true
                    })
                }
                ))
            };
            var c = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-select-all",
                onClick: o
            }, Ee["get"]("graph-analyser.panel.facade.select-all-tag").d("获取全部标签"))));
            return [{
                label: c,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return Qa([e[0], i], n, t, r)
                }
                ))
            }]
        }
        function nr(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).nodes;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(e) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: e.key,
                    isLabelBlock: true,
                    dataSource: er([e.key], e.value, r.types.find((function(n) {
                        return n.label === e.key
                    }
                    )), n.facade.updater)
                })
            }
            )))
        }
        function tr(e, n, t, a) {
            var r = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, i["createElement"]("span", {
                className: n.selected ? "ga-facade-panel-tree-leaf-label-selected" : ""
            }, e[1])), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"](Ia, {
                value: n.selected,
                onChange: function(n) {
                    a.setEdgePropertyKey(e, {
                        selected: n
                    })
                }
            })));
            return {
                label: r,
                key: e.join(","),
                isLeaf: true
            }
        }
        function ir(e, n, t, r) {
            var o = function() {
                a["map"](n.properties, (function(n, t) {
                    r.setEdgePropertyKey([e[0], t], {
                        selected: true
                    })
                }
                ))
            };
            var c = i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-label"
            }, e[0]), i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-tree-leaf-actions-select-all",
                onClick: o
            }, Ee["get"]("graph-analyser.panel.facade.select-all-tag").d("获取全部标签"))));
            return [{
                label: c,
                key: e.join(","),
                children: a["map"](n.properties, (function(n, i) {
                    return tr([e[0], i], n, t, r)
                }
                ))
            }]
        }
        function ar(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = e.main.getService(u.GraphinDataService).getData();
            var r = e.main.getService(u.AnalysisTaskInformation).schema;
            var o = n.facade.treeFactory.generate(t).edges;
            var c = a["map"](o, (function(e, n) {
                return {
                    key: n,
                    value: e
                }
            }
            ));
            return i["createElement"]("div", {
                className: "ga-facade-panel-tree"
            }, c.map((function(e) {
                return i["createElement"]($i["Tree"], {
                    showLine: true,
                    key: e.key,
                    isLabelBlock: true,
                    dataSource: ir([e.key], e.value, r.types.find((function(n) {
                        return n.label === e.key
                    }
                    )), n.facade.updater)
                })
            }
            )))
        }
        function rr(e) {
            var n = i["createElement"]("div", {
                className: "ga-facade-panel-tab"
            }, i["createElement"]("i", {
                className: "gonggongtubiao dian"
            }), Ee["get"]("node").d("点"));
            var t = i["createElement"]("div", {
                className: "ga-facade-panel-tab"
            }, i["createElement"]("i", {
                className: "gonggongtubiao bian"
            }), Ee["get"]("edge").d("边"));
            return i["createElement"]($i["Tab"], {
                shape: "capsule",
                size: "small"
            }, i["createElement"]($i["Tab"].Item, {
                title: n,
                key: "node"
            }, e.children[0]), i["createElement"]($i["Tab"].Item, {
                title: t,
                key: "edge"
            }, e.children[1]))
        }
        function or(e) {
            var n = e.main.getService(u.GraphinDataService);
            return ma["createPortal"](i["createElement"]("div", {
                className: "ga-facade-panel"
            }, i["createElement"]("div", {
                className: "ga-facade-panel-title"
            }, Ee["get"]("graph-analyser.panel.facade.title").d("个性化设置"), i["createElement"]("div", {
                onClick: e.onClose
            }, i["createElement"]("i", {
                className: "gonggongtubiao guanbi"
            }))), i["createElement"]("div", {
                className: "ga-facade-panel-content"
            }, i["createElement"]($i["Tab"], null, i["createElement"]($i["Tab"].Item, {
                title: Ee["get"]("graph-analyser.panel.facade.tab.style").d("样式"),
                key: "style"
            }, i["createElement"](rr, null, i["createElement"](Ba, {
                main: e.main
            }), i["createElement"](Wa, {
                main: e.main
            }))), i["createElement"]($i["Tab"].Item, {
                title: Ee["get"]("graph-analyser.panel.facade.tab.hide").d("显隐"),
                key: "hide"
            }, i["createElement"](rr, null, i["createElement"](Ka, {
                main: e.main
            }), i["createElement"]($a, {
                main: e.main
            }))), i["createElement"]($i["Tab"].Item, {
                title: Ee["get"]("graph-analyser.panel.facade.tab.tooltip").d("属性"),
                key: "tooltip"
            }, i["createElement"](rr, null, i["createElement"](nr, {
                main: e.main
            }), i["createElement"](ar, {
                main: e.main
            })))))), n.get().graphDOM)
        }
        var cr = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var dr = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        function ur(e) {
            var n = function() {
                var n = e.main.getService(u.CommandService);
                n.do(we.ZOOM_IN)
            };
            var t = i["createElement"]("div", null, i["createElement"](Zi, {
                name: "shitu-fangda",
                fontSize: "14px",
                onClick: n
            }));
            return i["createElement"]($i["Balloon"].Tooltip, {
                align: "b",
                trigger: t
            }, Ee["get"]("graph-analyser.panel.control.zoom-in").d("放大"))
        }
        function lr(e) {
            var n = function() {
                var n = e.main.getService(u.CommandService);
                n.do(we.ZOOM_OUT)
            };
            var t = i["createElement"]("div", null, i["createElement"](Zi, {
                name: "shitu-suoxiao",
                fontSize: "14px",
                onClick: n
            }));
            return i["createElement"]($i["Balloon"].Tooltip, {
                align: "b",
                trigger: t
            }, Ee["get"]("graph-analyser.panel.control.zoom-out").d("缩小"))
        }
        function sr(e) {
            var n = e.main.getService(u.GraphinCommandService);
            var t = i["createElement"]("div", null, i["createElement"](Zi, {
                name: "shitu-buju",
                prefix: "gonggongtubiao",
                fontSize: "14px"
            }));
            var a = function(n) {
                var t = e.main.getService(u.CommandService);
                t.do(we.LAYOUT, n)
            };
            function r() {
                var e;
                return i["createElement"]("div", {
                    className: "ga-control-panel-layout"
                }, i["createElement"]("div", {
                    className: "ga-control-panel-layout-title"
                }, Ee["get"]("graph-analyser.panel.control.layout").d("布局方案")), i["createElement"]("div", {
                    className: "ga-control-panel-layout-list"
                }, i["createElement"]($i["Radio"].Group, {
                    defaultValue: n.getOptions().layout.current,
                    onChange: a
                }, (((e = n.getOptions().layout) === null || e === void 0 ? void 0 : e.supported) || []).map((function(e) {
                    return i["createElement"]("div", {
                        className: "ga-control-panel-layout-list-item " + (e.name === n.getOptions().layout.current ? "ga-control-panel-layout-list-item-selected" : ""),
                        key: e.name
                    }, i["createElement"]($i["Radio"], {
                        value: e.name
                    }, i["createElement"]("i", {
                        className: "gonggongtubiao " + e.icon
                    }), e.desc))
                }
                )))))
            }
            return i["createElement"]($i["Balloon"], {
                className: "ga-control-panel-layout-container",
                align: "br",
                trigger: t,
                closable: false
            }, i["createElement"](r, null))
        }
        function fr(e) {
            var n = e.main.getService(u.GraphinFacadeService);
            var t = i["createElement"]("div", null, i["createElement"](Zi, {
                name: "shitu-bianxing",
                prefix: "gonggongtubiao",
                fontSize: "14px"
            }));
            var a = n.getAllFacadeProviders();
            var r = function(n) {
                var t = e.main.getService(u.CommandService);
                t.do(we.FACE, n)
            };
            var o = function(e, t) {
                return i["createElement"]("div", {
                    className: "ga-control-panel-shape-list-group"
                }, i["createElement"]("div", {
                    className: "ga-control-panel-shape-list-title"
                }, e), i["createElement"]("div", {
                    className: "ga-control-panel-shape-list-items"
                }, t.map((function(e) {
                    var t = e.exhibit;
                    return i["createElement"](t, {
                        key: e.name,
                        selected: e.name === n.getCurrentFacadeProvider().name,
                        onClick: r.bind(undefined, e.name)
                    })
                }
                ))))
            };
            var c = o(Ee["get"]("graph-analyser.control.shape.without-icon").d("Without Icon"), a.filter((function(e) {
                return e.type === _n.WITHOUT_ICON
            }
            )));
            var d = o(Ee["get"]("graph-analyser.control.shape.with-icon").d("With Icon"), a.filter((function(e) {
                return e.type === _n.WITH_ICON
            }
            )));
            var l = o(Ee["get"]("graph-analyser.control.shape.long").d("Long"), a.filter((function(e) {
                return e.type === _n.LONG
            }
            )));
            var s = o(Ee["get"]("graph-analyser.control.shape.mini").d("Mini"), a.filter((function(e) {
                return e.type === _n.MINI
            }
            )));
            function f() {
                return i["createElement"]("div", {
                    className: "ga-control-panel-shape"
                }, i["createElement"]("div", {
                    className: "ga-control-panel-shape-title"
                }, Ee["get"]("graph-analyser.panel.control.shape").d("形状")), i["createElement"]("div", {
                    className: "ga-control-panel-shape-list"
                }, c, d, l, s))
            }
            return i["createElement"]($i["Balloon"], {
                closable: false,
                className: "ga-control-panel-layout-container",
                align: "b",
                trigger: t
            }, i["createElement"](f, null))
        }
        function pr(e) {
            var n = this;
            var t = e.main.getService(u.GraphinCommandService);
            var a = t.getOptions();
            var r = a.isFullscreen ? "tuichuquanping" : "jinruquanping";
            var o = a.isFullscreen ? function() {
                return cr(n, void 0, void 0, (function() {
                    return dr(this, (function(e) {
                        t.exitFullscreen();
                        return [2]
                    }
                    ))
                }
                ))
            }
            : function() {
                return cr(n, void 0, void 0, (function() {
                    return dr(this, (function(e) {
                        t.requestFullscreen();
                        return [2]
                    }
                    ))
                }
                ))
            }
            ;
            var c = i["createElement"]("div", {
                id: "graph-analyser-fullscreen",
                onClick: o
            }, i["createElement"](Zi, {
                name: "shitu-" + r
            }));
            var d = a.isFullscreen ? Ee["get"]("graph-analyser.panel.control.exit-fullscreen").d("退出全屏") : Ee["get"]("graph-analyser.panel.control.exit-fullscreen").d("进入全屏");
            return i["createElement"]($i["Balloon"].Tooltip, {
                align: "b",
                trigger: c
            }, d)
        }
        function hr(e) {
            var n = i["useState"](false)
              , t = n[0]
              , a = n[1];
            var r = i["createElement"]("div", {
                id: "graph-analyser",
                onClick: function() {
                    a(true)
                }
            }, i["createElement"](Zi, {
                name: "shezhi"
            }));
            var o = Ee["get"]("graph-analyser.panel.control.facade-setting").d("个性化设置");
            return i["createElement"](i["Fragment"], null, i["createElement"]($i["Balloon"].Tooltip, {
                align: "b",
                trigger: r
            }, o), t && i["createElement"](or, {
                main: e.main,
                onClose: function() {
                    a(false)
                }
            }))
        }
        function mr(e) {
            return i["createElement"]("div", {
                className: "ga-control-panel"
            }, i["createElement"](fr, {
                main: e.main
            }), i["createElement"](sr, {
                main: e.main
            }), i["createElement"](ur, {
                main: e.main
            }), i["createElement"](lr, {
                main: e.main
            }), i["createElement"](pr, {
                main: e.main
            }), i["createElement"]("div", {
                className: "ga-control-panel-separator"
            }, "|"), i["createElement"](hr, {
                main: e.main
            }))
        }
        var _r = mr;
        var vr = t(1011);
        var gr = t(902);
        var yr = undefined && undefined.__assign || function() {
            yr = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return yr.apply(this, arguments)
        }
        ;
        var br = "GraphinPanel";
        function wr(e) {
            var n;
            var t = i["useState"]()
              , a = t[0]
              , r = t[1];
            var o = (n = e.current) === null || n === void 0 ? void 0 : n.getBoundingClientRect();
            i["useEffect"]((function() {
                var e, n, t, i;
                if (((e = o) === null || e === void 0 ? void 0 : e.width) !== ((n = a) === null || n === void 0 ? void 0 : n.width) || ((t = o) === null || t === void 0 ? void 0 : t.height) !== ((i = a) === null || i === void 0 ? void 0 : i.height)) {
                    r(o)
                }
            }
            ), [e.current]);
            return a
        }
        function Er(e, n, t) {
            var a = e.getService(u.GraphinDataService);
            var r = e.getService(u.GraphinCommandService);
            var o = e.getService(u.DownstreamSync);
            i["useEffect"]((function() {
                if (!e.isActivated || !n.current)
                    return;
                a.set(n.current);
                r.set(n.current);
                o.hook();
                e.refresh()
            }
            ), t)
        }
        function Sr(e) {
            var n = i["useRef"]();
            var t = i["useRef"]();
            var a = e.main.getService(u.GraphinDataService);
            var r = e.main.getService(u.GraphinCommandService);
            var o = e.main.getService(u.GraphinFacadeService);
            var c = wr(n);
            Er(e.main, t, [c, e.main.isActivated]);
            var d = function() {
                return c && e.main.isActivated
            };
            return i["createElement"]("div", {
                className: "ga-graphin-panel",
                ref: n
            }, !d() ? i["createElement"]($i["Loading"], {
                style: {
                    display: "block",
                    height: "100%",
                    width: "100%"
                }
            }) : i["createElement"](i["Fragment"], null, i["createElement"](vr["a"], yr({
                data: a.getData(),
                ref: t,
                height: c.height,
                width: c.width,
                layout: {
                    name: r.getOptions().layout.current
                }
            }, o.getGraphinExtendAndRegister())), a.get() && e.children))
        }
        var kr = Sr;
        var xr = t(903);
        function Or(e) {
            var n = e.main.getService(u.StatisticPanelService);
            var t = n.getStatisticsPanelProvider();
            var a = i["useMemo"]((function() {
                var e;
                return (e = t) === null || e === void 0 ? void 0 : e.provide()
            }
            ), []);
            if (!a)
                return null;
            return i["createElement"]("div", {
                className: "ga-statistics-panel"
            }, i["createElement"](a, null))
        }
        var Fr = Or;
        var Nr = t(904);
        var Dr = t(905);
        var jr = t(906);
        var Pr = t(907);
        var Tr = t(908);
        var Ir = t(909);
        var Cr = t(910);
        var Lr = t(911);
        var Rr = t(912);
        var Ar = t(913);
        var Gr = t(914);
        var zr = t(915);
        var Br = function(e, n) {
            return {
                fontFamily: e.font_family,
                fontFamilyDisplayName: n,
                map: e.glyphs
            }
        };
        var Mr = function() {
            function e() {}
            e.prototype.provide = function() {
                return {
                    default: {
                        fontFamily: "graph-basic",
                        name: "star"
                    },
                    iconfont: [Br(Nr, Ee["get"]("graph-analyser.icon.basic").d("基础")), Br(Dr, Ee["get"]("graph-analyser.icon.common").d("常用")), Br(jr, Ee["get"]("graph-analyser.icon.data").d("数据")), Br(Pr, Ee["get"]("graph-analyser.icon.delivery").d("外卖")), Br(Tr, Ee["get"]("graph-analyser.icon.ecology").d("生态")), Br(Ir, Ee["get"]("graph-analyser.icon.finance").d("金融")), Br(Cr, Ee["get"]("graph-analyser.icon.health").d("健康")), Br(Lr, Ee["get"]("graph-analyser.icon.knowledge").d("知识")), Br(Rr, Ee["get"]("graph-analyser.icon.network").d("网络")), Br(Ar, Ee["get"]("graph-analyser.icon.strategy").d("策略")), Br(Gr, Ee["get"]("graph-analyser.icon.terminal").d("终端"))]
                }
            }
            ;
            return e
        }();
        var Xr = function() {
            function e() {
                this.name = "iconfont-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideIconfont(new Mr)
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var Vr = Xr;
        var Wr = {
            fill: "#FFFFFF",
            textAlign: "center",
            textBaseline: "middle"
        };
        var Ur = undefined && undefined.__assign || function() {
            Ur = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Ur.apply(this, arguments)
        }
        ;
        var qr = 2;
        function Hr(e) {
            var n = e.utils.color;
            var t = e.utils.size;
            var i = e.utils.lineStyle;
            return {
                draw: function(a, r) {
                    var o = e.graph.hasLabel;
                    var c = a.startPoint
                      , d = a.endPoint
                      , u = a.facade;
                    var l = t.edge[u.size] + 1;
                    var s = {
                        path: [["M", c.x, c.y], ["L", d.x, d.y]]
                    };
                    r.addShape("path", {
                        attrs: Ur(Ur({
                            id: "selected"
                        }, s), {
                            lineWidth: 0,
                            opacity: .2,
                            stroke: "#FFF"
                        })
                    });
                    var f = r.addShape("path", {
                        attrs: Ur(Ur({
                            id: "main"
                        }, s), {
                            lineAppendWidth: 4,
                            stroke: u.hidden ? n[fn.GREY].dark : n[u.color].dark,
                            lineWidth: u.hidden ? 1 : t.edge[u.size] * qr,
                            lineDash: i[u.style],
                            endArrow: {
                                d: l,
                                path: "M " + l + ",0 L -" + l + ",-" + l + " L -" + l + "," + l + " Z"
                            }
                        })
                    });
                    if (o) {
                        var p = r.addShape("text", {
                            attrs: Ur(Ur({
                                id: "label",
                                x: 0,
                                y: 0,
                                fontSize: 10,
                                text: a.label
                            }, Wr), {
                                textAlign: "center",
                                fill: a.facade.hidden ? "#8D93B0" : "#DEE1F0"
                            })
                        });
                        p.rotate(d.x - c.x === 0 ? Math.PI / 2 : Math.atan((d.y - c.y) / (d.x - c.x)));
                        p.translate((c.x + d.x) / 2, (c.y + d.y) / 2);
                        p.translate(-5, -5)
                    }
                    return f
                },
                setState: function(e, i, a) {
                    var r;
                    if (!e)
                        return;
                    var o = a.get("model");
                    var c = a.getContainer().get("children").find((function(e) {
                        return e.attr().id === "main"
                    }
                    ));
                    var d = a.getContainer().get("children").find((function(e) {
                        return e.attr().id === "selected"
                    }
                    ));
                    var u = a.getContainer().get("children").find((function(e) {
                        return e.attr().id === "label"
                    }
                    ));
                    var l = t.edge[o.facade.size] + 1;
                    var s = t.edge[o.facade.size] * qr;
                    var f = {
                        main: {},
                        selected: {},
                        text: {}
                    };
                    f.main = {
                        stroke: o.facade.hidden ? n[fn.GREY].dark : n[o.facade.color].dark,
                        lineWidth: o.facade.hidden ? 1 : t.edge[o.facade.size] * qr,
                        endArrow: {
                            d: l,
                            path: "M " + l + ",0 L -" + l + ",-" + l + " L -" + l + "," + l + " Z"
                        }
                    };
                    f.selected = {
                        lineWidth: 0
                    };
                    f.text = {
                        fill: o.facade.hidden ? "#8D93B0" : "#DEE1F0"
                    };
                    if (e === hn.HOVERED && i) {
                        var p = l + 1;
                        f.main = {
                            lineWidth: s + 1,
                            endArrow: {
                                d: p,
                                path: "M " + p + ",0 L -" + p + ",-" + p + " L -" + p + "," + p + " Z"
                            }
                        }
                    }
                    if (e === hn.SELECTED && i || e === hn.LIGHT && i) {
                        var p = l + 1;
                        var h = l + 4;
                        f.main = {
                            lineWidth: s + 1,
                            endArrow: {
                                d: p,
                                path: "M " + p + ",0 L -" + p + ",-" + p + "  L -" + p + "," + p + " Z"
                            }
                        };
                        f.selected = {
                            lineWidth: s + 6
                        }
                    }
                    if (e === hn.DARK && i) {
                        f.main = {
                            stroke: "#2C2F40",
                            lineWidth: 1,
                            endArrow: {
                                d: 2,
                                path: "M 2,0 L -2,-2 L -2,2 Z"
                            }
                        };
                        f.text = {
                            fill: "#8D93B0"
                        }
                    }
                    c.attr(f.main);
                    d.attr(f.selected);
                    (r = u) === null || r === void 0 ? void 0 : r.attr(f.text)
                }
            }
        }
        var Kr = t(916);
        function Yr(e, n) {
            return function t(a) {
                var r = i["useState"]()
                  , o = r[0]
                  , c = r[1];
                return i["createElement"]("div", {
                    onMouseEnter: function() {
                        return c(true)
                    },
                    onMouseLeave: function() {
                        return c(false)
                    },
                    onClick: function() {
                        a.onClick()
                    },
                    className: "graph-analyser-exhibitor"
                }, i["createElement"]("img", {
                    className: !o && !a.selected ? "graph-analyser-exhibitor-show" : "graph-analyser-exhibitor-hide",
                    src: e,
                    alt: ""
                }), i["createElement"]("img", {
                    className: !o && !a.selected ? "graph-analyser-exhibitor-hide" : "graph-analyser-exhibitor-show",
                    src: n,
                    alt: ""
                }))
            }
        }
        var Zr = undefined && undefined.__assign || function() {
            Zr = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Zr.apply(this, arguments)
        }
        ;
        var Jr = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.circle").d("圆形样式");
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1aFcDvuL2gK0jSZFmXXc7iXXa-152-100.png", "https://img.alicdn.com/tfs/TB1yvQDvAT2gK0jSZPcXXcKkpXa-152-100.png");
                this.type = _n.WITH_ICON;
                this.name = "circle"
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(a, r) {
                        var o = e._core.graph.hasLabel;
                        var c = t.node[a.facade.size] * 56;
                        var d = c + 4;
                        var u = a.facade.hidden ? n[fn.GREY] : n[a.facade.color];
                        var l = a.data.downstream || null;
                        var s = r.addShape("circle", {
                            attrs: {
                                id: "circle-floor",
                                x: 0,
                                y: 0,
                                r: d / 2
                            }
                        });
                        r.addShape("circle", {
                            attrs: {
                                id: "circle-selected",
                                x: 0,
                                y: 0,
                                r: 0,
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        r.addShape("circle", {
                            attrs: {
                                id: "circle-border",
                                x: 0,
                                y: 0,
                                r: d / 2,
                                stroke: a.facade.hidden ? "#1E202D" : u.normal,
                                lineWidth: 2
                            }
                        });
                        var f = r.addGroup({
                            attrs: {
                                id: "circle-inner-group"
                            }
                        }, null);
                        f.addShape("circle", {
                            attrs: {
                                id: "circle-inner",
                                x: 0,
                                y: 0,
                                r: c / 2,
                                fill: a.facade.hidden ? "#1E202D" : u.dark
                            }
                        });
                        f.addShape("text", {
                            attrs: Zr(Zr(Zr(Zr({
                                id: "circle-icon",
                                x: 0,
                                y: 0
                            }, i(a.data.fontFamily, a.data.icon)), {
                                fontSize: 20
                            }), Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        o && r.addShape("text", {
                            attrs: Zr(Zr({
                                id: "circle-label",
                                x: 0,
                                y: d / 2 + 8,
                                fontSize: 12,
                                text: a.label
                            }, Wr), {
                                textAlign: "center",
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        if (!l)
                            return s;
                        var p = r.addGroup({
                            attrs: {
                                id: "circle-children-group"
                            }
                        }, null);
                        p.addShape("circle", {
                            attrs: {
                                id: "circle-children",
                                x: d / 2 - 9,
                                y: -d / 2 + 9,
                                r: 9,
                                fill: a.facade.hidden ? "#1E202D" : u.normal
                            }
                        });
                        l !== 0 && p.addShape("text", {
                            attrs: Zr(Zr({
                                id: "circle-children-icon",
                                x: d / 2 - 9,
                                y: -d / 2 + 9,
                                text: l > 100 ? "99+" : l,
                                fontSize: 10
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        return s
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "circle-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "circle-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "circle-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "circle-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "circle-icon"
                        }
                        ));
                        var v = s.get("children").find((function(e) {
                            return e.attr().id === "circle-label"
                        }
                        ));
                        var g = s.get("children").find((function(e) {
                            return e.attr().id === "circle-children-group"
                        }
                        ));
                        var y = (r = g) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "circle-children"
                        }
                        ));
                        var b = (o = g) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "circle-children-icon"
                        }
                        ));
                        var w = n[l.facade.color];
                        var E = t.node[l.facade.size] * 56;
                        var S = E + 4;
                        var k = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : w.normal,
                                lineWidth: 2
                            },
                            selected: {
                                r: 0
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : w.dark
                            },
                            icon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : w.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            k.border.lineWidth = 5;
                            k.selected.r = S / 2 + 10
                        }
                        if (e === hn.LIGHT && i) {
                            k.selected.r = S / 2 + 10
                        }
                        if (e === hn.DARK && i) {
                            k.border.stroke = "#1E202D";
                            k.inner.fill = "#1E202D";
                            k.icon.fill = "#8D93B0";
                            k.label.fill = "#8D93B0";
                            k.children.fill = "#1E202D";
                            k.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(k.border);
                        p.attr(k.selected);
                        m.attr(k.inner);
                        _.attr(k.icon);
                        (c = v) === null || c === void 0 ? void 0 : c.attr(k.label);
                        (d = y) === null || d === void 0 ? void 0 : d.attr(k.children);
                        (u = b) === null || u === void 0 ? void 0 : u.attr(k.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var $r = function() {
            function e() {
                this.name = "circle-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new Jr(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var Qr = $r;
        var eo = undefined && undefined.__assign || function() {
            eo = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return eo.apply(this, arguments)
        }
        ;
        var no = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.rect").d("正方形");
                this.name = "rect";
                this.type = _n.WITH_ICON;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1rGwzvuL2gK0jSZPhXXahvXXa-152-100.png", "https://img.alicdn.com/tfs/TB1GIZCvy_1gK0jSZFqXXcpaXXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(a, r) {
                        var o = e._core.graph.hasLabel;
                        var c = t.node[a.facade.size] * 56;
                        var d = c + 4;
                        var u = n[a.facade.color];
                        var l = a.data.downstream || null;
                        var s = r.addShape("rect", {
                            attrs: {
                                id: "rect-floor",
                                x: 0,
                                y: 0,
                                width: d,
                                height: d,
                                fill: "#10121A"
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "rect-border",
                                x: 0,
                                y: 0,
                                width: d,
                                height: d,
                                stroke: a.facade.hidden ? "#1E202D" : u.normal,
                                lineWidth: 2
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "rect-selected",
                                x: -5,
                                y: -5,
                                width: 0,
                                height: 0,
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        var f = r.addGroup({
                            attrs: {
                                id: "rect-inner-group"
                            }
                        }, null);
                        f.addShape("rect", {
                            attrs: {
                                id: "rect-inner",
                                x: 0,
                                y: 0,
                                width: c,
                                height: c,
                                fill: a.facade.hidden ? "#1E202D" : u.dark
                            }
                        });
                        f.addShape("text", {
                            attrs: eo(eo(eo(eo({
                                id: "rect-icon",
                                x: c / 2,
                                y: c / 2
                            }, i(a.data.fontFamily, a.data.icon)), {
                                fontSize: 20
                            }), Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        f.translate((d - c) / 2, (d - c) / 2);
                        o && r.addShape("text", {
                            attrs: eo(eo({
                                id: "rect-label",
                                x: d / 2,
                                y: d + 8,
                                fontSize: 12,
                                text: a.label
                            }, Wr), {
                                textAlign: "center",
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        if (!l)
                            return s;
                        var p = r.addGroup({
                            attrs: {
                                id: "rect-children-group"
                            }
                        }, null);
                        p.addShape("rect", {
                            attrs: {
                                id: "rect-children",
                                x: 0,
                                y: 0,
                                width: 12,
                                height: 12,
                                fill: a.facade.hidden ? "#1E202D" : u.normal
                            }
                        });
                        p.addShape("text", {
                            attrs: eo(eo({
                                id: "rect-children-icon",
                                x: 12 / 2,
                                y: 12 / 2,
                                text: l > 100 ? "99+" : l,
                                fontSize: 10
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        p.translate(d - 12, 0);
                        return s
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "rect-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "rect-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "rect-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "rect-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "rect-icon"
                        }
                        ));
                        var v = s.get("children").find((function(e) {
                            return e.attr().id === "rect-label"
                        }
                        ));
                        var g = s.get("children").find((function(e) {
                            return e.attr().id === "rect-children-group"
                        }
                        ));
                        var y = (r = g) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "rect-children"
                        }
                        ));
                        var b = (o = g) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "rect-children-icon"
                        }
                        ));
                        var w = n[l.facade.color];
                        var E = t.node[l.facade.size] * 56;
                        var S = E + 4;
                        var k = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : w.normal,
                                lineWidth: 2
                            },
                            selected: {
                                width: 0,
                                height: 0
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : w.dark
                            },
                            icon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : w.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            k.border.lineWidth = 5;
                            k.selected.width = S + 10;
                            k.selected.height = S + 10
                        }
                        if (e === hn.LIGHT && i) {
                            k.selected.width = S + 10;
                            k.selected.height = S + 10
                        }
                        if (e === hn.DARK && i) {
                            k.border.stroke = "#1E202D";
                            k.inner.fill = "#1E202D";
                            k.icon.fill = "#8D93B0";
                            k.label.fill = "#8D93B0";
                            k.children.fill = "#1E202D";
                            k.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(k.border);
                        p.attr(k.selected);
                        m.attr(k.inner);
                        _.attr(k.icon);
                        (c = v) === null || c === void 0 ? void 0 : c.attr(k.label);
                        (d = y) === null || d === void 0 ? void 0 : d.attr(k.children);
                        (u = b) === null || u === void 0 ? void 0 : u.attr(k.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var to = function() {
            function e() {
                this.name = "rect-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new no(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var io = to;
        var ao = undefined && undefined.__assign || function() {
            ao = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return ao.apply(this, arguments)
        }
        ;
        var ro = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.rect2").d("方角矩形");
                this.name = "rect2";
                this.type = _n.LONG;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1J6EDvEY1gK0jSZFCXXcwqXXa-152-100.png", "https://img.alicdn.com/tfs/TB1yxcAvrr1gK0jSZR0XXbP8XXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(a, r) {
                        var o = e._core.graph.hasLabel;
                        var c = t.node[a.facade.size] * 56;
                        var d = c + 4;
                        var u = d + 88;
                        var l = n[a.facade.color];
                        var s = a.data.downstream || null;
                        var f = r.addShape("rect", {
                            attrs: {
                                id: "rect2-floor",
                                x: 0,
                                y: 0,
                                width: u,
                                height: d,
                                fill: "#10121A"
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "rect2-border",
                                x: 0,
                                y: 0,
                                width: u,
                                height: d,
                                stroke: a.facade.hidden ? "#1E202D" : l.normal,
                                lineWidth: 2
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "rect2-selected",
                                x: -5,
                                y: -5,
                                width: 0,
                                height: 0,
                                stroke: "#FFF",
                                lineWidth: 0,
                                opacity: .15
                            }
                        });
                        var p = r.addGroup({
                            attrs: {
                                id: "rect2-inner-group"
                            }
                        }, null);
                        p.addShape("rect", {
                            attrs: {
                                id: "rect2-inner",
                                x: 0,
                                y: 0,
                                width: c,
                                height: c,
                                fill: a.facade.hidden ? "#1E202D" : l.dark
                            }
                        });
                        p.addShape("text", {
                            attrs: ao(ao(ao(ao({
                                id: "rect2-icon",
                                x: c / 2,
                                y: c / 2
                            }, i(a.data.fontFamily, a.data.icon)), {
                                fontSize: 20
                            }), Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        o && p.addShape("text", {
                            attrs: ao(ao({
                                id: "rect2-label",
                                x: c + 10,
                                y: c / 2,
                                text: a.label,
                                fontSize: 14
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                textAlign: "left"
                            })
                        });
                        p.translate((d - c) / 2, (d - c) / 2);
                        if (!s)
                            return f;
                        var h = r.addGroup({
                            attrs: {
                                id: "rect2-children-group"
                            }
                        }, null);
                        h.addShape("rect", {
                            attrs: {
                                id: "rect2-children",
                                x: 0,
                                y: 0,
                                width: 18,
                                height: 18,
                                fill: a.facade.hidden ? "#1E202D" : l.normal
                            }
                        });
                        h.addShape("text", {
                            attrs: ao(ao({
                                id: "rect2-children-icon",
                                x: 18 / 2,
                                y: 18 / 2,
                                text: s > 100 ? "99+" : s,
                                fontSize: 10
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        h.translate(u - 18, 0);
                        return f
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "rect2-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "rect2-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "rect2-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "rect2-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "rect2-icon"
                        }
                        ));
                        var v = h.get("children").find((function(e) {
                            return e.attr().id === "rect2-label"
                        }
                        ));
                        var g = s.get("children").find((function(e) {
                            return e.attr().id === "rect2-children-group"
                        }
                        ));
                        var y = (r = g) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "rect2-children"
                        }
                        ));
                        var b = (o = g) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "rect2-children-icon"
                        }
                        ));
                        var w = n[l.facade.color];
                        var E = t.node[l.facade.size] * 56;
                        var S = E + 4;
                        var k = S + 88;
                        var x = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : w.normal,
                                lineWidth: 2
                            },
                            selected: {
                                width: 0,
                                height: 0,
                                lineWidth: 2
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : w.dark
                            },
                            icon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : w.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            x.border.lineWidth = 5;
                            x.selected.width = k + 10;
                            x.selected.height = S + 10;
                            x.selected.lineWidth = 5
                        }
                        if (e === hn.LIGHT && i) {
                            x.selected.width = k + 10;
                            x.selected.height = S + 10;
                            x.selected.lineWidth = 5
                        }
                        if (e === hn.DARK && i) {
                            x.border.stroke = "#1E202D";
                            x.inner.fill = "#1E202D";
                            x.icon.fill = "#8D93B0";
                            x.label.fill = "#8D93B0";
                            x.children.fill = "#1E202D";
                            x.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(x.border);
                        p.attr(x.selected);
                        m.attr(x.inner);
                        _.attr(x.icon);
                        (c = v) === null || c === void 0 ? void 0 : c.attr(x.label);
                        (d = y) === null || d === void 0 ? void 0 : d.attr(x.children);
                        (u = b) === null || u === void 0 ? void 0 : u.attr(x.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var oo = function() {
            function e() {
                this.name = "rect2-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new ro(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var co = oo;
        var uo = undefined && undefined.__assign || function() {
            uo = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return uo.apply(this, arguments)
        }
        ;
        var lo = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.radius-rect").d("圆角矩形");
                this.name = "radius-rect";
                this.type = _n.LONG;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1_..CvuL2gK0jSZFmXXc7iXXa-152-100.png", "https://img.alicdn.com/tfs/TB1lVwBvAL0gK0jSZFAXXcA9pXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(a, r) {
                        var o = e._core.graph.hasLabel;
                        var c = t.node[a.facade.size] * 56;
                        var d = c + 4;
                        var u = d + 88;
                        var l = n[a.facade.color];
                        var s = a.data.downstream || null;
                        var f = r.addShape("rect", {
                            attrs: {
                                id: "radius-rect-floor",
                                x: 0,
                                y: 0,
                                radius: d / 2,
                                width: u,
                                height: d,
                                fill: "#10121A"
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "radius-rect-border",
                                x: 0,
                                y: 0,
                                radius: d / 2,
                                width: u,
                                height: d,
                                stroke: a.facade.hidden ? "#1E202D" : l.normal,
                                lineWidth: 2
                            }
                        });
                        r.addShape("rect", {
                            attrs: {
                                id: "radius-rect-selected",
                                x: -5,
                                y: -5,
                                radius: 0,
                                width: 0,
                                height: 0,
                                stroke: "#FFF",
                                lineWidth: 0,
                                opacity: .15
                            }
                        });
                        var p = r.addGroup({
                            attrs: {
                                id: "radius-rect-inner-group"
                            }
                        }, null);
                        p.addShape("circle", {
                            attrs: {
                                id: "radius-rect-inner",
                                x: c / 2,
                                y: c / 2,
                                r: c / 2,
                                fill: a.facade.hidden ? "#1E202D" : l.dark
                            }
                        });
                        p.addShape("text", {
                            attrs: uo(uo(uo(uo({
                                id: "radius-rect-icon",
                                x: c / 2,
                                y: c / 2
                            }, i(a.data.fontFamily, a.data.icon)), {
                                fontSize: 20
                            }), Wr), {
                                color: a.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        o && p.addShape("text", {
                            attrs: uo(uo({
                                id: "radius-rect-label",
                                x: c + 10,
                                y: c / 2,
                                text: a.label,
                                fontSize: 14
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                textAlign: "left"
                            })
                        });
                        p.translate((d - c) / 2, (d - c) / 2);
                        if (!s)
                            return f;
                        var h = r.addGroup({
                            attrs: {
                                id: "radius-rect-children-group"
                            }
                        }, null);
                        h.addShape("circle", {
                            attrs: {
                                id: "radius-rect-children",
                                x: 0,
                                y: 0,
                                r: 9,
                                fill: a.facade.hidden ? "#1E202D" : l.normal
                            }
                        });
                        h.addShape("text", {
                            attrs: uo(uo({
                                id: "radius-rect-children-icon",
                                x: 0,
                                y: 0,
                                text: s > 100 ? "99+" : s,
                                fontSize: 10
                            }, Wr), {
                                fill: a.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        h.translate(u - d * 3 / 4, 0);
                        return f
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-icon"
                        }
                        ));
                        var v = h.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-label"
                        }
                        ));
                        var g = s.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-children-group"
                        }
                        ));
                        var y = (r = g) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-children"
                        }
                        ));
                        var b = (o = g) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "radius-rect-children-icon"
                        }
                        ));
                        var w = n[l.facade.color];
                        var E = t.node[l.facade.size] * 56;
                        var S = E + 4;
                        var k = S + 88;
                        var x = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : w.normal,
                                lineWidth: 2
                            },
                            selected: {
                                width: 0,
                                height: 0,
                                lineWidth: 2,
                                radius: 0
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : w.dark
                            },
                            icon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : w.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            x.border.lineWidth = 5;
                            x.selected.width = k + 10;
                            x.selected.height = S + 10;
                            x.selected.lineWidth = 5;
                            x.selected.radius = (S + 10) / 2
                        }
                        if (e === hn.LIGHT && i) {
                            x.selected.width = k + 10;
                            x.selected.height = S + 10;
                            x.selected.lineWidth = 5;
                            x.selected.radius = (S + 10) / 2
                        }
                        if (e === hn.DARK && i) {
                            x.border.stroke = "#1E202D";
                            x.inner.fill = "#1E202D";
                            x.icon.fill = "#8D93B0";
                            x.label.fill = "#8D93B0";
                            x.children.fill = "#1E202D";
                            x.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(x.border);
                        p.attr(x.selected);
                        m.attr(x.inner);
                        _.attr(x.icon);
                        (c = v) === null || c === void 0 ? void 0 : c.attr(x.label);
                        (d = y) === null || d === void 0 ? void 0 : d.attr(x.children);
                        (u = b) === null || u === void 0 ? void 0 : u.attr(x.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var so = function() {
            function e() {
                this.name = "radius-radius-rect-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new lo(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var fo = so;
        var po = undefined && undefined.__assign || function() {
            po = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return po.apply(this, arguments)
        }
        ;
        var ho = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.hexagon").d("六边形");
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1bIwAvEY1gK0jSZFMXXaWcVXa-152-100.png", "https://img.alicdn.com/tfs/TB1YVIzvAL0gK0jSZFtXXXQCXXa-152-100.png");
                this.type = _n.WITH_ICON;
                this.name = "hexagon"
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = function(e) {
                    var n = e / 2 + e * Math.sqrt(5) / 4;
                    return [[e / 2, 0], [e, e / 4], [e, n - e / 4], [e / 2, n], [0, n - e / 4], [0, e / 4]]
                };
                var n = function(e, n) {
                    var i = t._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: e,
                        text: i(e, n)
                    }
                };
                var t = this;
                var i = this._core.utils.color;
                var a = this._core.utils.size;
                return {
                    draw: function(r, o) {
                        var c = t._core.graph.hasLabel;
                        var d = a.node[r.facade.size] * 56;
                        var u = d + 4;
                        var l = i[r.facade.color];
                        var s = r.data.downstream || null;
                        var f = o.addShape("polygon", {
                            attrs: {
                                id: "hexagon-floor",
                                points: e(u),
                                fill: "#10121A"
                            }
                        });
                        o.addShape("polygon", {
                            attrs: {
                                id: "hexagon-border",
                                points: e(u),
                                stroke: r.facade.hidden ? "#1E202D" : l.normal,
                                lineWidth: 2
                            }
                        });
                        var p = o.addShape("polygon", {
                            attrs: {
                                id: "hexagon-selected",
                                points: [],
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        p.translate(-5, -5);
                        var h = o.addGroup({
                            attrs: {
                                id: "hexagon-inner-group"
                            }
                        }, null);
                        h.addShape("polygon", {
                            attrs: {
                                id: "hexagon-inner",
                                points: e(d),
                                fill: r.facade.hidden ? "#1E202D" : l.dark
                            }
                        });
                        h.translate((u - d) / 2, (u - d) / 2);
                        h.addShape("text", {
                            attrs: po(po(po(po({
                                id: "hexagon-icon",
                                x: d / 2,
                                y: d / 2
                            }, n(r.data.fontFamily, r.data.icon)), {
                                fontSize: 20
                            }), Wr), {
                                fill: r.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        c && o.addShape("text", {
                            attrs: po(po({
                                id: "hexagon-label",
                                x: u / 2,
                                y: u + 8,
                                fontSize: 12,
                                text: r.label
                            }, Wr), {
                                textAlign: "center",
                                fill: r.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        if (!s)
                            return f;
                        var m = o.addGroup({
                            attrs: {
                                id: "hexagon-children-group"
                            }
                        }, null);
                        m.addShape("polygon", {
                            attrs: {
                                id: "hexagon-children",
                                points: e(16),
                                fill: r.facade.hidden ? "#1E202D" : l.normal
                            }
                        });
                        m.addShape("text", {
                            attrs: po(po({
                                id: "hexagon-children-icon",
                                x: 16 / 2,
                                y: 16 / 2,
                                text: s > 100 ? "99+" : s,
                                fontSize: 10
                            }, Wr), {
                                fill: r.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        m.translate(u / 2 - 16 / 2, 0);
                        return f
                    },
                    setState: function(n, t, r) {
                        var o, c, d, u, l;
                        if (!n)
                            return;
                        var s = r.get("model");
                        var f = r.getContainer();
                        var p = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-border"
                        }
                        ));
                        var h = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-selected"
                        }
                        ));
                        var m = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-inner-group"
                        }
                        ));
                        var _ = m.get("children").find((function(e) {
                            return e.attr().id === "hexagon-inner"
                        }
                        ));
                        var v = m.get("children").find((function(e) {
                            return e.attr().id === "hexagon-icon"
                        }
                        ));
                        var g = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-label"
                        }
                        ));
                        var y = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children-group"
                        }
                        ));
                        var b = (o = y) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children"
                        }
                        ));
                        var w = (c = y) === null || c === void 0 ? void 0 : c.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children-icon"
                        }
                        ));
                        var E = i[s.facade.color];
                        var S = a.node[s.facade.size] * 56;
                        var k = S + 4;
                        var x = {
                            border: {
                                stroke: s.facade.hidden ? "#1E202D" : E.normal,
                                lineWidth: 2
                            },
                            selected: {
                                points: []
                            },
                            inner: {
                                fill: s.facade.hidden ? "#1E202D" : E.dark
                            },
                            icon: {
                                fill: s.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            label: {
                                fill: s.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: s.facade.hidden ? "#1E202D" : E.normal
                            },
                            childrenIcon: {
                                fill: s.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (n === hn.SELECTED && t) {
                            x.border.lineWidth = 5;
                            x.selected.points = e(k + 10)
                        }
                        if (n === hn.LIGHT && t) {
                            x.selected.points = e(k + 10)
                        }
                        if (n === hn.DARK && t) {
                            x.border.stroke = "#1E202D";
                            x.inner.fill = "#1E202D";
                            x.icon.fill = "#8D93B0";
                            x.label.fill = "#8D93B0";
                            x.children.fill = "#1E202D";
                            x.childrenIcon.fill = "#8D93B0"
                        }
                        p.attr(x.border);
                        h.attr(x.selected);
                        _.attr(x.inner);
                        v.attr(x.icon);
                        (d = g) === null || d === void 0 ? void 0 : d.attr(x.label);
                        (u = b) === null || u === void 0 ? void 0 : u.attr(x.children);
                        (l = w) === null || l === void 0 ? void 0 : l.attr(x.childrenIcon)
                    },
                    getAnchorPoints: function(e) {
                        var n = 1 / (2 + Math.sqrt(5));
                        return [[.5, 0], [1, n], [1, (Math.sqrt(5) + 1) * n], [.5, 1], [0, (Math.sqrt(5) + 1) * n], [0, n]]
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var mo = function() {
            function e() {
                this.name = "hexagon-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new ho(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var _o = mo;
        var vo = undefined && undefined.__assign || function() {
            vo = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return vo.apply(this, arguments)
        }
        ;
        var go = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.simplicity").d("简约");
                this.name = "simplicity";
                this.type = _n.MINI;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1unIzvET1gK0jSZFrXXcNCXXa-152-100.png", "https://img.alicdn.com/tfs/TB1yLQDvAT2gK0jSZPcXXcKkpXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                return {
                    draw: function(t, i) {
                        var a = e._core.graph.hasLabel;
                        var r = n[t.facade.color];
                        var o = i.addShape("rect", {
                            attrs: {
                                id: "simplicity-floor",
                                x: 0,
                                y: 0,
                                height: 4,
                                width: 12,
                                radius: [2],
                                fill: t.facade.hidden ? "#1E202D" : r.dark
                            }
                        });
                        i.addShape("rect", {
                            attrs: {
                                id: "simplicity-selected",
                                x: 0,
                                y: 0,
                                height: 0,
                                width: 0,
                                radius: [0],
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        a && i.addShape("text", {
                            attrs: vo(vo({
                                id: "simplicity-label",
                                x: 12 + 7,
                                y: 2,
                                fontSize: 12,
                                text: t.label
                            }, Wr), {
                                textAlign: "left",
                                fill: t.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        return o
                    },
                    setState: function(e, t, i) {
                        var a;
                        if (!e)
                            return;
                        var r = i.get("model");
                        var o = n[r.facade.color];
                        var c = i.getContainer();
                        var d = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-floor"
                        }
                        ));
                        var u = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-selected"
                        }
                        ));
                        var l = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-label"
                        }
                        ));
                        var s = {
                            floor: {
                                fill: r.facade.hidden ? "#1E202D" : o.dark
                            },
                            selected: {
                                x: 0,
                                y: 0,
                                height: 0,
                                width: 0,
                                radius: [0]
                            },
                            text: {
                                fill: r.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && t || e === hn.LIGHT && t) {
                            s.floor.fill = o.normal;
                            s.selected = {
                                x: -4,
                                y: -4,
                                height: 12,
                                width: 20,
                                radius: [6]
                            }
                        }
                        if (e === hn.DARK && t) {
                            s.floor.fill = "#1E202D";
                            s.text.fill = "#8D93B0"
                        }
                        d.attr(s.floor);
                        u.attr(s.selected);
                        (a = l) === null || a === void 0 ? void 0 : a.attr(s.text)
                    },
                    getAnchorPoints: function(e) {
                        return [[0, .5]]
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var yo = function() {
            function e() {
                this.name = "simplicity-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new go(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var bo = yo;
        var wo = t(917);
        var Eo = undefined && undefined.__assign || function() {
            Eo = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Eo.apply(this, arguments)
        }
        ;
        var So = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        function ko(e) {
            var n = function(n) {
                return !!(e.selected || []).find((function(e) {
                    return e === n
                }
                ))
            };
            var t = function(n) {
                return e.selected.length <= e.max
            };
            var a = function(n) {
                return e.selected.length > 1
            };
            var r = function(i) {
                n(i) ? a(i) && e.onChange(e.selected.filter((function(e) {
                    return e !== i
                }
                ))) : t(i) && e.onChange(So(e.selected, [i]))
            };
            i["useEffect"]((function() {
                e.onChange(e.selected)
            }
            ), []);
            var o = function(e) {
                return i["createElement"]("div", {
                    key: e.value,
                    onClick: r.bind(undefined, e.value),
                    className: "ga-tag-bar-item " + (n(e.value) && "ga-tag-bar-item-selected"),
                    title: e.label
                }, e.label)
            };
            return i["createElement"]("div", {
                className: "ga-tag-bar"
            }, (e.dataSource || []).map((function(e) {
                return i["createElement"](o, Eo({
                    key: e.value
                }, e))
            }
            )))
        }
        var xo = ko;
        var Oo = t(133);
        var Fo = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var No;
        var Do;
        (function(e) {
            e[e["INT"] = 1] = "INT";
            e[e["LONG"] = 2] = "LONG";
            e[e["FLOAT"] = 3] = "FLOAT";
            e[e["DOUBLE"] = 4] = "DOUBLE";
            e[e["STRING"] = 5] = "STRING"
        }
        )(Do || (Do = {}));
        var jo;
        (function(e) {
            e[e["EQ"] = 1] = "EQ";
            e[e["GT"] = 2] = "GT";
            e[e["LT"] = 3] = "LT";
            e[e["EGT"] = 4] = "EGT";
            e[e["ELT"] = 5] = "ELT"
        }
        )(jo || (jo = {}));
        var Po;
        (function(e) {
            e[e["EQ"] = 1] = "EQ";
            e[e["CONTAIN"] = 6] = "CONTAIN";
            e[e["REGEXP"] = 7] = "REGEXP"
        }
        )(Po || (Po = {}));
        var To = [Oo["EnumNodeDataType"].INT, Oo["EnumNodeDataType"].LONG, Oo["EnumNodeDataType"].FLOAT, Oo["EnumNodeDataType"].DOUBLE];
        var Io = [Oo["EnumNodeDataType"].STRING];
        var Co = Fo(To, Io);
        function Lo(e) {
            return Co.some((function(n) {
                return n === e.data_type
            }
            ))
        }
        function Ro(e) {
            return To.some((function(n) {
                return n === e.data_type
            }
            ))
        }
        function Ao(e) {
            return Io.some((function(n) {
                return n === e.data_type
            }
            ))
        }
        function Go(e) {
            var n = e.propertyDefList;
            return n.some((function(e) {
                return Lo(e)
            }
            ))
        }
        var zo = (No = {},
        No[Oo["EnumNodeDataType"].INT] = Do.INT,
        No[Oo["EnumNodeDataType"].LONG] = Do.LONG,
        No[Oo["EnumNodeDataType"].FLOAT] = Do.FLOAT,
        No[Oo["EnumNodeDataType"].DOUBLE] = Do.DOUBLE,
        No[Oo["EnumNodeDataType"].STRING] = Do.STRING,
        No);
        var Bo = a["reduce"](zo, (function(e, n, t) {
            e[n] = t;
            return e
        }
        ), {});
        var Mo = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        var Xo = undefined && undefined.__assign || function() {
            Xo = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Xo.apply(this, arguments)
        }
        ;
        var Vo = function() {
            return [{
                value: jo.EQ,
                label: i["createElement"]("span", null, "=")
            }, {
                value: jo.GT,
                label: i["createElement"]("span", null, ">")
            }, {
                value: jo.EGT,
                label: i["createElement"]("span", null, "≥")
            }, {
                value: jo.LT,
                label: i["createElement"]("span", null, "<")
            }, {
                value: jo.ELT,
                label: i["createElement"]("span", null, "≤")
            }]
        };
        var Wo = function() {
            return [{
                value: Po.EQ,
                label: i["createElement"]("span", null, Ee["get"]("equal").d("等于"))
            }, {
                value: Po.CONTAIN,
                label: i["createElement"]("span", null, Ee["get"]("contain").d("包含"))
            }, {
                value: Po.REGEXP,
                label: i["createElement"]("span", null, Ee["get"]("regex").d("正则"))
            }]
        };
        var Uo = "-";
        function qo(e) {
            return e.split(Uo)[0]
        }
        function Ho(e) {
            return e.split(Uo)[1]
        }
        function Ko(e, n) {
            return "" + e + Uo + n
        }
        function Yo(e) {
            var n = e.selectableNames.map((function(e) {
                return {
                    value: e,
                    label: e
                }
            }
            ));
            var t = e.field.init;
            var r = e.field.getValues();
            var o = r[Ko("name", e.id)];
            n.push({
                value: o,
                label: o
            });
            var c = e.schema.propertyDefList.find((function(e) {
                return e.name === o
            }
            ));
            var d = Ro(c) ? Vo() : Wo();
            var u = p();
            var l = function(e, n, t) {
                if (Ro(c)) {
                    if (a["isEmpty"](n) || !isNaN(Number(n)))
                        return t();
                    return t(Ee["get"]("format.number.invalid").d("请输入合法数字"))
                }
                return t()
            };
            var s = {
                minWidth: 100,
                maxWidth: 240,
                width: "inherit"
            };
            var f = e.field.getError(Ko("value", e.id));
            return i["createElement"]("div", {
                className: "ga-property-filter-content-item"
            }, i["createElement"]("div", {
                className: "ga-property-filter-content-item-name"
            }, i["createElement"]($i["Select"], Xo({
                dataSource: n
            }, t(Ko("name", e.id), {
                initValue: n[0].value
            }), {
                popupStyle: s
            }))), i["createElement"]("div", {
                className: "ga-property-filter-content-item-operator"
            }, i["createElement"]($i["Select"], Xo({
                dataSource: d
            }, u))), i["createElement"]("div", {
                className: "ga-property-filter-content-item-value"
            }, i["createElement"]($i["Input"], Xo({}, t(Ko("value", e.id), {
                initValue: "",
                rules: [{
                    validator: l,
                    trigger: ["onBlur", "onChange"]
                }]
            }), {
                state: f ? "error" : null
            })), f && i["createElement"]("div", {
                className: "ga-property-filter-content-item-value-error"
            }, f[0])), e.hasDeleteBtn && i["createElement"]("div", {
                className: "ga-property-filter-content-item-btn",
                onClick: e.onDelete.bind(undefined, e.id)
            }, "-"), e.hasAppendBtn && i["createElement"]("div", {
                className: "ga-property-filter-content-item-btn",
                onClick: e.onAppend
            }, "+"), !e.hasDeleteBtn && i["createElement"]("div", {
                className: "ga-property-filter-content-item-placeholder"
            }), !e.hasAppendBtn && i["createElement"]("div", {
                className: "ga-property-filter-content-item-placeholder"
            }));
            function p() {
                var n = t(Ko("operator", e.id), {
                    initValue: d[0].value
                });
                var i = n.onChange;
                n.onChange = function(e) {
                    i(Number(e))
                }
                ;
                n.value = String(n.value);
                return n
            }
        }
        var Zo = function(e) {
            Mo(n, e);
            function n() {
                var n = e !== null && e.apply(this, arguments) || this;
                n.field = new $i["Field"](n,{
                    onChange: n.watch.bind(n)
                });
                return n
            }
            n.prototype.componentDidMount = function() {
                var e = this.props.defaultValue.reduce((function(e, n, t) {
                    e[Ko("name", t)] = n.name;
                    e[Ko("type", t)] = n.type;
                    e[Ko("value", t)] = n.value;
                    e[Ko("operator", t)] = n.operator;
                    e[Ko("index", t)] = t;
                    return e
                }
                ), {});
                this.field.setValues(e);
                this.props.onChange(this.makeCondition(), [])
            }
            ;
            n.prototype.getPropertyByName = function(e) {
                return this.props.schema.propertyDefList.find((function(n) {
                    return n.name === e
                }
                ))
            }
            ;
            n.prototype.makeCondition = function() {
                var e = this.getIds();
                var n = this.field.getValues();
                return e.map((function(e) {
                    return {
                        name: n[Ko("name", e)],
                        type: n[Ko("type", e)],
                        value: n[Ko("value", e)],
                        operator: n[Ko("operator", e)]
                    }
                }
                ))
            }
            ;
            n.prototype.watch = function(e, n) {
                var t;
                if (qo(e) === "name") {
                    var i = Ho(e);
                    var r = this.getPropertyByName(n);
                    this.field.setValues((t = {},
                    t[Ko("type", i)] = zo[r.data_type],
                    t[Ko("operator", i)] = Ro(r) ? jo.EQ : Po.CONTAIN,
                    t[Ko("value", i)] = "",
                    t))
                }
                this.props.onChange(this.makeCondition(), a["flatMap"](this.field.getErrors(), (function(e) {
                    return e || []
                }
                )))
            }
            ;
            n.prototype.getFieldNames = function() {
                return Object.keys(this.field.getValues())
            }
            ;
            n.prototype.getNames = function() {
                var e = this.field.getValues();
                var n = this.getFieldNames().filter((function(e) {
                    return e.startsWith("name")
                }
                ));
                return n.map((function(n) {
                    return e[n]
                }
                ))
            }
            ;
            n.prototype.getIds = function() {
                var e = this.field.getValues();
                var n = this.getFieldNames().filter((function(e) {
                    return e.startsWith("index")
                }
                ));
                return n.map((function(n) {
                    return e[n]
                }
                ))
            }
            ;
            n.prototype.canDelete = function() {
                var e = this.getIds();
                return e.length > 1
            }
            ;
            n.prototype.canAppend = function() {
                var e = this.getIds();
                return e.length < this.props.schema.propertyDefList.filter((function(e) {
                    return Lo(e)
                }
                )).length
            }
            ;
            n.prototype.selectableNames = function() {
                var e = this.getNames();
                var n = this.props.schema.propertyDefList.filter((function(e) {
                    return Lo(e)
                }
                )).map((function(e) {
                    return e.name
                }
                ));
                return n.filter((function(n) {
                    return !a["includes"](e, n)
                }
                ))
            }
            ;
            n.prototype.onAppend = function() {
                var e;
                var n = this;
                var t = this.selectableNames();
                var i = a["max"](this.getFieldNames().filter((function(e) {
                    return e.startsWith("index")
                }
                )).map((function(e) {
                    return n.field.getValue(e)
                }
                )));
                var r = t[0];
                var o = this.getPropertyByName(r);
                var c = String(i + 1);
                this.field.setValues((e = {},
                e[Ko("name", c)] = r,
                e[Ko("type", c)] = zo[o.data_type],
                e[Ko("value", c)] = "",
                e[Ko("operator", c)] = Ro(o) ? jo.EQ : Po.CONTAIN,
                e[Ko("index", c)] = i + 1,
                e))
            }
            ;
            n.prototype.onDelete = function(e) {
                var n = ["name", "type", "value", "operator", "index"].map((function(n) {
                    return Ko(n, e)
                }
                ));
                this.field.remove(n);
                this.field.setValues({})
            }
            ;
            n.prototype.render = function() {
                var e = this;
                var n = this.getIds();
                var t = this.selectableNames();
                return n.map((function(a, r) {
                    return i["createElement"](Yo, {
                        key: a,
                        id: a,
                        selectableNames: t,
                        field: e.field,
                        schema: e.props.schema,
                        hasAppendBtn: e.canAppend() && r === n.length - 1,
                        hasDeleteBtn: e.canDelete(),
                        onAppend: e.onAppend.bind(e),
                        onDelete: e.onDelete.bind(e)
                    })
                }
                ))
            }
            ;
            return n
        }(i["Component"]);
        var Jo = Zo;
        var $o = t(918);
        function Qo(e) {
            return i["createElement"]("div", {
                className: "ga-property-framework"
            }, i["createElement"]("div", {
                className: "ga-property-framework-title"
            }, e.name), i["createElement"]("div", {
                className: "ga-property-framework-content"
            }, e.children))
        }
        function ec(e) {
            var n = e.schema.label;
            if (!Go(e.schema)) {
                return i["createElement"](Qo, {
                    name: n
                }, i["createElement"]("div", {
                    className: "ga-property-no-filtered"
                }, Ee["get"]("graph-analyser.plugin.search.component.no-filtered").d("没有可用作过滤的属性")))
            }
            var t = e.schema.propertyDefList.filter((function(e) {
                return Lo(e)
            }
            ));
            var a = t ? [{
                name: t[0].name,
                type: zo[t[0].data_type],
                value: "",
                operator: Ro(t[0]) ? jo.EQ : Po.CONTAIN
            }] : [];
            return i["createElement"](Qo, {
                name: n
            }, i["createElement"](Jo, {
                schema: e.schema,
                defaultValue: e.conditions || a,
                onChange: e.onChange
            }))
        }
        var nc = ec;
        var tc = t(919);
        var ic = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ac = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var rc = function() {
            function e(e) {
                this._core = e;
                this.timeout = 10 * 60 * 1e3;
                this.interval = 200;
                this.displayName = "GraphAnalyserSearchTask";
                this._offset = 0
            }
            e.prototype.submit = function(e) {
                return ic(this, void 0, void 0, (function() {
                    var n;
                    return ac(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            this._parameters = e;
                            return [4, this._core.utils.http.post("/rest/analysis/job/search", e)];
                        case 1:
                            n = t.sent();
                            return [2, n.jobId]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.poll = function(e) {
                return ic(this, void 0, void 0, (function() {
                    var n;
                    return ac(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this._core.utils.http.get("/rest/job/log", {
                                jobId: e,
                                offset: this._offset,
                                sqlIndex: 0
                            })];
                        case 1:
                            n = t.sent();
                            this._offset = n.readLogLength;
                            if (!n.hasResult && n.logEnd)
                                throw new Error("Request Error: " + n.logContent);
                            return [2, n.logEnd]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.gain = function(e) {
                return ic(this, void 0, void 0, (function() {
                    var n;
                    return ac(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this._core.utils.http.get("/rest/analysis/job/search/result", {
                                jobId: e,
                                instanceId: this._parameters.instanceId
                            })];
                        case 1:
                            n = t.sent();
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var oc = rc;
        function cc(e) {
            function n(e) {
                var n = /^<[a-zA-Z0-9\s]+>$/;
                if (n.test(e)) {
                    return e.substring(1, e.length - 1)
                }
                return "properties." + e
            }
            var t = n(e.schema.caption);
            if (t.startsWith("properties.")) {
                t = a["get"](e, t)
            } else {
                t = a["get"](e.schema, t)
            }
            return t
        }
        var dc = undefined && undefined.__assign || function() {
            dc = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return dc.apply(this, arguments)
        }
        ;
        var uc = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var lc = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var sc = 20;
        function fc(e) {
            var n = i["useState"]([e[0].label])
              , t = n[0]
              , a = n[1];
            return [t, a]
        }
        function pc(e) {
            return i["useMemo"]((function() {
                var n = e.map((function(e) {
                    return {
                        value: e.label,
                        label: e.label
                    }
                }
                ));
                return n
            }
            ), [])
        }
        var hc = function(e) {
            var n = e.core.getData().schema;
            var t = n.types.filter((function(e) {
                return e.type === ft.VERTEX
            }
            ));
            function r(r) {
                var o = this;
                var c = fc(t)
                  , d = c[0]
                  , u = c[1];
                var l = pc(t);
                var s = i["useState"]({})
                  , f = s[0]
                  , p = s[1];
                r.register({
                    search: function() {
                        return uc(o, void 0, void 0, (function() {
                            var t, i, a, r;
                            return lc(this, (function(o) {
                                switch (o.label) {
                                case 0:
                                    o.trys.push([0, 2, , 3]);
                                    t = e.core.getData().instance;
                                    i = {
                                        instanceId: t.instanceId,
                                        instanceName: t.name,
                                        limit: 200,
                                        vertexConditions: Object.keys(f).map((function(e) {
                                            return {
                                                label: e,
                                                propertyConditions: f[e].filter((function(e) {
                                                    return e.value && e.value.length > 0
                                                }
                                                ))
                                            }
                                        }
                                        ))
                                    };
                                    return [4, e.utils.task.do(new oc(e), i)];
                                case 1:
                                    a = o.sent();
                                    return [2, {
                                        type: mn.NODE,
                                        data: {
                                            nodes: (a.vertexDataList || []).map((function(e) {
                                                return dc(dc({}, e), {
                                                    properties: e.properties.reduce((function(e, n) {
                                                        e[n.name] = n.value;
                                                        return e
                                                    }
                                                    ), {}),
                                                    schema: n.types.find((function(n) {
                                                        return n.label === e.label
                                                    }
                                                    ))
                                                })
                                            }
                                            )).map((function(e) {
                                                return dc(dc({}, e), {
                                                    label: cc(e)
                                                })
                                            }
                                            )),
                                            edges: (a.edgeDataList || []).map((function(e) {
                                                return dc(dc({}, e), {
                                                    properties: e.properties.reduce((function(e, n) {
                                                        e[n.name] = n.value;
                                                        return e
                                                    }
                                                    ), {}),
                                                    schema: n.types.find((function(n) {
                                                        return n.label === e.label
                                                    }
                                                    ))
                                                })
                                            }
                                            )).map((function(e) {
                                                return dc(dc({}, e), {
                                                    label: cc(e)
                                                })
                                            }
                                            ))
                                        }
                                    }];
                                case 2:
                                    r = o.sent();
                                    $i["Message"].show({
                                        type: "error",
                                        content: r.message,
                                        duration: 0,
                                        closeable: true,
                                        align: "tr tr",
                                        offset: [-30, 60]
                                    });
                                    console.error(r);
                                    return [3, 3];
                                case 3:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                });
                var h = function(e) {
                    u(e);
                    p(e.reduce((function(e, n) {
                        var i = t.find((function(e) {
                            return e.label === n
                        }
                        ));
                        var a = i.propertyDefList.filter((function(e) {
                            return Lo(e)
                        }
                        ));
                        var r = a[0] ? [{
                            name: a[0].name,
                            type: zo[a[0].data_type],
                            value: "",
                            operator: Ro(a[0]) ? jo.EQ : Po.CONTAIN
                        }] : [];
                        e[n] = f[n] || r;
                        return e
                    }
                    ), {}))
                };
                return i["createElement"]("div", {
                    className: "node-search-panel"
                }, i["createElement"](xo, {
                    dataSource: l,
                    selected: d,
                    max: sc,
                    onChange: h
                }), i["createElement"]("div", {
                    className: "node-search-panel-filter"
                }, i["createElement"]("div", {
                    className: "node-search-panel-filter-title"
                }, Ee["get"]("node-search.filter.panel.title").d("条件过滤")), i["createElement"]("div", {
                    className: "edge-search-panel-filter-container"
                }, t.filter((function(e) {
                    return a["includes"](d, e.label)
                }
                )).map((function(e) {
                    return i["createElement"](nc, {
                        conditions: f[e.label],
                        key: e.label,
                        schema: e,
                        onChange: function(n, t) {
                            var i;
                            p(dc(dc({}, f), (i = {},
                            i[e.label] = n,
                            i)));
                            r.onErrors(t)
                        }
                    })
                }
                )))))
            }
            return r
        };
        var mc = function() {
            function e(e) {
                this._core = e;
                this.name = "NodeSearchPanel";
                this.display = "Nodes"
            }
            e.prototype.provide = function() {
                return hc(this._core)
            }
            ;
            return e
        }();
        var _c = function() {
            function e() {
                this.name = "node-search-panel-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideSearchPanel(new mc(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var vc = _c;
        var gc = t(920);
        var yc = undefined && undefined.__assign || function() {
            yc = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return yc.apply(this, arguments)
        }
        ;
        var bc = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var wc = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Ec = 3;
        function Sc(e) {
            var n = i["useState"]([e[0].label])
              , t = n[0]
              , a = n[1];
            return [t, a]
        }
        function kc(e) {
            return i["useMemo"]((function() {
                var n = e.map((function(e) {
                    return {
                        value: e.label,
                        label: e.label
                    }
                }
                ));
                return n
            }
            ), [])
        }
        var xc = function(e) {
            var n = e.core.getData().schema;
            var t = n.types.filter((function(e) {
                return e.type === ft.EDGE
            }
            ));
            function r(r) {
                var o = this;
                var c = Sc(t)
                  , d = c[0]
                  , u = c[1];
                var l = kc(t);
                var s = i["useState"]({})
                  , f = s[0]
                  , p = s[1];
                r.register({
                    search: function() {
                        return bc(o, void 0, void 0, (function() {
                            var t, i, r, o;
                            return wc(this, (function(c) {
                                switch (c.label) {
                                case 0:
                                    c.trys.push([0, 2, , 3]);
                                    t = e.core.getData().instance;
                                    i = {
                                        instanceId: t.instanceId,
                                        instanceName: t.name,
                                        limit: 200,
                                        edgeConditions: Object.keys(f).map((function(e) {
                                            return {
                                                label: e,
                                                propertyConditions: f[e].filter((function(e) {
                                                    return e.value && e.value.length > 0
                                                }
                                                ))
                                            }
                                        }
                                        ))
                                    };
                                    return [4, e.utils.task.do(new oc(e), i)];
                                case 1:
                                    r = c.sent();
                                    return [2, {
                                        type: mn.EDGE,
                                        data: {
                                            nodes: a["uniqBy"]((r.vertexDataList || []).map((function(e) {
                                                return yc(yc({}, e), {
                                                    properties: e.properties.reduce((function(e, n) {
                                                        e[n.name] = n.value;
                                                        return e
                                                    }
                                                    ), {}),
                                                    schema: n.types.find((function(n) {
                                                        return n.label === e.label
                                                    }
                                                    ))
                                                })
                                            }
                                            )), (function(e) {
                                                return e.id
                                            }
                                            )).map((function(e) {
                                                return yc(yc({}, e), {
                                                    label: cc(e)
                                                })
                                            }
                                            )),
                                            edges: a["uniqBy"]((r.edgeDataList || []).map((function(e) {
                                                return yc(yc({}, e), {
                                                    properties: e.properties.reduce((function(e, n) {
                                                        e[n.name] = n.value;
                                                        return e
                                                    }
                                                    ), {}),
                                                    schema: n.types.find((function(n) {
                                                        return n.label === e.label
                                                    }
                                                    ))
                                                })
                                            }
                                            )), (function(e) {
                                                return e.id
                                            }
                                            )).map((function(e) {
                                                return yc(yc({}, e), {
                                                    label: cc(e)
                                                })
                                            }
                                            ))
                                        }
                                    }];
                                case 2:
                                    o = c.sent();
                                    $i["Message"].show({
                                        type: "error",
                                        content: o.message,
                                        duration: 0,
                                        closeable: true,
                                        align: "tr tr",
                                        offset: [-30, 60]
                                    });
                                    console.error(o);
                                    return [3, 3];
                                case 3:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                });
                var h = function(e) {
                    u(e);
                    p(e.reduce((function(e, n) {
                        var i = t.find((function(e) {
                            return e.label === n
                        }
                        ));
                        var a = i.propertyDefList.filter((function(e) {
                            return Lo(e)
                        }
                        ));
                        var r = a[0] ? [{
                            name: a[0].name,
                            type: zo[a[0].data_type],
                            value: "",
                            operator: Ro(a[0]) ? jo.EQ : Po.CONTAIN
                        }] : [];
                        e[n] = f[n] || r;
                        return e
                    }
                    ), {}))
                };
                return i["createElement"]("div", {
                    className: "edge-search-panel"
                }, i["createElement"](xo, {
                    dataSource: l,
                    selected: d,
                    max: Ec,
                    onChange: h
                }), i["createElement"]("div", {
                    className: "edge-search-panel-filter"
                }, i["createElement"]("div", {
                    className: "edge-search-panel-filter-title"
                }, Ee["get"]("edge-search.filter.panel.title").d("条件过滤")), i["createElement"]("div", {
                    className: "edge-search-panel-filter-container"
                }, t.filter((function(e) {
                    return a["includes"](d, e.label)
                }
                )).map((function(e) {
                    return i["createElement"](nc, {
                        conditions: f[e.label],
                        key: e.label,
                        schema: e,
                        onChange: function(n, t) {
                            var i;
                            p(yc(yc({}, f), (i = {},
                            i[e.label] = n,
                            i)));
                            r.onErrors(t)
                        }
                    })
                }
                )))))
            }
            return r
        };
        var Oc = function() {
            function e(e) {
                this._core = e;
                this.name = "EdgeSearchPanel";
                this.display = "Edges"
            }
            e.prototype.provide = function() {
                return xc(this._core)
            }
            ;
            return e
        }();
        var Fc = function() {
            function e() {
                this.name = "edge-search-panel-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideSearchPanel(new Oc(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var Nc = Fc;
        var Dc = t(921);
        var jc = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Pc = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Tc = "/rest/analysis/label/distribution";
        var Ic = function() {
            function e(e) {
                this._core = e
            }
            e.prototype.getDistribution = function() {
                return jc(this, void 0, void 0, (function() {
                    var e, n;
                    return Pc(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            e = this._core.core.getData().instance;
                            return [4, this._core.utils.http.get(Tc, {
                                instanceId: e.instanceId,
                                instanceName: e.name,
                                needDistribution: true
                            })];
                        case 1:
                            n = t.sent();
                            return [2, n]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var Cc = Ic;
        var Lc = t(57);
        var Rc = t(860);
        var Ac = t.n(Rc);
        var Gc = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        function zc(e) {
            var n = i["useRef"]();
            i["useEffect"]((function() {
                var t = n.current.getBoundingClientRect();
                var i = new Ac.a.Chart({
                    container: n.current,
                    width: t.width,
                    height: t.height,
                    padding: [40, "auto", 40, "auto"]
                });
                i.tooltip({
                    showTitle: false
                });
                i.source(e.data);
                i.point().position("label*count").size(10).shape("circle").tooltip("label*count");
                i.render()
            }
            ), [e.data]);
            return i["createElement"]("div", {
                ref: n,
                className: "graph-analyser-statistics-distribution-dialog-chart"
            })
        }
        var Bc = function(e) {
            Gc(n, e);
            function n() {
                return e !== null && e.apply(this, arguments) || this
            }
            n.prototype.renderNode = function() {}
            ;
            n.prototype.renderEdge = function() {}
            ;
            n.prototype.render = function() {
                var e = Ee["get"]("graph-analyser.statistics.plugin.dialog.title.distribution").d("查看数据分布");
                return i["createElement"]($i["Dialog"], {
                    title: e,
                    visible: this.props.visible,
                    onCancel: this.props.onCancel,
                    onClose: this.props.onCancel,
                    footerActions: ["cancel"]
                }, i["createElement"]($i["Tab"], {
                    className: "graph-analyser-statistics-distribution-dialog"
                }, i["createElement"]($i["Tab"].Item, {
                    key: "node",
                    title: Ee["get"]("node").d("点")
                }, i["createElement"](zc, {
                    data: this.props.distribution.vertexDistribution
                })), i["createElement"]($i["Tab"].Item, {
                    key: "edge",
                    title: Ee["get"]("edge").d("边")
                }, i["createElement"](zc, {
                    data: this.props.distribution.edgeDistribution
                }))))
            }
            ;
            return n
        }(i["Component"]);
        var Mc = Lc["dialog"].enhance(Bc);
        var Xc = t(964);
        var Vc = t.n(Xc);
        var Wc = t(922);
        var Uc = t.n(Wc);
        var qc = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        var Hc = undefined && undefined.__assign || function() {
            Hc = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Hc.apply(this, arguments)
        }
        ;
        var Kc = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var Yc = function(e) {
            qc(n, e);
            function n() {
                var n = e !== null && e.apply(this, arguments) || this;
                n._field = new $i["Field"](n,{
                    onChange: function(e, t) {
                        if (e === "type") {
                            var i = n.computeLabelDataSource()
                              , a = i[0]
                              , r = i[1];
                            var o = t === "node" ? a : r;
                            n._field.setValue("label", o[0].value);
                            n._loadData()
                        }
                        if (e === "label") {
                            n._loadData()
                        }
                    }
                });
                return n
            }
            n.prototype._loadData = function() {
                if (!this._spread)
                    return;
                var e = this.computeTypeDataSource();
                var n = this.computeLabelDataSource()
                  , t = n[0]
                  , i = n[1];
                var a = (this._field.getValue("type") || e[0].value) === "node" ? t : i;
                var r = this.getData(this._field.getValue("type") || e[0].value, this._field.getValue("label") || a[0].value);
                this._spread.suspendPaint();
                var o = this._spread.getActiveSheet();
                o.reset();
                o.options.isProtected = true;
                o.options.protectionOptions.allowResizeRows = true;
                o.options.protectionOptions.allowResizeColumns = true;
                o.setDefaultStyle("Santa");
                o.setArray(0, 0, r);
                r.forEach((function(e, n) {
                    o.autoFitColumn(n)
                }
                ));
                this._spread.resumePaint()
            }
            ;
            n.prototype.onCreate = function(e) {
                this._spread = e;
                this._loadData()
            }
            ;
            n.prototype.computeLabelDataSource = function() {
                var e = this.props.data;
                var n = a["uniqBy"](e.nodes.map((function(e) {
                    return {
                        label: e.data.schema.label,
                        value: e.data.schema.label
                    }
                }
                )), (function(e) {
                    return e.value
                }
                ));
                var t = a["unionBy"](e.edges.map((function(e) {
                    return {
                        label: e.data.schema.label,
                        value: e.data.schema.label
                    }
                }
                )), (function(e) {
                    return e.value
                }
                ));
                return [n, t]
            }
            ;
            n.prototype.getData = function(e, n) {
                var t = this;
                if (e === "edge") {
                    var i = this.props.data.edges;
                    var a = i.filter((function(e) {
                        return e.data.schema.label === n
                    }
                    )).map((function(e) {
                        return Hc(Hc({}, e), {
                            sourceNode: t.props.data.nodes.find((function(n) {
                                return n.id === e.data.srcId
                            }
                            )),
                            destinationNode: t.props.data.nodes.find((function(n) {
                                return n.id === e.data.dstId
                            }
                            ))
                        })
                    }
                    ));
                    if (a.length <= 0)
                        return [];
                    var r = Kc(["id", "label", "source.id", "source.label", "destination.id", "destination.label"], Object.keys(a[0].data.properties));
                    var o = a.map((function(e) {
                        return Kc([e.id, e.data.schema.label, e.sourceNode.id, e.sourceNode.label, e.destinationNode.id, e.destinationNode.label], Object.keys(a[0].data.properties).map((function(n) {
                            return e.data.properties[n]
                        }
                        )))
                    }
                    ));
                    return Kc([r], o)
                }
                var c = this.props.data.nodes;
                var d = c.filter((function(e) {
                    return e.data.schema.label === n
                }
                ));
                if (d.length <= 0)
                    return [];
                var u = Kc(["id", "label"], Object.keys(d[0].data.properties));
                var l = d.map((function(e) {
                    return Kc([e.id, e.data.schema.label], Object.keys(d[0].data.properties).map((function(n) {
                        return e.data.properties[n]
                    }
                    )))
                }
                ));
                return Kc([u], l)
            }
            ;
            n.prototype.render = function() {
                var e = this._field.init;
                var n = Ee["get"]("graph-analyser.statistics.plugin.dialog.title.excel").d("当前点边信息");
                var t = this.computeTypeDataSource();
                var a = this.computeLabelDataSource()
                  , r = a[0]
                  , o = a[1];
                var c = (this._field.getValue("type") || t[0].value) === "node" ? r : o;
                return i["createElement"]($i["Dialog"], {
                    title: n,
                    visible: this.props.visible,
                    onCancel: this.props.onCancel,
                    onClose: this.props.onCancel,
                    footerActions: ["cancel"]
                }, i["createElement"](Uc.a, {
                    language: "zh-cn",
                    theme: "dark"
                }, i["createElement"]("div", {
                    className: "graph-analyser-statistics-excel-dialog"
                }, i["createElement"]("div", null, i["createElement"]($i["Select"], Hc({
                    dataSource: t
                }, e("type", {
                    initValue: t[0].value
                }))), i["createElement"]($i["Select"], Hc({
                    dataSource: c
                }, e("label", {
                    initValue: c[0].value
                })))), i["createElement"]("div", null, i["createElement"](Vc.a, {
                    onCreate: this.onCreate.bind(this)
                })))))
            }
            ;
            n.prototype.computeTypeDataSource = function() {
                var e = [{
                    label: Ee["get"]("node").d("点"),
                    value: "node"
                }, {
                    label: Ee["get"]("edge").d("边"),
                    value: "edge"
                }];
                if (this.props.data.nodes.length <= 0) {
                    e = e.filter((function(e) {
                        return e.value !== "node"
                    }
                    ))
                }
                if (this.props.data.edges.length <= 0) {
                    e = e.filter((function(e) {
                        return e.value !== "edge"
                    }
                    ))
                }
                return e
            }
            ;
            return n
        }(i["Component"]);
        var Zc = Lc["dialog"].enhance(Yc);
        var Jc = t(924);
        var $c = undefined && undefined.__assign || function() {
            $c = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return $c.apply(this, arguments)
        }
        ;
        var Qc = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var ed = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        function nd(e) {
            return i["createElement"]("div", {
                className: "ga-statics-panel-item"
            }, i["createElement"]("div", null, e.title), i["createElement"]("div", null, e.content), i["createElement"]("div", {
                onClick: e.onClick
            }, e.action))
        }
        var td = function() {
            function e(e) {
                this._core = e;
                this.name = "NodeSearchPanel";
                this.display = "Nodes";
                this._backend = new Cc(this._core)
            }
            e.prototype.onShowStatistics = function(e) {
                Mc.show({
                    distribution: e
                })
            }
            ;
            e.prototype.onShowDataInExcel = function(e) {
                var n = {
                    nodes: e.nodes.filter((function(e) {
                        return !e.data.isMock
                    }
                    )),
                    edges: e.edges.filter((function(e) {
                        return !e.data.isMock
                    }
                    ))
                };
                if (n.edges.length <= 0 && n.nodes.length <= 0)
                    return;
                Zc.show({
                    data: n
                })
            }
            ;
            e.prototype.provide = function() {
                var e = this;
                return function n() {
                    var t = this;
                    var a = i["useState"]({
                        totalVertexCount: 0,
                        totalEdgeCount: 0,
                        vertexDistribution: [],
                        edgeDistribution: []
                    })
                      , r = a[0]
                      , o = a[1];
                    var c = e._core.core.getData();
                    i["useEffect"]((function() {
                        (function() {
                            return Qc(t, void 0, void 0, (function() {
                                var n;
                                return ed(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, e._backend.getDistribution()];
                                    case 1:
                                        n = t.sent();
                                        o(n);
                                        return [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        )()
                    }
                    ), []);
                    var d = {
                        title: i["createElement"]("span", null, i["createElement"]("i", {
                            className: "gonggongtubiao dian"
                        }), "Nodes"),
                        content: i["createElement"]("span", null, i["createElement"]("span", null, c.data.nodes.length), "/", i["createElement"]("span", null, r.totalVertexCount)),
                        action: i["createElement"]("span", null, Ee["get"]("graph-analyser.statistics.plugin.action.showStatistics").d("查看数据分布")),
                        onClick: e.onShowStatistics.bind(e, r)
                    };
                    var u = {
                        title: i["createElement"]("span", null, i["createElement"]("i", {
                            className: "gonggongtubiao bian"
                        }), "Edges"),
                        content: i["createElement"]("span", null, i["createElement"]("span", null, c.data.edges.length), "/", i["createElement"]("span", null, r.totalEdgeCount)),
                        action: i["createElement"]("span", null, Ee["get"]("graph-analyser.statistics.plugin.action.currentData").d("当前点边信息")),
                        onClick: e.onShowDataInExcel.bind(e, c.data)
                    };
                    return i["createElement"]("div", {
                        className: "ga-statistics-panel"
                    }, i["createElement"](nd, $c({}, d)), i["createElement"](nd, $c({}, u)))
                }
            }
            ;
            return e
        }();
        var id = function() {
            function e() {
                this.name = "statistics-panel-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideStatisticsPanel(new td(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var ad = id;
        var rd = t(925);
        function od(e) {
            var n = e.main.getService(u.PreviewPanelService);
            var t = e.main.getService(u.GraphinDataService);
            var a = n.getPreviewPanelProvider();
            var r = i["useState"]()
              , o = r[0]
              , c = r[1];
            var d = i["useMemo"]((function() {
                var e;
                return (e = a) === null || e === void 0 ? void 0 : e.provide()
            }
            ), [o]);
            i["useEffect"]((function() {
                var e = t.get().graph;
                var n = function(e) {
                    var n = e.item.getModel();
                    c({
                        type: "node",
                        data: n.id
                    })
                };
                var i = function(e) {
                    var n = e.item.getModel();
                    c({
                        type: "edge",
                        data: n.id
                    })
                };
                var a = function(e) {
                    c(null)
                };
                e.on("node:click", n);
                e.on("edge:click", i);
                e.on("canvas:click", a);
                return function() {
                    e.off("node:click", n);
                    e.off("edge:click", i);
                    e.off("canvas:click", a)
                }
            }
            ), []);
            if (!d || !o)
                return null;
            if (o.type === "node") {
                return i["createElement"]("div", {
                    className: "ga-preview-panel"
                }, i["createElement"](d.node, {
                    items: [o.data],
                    data: t.getData()
                }))
            }
            return i["createElement"]("div", {
                className: "ga-preview-panel"
            }, i["createElement"](d.edge, {
                items: [o.data],
                data: t.getData()
            }))
        }
        var cd = od;
        var dd = t(886);
        var ud = t(927);
        function ld(e, n) {
            i["useEffect"]((function() {
                var n = {
                    isStopped: false,
                    data: new Map
                };
                e(n);
                return function() {
                    return n.isStopped = true
                }
            }
            ), n)
        }
        var sd = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var fd = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var pd = function() {
            function e(e) {
                this._main = e;
                this.timeout = 10 * 60 * 1e4;
                this.interval = 200;
                this.displayName = "GraphAnalyserExtendTask";
                this._offset = 0;
                this._backend = e.getService(u.BackendService)
            }
            e.prototype.submit = function(e) {
                return sd(this, void 0, void 0, (function() {
                    return fd(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            this._parameters = e;
                            return [4, this._backend.extend.submit(e)];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.poll = function(e) {
                return sd(this, void 0, void 0, (function() {
                    var n;
                    return fd(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, this._backend.extend.poll(e, this._offset)];
                        case 1:
                            n = t.sent();
                            this._offset = n.offset;
                            return [2, n.isEnded]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.gain = function(e) {
                return sd(this, void 0, void 0, (function() {
                    return fd(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, this._backend.extend.gain(this._parameters.instanceId, e)];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var hd = pd;
        var md = undefined && undefined.__assign || function() {
            md = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return md.apply(this, arguments)
        }
        ;
        var _d = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var vd = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var gd = undefined && undefined.__spreadArrays || function() {
            for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                e += arguments[n].length;
            for (var i = Array(e), a = 0, n = 0; n < t; n++)
                for (var r = arguments[n], o = 0, c = r.length; o < c; o++,
                a++)
                    i[a] = r[o];
            return i
        }
        ;
        var yd = 10;
        var bd = function(e) {
            var n = /^<[a-zA-Z0-9\s]+>$/;
            if (n.test(e.caption)) {
                return e.caption.substring(1, e.caption.length - 1)
            }
            return "properties." + e.caption
        };
        var wd = function(e) {
            var n = bd(e.schema);
            if (n.startsWith("properties.")) {
                n = a["get"](e, n)
            } else {
                n = a["get"](e.schema, n)
            }
            return n
        };
        function Ed(e, n) {
            return _d(this, void 0, void 0, (function() {
                var t, i, a, r;
                return vd(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        t = e.getService(u.AnalysisTaskInformation).instance;
                        i = md({
                            instanceId: t.instanceId,
                            instanceName: t.name,
                            limit: 200
                        }, n);
                        a = e.getService(u.TaskService);
                        return [4, a.do(new hd(e), i)];
                    case 1:
                        r = o.sent();
                        return [2, r]
                    }
                }
                ))
            }
            ))
        }
        function Sd(e, n) {
            return _d(this, void 0, void 0, (function() {
                var t, i, a, r;
                return vd(this, (function(o) {
                    t = e.getService(u.AnalysisTaskInformation).schema;
                    i = {
                        nodes: (n.vertexDataList || []).map((function(e) {
                            return md(md({}, e), {
                                properties: e.properties.reduce((function(e, n) {
                                    e[n.name] = n.value;
                                    return e
                                }
                                ), {}),
                                schema: t.types.find((function(n) {
                                    return n.label === e.label
                                }
                                ))
                            })
                        }
                        )).map((function(e) {
                            return md(md({}, e), {
                                label: wd(e)
                            })
                        }
                        )),
                        edges: (n.edgeDataList || []).map((function(e) {
                            return md(md({}, e), {
                                properties: e.properties.reduce((function(e, n) {
                                    e[n.name] = n.value;
                                    return e
                                }
                                ), {}),
                                schema: t.types.find((function(n) {
                                    return n.label === e.label
                                }
                                ))
                            })
                        }
                        )).map((function(e) {
                            return md(md({}, e), {
                                label: wd(e)
                            })
                        }
                        ))
                    };
                    a = e.getService(u.GraphinDataService);
                    r = a.getData();
                    i = {
                        nodes: i.nodes.filter((function(e) {
                            return !r.nodes.find((function(n) {
                                return n.id === e.id
                            }
                            ))
                        }
                        )),
                        edges: i.edges.filter((function(e) {
                            return !r.edges.find((function(n) {
                                return n.id === e.id
                            }
                            ))
                        }
                        ))
                    };
                    return [2, i]
                }
                ))
            }
            ))
        }
        function kd(e, n) {
            return _d(this, void 0, void 0, (function() {
                var t, i, a, r, o;
                return vd(this, (function(c) {
                    t = e.getService(u.GraphinFacadeService);
                    i = t.getIconfontProvider().provide().default;
                    a = function(e, n) {
                        if (n === void 0) {
                            n = fn.BLUE
                        }
                        return e.color ? e.color : n
                    }
                    ;
                    r = function(e, n) {
                        if (n === void 0) {
                            n = sn.M
                        }
                        return e.size ? e.size : n
                    }
                    ;
                    o = {
                        nodes: n.nodes.map((function(e) {
                            var n = e.schema;
                            return {
                                id: e.id,
                                label: e.label,
                                facade: {
                                    display: bd(n),
                                    color: a(n),
                                    size: sn.S
                                },
                                data: md(md({}, e), {
                                    icon: i.name,
                                    fontFamily: i.fontFamily,
                                    downstream: null
                                }),
                                shape: t.getCurrentFacadeProvider().name + "-node"
                            }
                        }
                        )),
                        edges: n.edges.map((function(e) {
                            var n = e.schema;
                            return {
                                id: e.id,
                                label: e.label,
                                source: e.srcId,
                                target: e.dstId,
                                facade: {
                                    display: bd(n),
                                    style: pn.SOLID,
                                    color: a(n, fn.GREY),
                                    size: r(n, sn.S)
                                },
                                data: e,
                                shape: t.getCurrentFacadeProvider().name + "-edge"
                            }
                        }
                        ))
                    };
                    return [2, o]
                }
                ))
            }
            ))
        }
        function xd(e, n) {
            return _d(this, void 0, void 0, (function() {
                var t, i;
                return vd(this, (function(a) {
                    t = e.getService(u.GraphinDataService);
                    i = t.getData();
                    t.setData({
                        nodes: gd(i.nodes, n.nodes),
                        edges: gd(i.edges, n.edges)
                    });
                    e.refresh(true);
                    return [2]
                }
                ))
            }
            ))
        }
        function Od(e, n) {
            return _d(this, void 0, void 0, (function() {
                var t, i, a, r;
                return vd(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        o.trys.push([0, 5, , 6]);
                        return [4, Ed(e, n)];
                    case 1:
                        t = o.sent();
                        return [4, Sd(e, t)];
                    case 2:
                        i = o.sent();
                        return [4, kd(e, i)];
                    case 3:
                        a = o.sent();
                        return [4, xd(e, a)];
                    case 4:
                        o.sent();
                        return [3, 6];
                    case 5:
                        r = o.sent();
                        $i["Message"].show({
                            type: "error",
                            content: r.message,
                            duration: 0,
                            closeable: true,
                            align: "tr tr",
                            offset: [-30, 60]
                        });
                        console.error(r);
                        return [3, 6];
                    case 6:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        var Fd = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        var Nd = undefined && undefined.__assign || function() {
            Nd = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Nd.apply(this, arguments)
        }
        ;
        var Dd = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var jd = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var Pd = $i["Grid"].Row
          , Td = $i["Grid"].Col;
        var Id = function(e) {
            Fd(n, e);
            function n() {
                var n = e !== null && e.apply(this, arguments) || this;
                n.state = {
                    detail: {},
                    current: n.props.edgeLabel || "all",
                    limit: 10,
                    loadingInSelectComponent: false,
                    loading: false,
                    conditions: {
                        edgeCondition: null,
                        vertexConditions: null
                    },
                    errors: {}
                };
                n.LIMIT_OPTIONS = [10, 20, 30].map((function(e) {
                    return {
                        value: e.toString(),
                        label: e.toString()
                    }
                }
                ));
                return n
            }
            n.prototype.componentDidMount = function() {
                this._onSelect(this.state.current)
            }
            ;
            n.prototype._makeSelect = function() {
                if (!this.props.distribution)
                    return [];
                var e = this.props.distribution.wholeExtension.edgeCount;
                var n = this.props.distribution.wholeExtension.vertexCount;
                var t = [{
                    value: "all",
                    label: Ee["get"]("graph-analyser.extend.dialog.select.whole", {
                        wholeEdgeCount: e,
                        wholeVertexCount: n
                    }).d("展开下游全部" + e + "条边关联的" + n + "个邻居")
                }];
                t = t.concat(this.props.distribution.subExtensions.map((function(e) {
                    var n = e.edgeLabel;
                    var t = e.edgeCount;
                    var i = e.vertexCount;
                    return {
                        value: e.edgeLabel,
                        label: Ee["get"]("graph-analyser.extend.dialog.select.sub", {
                            edgeLabel: n,
                            edgeCount: t,
                            vertexCount: i
                        }).d("展开下游" + t + '个"' + n + '"边关联的' + i + "个邻居")
                    }
                }
                )));
                return t
            }
            ;
            n.prototype._renderConditions = function() {
                var e = this;
                if (this.state.current === "all")
                    return;
                if (!this.state.conditions.edgeCondition)
                    return;
                var n = this.props.main.getService(u.AnalysisTaskInformation).schema;
                return i["createElement"]("div", {
                    className: "ga-context-menu-extend-dialog-conditions"
                }, i["createElement"]($i["Loading"], {
                    style: {
                        display: "block"
                    },
                    visible: this.state.loading
                }, i["createElement"](nc, {
                    schema: n.types.find((function(n) {
                        return n.label === e.state.current
                    }
                    )),
                    conditions: this.state.conditions.edgeCondition.propertyConditions || [],
                    onChange: function(n, t) {
                        var i;
                        e.state.conditions.edgeCondition.propertyConditions = n;
                        e.setState({
                            conditions: Nd({}, e.state.conditions),
                            errors: Nd(Nd({}, e.state.errors), (i = {},
                            i[e.state.current] = t || [],
                            i))
                        })
                    }
                }), this.state.conditions.vertexConditions.map((function(t) {
                    var a = function(n, i) {
                        var a;
                        t.propertyConditions = n;
                        e.setState({
                            conditions: Nd({}, e.state.conditions),
                            errors: Nd(Nd({}, e.state.errors), (a = {},
                            a[t.label] = i || [],
                            a))
                        })
                    };
                    return i["createElement"](nc, {
                        key: t.label,
                        schema: n.types.find((function(e) {
                            return e.label === t.label
                        }
                        )),
                        conditions: t.propertyConditions || [],
                        onChange: a
                    })
                }
                ))))
            }
            ;
            n.prototype._setDefaultConditions = function(e, n) {
                var t = n.find((function(n) {
                    return n.label === e
                }
                ));
                var i = t.propertyDefList.filter((function(e) {
                    return Lo(e)
                }
                ));
                var a = i[0] ? [{
                    name: i[0].name,
                    type: zo[i[0].data_type],
                    value: "",
                    operator: Ro(i[0]) ? jo.EQ : Po.CONTAIN
                }] : [];
                return a
            }
            ;
            n.prototype._onSelect = function(e) {
                return Dd(this, void 0, void 0, (function() {
                    var n, t, i, a, r, o, c, d;
                    var l;
                    var s = this;
                    return jd(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            this.setState({
                                current: e,
                                loading: true
                            });
                            f.label = 1;
                        case 1:
                            f.trys.push([1, , 3, 4]);
                            if (e === "all" || this.state.detail[e]) {
                                this.setState({
                                    conditions: {
                                        edgeCondition: null,
                                        vertexConditions: null
                                    }
                                });
                                return [2]
                            }
                            n = this.props.main;
                            t = n.getService(u.AnalysisTaskInformation),
                            i = t.instance,
                            a = t.schema;
                            r = n.getService(u.BackendService).analysis;
                            o = a.types.filter((function(e) {
                                return e.type === ft.VERTEX
                            }
                            ));
                            c = a.types.filter((function(e) {
                                return e.type === ft.EDGE
                            }
                            ));
                            return [4, r.getVertexExtensionOptions(i.instanceId, i.name, this.props.id, e)];
                        case 2:
                            d = f.sent();
                            this.setState({
                                detail: Nd(Nd({}, this.state.detail), (l = {},
                                l[e] = d,
                                l)),
                                conditions: {
                                    edgeCondition: {
                                        label: this.state.current,
                                        propertyConditions: this._setDefaultConditions(this.state.current, c)
                                    },
                                    vertexConditions: d.subExtensions.map((function(e) {
                                        return {
                                            label: e.vertexLabel,
                                            propertyConditions: s._setDefaultConditions(e.vertexLabel, o)
                                        }
                                    }
                                    ))
                                }
                            });
                            return [3, 4];
                        case 3:
                            this.setState({
                                loading: false
                            });
                            return [7];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            n.prototype._onOk = function(e) {
                return Dd(this, void 0, void 0, (function() {
                    var n, t, i;
                    return jd(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            this.setState({
                                loading: true
                            });
                            a.label = 1;
                        case 1:
                            a.trys.push([1, , 3, 4]);
                            n = this.state.conditions,
                            t = n.edgeCondition,
                            i = n.vertexConditions;
                            return [4, Od(this.props.main, {
                                vertexId: this.props.id,
                                edgeCondition: t && Nd(Nd({}, t), {
                                    propertyConditions: t.propertyConditions.filter((function(e) {
                                        return e.value && e.value.length > 0
                                    }
                                    ))
                                }),
                                vertexConditions: i && i.map((function(e) {
                                    return Nd(Nd({}, e), {
                                        propertyConditions: e.propertyConditions.filter((function(e) {
                                            return e.value && e.value.length > 0
                                        }
                                        ))
                                    })
                                }
                                )),
                                limit: this.state.limit
                            })];
                        case 2:
                            a.sent();
                            this.props.onOk(e);
                            return [3, 4];
                        case 3:
                            this.setState({
                                loading: false
                            });
                            return [7];
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            n.prototype.render = function() {
                var e = this;
                var n = this.props;
                var t = Ee["get"]("graph-analyser.extend.dialog.title").d("高级扩展");
                return i["createElement"]($i["Dialog"], {
                    title: t,
                    visible: n.visible,
                    onCancel: n.onCancel,
                    onClose: n.onCancel,
                    okProps: {
                        loading: this.state.loading || this.state.loadingInSelectComponent,
                        disabled: a["flatten"](Object.values(this.state.errors)).length > 0
                    },
                    onOk: this._onOk.bind(this)
                }, i["createElement"]("div", {
                    className: "ga-context-menu-extend-dialog"
                }, i["createElement"](Pd, null, i["createElement"](Td, {
                    span: 6,
                    className: "ga-context-menu-extend-dialog-label"
                }, Ee["get"]("graph-analyser.extend.dialog.select").d("获取：")), i["createElement"](Td, {
                    span: 18
                }, i["createElement"]($i["Select"], {
                    dataSource: this._makeSelect(),
                    defaultValue: this.state.current,
                    onChange: this._onSelect.bind(this),
                    state: this.state.loadingInSelectComponent ? "loading" : null
                }), i["createElement"]($i["Message"], {
                    type: "warning",
                    className: "ga-context-menu-extend-dialog-message"
                }, Ee["get"]("graph-analyser.extend.dialog.warning.too-many").d("当邻居较多时会影响加载，建议您减少一次扩展的邻居个数。")))), this._renderConditions(), i["createElement"](Pd, {
                    className: "ga-context-menu-extend-dialog-limit"
                }, i["createElement"](Td, {
                    span: 6,
                    className: "ga-context-menu-extend-dialog-label"
                }, Ee["get"]("graph-analyser.extend.dialog.count").d("随机返回邻居个数：")), i["createElement"](Td, {
                    span: 18
                }, i["createElement"]($i["Select"], {
                    dataSource: this.LIMIT_OPTIONS,
                    defaultValue: this.state.limit,
                    onChange: function(n) {
                        e.setState({
                            limit: parseInt(n, 10)
                        })
                    }
                })))))
            }
            ;
            return n
        }(i["Component"]);
        var Cd = Lc["dialog"].enhance(Id);
        var Ld = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var Rd = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        function Ad(e, n) {
            return Ld(this, void 0, void 0, (function() {
                return Rd(this, (function(t) {
                    Cd.show({
                        main: e,
                        id: n.id,
                        edgeLabel: n.selectedEdge,
                        distribution: n.distribution,
                        onOk: function() {
                            n.onClose()
                        },
                        onCancel: function() {
                            n.onClose()
                        }
                    });
                    return [2]
                }
                ))
            }
            ))
        }
        function Gd(e, n) {
            return Ld(this, void 0, void 0, (function() {
                var t, i;
                return Rd(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        t = n.key;
                        i = n.distribution.subExtensions.find((function(e) {
                            return e.edgeLabel === t
                        }
                        ));
                        if (!(i.edgeCount <= yd))
                            return [3, 2];
                        return [4, Od(e, {
                            vertexId: n.id,
                            edgeCondition: {
                                label: t,
                                propertyConditions: []
                            }
                        })];
                    case 1:
                        a.sent();
                        return [2, n.onClose()];
                    case 2:
                        return [4, Ad(e, {
                            id: n.id,
                            distribution: n.distribution,
                            onClose: n.onClose,
                            selectedEdge: t
                        })];
                    case 3:
                        a.sent();
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function zd(e) {
            var n = this;
            var t;
            var r = e.item.get("model");
            var o = e.main.getService(u.AnalysisTaskInformation).instance;
            var c = i["useState"]()
              , d = c[0]
              , l = c[1];
            ld((function(t) {
                return Ld(n, void 0, void 0, (function() {
                    var n, i;
                    return Rd(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            n = e.main.getService(u.BackendService).analysis;
                            if (!!a["isNil"](r.data.downstream))
                                return [3, 2];
                            if (r.data.downstream === 0) {
                                return [2, e.onClose()]
                            }
                            if (!(r.data.downstream <= yd))
                                return [3, 2];
                            return [4, Od(e.main, {
                                vertexId: r.id
                            })];
                        case 1:
                            c.sent();
                            return [2, e.onClose()];
                        case 2:
                            return [4, n.getVertexExtensionOptions(o.instanceId, o.name, r.id)];
                        case 3:
                            i = c.sent();
                            if (t.isStopped)
                                return [2];
                            if (i.wholeExtension.edgeCount <= 0)
                                return [2, e.onClose()];
                            if (!(i.wholeExtension.edgeCount <= yd))
                                return [3, 5];
                            return [4, Od(e.main, {
                                vertexId: r.id
                            })];
                        case 4:
                            c.sent();
                            return [2, e.onClose()];
                        case 5:
                            l(i);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [e.item]);
            var s = ((t = d) === null || t === void 0 ? void 0 : t.subExtensions) && a["take"](a["sortBy"](d.subExtensions, "edgeCount"), 5);
            return d ? i["createElement"]("div", {
                className: "ga-context-menu-extend"
            }, i["createElement"]($i["Menu"], {
                onItemClick: function(n) {
                    Gd(e.main, {
                        key: n,
                        id: r.id,
                        distribution: d,
                        onClose: e.onClose
                    })
                }
            }, s.map((function(e) {
                var n = e.edgeLabel
                  , t = e.vertexCount
                  , a = e.edgeCount;
                return i["createElement"]($i["Menu"].Item, {
                    className: "ga-context-menu-extend-list-item",
                    key: "" + n
                }, Ee["getHTML"]("graph-analyser.graphin.menu.extend.item", {
                    edgeLabel: n,
                    vertexCount: t,
                    edgeCount: a
                }).d(i["createElement"]("span", null, "展开下游", a, "个", i["createElement"]("span", {
                    className: "item-tag"
                }, n), "边关联的", t, "个邻居")), i["createElement"]("div", {
                    className: "ga-context-menu-extend-list-item-icon"
                }, i["createElement"]("i", {
                    className: "gonggongtubiao zhixiangjiantou"
                })))
            }
            ))), i["createElement"]("div", {
                className: "ga-context-menu-extend-advance",
                onClick: function() {
                    Ad(e.main, {
                        id: r.id,
                        distribution: d,
                        onClose: e.onClose
                    })
                }
            }, Ee["get"]("graph-analyser.graphin.menu.extend.advance").d("高级扩展"))) : i["createElement"]($i["Loading"], {
                visible: true,
                style: {
                    display: "inline-block"
                }
            }, i["createElement"]("div", {
                className: "ga-context-menu-extend"
            }, i["createElement"]("div", {
                className: "ga-context-menu-extend-advance",
                onClick: function() {
                    Ad(e.main, {
                        id: r.id,
                        distribution: d,
                        onClose: e.onClose
                    })
                }
            }, Ee["get"]("graph-analyser.graphin.menu.extend.advance").d("高级扩展"))))
        }
        var Bd = undefined && undefined.__assign || function() {
            Bd = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Bd.apply(this, arguments)
        }
        ;
        var Md = "expand";
        var Xd = "folder";
        var Vd = "show";
        var Wd = "hide";
        var Ud = "pin";
        function qd(e) {
            var n = e.item.get("model");
            var t = [i["createElement"]($i["Menu"].Item, {
                key: Md
            }, i["createElement"]("i", {
                className: "gonggongtubiao shitu-jinruquanping"
            }), Ee["get"]("expand").d("扩展")), i["createElement"]($i["Menu"].Item, {
                key: Xd
            }, i["createElement"]("i", {
                className: "gonggongtubiao shitu-tuichuquanping"
            }), Ee["get"]("pack").d("收起")), n.facade.forceHidden ? i["createElement"]($i["Menu"].Item, {
                key: Vd
            }, i["createElement"]("i", {
                className: "gonggongtubiao shitu-yulan"
            }), Ee["get"]("show").d("显示")) : i["createElement"]($i["Menu"].Item, {
                key: Wd
            }, i["createElement"]("i", {
                className: "gonggongtubiao shitu-yulanbukejian"
            }), Ee["get"]("hide").d("隐藏"))];
            if (e.type === "edge") {
                t = [n.facade.forceHidden ? i["createElement"]($i["Menu"].Item, {
                    key: Vd
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-yulan"
                }), Ee["get"]("show").d("显示")) : i["createElement"]($i["Menu"].Item, {
                    key: Wd
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-yulanbukejian"
                }), Ee["get"]("hide").d("隐藏"))]
            }
            return i["createElement"]($i["Menu"], {
                className: "ga-context-menu",
                onItemClick: e.onSelect
            }, t)
        }
        function Hd(e, n) {
            var t = n.get("model").id;
            var i = e.getService(u.GraphinDataService);
            var a = i.getData();
            var r = a.edges.filter((function(e) {
                return e.data.srcId === t && e.data.dstId !== t
            }
            )).map((function(e) {
                return e.data.dstId
            }
            ));
            i.setData({
                nodes: a.nodes.filter((function(e) {
                    return !r.find((function(n) {
                        return n === e.id
                    }
                    ))
                }
                )),
                edges: a.edges.filter((function(e) {
                    return e.data.srcId !== t && !r.find((function(n) {
                        return n === e.data.srcId || n === e.data.dstId
                    }
                    ))
                }
                ))
            });
            e.refresh(true)
        }
        function Kd(e, n, t, i) {
            var a = t.get("model");
            var r = n.getService(u.GraphinDataService);
            var o = e === "node" ? r.getData().nodes.find((function(e) {
                return e.id === a.id
            }
            )) : r.getData().edges.find((function(e) {
                return e.id === a.id
            }
            ));
            o && (o.facade.forceHidden = i);
            n.refresh(true)
        }
        function Yd(e) {
            var n = e.main.getService(u.GraphinDataService);
            var t = e.main.getService(u.OptionService);
            var a = i["useState"]()
              , r = a[0]
              , o = a[1];
            var c = i["useState"](false)
              , d = c[0]
              , l = c[1];
            var s = i["useState"]()
              , f = s[0]
              , p = s[1];
            var h = i["useState"]()
              , m = h[0]
              , _ = h[1];
            var v = function() {
                o(null);
                p(null);
                l(null)
            };
            var g = function(n) {
                if (n === Md) {
                    l(true)
                }
                if (n === Xd) {
                    Hd(e.main, f);
                    v()
                }
                if (n === Wd) {
                    Kd("node", e.main, f, true);
                    v()
                }
                if (n === Vd) {
                    Kd("node", e.main, f, false);
                    v()
                }
            };
            var y = function(n) {
                if (n === Wd) {
                    Kd("edge", e.main, f, true);
                    v()
                }
                if (n === Vd) {
                    Kd("edge", e.main, f, false);
                    v()
                }
            };
            i["useEffect"]((function() {
                if (!t.get("graph.hasContextMenu"))
                    return;
                var e = n.get().graph;
                var i = function(e) {
                    var n = e.item;
                    _("node");
                    o({
                        left: e.canvasX,
                        top: e.canvasY
                    });
                    p(n)
                };
                var a = function(e) {
                    v()
                };
                var r = function(e) {
                    v()
                };
                var c = function(e) {
                    var n = e.item;
                    _("edge");
                    o({
                        left: e.canvasX,
                        top: e.canvasY
                    });
                    p(n)
                };
                e.on("node:contextmenu", i);
                e.on("node:mouseleave", a);
                e.on("edge:contextmenu", c);
                e.on("edge:mouseleave", r);
                return function() {
                    e.off("node:contextmenu", i);
                    e.off("node:mouseleave", a);
                    e.off("edge:contextmenu", c);
                    e.off("edge:mouseleave", r)
                }
            }
            ));
            if (!r || !f)
                return null;
            var b = Bd(Bd({
                position: "absolute"
            }, r), {
                zIndex: 999,
                display: "flex"
            });
            return ma["createPortal"](i["createElement"]("div", {
                style: b
            }, i["createElement"](qd, {
                main: e.main,
                item: f,
                onSelect: m === "node" ? g : y,
                type: m
            }), d && i["createElement"](zd, {
                main: e.main,
                item: f,
                onClose: v
            })), n.get().graphDOM)
        }
        var Zd = Yd;
        var Jd = undefined && undefined.__assign || function() {
            Jd = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return Jd.apply(this, arguments)
        }
        ;
        var $d = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.simplicity-circle").d("圆点");
                this.name = "simplicity-circle";
                this.type = _n.MINI;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1eWcyvpY7gK0jSZKzXXaikpXa-152-100.png", "https://img.alicdn.com/tfs/TB1oXwBvAL0gK0jSZFAXXcA9pXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this._core.utils.color;
                var n = this;
                return {
                    draw: function(t, i) {
                        var a = n._core.graph.hasLabel;
                        var r = e[t.facade.color];
                        var o = i.addShape("circle", {
                            attrs: {
                                id: "simplicity-floor",
                                x: 0,
                                y: 0,
                                r: 4,
                                stroke: t.facade.hidden ? "#1E202D" : r.dark,
                                lineWidth: 3
                            }
                        });
                        i.addShape("circle", {
                            attrs: {
                                id: "simplicity-selected",
                                x: 0,
                                y: 0,
                                r: 0,
                                stroke: "#FFF",
                                lineWidth: 6,
                                opacity: .15
                            }
                        });
                        a && i.addShape("text", {
                            attrs: Jd(Jd({
                                id: "simplicity-label",
                                x: 4 + 7,
                                y: 0,
                                fontSize: 12,
                                text: t.label
                            }, Wr), {
                                textAlign: "left",
                                fill: t.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        return o
                    },
                    setState: function(n, t, i) {
                        var a;
                        if (!n)
                            return;
                        var r = i.get("model");
                        var o = e[r.facade.color];
                        var c = i.getContainer();
                        var d = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-floor"
                        }
                        ));
                        var u = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-selected"
                        }
                        ));
                        var l = c.get("children").find((function(e) {
                            return e.attr().id === "simplicity-label"
                        }
                        ));
                        var s = {
                            floor: {
                                stroke: r.facade.hidden ? "#1E202D" : o.dark
                            },
                            selected: {
                                r: 0
                            },
                            text: {
                                fill: r.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (n === hn.SELECTED && t || n === hn.LIGHT && t) {
                            s.floor.stroke = o.normal;
                            s.selected = {
                                r: 8
                            }
                        }
                        if (n === hn.DARK && t) {
                            s.floor.stroke = "#1E202D";
                            s.text.fill = "#8D93B0"
                        }
                        d.attr(s.floor);
                        u.attr(s.selected);
                        (a = l) === null || a === void 0 ? void 0 : a.attr(s.text)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var Qd = function() {
            function e() {
                this.name = "simplicity-circle-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new $d(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var eu = Qd;
        var nu = undefined && undefined.__assign || function() {
            nu = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return nu.apply(this, arguments)
        }
        ;
        var tu = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.hexagon").d("六边形");
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1BLQDvAT2gK0jSZPcXXcKkpXa-152-100.png", "https://img.alicdn.com/tfs/TB10YwDvxv1gK0jSZFFXXb0sXXa-152-100.png");
                this.type = _n.WITHOUT_ICON;
                this.name = "hexagon-with-icon"
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = function(e) {
                    var n = e / 2 + e * Math.sqrt(5) / 4;
                    return [[e / 2, 0], [e, e / 4], [e, n - e / 4], [e / 2, n], [0, n - e / 4], [0, e / 4]]
                };
                var n = function(e, n) {
                    var i = t._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: e,
                        text: i(e, n)
                    }
                };
                var t = this;
                var i = this._core.utils.color;
                var a = this._core.utils.size;
                return {
                    draw: function(n, r) {
                        var o = t._core.graph.hasLabel;
                        var c = a.node[n.facade.size] * 56;
                        var d = c + 4;
                        var u = i[n.facade.color];
                        var l = n.data.downstream || null;
                        var s = r.addShape("polygon", {
                            attrs: {
                                id: "hexagon-floor",
                                points: e(d),
                                fill: "#10121A"
                            }
                        });
                        r.addShape("polygon", {
                            attrs: {
                                id: "hexagon-border",
                                points: e(d),
                                stroke: n.facade.hidden ? "#1E202D" : u.normal,
                                lineWidth: 2
                            }
                        });
                        var f = r.addShape("polygon", {
                            attrs: {
                                id: "hexagon-selected",
                                points: [],
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        f.translate(-5, -5);
                        var p = r.addGroup({
                            attrs: {
                                id: "hexagon-inner-group"
                            }
                        }, null);
                        p.addShape("polygon", {
                            attrs: {
                                id: "hexagon-inner",
                                points: e(c),
                                fill: n.facade.hidden ? "#1E202D" : u.dark
                            }
                        });
                        p.translate((d - c) / 2, (d - c) / 2);
                        o && p.addShape("text", {
                            attrs: nu(nu({
                                id: "hexagon-label",
                                x: d / 2,
                                y: d / 2,
                                fontSize: 12,
                                text: n.label
                            }, Wr), {
                                textAlign: "center",
                                fill: n.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        if (!l)
                            return s;
                        var h = r.addGroup({
                            attrs: {
                                id: "hexagon-children-group"
                            }
                        }, null);
                        h.addShape("polygon", {
                            attrs: {
                                id: "hexagon-children",
                                points: e(16),
                                fill: n.facade.hidden ? "#1E202D" : u.normal
                            }
                        });
                        h.addShape("text", {
                            attrs: nu(nu({
                                id: "hexagon-children-icon",
                                x: 16 / 2,
                                y: 16 / 2,
                                text: l > 100 ? "99+" : l,
                                fontSize: 10
                            }, Wr), {
                                fill: n.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        h.translate(d / 2 - 16 / 2, 0);
                        return s
                    },
                    setState: function(n, t, r) {
                        var o, c, d, u, l;
                        if (!n)
                            return;
                        var s = r.get("model");
                        var f = r.getContainer();
                        var p = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-border"
                        }
                        ));
                        var h = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-selected"
                        }
                        ));
                        var m = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-inner-group"
                        }
                        ));
                        var _ = m.get("children").find((function(e) {
                            return e.attr().id === "hexagon-inner"
                        }
                        ));
                        var v = m.get("children").find((function(e) {
                            return e.attr().id === "hexagon-label"
                        }
                        ));
                        var g = f.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children-group"
                        }
                        ));
                        var y = (o = g) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children"
                        }
                        ));
                        var b = (c = g) === null || c === void 0 ? void 0 : c.get("children").find((function(e) {
                            return e.attr().id === "hexagon-children-icon"
                        }
                        ));
                        var w = i[s.facade.color];
                        var E = a.node[s.facade.size] * 56;
                        var S = E + 4;
                        var k = {
                            border: {
                                stroke: s.facade.hidden ? "#1E202D" : w.normal,
                                lineWidth: 2
                            },
                            selected: {
                                points: []
                            },
                            inner: {
                                fill: s.facade.hidden ? "#1E202D" : w.dark
                            },
                            label: {
                                fill: s.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: s.facade.hidden ? "#1E202D" : w.normal
                            },
                            childrenIcon: {
                                fill: s.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (n === hn.SELECTED && t) {
                            k.border.lineWidth = 5;
                            k.selected.points = e(S + 10)
                        }
                        if (n === hn.LIGHT && t) {
                            k.selected.points = e(S + 10)
                        }
                        if (n === hn.DARK && t) {
                            k.border.stroke = "#1E202D";
                            k.inner.fill = "#1E202D";
                            k.label.fill = "#8D93B0";
                            k.children.fill = "#1E202D";
                            k.childrenIcon.fill = "#8D93B0"
                        }
                        p.attr(k.border);
                        h.attr(k.selected);
                        _.attr(k.inner);
                        (d = v) === null || d === void 0 ? void 0 : d.attr(k.label);
                        (u = y) === null || u === void 0 ? void 0 : u.attr(k.children);
                        (l = b) === null || l === void 0 ? void 0 : l.attr(k.childrenIcon)
                    },
                    getAnchorPoints: function(e) {
                        var n = 1 / (2 + Math.sqrt(5));
                        return [[.5, 0], [1, n], [1, (Math.sqrt(5) + 1) * n], [.5, 1], [0, (Math.sqrt(5) + 1) * n], [0, n]]
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var iu = function() {
            function e() {
                this.name = "hexagon-without-icon-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new tu(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var au = iu;
        var ru = undefined && undefined.__assign || function() {
            ru = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return ru.apply(this, arguments)
        }
        ;
        var ou = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.circle").d("圆形样式");
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB13lJ5u1bviK0jSZFNXXaApXXa-152-100.png", "https://img.alicdn.com/tfs/TB11XIzvAL0gK0jSZFtXXXQCXXa-152-100.png");
                this.type = _n.WITHOUT_ICON;
                this.name = "circle-without-icon"
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(i, a) {
                        var r = e._core.graph.hasLabel;
                        var o = t.node[i.facade.size] * 56;
                        var c = o + 4;
                        var d = i.facade.hidden ? n[fn.GREY] : n[i.facade.color];
                        var u = i.data.downstream || null;
                        var l = a.addShape("circle", {
                            attrs: {
                                id: "circle-floor",
                                x: 0,
                                y: 0,
                                r: c / 2
                            }
                        });
                        a.addShape("circle", {
                            attrs: {
                                id: "circle-selected",
                                x: 0,
                                y: 0,
                                r: 0,
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        a.addShape("circle", {
                            attrs: {
                                id: "circle-border",
                                x: 0,
                                y: 0,
                                r: c / 2,
                                stroke: i.facade.hidden ? "#1E202D" : d.normal,
                                lineWidth: 2
                            }
                        });
                        var s = a.addGroup({
                            attrs: {
                                id: "circle-inner-group"
                            }
                        }, null);
                        s.addShape("circle", {
                            attrs: {
                                id: "circle-inner",
                                x: 0,
                                y: 0,
                                r: o / 2,
                                fill: i.facade.hidden ? "#1E202D" : d.dark
                            }
                        });
                        r && s.addShape("text", {
                            attrs: ru(ru({
                                id: "circle-label",
                                x: 0,
                                y: 0,
                                fontSize: 12,
                                text: i.label
                            }, Wr), {
                                textAlign: "center",
                                fill: i.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        if (!u)
                            return l;
                        var f = a.addGroup({
                            attrs: {
                                id: "circle-children-group"
                            }
                        }, null);
                        f.addShape("circle", {
                            attrs: {
                                id: "circle-children",
                                x: c / 2 - 9,
                                y: -c / 2 + 9,
                                r: 9,
                                fill: i.facade.hidden ? "#1E202D" : d.normal
                            }
                        });
                        u !== 0 && f.addShape("text", {
                            attrs: ru(ru({
                                id: "circle-children-icon",
                                x: c / 2 - 9,
                                y: -c / 2 + 9,
                                text: u > 100 ? "99+" : u,
                                fontSize: 10
                            }, Wr), {
                                fill: i.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        return l
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "circle-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "circle-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "circle-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "circle-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "circle-label"
                        }
                        ));
                        var v = s.get("children").find((function(e) {
                            return e.attr().id === "circle-children-group"
                        }
                        ));
                        var g = (r = v) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "circle-children"
                        }
                        ));
                        var y = (o = v) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "circle-children-icon"
                        }
                        ));
                        var b = n[l.facade.color];
                        var w = t.node[l.facade.size] * 56;
                        var E = w + 4;
                        var S = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : b.normal,
                                lineWidth: 2
                            },
                            selected: {
                                r: 0
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : b.dark
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : b.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            S.border.lineWidth = 5;
                            S.selected.r = E / 2 + 10
                        }
                        if (e === hn.LIGHT && i) {
                            S.selected.r = E / 2 + 10
                        }
                        if (e === hn.DARK && i) {
                            S.border.stroke = "#1E202D";
                            S.inner.fill = "#1E202D";
                            S.label.fill = "#8D93B0";
                            S.children.fill = "#1E202D";
                            S.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(S.border);
                        p.attr(S.selected);
                        m.attr(S.inner);
                        (c = _) === null || c === void 0 ? void 0 : c.attr(S.label);
                        (d = g) === null || d === void 0 ? void 0 : d.attr(S.children);
                        (u = y) === null || u === void 0 ? void 0 : u.attr(S.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var cu = function() {
            function e() {
                this.name = "circle-facade-without-icon-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new ou(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var du = cu;
        var uu = undefined && undefined.__assign || function() {
            uu = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return uu.apply(this, arguments)
        }
        ;
        var lu = function() {
            function e(e) {
                this._core = e;
                this.display = Ee["get"]("graph-analyser.facade.rect").d("正方形");
                this.name = "rect-without-icon";
                this.type = _n.WITHOUT_ICON;
                this.exhibit = Yr("https://img.alicdn.com/tfs/TB1iAcAvCf2gK0jSZFPXXXsopXa-152-100.png", "https://img.alicdn.com/tfs/TB1s87AvET1gK0jSZFhXXaAtVXa-152-100.png")
            }
            e.prototype.provideNodeFacadePainter = function() {
                var e = this;
                var n = this._core.utils.color;
                var t = this._core.utils.size;
                var i = function(n, t) {
                    var i = e._core.utils.font.transformToUnicode;
                    return {
                        fontFamily: n,
                        text: i(n, t)
                    }
                };
                return {
                    draw: function(i, a) {
                        var r = e._core.graph.hasLabel;
                        var o = t.node[i.facade.size] * 56;
                        var c = o + 4;
                        var d = n[i.facade.color];
                        var u = i.data.downstream || null;
                        var l = a.addShape("rect", {
                            attrs: {
                                id: "rect-floor",
                                x: 0,
                                y: 0,
                                width: c,
                                height: c,
                                fill: "#10121A"
                            }
                        });
                        a.addShape("rect", {
                            attrs: {
                                id: "rect-border",
                                x: 0,
                                y: 0,
                                width: c,
                                height: c,
                                stroke: i.facade.hidden ? "#1E202D" : d.normal,
                                lineWidth: 2
                            }
                        });
                        a.addShape("rect", {
                            attrs: {
                                id: "rect-selected",
                                x: -5,
                                y: -5,
                                width: 0,
                                height: 0,
                                fill: "#FFF",
                                opacity: .15
                            }
                        });
                        var s = a.addGroup({
                            attrs: {
                                id: "rect-inner-group"
                            }
                        }, null);
                        s.addShape("rect", {
                            attrs: {
                                id: "rect-inner",
                                x: 0,
                                y: 0,
                                width: o,
                                height: o,
                                fill: i.facade.hidden ? "#1E202D" : d.dark
                            }
                        });
                        r && s.addShape("text", {
                            attrs: uu(uu({
                                id: "rect-label",
                                x: c / 2,
                                y: c / 2,
                                fontSize: 12,
                                text: i.label
                            }, Wr), {
                                textAlign: "center",
                                fill: i.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            })
                        });
                        s.translate((c - o) / 2, (c - o) / 2);
                        if (!u)
                            return l;
                        var f = a.addGroup({
                            attrs: {
                                id: "rect-children-group"
                            }
                        }, null);
                        f.addShape("rect", {
                            attrs: {
                                id: "rect-children",
                                x: 0,
                                y: 0,
                                width: 12,
                                height: 12,
                                fill: i.facade.hidden ? "#1E202D" : d.normal
                            }
                        });
                        f.addShape("text", {
                            attrs: uu(uu({
                                id: "rect-children-icon",
                                x: 12 / 2,
                                y: 12 / 2,
                                text: u > 100 ? "99+" : u,
                                fontSize: 10
                            }, Wr), {
                                fill: i.facade.hidden ? "#8D93B0" : "#FFFFFF",
                                fontFamily: null
                            })
                        });
                        f.translate(c - 12, 0);
                        return l
                    },
                    setState: function(e, i, a) {
                        var r, o, c, d, u;
                        if (!e)
                            return;
                        var l = a.get("model");
                        var s = a.getContainer();
                        var f = s.get("children").find((function(e) {
                            return e.attr().id === "rect-border"
                        }
                        ));
                        var p = s.get("children").find((function(e) {
                            return e.attr().id === "rect-selected"
                        }
                        ));
                        var h = s.get("children").find((function(e) {
                            return e.attr().id === "rect-inner-group"
                        }
                        ));
                        var m = h.get("children").find((function(e) {
                            return e.attr().id === "rect-inner"
                        }
                        ));
                        var _ = h.get("children").find((function(e) {
                            return e.attr().id === "rect-label"
                        }
                        ));
                        var v = s.get("children").find((function(e) {
                            return e.attr().id === "rect-children-group"
                        }
                        ));
                        var g = (r = v) === null || r === void 0 ? void 0 : r.get("children").find((function(e) {
                            return e.attr().id === "rect-children"
                        }
                        ));
                        var y = (o = v) === null || o === void 0 ? void 0 : o.get("children").find((function(e) {
                            return e.attr().id === "rect-children-icon"
                        }
                        ));
                        var b = n[l.facade.color];
                        var w = t.node[l.facade.size] * 56;
                        var E = w + 4;
                        var S = {
                            border: {
                                stroke: l.facade.hidden ? "#1E202D" : b.normal,
                                lineWidth: 2
                            },
                            selected: {
                                width: 0,
                                height: 0
                            },
                            inner: {
                                fill: l.facade.hidden ? "#1E202D" : b.dark
                            },
                            label: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            },
                            children: {
                                fill: l.facade.hidden ? "#1E202D" : b.normal
                            },
                            childrenIcon: {
                                fill: l.facade.hidden ? "#8D93B0" : "#FFFFFF"
                            }
                        };
                        if (e === hn.SELECTED && i) {
                            S.border.lineWidth = 5;
                            S.selected.width = E + 10;
                            S.selected.height = E + 10
                        }
                        if (e === hn.LIGHT && i) {
                            S.selected.width = E + 10;
                            S.selected.height = E + 10
                        }
                        if (e === hn.DARK && i) {
                            S.border.stroke = "#1E202D";
                            S.inner.fill = "#1E202D";
                            S.label.fill = "#8D93B0";
                            S.children.fill = "#1E202D";
                            S.childrenIcon.fill = "#8D93B0"
                        }
                        f.attr(S.border);
                        p.attr(S.selected);
                        m.attr(S.inner);
                        (c = _) === null || c === void 0 ? void 0 : c.attr(S.label);
                        (d = g) === null || d === void 0 ? void 0 : d.attr(S.children);
                        (u = y) === null || u === void 0 ? void 0 : u.attr(S.childrenIcon)
                    }
                }
            }
            ;
            e.prototype.provideEdgeFacadePainter = function() {
                return Hr(this._core)
            }
            ;
            return e
        }();
        var su = function() {
            function e() {
                this.name = "rect-without-icon-facade-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.provideFacade(new lu(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var fu = su;
        var pu;
        (function(e) {
            e[e["SAVE"] = 0] = "SAVE";
            e[e["EXPORT"] = 1] = "EXPORT"
        }
        )(pu || (pu = {}));
        t.d(n, "a", (function() {
            return Qr
        }
        ));
        t.d(n, "b", (function() {
            return du
        }
        ));
        t.d(n, "d", (function() {
            return _o
        }
        ));
        t.d(n, "e", (function() {
            return au
        }
        ));
        t.d(n, "m", (function() {
            return bo
        }
        ));
        t.d(n, "l", (function() {
            return eu
        }
        ));
        t.d(n, "j", (function() {
            return io
        }
        ));
        t.d(n, "k", (function() {
            return fu
        }
        ));
        t.d(n, "i", (function() {
            return co
        }
        ));
        t.d(n, "h", (function() {
            return fo
        }
        ));
        t.d(n, "g", (function() {
            return vc
        }
        ));
        t.d(n, "c", (function() {
            return Nc
        }
        ));
        t.d(n, "n", (function() {
            return ad
        }
        ));
        t.d(n, "f", (function() {
            return Vr
        }
        ));
        var hu = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var mu = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var _u = "MainPanel";
        function vu() {
            var e = i["useState"](Object.create(null))
              , n = e[1];
            var t = i["useCallback"]((function() {
                n(Object.create(null))
            }
            ), [n]);
            return t
        }
        function gu(e) {
            var n = this;
            var t = vu();
            var a = function(e) {
                if (e === void 0) {
                    e = false
                }
                if (e) {
                    r.current.getService(u.GraphinDataService).refreshData()
                }
                t()
            };
            var r = i["useRef"](new Ki(a));
            var o = i["useRef"]();
            i["useEffect"]((function() {
                (function() {
                    return hu(n, void 0, void 0, (function() {
                        return mu(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                if (!r.current)
                                    return [2];
                                r.current.onUpdated((function() {
                                    var e = r.current.getService(u.LogService);
                                    e.debug(_u, "main process is updated");
                                    a(true)
                                }
                                ));
                                r.current.onActivated((function() {
                                    var n = r.current.getService(u.LogService);
                                    n.debug(_u, "main process is activated");
                                    e.onReady && e.onReady(r.current.getService(u.UserAccessedDataService).data);
                                    a(true)
                                }
                                ));
                                if (!r.current.isActivated)
                                    return [3, 2];
                                return [4, r.current.update(o.current, e.id, e.instanceId, e.plugins, e.options, e.data)];
                            case 1:
                                return [2, n.sent()];
                            case 2:
                                return [4, r.current.active(o.current, e.id, e.instanceId, e.plugins || [new Qr, new du, new io, new fu, new _o, new au, new fo, new co, new bo, new eu, new vc, new Nc, new ad, new dd["a"], new Vr], e.options, e.data)];
                            case 3:
                                n.sent();
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )()
            }
            ), [e.id, e.plugins, e.options, e.data]);
            i["useEffect"]((function() {
                return function() {
                    return function() {
                        return hu(n, void 0, void 0, (function() {
                            var e;
                            var n;
                            return mu(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    e = r.current.getService(u.LogService);
                                    e.debug(_u, "main process is deactivating");
                                    return [4, (n = r.current) === null || n === void 0 ? void 0 : n.deactivate()];
                                case 1:
                                    t.sent();
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }()
                }
            }
            ), []);
            return [r, o]
        }
        function yu(e) {
            var n;
            return (n = e) === null || n === void 0 ? void 0 : n.getService(u.OptionService)
        }
        function bu() {
            return i["createElement"]("div", {
                className: "graph-analyser"
            })
        }
        function wu(e) {
            var n = gu(e)
              , t = n[0]
              , a = n[1];
            var r = yu(t.current);
            if (!t.current)
                return i["createElement"](bu, null);
            return i["createElement"]("div", {
                className: "graph-analyser",
                ref: a
            }, i["createElement"](kr, {
                main: t.current
            }, r.get("panel.search") && i["createElement"](pa, {
                main: t.current
            }), r.get("panel.control") && i["createElement"](_r, {
                main: t.current
            }), r.get("panel.statistics") && i["createElement"](Fr, {
                main: t.current
            }), r.get("panel.preview") && i["createElement"](cd, {
                main: t.current
            }), i["createElement"](Zd, {
                main: t.current
            })))
        }
        var Eu = n["o"] = wu
    },
    886: function(e, n, t) {
        "use strict";
        var i = t(1);
        var a = t(3);
        var r = t(12);
        var o = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var c = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var d = function() {
            function e(e) {
                this._core = e
            }
            e.prototype.getVertexOutCount = function(e) {
                return o(this, void 0, void 0, (function() {
                    var n, t;
                    return c(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            n = this._core.core.getData().instance;
                            return [4, this._core.utils.http.get("/rest/analysis/vertex/out/num", {
                                instanceId: n.instanceId,
                                instanceName: n.name,
                                vertexId: e
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            e.prototype.getVertexOutDistribution = function(e) {
                return o(this, void 0, void 0, (function() {
                    var n, t;
                    return c(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            n = this._core.core.getData().instance;
                            return [4, this._core.utils.http.get("/rest/analysis/vertex/out/distribution", {
                                instanceId: n.instanceId,
                                instanceName: n.name,
                                vertexId: e
                            })];
                        case 1:
                            t = i.sent();
                            return [2, t]
                        }
                    }
                    ))
                }
                ))
            }
            ;
            return e
        }();
        var u = d;
        var l = t(8);
        function s(e) {
            var n = i["useState"]()
              , t = n[0]
              , o = n[1];
            var c = function() {
                return i["createElement"]("div", {
                    className: "ga-preview-node-selection-panel-property-title"
                }, a["get"]("property").d("属性"), i["createElement"]("div", {
                    onClick: function() {
                        return o(!t)
                    },
                    className: "ga-preview-node-selection-panel-property-title-action"
                }, i["createElement"]("i", {
                    className: "gonggongtubiao " + (t ? "jiantouxiangxia" : "jiantouxiangshang")
                })))
            };
            var d = function() {
                if (t)
                    return;
                if (!e.current)
                    return i["createElement"]("div", {
                        className: "ga-preview-node-selection-panel-property-content"
                    });
                var n = e.current.facade.tooltip;
                var a = r["map"](e.current.data.properties, (function(e, n) {
                    return {
                        value: e,
                        key: n
                    }
                }
                )).filter((function(e) {
                    var t = e.key;
                    return n ? n.find((function(e) {
                        return e === t
                    }
                    )) : true
                }
                )).map((function(e) {
                    var n = e.value
                      , t = e.key;
                    return i["createElement"](l["Grid"].Row, {
                        key: t
                    }, i["createElement"](l["Grid"].Col, {
                        span: 8
                    }, t), i["createElement"](l["Grid"].Col, {
                        span: 16
                    }, n))
                }
                ));
                return i["createElement"]("div", {
                    className: "ga-preview-node-selection-panel-property-content"
                }, a)
            };
            return i["createElement"]("div", {
                className: "ga-preview-node-selection-panel-property"
            }, c(), d())
        }
        var f = t(860);
        var p = t.n(f);
        var h = undefined && undefined.__assign || function() {
            h = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return h.apply(this, arguments)
        }
        ;
        var m = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var _ = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        var v = l["Overlay"].Popup;
        function g(e) {
            var n = i["useRef"]();
            var t = i["useRef"]();
            i["useEffect"]((function() {
                if (!t.current) {
                    t.current = new p.a.Chart({
                        container: n.current,
                        width: e.mini ? 360 : 1e3,
                        height: e.mini ? 200 : 552,
                        padding: [40, "auto", 40, "auto"]
                    });
                    t.current.tooltip({
                        showTitle: false
                    });
                    t.current.point().position("label*count").size(10).shape("circle").tooltip("label*count")
                }
                t.current.source(e.data);
                t.current.render()
            }
            ), [e.data]);
            if (!e.data)
                return null;
            return i["createElement"]("div", {
                ref: n,
                className: "ga-preview-node-selection-distribution-panel-body-chart"
            })
        }
        function y(e, n, t) {
            var a = this;
            var r = i["useState"]({
                neighborList: []
            })
              , o = r[0]
              , c = r[1];
            i["useEffect"]((function() {
                var i = false;
                (function() {
                    return m(a, void 0, void 0, (function() {
                        var i, a, r;
                        return _(this, (function(o) {
                            switch (o.label) {
                            case 0:
                                t(true);
                                o.label = 1;
                            case 1:
                                o.trys.push([1, 3, 4, 5]);
                                i = new u(n);
                                return [4, i.getVertexOutDistribution(e)];
                            case 2:
                                a = o.sent();
                                c(a);
                                return [3, 5];
                            case 3:
                                r = o.sent();
                                return [3, 5];
                            case 4:
                                t(false);
                                return [7];
                            case 5:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )();
                return function() {
                    i = true
                }
            }
            ), [e]);
            return o
        }
        function b(e) {
            var n = i["useState"](false)
              , t = n[0]
              , r = n[1];
            var o = i["useState"](false)
              , c = o[0]
              , d = o[1];
            var u = y(e.id, e.core, d).neighborList;
            if (!e.visible)
                return;
            var s = "ga-preview-node-selection-distribution-panel " + (t ? "ga-fullscreen" : "ga-mini-screen");
            var f = t ? {
                align: false,
                hasMask: true,
                safeNode: e.safeNode,
                disableScroll: true
            } : {
                align: "tl tr",
                target: e.target,
                safeNode: e.safeNode
            };
            var p = u.map((function(e) {
                return {
                    label: e.edgeLabel + "边的" + e.vertexLabel + "点",
                    count: e.count
                }
            }
            ));
            return i["createElement"](v, h({
                visible: true,
                onRequestClose: e.onClose
            }, f, {
                key: t.toString()
            }), i["createElement"]("div", {
                className: s
            }, i["createElement"]("div", {
                className: "ga-preview-node-selection-distribution-panel-title"
            }, a["get"]("graph-analyser.preview.plugin.node.selection.description.title").d("下游节点分布"), i["createElement"]("div", {
                onClick: e.onClose
            }, i["createElement"]("i", {
                className: "gonggongtubiao guanbi"
            }))), i["createElement"]("div", {
                className: "ga-preview-node-selection-distribution-panel-body"
            }, i["createElement"](l["Loading"], {
                visible: c,
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%"
                }
            }, i["createElement"]("div", {
                onClick: r.bind(undefined, !t),
                className: "ga-preview-node-selection-distribution-panel-body-fullscreen"
            }, i["createElement"]("i", {
                className: "gonggongtubiao " + (t ? "shitu-tuichuquanping" : "shitu-jinruquanping")
            })), i["createElement"](g, {
                data: p,
                mini: !t
            })))))
        }
        var w = b;
        var E = undefined && undefined.__assign || function() {
            E = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return E.apply(this, arguments)
        }
        ;
        var S = undefined && undefined.__awaiter || function(e, n, t, i) {
            function a(e) {
                return e instanceof t ? e : new t((function(n) {
                    n(e)
                }
                ))
            }
            return new (t || (t = Promise))((function(t, r) {
                function o(e) {
                    try {
                        d(i.next(e))
                    } catch (e) {
                        r(e)
                    }
                }
                function c(e) {
                    try {
                        d(i["throw"](e))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(e) {
                    e.done ? t(e.value) : a(e.value).then(o, c)
                }
                d((i = i.apply(e, n || [])).next())
            }
            ))
        }
        ;
        var k = undefined && undefined.__generator || function(e, n) {
            var t = {
                label: 0,
                sent: function() {
                    if (r[0] & 1)
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            }, i, a, r, o;
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            },
            typeof Symbol === "function" && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function c(e) {
                return function(n) {
                    return d([e, n])
                }
            }
            function d(o) {
                if (i)
                    throw new TypeError("Generator is already executing.");
                while (t)
                    try {
                        if (i = 1,
                        a && (r = o[0] & 2 ? a["return"] : o[0] ? a["throw"] || ((r = a["return"]) && r.call(a),
                        0) : a.next) && !(r = r.call(a, o[1])).done)
                            return r;
                        if (a = 0,
                        r)
                            o = [o[0] & 2, r.value];
                        switch (o[0]) {
                        case 0:
                        case 1:
                            r = o;
                            break;
                        case 4:
                            t.label++;
                            return {
                                value: o[1],
                                done: false
                            };
                        case 5:
                            t.label++;
                            a = o[1];
                            o = [0];
                            continue;
                        case 7:
                            o = t.ops.pop();
                            t.trys.pop();
                            continue;
                        default:
                            if (!(r = t.trys,
                            r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
                                t = 0;
                                continue
                            }
                            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
                                t.label = o[1];
                                break
                            }
                            if (o[0] === 6 && t.label < r[1]) {
                                t.label = r[1];
                                r = o;
                                break
                            }
                            if (r && t.label < r[2]) {
                                t.label = r[2];
                                t.ops.push(o);
                                break
                            }
                            if (r[2])
                                t.ops.pop();
                            t.trys.pop();
                            continue
                        }
                        o = n.call(e, t)
                    } catch (e) {
                        o = [6, e];
                        a = 0
                    } finally {
                        i = r = 0
                    }
                if (o[0] & 5)
                    throw o[1];
                return {
                    value: o[0] ? o[1] : void 0,
                    done: true
                }
            }
        }
        ;
        function x(e, n) {
            var t = this;
            var a = i["useMemo"]((function() {
                return new u(e)
            }
            ), []);
            var r = i["useState"](new Map)
              , o = r[0]
              , c = r[1];
            i["useEffect"]((function() {
                var e = false;
                (function() {
                    return S(t, void 0, void 0, (function() {
                        var t, i;
                        return k(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                r.trys.push([0, 2, , 3]);
                                if (o.has(n))
                                    return [2];
                                return [4, a.getVertexOutCount(n)];
                            case 1:
                                t = r.sent();
                                if (e)
                                    return [2];
                                o.set(n, t);
                                c(new Map(o));
                                return [3, 3];
                            case 2:
                                i = r.sent();
                                console.error(i);
                                return [3, 3];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )();
                return function() {
                    e = true
                }
            }
            ), [n]);
            return o
        }
        function O(e) {
            var n = e.item
              , t = e.current;
            var o = x(e.core, e.current);
            var c = o.get(e.current);
            var d = i["createRef"]();
            var u = !r["isNil"](c) && i["createElement"](i["Fragment"], null, i["createElement"]("span", {
                className: "ga-preview-node-selection-panel-information"
            }, a["get"]("graph-analyser.preview.plugin.node.downstream.title", {
                currentDownstream: c
            }).d(c + "个下游节点")), i["createElement"]("span", {
                onClick: function() {
                    return e.showDistribution(n.id)
                }
            }, i["createElement"]("i", {
                className: "gonggongtubiao kapian-baobiao"
            })));
            return i["createElement"]("div", {
                key: n.id,
                className: "ga-preview-node-selection-panel-node-item " + (t === n.id && "ga-preview-node-selection-panel-node-item-current"),
                ref: d
            }, i["createElement"]("div", {
                onClick: e.onSelected.bind(undefined, n)
            }, i["createElement"]("span", null, i["createElement"]("i", {
                className: "gonggongtubiao dian"
            })), i["createElement"]("span", null, n.label), i["createElement"]("span", null, n.data.schema.label)), i["createElement"]("div", null, u), e.distribution === n.id && i["createElement"](w, {
                core: e.core,
                target: function() {
                    return d.current
                },
                safeNode: function() {
                    return d.current
                },
                visible: true,
                onClose: function() {
                    e.showDistribution(null)
                },
                id: n.id
            }))
        }
        function F(e) {
            var n = i["useState"]()
              , t = n[0]
              , r = n[1];
            var o = function() {
                var n = e.items.length;
                return i["createElement"]("div", {
                    className: "ga-preview-node-selection-panel-title"
                }, a["get"]("graph-analyser.preview.plugin.node.selection.title", {
                    length: n
                }).d("选中" + n + "个节点"))
            };
            var c = function(n, a) {
                var o = n.map((function(n) {
                    return i["createElement"](O, {
                        current: a,
                        item: n,
                        key: n.id,
                        core: e.core,
                        onSelected: e.onSelected,
                        distribution: t,
                        showDistribution: r
                    })
                }
                ));
                return i["createElement"]("div", {
                    className: "ga-preview-node-selection-panel-list"
                }, o)
            };
            var d = function(n) {
                var t = [i["createElement"]("div", {
                    key: "expand",
                    onClick: e.onExpand.bind(undefined, n.id)
                }, i["createElement"]("i", {
                    className: "gongggongtubiao shitu-jinruquanping"
                }), a["get"]("expand").d("扩展")), i["createElement"]("div", {
                    key: "fold",
                    onClick: e.onFolder.bind(undefined, n.id)
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-tuichuquanping"
                }), a["get"]("folder").d("收起")), n.facade.hidden ? i["createElement"]("div", {
                    key: "hide",
                    onClick: e.onHide.bind(undefined, n.id, false)
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-yulan"
                }), a["get"]("show").d("显示")) : i["createElement"]("div", {
                    key: "show",
                    onClick: e.onHide.bind(undefined, n.id, false)
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-yulanbukejian"
                }), a["get"]("hide").d("隐藏")), i["createElement"]("div", {
                    key: "pin",
                    onClick: e.onPin.bind(undefined, n.id, n.facade.isPined)
                }, i["createElement"]("i", {
                    className: "gonggongtubiao shitu-tuichuquanping"
                }), a["get"]("pin").d("Pin"))];
                return i["createElement"]("div", {
                    className: "ga-preview-node-selection-panel-actions"
                }, t)
            };
            return i["createElement"]("div", {
                className: "ga-preview-node-selection-panel"
            }, o(), c(e.data.nodes.filter((function(n) {
                return e.items.find((function(e) {
                    return e === n.id
                }
                ))
            }
            )), e.current.id))
        }
        function N(e) {
            return function n(t) {
                var a = i["useState"](t.items[0])
                  , r = a[0]
                  , o = a[1];
                i["useEffect"]((function() {
                    var e;
                    if (t.items.find((function(e) {
                        return e === r
                    }
                    )))
                        return;
                    o((e = t) === null || e === void 0 ? void 0 : e.items[0])
                }
                ), [t.items]);
                if (t.items.length <= 0)
                    return;
                return i["createElement"](i["Fragment"], null, i["createElement"](F, E({}, t, {
                    current: t.data.nodes.find((function(e) {
                        return e.id === r
                    }
                    )),
                    core: e,
                    onSelected: function(e) {
                        return o(e.id)
                    },
                    onExpand: function() {},
                    onFolder: function() {},
                    onHide: function() {},
                    onPin: function() {}
                })), i["createElement"](s, E({}, t, {
                    current: t.data.nodes.find((function(e) {
                        return e.id === r
                    }
                    )),
                    core: e
                })))
            }
        }
        var D = undefined && undefined.__assign || function() {
            D = Object.assign || function(e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) {
                    n = arguments[t];
                    for (var a in n)
                        if (Object.prototype.hasOwnProperty.call(n, a))
                            e[a] = n[a]
                }
                return e
            }
            ;
            return D.apply(this, arguments)
        }
        ;
        function j(e) {
            var n;
            var t = function() {
                var n = e.items.length;
                return i["createElement"]("div", {
                    className: "ga-preview-edge-selection-panel-title"
                }, a["get"]("graph-analyser.preview.plugin.node.selection.title", {
                    length: n
                }).d("选中" + n + "个节点"))
            };
            var r = function(n, t) {
                var a = n.map((function(n) {
                    var a = e.data.nodes.find((function(e) {
                        return e.id === n.data.srcId
                    }
                    ));
                    var r = e.data.nodes.find((function(e) {
                        return e.id === n.data.dstId
                    }
                    ));
                    var o = function(e) {
                        return i["createElement"]("div", {
                            className: "ga-preview-edge-selection-panel-content-description-node"
                        }, i["createElement"]("span", null, i["createElement"]("i", {
                            className: "gonggongtubiao dian " + e.data.icon
                        })), i["createElement"]("span", null, e.label), i["createElement"]("span", null, e.data.schema.label))
                    };
                    var c = function(e) {
                        return i["createElement"]("div", {
                            className: "ga-preview-edge-selection-panel-content-description-edge"
                        }, i["createElement"]("div", null, i["createElement"]("i", {
                            className: "gonggongtubiao huanbishangzhang"
                        })), i["createElement"]("div", null, e.label + " to"))
                    };
                    return i["createElement"]("div", {
                        className: "ga-preview-edge-selection-panel-content " + (t === n.id && "ga-preview-edge-selection-panel-content-selected"),
                        key: n.id
                    }, i["createElement"]("div", {
                        className: "ga-preview-edge-selection-panel-content-flag"
                    }), i["createElement"]("div", {
                        className: "ga-preview-edge-selection-panel-content-description"
                    }, o(a), c(n), o(r)))
                }
                ));
                return a
            };
            return i["createElement"]("div", {
                className: "ga-preview-edge-selection-panel"
            }, t(), r(e.data.edges.filter((function(n) {
                return e.items.find((function(e) {
                    return e === n.id
                }
                ))
            }
            )), (n = e.current) === null || n === void 0 ? void 0 : n.id))
        }
        function P(e) {
            return function n(t) {
                var a = i["useState"](t.items[0])
                  , r = a[0]
                  , o = a[1];
                i["useEffect"]((function() {
                    var e;
                    if (t.data.edges.find((function(e) {
                        return e.id === r
                    }
                    )))
                        return;
                    o((e = t) === null || e === void 0 ? void 0 : e.items[0])
                }
                ), [t.items]);
                if (t.items.length <= 0)
                    return;
                return i["createElement"](i["Fragment"], null, i["createElement"](j, D({}, t, {
                    core: e,
                    current: t.data.edges.find((function(e) {
                        return e.id === r
                    }
                    )),
                    onSelected: function(e) {
                        return o(e.id)
                    }
                })), i["createElement"](s, D({}, t, {
                    core: e,
                    current: t.data.edges.find((function(e) {
                        return e.id === r
                    }
                    ))
                })))
            }
        }
        var T = t(926);
        var I = function() {
            function e(e) {
                this._core = e;
                this.name = "PreviewPanel"
            }
            e.prototype.provide = function() {
                return {
                    node: N(this._core),
                    edge: P(this._core)
                }
            }
            ;
            return e
        }();
        var C = function() {
            function e() {
                this.name = "preview-panel-plugin"
            }
            e.prototype.activate = function(e) {
                e.graph.providePreviewPanel(new I(e))
            }
            ;
            e.prototype.deactivate = function() {}
            ;
            return e
        }();
        var L = n["a"] = C
    },
    887: function(e, n, t) {
        var i, a;
        /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        (function() {
            "use strict";
            var t = {}.hasOwnProperty;
            function r() {
                var e = [];
                for (var n = 0; n < arguments.length; n++) {
                    var i = arguments[n];
                    if (!i)
                        continue;
                    var a = typeof i;
                    if (a === "string" || a === "number") {
                        e.push(this && this[i] || i)
                    } else if (Array.isArray(i)) {
                        e.push(r.apply(this, i))
                    } else if (a === "object") {
                        for (var o in i) {
                            if (t.call(i, o) && i[o]) {
                                e.push(this && this[o] || o)
                            }
                        }
                    }
                }
                return e.join(" ")
            }
            if (true && e.exports) {
                r.default = r;
                e.exports = r
            } else if (true) {
                !(i = [],
                a = function() {
                    return r
                }
                .apply(n, i),
                a !== undefined && (e.exports = a))
            } else {}
        }
        )()
    },
    888: function(e, n, t) {},
    890: function(e, n, t) {
        "use strict";
        /** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = "function" === typeof Symbol && Symbol.for
          , a = i ? Symbol.for("react.element") : 60103
          , r = i ? Symbol.for("react.portal") : 60106
          , o = i ? Symbol.for("react.fragment") : 60107
          , c = i ? Symbol.for("react.strict_mode") : 60108
          , d = i ? Symbol.for("react.profiler") : 60114
          , u = i ? Symbol.for("react.provider") : 60109
          , l = i ? Symbol.for("react.context") : 60110
          , s = i ? Symbol.for("react.async_mode") : 60111
          , f = i ? Symbol.for("react.concurrent_mode") : 60111
          , p = i ? Symbol.for("react.forward_ref") : 60112
          , h = i ? Symbol.for("react.suspense") : 60113
          , m = i ? Symbol.for("react.suspense_list") : 60120
          , _ = i ? Symbol.for("react.memo") : 60115
          , v = i ? Symbol.for("react.lazy") : 60116
          , g = i ? Symbol.for("react.fundamental") : 60117
          , y = i ? Symbol.for("react.responder") : 60118
          , b = i ? Symbol.for("react.scope") : 60119;
        function w(e) {
            if ("object" === typeof e && null !== e) {
                var n = e.$$typeof;
                switch (n) {
                case a:
                    switch (e = e.type,
                    e) {
                    case s:
                    case f:
                    case o:
                    case d:
                    case c:
                    case h:
                        return e;
                    default:
                        switch (e = e && e.$$typeof,
                        e) {
                        case l:
                        case p:
                        case v:
                        case _:
                        case u:
                            return e;
                        default:
                            return n
                        }
                    }
                case r:
                    return n
                }
            }
        }
        function E(e) {
            return w(e) === f
        }
        n.typeOf = w;
        n.AsyncMode = s;
        n.ConcurrentMode = f;
        n.ContextConsumer = l;
        n.ContextProvider = u;
        n.Element = a;
        n.ForwardRef = p;
        n.Fragment = o;
        n.Lazy = v;
        n.Memo = _;
        n.Portal = r;
        n.Profiler = d;
        n.StrictMode = c;
        n.Suspense = h;
        n.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === o || e === f || e === d || e === c || e === h || e === m || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === l || e.$$typeof === p || e.$$typeof === g || e.$$typeof === y || e.$$typeof === b)
        }
        ;
        n.isAsyncMode = function(e) {
            return E(e) || w(e) === s
        }
        ;
        n.isConcurrentMode = E;
        n.isContextConsumer = function(e) {
            return w(e) === l
        }
        ;
        n.isContextProvider = function(e) {
            return w(e) === u
        }
        ;
        n.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === a
        }
        ;
        n.isForwardRef = function(e) {
            return w(e) === p
        }
        ;
        n.isFragment = function(e) {
            return w(e) === o
        }
        ;
        n.isLazy = function(e) {
            return w(e) === v
        }
        ;
        n.isMemo = function(e) {
            return w(e) === _
        }
        ;
        n.isPortal = function(e) {
            return w(e) === r
        }
        ;
        n.isProfiler = function(e) {
            return w(e) === d
        }
        ;
        n.isStrictMode = function(e) {
            return w(e) === c
        }
        ;
        n.isSuspense = function(e) {
            return w(e) === h
        }
    },
    891: function(e, n) {
        function t(e, n) {
            e.prototype = Object.create(n.prototype);
            e.prototype.constructor = e;
            e.__proto__ = n
        }
        e.exports = t
    },
    892: function(e, n, t) {
        "use strict";
        (function(n) {
            var t = "__global_unique_id__";
            e.exports = function() {
                return n[t] = (n[t] || 0) + 1
            }
        }
        ).call(this, t(52))
    },
    893: function(e, n) {
        e.exports = Array.isArray || function(e) {
            return Object.prototype.toString.call(e) == "[object Array]"
        }
    },
    896: function(e) {
        e.exports = JSON.parse('{"id":"685257","name":"DW-公共图标","font_family":"gonggongtubiao","css_prefix_text":"","description":"所有有可能共用到其他功能产品的图标，都上传至此","glyphs":[{"icon_id":"389200","name":"point","font_class":"point","unicode":"e6a3","unicode_decimal":59043},{"icon_id":"3056915","name":"阿里旺旺","font_class":"aliwangwang","unicode":"e79b","unicode_decimal":59291},{"icon_id":"4757167","name":"成功","font_class":"chenggong","unicode":"e646","unicode_decimal":58950},{"icon_id":"4757168","name":"介绍","font_class":"jieshao","unicode":"e647","unicode_decimal":58951},{"icon_id":"4757169","name":"警告","font_class":"jinggao","unicode":"e648","unicode_decimal":58952},{"icon_id":"4757170","name":"减少项","font_class":"jianshaoxiang","unicode":"e649","unicode_decimal":58953},{"icon_id":"4757171","name":"出错","font_class":"chucuo","unicode":"e64a","unicode_decimal":58954},{"icon_id":"4757172","name":"变慢","font_class":"bianman","unicode":"e64b","unicode_decimal":58955},{"icon_id":"4757173","name":"删除项","font_class":"shanchuxiang","unicode":"e64c","unicode_decimal":58956},{"icon_id":"4757175","name":"日历","font_class":"rili","unicode":"e64e","unicode_decimal":58958},{"icon_id":"4757176","name":"增加项","font_class":"zengjiaxiang","unicode":"e64f","unicode_decimal":58959},{"icon_id":"4757177","name":"时间","font_class":"shijian","unicode":"e650","unicode_decimal":58960},{"icon_id":"4757178","name":"清除选择","font_class":"qingchuxuanze","unicode":"e651","unicode_decimal":58961},{"icon_id":"4782460","name":"编辑","font_class":"bianji","unicode":"e652","unicode_decimal":58962},{"icon_id":"4801020","name":"灯泡","font_class":"dengpao","unicode":"e653","unicode_decimal":58963},{"icon_id":"4802691","name":"搜索","font_class":"sousuo","unicode":"e656","unicode_decimal":58966},{"icon_id":"4803981","name":"箭头向右","font_class":"jiantouxiangyou","unicode":"e664","unicode_decimal":58980},{"icon_id":"4803982","name":"箭头向下","font_class":"jiantouxiangxia","unicode":"e665","unicode_decimal":58981},{"icon_id":"4803983","name":"箭头向左","font_class":"jiantouxiangzuo","unicode":"e666","unicode_decimal":58982},{"icon_id":"4803984","name":"箭头向上","font_class":"jiantouxiangshang","unicode":"e667","unicode_decimal":58983},{"icon_id":"4811776","name":"视图-缩小","font_class":"shitu-suoxiao","unicode":"e668","unicode_decimal":58984},{"icon_id":"4811779","name":"视图-放大","font_class":"shitu-fangda","unicode":"e66b","unicode_decimal":58987},{"icon_id":"4811780","name":"视图-刷新","font_class":"shitu-shuaxin","unicode":"e66c","unicode_decimal":58988},{"icon_id":"4811781","name":"视图-适配窗口","font_class":"shitu-shipeichuangkou","unicode":"e66d","unicode_decimal":58989},{"icon_id":"4811862","name":"视图-退出全屏","font_class":"shitu-tuichuquanping","unicode":"e66e","unicode_decimal":58990},{"icon_id":"4811943","name":"视图-进入全屏","font_class":"shitu-jinruquanping","unicode":"e66a","unicode_decimal":58986},{"icon_id":"4812225","name":"视图-搜索","font_class":"shitu-sousuo","unicode":"e669","unicode_decimal":58985},{"icon_id":"4816611","name":"内容展开","font_class":"neirongzhankai","unicode":"e66f","unicode_decimal":58991},{"icon_id":"4816612","name":"内容收起","font_class":"neirongshouqi","unicode":"e670","unicode_decimal":58992},{"icon_id":"4816613","name":"内容全屏","font_class":"neirongquanping","unicode":"e671","unicode_decimal":58993},{"icon_id":"4816894","name":"关闭","font_class":"guanbi","unicode":"e673","unicode_decimal":58995},{"icon_id":"4954145","name":"运行","font_class":"yunxing","unicode":"e684","unicode_decimal":59012},{"icon_id":"4954146","name":"暂停","font_class":"zanting","unicode":"e685","unicode_decimal":59013},{"icon_id":"5008826","name":"项目标识","font_class":"xiangmubiaoshi","unicode":"e691","unicode_decimal":59025},{"icon_id":"5026983","name":"发布","font_class":"fabu","unicode":"e692","unicode_decimal":59026},{"icon_id":"5035838","name":"内容退出全屏","font_class":"neirongtuichuquanping","unicode":"e693","unicode_decimal":59027},{"icon_id":"5036642","name":"双箭头向下","font_class":"shuangjiantouxiangxia","unicode":"e694","unicode_decimal":59028},{"icon_id":"5036643","name":"双箭头向上","font_class":"shuangjiantouxiangshang","unicode":"e695","unicode_decimal":59029},{"icon_id":"5036644","name":"双箭头向右","font_class":"shuangjiantouxiangyou","unicode":"e696","unicode_decimal":59030},{"icon_id":"5036645","name":"双箭头向左","font_class":"shuangjiantouxiangzuo","unicode":"e697","unicode_decimal":59031},{"icon_id":"5043792","name":"提示-成功","font_class":"tishi-chenggong","unicode":"e698","unicode_decimal":59032},{"icon_id":"5043793","name":"提示-帮助","font_class":"tishi-bangzhu","unicode":"e699","unicode_decimal":59033},{"icon_id":"5043794","name":"提示-警告","font_class":"tishi-jinggao","unicode":"e69a","unicode_decimal":59034},{"icon_id":"5043795","name":"提示-提示","font_class":"tishi-tishi","unicode":"e69b","unicode_decimal":59035},{"icon_id":"5043796","name":"提示-出错","font_class":"tishi-chucuo","unicode":"e69c","unicode_decimal":59036},{"icon_id":"5043966","name":"提示-出错-填色版","font_class":"tishi-chucuo-tianseban","unicode":"e69d","unicode_decimal":59037},{"icon_id":"5043967","name":"提示-成功-填色版","font_class":"tishi-chenggong-tianseban","unicode":"e69e","unicode_decimal":59038},{"icon_id":"5043968","name":"提示-帮助-填色版","font_class":"tishi-bangzhu-tianseban","unicode":"e69f","unicode_decimal":59039},{"icon_id":"5043969","name":"提示-提示-填色版","font_class":"tishi-tishi-tianseban","unicode":"e6a0","unicode_decimal":59040},{"icon_id":"5043970","name":"提示-警告-填色版","font_class":"tishi-jinggao-tianseban","unicode":"e6a1","unicode_decimal":59041},{"icon_id":"5123710","name":"创建项目_发布","font_class":"triangle","unicode":"e87e","unicode_decimal":59518},{"icon_id":"5361886","name":"视图-1比1","font_class":"shitu-bi","unicode":"e6a5","unicode_decimal":59045},{"icon_id":"5361887","name":"视图-居中","font_class":"shitu-juzhong","unicode":"e6a6","unicode_decimal":59046},{"icon_id":"5389089","name":"刷新","font_class":"shuaxin","unicode":"e60e","unicode_decimal":58894},{"icon_id":"5442890","name":"提示-进行中-填色版","font_class":"tishi-jinxingzhong-tianseban","unicode":"e6c5","unicode_decimal":59077},{"icon_id":"6046100","name":"视图-成组","font_class":"shitu-chengzu","unicode":"e680","unicode_decimal":59008},{"icon_id":"6046101","name":"视图-框选","font_class":"shitu-kuangxuan","unicode":"e681","unicode_decimal":59009},{"icon_id":"6046102","name":"视图-拆分","font_class":"shitu-chaifen","unicode":"e682","unicode_decimal":59010},{"icon_id":"6200477","name":"视图-下一步","font_class":"shitu-xiayibu","unicode":"e6da","unicode_decimal":59098},{"icon_id":"6200478","name":"视图-上一步","font_class":"shitu-shangyibu","unicode":"e6db","unicode_decimal":59099},{"icon_id":"6564747","name":"减","font_class":"jian","unicode":"e6ec","unicode_decimal":59116},{"icon_id":"6564748","name":"加","font_class":"jia","unicode":"e6ed","unicode_decimal":59117},{"icon_id":"6564883","name":"去除选择","font_class":"quchuxuanze","unicode":"e6ee","unicode_decimal":59118},{"icon_id":"6564884","name":"选择","font_class":"xuanze","unicode":"e6ef","unicode_decimal":59119},{"icon_id":"6564971","name":"搜索","font_class":"sousuo1","unicode":"e6f0","unicode_decimal":59120},{"icon_id":"6819232","name":"复制","font_class":"fuzhi","unicode":"e6f6","unicode_decimal":59126},{"icon_id":"6906391","name":"提示-进行中-填色版","font_class":"tishi-jinhangzhong-tianseban","unicode":"e6fc","unicode_decimal":59132},{"icon_id":"6906392","name":"提示-DQC监控中-填色版","font_class":"tishi-DQCjiankongzhong-tianseban","unicode":"e6fd","unicode_decimal":59133},{"icon_id":"6906393","name":"提示-冻结中-填色版","font_class":"tishi-dongjiezhong-tianseban","unicode":"e6fe","unicode_decimal":59134},{"icon_id":"6906394","name":"提示-进行中","font_class":"tishi-jinhangzhong","unicode":"e6ff","unicode_decimal":59135},{"icon_id":"6906395","name":"提示-DQC监控中","font_class":"tishi-DQCjiankongzhong","unicode":"e700","unicode_decimal":59136},{"icon_id":"6906396","name":"提示-冻结中","font_class":"tishi-dongjiezhong","unicode":"e701","unicode_decimal":59137},{"icon_id":"6917734","name":"NEW","font_class":"NEW","unicode":"e702","unicode_decimal":59138},{"icon_id":"6970028","name":"问答","font_class":"wenda2","unicode":"e703","unicode_decimal":59139},{"icon_id":"7021240","name":"提示-空跑","font_class":"tishi-kongpao","unicode":"e706","unicode_decimal":59142},{"icon_id":"7021244","name":"提示-空跑-填色版","font_class":"tishi-kongpao-tianseban","unicode":"e704","unicode_decimal":59140},{"icon_id":"7021245","name":"提示-检测中","font_class":"tishi-jiancezhong","unicode":"e705","unicode_decimal":59141},{"icon_id":"7021246","name":"提示-检测中-填色版","font_class":"tishi-jiancezhong-tianseban","unicode":"e707","unicode_decimal":59143},{"icon_id":"7223259","name":"提示-空节点","font_class":"tishi-kongjiedian","unicode":"e68f","unicode_decimal":59023},{"icon_id":"7223261","name":"提示-空节点-填色","font_class":"tishi-kongjiedian1","unicode":"e690","unicode_decimal":59024},{"icon_id":"8407217","name":"视图-预览","font_class":"shitu-yulan","unicode":"e71f","unicode_decimal":59167},{"icon_id":"8915385","name":"地球","font_class":"diqiu","unicode":"e72a","unicode_decimal":59178},{"icon_id":"8957047","name":"锁-商业化","font_class":"suo-shangyehua","unicode":"e72c","unicode_decimal":59180},{"icon_id":"8989420","name":"卡片-新建模板","font_class":"qiapian-xinjianmoban","unicode":"e72d","unicode_decimal":59181},{"icon_id":"8989421","name":"卡片-新建代码工程","font_class":"qiapian-xinjiandaimagongcheng","unicode":"e72e","unicode_decimal":59182},{"icon_id":"9154164","name":"标签","font_class":"biaoqian","unicode":"e72f","unicode_decimal":59183},{"icon_id":"9185066","name":"卡片新建GIT上传","font_class":"kapianxinjianGITshangchuan","unicode":"e609","unicode_decimal":58889},{"icon_id":"9321868","name":"快速查询","font_class":"kuaisuchaxun","unicode":"e731","unicode_decimal":59185},{"icon_id":"9321870","name":"自定义","font_class":"zidingyi","unicode":"e732","unicode_decimal":59186},{"icon_id":"9321871","name":"文件树","font_class":"wenjianshu","unicode":"e733","unicode_decimal":59187},{"icon_id":"9321872","name":"状态圈","font_class":"zhuangtaiquan","unicode":"e734","unicode_decimal":59188},{"icon_id":"9340803","name":"铃铛","font_class":"lingdang","unicode":"e735","unicode_decimal":59189},{"icon_id":"9706236","name":"卡片-电子表格","font_class":"kapian-dianzibiaoge","unicode":"e632","unicode_decimal":58930},{"icon_id":"9706237","name":"卡片-报表","font_class":"kapian-baobiao","unicode":"e633","unicode_decimal":58931},{"icon_id":"9795409","name":"环比上涨","font_class":"huanbishangzhang","unicode":"e635","unicode_decimal":58933},{"icon_id":"9844605","name":"卡片-维表","font_class":"kapian-weibiao1","unicode":"e636","unicode_decimal":58934},{"icon_id":"9847224","name":"锁-商业化2","font_class":"suo-shangyehua2","unicode":"e736","unicode_decimal":59190},{"icon_id":"9944796","name":"任务","font_class":"renwu","unicode":"e644","unicode_decimal":58948},{"icon_id":"10250620","name":"提示-主键","font_class":"tishi-zhujian","unicode":"e654","unicode_decimal":58964},{"icon_id":"10526180","name":"Loading","font_class":"Loading","unicode":"e6a2","unicode_decimal":59042},{"icon_id":"10595669","name":"跳转","font_class":"tiaozhuan","unicode":"e74d","unicode_decimal":59213},{"icon_id":"10595675","name":"外链","font_class":"wailian","unicode":"e74e","unicode_decimal":59214},{"icon_id":"10621751","name":"视图-关闭标签","font_class":"shitu-guanbibiaoqian","unicode":"e6b5","unicode_decimal":59061},{"icon_id":"10621752","name":"视图-显示标签","font_class":"shitu-xianshibiaoqian","unicode":"e6b6","unicode_decimal":59062},{"icon_id":"10961645","name":"任务运维管理","font_class":"renwuyunweiguanli","unicode":"e674","unicode_decimal":58996},{"icon_id":"11429004","name":"设置","font_class":"shezhi","unicode":"e750","unicode_decimal":59216},{"icon_id":"11436368","name":"提示-检查不通过-填色板","font_class":"tishi-jianchabutongguo-tianseban","unicode":"e6bd","unicode_decimal":59069},{"icon_id":"11436369","name":"提示-检查不通过","font_class":"tishi-jianchabutongguo","unicode":"e6be","unicode_decimal":59070},{"icon_id":"11436370","name":"提示-检查通过","font_class":"tishi-jianchatongguo","unicode":"e6bf","unicode_decimal":59071},{"icon_id":"11436373","name":"提示-检查通过-填色板","font_class":"tishi-jianchatongguo-tianseban","unicode":"e6c2","unicode_decimal":59074},{"icon_id":"11437217","name":"提示-检查超时","font_class":"tishi-jianchachaoshi","unicode":"e601","unicode_decimal":58881},{"icon_id":"11437219","name":"提示-检查超时-填色板","font_class":"tishi-jianchachaoshi-tianseban","unicode":"e602","unicode_decimal":58882},{"icon_id":"11552317","name":"置顶","font_class":"zhiding","unicode":"e752","unicode_decimal":59218},{"icon_id":"11552318","name":"钉钉","font_class":"dingding","unicode":"e753","unicode_decimal":59219},{"icon_id":"11786352","name":"二维码","font_class":"erweima","unicode":"e754","unicode_decimal":59220},{"icon_id":"11904989","name":"更多","font_class":"gengduo","unicode":"e758","unicode_decimal":59224},{"icon_id":"11904990","name":"上传","font_class":"shangchuan","unicode":"e759","unicode_decimal":59225},{"icon_id":"11904991","name":"列","font_class":"lie","unicode":"e75a","unicode_decimal":59226},{"icon_id":"11904996","name":"下载","font_class":"xiazai","unicode":"e75b","unicode_decimal":59227},{"icon_id":"11904997","name":"在线联系","font_class":"zaixianlianxi","unicode":"e760","unicode_decimal":59232},{"icon_id":"11956909","name":"分享","font_class":"fenxiang","unicode":"e603","unicode_decimal":58883},{"icon_id":"11961832","name":"保存","font_class":"baocun","unicode":"e75c","unicode_decimal":59228},{"icon_id":"11961850","name":"图片","font_class":"tupian","unicode":"e75d","unicode_decimal":59229},{"icon_id":"12016349","name":"钉钉-填色版","font_class":"dingding-tianseban","unicode":"e75e","unicode_decimal":59230},{"icon_id":"12017155","name":"定位","font_class":"dingwei","unicode":"e75f","unicode_decimal":59231},{"icon_id":"12174069","name":"视图-预览不可见","font_class":"shitu-yulanbukejian","unicode":"e764","unicode_decimal":59236},{"icon_id":"12414323","name":"提示-加载-填色板","font_class":"tishi-jiazai-tianseban","unicode":"e6d5","unicode_decimal":59093},{"icon_id":"12671317","name":"回到原点","font_class":"huidaoyuandian","unicode":"e676","unicode_decimal":58998},{"icon_id":"12742783","name":"视图-变形","font_class":"shitu-bianxing","unicode":"e76a","unicode_decimal":59242},{"icon_id":"12866154","name":"视图-力导布局","font_class":"shitu-lidaobuju","unicode":"e611","unicode_decimal":58897},{"icon_id":"12866155","name":"视图-有向布局","font_class":"shitu-youxiangbuju","unicode":"e612","unicode_decimal":58898},{"icon_id":"12866157","name":"视图-横纵布局","font_class":"shitu-hengzongbuju","unicode":"e614","unicode_decimal":58900},{"icon_id":"12866158","name":"视图-圆形布局","font_class":"shitu-yuanxingbuju","unicode":"e615","unicode_decimal":58901},{"icon_id":"12866164","name":"缩放","font_class":"suofang","unicode":"e616","unicode_decimal":58902},{"icon_id":"12866165","name":"填充","font_class":"tianchong","unicode":"e617","unicode_decimal":58903},{"icon_id":"12866167","name":"定位","font_class":"dingwei1","unicode":"e619","unicode_decimal":58905},{"icon_id":"12866168","name":"虚实切换","font_class":"xushiqiehuan","unicode":"e61a","unicode_decimal":58906},{"icon_id":"12869488","name":"视图-迳向布局","font_class":"shitu-jingxiangbuju","unicode":"e618","unicode_decimal":58904},{"icon_id":"12869489","name":"信息","font_class":"xinxi","unicode":"e61b","unicode_decimal":58907},{"icon_id":"12890396","name":"切换","font_class":"qiehuan","unicode":"e774","unicode_decimal":59252},{"icon_id":"12893663","name":"指向肩头","font_class":"zhixiangjiantou","unicode":"e61c","unicode_decimal":58908},{"icon_id":"12893664","name":"边","font_class":"bian","unicode":"e61d","unicode_decimal":58909},{"icon_id":"12893665","name":"点","font_class":"dian","unicode":"e61e","unicode_decimal":58910},{"icon_id":"12905123","name":"回到原点","font_class":"huidaoyuandian1","unicode":"e6fb","unicode_decimal":59131}]}')
    },
    897: function(e, n, t) {},
    898: function(e, n, t) {},
    899: function(e, n, t) {},
    900: function(e, n, t) {},
    901: function(e, n, t) {},
    902: function(e, n, t) {},
    903: function(e, n, t) {},
    904: function(e) {
        e.exports = JSON.parse('{"id":"1633129","name":"Graph-基础","font_family":"graph-basic","css_prefix_text":"graph-basic-","description":"Graph-基础","glyphs":[{"icon_id":"12983554","name":"bar-0chart","font_class":"bar-chart","unicode":"e820","unicode_decimal":59424},{"icon_id":"12983555","name":"book","font_class":"book","unicode":"e821","unicode_decimal":59425},{"icon_id":"12983556","name":"check-0mark","font_class":"check-mark","unicode":"e822","unicode_decimal":59426},{"icon_id":"12983557","name":"checked","font_class":"checked","unicode":"e823","unicode_decimal":59427},{"icon_id":"12983558","name":"cancel","font_class":"cancel","unicode":"e824","unicode_decimal":59428},{"icon_id":"12983559","name":"bookmark","font_class":"bookmark","unicode":"e825","unicode_decimal":59429},{"icon_id":"12983560","name":"close","font_class":"close","unicode":"e826","unicode_decimal":59430},{"icon_id":"12983561","name":"add","font_class":"add","unicode":"e827","unicode_decimal":59431},{"icon_id":"12983562","name":"check","font_class":"check","unicode":"e828","unicode_decimal":59432},{"icon_id":"12983563","name":"communication-03","font_class":"communication-","unicode":"e829","unicode_decimal":59433},{"icon_id":"12983564","name":"communication-06","font_class":"communication-1","unicode":"e82a","unicode_decimal":59434},{"icon_id":"12983565","name":"communication-05","font_class":"communication-2","unicode":"e82b","unicode_decimal":59435},{"icon_id":"12983566","name":"cursor-02","font_class":"cursor-","unicode":"e82c","unicode_decimal":59436},{"icon_id":"12983567","name":"cursor-01","font_class":"cursor-1","unicode":"e82d","unicode_decimal":59437},{"icon_id":"12983568","name":"communication-01","font_class":"communication-3","unicode":"e82e","unicode_decimal":59438},{"icon_id":"12983569","name":"dislike-01","font_class":"dislike-","unicode":"e82f","unicode_decimal":59439},{"icon_id":"12983570","name":"communication","font_class":"communication","unicode":"e830","unicode_decimal":59440},{"icon_id":"12983571","name":"communication-02","font_class":"communication-4","unicode":"e831","unicode_decimal":59441},{"icon_id":"12983572","name":"cursor","font_class":"cursor","unicode":"e832","unicode_decimal":59442},{"icon_id":"12983573","name":"download-01","font_class":"download-","unicode":"e833","unicode_decimal":59443},{"icon_id":"12983574","name":"communication-04","font_class":"communication-5","unicode":"e834","unicode_decimal":59444},{"icon_id":"12983575","name":"down-0arrow","font_class":"down-arrow","unicode":"e835","unicode_decimal":59445},{"icon_id":"12983576","name":"dislike","font_class":"dislike","unicode":"e836","unicode_decimal":59446},{"icon_id":"12983577","name":"download","font_class":"download","unicode":"e837","unicode_decimal":59447},{"icon_id":"12983578","name":"download-02","font_class":"download-1","unicode":"e838","unicode_decimal":59448},{"icon_id":"12983579","name":"edit","font_class":"edit","unicode":"e839","unicode_decimal":59449},{"icon_id":"12983580","name":"delete","font_class":"delete","unicode":"e83a","unicode_decimal":59450},{"icon_id":"12983581","name":"expand-01","font_class":"expand-","unicode":"e83b","unicode_decimal":59451},{"icon_id":"12983582","name":"email-01","font_class":"email-","unicode":"e83c","unicode_decimal":59452},{"icon_id":"12983583","name":"forbidden","font_class":"forbidden","unicode":"e83d","unicode_decimal":59453},{"icon_id":"12983584","name":"expand","font_class":"expand","unicode":"e83e","unicode_decimal":59454},{"icon_id":"12983585","name":"export","font_class":"export","unicode":"e83f","unicode_decimal":59455},{"icon_id":"12983586","name":"email","font_class":"email","unicode":"e840","unicode_decimal":59456},{"icon_id":"12983587","name":"heart","font_class":"heart","unicode":"e841","unicode_decimal":59457},{"icon_id":"12983588","name":"heart-02","font_class":"heart-","unicode":"e842","unicode_decimal":59458},{"icon_id":"12983589","name":"import-01","font_class":"import-","unicode":"e843","unicode_decimal":59459},{"icon_id":"12983590","name":"heart-01","font_class":"heart-1","unicode":"e844","unicode_decimal":59460},{"icon_id":"12983591","name":"import","font_class":"import","unicode":"e845","unicode_decimal":59461},{"icon_id":"12983592","name":"import-02","font_class":"import-1","unicode":"e846","unicode_decimal":59462},{"icon_id":"12983593","name":"left-arrow-02","font_class":"left-arrow-","unicode":"e847","unicode_decimal":59463},{"icon_id":"12983594","name":"left-arrow-01","font_class":"left-arrow-1","unicode":"e848","unicode_decimal":59464},{"icon_id":"12983595","name":"like-01","font_class":"like-","unicode":"e849","unicode_decimal":59465},{"icon_id":"12983596","name":"levels-01","font_class":"levels-","unicode":"e84a","unicode_decimal":59466},{"icon_id":"12983597","name":"levels","font_class":"levels","unicode":"e84b","unicode_decimal":59467},{"icon_id":"12983598","name":"letter","font_class":"letter","unicode":"e84c","unicode_decimal":59468},{"icon_id":"12983599","name":"list-02","font_class":"list-","unicode":"e84d","unicode_decimal":59469},{"icon_id":"12983600","name":"like","font_class":"like","unicode":"e84e","unicode_decimal":59470},{"icon_id":"12983601","name":"list-01","font_class":"list-1","unicode":"e84f","unicode_decimal":59471},{"icon_id":"12983602","name":"login","font_class":"login","unicode":"e850","unicode_decimal":59472},{"icon_id":"12983603","name":"list-04","font_class":"list-2","unicode":"e851","unicode_decimal":59473},{"icon_id":"12983604","name":"list","font_class":"list","unicode":"e852","unicode_decimal":59474},{"icon_id":"12983605","name":"logout","font_class":"logout","unicode":"e853","unicode_decimal":59475},{"icon_id":"12983606","name":"list-03","font_class":"list-3","unicode":"e854","unicode_decimal":59476},{"icon_id":"12983607","name":"microphone","font_class":"microphone","unicode":"e855","unicode_decimal":59477},{"icon_id":"12983608","name":"minimize-01","font_class":"minimize-","unicode":"e856","unicode_decimal":59478},{"icon_id":"12983609","name":"more-01","font_class":"more-","unicode":"e857","unicode_decimal":59479},{"icon_id":"12983610","name":"minimize","font_class":"minimize","unicode":"e858","unicode_decimal":59480},{"icon_id":"12983611","name":"more","font_class":"more","unicode":"e859","unicode_decimal":59481},{"icon_id":"12983612","name":"megaphone","font_class":"megaphone","unicode":"e85a","unicode_decimal":59482},{"icon_id":"12983613","name":"next","font_class":"next","unicode":"e85b","unicode_decimal":59483},{"icon_id":"12983614","name":"next-01","font_class":"next-","unicode":"e85c","unicode_decimal":59484},{"icon_id":"12983615","name":"padlock-01","font_class":"padlock-","unicode":"e85d","unicode_decimal":59485},{"icon_id":"12983616","name":"padlock","font_class":"padlock","unicode":"e85e","unicode_decimal":59486},{"icon_id":"12983617","name":"minimize-02","font_class":"minimize-1","unicode":"e85f","unicode_decimal":59487},{"icon_id":"12983618","name":"minimize-03","font_class":"minimize-2","unicode":"e860","unicode_decimal":59488},{"icon_id":"12983619","name":"move-01","font_class":"move-","unicode":"e861","unicode_decimal":59489},{"icon_id":"12983620","name":"paper-0plane","font_class":"paper-plane","unicode":"e862","unicode_decimal":59490},{"icon_id":"12983621","name":"mute","font_class":"mute","unicode":"e863","unicode_decimal":59491},{"icon_id":"12983622","name":"move","font_class":"move","unicode":"e864","unicode_decimal":59492},{"icon_id":"12983623","name":"pie-chart-03","font_class":"pie-chart-","unicode":"e865","unicode_decimal":59493},{"icon_id":"12983624","name":"picture","font_class":"picture","unicode":"e866","unicode_decimal":59494},{"icon_id":"12983625","name":"pie-chart-01","font_class":"pie-chart-1","unicode":"e867","unicode_decimal":59495},{"icon_id":"12983626","name":"plus","font_class":"plus","unicode":"e868","unicode_decimal":59496},{"icon_id":"12983627","name":"previous","font_class":"previous","unicode":"e869","unicode_decimal":59497},{"icon_id":"12983628","name":"previous-01","font_class":"previous-","unicode":"e86a","unicode_decimal":59498},{"icon_id":"12983629","name":"repeat-04","font_class":"repeat-","unicode":"e86b","unicode_decimal":59499},{"icon_id":"12983630","name":"repeat-06","font_class":"repeat-1","unicode":"e86c","unicode_decimal":59500},{"icon_id":"12983631","name":"repeat-05","font_class":"repeat-2","unicode":"e86d","unicode_decimal":59501},{"icon_id":"12983632","name":"repeat-07","font_class":"repeat-3","unicode":"e86e","unicode_decimal":59502},{"icon_id":"12983633","name":"networking","font_class":"networking","unicode":"e86f","unicode_decimal":59503},{"icon_id":"12983634","name":"orientation","font_class":"orientation","unicode":"e870","unicode_decimal":59504},{"icon_id":"12983635","name":"organization","font_class":"organization","unicode":"e871","unicode_decimal":59505},{"icon_id":"12983636","name":"right-0arrow-01","font_class":"right-arrow-","unicode":"e872","unicode_decimal":59506},{"icon_id":"12983637","name":"menu-01","font_class":"menu-","unicode":"e873","unicode_decimal":59507},{"icon_id":"12983638","name":"search","font_class":"search","unicode":"e874","unicode_decimal":59508},{"icon_id":"12983639","name":"right-0arrow","font_class":"right-arrow","unicode":"e875","unicode_decimal":59509},{"icon_id":"12983640","name":"smartphone-01","font_class":"smartphone-","unicode":"e876","unicode_decimal":59510},{"icon_id":"12983641","name":"sort-01","font_class":"sort-","unicode":"e877","unicode_decimal":59511},{"icon_id":"12983642","name":"sort","font_class":"sort","unicode":"e878","unicode_decimal":59512},{"icon_id":"12983643","name":"speech-bubble-010","font_class":"speech-bubble-","unicode":"e879","unicode_decimal":59513},{"icon_id":"12983644","name":"pie-chart-02","font_class":"pie-chart-2","unicode":"e87a","unicode_decimal":59514},{"icon_id":"12983645","name":"photo-camera","font_class":"photo-camera","unicode":"e87b","unicode_decimal":59515},{"icon_id":"12983646","name":"repeat-03","font_class":"repeat-4","unicode":"e87c","unicode_decimal":59516},{"icon_id":"12983647","name":"placeholder","font_class":"placeholder","unicode":"e87d","unicode_decimal":59517},{"icon_id":"12983648","name":"repeat-01","font_class":"repeat-5","unicode":"e87e","unicode_decimal":59518},{"icon_id":"12983649","name":"repeat-02","font_class":"repeat-6","unicode":"e87f","unicode_decimal":59519},{"icon_id":"12983650","name":"speech-bubble-02","font_class":"speech-bubble-1","unicode":"e880","unicode_decimal":59520},{"icon_id":"12983651","name":"speech-bubble-05","font_class":"speech-bubble-2","unicode":"e881","unicode_decimal":59521},{"icon_id":"12983652","name":"speech-bubble-06","font_class":"speech-bubble-3","unicode":"e882","unicode_decimal":59522},{"icon_id":"12983653","name":"speech-bubble-01","font_class":"speech-bubble-4","unicode":"e883","unicode_decimal":59523},{"icon_id":"12983654","name":"repeat-09","font_class":"repeat-7","unicode":"e884","unicode_decimal":59524},{"icon_id":"12983655","name":"speech-bubble-03","font_class":"speech-bubble-5","unicode":"e885","unicode_decimal":59525},{"icon_id":"12983656","name":"save","font_class":"save","unicode":"e886","unicode_decimal":59526},{"icon_id":"12983657","name":"speaker","font_class":"speaker","unicode":"e887","unicode_decimal":59527},{"icon_id":"12983658","name":"repeat","font_class":"repeat","unicode":"e888","unicode_decimal":59528},{"icon_id":"12983659","name":"shuffle","font_class":"shuffle","unicode":"e889","unicode_decimal":59529},{"icon_id":"12983660","name":"repeat-08","font_class":"repeat-8","unicode":"e88a","unicode_decimal":59530},{"icon_id":"12983661","name":"speech-bubble-012","font_class":"speech-bubble-6","unicode":"e88b","unicode_decimal":59531},{"icon_id":"12983662","name":"speech-bubble-022","font_class":"speech-bubble-7","unicode":"e88c","unicode_decimal":59532},{"icon_id":"12983663","name":"speech-bubble-011","font_class":"speech-bubble-8","unicode":"e88d","unicode_decimal":59533},{"icon_id":"12983664","name":"speech-bubble-08","font_class":"speech-bubble-9","unicode":"e88e","unicode_decimal":59534},{"icon_id":"12983665","name":"menu-02","font_class":"menu-1","unicode":"e88f","unicode_decimal":59535},{"icon_id":"12983666","name":"speech-bubble-07","font_class":"speech-bubble-10","unicode":"e890","unicode_decimal":59536},{"icon_id":"12983667","name":"speech-bubble-04","font_class":"speech-bubble-11","unicode":"e891","unicode_decimal":59537},{"icon_id":"12983668","name":"speech-bubble-028","font_class":"speech-bubble-12","unicode":"e892","unicode_decimal":59538},{"icon_id":"12983669","name":"speech-bubble-015","font_class":"speech-bubble-13","unicode":"e893","unicode_decimal":59539},{"icon_id":"12983670","name":"stick-man","font_class":"stick-man","unicode":"e894","unicode_decimal":59540},{"icon_id":"12983671","name":"smartphone","font_class":"smartphone","unicode":"e895","unicode_decimal":59541},{"icon_id":"12983672","name":"speech-bubble-016","font_class":"speech-bubble-14","unicode":"e896","unicode_decimal":59542},{"icon_id":"12983673","name":"speech-bubble-021","font_class":"speech-bubble-15","unicode":"e897","unicode_decimal":59543},{"icon_id":"12983674","name":"speech-bubble-026","font_class":"speech-bubble-16","unicode":"e898","unicode_decimal":59544},{"icon_id":"12983675","name":"speech-bubble-018","font_class":"speech-bubble-17","unicode":"e899","unicode_decimal":59545},{"icon_id":"12983676","name":"speech-bubble-020","font_class":"speech-bubble-18","unicode":"e89a","unicode_decimal":59546},{"icon_id":"12983677","name":"speech-bubble-023","font_class":"speech-bubble-19","unicode":"e89b","unicode_decimal":59547},{"icon_id":"12983678","name":"speech-bubble-027","font_class":"speech-bubble-20","unicode":"e89c","unicode_decimal":59548},{"icon_id":"12983679","name":"speech-bubble-025","font_class":"speech-bubble-21","unicode":"e89d","unicode_decimal":59549},{"icon_id":"12983680","name":"speech-bubble-09","font_class":"speech-bubble-22","unicode":"e89e","unicode_decimal":59550},{"icon_id":"12983681","name":"speech-bubble-024","font_class":"speech-bubble-23","unicode":"e89f","unicode_decimal":59551},{"icon_id":"12983682","name":"speech-bubble-013","font_class":"speech-bubble-24","unicode":"e8a0","unicode_decimal":59552},{"icon_id":"12983683","name":"speech-bubble-014","font_class":"speech-bubble-25","unicode":"e8a1","unicode_decimal":59553},{"icon_id":"12983684","name":"speech-bubble","font_class":"speech-bubble","unicode":"e8a2","unicode_decimal":59554},{"icon_id":"12983685","name":"stick-man-04","font_class":"stick-man-","unicode":"e8a3","unicode_decimal":59555},{"icon_id":"12983686","name":"stick-man-03","font_class":"stick-man-1","unicode":"e8a4","unicode_decimal":59556},{"icon_id":"12983687","name":"menu","font_class":"menu","unicode":"e8a5","unicode_decimal":59557},{"icon_id":"12983688","name":"speech-bubble-019","font_class":"speech-bubble-26","unicode":"e8a6","unicode_decimal":59558},{"icon_id":"12983689","name":"tap","font_class":"tap","unicode":"e8a7","unicode_decimal":59559},{"icon_id":"12983690","name":"telephone-04","font_class":"telephone-","unicode":"e8a8","unicode_decimal":59560},{"icon_id":"12983691","name":"stick-man-01","font_class":"stick-man-2","unicode":"e8a9","unicode_decimal":59561},{"icon_id":"12983692","name":"password","font_class":"password","unicode":"e8aa","unicode_decimal":59562},{"icon_id":"12983693","name":"star","font_class":"star","unicode":"e8ab","unicode_decimal":59563},{"icon_id":"12983694","name":"telephone-03","font_class":"telephone-1","unicode":"e8ac","unicode_decimal":59564},{"icon_id":"12983695","name":"sticker-04","font_class":"sticker-","unicode":"e8ad","unicode_decimal":59565},{"icon_id":"12983696","name":"telephone-01","font_class":"telephone-2","unicode":"e8ae","unicode_decimal":59566},{"icon_id":"12983697","name":"speech-bubble-017","font_class":"speech-bubble-27","unicode":"e8af","unicode_decimal":59567},{"icon_id":"12983698","name":"sticker","font_class":"sticker","unicode":"e8b0","unicode_decimal":59568},{"icon_id":"12983699","name":"sticker-02","font_class":"sticker-1","unicode":"e8b1","unicode_decimal":59569},{"icon_id":"12983700","name":"stick-man-02","font_class":"stick-man-3","unicode":"e8b2","unicode_decimal":59570},{"icon_id":"12983701","name":"telephone-02","font_class":"telephone-3","unicode":"e8b3","unicode_decimal":59571},{"icon_id":"12983702","name":"sticker-01","font_class":"sticker-2","unicode":"e8b4","unicode_decimal":59572},{"icon_id":"12983703","name":"sticker-03","font_class":"sticker-3","unicode":"e8b5","unicode_decimal":59573}]}')
    },
    905: function(e) {
        e.exports = JSON.parse('{"id":"1632804","name":"Graph-常用","font_family":"graph-common","css_prefix_text":"graph-common-","description":"Graph-常用","glyphs":[{"icon_id":"11391484","name":"保障","font_class":"baozhang","unicode":"e635","unicode_decimal":58933},{"icon_id":"11391485","name":"比例","font_class":"bili","unicode":"e636","unicode_decimal":58934},{"icon_id":"11391486","name":"导入","font_class":"daoru","unicode":"e637","unicode_decimal":58935},{"icon_id":"11391487","name":"标签","font_class":"biaoqian","unicode":"e638","unicode_decimal":58936},{"icon_id":"11391488","name":"编辑","font_class":"bianji","unicode":"e639","unicode_decimal":58937},{"icon_id":"11391489","name":"电脑","font_class":"diannao","unicode":"e63a","unicode_decimal":58938},{"icon_id":"11391490","name":"错","font_class":"cuo","unicode":"e63b","unicode_decimal":58939},{"icon_id":"11391491","name":"查看","font_class":"chakan","unicode":"e63c","unicode_decimal":58940},{"icon_id":"11391492","name":"帮助","font_class":"bangzhu","unicode":"e63d","unicode_decimal":58941},{"icon_id":"11391493","name":"电源","font_class":"dianyuan","unicode":"e63e","unicode_decimal":58942},{"icon_id":"11391494","name":"发送","font_class":"fasong","unicode":"e63f","unicode_decimal":58943},{"icon_id":"11391495","name":"订单","font_class":"dingdan","unicode":"e640","unicode_decimal":58944},{"icon_id":"11391496","name":"二维码","font_class":"erweima","unicode":"e641","unicode_decimal":58945},{"icon_id":"11391497","name":"电台","font_class":"diantai","unicode":"e642","unicode_decimal":58946},{"icon_id":"11391498","name":"歌单","font_class":"gedan","unicode":"e643","unicode_decimal":58947},{"icon_id":"11391499","name":"复制","font_class":"fuzhi","unicode":"e644","unicode_decimal":58948},{"icon_id":"11391500","name":"发现","font_class":"faxian","unicode":"e645","unicode_decimal":58949},{"icon_id":"11391501","name":"警告","font_class":"jinggao","unicode":"e646","unicode_decimal":58950},{"icon_id":"11391502","name":"警报","font_class":"jingbao","unicode":"e647","unicode_decimal":58951},{"icon_id":"11391503","name":"火","font_class":"huo","unicode":"e648","unicode_decimal":58952},{"icon_id":"11391504","name":"购买","font_class":"goumai","unicode":"e649","unicode_decimal":58953},{"icon_id":"11391505","name":"减少","font_class":"jianshao","unicode":"e64a","unicode_decimal":58954},{"icon_id":"11391506","name":"快","font_class":"kuai","unicode":"e64b","unicode_decimal":58955},{"icon_id":"11391507","name":"积分","font_class":"jifen","unicode":"e64c","unicode_decimal":58956},{"icon_id":"11391508","name":"对","font_class":"dui","unicode":"e64d","unicode_decimal":58957},{"icon_id":"11391509","name":"定位","font_class":"dingwei","unicode":"e64e","unicode_decimal":58958},{"icon_id":"11391510","name":"单位","font_class":"danwei","unicode":"e64f","unicode_decimal":58959},{"icon_id":"11391511","name":"课程","font_class":"kecheng","unicode":"e650","unicode_decimal":58960},{"icon_id":"11391512","name":"分类","font_class":"fenlei","unicode":"e651","unicode_decimal":58961},{"icon_id":"11391513","name":"签到","font_class":"qiandao","unicode":"e652","unicode_decimal":58962},{"icon_id":"11391514","name":"排行","font_class":"paihang","unicode":"e653","unicode_decimal":58963},{"icon_id":"11391515","name":"票","font_class":"piao","unicode":"e654","unicode_decimal":58964},{"icon_id":"11391516","name":"密码","font_class":"mima","unicode":"e655","unicode_decimal":58965},{"icon_id":"11391517","name":"奖牌","font_class":"jiangpai","unicode":"e656","unicode_decimal":58966},{"icon_id":"11391518","name":"闹钟","font_class":"naozhong","unicode":"e657","unicode_decimal":58967},{"icon_id":"11391519","name":"科技","font_class":"keji","unicode":"e658","unicode_decimal":58968},{"icon_id":"11391520","name":"手机","font_class":"shouji","unicode":"e659","unicode_decimal":58969},{"icon_id":"11391521","name":"列表-44","font_class":"liebiao-44","unicode":"e65a","unicode_decimal":58970},{"icon_id":"11391522","name":"分享","font_class":"fenxiang","unicode":"e65b","unicode_decimal":58971},{"icon_id":"11391523","name":"钱夹","font_class":"qianjia","unicode":"e65c","unicode_decimal":58972},{"icon_id":"11391524","name":"黑板","font_class":"heiban","unicode":"e65d","unicode_decimal":58973},{"icon_id":"11391525","name":"上翻","font_class":"shangfan","unicode":"e65e","unicode_decimal":58974},{"icon_id":"11391526","name":"搜搜","font_class":"sousou","unicode":"e65f","unicode_decimal":58975},{"icon_id":"11391527","name":"筛选","font_class":"shaixuan","unicode":"e660","unicode_decimal":58976},{"icon_id":"11391528","name":"日历","font_class":"rili","unicode":"e661","unicode_decimal":58977},{"icon_id":"11391529","name":"位置","font_class":"weizhi","unicode":"e662","unicode_decimal":58978},{"icon_id":"11391530","name":"红包","font_class":"hongbao","unicode":"e663","unicode_decimal":58979},{"icon_id":"11391531","name":"书写","font_class":"shuxie","unicode":"e664","unicode_decimal":58980},{"icon_id":"11391532","name":"上一个","font_class":"shangyige","unicode":"e665","unicode_decimal":58981},{"icon_id":"11391533","name":"收藏","font_class":"shoucang","unicode":"e666","unicode_decimal":58982},{"icon_id":"11391534","name":"文件","font_class":"wenjian","unicode":"e667","unicode_decimal":58983},{"icon_id":"11391535","name":"主页","font_class":"zhuye","unicode":"e668","unicode_decimal":58984},{"icon_id":"11391536","name":"下载","font_class":"xiazai","unicode":"e669","unicode_decimal":58985},{"icon_id":"11391537","name":"设置","font_class":"shezhi","unicode":"e66a","unicode_decimal":58986},{"icon_id":"11391538","name":"我的","font_class":"wode","unicode":"e66b","unicode_decimal":58987},{"icon_id":"11391539","name":"消息-43","font_class":"xiaoxi-","unicode":"e66c","unicode_decimal":58988},{"icon_id":"11391540","name":"列表-54","font_class":"liebiao-1","unicode":"e66d","unicode_decimal":58989},{"icon_id":"11391541","name":"学问","font_class":"xuewen","unicode":"e66e","unicode_decimal":58990},{"icon_id":"11391542","name":"音乐","font_class":"yinle","unicode":"e66f","unicode_decimal":58991},{"icon_id":"11391543","name":"喜欢","font_class":"xihuan","unicode":"e670","unicode_decimal":58992},{"icon_id":"11391544","name":"浏览","font_class":"liulan","unicode":"e671","unicode_decimal":58993},{"icon_id":"11391545","name":"历史","font_class":"lishi","unicode":"e672","unicode_decimal":58994},{"icon_id":"11391546","name":"信息","font_class":"xinxi","unicode":"e673","unicode_decimal":58995},{"icon_id":"11391547","name":"拍照","font_class":"paizhao","unicode":"e674","unicode_decimal":58996},{"icon_id":"11391548","name":"银行卡","font_class":"yinhangka","unicode":"e675","unicode_decimal":58997},{"icon_id":"11391549","name":"赞","font_class":"zan","unicode":"e676","unicode_decimal":58998},{"icon_id":"11391550","name":"信号塔","font_class":"xinhaota","unicode":"e677","unicode_decimal":58999},{"icon_id":"11391551","name":"音量","font_class":"yinliang","unicode":"e678","unicode_decimal":59000},{"icon_id":"11391552","name":"私信","font_class":"sixin","unicode":"e679","unicode_decimal":59001},{"icon_id":"11391553","name":"能源","font_class":"nengyuan","unicode":"e67a","unicode_decimal":59002},{"icon_id":"11391554","name":"皮肤","font_class":"pifu","unicode":"e67b","unicode_decimal":59003},{"icon_id":"11391555","name":"指纹","font_class":"zhiwen","unicode":"e67c","unicode_decimal":59004},{"icon_id":"11391556","name":"视频","font_class":"shipin","unicode":"e67d","unicode_decimal":59005},{"icon_id":"11391557","name":"文件夹","font_class":"wenjianjia","unicode":"e67e","unicode_decimal":59006},{"icon_id":"11391558","name":"图片","font_class":"tupian","unicode":"e67f","unicode_decimal":59007},{"icon_id":"11391559","name":"信号","font_class":"xinhao","unicode":"e680","unicode_decimal":59008},{"icon_id":"11391560","name":"下一个","font_class":"xiayige","unicode":"e681","unicode_decimal":59009},{"icon_id":"11391561","name":"下翻","font_class":"xiafan","unicode":"e682","unicode_decimal":59010},{"icon_id":"11391562","name":"添加","font_class":"tianjia","unicode":"e683","unicode_decimal":59011},{"icon_id":"11391563","name":"自己","font_class":"ziji","unicode":"e684","unicode_decimal":59012}]}')
    },
    906: function(e) {
        e.exports = JSON.parse('{"id":"1633103","name":"Graph-数据","font_family":"graph-data","css_prefix_text":"graph-data-","description":"Graph-数据","glyphs":[{"icon_id":"12983273","name":"analytics","font_class":"analytics","unicode":"e813","unicode_decimal":59411},{"icon_id":"12983274","name":"access","font_class":"access","unicode":"e814","unicode_decimal":59412},{"icon_id":"12983275","name":"antenna","font_class":"antenna","unicode":"e815","unicode_decimal":59413},{"icon_id":"12983276","name":"analysis","font_class":"analysis","unicode":"e816","unicode_decimal":59414},{"icon_id":"12983277","name":"binary-code","font_class":"binary-code","unicode":"e817","unicode_decimal":59415},{"icon_id":"12983278","name":"ar-glasses","font_class":"ar-glasses","unicode":"e818","unicode_decimal":59416},{"icon_id":"12983279","name":"battery","font_class":"battery","unicode":"e819","unicode_decimal":59417},{"icon_id":"12983280","name":"cloud-computing-1","font_class":"cloud-computing-4","unicode":"e81a","unicode_decimal":59418},{"icon_id":"12983281","name":"click","font_class":"click","unicode":"e81b","unicode_decimal":59419},{"icon_id":"12983282","name":"cloud-computing-4","font_class":"cloud-computing-1","unicode":"e81c","unicode_decimal":59420},{"icon_id":"12983283","name":"cells","font_class":"cells","unicode":"e81d","unicode_decimal":59421},{"icon_id":"12983284","name":"cloud-computing","font_class":"cloud-computing","unicode":"e81e","unicode_decimal":59422},{"icon_id":"12983285","name":"cube","font_class":"cube","unicode":"e81f","unicode_decimal":59423},{"icon_id":"12983286","name":"cpu","font_class":"cpu","unicode":"e820","unicode_decimal":59424},{"icon_id":"12983287","name":"cloud-computing-3","font_class":"cloud-computing-2","unicode":"e821","unicode_decimal":59425},{"icon_id":"12983288","name":"cloud-computing-2","font_class":"cloud-computing-3","unicode":"e822","unicode_decimal":59426},{"icon_id":"12983289","name":"development-1","font_class":"development-1","unicode":"e823","unicode_decimal":59427},{"icon_id":"12983290","name":"development","font_class":"development","unicode":"e824","unicode_decimal":59428},{"icon_id":"12983291","name":"human","font_class":"human","unicode":"e825","unicode_decimal":59429},{"icon_id":"12983292","name":"network-1","font_class":"network-1","unicode":"e826","unicode_decimal":59430},{"icon_id":"12983293","name":"plug","font_class":"plug","unicode":"e827","unicode_decimal":59431},{"icon_id":"12983294","name":"idea","font_class":"idea","unicode":"e828","unicode_decimal":59432},{"icon_id":"12983295","name":"monitor","font_class":"monitor","unicode":"e829","unicode_decimal":59433},{"icon_id":"12983296","name":"protection","font_class":"protection","unicode":"e82a","unicode_decimal":59434},{"icon_id":"12983297","name":"laptop-1","font_class":"laptop-1","unicode":"e82b","unicode_decimal":59435},{"icon_id":"12983298","name":"network","font_class":"network","unicode":"e82c","unicode_decimal":59436},{"icon_id":"12983299","name":"smartwatch","font_class":"smartwatch","unicode":"e82d","unicode_decimal":59437},{"icon_id":"12983300","name":"power-button","font_class":"power-button","unicode":"e82e","unicode_decimal":59438},{"icon_id":"12983301","name":"hologram","font_class":"hologram","unicode":"e82f","unicode_decimal":59439},{"icon_id":"12983302","name":"infographic","font_class":"infographic","unicode":"e830","unicode_decimal":59440},{"icon_id":"12983303","name":"setup","font_class":"setup","unicode":"e831","unicode_decimal":59441},{"icon_id":"12983304","name":"earth-globe","font_class":"earth-globe","unicode":"e832","unicode_decimal":59442},{"icon_id":"12983305","name":"laptop","font_class":"laptop","unicode":"e833","unicode_decimal":59443},{"icon_id":"12983306","name":"worldwide","font_class":"worldwide","unicode":"e834","unicode_decimal":59444},{"icon_id":"12983307","name":"pendrive","font_class":"pendrive","unicode":"e835","unicode_decimal":59445},{"icon_id":"12983308","name":"settings-2","font_class":"settings-4","unicode":"e836","unicode_decimal":59446},{"icon_id":"12983309","name":"remote-control","font_class":"remote-control","unicode":"e837","unicode_decimal":59447},{"icon_id":"12983310","name":"smartphone-1","font_class":"smartphone-1","unicode":"e838","unicode_decimal":59448},{"icon_id":"12983311","name":"router","font_class":"router","unicode":"e839","unicode_decimal":59449},{"icon_id":"12983312","name":"transfer","font_class":"transfer","unicode":"e83a","unicode_decimal":59450},{"icon_id":"12983313","name":"smartphone","font_class":"smartphone","unicode":"e83b","unicode_decimal":59451},{"icon_id":"12983314","name":"radar","font_class":"radar","unicode":"e83c","unicode_decimal":59452},{"icon_id":"12983315","name":"settings-1","font_class":"settings-1","unicode":"e83d","unicode_decimal":59453},{"icon_id":"12983316","name":"view","font_class":"view","unicode":"e83e","unicode_decimal":59454},{"icon_id":"12983317","name":"user-1","font_class":"user-1","unicode":"e83f","unicode_decimal":59455},{"icon_id":"12983318","name":"settings-3","font_class":"settings-2","unicode":"e840","unicode_decimal":59456},{"icon_id":"12983319","name":"settings","font_class":"settings","unicode":"e841","unicode_decimal":59457},{"icon_id":"12983320","name":"gear","font_class":"gear","unicode":"e842","unicode_decimal":59458},{"icon_id":"12983321","name":"settings-4","font_class":"settings-3","unicode":"e843","unicode_decimal":59459},{"icon_id":"12983322","name":"user","font_class":"user","unicode":"e844","unicode_decimal":59460}]}')
    },
    907: function(e) {
        e.exports = JSON.parse('{"id":"1633135","name":"Graph-外卖","font_family":"graph-delivery","css_prefix_text":"graph-delivery-","description":"Graph-外卖","glyphs":[{"icon_id":"12983732","name":"chopsticks","font_class":"chopsticks","unicode":"e845","unicode_decimal":59461},{"icon_id":"12983733","name":"cash","font_class":"cash","unicode":"e846","unicode_decimal":59462},{"icon_id":"12983734","name":"corn dog","font_class":"corndog","unicode":"e847","unicode_decimal":59463},{"icon_id":"12983735","name":"bicycle","font_class":"bicycle","unicode":"e848","unicode_decimal":59464},{"icon_id":"12983736","name":"cookies","font_class":"cookies","unicode":"e849","unicode_decimal":59465},{"icon_id":"12983737","name":"coffee","font_class":"coffee","unicode":"e84a","unicode_decimal":59466},{"icon_id":"12983738","name":"donut","font_class":"donut","unicode":"e84b","unicode_decimal":59467},{"icon_id":"12983739","name":"credit card","font_class":"creditcard","unicode":"e84c","unicode_decimal":59468},{"icon_id":"12983740","name":"cupcake","font_class":"cupcake","unicode":"e84d","unicode_decimal":59469},{"icon_id":"12983741","name":"food container","font_class":"foodcontainer","unicode":"e84e","unicode_decimal":59470},{"icon_id":"12983742","name":"find","font_class":"find","unicode":"e84f","unicode_decimal":59471},{"icon_id":"12983743","name":"food","font_class":"food","unicode":"e850","unicode_decimal":59472},{"icon_id":"12983744","name":"ice cream","font_class":"icecream","unicode":"e851","unicode_decimal":59473},{"icon_id":"12983745","name":"food delivery","font_class":"fooddelivery","unicode":"e852","unicode_decimal":59474},{"icon_id":"12983746","name":"fast food","font_class":"fastfood","unicode":"e853","unicode_decimal":59475},{"icon_id":"12983747","name":"lunch bag","font_class":"lunchbag","unicode":"e854","unicode_decimal":59476},{"icon_id":"12983748","name":"knife","font_class":"knife","unicode":"e855","unicode_decimal":59477},{"icon_id":"12983749","name":"membership","font_class":"membership","unicode":"e856","unicode_decimal":59478},{"icon_id":"12983750","name":"milkshake","font_class":"milkshake","unicode":"e857","unicode_decimal":59479},{"icon_id":"12983751","name":"menu","font_class":"menu","unicode":"e858","unicode_decimal":59480},{"icon_id":"12983752","name":"soft drink","font_class":"softdrink","unicode":"e859","unicode_decimal":59481},{"icon_id":"12983753","name":"to go cup","font_class":"togocup","unicode":"e85a","unicode_decimal":59482},{"icon_id":"12983754","name":"order","font_class":"order","unicode":"e85b","unicode_decimal":59483},{"icon_id":"12983755","name":"noodles","font_class":"noodles","unicode":"e85c","unicode_decimal":59484},{"icon_id":"12983756","name":"rate","font_class":"rate","unicode":"e85d","unicode_decimal":59485},{"icon_id":"12983757","name":"pizza","font_class":"pizza","unicode":"e85e","unicode_decimal":59486},{"icon_id":"12983758","name":"placeholder","font_class":"placeholder","unicode":"e85f","unicode_decimal":59487},{"icon_id":"12983759","name":"tablet","font_class":"tablet","unicode":"e860","unicode_decimal":59488},{"icon_id":"12983760","name":"snack","font_class":"snack","unicode":"e861","unicode_decimal":59489},{"icon_id":"12983761","name":"time","font_class":"time","unicode":"e862","unicode_decimal":59490},{"icon_id":"12983762","name":"sale","font_class":"sale","unicode":"e863","unicode_decimal":59491},{"icon_id":"12983763","name":"water","font_class":"water","unicode":"e864","unicode_decimal":59492},{"icon_id":"12983764","name":"taco","font_class":"taco","unicode":"e865","unicode_decimal":59493},{"icon_id":"12983765","name":"scooter","font_class":"scooter","unicode":"e866","unicode_decimal":59494},{"icon_id":"12983766","name":"paper bag","font_class":"paperbag","unicode":"e867","unicode_decimal":59495},{"icon_id":"12983767","name":"take away","font_class":"takeaway","unicode":"e868","unicode_decimal":59496},{"icon_id":"12983768","name":"route","font_class":"route","unicode":"e869","unicode_decimal":59497},{"icon_id":"12983769","name":"sushi","font_class":"sushi","unicode":"e86a","unicode_decimal":59498},{"icon_id":"12983770","name":"salad","font_class":"salad","unicode":"e86b","unicode_decimal":59499},{"icon_id":"12983771","name":"sauce","font_class":"sauce","unicode":"e86c","unicode_decimal":59500}]}')
    },
    908: function(e) {
        e.exports = JSON.parse('{"id":"1632928","name":"Graph-生态","font_family":"graph-ecology","css_prefix_text":"graph-ecology-","description":"Graph-生态","glyphs":[{"icon_id":"12982325","name":"accumulator","font_class":"accumulator","unicode":"e7b9","unicode_decimal":59321},{"icon_id":"12982326","name":"battery","font_class":"battery","unicode":"e7ba","unicode_decimal":59322},{"icon_id":"12982327","name":"atmosphere","font_class":"atmosphere","unicode":"e7bb","unicode_decimal":59323},{"icon_id":"12982328","name":"bike","font_class":"bike","unicode":"e7bc","unicode_decimal":59324},{"icon_id":"12982329","name":"biofuel","font_class":"biofuel","unicode":"e7bd","unicode_decimal":59325},{"icon_id":"12982330","name":"bio","font_class":"bio","unicode":"e7be","unicode_decimal":59326},{"icon_id":"12982331","name":"chemistry","font_class":"chemistry","unicode":"e7bf","unicode_decimal":59327},{"icon_id":"12982332","name":"biology","font_class":"biology","unicode":"e7c0","unicode_decimal":59328},{"icon_id":"12982333","name":"co2","font_class":"co2","unicode":"e7c1","unicode_decimal":59329},{"icon_id":"12982334","name":"danger","font_class":"danger","unicode":"e7c2","unicode_decimal":59330},{"icon_id":"12982335","name":"biohazard","font_class":"biohazard","unicode":"e7c3","unicode_decimal":59331},{"icon_id":"12982336","name":"cigarrete","font_class":"cigarrete","unicode":"e7c4","unicode_decimal":59332},{"icon_id":"12982337","name":"eco","font_class":"eco","unicode":"e7c5","unicode_decimal":59333},{"icon_id":"12982338","name":"eco-food","font_class":"eco-food","unicode":"e7c6","unicode_decimal":59334},{"icon_id":"12982339","name":"eco-house","font_class":"eco-house","unicode":"e7c7","unicode_decimal":59335},{"icon_id":"12982340","name":"electric-tower","font_class":"electric-tower","unicode":"e7c8","unicode_decimal":59336},{"icon_id":"12982341","name":"electric-car","font_class":"electric-car","unicode":"e7c9","unicode_decimal":59337},{"icon_id":"12982342","name":"electricity","font_class":"electricity","unicode":"e7ca","unicode_decimal":59338},{"icon_id":"12982343","name":"fire","font_class":"fire","unicode":"e7cb","unicode_decimal":59339},{"icon_id":"12982344","name":"fish","font_class":"fish","unicode":"e7cc","unicode_decimal":59340},{"icon_id":"12982345","name":"ecology-1","font_class":"ecology-1","unicode":"e7cd","unicode_decimal":59341},{"icon_id":"12982346","name":"ecology","font_class":"ecology","unicode":"e7ce","unicode_decimal":59342},{"icon_id":"12982347","name":"glaciers","font_class":"glaciers","unicode":"e7cf","unicode_decimal":59343},{"icon_id":"12982348","name":"forest","font_class":"forest","unicode":"e7d0","unicode_decimal":59344},{"icon_id":"12982349","name":"gmo","font_class":"gmo","unicode":"e7d1","unicode_decimal":59345},{"icon_id":"12982350","name":"green-energy","font_class":"green-energy","unicode":"e7d2","unicode_decimal":59346},{"icon_id":"12982351","name":"global-warming","font_class":"global-warming","unicode":"e7d3","unicode_decimal":59347},{"icon_id":"12982352","name":"industry-1","font_class":"industry-1","unicode":"e7d4","unicode_decimal":59348},{"icon_id":"12982353","name":"industry","font_class":"industry","unicode":"e7d5","unicode_decimal":59349},{"icon_id":"12982354","name":"hydro-power","font_class":"hydro-power","unicode":"e7d6","unicode_decimal":59350},{"icon_id":"12982355","name":"lamp","font_class":"lamp","unicode":"e7d7","unicode_decimal":59351},{"icon_id":"12982356","name":"lights","font_class":"lights","unicode":"e7d8","unicode_decimal":59352},{"icon_id":"12982357","name":"nuclear-plant","font_class":"nuclear-plant","unicode":"e7d9","unicode_decimal":59353},{"icon_id":"12982358","name":"power-line","font_class":"power-line","unicode":"e7da","unicode_decimal":59354},{"icon_id":"12982359","name":"plastic","font_class":"plastic","unicode":"e7db","unicode_decimal":59355},{"icon_id":"12982360","name":"radiation","font_class":"radiation","unicode":"e7dc","unicode_decimal":59356},{"icon_id":"12982361","name":"recycling","font_class":"recycling","unicode":"e7dd","unicode_decimal":59357},{"icon_id":"12982362","name":"recyclable-1","font_class":"recyclable-1","unicode":"e7de","unicode_decimal":59358},{"icon_id":"12982363","name":"plant","font_class":"plant","unicode":"e7df","unicode_decimal":59359},{"icon_id":"12982364","name":"recyclable","font_class":"recyclable","unicode":"e7e0","unicode_decimal":59360},{"icon_id":"12982365","name":"recycle","font_class":"recycle","unicode":"e7e1","unicode_decimal":59361},{"icon_id":"12982366","name":"sprout","font_class":"sprout","unicode":"e7e2","unicode_decimal":59362},{"icon_id":"12982367","name":"solar-panels","font_class":"solar-panels","unicode":"e7e3","unicode_decimal":59363},{"icon_id":"12982368","name":"respirator","font_class":"respirator","unicode":"e7e4","unicode_decimal":59364},{"icon_id":"12982369","name":"nuclear-power","font_class":"nuclear-power","unicode":"e7e5","unicode_decimal":59365},{"icon_id":"12982370","name":"water","font_class":"water","unicode":"e7e6","unicode_decimal":59366},{"icon_id":"12982371","name":"turbine","font_class":"turbine","unicode":"e7e7","unicode_decimal":59367},{"icon_id":"12982372","name":"sun-energy","font_class":"sun-energy","unicode":"e7e8","unicode_decimal":59368},{"icon_id":"12982373","name":"trash","font_class":"trash","unicode":"e7e9","unicode_decimal":59369},{"icon_id":"12982374","name":"trash-1","font_class":"trash-1","unicode":"e7ea","unicode_decimal":59370}]}')
    },
    909: function(e) {
        e.exports = JSON.parse('{"id":"1633063","name":"Graph-金融","font_family":"graph-finance","css_prefix_text":"graph-finance-","description":"Graph-金融","glyphs":[{"icon_id":"12982853","name":"balance","font_class":"balance","unicode":"e7cb","unicode_decimal":59339},{"icon_id":"12982854","name":"bar-chart","font_class":"bar-chart","unicode":"e7cc","unicode_decimal":59340},{"icon_id":"12982855","name":"briefcase","font_class":"briefcase","unicode":"e7cd","unicode_decimal":59341},{"icon_id":"12982856","name":"bank","font_class":"bank","unicode":"e7ce","unicode_decimal":59342},{"icon_id":"12982857","name":"check","font_class":"check","unicode":"e7cf","unicode_decimal":59343},{"icon_id":"12982858","name":"chess","font_class":"chess","unicode":"e7d0","unicode_decimal":59344},{"icon_id":"12982859","name":"calculator","font_class":"calculator","unicode":"e7d1","unicode_decimal":59345},{"icon_id":"12982860","name":"diamond","font_class":"diamond","unicode":"e7d2","unicode_decimal":59346},{"icon_id":"12982861","name":"credit-card","font_class":"credit-card","unicode":"e7d3","unicode_decimal":59347},{"icon_id":"12982862","name":"diary","font_class":"diary","unicode":"e7d4","unicode_decimal":59348},{"icon_id":"12982863","name":"euro","font_class":"euro","unicode":"e7d5","unicode_decimal":59349},{"icon_id":"12982864","name":"clock","font_class":"clock","unicode":"e7d6","unicode_decimal":59350},{"icon_id":"12982865","name":"file-1","font_class":"file-1","unicode":"e7d7","unicode_decimal":59351},{"icon_id":"12982866","name":"coin","font_class":"coin","unicode":"e7d8","unicode_decimal":59352},{"icon_id":"12982867","name":"file","font_class":"file","unicode":"e7d9","unicode_decimal":59353},{"icon_id":"12982868","name":"development","font_class":"development","unicode":"e7da","unicode_decimal":59354},{"icon_id":"12982869","name":"fountain-pen","font_class":"fountain-pen","unicode":"e7db","unicode_decimal":59355},{"icon_id":"12982870","name":"hourglass","font_class":"hourglass","unicode":"e7dc","unicode_decimal":59356},{"icon_id":"12982871","name":"economy","font_class":"economy","unicode":"e7dd","unicode_decimal":59357},{"icon_id":"12982872","name":"growth","font_class":"growth","unicode":"e7de","unicode_decimal":59358},{"icon_id":"12982873","name":"laptop","font_class":"laptop","unicode":"e7df","unicode_decimal":59359},{"icon_id":"12982874","name":"gold-ingots","font_class":"gold-ingots","unicode":"e7e0","unicode_decimal":59360},{"icon_id":"12982875","name":"line-chart","font_class":"line-chart","unicode":"e7e1","unicode_decimal":59361},{"icon_id":"12982876","name":"medal","font_class":"medal","unicode":"e7e2","unicode_decimal":59362},{"icon_id":"12982877","name":"money-bag","font_class":"money-bag","unicode":"e7e3","unicode_decimal":59363},{"icon_id":"12982878","name":"notebook","font_class":"notebook","unicode":"e7e4","unicode_decimal":59364},{"icon_id":"12982879","name":"open-book","font_class":"open-book","unicode":"e7e5","unicode_decimal":59365},{"icon_id":"12982880","name":"notepad","font_class":"notepad","unicode":"e7e6","unicode_decimal":59366},{"icon_id":"12982881","name":"money","font_class":"money","unicode":"e7e7","unicode_decimal":59367},{"icon_id":"12982882","name":"padlock","font_class":"padlock","unicode":"e7e8","unicode_decimal":59368},{"icon_id":"12982883","name":"light-bulb","font_class":"light-bulb","unicode":"e7e9","unicode_decimal":59369},{"icon_id":"12982884","name":"pie-chart","font_class":"pie-chart","unicode":"e7ea","unicode_decimal":59370},{"icon_id":"12982885","name":"presentation-1","font_class":"presentation-1","unicode":"e7eb","unicode_decimal":59371},{"icon_id":"12982886","name":"point-of-service","font_class":"point-of-service","unicode":"e7ec","unicode_decimal":59372},{"icon_id":"12982887","name":"piggy-bank","font_class":"piggy-bank","unicode":"e7ed","unicode_decimal":59373},{"icon_id":"12982888","name":"presentation-2","font_class":"presentation-2","unicode":"e7ee","unicode_decimal":59374},{"icon_id":"12982889","name":"presentation","font_class":"presentation","unicode":"e7ef","unicode_decimal":59375},{"icon_id":"12982890","name":"shopping-bag","font_class":"shopping-bag","unicode":"e7f0","unicode_decimal":59376},{"icon_id":"12982891","name":"smartphone","font_class":"smartphone","unicode":"e7f1","unicode_decimal":59377},{"icon_id":"12982892","name":"pyramid","font_class":"pyramid","unicode":"e7f2","unicode_decimal":59378},{"icon_id":"12982893","name":"pie-chart-1","font_class":"pie-chart-1","unicode":"e7f3","unicode_decimal":59379},{"icon_id":"12982894","name":"tablet","font_class":"tablet","unicode":"e7f4","unicode_decimal":59380},{"icon_id":"12982895","name":"presentation-3","font_class":"presentation-3","unicode":"e7f5","unicode_decimal":59381},{"icon_id":"12982896","name":"safebox-1","font_class":"safebox-1","unicode":"e7f6","unicode_decimal":59382},{"icon_id":"12982897","name":"safebox","font_class":"safebox","unicode":"e7f7","unicode_decimal":59383},{"icon_id":"12982898","name":"settings","font_class":"settings","unicode":"e7f8","unicode_decimal":59384},{"icon_id":"12982899","name":"wallet","font_class":"wallet","unicode":"e7f9","unicode_decimal":59385},{"icon_id":"12982900","name":"worlwide","font_class":"worlwide","unicode":"e7fa","unicode_decimal":59386},{"icon_id":"12982901","name":"statistics","font_class":"statistics","unicode":"e7fb","unicode_decimal":59387},{"icon_id":"12982902","name":"stamp","font_class":"stamp","unicode":"e7fc","unicode_decimal":59388}]}')
    },
    910: function(e) {
        e.exports = JSON.parse('{"id":"1632890","name":"Graph-健康","font_family":"graph-health","css_prefix_text":"graph-health-","description":"Graph-健康","glyphs":[{"icon_id":"7119846","name":"首页","font_class":"shouye","unicode":"e73d","unicode_decimal":59197},{"icon_id":"7120071","name":"药品","font_class":"yaopin","unicode":"e73f","unicode_decimal":59199},{"icon_id":"7120091","name":"消息","font_class":"xiaoxi","unicode":"e740","unicode_decimal":59200},{"icon_id":"7120351","name":"用药","font_class":"yongyao","unicode":"e741","unicode_decimal":59201},{"icon_id":"7120353","name":"喜欢","font_class":"xihuan","unicode":"e742","unicode_decimal":59202},{"icon_id":"7120361","name":"我的","font_class":"wode","unicode":"e743","unicode_decimal":59203},{"icon_id":"7120369","name":"安全","font_class":"anquan","unicode":"e744","unicode_decimal":59204},{"icon_id":"7120443","name":"历史","font_class":"lishi","unicode":"e745","unicode_decimal":59205},{"icon_id":"7120490","name":"相机","font_class":"xiangji","unicode":"e748","unicode_decimal":59208},{"icon_id":"7120495","name":"订单","font_class":"dingdan","unicode":"e749","unicode_decimal":59209},{"icon_id":"7120520","name":"会员","font_class":"huiyuan","unicode":"e74a","unicode_decimal":59210},{"icon_id":"7120577","name":"查找","font_class":"chazhao","unicode":"e74b","unicode_decimal":59211},{"icon_id":"7120786","name":"礼物","font_class":"liwu","unicode":"e74c","unicode_decimal":59212},{"icon_id":"7120973","name":"扫码","font_class":"saoma","unicode":"e74f","unicode_decimal":59215},{"icon_id":"7121069","name":"购物","font_class":"gouwu","unicode":"e750","unicode_decimal":59216},{"icon_id":"7121087","name":"定位","font_class":"dingwei","unicode":"e751","unicode_decimal":59217},{"icon_id":"7121111","name":"电话","font_class":"dianhua","unicode":"e752","unicode_decimal":59218},{"icon_id":"7121217","name":"设置","font_class":"shezhi","unicode":"e753","unicode_decimal":59219},{"icon_id":"7121247","name":"优惠","font_class":"youhui","unicode":"e754","unicode_decimal":59220},{"icon_id":"7121264","name":"灵感","font_class":"linggan","unicode":"e755","unicode_decimal":59221},{"icon_id":"7121278","name":"点赞","font_class":"dianzan","unicode":"e756","unicode_decimal":59222},{"icon_id":"7121302","name":"输入","font_class":"shuru","unicode":"e757","unicode_decimal":59223},{"icon_id":"7121305","name":"通知","font_class":"tongzhi","unicode":"e758","unicode_decimal":59224},{"icon_id":"7121329","name":"删除","font_class":"shanchu","unicode":"e759","unicode_decimal":59225},{"icon_id":"7121330","name":"分享","font_class":"fenxiang","unicode":"e75a","unicode_decimal":59226},{"icon_id":"7121350","name":"编辑","font_class":"bianji","unicode":"e75b","unicode_decimal":59227},{"icon_id":"7121366","name":"等待","font_class":"dengdai","unicode":"e75c","unicode_decimal":59228},{"icon_id":"7121400","name":"客服","font_class":"kefu","unicode":"e75d","unicode_decimal":59229},{"icon_id":"7121696","name":"说明","font_class":"shuoming","unicode":"e75e","unicode_decimal":59230},{"icon_id":"7121767","name":"浏览","font_class":"liulan","unicode":"e75f","unicode_decimal":59231},{"icon_id":"7121877","name":"检查","font_class":"jiancha","unicode":"e760","unicode_decimal":59232},{"icon_id":"7121889","name":"视频","font_class":"shipin","unicode":"e761","unicode_decimal":59233},{"icon_id":"7121890","name":"皇冠","font_class":"huangguan","unicode":"e762","unicode_decimal":59234},{"icon_id":"7121972","name":"星级","font_class":"xingji","unicode":"e763","unicode_decimal":59235},{"icon_id":"7122017","name":"购买","font_class":"goumai","unicode":"e764","unicode_decimal":59236},{"icon_id":"7122018","name":"提醒","font_class":"tixing","unicode":"e765","unicode_decimal":59237},{"icon_id":"7122026","name":"药箱","font_class":"yaoxiang","unicode":"e766","unicode_decimal":59238},{"icon_id":"7122039","name":"医生","font_class":"yisheng","unicode":"e767","unicode_decimal":59239},{"icon_id":"7122051","name":"店铺","font_class":"dianpu","unicode":"e768","unicode_decimal":59240},{"icon_id":"7122074","name":"对话","font_class":"duihua","unicode":"e769","unicode_decimal":59241},{"icon_id":"7122075","name":"地址","font_class":"dizhi","unicode":"e76a","unicode_decimal":59242},{"icon_id":"7122119","name":"报告","font_class":"baogao","unicode":"e76b","unicode_decimal":59243},{"icon_id":"7122127","name":"处方","font_class":"chufang","unicode":"e76c","unicode_decimal":59244},{"icon_id":"7122146","name":"档案","font_class":"dangan","unicode":"e76d","unicode_decimal":59245},{"icon_id":"7122177","name":"分类","font_class":"fenlei","unicode":"e76e","unicode_decimal":59246},{"icon_id":"7122197","name":"付费","font_class":"fufei","unicode":"e76f","unicode_decimal":59247},{"icon_id":"7122249","name":"图片","font_class":"tupian","unicode":"e770","unicode_decimal":59248},{"icon_id":"7122271","name":"日历","font_class":"rili","unicode":"e771","unicode_decimal":59249},{"icon_id":"7122294","name":"语音","font_class":"yuyin","unicode":"e772","unicode_decimal":59250},{"icon_id":"7122302","name":"知识","font_class":"zhishi","unicode":"e773","unicode_decimal":59251},{"icon_id":"7122324","name":"育儿","font_class":"yuer","unicode":"e774","unicode_decimal":59252},{"icon_id":"7122402","name":"医院","font_class":"yiyuan","unicode":"e775","unicode_decimal":59253},{"icon_id":"7122403","name":"卡片","font_class":"qiapian","unicode":"e776","unicode_decimal":59254},{"icon_id":"7122468","name":"纯天然","font_class":"chuntianran","unicode":"e777","unicode_decimal":59255},{"icon_id":"7122471","name":"体重","font_class":"tizhong","unicode":"e778","unicode_decimal":59256},{"icon_id":"7122513","name":"睡眠","font_class":"shuimian","unicode":"e779","unicode_decimal":59257},{"icon_id":"7122519","name":"运动","font_class":"yundong","unicode":"e77a","unicode_decimal":59258},{"icon_id":"7122536","name":"经期","font_class":"jingqi","unicode":"e77b","unicode_decimal":59259},{"icon_id":"7122593","name":"阅读","font_class":"yuedu","unicode":"e77c","unicode_decimal":59260},{"icon_id":"7122656","name":"全科","font_class":"zongheke","unicode":"e77d","unicode_decimal":59261},{"icon_id":"7122701","name":"整形科","font_class":"meirongke","unicode":"e77e","unicode_decimal":59262},{"icon_id":"7122723","name":"麻醉科","font_class":"chuanranke","unicode":"e77f","unicode_decimal":59263},{"icon_id":"7122732","name":"营养科","font_class":"yingyangke","unicode":"e780","unicode_decimal":59264},{"icon_id":"7122751","name":"眼科","font_class":"yanke","unicode":"e781","unicode_decimal":59265},{"icon_id":"7122767","name":"化验科","font_class":"huayanke","unicode":"e782","unicode_decimal":59266},{"icon_id":"7122839","name":"皮肤科","font_class":"pifuke","unicode":"e783","unicode_decimal":59267},{"icon_id":"7122850","name":"腹部","font_class":"zhengxingke","unicode":"e784","unicode_decimal":59268},{"icon_id":"7122874","name":"中医科","font_class":"zhongyike","unicode":"e785","unicode_decimal":59269},{"icon_id":"7122887","name":"生殖科","font_class":"shengzhike","unicode":"e786","unicode_decimal":59270},{"icon_id":"7122914","name":"外科","font_class":"waike","unicode":"e787","unicode_decimal":59271},{"icon_id":"7122926","name":"内科","font_class":"neike","unicode":"e788","unicode_decimal":59272},{"icon_id":"7122957","name":"泌尿科","font_class":"miniaoke","unicode":"e789","unicode_decimal":59273},{"icon_id":"7122967","name":"妇科","font_class":"fuke","unicode":"e78a","unicode_decimal":59274},{"icon_id":"7122979","name":"儿科","font_class":"erke","unicode":"e78b","unicode_decimal":59275},{"icon_id":"7123004","name":"肿瘤科","font_class":"zhongliuke","unicode":"e78c","unicode_decimal":59276},{"icon_id":"7123008","name":"脑科","font_class":"naoke","unicode":"e78d","unicode_decimal":59277},{"icon_id":"7123016","name":"内分泌科","font_class":"neifenmike","unicode":"e78e","unicode_decimal":59278},{"icon_id":"7123058","name":"骨科","font_class":"guke","unicode":"e78f","unicode_decimal":59279},{"icon_id":"7123063","name":"耳鼻喉科","font_class":"erbihouke","unicode":"e790","unicode_decimal":59280},{"icon_id":"7123072","name":"男科","font_class":"nanke","unicode":"e791","unicode_decimal":59281},{"icon_id":"7123082","name":"口腔科","font_class":"kouqiangke","unicode":"e792","unicode_decimal":59282},{"icon_id":"7254829","name":"病理科","font_class":"binglike","unicode":"e793","unicode_decimal":59283},{"icon_id":"7254856","name":"影像科","font_class":"yingxiangke","unicode":"e794","unicode_decimal":59284},{"icon_id":"7254950","name":"传染科","font_class":"chuanranke1","unicode":"e795","unicode_decimal":59285},{"icon_id":"7255002","name":"康复科","font_class":"kangfuke","unicode":"e796","unicode_decimal":59286},{"icon_id":"7255073","name":"其他科","font_class":"qitake","unicode":"e797","unicode_decimal":59287},{"icon_id":"7525614","name":"认证","font_class":"renzheng","unicode":"e79f","unicode_decimal":59295},{"icon_id":"7525616","name":"快递","font_class":"kuaidi","unicode":"e7a0","unicode_decimal":59296},{"icon_id":"7525624","name":"穿戴","font_class":"chuandai-copy","unicode":"e7a1","unicode_decimal":59297},{"icon_id":"8144515","name":"甜味剂","font_class":"tianweiji","unicode":"e7a8","unicode_decimal":59304},{"icon_id":"8144516","name":"毒素","font_class":"dusu","unicode":"e7a9","unicode_decimal":59305},{"icon_id":"8144518","name":"排泄","font_class":"paixie","unicode":"e7aa","unicode_decimal":59306},{"icon_id":"8144519","name":"检测","font_class":"jiance","unicode":"e7ab","unicode_decimal":59307},{"icon_id":"8144520","name":"微生物","font_class":"weishengwu","unicode":"e7ac","unicode_decimal":59308},{"icon_id":"8144521","name":"农药","font_class":"nongyao","unicode":"e7ad","unicode_decimal":59309},{"icon_id":"8144522","name":"四肢","font_class":"sizhi","unicode":"e7ae","unicode_decimal":59310},{"icon_id":"8144523","name":"胸部","font_class":"xiongbu","unicode":"e7af","unicode_decimal":59311},{"icon_id":"8144524","name":"生殖","font_class":"shengzhi","unicode":"e7b0","unicode_decimal":59312},{"icon_id":"8144525","name":"细胞","font_class":"xibao","unicode":"e7b1","unicode_decimal":59313},{"icon_id":"8144526","name":"添加剂","font_class":"tianjiaji","unicode":"e7b2","unicode_decimal":59314},{"icon_id":"8144527","name":"呼吸科","font_class":"huxike","unicode":"e7b3","unicode_decimal":59315},{"icon_id":"8144528","name":"头部","font_class":"toubu","unicode":"e7b4","unicode_decimal":59316},{"icon_id":"8144529","name":"防腐剂","font_class":"fangfuji","unicode":"e7b5","unicode_decimal":59317},{"icon_id":"8144530","name":"神经科","font_class":"shenjingke","unicode":"e7b6","unicode_decimal":59318},{"icon_id":"8144531","name":"病菌","font_class":"bingjun","unicode":"e7b7","unicode_decimal":59319},{"icon_id":"8144532","name":"心脏","font_class":"xinzeng","unicode":"e7b8","unicode_decimal":59320},{"icon_id":"8144533","name":"成分","font_class":"chengfen","unicode":"e7b9","unicode_decimal":59321},{"icon_id":"8540058","name":"防护","font_class":"fanghu","unicode":"e7ba","unicode_decimal":59322},{"icon_id":"8540073","name":"阳光","font_class":"yangguang","unicode":"e7bb","unicode_decimal":59323},{"icon_id":"8540074","name":"水果","font_class":"shuiguo","unicode":"e7bc","unicode_decimal":59324},{"icon_id":"8540075","name":"燕窝","font_class":"yanwo","unicode":"e7bd","unicode_decimal":59325},{"icon_id":"8540076","name":"蜂蜜","font_class":"fengmi","unicode":"e7be","unicode_decimal":59326},{"icon_id":"8540077","name":"地球","font_class":"diqiu","unicode":"e7bf","unicode_decimal":59327},{"icon_id":"8540078","name":"重金属","font_class":"zhongjinshu","unicode":"e7c0","unicode_decimal":59328},{"icon_id":"8540174","name":"产科","font_class":"chanke","unicode":"e7c1","unicode_decimal":59329}]}')
    },
    911: function(e) {
        e.exports = JSON.parse('{"id":"1633079","name":"Graph-知识","font_family":"graph-knowledge","css_prefix_text":"graph-knowledge-","description":"Graph-知识","glyphs":[{"icon_id":"12982982","name":"apple","font_class":"apple","unicode":"e7d9","unicode_decimal":59353},{"icon_id":"12982983","name":"audiobook","font_class":"audiobook","unicode":"e7da","unicode_decimal":59354},{"icon_id":"12982984","name":"audio","font_class":"audio","unicode":"e7db","unicode_decimal":59355},{"icon_id":"12982985","name":"bookmark","font_class":"bookmark","unicode":"e7dc","unicode_decimal":59356},{"icon_id":"12982986","name":"browser-1","font_class":"browser-1","unicode":"e7dd","unicode_decimal":59357},{"icon_id":"12982987","name":"book","font_class":"book","unicode":"e7de","unicode_decimal":59358},{"icon_id":"12982988","name":"audiobook-1","font_class":"audiobook-1","unicode":"e7df","unicode_decimal":59359},{"icon_id":"12982989","name":"browser-2","font_class":"browser-2","unicode":"e7e0","unicode_decimal":59360},{"icon_id":"12982990","name":"chat","font_class":"chat","unicode":"e7e1","unicode_decimal":59361},{"icon_id":"12982991","name":"browser","font_class":"browser","unicode":"e7e2","unicode_decimal":59362},{"icon_id":"12982992","name":"certificate","font_class":"certificate","unicode":"e7e3","unicode_decimal":59363},{"icon_id":"12982993","name":"calculator","font_class":"calculator","unicode":"e7e4","unicode_decimal":59364},{"icon_id":"12982994","name":"chemistry","font_class":"chemistry","unicode":"e7e5","unicode_decimal":59365},{"icon_id":"12982995","name":"chip","font_class":"chip","unicode":"e7e6","unicode_decimal":59366},{"icon_id":"12982997","name":"cloud-computing","font_class":"cloud-computing","unicode":"e7e7","unicode_decimal":59367},{"icon_id":"12982998","name":"ebook","font_class":"ebook","unicode":"e7e8","unicode_decimal":59368},{"icon_id":"12982999","name":"crm","font_class":"crm","unicode":"e7e9","unicode_decimal":59369},{"icon_id":"12983000","name":"doc","font_class":"doc","unicode":"e7ea","unicode_decimal":59370},{"icon_id":"12983001","name":"document","font_class":"document","unicode":"e7eb","unicode_decimal":59371},{"icon_id":"12983002","name":"information","font_class":"information","unicode":"e7ec","unicode_decimal":59372},{"icon_id":"12983003","name":"desktop","font_class":"desktop","unicode":"e7ed","unicode_decimal":59373},{"icon_id":"12983004","name":"listening","font_class":"listening","unicode":"e7ee","unicode_decimal":59374},{"icon_id":"12983005","name":"medal","font_class":"medal","unicode":"e7ef","unicode_decimal":59375},{"icon_id":"12983006","name":"pendrive","font_class":"pendrive","unicode":"e7f0","unicode_decimal":59376},{"icon_id":"12983007","name":"cloud","font_class":"cloud","unicode":"e7f1","unicode_decimal":59377},{"icon_id":"12983008","name":"google-glasses","font_class":"google-glasses","unicode":"e7f2","unicode_decimal":59378},{"icon_id":"12983009","name":"code","font_class":"code","unicode":"e7f3","unicode_decimal":59379},{"icon_id":"12983010","name":"image","font_class":"image","unicode":"e7f4","unicode_decimal":59380},{"icon_id":"12983011","name":"folder-1","font_class":"folder-1","unicode":"e7f5","unicode_decimal":59381},{"icon_id":"12983012","name":"design","font_class":"design","unicode":"e7f6","unicode_decimal":59382},{"icon_id":"12983013","name":"learning","font_class":"learning","unicode":"e7f7","unicode_decimal":59383},{"icon_id":"12983014","name":"mortarboard","font_class":"mortarboard","unicode":"e7f8","unicode_decimal":59384},{"icon_id":"12983015","name":"mouse","font_class":"mouse","unicode":"e7f9","unicode_decimal":59385},{"icon_id":"12983016","name":"mp3","font_class":"mp","unicode":"e7fa","unicode_decimal":59386},{"icon_id":"12983017","name":"pdf","font_class":"pdf","unicode":"e7fb","unicode_decimal":59387},{"icon_id":"12983018","name":"login","font_class":"login","unicode":"e7fc","unicode_decimal":59388},{"icon_id":"12983019","name":"ereader","font_class":"ereader","unicode":"e7fd","unicode_decimal":59389},{"icon_id":"12983020","name":"question","font_class":"question","unicode":"e7fe","unicode_decimal":59390},{"icon_id":"12983021","name":"projector","font_class":"projector","unicode":"e7ff","unicode_decimal":59391},{"icon_id":"12983022","name":"idea","font_class":"idea","unicode":"e800","unicode_decimal":59392},{"icon_id":"12983023","name":"ebook-1","font_class":"ebook-1","unicode":"e801","unicode_decimal":59393},{"icon_id":"12983024","name":"laptop","font_class":"laptop","unicode":"e802","unicode_decimal":59394},{"icon_id":"12983025","name":"ebook-2","font_class":"ebook-2","unicode":"e803","unicode_decimal":59395},{"icon_id":"12983026","name":"learning-1","font_class":"learning-1","unicode":"e804","unicode_decimal":59396},{"icon_id":"12983027","name":"desk","font_class":"desk","unicode":"e805","unicode_decimal":59397},{"icon_id":"12983028","name":"placeholder","font_class":"placeholder","unicode":"e806","unicode_decimal":59398},{"icon_id":"12983029","name":"homework","font_class":"homework","unicode":"e807","unicode_decimal":59399},{"icon_id":"12983030","name":"folder","font_class":"folder","unicode":"e808","unicode_decimal":59400},{"icon_id":"12983031","name":"notes","font_class":"notes","unicode":"e809","unicode_decimal":59401},{"icon_id":"12983032","name":"question-1","font_class":"question-1","unicode":"e80a","unicode_decimal":59402},{"icon_id":"12983033","name":"exam","font_class":"exam","unicode":"e80b","unicode_decimal":59403},{"icon_id":"12983034","name":"mkv","font_class":"mkv","unicode":"e80c","unicode_decimal":59404},{"icon_id":"12983035","name":"library","font_class":"library","unicode":"e80d","unicode_decimal":59405},{"icon_id":"12983036","name":"open-book","font_class":"open-book","unicode":"e80e","unicode_decimal":59406},{"icon_id":"12983037","name":"lecture","font_class":"lecture","unicode":"e80f","unicode_decimal":59407},{"icon_id":"12983038","name":"ebook-3","font_class":"ebook-3","unicode":"e810","unicode_decimal":59408},{"icon_id":"12983039","name":"geography","font_class":"geography","unicode":"e811","unicode_decimal":59409},{"icon_id":"12983040","name":"learning-2","font_class":"learning-2","unicode":"e812","unicode_decimal":59410},{"icon_id":"12983041","name":"professor","font_class":"professor","unicode":"e813","unicode_decimal":59411},{"icon_id":"12983042","name":"earth-globe","font_class":"earth-globe","unicode":"e814","unicode_decimal":59412},{"icon_id":"12983043","name":"keyboard","font_class":"keyboard","unicode":"e815","unicode_decimal":59413},{"icon_id":"12983058","name":"art-and-design","font_class":"art-and-design","unicode":"e816","unicode_decimal":59414},{"icon_id":"12983059","name":"art-book","font_class":"art-book","unicode":"e817","unicode_decimal":59415},{"icon_id":"12983060","name":"browser","font_class":"browser1","unicode":"e818","unicode_decimal":59416},{"icon_id":"12983061","name":"brush","font_class":"brush","unicode":"e819","unicode_decimal":59417},{"icon_id":"12983062","name":"controls","font_class":"controls","unicode":"e81a","unicode_decimal":59418},{"icon_id":"12983063","name":"crayon","font_class":"crayon","unicode":"e81b","unicode_decimal":59419},{"icon_id":"12983064","name":"compass","font_class":"compass","unicode":"e81c","unicode_decimal":59420},{"icon_id":"12983065","name":"desk-lamp","font_class":"desk-lamp","unicode":"e81d","unicode_decimal":59421},{"icon_id":"12983066","name":"crop","font_class":"crop","unicode":"e81e","unicode_decimal":59422},{"icon_id":"12983067","name":"cutter","font_class":"cutter","unicode":"e81f","unicode_decimal":59423},{"icon_id":"12983068","name":"eye","font_class":"eye","unicode":"e820","unicode_decimal":59424},{"icon_id":"12983069","name":"eraser","font_class":"eraser","unicode":"e821","unicode_decimal":59425},{"icon_id":"12983070","name":"frame","font_class":"frame","unicode":"e822","unicode_decimal":59426},{"icon_id":"12983071","name":"idea","font_class":"idea1","unicode":"e823","unicode_decimal":59427},{"icon_id":"12983072","name":"easel","font_class":"easel","unicode":"e824","unicode_decimal":59428},{"icon_id":"12983073","name":"illustrator","font_class":"illustrator","unicode":"e825","unicode_decimal":59429},{"icon_id":"12983074","name":"layers","font_class":"layers","unicode":"e826","unicode_decimal":59430},{"icon_id":"12983075","name":"folder","font_class":"folder1","unicode":"e827","unicode_decimal":59431},{"icon_id":"12983076","name":"laptop","font_class":"laptop1","unicode":"e828","unicode_decimal":59432},{"icon_id":"12983077","name":"magic-wand","font_class":"magic-wand","unicode":"e829","unicode_decimal":59433},{"icon_id":"12983078","name":"mouse","font_class":"mouse1","unicode":"e82a","unicode_decimal":59434},{"icon_id":"12983079","name":"microphone","font_class":"microphone","unicode":"e82b","unicode_decimal":59435},{"icon_id":"12983080","name":"paint-brush","font_class":"paint-brush","unicode":"e82c","unicode_decimal":59436},{"icon_id":"12983081","name":"paint-roller","font_class":"paint-roller","unicode":"e82d","unicode_decimal":59437},{"icon_id":"12983082","name":"paint-bucket","font_class":"paint-bucket","unicode":"e82e","unicode_decimal":59438},{"icon_id":"12983083","name":"paint-spray","font_class":"paint-spray","unicode":"e82f","unicode_decimal":59439},{"icon_id":"12983084","name":"paint-swatch","font_class":"paint-swatch","unicode":"e830","unicode_decimal":59440},{"icon_id":"12983085","name":"paint-tube","font_class":"paint-tube","unicode":"e831","unicode_decimal":59441},{"icon_id":"12983086","name":"photoshop","font_class":"photoshop","unicode":"e832","unicode_decimal":59442},{"icon_id":"12983087","name":"pencil-case","font_class":"pencil-case","unicode":"e833","unicode_decimal":59443},{"icon_id":"12983088","name":"rubber-stamp","font_class":"rubber-stamp","unicode":"e834","unicode_decimal":59444},{"icon_id":"12983089","name":"pen-and-ink","font_class":"pen-and-ink","unicode":"e835","unicode_decimal":59445},{"icon_id":"12983090","name":"rubiks-cube","font_class":"rubiks-cube","unicode":"e836","unicode_decimal":59446},{"icon_id":"12983091","name":"printer","font_class":"printer","unicode":"e837","unicode_decimal":59447},{"icon_id":"12983092","name":"pen-tool","font_class":"pen-tool","unicode":"e838","unicode_decimal":59448},{"icon_id":"12983093","name":"sharpener","font_class":"sharpener","unicode":"e839","unicode_decimal":59449},{"icon_id":"12983094","name":"photo-camera","font_class":"photo-camera","unicode":"e83a","unicode_decimal":59450},{"icon_id":"12983095","name":"smartphone","font_class":"smartphone","unicode":"e83b","unicode_decimal":59451},{"icon_id":"12983096","name":"wacom","font_class":"wacom","unicode":"e83c","unicode_decimal":59452},{"icon_id":"12983097","name":"pencil","font_class":"pencil","unicode":"e83d","unicode_decimal":59453},{"icon_id":"12983098","name":"video-player","font_class":"video-player","unicode":"e83e","unicode_decimal":59454},{"icon_id":"12983099","name":"sculpture","font_class":"sculpture","unicode":"e83f","unicode_decimal":59455},{"icon_id":"12983100","name":"scissors","font_class":"scissors","unicode":"e840","unicode_decimal":59456},{"icon_id":"12983101","name":"shutter","font_class":"shutter","unicode":"e841","unicode_decimal":59457},{"icon_id":"12983102","name":"trash-can","font_class":"trash-can","unicode":"e842","unicode_decimal":59458},{"icon_id":"12983103","name":"startup","font_class":"startup","unicode":"e843","unicode_decimal":59459},{"icon_id":"12983104","name":"palette","font_class":"palette","unicode":"e844","unicode_decimal":59460},{"icon_id":"12983105","name":"zoom","font_class":"zoom","unicode":"e845","unicode_decimal":59461},{"icon_id":"12983106","name":"pipette-tool","font_class":"pipette-tool","unicode":"e846","unicode_decimal":59462},{"icon_id":"12983107","name":"quality","font_class":"quality","unicode":"e847","unicode_decimal":59463}]}')
    },
    912: function(e) {
        e.exports = JSON.parse('{"id":"1633087","name":"Graph-网络","font_family":"graph-network","css_prefix_text":"graph-network-","description":"Graph-网络","glyphs":[{"icon_id":"12983137","name":"alert","font_class":"alert","unicode":"e800","unicode_decimal":59392},{"icon_id":"12983138","name":"access","font_class":"access","unicode":"e801","unicode_decimal":59393},{"icon_id":"12983139","name":"browser-1","font_class":"browser-1","unicode":"e802","unicode_decimal":59394},{"icon_id":"12983140","name":"antivirus","font_class":"antivirus","unicode":"e803","unicode_decimal":59395},{"icon_id":"12983141","name":"browser","font_class":"browser","unicode":"e804","unicode_decimal":59396},{"icon_id":"12983142","name":"browser-2","font_class":"browser-2","unicode":"e805","unicode_decimal":59397},{"icon_id":"12983143","name":"browser-3","font_class":"browser-3","unicode":"e806","unicode_decimal":59398},{"icon_id":"12983144","name":"bomb","font_class":"bomb","unicode":"e807","unicode_decimal":59399},{"icon_id":"12983145","name":"cloud-computing-3","font_class":"cloud-computing-3","unicode":"e808","unicode_decimal":59400},{"icon_id":"12983146","name":"cloud-computing-2","font_class":"cloud-computing-2","unicode":"e809","unicode_decimal":59401},{"icon_id":"12983147","name":"cloud-computing-1","font_class":"cloud-computing-1","unicode":"e80a","unicode_decimal":59402},{"icon_id":"12983148","name":"cloud-computing","font_class":"cloud-computing","unicode":"e80b","unicode_decimal":59403},{"icon_id":"12983149","name":"credit-card","font_class":"credit-card","unicode":"e80c","unicode_decimal":59404},{"icon_id":"12983150","name":"computer","font_class":"computer","unicode":"e80d","unicode_decimal":59405},{"icon_id":"12983151","name":"email-1","font_class":"email-","unicode":"e80e","unicode_decimal":59406},{"icon_id":"12983152","name":"email-2","font_class":"email-1","unicode":"e80f","unicode_decimal":59407},{"icon_id":"12983153","name":"email","font_class":"email","unicode":"e810","unicode_decimal":59408},{"icon_id":"12983154","name":"database","font_class":"database","unicode":"e811","unicode_decimal":59409},{"icon_id":"12983155","name":"danger","font_class":"danger","unicode":"e812","unicode_decimal":59410},{"icon_id":"12983156","name":"file","font_class":"file","unicode":"e813","unicode_decimal":59411},{"icon_id":"12983157","name":"email-3","font_class":"email-3","unicode":"e814","unicode_decimal":59412},{"icon_id":"12983158","name":"file-2","font_class":"file-2","unicode":"e815","unicode_decimal":59413},{"icon_id":"12983159","name":"fishing","font_class":"fishing","unicode":"e816","unicode_decimal":59414},{"icon_id":"12983160","name":"fishing-1","font_class":"fishing-1","unicode":"e817","unicode_decimal":59415},{"icon_id":"12983161","name":"firewall","font_class":"firewall","unicode":"e818","unicode_decimal":59416},{"icon_id":"12983162","name":"folder-1","font_class":"folder-1","unicode":"e819","unicode_decimal":59417},{"icon_id":"12983163","name":"file-1","font_class":"file-1","unicode":"e81a","unicode_decimal":59418},{"icon_id":"12983164","name":"folder","font_class":"folder","unicode":"e81b","unicode_decimal":59419},{"icon_id":"12983165","name":"key","font_class":"key","unicode":"e81c","unicode_decimal":59420},{"icon_id":"12983166","name":"padlock-1","font_class":"padlock-1","unicode":"e81d","unicode_decimal":59421},{"icon_id":"12983167","name":"money","font_class":"money","unicode":"e81e","unicode_decimal":59422},{"icon_id":"12983168","name":"padlock-2","font_class":"padlock-2","unicode":"e81f","unicode_decimal":59423},{"icon_id":"12983169","name":"padlock-4","font_class":"padlock-4","unicode":"e820","unicode_decimal":59424},{"icon_id":"12983170","name":"keypad","font_class":"keypad","unicode":"e821","unicode_decimal":59425},{"icon_id":"12983171","name":"pendrive","font_class":"pendrive","unicode":"e822","unicode_decimal":59426},{"icon_id":"12983172","name":"padlock","font_class":"padlock","unicode":"e823","unicode_decimal":59427},{"icon_id":"12983173","name":"privacy","font_class":"privacy","unicode":"e824","unicode_decimal":59428},{"icon_id":"12983174","name":"padlock-3","font_class":"padlock-3","unicode":"e825","unicode_decimal":59429},{"icon_id":"12983175","name":"shield-1","font_class":"shield-1","unicode":"e826","unicode_decimal":59430},{"icon_id":"12983176","name":"shield","font_class":"shield","unicode":"e827","unicode_decimal":59431},{"icon_id":"12983177","name":"shield-2","font_class":"shield-2","unicode":"e828","unicode_decimal":59432},{"icon_id":"12983178","name":"smartphone-1","font_class":"smartphone-1","unicode":"e829","unicode_decimal":59433},{"icon_id":"12983179","name":"spy","font_class":"spy","unicode":"e82a","unicode_decimal":59434},{"icon_id":"12983180","name":"user","font_class":"user","unicode":"e82b","unicode_decimal":59435},{"icon_id":"12983181","name":"smartphone","font_class":"smartphone","unicode":"e82c","unicode_decimal":59436},{"icon_id":"12983182","name":"warning","font_class":"warning","unicode":"e82d","unicode_decimal":59437},{"icon_id":"12983183","name":"virus","font_class":"virus","unicode":"e82e","unicode_decimal":59438},{"icon_id":"12983184","name":"worldwide","font_class":"worldwide","unicode":"e82f","unicode_decimal":59439},{"icon_id":"12983185","name":"virus-1","font_class":"virus-1","unicode":"e830","unicode_decimal":59440},{"icon_id":"12983186","name":"webcam","font_class":"webcam","unicode":"e831","unicode_decimal":59441}]}')
    },
    913: function(e) {
        e.exports = JSON.parse('{"id":"1632916","name":"Graph-策略","font_family":"graph-strategy","css_prefix_text":"graph-strategy-","description":"Graph-策略","glyphs":[{"icon_id":"12982190","name":"books","font_class":"books","unicode":"e799","unicode_decimal":59289},{"icon_id":"12982191","name":"binoculars","font_class":"binoculars","unicode":"e79a","unicode_decimal":59290},{"icon_id":"12982192","name":"brainstorm","font_class":"brainstorm","unicode":"e79b","unicode_decimal":59291},{"icon_id":"12982193","name":"brain","font_class":"brain","unicode":"e79c","unicode_decimal":59292},{"icon_id":"12982194","name":"calculator","font_class":"calculator","unicode":"e79d","unicode_decimal":59293},{"icon_id":"12982195","name":"brain-1","font_class":"brain-1","unicode":"e79e","unicode_decimal":59294},{"icon_id":"12982196","name":"chess","font_class":"chess","unicode":"e79f","unicode_decimal":59295},{"icon_id":"12982197","name":"caution","font_class":"caution","unicode":"e7a0","unicode_decimal":59296},{"icon_id":"12982198","name":"computer","font_class":"computer","unicode":"e7a1","unicode_decimal":59297},{"icon_id":"12982199","name":"computer-1","font_class":"computer-1","unicode":"e7a2","unicode_decimal":59298},{"icon_id":"12982200","name":"confusion","font_class":"confusion","unicode":"e7a3","unicode_decimal":59299},{"icon_id":"12982201","name":"creative","font_class":"creative","unicode":"e7a4","unicode_decimal":59300},{"icon_id":"12982202","name":"finding-2","font_class":"finding-2","unicode":"e7a5","unicode_decimal":59301},{"icon_id":"12982203","name":"data","font_class":"data","unicode":"e7a6","unicode_decimal":59302},{"icon_id":"12982204","name":"finding-1","font_class":"finding-1","unicode":"e7a7","unicode_decimal":59303},{"icon_id":"12982205","name":"connection","font_class":"connection","unicode":"e7a8","unicode_decimal":59304},{"icon_id":"12982206","name":"goal","font_class":"goal","unicode":"e7a9","unicode_decimal":59305},{"icon_id":"12982207","name":"flag","font_class":"flag","unicode":"e7aa","unicode_decimal":59306},{"icon_id":"12982208","name":"direction","font_class":"direction","unicode":"e7ab","unicode_decimal":59307},{"icon_id":"12982209","name":"hierarchy","font_class":"hierarchy","unicode":"e7ac","unicode_decimal":59308},{"icon_id":"12982210","name":"finding","font_class":"finding","unicode":"e7ad","unicode_decimal":59309},{"icon_id":"12982211","name":"lamp","font_class":"lamp","unicode":"e7ae","unicode_decimal":59310},{"icon_id":"12982212","name":"idea","font_class":"idea","unicode":"e7af","unicode_decimal":59311},{"icon_id":"12982213","name":"launching","font_class":"launching","unicode":"e7b0","unicode_decimal":59312},{"icon_id":"12982214","name":"location","font_class":"location","unicode":"e7b1","unicode_decimal":59313},{"icon_id":"12982215","name":"low-performance","font_class":"low-performance","unicode":"e7b2","unicode_decimal":59314},{"icon_id":"12982216","name":"marketing","font_class":"marketing","unicode":"e7b3","unicode_decimal":59315},{"icon_id":"12982217","name":"leader","font_class":"leader","unicode":"e7b4","unicode_decimal":59316},{"icon_id":"12982218","name":"management","font_class":"management","unicode":"e7b5","unicode_decimal":59317},{"icon_id":"12982219","name":"megaphone","font_class":"megaphone","unicode":"e7b6","unicode_decimal":59318},{"icon_id":"12982220","name":"new","font_class":"new","unicode":"e7b7","unicode_decimal":59319},{"icon_id":"12982221","name":"rocket","font_class":"rocket","unicode":"e7b8","unicode_decimal":59320},{"icon_id":"12982222","name":"security","font_class":"security","unicode":"e7b9","unicode_decimal":59321},{"icon_id":"12982223","name":"stopwatch","font_class":"stopwatch","unicode":"e7ba","unicode_decimal":59322},{"icon_id":"12982224","name":"summit","font_class":"summit","unicode":"e7bb","unicode_decimal":59323},{"icon_id":"12982225","name":"money-1","font_class":"money-1","unicode":"e7bc","unicode_decimal":59324},{"icon_id":"12982226","name":"new-1","font_class":"new-1","unicode":"e7bd","unicode_decimal":59325},{"icon_id":"12982227","name":"target","font_class":"target","unicode":"e7be","unicode_decimal":59326},{"icon_id":"12982228","name":"strategic","font_class":"strategic","unicode":"e7bf","unicode_decimal":59327},{"icon_id":"12982229","name":"think","font_class":"think","unicode":"e7c0","unicode_decimal":59328},{"icon_id":"12982230","name":"target-1","font_class":"target-1","unicode":"e7c1","unicode_decimal":59329},{"icon_id":"12982231","name":"saving","font_class":"saving","unicode":"e7c2","unicode_decimal":59330},{"icon_id":"12982232","name":"setting","font_class":"setting","unicode":"e7c3","unicode_decimal":59331},{"icon_id":"12982233","name":"money","font_class":"money","unicode":"e7c4","unicode_decimal":59332},{"icon_id":"12982234","name":"top","font_class":"top","unicode":"e7c5","unicode_decimal":59333},{"icon_id":"12982235","name":"strategy-1","font_class":"strategy-1","unicode":"e7c6","unicode_decimal":59334},{"icon_id":"12982236","name":"trophy","font_class":"trophy","unicode":"e7c7","unicode_decimal":59335},{"icon_id":"12982237","name":"world","font_class":"world","unicode":"e7c8","unicode_decimal":59336},{"icon_id":"12982238","name":"strategy","font_class":"strategy","unicode":"e7c9","unicode_decimal":59337},{"icon_id":"12982239","name":"time","font_class":"time","unicode":"e7ca","unicode_decimal":59338}]}')
    },
    914: function(e) {
        e.exports = JSON.parse('{"id":"1632897","name":"Graph-终端","font_family":"graph-terminal","css_prefix_text":"graph-terminal-","description":"Graph-终端","glyphs":[{"icon_id":"11755357","name":"一键开门","font_class":"peizhitubiaosvg-","unicode":"e652","unicode_decimal":58962},{"icon_id":"11755375","name":"物业服务","font_class":"peizhitubiaosvg-1","unicode":"e653","unicode_decimal":58963},{"icon_id":"11755390","name":"物业资讯","font_class":"peizhitubiaosvg-2","unicode":"e654","unicode_decimal":58964},{"icon_id":"11755396","name":"访客通行","font_class":"peizhitubiaosvg-3","unicode":"e655","unicode_decimal":58965},{"icon_id":"11755409","name":"投诉建议","font_class":"peizhitubiaosvg-4","unicode":"e656","unicode_decimal":58966},{"icon_id":"11755416","name":"问卷调查","font_class":"peizhitubiaosvg-5","unicode":"e657","unicode_decimal":58967},{"icon_id":"11755421","name":"物业介绍","font_class":"peizhitubiaosvg-6","unicode":"e658","unicode_decimal":58968},{"icon_id":"11755436","name":"数字社区","font_class":"peizhitubiaosvg-7","unicode":"e659","unicode_decimal":58969},{"icon_id":"11755443","name":"线上缴费","font_class":"peizhitubiaosvg-8","unicode":"e65a","unicode_decimal":58970},{"icon_id":"11755450","name":"费用缴纳","font_class":"peizhitubiaosvg-9","unicode":"e65b","unicode_decimal":58971},{"icon_id":"11755472","name":"大事记","font_class":"peizhitubiaosvg-10","unicode":"e65c","unicode_decimal":58972},{"icon_id":"11755477","name":"便民服务","font_class":"peizhitubiaosvg-11","unicode":"e65d","unicode_decimal":58973},{"icon_id":"11755483","name":"失物登记","font_class":"peizhitubiaosvg-12","unicode":"e65e","unicode_decimal":58974},{"icon_id":"11755490","name":"周边商家","font_class":"peizhitubiaosvg-13","unicode":"e65f","unicode_decimal":58975},{"icon_id":"11755498","name":"黄页","font_class":"peizhitubiaosvg-14","unicode":"e660","unicode_decimal":58976},{"icon_id":"11755505","name":"车位办理","font_class":"peizhitubiaosvg-15","unicode":"e661","unicode_decimal":58977},{"icon_id":"11755514","name":"业务办理","font_class":"peizhitubiaosvg-16","unicode":"e662","unicode_decimal":58978},{"icon_id":"11755536","name":"全部活动","font_class":"peizhitubiaosvg-17","unicode":"e663","unicode_decimal":58979},{"icon_id":"11755547","name":"全部","font_class":"peizhitubiaosvg-18","unicode":"e664","unicode_decimal":58980},{"icon_id":"11755556","name":"乘梯指引","font_class":"peizhitubiaosvg-19","unicode":"e665","unicode_decimal":58981},{"icon_id":"11755561","name":"停车指引","font_class":"peizhitubiaosvg-20","unicode":"e666","unicode_decimal":58982},{"icon_id":"11755567","name":"项目介绍","font_class":"peizhitubiaosvg-21","unicode":"e667","unicode_decimal":58983},{"icon_id":"11755582","name":"快捷商务","font_class":"peizhitubiaosvg-22","unicode":"e668","unicode_decimal":58984},{"icon_id":"11755584","name":"月卡管理","font_class":"peizhitubiaosvg-23","unicode":"e669","unicode_decimal":58985},{"icon_id":"11755591","name":"商家推荐","font_class":"peizhitubiaosvg-24","unicode":"e66a","unicode_decimal":58986},{"icon_id":"11755607","name":"一键报事","font_class":"peizhitubiaosvg-25","unicode":"e66b","unicode_decimal":58987},{"icon_id":"11755612","name":"物业报单","font_class":"peizhitubiaosvg-26","unicode":"e66c","unicode_decimal":58988},{"icon_id":"11755616","name":"报单记录","font_class":"peizhitubiaosvg-27","unicode":"e66d","unicode_decimal":58989},{"icon_id":"11755637","name":"来访预约","font_class":"peizhitubiaosvg-28","unicode":"e66e","unicode_decimal":58990},{"icon_id":"11755641","name":"入驻申请","font_class":"peizhitubiaosvg-29","unicode":"e66f","unicode_decimal":58991}]}')
    },
    915: function(e, n, t) {},
    916: function(e, n, t) {},
    917: function(e, n, t) {},
    918: function(e, n, t) {},
    919: function(e, n, t) {},
    920: function(e, n, t) {},
    921: function(e, n, t) {},
    924: function(e, n, t) {},
    925: function(e, n, t) {},
    926: function(e, n, t) {},
    927: function(e, n, t) {},
    950: function(e, n, t) {
        "use strict";
        var i = t(1);
        var a = t(0);
        var r = t(11);
        var o = t(887);
        var c = t(8);
        var d = t(3);
        var u = t(169);
        var l = t(135);
        var s = t(154);
        var f = t(170);
        var p = undefined && undefined.__extends || function() {
            var e = function(n, t) {
                e = Object.setPrototypeOf || {
                    __proto__: []
                }instanceof Array && function(e, n) {
                    e.__proto__ = n
                }
                || function(e, n) {
                    for (var t in n)
                        if (n.hasOwnProperty(t))
                            e[t] = n[t]
                }
                ;
                return e(n, t)
            };
            return function(n, t) {
                e(n, t);
                function i() {
                    this.constructor = n
                }
                n.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype,
                new i)
            }
        }();
        var h = {
            "en-US": u,
            "zh-CN": l,
            "zh-TW": s,
            "zh-MO": s,
            "ja-Jp": f
        };
        var m = t(888);
        var _ = o["bind"](m);
        var v = function(e) {
            p(n, e);
            function n() {
                return e !== null && e.apply(this, arguments) || this
            }
            n.prototype.getNextLocale = function() {
                var e = d["getInitOptions"]().currentLocale;
                var n = Object.keys(h);
                if (!h[e]) {
                    e = n[0]
                }
                return h[e]
            }
            ;
            n.prototype.render = function() {
                return i["createElement"](c["ConfigProvider"], {
                    locale: this.getNextLocale()
                }, i["createElement"]("div", {
                    className: "skeleton"
                }, this.props.children))
            }
            ;
            n.propTypes = {
                children: a["oneOfType"]([a["element"], a["arrayOf"](a["element"])])
            };
            return n
        }(i["Component"]);
        var g = Object(r["inject"])()(v);
        var y = n["a"] = g
    }
}]);

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase)
}(this, function(zt) {
    "use strict";
    try {
        (function() {
            zt = zt && zt.hasOwnProperty("default") ? zt.default : zt;
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                    })(t, e)
            };
            var s = function() {
                return (s = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }).apply(this, arguments)
            };

            function u(o, s, a, c) {
                return new(a = a || Promise)(function(t, e) {
                    function r(t) {
                        try {
                            i(c.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function n(t) {
                        try {
                            i(c.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function i(e) {
                        e.done ? t(e.value) : new a(function(t) {
                            t(e.value)
                        }).then(r, n)
                    }
                    i((c = c.apply(o, s || [])).next())
                })
            }

            function _(r, n) {
                var i, o, s, t, a = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0]) throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return t = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                }, "function" == typeof Symbol && (t[Symbol.iterator] = function() {
                    return this
                }), t;

                function e(e) {
                    return function(t) {
                        return function(e) {
                            if (i) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s;
                                switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: e[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, o = e[1], e = [0];
                                        continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                            a.label = e[1];
                                            break
                                        }
                                        if (6 === e[0] && a.label < s[1]) {
                                            a.label = s[1], s = e;
                                            break
                                        }
                                        if (s && a.label < s[2]) {
                                            a.label = s[2], a.ops.push(e);
                                            break
                                        }
                                        s[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                e = n.call(r, a)
                            } catch (t) {
                                e = [6, t], o = 0
                            } finally {
                                i = s = 0
                            }
                            if (5 & e[0]) throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, t])
                    }
                }
            }

            function n(t, e) {
                var r = "function" == typeof Symbol && t[Symbol.iterator];
                if (!r) return t;
                var n, i, o = r.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || 0 < e--) && !(n = o.next()).done;) s.push(n.value)
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }
            var t, e, i, h = (i = Error, r(t = a, e = i), void(t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)), a);

            function o() {
                this.constructor = t
            }

            function a(t, e) {
                var r = i.call(this, e) || this;
                return r.code = t, r.name = "FirebaseError", Object.setPrototypeOf(r, a.prototype), Error.captureStackTrace && Error.captureStackTrace(r, c.prototype.create), r
            }
            var c = (l.prototype.create = function(t) {
                for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                for (var n = e[0] || {}, i = this.service + "/" + t, o = this.errors[t], s = o ? function(t, n) {
                        return t.replace(p, function(t, e) {
                            var r = n[e];
                            return null != r ? r.toString() : "<" + e + "?>"
                        })
                    }(o, n) : "Error", a = this.serviceName + ": " + s + " (" + i + ").", c = new h(i, a), u = 0, l = Object.keys(n); u < l.length; u++) {
                    var f = l[u];
                    "_" !== f.slice(-1) && (f in c && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), c[f] = n[f])
                }
                return c
            }, l);

            function l(t, e, r) {
                this.service = t, this.serviceName = e, this.errors = r
            }
            var p = /\{\$([^}]+)}/g;

            function f(r) {
                return new Promise(function(t, e) {
                    r.onsuccess = function() {
                        t(r.result)
                    }, r.onerror = function() {
                        e(r.error)
                    }
                })
            }

            function g(r, n, i) {
                var o, t = new Promise(function(t, e) {
                    f(o = r[n].apply(r, i)).then(t, e)
                });
                return t.request = o, t
            }

            function d(t, r, e) {
                e.forEach(function(e) {
                    Object.defineProperty(t.prototype, e, {
                        get: function() {
                            return this[r][e]
                        },
                        set: function(t) {
                            this[r][e] = t
                        }
                    })
                })
            }

            function v(e, r, n, t) {
                t.forEach(function(t) {
                    t in n.prototype && (e.prototype[t] = function() {
                        return g(this[r], t, arguments)
                    })
                })
            }

            function m(e, r, n, t) {
                t.forEach(function(t) {
                    t in n.prototype && (e.prototype[t] = function() {
                        return this[r][t].apply(this[r], arguments)
                    })
                })
            }

            function y(e, r, n, t) {
                t.forEach(function(t) {
                    t in n.prototype && (e.prototype[t] = function() {
                        return function(t, e, r) {
                            var n = g(t, e, r);
                            return n.then(function(t) {
                                if (t) return new w(t, n.request)
                            })
                        }(this[r], t, arguments)
                    })
                })
            }

            function b(t) {
                this._index = t
            }

            function w(t, e) {
                this._cursor = t, this._request = e
            }

            function S(t) {
                this._store = t
            }

            function E(r) {
                this._tx = r, this.complete = new Promise(function(t, e) {
                    r.oncomplete = function() {
                        t()
                    }, r.onerror = function() {
                        e(r.error)
                    }, r.onabort = function() {
                        e(r.error)
                    }
                })
            }

            function T(t, e, r) {
                this._db = t, this.oldVersion = e, this.transaction = new E(r)
            }

            function C(t) {
                this._db = t
            }
            d(b, "_index", ["name", "keyPath", "multiEntry", "unique"]), v(b, "_index", IDBIndex, ["get", "getKey", "getAll", "getAllKeys", "count"]), y(b, "_index", IDBIndex, ["openCursor", "openKeyCursor"]), d(w, "_cursor", ["direction", "key", "primaryKey", "value"]), v(w, "_cursor", IDBCursor, ["update", "delete"]), ["advance", "continue", "continuePrimaryKey"].forEach(function(r) {
                r in IDBCursor.prototype && (w.prototype[r] = function() {
                    var e = this,
                        t = arguments;
                    return Promise.resolve().then(function() {
                        return e._cursor[r].apply(e._cursor, t), f(e._request).then(function(t) {
                            if (t) return new w(t, e._request)
                        })
                    })
                })
            }), S.prototype.createIndex = function() {
                return new b(this._store.createIndex.apply(this._store, arguments))
            }, S.prototype.index = function() {
                return new b(this._store.index.apply(this._store, arguments))
            }, d(S, "_store", ["name", "keyPath", "indexNames", "autoIncrement"]), v(S, "_store", IDBObjectStore, ["put", "add", "delete", "clear", "get", "getAll", "getKey", "getAllKeys", "count"]), y(S, "_store", IDBObjectStore, ["openCursor", "openKeyCursor"]), m(S, "_store", IDBObjectStore, ["deleteIndex"]), E.prototype.objectStore = function() {
                return new S(this._tx.objectStore.apply(this._tx, arguments))
            }, d(E, "_tx", ["objectStoreNames", "mode"]), m(E, "_tx", IDBTransaction, ["abort"]), T.prototype.createObjectStore = function() {
                return new S(this._db.createObjectStore.apply(this._db, arguments))
            }, d(T, "_db", ["name", "version", "objectStoreNames"]), m(T, "_db", IDBDatabase, ["deleteObjectStore", "close"]), C.prototype.transaction = function() {
                return new E(this._db.transaction.apply(this._db, arguments))
            }, d(C, "_db", ["name", "version", "objectStoreNames"]), m(C, "_db", IDBDatabase, ["close"]), ["openCursor", "openKeyCursor"].forEach(function(i) {
                [S, b].forEach(function(t) {
                    i in t.prototype && (t.prototype[i.replace("open", "iterate")] = function() {
                        var t = function(t) {
                                return Array.prototype.slice.call(t)
                            }(arguments),
                            e = t[t.length - 1],
                            r = this._store || this._index,
                            n = r[i].apply(r, t.slice(0, -1));
                        n.onsuccess = function() {
                            e(n.result)
                        }
                    })
                })
            }), [b, S].forEach(function(t) {
                t.prototype.getAll || (t.prototype.getAll = function(t, r) {
                    var n = this,
                        i = [];
                    return new Promise(function(e) {
                        n.iterateCursor(t, function(t) {
                            t ? (i.push(t.value), void 0 === r || i.length != r ? t.continue() : e(i)) : e(i)
                        })
                    })
                })
            });
            var I, k = 1e4,
                O = "w:0.3.1",
                F = "FIS_v2",
                M = "https://firebaseinstallations.googleapis.com/v1",
                P = 36e5,
                j = ((I = {})["missing-app-config-values"] = "Missing App configuration values.", I["create-installation-failed"] = "Could not register Firebase Installation.", I["generate-token-failed"] = "Could not generate Auth Token.", I["not-registered"] = "Firebase Installation is not registered.", I["installation-not-found"] = "Firebase Installation not found.", I["request-failed"] = '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"', I["app-offline"] = "Could not process request. Application offline.", I["delete-pending-registration"] = "Can't delete installation while there is a pending registration request.", I),
                A = new c("installations", "Installations", j);

            function L(t) {
                return t instanceof h && t.code.includes("request-failed")
            }

            function N(t) {
                if (!t || !t.options) throw A.create("missing-app-config-values");
                var e = t.name,
                    r = t.options,
                    n = r.projectId,
                    i = r.apiKey,
                    o = r.appId;
                if (!(e && n && i && o)) throw A.create("missing-app-config-values");
                return {
                    appName: e,
                    projectId: n,
                    apiKey: i,
                    appId: o
                }
            }

            function D(t) {
                var e = t.projectId;
                return M + "/projects/" + e + "/installations"
            }

            function x(t) {
                return {
                    token: t.token,
                    requestStatus: 2,
                    expiresIn: function(t) {
                        return Number(t.replace("s", "000"))
                    }(t.expiresIn),
                    creationTime: Date.now()
                }
            }

            function R(n, i) {
                return u(this, void 0, void 0, function() {
                    var e, r;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, i.json()];
                            case 1:
                                return e = t.sent(), r = e.error, [2, A.create("request-failed", {
                                    requestName: n,
                                    serverCode: r.code,
                                    serverMessage: r.message,
                                    serverStatus: r.status
                                })]
                        }
                    })
                })
            }

            function q(t) {
                var e = t.apiKey;
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }

            function B(t, e) {
                var r = e.refreshToken,
                    n = q(t);
                return n.append("Authorization", function(t) {
                    return F + " " + t
                }(r)), n
            }

            function K(r) {
                return u(this, void 0, void 0, function() {
                    var e;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, r()];
                            case 1:
                                return 500 <= (e = t.sent()).status && e.status < 600 ? [2, r()] : [2, e]
                        }
                    })
                })
            }

            function V(e) {
                return new Promise(function(t) {
                    setTimeout(t, e)
                })
            }

            function z(t) {
                return btoa(String.fromCharCode.apply(String, function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
                    return t
                }(t))).replace(/\+/g, "-").replace(/\//g, "_")
            }
            var H = /^[cdef][\w-]{21}$/,
                $ = "";

            function U() {
                try {
                    var t = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(t), t[0] = 112 + t[0] % 16;
                    var e = function(t) {
                        return z(t).substr(0, 22)
                    }(t);
                    return H.test(e) ? e : $
                } catch (t) {
                    return $
                }
            }
            var G, W, J = "firebase-installations-database",
                Y = 1,
                Q = "firebase-installations-store",
                X = null;

            function Z() {
                return X = X || function(t, e, r) {
                    var n = g(indexedDB, "open", [t, e]),
                        i = n.request;
                    return i && (i.onupgradeneeded = function(t) {
                        r && r(new T(i.result, t.oldVersion, i.transaction))
                    }), n.then(function(t) {
                        return new C(t)
                    })
                }(J, Y, function(t) {
                    switch (t.oldVersion) {
                        case 0:
                            t.createObjectStore(Q)
                    }
                })
            }

            function tt(i, o) {
                return u(this, void 0, void 0, function() {
                    var e, r, n;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = nt(i), [4, Z()];
                            case 1:
                                return r = t.sent(), [4, (n = r.transaction(Q, "readwrite")).objectStore(Q).put(o, e)];
                            case 2:
                                return t.sent(), [4, n.complete];
                            case 3:
                                return t.sent(), [2, o]
                        }
                    })
                })
            }

            function et(i) {
                return u(this, void 0, void 0, function() {
                    var e, r, n;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = nt(i), [4, Z()];
                            case 1:
                                return r = t.sent(), [4, (n = r.transaction(Q, "readwrite")).objectStore(Q).delete(e)];
                            case 2:
                                return t.sent(), [4, n.complete];
                            case 3:
                                return t.sent(), [2]
                        }
                    })
                })
            }

            function rt(a, c) {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i, o, s;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = nt(a), [4, Z()];
                            case 1:
                                return r = t.sent(), n = r.transaction(Q, "readwrite"), [4, (i = n.objectStore(Q)).get(e)];
                            case 2:
                                return o = t.sent(), void 0 !== (s = c(o)) ? [3, 4] : [4, i.delete(e)];
                            case 3:
                                return t.sent(), [3, 6];
                            case 4:
                                return [4, i.put(s, e)];
                            case 5:
                                t.sent(), t.label = 6;
                            case 6:
                                return [4, n.complete];
                            case 7:
                                return t.sent(), [2, s]
                        }
                    })
                })
            }

            function nt(t) {
                return t.appName + "!" + t.appId
            }

            function it(i) {
                return u(this, void 0, void 0, function() {
                    var n, e, r;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, rt(i, function(t) {
                                    var e = function(t) {
                                            return st(t || {
                                                fid: U(),
                                                registrationStatus: 0
                                            })
                                        }(t),
                                        r = function(t, e) {
                                            {
                                                if (0 !== e.registrationStatus) return 1 === e.registrationStatus ? {
                                                    installationEntry: e,
                                                    registrationPromise: function(r) {
                                                        return u(this, void 0, void 0, function() {
                                                            var e;
                                                            return _(this, function(t) {
                                                                switch (t.label) {
                                                                    case 0:
                                                                        return [4, ot(r)];
                                                                    case 1:
                                                                        e = t.sent(), t.label = 2;
                                                                    case 2:
                                                                        return 1 !== e.registrationStatus ? [3, 5] : [4, V(100)];
                                                                    case 3:
                                                                        return t.sent(), [4, ot(r)];
                                                                    case 4:
                                                                        return e = t.sent(), [3, 2];
                                                                    case 5:
                                                                        if (0 === e.registrationStatus) throw A.create("create-installation-failed");
                                                                        return [2, e]
                                                                }
                                                            })
                                                        })
                                                    }(t)
                                                } : {
                                                    installationEntry: e
                                                };
                                                if (!navigator.onLine) {
                                                    var r = Promise.reject(A.create("app-offline"));
                                                    return {
                                                        installationEntry: e,
                                                        registrationPromise: r
                                                    }
                                                }
                                                var n = {
                                                        fid: e.fid,
                                                        registrationStatus: 1,
                                                        registrationTime: Date.now()
                                                    },
                                                    i = function(n, i) {
                                                        return u(this, void 0, void 0, function() {
                                                            var e, r;
                                                            return _(this, function(t) {
                                                                switch (t.label) {
                                                                    case 0:
                                                                        return t.trys.push([0, 2, , 7]), [4, function(a, t) {
                                                                            var c = t.fid;
                                                                            return u(this, void 0, void 0, function() {
                                                                                var e, r, n, i, o, s;
                                                                                return _(this, function(t) {
                                                                                    switch (t.label) {
                                                                                        case 0:
                                                                                            return e = D(a), r = q(a), n = {
                                                                                                fid: c,
                                                                                                authVersion: F,
                                                                                                appId: a.appId,
                                                                                                sdkVersion: O
                                                                                            }, i = {
                                                                                                method: "POST",
                                                                                                headers: r,
                                                                                                body: JSON.stringify(n)
                                                                                            }, [4, K(function() {
                                                                                                return fetch(e, i)
                                                                                            })];
                                                                                        case 1:
                                                                                            return (o = t.sent()).ok ? [4, o.json()] : [3, 3];
                                                                                        case 2:
                                                                                            return s = t.sent(), [2, {
                                                                                                fid: s.fid || c,
                                                                                                registrationStatus: 2,
                                                                                                refreshToken: s.refreshToken,
                                                                                                authToken: x(s.authToken)
                                                                                            }];
                                                                                        case 3:
                                                                                            return [4, R("Create Installation", o)];
                                                                                        case 4:
                                                                                            throw t.sent()
                                                                                    }
                                                                                })
                                                                            })
                                                                        }(n, i)];
                                                                    case 1:
                                                                        return e = t.sent(), [2, tt(n, e)];
                                                                    case 2:
                                                                        return L(r = t.sent()) && 409 === r.serverCode ? [4, et(n)] : [3, 4];
                                                                    case 3:
                                                                        return t.sent(), [3, 6];
                                                                    case 4:
                                                                        return [4, tt(n, {
                                                                            fid: i.fid,
                                                                            registrationStatus: 0
                                                                        })];
                                                                    case 5:
                                                                        t.sent(), t.label = 6;
                                                                    case 6:
                                                                        throw r;
                                                                    case 7:
                                                                        return [2]
                                                                }
                                                            })
                                                        })
                                                    }(t, n);
                                                return {
                                                    installationEntry: n,
                                                    registrationPromise: i
                                                }
                                            }
                                        }(i, e);
                                    return n = r.registrationPromise, r.installationEntry
                                })];
                            case 1:
                                return (e = t.sent()).fid !== $ ? [3, 3] : (r = {}, [4, n]);
                            case 2:
                                return [2, (r.installationEntry = t.sent(), r)];
                            case 3:
                                return [2, {
                                    installationEntry: e,
                                    registrationPromise: n
                                }]
                        }
                    })
                })
            }

            function ot(t) {
                return rt(t, function(t) {
                    if (!t) throw A.create("installation-not-found");
                    return st(t)
                })
            }

            function st(t) {
                return function(t) {
                    return 1 === t.registrationStatus && t.registrationTime + k < Date.now()
                }(t) ? {
                    fid: t.fid,
                    registrationStatus: 0
                } : t
            }

            function at(a, c) {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i, o, s;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = function(t, e) {
                                    var r = e.fid;
                                    return D(t) + "/" + r + "/authTokens:generate"
                                }(a, c), r = B(a, c), n = {
                                    installation: {
                                        sdkVersion: O
                                    }
                                }, i = {
                                    method: "POST",
                                    headers: r,
                                    body: JSON.stringify(n)
                                }, [4, K(function() {
                                    return fetch(e, i)
                                })];
                            case 1:
                                return (o = t.sent()).ok ? [4, o.json()] : [3, 3];
                            case 2:
                                return s = t.sent(), [2, x(s)];
                            case 3:
                                return [4, R("Generate Auth Token", o)];
                            case 4:
                                throw t.sent()
                        }
                    })
                })
            }

            function ct(i, o) {
                return void 0 === o && (o = !1), u(this, void 0, void 0, function() {
                    var n, e, r;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, rt(i, function(t) {
                                    if (!lt(t)) throw A.create("not-registered");
                                    var e = t.authToken;
                                    if (!o && function(t) {
                                            return 2 === t.requestStatus && ! function(t) {
                                                var e = Date.now();
                                                return e < t.creationTime || t.creationTime + t.expiresIn < e + P
                                            }(t)
                                        }(e)) return t;
                                    if (1 === e.requestStatus) return n = function(n) {
                                        return u(this, void 0, void 0, function() {
                                            var e, r;
                                            return _(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, ut(n)];
                                                    case 1:
                                                        e = t.sent(), t.label = 2;
                                                    case 2:
                                                        return 1 !== e.authToken.requestStatus ? [3, 5] : [4, V(100)];
                                                    case 3:
                                                        return t.sent(), [4, ut(n)];
                                                    case 4:
                                                        return e = t.sent(), [3, 2];
                                                    case 5:
                                                        if (0 === (r = e.authToken).requestStatus) throw A.create("generate-token-failed");
                                                        return [2, r]
                                                }
                                            })
                                        })
                                    }(i), t;
                                    if (!navigator.onLine) throw A.create("app-offline");
                                    var r = function(t) {
                                        var e = {
                                            requestStatus: 1,
                                            requestTime: Date.now()
                                        };
                                        return s(s({}, t), {
                                            authToken: e
                                        })
                                    }(t);
                                    return n = function(i, o) {
                                        return u(this, void 0, void 0, function() {
                                            var e, r, n;
                                            return _(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return t.trys.push([0, 3, , 8]), [4, at(i, o)];
                                                    case 1:
                                                        return e = t.sent(), n = s(s({}, o), {
                                                            authToken: e
                                                        }), [4, tt(i, n)];
                                                    case 2:
                                                        return t.sent(), [2, e];
                                                    case 3:
                                                        return !L(r = t.sent()) || 401 !== r.serverCode && 404 !== r.serverCode ? [3, 5] : [4, et(i)];
                                                    case 4:
                                                        return t.sent(), [3, 7];
                                                    case 5:
                                                        return n = s(s({}, o), {
                                                            authToken: {
                                                                requestStatus: 0
                                                            }
                                                        }), [4, tt(i, n)];
                                                    case 6:
                                                        t.sent(), t.label = 7;
                                                    case 7:
                                                        throw r;
                                                    case 8:
                                                        return [2]
                                                }
                                            })
                                        })
                                    }(i, r), r
                                })];
                            case 1:
                                return e = t.sent(), n ? [4, n] : [3, 3];
                            case 2:
                                return r = t.sent(), [3, 4];
                            case 3:
                                r = e.authToken, t.label = 4;
                            case 4:
                                return [2, r.token]
                        }
                    })
                })
            }

            function ut(t) {
                return rt(t, function(t) {
                    if (!lt(t)) throw A.create("not-registered");
                    return function(t) {
                        return 1 === t.requestStatus && t.requestTime + k < Date.now()
                    }(t.authToken) ? s(s({}, t), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : t
                })
            }

            function lt(t) {
                return void 0 !== t && 2 === t.registrationStatus
            }

            function ft(r, n) {
                return void 0 === n && (n = !1), u(this, void 0, void 0, function() {
                    var e;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, function(i) {
                                    return u(this, void 0, void 0, function() {
                                        var e, r, n;
                                        return _(this, function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, it(i)];
                                                case 1:
                                                    return e = t.sent(), r = e.installationEntry, (n = e.registrationPromise) ? [4, n] : [3, 3];
                                                case 2:
                                                    return t.sent(), [3, 4];
                                                case 3:
                                                    if (2 !== r.registrationStatus) throw A.create("create-installation-failed");
                                                    t.label = 4;
                                                case 4:
                                                    return [2]
                                            }
                                        })
                                    })
                                }(e = N(r))];
                            case 1:
                                return t.sent(), [2, ct(e, n)]
                        }
                    })
                })
            }

            function ht(o, s) {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = function(t, e) {
                                    var r = e.fid;
                                    return D(t) + "/" + r
                                }(o, s), r = B(o, s), n = {
                                    method: "DELETE",
                                    headers: r
                                }, [4, K(function() {
                                    return fetch(e, n)
                                })];
                            case 1:
                                return (i = t.sent()).ok ? [3, 3] : [4, R("Delete Installation", i)];
                            case 2:
                                throw t.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }

            function pt() {
                for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
                var n = Array(t),
                    i = 0;
                for (e = 0; e < r; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) n[i] = o[s];
                return n
            }
            zt.INTERNAL.registerService("installations", function(e) {
                return N(e), {
                    app: e,
                    getId: function() {
                        return function(o) {
                            return u(this, void 0, void 0, function() {
                                var e, r, n, i;
                                return _(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, it(e = N(o))];
                                        case 1:
                                            return r = t.sent(), n = r.installationEntry, (i = r.registrationPromise) && i.catch(function() {}), 2 === n.registrationStatus && ct(e).catch(function() {}), [2, n.fid]
                                    }
                                })
                            })
                        }(e)
                    },
                    getToken: function(t) {
                        return ft(e, t)
                    },
                    delete: function() {
                        return function(n) {
                            return u(this, void 0, void 0, function() {
                                var e, r;
                                return _(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, rt(e = N(n), function(t) {
                                                if (!t || 0 !== t.registrationStatus) return t
                                            })];
                                        case 1:
                                            if (!(r = t.sent())) return [3, 6];
                                            if (1 !== r.registrationStatus) return [3, 2];
                                            throw A.create("delete-pending-registration");
                                        case 2:
                                            if (2 !== r.registrationStatus) return [3, 6];
                                            if (navigator.onLine) return [3, 3];
                                            throw A.create("app-offline");
                                        case 3:
                                            return [4, ht(e, r)];
                                        case 4:
                                            return t.sent(), [4, et(e)];
                                        case 5:
                                            t.sent(), t.label = 6;
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }(e)
                    }
                }
            }), (W = G = G || {})[W.DEBUG = 0] = "DEBUG", W[W.VERBOSE = 1] = "VERBOSE", W[W.INFO = 2] = "INFO", W[W.WARN = 3] = "WARN", W[W.ERROR = 4] = "ERROR", W[W.SILENT = 5] = "SILENT";

            function gt(t, e) {
                for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
                if (!(e < t.logLevel)) {
                    var i = (new Date).toISOString();
                    switch (e) {
                        case G.DEBUG:
                        case G.VERBOSE:
                            console.log.apply(console, pt(["[" + i + "]  " + t.name + ":"], r));
                            break;
                        case G.INFO:
                            console.info.apply(console, pt(["[" + i + "]  " + t.name + ":"], r));
                            break;
                        case G.WARN:
                            console.warn.apply(console, pt(["[" + i + "]  " + t.name + ":"], r));
                            break;
                        case G.ERROR:
                            console.error.apply(console, pt(["[" + i + "]  " + t.name + ":"], r));
                            break;
                        default:
                            throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")")
                    }
                }
            }
            var dt = G.INFO,
                vt = (Object.defineProperty(mt.prototype, "logLevel", {
                    get: function() {
                        return this._logLevel
                    },
                    set: function(t) {
                        if (!(t in G)) throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(mt.prototype, "logHandler", {
                    get: function() {
                        return this._logHandler
                    },
                    set: function(t) {
                        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t
                    },
                    enumerable: !0,
                    configurable: !0
                }), mt.prototype.debug = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, pt([this, G.DEBUG], t))
                }, mt.prototype.log = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, pt([this, G.VERBOSE], t))
                }, mt.prototype.info = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, pt([this, G.INFO], t))
                }, mt.prototype.warn = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, pt([this, G.WARN], t))
                }, mt.prototype.error = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._logHandler.apply(this, pt([this, G.ERROR], t))
                }, mt);

            function mt(t) {
                this.name = t, this._logLevel = dt, this._logHandler = gt
            }
            var yt, bt = (wt.prototype.isCachedDataFresh = function(t, e) {
                if (!e) return this.logger.debug("Config fetch cache check. Cache unpopulated."), !1;
                var r = Date.now() - e,
                    n = r <= t;
                return this.logger.debug("Config fetch cache check. Cache age millis: " + r + ". Cache max age millis (minimumFetchIntervalMillis setting): " + t + ". Is cache hit: " + n + "."), n
            }, wt.prototype.fetch = function(s) {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i, o;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(), this.storage.getLastSuccessfulFetchResponse()])];
                            case 1:
                                return e = t.sent(), r = e[0], (n = e[1]) && this.isCachedDataFresh(s.cacheMaxAgeMillis, r) ? [2, n] : (s.eTag = n && n.eTag, [4, this.client.fetch(s)]);
                            case 2:
                                return i = t.sent(), o = [this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())], 200 === i.status && o.push(this.storage.setLastSuccessfulFetchResponse(i)), [4, Promise.all(o)];
                            case 3:
                                return t.sent(), [2, i]
                        }
                    })
                })
            }, wt);

            function wt(t, e, r, n) {
                this.client = t, this.storage = e, this.storageCache = r, this.logger = n
            }
            var _t = ((yt = {})["registration-window"] = "Undefined window object. This SDK only supports usage in a browser environment.", yt["registration-project-id"] = "Undefined project identifier. Check Firebase app initialization.", yt["registration-api-key"] = "Undefined API key. Check Firebase app initialization.", yt["registration-app-id"] = "Undefined app identifier. Check Firebase app initialization.", yt["storage-open"] = "Error thrown when opening storage. Original error: {$originalErrorMessage}.", yt["storage-get"] = "Error thrown when reading from storage. Original error: {$originalErrorMessage}.", yt["storage-set"] = "Error thrown when writing to storage. Original error: {$originalErrorMessage}.", yt["storage-delete"] = "Error thrown when deleting from storage. Original error: {$originalErrorMessage}.", yt["fetch-client-network"] = "Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.", yt["fetch-timeout"] = 'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.', yt["fetch-throttle"] = 'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.', yt["fetch-client-parse"] = "Fetch client could not parse response. Original error: {$originalErrorMessage}.", yt["fetch-status"] = "Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.", yt),
                St = new c("remoteconfig", "Remote Config", _t);
            var Et = (Tt.prototype.fetch = function(w) {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i, o, s, a, c, u, l, f, h, p, g, d, v, m, y, b;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([this.firebaseInstallations.getId(), this.firebaseInstallations.getToken()])];
                            case 1:
                                e = t.sent(), r = e[0], n = e[1], i = window.FIREBASE_REMOTE_CONFIG_URL_BASE || "https://firebaseremoteconfig.googleapis.com", o = i + "/v1/projects/" + this.projectId + "/namespaces/" + this.namespace + ":fetch?key=" + this.apiKey, s = {
                                    "Content-Type": "application/json",
                                    "Content-Encoding": "gzip",
                                    "If-None-Match": w.eTag || "*"
                                }, a = {
                                    sdk_version: this.sdkVersion,
                                    app_instance_id: r,
                                    app_instance_id_token: n,
                                    app_id: this.appId,
                                    language_code: function(t) {
                                        return void 0 === t && (t = navigator), t.languages && t.languages[0] || t.language
                                    }()
                                }, c = {
                                    method: "POST",
                                    headers: s,
                                    body: JSON.stringify(a)
                                }, u = fetch(o, c), l = new Promise(function(t, e) {
                                    w.signal.addEventListener(function() {
                                        var t = new Error("The operation was aborted.");
                                        t.name = "AbortError", e(t)
                                    })
                                }), t.label = 2;
                            case 2:
                                return t.trys.push([2, 5, , 6]), [4, Promise.race([u, l])];
                            case 3:
                                return t.sent(), [4, u];
                            case 4:
                                return f = t.sent(), [3, 6];
                            case 5:
                                throw h = t.sent(), p = "fetch-client-network", "AbortError" === h.name && (p = "fetch-timeout"), St.create(p, {
                                    originalErrorMessage: h.message
                                });
                            case 6:
                                if (g = f.status, d = f.headers.get("ETag") || void 0, 200 !== f.status) return [3, 11];
                                y = void 0, t.label = 7;
                            case 7:
                                return t.trys.push([7, 9, , 10]), [4, f.json()];
                            case 8:
                                return y = t.sent(), [3, 10];
                            case 9:
                                throw b = t.sent(), St.create("fetch-client-parse", {
                                    originalErrorMessage: b.message
                                });
                            case 10:
                                v = y.entries, m = y.state, t.label = 11;
                            case 11:
                                if ("INSTANCE_STATE_UNSPECIFIED" === m ? g = 500 : "NO_CHANGE" === m ? g = 304 : "NO_TEMPLATE" !== m && "EMPTY_CONFIG" !== m || (v = {}), 304 !== g && 200 !== g) throw St.create("fetch-status", {
                                    httpStatus: g
                                });
                                return [2, {
                                    status: g,
                                    eTag: d,
                                    config: v
                                }]
                        }
                    })
                })
            }, Tt);

            function Tt(t, e, r, n, i, o) {
                this.firebaseInstallations = t, this.sdkVersion = e, this.namespace = r, this.projectId = n, this.apiKey = i, this.appId = o
            }
            var Ct = (It.prototype.addEventListener = function(t) {
                this.listeners.push(t)
            }, It.prototype.abort = function() {
                this.listeners.forEach(function(t) {
                    return t()
                })
            }, It);

            function It() {
                this.listeners = []
            }
            var kt = ["1", "true", "t", "yes", "y", "on"],
                Ot = (Ft.prototype.asString = function() {
                    return this._value
                }, Ft.prototype.asBoolean = function() {
                    return "static" !== this._source && 0 <= kt.indexOf(this._value.toLowerCase())
                }, Ft.prototype.asNumber = function() {
                    if ("static" === this._source) return 0;
                    var t = Number(this._value);
                    return isNaN(t) && (t = 0), t
                }, Ft.prototype.getSource = function() {
                    return this._source
                }, Ft);

            function Ft(t, e) {
                void 0 === e && (e = ""), this._source = t, this._value = e
            }
            var Mt = (Pt.prototype.setLogLevel = function(t) {
                switch (t) {
                    case "debug":
                        this._logger.logLevel = G.DEBUG;
                        break;
                    case "silent":
                        this._logger.logLevel = G.SILENT;
                        break;
                    default:
                        this._logger.logLevel = G.ERROR
                }
            }, Object.defineProperty(Pt.prototype, "fetchTimeMillis", {
                get: function() {
                    return this._storageCache.getLastSuccessfulFetchTimestampMillis() || -1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(Pt.prototype, "lastFetchStatus", {
                get: function() {
                    return this._storageCache.getLastFetchStatus() || "no-fetch-yet"
                },
                enumerable: !0,
                configurable: !0
            }), Pt.prototype.activate = function() {
                return u(this, void 0, void 0, function() {
                    var e, r, n;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([this._storage.getLastSuccessfulFetchResponse(), this._storage.getActiveConfigEtag()])];
                            case 1:
                                return e = t.sent(), r = e[0], n = e[1], r && r.config && r.eTag && r.eTag !== n ? [4, Promise.all([this._storageCache.setActiveConfig(r.config), this._storage.setActiveConfigEtag(r.eTag)])] : [2, !1];
                            case 2:
                                return t.sent(), [2, !0]
                        }
                    })
                })
            }, Pt.prototype.ensureInitialized = function() {
                var t = this;
                return this._initializePromise || (this._initializePromise = this._storageCache.loadFromStorage().then(function() {
                    t._isInitializationComplete = !0
                })), this._initializePromise
            }, Pt.prototype.fetch = function() {
                return u(this, void 0, void 0, function() {
                    var e = this;
                    return _(this, function(t) {
                        return [2, new Promise(function(o, s) {
                            return u(e, void 0, void 0, function() {
                                var e, r, n, i = this;
                                return _(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            e = new Ct, setTimeout(function() {
                                                return u(i, void 0, void 0, function() {
                                                    return _(this, function(t) {
                                                        return e.abort(), [2]
                                                    })
                                                })
                                            }, this.settings.fetchTimeoutMillis), t.label = 1;
                                        case 1:
                                            return t.trys.push([1, 4, , 6]), [4, this._client.fetch({
                                                cacheMaxAgeMillis: this.settings.minimumFetchIntervalMillis,
                                                signal: e
                                            })];
                                        case 2:
                                            return t.sent(), [4, this._storageCache.setLastFetchStatus("success")];
                                        case 3:
                                            return t.sent(), o(), [3, 6];
                                        case 4:
                                            return r = t.sent(), n = function(t, e) {
                                                return t instanceof h && -1 !== t.code.indexOf(e)
                                            }(r, "fetch-throttle") ? "throttle" : "failure", [4, this._storageCache.setLastFetchStatus(n)];
                                        case 5:
                                            return t.sent(), s(r), [3, 6];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        })]
                    })
                })
            }, Pt.prototype.fetchAndActivate = function() {
                return u(this, void 0, void 0, function() {
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.fetch()];
                            case 1:
                                return t.sent(), [2, this.activate()]
                        }
                    })
                })
            }, Pt.prototype.getAll = function() {
                var r = this;
                return function(t, e) {
                    return void 0 === t && (t = {}), void 0 === e && (e = {}), Object.keys(s(s({}, t), e))
                }(this._storageCache.getActiveConfig(), this.defaultConfig).reduce(function(t, e) {
                    return t[e] = r.getValue(e), t
                }, {})
            }, Pt.prototype.getBoolean = function(t) {
                return this.getValue(t).asBoolean()
            }, Pt.prototype.getNumber = function(t) {
                return this.getValue(t).asNumber()
            }, Pt.prototype.getString = function(t) {
                return this.getValue(t).asString()
            }, Pt.prototype.getValue = function(t) {
                this._isInitializationComplete || this._logger.debug('A value was requested for key "' + t + '" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.');
                var e = this._storageCache.getActiveConfig();
                return e && void 0 !== e[t] ? new Ot("remote", e[t]) : this.defaultConfig && void 0 !== this.defaultConfig[t] ? new Ot("default", String(this.defaultConfig[t])) : (this._logger.debug('Returning static value for key "' + t + '". Define a default or remote value if this is unintentional.'), new Ot("static"))
            }, Pt);

            function Pt(t, e, r, n, i) {
                this.app = t, this._client = e, this._storageCache = r, this._storage = n, this._logger = i, this._isInitializationComplete = !1, this.settings = {
                    fetchTimeoutMillis: 6e4,
                    minimumFetchIntervalMillis: 432e5
                }, this.defaultConfig = {}
            }

            function jt(t, e) {
                var r = t.target.error || void 0;
                return St.create(e, {
                    originalErrorMessage: r && r.message
                })
            }
            var At = "app_namespace_store",
                Lt = "firebase_remote_config",
                Nt = 1;
            var Dt = (xt.prototype.getLastFetchStatus = function() {
                return this.get("last_fetch_status")
            }, xt.prototype.setLastFetchStatus = function(t) {
                return this.set("last_fetch_status", t)
            }, xt.prototype.getLastSuccessfulFetchTimestampMillis = function() {
                return this.get("last_successful_fetch_timestamp_millis")
            }, xt.prototype.setLastSuccessfulFetchTimestampMillis = function(t) {
                return this.set("last_successful_fetch_timestamp_millis", t)
            }, xt.prototype.getLastSuccessfulFetchResponse = function() {
                return this.get("last_successful_fetch_response")
            }, xt.prototype.setLastSuccessfulFetchResponse = function(t) {
                return this.set("last_successful_fetch_response", t)
            }, xt.prototype.getActiveConfig = function() {
                return this.get("active_config")
            }, xt.prototype.setActiveConfig = function(t) {
                return this.set("active_config", t)
            }, xt.prototype.getActiveConfigEtag = function() {
                return this.get("active_config_etag")
            }, xt.prototype.setActiveConfigEtag = function(t) {
                return this.set("active_config_etag", t)
            }, xt.prototype.getThrottleMetadata = function() {
                return this.get("throttle_metadata")
            }, xt.prototype.setThrottleMetadata = function(t) {
                return this.set("throttle_metadata", t)
            }, xt.prototype.deleteThrottleMetadata = function() {
                return this.delete("throttle_metadata")
            }, xt.prototype.get = function(a) {
                return u(this, void 0, void 0, function() {
                    var o, s = this;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.openDbPromise];
                            case 1:
                                return o = t.sent(), [2, new Promise(function(r, e) {
                                    var t = o.transaction([At], "readonly").objectStore(At),
                                        n = s.createCompositeKey(a);
                                    try {
                                        var i = t.get(n);
                                        i.onerror = function(t) {
                                            e(jt(t, "storage-get"))
                                        }, i.onsuccess = function(t) {
                                            var e = t.target.result;
                                            r(e ? e.value : void 0)
                                        }
                                    } catch (t) {
                                        e(St.create("storage-get", {
                                            originalErrorMessage: t && t.message
                                        }))
                                    }
                                })]
                        }
                    })
                })
            }, xt.prototype.set = function(a, c) {
                return u(this, void 0, void 0, function() {
                    var o, s = this;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.openDbPromise];
                            case 1:
                                return o = t.sent(), [2, new Promise(function(t, e) {
                                    var r = o.transaction([At], "readwrite").objectStore(At),
                                        n = s.createCompositeKey(a);
                                    try {
                                        var i = r.put({
                                            compositeKey: n,
                                            value: c
                                        });
                                        i.onerror = function(t) {
                                            e(jt(t, "storage-set"))
                                        }, i.onsuccess = function() {
                                            t()
                                        }
                                    } catch (t) {
                                        e(St.create("storage-set", {
                                            originalErrorMessage: t && t.message
                                        }))
                                    }
                                })]
                        }
                    })
                })
            }, xt.prototype.delete = function(a) {
                return u(this, void 0, void 0, function() {
                    var o, s = this;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.openDbPromise];
                            case 1:
                                return o = t.sent(), [2, new Promise(function(t, e) {
                                    var r = o.transaction([At], "readwrite").objectStore(At),
                                        n = s.createCompositeKey(a);
                                    try {
                                        var i = r.delete(n);
                                        i.onerror = function(t) {
                                            e(jt(t, "storage-delete"))
                                        }, i.onsuccess = function() {
                                            t()
                                        }
                                    } catch (t) {
                                        e(St.create("storage-delete", {
                                            originalErrorMessage: t && t.message
                                        }))
                                    }
                                })]
                        }
                    })
                })
            }, xt.prototype.createCompositeKey = function(t) {
                return [this.appId, this.appName, this.namespace, t].join()
            }, xt);

            function xt(t, e, r, n) {
                void 0 === n && (n = new Promise(function(e, r) {
                    var t = indexedDB.open(Lt, Nt);
                    t.onerror = function(t) {
                        r(jt(t, "storage-open"))
                    }, t.onsuccess = function(t) {
                        e(t.target.result)
                    }, t.onupgradeneeded = function(t) {
                        var e = t.target.result;
                        switch (t.oldVersion) {
                            case 0:
                                e.createObjectStore(At, {
                                    keyPath: "compositeKey"
                                })
                        }
                    }
                })), this.appId = t, this.appName = e, this.namespace = r, this.openDbPromise = n
            }
            var Rt = (qt.prototype.getLastFetchStatus = function() {
                return this.lastFetchStatus
            }, qt.prototype.getLastSuccessfulFetchTimestampMillis = function() {
                return this.lastSuccessfulFetchTimestampMillis
            }, qt.prototype.getActiveConfig = function() {
                return this.activeConfig
            }, qt.prototype.loadFromStorage = function() {
                return u(this, void 0, void 0, function() {
                    var e, r, n, i, o, s;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = this.storage.getLastFetchStatus(), r = this.storage.getLastSuccessfulFetchTimestampMillis(), n = this.storage.getActiveConfig(), [4, e];
                            case 1:
                                return (i = t.sent()) && (this.lastFetchStatus = i), [4, r];
                            case 2:
                                return (o = t.sent()) && (this.lastSuccessfulFetchTimestampMillis = o), [4, n];
                            case 3:
                                return (s = t.sent()) && (this.activeConfig = s), [2]
                        }
                    })
                })
            }, qt.prototype.setLastFetchStatus = function(t) {
                return this.lastFetchStatus = t, this.storage.setLastFetchStatus(t)
            }, qt.prototype.setLastSuccessfulFetchTimestampMillis = function(t) {
                return this.lastSuccessfulFetchTimestampMillis = t, this.storage.setLastSuccessfulFetchTimestampMillis(t)
            }, qt.prototype.setActiveConfig = function(t) {
                return this.activeConfig = t, this.storage.setActiveConfig(t)
            }, qt);

            function qt(t) {
                this.storage = t
            }
            var Bt = (Kt.prototype.fetch = function(r) {
                return u(this, void 0, void 0, function() {
                    var e;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.storage.getThrottleMetadata()];
                            case 1:
                                return e = t.sent() || {
                                    backoffCount: 0,
                                    throttleEndTimeMillis: Date.now()
                                }, [2, this.attemptFetch(r, e)]
                        }
                    })
                })
            }, Kt.prototype.attemptFetch = function(i, t) {
                var o = t.throttleEndTimeMillis,
                    s = t.backoffCount;
                return u(this, void 0, void 0, function() {
                    var e, r, n;
                    return _(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, function(i, o) {
                                    return new Promise(function(t, e) {
                                        var r = Math.max(o - Date.now(), 0),
                                            n = setTimeout(t, r);
                                        i.addEventListener(function() {
                                            clearTimeout(n), e(St.create("fetch-throttle", {
                                                throttleEndTimeMillis: o
                                            }))
                                        })
                                    })
                                }(i.signal, o)];
                            case 1:
                                t.sent(), t.label = 2;
                            case 2:
                                return t.trys.push([2, 5, , 7]), [4, this.client.fetch(i)];
                            case 3:
                                return e = t.sent(), [4, this.storage.deleteThrottleMetadata()];
                            case 4:
                                return t.sent(), [2, e];
                            case 5:
                                if (! function(t) {
                                        if (!(t instanceof h)) return !1;
                                        var e = Number(t.httpStatus);
                                        return 429 === e || 500 === e || 503 === e || 504 === e
                                    }(r = t.sent())) throw r;
                                return n = {
                                    throttleEndTimeMillis: Date.now() + function(t) {
                                        var e = 1e3 * Math.pow(2, t),
                                            r = Math.round(.5 * e * (Math.random() - .5) * 2);
                                        return Math.min(144e5, e + r)
                                    }(s),
                                    backoffCount: s + 1
                                }, [4, this.storage.setThrottleMetadata(n)];
                            case 6:
                                return t.sent(), [2, this.attemptFetch(i, n)];
                            case 7:
                                return [2]
                        }
                    })
                })
            }, Kt);

            function Kt(t, e) {
                this.client = t, this.storage = e
            }
            var Vt;
            (Vt = zt).INTERNAL.registerService("remoteConfig", function(t, e, r) {
                if ("undefined" == typeof window) throw St.create("registration-window");
                var n = t.options,
                    i = n.projectId,
                    o = n.apiKey,
                    s = n.appId;
                if (!i) throw St.create("registration-project-id");
                if (!o) throw St.create("registration-api-key");
                if (!s) throw St.create("registration-app-id");
                r = r || "firebase";
                var a = new Dt(s, t.name, r),
                    c = new Rt(a),
                    u = new vt("@firebase/remote-config");
                u.logLevel = G.ERROR;
                var l = new Et(t.installations(), Vt.SDK_VERSION, r, i, o, s),
                    f = new Bt(l, a),
                    h = new bt(f, a, c, u),
                    p = new Mt(t, h, c, a, u);
                return p.ensureInitialized(), p
            }, void 0, void 0, !0)
        }).apply(this, arguments)
    } catch (t) {
        throw console.error(t), new Error("Cannot instantiate firebase-remote-config - be sure to load firebase-app.js first.")
    }
});
//# sourceMappingURL=firebase-remote-config.js.map
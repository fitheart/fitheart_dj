/* Copyright 2011-2016 HeatMap Inc. - All rights reserved */
if (typeof(heatmap) == "undefined") {
 heatmap = {}
}
if (!heatmap.log) {
 heatmap.log = {
  h: function(c) {
   if (!c) {
    return 0
   }
   for (var b = 0, d = 5381, a = c.length; b < a; b++) {
    d = ((d << 5) + d) + c.charCodeAt(b)
   }
   return d & 4294967295
  },
  t: function(c) {
   var b = this,
    a = c.tagName;
   if (!b.t.d) {
    b.t.d = {
     BODY: "0",
     H1: "1",
     H2: "2",
     H3: "3",
     H4: "4",
     H5: "5",
     H6: "6",
     SUB: "_",
     STRIKE: "-",
     OUTPUT: ":",
     IFRAME: "!",
     SMALL: ".",
     FIGCAPTION: "(",
     FIGURE: ")",
     HEADER: "[",
     FOOTER: "]",
     FIELDSET: "{",
     ASIDE: "}",
     PATH: "§",
     ABBR: "@",
     ARTICLE: "*",
     I: "/",
     VIDEO: "#",
     PROGRESS: "%",
     METER: "^",
     SUP: "°",
     HGROUP: "+",
     DATALIST: "<",
     BUTTON: "=",
     MARK: ">",
     SECTION: "|",
     AUDIO: "~",
     TIME: "$",
     A: "a",
     AREA: "A",
     B: "B",
     BLOCKQUOTE: "b",
     CENTER: "c",
     CITE: "C",
     CANVAS: "D",
     DIV: "d",
     EM: "E",
     EMBED: "e",
     OBJECT: "e",
     FONT: "f",
     FORM: "F",
     BIG: "G",
     STRONG: "g",
     HR: "h",
     TH: "H",
     IMG: "i",
     INPUT: "I",
     SAMP: "j",
     TT: "J",
     KBD: "k",
     S: "K",
     LABEL: "l",
     LI: "L",
     MAP: "m",
     SVG: "M",
     MENU: "n",
     NAV: "N",
     OL: "O",
     OPTION: "o",
     P: "p",
     PRE: "P",
     CODE: "Q",
     Q: "q",
     BDI: "R",
     TR: "r",
     SELECT: "s",
     SPAN: "S",
     TABLE: "T",
     TD: "t",
     ADDRESS: "U",
     UL: "u",
     U: "v",
     VAR: "V",
     DD: "w",
     DL: "W",
     DT: "X",
     TEXTAREA: "x",
     CAPTION: "Y",
     LEGEND: "y",
     DETAILS: "z",
     SUMMARY: "Z"
    }
   }
   return (!a ? "" : b.t.d[a] || b.t.d[a.toUpperCase()] || "'")
  },
  p: function(e) {
   var c = this,
    a = document.body,
    d = "";
   while (e && e != a) {
    d = c.t(e) + d;
    e = e.parentNode
   }
   return d
  },
  peq: function(c, d) {
   var a = document.body;
   while (c && d && c != a && d != a) {
    if (c == d) {
     return true
    } else {
     if (c.tagName == d.tagName) {
      c = c.parentNode;
      d = d.parentNode
     } else {
      return false
     }
    }
   }
   return (c == d)
  },
  trou: function(d) {
   if (d == document.body) {
    return {
     t: "0",
     r: 0,
     o: 0,
     u: 0,
     path: "",
     url: ""
    }
   }
   if (!d) {
    return {
     t: "",
     r: 0,
     o: 0,
     u: 0,
     path: "",
     url: ""
    }
   }
   var g = this;
   var m = g.p(d),
    b = g.url(d);
   var a = g.h(m),
    h = g.h(b),
    c = 1;
   if (document.getElementsByTagName) {
    var f, e, j, k = document.getElementsByTagName(d.tagName);
    for (f = 0, e = k.length; f < e; f++) {
     j = k[f];
     if (d == j) {
      break
     }
     if (g.peq(d, j)) {
      c++
     }
    }
   }
   return {
    t: g.t(d),
    r: a,
    o: (c > 1 ? c : 0),
    u: h,
    path: m,
    url: b
   }
  },
  css: function(d, c) {
   if (!d || !c) {
    return ""
   }
   var b = this;
   if (!b.cssf) {
    var a = document.defaultView;
    if (d.currentStyle) {
     b.cssf = function(g, f) {
      return g.currentStyle[f]
     }
    } else {
     if (a && a.getComputedStyle) {
      b.cssf = function(i, h) {
       try {
        var g = a.getComputedStyle(i, null);
        return g ? g.getPropertyValue(h) : ""
       } catch (f) {
        return ""
       }
      }
     } else {
      b.cssf = function(g, f) {
       return (!g.style ? "" : g.style[f])
      }
     }
    }
   }
   return b.cssf(d, c)
  },
  cssi: function(b, a) {
   return parseInt(this.css(b, a), 10) || 0
  },
  pos: function(Q) {
   var V = document,
    Z = V.body;
   if (!Q || Q == Z) {
    return {
     x: 0,
     y: 0
    }
   }
   var ab = this,
    R = 0,
    O = 0,
    C = 0,
    F = 0,
    g = 0,
    w = "",
    U = V.documentElement,
    X = ab.ws(),
    M = "";
   if (Q.tagName == "PATH" && Q.getBoundingClientRect) {
    var aa = Q.getBoundingClientRect();
    R = aa.left + X.l;
    O = aa.top + X.t
   } else {
    if (Q.tagName == "AREA" && Q.parentNode && Q.parentNode.id) {
     var A = Q.parentNode;
     if (!A.hm_img && !A.hm_imgfail && V.getElementsByTagName) {
      var S, I = V.getElementsByTagName("IMG"),
       s = I.length,
       x = "#" + Q.parentNode.id;
      for (S = 0; S < s; S++) {
       if (I[S].useMap == x) {
        A.hm_img = I[S];
        break
       }
      }
      A.hm_imgfail = true
     }
     if (A.hm_img) {
      var P = ab.pos(A.hm_img);
      R = P.x;
      O = P.y;
      if (Q.shape && Q.shape.match(/rect/i) && Q.coords) {
       var z = Q.coords.split(",");
       R += parseInt(z[0], 10);
       O += parseInt(z[1], 10)
      }
     }
    } else {
     var q = ab.nav(),
      H = q.ff,
      c = q.wk,
      J = q.ie,
      f = H || c,
      a = ab.pos.v;
     R = Q.offsetLeft - Q.scrollLeft + (f ? ab.cssi(Q, "border-left-width") : 0);
     w = ab.css(Q, "position");
     if (a) {
      M += Q.tagName + " l=" + R + " " + (Q.className || "") + " " + w + " offsetLeft=" + Q.offsetLeft + " scrollLeft=" + Q.scrollLeft + " border-left-width=" + (f ? ab.cssi(Q, "border-left-width") : 0) + "<br>"
     }
     var m = (Q.tagName == "A" && ab.css(Q, "display") == "inline" && Q.innerHTML.match(/<(img|div|h1|h2|h3)/i));
     var D, L, y, K, G, n, B;
     if (m) {
      D = Q.style;
      L = D.display;
      y = D.width;
      K = D.height;
      G = D.margin;
      n = D.marginTop;
      B = D.marginBottom;
      var j = Q.parentNode,
       u = j.align,
       Y = ab.css(j, "text-align"),
       T = ab.css(j, "float");
      var N = ab.cssi(Q, "padding-top"),
       W = ab.cssi(Q, "padding-bottom");
      D.marginTop = (-N) + "px";
      D.marginBottom = (-W) + "px";
      D.display = "inline-block";
      if (H) {
       R = Q.offsetLeft - Q.scrollLeft + (f ? ab.cssi(Q, "border-left-width") : 0);
       if (a) {
        M += Q.tagName + " !FF! l=" + R + " " + (Q.className || "") + " " + w + " offsetLeft=" + Q.offsetLeft + " scrollLeft=" + Q.scrollLeft + " border-left-width=" + (f ? ab.cssi(Q, "border-left-width") : 0) + "<br>"
       }
      }
      D.width = (u == "right" || u == "center" || Y == "right" || Y == "center" || T == "right" ? "auto" : "1px");
      D.height = "auto"
     }
     O = Q.offsetTop - Q.scrollTop + (f ? ab.cssi(Q, "border-top-width") : 0);
     if (a) {
      M += Q.tagName + " t=" + O + " " + (Q.className || "") + " " + w + " offsetTop=" + Q.offsetTop + " scrollTop=" + Q.scrollTop + " border-top-width=" + (f ? ab.cssi(Q, "border-top-width") : 0) + "<br>"
     }
     if (m) {
      D.display = L;
      D.width = y;
      D.height = K;
      D.margin = G;
      D.marginTop = n;
      D.marginBottom = B
     }
     var k = Q;
     while (Q = Q.offsetParent) {
      var E = ab.css(Q, "position");
      if (ab.css(Q, "display") == "inline" && E == "relative" && w != "absolute") {
       R = ab.cssi(Q, "padding-left");
       O = ab.cssi(Q, "padding-top");
       if (a) {
        M += Q.tagName + " RESET l=" + R + " " + ab.css(Q, "display") + " " + E + "<br>"
       }
       if (a) {
        M += Q.tagName + " RESET t=" + O + " " + ab.css(Q, "display") + " " + E + "<br>"
       }
      }
      R += Q.offsetLeft + (f && Q != Z ? ab.cssi(Q, "border-left-width") : 0);
      O += Q.offsetTop + (f && Q != Z ? ab.cssi(Q, "border-top-width") : 0);
      if (E == "absolute" && w != "fixed") {
       w = E
      } else {
       if (E == "relative" && w == "absolute") {
        w = E
       } else {
        if (E == "fixed") {
         w = E
        }
       }
      }
      if (a) {
       M += Q.tagName + " l=" + R + " " + (Q.className || "") + " " + E + " offsetLeft=" + Q.offsetLeft + " scrollLeft=" + (Q != Z ? Q.scrollLeft : 0) + " border-left-width=" + (f && Q != Z ? ab.cssi(Q, "border-left-width") : 0) + "<br>"
      }
      if (a) {
       M += Q.tagName + " t=" + O + " " + (Q.className || "") + " " + E + " offsetTop=" + Q.offsetTop + " scrollTop=" + (Q != Z ? Q.scrollTop : 0) + " border-top-width=" + (f && Q != Z ? ab.cssi(Q, "border-top-width") : 0) + "<br>"
      }
     }
     while ((k = k.parentNode) && k != Z) {
      R -= k.scrollLeft;
      O -= k.scrollTop
     }
     var h = false;
     if (w == "fixed") {
      g = true;
      C = R;
      F = O;
      R += X.l - (U.clientLeft || Z.clientLeft || 0) + ab.cssi(Z, "border-left-width");
      O += X.t - (U.clientTop || Z.clientTop || 0) + ab.cssi(Z, "border-top-width");
      if (a) {
       M += "fixed, l+= " + (X.l - (U.clientLeft || Z.clientLeft || 0) + ab.cssi(Z, "border-left-width")) + "<br>"
      }
      if (a) {
       M += "fixed, t+= " + (X.t - (U.clientTop || Z.clientTop || 0) + ab.cssi(Z, "border-top-width")) + "<br>"
      }
     } else {
      if (ab.css(Z, "position") == "relative") {
       if (Z.getBoundingClientRect) {
        h = true;
        var r = Z.getBoundingClientRect();
        R += r.left + X.l;
        O += r.top + X.t;
        if (a) {
         M += "body relative, l+= " + (r.left + X.l) + "<br>"
        }
        if (a) {
         M += "body relative, t+= " + (r.top + X.t) + "<br>"
        }
       } else {
        R += ab.cssi(Z, "left");
        O += ab.cssi(Z, "top");
        if (a) {
         M += "body relative, l+= " + ab.cssi(Z, "left") + "<br>"
        }
        if (a) {
         M += "body relative, t+= " + ab.cssi(Z, "top") + "<br>"
        }
       }
      }
     }
     if (U && !h && !J && w != "absolute") {
      R += ab.cssi(U, "margin-left");
      O += ab.cssi(U, "margin-top");
      if (a) {
       M += "html margin, l+= " + ab.cssi(U, "margin-left") + "<br>"
      }
      if (a) {
       M += "html margin, t+= " + ab.cssi(U, "margin-top") + "<br>"
      }
     }
    }
   }
   return {
    x: R,
    y: O,
    fixed: g,
    xf: C,
    yf: F,
    v: M
   }
  },
  nav: function() {
   var b = this;
   if (typeof(b.nav.v) == "undefined") {
    var c = navigator.userAgent.toLowerCase(),
     a = {};
    a = {
     ie: c.match(/(msie|trident)/),
     wk: c.match(/(chrome|safari|webkit)/)
    };
    a.ff = (c.indexOf("firefox") > -1 && !a.ie && !a.wk);
    b.nav.v = a
   }
   return b.nav.v
  },
  ifr: function(b) {
   var v = this;
   if (!v.ifr.c && b) {
    v.ifr.c = b
   }
   if (!v.ifr.init) {
    v.ifr.init = 1
   } else {
    return
   }
   var m = 0,
    l = 0,
    p = 0,
    n = 0,
    j = 0,
    h = 0,
    g = 0,
    e = function(y) {
     if (v.ifr.v) {
      console.log(y)
     }
    },
    w = function(y) {
     if (!y) {
      y = window.event
     }
     return (y ? y.target || y.srcElement : 0)
    },
    c = function(A, z, y) {
     return Math.min(Math.max(z, A), y)
    },
    r = function(D) {
     var y = (new Date()).getTime(),
      z = y - g;
     if (z < 20) {
      return
     }
     var A = v.mpos(D),
      C = A.x,
      B = A.y;
     if (!g) {
      m = C;
      l = B;
      g = y;
      return
     }
     var F = (C - m) / z,
      E = (B - l) / z;
     var H = (F - p) / z,
      G = (E - n) / z;
     m = C;
     l = B;
     p = (F + 4 * p) / 5;
     n = (E + 4 * n) / 5;
     j = (H + 2 * j) / 3;
     h = (G + 2 * h) / 3;
     g = y
    },
    q = function(B) {
     var y = (new Date()).getTime(),
      I = y - g + 20,
      G = 10;
     if (I < G || (!p && !n)) {
      return {
       x: m,
       y: l
      }
     }
     var O = m,
      N = l,
      Q = p,
      P = n,
      L = j,
      K = h,
      z, D = 0,
      C = 0;
     var E = B.offsetWidth / 2,
      M = B.offsetHeight / 2;
     var A = v.pos(B),
      H = A.x + E,
      F = A.y + M;
     O = c(O, A.x, H + E);
     N = c(N, A.y, F + M);
     if (I > 2000) {
      I = 2000
     }
     for (var J = 0; J <= I; J += G) {
      if (E) {
       D = O < H ? Q < 0 : Q > 0;
       D = D ? 1 - Math.abs(O - H) / E : 1;
       if (D < 0) {
        D = 0
       }
      }
      if (M) {
       C = N < F ? P < 0 : P > 0;
       C = C ? 1 - Math.abs(N - F) / M : 1;
       if (C < 0) {
        C = 0
       }
      }
      z = Math.pow(1 - J / I, 2);
      L = j * z * D;
      K = h * z * C;
      Q = (Q + L * G) * z * D;
      P = (P + K * G) * z * C;
      O += Q * G;
      N += P * G
     }
     O = c(O, A.x, H + E);
     N = c(N, A.y, F + M);
     return {
      x: O,
      y: N
     }
    };
   var f = v.nav(),
    x = document,
    i = x.body,
    t = null,
    a = false,
    d = null,
    s = function(z) {
     d = z;
     var A = q(z),
      y = v.url(z) || "";
     a = y.match(/facebook.com\/plugins\/comments.php/gi);
     if (v.ifr.c) {
      v.ifr.c(z, A)
     }
     v.clk({
      target: z,
      pageX: Math.round(A.x),
      pageY: Math.round(A.y)
     });
     e("click " + y)
    },
    u = false,
    k = function(C) {
     var z = x.activeElement;
     if (z && z.tagName != "IFRAME" && z != i) {
      return
     }
     var A = x.createElement("INPUT"),
      B = A.style,
      y = v.mpos(C);
     A.type = "text";
     B.position = "absolute";
     B.width = B.height = "1px";
     B.opacity = "0.01";
     B.left = (y.x + 20) + "px";
     B.top = (y.y + 20) + "px";
     i.appendChild(A);
     A.focus();
     i.removeChild(A);
     e("focusFF");
     u = true
    },
    o = function(y) {
     if (f.ie) {
      return
     }
     if (f.ff) {
      k(y)
     }
     window.focus();
     e("focus window")
    };
   if (f.ie) {
    v.listen("focusin", function(z) {
     var y = w(z);
     if (y && y.tagName == "IFRAME" && y != d) {
      s(y)
     }
     e("focusin " + (y ? y.tagName + " " + y.id : ""))
    })
   } else {
    if (f.wk || f.ff) {
     v.listen("mouseover", function(z) {
      var y = w(z);
      if (y && y.tagName == "IFRAME") {
       if (y != t) {
        if ((f.ff && !u) || (d && y != d)) {
         o(z)
        }
        t = y;
        d = null
       }
      } else {
       if (t) {
        if (d && !a) {
         o(z);
         d = null
        }
        t = null
       }
      }
      e("over " + (t ? t.tagName + " " + t.id : ""))
     });
     v.listen("blur", function(z) {
      if (t) {
       var y = w(z);
       if (y != t && y != d && d != t) {
        var A = (t == x.activeElement);
        if (A || !f.wk) {
         s(t)
        }
       }
       e("blur " + (y ? y.tagName + " " + y.id : "") + " " + x.activeElement)
      } else {
       e("blur " + x.activeElement)
      }
     }, window)
    }
   }
   v.listen("mousemove", function(y) {
    r(y)
   });
   v.listen("mouseover", function(y) {
    if (w(y).tagName == "IFRAME") {
     r(y)
    }
   })
  },
  ws: function(c) {
   if (c === false) {
    delete this.ws.r
   }
   var a = this.ws.r;
   if (a) {
    return a
   }
   var g = window,
    m = document,
    n = m.body,
    k = m.documentElement;
   var o = (g.innerWidth || k.clientWidth || n.clientWidth || 0);
   var j = (g.innerHeight || k.clientHeight || n.clientHeight || 0);
   var f = (g.pageXOffset || k.scrollLeft || n.scrollLeft || 0);
   var p = (g.pageYOffset || k.scrollTop || n.scrollTop || 0);
   a = {
    l: f,
    t: p,
    r: f + o,
    b: p + j,
    w: o,
    h: j
   };
   if (c === true) {
    this.ws.r = a
   }
   return a
  },
  ds: function() {
   var f = document,
    a = f.body,
    c = f.documentElement;
   return {
    w: Math.max(a.scrollWidth, c.scrollWidth, a.offsetWidth, c.offsetWidth, a.clientWidth, c.clientWidth),
    h: Math.max(a.scrollHeight, c.scrollHeight, a.offsetHeight, c.offsetHeight, a.clientHeight, c.clientHeight)
   }
  },
  mpos: function(b) {
   if (!b) {
    b = window.event
   }
   var a = this.ws();
   return {
    x: (b.clientX ? b.clientX + a.l : b.pageX),
    y: (b.clientY ? b.clientY + a.t : b.pageY)
   }
  },
  clean: function(a) {
   if (typeof(a) != "string") {
    try {
     a = a.toString()
    } catch (c) {
     return ""
    }
   }
   var b = (this.ext("cleanupURL", a) || a);
   b = b.toLowerCase();
   b = b.replace(/[\s\n]+/gi, "");
   b = b.replace(/%20/gi, "");
   b = b.replace(/\/\*.*?\*\//gi, "");
   b = b.replace(/^function.+?{/gi, "").replace(/}$/gi, "");
   b = b.replace(/(\()[+](\d)/gi, "$1$2");
   b = b.replace(/^(document.|\s*)location.href=['"]([^'"]+)['"].*/gi, "$2");
   b = b.replace(/dev\./gi, "www.");
   b = b.replace(/(http.+?\/a\/clic\/[^\d]+\d+)([^\s]*)/gi, "$1");
   b = b.replace(/^(\/a\/clic\/[^\d]+\d+)([^\s]*)/gi, "$1");
   b = b.replace(/(http.+?\/clic\/countgo[^\d]+\d+[^\d]+\d+)([^\s]*)/gi, "$1");
   b = b.replace(/(http.+?\/call\/cliccommand\/\d+)([^\s]*)/gi, "$1");
   b = b.replace(/(http.+?\/diff\/\d+\/\d+\/.+?)(\?[^\s]*)/gi, "$1");
   b = b.replace(/(http.+?serving-sys.com\/.+?)(\?[^\s]*)/gi, "$1");
   b = b.replace(/(http.+?adtech.de\/adlink[\/\d]+AdId=\d+)([^\s]*)/gi, "$1");
   try {
    if (b.match(/^http[s]?:\/\/www\.facebook\.com[^?]+plugins/i)) {
     b = b.match(/(^[^?]+|[?&](?:action|href|id|appid|app_id)=[^&]*)/gi).join("")
    }
    if (b.match(/^http[s]?:\/\/apis\.google\.com[^?]*\/_\//i)) {
     b = b.match(/(^[^?]+|[?&](?:clientid|origin|url)=[^&]*)/gi).join("")
    }
    if (b.match(/^http[s]?:\/\/platform\.twitter\.com[^?]+widgets/i)) {
     b = b.match(/(^[^#]+|[#&](?:url|text)=[^&]*)/gi).join("")
    }
    b = b.replace(/(^http[s]?[:\/\.a-z]+wufoo\.com\/embed\/[^\/]+\/)(.*)$/gi, "$1");
    b = b.replace(/^https/i, "http")
   } catch (c) {}
   b = b.replace(/[{}"';]/gi, "");
   b = b.replace(/[\u25C4\u25C0]/gi, "<");
   b = b.replace(/[\u25BA\u25B6]/gi, ">");
   b = b.replace(/[?&#]$/, "");
   return b
  },
  ext: function(h, f, d, k) {
   if (typeof(heatmap_ext) != "undefined") {
    var g = heatmap_ext[h],
     j = typeof(g);
    if (j == "function" && g.length <= 3) {
     try {
      return g(f, d, k)
     } catch (i) {
      return null
     }
    } else {
     if (j != "undefined") {
      return g
     }
    }
   }
  },
  txt: function(c) {
   if (c == document.body) {
    return ""
   }
   var b = c.tagName;
   if (b == "IMG" && c.alt) {
    return c.alt
   } else {
    if (b == "INPUT" && c.placeholder) {
     return c.placeholder
    }
   }
   var a = "",
    d;
   for (d = c.firstChild; d && a.length < 300; d = d.nextSibling) {
    switch (d.nodeType) {
     case 3:
     case 4:
      a += d.nodeValue;
      break;
     case 8:
      break;
     case 1:
      if (d.tagName == "SCRIPT") {
       break
      }
     default:
      a += this.txt(d);
      break
    }
   }
   return a
  },
  mix: function(b, e) {
   var a = this;
   var d = a.clean(b).substr(0, 200);
   if (d && !d.match(/^http/gi)) {
    var c = a.txt(e);
    if (c) {
     c = a.clean(c);
     d = d.substr(0, 99);
     d = c.substr(0, 200 - d.length) + d
    }
   }
   return d
  },
  attr: function(b, a) {
   return b.getAttribute ? b.getAttribute(a) : ""
  },
  getLibEvent: function(d, a) {
   var k, i, b, j = this;
   try {
    if (window.jQuery) {
     var c = d,
      f = jQuery,
      h = f(d);
     while (c) {
      k = (f._data || f.data)(c, "events");
      if (k && k.click) {
       i = f.grep(k.click, c == d ? function(l) {
        return !l.selector
       } : function(l) {
        return h.is(l.selector)
       });
       if (i.length > 0) {
        if (!a) {
         return true
        } else {
         b = f.data(d, "url");
         if (b) {
          return j.clean(b)
         } else {
          b = f.map(i, function(l) {
           return l.handler.toString()
          }).join();
          return j.mix(b, d)
         }
        }
       }
      }
      c = c.parentNode
     }
    }
    if (window.MooTools) {
     k = (d.retrieve ? d.retrieve("events") : d.$events);
     if (k && k.click) {
      if (!a) {
       return true
      } else {
       b = Array.map(k.click.keys, function(e) {
        return e.toString()
       }).join();
       return j.mix(b, d)
      }
     }
    }
    if (window.Prototype) {
     k = (Event && Event.cache && Event.cache[d._prototypeUID || d._eventId || (d._prototypeEventID || [])[0]]);
     if (k && k.click) {
      if (!a) {
       return true
      } else {
       b = k.click.map(function(l) {
        return l.handler.toString()
       }).join();
       return j.mix(b, d)
      }
     }
     k = d.getStorage && d.getStorage().get("prototype_event_registry");
     if (k && k.get("click")) {
      if (!a) {
       return true
      } else {
       return j.clean(j.txt(d)).substr(0, 200)
      }
     }
    }
    if (window.angular) {
     b = j.attr(d, "ui-sref");
     if (!a) {
      return !!b
     } else {
      return j.clean(b)
     }
    }
   } catch (g) {}
  },
  fn2str: function(f, c) {
   var b, a = this;
   try {
    b = f["on" + c];
    if (b) {
     return b.toString()
    }
    if (b = a.attr(f, "ng-" + c)) {
     return b.toString()
    }
   } catch (d) {}
  },
  isActive: function(c) {
   if (!c || c == document.body) {
    return true
   }
   var a = this;
   if (a.fn2str(c, "mousedown") || c.hm_oldmousedown) {
    return true
   }
   var b = c.tagName;
   if (a.fn2str(c, "click")) {
    return true
   }
   if (b == "A" && c.href) {
    return true
   }
   if (b == "OBJECT" || b == "EMBED") {
    return true
   }
   if (b == "INPUT" || b == "SELECT" || b == "TEXTAREA" || b == "BUTTON") {
    return true
   }
   if (b == "AREA" && c.href) {
    return true
   }
   if (b == "IFRAME") {
    return true
   }
   if (a.getLibEvent(c)) {
    return true
   }
   if (a.ext("isActive", c)) {
    return true
   }
   return false
  },
  url: function(b) {
   if (b == document.body) {
    return ""
   }
   var k = this,
    l = "",
    f = b.tagName,
    j;
   if (j = k.fn2str(b, "mousedown")) {
    l = k.mix(j, b);
    if (!b.hm_oldmousedown) {
     b.hm_oldmousedown = l
    }
   } else {
    if (b.hm_oldmousedown) {
     l = b.hm_oldmousedown
    } else {
     if (j = k.fn2str(b, "click")) {
      l = k.mix(k.clean(j) + (b.href ? k.clean(b.href) : ""), b)
     } else {
      if (f == "A" && b.href) {
       var h = k.attr(b, "href") || b.href;
       if ((h == "#" || h == "") && k.getLibEvent(b)) {
        l = k.getLibEvent(b, true)
       } else {
        l = k.clean(b.href)
       }
      } else {
       if (f == "OBJECT" || f == "EMBED") {
        var a = k.attr(b, "src") || b.src || k.attr(b, "data") || b.data;
        if (a) {
         l = k.clean(a)
        } else {
         for (var i = b.firstChild; i; i = i.nextSibling) {
          if (i.name && i.name.toLowerCase() == "movie") {
           l = k.clean(i.value)
          }
         }
        }
       } else {
        if (f == "INPUT" || f == "SELECT" || f == "TEXTAREA" || f == "BUTTON") {
         var m = "",
          d = (b.name || "");
         if (f == "INPUT") {
          m = (b.type ? b.type : "")
         }
         if (d || m) {
          l = k.clean(d + m)
         }
         if (!l && k.getLibEvent(b)) {
          l = k.getLibEvent(b, true)
         } else {
          l = "untitled"
         }
        } else {
         if (f == "AREA" && b.href) {
          l = k.clean(b.href)
         } else {
          if (f == "IFRAME") {
           try {
            l = k.clean(b.src)
           } catch (g) {}
           if (!l) {
            l = "iframe"
           }
          } else {
           if (k.getLibEvent(b)) {
            l = k.clean(k.ext("getURL", b) || "");
            if (!l) {
             l = k.getLibEvent(b, true)
            }
           } else {
            if (k.ext("isActive", b)) {
             l = k.clean(k.ext("getURL", b) || "")
            } else {
             if (b.id) {
              l = "id=" + k.clean(b.id)
             }
            }
           }
          }
         }
        }
       }
      }
     }
    }
   }
   return (l ? l.replace(/[\s\n]+/gi, "").substr(0, 200) : "")
  },
  curl: function(x) {
   var z = this,
    l = window.location,
    h = z.ext("getCurrentURL"),
    f = /^([a-z]+):\/\/[^\/]+/i;
   if (h && f.test(h)) {
    h = h.replace(f, "$1://" + l.host)
   } else {
    h = l.href
   }
   h = h.replace(/[\s\n]+/gi, "");
   h = h.replace(/[?&#]$/, "");
   h = h.replace(/(http[^#]+)(#heatmap.*)/gi, "$1");
   var r = "",
    s = "",
    g = "",
    c = "",
    y;
   try {
    if (h.match(/\?/)) {
     y = document.createElement("a");
     y.href = h;
     var j = y.search.substr(1);
     var A = j.split("&");
     A.sort();
     var q = ["utm_source", "utm_medium", "utm_term", "utm_campaign", "utm_content", "gclid"];
     var m = ["fus", "fum", "fut", "fuc", "fuo"];
     var p = A.length,
      o = m.length;
     var b = (Array.prototype.indexOf ? function(a, e) {
      return a.indexOf(e)
     } : function(a, C) {
      for (var t = 0, e = a.length; t < e; t++) {
       if (a[t] === C) {
        return t
       }
      }
      return -1
     });
     for (var u = 0; u < p; u++) {
      var w = A[u].split("=");
      var d = b(q, w[0].toLowerCase());
      if (d >= 0) {
       if (x && d < o) {
        r += "&" + m[d] + "=" + w[1]
       }
      } else {
       s += (s ? "&" : "") + A[u]
      }
     }
     y.search = (s ? "?" + s : "");
     h = y.href;
     if (!s) {
      h = h.replace(/(?:[?&])(#|$)/, "$1")
     }
    }
    if (x) {
     g = document.referrer;
     if (g) {
      y = document.createElement("a");
      y.href = g;
      g = y.hostname;
      r += "&fr=" + encodeURIComponent(g)
     }
     var B = z.ext("getTemplates", h),
      k = (B ? B.length : 0),
      n;
     if (k) {
      for (var u = 0; u < k; u++) {
       n = B[u];
       if (n && n.name && (n.value || n.on)) {
        c += (c ? "." : "") + z.h(n.name)
       }
      }
     }
    }
   } catch (v) {}
   return x ? {
    url: h,
    filter: r,
    referrer: g,
    templates: c || "."
   } : h
  },
  query: function(d) {
   var b = this,
    c = "",
    a = "";
   for (a in d) {
    if (d.hasOwnProperty && !d.hasOwnProperty(a)) {
     continue
    }
    if (d[a] === "") {
     continue
    }
    c += (c ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(typeof(d[a]) == "object" ? b.query(d[a]) : d[a])
   }
   return c
  },
  conv: function(b, e) {
   var g = this,
    a = 0,
    l = g.ext("getConversions", b, e),
    j = {},
    c = "",
    h;
   if (l) {
    if (l.length) {
     for (var d = 0, f = l.length; d < f; d++) {
      c = l[d].name;
      h = parseFloat(l[d].value);
      if (!isNaN(h) && h) {
       j[c] = h;
       a++
      }
     }
    } else {
     for (c in l) {
      if (l.hasOwnProperty && !l.hasOwnProperty(c)) {
       continue
      }
      h = parseFloat(l[c]);
      if (!isNaN(h) && h) {
       j[c] = h;
       a++
      }
     }
    }
   }
   return (a ? j : "")
  },
  sid: function(n) {
   var o = this,
    a = o.ext("getSessionName"),
    k;
   if (!a) {
    return ""
   }
   a = a.replace(/[^a-zA-Z_]/g, "");
   if (!o.sid.id) {
    k = document.cookie.match(new RegExp(a + "[^;]*=[^;]*\\d+_\\d+[^;]*", "gi"));
    if (k) {
     var f = k[0].match(/\d+/gi);
     o.sid.id = f[0];
     o.sid.n = f[1]
    }
   }
   if (!o.sid.id) {
    o.sid.id = 1 + Math.floor(Math.random() * 2147483646);
    o.sid.n = 0;
    n = true
   }
   if (n) {
    o.sid.n++;
    k = o.sid.id + "_" + o.sid.n;
    var l = new RegExp(a + "[^;]*=[^;]*" + k, "gi");
    var e = new Date();
    e.setTime(e.getTime() + 1800000);
    var b = window.location.hostname.split(".").reverse(),
     j, h;
    for (j = b[0], h = 1; h < b.length; h++) {
     try {
      j = b[h] + "." + j;
      document.cookie = a + "=" + k + "; expires=" + e.toGMTString() + "; path=/; domain=" + j;
      if (document.cookie.match(l)) {
       break
      }
     } catch (g) {}
    }
   }
   return o.sid.id + "_" + o.sid.n
  },
  isDisabled: function(c) {
   var a = this;
   if (a.disabled) {
    return true
   }
   var b = a.ext("recordDisabled") || a.ext("logDisabled");
   return (b == "pv" ? b == c : b)
  },
  pv: function(d) {
   var b = this;
   var a = b.curl(true);
   if (b.isDisabled("pv")) {
    b.ourl = a
   }
   if (!b.ourl || b.ourl.url != a.url) {
    b.ourl = a;
    b.lastEvent = null;
    b.lastTime = 0;
    b.lastTarget = null;
    b.logs = [];
    b.logs[0] = {
     i1: new Image()
    };
    var g = b.ext("getTitle") || document.title,
     f = {
      pid: heatmap.property_id || 0,
      u: a.url,
      tpl: a.templates,
      sid: b.sid(true),
      conv: b.conv(a.url),
      pw: b.ext("getAuthor") || "",
      pt: (g ? g.substr(0, 200) : ""),
      debug: (b.debug ? 1 : ""),
      t: Math.floor(999999 * Math.random())
     };
    b.logs[0].i1.src = "//" + heatmap.dom_api + "/log/pv?" + b.query(f) + a.filter
   }
   if (!d) {
    d = window.event
   }
   if (d) {
    var c = (d.target || d.srcElement);
    if (c) {
     c = b.target(c);
     if (c && c.onmousedown && !c.hm_oldmousedown) {
      b.url(c)
     }
    }
   }
  },
  clk: function(k) {
   var o = this;
   if (o.isDisabled()) {
    return
   }
   if (!o.ourl) {
    o.pv()
   }
   if (!k) {
    k = window.event
   }
   if (!k || k == o.lastEvent) {
    return
   }
   o.lastEvent = k;
   var p = (k.target || k.srcElement);
   if (!p) {
    return
   }
   var b = (new Date()).getTime();
   if (o.lastTarget == p && (b - (o.lastTime || 0)) < 500) {
    return
   }
   o.lastTarget = p;
   o.lastTime = b;
   var d = o.mpos(k),
    m = d.x,
    l = d.y;
   var f = o.target(p);
   if (f == document.body) {
    var j = o.ws();
    if (Math.abs(j.r - m) < 20 || Math.abs(j.b - l) < 20) {
     return
    }
    var i = o.ext("align");
    if (!i || i == "center") {
     l = -l;
     m -= Math.floor(Math.max(j.w, o.ds().w) / 2)
    }
   }
   var h = o.pos(f);
   var n = o.trou(f);
   var a = (new Date()).getTime();
   if ((o.maxTime || -1) < (a - b)) {
    o.maxTime = (a - b)
   }
   if (n.t) {
    var g = o.logs.length;
    var c = {
     pid: heatmap.property_id || 0,
     u: o.ourl.url,
     sid: o.sid(),
     dpath: n.path,
     durl: n.url,
     dt: n.t,
     dr: n.r,
     "do": n.o,
     du: n.u,
     mx: m - h.x,
     my: l - h.y,
     mn: g,
     mt: o.maxTime,
     conv: o.conv(o.ourl.url, f),
     debug: (o.debug ? 1 : ""),
     t: Math.floor(999999 * Math.random())
    };
    o.logs[g] = {
     i1: new Image()
    };
    o.logs[g].i1.src = "//" + heatmap.dom_api + "/log/clk?" + o.query(c) + o.ourl.filter
   } else {}
   if (!o.ourl || o.ourl.url != o.curl()) {
    o.pv()
   }
  },
  target: function(d) {
   var b = this,
    c = d,
    a = document.body;
   while (c && !b.isActive(c)) {
    c = c.parentNode
   }
   if (c == a) {
    c = d;
    while (c && !c.id && c != a) {
     c = c.parentNode
    }
   }
   return c
  },
  cook: function(g) {
   var i = this,
    a = (window.location.hash || ""),
    d = i.h(a);
   if (g || i.cook.h != d) {
    i.cook.h = d;
    var e = 17947688,
     b = 1229391198,
     k = -634150890,
     j = i.h(navigator.userAgent.substr(12, 19));
    if (g || d == e || d == b) {
     i.cook.v = Math.round(((new Date()).getTime() - (new Date("01/01/2016")).getTime()) / 1000);
     if (d == b) {
      i.cook.s = a.substr(9)
     }
    } else {
     if (j == k) {
      i.cook.v = Math.round(((new Date()).getTime() - (new Date("01/01/2016")).getTime()) / 1000);
      i.cook.s = "heatmap.me/scrn"
     } else {
      var f = document.cookie.match(/hmuicdmm[^;]*=[^;]*start\d+[^;]*/gi);
      if (f) {
       i.cook.v = f[0].match(/\d+/gi)[0];
       i.cook.s = f[0].match(/[^\d]+$/gi, "");
       i.cook.s = (i.cook.s ? i.cook.s[0] : "")
      }
     }
    }
   }
   return (i.cook.v ? {
    v: i.cook.v,
    d3v: i.cook.s
   } : null)
  },
  keydown: function(c) {
   var b = this;
   if (b.ext("altShiftH") === false) {
    return
   }
   if (!c) {
    c = window.event
   }
   if (!c) {
    return
   }
   var a = String.fromCharCode(c.keyCode);
   if (a) {
    a = (c.altKey ? "ALT-" : "") + (c.ctrlKey ? "CTRL-" : "") + (c.metaKey ? "META-" : "") + (c.shiftKey ? "SHIFT-" : "") + a;
    if (a && b.h(a) == 1575243174) {
     b.startui()
    }
   }
  },
  load: function(c) {
   var d = navigator.userAgent.toLowerCase(),
    b = (d.indexOf("msie") != -1) ? parseInt(d.split("msie")[1]) : false,
    a = function() {
     var f = document.createElement("script");
     f.type = "text/javascript";
     f.async = true;
     f.src = c;
     var e = document.getElementsByTagName("script")[0];
     // bichkhe comment this
    // e.parentNode.insertBefore(f, e)
    };
   if (b && b < 9) {
    window.setTimeout(a, 1)
   } else {
    a()
   }
  },
  startui: function() {
   var a = this;
   if (heatmap.sidebar) {
    heatmap.sidebar.toggleAll()
   } else {
    if (!a.disabled) {
     var b = a.cook();
     if (!b) {
      b = a.cook(1)
     }
     // bichkhe commented this
     //a.load("//" + (b.d3v || "u.heatmap.it/ui.js") + "?v=" + b.v)
    }
   }
   a.disabled = true
  },
  listen: function(c, b, d) {
   var a = function(f, e, h) {
    try {
     return b(f, e, h)
    } catch (g) {}
   };
   if (!d) {
    d = document
   }
   if (d.addEventListener) {
    d.addEventListener(c, a, true)
   } else {
    if (d.attachEvent) {
     d.attachEvent("on" + c, a)
    }
   }
  },
  fast: function() {
   var d = this,
    g = window.location.hostname,
    f = [{
     d: /paytm\.com/,
     p: 14852,
     s: "eu2"
    }, {
     d: /marmiton\.org/,
     p: 13,
     s: "eu2"
    }];
   for (var e = 0, c = f.length; e < c; e++) {
    var b = f[e];
    if (g.match(b.d)) {
     d.start(b.p, b.s)
    }
   }
  },
  conf: function() {
   var a = this,
    b = a.cook();
   if (a.confed) {
    return
   } else {
    a.confed = true
   }
   if (b && b.d3v) {
    a.startui()
   } else {
    a.fast();
    a.load("//u.heatmap.it/conf/" + window.location.hostname + ".js")
   }
   a.listen("keydown", function(c) {
    return a.keydown(c)
   })
  },
  start: function(a, c) {
   var b = this;
   heatmap.dom_api = (c || "eu1") + ".heatmap.it";
   if (!a) {
    return
   } else {
    heatmap.property_id = a
   }
   if (b.started) {
    return
   } else {
    b.started = true
   }
   if (b.cook()) {
    b.startui()
   } else {
    b.pv();
    b.listen("mouseover", function(d) {
     b.pv(d)
    });
    b.listen("mousedown", function(d) {
     b.clk(d)
    });
    b.ifr();
    b.listen("hashchange", function(d) {
     b.pv()
    });
    window.setInterval(function() {
     try {
      var e = window.location.href;
      if (b.loc != e) {
       if (b.loc) {
        b.pv()
       }
       b.loc = e
      }
     } catch (d) {}
    }, 1000)
   }
  }
 }
}
heatmap.log.conf();
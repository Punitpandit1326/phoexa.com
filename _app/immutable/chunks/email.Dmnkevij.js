import { _ as B } from "./preload-helper.CnYb8wIg.js";
import {
  s as x,
  p as I,
  q as T,
  b as m,
  f as d,
  r as n,
  i as D,
  h,
  n as f,
  e as _,
  t as S,
  a as H,
  c as g,
  d as V,
  g as L,
  a5 as $,
  j as C,
  F as M,
  k as R,
} from "./scheduler.j3FdVX_3.js";
import {
  S as E,
  i as k,
  c as q,
  a as z,
  m as F,
  t as G,
  b as U,
  d as W,
} from "./index.B2YDLXwW.js";
import {
  g as X,
  t as K,
} from "./text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js";
import "./entry.BXe_oHrD.js";
async function Q(a) {
  return await new Promise((t) => setTimeout(t, a));
}
const Y = "phc_hZbxazBcFW8EVjgMouaAvBhX2DQAyVWApKiRP7xIQ3X",
  N = "https://eu.posthog.com",
  Z = "https://wisdom.phoexa.com";
let v = !1,
  b;
const j = async () => {
    for (; v; ) await Q(100);
    if (b) return b;
    v = !0;
    const a = (
      await B(async () => {
        const { default: t } = await import("./module.DXnp-b55.js");
        return { default: t };
      }, [])
    ).default;
    return (b = a), (v = !1), a;
  },
  dt = async () => {
    (await j()).init(Y, {
      api_host: Z,
      ui_host: N,
      capture_pageview: !1,
      capture_pageleave: !1,
      persistence: "memory",
    });
  },
  ht = async (a) => {
    const t = await j();
    a === "leave" ? t.capture("$pageleave") : t.capture("$pageview");
  };
function J(a) {
  let t, e;
  return {
    c() {
      (t = I("svg")), (e = I("path")), this.h();
    },
    l(s) {
      t = T(s, "svg", { stroke: !0, class: !0, fill: !0, viewBox: !0 });
      var o = m(t);
      (e = T(o, "path", {
        class: !0,
        "stroke-width": !0,
        "stroke-linecap": !0,
        "stroke-linejoin": !0,
        d: !0,
      })),
        m(e).forEach(d),
        o.forEach(d),
        this.h();
    },
    h() {
      n(e, "class", "line"),
        n(e, "stroke-width", "5"),
        n(e, "stroke-linecap", "round"),
        n(e, "stroke-linejoin", "round"),
        n(
          e,
          "d",
          "m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        ),
        n(t, "stroke", "currentColor"),
        n(t, "class", "hamburger mobile:!w-8 tablet:!w-10"),
        n(t, "fill", "none"),
        n(t, "viewBox", "-10 -10 120 120");
    },
    m(s, o) {
      D(s, t, o), h(t, e);
    },
    p: f,
    i: f,
    o: f,
    d(s) {
      s && d(t);
    },
  };
}
class pt extends E {
  constructor(t) {
    super(), k(this, t, null, J, x, {});
  }
}
let w = () => {};
const mt = () => {
    w();
    const a = (s) =>
        s.target.classList.add(s.target.getAttribute("data-animation")),
      t = (s = 0.2) =>
        new IntersectionObserver(
          (o) => {
            o.forEach((r) => {
              r.isIntersecting && a(r);
            });
          },
          { threshold: s || 0.2 }
        ),
      e = {};
    return (
      document.querySelectorAll("[data-animation]").forEach((s) => {
        const o = parseFloat(s.getAttribute("data-animation-threshold") || "0");
        e[o] || (e[o] = t(o)), e[o].observe(s);
      }),
      (w = () => Object.values(e).forEach((s) => s.disconnect())),
      w
    );
  },
  tt = (a, t) => {
    if (!a) return null;
    const e = a.getAttribute(t);
    return e === "none" ? null : e || tt(a.parentElement, t);
  };
function ft() {
  const a = X().screens;
  return window.matchMedia(`(min-width: ${a.desktop})`).matches
    ? "desktop"
    : window.matchMedia(`(min-width: ${a.tablet})`).matches
    ? "tablet"
    : "mobile";
}
function et(a) {
  let t, e, s, o, r, i, p, l, O;
  return {
    c() {
      (t = _("div")),
        (e = _("button")),
        (s = S(a[0])),
        (o = H()),
        (r = _("div")),
        (i = _("div")),
        (p = S(a[1])),
        this.h();
    },
    l(u) {
      t = g(u, "DIV", { class: !0 });
      var c = m(t);
      e = g(c, "BUTTON", { class: !0 });
      var y = m(e);
      (s = V(y, a[0])),
        y.forEach(d),
        (o = L(c)),
        (r = g(c, "DIV", { class: !0 }));
      var A = m(r);
      i = g(A, "DIV", { class: !0 });
      var P = m(i);
      (p = V(P, a[1])), P.forEach(d), A.forEach(d), c.forEach(d), this.h();
    },
    h() {
      n(e, "class", "underline-on-hover relative block text-headline-4"),
        n(
          i,
          "class",
          "text font-bold transition-all duration-300 ease-epic text-link-1 svelte-11ll79o"
        ),
        n(r, "class", "overflow-hidden svelte-11ll79o"),
        n(t, "class", "flex w-fit flex-col gap-2 svelte-11ll79o");
    },
    m(u, c) {
      D(u, t, c),
        h(t, e),
        h(e, s),
        h(t, o),
        h(t, r),
        h(r, i),
        h(i, p),
        l || ((O = [$(e, "click", a[3]), $(e, "mouseleave", a[4])]), (l = !0));
    },
    p(u, [c]) {
      c & 1 && C(s, u[0]), c & 2 && C(p, u[1]);
    },
    i: f,
    o: f,
    d(u) {
      u && d(t), (l = !1), M(O);
    },
  };
}
function st(a, t, e) {
  let s;
  R(a, K, (l) => e(2, (s = l)));
  const o = () => {
    navigator.clipboard.writeText(r), e(1, (i = s("common.footer.copied")));
  };
  let { text: r } = t,
    i = s("common.footer.copy");
  const p = () => e(1, (i = s("common.footer.copy")));
  return (
    (a.$$set = (l) => {
      "text" in l && e(0, (r = l.text));
    }),
    [r, i, s, o, p]
  );
}
class at extends E {
  constructor(t) {
    super(), k(this, t, st, et, x, { text: 0 });
  }
}
function ot(a) {
  let t, e;
  return (
    (t = new at({ props: { text: rt } })),
    {
      c() {
        q(t.$$.fragment);
      },
      l(s) {
        z(t.$$.fragment, s);
      },
      m(s, o) {
        F(t, s, o), (e = !0);
      },
      p: f,
      i(s) {
        e || (G(t.$$.fragment, s), (e = !0));
      },
      o(s) {
        U(t.$$.fragment, s), (e = !1);
      },
      d(s) {
        W(t, s);
      },
    }
  );
}
const rt = "scaleclient@gmail.com";
class _t extends E {
  constructor(t) {
    super(), k(this, t, null, ot, x, {});
  }
}
export {
  at as C,
  _t as E,
  pt as H,
  mt as a,
  tt as b,
  ft as d,
  j as g,
  dt as i,
  Q as s,
  ht as t,
};

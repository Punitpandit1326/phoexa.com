const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "_app/immutable/chunks/particles.CbUIxmUY.js",
      "_app/immutable/chunks/preload-helper.CnYb8wIg.js",
      "_app/immutable/chunks/scheduler.j3FdVX_3.js",
      "_app/immutable/chunks/index.B2YDLXwW.js",
      "_app/immutable/chunks/text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js",
      "_app/immutable/chunks/entry.BXe_oHrD.js",
      "_app/immutable/assets/text-animation.DBGvxfNe.css",
      "_app/immutable/chunks/page.Ch4oKtEx.js",
    ])
) => i.map((i) => d[i]);
import {
  a3 as pe,
  a4 as de,
  Z as K,
  T as he,
  s as R,
  k as Q,
  l as Y,
  e as V,
  a as C,
  t as L,
  c as y,
  g as D,
  b as M,
  f as p,
  d as j,
  r as g,
  y as ee,
  i as k,
  h as H,
  u as te,
  m as re,
  o as ae,
  j as z,
  M as se,
  n as B,
  H as ge,
  D as _e,
  v as Z,
  L as be,
  B as le,
} from "../chunks/scheduler.j3FdVX_3.js";
import {
  g as fe,
  b as w,
  e as ue,
  t as v,
  S as W,
  i as G,
  c as P,
  a as A,
  m as S,
  d as q,
} from "../chunks/index.B2YDLXwW.js";
import {
  t as J,
  n as ve,
  u as we,
} from "../chunks/text-animation.svelte_svelte_type_style_lang.PyTsGWbX.js";
import { h as ke } from "../chunks/lenis.Vcx2G2sx.js";
import "../chunks/entry.BXe_oHrD.js";
import {
  S as xe,
  A as Ee,
  Q as He,
  a as Ie,
  W as Te,
  P as Ce,
} from "../chunks/works-section.BNQQ1ktk.js";
import { S as De } from "../chunks/seo.BhO2Pmvo.js";
import "../chunks/benefits-list.svelte_svelte_type_style_lang.C3TWG9N2.js";
import { _ as Pe } from "../chunks/preload-helper.CnYb8wIg.js";
import { H as me } from "../chunks/header.B-UNqSd_.js";
import { B as $e } from "../chunks/check.CsInqHA3.js";
import { B as Ae } from "../chunks/blur-light.CTV_9hHm.js";
import { C as Se } from "../chunks/card.DYfjCfZN.js";
import { C as qe } from "../chunks/chevron-right.ecURoIU5.js";
import { F as Ve } from "../chunks/feather.CpcrUE3R.js";
function ne(s, e) {
  const r = (e.token = {});
  function t(a, l, n, $) {
    if (e.token !== r) return;
    e.resolved = $;
    let u = e.ctx;
    n !== void 0 && ((u = u.slice()), (u[n] = $));
    const d = a && (e.current = a)(u);
    let I = !1;
    e.block &&
      (e.blocks
        ? e.blocks.forEach((x, b) => {
            b !== l &&
              x &&
              (fe(),
              w(x, 1, 1, () => {
                e.blocks[b] === x && (e.blocks[b] = null);
              }),
              ue());
          })
        : e.block.d(1),
      d.c(),
      v(d, 1),
      d.m(e.mount(), e.anchor),
      (I = !0)),
      (e.block = d),
      e.blocks && (e.blocks[l] = d),
      I && he();
  }
  if (pe(s)) {
    const a = de();
    if (
      (s.then(
        (l) => {
          K(a), t(e.then, 1, e.value, l), K(null);
        },
        (l) => {
          if ((K(a), t(e.catch, 2, e.error, l), K(null), !e.hasCatch)) throw l;
        }
      ),
      e.current !== e.pending)
    )
      return t(e.pending, 0), !0;
  } else {
    if (e.current !== e.then) return t(e.then, 1, e.value, s), !0;
    e.resolved = s;
  }
}
const ye = (s) => ({}),
  oe = (s) => ({}),
  Be = (s) => ({}),
  ie = (s) => ({});
function Me(s) {
  let e,
    r,
    t,
    a,
    l,
    n,
    $,
    u,
    d,
    I,
    x = s[2]("home.blog.cards.cta") + "",
    b,
    E,
    T,
    h;
  const o = s[3].title,
    i = Y(o, s, s[4], ie),
    c = s[3].description,
    m = Y(c, s, s[4], oe);
  return (
    (T = new qe({
      props: {
        class:
          "transition-all duration-300 ease-epic group-hover:translate-x-[100%]",
      },
    })),
    {
      c() {
        (e = V("img")),
          (t = C()),
          (a = V("header")),
          (l = V("div")),
          i && i.c(),
          (n = C()),
          ($ = V("p")),
          m && m.c(),
          (u = C()),
          (d = V("a")),
          (I = V("span")),
          (b = L(x)),
          (E = C()),
          P(T.$$.fragment),
          this.h();
      },
      l(f) {
        (e = y(f, "IMG", {
          loading: !0,
          class: !0,
          alt: !0,
          src: !0,
          width: !0,
          height: !0,
        })),
          (t = D(f)),
          (a = y(f, "HEADER", { class: !0 }));
        var _ = M(a);
        l = y(_, "DIV", { class: !0 });
        var N = M(l);
        i && i.l(N), N.forEach(p), (n = D(_)), ($ = y(_, "P", { class: !0 }));
        var F = M($);
        m && m.l(F),
          F.forEach(p),
          _.forEach(p),
          (u = D(f)),
          (d = y(f, "A", { class: !0, href: !0, target: !0, rel: !0 }));
        var O = M(d);
        I = y(O, "SPAN", {});
        var X = M(I);
        (b = j(X, x)),
          X.forEach(p),
          (E = D(O)),
          A(T.$$.fragment, O),
          O.forEach(p),
          this.h();
      },
      h() {
        g(e, "loading", "lazy"),
          g(e, "class", "max-h-[25vh] w-full rounded-2xl object-cover"),
          g(e, "alt", "Blog Article Thumbnail"),
          ee(e.src, (r = s[0])) || g(e, "src", r),
          g(e, "width", "311"),
          g(e, "height", "175"),
          g(l, "class", "line-clamp-2 font-extrabold text-headline-4"),
          g($, "class", "line-clamp-2 text-paragraph-1"),
          g(a, "class", "flex max-w-[60ch] flex-col gap-2 text-balance"),
          g(
            d,
            "class",
            "group flex w-fit items-center gap-2 pb-6 text-secondary-3rd-900 text-headline-6"
          ),
          g(d, "href", s[1]),
          g(d, "target", "_blank"),
          g(d, "rel", null);
      },
      m(f, _) {
        k(f, e, _),
          k(f, t, _),
          k(f, a, _),
          H(a, l),
          i && i.m(l, null),
          H(a, n),
          H(a, $),
          m && m.m($, null),
          k(f, u, _),
          k(f, d, _),
          H(d, I),
          H(I, b),
          H(d, E),
          S(T, d, null),
          (h = !0);
      },
      p(f, _) {
        (!h || (_ & 1 && !ee(e.src, (r = f[0])))) && g(e, "src", r),
          i &&
            i.p &&
            (!h || _ & 16) &&
            te(i, o, f, f[4], h ? ae(o, f[4], _, Be) : re(f[4]), ie),
          m &&
            m.p &&
            (!h || _ & 16) &&
            te(m, c, f, f[4], h ? ae(c, f[4], _, ye) : re(f[4]), oe),
          (!h || _ & 4) &&
            x !== (x = f[2]("home.blog.cards.cta") + "") &&
            z(b, x),
          (!h || _ & 2) && g(d, "href", f[1]);
      },
      i(f) {
        h || (v(i, f), v(m, f), v(T.$$.fragment, f), (h = !0));
      },
      o(f) {
        w(i, f), w(m, f), w(T.$$.fragment, f), (h = !1);
      },
      d(f) {
        f && (p(e), p(t), p(a), p(u), p(d)), i && i.d(f), m && m.d(f), q(T);
      },
    }
  );
}
function Le(s) {
  let e, r;
  return (
    (e = new Se({
      props: {
        class:
          "flex w-full flex-col gap-4 !px-4 !py-6 tablet:w-[75%] tablet:gap-6 desktop:w-full",
        $$slots: { default: [Me] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        A(e.$$.fragment, t);
      },
      m(t, a) {
        S(e, t, a), (r = !0);
      },
      p(t, [a]) {
        const l = {};
        a & 23 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
      },
      i(t) {
        r || (v(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        w(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function je(s, e, r) {
  let t;
  Q(s, J, (u) => r(2, (t = u)));
  let { $$slots: a = {}, $$scope: l } = e,
    { img: n } = e,
    { href: $ } = e;
  return (
    (s.$$set = (u) => {
      "img" in u && r(0, (n = u.img)),
        "href" in u && r(1, ($ = u.href)),
        "$$scope" in u && r(4, (l = u.$$scope));
    }),
    [n, $, t, a, l]
  );
}
class U extends W {
  constructor(e) {
    super(), G(this, e, je, Le, R, { img: 0, href: 1 });
  }
}
function ze(s) {
  let e,
    r =
      '<div class="ellipse absolute bottom-0 h-[90%] w-full gradient-primary svelte-14uwhwq"></div>',
    t,
    a,
    l =
      '<div class="ellipse absolute h-full w-full bg-body-dark svelte-14uwhwq"></div>';
  return {
    c() {
      (e = V("div")),
        (e.innerHTML = r),
        (t = C()),
        (a = V("div")),
        (a.innerHTML = l),
        this.h();
    },
    l(n) {
      (e = y(n, "DIV", {
        class: !0,
        "data-parallax": !0,
        "data-rellax-speed": !0,
        "data-svelte-h": !0,
      })),
        se(e) !== "svelte-1l79khz" && (e.innerHTML = r),
        (t = D(n)),
        (a = y(n, "DIV", { class: !0, "data-svelte-h": !0 })),
        se(a) !== "svelte-6vg64x" && (a.innerHTML = l),
        this.h();
    },
    h() {
      g(
        e,
        "class",
        "ellipse-1 absolute bottom-0 left-0 -z-20 w-dvw svelte-14uwhwq"
      ),
        g(e, "data-parallax", ""),
        g(e, "data-rellax-speed", "-5"),
        g(
          a,
          "class",
          "ellipse-2 absolute bottom-0 left-0 -z-10 svelte-14uwhwq"
        );
    },
    m(n, $) {
      k(n, e, $), k(n, t, $), k(n, a, $);
    },
    p: B,
    i: B,
    o: B,
    d(n) {
      n && (p(e), p(t), p(a));
    },
  };
}
class Ne extends W {
  constructor(e) {
    super(), G(this, e, null, ze, R, {});
  }
}
function Oe(s) {
  s[2] = s[4].default;
}
function ce(s) {
  let e,
    r,
    t,
    a = {
      ctx: s,
      current: null,
      token: null,
      hasCatch: !1,
      pending: Re,
      then: Qe,
      catch: Fe,
      value: 4,
      blocks: [, , ,],
    };
  return (
    ne((r = s[2]), a),
    {
      c() {
        (e = le()), a.block.c();
      },
      l(l) {
        (e = le()), a.block.l(l);
      },
      m(l, n) {
        k(l, e, n),
          a.block.m(l, (a.anchor = n)),
          (a.mount = () => e.parentNode),
          (a.anchor = e),
          (t = !0);
      },
      p(l, n) {
        (s = l), (a.ctx = s), n & 4 && r !== (r = s[2]) && ne(r, a);
      },
      i(l) {
        t || (v(a.block), (t = !0));
      },
      o(l) {
        for (let n = 0; n < 3; n += 1) {
          const $ = a.blocks[n];
          w($);
        }
        t = !1;
      },
      d(l) {
        l && p(e), a.block.d(l), (a.token = null), (a = null);
      },
    }
  );
}
function Fe(s) {
  return { c: B, l: B, m: B, i: B, o: B, d: B };
}
function Qe(s) {
  Oe(s);
  let e, r;
  return (
    (e = new s[2]({})),
    {
      c() {
        P(e.$$.fragment);
      },
      l(t) {
        A(e.$$.fragment, t);
      },
      m(t, a) {
        S(e, t, a), (r = !0);
      },
      i(t) {
        r || (v(e.$$.fragment, t), (r = !0));
      },
      o(t) {
        w(e.$$.fragment, t), (r = !1);
      },
      d(t) {
        q(e, t);
      },
    }
  );
}
function Re(s) {
  return { c: B, l: B, m: B, i: B, o: B, d: B };
}
function We(s) {
  let e = s[1]("home.hero.header.1") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 2 && e !== (e = t[1]("home.hero.header.1") + "") && z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function Ge(s) {
  let e = s[1]("home.hero.header.2") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 2 && e !== (e = t[1]("home.hero.header.2") + "") && z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function Ke(s) {
  let e,
    r = s[1]("home.hero.cta") + "",
    t,
    a,
    l,
    n;
  return (
    (l = new Ee({
      props: {
        class:
          "transition-all duration-300 ease-epic group-hover:translate-x-[90%]",
      },
    })),
    {
      c() {
        (e = V("span")), (t = L(r)), (a = C()), P(l.$$.fragment);
      },
      l($) {
        e = y($, "SPAN", {});
        var u = M(e);
        (t = j(u, r)), u.forEach(p), (a = D($)), A(l.$$.fragment, $);
      },
      m($, u) {
        k($, e, u), H(e, t), k($, a, u), S(l, $, u), (n = !0);
      },
      p($, u) {
        (!n || u & 2) && r !== (r = $[1]("home.hero.cta") + "") && z(t, r);
      },
      i($) {
        n || (v(l.$$.fragment, $), (n = !0));
      },
      o($) {
        w(l.$$.fragment, $), (n = !1);
      },
      d($) {
        $ && (p(e), p(a)), q(l, $);
      },
    }
  );
}
function Ze(s) {
  let e,
    r,
    t,
    a,
    l,
    n,
    $,
    u,
    d,
    I = s[1]("home.hero.description") + "",
    x,
    b,
    E,
    T,
    h,
    o,
    i = s[2] && ce(s);
  return (
    (t = new Ne({})),
    (n = new me({
      props: {
        as: "header",
        class:
          "!mb-8 !leading-none text-display-1 tablet:!mb-12 desktop:!mb-16",
        immediateAnimation: !0,
        $$slots: { main: [Ge], secondary: [We] },
        $$scope: { ctx: s },
      },
    })),
    (E = new $e({
      props: {
        color: "secondary",
        class: "group flex gap-4",
        href: "/contact",
        $$slots: { default: [Ke] },
        $$scope: { ctx: s },
      },
    })),
    (h = new xe({})),
    {
      c() {
        (e = V("section")),
          i && i.c(),
          (r = C()),
          P(t.$$.fragment),
          (a = C()),
          (l = V("div")),
          P(n.$$.fragment),
          ($ = C()),
          (u = V("h1")),
          (d = new ge(!1)),
          (x = C()),
          (b = V("div")),
          P(E.$$.fragment),
          (T = C()),
          P(h.$$.fragment),
          this.h();
      },
      l(c) {
        e = y(c, "SECTION", { class: !0, style: !0 });
        var m = M(e);
        i && i.l(m),
          (r = D(m)),
          A(t.$$.fragment, m),
          (a = D(m)),
          (l = y(m, "DIV", { class: !0 }));
        var f = M(l);
        A(n.$$.fragment, f),
          ($ = D(f)),
          (u = y(f, "H1", { "data-animation": !0, class: !0, style: !0 }));
        var _ = M(u);
        (d = _e(_, !1)),
          _.forEach(p),
          (x = D(f)),
          (b = y(f, "DIV", { "data-animation": !0, class: !0, style: !0 }));
        var N = M(b);
        A(E.$$.fragment, N),
          N.forEach(p),
          (T = D(f)),
          A(h.$$.fragment, f),
          f.forEach(p),
          m.forEach(p),
          this.h();
      },
      h() {
        (d.a = null),
          g(u, "data-animation", "slide-up-fade"),
          g(
            u,
            "class",
            "slide-up-fade self-center text-balance text-center text-headline-4 mb-subheader tablet:max-w-[50ch]"
          ),
          Z(u, "--delay", "1s"),
          g(b, "data-animation", "slide-up-fade"),
          g(b, "class", "slide-up-fade w-fit self-center"),
          Z(b, "--delay", "1.2s"),
          g(l, "class", "content flex flex-col text-display-1 svelte-qcj32k"),
          g(e, "class", "escape-x padding-x relative w-dvw svelte-qcj32k"),
          Z(e, "--height-offset", s[0] + "px");
      },
      m(c, m) {
        k(c, e, m),
          i && i.m(e, null),
          H(e, r),
          S(t, e, null),
          H(e, a),
          H(e, l),
          S(n, l, null),
          H(l, $),
          H(l, u),
          d.m(I, u),
          H(l, x),
          H(l, b),
          S(E, b, null),
          H(l, T),
          S(h, l, null),
          (o = !0);
      },
      p(c, [m]) {
        c[2]
          ? i
            ? (i.p(c, m), m & 4 && v(i, 1))
            : ((i = ce(c)), i.c(), v(i, 1), i.m(e, r))
          : i &&
            (fe(),
            w(i, 1, 1, () => {
              i = null;
            }),
            ue());
        const f = {};
        m & 34 && (f.$$scope = { dirty: m, ctx: c }),
          n.$set(f),
          (!o || m & 2) &&
            I !== (I = c[1]("home.hero.description") + "") &&
            d.p(I);
        const _ = {};
        m & 34 && (_.$$scope = { dirty: m, ctx: c }),
          E.$set(_),
          (!o || m & 1) && Z(e, "--height-offset", c[0] + "px");
      },
      i(c) {
        o ||
          (v(i),
          v(t.$$.fragment, c),
          v(n.$$.fragment, c),
          v(E.$$.fragment, c),
          v(h.$$.fragment, c),
          (o = !0));
      },
      o(c) {
        w(i),
          w(t.$$.fragment, c),
          w(n.$$.fragment, c),
          w(E.$$.fragment, c),
          w(h.$$.fragment, c),
          (o = !1);
      },
      d(c) {
        c && p(e), i && i.d(), q(t), q(n), q(E), q(h);
      },
    }
  );
}
function Je(s, e, r) {
  let t, a;
  Q(s, ve, ($) => r(0, (t = $))), Q(s, J, ($) => r(1, (a = $)));
  const { startParallax: l } = we();
  let n;
  return (
    be(() => {
      const $ = l();
      return (
        r(
          2,
          (n = Pe(
            () => import("../chunks/particles.CbUIxmUY.js"),
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])
          ))
        ),
        $
      );
    }),
    [t, a, n]
  );
}
class Ue extends W {
  constructor(e) {
    super(), G(this, e, Je, Ze, R, {});
  }
}
function Xe(s) {
  let e = s[0]("home.blog.header.1") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 && e !== (e = t[0]("home.blog.header.1") + "") && z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function Ye(s) {
  let e = s[0]("home.blog.header.2") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 && e !== (e = t[0]("home.blog.header.2") + "") && z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function et(s) {
  let e = s[0]("home.blog.cards.articles.0.title") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.0.title") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function tt(s) {
  let e = s[0]("home.blog.cards.articles.0.description") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.0.description") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function rt(s) {
  let e = s[0]("home.blog.cards.articles.1.title") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.1.title") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function at(s) {
  let e = s[0]("home.blog.cards.articles.1.description") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.1.description") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function st(s) {
  let e = s[0]("home.blog.cards.articles.2.title") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.2.title") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function lt(s) {
  let e = s[0]("home.blog.cards.articles.2.description") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 &&
        e !== (e = t[0]("home.blog.cards.articles.2.description") + "") &&
        z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function nt(s) {
  let e = s[0]("home.blog.cta") + "",
    r;
  return {
    c() {
      r = L(e);
    },
    l(t) {
      r = j(t, e);
    },
    m(t, a) {
      k(t, r, a);
    },
    p(t, a) {
      a & 1 && e !== (e = t[0]("home.blog.cta") + "") && z(r, e);
    },
    d(t) {
      t && p(r);
    },
  };
}
function ot(s) {
  let e, r, t, a, l, n, $, u, d, I, x, b, E, T, h, o, i;
  return (
    (r = new Ae({
      props: {
        class: "absolute left-0 z-0 h-[110dvh] w-[200dvw] -translate-x-[29%]",
      },
    })),
    (a = new Ve({
      props: {
        feather: 4,
        class: "absolute left-0 top-0 -scale-x-100 desktop:top-[5dvh]",
      },
    })),
    (n = new me({
      props: {
        as: "h2",
        class: "mb-subheader",
        $$slots: { main: [Ye], secondary: [Xe] },
        $$scope: { ctx: s },
      },
    })),

    // Read-More

    (d = new U({
      props: {
        img: "/images/blogs/blog_1.jpg",
        href: "",
        $$slots: { description: [tt], title: [et] },
        $$scope: { ctx: s },
      },
    })),
    (x = new U({
      props: {
        img: "/images/blogs/2.webp",
        href: "",
        $$slots: { description: [at], title: [rt] },
        $$scope: { ctx: s },
      },
    })),
    (E = new U({
      props: {
        img: "/images/blogs/blog_2.jpg",
        href: "",
        $$slots: { description: [lt], title: [st] },
        $$scope: { ctx: s },
      },
    })),
    (o = new $e({
      props: {
        href: "/blog/",
        variant: "outline",
        target: "_blank",
        $$slots: { default: [nt] },
        $$scope: { ctx: s },
      },
    })),
    {
      c() {
        (e = V("section")),
          P(r.$$.fragment),
          (t = C()),
          P(a.$$.fragment),
          (l = C()),
          P(n.$$.fragment),
          ($ = C()),
          (u = V("div")),
          P(d.$$.fragment),
          (I = C()),
          P(x.$$.fragment),
          (b = C()),
          P(E.$$.fragment),
          (T = C()),
          (h = V("div")),
          P(o.$$.fragment),
          this.h();
      },
      l(c) {
        e = y(c, "SECTION", { class: !0 });
        var m = M(e);
        A(r.$$.fragment, m),
          (t = D(m)),
          A(a.$$.fragment, m),
          (l = D(m)),
          A(n.$$.fragment, m),
          ($ = D(m)),
          (u = y(m, "DIV", { class: !0, "data-animation": !0 }));
        var f = M(u);
        A(d.$$.fragment, f),
          (I = D(f)),
          A(x.$$.fragment, f),
          (b = D(f)),
          A(E.$$.fragment, f),
          f.forEach(p),
          (T = D(m)),
          (h = y(m, "DIV", { class: !0, "data-animation": !0 }));
        var _ = M(h);
        A(o.$$.fragment, _), _.forEach(p), m.forEach(p), this.h();
      },
      h() {
        g(
          u,
          "class",
          "flex flex-col items-center gap-12 mb-subheader tablet:gap-16 desktop:flex-row desktop:gap-16 desktop:*:flex-1"
        ),
          g(u, "data-animation", "slide-up-fade"),
          g(h, "class", "flex justify-center"),
          g(h, "data-animation", "slide-up-fade"),
          g(e, "class", "relative w-full pb-2");
      },
      m(c, m) {
        k(c, e, m),
          S(r, e, null),
          H(e, t),
          S(a, e, null),
          H(e, l),
          S(n, e, null),
          H(e, $),
          H(e, u),
          S(d, u, null),
          H(u, I),
          S(x, u, null),
          H(u, b),
          S(E, u, null),
          H(e, T),
          H(e, h),
          S(o, h, null),
          (i = !0);
      },
      p(c, [m]) {
        const f = {};
        m & 3 && (f.$$scope = { dirty: m, ctx: c }), n.$set(f);
        const _ = {};
        m & 3 && (_.$$scope = { dirty: m, ctx: c }), d.$set(_);
        const N = {};
        m & 3 && (N.$$scope = { dirty: m, ctx: c }), x.$set(N);
        const F = {};
        m & 3 && (F.$$scope = { dirty: m, ctx: c }), E.$set(F);
        const O = {};
        m & 3 && (O.$$scope = { dirty: m, ctx: c }), o.$set(O);
      },
      i(c) {
        i ||
          (v(r.$$.fragment, c),
          v(a.$$.fragment, c),
          v(n.$$.fragment, c),
          v(d.$$.fragment, c),
          v(x.$$.fragment, c),
          v(E.$$.fragment, c),
          v(o.$$.fragment, c),
          (i = !0));
      },
      o(c) {
        w(r.$$.fragment, c),
          w(a.$$.fragment, c),
          w(n.$$.fragment, c),
          w(d.$$.fragment, c),
          w(x.$$.fragment, c),
          w(E.$$.fragment, c),
          w(o.$$.fragment, c),
          (i = !1);
      },
      d(c) {
        c && p(e), q(r), q(a), q(n), q(d), q(x), q(E), q(o);
      },
    }
  );
}
function it(s, e, r) {
  let t;
  return Q(s, J, (a) => r(0, (t = a))), [t];
}
class ct extends W {
  constructor(e) {
    super(), G(this, e, it, ot, R, {});
  }
}
function ft(s) {
  let e, r, t, a, l, n, $, u, d, I, x, b, E, T, h;
  return (
    (e = new De({ props: { title: s[0]("home.pageTitle") } })),
    (t = new Ue({})),
    (n = new He({})),
    (u = new Ie({})),
    (I = new Te({})),
    (b = new ct({})),
    (T = new Ce({})),
    {
      c() {
        P(e.$$.fragment),
          (r = C()),
          P(t.$$.fragment),
          (a = C()),
          (l = V("div")),
          P(n.$$.fragment),
          ($ = C()),
          P(u.$$.fragment),
          (d = C()),
          P(I.$$.fragment),
          (x = C()),
          P(b.$$.fragment),
          (E = C()),
          P(T.$$.fragment),
          this.h();
      },
      l(o) {
        A(e.$$.fragment, o),
          (r = D(o)),
          A(t.$$.fragment, o),
          (a = D(o)),
          (l = y(o, "DIV", { class: !0 }));
        var i = M(l);
        A(n.$$.fragment, i),
          ($ = D(i)),
          A(u.$$.fragment, i),
          (d = D(i)),
          A(I.$$.fragment, i),
          (x = D(i)),
          A(b.$$.fragment, i),
          i.forEach(p),
          (E = D(o)),
          A(T.$$.fragment, o),
          this.h();
      },
      h() {
        g(
          l,
          "class",
          "escape-x padding-x relative left-0 flex w-dvw flex-col items-center overflow-hidden bg-body-dark gap-section"
        );
      },
      m(o, i) {
        S(e, o, i),
          k(o, r, i),
          S(t, o, i),
          k(o, a, i),
          k(o, l, i),
          S(n, l, null),
          H(l, $),
          S(u, l, null),
          H(l, d),
          S(I, l, null),
          H(l, x),
          S(b, l, null),
          k(o, E, i),
          S(T, o, i),
          (h = !0);
      },
      p(o, [i]) {
        const c = {};
        i & 1 && (c.title = o[0]("home.pageTitle")), e.$set(c);
      },
      i(o) {
        h ||
          (v(e.$$.fragment, o),
          v(t.$$.fragment, o),
          v(n.$$.fragment, o),
          v(u.$$.fragment, o),
          v(I.$$.fragment, o),
          v(b.$$.fragment, o),
          v(T.$$.fragment, o),
          (h = !0));
      },
      o(o) {
        w(e.$$.fragment, o),
          w(t.$$.fragment, o),
          w(n.$$.fragment, o),
          w(u.$$.fragment, o),
          w(I.$$.fragment, o),
          w(b.$$.fragment, o),
          w(T.$$.fragment, o),
          (h = !1);
      },
      d(o) {
        o && (p(r), p(a), p(l), p(E)),
          q(e, o),
          q(t, o),
          q(n),
          q(u),
          q(I),
          q(b),
          q(T, o);
      },
    }
  );
}
function ut(s, e, r) {
  let t;
  return Q(s, J, (a) => r(0, (t = a))), ke.set("home"), [t];
}
class Tt extends W {
  constructor(e) {
    super(), G(this, e, ut, ft, R, {});
  }
}
export { Tt as component };

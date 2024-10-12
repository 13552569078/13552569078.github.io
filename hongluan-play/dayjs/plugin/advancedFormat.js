var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, r) {
      var n = t.prototype, s = n.format;
      r.en.ordinal = function(e2) {
        var t2 = ["th", "st", "nd", "rd"], r2 = e2 % 100;
        return "[" + e2 + (t2[(r2 - 20) % 10] || t2[r2] || t2[0]) + "]";
      }, n.format = function(e2) {
        var t2 = this, r2 = this.$locale();
        if (!this.isValid())
          return s.bind(this)(e2);
        var n2 = this.$utils(), a = (e2 || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(e3) {
          switch (e3) {
            case "Q":
              return Math.ceil((t2.$M + 1) / 3);
            case "Do":
              return r2.ordinal(t2.$D);
            case "gggg":
              return t2.weekYear();
            case "GGGG":
              return t2.isoWeekYear();
            case "wo":
              return r2.ordinal(t2.week(), "W");
            case "w":
            case "ww":
              return n2.s(t2.week(), e3 === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return n2.s(t2.isoWeek(), e3 === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return n2.s(String(t2.$H === 0 ? 24 : t2.$H), e3 === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(t2.$d.getTime() / 1e3);
            case "x":
              return t2.$d.getTime();
            case "z":
              return "[" + t2.offsetName() + "]";
            case "zzz":
              return "[" + t2.offsetName("long") + "]";
            default:
              return e3;
          }
        });
        return s.bind(this)(a);
      };
    };
  });
});
export default __VIRTUAL_FILE;

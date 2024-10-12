var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  !function(t, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    var t = "month", n = "quarter";
    return function(e, i) {
      var r = i.prototype;
      r.quarter = function(t2) {
        return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
      };
      var s = r.add;
      r.add = function(e2, i2) {
        return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
      };
      var u = r.startOf;
      r.startOf = function(e2, i2) {
        var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
        if (r2.p(e2) === n) {
          var o = this.quarter() - 1;
          return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
        }
        return u.bind(this)(e2, i2);
      };
    };
  });
});
export default __VIRTUAL_FILE;

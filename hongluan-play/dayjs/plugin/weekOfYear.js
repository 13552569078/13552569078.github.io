var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn) {
  var module = {exports: {}};
  return fn(module, module.exports), module.exports;
}
var __VIRTUAL_FILE = createCommonjsModule(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    var e = "week", t = "year";
    return function(i, n, r) {
      var f = n.prototype;
      f.week = function(i2) {
        if (i2 === void 0 && (i2 = null), i2 !== null)
          return this.add(7 * (i2 - this.week()), "day");
        var n2 = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
          if (f2.isBefore(s))
            return 1;
        }
        var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
        return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
      }, f.weeks = function(e2) {
        return e2 === void 0 && (e2 = null), this.week(e2);
      };
    };
  });
});
export default __VIRTUAL_FILE;

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/** Set zero timeout.
 *
 * Sometimes we need to delay rerendering components
 * on one tick (if they are inside  `Popup` and rerendering could
 * change `Popup`'s content sizes).
 * Because it races with Popup's onclick handler.
 * `Popup` relies on it's content sizes when computing
 * should popup stay open or be closed. So we need
 * to wait until `Popup`'s onclick handler done its job.
 */
var tick = function (leadToRerendering) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    setTimeout.apply(void 0, __spreadArray([leadToRerendering, 0], args, false));
};
export default tick;

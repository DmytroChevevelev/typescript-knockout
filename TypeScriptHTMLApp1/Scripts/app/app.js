///<reference path="../typings/requirejs/require.d.ts" />
///<reference path="../typings/knockout/knockout.d.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    //export module TSTEST {
    var Greeter = (function () {
        function Greeter(fNmae, lName) {
            this.ko = require('knockout');
            this.firstName = fNmae;
            this.lastName = lName;
            this.timeValue = this.ko.observable(new Date().toUTCString());
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                _this.timeValue(new Date().toUTCString());
            }, 500);
        };
        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
//}
//# sourceMappingURL=app.js.map
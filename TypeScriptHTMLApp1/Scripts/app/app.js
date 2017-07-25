///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="../typings/knockout/knockout.d.ts" />
var TSTEST;
(function (TSTEST) {
    var Greeter = (function () {
        function Greeter(ko, fNmae, lName) {
            this.firstName = fNmae;
            this.lastName = lName;
            this.timeValue = ko.observable(new Date().toUTCString());
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
    TSTEST.Greeter = Greeter;
})(TSTEST || (TSTEST = {}));
//# sourceMappingURL=app.js.map
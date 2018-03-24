var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Coin2 = /** @class */ (function (_super) {
        __extends(Coin2, _super);
        // private instance variables
        // public properties
        // constructors
        function Coin2() {
            var _this = _super.call(this, "coin") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Coin2.prototype.Start = function () {
        };
        Coin2.prototype.Update = function () {
            this.CheckBounds();
        };
        Coin2.prototype.CheckBounds = function () {
            if (this.x < 0 - this.width) {
                this.alpha = 1;
            }
        };
        return Coin2;
    }(objects.GameObject));
    objects.Coin2 = Coin2;
})(objects || (objects = {}));
//# sourceMappingURL=coin2.js.map
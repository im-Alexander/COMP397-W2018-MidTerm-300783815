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
    var Island2 = /** @class */ (function (_super) {
        __extends(Island2, _super);
        // private instance variables
        // public properties
        // Constructor
        function Island2() {
            var _this = _super.call(this, "island") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Island2.prototype.Start = function () {
            this._dx = -5;
            this.Reset();
        };
        // updates the game object every frame
        Island2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Island2.prototype.Reset = function () {
            //this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            //this.y = -this.height;
            this.x = this.width + 640;
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
        };
        // move the object to some new location
        Island2.prototype.Move = function () {
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Island2.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x <= 0 - this.width) {
                this.Reset();
            }
        };
        return Island2;
    }(objects.GameObject));
    objects.Island2 = Island2;
})(objects || (objects = {}));
//# sourceMappingURL=island2.js.map
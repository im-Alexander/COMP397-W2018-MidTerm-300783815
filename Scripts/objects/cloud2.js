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
    var Cloud2 = /** @class */ (function (_super) {
        __extends(Cloud2, _super);
        // private instance variables
        // public properties
        // Constructor
        function Cloud2() {
            var _this = _super.call(this, "cloud") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        // Initializes variables and creates new objects
        Cloud2.prototype.Start = function () {
            this.Reset();
        };
        // updates the game object every frame
        Cloud2.prototype.Update = function () {
            this.Move();
            this.CheckBounds();
        };
        // reset the objects location to some value
        Cloud2.prototype.Reset = function () {
            //this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            //this.y = -this.height;
            //this._dx = Math.floor((Math.random() * 4) - 2);
            //this._dy = Math.floor((Math.random() * 5) + 5);
            this.x = 960 + this.width;
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
            this._dx = Math.floor((Math.random() * 5) - 10);
            this._dy = Math.floor((Math.random() * 3));
        };
        // move the object to some new location
        Cloud2.prototype.Move = function () {
            this.y += this._dy;
            this.x += this._dx;
        };
        // check to see if some boundary has been passed
        Cloud2.prototype.CheckBounds = function () {
            // check lower bounds
            if (this.x <= 0 - this.width) {
                this.Reset();
            }
        };
        return Cloud2;
    }(objects.GameObject));
    objects.Cloud2 = Cloud2;
})(objects || (objects = {}));
//# sourceMappingURL=cloud2.js.map
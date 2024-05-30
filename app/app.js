var Ellip = /** @class */ (function () {
    function Ellip() {
        this.axis_A = null;
        this.axis_B = null;
        this.axis_C = null;
        this.calcButton = null;
        this.result = null;
        this.volume = 0;
        this.bindStart();
        this.eventHandlerStart();
    }
    Ellip.prototype.bindStart = function () {
        this.axis_A = document.getElementById('axis_A');
        this.axis_B = document.getElementById('axis_B');
        this.axis_C = document.getElementById('axis_C');
        this.calcButton = document.getElementById('calcButton');
        this.result = document.getElementById('result');
    };
    Ellip.prototype.eventHandlerStart = function () {
        var _this = this;
        var _a;
        (_a = this.calcButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.calcStart();
        });
    };
    Ellip.prototype.calcStart = function () {
        // let ax_a:number;
        // let ax_b:number;
        // let ax_c:number;
        if (this.axis_A && this.axis_B && this.axis_C) {
            var ax_a = parseFloat(this.axis_A.value);
            var ax_b = parseFloat(this.axis_B.value);
            var ax_c = parseFloat(this.axis_C.value);
            this.calcVolume(ax_a, ax_b, ax_c);
            this.resultRender();
        }
    };
    Ellip.prototype.calcVolume = function (ax_a, ax_b, ax_c) {
        this.volume = (4 / 3) * Math.PI * ax_a * ax_b * ax_c;
    };
    Ellip.prototype.resultRender = function () {
        if (this.result) {
            this.result.value = "".concat(this.volume.toFixed(2));
        }
    };
    return Ellip;
}());
;
new Ellip();

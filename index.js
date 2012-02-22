exports.none = {
    map: function() {
        return exports.none;
    }
};

exports.some = function(value) {
    return new Some(value);
};

var Some = function(value) {
    this._value = value;
};

Some.prototype.map = function(func) {
    return new Some(func(this._value));
};

exports.isOption = function(value) {
    return value === exports.none || value instanceof Some;
};

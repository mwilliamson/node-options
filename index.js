exports.none = {
};

exports.some = function(value) {
    return new Some(value);
};

var Some = function(value) {
    this._value = value;
};

exports.isOption = function(value) {
    return value === exports.none || value instanceof Some;
};

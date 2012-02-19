exports.none = {
};

exports.some = function(value) {
    return new Some(value);
};

var Some = function(value) {
    this._value = value;
};

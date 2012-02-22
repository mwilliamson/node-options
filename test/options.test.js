var options = require("..");

exports.noneIsAnOption = function(test) {
    test.equal(true, options.isOption(options.none));
    test.done();
};

exports.someIsAnOption = function(test) {
    test.equal(true, options.isOption(options.some(4)));
    test.done();
};

exports.nullIsNotAnOption = function(test) {
    test.equal(false, options.isOption(null));
    test.done();
};

exports.stringIsNotAnOption = function(test) {
    test.equal(false, options.isOption("surrender"));
    test.done();
};

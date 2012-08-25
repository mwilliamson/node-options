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

exports.mappingOverNoneHasNoEffect = function(test) {
    test.equal(options.none, options.none.map(function() { return true }));
    test.done();
};

exports.mappingOverSomeAppliesFunctionToValue = function(test) {
    test.deepEqual(options.some(4), options.some(2).map(function(value) {
        return value * value; 
    }));
    test.done();
};

exports.noneToArrayIsEmptyArray = function(test) {
    test.deepEqual([], options.none.toArray());
    test.done();
};

exports.someToArrayIsSingleElementArray = function(test) {
    test.deepEqual(["apple"], options.some("apple").toArray());
    test.done();
};

exports.noneValueOrElseCallsPassedValueIfItsAFunction = function(test) {
    test.deepEqual(4, options.none.valueOrElse(function() { return 4; }));
    test.done();
};

exports.noneValueOrElseReturnsArgumentIfItsNotAFunction = function(test) {
    test.deepEqual(4, options.none.valueOrElse(4));
    test.done();
};

exports.someValueOrElseReturnsWrappedValue = function(test) {
    test.deepEqual(1, options.some(1).valueOrElse(function() { return 4; }));
    test.done();
};

exports.noneOrElseReturnsArgumentIfItsNotAFunction = function(test) {
    test.deepEqual(options.some(4), options.none.orElse(options.some(4)));
    test.done();
};

exports.noneOrElseCallsArgumentIfItsAFunction = function(test) {
    test.deepEqual(options.some(4), options.none.orElse(function() { return options.some(4); }));
    test.done();
};

exports.someOrElseReturnsTheCurrentOption = function(test) {
    test.deepEqual(options.some(1), options.some(1).orElse(4));
    test.done();
};

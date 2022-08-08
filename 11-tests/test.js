"use-strict";

describe("pow", function() {

    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });
    //In case of the first it fails, the second it will be executed
    it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });

});
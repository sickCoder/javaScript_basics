"use-strict";

describe("pow", function() {

    /*
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });
    //In case of the first it fails, the second it will be executed
    it("3 raised to power 4 is 81", function() {
        assert.equal(pow(3, 4), 81);
    });
    */
   //Nested describe
   describe("raises x to power 3", function(){
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
       }
    
       for (let x = 1; x <= 5; x++) {
        makeTest(x);
       }
   });
});
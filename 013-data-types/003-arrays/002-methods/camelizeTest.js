"use-strict";

describe("camelize", function() {
    
    it("camel case a hypen formatted string", function() {
        let str = "background-color";
        assert.equal(camelize(str), "backgroundColor");
    });

    it("camel case a multiword hypen formatted string", function() {
        let str = "list-style-image";
        assert.equal(camelize(str), "listStyleImage");
    });

    it("camel case a hyphen formatted string starting with a hyphen", function() {
        let str = "-webkit-transition";
        assert.equal(camelize(str), "WebkitTransition");
    });
});
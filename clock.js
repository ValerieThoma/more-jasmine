describe("a simple setTimeout", function(){
    var sample:
    beforeEach(function(){
        sample = jasmine.createSpy("sampleFunction");
        jasmine.clock().install();
    });
    afterEach(function(){
        jasmine.clock().uninstall();
    });
    it("is only invoked after 1000 milleseconds", function(){
        setTimeout(function(){
            sample();
        }, 1000);
        jasmine.clock().tick(999);
        expect(sameple).not.toHaveBeenCalled();
        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
    });
});
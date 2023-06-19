describe ("Testing the isFromCapeTown function", function(){
    it ("it should return true,when it called with CA 123", function(){
      
        assert.equal(isFromCapeTown('CA 123 908'), true);
    
    });
       it ("it should return false,when it called with CJ 123", function(){
        assert.equal(isFromCapeTown('CJ 123 908'), false);
       });
      });
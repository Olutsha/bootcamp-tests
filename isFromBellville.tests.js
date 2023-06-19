describe ("Testing the isFromBellville function", function(){
    it ("it should return true,when it called with CY 123", function(){
      
        assert.equal(isFromBellville('CY 123'), true);
    
    });
       it ("it should return false,when it called with CJ 123", function(){
        assert.equal(isFromBellville('CJ 123'), false);
    
       });
      });
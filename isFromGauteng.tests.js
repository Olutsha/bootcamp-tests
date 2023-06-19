describe ("Testing the isFromGauteng function", function(){
    it ("it should return true,when it called with DR 123 GP", function(){
      
        assert.equal(isFromGauteng('DR 123 GP'), true);
    
    });
       it ("it should return false,when it called with CJ 123", function(){
        assert.equal(isFromGauteng('CJ 123 908'), false);
       });
      });
describe ("Testing the greet function", function(){
    it ("it should return hello,Lilonke when it called with Lilonke", function(){
      
      assert.equal(greet('Lilonke'), 'Hello, Lilonke'), 'this should return true'
    
    });
       it ("it should return hello, Lona when it called with Lona", function(){
         assert.equal(greet('Lona'), 'Hello, Lona'); 'this should return true'
    
       });
      });
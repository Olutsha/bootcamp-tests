describe ("Testing the isWeekday function", function(){
    it ("it should return true,when it called with a name that startsWith 'Mon'/'Tue'/'Wed'/'Thur'/'Fri'", function(){
      
        assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);
    
    });
       it ("it should return false,when it called with name that does not startsWith 'Mon'/'Tue'/'Wed'/'Thur'/'Fri'", function(){
        assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
       });
      });
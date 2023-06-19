describe ("Testing the mostExpensiveDepartment function", function(){
    it ("it should return the name of the most expensive department from sales data'", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 1");

      

    });
    it ("it should return the name of the most expensive department from sales data 2'", function(){
        assert.equal('outdoor', mostProfitableDepartment(salesData), "Most profitable department is 'outdoor' for dataset 2");
      });
      it ("it should return the name of the most expensive day from sales data'", function(){
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 1");

      });
      it ("it should return the name of the most expensive day from sales data'", function(){
        assert.equal('Thursday', mostProfitableDay(salesData), "Most profitable day is 'Thursday' for dataset 2");
 
    });
});
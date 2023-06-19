function yearsAgo(year) { 
    let currentYear = new Date();
     return (currentYear.getFullYear()-year);
     }
    console.log(yearsAgo(2020));
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CJ');
assert.deepEqual(fromStellies, ['CJ 456']);


var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF');
assert.deepEqual(fromKuilsriver, []);
function allFromTown(regNums, town) {
    let regNumsArr = regNums.split(",");
    let townRegNums = [];
    for (let i = 0; i < regNumsArr.length; i++) {
      let currentRegNum = regNumsArr[i].trim();
      if (currentRegNum.startsWith(town)) {
        townRegNums.push(currentRegNum);
      }
    }
    return townRegNums;
  }
  console.log(allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'))
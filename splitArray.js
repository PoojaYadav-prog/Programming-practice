let arr = [1,23,3,4,2,3,1,1,1,11]
splitNumber = 3 ; 

function createGroups(arr, splitNumber) {
    const perGroup = Math.floor(arr.length / splitNumber);
    return new Array(splitNumber)
      .fill('')
      .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
  }

 console.log(createGroups(arr,splitNumber))
function diffArray(arr1, arr2) {
  const newArr = [];
  let unique = 1;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        unique = 0;
        break;
      } else {
        unique = 1;
      }
    }

    if (unique == 1) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] == arr1[j]) {
        unique = 0;
        break;
      } else {
        unique = 1;
      }
    }

    if (unique == 1) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));

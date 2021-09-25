array = ["+", ["*", 2, 6], ["-", ["/", ["+", 12, 23], 7], 2]];




const calcular = (array) => {
  let p = 0;
  let s = 0;
  if (array[1].length > 1) {
    p = calcular(array[1]);
  } else {
    p = array[1];
  }
  if (array[2].length > 1) {
    s = calcular(array[2]);
  } else {
    s = array[2];
  }
  if (array[0] == "+") {
    // console.log(array[0]);
    return p + s;
  } else if (array[0] == "-") {
    // console.log(array[0]);
    return p - s;
  } else if (array[0] == "*") {
    // console.log(array[0]);
    return p * s;
  } else if (array[0] == "/") {
    // console.log(array[0]);
    return p / s;
  }
}
// array = ["+", 1,['-',5,3]];
array = ["+", ["*", 2, 6], ["-", ["/", ["+", 12, 23], 7], 2]];


document.write('primer punto: ',calcular(array));
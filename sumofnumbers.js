function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}
function sumRecursion(list, initial) {
  if (initial >= list.length) {
    return 0;
  }
  return sumRecursion(list, initial + 1) + list[initial];
}
function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, i) {
    let initialValue = memo;
    initialValue += i;
    return initialValue;
  });
}
const list = [1, 2, 3, 4, 5];
console.log(sumFor(list));
console.log(sumWhile(list));
console.log(sumRecursion(list, 0));
console.log(sumTheSimpleWay(list));

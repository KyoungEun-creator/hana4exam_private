// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      end = 0;
    }
  }
  const result = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    result.push(+i.toFixed(1));
    i = +i.toFixed(1);
  }

  // const lastValue = result[result.length - 1];
  // const nextValue = +(lastValue + step).toFixed(1);
  // if ((start < end && nextValue <= end) || (start > end && nextValue >= end)) {
  //   result.push(+nextValue.toFixed(10));
  // }

  return result;
};

module.exports = { range };

console.log(range(1, 2, 0.1));
console.log(range(2, 1, -0.1));

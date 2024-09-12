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

  return result;
};

module.exports = { range };

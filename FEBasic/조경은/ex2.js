const assert = require("assert");

// range 함수를 작성하세요.
const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];

  // (start - end) * step > 0 아래 두 조건을 하나로 계산해버릴 수도 있음
  if ((start > end && step > 0) || (start < end && step < 0)) return [];

  // e가 없다면?
  if (end === undefined) {
    if (start > 0) {
      end = start;
      start = 1;
    } else if (start < 0) {
      end = -1;
    } else {
      // start === 0
      end = 0;
    }
  }
  const result = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    result.push(+i.toFixed(1));
  }
  return result;
};

module.exports = { range };

// dummy(mock)입니다. 올바르게 수정하세요.
// type any -> cb에 어느 타입이 와도 수용 가능하게 범용적으로 만들기
const debounce = (cb: any, delay: number) => (i: number) => {};
const throttle = (cb: any, delay: number) => (i: number) => {};

// function throttle...

const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) debo(i); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력

// ---------------------
export const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};

export const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

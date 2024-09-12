// dummy(mock)입니다. 올바르게 수정하세요.
// const debounce = (cb: any, delay: number) => (i: number) => {};
// const throttle = (cb: any, delay: number) => (i: number) => {};

// ---------------------

export const debounce = <T extends unknown[]>(cb: (...args: T) => void, delay: number) => {
  let timer: NodeJS.Timeout;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
};

export const throttle = <T extends unknown[]>(cb: (...args: T) => void, delay: number) => {
  let timer: NodeJS.Timeout | null;
  return (...args: T) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// test code
const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i += 1) console.log(debo(i)); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i += 1) console.log(thro(i)); // 11 출력

// dummy(mock)입니다. 올바르게 수정하세요.
// type any -> cb에 어느 타입이 와도 수용 가능하게 범용적으로 만들기
// const debounce = (cb: any, delay: number) => (i: number) => {};
// const throttle = (cb: any, delay: number) => (i: number) => {};

// ---------------------

// 제네릭 사용
type TCb = (i: number) => void;

export const debounce = (cb: TCb, delay: number) => {
  let timer: any;
  return (i: number) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(i), delay);
  };
};

export const throttle = (cb: TCb, delay: number) => {
  let timer: any;
  return (i: number) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(i);
      timer = null;
    }, delay);
  };
};

// test code
const debo = debounce((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) console.log(debo(i)); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) console.log(thro(i)); // 11 출력

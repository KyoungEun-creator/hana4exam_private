type TCb = (i: number) => void;

export const debounce = (cb: TCb, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (i: number) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => cb(i), delay);
  };
};

export const throttle = (cb: TCb, delay: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
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
for (let i = 10; i < 15; i++) debo(i); // 15 출력

const thro = throttle((a: number) => console.log(a + 1), 500);
for (let i = 10; i < 15; i++) thro(i); // 11 출력

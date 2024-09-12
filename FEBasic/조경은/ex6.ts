export const randTime = <T>(val: T): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

export function promiseAllSettled<T>(
  promises: Promise<T>[]
): Promise<{ status: "fulfilled"; value: T } | { status?: "rejected"; reason?: any }[]> {
  return new Promise((resolve) => {
    let settledCount = 0;
    const results = new Array(promises.length);

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          settledCount += 1;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

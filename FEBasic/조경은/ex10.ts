class Collection<T> {
  private readonly arr = Array<T>();

  constructor(...args: T[]) {
    this.arr.push(...args);
  }

  get _arr() {
    return this.arr;
  }

  push(...args: T[]) {
    this.arr.push(...args);
    return this.arr;
  }

  get peek(): T | undefined {
    return this.isQueue() ? this.arr[0] : this.arr.at(-1);
  }

  get poll(): T | undefined {
    return this.isQueue() ? this.arr.shift() : this.arr.pop();
  }

  remove() {
    return this.poll;
  }

  get length() {
    return this.arr.length;
  }

  get isEmpty() {
    return !this.arr.length;
  }

  clear() {
    this.arr.length = 0;
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  // [1, 2, 3]
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.toArray()[i];
    }
  }

  toArray() {
    return this.isQueue() ? this.arr.toReversed() : this.arr;
  }

  print() {
    console.log(`<${this.constructor.name}: [${this.toArray()}]>`);
  }

  private isQueue() {
    return this instanceof Queue;
  }
}

class Stack<T> extends Collection<T> {}
class Queue<T> extends Collection<T> {}

// ArrayList 클래스를 작성하세요.
class ArrayList<T> extends Collection<T> {
  private elements: T[];

  constructor(initialElements: T[] = []) {
    super();
    this.elements = initialElements;
  }

  add(element: T, index?: number): void {
    if (index !== undefined) {
      this.elements.splice(index, 0, element);
    } else {
      this.elements.push(element);
    }
  }

  // remove(value: T): void {
  //   const index = this.elements.indexOf(value);
  //   if (index !== -1) {
  //     this.elements.splice(index, 1);
  //   }
  // }
  //
  removeByValue(value: T): void {
    const index = this.elements.indexOf(value);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }

  get(index: number): T | undefined {
    return this.elements[index];
  }

  set(index: number, value: T): void {
    if (index >= 0 && index < this.elements.length) {
      this.elements[index] = value;
    }
  }

  indexOf(value: T): number {
    return this.elements.indexOf(value);
  }

  contains(value: T): boolean {
    return this.elements.includes(value);
  }

  get size(): number {
    return this.elements.length;
  }

  get isEmpty(): boolean {
    return this.elements.length === 0;
  }

  get peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }

  toArray(): T[] {
    return [...this.elements];
  }

  clear(): void {
    this.elements.length = 0;
  }

  // toString 메서드에서 중첩된 객체 구조를 반환
  toString(): any {
    return this.buildNestedObject(this.elements);
  }

  // 배열을 중첩된 객체 구조로 변환하는 헬퍼 함수(마지막 rest 값을 제외)
  private buildNestedObject(arr: T[]): any {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return { value: arr[0] }; // 마지막 요소는 rest를 포함하지 않음
    return {
      value: arr[0],
      rest: this.buildNestedObject(arr.slice(1)),
    };
  }

  // iterator() {
  //   let index = 0;
  //   const elements = this.elements;

  //   return {
  //     next(): { value: T | undefined; done: boolean } {
  //       if (index < elements.length) {
  //         return { value: elements[index++], done: false };
  //       } else {
  //         return { value: undefined, done: true };
  //       }
  //     },
  //   };
  // }
  *[Symbol.iterator](): Generator<T, void, unknown> {
    for (let i = 0; i < this.elements.length; i++) {
      yield this.elements[i]; // 각 요소를 차례대로 반환
    }
  }
}

export { Stack, Queue, ArrayList };

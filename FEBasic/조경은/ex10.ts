class Collection<T> {
  protected arr: T[] = [];

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

  remove(value: T): void {
    const index = this.arr.indexOf(value);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
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

  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i -= 1) {
      yield this.arr[i];
    }
  }

  toArray() {
    return this.isQueue() ? this.arr.slice().reverse() : this.arr.slice();
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

class ArrayList<T> extends Collection<T> {
  constructor(initialElements: T[] = []) {
    super();
    this.arr = initialElements;
  }

  add(value: T, index?: number): void {
    if (index !== undefined) {
      this.arr.splice(index, 0, value);
    } else {
      this.arr.push(value);
    }
  }

  remove(value: T): void {
    super.remove(value);
  }

  get(index: number): T | undefined {
    return this.arr[index];
  }

  set(index: number, value: T): void {
    if (index >= 0 && index < this.arr.length) {
      this.arr[index] = value;
    }
  }

  indexOf(value: T): number {
    return this.arr.indexOf(value);
  }

  contains(value: T): boolean {
    return this.arr.includes(value);
  }

  get size(): number {
    return this.arr.length;
  }

  get isEmpty(): boolean {
    return this.arr.length === 0;
  }

  get peek(): T | undefined {
    return this.arr[this.arr.length - 1];
  }

  toArray(): T[] {
    return [...this.arr];
  }

  clear(): void {
    super.clear();
  }

  toString(): any {
    return this.buildNestedObject(this.arr);
  }

  private buildNestedObject(arr: T[]): any {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return { value: arr[0] };
    return {
      value: arr[0],
      rest: this.buildNestedObject(arr.slice(1)),
    };
  }

  *[Symbol.iterator](): Generator<T, void, unknown> {
    for (let i = 0; i < this.arr.length; i++) {
      yield this.arr[i];
    }
  }
}

export { Stack, Queue, ArrayList };

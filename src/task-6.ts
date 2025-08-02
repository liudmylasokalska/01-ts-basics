function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const n = getFirstElement<number>([1, 2, 3]);           // n: number
const s = getFirstElement<string>(["a", "b", "c"]);     // s: string
const b = getFirstElement<boolean>([true, false, true]); // b: boolean

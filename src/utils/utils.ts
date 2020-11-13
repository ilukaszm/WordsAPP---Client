export function getRandom(arr: any[], n: number) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export const uniqueId = () => `_${Math.random().toString(36).substr(2, 9)}`;

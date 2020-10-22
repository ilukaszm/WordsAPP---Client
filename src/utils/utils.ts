/* eslint-disable vars-on-top */
/* eslint-disable one-var */
/* eslint-disable no-var */
export function getRandom(arr: any[], n: number) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// eslint-disable-next-line prefer-template
export const uniqueId = () => '_' + Math.random().toString(36).substr(2, 9);

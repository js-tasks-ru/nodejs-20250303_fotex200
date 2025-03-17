export default function sum(a, b) {
  for (let arg of arguments) {
    if (typeof arg !== 'number') {
      throw new TypeError('All arguments must be numbers');
    }
  }

  return a + b;
}


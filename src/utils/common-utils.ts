const createGrowingIntegerArray = (n: number) => {
  return Array.from(Array(n), (x, index) => index + 1);
};

export {
    createGrowingIntegerArray
}
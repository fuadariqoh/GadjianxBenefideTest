const faktorisasi = (angka) => {
  if (angka < 0) return -1;
  else if (angka == 0) return 1;
  else {
    return angka * faktorisasi(angka - 1);
  }
};

const combination = (n, r) => {
  const atas = faktorisasi(n);
  const bawah = faktorisasi(n - r) * faktorisasi(r);

  const result = atas / bawah;

  return result;
};

const permutation = (n, r) => {
  const atas = faktorisasi(n);
  const bawah = faktorisasi(n - r);

  const result = atas / bawah;

  return result;
};

module.exports = combinationAndPermutation = (n, r) => {
  let resultCombination = combination(n, r);
  let resultPermutation = permutation(n, r);

  return {
    resultCombination: resultCombination,
    resultPermutation: resultPermutation,
  };
};

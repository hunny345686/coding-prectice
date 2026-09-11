function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 4));
console.log(sum(3, 6));

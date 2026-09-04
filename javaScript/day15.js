const str = "aabbbcdde";

function firstNonRepeatingChar(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (result == str[i]) {
      result = "";
    } else {
      result += str[i];
    }
  }
}

firstNonRepeatingChar(str);

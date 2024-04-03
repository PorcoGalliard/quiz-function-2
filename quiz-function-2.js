function calculateLetter(letter) {
  return `Jumlah huruf ${letter} adalah ${letter.length}`;
}

function calculateLetterTanpaSpasi(letter) {
  let count = 0
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] !== " ") {
      count++
    }
  }
  return `Jumlah huruf ${letter} tanpa spasi adalah ${count}`;
}

function calculateWords(words) {
  return `Jumlah kata dalam kalimat ${words} adalah ${words.split(" ").length}`;
}

function calculator(operand1, operand2, operator) {
  switch (operator) {
    case "+":
      return `penjumlahan ${operand1} dan ${operand2} => ${
        operand1 + operand2
      }`;
    case "-":
      return `pengurangan ${operand1} dan ${operand2} => ${
        operand1 - operand2
      }`;
    case "*":
      return `perkalian ${operand1} dan ${operand2} => ${operand1 * operand2}`;
    case "/":
      return `pembagian ${operand1} dan ${operand2} => ${operand1 / operand2}`;
  }
}

function isPalindromeWord(word) {
  return `Palindrome state dari ${word} => ${
    word === word.split("").reverse().join("")
  }`;
}

function shopping(discount, expenses) {
  return `Biaya belanja adalah => $${expenses - (expenses * discount) / 100}`;
}

console.log(calculateLetter("Binar"));
console.log(calculateLetter("Academy"));
console.log();

console.log(calculateLetterTanpaSpasi("Binar Academy"));
console.log(calculateLetterTanpaSpasi("King Madrid"));
console.log();

console.log(calculateWords("Liverpool 7 - 0 Manchester United"));
console.log(calculateWords("Hello World"));
console.log();

console.log(calculator(5, 3, "+"));
console.log(calculator(5, 3, "-"));
console.log(calculator(5, 3, "*"));
console.log(calculator(6, 3, "/"));

console.log();

console.log(isPalindromeWord("Hello"));
console.log(isPalindromeWord("kasur rusak"));

console.log();

console.log(shopping(10, 1000));
console.log(shopping(50, 1000));
console.log(shopping(70, 1000));

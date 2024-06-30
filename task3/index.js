const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

const index1 = Math.floor(Math.random() * alphabet.length);

const index2 = Math.floor(Math.random() * alphabet.length);

const index3 = Math.floor(Math.random() * alphabet.length);

const index4 = Math.floor(Math.random() * alphabet.length);

const letter1 = alphabet[index1];

const letter2 = alphabet[index2];

const letter3 = alphabet[index3];

const letter4 = alphabet[index4];

const word = letter1 + letter2 + letter3 + letter4;

console.log(word);

let str = "Don’t judge a book by its cover";
let words = str.split(' ');
let longestWord = ""; 
for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}
console.log("The longest word is: " + longestWord);

let str = "Count the number of words in a string";
let wordCount = 1;
for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        wordCount++;
    }
}
console.log("Number of words:", wordCount);

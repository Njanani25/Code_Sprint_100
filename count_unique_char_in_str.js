let str = "hello world";
let uniqueChars = {};
for (let char of str) {
    if (char !== ' ') {
        uniqueChars[char] = true;
    }
}
let uniqueCount = Object.keys(uniqueChars).length;
console.log(uniqueCount);

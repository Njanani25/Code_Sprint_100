let arr = ["apple", "racecar", "banana", "level", "world"];
let firstPalindrome = "";
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split("").reverse().join("")) {
        firstPalindrome = arr[i];
        break;
    }
}
console.log("The first palindrome is: " + firstPalindrome);

let arr = ["madam", "racecar", "hello", "level", "world"];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    let reversedStr = str.split('').reverse().join('');    
    if (str === reversedStr) {
        count++;
    }
}
console.log(count); 

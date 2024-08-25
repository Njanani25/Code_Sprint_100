let arr = [10, 20, 30, 40, 50];
let givenValue = 25;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > givenValue) {
        sum += arr[i];
    }
}
console.log("The sum of elements greater than " + givenValue + " is: " + sum);

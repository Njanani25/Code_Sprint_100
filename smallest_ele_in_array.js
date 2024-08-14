let arr = [34, 15, 88, 2, 10];
let smallest = arr[0]; 
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
console.log("The smallest element is:", smallest);

let arr = [2, 5, 9, 7, 5, 1, 8];
let element = 5; 
let index = -1;
for (let i = 0; i < arr.length; i++) 
{
    if (arr[i] === element) {
        index = i;
        break;
    }
}
console.log("Index of the first occurrence:", index);

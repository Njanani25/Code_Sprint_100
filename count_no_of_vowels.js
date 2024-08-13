const str = "Hello World";
let vowelCount = 0;
const lowerStr = str.toLowerCase();
for (let i = 0; i < lowerStr.length; i++) {
    if (lowerStr[i] === 'a' || lowerStr[i] === 'e' || lowerStr[i] === 'i' || lowerStr[i] === 'o' || lowerStr[i] === 'u') 
    {
        vowelCount++;
    }
}
console.log(vowelCount); 

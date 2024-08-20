let str = "This is a sample string";
let spaceCount = 0;
for (let i = 0; i < str.length; i++)
{
    if (str[i] === ' ') {
        spaceCount++;
    }
}
console.log("Number of spaces:", spaceCount);

// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var newArr = a.map((item)=>{
    return item*2
})
console.log(newArr)

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
console.log(colors.join(' '))
// case 2 output: 'Red+Green+White+Black'
console.log(colors.join('+'))
// case 3 output: 'Red,Green,White,Black'
console.log(colors.join())

// 数值排序 Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNum(a,b){
    return a-b;
}
console.log(a.sort(sortNum).reverse())

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var obj = {}
var maxNum = 0
var maxItem = null
for (let i = 0; i < a.length; i++) {
    let item = a[i]
    obj[item] === undefined ? obj[item] = 1: obj[item] += 1
    if(obj[item] > maxNum) {
        maxNum = obj[item];
        maxItem = item
    }
}
console.log(maxItem)

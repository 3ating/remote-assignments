//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers. Reminder: you can't use built-in Math.max() or sort() to complete this assignment.

function max(numbers){
  // your code here
  let len = numbers.length;
  let maxNum = numbers[0];
  
  for (var i=0; i<len; i++){
    if (numbers[i] > maxNum){
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

console.log(max([1, 2, 13, 5])); // expected output: 5 
console.log(max([5, 2, 7, 1, 49])); // expected output: 7

//Assignment 2: Function and Object
//Complete the function below to calculate the result of the passing object.

function calculate(args){
  // your code here
  let ans = 0;
  if (args.op == '+'){
    ans = args.n1 + args.n2;
  } else if (args.op == '-'){
    ans = args.n1 - args.n2;
  } else {
    return 'Not supported';
  }
  return ans;
}

console.log(calculate({ n1: 2, n2: 3, op: '+' })); 
// // expected output: 5 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); 
// // expected output: 3 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); 
// // expected output: 'Not supported'

//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the total price of all products after applying a discount.

function calculate(data) {
  // your code here
  let total = 0;
  let discount = 1 - data.discount;
  let numbers = data.products.length;
    
  for (var i=0; i<numbers; i++){
    total += data.products[i].price;
  }
  let finalprice = total*discount;
  return finalprice;
}
const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: 'Product 1',
      price: 100
    },
    {
      name: 'Product 2',
      price: 700
    },
    {
      name: 'Product 3',
      price: 250
    }
  ]
});
  
console.log(discountedPrice); // show the total price of all products after applying a discount

// Assignment 5: Algorithm (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
  // your code here
  let sumMap = new Map();
  let len = nums.length
  for (var i=0; i<len; i++){
    sumMap.set(nums[i],i);
  }
  for (var j=0; j<len; j++){
    let goal = target - nums[j];
    if (sumMap.has(goal)){
      return [j, sumMap.get(goal)]
    }
  }
}

/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1] Because:
nums[0] + nums[1] is 9
*/
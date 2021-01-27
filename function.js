nums = [5, 12, 13, 89, 45, 8];  

function evenifyAll(nums){
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result= evenify(num);
        even_array.push(result);
    }
    return even_array;
}

function evenify(num){
    var result;
    if(num%2!=0){
        result =  num*2;
    } 
    else {
        result = num;
    }
    return result;
}

evenifyAll(nums);



friends_age = [13,17,19,18,20];

var result1 = evenifyAll(friends_age);
var result = evenify(5);
var square = result*result;
console.log('Square :',square);
console.log(result1);
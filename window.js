//we can use window to make the variable global not recommended
var name = "Rifat"
function add(num1, num2) {
    // window.result = num1+num2;
    var result = num1+num2;
    console.log("name inside" ,name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log('name outside',name);
var sum = add(13,21);
console.log(sum);
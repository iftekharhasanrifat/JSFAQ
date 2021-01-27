function explain_callback(name ,age,task){
    console.log('hello ',name);
    console.log('your age ',age);
    task();
}
explain_callback('Rifat',23,washhand);
explain_callback('Risat',16,takeShower);
explain_callback('hasan',24,washhand);

function washhand(){
    console.log('wash hand with soap');
}
function takeShower(){
    console.log('Take shower');
}

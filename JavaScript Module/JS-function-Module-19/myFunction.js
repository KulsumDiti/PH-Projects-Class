           
           //basic Funtion........//

function sum(){
    const num1 = 100;
    const num2 = 500;
    const result = num1 + num2;
    console.log(result);
}
sum();


              //...Parameter And Argument...//

function Calculation(Reyal, Diti){
            const result = Reyal + Diti;
            console.log(result);
}
Calculation(20, 80);

//....Function return and set return value to a variable...//


function Calculator(num){
    const result = num*20;
    return result;
}
console.log(Calculator(5));

        //.......OR

function calculation(num1, num2){
    const add = num1+num2;
    const sub = num1-num2;
    const mul = add * sub;
    const div = mul/2;
    const result =div;
return result;
}

console.log(calculation(12, 3));

         //....Conditional function ......//

function even(num){
    if(num%2 ===0){
        return 'Even Number';
    }
    
    else{
        return 'Odd Number'
        }
}
const result = even(50);
console.log(result);

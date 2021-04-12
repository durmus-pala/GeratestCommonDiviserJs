function gcd(num1, num2){
    let result = 0;
    if(num1 < num2){
        for(let i = 0; i <= num1; i++){
            if((num1 % i == 0) && (num2 % i == 0)){
                result = i;
            }
        }
    }else{
        for(let i = 0; i <= num2; i ++){
            if((num1 % i == 0) && (num2 % i == 0)){
                result = i;
            }
        }
    }
    return result;
}

console.log(gcd(6, 9)); // output 3
console.log(gcd(120, 90)); // output 30
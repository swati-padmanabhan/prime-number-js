function checkPrime() {
    //get the number from user and parse it as an integer
    var num = parseInt(document.getElementById("numberInput").value);

    //initialize a flag to indicate if the number is prime (0) or not (1)
    var flag = 0;

    //check if the number is less than or equal to 1
    if (num <= 1) {
        //set flag to 1 indicating the number is not prime
        flag = 1;
    }

    // calculate the square root of the number and floor it to an integer
    var sqrtNum = Math.floor(Math.sqrt(num));

    for (var i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            flag = 1;
            break; 
        }
    }

    // get the result paragraph element by its id
    var p = document.getElementById("result");
    p.innerHTML = (flag === 0) 
        ? `${num} is a Prime Number.`  // if flag is 0, the number is prime
        : `${num} is not a Prime Number.`; // if flag is 1, the number is not prime
}
function checkPrime() {
    var num = parseInt(document.getElementById("numberInput").value);
    var flag = 0;

    if (num <= 1) {
        flag = 1;
    }

    var sqrtNum = Math.floor(Math.sqrt(num));

    for (var i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            flag = 1;
            break; 
        }
    }

    var p = document.getElementById("result");
    p.innerHTML = (flag === 0) 
        ? `${num} is a Prime Number.` 
        : `${num} is not a Prime Number.`;
}
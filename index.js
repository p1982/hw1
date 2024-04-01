String.prototype.plus = function (str) {
    let res = '';
    let temp = 0;
    let prefix = '';
    let base = this.toString();
    let differenceBetweenLengths = base.length - str.length;
    let absDifferenceBetween = Math.abs(differenceBetweenLengths);
    for(let i = 0; i < absDifferenceBetween; i++){
        prefix += '0';
    }

    if(differenceBetweenLengths < 0) {
        base = prefix + base;
    }
    if(differenceBetweenLengths > 0){
        str = prefix + str;
    }

    for (let i = base.length - 1; i >= 0; i--) {
        let sum = Number(base[i]) + Number(str[i]) + temp;
        if (sum >= 10) {
            temp = 1;
            sum -= 10;
        } else {
            temp = 0;
        }
        res = sum.toString() + res;
    }

    if (temp > 0) {
        res = temp.toString() + res;
    }

    return res;
};

console.log('127'.plus('4566')); // Output: 4693
console.log('1275145'.plus('4566')); // Output: 1279711
console.log('984'.plus('123')); // Output: 1279711



String.prototype.minus = function (str) {

    let base = this.toString()
    if (this.length < str.length || (this.length === str.length && this.localeCompare(str) < 0)) {
        return 'Subtraction result would be negative';
    }

    if (base === str) {
        return "0"
    }
    let res = '';
    let borrow = 0;
    let prefix = '';
    let differenceBetweenLenths = base.length - str.length;
    let absDifferenceBetween = Math.abs(differenceBetweenLenths);
    for (let i = 0; i < absDifferenceBetween; i++) {
        prefix += 0
    }

    if (differenceBetweenLenths < 0) {
        base = prefix + base
    }
    if (differenceBetweenLenths > 0) {
        str = prefix + str
    }

    for (let i = base.length - 1; i >= 0; i--) {
        let a = ''
        let temp = 0
        if (base[i] < str[i]) {
            a = `1${base[i]}`
            temp = a - str[i] - borrow
            borrow = 1
        } else {
            temp = base[i] - str[i] - borrow
            borrow = 0
        }

        res = temp + res
    }
    res = parseInt(res)

    return res;
};

console.log('456'.minus('123')); // Output: 333
console.log('123'.minus('456')); // Output: error
console.log('123'.minus('123')); // Output: 0
console.log('456417'.minus('123')); // Output: 333
console.log('17'.minus('8')); // Output: 333
console.log('177'.minus('88')); // Output: 333
console.log('13'.minus('8')); // Output: 333



String.prototype.divide = function (str) {
    if (str === 0) {
        return 'Division by zero'
    }

    let dividend = Number(this);
    let divisor = Number(str);
    let quotient = 0;

    while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }

    return quotient.toString();
};

console.log('1000'.divide('10')); // Output: 100
console.log('24'.divide('8')); // Output: 100
console.log('1500'.divide('35')); // Output: 100
console.log('1200'.divide('4')); // Output: 100
console.log('18'.divide('5')); // Output: 100



String.prototype.multiply = function (str) {
    let res = '0';
    let base = this.toString();
    for (let i = '0'; +i < +str; i=i.plus('1')) {
        res = res.plus(base);
    }

    return res;
};


console.log('123'.multiply('456')); // Output: 56088
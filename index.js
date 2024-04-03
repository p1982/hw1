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

// console.log('127'.plus('4566')); // Output: 4693
// console.log('1275145'.plus('4566')); // Output: 1279711
// console.log('984'.plus('123')); // Output: 1279711



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
    let differenceBetweenLengths = base.length - str.length;
    let absDifferenceBetween = Math.abs(differenceBetweenLengths);
    
    for (let i = 0; i < absDifferenceBetween; i++) {
        prefix += '0';
    }

    if (differenceBetweenLengths < 0) {
        base = prefix + base;
    }
    if (differenceBetweenLengths > 0) {
        str = prefix + str;
    }

    for (let i = base.length - 1; i >= 0; i--) {
        let digitBase = parseInt(base[i]);
        let digitStr = parseInt(str[i]);
        let temp = 0;

        if (digitBase < digitStr + borrow) {
            temp = 10 + digitBase - digitStr - borrow;
            borrow = 1;
        } else {
            temp = digitBase - digitStr - borrow;
            borrow = 0;
        }

        res = temp + res;
    }

    return res.replace(/^0+/, ''); 
};


console.log('456'.minus('123')); // Output: 333
console.log('123'.minus('456')); // Output: error
console.log('123'.minus('123')); // Output: 0
console.log('456417'.minus('123')); // Output: 456294
console.log('17'.minus('8')); // Output: 9
console.log('177'.minus('88')); // Output: 89
console.log('13'.minus('8')); // Output: 5
console.log('4444444444444444444444444444444440'.minus('2')); // Output: 4444444444444444444444444444444438
console.log('12345'.minus('0')); // Output: 12345
console.log('100000000000000000000000'.minus('100000000000000000000000')); // Output: 0
console.log('100000000000000000000000'.minus('99999999999999999999999')); // Output: 1
console.log('1000'.minus('1')); // Output: 999

String.prototype.divide = function (str) {
    if (str === "0") {
        return 'Division by zero';
    }

    let dividend = this.toString(); // Конвертація до рядка
    let quotient = '';
    let currentDividend = '';
    let i = 0;

    while (i < dividend.length) {
        currentDividend += dividend[i];
        i++;

        while (currentDividend[0] === '0' && currentDividend.length > 1) {
            currentDividend = currentDividend.slice(1);
        }

        let currentQuotient = '0';

        while (+currentDividend >= +str) {
            currentDividend = currentDividend.minus(str);
       
            currentQuotient = (currentQuotient * 1 + 1).toString();
        }
        quotient += currentQuotient;
    }

    quotient = quotient.replace(/^0+/, '');

    return quotient || '0';
};

// console.log('1000'.divide('10')); // Output: 100
// console.log('24'.divide('8')); // Output: 100
// console.log('1500'.divide('35')); // Output: 100
// console.log('1200'.divide('4')); // Output: 100
// console.log('18'.divide('5')); // Output: 100
// console.log('18'.divide('0')); // Output: 100
// console.log('1000000000000000000000'.divide('123'))


String.prototype.multiply = function(str) {
    let base = this.toString();
    let multiplier = str.toString();
    let len1 = base.length;
    let len2 = multiplier.length;
    let pos = new Array(len1 + len2).fill(0);
    
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let mul = (base[i].charCodeAt(0) - '0'.charCodeAt(0)) * (multiplier[j].charCodeAt(0) - '0'.charCodeAt(0));
            let sum = mul + pos[i + j + 1];
            pos[i + j] += Math.floor(sum / 10);
            pos[i + j + 1] = sum % 10;
        }
    }
    let res = (pos.join('')).replace(/^0+(?!$)/, '');
    return res === '' ? '0' : res;
};

// console.log('123'.multiply('456')); // Output: 56088
// console.log('100000000000000000000000'.multiply('99999999999999999999999'));

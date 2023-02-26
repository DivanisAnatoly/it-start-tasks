function sum(a, b) {
    a = a.toString().split('');
    b = b.toString().split('');

    if (b.length > a.length) {
        [a, b] = [b, a];
    }

    let dif = a.length - b.length;

    for (let i = a.length - 1; i >= 0; i--) {
        let c = (+a[i]) + (+b[i - dif] || 0);

        if (i < dif && c < 10) {
            break;
        }

        if (c > 9 && i > 0) {
            a[i - 1] = +a[i - 1] + 1;
            a[i] = c % 10;
            continue;
        }
        a[i] = c;
    }

    return a.join('');
}


function subtract(a, b) {
    let isNegative = false;

    a = a.toString().split('');
    b = b.toString().split('');

    if (b.length > a.length || (b.length == a.length && b > a)) {
        [a, b] = [b, a];
        isNegative = true;
    }

    a = a.reverse();
    b = b.reverse();

    for (let i = 0; i < a.length; i++) {
        let c = (+a[i]) - (+b[i] || 0);

        if (c < 0) {
            if (i + 1 < a.length) {
                a[i] = c + 10;
                a[i + 1] = (+a[i + 1]) - 1;
            } else {
                a[i] = (+a[i + 1]) + (+a[i]);
                a.pop();
                a[i] = (+a[i]) - (+b[i] || 0);
            }
            continue;
        }
        a[i] = c;
    }

    while (true) {
        if (a[a.length - 1] == 0 && a.length != 1) {
            a.pop();
            continue;
        }
        break;
    }

    if (isNegative) a.push('-');

    a = a.reverse();

    return a.join('');
}



function multiply(a, b) {
    if (b.length > a.length || (b.length == a.length && b > a)) {
        [a, b] = [b, a];
    }

    let result=0;

    for(let i=0; i<a.length;i++) {
        let rank = a.length-i-1;
        let temp = b +"0".repeat(rank);
        for (let j = 0; j < +a[i]; j++) {
            result = sum(result, temp);
        }
    }

    return result;
}


function divide(a, b) {
    let c = '0';
    a = subtract(a, b);
    while (a[0] != '0' && a[0] != '-') {
        a = subtract(a, b);
        c = sum(c,1);
    }
    return c;
}



module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
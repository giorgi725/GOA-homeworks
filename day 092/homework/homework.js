// https://www.codewars.com/kata/55afe435d2ce100356000032/train/javascript

// Javascript from the Inside #2: Filter



// https://www.codewars.com/kata/5946a0a64a2c5b596500019a/train/javascript

// Split and then add both sides of an array together.

function splitAndAdd(arr, n) {
    let result = arr.slice();

    for (let round = 0; round < n; round++) {
        if (result.length <= 1) break;

        const mid = Math.floor(result.length / 2);

        const left = result.slice(0, mid);
        const right = result.slice(mid);

        const newArr = [];

        let i = left.length - 1;
        let j = right.length - 1;

        while (j >= 0) {
        if (i >= 0) {
            newArr.unshift(left[i] + right[j]);
            i--;
        } else {
            newArr.unshift(right[j]);
        }
        j--;
        }

        result = newArr;
    }
    return result;
}

// https://www.codewars.com/kata/565c0fa6e3a7d39dee000125/train/javascript

// Braking well

function dist(v, mu) {
    const g = 9.81;

    const v_ms = v / 3.6;

    const reaction = v_ms * 1; // t = 1
    const braking = (v_ms * v_ms) / (2 * mu * g);

    return reaction + braking;
    }

    function speed(d, mu) {
    const g = 9.81;

    const a = 1 / (2 * mu * g);
    const b = 1;
    const c = -d;

    const discriminant = b * b - 4 * a * c;
    const v_ms = (-b + Math.sqrt(discriminant)) / (2 * a);

    return v_ms * 3.6;
}

// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/train/javascript

// Longest alphabetical substring

function longest(s) {
    let longest = s[0];  
    let current = s[0];

    for (let i = 1; i < s.length; i++) {
        if (s[i] >= s[i - 1]) {
        current += s[i];
        } else {
        current = s[i];
        }

        if (current.length > longest.length) {
        longest = current;
        }
    }

    return longest;
}

// https://www.codewars.com/kata/58925dcb71f43f30cd00005f/train/javascript

// The latest clock



// https://www.codewars.com/kata/53574972e727385ad10002ca/train/python

// Lambdas as a mechanism for Open/Closed

// spoken    = lambda greeting: greeting.capitalize() + "."
// shouted   = lambda greeting: greeting.upper() + "!"
// whispered = lambda greeting: greeting.lower() + "."

// greet = lambda style, msg: style(msg)

// https://www.codewars.com/kata/54b679eaac3d54e6ca0008c9/train/javascript

// Function iteration


var createIterator = function (func, n) {
    return function(input) {
        let result = input;

        for (let i = 0; i < n; i++) {
        result = func(result);
        }

        return result;
    };
};

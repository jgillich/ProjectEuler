var _ = require('underscore');

var sum = 0,
    multiples = [];

[3, 5].forEach(function (number) {
    for(var multiple = number; multiple < 1000; multiple += number) {
        multiples.push(multiple);
    }
});

_.uniq(multiples).forEach(function (multiple) {
   sum +=  multiple;
});

console.log(sum);

var sum = 0;

for(var p = 1, i = 1; i < 4000000; i = i + p, p = i - p) {
    if(i % 2 == 0) {
        sum += i;
    }
}

console.log(sum);

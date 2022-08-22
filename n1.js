let mult = 0;

for (let i = 10; i > 1; i -= 1) {
    if (mult === 0) {
        mult = i * (i - 1);
    } else {
        mult = mult * (i - 1);
    }
}

console.log(mult);

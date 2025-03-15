function sumMix(x) {
    let sum = 0;
    x.forEach(item => {
        console.log(`Item: ${item}, Type: ${typeof item}, Converted: ${Number(item)}`);
        sum += Number(item);
    });
    console.log(`Final Sum: ${sum}, Type: ${typeof sum}`);
    return sum;
}
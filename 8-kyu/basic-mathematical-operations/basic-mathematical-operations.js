function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value2 !== 0 ? value1 / value2 : 'Error: Division by zero';
        default:
            return 'Error: Invalid operation';
    }
}
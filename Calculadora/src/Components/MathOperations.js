function mathOperations(operation, ...numbers) {
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        switch (operation) {
            case "+": 
                result += numbers[i];
                break
            case "-": 
                result -= numbers[i];
                break
            case "*": 
                result *= numbers[i];
                break
            case "/": 
                result /= numbers[i];
                break
        }
    }

    return result
}

export default mathOperations
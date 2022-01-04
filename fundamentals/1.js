const sum = (a, b) => a + b
const substract = (a, b) => a - b

let result = sum(3, 7)
let expected = 10

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}

result = substract(7, 3)
expected = 4

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`)
}
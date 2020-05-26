function sum (x,y){
    return x + y
}

const add = sum(24, 4)
console.log(add)

function times(x, y){
    let t = 0
    for (let index= 0; index < y; index +=1){
        t = sum (x,t)
       
    }
    return t
}

const multiply = times(6, 4)
console.log(multiply)

function nth (x, y) {
    let n = 0
    for (let index = 0; index< y; index +=1){
        n = times (x, n)
    }
    return n    
}
const power = nth (3, 9)
console.log(power)

function factorial(x, y){
    let f = 0
    let currentNumber = 1
    largestNumber = 5

    for (let index = 5; index > x; index +=-1){
        f = times (x, y)
        if (currentNumber>largestNumber){

        }
          
          

    }
    return f
}
const fun = factorial (5, 1)
console.log(fun)
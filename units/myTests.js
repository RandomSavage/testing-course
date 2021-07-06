
const findSumOfNumbers = (numbers) => {
  let sum = 0
  for(let number of numbers) {
    sum += parseInt(number)
  }
return sum
}

let numbers = [1,3,5,7]


// console.log(sum)


{
  let result = findSumOfNumbers([1,2,5,7])
  let errorMsg = "Bish please, you wrong"
  console.assert(result === findSumOfNumbers(numbers), {
    expected: 16,
    result:result,
     errorMsg: errorMsg
  })
}



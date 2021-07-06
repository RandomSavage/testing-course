
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

//examples translating machine

let encodeVowelWord = (word) => {
  let vowels = ["a", "e", "i", "o", "u"]
  let translatedWord;
  for(let i = 0; i < vowels.length; i += 1) {
    if(vowels[i] === word[0]) {
      translatedWord = `${word}-yay`
    }
  }
  console.log(`Translation: ${translatedWord}`)
}
encodeVowelWord('asshat')

let encodeConsonantWord = (word) => {
  return ""
}

let encodeWord = (word) => {
  return ""
}

let encodeText = (word) => {
  return ""
}


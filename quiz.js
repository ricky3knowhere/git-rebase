const num = [3,12,53,7,2,4,7,99,102,64,3,3,21]
const num2 = [1,2,3,4,5,6,7,8,9,10]

const arr = []
const even = []
const odd = []
let averages = 0

const get_number = () => {
  num.forEach((i) => {
    if ((i % 2) == 0) {
      even.push(i)
    }else {
      odd.push(i)    
    }
  })
}

const get_number2 = (num) => {
  const mid = num.length / 2
  for (let x = mid; x < num.length; x++) {
    arr.push(num[x])
  }
}

// const get_average = () => {
//   arr.forEach((i) => {
//       averages += i
//   })
//   averages /= arr.length
// }

get_number()
get_number2(num2)
// get_average()

console.log('Even    : '+even)
console.log('Odd     : '+odd)
console.log('Array   : '+arr)
// console.log('Average : '+averages)

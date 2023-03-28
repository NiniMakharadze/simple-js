//*switch case
 let a = -1
 let b = -3
 let c = -10
 let x
 let x1
 let x2
 let i = -1
 let im
 let re
 let d = b * b - 4 * a * c;

switch (true) {
    case d === 0:
         console.log(-b / (2*a))
      break
    case d > 0:
         x1 =((-b)  -  Math.sqrt(d)) / (2*a)
         x2 = ((-b)  +  Math.sqrt(d) )/ (2*a)
         console.log(x1 + " " + x2)
      break
    default:
       re =(-b/(2*a)).toFixed(2)
       im=(Math.sqrt(-d)/(2*a)).toFixed(2)
       console.log(" re+im*i and re-im*i")
      break
}

//* array functions
//map
//forEach

//1
let arr=[2, 3 , 5, 8, 34, 645, 45]
let newArr= arr.map(
  function (element){
     return element * 2
  }
)
 arr.forEach(
    function (element){
        console.log(element * 2)
    }
)
console.log (arr)
console.log(newArr)

//2
let names = [ "Alice", "Bob", "Charlie", "Dave"]
 function printNames(names){
    names.forEach(
      function (elements) {
        console.log(elements)
      } 
    )
  }
printNames(names)

//3
let arrOfNumbers =[2, 5, 8, 10, 15]
let sum = 0;
arrOfNumbers.forEach(
     function (element){
        sum += element
     }
)
console.log(sum) 

//4  
let arrOfElements=[2, 5, 8, 10, 15]
let mult = 1;
arrOfElements.forEach(
     function (number){
        mult *= number
     }
)
console.log(mult)

//filter

//1
let arr1 = [4, 5, 4, 8, 4, 2, 9, 0 ]
 let result = arr.filter(
    function (element){
      return  element % 2 === 0
    }
  )
console.log(result)

//2
let arrOfStrings = [ "flower", "moon", "cat", "fox", "wolf", "sun", "foundation" ]
let result2 = arrOfStrings.filter(
     (word) => {
        return word.charAt(0) === "f"
    }
)
console.log(result2)

//some and every

//1
let arr2 = [4, 5, 4, 8, 4, 2, 9, 0 ]
console.log(arr2.some(
  (element) => {
    return element % 2 === 1
 }
))

//filter and length

let arrOfList =[ "apple", "banana", "pear", "orange", "grape"]
let result3 = arrOfList.filter (
      (word2) => word2.length > 5
) 
console.log(result3)

//map

let arrNumbers= [2, 3 , 5, 8]
let number = arrNumbers.map(
  (number) => {
     return number * number
  }
)
console.log(number)

//every

//1
let arrList =[2, 2 , 2 , 2]
  let list = arrList.every(
    (number) => {
      return number === arrList[0]
    }
  )
  console.log(list)

//2

let arrList2 =[2, 3 , 4 , 1]
  let list2 = arrList2.some(
    (number) => {
      return number === arrList[1]
    }
  )
console.log(list2)

  
   
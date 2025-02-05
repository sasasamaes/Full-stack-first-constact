//  1.- Create a function tha returns an array of n unique numbers, from 0 to N - 1, where N is the length of the array.
//  i: 5
//  o: [0, 1, 2, 3, 4]

// YOUR
// CODE
// HERE
const getUniqueNumbersArray = (n: number): number[] => {
  const arr: number[] = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }
  return arr
}

console.log('1 - uniqueNumbersArray =>', getUniqueNumbersArray(5))
//  given a result of the previous method, generate an array of n numbers, then alternate them between positive and negative using a new function.

// i: [0,1,2,3,4]
// o: [-3,-1,0,2,4]

// YOUR
// CODE
// HERE

const sortAlternatingNumbers = (arr: number[]): number[] => {
  const result: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(Math.abs(arr[i]) * -1)
    } else {
      result.push(Math.abs(arr[i]))
    }
  }

  result.sort((a, b) => a - b)

  return result
}
console.log(
  '2 - sortAlternatingNumbers =>',
  sortAlternatingNumbers(getUniqueNumbersArray(5)),
)

// Consider the following code:

const randomValues = [
  'Hello',
  0,
  true,
  { name: 'John Doe' },
  [3, 2],
  () => 'Hello World',
]
//  create a function that infer parameters type, then return it ramdomly using the infered type.
//  from the parameter type

// YOUR
// CODE
// HERE

function shuffleArray<
  T extends
    | string
    | number
    | boolean
    | { name: string }
    | number[]
    | (() => string),
>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const randomValue = shuffleArray(randomValues)
console.log('3 - shuffleArray', randomValue)

// consider the following code:

const z = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const r = Math.ceil(Math.random() * 10) // 1 - 10

//  once you notice the posible error on it, make it visible using type checking. DONT FIX IT, just make it visible using a typescript error.

// YOUR
// CODE
// HERE;

// Define a type for the valid index range of the array z
type ZIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 

// Try to assign r to a variable of type ZIndex
const i: ZIndex = r // Type 'number' is not assignable to type 'ZIndex' // TypeScript error if r is not in the range 0-9

// EXTRA:
//  consider the following code:
const numbers = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10] as const

//  create a function that infer the parameter and return a TYPECHECK of the elements SORTED.
function sortArray<T extends number>(arr: ReadonlyArray<T>): T[] {
  const sortedArray = [...arr].sort((a, b) => a - b)
  return sortedArray
}

const sortedNumbers = sortArray(numbers)
console.log('5 - sortedNumbers', sortedNumbers)

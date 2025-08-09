// var -> redeclare and reassign
// let -> reassign
// const -> redeclare and reassign konotai kora jay na.
//❌ name = 'ismail'
//❌ var name = ""

// //* ✅ let = reassign
// let person
// person = 'ismail'

// ✅ let = redeclare and reassign
// const age = 20
// age = 20 //! Assignment to constant variable.

// ? what is array
//* In JavaScript, an array is a single variable-like structure used to store an ordered collection of multiple values, known as elements. Instead of declaring individual variables for each item in a list, an array allows you to group them under one name.
// const num1 = 10
// const num2 = 20
// const num3 = 30
// const num4 = 40
// const num5 = 50

// const numbers = [10, 20, 30, 40, 50]

// console.log(numbers[2])

// console.log(fruits[2])
// fruits[2] = 'Grape'
// console.log(fruits[2])

// const sent = 'I am from Bangladesh'
// console.log(fruits.length)

// * copy array element
// const fruits = ['Apple', 'Banana', 'orange']
// const newFruits = fruits
// newFruits.push('papaya')

// const newFruits = [...fruits]
// newFruits.push('papaya')
// console.log(newFruits)
// console.log(fruits)

// for (let index = 0; index < fruits.length; index++) {
// 	const element = fruits[index]
// 	console.log(element)
// }

// for...of loop
// copy array values using for loop
// const fruits = ['Apple', 'Banana', 'orange']
// const newArr = []
// for (const el of fruits) {
// 	newArr.push(el)
// }
// newArr.push('gems')
// console.log(fruits, newArr)

// const persons = ['rohim', 'korim', 'jonayed']
// const newArr = []
// for (const el of persons) {
// 	if (el === 'korim') continue
// 	newArr.push('Mr. ' + el)
// }
// console.log(persons, newArr)

// * some important array method
// const fruits = ['Apple', 'Banana', 'orange']

// push

// pop
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// shift -> unshift
// console.log(fruits)
// fruits.unshift('papaya')
// console.log(fruits)
//
// let i = 0
// while (i < students.length) {
// 	// your condition goes here
// 	console.log(students[i])
// 	i++
// }
// * Reverse an array
// let students = ['Korim', 'Rohim', 'Zahid', 'Asif'] // 4-1 = 3
// students.reverse()
// console.log(students)

// using for...of loop
// let reverseArr = []
// for (let i = students.length - 1; i >= 0; i--) {
// 	reverseArr.push(students[i])
// }
// console.log(reverseArr)

//
// * sort an array
// const fruits = ['Banana', 'Apple', 'Orange', 'Grape']
// console.log(fruits)
// fruits.sort()
// console.log(fruits)

// const numbers = [40, 10, 200, 50]
// console.log(numbers)
// numbers.sort()
// console.log(numbers)

// * Array index values
// which method modified array and which are not?
/*
 * push()
 * pop()
 * shift()
 * unshift()
 * sort()
 * reverse()
 */

/*
 * concat()
 * slice()
 * map()
 * filter()
 * forEach()
 * find()
 * includes()
 */
// const sent = 'my name is ismail'

// Array of Objects
// const persons = [
// 	{
// 		name: 'rohim',
// 		age: 20,
// 		isStudent: true,
// 	},
// 	{
// 		name: 'korim',
// 		age: 25,
// 		isStudent: false,
// 	},
// 	{
// 		name: 'Jake',
// 		age: 35,
// 		isStudent: true,
// 	},
// ]

// for (const person of persons) {
// 	console.log(
// 		`name: ${person.name}, Age: ${person.age}, Student Status: ${person.isStudent}`,
// 	)
// }
// const person = {
// 	name: 'Jake', // key : value
// 	age: 35,
// 	isStudent: true,
// }
// // for (const key in person) {
// // 	console.log(key + ' - ' + person[key])
// // }
// // console.log(person['age'])
//* What is function
//*   block of reusable code  designed to perform a particular task. Functions allow for code organization, reusability, and modularity within a program

// Function syntax
function greeting() {
	console.log('Good Evening!')
}
// greeting() // function call

// types of function
/*
 * normal functional
 * Arrow functional () => {}
 * anonymous functional
 *  IIFE: Immediately Invoked Function Expression, is a JavaScript design pattern where a function is defined and executed immediately after its creation.
 */
// * normal function
// function add(val1, val2) {
// 	console.log('result', val1 + val2)
// }
// add(10, 20)
// function add(val1, val2) {
// 	const result = val1 + val2
// 	return result
// }

// const addValue = add(20, 30) * 5
// console.log(addValue)
// const arr = [10, 20, 30, 40, 50]
// function add(values) {
// 	let result = 0
// 	for (const val of values) {
// 		result += val
// 	}
// 	return result
// }

// const findNumber = (arr, num) {
// 	let result
// 	for (const el of arr) {
// 		if (el === num) {
// 			result = 'Found'
// 			break
// 		} else {
// 			result = 'Not Found'
// 		}
// 	}
// 	return result
// }

// const result = findNumber(arr, 30)
// console.log(`Your query number 30 is ${result}`)
// ;(function () {
// 	console.log('Hello Bangladesh')
// })()

//* Different types of parameters
// function greeting(name = 'Guest') {
// 	console.log('Hello,' + name)
// }
// greeting()
// function add(a = 0, b = 0) {
// 	console.log(a + b)
// }
// add(30, 30)

// function sumAll(...numbers) {
// 	let sum = 0
// 	for (const num of numbers) {
// 		sum += num
// 	}
// 	console.log(sum)
// }
// sumAll(10, 20, 30)
// sumAll(10, 20)
// sumAll(10, 20, 30, 50)

// const numbers = [40, 10, 200, 50]
// numbers.sort(function (a, b) {
// 	console.log(a, b)
// 	return a - b // 10,  40 50 200,
// })
// console.log(numbers)

// Problem 01:
// function cubeNumber(number) {
// 	if (typeof number !== 'number' || number <= 0) {
// 		return 'Invalid Input'
// 	}
// 	return number * number * number
// }

// problem 02
// function matchFinder(string1, string2) {
// 	if (string1.includes(string2)) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// console.log(matchFinder('Jo Doe', 'ohn'))
function sortMaker(arr) {
	// if the values one is greater then value 2
	if (arr[0] < 0 || arr[1] < 0) {
		return 'Invalid Input'
	} else if (arr[0] === arr[1]) {
		return 'Equal'
	} else if (arr[0] < arr[1]) {
		arr.sort(function (a, b) {
			return b - a
		})
	} else {
		return arr
	}

	return arr
}

// console.log(sortMaker([3, 2]))
// console.log(sortMaker([2, 2]))
// console.log(sortMaker([2, -2]))

// Problem 4
function findAddress(obj) {
	// 10,15A, Earth Perfect
	let streetRes = ''
	if (obj.street) {
		streetRes = obj.street
	} else {
		streetRes = '__'
	}

	let houseRes = ''
	if (obj.house) {
		houseRes = obj.house
	} else {
		houseRes = '__'
	}
	let societyRes = ''
	if (obj.house) {
		societyRes = obj.society
	} else {
		societyRes = '__'
	}
	return `${streetRes},${houseRes}, ${societyRes}`
}
// console.log(findAddress({ street: 10, house: '15A', society: 'Earth Perfect' }))
// console.log(findAddress({ street: 10, society: 'Earth Perfect' }))

// problem 05:
// function canPay(changeArray, totalDue) {
// 	if (changeArray.length === 0) {
// 		return 'No change found'
// 	}
// 	let total = 0
// 	for (const single of changeArray) {
// 		total += single
// 	}

// 	if (total >= totalDue) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// console.log(canPay([], 10))

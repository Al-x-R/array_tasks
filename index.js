"use strict";

// Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2)
console.log(arr3)


// Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]

const arr1reversed = arr1.reverse()
console.log(arr1reversed)


// Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arrToPush = [1, 2, 3]
arrToPush.push(4, 5, 6)
console.log(arrToPush)


// Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arrToUnshift = [1, 2, 3]
arrToUnshift.unshift(4, 5, 6)
console.log(arrToUnshift)


// Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

const arrToShift = ['js', 'css', 'jq']
console.log(arrToShift.shift())


// Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

const arrToPop = ['js', 'css', 'jq']
console.log(arrToPop.pop())


// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

const arrToSlice = [1, 2, 3, 4, 5]
const newAr = arrToSlice.slice(0, 3)
console.log(newAr)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arrToSlice1 = [1, 2, 3, 4, 5]
const nA = arrToSlice1.slice(3)
console.log(nA)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const arrToSplice1 = [1, 2, 3, 4, 5]
arrToSplice1.splice(1, 2)
const newArr = arrToSplice1
console.log(newArr)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

const arrToSplice2 = [1, 2, 3, 4, 5]
const n = arrToSplice2.splice(1, 3)
console.log(n)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const arrToSplice3 = [1, 2, 3, 4, 5]
arrToSplice3.splice(3, 0, 'a', 'b', 'c')
console.log(arrToSplice3)


// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arrToSplice4 = [1, 2, 3, 4, 5]
arrToSplice4.splice(1,0,'a', 'b')
arrToSplice4.splice(6,0,'c')
arrToSplice4.splice(8,0,'e')
console.log(arrToSplice4)


// Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arrToSort = [3, 4, 1, 2, 7]
arrToSort.sort(function (a, b) {
    return a - b;
})
console.log(arrToSort)


// Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.

const obj = {js: 'test', jq: 'hello', css: 'world'}
console.log(Object.keys(obj))


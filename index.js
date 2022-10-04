let num = [1000,45,66,42,280]
let r = num.toString()
console.log( r,typeof r)
let b = num.join(" or ")//add words or sign b/w alements
console.log(b , typeof b,num)
let c = num.shift()//remove first number from array
console.log(c ,typeof c,num)
let d = num.pop()//remove last number from array
console.log(d ,typeof d,num)
let e = num.push(60)//add number in the last of the array  and gives length
console.log(e ,typeof e,num)
let f = num.unshift(99)//add number in the first of the array and gives length
console.log(f ,typeof f,num)
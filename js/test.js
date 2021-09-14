// (function(something) {
//     something.foo = 123;
//   })(something || (something = {}));

//   console.log(something);
//   // { foo: 123 }
//   (function(something) {
//     something.bar = 456;
//   })(something || (something = {}));
//   console.log(something); // { foo: 123, bar: 456 }
// let a=[1,2,3]
// a.splice(0,1)[0].toLocaleString()
// console.log(a)

// let a = "abcdefg"
// let b={
//     q:{
//         m:'s'
//     },
//     n:'nv'
// }
// let a = new Array([1,2])
// console.log(a.__proto__.__proto__.__proto__.__proto__)
// for (const x in b) {
//     console.log(x)
// }

// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// 有参数的情况
// let s1 = Symbol('foo');
// let s2 = Symbol('foo');

//  // false
// console.log(s1)
// console.log(s2)


// function* foo() {

//     var result = yield function(){return {a:1}}()
//     console.log(result)
//   }

//   for (let v of foo()) {
//     console.log(v);
//   }
// console.log(2==true);


// setTimeout(() => {  
//   console.log('setTimeout 1')
//   Promise.resolve().then(() => {
//     console.log('promise 3')
//   }).then(() => {
//     console.log('promise 4')
//   }).then(() => {
//     setTimeout(() => {
//       console.log('setTimeout 2')
//       Promise.resolve().then(() => {
//         console.log('promise 5')
//       }).then(() => {
//         console.log('promise 6')
//       }).then(() => {
//         clearInterval(interval)
//       })
//     }, 0)
//   })
// }, 0)

// const interval = setInterval(() => {
//   console.log('setInterval')
// }, 0)

// Promise.resolve().then(() => {
//   console.log('promise 1')
// }).then(() => {
//   console.log('promise 2')
// })
//   let value = 1;

// function foo() {
//     console.log(value);
// }

// function bar() {
//     let value = 2;
//     foo();
// }

// bar();

// var a = function () { this.b = 3; }
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a();
// console.log(b);//3
// console.log(c.b);//3
// console.log(a.prototype.b);//3
// const a = (x) => { x }
// const b = function (x, y) {
//   x;
//   y;
// }
// console.log(b())
// let a=[]
// a.push([1,2]);
// a.push([1,2])
// console.log(a)
function create(proto) {
    function F() { };
    F.prototype = proto;
    return new F();
}
function Super() {

}
// console.log(Object.create(Super))
// console.log(Super.prototype)
let a = Object.create(Super.prototype);

// console.log(a)
let b = create(Super.prototype);
// function F() { };
// F.prototype = Super.prototype;
// F.prototype.constructor = F;
// console.log(F.prototype.constructor)
// console.log(new F().__proto__);


// console.log(b)
// console.log(Object.create(Super.prototype).constructor)
function a1() { console.log(this) }
console.log(this)
a1();
const bb = new a1();
bb.name = 1;
console.log(bb)

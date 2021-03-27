let a = { n: 1 };
let b = a; // 持有a，以回查  
// a.x = a = { n: 2 };
a = a.x = { n: 2 }
console.log(a);// --> undefined  
console.log(b);// --> {n:2}
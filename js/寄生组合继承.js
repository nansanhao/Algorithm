function Father(name) {
    this.name = name;
}

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

const protoType = Object.create(Father.prototype);
// let fn = function () { }
// fn.protoType = Father.prototype;
// const protoType = new fn();
protoType.constructor = Son;
Son.prototype = protoType;
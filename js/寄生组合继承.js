function Father(name) {
    this.name = name;
}

function Son(name, age) {
    Father.call(this, name);
    this.age = age;
}

const protoType = Object.create(Father.prototype);
protoType.construcor = Son;
Son.prototype = protoType;


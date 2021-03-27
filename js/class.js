class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }
}


const a = new ColorPoint(1, 1, 'green')
console.log(Object.getPrototypeOf(a))
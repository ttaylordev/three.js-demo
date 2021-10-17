class Square {
    constructor (width) {
        this.width = width;
        this.height = width;
    }

    // area
    // getter
    get area(){
        return this.width * this.height;
    }

    set area(area){
        this.width  = Math.sqrt(area);
        this.height = Math.sqrt(area);
    }
}

export default Square;

// example
// const square1 = new Square(12);
// square1.area = 25;
// console.log(square1.area);
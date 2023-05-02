// Shapes class constructor for the possible logo shapes
class Shapes {
    constructor(shape, shapeColor) {
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> 
        <circle cx="115" cy="165" r="110" fill="${this.shapeColor}" />
        </svg>`
    }
}

class Square extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        </svg>`
    }
}
class Triangle extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}" /> 
        </svg>`
    }
}

// To check if the text length is less than 3 characters.
class Text {};

Text.prototype.textLength = (logoText) => {
    if (logoText.length > 3) {
        return false;
    }
}

module.exports = { Shapes, Circle, Triangle, Square, Text }
// Shapes class constructor for the possible logo shapes
class Shapes {
    constructor(shape, shapeColor) {
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
}

// gives the shape points for a circle
class Circle extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<circle cx="115" cy="165" r="110" fill="${this.shapeColor}" />`
    }
}

//gives the shape points for a square 
class Square extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}" />`
    }
}

// gives the shape points for a triangle
class Triangle extends Shapes {
    constructor(shape, shapeColor) {
        super(shape, shapeColor);
    }
    render() {
        return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
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
// Shapes class constructor for the possible logo shapes
class Shapes {
    constructor(text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> 
        <circle cx="115" cy="165" r="110" fill="${this.shapeColor}" />
        <text x="115" y="200" font-size="100" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
}
}

class Square extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="145" y="150" font-size="120" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}
class Triangle extends Shapes {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}" /> 
        <text x="145" y="150" font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
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
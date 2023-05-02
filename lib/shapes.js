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
        return
}
}

class Square extends Shapes {
    render() {
        return
    }
}
class Triangle extends Shapes {
    render() {
        return 
    }
}

class Text {};

Text.prototype.textLength = (logoText) => {
    if (logoText.length > 3) {
        return false;
    }
}

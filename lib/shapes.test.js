const { Shapes, Circle, Triangle, Square, Text } = require('./shapes');

describe('Shapes', () => {

    describe('circle', () => {
        it('should render a circle', () => {
            const circle = new Circle('circle', 'green');
            expect(circle.render().toEqual('<circle cx="115" cy="165" r="110" fill="green" />'))
        });
    });

    describe('triangle', () => {
        it('should render a triangle', () => {
            const triangle = new Triangle('triangle', 'green');
            expect(triangle.render().toEqual('<polygon points = "150, 18 244, 182 56, 182" fill="green" />'))
        });
    });

    describe('square', () => {
        it('should render a square', () => {
            const square = new Square('square', 'green');
            expect(square.render().toEqual('<rect width="200" height="200" fill="green" />'))
        });
    });

    describe('text length', () => {
        it('should return false if it is more than 3 characters long', () => {
            const text = new Text();
            const input = text.textLength('cats');
            expect(input).toEqual(false);
        });
    });

})
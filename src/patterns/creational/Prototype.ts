// USE CASES -
// 1 - Helps in cloning complex objects
interface Inner {
  name: string;
}

interface IShape {
  color: string;
  x: number;
  y: number;
  inner: Inner;
}

abstract class Shape {
  constructor(public properties: IShape) {}

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(properties: IShape, public width: number, public height: number) {
    super(properties);
  }

  clone(): Shape {
    let clonedData: IShape = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
      inner: { ...this.properties.inner },
    };

    return new Rectangle(clonedData, this.width, this.height);
  }
}

const redRectangle: Shape = new Rectangle(
  {
    color: 'red',
    x: 10,
    y: 20,
    inner: {
      name: 'John',
    },
  },
  10,
  20
);

const blueRectangle = redRectangle.clone();
blueRectangle.properties.color = 'blue';
blueRectangle.properties.x = 100;
blueRectangle.properties.inner.name = 'Baby';

console.log('Prototype 1 - red rectangle', redRectangle);
console.log('Prototype 1 - blue rectangle', blueRectangle);

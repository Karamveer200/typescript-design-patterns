/* eslint-disable @typescript-eslint/no-useless-constructor */
// USE CASES -
// 1 - Helps in cloning complex objects

interface IShape {
  color: string;
  x: number;
  y: number
}

abstract class Shape {
  constructor(properties: IShape) {

  }
}

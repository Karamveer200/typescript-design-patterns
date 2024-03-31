abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayInfo(): string;
}

const displayInfoFn = (model: string, year: number) => `this is Sedan for model - ${model}`;

class Sedan extends Car {
  displayInfo(): string {
    return displayInfoFn(this.model, this.productionYear);
  }
}

class Suv extends Car {
  displayInfo(): string {
    return displayInfoFn(this.model, this.productionYear);
  }
}

class HatchBack extends Car {
  displayInfo(): string {
    return displayInfoFn(this.model, this.productionYear);
  }
}

class CarFactory {
  createCar(type: 'sedan' | 'suv' | 'hatchback', model: string, productionYear: number) {
    switch (type) {
      case 'sedan':
        return new Sedan(model, productionYear);
      case 'suv':
        return new Suv(model, productionYear);
      case 'hatchback':
        return new HatchBack(model, productionYear);
      default:
        throw new Error('Invalid type');
    }
  }
}

const carFactory = new CarFactory();

const getSedan = carFactory.createCar('sedan', 'camry', 2024);
const getSuv = carFactory.createCar('suv', 'Fortuner', 2022);
const getHatchback = carFactory.createCar('hatchback', 'civic', 2021);

console.log(getSedan.displayInfo());
console.log(getSuv.displayInfo());
console.log(getHatchback.displayInfo());

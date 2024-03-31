interface ICOFFEE {
  cost: () => number;
  description: () => string;
}

class SimpleCoffee implements ICOFFEE {
  cost() {
    return 10;
  }

  description() {
    return 'This is a Simple Coffee';
  }
}

abstract class CoffeeDecorator implements ICOFFEE {
  constructor(protected coffee: ICOFFEE) {}

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: ICOFFEE) {
    super(coffee);
  }

  cost() {
    const MILK_COST = 20;
    return this.coffee.cost() + MILK_COST;
  }

  description(): string {
    return 'This is Milk Coffee';
  }
}

class ChocolateDecorator extends CoffeeDecorator {
  constructor(coffee: ICOFFEE) {
    super(coffee);
  }

  cost() {
    const CHOCOLATE_COST = 5;
    return this.coffee.cost() + CHOCOLATE_COST;
  }

  description(): string {
    return 'This is Chocolate Coffee';
  }
}

let simplyCoffee = new SimpleCoffee();
console.log('simplyCoffee Cost before ', simplyCoffee.cost());

simplyCoffee = new MilkDecorator(simplyCoffee);
console.log('simplyCoffee Cost after Milk', simplyCoffee.cost());

simplyCoffee = new ChocolateDecorator(simplyCoffee);
console.log('simplyCoffee Cost after Chocolate', simplyCoffee.cost());

interface IServerRequest {
  handleRequest: (req: any) => void;
}

class ServerRequest implements IServerRequest {
  handleRequest() {
    console.log('Handling request');
  }
}

abstract class ServerDecorator implements IServerRequest {
  constructor(protected server: IServerRequest) {}
  abstract handleRequest(req: any): void;
}

class LoginMiddleware extends ServerDecorator {
  constructor(server: IServerRequest) {
    super(server);
  }

  handleRequest(req: any): void {
    console.log('Login middleware');

    this.server.handleRequest(req);
  }
}

class AuthMiddleware extends ServerDecorator {
  constructor(server: IServerRequest) {
    super(server);
  }

  handleRequest(req: any): void {
    console.log('Login middleware');

    this.server.handleRequest(req);
  }
}

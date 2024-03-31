// USE CASES -
// 1 - Setting up DB connection
// 2 - Manager logged in User context

class Singleton {
  private static instance: Singleton;
  private static value: number;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  setValue(val: number): void {
    Singleton.value = val;
  }

  getValue(): number {
    return Singleton.value;
  }
}

const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();
singletonInstance1.setValue(10);

console.log('Singleton 1 - ', singletonInstance1.getValue());
console.log('Singleton 2 - ', singletonInstance2.getValue());

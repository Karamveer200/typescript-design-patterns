class HashTable {
  keyMap: Array<Array<Array<string | number>>>;

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  hash(key: string) {
    const WEIRD_PRIME = 31;
    const ALPHABET_OFFSET = 65;
    let total = 0;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const code = char!.charCodeAt(0) - ALPHABET_OFFSET;
      total = (total * WEIRD_PRIME + code) % this.keyMap.length;
    }

    return total;
  }

  set(key: string, value: string | number) {
    // Separate chaining method
    // Save array inside array and push incase of collisions
    const keyHashIndex = this.hash(key);

    if (!this.keyMap[keyHashIndex]) {
      this.keyMap[keyHashIndex] = [];
    }

    this.keyMap[keyHashIndex]?.push([key, value]);
  }

  get(key: string) {
    const keyHashIndex = this.hash(key);

    if (!this.keyMap[keyHashIndex]) return undefined;

    return this.keyMap[keyHashIndex]?.find((item) => item[0] === key);
  }

  getKeys() {
    const keys: (string | number | undefined)[] = [];
    this.keyMap.forEach((item) => item.forEach((innerItem) => innerItem && keys.push(innerItem[0])));

    return keys;
  }

  getValues() {
    const keys: (string | number | undefined)[] = [];
    this.keyMap.forEach((item) => item.forEach((innerItem) => innerItem && keys.push(innerItem[1])));

    return keys;
  }
}

const firstTable = new HashTable(4);
console.log('SET Cyan, abc - ', firstTable.set('Cyan', 'abc'));
console.log('SET Hello, bruhh - ', firstTable.set('Hello', 'bruhh'));
console.log('SET Yoyo, hahhahah - ', firstTable.set('Yoyo', 'hahhahah'));

console.log('GET - ', firstTable.get('Cyan'));
console.log('GET - ', firstTable.get('Hello'));
console.log('GET - ', firstTable.get('Yoyo'));

console.log('GET ALL KEYS- ', firstTable.getKeys());
console.log('GET ALL VALUES- ', firstTable.getValues());

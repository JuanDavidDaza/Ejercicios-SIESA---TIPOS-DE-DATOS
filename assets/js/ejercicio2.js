class Cola {
  constructor() {
    this.cola = [];
  }

  push(element) {
    this.cola.push(element);
    return this.cola;
  }

  shift() {
    return this.cola.shift();
  }

  buscar() {
    return this.cola[0];
  }

  length() {
    return this.cola.length;
  }

  print() {
    return this.cola;
  }
}

const cola = new Cola();
console.log(cola.push("The Rock")); // ['The Rock']
console.log(cola.push("John Cena")); // ['The Rock', 'John Cena']
console.log(cola.push("Stone Cold Steve Austin")); // ['The Rock', 'John Cena', 'Stone Cold Steve Austin']
console.log(cola.shift()); // 'The Rock'
console.log(cola.buscar()); // 'John Cena'
console.log(cola.print()); // ['John Cena', 'Stone Cold Steve Austin']

function retornarElemento<T>(lista: T[]): T {
  return lista[0];
}

let listaNumeros = [1, 2, 3];
let listaStrings = ["foo", "bar", "baz"];

let primeiroNumero = retornarElemento(listaNumeros);
let primeiroString = retornarElemento(listaStrings);

console.log(primeiroNumero); // 1
console.log(primeiroString); // "foo"

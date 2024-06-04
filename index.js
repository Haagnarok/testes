// Definimos um array chamado `mixedArray` que contém diferentes tipos de valores: strings e números.
const mixedArray = ["Hello", 42, "World", 3, 14, "JavaScript", 2024];

// Usamos o método `filter` para criar um novo array contendo apenas os elementos de `mixedArray` que são números.
// `typeof val === 'number'` verifica se o tipo do valor é número.
const result = mixedArray.filter((val) => typeof val === 'number')
                         // Em seguida, usamos o método `reduce` para somar todos os números no array filtrado.
                         // `prev` é o acumulador que guarda a soma dos elementos anteriores.
                         // `curr` é o valor atual do array que está sendo somado ao acumulador.
                         .reduce((prev, curr) => prev + curr);

// Imprimimos o resultado da soma no console.
console.log(result);

const haag = ["beibe", "beibe", "biruleibe", "beibe", 43, 2, 111, 1, 0];

const resultado = haag.filter((val) => typeof val === 'number').reduce((prev, curr) => prev + curr);

console.log(resultado);

const huehue = [0, 1, 2, 4, "ijhf", 34]

const resultou = huehue.filter((val) => typeof val === 'number').reduce((prev, curr) => prev + curr);

console.log(resultou);

console.log(resultado < resultou);








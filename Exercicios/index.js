
let x = 0

// formas de imprimir numeros pares entre  0 a 20
while (x <= 20) {

    if (x % 2 === 0) {
        console.log(x)

    }
    x++
}

// ou
console.log('')

for (var i = 1; i <= 20; i++)
    if (i % 2 === 0) {
        console.log(i + ' é PAR!')
    }


console.log('')
// para imprmir numeros impares de 1 a 20

for (var i = 1; i <= 20; i++)
    if (i % 2 != 0) {
        console.log(i + ' é Impar!')
    }

console.log('')

// para imprimir os numeros pares e impares

for (var i = 1; i <= 20; i++)
    if (i % 2 === 0) {
        console.log(i + ' é PAR')
    } else {
        console.log(i + ' é IMPAR!')
    }

// para imprimir a palavra "funcionou" quando x for 5 ou 7
console.log('')


for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(i + ' funcionou')
    }
    if (i === 7) {
        console.log(i + ' funcionou')
    }
}

console.log('')

// para imprimir quando o numero estiver entre 5 e 7

for (var i = 0; i < 10; i++)
    if (i >= 5) {
        if (i <= 7) {
            console.log(i + 'FUNCIONOU')
        }
    }

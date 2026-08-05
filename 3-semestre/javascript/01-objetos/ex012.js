const objeto = {
    objAleatorio1: 1,
    objAleatorio2: 2,
    objAleatorio3: 3,
    objAleatorio4: 4,
    objAleatorio5: 5,
    objAleatorio6: 6
};

function contarPropriedades(obj) {
    let count = 0;
    for (let i in Object.keys(obj)) {
        count++;
    };
    return count;
};

console.log(contarPropriedades(objeto));
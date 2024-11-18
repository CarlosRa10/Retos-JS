//El método has() retorna un booleano indicando si el elemento especificado existe en el objeto Set o no.
//
function findFirstRepeated(giftIds) {
    const seen = new Set(); // Conjunto para almacenar los números que ya hemos visto-(Set) es una colección de valores únicos, lo que significa que no puede contener duplicados

    for (let i = 0; i < giftIds.length; i++) {//itera sobre cada índice i del arreglo giftIds. giftIds.length devuelve la cantidad de elementos en el arreglo.
        const id = giftIds[i];
        if (seen.has(id)) {// Esta línea verifica si el conjunto seen ya contiene el número id.
            return id; // Retorna el primer número repetido
        }
        seen.add(id); // Agrega el número al conjunto
    }

    return -1; // Si no hay números repetidos, retorna -1
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5


console.log(giftIds.length)

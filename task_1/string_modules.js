function capitalize(str) {
    return str[0] + str.substring(1).toLowerCase();
}

function spacingRepair(str) {
    str = str.replace(/\s\s+/gm, " ");
    str = str.replace(/([.?!)(,:])([^\s])/gm, "$1 $2");
    str = str.replace(/[\s]([.?!)(,:])/gm, "$1");

    return str;
}

function wordsCount(str) {
    var regex = /[\w-]+|[а-яА-ЯёЁ-]+/gimu

    return str.match(regex).length;
}

function countUnique(str) {
    var regex = /[\w-]+|[а-яА-ЯёЁ-]+/gimu
    let words = str.match(regex);

    let map = new Map();
    for (let word of words) {
        word = word.toLocaleLowerCase();

        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1)
        }
    }
    return map;
}


module.exports = {
    capitalize: capitalize,
    spacingRepair: spacingRepair,
    wordsCount: wordsCount,
    countUnique: countUnique
}
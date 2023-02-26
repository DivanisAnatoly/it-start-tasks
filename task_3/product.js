module.exports = class Product {
    static #methods = new Map([
        ['<=', (a, b) => +a <= +b],
        ['>=', (a, b) => +a >= +b],
        ['=', (a, b) => +a == +b],
        ['<', (a, b) => +a < +b],
        ['>', (a, b) => +a > +b],
        ['contains', (text, str) => text.includes(str)],
        ['starts', (text, str) => text.startsWith(str)],
        ['ends', (text, str) => text.endsWith(str)]]
    );

    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }


    static filter(products, query) {
        let productsCopy = Array.from(products);
        for (let instruction of query.split('&')) {
            instruction = instruction.replace(/(<=|>=|=|>|<|<)(\d+)/gm, "$1-$2");

            let [property, methodName, value] = instruction.split('-');
            let method = this.#methods.get(methodName);

            productsCopy = productsCopy.filter((product) => method(product[property], value))
        }
        return productsCopy;
    }
}
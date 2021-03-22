export class InMemoryDatabase {
    constructor() {
        this.db = {}; // https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
    }
    set(newValue) {
        this.db[newValue.id] = newValue;
    }
    get(id) {
        return this.db[id];
    }
}

export class Buildings {
    constructor(name, description, number = 1, cookiesPerSecond, cost) {
        this._name = name;
        this._description = description;
        this._number = number;
        this._cookiesPerSecond = cookiesPerSecond;
        this._cost = cost;
    }

    buy() {
        this._number++
            return this._cost = Math.ceil(this._cost *= 1.15);
        // return Math.ceil(this._cost *= 1.15);
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    get number() {
        return this._number
    }

    get cookiesPerSecond() {
        return this._cookiesPerSecond
    }

    get cost() {
        return this._cost
    }

    set number(newNumber) {
        this._number = newNumber
    }

    set cost(newCost) {
        this._cost = newCost
    }


}
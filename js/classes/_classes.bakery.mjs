import { data } from "../data/Data.mjs"
import { Buildings } from "../classes/_classes.buildings.mjs"

export class Bakery {
    constructor(name, cookies, cookiesPerClick, cookiesPerSecond) {
        this._name = name || '🍰 LY 🍰';
        this._cookies = cookies || 0;
        this._buildings = data.map(building => { return new Buildings(building) });
        this._cookiesPerClick = cookiesPerClick || 1;
        this._cookiesPerSecond = cookiesPerSecond || 0;
    }

    bakeCookies() {
        return this._cookies += this._cookiesPerClick;
    }

    buyBuilding(which) {
        const buildingObject = this._buildings.find(element => element.name === which);
        buildingObject.buy()
        this._cookiesPerSecond += buildingObject.cookiesPerSecond;
    }

    get name() {
        return this._name
    }

    get cookies() {
        return this._cookies
    }

    get buildings() {
        return this._buildings
    }

    get cookiesPerClick() {
        return this._cookiesPerClick
    }

    get cookiesPerSecond() {
        return this._cookiesPerSecond
    }
}
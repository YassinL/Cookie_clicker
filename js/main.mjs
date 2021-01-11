import { Bakery } from './classes/_classes.bakery.mjs';
import { Buildings } from './classes/_classes.buildings.mjs';
import { updateBakery } from './Dom/_dom.bakery.mjs'
import { updateTuiles } from './Dom/_dom.tuiles.mjs'
import { cookieCLicker } from './Dom/_dom.bakery.mjs'
import { buyTuiles } from './Dom/_dom.tuiles.mjs'
const monObjetBakery = new Bakery();
const monObjetBuilding = new Buildings()


updateBakery(monObjetBakery);
cookieCLicker(monObjetBakery);
updateTuiles();
buyTuiles(monObjetBakery);
buyTuiles(monObjetBuilding);
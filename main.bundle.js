var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(43);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var Point = (function () {
    function Point(pointOrX, y) {
        if (pointOrX && pointOrX.hasOwnProperty('x') && pointOrX.hasOwnProperty('y')) {
            this.set(pointOrX.x, pointOrX.y);
        }
        else if (typeof pointOrX === 'string' && typeof y === 'string') {
            this.set(parseFloat(pointOrX), parseFloat(y));
        }
        else if (typeof pointOrX === 'number' && typeof y === 'number') {
            this.set(pointOrX, y);
        }
        else {
            this.zero();
        }
    }
    Point.prototype.toString = function () {
        return this.x + "," + this.y;
    };
    Point.prototype.set = function (pointOrX, y) {
        // Instance of point, or set from plain object with x/y properties
        if (pointOrX instanceof Point || (pointOrX && pointOrX.x !== undefined && pointOrX.y !== undefined)) {
            this.x = pointOrX.x;
            this.y = pointOrX.y;
        }
        else if (typeof pointOrX === 'number' && typeof y === 'number') {
            this.x = pointOrX;
            this.y = y;
        }
        else {
            throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ARGUMENTS);
        }
        return this;
    };
    Point.prototype.clone = function () {
        return new Point(this.x, this.y);
    };
    Point.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    };
    Point.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    };
    Point.prototype.add = function (pointOrXOrValue, y) {
        if (pointOrXOrValue instanceof Point) {
            this.x += pointOrXOrValue.x;
            this.y += pointOrXOrValue.y;
        }
        else if (typeof pointOrXOrValue === 'number' && typeof y === 'undefined') {
            this.x += pointOrXOrValue;
            this.y += pointOrXOrValue;
        }
        else {
            this.x += pointOrXOrValue;
            this.y += y;
        }
        return this;
    };
    Point.prototype.subtract = function (pointOrXOrValue, y) {
        if (pointOrXOrValue instanceof Point) {
            this.x -= pointOrXOrValue.x;
            this.y -= pointOrXOrValue.y;
        }
        else if (typeof pointOrXOrValue === 'number' && typeof y === 'undefined') {
            this.x -= pointOrXOrValue;
            this.y -= pointOrXOrValue;
        }
        else {
            this.x -= pointOrXOrValue;
            this.y -= y;
        }
        return this;
    };
    Point.prototype.multiply = function (pointOrXOrValue, y) {
        if (pointOrXOrValue instanceof Point) {
            this.x *= pointOrXOrValue.x;
            this.y *= pointOrXOrValue.y;
        }
        else if (typeof pointOrXOrValue === 'number' && typeof y === 'undefined') {
            this.x *= pointOrXOrValue;
            this.y *= pointOrXOrValue;
        }
        else {
            this.x *= pointOrXOrValue;
            this.y *= y;
        }
        return this;
    };
    Point.prototype.divide = function (pointOrXOrValue, y) {
        if (pointOrXOrValue instanceof Point) {
            if (pointOrXOrValue.x === 0 || pointOrXOrValue.y === 0) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].DIVIDE_ZERO);
            }
            this.x /= pointOrXOrValue.x;
            this.y /= pointOrXOrValue.y;
        }
        else if (typeof pointOrXOrValue === 'number' && typeof y === 'undefined') {
            if (pointOrXOrValue === 0) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].DIVIDE_ZERO);
            }
            this.x /= pointOrXOrValue;
            this.y /= pointOrXOrValue;
        }
        else {
            if (pointOrXOrValue === 0 || y === 0) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].DIVIDE_ZERO);
            }
            this.x /= pointOrXOrValue;
            this.y /= y;
        }
        return this;
    };
    Point.prototype.inverse = function () {
        this.x *= -1;
        this.y *= -1;
        return this;
    };
    Point.prototype.equal = function (point) {
        // TODO epsilon.
        return this.x === point.x && this.y === point.y;
    };
    Point.equal = function (point, pointTwo) {
        // TODO epsilon.
        return pointTwo.x === point.x && pointTwo.y === point.y;
    };
    Point.prototype.isZero = function () {
        return this.x === 0 && this.y === 0;
    };
    Point.prototype.zero = function () {
        this.x = this.y = 0;
        return this;
    };
    Point.interpolate = function (result, from, to, factor) {
        factor = Math.min(Math.max(factor, 0), 1);
        result.x = (from.x * (1.0 - factor)) + (to.x * factor);
        result.y = (from.y * (1.0 - factor)) + (to.y * factor);
        return result;
    };
    Point.prototype.interpolate = function (from, to, factor) {
        return Point.interpolate(this, from, to, factor);
    };
    return Point;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__entity_entity_reducer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_combat_reducer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sprites_sprites_reducer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sliceCombatState; });
/* unused harmony export getCombatLoading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getCombatEncounterParty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getCombatEncounterEnemies; });
/* unused harmony export sliceSpritesState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSpritesLoaded; });
/* unused harmony export getSpriteMap */
/* unused harmony export sliceEntitiesState */
/* unused harmony export entitiesToArray */
/* unused harmony export getEntityBeingById */
/* unused harmony export getEntityBeingIds */
/* unused harmony export getEntityById */
/* unused harmony export getEntityItemById */
/* unused harmony export getEntityItemIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getEntityEquipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sliceGameState; });
/* unused harmony export getGameInventoryIds */
/* unused harmony export getGamePartyIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getGamePartyGold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getGamePartyPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getGameShipPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getGameMap; });
/* unused harmony export getGameCombatZone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getGameBattleCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getGameKeyData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getGameParty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getGameKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getGameInventory; });
/* unused harmony export sliceGameDataState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getGameDataLoaded; });
/* unused harmony export gameDataToArray */
/* unused harmony export getGameDataForType */
/* unused harmony export getGameDataWeaponsById */
/* unused harmony export getGameDataWeaponIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getGameDataWeapons; });
/* unused harmony export getGameDataArmorsById */
/* unused harmony export getGameDataArmorIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getGameDataArmors; });
/* unused harmony export getGameDataItemsById */
/* unused harmony export getGameDataItemIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getGameDataItems; });
/* unused harmony export getGameDataEnemiesById */
/* unused harmony export getGameDataEnemiesIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getGameDataEnemies; });
/* unused harmony export getGameDataMagicsById */
/* unused harmony export getGameDataMagicIds */
/* unused harmony export getGameDataMagics */
/* unused harmony export getGameDataClassesById */
/* unused harmony export getGameDataClassesIds */
/* unused harmony export getGameDataClasses */
/* unused harmony export getGameDataRandomEncountersById */
/* unused harmony export getGameDataRandomEncounterIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getGameDataRandomEncounters; });
/* unused harmony export getGameDataFixedEncountersById */
/* unused harmony export getGameDataFixedEncounterIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getGameDataFixedEncounters; });







/**
 * This file contains the application level data selectors that can be used with @ngrx/store to
 * select chunks of data from the store. There are two types of functions exported from this
 * file:
 *
 *  1. "slice" functions take in a state and return some subset of state from it.
 *  2. "get" functions are slice functions that have been composed together using {@see createSelector}
 *
 * It is preferred to use the "get" functions rather than using the "slice" functions directly. This
 * is because reselect will memoize calls to the combined selectors, which improves performance.
 *
 * @fileOverview
 */
//
// Combat
//
/**
 * Slice off the "combat" branch of the main application state.
 */
var sliceCombatState = function (state) { return state.combat; };
var getCombatLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceCombatState, __WEBPACK_IMPORTED_MODULE_4__combat_combat_reducer__["a" /* sliceCombatLoading */]);
var getCombatEncounterParty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceCombatState, __WEBPACK_IMPORTED_MODULE_4__combat_combat_reducer__["b" /* sliceCombatEncounterParty */]);
var getCombatEncounterEnemies = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceCombatState, __WEBPACK_IMPORTED_MODULE_4__combat_combat_reducer__["c" /* sliceCombatEncounterEnemies */]);
//
// Sprites
//
/**
 * Slice off the "sprites" branch of the main application state.
 */
var sliceSpritesState = function (state) { return state.sprites; };
var getSpritesLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceSpritesState, __WEBPACK_IMPORTED_MODULE_5__sprites_sprites_reducer__["a" /* sliceSpritesLoaded */]);
var getSpriteMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceSpritesState, __WEBPACK_IMPORTED_MODULE_5__sprites_sprites_reducer__["b" /* sliceSpritesById */]);
//
// Entity collections
//
/**
 * Slice off the "entities" branch of the main application state.
 */
var sliceEntitiesState = function (state) { return state.entities; };
/**
 * Given an entity "byIds" object, and its "allIds" array, return an array of the items
 * represented in the byIds dictionary. It's often easier to deal with array of items
 * than objects.
 */
var entitiesToArray = function (object, ids) {
    return ids.map(function (id) { return object[id]; }).toArray();
};
// Beings
var getEntityBeingById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceEntitiesState, __WEBPACK_IMPORTED_MODULE_1__entity_entity_reducer__["a" /* sliceEntityBeings */]);
var getEntityBeingIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceEntitiesState, __WEBPACK_IMPORTED_MODULE_1__entity_entity_reducer__["b" /* sliceEntityBeingIds */]);
/** Select just one entity by its ID */
var getEntityById = function (id) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntityBeingById, function (entities) {
        return entities.get(id);
    });
};
// Items
var getEntityItemById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceEntitiesState, __WEBPACK_IMPORTED_MODULE_1__entity_entity_reducer__["c" /* sliceEntityItems */]);
var getEntityItemIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceEntitiesState, __WEBPACK_IMPORTED_MODULE_1__entity_entity_reducer__["d" /* sliceEntityItemIds */]);
/** Resolve equipment slots to their item entity objects for representation in the UI */
var getEntityEquipment = function (entityId) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntityById(entityId), getEntityItemById, function (entity, items) {
        if (!entity) {
            return null;
        }
        var result = {
            armor: items.get(entity.armor),
            helm: items.get(entity.helm),
            shield: items.get(entity.shield),
            accessory: items.get(entity.accessory),
            boots: items.get(entity.boots),
            weapon: items.get(entity.weapon),
        };
        return Object.assign({}, entity, result);
    });
};
//
// Game application state
//
/**
 * Slice off the "gameState" branch of the main application state.
 */
var sliceGameState = function (state) { return state.gameState; };
var getGameInventoryIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["a" /* sliceInventoryIds */]);
var getGamePartyIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["b" /* slicePartyIds */]);
var getGamePartyGold = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["c" /* sliceGold */]);
var getGamePartyPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["d" /* slicePosition */]);
var getGameShipPosition = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["e" /* sliceShipPosition */]);
var getGameMap = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["f" /* sliceMap */]);
var getGameCombatZone = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["g" /* sliceCombatZone */]);
var getGameBattleCounter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["h" /* sliceBattleCounter */]);
var getGameKeyData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameState, __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_reducer__["i" /* sliceGameStateKeyData */]);
var getGameParty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntityBeingById, getGamePartyIds, function (entities, ids) {
    return ids.map(function (id) { return entities.get(id); });
});
/** Select just one data key from the gamesate keyData object. */
var getGameKey = function (key) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameKeyData, function (data) {
        return data.get(key);
    });
};
var getGameInventory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getEntityItemById, getGameInventoryIds, function (entities, ids) {
    return ids.map(function (id) {
        var result = entities.get(id);
        // Ensure that any item in the inventory has a corresponding entity. If not, throw a loud error
        // instead of crashing hard in an obscure place.
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__util__["c" /* assertTrue */])(result, id + " is present in inventory but not in entity collection. Did you forget to dispatch EntityAddItemAction?");
        return result;
    });
});
//
// Game data
//
/**
 * Slice off the "gameData" branch of the main application state. This branch contains game data
 * such as available weapons, armor, items, fixed encounters, etc.
 */
var sliceGameDataState = function (state) { return state.gameData; };
/**
 * Boolean indicating if the gamedata tree is loaded.
 */
var getGameDataLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["a" /* sliceGameDataLoaded */]);
/**
 * Given a template entity collection "byIds" object, and its "allIds" array, return an array of the items
 * represented in the byIds dictionary. It's often easier to deal with array of items than objects.
 */
var gameDataToArray = function (object, ids) {
    return ids.map(function (id) { return object.get(id); });
};
var getGameDataForType = function (type) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["b" /* sliceGameDataType */])(type));
};
var getGameDataWeaponsById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["c" /* sliceWeapons */]);
var getGameDataWeaponIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["d" /* sliceWeaponIds */]);
/** Select an array of weapons */
var getGameDataWeapons = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataWeaponsById, getGameDataWeaponIds, gameDataToArray);
var getGameDataArmorsById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["e" /* sliceArmors */]);
var getGameDataArmorIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["f" /* sliceArmorIds */]);
/** Select an array of armors */
var getGameDataArmors = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataArmorsById, getGameDataArmorIds, gameDataToArray);
var getGameDataItemsById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["g" /* sliceItems */]);
var getGameDataItemIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["h" /* sliceItemIds */]);
/** Select an array of items */
var getGameDataItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataItemsById, getGameDataItemIds, gameDataToArray);
var getGameDataEnemiesById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["i" /* sliceEnemies */]);
var getGameDataEnemiesIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["j" /* sliceEnemiesIds */]);
/** Select an array of items */
var getGameDataEnemies = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataEnemiesById, getGameDataEnemiesIds, gameDataToArray);
var getGameDataMagicsById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["k" /* sliceMagics */]);
var getGameDataMagicIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["l" /* sliceMagicIds */]);
/** Select an array of magics */
var getGameDataMagics = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataMagicsById, getGameDataMagicIds, gameDataToArray);
var getGameDataClassesById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["m" /* sliceClasses */]);
var getGameDataClassesIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["n" /* sliceClassesIds */]);
/** Select an array of game character classes */
var getGameDataClasses = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataClassesById, getGameDataClassesIds, gameDataToArray);
var getGameDataRandomEncountersById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["o" /* sliceRandomEncounters */]);
var getGameDataRandomEncounterIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["p" /* sliceRandomEncounterIds */]);
/** Select an array of random combat encounters */
var getGameDataRandomEncounters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataRandomEncountersById, getGameDataRandomEncounterIds, gameDataToArray);
var getGameDataFixedEncountersById = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["q" /* sliceFixedEncounters */]);
var getGameDataFixedEncounterIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(sliceGameDataState, __WEBPACK_IMPORTED_MODULE_3__game_data_game_data_reducer__["r" /* sliceFixedEncounterIds */]);
/** Select an array of fixed combat encounters */
var getGameDataFixedEncounters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getGameDataFixedEncountersById, getGameDataFixedEncounterIds, gameDataToArray);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return GameStateSaveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return GameStateSaveSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return GameStateSaveFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GameStateDeleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GameStateDeleteSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GameStateDeleteFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GameStateLoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GameStateLoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GameStateLoadFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GameStateNewAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GameStateNewSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GameStateNewFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return GameStateSetKeyDataAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStateTravelAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameStateTravelSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GameStateTravelFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return GameStateMoveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return GameStateAddGoldAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return GameStateHealPartyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return GameStateSetBattleCounterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GameStateEquipItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GameStateUnequipItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return GameStateAddInventoryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return GameStateRemoveInventoryAction; });

//
// Save state Actions
//
var GameStateSaveAction = (function () {
    function GameStateSaveAction() {
        this.type = GameStateSaveAction.typeId;
        this.payload = null;
    }
    return GameStateSaveAction;
}());

GameStateSaveAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE');
var GameStateSaveSuccessAction = (function () {
    function GameStateSaveSuccessAction() {
        this.type = GameStateSaveSuccessAction.typeId;
        this.payload = null;
    }
    return GameStateSaveSuccessAction;
}());

GameStateSaveSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE_SUCCESS');
var GameStateSaveFailAction = (function () {
    function GameStateSaveFailAction(payload) {
        this.payload = payload;
        this.type = GameStateSaveFailAction.typeId;
    }
    return GameStateSaveFailAction;
}());

GameStateSaveFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE_FAIL');
//
// Delete save state Actions
//
var GameStateDeleteAction = (function () {
    function GameStateDeleteAction() {
        this.type = GameStateDeleteAction.typeId;
        this.payload = null;
    }
    return GameStateDeleteAction;
}());

GameStateDeleteAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE_DELETE');
var GameStateDeleteSuccessAction = (function () {
    function GameStateDeleteSuccessAction() {
        this.type = GameStateDeleteSuccessAction.typeId;
        this.payload = null;
    }
    return GameStateDeleteSuccessAction;
}());

GameStateDeleteSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE_DELETE_SUCCESS');
var GameStateDeleteFailAction = (function () {
    function GameStateDeleteFailAction(payload) {
        this.payload = payload;
        this.type = GameStateDeleteFailAction.typeId;
    }
    return GameStateDeleteFailAction;
}());

GameStateDeleteFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SAVE_DELETE_FAIL');
//
// Load state Actions
//
var GameStateLoadAction = (function () {
    function GameStateLoadAction() {
        this.type = GameStateLoadAction.typeId;
    }
    return GameStateLoadAction;
}());

GameStateLoadAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_LOAD');
var GameStateLoadSuccessAction = (function () {
    function GameStateLoadSuccessAction(payload) {
        this.payload = payload;
        this.type = GameStateLoadSuccessAction.typeId;
    }
    return GameStateLoadSuccessAction;
}());

GameStateLoadSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_LOAD_SUCCESS');
var GameStateLoadFailAction = (function () {
    function GameStateLoadFailAction(payload) {
        this.payload = payload;
        this.type = GameStateLoadFailAction.typeId;
    }
    return GameStateLoadFailAction;
}());

GameStateLoadFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_LOAD_FAIL');
//
// New game state Actions
//
var GameStateNewAction = (function () {
    function GameStateNewAction(payload) {
        this.payload = payload;
        this.type = GameStateNewAction.typeId;
    }
    return GameStateNewAction;
}());

GameStateNewAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_NEW');
var GameStateNewSuccessAction = (function () {
    function GameStateNewSuccessAction(payload) {
        this.payload = payload;
        this.type = GameStateNewSuccessAction.typeId;
    }
    return GameStateNewSuccessAction;
}());

GameStateNewSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_NEW_SUCCESS');
var GameStateNewFailAction = (function () {
    function GameStateNewFailAction(payload) {
        this.payload = payload;
        this.type = GameStateNewFailAction.typeId;
    }
    return GameStateNewFailAction;
}());

GameStateNewFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_NEW_FAIL');
//
// key/value data for map features and such
//
var GameStateSetKeyDataAction = (function () {
    function GameStateSetKeyDataAction(key, value) {
        this.type = GameStateSetKeyDataAction.typeId;
        this.payload = {
            key: key, value: value
        };
    }
    return GameStateSetKeyDataAction;
}());

GameStateSetKeyDataAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SET_KEY_DATA');
//
// Travel state actions
//
var GameStateTravelAction = (function () {
    function GameStateTravelAction(payload) {
        this.payload = payload;
        this.type = GameStateTravelAction.typeId;
    }
    return GameStateTravelAction;
}());

GameStateTravelAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_TRAVEL');
var GameStateTravelSuccessAction = (function () {
    function GameStateTravelSuccessAction(payload) {
        this.payload = payload;
        this.type = GameStateTravelSuccessAction.typeId;
    }
    return GameStateTravelSuccessAction;
}());

GameStateTravelSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_TRAVEL_SUCCESS');
var GameStateTravelFailAction = (function () {
    function GameStateTravelFailAction(payload) {
        this.payload = payload;
        this.type = GameStateTravelFailAction.typeId;
    }
    return GameStateTravelFailAction;
}());

GameStateTravelFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_TRAVEL_FAIL');
var GameStateMoveAction = (function () {
    function GameStateMoveAction(payload) {
        this.payload = payload;
        this.type = GameStateMoveAction.typeId;
    }
    return GameStateMoveAction;
}());

GameStateMoveAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_MOVE');
//
// Gold state actions
//
var GameStateAddGoldAction = (function () {
    function GameStateAddGoldAction(payload) {
        this.payload = payload;
        this.type = GameStateAddGoldAction.typeId;
    }
    return GameStateAddGoldAction;
}());

GameStateAddGoldAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_ADD_GOLD');
//
// Party state actions
//
var GameStateHealPartyAction = (function () {
    function GameStateHealPartyAction(payload) {
        this.payload = payload;
        this.type = GameStateHealPartyAction.typeId;
    }
    return GameStateHealPartyAction;
}());

GameStateHealPartyAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_HEAL_PARTY');
var GameStateSetBattleCounterAction = (function () {
    function GameStateSetBattleCounterAction(payload) {
        this.payload = payload;
        this.type = GameStateSetBattleCounterAction.typeId;
    }
    return GameStateSetBattleCounterAction;
}());

GameStateSetBattleCounterAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_SET_BATTLE_COUNTER');
var GameStateEquipItemAction = (function () {
    function GameStateEquipItemAction(payload) {
        this.payload = payload;
        this.type = GameStateEquipItemAction.typeId;
    }
    return GameStateEquipItemAction;
}());

GameStateEquipItemAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_EQUIP_ITEM');
var GameStateUnequipItemAction = (function () {
    function GameStateUnequipItemAction(payload) {
        this.payload = payload;
        this.type = GameStateUnequipItemAction.typeId;
    }
    return GameStateUnequipItemAction;
}());

GameStateUnequipItemAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_UNEQUIP_ITEM');
//
// Inventory actions
//
var GameStateAddInventoryAction = (function () {
    function GameStateAddInventoryAction(payload) {
        this.payload = payload;
        this.type = GameStateAddInventoryAction.typeId;
    }
    return GameStateAddInventoryAction;
}());

GameStateAddInventoryAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_ADD_INVENTORY');
var GameStateRemoveInventoryAction = (function () {
    function GameStateRemoveInventoryAction(payload) {
        this.payload = payload;
        this.type = GameStateRemoveInventoryAction.typeId;
    }
    return GameStateRemoveInventoryAction;
}());

GameStateRemoveInventoryAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_REMOVE_INVENTORY');


/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_typed_immutable_record___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__);
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/* harmony export (immutable) */ __webpack_exports__["e"] = exhaustiveCheck;
/* harmony export (immutable) */ __webpack_exports__["d"] = makeRecordFactory;
/* harmony export (immutable) */ __webpack_exports__["c"] = assertTrue;
/* harmony export (immutable) */ __webpack_exports__["b"] = newGuid;
/*
 * Sourced from ngrx/example-app: https://github.com/ngrx/example-app/blob/master/src/app/util.ts
 */

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
/**
 * Helper for exhaustive switch checking using tagged union types
 * @param input The union type
 */
function exhaustiveCheck(input) {
    // This function is compiler magic. Call it with the source of a switch(source) using a tagged union of
    // types, and it will throw a compiler error if a valid switch case from the union type is missing.
    // The error will include the type that is missing.
}
/**
 * {@see 'typed-immutable-record'/makeTypedFactory} but returns a factor function that accepts a Partial<E>
 *   as the init values argument.
 */
function makeRecordFactory(obj, name) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_typed_immutable_record__["makeTypedFactory"])(obj, name);
}
;
/**
 * Throw errors if the given expression is falsy
 */
function assertTrue(expression, message) {
    if (!expression) {
        throw new Error("Assertion Failed: " + message);
    }
}
/**
 * Generate probably unique IDs. See: http://stackoverflow.com/questions/26501688/a-typescript-guid-class
 * @returns {string}
 */
function newGuid() {
    /* tslint:disable */
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    /* tslint:enable */
}


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_animate__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * Provide a basic service for queuing and showing messages to the user.
 *
 * TODO: Refactor this to use observable current notification, remove Animate service and replace with ng animations.
 */
var NotificationService = (function () {
    function NotificationService(animate) {
        var _this = this;
        this.animate = animate;
        this.paused = false;
        this.animationClass = 'active';
        this.message = null;
        /**
         * Default timeout in Milliseconds
         */
        this.defaultTimeout = 2500;
        this._container = null;
        this._current = null;
        this._queue = [];
        this._dismissBinding = null;
        this._dismissBinding = function (e) {
            _this.dismiss();
        };
    }
    Object.defineProperty(NotificationService.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (value) {
            if (this._container) {
                this._container.removeEventListener('click', this._dismissBinding);
            }
            this._container = value;
            if (this._container) {
                this._container.addEventListener('click', this._dismissBinding);
            }
        },
        enumerable: true,
        configurable: true
    });
    NotificationService.prototype.show = function (message, done, duration) {
        var obj = {
            message: message,
            done: done,
            duration: typeof duration === 'undefined' ? this.defaultTimeout : duration
        };
        return this.queue(obj);
    };
    NotificationService.prototype.dismiss = function () {
        var _this = this;
        if (!this._current || this.paused) {
            return;
        }
        this.paused = true;
        this.animate.leave(this.container, this.animationClass).then(function () {
            if (_this._current) {
                // Don't let exceptions in callback mess up current = null;
                try {
                    if (_this._current.done) {
                        _this._current.done(_this._current);
                    }
                }
                catch (e) {
                    console.warn(e);
                }
                _this._current = null;
                _this.message = null;
            }
            _this.paused = false;
        });
        if (this._current) {
            this._current.dismissed = true;
        }
    };
    NotificationService.prototype.queue = function (config) {
        config.elapsed = 0;
        this._queue.push(config);
        return config;
    };
    /**
     * Update current message, and manage event generation for transitions
     * between messages.
     * @param elapsed number The elapsed time since the last invocation, in milliseconds.
     */
    NotificationService.prototype.processFrame = function (elapsed) {
        var _this = this;
        if (this._current && this.paused !== true) {
            var c = this._current;
            var timeout = c.duration && c.elapsed > c.duration;
            var dismissed = c.dismissed === true;
            if (!timeout && !dismissed) {
                c.elapsed += elapsed;
                return;
            }
            this.dismiss();
        }
        if (this.paused || this._queue.length === 0) {
            return;
        }
        this._current = this._queue.shift();
        this.paused = true;
        this.message = this._current.message;
        this.animate.enter(this.container, this.animationClass).then(function () {
            _this.paused = false;
        });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_animate__["a" /* Animate */]])
], NotificationService);



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(209);

/***/ }),
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_core_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow_core_world__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprite_render__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_game_data_game_data_actions__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_sprites_sprites_actions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_game_state_game_state_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_selectors__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWorld; });












var _sharedGameWorld = null;
var GameWorld = (function (_super) {
    __extends(GameWorld, _super);
    function GameWorld(loader, store, sprites, gameStateService) {
        var _this = _super.call(this) || this;
        _this.loader = loader;
        _this.store = store;
        _this.sprites = sprites;
        _this.gameStateService = gameStateService;
        _this.input = new __WEBPACK_IMPORTED_MODULE_2__game_pow2_core_input__["a" /* PowInput */]();
        /**
         * Observable that emits when all game data has been loaded and the game can start.
         */
        _this.ready$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_11__models_selectors__["a" /* getSpritesLoaded */])
            .combineLatest(_this.store.select(__WEBPACK_IMPORTED_MODULE_11__models_selectors__["b" /* getGameDataLoaded */]), function (sprites, data) {
            // are both tables loaded?
            return sprites && data;
        })
            .filter(function (b) { return b; })
            .map(function () { return undefined; });
        _sharedGameWorld = _this;
        if (_this.gameStateService.hasSaveGame()) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__models_game_state_game_state_actions__["i" /* GameStateLoadAction */]());
        }
        else {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__models_sprites_sprites_actions__["d" /* SpritesLoadAction */]('assets/images/index.json'));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__models_game_data_game_data_actions__["b" /* GameDataFetchAction */](__WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__["a" /* SPREADSHEET_ID */]));
        }
        return _this;
    }
    GameWorld.get = function () {
        return _sharedGameWorld;
    };
    return GameWorld;
}(__WEBPACK_IMPORTED_MODULE_3__game_pow_core_world__["a" /* World */]));
GameWorld = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource_manager__["a" /* ResourceManager */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__sprite_render__["a" /* SpriteRender */],
        __WEBPACK_IMPORTED_MODULE_9__models_game_state_game_state_service__["a" /* GameStateService */]])
], GameWorld);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rect; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var Rect = (function () {
    function Rect(rectOrPointOrX, extentOrY, width, height) {
        if (rectOrPointOrX instanceof Rect) {
            this.point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](rectOrPointOrX.point);
            this.extent = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](rectOrPointOrX.extent);
        }
        else if (typeof width === 'number' && typeof height === 'number') {
            this.point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](rectOrPointOrX, extentOrY);
            this.extent = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](width, height);
        }
        else if (rectOrPointOrX instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */] && extentOrY instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]) {
            this.point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](rectOrPointOrX);
            this.extent = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](extentOrY);
        }
        else {
            this.point = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](0, 0);
            this.extent = new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](1, 1);
        }
        return this;
    }
    Rect.prototype.toString = function () {
        return this.point.toString() + "," + this.extent.toString();
    };
    Rect.prototype.set = function (rectOrPointOrX, extentOrY, width, height) {
        if (rectOrPointOrX instanceof Rect) {
            this.point.set(rectOrPointOrX.point);
            this.extent.set(rectOrPointOrX.extent);
        }
        else if (typeof width === 'number' && typeof height === 'number') {
            this.point.set(rectOrPointOrX, extentOrY);
            this.extent.set(width, height);
        }
        else if (rectOrPointOrX instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */] && extentOrY instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]) {
            this.point.set(rectOrPointOrX);
            this.extent.set(extentOrY);
        }
        else {
            throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ARGUMENTS);
        }
        return this;
    };
    Rect.prototype.clone = function () {
        return new Rect(this.point.clone(), this.extent.clone());
    };
    Rect.prototype.clip = function (clipRect) {
        var right = this.point.x + this.extent.x;
        var bottom = this.point.y + this.extent.y;
        this.point.x = Math.max(clipRect.point.x, this.point.x);
        this.extent.x = Math.min(clipRect.point.x + clipRect.extent.x, right) - this.point.x;
        this.point.y = Math.max(clipRect.point.y, this.point.y);
        this.extent.y = Math.min(clipRect.point.y + clipRect.extent.y, bottom) - this.point.y;
        return this;
    };
    Rect.prototype.isValid = function () {
        return this.extent.x > 0 && this.extent.y > 0;
    };
    Rect.prototype.intersect = function (clipRect) {
        return !(clipRect.point.x > this.point.x + this.extent.x ||
            clipRect.point.x + clipRect.extent.x < this.point.x ||
            clipRect.point.y > this.point.y + this.extent.y ||
            clipRect.point.y + clipRect.extent.y < this.point.y);
    };
    Rect.prototype.pointInRect = function (pointOrX, y) {
        var x = 0;
        if (pointOrX instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */]) {
            x = pointOrX.x;
            y = pointOrX.y;
        }
        else if (typeof pointOrX === 'number' && typeof y === 'number') {
            x = pointOrX;
        }
        else {
            throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ARGUMENTS);
        }
        if (x >= this.point.x + this.extent.x || y >= this.point.y + this.extent.y) {
            return false;
        }
        return !(x < this.point.x || y < this.point.y);
    };
    Rect.prototype.getCenter = function () {
        var x = parseFloat((this.point.x + this.extent.x * 0.5).toFixed(2));
        var y = parseFloat((this.point.y + this.extent.y * 0.5).toFixed(2));
        return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](x, y);
    };
    Rect.prototype.setCenter = function (pointOrX, y) {
        var x;
        if (pointOrX instanceof __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */] || (pointOrX && pointOrX.x !== undefined && pointOrX.y !== undefined)) {
            x = pointOrX.x;
            y = pointOrX.y;
        }
        else {
            x = pointOrX;
        }
        this.point.x = parseFloat((x - this.extent.x * 0.5).toFixed(2));
        this.point.y = parseFloat((y - this.extent.y * 0.5).toFixed(2));
        return this;
    };
    Rect.prototype.getLeft = function () {
        return this.point.x;
    };
    Rect.prototype.getTop = function () {
        return this.point.y;
    };
    Rect.prototype.getRight = function () {
        return this.point.x + this.extent.x;
    };
    Rect.prototype.getBottom = function () {
        return this.point.y + this.extent.y;
    };
    Rect.prototype.getHalfSize = function () {
        return new __WEBPACK_IMPORTED_MODULE_1__point__["a" /* Point */](this.extent.x / 2, this.extent.y / 2);
    };
    /**
     * Add a point to the rect.  This will ensure that the rect
     * contains the given point.
     * @param {Point} value The point to add.
     */
    Rect.prototype.addPoint = function (value) {
        if (value.x < this.point.x) {
            this.extent.x = this.extent.x - (value.x - this.point.x);
            this.point.x = value.x;
        }
        if (value.y < this.point.y) {
            this.extent.y = this.extent.y - (value.x - this.point.y);
            this.point.y = value.y;
        }
        if (value.x > this.point.x + this.extent.x) {
            this.extent.x = value.x - this.point.x;
        }
        if (value.y > this.point.y + this.extent.y) {
            this.extent.y = value.y - this.point.y;
        }
    };
    Rect.prototype.inflate = function (x, y) {
        if (x === void 0) { x = 1; }
        if (y === void 0) { y = 1; }
        this.point.x -= x;
        this.extent.x += 2 * x;
        this.point.y -= y;
        this.extent.y += 2 * y;
        return this;
    };
    return Rect;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_image_resource__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resources_json_resource__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_xml_resource__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resources_tiled_tiled_tmx_resource__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_tiled_tiled_tsx_resource__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceManager; });










/**
 * A basic resource loading manager with api for requesting
 * resources by file name. Uses registered types and file extension
 * matching to create and load resources.
 */
var ResourceManager = (function () {
    function ResourceManager(http) {
        this.http = http;
        this._cache = {};
        this._types = {
            'png': __WEBPACK_IMPORTED_MODULE_2__resources_image_resource__["a" /* ImageResource */],
            'json': __WEBPACK_IMPORTED_MODULE_3__resources_json_resource__["a" /* JSONResource */],
            'xml': __WEBPACK_IMPORTED_MODULE_4__resources_xml_resource__["a" /* XMLResource */],
            'tmx': __WEBPACK_IMPORTED_MODULE_5__resources_tiled_tiled_tmx_resource__["a" /* TiledTMXResource */],
            'tsx': __WEBPACK_IMPORTED_MODULE_6__resources_tiled_tiled_tsx_resource__["a" /* TiledTSXResource */],
            '': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */],
            'mp3': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */],
            'm4a': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */],
            'aac': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */],
            'ogg': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */],
            'wav': __WEBPACK_IMPORTED_MODULE_7__resources_audio_resource__["a" /* AudioResource */]
        };
    }
    /**
     * Register a custom resource class type
     * @param extension The extension without any period
     * @param type The class constructor function
     */
    ResourceManager.prototype.registerType = function (extension, type) {
        this._types[extension] = type;
    };
    ResourceManager.prototype.getResourceExtension = function (url) {
        var index = url.lastIndexOf('.');
        if (index === -1 || index <= url.lastIndexOf('/')) {
            return '';
        }
        return url.substr(index + 1);
    };
    ResourceManager.prototype.create = function (typeConstructor, data) {
        if (typeof typeConstructor !== 'function') {
            throw new Error(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* errors */].INVALID_ARGUMENTS);
        }
        return new typeConstructor(null, data);
    };
    /**
     * Load a single resource as the given resource type constructor.
     */
    ResourceManager.prototype.loadAsType = function (source, resourceType) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!source || !resourceType) {
                return reject(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* errors */].INVALID_ARGUMENTS);
            }
            var resource = _this._cache[source];
            if (resource && resource.data) {
                return resolve(resource);
            }
            else if (!resource) {
                resource = _this._cache[source] = new resourceType(source, null);
            }
            resource
                .fetch(source)
                .then(function () { return resolve(resource); })
                .catch(function (e) { return reject(e); });
        });
    };
    /**
     * Load one or more resources from a given url or list of urls. The type of each resource is determined
     * by matching of its filename against the list of known resource types.
     *
     * @returns An array of IResource objects.
     */
    ResourceManager.prototype.load = function (sources) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var results = [];
            var loadQueue = 0;
            var errors = 0;
            if (!__WEBPACK_IMPORTED_MODULE_0_underscore__["isArray"](sources)) {
                sources = [sources];
            }
            function _checkDone() {
                if (loadQueue === 0) {
                    return (errors === 0) ? resolve(results) : reject(errors + ' resources failed to load');
                }
            }
            var _loop_1 = function (i) {
                var src = sources[i];
                var extension = _this.getResourceExtension(src);
                var type = _this._types[extension];
                if (!type) {
                    errors++;
                    return "continue";
                }
                loadQueue++;
                _this
                    .loadAsType(src, _this._types[extension])
                    .then(function (resource) {
                    loadQueue--;
                    _checkDone();
                    resource.extension = extension;
                    results.push(resource);
                })
                    .catch(function (e) {
                    console.log("failed to load resource (" + src + ") with error: " + e);
                    errors++;
                    loadQueue--;
                    _checkDone();
                });
            };
            for (var i = 0; i < sources.length; i++) {
                _loop_1(i);
            }
            _checkDone();
        });
    };
    return ResourceManager;
}());
ResourceManager = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"]])
], ResourceManager);



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pow_core_behavior__ = __webpack_require__(162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneObjectBehavior; });

/** Simplest component that is hosted by an object in a scene. */
var SceneObjectBehavior = (function (_super) {
    __extends(SceneObjectBehavior, _super);
    function SceneObjectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SceneObjectBehavior;
}(__WEBPACK_IMPORTED_MODULE_0__pow_core_behavior__["a" /* Behavior */]));



/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });

var LoadingService = (function () {
    function LoadingService() {
        /* @internal */
        this._loading$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"](true);
        /**
         * Observable that emits when the boolean value of loading changes.
         */
        this.loading$ = this._loading$;
        /* @internal */
        this._title$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('');
        this.title$ = this._title$;
        /* @internal */
        this._message$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["BehaviorSubject"]('');
        this.message$ = this._message$;
    }
    Object.defineProperty(LoadingService.prototype, "loading", {
        /**
         * Set the loading state of the application
         * @param value
         */
        set: function (value) {
            this._loading$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingService.prototype, "title", {
        set: function (value) {
            this._title$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingService.prototype, "message", {
        set: function (value) {
            this._message$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    return LoadingService;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatService; });





var CombatService = (function () {
    function CombatService(resourceLoader) {
        this.resourceLoader = resourceLoader;
        this._combatMap$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        this.combatMap$ = this._combatMap$;
    }
    CombatService.prototype.loadMap = function (combatZone) {
        var _this = this;
        var mapUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__["a" /* getMapUrl */])('combat');
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromPromise(this.resourceLoader.load(mapUrl)
            .then(function (maps) {
            if (!maps[0] || !maps[0].data) {
                return null;
            }
            var result = maps[0];
            // Hide all layers that don't correspond to the current combat zone
            result.layers.forEach(function (l) {
                l.visible = (l.name === combatZone);
            });
            _this._combatMap$.next(result);
            return result;
        }));
    };
    CombatService.prototype.loadEncounter = function (encounter) {
        return this.loadMap(encounter.zone).map(function () { return encounter; });
    };
    //
    // Combat API helpers
    //
    CombatService.prototype.isDefeated = function (test) {
        return !test || test.hp <= 0;
    };
    // Chance to hit = (BASE_CHANCE_TO_HIT + PLAYER_HIT_PERCENT) - EVASION
    CombatService.prototype.rollHit = function (attacker, defender) {
        var roll = __WEBPACK_IMPORTED_MODULE_4_underscore__["random"](0, 200);
        var attackerEvasion = this.getSpeed(attacker);
        var defenderEvasion = this.getSpeed(defender);
        var favorDodge = attackerEvasion < defenderEvasion;
        var chance = favorDodge ? 180 : 120; // TODO: Some real calculation here
        if (roll === 200) {
            return false;
        }
        if (roll === 0) {
            return true;
        }
        return roll <= chance;
    };
    CombatService.prototype.getSpeed = function (target) {
        return target.speed;
    };
    /**
     * One combatant attacks another!
     *
     * - sum the base attack and a weapon to get damage
     * - sum the base defense and all the armors to get defense
     * - damage = attack - defense with a minimum value of 1 if a hit lands
     *
     * @returns {number} The damage value to apply to the defender.
     */
    CombatService.prototype.attackCombatant = function (attacker, defender) {
        var attackStrength = this.getAttack(attacker);
        var defense = this.getDefense(defender);
        var amount = attackStrength - defense;
        var damage = this.varyDamage(amount);
        if (this.rollHit(attacker, defender)) {
            return Math.ceil(damage);
        }
        return 0;
    };
    /**
     * Determine the total defense value of this character including all equipped accessories and armor
     */
    CombatService.prototype.getDefense = function (member) {
        var equipped = member;
        var shieldDefense = equipped.shield ? equipped.shield.defense : 0;
        var armorDefense = equipped.armor ? equipped.armor.defense : 0;
        var bootsDefense = equipped.boots ? equipped.boots.defense : 0;
        var helmDefense = equipped.helm ? equipped.helm.defense : 0;
        var accessoryDefense = equipped.accessory ? equipped.accessory.defense : 0;
        return member.defense + shieldDefense + armorDefense + bootsDefense + helmDefense + accessoryDefense;
    };
    /**
     * The total attack strength of this combatant including any weapons
     */
    CombatService.prototype.getAttack = function (combatant) {
        return this.getWeaponStrength(combatant) + combatant.attack;
    };
    CombatService.prototype.getMagic = function (combatant) {
        return combatant.magic;
    };
    CombatService.prototype.getWeaponStrength = function (combatant) {
        var equipped = combatant;
        return equipped.weapon ? equipped.weapon.attack : 0;
    };
    /**
     * Given a base amount of damage, vary the output to be somewhere between 80% and 120%
     * of the input.
     */
    CombatService.prototype.varyDamage = function (amount) {
        var max = amount * 1.2;
        var min = amount * 0.8;
        return Math.max(1, Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return CombatService;
}());
CombatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__["a" /* ResourceManager */]])
], CombatService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object_behavior__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow_core_resources_tiled_tiled_tmx_resource__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TiledFeatureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapFeatureComponent; });









var TiledFeatureComponent = (function (_super) {
    __extends(TiledFeatureComponent, _super);
    function TiledFeatureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._feature$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        /**
         * Observable of feature data.
         */
        _this.feature$ = _this._feature$;
        _this._active$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](false);
        _this.active$ = _this._active$;
        return _this;
    }
    Object.defineProperty(TiledFeatureComponent.prototype, "feature", {
        /**
         * Write-only feature input.
         */
        set: function (value) {
            this._feature$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TiledFeatureComponent.prototype, "properties", {
        get: function () {
            return this._feature$.value ? (this._feature$.value.properties || {}) : {};
        },
        enumerable: true,
        configurable: true
    });
    TiledFeatureComponent.prototype.assertFeature = function () {
        if (!this._feature$.value || !this.properties) {
            throw new Error('feature lacks valid data or properties');
        }
    };
    Object.defineProperty(TiledFeatureComponent.prototype, "active", {
        set: function (value) {
            this._active$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    TiledFeatureComponent.prototype.enter = function (object) {
        this.assertFeature();
        this.active = true;
        return true;
    };
    TiledFeatureComponent.prototype.exit = function (object) {
        this.assertFeature();
        this.active = false;
        return true;
    };
    return TiledFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object_behavior__["a" /* TileObjectBehavior */]));

__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], TiledFeatureComponent.prototype, "active", null);
/**
 * A component that defines the functionality of a map feature.
 */
var MapFeatureComponent = (function (_super) {
    __extends(MapFeatureComponent, _super);
    function MapFeatureComponent(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.onClose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        _this._featureComponent$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["ReplaySubject"](1);
        _this._feature$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        _this.feature$ = _this._feature$;
        _this.type$ = _this.feature$.map(function (f) { return f.type; });
        _this.gameFeatureObject$ = _this.feature$
            .combineLatest(_this._featureComponent$, function (data, component) {
            if (!data || !_this.tiledMap) {
                return null;
            }
            var options = Object.assign({}, data.properties || {}, {
                type: data.type,
                x: Math.round(data.x / _this.tiledMap.tilewidth),
                y: Math.round(data.y / _this.tiledMap.tileheight)
            });
            var result = new __WEBPACK_IMPORTED_MODULE_0__scene_game_feature_object__["a" /* GameFeatureObject */](options);
            result.addBehavior(component);
            return result;
        });
        /**
         * Observable of whether this feature is hidden/inactive by its unique ID
         */
        _this.enabled$ = _this._feature$
            .switchMap(function (f) {
            // If there's no unique ID it can't be disabled
            if (!f || !f.properties || !f.properties.id) {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].of(undefined);
            }
            // Select just the
            return _this.store.select(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_selectors__["m" /* getGameKey */])(f.properties.id));
        })
            .map(function (data) { return data !== true; });
        return _this;
    }
    Object.defineProperty(MapFeatureComponent.prototype, "feature", {
        get: function () {
            return this._feature$.value;
        },
        set: function (value) {
            this._feature$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    MapFeatureComponent.prototype.toString = function () {
        var featureData = this._feature$.value;
        if (featureData) {
            return "[TiledTMXFeature] (name:" + featureData.name + ") (id:" + featureData.properties.id + ")";
        }
        return _super.prototype.toString.call(this);
    };
    MapFeatureComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.featureQuery.length > 0) {
            this._featureComponent$.next(this.featureQuery.first);
        }
        this._hostSubscription = this.gameFeatureObject$.do(function (featureObject) {
            _this.disconnectHost();
            _this.host = featureObject;
            __WEBPACK_IMPORTED_MODULE_4__services_game_world__["a" /* GameWorld */].get().mark(_this.host);
            _this.scene.addObject(_this.host);
        }).subscribe();
    };
    MapFeatureComponent.prototype.disconnectHost = function () {
        if (this.host) {
            if (this.scene) {
                this.scene.removeObject(this.host);
            }
            __WEBPACK_IMPORTED_MODULE_4__services_game_world__["a" /* GameWorld */].get().erase(this.host);
            this.host.destroy();
            this.host = null;
        }
    };
    MapFeatureComponent.prototype.ngOnDestroy = function () {
        if (this._hostSubscription) {
            this._hostSubscription.unsubscribe();
            this._hostSubscription = null;
        }
        this.disconnectHost();
    };
    return MapFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object_behavior__["a" /* TileObjectBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MapFeatureComponent.prototype, "feature", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__game_pow_core_resources_tiled_tiled_tmx_resource__["a" /* TiledTMXResource */])
], MapFeatureComponent.prototype, "tiledMap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__game_pow2_scene_scene__["a" /* Scene */])
], MapFeatureComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChildren"])('comp'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["QueryList"])
], MapFeatureComponent.prototype, "featureQuery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"])
], MapFeatureComponent.prototype, "onClose", void 0);
MapFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'map-feature',
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(324)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */]])
], MapFeatureComponent);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_spatial_database__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_events__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scene; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.id = "scene-" + Scene.sceneCount++;
        _this.db = new __WEBPACK_IMPORTED_MODULE_1__scene_spatial_database__["a" /* SceneSpatialDatabase */]();
        _this.options = {};
        _this._objects = [];
        _this._views = [];
        _this.world = null;
        _this.fps = 0;
        _this.time = 0;
        _this.paused = false;
        _this.options = __WEBPACK_IMPORTED_MODULE_0_underscore__["defaults"](options || {}, {
            debugRender: false
        });
        return _this;
    }
    Scene.prototype.destroy = function () {
        var i;
        if (this.world) {
            this.world.erase(this);
        }
        var l = this._objects.length;
        for (i = 0; i < l; i++) {
            this.removeObject(this._objects[i], true);
        }
        l = this._views.length;
        for (i = 0; i < l; i++) {
            this.removeView(this._views[i]);
        }
        this.paused = true;
    };
    // IWorldObject
    // -----------------------------------------------------------------------------
    Scene.prototype.onAddToWorld = function (world) {
        world.time.addObject(this);
    };
    Scene.prototype.onRemoveFromWorld = function (world) {
        world.time.removeObject(this);
    };
    // IProcessObject
    // -----------------------------------------------------------------------------
    Scene.prototype.tick = function (elapsed) {
        if (this.paused) {
            return;
        }
        var l = this._objects.length;
        for (var i = 0; i < l; i++) {
            if (this._objects[i]) {
                this._objects[i].tick(elapsed);
            }
        }
    };
    Scene.prototype.processFrame = function (elapsed) {
        var i;
        if (this.paused) {
            return;
        }
        this.time = this.world.time.time;
        // Interpolate objects.
        var l = this._objects.length;
        for (i = 0; i < l; i++) {
            var o = this._objects[i];
            if (o.interpolateTick) {
                o.interpolateTick(elapsed);
            }
        }
        // Render frame.
        l = this._views.length;
        for (i = 0; i < l; i++) {
            this._views[i].render(elapsed);
        }
        // Update FPS
        var currFPS = elapsed ? 1000 / elapsed : 0;
        this.fps += (currFPS - this.fps) / 10;
    };
    // Object add/remove helpers.
    // -----------------------------------------------------------------------------
    Scene.prototype.removeIt = function (property, object) {
        var _this = this;
        // Debugging Aid:
        // console.info(`Scene (${this.id}) - ${object._uid} = ${object}`);
        var removed = false;
        this[property] = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](this[property], function (obj) {
            if (object && obj && obj._uid === object._uid) {
                _this.db.removeSpatialObject(obj);
                if (obj.onRemoveFromScene) {
                    obj.onRemoveFromScene(_this);
                }
                if (_this.world) {
                    _this.world.erase(obj);
                }
                delete obj.scene;
                removed = true;
                return false;
            }
            else if (!obj) {
                return false;
            }
            return true;
        });
        return removed;
    };
    Scene.prototype.addIt = function (property, object) {
        // Debugging Aid:
        // console.info(`Scene (${this.id}) + ${object._uid} = ${object}`);
        // Remove object from any scene it might already be in.
        if (object.scene) {
            object.scene.removeIt(property, object);
        }
        // Check that we're not adding this twice (though, I suspect the above
        // should make that pretty unlikely)
        if (__WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this[property], { _uid: object._uid }).length > 0) {
            throw new Error('Object added to scene twice');
        }
        this[property].push(object);
        // Mark it in the scene's world.
        if (this.world) {
            this.world.mark(object);
        }
        // Add to the scene's spatial database
        this.db.addSpatialObject(object);
        // Mark it in this scene, and trigger the onAdd
        object.scene = this;
        if (object.onAddToScene) {
            object.onAddToScene(this);
        }
        return true;
    };
    Scene.prototype.findIt = function (property, object) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this[property], { _uid: object._uid });
    };
    // View management
    // -----------------------------------------------------------------------------
    Scene.prototype.addView = function (view) {
        return this.addIt('_views', view);
    };
    Scene.prototype.removeView = function (view) {
        return this.removeIt('_views', view);
    };
    Scene.prototype.findView = function (view) {
        return !!this.findIt('_views', view);
    };
    Scene.prototype.getViewOfType = function (type) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this._views, function (v) {
            return v instanceof type;
        });
    };
    // SceneObject management
    // -----------------------------------------------------------------------------
    Scene.prototype.addObject = function (object) {
        return this.addIt('_objects', object);
    };
    Scene.prototype.removeObject = function (object, destroy) {
        destroy = typeof destroy === 'undefined' ? true : !!destroy;
        var o = object;
        var removed = this.removeIt('_objects', object);
        if (o && destroy && o.destroy) {
            o.destroy();
        }
        return removed;
    };
    Scene.prototype.findObject = function (object) {
        return !!this.findIt('_objects', object);
    };
    Scene.prototype.componentByType = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            var c = o.findBehavior(type);
            if (c) {
                return c;
            }
        }
        return null;
    };
    Scene.prototype.componentsByType = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        var results = [];
        for (var i = 0; i < l; i++) {
            var o = values[i];
            var c = o.findBehaviors(type);
            if (c) {
                results = results.concat(c);
            }
        }
        return results;
    };
    Scene.prototype.objectsByName = function (name) {
        var values = this._objects;
        var l = this._objects.length;
        var results = [];
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o.name === name) {
                results.push(o);
            }
        }
        return results;
    };
    Scene.prototype.objectByName = function (name) {
        var values = this._objects;
        var l = this._objects.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o.name === name) {
                return o;
            }
        }
        return null;
    };
    Scene.prototype.objectsByType = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        var results = [];
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o instanceof type) {
                results.push(o);
            }
        }
        return results;
    };
    Scene.prototype.objectByType = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o instanceof type) {
                return o;
            }
        }
        return null;
    };
    Scene.prototype.objectsByComponent = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        var results = [];
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o.findBehavior(type)) {
                results.push(o);
            }
        }
        return results;
    };
    Scene.prototype.objectByComponent = function (type) {
        var values = this._objects;
        var l = this._objects.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o.findBehavior(type)) {
                return o;
            }
        }
        return null;
    };
    Scene.prototype.toString = function () {
        return this.constructor.name ? this.constructor.name + " (" + this.id + ")" : this.id;
    };
    return Scene;
}(__WEBPACK_IMPORTED_MODULE_2__pow_core_events__["a" /* Events */]));

Scene.sceneCount = 0;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(126);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(75);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_core_state__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatMachineState; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * CombatMachineState is set when the player transitions in to a combat
 * encounter.  This can be any type of triggered encounter, from
 * the map or a feature interaction, or anything else.
 */
var CombatMachineState = (function (_super) {
    __extends(CombatMachineState, _super);
    function CombatMachineState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CombatMachineState;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_core_state__["a" /* State */]));



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_state_game_state_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPGGame; });








var RPGGame = RPGGame_1 = (function () {
    function RPGGame(loader, store) {
        this.loader = loader;
        this.store = store;
    }
    RPGGame.getHPForLevel = function (level, model) {
        return Math.floor(model.basedefense * Math.pow(level, 1.1)) + (model.basedefense * 2);
    };
    RPGGame.create = function (type, name) {
        var HERO_DEFAULTS = {
            eid: 'invalid-hero',
            type: type,
            name: name,
            level: 1,
            exp: 0,
            baseattack: 0,
            basespeed: 0,
            basemagic: 0,
            basedefense: 0
        };
        var character = null;
        switch (type) {
            case 'warrior':
                character = __WEBPACK_IMPORTED_MODULE_4_underscore__["extend"]({}, HERO_DEFAULTS, {
                    eid: 'warrior-123',
                    icon: 'warrior-male.png',
                    baseattack: 10,
                    basespeed: 2,
                    basemagic: 1,
                    basedefense: 7
                });
                break;
            case 'healer':
                character = __WEBPACK_IMPORTED_MODULE_4_underscore__["extend"]({}, HERO_DEFAULTS, {
                    eid: 'lifemage-123',
                    icon: 'magician-female.png',
                    baseattack: 1,
                    basespeed: 6,
                    basemagic: 9,
                    basedefense: 4
                });
                break;
            case 'ranger':
                character = __WEBPACK_IMPORTED_MODULE_4_underscore__["extend"]({}, HERO_DEFAULTS, {
                    eid: 'ranger-123',
                    icon: 'ranger-female.png',
                    baseattack: 3,
                    basespeed: 10,
                    basemagic: 2,
                    basedefense: 5,
                });
                break;
            case 'mage':
                character = __WEBPACK_IMPORTED_MODULE_4_underscore__["extend"]({}, HERO_DEFAULTS, {
                    eid: 'deathmage-123',
                    icon: 'magician-male.png',
                    baseattack: 2,
                    basespeed: 10,
                    basemagic: 4,
                    basedefense: 4,
                });
                break;
            default:
                throw new Error('Unknown character class: ' + type);
        }
        var hp = RPGGame_1.getHPForLevel(1, character);
        character = __WEBPACK_IMPORTED_MODULE_4_underscore__["extend"](character, {
            maxhp: hp,
            hp: hp,
            defense: character.basedefense,
            speed: character.basespeed,
            attack: character.baseattack,
            magic: character.basemagic,
        });
        return character;
    };
    /**
     * Initialize the game and resolve a promise that indicates whether the game
     * is new or was loaded from save data.  Resolves with true if the game is new.
     */
    RPGGame.prototype.initGame = function (load) {
        var _this = this;
        if (load === void 0) { load = !!localStorage.getItem(__WEBPACK_IMPORTED_MODULE_6__models_game_state_game_state_service__["a" /* GameStateService */].STATE_KEY); }
        return new Promise(function (resolve, reject) {
            if (load) {
                // Set the root game state
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["i" /* GameStateLoadAction */]());
                resolve(false);
            }
            else {
                var warrior = RPGGame_1.create('warrior', 'Warrior');
                var ranger = RPGGame_1.create('ranger', 'Ranger');
                var healer = RPGGame_1.create('healer', 'Mage');
                var initialState = {
                    party: __WEBPACK_IMPORTED_MODULE_7_immutable__["List"]([warrior.eid, ranger.eid, healer.eid]),
                    inventory: __WEBPACK_IMPORTED_MODULE_7_immutable__["List"](),
                    battleCounter: 0,
                    keyData: __WEBPACK_IMPORTED_MODULE_7_immutable__["Map"](),
                    gold: 200,
                    combatZone: '',
                    location: 'town',
                    position: { x: 12, y: 8 },
                    shipPosition: { x: 0, y: 0 }
                };
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["d" /* GameStateNewAction */](initialState));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__["a" /* EntityAddBeingAction */](warrior));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__["a" /* EntityAddBeingAction */](ranger));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__["a" /* EntityAddBeingAction */](healer));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["a" /* GameStateTravelAction */](initialState));
                resolve(true);
            }
        });
    };
    return RPGGame;
}());
RPGGame = RPGGame_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__game_pow_core_resource_manager__["a" /* ResourceManager */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], RPGGame);

var RPGGame_1;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return errors; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
/**
 * Constant strings for use in throwing Error with messages.  Used to
 * make checking thrown errors doable without an explosion of Error subclasses.
 */
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */ var errors = {
    /**
     * An invalid combination of arguments was given to a function
     */
    INVALID_ARGUMENTS: 'invalid arguments',
    /**
     * A division by zero would have occurred
     */
    DIVIDE_ZERO: 'divide by zero operation',
    /**
     * Something called on a base class that doesn't implement the desired functionality
     */
    CLASS_NOT_IMPLEMENTED: 'must be implemented in a subclass',
    /**
     * The operation is not supported by the implementation.
     */
    UNSUPPORTED_OPERATION: 'this operation is unsupported by the implementation',
    REQUIRED_ARGUMENT: 'argument must be valid',
    ALREADY_EXISTS: 'already exists and would overwrite existing value',
    /**
     * A specified index is out of the valid range for an array it applies to.
     */
    INDEX_OUT_OF_RANGE: 'index out of range',
    /**
     * An item is not of the expected type or value.
     */
    INVALID_ITEM: 'invalid item type or value',
    /**
     * A component failed to register.
     */
    COMPONENT_REGISTER_FAIL: 'component failed to register with host entity'
};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatEncounterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CombatEncounterErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CombatEncounterReadyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CombatAttackAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatVictoryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CombatVictoryCompleteAction; });

//
// Fixed Encounter Actions
//
var CombatEncounterAction = (function () {
    function CombatEncounterAction(payload) {
        this.payload = payload;
        this.type = CombatEncounterAction.typeId;
    }
    return CombatEncounterAction;
}());

CombatEncounterAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_ENCOUNTER');
var CombatEncounterErrorAction = (function () {
    function CombatEncounterErrorAction(payload) {
        this.payload = payload;
        this.type = CombatEncounterErrorAction.typeId;
    }
    return CombatEncounterErrorAction;
}());

CombatEncounterErrorAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_ENCOUNTER_ERROR');
var CombatEncounterReadyAction = (function () {
    function CombatEncounterReadyAction(payload) {
        this.payload = payload;
        this.type = CombatEncounterReadyAction.typeId;
    }
    return CombatEncounterReadyAction;
}());

CombatEncounterReadyAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_ENCOUNTER_READY');
//
// Attack Actions
//
var CombatAttackAction = (function () {
    function CombatAttackAction(payload) {
        this.payload = payload;
        this.type = CombatAttackAction.typeId;
    }
    return CombatAttackAction;
}());

CombatAttackAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_ATTACK');
/** Async event that notifies the user of combat victory and updates the game-state party tree. */
var CombatVictoryAction = (function () {
    function CombatVictoryAction(payload) {
        this.payload = payload;
        this.type = CombatVictoryAction.typeId;
    }
    return CombatVictoryAction;
}());

CombatVictoryAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_VICTORY');
/** Dispatched after UI animation side-effects are complete */
var CombatVictoryCompleteAction = (function () {
    function CombatVictoryCompleteAction(payload) {
        this.payload = payload;
        this.type = CombatVictoryCompleteAction.typeId;
    }
    return CombatVictoryCompleteAction;
}());

CombatVictoryCompleteAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('COMBAT_VICTORY_DONE');


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SPREADSHEET_ID; });
/* harmony export (immutable) */ __webpack_exports__["b"] = instantiateEntity;
/* harmony export (immutable) */ __webpack_exports__["c"] = entityId;

/**
 * The Google Spreadsheet ID to load game data from.  This must be a published
 * google spreadsheet key.
 * @type {string} The google spreadsheet ID
 */
var SPREADSHEET_ID = '1LXSRyupQanOYeZv-h7lgSwaAzB-TxwfDPFJyZqnaewc';
/**
 * Instantiate an item from its template and assign it a unique eid value.
 * @param from The ITemplateId to stamp out a copy of
 * @param values Any optional values to assign to the instance during creation
 */
function instantiateEntity(from, values) {
    return Object.assign({
        eid: entityId(from.id),
    }, from, values || {});
}
/** Generate a UUID for a given input template ID that is unique across all instances of the same template base */
function entityId(id) {
    return id + "-" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* newGuid */])();
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_core_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_pow2_tile_tile_map_view__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__states_combat_machine__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__combat_map_entity__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatComponent; });













var CombatComponent = (function (_super) {
    __extends(CombatComponent, _super);
    function CombatComponent(game, notify, loadingService, store, world) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.notify = notify;
        _this.loadingService = loadingService;
        _this.store = store;
        _this.world = world;
        _this.combat = _this;
        _this.scene = new __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__["a" /* Scene */]();
        /**
         * A pointing UI element that can be attached to `SceneObject`s to attract attention
         * @type {null}
         */
        _this.pointer = null;
        /**
         * Available menu items for selection.
         */
        _this.items = [];
        /**
         * Damages displaying on screen.
         * @type {Array}
         */
        _this.damages = [];
        /**
         * Mouse hook for capturing input with world and screen coordinates.
         */
        _this.mouse = null;
        _this.world.mark(_this.scene);
        return _this;
    }
    CombatComponent.prototype.ngOnDestroy = function () {
        // TODO: Got everything here?
        this.world.erase(this.scene);
        this.world.time.removeObject(this);
        this.scene.removeView(this);
        this.pointer = null;
        this.damages = [];
    };
    CombatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas = this.canvasElementRef.nativeElement;
        if (this.camera) {
            this.camera.point.zero();
            this.camera.extent.set(25, 25);
        }
        this.scene.addView(this);
        setTimeout(function () { return _this._onResize(); }, 1);
        // this._bindRenderCombat();
        this.world.time.addObject(this);
        this._bindRenderCombat();
    };
    //
    // Events
    //
    CombatComponent.prototype.onAddToScene = function (scene) {
        _super.prototype.onAddToScene.call(this, scene);
        if (scene.world && scene.world.input) {
            this.mouse = scene.world.input.mouseHook(this, 'combat');
        }
    };
    CombatComponent.prototype.onRemoveFromScene = function (scene) {
        if (scene.world && scene.world.input) {
            scene.world.input.mouseUnhook('combat');
        }
    };
    //
    // Time Processing
    //
    CombatComponent.prototype.tick = function (elapsed) {
        if (!this || !this.pointer || !this.pointer.object) {
            return;
        }
        var targetPos = new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](this.pointer.object.point);
        targetPos.y = (targetPos.y - this.camera.point.y) + this.pointer.offset.y;
        targetPos.x = (targetPos.x - this.camera.point.x) + this.pointer.offset.x;
        var screenPos = this.worldToScreen(targetPos, this.cameraScale);
        var el = this.pointer.element.nativeElement;
        el.style.left = screenPos.x + "px";
        el.style.top = screenPos.y + "px";
    };
    /**
     * Update the camera for this frame.
     */
    CombatComponent.prototype.processCamera = function () {
        this.cameraComponent = this.map.camera;
        _super.prototype.processCamera.call(this);
    };
    /**
     * Render the tile map, and any features it has.
     */
    CombatComponent.prototype.renderFrame = function (elapsed) {
        this.clearRect();
        this.map.renderFrame(this, elapsed);
        return this;
    };
    //
    // API
    //
    /**
     * Apply damage visual effect to a SceneObject with a given value
     * @param to The SceneObject to visually damage
     * @param value The damage value (negative is considered healing, 0 is miss)
     */
    CombatComponent.prototype.applyDamage = function (to, value) {
        var targetPos = new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](to.point);
        targetPos.y -= (this.camera.point.y + 1.25);
        targetPos.x -= this.camera.point.x;
        var screenPos = this.worldToScreen(targetPos, this.cameraScale);
        screenPos.add(this.canvasElementRef.nativeElement.offsetLeft, this.canvasElementRef.nativeElement.offsetTop);
        this.damages.push({
            timeout: new Date().getTime() + 5 * 1000,
            value: Math.abs(value),
            classes: {
                miss: value === 0,
                heal: value < 0
            },
            position: screenPos
        });
    };
    /**
     * Mouse input
     */
    CombatComponent.prototype._onClick = function (e) {
        // console.log("clicked at " + this.mouse.world);
        var hits = [];
        __WEBPACK_IMPORTED_MODULE_1__game_pow2_core_input__["a" /* PowInput */].mouseOnView(e, this, this.mouse);
        if (this.scene.db.queryPoint(this.mouse.world, __WEBPACK_IMPORTED_MODULE_7__scene_game_entity_object__["a" /* GameEntityObject */], hits)) {
            this.scene.trigger('click', this.mouse, hits);
            e.stopImmediatePropagation();
            return false;
        }
    };
    /**
     * Bind to combat events and reflect them in the UI.
     * @private
     */
    CombatComponent.prototype._bindRenderCombat = function () {
        var _this = this;
        this.machine.on('combat:attack', function (data) {
            var _done = _this.machine.notifyWait();
            var msg = '';
            var a = data.attacker.model.name;
            var b = data.defender.model.name;
            if (data.damage > 0) {
                msg = a + " attacked " + b + " for " + data.damage + " damage!";
            }
            else if (data.damage < 0) {
                msg = a + " healed " + b + " for " + Math.abs(data.damage) + " hit points";
            }
            else {
                msg = a + " attacked " + b + ", and MISSED!";
            }
            _this.applyDamage(data.defender, data.damage);
            _this.notify.show(msg, _done);
        });
        this.machine.on('combat:run', function (data) {
            var _done = _this.machine.notifyWait();
            var msg = data.player.model.name;
            if (data.success) {
                msg += ' bravely ran away!';
            }
            else {
                msg += ' failed to escape!';
            }
            _this.notify.show(msg, _done);
        });
        this.machine.on('combat:defeat', function (data) {
            var done = _this.machine.notifyWait();
            _this.notify.show('Your entity was defeated...', function () {
                _this.game.initGame().then(done);
            }, 0);
        });
    };
    return CombatComponent;
}(__WEBPACK_IMPORTED_MODULE_8__game_pow2_tile_tile_map_view__["a" /* TileMapView */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__["a" /* Scene */])
], CombatComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CombatComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_11__states_combat_machine__["a" /* CombatStateMachineComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_11__states_combat_machine__["a" /* CombatStateMachineComponent */])
], CombatComponent.prototype, "machine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CombatComponent.prototype, "damages", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('combatCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CombatComponent.prototype, "canvasElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__combat_map_entity__["b" /* CombatMapComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__combat_map_entity__["b" /* CombatMapComponent */])
], CombatComponent.prototype, "map", void 0);
CombatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rpg-combat',
        styles: [__webpack_require__(339)],
        template: __webpack_require__(319),
        host: {
            '(window:resize)': '_onResize($event)',
            '(click)': '_onClick($event)'
        }
    })
    /**
     * Render and provide input for a combat encounter.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_9__components_loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3__services_game_world__["a" /* GameWorld */]])
], CombatComponent);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* unused harmony export NAME */
/* unused harmony export GAME_ROOT */
/* harmony export (immutable) */ __webpack_exports__["a"] = getMapUrl;
/* harmony export (immutable) */ __webpack_exports__["d"] = getSoundEffectUrl;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return data; });
/* harmony export (immutable) */ __webpack_exports__["b"] = registerSprites;
/* harmony export (immutable) */ __webpack_exports__["e"] = getSpriteMeta;
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var NAME = 'core';
/**
 * Specified root path.  Used when loading game asset files, to support cross-domain usage.
 */
var GAME_ROOT = 'assets/';
function getMapUrl(name) {
    return GAME_ROOT + "maps/" + name + ".tmx";
}
function getSoundEffectUrl(name, extension) {
    if (extension === void 0) { extension = 'wav'; }
    return GAME_ROOT + "sounds/" + name + "." + extension;
}
var data = {
    sprites: {}
};
/**
 * Register a dictionary of sprite meta data.  This is for automatically
 * generated sprite sheets, and only defaults to setting information if
 * it has not already been set by a call to describeSprites.
 * @deprecated TODO: remove this by updating code to reference the data in ngrx/store
 */
function registerSprites(name, value) {
    for (var prop in value) {
        if (value.hasOwnProperty(prop)) {
            data.sprites[prop] = __WEBPACK_IMPORTED_MODULE_0_underscore__["defaults"](data.sprites[prop] || {}, value[prop]);
        }
    }
}
function getSpriteMeta(name) {
    return data.sprites[name];
}


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TickedBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * A behavior that receives tick and interpolateTick callbacks
 */
var TickedBehavior = (function (_super) {
    __extends(TickedBehavior, _super);
    function TickedBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tickRateMS = 300;
        return _this;
    }
    /**
     * Update the component at a tick interval.
     */
    TickedBehavior.prototype.tick = function (elapsed) {
        // nothing
    };
    /**
     * Interpolate component state between ticks.
     */
    TickedBehavior.prototype.interpolateTick = function (elapsed) {
        // nothing
    };
    return TickedBehavior;
}(__WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_scene_object__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMap; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// TODO: TileMap isn't getting added to Spatial DB properly.  Can't query for it!
// Scene assuming something about the spatial properties on objects?



var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tiles = []; // TODO: TilesetProperties
        _this.bounds = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */](0, 0, 10, 10);
        _this.dirtyLayers = false;
        _this._loaded = false;
        return _this;
    }
    TileMap.prototype.isLoaded = function () {
        return this._loaded;
    };
    TileMap.prototype.loaded = function () {
        this.trigger(TileMap.Events.LOADED, this);
        if (this.scene) {
            this.scene.trigger(TileMap.Events.MAP_LOADED, this);
        }
        this._loaded = true;
    };
    TileMap.prototype.unloaded = function () {
        this.trigger(TileMap.Events.UNLOADED, this);
        if (this.scene) {
            this.scene.trigger(TileMap.Events.MAP_UNLOADED, this);
        }
        this._loaded = false;
    };
    TileMap.prototype.setMap = function (map) {
        var _this = this;
        if (!map /* || !map.isReady() */) {
            return false;
        }
        if (this.map) {
            this.unloaded();
        }
        this.map = map;
        this.bounds = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */](0, 0, this.map.width, this.map.height);
        var idSortedSets = __WEBPACK_IMPORTED_MODULE_0_underscore__["sortBy"](this.map.tilesets, function (o) {
            return o.firstgid;
        });
        this.tiles.length = 0;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](idSortedSets, function (tiles) {
            while (_this.tiles.length < tiles.firstgid) {
                _this.tiles.push(null);
            }
            _this.tiles = _this.tiles.concat(tiles.tiles);
        });
        this.features = __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this.map.layers, { name: 'Features' })[0] || [];
        this.zones = __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this.map.layers, { name: 'Zones' })[0] || [];
        this.loaded();
        return true;
    };
    TileMap.prototype.getLayers = function () {
        return this.map ? this.map.layers : [];
    };
    TileMap.prototype.getLayer = function (name) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this.map.layers, { name: name })[0];
    };
    TileMap.prototype.getTerrain = function (layer, x, y) {
        return this.getTileData(this.getLayer(layer), x, y);
    };
    TileMap.prototype.getTileData = function (layer, x, y) {
        if (!this.map || !layer || !layer.data || !this.bounds.pointInRect(x, y)) {
            return null;
        }
        var terrainIndex = y * this.map.width + x;
        var tileIndex = layer.data[terrainIndex];
        return this.tiles[tileIndex];
    };
    TileMap.prototype.getTileGid = function (layer, x, y) {
        var terrain = this.getLayer(layer);
        if (!this.map || !terrain || !terrain.data || !this.bounds.pointInRect(x, y)) {
            return null;
        }
        var terrainIndex = y * this.map.width + x;
        return terrain.data[terrainIndex];
    };
    TileMap.prototype.getTileMeta = function (gid) {
        if (this.tiles.length <= gid) {
            return null;
        }
        var source = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.map.tilesets, function (t) {
            return t.hasGid(gid);
        });
        if (!source) {
            return null;
        }
        return source.getTileMeta(gid);
    };
    return TileMap;
}(__WEBPACK_IMPORTED_MODULE_1__scene_scene_object__["a" /* SceneObject */]));

TileMap.Events = {
    LOADED: 'loaded',
    UNLOADED: 'unloaded',
    MAP_LOADED: 'map:loaded',
    MAP_UNLOADED: 'map:unloaded'
};


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(472);

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStateService; });





var GameStateService = GameStateService_1 = (function () {
    function GameStateService(loader, store) {
        this.loader = loader;
        this.store = store;
        this._worldMap$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        this.worldMap$ = this._worldMap$;
    }
    /**
     * Load a Tiled TMX Map from a url
     */
    GameStateService.prototype.loadMap = function (name) {
        var _this = this;
        var mapUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__["a" /* getMapUrl */])(name);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].fromPromise(this.loader.load(mapUrl)
            .then(function (maps) {
            _this._worldMap$.next(maps[0]);
            return maps[0];
        }));
    };
    GameStateService.prototype.resetGame = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(10).take(1).map(function () {
            localStorage.removeItem(GameStateService_1.STATE_KEY);
        });
    };
    GameStateService.prototype.hasSaveGame = function () {
        return !!localStorage.getItem(GameStateService_1.STATE_KEY);
    };
    GameStateService.prototype.load = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].interval(10).take(1).map(function () {
            var data = JSON.parse(localStorage.getItem(GameStateService_1.STATE_KEY));
            return data;
        });
    };
    /**
     * Serialize the application state for later loading
     */
    GameStateService.prototype.save = function () {
        return this.store
            .take(1)
            .map(function (state) {
            var jsonData = JSON.stringify(state);
            localStorage.setItem(GameStateService_1.STATE_KEY, jsonData);
            return state;
        });
    };
    return GameStateService;
}());
GameStateService.STATE_KEY = '_angular2PowRPGState';
GameStateService = GameStateService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__["a" /* ResourceManager */],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
], GameStateService);

var GameStateService_1;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_base_player_behavior__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_tile_tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */






var PlayerBehaviorComponent = PlayerBehaviorComponent_1 = (function (_super) {
    __extends(PlayerBehaviorComponent, _super);
    function PlayerBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = null;
        /**
         * Output when a move on the map is completed.
         */
        _this.onCompleteMove = new __WEBPACK_IMPORTED_MODULE_5__angular_core__["EventEmitter"]();
        return _this;
    }
    /**
     * Collide with the rpg tile map features and obstacles.
     */
    PlayerBehaviorComponent.prototype.collideMove = function (x, y, results) {
        if (results === void 0) { results = []; }
        if (this.host.scene && !this.map) {
            this.map = this.host.scene.objectByType(__WEBPACK_IMPORTED_MODULE_3__game_pow2_tile_tile_map__["a" /* TileMap */]);
        }
        var i = 0;
        var collision = this.collider && this.collider.collide(x, y, __WEBPACK_IMPORTED_MODULE_1__scene_game_feature_object__["a" /* GameFeatureObject */], results);
        if (collision) {
            for (i = 0; i < results.length; i++) {
                var o = results[i];
                if (o.passable === true || !o.type) {
                    return false;
                }
                if (__WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](PlayerBehaviorComponent_1.COLLIDE_TYPES, o.type) !== -1) {
                    return true;
                }
            }
        }
        // Iterate over all layers of the map, check point(x,y) and see if the tile
        // has any unpassable attributes set on it.  If any unpassable attributes are
        // found, there is a collision.
        if (this.map) {
            var layers = this.map.getLayers();
            for (i = 0; i < layers.length; i++) {
                var terrain = this.map.getTileData(layers[i], x, y);
                if (!terrain) {
                    continue;
                }
                for (var j = 0; j < this.passableKeys.length; j++) {
                    if (terrain[this.passableKeys[j]] === false) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    /**
     * Called when a complete tick of movement occurs.
     * @param move The move that is now completed.
     */
    PlayerBehaviorComponent.prototype.completeMove = function (move) {
        // HACKS: Need an injection strategy for these behavior components.
        this.host.world.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["r" /* GameStateMoveAction */](move.to));
        this.onCompleteMove.next(move);
        _super.prototype.completeMove.call(this, move);
    };
    return PlayerBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__behaviors_base_player_behavior__["a" /* BasePlayerComponent */]));
PlayerBehaviorComponent.COLLIDE_TYPES = [
    'TempleFeatureComponent',
    'StoreFeatureComponent',
    'DialogFeatureComponent',
    'CombatFeatureComponent',
    'sign'
];
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PlayerBehaviorComponent.prototype, "onCompleteMove", void 0);
PlayerBehaviorComponent = PlayerBehaviorComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'player-behavior',
        template: "<ng-content></ng-content>"
    })
], PlayerBehaviorComponent);

var PlayerBehaviorComponent_1;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameEntityObject; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var GameEntityObject = (function (_super) {
    __extends(GameEntityObject, _super);
    function GameEntityObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'player';
        return _this;
    }
    GameEntityObject.prototype.getSpells = function () {
        console.warn('no spell data available in GameEntityObject.getSpells');
        var spells = [];
        var caster = this.model;
        var userLevel = caster.level;
        var userClass = caster.type;
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](spells, function (spell) {
            return spell.level <= userLevel && __WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](spell.usedby, userClass) !== -1;
        });
    };
    return GameEntityObject;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object__["a" /* TileObject */]));



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameFeatureObject; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var GameFeatureObject = (function (_super) {
    __extends(GameFeatureObject, _super);
    function GameFeatureObject(options) {
        var _this = _super.call(this) || this;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, __WEBPACK_IMPORTED_MODULE_0_underscore__["defaults"]({}, options));
        _this.feature = options;
        _this.point.x = options.x;
        _this.point.y = options.y;
        _this.frame = typeof options.frame !== 'undefined' ? options.frame : 0;
        _this.groups = typeof options.groups === 'string' ? options.groups.split('|') : options.groups;
        return _this;
    }
    return GameFeatureObject;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_tile_object__["a" /* TileObject */]));



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_world_map_features_index__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameTileMap; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */






/**
 * A tile map that supports game feature objects and map.
 */
var GameTileMap = (function (_super) {
    __extends(GameTileMap, _super);
    function GameTileMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameTileMap.prototype.loaded = function () {
        _super.prototype.loaded.call(this);
        this.musicUrl = '';
        if (this.map.properties && this.map.properties.music) {
            this.musicUrl = this.map.properties.music;
        }
        this.buildFeatures();
    };
    GameTileMap.prototype.destroy = function () {
        this.unloaded();
        return _super.prototype.destroy.call(this);
    };
    GameTileMap.prototype.unloaded = function () {
        this.removeFeaturesFromScene();
        _super.prototype.unloaded.call(this);
    };
    GameTileMap.prototype.getFeature = function (name) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.features.objects, function (feature) {
            return feature.name === name;
        });
    };
    GameTileMap.prototype.getEntryPoint = function () {
        // If no point is specified, use the position of the first Portal on the current map
        var portal = __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this.features.objects, { type: 'PortalFeatureComponent' })[0];
        if (portal) {
            return new __WEBPACK_IMPORTED_MODULE_3__game_pow_core_point__["a" /* Point */](portal.x / portal.width, portal.y / portal.height);
        }
        return new __WEBPACK_IMPORTED_MODULE_3__game_pow_core_point__["a" /* Point */](-1, -1);
    };
    // Construct
    GameTileMap.prototype.addFeaturesToScene = function () {
        // _.each(this.features.objects, (obj: any) => {
        //   obj._object = this.createFeatureObject(obj);
        //   if (obj._object) {
        //     this.scene.addObject(obj._object);
        //   }
        // });
    };
    GameTileMap.prototype.removeFeaturesFromScene = function () {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this.features.objects, function (obj) {
            var featureObject = obj._object;
            delete obj._object;
            if (featureObject) {
                featureObject.destroy();
            }
        });
    };
    GameTileMap.prototype.buildFeatures = function () {
        // this.removeFeaturesFromScene();
        // if (this.scene) {
        //   this.addFeaturesToScene();
        // }
        return true;
    };
    GameTileMap.prototype.createFeatureObject = function (tiledObject) {
        var options = __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, tiledObject.properties || {}, {
            tileMap: this,
            type: tiledObject.type,
            x: Math.round(tiledObject.x / this.map.tilewidth),
            y: Math.round(tiledObject.y / this.map.tileheight)
        });
        var object = new __WEBPACK_IMPORTED_MODULE_1__game_feature_object__["a" /* GameFeatureObject */](options);
        if (this.scene && this.scene.world) {
            this.scene.world.mark(object);
        }
        var componentType = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](__WEBPACK_IMPORTED_MODULE_5__routes_world_map_features_index__["a" /* WORLD_MAP_FEATURES */], function (constructor) {
            return constructor.name === tiledObject.type;
        });
        if (tiledObject.type && componentType) {
            var component = new componentType();
            if (!object.addBehavior(component)) {
                throw new Error("Component " + component.name + " failed to connect to host " + this.name);
            }
        }
        return object;
    };
    /**
     * Enumerate the map and target combat zones for a given position on this map.
     * @param at The position to check for a sub-zone in the map
     * @returns {IZoneMatch} The map and target zones that are null if they don't exist
     */
    GameTileMap.prototype.getCombatZones = function (at) {
        var result = {
            map: null,
            target: null,
            targetPoint: at
        };
        if (this.map && this.map.properties && this.map.properties) {
            if (typeof this.map.properties.combatZone !== 'undefined') {
                result.map = this.map.properties.combatZone;
            }
        }
        // Determine which zone and combat type
        var invTileSize = 1 / this.map.tilewidth;
        var zones = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](this.zones.objects, function (z) {
            var x = z.x * invTileSize;
            var y = z.y * invTileSize;
            var w = z.width * invTileSize;
            var h = z.height * invTileSize;
            return {
                bounds: new __WEBPACK_IMPORTED_MODULE_4__game_pow_core_rect__["a" /* Rect */](x, y, w, h),
                name: z.name
            };
        });
        // TODO: This will always get the first zone.  What about overlapping zones?
        var zone = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](zones, function (z) {
            return z.bounds.pointInRect(at) && z.name;
        });
        if (zone) {
            result.target = zone.name;
        }
        return result;
    };
    GameTileMap.prototype.toString = function () {
        return this.map ? this.map.url : 'no-data';
    };
    return GameTileMap;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_map__["a" /* TileMap */]));



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animate__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_pow_core_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sprite_render__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__visibility__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_game_state_game_state_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_combat_combat_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_game_data_game_data_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__models_sprites_sprites_service__ = __webpack_require__(138);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__animate__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_11__components_notification_notification_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__rpg_game__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVICE_PROVIDERS; });
/* unused harmony export ServicesModule */
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

















var SERVICE_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__animate__["a" /* Animate */],
    __WEBPACK_IMPORTED_MODULE_1__rpg_game__["a" /* RPGGame */],
    __WEBPACK_IMPORTED_MODULE_2__game_world__["a" /* GameWorld */],
    __WEBPACK_IMPORTED_MODULE_5__sprite_render__["a" /* SpriteRender */],
    __WEBPACK_IMPORTED_MODULE_8__visibility__["a" /* Visibility */],
    __WEBPACK_IMPORTED_MODULE_11__components_notification_notification_service__["a" /* NotificationService */],
    __WEBPACK_IMPORTED_MODULE_10__models_combat_combat_service__["a" /* CombatService */],
    __WEBPACK_IMPORTED_MODULE_13__models_sprites_sprites_service__["a" /* SpritesService */],
    __WEBPACK_IMPORTED_MODULE_12__models_game_data_game_data_service__["a" /* GameDataService */],
    __WEBPACK_IMPORTED_MODULE_9__models_game_state_game_state_service__["a" /* GameStateService */]
];
var ServicesModule = ServicesModule_1 = (function () {
    function ServicesModule() {
    }
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: SERVICE_PROVIDERS
        };
    };
    return ServicesModule;
}());
ServicesModule = ServicesModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        providers: SERVICE_PROVIDERS,
        imports: [__WEBPACK_IMPORTED_MODULE_4__game_pow_core_index__["a" /* PowCoreModule */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */], __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */]]
    })
], ServicesModule);

var ServicesModule_1;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Promise based resource loading class. Loads from given URL or data.
 */
var Resource = (function () {
    function Resource(url, data) {
        if (url === void 0) { url = null; }
        if (data === void 0) { data = null; }
        this.url = url;
        this.data = data;
    }
    Resource.prototype.load = function (data) {
        return Promise.reject(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].CLASS_NOT_IMPLEMENTED);
    };
    Resource.prototype.fetch = function (url) {
        return Promise.reject(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].CLASS_NOT_IMPLEMENTED);
    };
    return Resource;
}());



/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(462);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pow_core_behavior_host__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneObject; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



/**
 * An object that may exist in a `Scene` and receives time updates.
 */
var SceneObject = (function (_super) {
    __extends(SceneObject, _super);
    function SceneObject(options) {
        var _this = _super.call(this) || this;
        _this._uid = "scene-object-" + SceneObject.objectCount++;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, __WEBPACK_IMPORTED_MODULE_0_underscore__["defaults"](options || {}), {
            point: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */](0, 0),
            size: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */](1, 1),
            enabled: true
        });
        return _this;
    }
    // Tick map.
    SceneObject.prototype.tick = function (elapsed) {
        if (!this.enabled) {
            return;
        }
        var values = this._connectedBehaviors;
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            if (!values[i]) {
                throw new Error('Component deleted during tick, use _.defer to delay removal until the callstack unwinds');
            }
            if (values[i].tick) {
                values[i].tick(elapsed);
            }
        }
    };
    // Interpolate map.
    SceneObject.prototype.interpolateTick = function (elapsed) {
        if (!this.enabled) {
            return;
        }
        var values = this._connectedBehaviors;
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            if (!values[i]) {
                throw new Error('Component deleted during interpolateTick, delay removal until the callstack unwinds');
            }
            if (values[i].interpolateTick) {
                values[i].interpolateTick(elapsed);
            }
        }
    };
    SceneObject.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (o) {
            o.disconnectBehavior();
        });
        this._connectedBehaviors.length = 0;
        if (this.scene) {
            this.scene.removeObject(this, false);
        }
    };
    SceneObject.prototype.onAddToScene = function (scene) {
        this.syncBehaviors();
    };
    SceneObject.prototype.addComponentDictionary = function (components, silent) {
        var _this = this;
        var failed = null;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](components, function (comp, key) {
            if (failed) {
                return;
            }
            if (!_this.addBehavior(comp, true)) {
                failed = comp;
            }
        });
        if (failed) {
            console.log("Failed to add component set to host. Component " + failed.toString() + " failed to connect to host.");
        }
        else {
            this.syncBehaviors();
        }
        return !failed;
    };
    SceneObject.prototype.removeComponentDictionary = function (components, silent) {
        var previousCount = this._connectedBehaviors.length;
        var removeIds = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](components, function (value) {
            return value.id;
        });
        this._connectedBehaviors = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](this._connectedBehaviors, function (obj) {
            if (__WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](removeIds, obj.id) !== -1) {
                if (obj.disconnectBehavior() === false) {
                    return true;
                }
                obj.host = null;
                return false;
            }
            return true;
        });
        var change = this._connectedBehaviors.length === previousCount;
        if (change && silent !== true) {
            this.syncBehaviors();
        }
        return change;
    };
    // Debugging
    // -----------------------------------------------------------------------------
    SceneObject.prototype.toString = function () {
        var ctor = this.constructor;
        var name = this.name;
        if (ctor && ctor.name !== 'Function') {
            name = ctor.name || (this.toString().match(/function (.+?)\(/) || [, ''])[1];
        }
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (comp) {
            name += ', ' + comp;
        });
        return name;
    };
    return SceneObject;
}(__WEBPACK_IMPORTED_MODULE_1__pow_core_behavior_host__["a" /* BehaviorHost */]));

SceneObject.objectCount = 0;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var SpriteComponent = (function (_super) {
    __extends(SpriteComponent, _super);
    function SpriteComponent(options) {
        var _this = _super.call(this) || this;
        // The sprite frame (if applicable)
        _this.frame = 0;
        if (typeof options !== 'undefined') {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, options);
        }
        return _this;
    }
    Object.defineProperty(SpriteComponent.prototype, "scale", {
        get: function () {
            return this.host ? this.host.scale : 1;
        },
        enumerable: true,
        configurable: true
    });
    SpriteComponent.prototype.syncBehavior = function () {
        if (this.host.world) {
            this.setSprite(this.icon, this.frame);
        }
        return _super.prototype.syncBehavior.call(this);
    };
    /**
     * Set the current sprite name.  Returns the previous sprite name.
     */
    SpriteComponent.prototype.setSprite = function (name, frame) {
        var _this = this;
        if (frame === void 0) { frame = 0; }
        return new Promise(function (resolve, reject) {
            if (name === _this.icon && _this.image && _this.meta) {
                return resolve(_this.icon);
            }
            _this.icon = name;
            if (!name) {
                _this.meta = null;
                return resolve(null);
            }
            _this.meta = _this.host.world.sprites.getSpriteMeta(name);
            _this.host.world.sprites.getSpriteSheet(_this.meta.source)
                .then(function (images) {
                _this.image = images[0].data;
                _this.frame = frame;
                resolve(_this.icon);
            })
                .catch(reject);
        });
    };
    return SpriteComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(206);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(62);

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityAddBeingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EntityRemoveBeingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EntityAddItemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EntityRemoveItemAction; });

var EntityAddBeingAction = (function () {
    function EntityAddBeingAction(payload) {
        this.payload = payload;
        this.type = EntityAddBeingAction.typeId;
    }
    return EntityAddBeingAction;
}());

EntityAddBeingAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('ENTITY_ADD_BEING');
var EntityRemoveBeingAction = (function () {
    function EntityRemoveBeingAction(entityId) {
        this.type = EntityRemoveBeingAction.typeId;
        this.payload = entityId;
    }
    return EntityRemoveBeingAction;
}());

EntityRemoveBeingAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('ENTITY_REMOVE_BEING');
var EntityAddItemAction = (function () {
    function EntityAddItemAction(payload) {
        this.payload = payload;
        this.type = EntityAddItemAction.typeId;
    }
    return EntityAddItemAction;
}());

EntityAddItemAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('ENTITY_ADD_ITEM');
var EntityRemoveItemAction = (function () {
    function EntityRemoveItemAction(entityId) {
        this.type = EntityRemoveItemAction.typeId;
        this.payload = entityId;
    }
    return EntityRemoveItemAction;
}());

EntityRemoveItemAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('ENTITY_REMOVE_ITEM');


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GameDataFetchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GameDataFetchSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GameDataFetchFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDataAddSheetAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GameDataRemoveSheetAction; });

/**
 * Fetch game data from the given Google Spreadsheet URL.
 *
 * @note The spreadsheet must be published and publicly accessible.
 */
var GameDataFetchAction = (function () {
    function GameDataFetchAction(googleSpreadsheetId) {
        this.type = GameDataFetchAction.typeId;
        this.payload = googleSpreadsheetId;
    }
    return GameDataFetchAction;
}());

GameDataFetchAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_DATA_FETCH');
var GameDataFetchSuccessAction = (function () {
    function GameDataFetchSuccessAction(payload) {
        this.payload = payload;
        this.type = GameDataFetchSuccessAction.typeId;
    }
    return GameDataFetchSuccessAction;
}());

GameDataFetchSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_DATA_FETCH_SUCCESS');
var GameDataFetchFailAction = (function () {
    function GameDataFetchFailAction(payload) {
        this.payload = payload;
        this.type = GameDataFetchFailAction.typeId;
    }
    return GameDataFetchFailAction;
}());

GameDataFetchFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('GAME_DATA_FETCH_FAIL');
var GameDataAddSheetAction = (function () {
    function GameDataAddSheetAction(sheet, data) {
        this.type = GameDataAddSheetAction.typeId;
        this.payload = { sheet: sheet, data: data };
    }
    return GameDataAddSheetAction;
}());

GameDataAddSheetAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('DATA_ADD_SHEET');
var GameDataRemoveSheetAction = (function () {
    function GameDataRemoveSheetAction(sheetId) {
        this.type = GameDataRemoveSheetAction.typeId;
        this.payload = sheetId;
    }
    return GameDataRemoveSheetAction;
}());

GameDataRemoveSheetAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('DATA_REMOVE_SHEET');


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpritesRegisterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SpritesLoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpritesLoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpritesLoadFailAction; });

var SpritesRegisterAction = (function () {
    function SpritesRegisterAction(payload) {
        this.payload = payload;
        this.type = SpritesRegisterAction.typeId;
    }
    return SpritesRegisterAction;
}());

SpritesRegisterAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('SPRITE_REGISTER_MAP');
var SpritesLoadAction = (function () {
    function SpritesLoadAction(indexMetadataUrl) {
        this.type = SpritesLoadAction.typeId;
        this.payload = indexMetadataUrl;
    }
    return SpritesLoadAction;
}());

SpritesLoadAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('SPRITES_LOAD');
var SpritesLoadSuccessAction = (function () {
    function SpritesLoadSuccessAction(indexMetadataUrl) {
        this.type = SpritesLoadSuccessAction.typeId;
        this.payload = indexMetadataUrl;
    }
    return SpritesLoadSuccessAction;
}());

SpritesLoadSuccessAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('SPRITES_LOAD_SUCCESS');
var SpritesLoadFailAction = (function () {
    function SpritesLoadFailAction(indexMetadataUrl) {
        this.type = SpritesLoadFailAction.typeId;
        this.payload = indexMetadataUrl;
    }
    return SpritesLoadFailAction;
}());

SpritesLoadFailAction.typeId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('SPRITES_LOAD_FAIL');


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_actions_combat_attack_behavior__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_combat_combat_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatBeginTurnStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





// Combat Begin
var CombatBeginTurnStateComponent = CombatBeginTurnStateComponent_1 = (function (_super) {
    __extends(CombatBeginTurnStateComponent, _super);
    function CombatBeginTurnStateComponent(combatService) {
        var _this = _super.call(this) || this;
        _this.combatService = combatService;
        _this.name = CombatBeginTurnStateComponent_1.NAME;
        return _this;
    }
    CombatBeginTurnStateComponent.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        this.machine = machine;
        machine.currentDone = false;
        machine.current.scale = 1.25;
        this.current = machine.current;
        if (machine.current && machine.isFriendlyTurn()) {
            machine.focus = machine.current;
        }
        machine.trigger('combat:beginTurn', machine.current);
        var choice = null;
        if (machine.isFriendlyTurn()) {
            console.log("TURN: " + machine.current.model.name);
            choice = machine.playerChoices[machine.current._uid];
        }
        else {
            choice = machine.current.findBehavior(__WEBPACK_IMPORTED_MODULE_3__behaviors_actions_combat_attack_behavior__["a" /* CombatAttackBehaviorComponent */]);
            // TODO: This config should not be here.   Just pick a random person to attack.
            if (choice) {
                choice.to = machine.getRandomPartyMember();
                choice.from = machine.current;
            }
        }
        if (!choice) {
            throw new Error('Invalid Combat Action Choice. This should not happen.');
        }
        if (choice.to && this.combatService.isDefeated(choice.to.model)) {
            choice.to = machine.getRandomEnemy();
        }
        __WEBPACK_IMPORTED_MODULE_0_underscore__["defer"](function () {
            choice.act(function (act, error) {
                if (error) {
                    console.error(error);
                }
            });
        });
    };
    CombatBeginTurnStateComponent.prototype.exit = function (machine) {
        this.current.scale = 1;
        _super.prototype.exit.call(this, machine);
    };
    return CombatBeginTurnStateComponent;
}(__WEBPACK_IMPORTED_MODULE_2__combat_base_state__["a" /* CombatMachineState */]));
CombatBeginTurnStateComponent.NAME = 'Combat Begin Turn';
CombatBeginTurnStateComponent = CombatBeginTurnStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-begin-turn-state',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__models_combat_combat_service__["a" /* CombatService */]])
], CombatBeginTurnStateComponent);

var CombatBeginTurnStateComponent_1;


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_begin_turn_state__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_choose_action_machine__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__combat_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatChooseActionStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */









/**
 * Choose actions for all characters in the player-card.
 */
var CombatChooseActionStateComponent = CombatChooseActionStateComponent_1 = (function (_super) {
    __extends(CombatChooseActionStateComponent, _super);
    function CombatChooseActionStateComponent(renderer, combat) {
        var _this = _super.call(this) || this;
        _this.renderer = renderer;
        _this.combat = combat;
        _this.name = CombatChooseActionStateComponent_1.NAME;
        _this.pending = [];
        _this.machine = null;
        /**
         * Available menu items for selection.
         */
        _this.items = [];
        _this.pointAt = null;
        _this.pointOffset = new __WEBPACK_IMPORTED_MODULE_6__game_pow_core_point__["a" /* Point */]();
        _this._pointerPosition$ = new __WEBPACK_IMPORTED_MODULE_7_rxjs__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_6__game_pow_core_point__["a" /* Point */]());
        /** The screen translated pointer position */
        _this.pointerPosition$ = _this._pointerPosition$.distinctUntilChanged();
        return _this;
    }
    CombatChooseActionStateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Every n milliseconds, update the pointer to track the current target
        this._timerSubscription = __WEBPACK_IMPORTED_MODULE_7_rxjs__["Observable"].interval(50).do(function () {
            if (!_this.pointAt || !_this.combat) {
                return;
            }
            var targetPos = new __WEBPACK_IMPORTED_MODULE_6__game_pow_core_point__["a" /* Point */](_this.pointAt.point);
            targetPos.y = (targetPos.y - _this.combat.camera.point.y) + _this.pointOffset.y;
            targetPos.x = (targetPos.x - _this.combat.camera.point.x) + _this.pointOffset.x;
            var screenPos = _this.combat.worldToScreen(targetPos, _this.combat.cameraScale);
            _this._pointerPosition$.next(screenPos);
        }).subscribe();
    };
    CombatChooseActionStateComponent.prototype.ngOnDestroy = function () {
        this._timerSubscription.unsubscribe();
    };
    CombatChooseActionStateComponent.prototype.enter = function (machine) {
        var _this = this;
        _super.prototype.enter.call(this, machine);
        if (!machine.scene) {
            throw new Error('Invalid Combat Scene');
        }
        this.machine = machine;
        var combatants = machine.getLiveParty().concat(machine.getLiveEnemies());
        machine.turnList = __WEBPACK_IMPORTED_MODULE_0_underscore__["shuffle"](combatants);
        machine.current = machine.turnList.shift();
        machine.currentDone = true;
        this.pending = machine.getLiveParty();
        machine.playerChoices = {};
        // Trigger an event with a list of GameEntityObject player-card members to
        // choose an action for.   Provide a callback function that may be
        // invoked while handling the event to trigger status on the choosing
        // of moves.  Once data.choose(g,a) has been called for all player-card members
        // the state will transition to begin execution of player and enemy turns.
        var chooseData = {
            choose: function (action) {
                machine.playerChoices[action.from._uid] = action;
                _this.pending = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](_this.pending, function (p) {
                    return action.from._uid !== p._uid;
                });
                console.log(action.from.model.name + " chose " + action.getActionName());
                if (_this.pending.length === 0) {
                    machine.setCurrentState(__WEBPACK_IMPORTED_MODULE_4__combat_begin_turn_state__["a" /* CombatBeginTurnStateComponent */].NAME);
                }
            },
            players: this.pending,
            enemies: machine.getLiveEnemies()
        };
        var choices = chooseData.players.slice();
        var inputState;
        var next = function () {
            var p = choices.shift();
            if (!p) {
                return;
            }
            inputState.current = p;
            inputState.setCurrentState(__WEBPACK_IMPORTED_MODULE_5__behaviors_choose_action_machine__["a" /* ChooseActionType */].NAME);
        };
        var chooseSubmit = function (action) {
            inputState.data.choose(action);
            next();
        };
        inputState = new __WEBPACK_IMPORTED_MODULE_5__behaviors_choose_action_machine__["b" /* ChooseActionStateMachine */](this, machine.scene, chooseData, chooseSubmit);
        next();
    };
    CombatChooseActionStateComponent.prototype.exit = function (machine) {
        this.machine = null;
        return _super.prototype.exit.call(this, machine);
    };
    CombatChooseActionStateComponent.prototype.setPointerTarget = function (object, directionClass, offset) {
        if (directionClass === void 0) { directionClass = 'right'; }
        if (offset === void 0) { offset = new __WEBPACK_IMPORTED_MODULE_6__game_pow_core_point__["a" /* Point */](); }
        var pointer = this.pointerElementRef.nativeElement;
        this.renderer.setElementClass(pointer, 'left', false);
        this.renderer.setElementClass(pointer, 'right', false);
        this.renderer.setElementClass(pointer, directionClass, true);
        this.pointAt = object;
        this.pointOffset = offset;
    };
    CombatChooseActionStateComponent.prototype.addPointerClass = function (clazz) {
        this.renderer.setElementClass(this.pointerElementRef.nativeElement, clazz, true);
    };
    CombatChooseActionStateComponent.prototype.removePointerClass = function (clazz) {
        this.renderer.setElementClass(this.pointerElementRef.nativeElement, clazz, false);
    };
    CombatChooseActionStateComponent.prototype.hidePointer = function () {
        this.renderer.setElementClass(this.pointerElementRef.nativeElement, 'hidden', true);
    };
    CombatChooseActionStateComponent.prototype.showPointer = function () {
        this.renderer.setElementClass(this.pointerElementRef.nativeElement, 'hidden', false);
    };
    return CombatChooseActionStateComponent;
}(__WEBPACK_IMPORTED_MODULE_3__combat_base_state__["a" /* CombatMachineState */]));
CombatChooseActionStateComponent.NAME = 'Combat Choose Actions';
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('combatPointer'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], CombatChooseActionStateComponent.prototype, "pointerElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CombatChooseActionStateComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__scene_game_entity_object__["a" /* GameEntityObject */])
], CombatChooseActionStateComponent.prototype, "pointAt", void 0);
CombatChooseActionStateComponent = CombatChooseActionStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-choose-action-state',
        styles: [__webpack_require__(340)],
        template: "<ul *ngIf=\"items.length > 0\" class=\"ebp action-menu\">\n  <li *ngFor=\"let item of items\" (click)=\"item.select()\" [innerText]=\"item.label\"></li>\n</ul>\n<span #combatPointer\n      class=\"point-to-player\"\n      [class.hidden]=\"!pointAt\"\n      [style.left]=\"(pointerPosition$ | async)?.x + 'px'\"\n      [style.top]=\"(pointerPosition$ | async)?.y + 'px'\"\n></span>\n<ng-content></ng-content>"
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_8__combat_component__["a" /* CombatComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"],
        __WEBPACK_IMPORTED_MODULE_8__combat_component__["a" /* CombatComponent */]])
], CombatChooseActionStateComponent);

var CombatChooseActionStateComponent_1;


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_begin_turn_state__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_choose_action_state__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_defeat_state__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_victory_state__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatEndTurnStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */







var CombatEndTurnStateComponent = CombatEndTurnStateComponent_1 = (function (_super) {
    __extends(CombatEndTurnStateComponent, _super);
    function CombatEndTurnStateComponent(combatService) {
        var _this = _super.call(this) || this;
        _this.combatService = combatService;
        _this.name = CombatEndTurnStateComponent_1.NAME;
        return _this;
    }
    CombatEndTurnStateComponent.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        machine.current = null;
        // Find the next turn.
        while (machine.turnList.length > 0 && !machine.current) {
            machine.current = machine.turnList.shift();
            // Strip out defeated players.
            if (machine.current && this.combatService.isDefeated(machine.current.model)) {
                machine.current = null;
            }
        }
        var targetState = machine.current ?
            __WEBPACK_IMPORTED_MODULE_1__combat_begin_turn_state__["a" /* CombatBeginTurnStateComponent */].NAME :
            __WEBPACK_IMPORTED_MODULE_2__combat_choose_action_state__["a" /* CombatChooseActionStateComponent */].NAME;
        if (machine.partyDefeated()) {
            targetState = __WEBPACK_IMPORTED_MODULE_3__combat_defeat_state__["a" /* CombatDefeatStateComponent */].NAME;
        }
        else if (machine.enemiesDefeated()) {
            targetState = __WEBPACK_IMPORTED_MODULE_4__combat_victory_state__["a" /* CombatVictoryStateComponent */].NAME;
        }
        if (!targetState) {
            throw new Error('Invalid transition from end turn');
        }
        machine.setCurrentState(targetState);
    };
    return CombatEndTurnStateComponent;
}(__WEBPACK_IMPORTED_MODULE_0__combat_base_state__["a" /* CombatMachineState */]));
CombatEndTurnStateComponent.NAME = 'Combat End Turn';
CombatEndTurnStateComponent = CombatEndTurnStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'combat-end-turn-state',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__["a" /* CombatService */]])
], CombatEndTurnStateComponent);

var CombatEndTurnStateComponent_1;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// Events class based Backbone.js
//     Backbone.js 1.1.2
//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org
// Backbone.Events
// ---------------
// A module that can be mixed in to *any object* in order to provide it with
// custom events. You may bind with `on` or remove with `off` callback
// functions to an event; `trigger`-ing an event fires all callbacks in
// succession.
//
//     var object = {};
//     _.extend(object, Backbone.Events);
//     object.on('expand', function(){ alert('expanded'); });
//     object.trigger('expand');
//

var Events = (function () {
    function Events() {
    }
    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    Events.prototype.on = function (name, callback, context) {
        if (!eventsApi(this, 'on', name, [callback, context]) || !callback)
            return this;
        this._events || (this._events = {});
        var events = this._events[name] || (this._events[name] = []);
        events.push({ callback: callback, context: context, ctx: context || this });
        return this;
    };
    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    Events.prototype.once = function (name, callback, context) {
        if (!eventsApi(this, 'once', name, [callback, context]) || !callback)
            return this;
        var self = this;
        var once = __WEBPACK_IMPORTED_MODULE_0_underscore__["once"](function () {
            self.off(name, once);
            callback.apply(this, arguments);
        });
        once._callback = callback;
        return this.on(name, once, context);
    };
    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    Events.prototype.off = function (name, callback, context) {
        var retain, ev, events, names, i, l, j, k;
        if (!this._events || !eventsApi(this, 'off', name, [callback, context]))
            return this;
        if (!name && !callback && !context) {
            this._events = void 0;
            return this;
        }
        names = name ? [name] : __WEBPACK_IMPORTED_MODULE_0_underscore__["keys"](this._events);
        for (i = 0, l = names.length; i < l; i++) {
            name = names[i];
            if (events = this._events[name]) {
                this._events[name] = retain = [];
                if (callback || context) {
                    for (j = 0, k = events.length; j < k; j++) {
                        ev = events[j];
                        if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                            (context && context !== ev.context)) {
                            retain.push(ev);
                        }
                    }
                }
                if (!retain.length)
                    delete this._events[name];
            }
        }
        return this;
    };
    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    Events.prototype.trigger = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this._events)
            return this;
        var args = Array.prototype.slice.call(arguments, 1);
        if (!eventsApi(this, 'trigger', name, args))
            return this;
        var events = this._events[name];
        var allEvents = this._events.all;
        if (events)
            triggerEvents(events, args);
        if (allEvents)
            triggerEvents(allEvents, arguments);
        return this;
    };
    return Events;
}());

// Regular expression used to split event strings.
var eventSplitter = /\s+/;
// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi = function (obj, action, name, rest) {
    if (!name)
        return true;
    // Handle event maps.
    if (typeof name === 'object') {
        for (var key in name) {
            obj[action].apply(obj, [key, name[key]].concat(rest));
        }
        return false;
    }
    // Handle space separated event names.
    if (eventSplitter.test(name)) {
        var names = name.split(eventSplitter);
        for (var i = 0, l = names.length; i < l; i++) {
            obj[action].apply(obj, [names[i]].concat(rest));
        }
        return false;
    }
    return true;
};
// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
// Backbone events have 3 arguments).
var triggerEvents = function (events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
        case 0:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx);
            return;
        case 1:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1);
            return;
        case 2:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;
        case 3:
            while (++i < l)
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;
        default:
            while (++i < l)
                (ev = events[i]).callback.apply(ev.ctx, args);
            return;
    }
};


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behavior__ = __webpack_require__(162);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behavior_host__ = __webpack_require__(161);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__errors__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__point__ = __webpack_require__(5);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rect__ = __webpack_require__(16);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resource__ = __webpack_require__(48);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__time__ = __webpack_require__(98);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__world__ = __webpack_require__(165);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resources_audio_resource__ = __webpack_require__(163);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__resources_image_resource__ = __webpack_require__(94);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resources_json_resource__ = __webpack_require__(164);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resources_xml_resource__ = __webpack_require__(64);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__resources_tiled_tiled__ = __webpack_require__(97);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__resources_tiled_tiled_tmx_resource__ = __webpack_require__(95);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__resources_tiled_tiled_tsx_resource__ = __webpack_require__(96);
/* unused harmony namespace reexport */
/* unused harmony export POW_CORE_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowCoreModule; });




















var POW_CORE_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__resource_manager__["a" /* ResourceManager */]
];
var PowCoreModule = PowCoreModule_1 = (function () {
    function PowCoreModule() {
    }
    PowCoreModule.forRoot = function () {
        return {
            ngModule: PowCoreModule_1,
            providers: POW_CORE_PROVIDERS
        };
    };
    return PowCoreModule;
}());
PowCoreModule = PowCoreModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: POW_CORE_PROVIDERS,
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"]
        ]
    })
], PowCoreModule);

var PowCoreModule_1;


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return XMLResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



/**
 * Use jQuery to load an XML file from a URL.
 */
var XMLResource = (function (_super) {
    __extends(XMLResource, _super);
    function XMLResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XMLResource.prototype.fetch = function (url) {
        var _this = this;
        this.url = url || this.url;
        return new Promise(function (resolve, reject) {
            var request = __WEBPACK_IMPORTED_MODULE_2_jquery__["get"](_this.url); // JQueryXHR
            request.done(function (object) {
                _this.data = __WEBPACK_IMPORTED_MODULE_2_jquery__(object);
                _this.load(_this.data).then(resolve).catch(reject);
            });
            request.fail(function (jqxhr, settings, exception) {
                reject(exception);
            });
        });
    };
    /**
     * Load from a given piece of data.
     */
    XMLResource.prototype.load = function (data) {
        return Promise.resolve(this);
    };
    XMLResource.prototype.getRootNode = function (tag) {
        if (!this.data) {
            return null;
        }
        return __WEBPACK_IMPORTED_MODULE_2_jquery__(__WEBPACK_IMPORTED_MODULE_1_underscore__["find"](this.data, function (d) {
            return d.tagName && d.tagName.toLowerCase() === tag;
        }));
    };
    XMLResource.prototype.getChildren = function (el, tag) {
        var list = el.find(tag);
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["compact"](__WEBPACK_IMPORTED_MODULE_1_underscore__["map"](list, function (c) {
            var child = __WEBPACK_IMPORTED_MODULE_2_jquery__(c);
            return (child.parent()[0] !== el[0] ? null : child);
        }));
    };
    XMLResource.prototype.getChild = function (el, tag) {
        return this.getChildren(el, tag)[0];
    };
    XMLResource.prototype.getElAttribute = function (el, name) {
        if (el) {
            var attr = el.attr(name);
            if (attr) {
                return attr;
            }
        }
        return null;
    };
    return XMLResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]));



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_scene_view__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return KeyCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PowInput; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["UP"] = 38] = "UP";
    KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
    KeyCode[KeyCode["LEFT"] = 37] = "LEFT";
    KeyCode[KeyCode["RIGHT"] = 39] = "RIGHT";
    KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
    KeyCode[KeyCode["COMMA"] = 188] = "COMMA";
    KeyCode[KeyCode["DELETE"] = 46] = "DELETE";
    KeyCode[KeyCode["END"] = 35] = "END";
    KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
    KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
    KeyCode[KeyCode["HOME"] = 36] = "HOME";
    KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
    KeyCode[KeyCode["TAB"] = 9] = "TAB";
})(KeyCode || (KeyCode = {}));
var PowInput = (function () {
    function PowInput() {
        var _this = this;
        this._keysDown = {};
        this._mouseElements = [];
        window.addEventListener('keydown', function (ev) {
            _this._keysDown[ev.which] = true;
        });
        window.addEventListener('keyup', function (ev) {
            _this._keysDown[ev.which] = false;
        });
        var hooks = this._mouseElements;
        window.addEventListener('mousemove touchmove', function (ev) {
            var l = hooks.length;
            for (var i = 0; i < l; i++) {
                var hook = hooks[i];
                if (ev.srcElement === hook.view.canvas) {
                    PowInput.mouseOnView(ev, hook.view, hook);
                }
                else {
                    hook.point.set(-1, -1);
                    hook.world.set(-1, -1);
                }
            }
        });
    }
    PowInput.mouseOnView = function (ev, view, coords) {
        var relativeElement = ev.srcElement;
        var touches = ev.touches;
        if (touches && touches.length > 0) {
            ev = touches[0];
        }
        var result = coords || {
            point: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */](),
            world: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */]()
        };
        var canoffset = $(relativeElement).offset();
        var x = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(canoffset.left);
        var y = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(canoffset.top);
        result.point.set(x, y);
        // Generate world mouse position
        var worldMouse = view.screenToWorld(result.point, view.cameraScale).add(view.camera.point).round();
        result.world.set(worldMouse.x, worldMouse.y);
        return result;
    };
    PowInput.prototype.mouseHook = function (view, name) {
        var hooks = __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this._mouseElements, { name: name });
        var result = {
            name: name,
            view: view,
            point: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */](-1, -1),
            world: new __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */](-1, -1)
        };
        // Overwrite any existing hook with a conflicting name
        if (hooks.length > 0) {
            hooks[0] = result;
        }
        else {
            this._mouseElements.push(result);
        }
        return result;
    };
    PowInput.prototype.mouseUnhook = function (nameOrView) {
        this._mouseElements = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](this._mouseElements, function (hook) {
            return nameOrView instanceof __WEBPACK_IMPORTED_MODULE_1__scene_scene_view__["a" /* SceneView */] ? hook.view._uid === nameOrView._uid : hook.name === nameOrView;
        });
    };
    PowInput.prototype.getMouseHook = function (nameOrView) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this._mouseElements, function (hook) {
            return nameOrView instanceof __WEBPACK_IMPORTED_MODULE_1__scene_scene_view__["a" /* SceneView */] ? hook.view._uid === nameOrView._uid : hook.name === nameOrView;
        });
    };
    PowInput.prototype.keyDown = function (key) {
        return !!this._keysDown[key];
    };
    return PowInput;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(49)))

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(204);

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedBehaviorComponent; });




// Implementation
// -------------------------------------------------------------------------
var AnimatedBehaviorComponent = AnimatedBehaviorComponent_1 = (function (_super) {
    __extends(AnimatedBehaviorComponent, _super);
    function AnimatedBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tasks = [];
        _this._animationKeys = [];
        _this._currentAnimation = null;
        return _this;
    }
    AnimatedBehaviorComponent.prototype.play = function (config) {
        var task = config;
        task.elapsed = 0;
        if (task.move) {
            task.startFrame = this.host.frame;
            task.start = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](this.host.point);
            task.target = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](this.host.point).clone().add(task.move);
            task.value = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](this.host.point);
        }
        if (typeof task.duration === 'undefined') {
            task.duration = 0;
        }
        this._tasks.push(task);
    };
    AnimatedBehaviorComponent.prototype.stop = function (config) {
        for (var i = 0; i < this._tasks.length; i++) {
            var task = this._tasks[i];
            if (task.name === config.name) {
                task.complete = true;
            }
        }
    };
    AnimatedBehaviorComponent.prototype.removeCompleteTasks = function () {
        for (var i = 0; i < this._tasks.length; i++) {
            var task = this._tasks[i];
            if (task.complete === true) {
                this._tasks.splice(i, 1);
                if (task.done) {
                    task.done(task);
                }
                if (task.callback) {
                    task.callback(task);
                }
                // this.host.frame = task.startFrame;
                this.trigger(AnimatedBehaviorComponent_1.EVENTS.Stopped, {
                    task: task,
                    component: this
                });
                i--;
            }
        }
    };
    AnimatedBehaviorComponent.prototype.interpolateTick = function (elapsed) {
        _super.prototype.interpolateTick.call(this, elapsed);
        this.update(elapsed);
        this.removeCompleteTasks();
    };
    AnimatedBehaviorComponent.prototype.update = function (elapsed) {
        var _this = this;
        if (this._tasks.length === 0) {
            return;
        }
        // Interp each task and fire events where necessary.
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._tasks, function (task) {
            if (task.elapsed > task.duration) {
                task.complete = true;
                task.elapsed = task.duration;
            }
            if (task.duration > 0) {
                var factor = task.elapsed / task.duration;
                // Interp point
                // console.log("Interp from " + task.start + " to " + task.target );
                if (task.move && task.move instanceof __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */]) {
                    var interpolated = task.value.interpolate(task.start, task.target, factor);
                    _this.host.point.x = interpolated.x;
                    _this.host.point.y = interpolated.y;
                }
                if (task.frames && task.frames.length) {
                    var index = Math.round(_this.interpolate(0, task.frames.length - 1, factor));
                    var frame = task.frames[index];
                    // console.log("Interp frame = " + frame);
                    _this.host.frame = frame;
                }
            }
            if (!task.complete) {
                task.elapsed += elapsed;
            }
        });
    };
    AnimatedBehaviorComponent.prototype.interpolate = function (from, to, factor) {
        factor = Math.min(Math.max(factor, 0), 1);
        return (from * (1.0 - factor)) + (to * factor);
    };
    AnimatedBehaviorComponent.prototype.playChain = function (animations, cb) {
        // Inject a 0 duration animation on the end of the list
        // if a callback is desired.  This is a convenience for
        // certain coding styles, and you could easily add your
        // own animation as a callback before invoking this.
        if (typeof cb !== 'undefined') {
            animations.push({
                name: 'Chain Callback',
                duration: 0,
                callback: cb
            });
        }
        // TODO: Need a list of these for multiple animations on
        // the same component. !!!!!!!!!!!!!!!!!!!!
        this._animationKeys = animations;
        this._animateNext();
    };
    AnimatedBehaviorComponent.prototype._animateNext = function () {
        var _this = this;
        if (this._animationKeys.length === 0) {
            return;
        }
        this._currentAnimation = this._animationKeys.shift();
        this._currentAnimation.done = function () {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["defer"](function () {
                _this._animateNext();
            });
        };
        this.play(this._currentAnimation);
    };
    return AnimatedBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));
AnimatedBehaviorComponent.EVENTS = {
    Started: 'start',
    Stopped: 'stop',
    Repeated: 'repeat'
};
AnimatedBehaviorComponent = AnimatedBehaviorComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'animated-behavior',
        template: '<ng-content></ng-content>'
    })
], AnimatedBehaviorComponent);

var AnimatedBehaviorComponent_1;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollisionBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var CollisionBehaviorComponent = (function (_super) {
    __extends(CollisionBehaviorComponent, _super);
    function CollisionBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collideBox = new __WEBPACK_IMPORTED_MODULE_2__game_pow_core_rect__["a" /* Rect */](0, 0, 1, 1);
        _this.resultsArray = [];
        return _this;
    }
    CollisionBehaviorComponent.prototype.collide = function (x, y, type, results) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object__["a" /* SceneObject */]; }
        if (results === void 0) { results = []; }
        if (!this.host || !this.host.scene) {
            return false;
        }
        this.collideBox.point.x = x;
        this.collideBox.point.y = y;
        return this.host.scene.db.queryRect(this.collideBox, type, results);
    };
    CollisionBehaviorComponent.prototype.collideFirst = function (x, y, type) {
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object__["a" /* SceneObject */]; }
        if (!this.host || !this.host.scene) {
            return null;
        }
        this.collideBox.point.x = x;
        this.collideBox.point.y = y;
        this.resultsArray.length = 0;
        var hit = this.host.scene.db.queryRect(this.collideBox, type, this.resultsArray);
        return hit ? this.resultsArray[0] : null;
    };
    return CollisionBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));
CollisionBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'collision-behavior',
        template: "<ng-content></ng-content>"
    })
], CollisionBehaviorComponent);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animated_behavior__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collision_behavior__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprite_render_behavior__ = __webpack_require__(121);
/* unused harmony namespace reexport */
/* unused harmony export BEHAVIOR_COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaviorsModule; });






/** Common behavior behaviors */
var BEHAVIOR_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__animated_behavior__["a" /* AnimatedBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_3__collision_behavior__["a" /* CollisionBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_4__sprite_render_behavior__["a" /* SpriteRenderBehaviorComponent */]
];
var BehaviorsModule = BehaviorsModule_1 = (function () {
    function BehaviorsModule() {
    }
    BehaviorsModule.forRoot = function () {
        return {
            ngModule: BehaviorsModule_1
        };
    };
    return BehaviorsModule;
}());
BehaviorsModule = BehaviorsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: BEHAVIOR_COMPONENTS,
        exports: BEHAVIOR_COMPONENTS,
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ]
    })
], BehaviorsModule);

var BehaviorsModule_1;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__health_bar_index__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_index__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_index__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__party_menu_index__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player_card_index__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__party_inventory_index__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sprite_index__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__player_stats_index__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony export APP_COMPONENTS_EXPORTS */
/* unused harmony export APP_COMPONENTS_PROVIDERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentsModule; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





















/** Common game/application components */
var APP_COMPONENTS_EXPORTS = __WEBPACK_IMPORTED_MODULE_2__health_bar_index__["a" /* RPG_HEALTH_BAR_EXPORTS */].concat(__WEBPACK_IMPORTED_MODULE_3__loading_index__["b" /* RPG_LOADING_EXPORTS */], __WEBPACK_IMPORTED_MODULE_4__notification_index__["a" /* RPG_NOTIFICATION_EXPORTS */], __WEBPACK_IMPORTED_MODULE_7__party_inventory_index__["a" /* RPG_PARTY_INVENTORY_EXPORTS */], __WEBPACK_IMPORTED_MODULE_5__party_menu_index__["a" /* RPG_PARTY_MENU_EXPORTS */], __WEBPACK_IMPORTED_MODULE_6__player_card_index__["a" /* RPG_PLAYER_CARD_EXPORTS */], __WEBPACK_IMPORTED_MODULE_12__player_stats_index__["a" /* RPG_PLAYER_STATS_EXPORTS */], __WEBPACK_IMPORTED_MODULE_8__sprite_index__["a" /* RPG_SPRITE_EXPORTS */]);
/** Common component providers */
var APP_COMPONENTS_PROVIDERS = __WEBPACK_IMPORTED_MODULE_3__loading_index__["c" /* RPG_LOADING_PROVIDERS */].concat(__WEBPACK_IMPORTED_MODULE_4__notification_index__["b" /* RPG_NOTIFICATION_PROVIDERS */]);
var AppComponentsModule = AppComponentsModule_1 = (function () {
    function AppComponentsModule() {
    }
    AppComponentsModule.forRoot = function () {
        return {
            ngModule: AppComponentsModule_1
        };
    };
    return AppComponentsModule;
}());
AppComponentsModule = AppComponentsModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: APP_COMPONENTS_EXPORTS,
        exports: APP_COMPONENTS_EXPORTS,
        providers: APP_COMPONENTS_PROVIDERS,
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout__["FlexLayoutModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdButtonModule */]
        ]
    })
], AppComponentsModule);

var AppComponentsModule_1;


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loading_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_service__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__loading_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RPG_LOADING_EXPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RPG_LOADING_PROVIDERS; });




var RPG_LOADING_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__loading_component__["a" /* LoadingComponent */]
];
var RPG_LOADING_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__loading_service__["a" /* LoadingService */]
];


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* unused harmony export combatStateFactory */
/* harmony export (immutable) */ __webpack_exports__["e"] = combatFromJSON;
/* harmony export (immutable) */ __webpack_exports__["d"] = combatReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliceCombatLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sliceCombatEncounterEnemies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sliceCombatEncounterParty; });



/**
 * Factory for creating combat state records. Useful for instantiating combat subtree
 * with a set of configured values on top of defaults. Helpful for deserialization and
 * testing.
 * @internal
 */
var combatStateFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* makeRecordFactory */])({
    loading: false,
    enemies: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
    party: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
    type: 'none',
    message: [],
    gold: 0,
    experience: 0,
    items: [],
    zone: '',
    id: '',
});
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function combatFromJSON(object) {
    var recordValues = __assign({}, object, { enemies: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](object.enemies), party: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](object.party) });
    return combatStateFactory(recordValues);
}
function combatReducer(state, action) {
    if (state === void 0) { state = combatStateFactory(); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__combat_actions__["b" /* CombatEncounterAction */].typeId: {
            return state.merge(__assign({ loading: true }, action.payload));
        }
        case __WEBPACK_IMPORTED_MODULE_0__combat_actions__["c" /* CombatEncounterReadyAction */].typeId: {
            return state.merge({ loading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__combat_actions__["a" /* CombatVictoryAction */].typeId: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_0__combat_actions__["d" /* CombatVictoryCompleteAction */].typeId: {
            // We're done here, reset state
            return combatStateFactory();
        }
        case __WEBPACK_IMPORTED_MODULE_0__combat_actions__["e" /* CombatAttackAction */].typeId: {
            var data_1 = action.payload;
            var matchDefender = function (c) { return c.eid === data_1.defender.eid; };
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(state.type !== 'none', 'invalid encounter for attack action');
            // Attacking enemy
            var index_1 = state.enemies.findIndex(matchDefender);
            if (index_1 !== -1) {
                var target = data_1.defender;
                return state.update('enemies', function (items) {
                    var current = items.get(index_1);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(current, 'invalid target for attack action');
                    var newHp = Math.max(current.hp - data_1.damage, 0);
                    return items.set(index_1, __assign({}, current, { hp: newHp }));
                });
            }
            index_1 = state.party.findIndex(matchDefender);
            // Attacking party
            if (index_1 !== -1) {
                var target = data_1.defender;
                return state.update('party', function (items) {
                    var current = items.get(index_1);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(current, 'invalid target for attack action');
                    var newHp = Math.max(current.hp - data_1.damage, 0);
                    return items.set(index_1, __assign({}, current, { hp: newHp }));
                });
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(index_1 !== -1, 'attack target found in neither enemies nor party lists');
            return state;
        }
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* exhaustiveCheck */])(action);
            return state;
    }
}
/** @internal {@see sliceCombatState} */
var sliceCombatLoading = function (state) { return state.loading; };
/** @internal {@see sliceCombatState} */
var sliceCombatEncounterEnemies = function (state) { return state.enemies; };
/** @internal {@see sliceCombatState} */
var sliceCombatEncounterParty = function (state) { return state.party; };


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_actions__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_entity__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_immutable__);
/* unused harmony export entityStateFactory */
/* harmony export (immutable) */ __webpack_exports__["f"] = entityFromJSON;
/* harmony export (immutable) */ __webpack_exports__["e"] = entityReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sliceEntityBeingIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliceEntityBeings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sliceEntityItemIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sliceEntityItems; });






/** @internal */
var entityBeingsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_5_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_5_immutable__["List"]()
});
/** @internal */
var entityItemsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_5_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_5_immutable__["List"]()
});
/**
 * @internal
 */
var entityStateFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["d" /* makeRecordFactory */])({
    beings: entityBeingsCollectionFactory(),
    items: entityItemsCollectionFactory()
});
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function entityFromJSON(object) {
    var recordValues = {
        beings: entityBeingsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.beings)),
        items: entityItemsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.items))
    };
    return entityStateFactory(recordValues);
}
function entityReducer(state, action) {
    if (state === void 0) { state = entityStateFactory(); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__entity_actions__["a" /* EntityAddBeingAction */].typeId: {
            var entity_1 = action.payload;
            return state.updateIn(['beings'], function (items) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["b" /* addEntityToCollection */])(items, entity_1, entity_1.eid); });
        }
        case __WEBPACK_IMPORTED_MODULE_0__entity_actions__["b" /* EntityRemoveBeingAction */].typeId: {
            var entityId_1 = action.payload;
            return state.updateIn(['beings'], function (items) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["c" /* removeEntityFromCollection */])(items, entityId_1); });
        }
        case __WEBPACK_IMPORTED_MODULE_0__entity_actions__["c" /* EntityAddItemAction */].typeId: {
            var entity_2 = action.payload;
            return state.updateIn(['items'], function (items) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["b" /* addEntityToCollection */])(items, entity_2, entity_2.eid); });
        }
        case __WEBPACK_IMPORTED_MODULE_0__entity_actions__["d" /* EntityRemoveItemAction */].typeId: {
            var entityId_2 = action.payload;
            return state.updateIn(['items'], function (items) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["c" /* removeEntityFromCollection */])(items, entityId_2); });
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_actions__["v" /* GameStateHealPartyAction */].typeId: {
            var result = state;
            var partyAction_1 = action;
            return result.updateIn(['beings'], function (beings) {
                var updateBeingsResult = beings;
                partyAction_1.payload.partyIds.forEach(function (partyMemberId) {
                    var newHp = state.beings.byId.get(partyMemberId).maxhp;
                    var newMp = state.beings.byId.get(partyMemberId).maxmp;
                    updateBeingsResult = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["d" /* mergeEntityInCollection */])(updateBeingsResult, {
                        hp: newHp,
                        mp: newMp
                    }, partyMemberId);
                });
                return updateBeingsResult;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_actions__["g" /* GameStateEquipItemAction */].typeId: {
            var result = state;
            var current = state.beings.byId.get(action.payload.entityId);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* assertTrue */])(!!current, 'entity does not exist');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* assertTrue */])(!current[action.payload.slot], "entity already has item " + current[action.payload.slot] + " in " + action.payload.slot);
            return result.updateIn(['beings', 'byId', action.payload.entityId], function (entity) {
                return __assign({}, entity, (_a = {}, _a[action.payload.slot] = action.payload.itemId, _a));
                var _a;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_state_game_state_actions__["h" /* GameStateUnequipItemAction */].typeId: {
            var result = state;
            var current = state.beings.byId.get(action.payload.entityId);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* assertTrue */])(!!current, 'entity does not exist');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* assertTrue */])(current[action.payload.slot] === action.payload.itemId, "entity does not have item " + current[action.payload.slot] + " equipped " + action.payload.slot);
            return result.updateIn(['beings', 'byId', action.payload.entityId], function (entity) {
                return __assign({}, entity, (_a = {}, _a[action.payload.slot] = null, _a));
                var _a;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_3__combat_combat_actions__["a" /* CombatVictoryAction */].typeId: {
            var result = state;
            var victoryAction_1 = action;
            return result.updateIn(['beings'], function (beings) {
                var updateBeingsResult = beings;
                victoryAction_1.payload.party.forEach(function (partyEntity) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["c" /* assertTrue */])(!!(partyEntity && partyEntity.eid), 'invalid party entity in combat victory action');
                    updateBeingsResult = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["d" /* mergeEntityInCollection */])(updateBeingsResult, partyEntity, partyEntity.eid);
                });
                return updateBeingsResult;
            });
        }
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["e" /* exhaustiveCheck */])(action);
            return state;
    }
}
/** @internal {@see sliceEntitiesState} */
var sliceEntityBeingIds = function (state) { return state.beings.allIds; };
/** @internal {@see sliceEntitiesState} */
var sliceEntityBeings = function (state) { return state.beings.byId; };
/** @internal {@see sliceEntitiesState} */
var sliceEntityItemIds = function (state) { return state.items.allIds; };
/** @internal {@see sliceEntitiesState} */
var sliceEntityItems = function (state) { return state.items.byId; };


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_entity__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_data_actions__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(9);
/* unused harmony export gameDataFactory */
/* harmony export (immutable) */ __webpack_exports__["t"] = gameDataFromJSON;
/* harmony export (immutable) */ __webpack_exports__["s"] = gameDataReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sliceGameDataType; });
/* unused harmony export sliceGameDataTypeIds */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliceGameDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sliceWeaponIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sliceWeapons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sliceArmorIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sliceArmors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sliceItemIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sliceItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return sliceEnemiesIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sliceEnemies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sliceMagicIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sliceMagics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sliceClassesIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return sliceClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return sliceRandomEncounterIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return sliceRandomEncounters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return sliceFixedEncounterIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sliceFixedEncounters; });




/** @internal */
var entityWeaponsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityItemsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityArmorsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityEnemiesCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityMagicsCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityClassesCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityFixedEncountersCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var entityRandomEncountersCollectionFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](),
    allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"]()
});
/** @internal */
var gameDataFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["d" /* makeRecordFactory */])({
    loaded: false,
    weapons: entityWeaponsCollectionFactory(),
    items: entityItemsCollectionFactory(),
    armor: entityArmorsCollectionFactory(),
    enemies: entityEnemiesCollectionFactory(),
    magic: entityMagicsCollectionFactory(),
    classes: entityClassesCollectionFactory(),
    fixedEncounters: entityFixedEncountersCollectionFactory(),
    randomEncounters: entityRandomEncountersCollectionFactory(),
});
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function gameDataFromJSON(object) {
    var result = gameDataFactory({
        loaded: object.loaded,
        weapons: entityWeaponsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.weapons)),
        items: entityItemsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.items)),
        armor: entityArmorsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.armor)),
        enemies: entityEnemiesCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.enemies)),
        magic: entityMagicsCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.magic)),
        classes: entityClassesCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.classes)),
        fixedEncounters: entityFixedEncountersCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.fixedEncounters)),
        randomEncounters: entityRandomEncountersCollectionFactory(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["a" /* entityCollectionFromJSON */])(object.randomEncounters))
    });
    return result;
}
/**
 * Manage shared state for game-design data. Items for sale, monsters that exist in a fixed combat
 * encounter, base attributes for each class, etc.
 */
function gameDataReducer(state, action) {
    if (state === void 0) { state = gameDataFactory(); }
    var stateRecord = state;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__game_data_actions__["b" /* GameDataFetchAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_2__game_data_actions__["c" /* GameDataFetchFailAction */].typeId: {
            return state;
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_data_actions__["d" /* GameDataFetchSuccessAction */].typeId: {
            return stateRecord.merge({
                loaded: true
            });
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_data_actions__["a" /* GameDataAddSheetAction */].typeId: {
            var addSheet_1 = action.payload;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* assertTrue */])(!!state[addSheet_1.sheet], 'unknown collection cannot be added with sheet name: ' + addSheet_1.sheet);
            return stateRecord.updateIn([addSheet_1.sheet], function (record) {
                addSheet_1.data.forEach(function (data) {
                    record = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__base_entity__["b" /* addEntityToCollection */])(record, data, data.id);
                });
                return record;
            });
        }
        case __WEBPACK_IMPORTED_MODULE_2__game_data_actions__["e" /* GameDataRemoveSheetAction */].typeId: {
            var removeId = action.payload;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["c" /* assertTrue */])(stateRecord.has(removeId), 'cannot remove sheet that does not exist: ' + removeId);
            return stateRecord.updateIn([removeId], function (e) {
                return e
                    .set('byId', e.byId.clear())
                    .set('allIds', e.allIds.clear());
            });
        }
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__util__["e" /* exhaustiveCheck */])(action);
            return state;
    }
}
/** @internal {@see sliceGameDataState} */
var sliceGameDataType = function (type) {
    return function (state) { return state[type].byId; };
};
/** @internal {@see sliceGameDataState} */
var sliceGameDataTypeIds = function (type) {
    return function (state) { return state[type].allIds; };
};
/** @internal {@see sliceGameDataState} */
var sliceGameDataLoaded = function (state) { return state.loaded; };
/** @internal {@see sliceGameDataState} */
var sliceWeaponIds = function (state) { return state.weapons.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceWeapons = function (state) { return state.weapons.byId; };
/** @internal {@see sliceGameDataState} */
var sliceArmorIds = function (state) { return state.armor.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceArmors = function (state) { return state.armor.byId; };
/** @internal {@see sliceGameDataState} */
var sliceItemIds = function (state) { return state.items.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceItems = function (state) { return state.items.byId; };
/** @internal {@see sliceGameDataState} */
var sliceEnemiesIds = function (state) { return state.enemies.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceEnemies = function (state) { return state.enemies.byId; };
/** @internal {@see sliceGameDataState} */
var sliceMagicIds = function (state) { return state.magic.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceMagics = function (state) { return state.magic.byId; };
/** @internal {@see sliceGameDataState} */
var sliceClassesIds = function (state) { return state.classes.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceClasses = function (state) { return state.classes.byId; };
/** @internal {@see sliceGameDataState} */
var sliceRandomEncounterIds = function (state) { return state.randomEncounters.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceRandomEncounters = function (state) { return state.randomEncounters.byId; };
/** @internal {@see sliceGameDataState} */
var sliceFixedEncounterIds = function (state) { return state.fixedEncounters.allIds; };
/** @internal {@see sliceGameDataState} */
var sliceFixedEncounters = function (state) { return state.fixedEncounters.byId; };


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__records__ = __webpack_require__(260);
/* unused harmony export gameStateFactory */
/* harmony export (immutable) */ __webpack_exports__["k"] = gameStateFromJSON;
/* harmony export (immutable) */ __webpack_exports__["j"] = gameStateReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sliceGameStateKeyData; });
/* harmony export (immutable) */ __webpack_exports__["c"] = sliceGold;
/* harmony export (immutable) */ __webpack_exports__["f"] = sliceMap;
/* harmony export (immutable) */ __webpack_exports__["d"] = slicePosition;
/* harmony export (immutable) */ __webpack_exports__["e"] = sliceShipPosition;
/* harmony export (immutable) */ __webpack_exports__["h"] = sliceBattleCounter;
/* harmony export (immutable) */ __webpack_exports__["g"] = sliceCombatZone;
/* harmony export (immutable) */ __webpack_exports__["b"] = slicePartyIds;
/* harmony export (immutable) */ __webpack_exports__["a"] = sliceInventoryIds;




/**
 * Factory for creating combat state records. Useful for instantiating combat subtree
 * with a set of configured values on top of defaults. Helpful for deserialization and
 * testing.
 * @internal
 */
var gameStateFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["d" /* makeRecordFactory */])({
    party: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
    inventory: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
    keyData: __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
    battleCounter: 64,
    gold: 0,
    location: '',
    combatZone: '',
    position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__records__["a" /* pointFactory */])(),
    shipPosition: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__records__["a" /* pointFactory */])()
});
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function gameStateFromJSON(object) {
    var recordValues = __assign({}, object, { party: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](object.party), inventory: __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](object.inventory), keyData: __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](object.keyData), position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__records__["a" /* pointFactory */])(object.position), shipPosition: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__records__["a" /* pointFactory */])(object.shipPosition) });
    return gameStateFactory(recordValues);
}
function gameStateReducer(state, action) {
    if (state === void 0) { state = gameStateFactory(); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["d" /* GameStateNewAction */].typeId: {
            return gameStateFromJSON(action.payload);
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["e" /* GameStateNewSuccessAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["f" /* GameStateNewFailAction */].typeId:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["a" /* GameStateTravelAction */].typeId: {
            return state.merge({
                position: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__records__["a" /* pointFactory */])(action.payload.position),
                location: action.payload.location
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["g" /* GameStateEquipItemAction */].typeId:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(state.party.find(function (i) { return i === action.payload.entityId; }), 'cannot equip item on entity that is not in the party');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(state.inventory.find(function (i) { return i === action.payload.itemId; }), 'item does not exist in inventory');
            return state.merge({
                inventory: state.inventory.filter(function (i) { return i !== action.payload.itemId; })
            });
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["h" /* GameStateUnequipItemAction */].typeId:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(state.party.find(function (i) { return i === action.payload.entityId; }), 'cannot remove item from entity that is not in the party');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(!state.inventory.find(function (i) { return i === action.payload.itemId; }), 'item already exists in inventory');
            return state.merge({
                inventory: state.inventory.push(action.payload.itemId)
            });
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["b" /* GameStateTravelSuccessAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["c" /* GameStateTravelFailAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["i" /* GameStateLoadAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["j" /* GameStateLoadSuccessAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["k" /* GameStateLoadFailAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["l" /* GameStateDeleteAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["m" /* GameStateDeleteSuccessAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["n" /* GameStateDeleteFailAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["o" /* GameStateSaveAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["p" /* GameStateSaveSuccessAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["q" /* GameStateSaveFailAction */].typeId:
            return state;
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["r" /* GameStateMoveAction */].typeId: {
            return state.merge({
                position: action.payload
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["s" /* GameStateSetBattleCounterAction */].typeId: {
            return state.merge({
                battleCounter: action.payload
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["t" /* GameStateSetKeyDataAction */].typeId:
            return state.merge({
                keyData: state.keyData.set(action.payload.key, action.payload.value)
            });
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["u" /* GameStateAddGoldAction */].typeId: {
            return state.merge({
                gold: state.gold + action.payload
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["v" /* GameStateHealPartyAction */].typeId: {
            // Subtract cost and return.
            return state.merge({
                gold: state.gold - action.payload.cost
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["w" /* GameStateAddInventoryAction */].typeId: {
            var item_1 = action.payload;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(item_1, 'cannot add invalid item to inventory');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(item_1.eid, 'item must have an eid. consider using "entityId" or "instantiateEntity" during creation');
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(item_1.id, 'item must have a template id. see game-data models for more information');
            var exists = !!state.inventory.find(function (i) { return i === item_1.eid; });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(!exists, 'item already exists in inventory');
            return state.merge({
                inventory: state.inventory.push(item_1.eid)
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__game_state_actions__["x" /* GameStateRemoveInventoryAction */].typeId: {
            var item_2 = action.payload;
            var inventory = state.inventory.filter(function (i) { return i !== item_2.eid; });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["c" /* assertTrue */])(inventory.count() === state.inventory.count() - 1, 'item does not exist in party inventory to remove');
            return state.merge({
                inventory: inventory
            });
        }
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["e" /* exhaustiveCheck */])(action);
            return state;
    }
}
/** @internal {@see sliceGameState} */
var sliceGameStateKeyData = function (state) { return state.keyData; };
function sliceGold(state) {
    return state.gold;
}
function sliceMap(state) {
    return state.location;
}
function slicePosition(state) {
    return state.position;
}
function sliceShipPosition(state) {
    return state.shipPosition;
}
function sliceBattleCounter(state) {
    return state.battleCounter;
}
function sliceCombatZone(state) {
    return state.combatZone;
}
function slicePartyIds(state) {
    return state.party;
}
function sliceInventoryIds(state) {
    return state.inventory;
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprites_actions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__ = __webpack_require__(33);
/* unused harmony export spritesStateFactory */
/* harmony export (immutable) */ __webpack_exports__["d"] = spritesFromJSON;
/* harmony export (immutable) */ __webpack_exports__["c"] = spritesReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sliceSpritesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sliceSpritesById; });




/**
 * @internal
 */
var spritesStateFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["d" /* makeRecordFactory */])({
    loaded: false,
    spritesById: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"]()
});
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function spritesFromJSON(object) {
    var recordValues = {
        spritesById: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](object.spritesById),
        loaded: object.loaded
    };
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__game_pow2_core_api__["b" /* registerSprites */])('', object.spritesById);
    return spritesStateFactory(recordValues);
}
function spritesReducer(state, action) {
    if (state === void 0) { state = spritesStateFactory(); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_2__sprites_actions__["a" /* SpritesRegisterAction */].typeId: {
            var map = __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](action.payload);
            map.forEach(function (value, key) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* assertTrue */])(!state.spritesById.has(key), "duplicates are not allowed. sprite (" + key + ") is already declared");
            });
            return state.updateIn(['spritesById'], function (s) { return s.merge(action.payload); });
        }
        case __WEBPACK_IMPORTED_MODULE_2__sprites_actions__["b" /* SpritesLoadSuccessAction */].typeId: {
            return state.merge({
                loaded: true
            });
        }
        // These only have side-effects
        case __WEBPACK_IMPORTED_MODULE_2__sprites_actions__["c" /* SpritesLoadFailAction */].typeId:
        case __WEBPACK_IMPORTED_MODULE_2__sprites_actions__["d" /* SpritesLoadAction */].typeId:
            return state;
        default:
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["e" /* exhaustiveCheck */])(action);
            return state;
    }
}
/** @internal {@see sliceSpritesState} */
var sliceSpritesLoaded = function (state) { return state.loaded; };
/** @internal {@see sliceSpritesState} */
var sliceSpritesById = function (state) { return state.spritesById; };


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_combat_end_turn_state__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_core_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_tile_behaviors_animated_sprite_behavior__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_pow2_tile_behaviors_sprite_behavior__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_damage_behavior__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_behaviors_sound_behavior__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combat_player_render_behavior__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__combat_action_behavior__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__combat_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_combat_combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_combat_combat_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_selectors__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatAttackBehaviorComponent; });
















/**
 * Attack another entity in combat.
 */
var CombatAttackBehaviorComponent = (function (_super) {
    __extends(CombatAttackBehaviorComponent, _super);
    function CombatAttackBehaviorComponent(store, combatService, gameWorld) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.combatService = combatService;
        _this.gameWorld = gameWorld;
        _this.name = 'attack';
        return _this;
    }
    CombatAttackBehaviorComponent.prototype.canBeUsedBy = function (entity) {
        // Exclude magic casters from physical attacks
        var excludedTypes = [
            'lifemage',
            'deathmage'
        ];
        var partyMember = entity.model;
        if (partyMember.type !== undefined && __WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](excludedTypes, partyMember.type) !== -1) {
            return false;
        }
        return _super.prototype.canBeUsedBy.call(this, entity);
    };
    CombatAttackBehaviorComponent.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var done = function (error) {
            if (then) {
                then(_this, error);
            }
            _this.combat.machine.setCurrentState(__WEBPACK_IMPORTED_MODULE_1__states_combat_end_turn_state__["a" /* CombatEndTurnStateComponent */].NAME);
        };
        //
        var attacker = this.from;
        var defender = this.to;
        var playerRender = attacker.findBehavior(__WEBPACK_IMPORTED_MODULE_7__combat_player_render_behavior__["a" /* CombatPlayerRenderBehaviorComponent */]);
        var attack = function () {
            _this.store.select(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__models_selectors__["c" /* getEntityEquipment */])(attacker.model.eid)).combineLatest(_this.store.select(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__models_selectors__["c" /* getEntityEquipment */])(defender.model.eid)), function (equippedAttacker, equippedDefender) {
                var damage = _this.combatService.attackCombatant(equippedAttacker || attacker.model, equippedDefender || defender.model);
                var didKill = (defender.model.hp - damage) <= 0;
                var hit = damage > 0;
                var defending = false; // TODO: Maps to guard action
                var hitSound = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__game_pow2_core_api__["d" /* getSoundEffectUrl */])(didKill ? 'killed' : (hit ? (defending ? 'miss' : 'hit') : 'miss'));
                var attackData = {
                    attacker: attacker.model,
                    defender: defender.model,
                    damage: damage
                };
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_12__models_combat_combat_actions__["e" /* CombatAttackAction */](attackData));
                var damageAnimation = hit ? (defending ? 'animSmoke.png' : 'animHit.png') : 'animMiss.png';
                var meta = _this.gameWorld.sprites.getSpriteMeta(damageAnimation);
                if (!meta) {
                    console.warn('could not find damage animation in sprites metadata: ' + damageAnimation);
                    return done();
                }
                _this.gameWorld.sprites.getSpriteSheet(meta.source).then(function (damageImages) {
                    var damageImage = damageImages[0].data;
                    var components = {
                        animation: new __WEBPACK_IMPORTED_MODULE_3__game_pow2_tile_behaviors_animated_sprite_behavior__["a" /* AnimatedSpriteBehavior */]({
                            spriteName: 'attack',
                            lengthMS: 350
                        }),
                        sprite: new __WEBPACK_IMPORTED_MODULE_4__game_pow2_tile_behaviors_sprite_behavior__["a" /* SpriteComponent */]({
                            name: 'attack',
                            icon: damageAnimation,
                            meta: meta,
                            image: damageImage
                        }),
                        damage: new __WEBPACK_IMPORTED_MODULE_5__behaviors_damage_behavior__["a" /* DamageComponent */](),
                        sound: new __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_behaviors_sound_behavior__["a" /* SoundBehavior */]({
                            url: hitSound,
                            volume: 0.3
                        })
                    };
                    if (playerRender) {
                        playerRender.setState('Moving');
                    }
                    defender.addComponentDictionary(components);
                    components.damage.once('damage:done', function () {
                        if (playerRender) {
                            playerRender.setState();
                        }
                        if (didKill) {
                            __WEBPACK_IMPORTED_MODULE_0_underscore__["defer"](function () {
                                defender.destroy();
                            });
                        }
                        defender.removeComponentDictionary(components);
                    });
                    var data = {
                        damage: damage,
                        attacker: attacker,
                        defender: defender
                    };
                    _this.combat.machine.notify('combat:attack', data, done);
                });
            })
                .take(1)
                .subscribe();
        };
        if (playerRender) {
            playerRender.attack(attack);
        }
        else {
            // TODO: Shouldn't be here.  This mess is currently to delay NPC attacks.
            __WEBPACK_IMPORTED_MODULE_0_underscore__["delay"](function () {
                attack();
            }, 1000);
        }
        return true;
    };
    return CombatAttackBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_8__combat_action_behavior__["a" /* CombatActionBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__combat_component__["a" /* CombatComponent */])
], CombatAttackBehaviorComponent.prototype, "combat", void 0);
CombatAttackBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["Component"])({
        selector: 'combat-attack-behavior',
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_14__models_combat_combat_service__["a" /* CombatService */],
        __WEBPACK_IMPORTED_MODULE_13__services_game_world__["a" /* GameWorld */]])
], CombatAttackBehaviorComponent);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatActionBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var CombatActionBehavior = (function (_super) {
    __extends(CombatActionBehavior, _super);
    function CombatActionBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'default';
        _this.from = null;
        _this.to = null;
        _this.spell = null;
        _this.item = null;
        return _this;
    }
    CombatActionBehavior.prototype.getActionName = function () {
        return this.name;
    };
    CombatActionBehavior.prototype.isCurrentTurn = function () {
        console.warn('combat: current turn update needed');
        // return this.combat.machine.current === this.from;
        return true;
    };
    CombatActionBehavior.prototype.canTarget = function () {
        return true;
    };
    CombatActionBehavior.prototype.canTargetMultiple = function () {
        return this.canTarget();
    };
    /**
     * Method used to determine if this action is usable by a given
     * [GameEntityObject].  This may be subclassed in an action to
     * select the types of entities that may use the action.
     * @param entity The object that would use the action.
     * @returns {boolean} True if the entity may use this action.
     */
    CombatActionBehavior.prototype.canBeUsedBy = function (entity) {
        // return entity.model && entity.model instanceof EntityModel;
        return true;
    };
    /**
     * Base class invokes the then callback and returns true.
     * @returns {boolean} Whether the act was successful or not.
     */
    CombatActionBehavior.prototype.act = function (then) {
        if (then) {
            then(this, null);
        }
        return true;
    };
    /**
     * The action has been selected for the current turn.
     */
    CombatActionBehavior.prototype.select = function () {
        // nothing
    };
    return CombatActionBehavior;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_damage_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_guards__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combat_player_entity__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__behaviors_index__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combat_enemy_entity__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__states_index__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__combat_map_entity__ = __webpack_require__(142);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__combat_component__["a"]; });
/* unused harmony export COMBAT_EXPORTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBAT_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatModule; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */













/** Components associated with combat */
var COMBAT_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_1__combat_damage_component__["a" /* CombatDamageComponent */],
    __WEBPACK_IMPORTED_MODULE_2__combat_component__["a" /* CombatComponent */]
].concat(__WEBPACK_IMPORTED_MODULE_5__combat_player_entity__["a" /* COMBAT_PLAYER_COMPONENTS */], __WEBPACK_IMPORTED_MODULE_7__combat_enemy_entity__["a" /* COMBAT_ENEMY_COMPONENTS */], __WEBPACK_IMPORTED_MODULE_8__states_index__["a" /* COMBAT_STATE_COMPONENTS */], __WEBPACK_IMPORTED_MODULE_10__combat_map_entity__["a" /* COMBAT_MAP_COMPONENTS */]);
var COMBAT_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_4__combat_guards__["a" /* CanActivateCombat */]
];
var CombatModule = CombatModule_1 = (function () {
    function CombatModule() {
    }
    CombatModule.forRoot = function () {
        return {
            ngModule: CombatModule_1
        };
    };
    return CombatModule;
}());
CombatModule = CombatModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: COMBAT_EXPORTS,
        exports: COMBAT_EXPORTS,
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__behaviors_index__["a" /* BehaviorsModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_index__["a" /* AppComponentsModule */]
        ]
    })
], CombatModule);

var CombatModule_1;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatDefeatStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var CombatDefeatStateComponent = CombatDefeatStateComponent_1 = (function (_super) {
    __extends(CombatDefeatStateComponent, _super);
    function CombatDefeatStateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = CombatDefeatStateComponent_1.NAME;
        return _this;
    }
    CombatDefeatStateComponent.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        var data = {
            enemies: machine.enemies.toArray(),
            party: machine.party.toArray()
        };
        machine.notify('combat:defeat', data, function () {
            alert('defeat is not implemented');
            // machine.parent.world.reportEncounterResult(false);
            // TODO: This is a hack.  Need better game lifetime management.
            window.location.reload(true);
            // machine.parent.setCurrentState(PlayerDefaultState.NAME);
        });
    };
    return CombatDefeatStateComponent;
}(__WEBPACK_IMPORTED_MODULE_0__combat_base_state__["a" /* CombatMachineState */]));
CombatDefeatStateComponent.NAME = 'Combat Defeat';
CombatDefeatStateComponent = CombatDefeatStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-defeat-state',
        template: "<ng-content></ng-content>"
    })
], CombatDefeatStateComponent);

var CombatDefeatStateComponent_1;


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatEscapeStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var CombatEscapeStateComponent = CombatEscapeStateComponent_1 = (function (_super) {
    __extends(CombatEscapeStateComponent, _super);
    function CombatEscapeStateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = CombatEscapeStateComponent_1.NAME;
        return _this;
    }
    CombatEscapeStateComponent.prototype.enter = function (machine) {
        _super.prototype.enter.call(this, machine);
        machine.notify('combat:escape', {
            player: machine.current
        }, function () {
            alert('combat escape needs fixin\'');
            // machine.parent.world.reportEncounterResult(false);
            // machine.parent.setCurrentState(PlayerMapState.NAME);
        });
    };
    return CombatEscapeStateComponent;
}(__WEBPACK_IMPORTED_MODULE_0__combat_base_state__["a" /* CombatMachineState */]));
CombatEscapeStateComponent.NAME = 'Combat Escaped';
CombatEscapeStateComponent = CombatEscapeStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-escape-state',
        template: "<ng-content></ng-content>"
    })
], CombatEscapeStateComponent);

var CombatEscapeStateComponent_1;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_choose_action_state__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatStartStateComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





// Combat Begin
var CombatStartStateComponent = CombatStartStateComponent_1 = (function (_super) {
    __extends(CombatStartStateComponent, _super);
    function CombatStartStateComponent(notify) {
        var _this = _super.call(this) || this;
        _this.notify = notify;
        _this.name = CombatStartStateComponent_1.NAME;
        return _this;
    }
    CombatStartStateComponent.prototype.enter = function (machine) {
        var _this = this;
        _super.prototype.enter.call(this, machine);
        __WEBPACK_IMPORTED_MODULE_0_underscore__["defer"](function () {
            var encounter = machine.encounter;
            var _done = function () {
                machine.setCurrentState(__WEBPACK_IMPORTED_MODULE_2__combat_choose_action_state__["a" /* CombatChooseActionStateComponent */].NAME);
            };
            if (encounter && encounter.message) {
                // If the message contains pipe's, treat what is between each pipe as a separate
                // message to be displayed.
                var msgs = encounter.message.slice();
                var last = msgs.pop();
                msgs.forEach(function (m) { return _this.notify.show(m, null, 0); });
                _this.notify.show(last, _done, 0);
            }
            else {
                _done();
            }
        });
    };
    return CombatStartStateComponent;
}(__WEBPACK_IMPORTED_MODULE_1__combat_base_state__["a" /* CombatMachineState */]));
CombatStartStateComponent.NAME = 'Combat Started';
CombatStartStateComponent = CombatStartStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'combat-start-state',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__["a" /* NotificationService */]])
], CombatStartStateComponent);

var CombatStartStateComponent_1;


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_base_state__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_levels__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_combat_combat_actions__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatVictoryStateComponent; });









var CombatVictoryStateComponent = CombatVictoryStateComponent_1 = (function (_super) {
    __extends(CombatVictoryStateComponent, _super);
    function CombatVictoryStateComponent(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.name = CombatVictoryStateComponent_1.NAME;
        /**
         * Item templates to instantiate any combat victory reward items
         */
        _this.items$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["j" /* getGameDataWeapons */])
            .combineLatest(_this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["k" /* getGameDataArmors */]), _this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["l" /* getGameDataItems */]), function (weapons, armors, items) {
            return items.concat(weapons).concat(armors);
        });
        return _this;
    }
    CombatVictoryStateComponent.prototype.awardExperience = function (exp, model) {
        var newExp = model.exp + exp;
        var result = __assign({}, model, { exp: newExp });
        var nextLevel = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["a" /* getXPForLevel */])(model.level + 1);
        if (newExp >= nextLevel) {
            result = this.awardLevelUp(model);
        }
        return result;
    };
    CombatVictoryStateComponent.prototype.awardLevelUp = function (model) {
        var nextLevel = model.level + 1;
        var newHP = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["b" /* getHPForLevel */])(nextLevel, model);
        return __assign({}, model, { level: nextLevel, maxhp: newHP, hp: newHP, attack: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["c" /* getStrengthForLevel */])(nextLevel, model), speed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["d" /* getAgilityForLevel */])(nextLevel, model), defense: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["e" /* getVitalityForLevel */])(nextLevel, model), magic: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["f" /* getIntelligenceForLevel */])(nextLevel, model) });
    };
    CombatVictoryStateComponent.prototype.enter = function (machine) {
        var _this = this;
        _super.prototype.enter.call(this, machine);
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["g" /* sliceCombatState */])
            .take(1)
            .combineLatest(this.items$, function (state, items) {
            var players = state.party.toArray();
            var enemies = state.enemies.toArray();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__models_util__["c" /* assertTrue */])(players.length > 0, 'no living players during combat victory state');
            var gold = 0;
            var exp = 0;
            var itemTemplateIds = [];
            // Sum experience and gold for each enemy that was defeated
            state.enemies.forEach(function (combatant) {
                gold += combatant.gold || 0;
                exp += combatant.exp || 0;
            });
            // Apply Fixed encounter bonus awards
            //
            if (state.type === 'fixed') {
                if (state.gold > 0) {
                    gold += state.gold;
                }
                if (state.experience > 0) {
                    exp += state.experience;
                }
                if (state.items && state.items.length > 0) {
                    itemTemplateIds = itemTemplateIds.concat(state.items);
                }
            }
            // Award gold
            //
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_game_state_game_state_actions__["u" /* GameStateAddGoldAction */](gold));
            // Award items
            //
            var itemInstances = [];
            itemTemplateIds.forEach(function (itemId) {
                var item = items.find(function (i) { return i.id === itemId; });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__models_util__["c" /* assertTrue */])(!!item, 'cannot award unknown item ' + itemId);
                var model = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__["b" /* instantiateEntity */])(item);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_game_state_game_state_actions__["w" /* GameStateAddInventoryAction */](model));
            });
            // Award experience
            //
            var expPerParty = Math.round(exp / players.length);
            var levelUps = [];
            players = players.map(function (player) {
                var result = _this.awardExperience(expPerParty, player);
                if (result.level > player.level) {
                    levelUps.push(result);
                }
                return result;
            });
            // Dispatch victory action
            var summary = {
                type: machine.encounter.type,
                id: machine.encounter.id,
                party: players,
                enemies: enemies,
                levels: levelUps,
                items: itemInstances,
                gold: gold,
                exp: exp
            };
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__models_combat_combat_actions__["a" /* CombatVictoryAction */](summary));
        }).subscribe();
    };
    return CombatVictoryStateComponent;
}(__WEBPACK_IMPORTED_MODULE_0__combat_base_state__["a" /* CombatMachineState */]));
CombatVictoryStateComponent.NAME = 'Combat Victory';
CombatVictoryStateComponent = CombatVictoryStateComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-victory-state',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], CombatVictoryStateComponent);

var CombatVictoryStateComponent_1;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_core_state_machine__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_start_state__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow2_tile_tile_map_view__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatStateMachineComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */







// Combat State Machine
var CombatStateMachineComponent = (function (_super) {
    __extends(CombatStateMachineComponent, _super);
    function CombatStateMachineComponent(combatService) {
        var _this = _super.call(this) || this;
        _this.combatService = combatService;
        _this.defaultState = __WEBPACK_IMPORTED_MODULE_2__combat_start_state__["a" /* CombatStartStateComponent */].NAME;
        _this.states = [];
        _this.turnList = [];
        _this.playerChoices = {};
        _this.currentDone = false;
        return _this;
    }
    CombatStateMachineComponent.prototype.ngAfterViewInit = function () {
        this.addStates(this.childStates.toArray());
        this.setCurrentState(this.getState(this.defaultState));
    };
    CombatStateMachineComponent.prototype.isFriendlyTurn = function () {
        var _this = this;
        return !!(this.current && this.party.find(function (member) { return member._uid === _this.current._uid; }));
    };
    CombatStateMachineComponent.prototype.getLiveParty = function () {
        var _this = this;
        return this.party.filter(function (obj) {
            return !_this.combatService.isDefeated(obj.model);
        });
    };
    CombatStateMachineComponent.prototype.getLiveEnemies = function () {
        var _this = this;
        return this.enemies.filter(function (obj) {
            return !_this.combatService.isDefeated(obj.model);
        });
    };
    CombatStateMachineComponent.prototype.getRandomPartyMember = function () {
        var players = __WEBPACK_IMPORTED_MODULE_0_underscore__["shuffle"](this.party.toArray());
        while (players.length > 0) {
            var p = players.shift();
            if (!this.combatService.isDefeated(p.model)) {
                return p;
            }
        }
        return null;
    };
    CombatStateMachineComponent.prototype.getRandomEnemy = function () {
        var players = __WEBPACK_IMPORTED_MODULE_0_underscore__["shuffle"](this.enemies.toArray());
        while (players.length > 0) {
            var p = players.shift();
            if (!this.combatService.isDefeated(p.model)) {
                return p;
            }
        }
        return null;
    };
    CombatStateMachineComponent.prototype.partyDefeated = function () {
        return this.getLiveParty().length === 0;
    };
    CombatStateMachineComponent.prototype.enemiesDefeated = function () {
        return this.getLiveEnemies().length === 0;
    };
    return CombatStateMachineComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_core_state_machine__["a" /* StateMachine */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__game_pow2_scene_scene__["a" /* Scene */])
], CombatStateMachineComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CombatStateMachineComponent.prototype, "encounter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"])
], CombatStateMachineComponent.prototype, "party", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"])
], CombatStateMachineComponent.prototype, "enemies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__game_pow2_tile_tile_map_view__["a" /* TileMapView */])
], CombatStateMachineComponent.prototype, "view", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChildren"])('start,beginTurn,chooseAction,endTurn,defeat,victory,escape'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["QueryList"])
], CombatStateMachineComponent.prototype, "childStates", void 0);
CombatStateMachineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'combat-state-machine',
        template: "\n    <combat-start-state #start></combat-start-state>\n    <combat-begin-turn-state #beginTurn></combat-begin-turn-state>\n    <combat-choose-action-state\n      [pointAt]=\"current\"\n      #chooseAction></combat-choose-action-state>\n    <combat-end-turn-state #endTurn></combat-end-turn-state>\n    <combat-defeat-state #defeat></combat-defeat-state>\n    <combat-victory-state #victory></combat-victory-state>\n    <combat-escape-state #escape></combat-escape-state>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__["a" /* CombatService */]])
], CombatStateMachineComponent);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_core_animator__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* unused harmony export MoveFrames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Headings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PlayerRenderBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var MoveFrames;
(function (MoveFrames) {
    MoveFrames[MoveFrames["LEFT"] = 10] = "LEFT";
    MoveFrames[MoveFrames["RIGHT"] = 4] = "RIGHT";
    MoveFrames[MoveFrames["DOWN"] = 7] = "DOWN";
    MoveFrames[MoveFrames["UP"] = 1] = "UP";
    MoveFrames[MoveFrames["LEFTALT"] = 11] = "LEFTALT";
    MoveFrames[MoveFrames["RIGHTALT"] = 5] = "RIGHTALT";
    MoveFrames[MoveFrames["DOWNALT"] = 8] = "DOWNALT";
    MoveFrames[MoveFrames["UPALT"] = 2] = "UPALT";
})(MoveFrames || (MoveFrames = {}));
// The order here maps to the first four frames in MoveFrames above.
// It matters, don't change without care.
var Headings;
(function (Headings) {
    Headings[Headings["WEST"] = 0] = "WEST";
    Headings[Headings["EAST"] = 1] = "EAST";
    Headings[Headings["SOUTH"] = 2] = "SOUTH";
    Headings[Headings["NORTH"] = 3] = "NORTH";
})(Headings || (Headings = {}));
var PlayerRenderBehaviorComponent = (function (_super) {
    __extends(PlayerRenderBehaviorComponent, _super);
    function PlayerRenderBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._animator = new __WEBPACK_IMPORTED_MODULE_1__game_pow2_core_animator__["a" /* Animator */]();
        _this.heading = Headings.WEST;
        _this.animating = false;
        return _this;
    }
    PlayerRenderBehaviorComponent.prototype.setHeading = function (direction, animating) {
        if (!this._animator.sourceAnims) {
            this._animator.setAnimationSource(this.host.icon);
        }
        this.heading = direction;
        switch (this.heading) {
            case Headings.SOUTH:
                this._animator.setAnimation('down');
                break;
            case Headings.NORTH:
                this._animator.setAnimation('up');
                break;
            case Headings.EAST:
                this._animator.setAnimation('right');
                break;
            case Headings.WEST:
                this._animator.setAnimation('left');
                break;
            default:
                console.warn('unsupported heading direction: ' + this.heading);
                break;
        }
        this._animator.updateTime(0);
        this.animating = animating;
    };
    PlayerRenderBehaviorComponent.prototype.setMoving = function (moving) {
        this.animating = moving;
    };
    PlayerRenderBehaviorComponent.prototype.interpolateTick = function (elapsed) {
        _super.prototype.interpolateTick.call(this, elapsed);
        if (this.animating) {
            this._animator.updateTime(elapsed);
        }
        this.host.frame = this._animator.getFrame();
    };
    return PlayerRenderBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));
PlayerRenderBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'player-render-behavior',
        template: "<ng-content></ng-content>"
    })
], PlayerRenderBehaviorComponent);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animate; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Provide an API for animating elements with CSS transitions
 */
var Animate = (function () {
    function Animate() {
        /**
         * Look up the transition event name for the browser type and cache it.
         */
        this.eventName = this.whichTransitionEvent();
    }
    Animate.prototype.enter = function (el, cssClass) {
        var _this = this;
        return new Promise(function (resolve) {
            el.classList.add(cssClass);
            var duration = _this.getTransitionDuration(el, true);
            var callTimeout;
            var done = function () {
                clearTimeout(callTimeout);
                el.removeEventListener(_this.eventName, done);
                resolve();
            };
            callTimeout = setTimeout(function () { return done(); }, duration);
            el.addEventListener(_this.eventName, done);
        });
    };
    Animate.prototype.leave = function (el, cssClass) {
        var _this = this;
        return new Promise(function (resolve) {
            var duration = _this.getTransitionDuration(el, true);
            var callTimeout;
            var done = function () {
                clearTimeout(callTimeout);
                el.removeEventListener(_this.eventName, done);
                resolve();
            };
            callTimeout = setTimeout(function () { return done(); }, duration);
            el.addEventListener(_this.eventName, done);
            el.classList.remove(cssClass);
        });
    };
    /**
     * Get the duration of any transitions being applied to the given element.
     *
     * Based on: https://gist.github.com/snorpey/5323028
     * @param element The element to query
     * @param includeDelay Include any specified transition-delay value.
     * @returns {number}
     */
    Animate.prototype.getTransitionDuration = function (element, includeDelay) {
        if (includeDelay === void 0) { includeDelay = false; }
        var prefixes = ['moz', 'webkit', 'ms', 'o', 'khtml'];
        var style = window.getComputedStyle(element);
        for (var i = 0; i < prefixes.length; i++) {
            var duration = style['-' + prefixes[i] + '-transition-duration'];
            if (!duration) {
                continue;
            }
            duration = (duration.indexOf('ms') > -1) ? parseFloat(duration) : parseFloat(duration) * 1000;
            if (includeDelay) {
                var delay = style['-' + prefixes[i] + '-transition-delay'];
                if (typeof delay !== 'undefined') {
                    duration += (delay.indexOf('ms') > -1) ? parseFloat(delay) : parseFloat(delay) * 1000;
                }
            }
            return duration;
        }
        return 0;
    };
    /* From Modernizr */
    Animate.prototype.whichTransitionEvent = function () {
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };
    return Animate;
}());
Animate = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], Animate);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_core_api__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteRender; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var SpriteRender = SpriteRender_1 = (function () {
    function SpriteRender(loader) {
        this.loader = loader;
        this.canvas = null;
        this.context = null;
        this.canvas = document.createElement('canvas');
        this.sizeCanvas(SpriteRender_1.SIZE, SpriteRender_1.SIZE);
    }
    SpriteRender.getSpriteSheetUrl = function (name) {
        return "assets/images/" + name + ".png";
    };
    SpriteRender.prototype.sizeCanvas = function (width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.context = this.canvas.getContext('2d');
        this.context.msImageSmoothingEnabled = false;
        this.context.imageSmoothingEnabled = false;
        this.context.webkitImageSmoothingEnabled = false;
        this.context.mozImageSmoothingEnabled = false;
    };
    SpriteRender.prototype.getSpriteSheet = function (name) {
        return this.loader.load(SpriteRender_1.getSpriteSheetUrl(name));
    };
    SpriteRender.prototype.getSingleSprite = function (spriteName, frame) {
        var _this = this;
        if (frame === void 0) { frame = 0; }
        var coords = __WEBPACK_IMPORTED_MODULE_0__game_pow2_core_api__["c" /* data */].sprites[spriteName];
        if (!coords) {
            return Promise.reject("Unable to find sprite by name: " + spriteName);
        }
        return new Promise(function (resolve, reject) {
            _this.getSpriteSheet(coords.source).then(function (images) {
                var image = images[0];
                var cell = _this.getSpriteRect(spriteName, frame);
                // Resize render target to match cell size
                _this.sizeCanvas(cell.extent.x, cell.extent.y);
                // Clear the canvas
                _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
                // Render the sprite to the canvas at 0,0
                _this.context.drawImage(image.data, 
                // x,y
                cell.point.x, cell.point.y, 
                // width,height
                cell.extent.x, cell.extent.y, 
                // target x,y
                0, 0, 
                // target width,height
                _this.canvas.width, _this.canvas.height);
                // Serialize the canvas and return as an HTMLImageElement
                var src = _this.canvas.toDataURL();
                var result = new Image();
                result.src = src;
                result.onload = function () {
                    resolve(result);
                };
                result.onerror = function (err) {
                    reject(err);
                };
            });
        });
    };
    SpriteRender.prototype.getSpriteRect = function (name, frame) {
        if (frame === void 0) { frame = 0; }
        var c = this.getSpriteMeta(name);
        var cx = c.x;
        var sourceWidth = SpriteRender_1.SIZE;
        var sourceHeight = SpriteRender_1.SIZE;
        var cy = c.y;
        if (c.frames > 1) {
            if (c && typeof c.cellWidth !== 'undefined' && typeof c.cellHeight !== 'undefined') {
                sourceWidth = c.cellWidth;
                sourceHeight = c.cellHeight;
            }
            var cwidth = c.width / sourceWidth;
            var fx = (frame % (cwidth));
            var fy = Math.floor((frame - fx) / cwidth);
            cx += fx * sourceWidth;
            cy += fy * sourceHeight;
        }
        else {
            sourceWidth = c.width;
            sourceHeight = c.height;
        }
        return new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_rect__["a" /* Rect */](cx, cy, sourceWidth, sourceHeight);
    };
    SpriteRender.prototype.getSpriteMeta = function (name) {
        var desc = __WEBPACK_IMPORTED_MODULE_0__game_pow2_core_api__["c" /* data */].sprites[name];
        return desc;
    };
    return SpriteRender;
}());
SpriteRender.SIZE = 16;
SpriteRender = SpriteRender_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__game_pow_core_resource_manager__["a" /* ResourceManager */]])
], SpriteRender);

var SpriteRender_1;


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Use html image element to load an image resource.
 */
var ImageResource = (function (_super) {
    __extends(ImageResource, _super);
    function ImageResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageResource.prototype.fetch = function (url) {
        var _this = this;
        this.url = url || this.url;
        return new Promise(function (resolve, reject) {
            var reference = new Image();
            reference.onload = function () {
                _this.data = reference;
                resolve(_this);
            };
            reference.onerror = function (err) {
                reject(err);
            };
            reference.src = _this.url;
        });
    };
    return ImageResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]));



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__errors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tiled__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__xml_resource__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiled_tsx_resource__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiledTMXResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */







/**
 * Use jQuery to load a TMX $map file from a URL.
 */
var TiledTMXResource = (function (_super) {
    __extends(TiledTMXResource, _super);
    function TiledTMXResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.width = 0;
        _this.height = 0;
        _this.orientation = 'orthogonal';
        _this.tileheight = 16;
        _this.tilewidth = 16;
        _this.version = 1;
        _this.properties = {};
        _this.tilesets = {};
        _this.layers = [];
        _this.xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
        return _this;
    }
    TiledTMXResource.prototype.write = function () {
        var _this = this;
        var root = __WEBPACK_IMPORTED_MODULE_5_jquery__('<map/>');
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'version', this.version);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'orientation', this.orientation);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'width', this.width);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'height', this.height);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'tilewidth', this.tilewidth);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["c" /* setElAttribute */])(root, 'tileheight', this.tileheight);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["d" /* writeTiledProperties */])(root, this.properties);
        __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](this.tilesets, function (tileSet) {
            if (!tileSet.literal) {
                throw new Error('Add support for inline TSX writing');
            }
            if (!tileSet.firstgid) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ITEM);
            }
            var tilesetElement = __WEBPACK_IMPORTED_MODULE_5_jquery__('<tileset/>');
            tilesetElement.attr('firstgid', tileSet.firstgid);
            tilesetElement.attr('source', tileSet.literal);
            root.append(tilesetElement);
        });
        __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](this.layers, function (layer) {
            var layerElement = null;
            if (typeof layer.data !== 'undefined') {
                layerElement = __WEBPACK_IMPORTED_MODULE_5_jquery__('<layer/>');
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["e" /* writeITiledObjectBase */])(layerElement, layer);
                var dataElement = __WEBPACK_IMPORTED_MODULE_5_jquery__('<data/>');
                // Validate data length
                var expectLength = _this.width * _this.height;
                if (layer.data.length !== expectLength) {
                    throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ITEM);
                }
                // Only supports CSV. Add GZIP support some day.
                dataElement.attr('encoding', 'csv');
                dataElement.text(layer.data.join(','));
                layerElement.append(dataElement);
            }
            else if (typeof layer.objects !== 'undefined') {
                layerElement = __WEBPACK_IMPORTED_MODULE_5_jquery__('<objectgroup/>');
                __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](layer.objects, function (obj) {
                    var objectElement = __WEBPACK_IMPORTED_MODULE_5_jquery__('<object/>');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["e" /* writeITiledObjectBase */])(objectElement, obj);
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["d" /* writeTiledProperties */])(objectElement, obj.properties);
                    layerElement.append(objectElement);
                });
            }
            else {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__errors__["a" /* errors */].INVALID_ITEM);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["f" /* writeITiledLayerBase */])(layerElement, layer);
            root.append(layerElement);
        });
        return this.xmlHeader + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["g" /* xml2Str */])(root[0]);
    };
    TiledTMXResource.prototype.load = function (data) {
        var _this = this;
        this.data = data || this.data;
        return new Promise(function (resolve, reject) {
            _this.$map = _this.getRootNode('map');
            _this.version = parseInt(_this.getElAttribute(_this.$map, 'version'), 10);
            _this.width = parseInt(_this.getElAttribute(_this.$map, 'width'), 10);
            _this.height = parseInt(_this.getElAttribute(_this.$map, 'height'), 10);
            _this.orientation = _this.getElAttribute(_this.$map, 'orientation');
            _this.tileheight = parseInt(_this.getElAttribute(_this.$map, 'tileheight'), 10);
            _this.tilewidth = parseInt(_this.getElAttribute(_this.$map, 'tilewidth'), 10);
            _this.properties = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["a" /* readTiledProperties */])(_this.$map);
            var tileSetDeps = [];
            var tileSets = _this.getChildren(_this.$map, 'tileset');
            var relativePath = _this.url.substr(0, _this.url.lastIndexOf('/') + 1);
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](tileSets, function (ts) {
                var source = _this.getElAttribute(ts, 'source');
                var firstGid = parseInt(_this.getElAttribute(ts, 'firstgid') || '-1', 10);
                if (source) {
                    tileSetDeps.push({
                        source: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["b" /* compactUrl */])(relativePath, source),
                        literal: source,
                        firstgid: firstGid
                    });
                }
                else {
                    tileSetDeps.push({
                        data: ts,
                        source: relativePath,
                        firstgid: firstGid
                    });
                }
            });
            // Extract tile <layer>s and <objectgroup>s
            var layers = _this.getChildren(_this.$map, 'layer,objectgroup');
            var failed = false;
            __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](layers, function (layer) {
                if (failed) {
                    return;
                }
                var tileLayer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["h" /* readITiledLayerBase */])(layer);
                _this.layers.push(tileLayer);
                // Take CSV and convert it to JSON array, then parse.
                var layerData = _this.getChild(layer, 'data');
                if (layerData) {
                    var encoding = _this.getElAttribute(layerData, 'encoding');
                    if (!encoding || encoding.toLowerCase() !== 'csv') {
                        failed = true;
                        return reject("pow-core only supports CSV maps. Edit the Map Properties (for:" + _this.url + ") to use the CSV");
                    }
                    tileLayer.data = JSON.parse('[' + __WEBPACK_IMPORTED_MODULE_5_jquery__["trim"](layerData.text()) + ']');
                }
                // Any custom color for this layer?
                var color = _this.getElAttribute(layer, 'color');
                if (color) {
                    tileLayer.color = color;
                }
                // Read any child objects
                var objects = _this.getChildren(layer, 'object');
                if (objects) {
                    tileLayer.objects = [];
                    __WEBPACK_IMPORTED_MODULE_4_underscore__["each"](objects, function (object) {
                        tileLayer.objects.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__tiled__["i" /* readITiledObject */])(object));
                    });
                }
            });
            // IF failed is set to true, the promise will already have been rejected, so we can return safely here.
            if (failed) {
                return;
            }
            // Load any source references.
            var _next = function () {
                if (tileSetDeps.length <= 0) {
                    return resolve(_this);
                }
                var dep = tileSetDeps.shift();
                if (dep.data) {
                    new __WEBPACK_IMPORTED_MODULE_3__tiled_tsx_resource__["a" /* TiledTSXResource */]()
                        .load(dep.data)
                        .then(function (resource) {
                        resource.relativeTo = relativePath;
                        resource.firstgid = dep.firstgid;
                        _this.tilesets[resource.name] = resource;
                        _next();
                    })
                        .catch(function (e) { return reject(e); });
                }
                else if (dep.source) {
                    new __WEBPACK_IMPORTED_MODULE_3__tiled_tsx_resource__["a" /* TiledTSXResource */]()
                        .fetch(dep.source)
                        .then(function (resource) {
                        _this.tilesets[resource.name] = resource;
                        resource.firstgid = dep.firstgid;
                        resource.literal = dep.literal;
                        _next();
                    })
                        .catch(function (e) { return reject(e); });
                }
                else {
                    reject('Unknown type of tile set data');
                }
            };
            _next();
        });
    };
    return TiledTMXResource;
}(__WEBPACK_IMPORTED_MODULE_2__xml_resource__["a" /* XMLResource */]));



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__xml_resource__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_resource__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiled__ = __webpack_require__(97);
/* unused harmony export TilesetTile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiledTSXResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var TilesetTile = (function () {
    function TilesetTile(id) {
        this.properties = {};
        this.id = id;
    }
    return TilesetTile;
}());

/**
 * A Tiled TSX tileset resource
 */
var TiledTSXResource = (function (_super) {
    __extends(TiledTSXResource, _super);
    function TiledTSXResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = null;
        _this.tilewidth = 16;
        _this.tileheight = 16;
        _this.imageWidth = 0;
        _this.imageHeight = 0;
        _this.image = null;
        _this.firstgid = -1;
        _this.tiles = [];
        _this.relativeTo = null;
        _this.imageUrl = null;
        _this.literal = null; // The literal source path specified in xml
        return _this;
    }
    TiledTSXResource.prototype.load = function (data) {
        var _this = this;
        this.data = data || this.data;
        return new Promise(function (resolve, reject) {
            var tileSet = _this.getRootNode('tileset');
            _this.name = _this.getElAttribute(tileSet, 'name');
            _this.tilewidth = parseInt(_this.getElAttribute(tileSet, 'tilewidth'), 10);
            _this.tileheight = parseInt(_this.getElAttribute(tileSet, 'tileheight'), 10);
            var relativePath = _this.url ? _this.url.substr(0, _this.url.lastIndexOf('/') + 1) : '';
            // Load tiles and custom properties.
            var tiles = _this.getChildren(tileSet, 'tile');
            __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](tiles, function (ts) {
                var id = parseInt(_this.getElAttribute(ts, 'id'), 10);
                var tile = new TilesetTile(id);
                tile.properties = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tiled__["a" /* readTiledProperties */])(ts);
                _this.tiles.push(tile);
            });
            var image = _this.getChild(tileSet, 'img');
            if (!image || image.length === 0) {
                return resolve(_this);
            }
            var source = _this.getElAttribute(image, 'source');
            _this.imageWidth = parseInt(_this.getElAttribute(image, 'width') || '0', 10);
            _this.imageHeight = parseInt(_this.getElAttribute(image, 'height') || '0', 10);
            _this.imageUrl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__tiled__["b" /* compactUrl */])(_this.relativeTo ? _this.relativeTo : relativePath, source);
            console.log("Tileset source: " + _this.imageUrl);
            new __WEBPACK_IMPORTED_MODULE_1__image_resource__["a" /* ImageResource */](_this.imageUrl)
                .fetch()
                .then(function (res) {
                _this.image = res;
                _this.imageWidth = _this.image.data.width;
                _this.imageHeight = _this.image.data.height;
                // Finally, build an expanded tileset from the known image w/h and the
                // tiles with properties that are specified in the form of <tile> objects.
                var xUnits = _this.imageWidth / _this.tilewidth;
                var yUnits = _this.imageHeight / _this.tileheight;
                var tileCount = xUnits * yUnits;
                var tileLookup = new Array(tileCount);
                for (var i = 0; i < tileCount; i++) {
                    tileLookup[i] = false;
                }
                __WEBPACK_IMPORTED_MODULE_2_underscore__["each"](_this.tiles, function (tile) {
                    tileLookup[tile.id] = tile.properties;
                });
                _this.tiles = tileLookup;
                resolve(_this);
            })
                .catch(function (e) {
                reject("Failed to load required TileMap image: " + source + " - " + e);
            });
        });
    };
    TiledTSXResource.prototype.hasGid = function (gid) {
        return this.firstgid !== -1
            && gid >= this.firstgid
            && gid < this.firstgid + this.tiles.length;
    };
    TiledTSXResource.prototype.getTileMeta = function (gidOrIndex) {
        var index = this.firstgid !== -1 ? (gidOrIndex - (this.firstgid)) : gidOrIndex;
        var tilesX = this.imageWidth / this.tilewidth;
        var x = index % tilesX;
        var y = Math.floor((index - x) / tilesX);
        return __WEBPACK_IMPORTED_MODULE_2_underscore__["extend"](this.tiles[index] || {}, {
            image: this.image,
            url: this.imageUrl,
            x: x * this.tilewidth,
            y: y * this.tileheight,
            width: this.tilewidth,
            height: this.tileheight
        });
    };
    return TiledTSXResource;
}(__WEBPACK_IMPORTED_MODULE_0__xml_resource__["a" /* XMLResource */]));



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* unused harmony export readITiledBase */
/* unused harmony export writeITiledBase */
/* harmony export (immutable) */ __webpack_exports__["e"] = writeITiledObjectBase;
/* harmony export (immutable) */ __webpack_exports__["i"] = readITiledObject;
/* harmony export (immutable) */ __webpack_exports__["h"] = readITiledLayerBase;
/* harmony export (immutable) */ __webpack_exports__["b"] = compactUrl;
/* harmony export (immutable) */ __webpack_exports__["g"] = xml2Str;
/* harmony export (immutable) */ __webpack_exports__["f"] = writeITiledLayerBase;
/* harmony export (immutable) */ __webpack_exports__["a"] = readTiledProperties;
/* harmony export (immutable) */ __webpack_exports__["d"] = writeTiledProperties;
/* unused harmony export getChildren */
/* unused harmony export getChild */
/* harmony export (immutable) */ __webpack_exports__["c"] = setElAttribute;
/* unused harmony export getElAttribute */
/*! Copyright (c) 2013-2017 Justin DuJardin and Contributors. MIT License. */


// Tiled object XML reading utilities.
function readITiledBase(el) {
    return {
        name: getElAttribute(el, 'name'),
        x: parseInt(getElAttribute(el, 'x') || '0', 10),
        y: parseInt(getElAttribute(el, 'y') || '0', 10),
        width: parseInt(getElAttribute(el, 'width') || '0', 10),
        height: parseInt(getElAttribute(el, 'height') || '0', 10),
        visible: parseInt(getElAttribute(el, 'visible') || '1', 10) === 1,
        _xml: el
    };
}
function writeITiledBase(el, data) {
    setElAttribute(el, 'name', data.name);
    if (data.type) {
        setElAttribute(el, 'type', data.type);
    }
    if (data.x !== 0) {
        setElAttribute(el, 'x', data.x);
    }
    if (data.y !== 0) {
        setElAttribute(el, 'y', data.y);
    }
    setElAttribute(el, 'width', data.width);
    setElAttribute(el, 'height', data.height);
    if (data.visible === false) {
        setElAttribute(el, 'visible', data.visible);
    }
    if (typeof data.color !== 'undefined') {
        setElAttribute(el, 'color', data.color);
    }
}
function writeITiledObjectBase(el, data) {
    writeITiledBase(el, data);
}
function readITiledObject(el) {
    // Base layer properties
    var result = readITiledLayerBase(el);
    var type = getElAttribute(el, 'type');
    if (type) {
        result.type = type;
    }
    return result;
}
function readITiledLayerBase(el) {
    // Base layer properties
    var result = readITiledBase(el);
    // Layer opacity is 0-1
    result.opacity = parseInt(getElAttribute(el, 'opacity') || '1', 10);
    // Custom properties
    var props = readTiledProperties(el);
    if (props) {
        result.properties = props;
    }
    return result;
}
// StackOverflow: http://stackoverflow.com/questions/14780350/convert-relative-path-to-absolute-using-javascript
function compactUrl(base, relative) {
    var stack = base.split('/');
    var parts = relative.split('/');
    stack.pop(); // remove current file name (or empty string)
    // (omit if "base" is the current folder without trailing slash)
    for (var i = 0; i < parts.length; i++) {
        if (parts[i] === '.') {
            continue;
        }
        if (parts[i] === '..') {
            stack.pop();
        }
        else {
            stack.push(parts[i]);
        }
    }
    return stack.join('/');
}
function xml2Str(xmlNode) {
    try {
        // Gecko- and Webkit-based browsers (Firefox, Chrome), Opera.
        return (new XMLSerializer()).serializeToString(xmlNode);
    }
    catch (e) {
        try {
            // Internet Explorer.
            return xmlNode.xml;
        }
        catch (e) {
            // Other browsers without XML Serializer
            throw new Error('Xmlserializer not supported');
        }
    }
}
function writeITiledLayerBase(el, data) {
    writeITiledBase(el, data);
    setElAttribute(el, 'opacity', data.opacity);
    writeTiledProperties(el, data.properties);
}
function readTiledProperties(el) {
    var propsObject = getChild(el, 'properties');
    if (propsObject && propsObject.length > 0) {
        var properties_1 = {};
        var props = getChildren(propsObject, 'property');
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](props, function (p) {
            var key = getElAttribute(p, 'name');
            var value = getElAttribute(p, 'value');
            // Do some horrible type guessing.
            if (typeof value === 'string') {
                var checkValue = value.toLowerCase();
                var checkNumber = parseFloat(value);
                if (checkValue === 'true' || checkValue === 'false') {
                    value = checkValue === 'true';
                }
                else if (!isNaN((checkNumber))) {
                    value = checkNumber;
                }
            }
            properties_1[key] = value;
        });
        return properties_1;
    }
    return null;
}
function writeTiledProperties(el, data) {
    var result = __WEBPACK_IMPORTED_MODULE_1_jquery__('<properties/>');
    __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](data, function (value, key) {
        var prop = __WEBPACK_IMPORTED_MODULE_1_jquery__('<property/>');
        setElAttribute(prop, 'name', key);
        setElAttribute(prop, 'value', value);
        result.append(prop);
    });
    if (result.children().length > 0) {
        el.append(result);
    }
}
// XML Utilities
function getChildren(el, tag) {
    var list = el.find(tag);
    return __WEBPACK_IMPORTED_MODULE_0_underscore__["compact"](__WEBPACK_IMPORTED_MODULE_0_underscore__["map"](list, function (c) {
        var child = __WEBPACK_IMPORTED_MODULE_1_jquery__(c);
        return child.parent()[0] !== el[0] ? null : child;
    }));
}
function getChild(el, tag) {
    return getChildren(el, tag)[0];
}
function setElAttribute(el, name, value) {
    el.attr(name, value);
}
function getElAttribute(el, name) {
    return el.attr(name) || null;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Time; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var _shared = null;
var Time = Time_1 = (function () {
    function Time() {
        this.tickRateMS = 32;
        this.mspf = 0;
        this.world = null;
        this.lastTime = 0;
        this.time = 0;
        this.running = false;
        this.objects = [];
        this.polyFillAnimationFrames();
    }
    Time.get = function () {
        if (!_shared) {
            _shared = new Time_1();
        }
        return _shared;
    };
    Time.prototype.start = function () {
        var _this = this;
        if (this.running) {
            return;
        }
        this.running = true;
        var _frameCallback = function (time) {
            if (!_this.running) {
                return;
            }
            _this.time = Math.floor(time);
            var now = new Date().getMilliseconds();
            var elapsed = Math.floor(time - _this.lastTime);
            if (elapsed >= _this.tickRateMS) {
                _this.lastTime = time;
                _this.tickObjects(elapsed);
            }
            _this.processFrame(elapsed);
            _this.mspf = new Date().getMilliseconds() - now;
            window.requestAnimationFrame(_frameCallback);
        };
        _frameCallback(0);
        return this;
    };
    Time.prototype.stop = function () {
        this.running = false;
        return this;
    };
    Time.prototype.removeObject = function (object) {
        this.objects = __WEBPACK_IMPORTED_MODULE_0_underscore__["reject"](this.objects, function (o) {
            return o._uid === object._uid;
        });
        return this;
    };
    Time.prototype.addObject = function (object) {
        if (!object._uid) {
            object._uid = __WEBPACK_IMPORTED_MODULE_0_underscore__["uniqueId"]('u');
        }
        if (__WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this.objects, { _uid: object._uid }).length === 0) {
            this.objects.push(object);
        }
        return this;
    };
    Time.prototype.tickObjects = function (elapsedMS) {
        var values = this.objects;
        for (var i = values.length - 1; i >= 0; --i) {
            if (values[i].tick) {
                values[i].tick(elapsedMS);
            }
        }
        return this;
    };
    Time.prototype.processFrame = function (elapsedMS) {
        var values = this.objects;
        for (var i = values.length - 1; i >= 0; --i) {
            if (values[i].processFrame) {
                values[i].processFrame(elapsedMS);
            }
        }
        return this;
    };
    Time.prototype.polyFillAnimationFrames = function () {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var i = 0; i < vendors.length; i++) {
            if (window.requestAnimationFrame) {
                return;
            }
            window.requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                /* tslint:disable */
                var tickListener = function powRAFTimeTick() {
                    callback(currTime + timeToCall);
                };
                /* tslint:enable */
                var id = window.setTimeout(tickListener, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
    };
    return Time;
}());
Time = Time_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Time);

var Time_1;


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var CameraBehavior = (function (_super) {
    __extends(CameraBehavior, _super);
    function CameraBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraBehavior.prototype.process = function (view) {
        view.camera.point.set(this.host.point);
        view.cameraScale = view.context.canvas.width > 768 ? 4 : 2;
        var screenPoint = new __WEBPACK_IMPORTED_MODULE_1__pow_core_point__["a" /* Point */](view.context.canvas.width, view.context.canvas.height);
        var canvasSize = view.screenToWorld(screenPoint, view.cameraScale);
        view.camera.extent.set(canvasSize);
    };
    return CameraBehavior;
}(__WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileObjectRenderer; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var TileObjectRenderer = (function () {
    function TileObjectRenderer() {
        this._renderPoint = new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */]();
    }
    TileObjectRenderer.prototype.render = function (object, at, view, spriteMeta) {
        if (!object || object.visible === false || !object.image) {
            return;
        }
        // Build render data.
        this._renderPoint.set(at);
        var point = this._renderPoint;
        var sourceWidth = view.unitSize;
        var sourceHeight = view.unitSize;
        if (spriteMeta && typeof spriteMeta.cellWidth !== 'undefined' && typeof spriteMeta.cellHeight !== 'undefined') {
            sourceWidth = spriteMeta.cellWidth;
            sourceHeight = spriteMeta.cellHeight;
        }
        var objWidth = view.fastScreenToWorldNumber(sourceWidth);
        var objHeight = view.fastScreenToWorldNumber(sourceHeight);
        point.x -= objWidth * object.scale / 2;
        point.y -= objHeight * object.scale / 2;
        view.fastWorldToScreenPoint(point, point);
        if (object.icon && spriteMeta) {
            var cx = spriteMeta.x;
            var cy = spriteMeta.y;
            if (spriteMeta.frames > 1) {
                var cwidth = spriteMeta.width / sourceWidth;
                var fx = (object.frame % (cwidth));
                var fy = Math.floor((object.frame - fx) / cwidth);
                cx += fx * sourceWidth;
                cy += fy * sourceHeight;
            }
            view.context.drawImage(object.image, cx, cy, sourceWidth, sourceHeight, point.x, point.y, sourceWidth * object.scale, sourceHeight * object.scale);
        }
        else {
            view.context.drawImage(object.image, point.x, point.y, sourceWidth * object.scale, sourceHeight * object.scale);
        }
    };
    return TileObjectRenderer;
}());



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_scene_view__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__render_tile_map_renderer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_behaviors_camera_behavior__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pow_core__ = __webpack_require__(63);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMapView; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var TileMapView = (function (_super) {
    __extends(TileMapView, _super);
    function TileMapView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mapRenderer = new __WEBPACK_IMPORTED_MODULE_1__render_tile_map_renderer__["a" /* TileMapRenderer */]();
        /**
         * The map view bounds in world space.
         */
        _this._bounds = new __WEBPACK_IMPORTED_MODULE_3__pow_core__["b" /* Point */]();
        return _this;
    }
    TileMapView.prototype._onResize = function (event) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this._bounds.set(this.canvas.width, this.canvas.height);
        this._bounds = this.screenToWorld(this._bounds);
        var context = this.context;
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
    };
    /*
     * Get the camera clip rectangle.
     * @returns {Rect}
     */
    TileMapView.prototype.getCameraClip = function () {
        if (!this.map) {
            return this.camera;
        }
        var clipGrow = this.camera.clone();
        clipGrow.point.round();
        clipGrow.extent.round();
        // Clamp to tilemap bounds.
        var rect = this.map.bounds;
        if (clipGrow.point.x < rect.point.x) {
            clipGrow.point.x += rect.point.x - clipGrow.point.x;
        }
        if (clipGrow.point.y < rect.point.y) {
            clipGrow.point.y += rect.point.y - clipGrow.point.y;
        }
        if (clipGrow.point.x + clipGrow.extent.x > rect.point.x + rect.extent.x) {
            clipGrow.point.x -= ((clipGrow.point.x + clipGrow.extent.x) - (rect.point.x + rect.extent.x));
        }
        if (clipGrow.point.y + clipGrow.extent.y > rect.point.y + rect.extent.y) {
            clipGrow.point.y -= ((clipGrow.point.y + clipGrow.extent.y) - (rect.point.y + rect.extent.y));
        }
        return clipGrow;
    };
    /*
     * Update the camera for this frame.
     */
    TileMapView.prototype.processCamera = function () {
        this.cameraComponent = this.findBehavior(__WEBPACK_IMPORTED_MODULE_2__scene_behaviors_camera_behavior__["a" /* CameraBehavior */]);
        if (!this.cameraComponent && this.map) {
            this.cameraComponent = this.map.findBehavior(__WEBPACK_IMPORTED_MODULE_2__scene_behaviors_camera_behavior__["a" /* CameraBehavior */]);
        }
        if (!this.cameraComponent) {
            this.cameraComponent = this.scene.componentByType(__WEBPACK_IMPORTED_MODULE_2__scene_behaviors_camera_behavior__["a" /* CameraBehavior */]);
        }
        _super.prototype.processCamera.call(this);
    };
    /*
     * Set the pre-render canvas state.
     */
    TileMapView.prototype.setRenderState = function () {
        _super.prototype.setRenderState.call(this);
        if (!this.camera || !this.context || !this.map) {
            return;
        }
        var worldCameraPos = this.worldToScreen(this.camera.point);
        var worldTilePos = this.worldToScreen(this.map.bounds.point);
        worldTilePos.x = parseFloat(worldTilePos.x.toFixed(2));
        worldTilePos.y = parseFloat(worldTilePos.y.toFixed(2));
        worldCameraPos.x = parseFloat(worldCameraPos.x.toFixed(2));
        worldCameraPos.y = parseFloat(worldCameraPos.y.toFixed(2));
        this.context.translate(worldTilePos.x - worldCameraPos.x, worldTilePos.y - worldCameraPos.y);
    };
    /*
     * Render the tile $map, and any features it has.
     */
    TileMapView.prototype.renderFrame = function (elapsed) {
        this.clearRect();
        if (!this.map) {
            return;
        }
        this.mapRenderer.render(this.map, this);
        return this;
    };
    /**
     * Draw any post-frame rendering effects.
     */
    TileMapView.prototype.renderPost = function () {
        // nothing
    };
    return TileMapView;
}(__WEBPACK_IMPORTED_MODULE_0__scene_scene_view__["a" /* SceneView */]));



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileObjectBehavior; });


var TileObjectBehavior = (function (_super) {
    __extends(TileObjectBehavior, _super);
    function TileObjectBehavior() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TileObjectBehavior.prototype.syncBehavior = function () {
        return !!this.host.tileMap && this.host.tileMap instanceof __WEBPACK_IMPORTED_MODULE_0__tile_map__["a" /* TileMap */];
    };
    TileObjectBehavior.prototype.disconnectBehavior = function () {
        return true;
    };
    TileObjectBehavior.prototype.enter = function (object) {
        return true;
    };
    TileObjectBehavior.prototype.entered = function (object) {
        this.host.trigger(TileObjectBehavior.Events.ENTERED, this);
        this.isEntered = true;
        return true;
    };
    TileObjectBehavior.prototype.exit = function (object) {
        return true;
    };
    TileObjectBehavior.prototype.exited = function (object) {
        this.host.trigger(TileObjectBehavior.Events.EXITED, this);
        this.isEntered = false;
        return true;
    };
    return TileObjectBehavior;
}(__WEBPACK_IMPORTED_MODULE_1__scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));

/**
 * Events triggered on host object for enter/exit of
 * tiles.
 */
TileObjectBehavior.Events = {
    ENTERED: 'tile:entered',
    EXITED: 'tile:exited'
};


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_sprite_behavior__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene_behaviors_movable_behavior__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scene_scene_object__ = __webpack_require__(51);
/* unused harmony export DEFAULTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileObject; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */







var DEFAULTS = {
    visible: true,
    enabled: true,
    icon: '',
    scale: 1,
    image: null,
    tileMap: null
};
var TileObject = (function (_super) {
    __extends(TileObject, _super);
    function TileObject() {
        var _this = _super.call(this, {}) || this;
        _this.frame = 0;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, __WEBPACK_IMPORTED_MODULE_0_underscore__["defaults"]({}, DEFAULTS));
        return _this;
    }
    Object.defineProperty(TileObject.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._updateIcon(value);
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    TileObject.prototype.setPoint = function (point) {
        var newPoint = new __WEBPACK_IMPORTED_MODULE_2__pow_core__["b" /* Point */](point).round();
        if (this.renderPoint) {
            this.renderPoint = newPoint.clone();
        }
        this.point = newPoint.clone();
        var moveComponent = this.findBehavior(__WEBPACK_IMPORTED_MODULE_3__scene_behaviors_movable_behavior__["a" /* MovableBehavior */]);
        if (moveComponent) {
            moveComponent.targetPoint.set(newPoint);
            moveComponent.path.length = 0;
        }
    };
    /**
     * When added to a scene, resolve a feature icon to a renderable sprite.
     */
    TileObject.prototype.onAddToScene = function (scene) {
        _super.prototype.onAddToScene.call(this, scene);
        if (this.icon) {
            this.setSprite(this.icon);
        }
        if (!this.tileMap) {
            this.tileMap = this.scene.objectByType(__WEBPACK_IMPORTED_MODULE_5__tile_map__["a" /* TileMap */]);
        }
    };
    /**
     * Set the current sprite name.  Returns the previous sprite name.
     * TODO: Refactor to async friendly method (promise?)
     */
    TileObject.prototype.setSprite = function (name, frame) {
        var _this = this;
        if (frame === void 0) { frame = 0; }
        var oldSprite = this.icon;
        if (!name) {
            this.meta = null;
        }
        else {
            var world = __WEBPACK_IMPORTED_MODULE_4__app_services_game_world__["a" /* GameWorld */].get();
            if (!world) {
                return oldSprite;
            }
            var meta_1 = world.sprites.getSpriteMeta(name);
            world.sprites.getSpriteSheet(meta_1.source).then(function (images) {
                var image = images[0];
                _this.meta = meta_1;
                _this.image = image.data;
                _this.frame = frame;
            });
        }
        this.icon = name;
        return oldSprite;
    };
    TileObject.prototype._updateIcon = function (icon) {
        var _this = this;
        var world = __WEBPACK_IMPORTED_MODULE_4__app_services_game_world__["a" /* GameWorld */].get();
        if (!world || this._icon === icon) {
            return;
        }
        var meta = world.sprites.getSpriteMeta(name);
        if (meta) {
            world.sprites.getSpriteSheet(meta.source).then(function (images) {
                var image = images[0];
                _this.meta = meta;
                _this.image = image.data;
            });
        }
    };
    TileObject.prototype.getIcon = function () {
        if (this.icon) {
            return this.icon;
        }
        var spriteComponent = this.findBehavior(__WEBPACK_IMPORTED_MODULE_1__behaviors_sprite_behavior__["a" /* SpriteComponent */]);
        if (spriteComponent) {
            return spriteComponent.icon;
        }
        return null;
    };
    return TileObject;
}(__WEBPACK_IMPORTED_MODULE_6__scene_scene_object__["a" /* SceneObject */]));



/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(12);

/***/ }),
/* 106 */,
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(423);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(67);

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) {
    return value;
};
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(207);

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_notification_notification_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });




var AppComponent = (function () {
    function AppComponent(store, world, notifications) {
        // TODO: Game "creation" here, or state update from stored file.
        //  - "create" will setup the ngrx/store for a new game file. It will download the latest game data from
        //    the source, load sprite metadata files from disk, initialize the current map and cache it. This is
        //    relatively expensive, but we can show some cool "initializing game" distractions to make it fun.
        //  - "state update" is the fast load path for games that have been saved and are being resumed. The entirety
        //    of the game data is loaded directly from a serialized JSON blob. This should avoid a bunch of network
        //    requests, and hopefully bring the game back very quickly on load.
        this.store = store;
        this.world = world;
        this.notifications = notifications;
        // TODO: Should the app component be responsible for setting up notifications?
        // Maybe notification service should not need to be in the world, and should
        // use setTimeout rather than rAF updates.
        this.world.time.addObject(notifications);
        this.world.mark(notifications);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(330)],
        template: __webpack_require__(312)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_2__services_game_world__["a" /* GameWorld */],
        __WEBPACK_IMPORTED_MODULE_3__components_notification_notification_service__["a" /* NotificationService */]])
], AppComponent);



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_loading__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEffects; });





/**
 * AppComponent effects describe the navigation side-effects of various game actions.
 */
var AppEffects = (function () {
    function AppEffects(actions$, loadingService) {
        var _this = this;
        this.actions$ = actions$;
        this.loadingService = loadingService;
        /** When the game is loading or traveling, show the loading ui. */
        this.loadingIndicator$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["a" /* GameStateTravelAction */].typeId)
            .distinctUntilChanged()
            .do(function (action) {
            _this.loadingService.message = "Traveling to " + action.payload.location + "...";
            _this.loadingService.loading = true;
        });
        /** When the game is done loading or traveling, hide the loading ui. */
        this.loadingDoneIndicator$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["b" /* GameStateTravelSuccessAction */].typeId, __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["c" /* GameStateTravelFailAction */].typeId)
            .distinctUntilChanged()
            .do(function (action) {
            _this.loadingService.loading = false;
        });
        /** route update to world map */
        this.navigateToWorldRoute$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["b" /* GameStateTravelSuccessAction */].typeId)
            .debounceTime(100)
            .distinctUntilChanged()
            .map(function (action) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_router_store__["a" /* replace */])(['world', action.payload]);
        });
    }
    return AppEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AppEffects.prototype, "loadingIndicator$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], AppEffects.prototype, "loadingDoneIndicator$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], AppEffects.prototype, "navigateToWorldRoute$", void 0);
AppEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */], __WEBPACK_IMPORTED_MODULE_3__components_loading__["a" /* LoadingService */]])
], AppEffects);



/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_behaviors_movable_behavior__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_object__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow2_tile_tile_object_behavior__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_tile_tile_map__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePlayerComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */







var BasePlayerComponent = (function (_super) {
    __extends(BasePlayerComponent, _super);
    function BasePlayerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.passableKeys = ['passable'];
        _this._lastFrame = 3;
        _this._renderFrame = 3;
        _this.heading = new __WEBPACK_IMPORTED_MODULE_3__game_pow_core_point__["a" /* Point */](0, -1);
        _this.sprite = null;
        _this.collideComponentType = __WEBPACK_IMPORTED_MODULE_5__game_pow2_tile_tile_object_behavior__["a" /* TileObjectBehavior */];
        return _this;
    }
    BasePlayerComponent.prototype.syncBehavior = function () {
        this.sprite = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["b" /* PlayerRenderBehaviorComponent */]);
        return _super.prototype.syncBehavior.call(this);
    };
    BasePlayerComponent.prototype.tick = function (elapsed) {
        // There are four states and two rows.  The second row is all alt states, so mod it out
        // when a move ends.
        this._lastFrame = this._renderFrame > 3 ? this._renderFrame - 4 : this._renderFrame;
        _super.prototype.tick.call(this, elapsed);
    };
    BasePlayerComponent.prototype.interpolateTick = function (elapsed) {
        _super.prototype.interpolateTick.call(this, elapsed);
        if (!this.sprite) {
            return;
        }
        var xMove = this.targetPoint.x !== this.host.renderPoint.x;
        var yMove = this.targetPoint.y !== this.host.renderPoint.y;
        if (this.velocity.y > 0 && yMove) {
            this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].SOUTH, yMove);
            this.heading.set(0, 1);
        }
        else if (this.velocity.y < 0 && yMove) {
            this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].NORTH, yMove);
            this.heading.set(0, -1);
        }
        else if (this.velocity.x < 0 && xMove) {
            this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].WEST, xMove);
            this.heading.set(-1, 0);
        }
        else if (this.velocity.x > 0 && xMove) {
            this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].EAST, xMove);
            this.heading.set(1, 0);
        }
        else {
            if (this.velocity.y > 0) {
                this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].SOUTH, false);
                this.heading.set(0, 1);
            }
            else if (this.velocity.y < 0) {
                this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].NORTH, false);
                this.heading.set(0, -1);
            }
            else if (this.velocity.x < 0) {
                this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].WEST, false);
                this.heading.set(-1, 0);
            }
            else if (this.velocity.x > 0) {
                this.sprite.setHeading(__WEBPACK_IMPORTED_MODULE_4__routes_world_behaviors_player_render_behavior__["a" /* Headings */].EAST, false);
                this.heading.set(1, 0);
            }
            else {
                this.sprite.setMoving(false);
            }
        }
    };
    /**
     * Determine if a point on the map collides with a given terrain
     * attribute.  If the attribute is set to false, a collision occurs.
     *
     * @param at {Point} The point to check.
     * @param passableAttribute {string} The attribute to check.
     * @returns {boolean} True if the passable attribute was found and set to false.
     */
    BasePlayerComponent.prototype.collideWithMap = function (at, passableAttribute) {
        var map = this.host.scene.objectByType(__WEBPACK_IMPORTED_MODULE_6__game_pow2_tile_tile_map__["a" /* TileMap */]);
        if (map) {
            var layers = map.getLayers();
            for (var i = 0; i < layers.length; i++) {
                var terrain = map.getTileData(layers[i], at.x, at.y);
                if (!terrain) {
                    continue;
                }
                if (terrain[passableAttribute] === false) {
                    return true;
                }
            }
        }
        return false;
    };
    BasePlayerComponent.prototype.collideMove = function (x, y, results) {
        if (results === void 0) { results = []; }
        return false;
    };
    BasePlayerComponent.prototype.beginMove = function (move) {
        var comp;
        var o;
        var i;
        this.host.trigger(BasePlayerComponent.Events.MOVE_BEGIN, this, move.from, move.to);
        if (!this.collider) {
            return;
        }
        var results = [];
        this.collider.collide(move.from.x, move.from.y, __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_object__["a" /* TileObject */], results);
        for (i = 0; i < results.length; i++) {
            o = results[i];
            comp = o.findBehavior(this.collideComponentType);
            if (!comp || !comp.enter) {
                continue;
            }
            if (comp.exit(this.host) === false) {
                return;
            }
        }
        results.length = 0;
        this.collider.collide(move.to.x, move.to.y, __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_object__["a" /* TileObject */], results);
        for (i = 0; i < results.length; i++) {
            o = results[i];
            comp = o.findBehavior(this.collideComponentType);
            if (!comp || !comp.enter) {
                continue;
            }
            if (comp.enter(this.host) === false) {
                return;
            }
        }
    };
    // TODO: Refactor this to have a set of outputs for moving, and delegate the entered/exit logic
    //       to the world-map entity.
    BasePlayerComponent.prototype.completeMove = function (move) {
        var _this = this;
        var comp;
        this.host.trigger(BasePlayerComponent.Events.MOVE_END, this, move.from, move.to);
        if (!this.collider) {
            return;
        }
        // Trigger exit on previous components
        var hits = [];
        this.collider.collide(move.from.x, move.from.y, __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_object__["a" /* TileObject */], hits);
        var fromObject = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](hits, function (o) {
            return o._uid !== _this.host._uid;
        });
        if (fromObject) {
            comp = fromObject.findBehavior(this.collideComponentType);
            if (comp && comp.host._uid !== this.host._uid) {
                comp.exited(this.host);
            }
        }
        // Trigger enter on new components
        hits.length = 0;
        this.collider.collide(move.to.x, move.to.y, __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_tile_object__["a" /* TileObject */], hits);
        var toObject = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](hits, function (o) {
            return o._uid !== _this.host._uid;
        });
        if (toObject) {
            comp = toObject.findBehavior(this.collideComponentType);
            if (comp && comp.host._uid !== this.host._uid) {
                comp.entered(this.host);
            }
        }
    };
    return BasePlayerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_behaviors_movable_behavior__["a" /* MovableBehavior */]));

// TODO: Pass in collide types during entity creation, and assert on invalid types.
BasePlayerComponent.COLLIDE_TYPES = [
    'TempleFeatureComponent',
    'StoreFeatureComponent',
    'DialogFeatureComponent',
    'sign'
];
BasePlayerComponent.Events = {
    MOVE_BEGIN: 'move:begin',
    MOVE_END: 'move:end'
};


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_world__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteRenderBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var SpriteRenderBehaviorComponent = (function (_super) {
    __extends(SpriteRenderBehaviorComponent, _super);
    function SpriteRenderBehaviorComponent(gameWorld) {
        var _this = _super.call(this) || this;
        _this.gameWorld = gameWorld;
        _this._icon$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        _this.icon$ = _this._icon$;
        _this.meta = null;
        _this.image = null;
        return _this;
    }
    Object.defineProperty(SpriteRenderBehaviorComponent.prototype, "icon", {
        get: function () {
            return this._icon$.value;
        },
        set: function (value) {
            this._icon$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    SpriteRenderBehaviorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._subscription = this.icon$.distinctUntilChanged().do(function (name) {
            if (!name) {
                _this.meta = null;
                _this.image = null;
                return;
            }
            _this.meta = _this.gameWorld.sprites.getSpriteMeta(name);
            if (_this.meta) {
                _this.gameWorld.sprites.getSpriteSheet(_this.meta.source).then(function (images) {
                    _this.image = images[0].data;
                });
            }
        }).subscribe();
    };
    SpriteRenderBehaviorComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return SpriteRenderBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SpriteRenderBehaviorComponent.prototype, "icon", null);
SpriteRenderBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sprite-render-behavior',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_game_world__["a" /* GameWorld */]])
], SpriteRenderBehaviorComponent);



/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPGHealthBarComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

var RPGHealthBarComponent = (function () {
    function RPGHealthBarComponent() {
    }
    RPGHealthBarComponent.prototype.getCSSClassMap = function () {
        if (!this.model) {
            return {};
        }
        var pct = Math.round(this.model.hp / this.model.maxhp * 100);
        return {
            dead: pct === 0,
            critical: pct < 33,
            hurt: pct < 66,
            fine: pct > 66
        };
    };
    RPGHealthBarComponent.prototype.getProgressBarWidth = function () {
        var width = 0;
        if (this.model && this.model) {
            width = Math.ceil(this.model.hp / this.model.maxhp * 100);
        }
        return width;
    };
    return RPGHealthBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RPGHealthBarComponent.prototype, "model", void 0);
RPGHealthBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rpg-health-bar',
        styles: [__webpack_require__(331)],
        template: "\n  <div [ngClass]=\"getCSSClassMap()\" [style.width]=\"getProgressBarWidth() + '%'\">\n    <ng-content></ng-content>\n  </div>"
    })
], RPGHealthBarComponent);



/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__health_bar_component__ = __webpack_require__(122);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_HEALTH_BAR_EXPORTS; });


var RPG_HEALTH_BAR_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__health_bar_component__["a" /* RPGHealthBarComponent */]
];


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });


var LoadingComponent = (function () {
    function LoadingComponent(loadingService) {
        this.loadingService = loadingService;
    }
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loading',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: "\n  <div class=\"loading fade\" *ngIf=\"loadingService.loading$ | async\">\n    <div class=\"loading-wrapper\">\n      <div class=\"loading-wrapper-inner hero-container\">\n        <h1>\n          <a target=\"_blank\" href=\"https://github.com/justindujardin/angular-rpg\">{{loadingService.title$ | async}}</a>\n        </h1>\n        <p>{{loadingService.message$ | async}}</p>\n      </div>\n    </div>\n  </div>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loading_service__["a" /* LoadingService */]])
], LoadingComponent);



/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_NOTIFICATION_EXPORTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RPG_NOTIFICATION_PROVIDERS; });



var RPG_NOTIFICATION_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__notification_component__["a" /* RPGNotificationComponent */]
];
var RPG_NOTIFICATION_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */]
];


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_loading_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPGNotificationComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var RPGNotificationComponent = (function () {
    function RPGNotificationComponent(notify, loadingService, element) {
        this.notify = notify;
        this.loadingService = loadingService;
        this.element = element;
        notify.container = element.nativeElement;
    }
    return RPGNotificationComponent;
}());
RPGNotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rpg-notification',
        styles: [__webpack_require__(332)],
        template: "<span class=\"message\" \n      [innerText]=\"notify.message\" \n      [class.loading]=\"loadingService.loading$ | async\">\n</span>",
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_2__loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], RPGNotificationComponent);



/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__party_inventory_component__ = __webpack_require__(252);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_PARTY_INVENTORY_EXPORTS; });

var RPG_PARTY_INVENTORY_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__party_inventory_component__["a" /* PartyInventoryComponent */]
];


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__party_menu_component__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_PARTY_MENU_EXPORTS; });

var RPG_PARTY_MENU_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__party_menu_component__["a" /* PartyMenuComponent */]
];


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_state_game_state_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyMenuComponent; });







var PartyMenuComponent = (function () {
    function PartyMenuComponent(game, store, gameStateService, notify) {
        this.game = game;
        this.store = store;
        this.gameStateService = gameStateService;
        this.notify = notify;
        this.page = 'party';
        this.open = false;
        this.partyGold$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["d" /* getGamePartyGold */]);
        this.party$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["e" /* getGameParty */]);
    }
    PartyMenuComponent.prototype.resetGame = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["l" /* GameStateDeleteAction */]());
    };
    PartyMenuComponent.prototype.saveGame = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["o" /* GameStateSaveAction */]());
    };
    return PartyMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PartyMenuComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PartyMenuComponent.prototype, "open", void 0);
PartyMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'party-menu',
        styles: [__webpack_require__(334)],
        template: __webpack_require__(314),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["a" /* trigger */])('card', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["a" /* trigger */])('toolbar', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(-100%)' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["a" /* trigger */])('fab', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["d" /* transition */])(':leave', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(0)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('110ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["c" /* style */])({ transform: 'translateY(100%)' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6__models_game_state_game_state_service__["a" /* GameStateService */],
        __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* NotificationService */]])
], PartyMenuComponent);



/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_card_component__ = __webpack_require__(253);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_PLAYER_CARD_EXPORTS; });

var RPG_PLAYER_CARD_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__player_card_component__["a" /* PlayerCardComponent */]
];


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_stats_component__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_PLAYER_STATS_EXPORTS; });

var RPG_PLAYER_STATS_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__player_stats_component__["a" /* PlayerStatsComponent */]
];


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite_component__ = __webpack_require__(133);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPG_SPRITE_EXPORTS; });


var RPG_SPRITE_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_0__sprite_component__["a" /* RPGSpriteComponent */]
];


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sprite_render__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RPGSpriteComponent; });




var RPGSpriteComponent = RPGSpriteComponent_1 = (function () {
    function RPGSpriteComponent(sanitizer, renderer) {
        this.sanitizer = sanitizer;
        this.renderer = renderer;
        this._dataUrl$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["ReplaySubject"](1);
        this.dataUrl$ = this._dataUrl$;
        this._width$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('64');
        this.width$ = this._width$;
        this._height$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]('64');
        this.height$ = this._height$;
        this._name$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](RPGSpriteComponent_1.INVALID_IMAGE);
        this.name$ = this._name$;
        this._frame$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](0);
        this.frame$ = this._frame$;
        this.styleBackground = 'rgba(0,0,0,1)';
        this._canvasAcquired = false;
        if (!RPGSpriteComponent_1._renderCanvas) {
            RPGSpriteComponent_1._renderCanvas = document.createElement('canvas');
            RPGSpriteComponent_1._renderCanvas.width = RPGSpriteComponent_1._renderCanvas.height = 64;
            RPGSpriteComponent_1._renderCanvas.style.position = 'absolute';
            RPGSpriteComponent_1._renderCanvas.style.left = RPGSpriteComponent_1._renderCanvas.style.top = '-9000px';
        }
    }
    Object.defineProperty(RPGSpriteComponent.prototype, "width", {
        set: function (value) {
            this._width$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RPGSpriteComponent.prototype, "height", {
        set: function (value) {
            this._height$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RPGSpriteComponent.prototype, "frame", {
        set: function (value) {
            if (this._frame$.value !== value) {
                this._frame$.next(value);
                this._get(this._name$.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RPGSpriteComponent.prototype, "name", {
        set: function (value) {
            if (!value) {
                this._name$.next(RPGSpriteComponent_1.INVALID_IMAGE);
                return;
            }
            this._name$.next(value);
            this._get(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a canvas rendering context that may be drawn to.  A corresponding
     * call to releaseRenderContext will return the drawn content of the context.
     */
    RPGSpriteComponent.prototype.getRenderContext = function (width, height) {
        if (this._canvasAcquired) {
            throw new Error('Only one rendering canvas is available at a time.' +
                ' Check for calls to this function without corresponding releaseCanvas() calls.');
        }
        this._canvasAcquired = true;
        RPGSpriteComponent_1._renderCanvas.width = width;
        RPGSpriteComponent_1._renderCanvas.height = height;
        var context = RPGSpriteComponent_1._renderCanvas.getContext('2d');
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        return context;
    };
    /**
     * Call this after getRenderContext to finish rendering and have the source
     * of the canvas content returned as a data url string.
     */
    RPGSpriteComponent.prototype.releaseRenderContext = function () {
        this._canvasAcquired = false;
        return RPGSpriteComponent_1._renderCanvas.toDataURL();
    };
    RPGSpriteComponent.prototype._get = function (src) {
        var _this = this;
        if (!src || src === RPGSpriteComponent_1.INVALID_IMAGE) {
            this._dataUrl$.next(RPGSpriteComponent_1.INVALID_IMAGE);
            return;
        }
        this.renderer.getSingleSprite(src, this._frame$.value).then(function (sprite) {
            // Get the context for drawing
            var width = parseInt(_this._width$.value, 10);
            var height = parseInt(_this._height$.value, 10);
            var renderContext = _this.getRenderContext(width, height);
            renderContext.clearRect(0, 0, width, height);
            renderContext.drawImage(sprite, 0, 0, width, height);
            var imageDataUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.releaseRenderContext());
            _this._dataUrl$.next(imageDataUrl);
        });
    };
    return RPGSpriteComponent;
}());
RPGSpriteComponent.INVALID_IMAGE = 'assets/images/a/blank.gif';
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RPGSpriteComponent.prototype, "width", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RPGSpriteComponent.prototype, "height", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], RPGSpriteComponent.prototype, "frame", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], RPGSpriteComponent.prototype, "name", null);
RPGSpriteComponent = RPGSpriteComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rpg-sprite',
        styles: [__webpack_require__(336)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: "<img [style.width]=\"width$ | async\" [style.height]=\"height$ | async\" [src]=\"dataUrl$ | async\">"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["DomSanitizer"],
        __WEBPACK_IMPORTED_MODULE_1__services_sprite_render__["a" /* SpriteRender */]])
], RPGSpriteComponent);

var RPGSpriteComponent_1;


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(9);
/* harmony export (immutable) */ __webpack_exports__["b"] = addEntityToCollection;
/* harmony export (immutable) */ __webpack_exports__["d"] = mergeEntityInCollection;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeEntityFromCollection;
/* harmony export (immutable) */ __webpack_exports__["a"] = entityCollectionFromJSON;


/**
 * @internal Add an entity to a given collection, and return a new collection. If there
 * is already an object with the given ID, the existing collection will be returned.
 */
function addEntityToCollection(collection, entity, entityId) {
    var index = collection.allIds.indexOf(entityId);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* assertTrue */])(index === -1, "item (" + entityId + ") already exists in collection");
    collection = collection.updateIn(['allIds'], function (allIds) {
        return allIds.push(entityId);
    });
    return collection.updateIn(['byId'], function (byId) {
        return byId.set(entityId, entity);
    });
}
/**
 * @internal Update an entity in the given collection, and return a new collection. If there
 * is no object with the given ID, throw.
 */
function mergeEntityInCollection(collection, entity, entityId) {
    var index = collection.allIds.indexOf(entityId);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* assertTrue */])(index !== -1, "item (" + entityId + ") does not exist in collection");
    return collection.updateIn(['byId'], function (byId) {
        return byId.set(entityId, __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](byId.get(entityId)).merge(entity).toJS());
    });
}
/**
 * @internal Remove an entity from a collection. IF the entity does not exist, return the
 * input collection, otherwise return a copy of the new collection.
 */
function removeEntityFromCollection(collection, entityId) {
    var index = collection.allIds.indexOf(entityId);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util__["c" /* assertTrue */])(index !== -1, "item (" + entityId + ") does not exist in collection");
    collection = collection.updateIn(['allIds'], function (allIds) { return allIds.filter(function (id) { return id !== entityId; }); });
    return collection.updateIn(['byId'], function (byId) { return byId.remove(entityId); });
}
/**
 * Convert input Plain JSON object into an Immutable.js representation with the correct records.
 * @param object The input values.
 */
function entityCollectionFromJSON(object) {
    return {
        byId: __WEBPACK_IMPORTED_MODULE_0_immutable__["Map"](object.byId),
        allIds: __WEBPACK_IMPORTED_MODULE_0_immutable__["List"](object.allIds)
    };
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_data_resource__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_data_actions__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDataService; });







var GameDataService = (function () {
    function GameDataService(loader, store) {
        this.loader = loader;
        this.store = store;
    }
    /** Load game data from google spreadsheet */
    GameDataService.prototype.loadGameData = function (spreadsheetId) {
        var _this = this;
        if (spreadsheetId === void 0) { spreadsheetId = __WEBPACK_IMPORTED_MODULE_4__game_data_model__["a" /* SPREADSHEET_ID */]; }
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromPromise(this.loader.loadAsType(spreadsheetId, __WEBPACK_IMPORTED_MODULE_0__game_data_resource__["a" /* GameDataResource */]).then(function (resource) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('weapons', resource.data.weapons));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('armor', resource.data.armor));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('items', resource.data.items));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('enemies', resource.data.enemies));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('magic', resource.data.magic));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('classes', resource.data.classes));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('randomEncounters', resource.data.randomencounters));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__game_data_actions__["a" /* GameDataAddSheetAction */]('fixedEncounters', resource.data.fixedencounters));
        }));
    };
    return GameDataService;
}());
GameDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__["a" /* ResourceManager */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
], GameDataService);



/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_state_game_state_reducer__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_data_game_data_reducer__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__combat_combat_reducer__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__entity_entity_reducer__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sprites_sprites_reducer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logger__ = __webpack_require__(259);
/* unused harmony export reducers */
/* harmony export (immutable) */ __webpack_exports__["b"] = rootReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODEL_PROVIDERS; });
















var reducers = {
    router: __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["b" /* routerReducer */],
    gameData: __WEBPACK_IMPORTED_MODULE_5__game_data_game_data_reducer__["s" /* gameDataReducer */],
    gameState: __WEBPACK_IMPORTED_MODULE_4__game_state_game_state_reducer__["j" /* gameStateReducer */],
    combat: __WEBPACK_IMPORTED_MODULE_6__combat_combat_reducer__["d" /* combatReducer */],
    entities: __WEBPACK_IMPORTED_MODULE_7__entity_entity_reducer__["e" /* entityReducer */],
    sprites: __WEBPACK_IMPORTED_MODULE_8__sprites_sprites_reducer__["c" /* spritesReducer */]
};
// Generate a reducer to set the root state in dev mode for HMR
function stateSetter(reducer) {
    return function (state, action) {
        switch (action.type) {
            case 'SET_ROOT_STATE':
            case __WEBPACK_IMPORTED_MODULE_9__game_state_game_state_actions__["j" /* GameStateLoadSuccessAction */].typeId:
                return __assign({}, action.payload, { gameState: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__game_state_game_state_reducer__["k" /* gameStateFromJSON */])(action.payload.gameState), entities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__entity_entity_reducer__["f" /* entityFromJSON */])(action.payload.entities), gameData: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__game_data_game_data_reducer__["t" /* gameDataFromJSON */])(action.payload.gameData), combat: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__combat_combat_reducer__["e" /* combatFromJSON */])(action.payload.combat), sprites: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__sprites_sprites_reducer__["d" /* spritesFromJSON */])(action.payload.sprites) });
            default:
                return reducer(state, action);
        }
    };
}
var DEV_REDUCERS = [stateSetter, __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_10__logger__["a" /* rpgLogger */]];
var PROD_REDUCERS = [stateSetter];
var developmentReducer = __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__["compose"].apply(void 0, DEV_REDUCERS.concat([__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* combineReducers */]]))(reducers);
var productionReducer = __WEBPACK_IMPORTED_MODULE_0__ngrx_core_compose__["compose"].apply(void 0, PROD_REDUCERS.concat([__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* combineReducers */]]))(reducers);
function rootReducer(state, action) {
    if (false) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
var MODEL_PROVIDERS = [];


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getXPForLevel;
/* harmony export (immutable) */ __webpack_exports__["b"] = getHPForLevel;
/* harmony export (immutable) */ __webpack_exports__["c"] = getStrengthForLevel;
/* harmony export (immutable) */ __webpack_exports__["d"] = getAgilityForLevel;
/* harmony export (immutable) */ __webpack_exports__["e"] = getVitalityForLevel;
/* harmony export (immutable) */ __webpack_exports__["f"] = getIntelligenceForLevel;
/**
 * Leveling is important--It's the difference between being able to summon a chicken and
 * a dragon. That being said, there has not been enough thought put into this system. It
 * is still malleable if someone feels inspired.
 *
 * This file contains a set of functions that will return stat values related to leveling
 * game players. You can {@see getXPForLevel} or {@see getStrengthForLevel} and pass in the
 * associated {@see Entity} model.
 *
 * @fileOverview
 */
/**
 * Level experience breakpoints where each index represents how much experience is required
 * to advance to the next level. In this way the value of 0 for index 0 ensures that you will
 * always immediately advance to level 1 as a new character.
 */
var LEVEL_EXPERIENCE = [
    0,
    32,
    96,
    208,
    400,
    672,
    1056,
    1552,
    2184,
    2976
];
function getXPForLevel(level) {
    return LEVEL_EXPERIENCE[level === 0 ? level : level - 1];
}
function getHPForLevel(level, model) {
    return Math.floor(model.defense * Math.pow(level, 1.1)) + (model.basedefense * 2);
}
function getStrengthForLevel(level, model) {
    return Math.floor(model.baseattack * Math.pow(level, 0.65));
}
function getAgilityForLevel(level, model) {
    return Math.floor(model.basespeed * Math.pow(level, 0.95));
}
function getVitalityForLevel(level, model) {
    return Math.floor(model.basedefense * Math.pow(level, 0.95));
}
function getIntelligenceForLevel(level, model) {
    return Math.floor(model.basemagic * Math.pow(level, 0.95));
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprites_actions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_pow2_core_api__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpritesService; });








var SpritesService = (function () {
    function SpritesService(resourceLoader, store) {
        this.resourceLoader = resourceLoader;
        this.store = store;
    }
    /** Preload sprite sheet metadata */
    SpritesService.prototype.loadSprites = function (indexMetaUrl) {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_4__selectors__["a" /* getSpritesLoaded */])
            .take(1)
            .switchMap(function (loaded) {
            if (!loaded) {
                return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(_this.resourceLoader.load(indexMetaUrl)
                    .then(function (res) {
                    var jsonRes = res[0];
                    var sources = __WEBPACK_IMPORTED_MODULE_6_underscore__["map"](jsonRes.data, function (baseName) {
                        return baseName + ".json";
                    });
                    return Promise.all(__WEBPACK_IMPORTED_MODULE_6_underscore__["map"](sources, function (fileName) {
                        return _this.resourceLoader.load(fileName)
                            .then(function (spritesLoaded) {
                            var meta = spritesLoaded[0].data;
                            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__sprites_actions__["a" /* SpritesRegisterAction */](meta));
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__game_pow2_core_api__["b" /* registerSprites */])(fileName, meta);
                        });
                    }));
                })
                    .then(function () { return Promise.resolve(undefined); }));
            }
        });
    };
    return SpritesService;
}());
SpritesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource_manager__["a" /* ResourceManager */],
        __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], SpritesService);



/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors_animated_behavior__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__ = __webpack_require__(21);
/* unused harmony export StateFrames */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatPlayerRenderBehaviorComponent; });







var StateFrames;
(function (StateFrames) {
    StateFrames[StateFrames["DEFAULT"] = 10] = "DEFAULT";
    StateFrames[StateFrames["SWING"] = 1] = "SWING";
    StateFrames[StateFrames["INJURED"] = 2] = "INJURED";
    StateFrames[StateFrames["WALK"] = 3] = "WALK";
    StateFrames[StateFrames["STRIKE"] = 3] = "STRIKE";
    StateFrames[StateFrames["CELEBRATE"] = 4] = "CELEBRATE";
    StateFrames[StateFrames["DEAD"] = 5] = "DEAD";
})(StateFrames || (StateFrames = {}));
var CombatPlayerRenderBehaviorComponent = (function (_super) {
    __extends(CombatPlayerRenderBehaviorComponent, _super);
    function CombatPlayerRenderBehaviorComponent(combatService) {
        var _this = _super.call(this) || this;
        _this.combatService = combatService;
        _this._elapsed = 0;
        _this._renderFrame = 3;
        _this.state = '';
        _this.animating = false;
        _this.animator = null;
        _this.attackDirection = __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST;
        return _this;
    }
    CombatPlayerRenderBehaviorComponent.prototype.syncBehavior = function () {
        this.animator = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_4__behaviors_animated_behavior__["a" /* AnimatedBehaviorComponent */]);
        return _super.prototype.syncBehavior.call(this);
    };
    CombatPlayerRenderBehaviorComponent.prototype.setState = function (name) {
        if (name === void 0) { name = 'Default'; }
        this.state = name;
    };
    CombatPlayerRenderBehaviorComponent.prototype.attack = function (attackCb, cb) {
        this._attack(cb, this.getAttackAnimation(attackCb));
    };
    CombatPlayerRenderBehaviorComponent.prototype.magic = function (attackCb, cb) {
        this._attack(cb, this.getMagicAnimation(attackCb));
    };
    CombatPlayerRenderBehaviorComponent.prototype.getForwardDirection = function () {
        return this.attackDirection === __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST ? -1 : 1;
    };
    CombatPlayerRenderBehaviorComponent.prototype.getBackwardDirection = function () {
        return this.attackDirection === __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST ? 1 : -1;
    };
    CombatPlayerRenderBehaviorComponent.prototype.getForwardFrames = function () {
        return this.attackDirection === __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST ? [9, 11, 10] : [3, 5, 4];
    };
    CombatPlayerRenderBehaviorComponent.prototype.getBackwardFrames = function () {
        return this.attackDirection === __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST ? [10, 11, 9] : [4, 5, 3];
    };
    CombatPlayerRenderBehaviorComponent.prototype.getAttackFrames = function () {
        return this.attackDirection === __WEBPACK_IMPORTED_MODULE_3__world_behaviors_player_render_behavior__["a" /* Headings */].WEST ? [12, 13, 14, 15, 14, 13, 12] : [4, 5, 6, 7, 6, 5, 4];
    };
    CombatPlayerRenderBehaviorComponent.prototype.getMagicAnimation = function (strikeCb) {
        var _this = this;
        return [
            {
                name: 'Prep Animation',
                callback: function () {
                    _this.host.setSprite(_this.host.icon.replace('.png', '-magic.png'), 19);
                }
            },
            {
                name: 'Magic cast',
                repeats: 0,
                duration: 1000,
                frames: [19, 18, 17, 16, 15],
                callback: function () {
                    if (strikeCb) {
                        strikeCb();
                    }
                }
            },
            {
                name: 'Back to rest',
                repeats: 0,
                duration: 1000,
                frames: [15, 16, 17, 18, 19],
                callback: function () {
                    _this.host.setSprite(_this.host.icon.replace('-magic.png', '.png'), 10);
                }
            }
        ];
    };
    CombatPlayerRenderBehaviorComponent.prototype.getAttackAnimation = function (strikeCb) {
        var _this = this;
        return [
            {
                name: 'Move Forward for Attack',
                repeats: 0,
                duration: 250,
                frames: this.getForwardFrames(),
                move: new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](this.getForwardDirection(), 0),
                callback: function () {
                    var attackAnimationsSource = _this.host.icon.replace('.png', '-attack.png');
                    if (_this.host.world.sprites.getSpriteMeta(attackAnimationsSource)) {
                        _this.host.setSprite(attackAnimationsSource, 12);
                    }
                }
            },
            {
                name: 'Strike at Opponent',
                repeats: 1,
                duration: 100,
                frames: this.getAttackFrames(),
                callback: function () {
                    _this.host.setSprite(_this.host.icon.replace('-attack.png', '.png'), 10);
                    if (strikeCb) {
                        strikeCb();
                    }
                }
            },
            {
                name: 'Return to Party',
                duration: 250,
                repeats: 0,
                frames: this.getBackwardFrames(),
                move: new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](this.getBackwardDirection(), 0)
            }
        ];
    };
    CombatPlayerRenderBehaviorComponent.prototype.moveForward = function (then) {
        this._playAnimation([{
                name: 'Move Forward',
                repeats: 0,
                duration: 250,
                frames: this.getForwardFrames(),
                move: new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](this.getForwardDirection(), 0)
            }], then);
    };
    CombatPlayerRenderBehaviorComponent.prototype.moveBackward = function (then) {
        this._playAnimation([{
                name: 'Move Backward',
                repeats: 0,
                duration: 250,
                frames: this.getBackwardFrames(),
                move: new __WEBPACK_IMPORTED_MODULE_5__game_pow_core_point__["a" /* Point */](this.getBackwardDirection(), 0)
            }], then);
    };
    CombatPlayerRenderBehaviorComponent.prototype._playAnimation = function (animation, then) {
        var _this = this;
        if (!this.animator || this.animating) {
            return;
        }
        var animations = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](animation, function (anim) {
            var result = __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, anim);
            if (typeof result.move !== 'undefined') {
                result.move = result.move.clone();
            }
            return result;
        });
        this.animating = true;
        this.animator.playChain(animations, function () {
            _this.animating = false;
            if (then) {
                then();
            }
        });
    };
    CombatPlayerRenderBehaviorComponent.prototype._attack = function (cb, attackAnimation) {
        var _this = this;
        if (!this.animator || this.animating) {
            return;
        }
        var animations = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](attackAnimation, function (anim) {
            var result = __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"]({}, anim);
            if (typeof result.move !== 'undefined') {
                result.move = result.move.clone();
            }
            return result;
        });
        this.animating = true;
        this.animator.playChain(animations, function () {
            _this.animating = false;
            if (cb) {
                cb();
            }
        });
    };
    CombatPlayerRenderBehaviorComponent.prototype.interpolateTick = function (elapsed) {
        _super.prototype.interpolateTick.call(this, elapsed);
        if (!this.animating) {
            // Choose frame for interpolated position
            var factor = this._elapsed / this.tickRateMS;
            var altFrame = (factor > 0.0 && factor < 0.5);
            var frame = StateFrames.DEFAULT;
            switch (this.state) {
                case 'Injured':
                    frame = StateFrames.DEFAULT;
                    break;
                case 'Dead':
                    frame = StateFrames.DEFAULT;
                    break;
                case 'Attacking':
                    frame = altFrame ? StateFrames.STRIKE : StateFrames.SWING;
                    break;
                default:
            }
            this.host.frame = this._renderFrame = frame;
        }
    };
    return CombatPlayerRenderBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));
CombatPlayerRenderBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'combat-player-render-behavior',
        template: "<ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__["a" /* CombatService */]])
], CombatPlayerRenderBehaviorComponent);



/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatDamageComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var CombatDamageComponent = (function () {
    function CombatDamageComponent(animate) {
        this.animate = animate;
        this.classes = [];
        this.value = 0;
        this.position = new __WEBPACK_IMPORTED_MODULE_2__game_pow_core_point__["a" /* Point */]();
    }
    CombatDamageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var anim = 'active';
        var element = this.damageValue.nativeElement;
        if (!element) {
            return console.warn('unable to find damage value');
        }
        this.animate.enter(element, anim).then(function () {
            element.classList.remove('active');
            _this.animate.enter(element, 'remove').then(function () {
                element.classList.remove('remove');
            });
        });
    };
    return CombatDamageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], CombatDamageComponent.prototype, "classes", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CombatDamageComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__game_pow_core_point__["a" /* Point */])
], CombatDamageComponent.prototype, "position", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('damageValue'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CombatDamageComponent.prototype, "damageValue", void 0);
CombatDamageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-damage',
        template: "\n    <span #damageValue class=\"damage-value\"\n          [ngClass]=\"classes\"\n          [innerText]=\"value\"\n          [style.top]=\"position?.y + 'px'\"\n          [style.left]=\"position?.x + 'px'\">\n    </span>\n  ",
        styles: [__webpack_require__(337)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* Animate */]])
], CombatDamageComponent);



/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_component__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors_actions_combat_attack_behavior__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_sprite_render_behavior__ = __webpack_require__(121);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatEnemyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBAT_ENEMY_COMPONENTS; });






var CombatEnemyComponent = (function (_super) {
    __extends(CombatEnemyComponent, _super);
    function CombatEnemyComponent(combat) {
        var _this = _super.call(this) || this;
        _this.combat = combat;
        _this._model$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["BehaviorSubject"](null);
        _this.model$ = _this._model$;
        return _this;
    }
    Object.defineProperty(CombatEnemyComponent.prototype, "model", {
        get: function () {
            return this._model$.value;
        },
        set: function (value) {
            this._model$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CombatEnemyComponent.prototype, "visible", {
        get: function () {
            return this.model && this.model.hp > 0;
        },
        enumerable: true,
        configurable: true
    });
    CombatEnemyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.combat.scene.addObject(this);
        this.addBehavior(this.render);
        this.addBehavior(this.attack);
        this._spriteSubscription = this.model$.distinctUntilChanged().do(function (m) {
            _this.setSprite(m ? m.icon : null);
        }).subscribe();
    };
    CombatEnemyComponent.prototype.ngOnDestroy = function () {
        this.removeBehavior(this.render);
        this.removeBehavior(this.attack);
        this.combat.scene.removeObject(this);
        this._spriteSubscription.unsubscribe();
        this.destroy();
    };
    return CombatEnemyComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__["a" /* GameEntityObject */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__behaviors_actions_combat_attack_behavior__["a" /* CombatAttackBehaviorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__behaviors_actions_combat_attack_behavior__["a" /* CombatAttackBehaviorComponent */])
], CombatEnemyComponent.prototype, "attack", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__behaviors_sprite_render_behavior__["a" /* SpriteRenderBehaviorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__behaviors_sprite_render_behavior__["a" /* SpriteRenderBehaviorComponent */])
], CombatEnemyComponent.prototype, "render", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CombatEnemyComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CombatEnemyComponent.prototype, "model", null);
CombatEnemyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-enemy',
        template: "\n    <sprite-render-behavior [icon]=\"(model$ | async)?.icon\"></sprite-render-behavior>\n    <combat-attack-behavior [combat]=\"combat\" #attack></combat-attack-behavior>\n    <ng-content></ng-content>\n  "
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_2__combat_component__["a" /* CombatComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__combat_component__["a" /* CombatComponent */]])
], CombatEnemyComponent);

/** Components associated with combat enemy */
var COMBAT_ENEMY_COMPONENTS = [
    CombatEnemyComponent
];


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_pow2_tile_render_tile_object_renderer__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__behaviors_combat_camera_behavior__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_combat_combat_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__combat_player_entity__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__combat_enemy_entity__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_pow2_tile_render_tile_map_renderer__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_pow2_tile_behaviors_sprite_behavior__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__combat_hud_component__ = __webpack_require__(265);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBAT_MAP_COMPONENTS; });
















var CombatMapComponent = (function (_super) {
    __extends(CombatMapComponent, _super);
    function CombatMapComponent(combatService, store, loadingService, loader) {
        var _this = _super.call(this) || this;
        _this.combatService = combatService;
        _this.store = store;
        _this.loadingService = loadingService;
        _this.loader = loader;
        _this._tileRenderer = new __WEBPACK_IMPORTED_MODULE_12__game_pow2_tile_render_tile_map_renderer__["a" /* TileMapRenderer */]();
        /** Observable<Combatant[]> of enemies */
        _this.enemies$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["h" /* getCombatEncounterEnemies */]);
        /** Observable<Entity[]> of player-card members */
        _this.party$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["i" /* getCombatEncounterParty */]);
        /** Observable<CombatEncounter> */
        _this.encounter$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["g" /* sliceCombatState */]);
        /** The {@see TiledTMXResource} map at the input url */
        _this.resource$ = _this.combatService.combatMap$
            .distinctUntilChanged()
            .map(function (result) {
            _this.setMap(result);
            return result;
        });
        /** Features can be derived after a new map resource has been loaded */
        _this.features$ = _this.resource$.map(function () {
            return _this.features.objects;
        });
        //
        // ISceneViewRenderer
        //
        _this.objectRenderer = new __WEBPACK_IMPORTED_MODULE_7__game_pow2_tile_render_tile_object_renderer__["a" /* TileObjectRenderer */]();
        return _this;
    }
    CombatMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scene.addObject(this);
        this.addBehavior(this.camera);
        // Whenever the underlying map resource changes, update party/enemy state from latest values.
        this._resourceSubscription = this.resource$.do(function () {
            _this.party.forEach(function (p, index) {
                p.setSprite(p.model.icon);
                var battleSpawn = _this.getFeature('p' + (index + 1));
                p.setPoint(new __WEBPACK_IMPORTED_MODULE_13__game_pow_core_point__["a" /* Point */](battleSpawn.x / 16, battleSpawn.y / 16));
            });
            _this.enemies.forEach(function (e, index) {
                var battleSpawn = _this.getFeature('e' + (index + 1));
                if (battleSpawn) {
                    e.setPoint(new __WEBPACK_IMPORTED_MODULE_13__game_pow_core_point__["a" /* Point */](battleSpawn.x / 16, battleSpawn.y / 16));
                }
            });
        }).subscribe();
    };
    CombatMapComponent.prototype.ngOnDestroy = function () {
        this._resourceSubscription.unsubscribe();
        this.scene.removeObject(this);
        this.removeBehavior(this.camera);
        this.destroy();
    };
    CombatMapComponent.prototype.beforeFrame = function (view, elapsed) {
        // Nope
    };
    /**
     * Render all of the map feature components
     */
    CombatMapComponent.prototype.renderFrame = function (view, elapsed) {
        var _this = this;
        this._tileRenderer.render(this, view);
        this.party.forEach(function (component) {
            _this.objectRenderer.render(component, component.renderPoint || component.point, view, component.meta);
            var sprites = component.findBehaviors(__WEBPACK_IMPORTED_MODULE_14__game_pow2_tile_behaviors_sprite_behavior__["a" /* SpriteComponent */]);
            sprites.forEach(function (sprite) {
                _this.objectRenderer.render(sprite, sprite.host.point, view, sprite.meta);
            });
        });
        this.enemies.forEach(function (component) {
            _this.objectRenderer.render(component, component.renderPoint || component.point, view, component.meta);
            var sprites = component.findBehaviors(__WEBPACK_IMPORTED_MODULE_14__game_pow2_tile_behaviors_sprite_behavior__["a" /* SpriteComponent */]);
            sprites.forEach(function (sprite) {
                _this.objectRenderer.render(sprite, sprite.host.point, view, sprite.meta);
            });
        });
    };
    CombatMapComponent.prototype.afterFrame = function (view, elapsed) {
        // Nope
    };
    /**
     * Custom track by function for combatants. We need to keep them around by their
     * entity instance id so that the components are not created/destroyed as their
     * underlying model changes. This is important because these components instances
     * are passed through the combat state machine and their references must remain valid.
     */
    CombatMapComponent.prototype.combatTrackBy = function (index, item) {
        return item.eid;
    };
    return CombatMapComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__["a" /* GameTileMap */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_scene__["a" /* Scene */])
], CombatMapComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_8__behaviors_combat_camera_behavior__["a" /* CombatCameraBehaviorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__behaviors_combat_camera_behavior__["a" /* CombatCameraBehaviorComponent */])
], CombatMapComponent.prototype, "camera", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_10__combat_player_entity__["b" /* CombatPlayerComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], CombatMapComponent.prototype, "party", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_11__combat_enemy_entity__["b" /* CombatEnemyComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], CombatMapComponent.prototype, "enemies", void 0);
CombatMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-map',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(318)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__models_combat_combat_service__["a" /* CombatService */],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_5__components_loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_6__game_pow_core_resource_manager__["a" /* ResourceManager */]])
], CombatMapComponent);

/** Components associated with combat map */
var COMBAT_MAP_COMPONENTS = [
    CombatMapComponent,
    __WEBPACK_IMPORTED_MODULE_15__combat_hud_component__["a" /* CombatHUDComponent */],
    __WEBPACK_IMPORTED_MODULE_8__behaviors_combat_camera_behavior__["a" /* CombatCameraBehaviorComponent */]
];


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_combat_player_render_behavior__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_actions_combat_attack_behavior__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors_actions_combat_run_behavior__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combat_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CombatPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBAT_PLAYER_COMPONENTS; });




// import {CombatMagicBehavior} from './behaviors/actions/combat-magic.behavior';
// import {CombatItemBehavior} from './behaviors/actions/combat-item.behavior';

// import {CombatGuardBehavior} from './behaviors/actions/combat-guard.behavior';

var CombatPlayerComponent = (function (_super) {
    __extends(CombatPlayerComponent, _super);
    function CombatPlayerComponent(combat) {
        var _this = _super.call(this) || this;
        _this.combat = combat;
        return _this;
    }
    Object.defineProperty(CombatPlayerComponent.prototype, "visible", {
        get: function () {
            return this.model && this.model.hp > 0;
        },
        enumerable: true,
        configurable: true
    });
    CombatPlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.combat.scene.addObject(this);
        this.behaviors.forEach(function (c) {
            _this.addBehavior(c);
        });
    };
    CombatPlayerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.combat.scene.removeObject(this);
        this.behaviors.forEach(function (c) {
            _this.removeBehavior(c);
        });
        this.destroy();
    };
    return CombatPlayerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__["a" /* GameEntityObject */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('render,animation,attack,magic,guard,item,run'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], CombatPlayerComponent.prototype, "behaviors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__behaviors_combat_player_render_behavior__["a" /* CombatPlayerRenderBehaviorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__behaviors_combat_player_render_behavior__["a" /* CombatPlayerRenderBehaviorComponent */])
], CombatPlayerComponent.prototype, "render", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CombatPlayerComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CombatPlayerComponent.prototype, "icon", void 0);
CombatPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-player',
        template: "\n    <combat-player-render-behavior #render></combat-player-render-behavior>\n    <animated-behavior #animation></animated-behavior>\n    <combat-attack-behavior [combat]=\"combat\" #attack></combat-attack-behavior>\n    <!--<combat-magic-behavior [combat]=\"combat\" #magic></combat-magic-behavior>-->\n    <!--<combat-item-behavior [combat]=\"combat\" #item></combat-item-behavior>-->\n    <combat-run-behavior [combat]=\"combat\" #run></combat-run-behavior>\n    <!--<combat-guard-behavior [combat]=\"combat\" #guard></combat-guard-behavior>-->\n    <ng-content></ng-content>\n  "
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return __WEBPACK_IMPORTED_MODULE_5__combat_component__["a" /* CombatComponent */]; }))),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__combat_component__["a" /* CombatComponent */]])
], CombatPlayerComponent);

/** Components associated with combat player */
var COMBAT_PLAYER_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__behaviors_combat_player_render_behavior__["a" /* CombatPlayerRenderBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_3__behaviors_actions_combat_attack_behavior__["a" /* CombatAttackBehaviorComponent */],
    // CombatMagicBehavior,
    // CombatItemBehavior,
    __WEBPACK_IMPORTED_MODULE_4__behaviors_actions_combat_run_behavior__["a" /* CombatRunBehavior */],
    // CombatGuardBehavior,
    CombatPlayerComponent
];


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_selectors__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateCombat; });




var CanActivateCombat = (function () {
    function CanActivateCombat(store, router) {
        this.store = store;
        this.router = router;
    }
    CanActivateCombat.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["g" /* sliceCombatState */]).take(1).map(function (combatState) {
            if (!combatState || combatState.type === 'none') {
                _this.router.navigate(['/']);
                return false;
            }
            return combatState.id === route.params['id'];
        });
    };
    return CanActivateCombat;
}());
CanActivateCombat = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
], CanActivateCombat);



/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_world__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });




var GameComponent = (function () {
    function GameComponent(game, notify, world) {
        this.game = game;
        this.notify = notify;
        this.world = world;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.game.initGame().then(function (newGame) {
            if (newGame) {
                var msgs = [
                    'Click, Touch, or use the Arrow Keys.'
                ];
                msgs.forEach(function (m) { return _this.notify.show(m, null, 0); });
            }
        }).catch(console.error.bind(console));
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'game',
        styles: [__webpack_require__(341)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(320)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_3__services_game_world__["a" /* GameWorld */]])
], GameComponent);



/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_world__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameResolver; });




var GameResolver = (function () {
    function GameResolver(world, loadingService) {
        this.world = world;
        this.loadingService = loadingService;
    }
    /** Resolve when the world ready$ observable emits */
    GameResolver.prototype.resolve = function (route, state) {
        this.loadingService.loading = true;
        this.loadingService.title = 'RPG!';
        this.loadingService.message = 'Initializing the world...';
        // Wait for the world.ready$ observable to emit
        return this.world.ready$.take(1);
    };
    return GameResolver;
}());
GameResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_game_world__["a" /* GameWorld */], __WEBPACK_IMPORTED_MODULE_2__components_loading_loading_service__["a" /* LoadingService */]])
], GameResolver);



/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__world_guards__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_world_player_entity__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_index__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_world_map_entity__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_features_index__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__world_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORLD_PROVIDERS; });
/* unused harmony export WORLD_EXPORTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorldModule; });










var WORLD_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_2__world_guards__["a" /* CanActivateWorld */]
];
var WORLD_EXPORTS = [
    __WEBPACK_IMPORTED_MODULE_9__world_component__["a" /* WorldComponent */]
].concat(__WEBPACK_IMPORTED_MODULE_4__map_world_player_entity__["a" /* WORLD_PLAYER_COMPONENTS */], __WEBPACK_IMPORTED_MODULE_6__map_world_map_entity__["a" /* WORLD_MAP_COMPONENTS */], __WEBPACK_IMPORTED_MODULE_7__map_features_index__["a" /* WORLD_MAP_FEATURES */]);
var WorldModule = WorldModule_1 = (function () {
    function WorldModule() {
    }
    WorldModule.forRoot = function () {
        return {
            ngModule: WorldModule_1,
            providers: WORLD_PROVIDERS
        };
    };
    return WorldModule;
}());
WorldModule = WorldModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: WORLD_EXPORTS,
        exports: WORLD_EXPORTS,
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* PortalModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__behaviors_index__["a" /* BehaviorsModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_index__["a" /* AppComponentsModule */]
        ]
    })
], WorldModule);

var WorldModule_1;


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_player_behavior__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatFeatureComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */








/**
 * A map feature that represents a fixed combat encounter.
 *
 * When a player enters the tile of a feature with this component
 * it will trigger a combat encounter that must be defeated before
 * the tile may be passed.
 */
var CombatFeatureComponent = (function (_super) {
    __extends(CombatFeatureComponent, _super);
    function CombatFeatureComponent(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.party = null;
        return _this;
    }
    CombatFeatureComponent.prototype.connectBehavior = function () {
        if (!this.properties || !this.properties.id) {
            console.error('Fixed encounters must have a given id so they may be hidden');
            return false;
        }
        return _super.prototype.connectBehavior.call(this);
    };
    CombatFeatureComponent.prototype.enter = function (object) {
        var _this = this;
        this.party = object.findBehavior(__WEBPACK_IMPORTED_MODULE_1__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */]);
        if (!this.party) {
            return false;
        }
        // Stop the moving entity until it has defeated the combat encounter.
        this.party.velocity.zero();
        object.setPoint(object.point);
        // Find the combat zone and launch a fixed encounter.
        var zone = this.host.tileMap.getCombatZones(this.party.host.point);
        this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["e" /* getGameParty */])
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["p" /* getGameDataFixedEncounters */]), this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["q" /* getGameDataEnemies */]), function (party, encounters, enemies) {
            var encounter = encounters.find(function (e) { return e.id === _this.properties.id; });
            var toCombatant = function (id) {
                var itemTemplate = enemies.find(function (e) { return e.id === id; });
                return Object.assign({}, itemTemplate, {
                    eid: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__models_game_data_game_data_model__["c" /* entityId */])(itemTemplate.id),
                    maxhp: itemTemplate.hp,
                    maxmp: itemTemplate.mp
                });
            };
            var payload = {
                type: 'fixed',
                id: encounter.id,
                enemies: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_immutable__["List"])(encounter.enemies.map(toCombatant)),
                zone: zone.target || zone.map,
                message: encounter.message,
                party: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_immutable__["List"])(party)
            };
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_actions__["b" /* CombatEncounterAction */](payload));
        })
            .take(1)
            .subscribe();
        return true;
    };
    return CombatFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CombatFeatureComponent.prototype, "feature", void 0);
CombatFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'combat-feature',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
], CombatFeatureComponent);



/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogFeatureComponent; });


var DialogFeatureComponent = (function (_super) {
    __extends(DialogFeatureComponent, _super);
    function DialogFeatureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /** The dialog text */
        _this.text$ = _this.feature$.map(function (f) {
            return f.properties.text;
        });
        /** The dialog title */
        _this.title$ = _this.feature$.map(function (f) {
            return f.properties.title;
        });
        /** The icon to display for the dialog speaker */
        _this.icon$ = _this.feature$.map(function (f) {
            return f.properties.icon;
        });
        return _this;
    }
    return DialogFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DialogFeatureComponent.prototype, "feature", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DialogFeatureComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DialogFeatureComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DialogFeatureComponent.prototype, "onClose", void 0);
DialogFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'dialog-feature',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(342)],
        template: __webpack_require__(321)
    })
], DialogFeatureComponent);



/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_feature_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialog_feature_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portal_feature_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ship_feature_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__temple_feature_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treasure_feature_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_feature_component__ = __webpack_require__(154);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORLD_MAP_FEATURES; });















var WORLD_MAP_FEATURES = [
    __WEBPACK_IMPORTED_MODULE_0__map_feature_component__["a" /* MapFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_1__combat_feature_component__["a" /* CombatFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_2__dialog_feature_component__["a" /* DialogFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_3__portal_feature_component__["a" /* PortalFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_4__ship_feature_component__["a" /* ShipFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_7__store_feature_component__["a" /* StoreFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_5__temple_feature_component__["a" /* TempleFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_6__treasure_feature_component__["a" /* TreasureFeatureComponent */]
];


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalFeatureComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var PortalFeatureComponent = (function (_super) {
    __extends(PortalFeatureComponent, _super);
    function PortalFeatureComponent(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        return _this;
    }
    PortalFeatureComponent.prototype.entered = function (object) {
        this.assertFeature();
        if (!this.properties.target) {
            return false;
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["a" /* GameStateTravelAction */]({
            location: this.properties.target,
            position: {
                x: this.properties.targetX,
                y: this.properties.targetY
            }
        }));
        return true;
    };
    return PortalFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PortalFeatureComponent.prototype, "feature", void 0);
PortalFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'portal-feature',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
], PortalFeatureComponent);



/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_player_behavior__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipFeatureComponent; });






var ShipFeatureComponent = (function (_super) {
    __extends(ShipFeatureComponent, _super);
    function ShipFeatureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._tickInterval = -1;
        _this._subscription = null;
        return _this;
    }
    ShipFeatureComponent.prototype.disconnectBehavior = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
        }
        return true;
    };
    ShipFeatureComponent.prototype.connectBehavior = function () {
        var _this = this;
        if (!_super.prototype.connectBehavior.call(this)) {
            return false;
        }
        var gameWorld = this.host.world;
        if (gameWorld) {
            this._subscription = this.host.world.store.select(__WEBPACK_IMPORTED_MODULE_0__models_selectors__["o" /* getGameShipPosition */])
                .distinctUntilChanged()
                .subscribe(function (p) {
                _this.host.setPoint(p);
            });
        }
        return true;
    };
    ShipFeatureComponent.prototype.enter = function (object) {
        // Must have a entity component to board a ship.  Don't want buildings
        // and NPCs boarding ships... or do we?  [maniacal laugh]
        this.party = object.findBehavior(__WEBPACK_IMPORTED_MODULE_3__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */]);
        if (!this.party) {
            return false;
        }
        this.partySprite = object.icon;
        this.party.passableKeys = ['shipPassable'];
        return true;
    };
    ShipFeatureComponent.prototype.entered = function (object) {
        return this.board(object);
    };
    /**
     * Board an object onto the ship component.  This will modify the
     * @param object
     */
    ShipFeatureComponent.prototype.board = function (object) {
        var _this = this;
        if (this.partyObject || !this.party) {
            return false;
        }
        this.partyObject = object;
        object.setSprite(this.host.icon);
        this.host.visible = false;
        this.host.enabled = false;
        this._tickInterval = setInterval(function () {
            if (__WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */].equal(_this.partyObject.point, _this.party.targetPoint) && !_this.party.heading.isZero()) {
                var from = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](_this.partyObject.point);
                var to = from.clone().add(_this.party.heading);
                if (!_this.party.collideWithMap(from, 'shipPassable') && !_this.party.collideWithMap(to, 'passable')) {
                    _this.disembark(from, to, _this.party.heading.clone());
                }
            }
        }, 32);
        return true;
    };
    ShipFeatureComponent.prototype.disembark = function (from, to, heading) {
        clearInterval(this._tickInterval);
        this.partyObject.setSprite(this.partySprite);
        this.party.targetPoint.set(to);
        this.party.velocity.set(heading);
        this.party.passableKeys = ['passable'];
        this.host.point.x = from.x;
        this.host.point.y = from.y;
        this.host.visible = true;
        this.host.enabled = true;
        this.partyObject = null;
        this.party = null;
        this.host.world.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["t" /* GameStateSetKeyDataAction */]('shipPosition', this.host.point));
    };
    return ShipFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_2__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShipFeatureComponent.prototype, "feature", void 0);
ShipFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'ship-feature',
        template: "<ng-content></ng-content>"
    })
], ShipFeatureComponent);



/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__(4);
/* unused harmony export storeItemsFilter */
/* unused harmony export sellItemsFilter */
/* unused harmony export getFeatureProperty */
/* unused harmony export itemInGroups */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreFeatureComponent; });










/**
 * Given a list of potential items, filter it to only ones that can be bartered in this store.
 * @param items The list of items to filter
 * @param groups The item groups that are supported by this store
 * @param level The level of items that are sold in this store
 * @returns {ITemplateBaseItem[]} The filtered item list
 */
function storeItemsFilter(items, groups, level) {
    // TODO: This any cast shouldn't be here. I was in a hurry.
    return items.filter(function (i) {
        var levelMatch = (typeof i.level === 'undefined' || i.level === level);
        return levelMatch && itemInGroups(i, groups);
    });
}
//
//
//
// TODO: Maps need to be updated to change "category" for stores to a list of item types
// because currently all stores show nothing to sell.
//
//
/**
 * Given a list of potential items to sell, filter to only ones that can be bartered in this store.
 * @param items The list of items to filter
 * @param groups The item groups that are supported by this store
 * @returns {ITemplateBaseItem[]} The filtered item list
 */
function sellItemsFilter(items, groups) {
    // TODO: This any cast shouldn't be here. I was in a hurry.
    return items.filter(function (i) {
        return itemInGroups(i, groups);
    });
}
function getFeatureProperty(name, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    return function (f) {
        return (f && f.properties && f.properties[name]) ? f.properties[name] : defaultValue;
    };
}
/**
 * return true if the given item belongs to at least one of the given groups
 */
function itemInGroups(item, groups) {
    if (!item) {
        return false;
    }
    // If there are no groups, the item is OK
    var groupsMatch = !item.groups || groups.length === 0;
    // If there are groups, make sure it matches at least one of them
    (item.groups || []).forEach(function (group) {
        groupsMatch = groupsMatch || groups.indexOf(group) !== -1;
    });
    return groupsMatch;
}
var StoreFeatureComponent = (function (_super) {
    __extends(StoreFeatureComponent, _super);
    function StoreFeatureComponent(game, notify, store) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.notify = notify;
        _this.store = store;
        _this.onClose = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        /** @internal */
        _this._level$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](1);
        /** @internal */
        _this._weapons$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["j" /* getGameDataWeapons */]);
        /** @internal */
        _this._armors$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["k" /* getGameDataArmors */]);
        /** @internal */
        _this._items$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["l" /* getGameDataItems */]);
        /** @internal */
        _this._selling$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](false);
        /**
         * The name of this (fine) establishment.
         */
        _this.name$ = _this.feature$.map(getFeatureProperty('name'));
        /**
         * The item groups that this vendor sells
         */
        _this.groups$ = _this.feature$.map(getFeatureProperty('groups', []));
        /**
         * The category of store as determined by its map feature.
         */
        _this.category$ = _this.feature$.map(getFeatureProperty('category'));
        /**
         * The amount of gold the party has to spend
         */
        _this.partyGold$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["d" /* getGamePartyGold */]);
        /**
         * The level of items available at this store
         */
        _this.level$ = _this._level$;
        /**
         * The items that the party has available to sell to the merchant
         */
        _this.partyInventory$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["f" /* getGameInventory */])
            .combineLatest(_this.category$, function (inventory, category) {
            return inventory.filter(function (i) { return i && i.category === category; });
        })
            .combineLatest(_this.groups$, sellItemsFilter);
        /**
         * Calculate the inventory for the store. Filter by category, item grouping, and player level.
         */
        _this.inventory$ = _this._weapons$
            .combineLatest(_this._armors$, _this._items$, _this.category$, function (weapons, armors, items, cat) {
            switch (cat) {
                case 'items':
                    return items;
                case 'weapons':
                    return weapons;
                case 'armor':
                    return armors;
                default:
                    // If there is no category, the vendor can sell all types.
                    return items.concat(weapons).concat(armors);
            }
        })
            .combineLatest(_this.groups$, _this.level$, storeItemsFilter);
        /** Determine if the UI is in a selling state. */
        _this.selling$ = _this._selling$;
        /** @internal */
        _this._selected$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](null);
        /** The selected item to purchase/sell. */
        _this.selected$ = _this._selected$;
        _this.isBuying$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
            .combineLatest(_this.selected$, _this.selling$, function (selected, selling) {
            return !selected && !selling;
        });
        _this.isSelling$ = __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
            .combineLatest(_this.selected$, _this.selling$, function (selected, selling) {
            return !selected && selling;
        });
        /** Verb for the current buy/sell state for an action button */
        _this.actionVerb$ = _this.selling$.map(function (selling) {
            return selling ? 'Sell' : 'Buy';
        });
        /** @internal */
        _this._onAction$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        /** @internal */
        _this._onToggleAction$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["Subject"]();
        _this._doToggleActionSubscription$ = _this._onToggleAction$
            .withLatestFrom(_this.partyInventory$, function (evt, inventory) {
            var selling = _this._selling$.value;
            if (!selling) {
                if (inventory.length === 0) {
                    _this.notify.show("You don't have any inventory of this type to sell.", null, 1500);
                    _this._selling$.next(false);
                    return;
                }
            }
            _this._selling$.next(!selling);
        })
            .subscribe();
        /** Stream of clicks on the actionable button */
        _this._doActionSubscription$ = _this._onAction$
            .withLatestFrom(_this.store.select(__WEBPACK_IMPORTED_MODULE_6__models_selectors__["n" /* sliceGameState */]), function (evt, model) {
            if (!_this._selected$.value) {
                return;
            }
            var item = _this._selected$.value;
            var isSelling = _this._selling$.value;
            var value = item.value;
            if (!isSelling && value > model.gold) {
                _this.notify.show("You don't have enough money");
                return;
            }
            _this._selected$.next(null);
            _this._selling$.next(false);
            if (isSelling) {
                _this.notify.show("Sold " + item.name + " for " + item.value + " gold.", null, 1500);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["x" /* GameStateRemoveInventoryAction */](item));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__["d" /* EntityRemoveItemAction */](item.eid));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["u" /* GameStateAddGoldAction */](value));
            }
            else {
                var itemInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__models_game_data_game_data_model__["b" /* instantiateEntity */])(item);
                _this.notify.show("Purchased " + item.name + ".", null, 1500);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["u" /* GameStateAddGoldAction */](-value));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__models_entity_entity_actions__["c" /* EntityAddItemAction */](itemInstance));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__models_game_state_game_state_actions__["w" /* GameStateAddInventoryAction */](itemInstance));
            }
        }).subscribe();
        return _this;
    }
    StoreFeatureComponent.prototype.ngOnDestroy = function () {
        this._doActionSubscription$.unsubscribe();
        this._doToggleActionSubscription$.unsubscribe();
    };
    return StoreFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StoreFeatureComponent.prototype, "feature", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StoreFeatureComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], StoreFeatureComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], StoreFeatureComponent.prototype, "onClose", void 0);
StoreFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'store-feature',
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__(343)],
        template: __webpack_require__(322)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_8__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["a" /* Store */]])
], StoreFeatureComponent);



/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempleFeatureComponent; });









var TempleFeatureComponent = (function (_super) {
    __extends(TempleFeatureComponent, _super);
    function TempleFeatureComponent(game, store, notify) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.store = store;
        _this.notify = notify;
        _this.onClose = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        _this.partyGold$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_7__models_selectors__["d" /* getGamePartyGold */]);
        _this.party$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_7__models_selectors__["e" /* getGameParty */]);
        _this.name$ = _this.feature$.map(function (data) {
            return data.properties.name;
        });
        _this.icon$ = _this.feature$.map(function (data) {
            return data.properties.icon;
        });
        _this.cost$ = _this.feature$.map(function (data) {
            return parseInt(data.properties.cost, 10);
        });
        _this._onRest$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs__["Subject"]();
        return _this;
    }
    TempleFeatureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._onRestSubscription$ = this._onRest$.withLatestFrom(this.party$, this.partyGold$, this.cost$, function (evt, party, partyGold, cost) {
            var alreadyHealed = !party.find(function (p) {
                console.log(p, __WEBPACK_IMPORTED_MODULE_4__services_rpg_game__["a" /* RPGGame */].getHPForLevel(1, p));
                return p.hp !== p.maxhp;
            });
            if (cost > partyGold) {
                _this.notify.show('You don\'t have enough money');
            }
            else if (alreadyHealed) {
                _this.notify.show('Keep your money.\nYour party is already fully healed.');
            }
            else {
                var partyIds = party.map(function (p) { return p.eid; }).toArray();
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_8__models_game_state_game_state_actions__["v" /* GameStateHealPartyAction */]({
                    cost: cost,
                    partyIds: partyIds
                }));
                var msg = 'Your party has been healed! \nYou have (' + (partyGold - cost) + ') monies.';
                _this.notify.show(msg, null, 5000);
            }
            __WEBPACK_IMPORTED_MODULE_1_underscore___default.a.defer(function () {
                _this.onClose.next({});
            });
        })
            .subscribe();
    };
    TempleFeatureComponent.prototype.ngOnDestroy = function () {
        this._onRestSubscription$.unsubscribe();
    };
    return TempleFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TempleFeatureComponent.prototype, "onClose", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TempleFeatureComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TempleFeatureComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TempleFeatureComponent.prototype, "party", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TempleFeatureComponent.prototype, "feature", void 0);
TempleFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'temple-feature',
        styles: [__webpack_require__(344)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectionStrategy"].OnPush,
        encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(323)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_6__components_notification_notification_service__["a" /* NotificationService */]])
], TempleFeatureComponent);



/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_entity_entity_actions__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreasureFeatureComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */








var TreasureFeatureComponent = (function (_super) {
    __extends(TreasureFeatureComponent, _super);
    function TreasureFeatureComponent(store, notify) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.notify = notify;
        /** @internal */
        _this._weapons$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["j" /* getGameDataWeapons */]);
        /** @internal */
        _this._armors$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["k" /* getGameDataArmors */]);
        /** @internal */
        _this._items$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_5__models_selectors__["l" /* getGameDataItems */]);
        /** Available items that can be instantiated from a treasure chest. */
        _this.inventory$ = _this._weapons$
            .combineLatest(_this._armors$, _this._items$, function (weapons, armors, items) {
            return items.concat(weapons).concat(armors);
        });
        return _this;
    }
    TreasureFeatureComponent.prototype.ngAfterViewInit = function () {
        if (!this.properties.id) {
            throw new Error('treasure must always have a unique lower-snake-case id');
        }
    };
    TreasureFeatureComponent.prototype.enter = function (object) {
        var _this = this;
        if (typeof this.properties.gold !== 'undefined') {
            this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["u" /* GameStateAddGoldAction */](this.properties.gold));
            this.notify.show("You found " + this.properties.gold + " gold!", null, 0);
        }
        if (typeof this.properties.item === 'string') {
            this.inventory$.take(1).do(function (items) {
                var template = items.find(function (item) {
                    return item.id === _this.properties.item;
                });
                if (!template) {
                    throw new Error('could not find item template for id: ' + _this.properties.item);
                }
                var itemInstance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__models_game_data_game_data_model__["b" /* instantiateEntity */])(template);
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__models_entity_entity_actions__["c" /* EntityAddItemAction */](itemInstance));
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["w" /* GameStateAddInventoryAction */](itemInstance));
                _this.notify.show("You found " + template.name + "!", null, 0);
            }).subscribe();
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__models_game_state_game_state_actions__["t" /* GameStateSetKeyDataAction */](this.properties.id, true));
        return true;
    };
    return TreasureFeatureComponent;
}(__WEBPACK_IMPORTED_MODULE_0__map_feature_component__["b" /* TiledFeatureComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TreasureFeatureComponent.prototype, "feature", void 0);
TreasureFeatureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'treasure-feature',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__components_notification_notification_service__["a" /* NotificationService */]])
], TreasureFeatureComponent);



/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_game_state_game_state_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_map_feature_input_behavior__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_tile_render_tile_object_renderer__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__world_player_entity__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scene_game_tile_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorldMapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORLD_MAP_COMPONENTS; });














//
// TODO: Player position is not sync'd to store!
//
//
var WorldMapComponent = (function (_super) {
    __extends(WorldMapComponent, _super);
    function WorldMapComponent(gameStateService, store, loadingService, loader) {
        var _this = _super.call(this) || this;
        _this.gameStateService = gameStateService;
        _this.store = store;
        _this.loadingService = loadingService;
        _this.loader = loader;
        /** For referencing in template */
        _this.self = _this;
        _this.renderPoint = new __WEBPACK_IMPORTED_MODULE_9__game_pow_core_point__["a" /* Point */]();
        _this._subscriptions = [];
        /** The {@see TiledTMXResource} map at the input url */
        _this.resource$ = _this.gameStateService.worldMap$
            .distinctUntilChanged()
            .map(function (result) {
            _this.setMap(result);
            return result;
        });
        /** Features can be derived after a new map resource has been loaded */
        _this.features$ = _this.resource$.map(function () {
            return _this.features.objects;
        });
        /**
         * Exclude features that are marked as hidden in the game keydata storage.
         */
        _this.activeFeatures$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_8__models_selectors__["r" /* getGameKeyData */])
            .combineLatest(_this.features$, function (keyMap, features) {
            return features.filter(function (f) {
                // If it doesn't have an ID then it can't be hidden.
                // If there is a value in the keyData with the id as a key and true as a value, the feature is hidden.
                return !f.properties || !f.properties.id || keyMap.get(f.properties.id) !== true;
            });
        });
        _this._renderPoint$ = new __WEBPACK_IMPORTED_MODULE_13_rxjs_BehaviorSubject__["BehaviorSubject"](_this.renderPoint);
        /** Observable of the current player position in the world */
        _this.renderPoint$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_8__models_selectors__["s" /* getGamePartyPosition */])
            .combineLatest(_this._renderPoint$, function (point, renderPoint) {
            return _this.renderPoint.set(point || renderPoint);
        });
        //
        // ISceneViewRenderer
        //
        _this.objectRenderer = new __WEBPACK_IMPORTED_MODULE_6__game_pow2_tile_render_tile_object_renderer__["a" /* TileObjectRenderer */]();
        //
        // Party position
        //
        _this.notTraveling$ = _this.loadingService.loading$.map(function (loading) { return !loading; });
        /** Observable of the current player position in the world. Keeps renderPoint in sync after each move. */
        _this.position$ = _this.store
            .select(__WEBPACK_IMPORTED_MODULE_8__models_selectors__["s" /* getGamePartyPosition */])
            .distinctUntilChanged()
            .do(function (position) {
            _this.renderPoint = new __WEBPACK_IMPORTED_MODULE_9__game_pow_core_point__["a" /* Point */](position);
        });
        /** Observable of Entity representing the player-card leader to be rendered in the world */
        _this.partyLeader$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_8__models_selectors__["e" /* getGameParty */])
            .map(function (party) {
            return party.get(0);
        });
        return _this;
    }
    WorldMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.scene.addObject(this);
        this.behaviors.forEach(function (c) {
            _this.addBehavior(c);
        });
        // To update renderPoint when party point changes
        this._subscriptions.push(this.position$.subscribe());
    };
    WorldMapComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.scene.removeObject(this);
        this.behaviors.forEach(function (c) {
            _this.removeBehavior(c);
        });
        this._subscriptions.forEach(function (s) { return s.unsubscribe(); });
        this._subscriptions.length = 0;
        this.destroy();
    };
    WorldMapComponent.prototype.beforeFrame = function (view, elapsed) {
        // Nope
    };
    /**
     * Render all of the map feature components
     */
    WorldMapComponent.prototype.renderFrame = function (view, elapsed) {
        var _this = this;
        this.mapFeatures.forEach(function (mapFeatureComponent) {
            if (mapFeatureComponent.host) {
                var data = mapFeatureComponent.host;
                _this.objectRenderer.render(data, data.renderPoint || data.point, view, data.meta);
            }
        });
    };
    WorldMapComponent.prototype.afterFrame = function (view, elapsed) {
        // Nope
    };
    return WorldMapComponent;
}(__WEBPACK_IMPORTED_MODULE_12__scene_game_tile_map__["a" /* GameTileMap */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__game_pow2_scene_scene__["a" /* Scene */])
], WorldMapComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__world_player_entity__["b" /* WorldPlayerComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__world_player_entity__["b" /* WorldPlayerComponent */])
], WorldMapComponent.prototype, "player", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('input'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], WorldMapComponent.prototype, "behaviors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__map_feature_component__["a" /* MapFeatureComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], WorldMapComponent.prototype, "mapFeatures", void 0);
WorldMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'world-map',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(325)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__models_game_state_game_state_service__["a" /* GameStateService */],
        __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_10__components_loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_2__game_pow_core_resource_manager__["a" /* ResourceManager */]])
], WorldMapComponent);

/** Components associated with world map */
var WORLD_MAP_COMPONENTS = [
    WorldMapComponent,
    __WEBPACK_IMPORTED_MODULE_5__map_feature_component__["a" /* MapFeatureComponent */],
    __WEBPACK_IMPORTED_MODULE_3__behaviors_map_feature_input_behavior__["a" /* MapFeatureInputBehaviorComponent */]
];


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_game_tile_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_combat_encounter_behavior__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__behaviors_player_behavior__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_player_camera_behavior__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__behaviors_player_map_path_behavior__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__behaviors_player_render_behavior__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__behaviors_player_look_behavior__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_pow2_tile_render_tile_object_renderer__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_feature_component__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorldPlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORLD_PLAYER_COMPONENTS; });















var WorldPlayerComponent = (function (_super) {
    __extends(WorldPlayerComponent, _super);
    function WorldPlayerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** For referencing in template */
        _this.self = _this;
        /** The fill color to use when rendering a path target. */
        _this.targetFill = 'rgba(10,255,10,0.3)';
        /** The stroke to use when outlining path target. */
        _this.targetStroke = 'rgba(10,255,10,0.3)';
        /** Line width for the path target stroke. */
        _this.targetStrokeWidth = 1.5;
        _this._featureComponent$ = new __WEBPACK_IMPORTED_MODULE_14_rxjs__["BehaviorSubject"](null);
        _this.featureComponent$ = _this._featureComponent$;
        //
        // ISceneViewRenderer
        //
        _this.objectRenderer = new __WEBPACK_IMPORTED_MODULE_11__game_pow2_tile_render_tile_object_renderer__["a" /* TileObjectRenderer */]();
        return _this;
    }
    WorldPlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setSprite(this.model.icon);
        this.scene.addObject(this);
        this.behaviors.forEach(function (c) {
            _this.addBehavior(c);
        });
    };
    WorldPlayerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.scene.removeObject(this);
        this.behaviors.forEach(function (c) {
            _this.removeBehavior(c);
        });
        this.destroy();
    };
    /** The player has touched a game feature. */
    WorldPlayerComponent.prototype.onFeatureLook = function (event) {
        var feature = event.findBehavior(__WEBPACK_IMPORTED_MODULE_13__map_feature_component__["b" /* TiledFeatureComponent */]);
        if (feature) {
            feature.enter(this);
            this.feature = feature;
        }
    };
    /** The player was touching a game feature, and is now leaving. */
    WorldPlayerComponent.prototype.onFeatureLookAway = function (event) {
        var feature = event.findBehavior(__WEBPACK_IMPORTED_MODULE_13__map_feature_component__["b" /* TiledFeatureComponent */]);
        if (feature) {
            feature.exit(this);
            this.feature = null;
        }
    };
    Object.defineProperty(WorldPlayerComponent.prototype, "feature", {
        get: function () {
            return this._featureComponent$.value;
        },
        set: function (value) {
            this._featureComponent$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    WorldPlayerComponent.prototype.escapeFeature = function () {
        if (this.feature) {
            this.onFeatureLookAway(this.feature.host);
        }
    };
    WorldPlayerComponent.prototype.beforeFrame = function (view, elapsed) {
        // Nope
    };
    /**
     * Render all of the map feature components
     */
    WorldPlayerComponent.prototype.renderFrame = function (view, elapsed) {
        // Render self
        this.objectRenderer.render(this, this.renderPoint || this.point, view, this.meta);
        // Any path target
        if (this.movable) {
            var target = this.movable;
            if (this.movable.path && this.movable.path.length > 0) {
                view.context.save();
                var destination = target.path[target.path.length - 1].clone();
                destination.x -= 0.5;
                destination.y -= 0.5;
                var screenTile = view.worldToScreen(new __WEBPACK_IMPORTED_MODULE_12__game_pow_core_rect__["a" /* Rect */](destination, new __WEBPACK_IMPORTED_MODULE_10__game_pow_core_point__["a" /* Point */](1, 1)));
                view.context.fillStyle = this.targetFill;
                view.context.fillRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
                view.context.strokeStyle = this.targetStroke;
                view.context.lineWidth = this.targetStrokeWidth;
                view.context.strokeRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
                view.context.restore();
            }
        }
    };
    WorldPlayerComponent.prototype.afterFrame = function (view, elapsed) {
        // Nope
    };
    return WorldPlayerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__scene_game_entity_object__["a" /* GameEntityObject */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('render,collision,path,player,trigger,camera,encounter'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], WorldPlayerComponent.prototype, "behaviors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], WorldPlayerComponent.prototype, "icon", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WorldPlayerComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__game_pow2_scene_scene__["a" /* Scene */])
], WorldPlayerComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__scene_game_tile_map__["a" /* GameTileMap */])
], WorldPlayerComponent.prototype, "map", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_10__game_pow_core_point__["a" /* Point */])
], WorldPlayerComponent.prototype, "point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */])
], WorldPlayerComponent.prototype, "movable", void 0);
WorldPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'world-player',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: "\n    <player-render-behavior #render></player-render-behavior>\n    <collision-behavior #collision></collision-behavior>\n    <player-map-path-behavior [tileMap]=\"map\" #path></player-map-path-behavior>\n    <player-behavior (onCompleteMove)=\"encounter.completeMove($event)\" #player></player-behavior>\n    <combat-encounter-behavior [scene]=\"scene\" #encounter [tileMap]=\"map\" [player]=\"self\"></combat-encounter-behavior>\n    <player-camera-behavior #camera></player-camera-behavior>\n    <player-look-behavior\n      (onLook)=\"onFeatureLook($event)\"\n      (onLookAway)=\"onFeatureLookAway($event)\"\n      #trigger></player-look-behavior>\n    <ng-content></ng-content>\n  "
    })
], WorldPlayerComponent);

/** Components associated with world player */
var WORLD_PLAYER_COMPONENTS = [
    WorldPlayerComponent,
    __WEBPACK_IMPORTED_MODULE_3__behaviors_combat_encounter_behavior__["a" /* CombatEncounterBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_4__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_5__behaviors_player_camera_behavior__["a" /* PlayerCameraBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_6__behaviors_player_map_path_behavior__["a" /* PlayerMapPathBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_7__behaviors_player_render_behavior__["b" /* PlayerRenderBehaviorComponent */],
    __WEBPACK_IMPORTED_MODULE_8__behaviors_player_look_behavior__["a" /* PlayerTriggerBehaviorComponent */]
];


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__behaviors_player_behavior__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_pow2_tile_tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__game_pow2_tile_behaviors_tile_map_path_behavior__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_pow2_core_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_pow2_tile_tile_map_view__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_party_menu_party_menu_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_world_map_entity__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scene_game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__game_pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldComponent; });

















var WorldComponent = (function (_super) {
    __extends(WorldComponent, _super);
    function WorldComponent(game, notify, loadingService, store, world) {
        var _this = _super.call(this) || this;
        _this.game = game;
        _this.notify = notify;
        _this.loadingService = loadingService;
        _this.store = store;
        _this.world = world;
        /**
         * Whether to render debug view information
         */
        _this.debug = false;
        _this.styleBackground = 'rgba(0,0,0,1)';
        _this.mouse = null;
        _this.scene = new __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__["a" /* Scene */]();
        _this.world.mark(_this.scene);
        _this.world.time.start();
        return _this;
    }
    /**
     * Escape action handler. Escape out of any active feature or menu
     */
    WorldComponent.prototype.handleKeyboardEvent = function (event) {
        if (event.key === 'Escape') {
            // Escape out of any feature the player is currently in
            if (this.map.player && this.map.player.feature) {
                this.map.player.escapeFeature();
            }
            else if (this.partyMenu) {
                // Otherwise toggle the party menu
                this.partyMenu.open = !this.partyMenu.open;
            }
        }
        else if (event.key === '1') {
            this.debug = !this.debug;
        }
    };
    WorldComponent.prototype.ngOnDestroy = function () {
        this.world.erase(this.scene);
        this.scene.removeView(this);
    };
    WorldComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.canvas = this.canvasElementRef.nativeElement;
        this.camera.point.set(-0.5, -0.5);
        this.scene.addView(this);
        setTimeout(function () { return _this._onResize(); }, 1);
    };
    WorldComponent.prototype._onResize = function (event) {
        _super.prototype._onResize.call(this, event);
        // Camera (window bounds)
        if (this.map) {
            var tileOffset = this.map.bounds.getCenter();
            var offset = this._bounds.clone().divide(2).multiply(-1).add(tileOffset);
            this.camera.point.set(offset.floor());
        }
        this.camera.extent.set(this._bounds);
    };
    //
    // ISceneView implementation
    //
    WorldComponent.prototype.onAddToScene = function (scene) {
        _super.prototype.onAddToScene.call(this, scene);
        this.mouse = this.world.input.mouseHook(this, 'world');
        //
        // TODO: Consider how to remove these event listeners and replace with strongly typed observables
        //
        scene.on(__WEBPACK_IMPORTED_MODULE_7__game_pow2_tile_tile_map__["a" /* TileMap */].Events.MAP_LOADED, this.syncBehaviors, this);
    };
    WorldComponent.prototype.onRemoveFromScene = function (scene) {
        this.world.input.mouseUnhook('world');
        scene.off(__WEBPACK_IMPORTED_MODULE_7__game_pow2_tile_tile_map__["a" /* TileMap */].Events.MAP_LOADED, this.syncBehaviors, this);
    };
    WorldComponent.prototype._onClick = function (e) {
        // Ignore clicks that did not originate on the canvas
        if (e.srcElement !== this.canvas) {
            return;
        }
        // TODO: Skip this scene lookup and use the player component and its path behavior.
        var pathComponent = this.scene.componentByType(__WEBPACK_IMPORTED_MODULE_8__game_pow2_tile_behaviors_tile_map_path_behavior__["a" /* TileMapPathBehavior */]);
        var playerComponent = this.scene.componentByType(__WEBPACK_IMPORTED_MODULE_5__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */]);
        if (pathComponent && playerComponent) {
            __WEBPACK_IMPORTED_MODULE_9__game_pow2_core_input__["a" /* PowInput */].mouseOnView(e, this.mouse.view, this.mouse);
            playerComponent.path = pathComponent.calculatePath(playerComponent.targetPoint, this.mouse.world);
            e.preventDefault();
            return false;
        }
    };
    /**
     * Render the tile map and any features it has.
     */
    WorldComponent.prototype.renderFrame = function (elapsed) {
        _super.prototype.renderFrame.call(this, elapsed);
        // Map renders features
        if (this.map) {
            this.map.renderFrame(this, elapsed);
            // Player renders self and target paths
            if (this.map.player) {
                this.map.player.renderFrame(this, elapsed);
            }
        }
        if (this.debug) {
            this.debugRender();
        }
        return this;
    };
    /**
     * Render Tile debug information.
     */
    WorldComponent.prototype.debugRender = function () {
        var _this = this;
        var debugStrings = [
            "Camera: (" + this.camera.point.x + "," + this.camera.point.y + ")"
        ];
        var player = this.scene.objectByComponent(__WEBPACK_IMPORTED_MODULE_5__behaviors_player_behavior__["a" /* PlayerBehaviorComponent */]);
        if (player) {
            debugStrings.push("Player: (" + player.point.x + "," + player.point.y + ")");
        }
        var clipRect = this.getCameraClip();
        debugStrings.push("Clip: (" + clipRect.point.x + "," + clipRect.point.y + ") (" + clipRect.extent.x + "," + clipRect.extent.y + ")");
        // Render the clip rectangle
        this.context.strokeStyle = '#00ff00';
        var screenClip = this.worldToScreen(clipRect);
        this.context.strokeRect(screenClip.point.x, screenClip.point.y, screenClip.extent.x, screenClip.extent.y);
        // Render impassable tiles on the map in the clip rect
        this.context.strokeStyle = '#ff0000';
        var clipXMin = clipRect.point.x;
        var clipXMax = clipRect.getRight();
        var clipYMin = clipRect.point.y;
        var clipYMax = clipRect.getBottom();
        var _loop_1 = function (x) {
            var _loop_2 = function (y) {
                this_1.map.getLayers().forEach(function (layer) {
                    var tile = _this.map.getTerrain(layer.name, x, y);
                    if (tile && !tile.passable) {
                        var screenTile = _this.worldToScreen(new __WEBPACK_IMPORTED_MODULE_15__game_pow_core_rect__["a" /* Rect */](new __WEBPACK_IMPORTED_MODULE_16__game_pow_core_point__["a" /* Point */](x - 0.5, y - 0.5), new __WEBPACK_IMPORTED_MODULE_16__game_pow_core_point__["a" /* Point */](1, 1)));
                        _this.context.strokeRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
                    }
                });
            };
            for (var y = clipYMin; y <= clipYMax; y++) {
                _loop_2(y);
            }
        };
        var this_1 = this;
        for (var x = clipXMin; x <= clipXMax; x++) {
            _loop_1(x);
        }
        // Game features
        this.context.strokeStyle = '#0000FF';
        var tiles = this.scene.objectsByType(__WEBPACK_IMPORTED_MODULE_14__scene_game_feature_object__["a" /* GameFeatureObject */]);
        tiles.forEach(function (object) {
            var point = object.renderPoint || object.point;
            var screenTile = _this.worldToScreen(new __WEBPACK_IMPORTED_MODULE_15__game_pow_core_rect__["a" /* Rect */](new __WEBPACK_IMPORTED_MODULE_16__game_pow_core_point__["a" /* Point */](point.x - 0.5, point.y - 0.5), new __WEBPACK_IMPORTED_MODULE_16__game_pow_core_point__["a" /* Point */](1, 1)));
            _this.context.strokeRect(screenTile.point.x, screenTile.point.y, screenTile.extent.x, screenTile.extent.y);
        });
        // Framerate information
        debugStrings.push("MSPF: " + this.world.time.mspf);
        debugStrings.push("FPS:  " + this.scene.fps.toFixed(0));
        // Debug strings
        var fontSize = 6;
        this.context.save();
        this.context.font = "bold " + fontSize + "px GraphicPixel";
        var renderPos = this.worldToScreen(clipRect.point);
        var textX = renderPos.x + 10;
        var textY = renderPos.y + 10;
        var i;
        for (i = 0; i < debugStrings.length; ++i) {
            this.context.fillStyle = 'rgba(0,0,0,0.8)';
            this.context.fillText(debugStrings[i], textX + 1, textY + 1);
            this.context.fillStyle = 'rgba(255,255,255,1)';
            this.context.fillText(debugStrings[i], textX, textY);
            textY += fontSize;
        }
        this.context.restore();
    };
    return WorldComponent;
}(__WEBPACK_IMPORTED_MODULE_10__game_pow2_tile_tile_map_view__["a" /* TileMapView */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('worldCanvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], WorldComponent.prototype, "canvasElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_12__components_party_menu_party_menu_component__["a" /* PartyMenuComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_12__components_party_menu_party_menu_component__["a" /* PartyMenuComponent */])
], WorldComponent.prototype, "partyMenu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], WorldComponent.prototype, "handleKeyboardEvent", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_13__map_world_map_entity__["b" /* WorldMapComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_13__map_world_map_entity__["b" /* WorldMapComponent */])
], WorldComponent.prototype, "map", void 0);
WorldComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'world',
        styles: [__webpack_require__(345)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        template: __webpack_require__(326),
        host: {
            '(window:resize)': '_onResize($event)',
            '(click)': '_onClick($event)',
            '[style.color]': 'styleBackground'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_1__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_11__components_loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_3__services_game_world__["a" /* GameWorld */]])
], WorldComponent);



/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_selectors__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateWorld; });




var CanActivateWorld = (function () {
    function CanActivateWorld(store, router) {
        this.store = store;
        this.router = router;
    }
    CanActivateWorld.prototype.canActivate = function (route, state) {
        var _this = this;
        // TODO: This check is hosed if a reasonable default value is set for the initial state for
        // map. Investigate whether this is sane.
        return this.store.select(__WEBPACK_IMPORTED_MODULE_3__models_selectors__["v" /* getGameMap */]).take(1).map(function (mapName) {
            // Verify that the map name is equal to the route id.
            // This is assuming that it will accomplish two things:
            // 1) If the user has no state, it will fail to activate (e.g. when refreshing the page)
            // 2) If the user is trying to navigate to a world that is not consistent with their app
            //    state, it will fail.
            if (mapName !== route.params['id']) {
                _this.router.navigate(['/']);
                return false;
            }
            return true;
        });
    };
    return CanActivateWorld;
}());
CanActivateWorld = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]])
], CanActivateWorld);



/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BehaviorHost; });



/**
 * A BehaviorHost is a container for groups of components.
 *
 * Basic composite object that has a set of dynamic behaviors added to it through the
 * addition and removal of component objects.  Components may be looked up by type, and
 * may depend on siblings components for parts of their own behavior.
 */
var BehaviorHost = (function (_super) {
    __extends(BehaviorHost, _super);
    function BehaviorHost() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._connectedBehaviors = [];
        return _this;
    }
    BehaviorHost.prototype.destroy = function () {
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (o) {
            o.disconnectBehavior();
        });
        this._connectedBehaviors.length = 0;
    };
    BehaviorHost.prototype.findBehavior = function (type) {
        var values = this._connectedBehaviors;
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o instanceof type) {
                return o;
            }
        }
        return null;
    };
    BehaviorHost.prototype.findBehaviors = function (type) {
        var values = this._connectedBehaviors;
        var results = [];
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o instanceof type) {
                results.push(o);
            }
        }
        return results;
    };
    BehaviorHost.prototype.findBehaviorByName = function (name) {
        var values = this._connectedBehaviors;
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            var o = values[i];
            if (o.name === name) {
                return o;
            }
        }
        return null;
    };
    BehaviorHost.prototype.syncBehaviors = function () {
        var values = this._connectedBehaviors;
        var l = this._connectedBehaviors.length;
        for (var i = 0; i < l; i++) {
            values[i].syncBehavior();
        }
    };
    BehaviorHost.prototype.addBehavior = function (component, silent) {
        if (!component) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* errors */].REQUIRED_ARGUMENT);
        }
        if (__WEBPACK_IMPORTED_MODULE_0_underscore__["where"](this._connectedBehaviors, { id: component.id }).length > 0) {
            throw new Error(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* errors */].ALREADY_EXISTS);
        }
        component.host = this;
        if (component.connectBehavior() === false) {
            delete component.host;
            return false;
        }
        this._connectedBehaviors.push(component);
        if (silent !== true) {
            this.syncBehaviors();
        }
        return true;
    };
    BehaviorHost.prototype.removeBehaviorByType = function (componentType, silent) {
        if (silent === void 0) { silent = false; }
        var component = this.findBehavior(componentType);
        if (!component) {
            return false;
        }
        return this.removeBehavior(component, silent);
    };
    BehaviorHost.prototype.removeBehavior = function (component, silent) {
        if (silent === void 0) { silent = false; }
        var previousCount = this._connectedBehaviors.length;
        this._connectedBehaviors = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](this._connectedBehaviors, function (obj) {
            if (obj.id === component.id) {
                if (obj.disconnectBehavior() === false) {
                    return true;
                }
                obj.host = null;
                return false;
            }
            return true;
        });
        var change = this._connectedBehaviors.length !== previousCount;
        if (change && silent !== true) {
            this.syncBehaviors();
        }
        return change;
    };
    return BehaviorHost;
}(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* Events */]));



/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Behavior; });


/**
 * Simplest ISceneBehavior implementation.  Because Typescript interfaces are compile
 * time constructs, we have to have an actual implementation to instanceof.  For that
 * reason, all SceneBehaviors should derive this class.
 */
var Behavior = (function (_super) {
    __extends(Behavior, _super);
    function Behavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = __WEBPACK_IMPORTED_MODULE_1_underscore__["uniqueId"]('sc');
        return _this;
    }
    Behavior.prototype.connectBehavior = function () {
        return true;
    };
    Behavior.prototype.disconnectBehavior = function () {
        return true;
    };
    Behavior.prototype.syncBehavior = function () {
        return true;
    };
    Behavior.prototype.toString = function () {
        var ctor = this.constructor;
        var ctorString = ctor ? ctor.toString().match(/function (.+?)\(/) : null;
        if (ctor && ctor.name) {
            return ctor.name;
        }
        else if (ctorString && ctorString[1]) {
            return ctorString[1];
        }
        else {
            return this.name;
        }
    };
    return Behavior;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* Events */]));



/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




/**
 * Use jQuery to load an Audio resource.
 */
var AudioResource = (function (_super) {
    __extends(AudioResource, _super);
    function AudioResource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._source = null;
        _this._audio = null;
        _this._volume = 0.8;
        return _this;
    }
    /**
     * Detect support for audio files of varying types.
     *
     * Source: http://diveintohtml5.info/everything.html
     */
    AudioResource.supportedFormats = function () {
        var _this = this;
        var w = window;
        var ac = w.AudioContext || w.webkitAudioContext;
        if (AudioResource._context === null && ac) {
            AudioResource._context = new ac();
        }
        if (AudioResource._types === null) {
            this._types = [];
            var a_1 = document.createElement('audio');
            // The existence of canPlayType indicates support for audio elements.
            if (a_1.canPlayType) {
                try {
                    // Server editions of Windows will throw "Not Implemented" if they
                    // have no access to media extension packs.  Catch this error and
                    // leave the detected types at 0 length.
                    a_1.canPlayType('audio/wav;');
                    __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](this.FORMATS, function (desc) {
                        var types = desc[1];
                        var extension = desc[0];
                        __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](types, function (type) {
                            if (!!a_1.canPlayType(type)) {
                                _this._types.push({
                                    extension: extension,
                                    type: type
                                });
                            }
                        });
                    });
                }
                catch (e) {
                    // Fall through
                }
            }
        }
        return this._types.slice();
    };
    AudioResource.prototype.fetch = function (url) {
        this.url = url || this.url;
        var formats = AudioResource.supportedFormats();
        // If the url specifies a format, sort it to the front of the formats
        // list so it will be tried first.
        var dotIndex = this.url.lastIndexOf('.');
        if (dotIndex !== -1) {
            var urlExtension_1 = this.url.substr(dotIndex + 1);
            formats = formats.sort(function (a, b) {
                if (b.extension === urlExtension_1) {
                    return 1;
                }
                return 0;
            });
        }
        if (formats.length === 0) {
            return Promise.reject(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* errors */].UNSUPPORTED_OPERATION);
        }
        return this._loadAudioElement(formats);
    };
    AudioResource.prototype.play = function (when) {
        if (when === void 0) { when = 0; }
        if (this.data) {
            this.data.volume = this.volume;
            this.data.play();
        }
        return this;
    };
    AudioResource.prototype.pause = function () {
        if (this.data) {
            this.data.pause();
        }
        return this;
    };
    Object.defineProperty(AudioResource.prototype, "volume", {
        get: function () {
            return this._volume;
        },
        set: function (value) {
            this._volume = value;
        },
        enumerable: true,
        configurable: true
    });
    AudioResource.prototype._getUrlForFormat = function (format) {
        var index = this.url.lastIndexOf('.');
        var url = this.url;
        if (index !== -1) {
            url = url.substr(0, index);
        }
        return url + "." + format.extension;
    };
    AudioResource.prototype._loadAudioElement = function (formats) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var sources = formats.length;
            var completed;
            var invalid = [];
            var reference = document.createElement('audio');
            var timer = new __WEBPACK_IMPORTED_MODULE_2__time__["a" /* Time */]()
                .start()
                .addObject({
                tick: function () { return reference.readyState > 3 ? completed() : null; }
            });
            completed = function () {
                _this.data = reference;
                _this._audio = reference;
                timer.stop();
                resolve(_this);
            };
            var incrementFailure = function (path) {
                sources--;
                invalid.push(path);
                if (sources <= 0) {
                    reject('No valid sources at the following URLs\n' + invalid.join('\n   '));
                }
            };
            if (sources === 0) {
                return reject('no supported media types');
            }
            reference.addEventListener('canplaythrough', completed);
            // Try all supported types, and accept the first valid one.
            __WEBPACK_IMPORTED_MODULE_3_underscore__["each"](formats, function (format) {
                var source = document.createElement('source');
                source.addEventListener('error', function () {
                    console.log("source failed: " + source.src);
                    incrementFailure(source.src);
                });
                source.type = format.type.substr(0, format.type.indexOf(';'));
                source.src = _this._getUrlForFormat(format);
                reference.appendChild(source);
            });
            reference.load();
        });
    };
    return AudioResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]));

AudioResource.FORMATS = [
    ['mp3', ['audio/mpeg;']],
    ['m4a', ['audio/x-m4a;']],
    ['aac', ['audio/mp4a;', 'audio/mp4;']],
    ['ogg', ['audio/ogg; codecs="vorbis"']],
    ['wav', ['audio/wav; codecs="1"']]
];
AudioResource._context = null;
AudioResource._types = null;


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resource__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JSONResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * Use jQuery to load a JSON file from a URL.
 */
var JSONResource = (function (_super) {
    __extends(JSONResource, _super);
    function JSONResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONResource.prototype.fetch = function (url) {
        var _this = this;
        this.url = url || this.url;
        return new Promise(function (resolve, reject) {
            var request = __WEBPACK_IMPORTED_MODULE_1_jquery__["getJSON"](_this.url);
            request.done(function (object) {
                _this.data = object;
                resolve(_this);
            });
            request.fail(function (jqxhr, settings, exception) {
                reject(exception);
            });
        });
    };
    return JSONResource;
}(__WEBPACK_IMPORTED_MODULE_0__resource__["a" /* Resource */]));



/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return World; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


var World = (function () {
    function World() {
        this.time = __WEBPACK_IMPORTED_MODULE_0__time__["a" /* Time */].get();
    }
    World.prototype.setService = function (name, value) {
        this.mark(value);
        this[name] = value;
        return value;
    };
    World.prototype.mark = function (object) {
        if (object) {
            object.world = this;
            if (object.onAddToWorld) {
                object.onAddToWorld(this);
            }
        }
    };
    World.prototype.erase = function (object) {
        if (object) {
            if (object.onRemoveFromWorld) {
                object.onRemoveFromWorld(this);
            }
            delete object.world;
        }
    };
    return World;
}());
World = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], World);



/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pow_core_events__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateMachine; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
// State Machine Interfaces
// -------------------------------------------------------------------------


// Implementation
// -------------------------------------------------------------------------
var StateMachine = (function (_super) {
    __extends(StateMachine, _super);
    function StateMachine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultState = null;
        _this.states = [];
        _this._currentState = null;
        _this._previousState = null;
        _this._newState = false;
        _this._pendingState = null;
        _this._asyncProcessing = 0;
        _this._asyncCurrentCallback = null;
        return _this;
    }
    StateMachine.prototype.update = function (data) {
        this._newState = false;
        if (this._currentState === null) {
            this.setCurrentState(this.defaultState);
        }
        if (this._currentState !== null) {
            this._currentState.update(this);
        }
        // Didn't transition, make sure previous === current for next tick.
        if (this._newState === false && this._currentState !== null) {
            this._previousState = this._currentState;
        }
    };
    StateMachine.prototype.addState = function (state) {
        this.states.push(state);
    };
    StateMachine.prototype.addStates = function (states) {
        this.states = __WEBPACK_IMPORTED_MODULE_0_underscore__["unique"](this.states.concat(states));
    };
    StateMachine.prototype.getCurrentState = function () {
        return this._currentState;
    };
    StateMachine.prototype.getCurrentName = function () {
        return this._currentState !== null ? this._currentState.name : null;
    };
    /**
     * Set the current state after the callstack unwinds.
     * @param newState {string|IState} Either a state object or the name of one.
     */
    StateMachine.prototype.setCurrentState = function (newState) {
        var _this = this;
        var state = typeof newState === 'string' ? this.getState(newState) : newState;
        if (!state) {
            console.error("STATE NOT FOUND: " + newState);
            return false;
        }
        if (this._pendingState !== null && this._pendingState.name !== state.name) {
            console.log("Overwriting pending state (" + this._pendingState.name + ") with (" + state.name + ")");
            this._pendingState = state;
        }
        else if (!this._pendingState) {
            this._pendingState = state;
            __WEBPACK_IMPORTED_MODULE_0_underscore__["defer"](function () {
                state = _this._pendingState;
                _this._pendingState = null;
                if (!_this._setCurrentState(state)) {
                    console.error("Failed to set state: " + state.name);
                }
            });
        }
        return true;
    };
    StateMachine.prototype._setCurrentState = function (state) {
        if (!state) {
            return false;
        }
        var oldState = this._currentState;
        // Already in the desired state.
        if (this._currentState && state.name === this._currentState.name) {
            console.warn(this._currentState.name + ": Attempting to set current state to already active state");
            return true;
        }
        this._newState = true;
        this._previousState = this._currentState;
        this._currentState = state;
        // DEBUG:
        if (StateMachine.DEBUG_STATES) {
            console.log("STATE: " + (oldState ? oldState.name : 'NULL') + " -> " + this._currentState.name);
        }
        if (oldState) {
            this.trigger(StateMachine.Events.EXIT, oldState, state);
            oldState.exit(this);
        }
        state.enter(this);
        this.trigger(StateMachine.Events.ENTER, state, oldState);
        return true;
    };
    StateMachine.prototype.getPreviousState = function () {
        return this._previousState;
    };
    StateMachine.prototype.getState = function (name) {
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.states, function (s) {
            return s.name === name;
        });
    };
    /**
     * Notify the game UI of an event, and wait for it to be handled,
     * if there is a handler.
     */
    StateMachine.prototype.notify = function (msg, data, callback) {
        var _this = this;
        if (this._asyncProcessing > 0) {
            throw new Error('TODO: StateMachine cannot handle multiple async UI waits');
        }
        this._asyncCurrentCallback = function () {
            _this._asyncProcessing--;
            if (_this._asyncProcessing <= 0) {
                if (callback) {
                    callback();
                }
                _this._asyncProcessing = 0;
            }
        };
        this._asyncProcessing = 0;
        this.trigger(msg, data);
        if (this._asyncProcessing === 0) {
            if (callback) {
                callback();
            }
        }
    };
    StateMachine.prototype.notifyWait = function () {
        if (!this._asyncCurrentCallback) {
            throw new Error('No valid async callback set!  Perhaps you called this outside of a notify event handler?');
        }
        this._asyncProcessing++;
        return this._asyncCurrentCallback;
    };
    return StateMachine;
}(__WEBPACK_IMPORTED_MODULE_1__pow_core_events__["a" /* Events */]));

StateMachine.DEBUG_STATES = true;
StateMachine.Events = {
    ENTER: 'enter',
    EXIT: 'exit'
};


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* unused harmony export StateTransition */
// Implementation
// -------------------------------------------------------------------------
var State = (function () {
    function State() {
        this.transitions = [];
    }
    State.prototype.enter = function (machine) {
        // nothing
    };
    State.prototype.exit = function (machine) {
        // nothing
    };
    State.prototype.update = function (machine) {
        var l = this.transitions.length;
        for (var i = 0; i < l; i++) {
            var t = this.transitions[i];
            if (!t.evaluate(machine)) {
                continue;
            }
            if (!machine.setCurrentState(t.targetState)) {
                continue;
            }
            return;
        }
    };
    return State;
}());

var StateTransition = (function () {
    function StateTransition() {
    }
    StateTransition.prototype.evaluate = function (machine) {
        return true;
    };
    return StateTransition;
}());



/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_input__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene_object__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_behaviors_collision_behavior__ = __webpack_require__(74);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovableBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/**
 * Add movable behavior to an object.  Supports moving in X/Y directions, one
 * at a time.  Good for 2D tile games.
 */
var MovableBehavior = (function (_super) {
    __extends(MovableBehavior, _super);
    function MovableBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._elapsed = 0;
        _this.path = [];
        _this.tickRateMS = 250;
        _this.velocity = new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](0, 0);
        _this.workPoint = new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](0, 0);
        _this.currentMove = null;
        return _this;
    }
    MovableBehavior.prototype.connectBehavior = function () {
        this.host.point = new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](this.host.point).round();
        this.targetPoint = new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](this.host.point);
        this.host.renderPoint = this.targetPoint.clone();
        return _super.prototype.connectBehavior.call(this);
    };
    MovableBehavior.prototype.syncBehavior = function () {
        this.collider = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_4__app_behaviors_collision_behavior__["a" /* CollisionBehaviorComponent */]);
        return _super.prototype.syncBehavior.call(this);
    };
    /**
     * Called when a new tick of movement begins.
     * @param move The move that is beginning
     */
    MovableBehavior.prototype.beginMove = function (move) {
        // nothing
    };
    /**
     * Called when a complete tick of movement occurs.
     * @param move The move that is now completed.
     */
    MovableBehavior.prototype.completeMove = function (move) {
        // nothing
    };
    MovableBehavior.prototype.collideMove = function (x, y, results) {
        if (results === void 0) { results = []; }
        if (!this.collider) {
            return false;
        }
        return this.collider.collide(x, y, __WEBPACK_IMPORTED_MODULE_3__scene_object__["a" /* SceneObject */], results);
    };
    MovableBehavior.prototype.updateVelocity = function () {
        if (!this.host.scene || !this.host.scene.world || !this.host.scene.world.input) {
            return;
        }
        var worldInput = this.host.scene.world.input;
        // Keyboard input
        this.velocity.x = 0;
        if (worldInput.keyDown(__WEBPACK_IMPORTED_MODULE_2__core_input__["b" /* KeyCode */].LEFT)) {
            this.velocity.x -= 1;
        }
        if (worldInput.keyDown(__WEBPACK_IMPORTED_MODULE_2__core_input__["b" /* KeyCode */].RIGHT)) {
            this.velocity.x += 1;
        }
        this.velocity.y = 0;
        if (worldInput.keyDown(__WEBPACK_IMPORTED_MODULE_2__core_input__["b" /* KeyCode */].UP)) {
            this.velocity.y -= 1;
        }
        if (worldInput.keyDown(__WEBPACK_IMPORTED_MODULE_2__core_input__["b" /* KeyCode */].DOWN)) {
            this.velocity.y += 1;
        }
    };
    MovableBehavior.prototype.interpolateTick = function (elapsed) {
        // Interpolate position based on tickrate and elapsed time
        var factor = this._elapsed / this.tickRateMS;
        this.host.renderPoint.x = this.host.point.x;
        this.host.renderPoint.y = this.host.point.y;
        if (this.velocity.isZero()) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */].interpolate(this.host.renderPoint, this.host.point, this.targetPoint, factor);
        this.host.renderPoint.x = parseFloat(this.host.renderPoint.x.toFixed(2));
        this.host.renderPoint.y = parseFloat(this.host.renderPoint.y.toFixed(2));
    };
    MovableBehavior.prototype.tick = function (elapsed) {
        this._elapsed += elapsed;
        if (this._elapsed < this.tickRateMS) {
            return;
        }
        // Don't subtract elapsed here, but take the modulus so that
        // if for some reason we get a HUGE elapsed, it just does one
        // tick and keeps the remainder toward the next.
        this._elapsed = this._elapsed % this.tickRateMS;
        // Advance the object if it can be advanced.
        //
        // Check that targetPoint != point first, because or else
        // the collision check will see be against the current position.
        if (!this.targetPoint.equal(this.host.point) && !this.collideMove(this.targetPoint.x, this.targetPoint.y)) {
            // Target point is not the current point and there is no collision.
            this.workPoint.set(this.host.point);
            this.host.point.x = this.targetPoint.x;
            this.host.point.y = this.targetPoint.y;
            //
            this.completeMove(this.currentMove);
        }
        // Update Velocity Inputs
        this.updateVelocity();
        this.targetPoint.set(this.host.point);
        var zero = this.velocity.isZero();
        if (zero && this.path.length === 0) {
            return;
        }
        // Zero and have a path, shift the next tile and move there.
        if (zero) {
            var next = this.path.shift();
            this.velocity.set(next.x - this.host.point.x, next.y - this.host.point.y);
        }
        else {
            // Clear path is moving manually.
            this.path.length = 0;
        }
        this.targetPoint.add(this.velocity);
        // Check to see if both axes can advance by simply going to the
        // target point.
        // Determine which axis we can move along
        if (this.velocity.y !== 0 && !this.collideMove(this.host.point.x, this.targetPoint.y)) {
            this.targetPoint.x = this.host.point.x;
        }
        else if (this.velocity.x !== 0 && !this.collideMove(this.targetPoint.x, this.host.point.y)) {
            this.targetPoint.y = this.host.point.y;
        }
        else {
            // Nope, collisions in all directions, just reset the target point
            this.targetPoint.set(this.host.point);
            // If there's a path, it had an invalid move, so clear it.
            this.path.length = 0;
            return;
        }
        this.currentMove = {
            from: new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](this.host.point),
            to: new __WEBPACK_IMPORTED_MODULE_0__pow_core_point__["a" /* Point */](this.targetPoint)
        };
        this.beginMove(this.currentMove);
    };
    return MovableBehavior;
}(__WEBPACK_IMPORTED_MODULE_1__ticked_behavior__["a" /* TickedBehavior */]));



/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_services_game_world__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var DEFAULTS = {
    url: null,
    volume: 1,
    loop: false
};
var SoundBehavior = (function (_super) {
    __extends(SoundBehavior, _super);
    function SoundBehavior(options) {
        if (options === void 0) { options = DEFAULTS; }
        var _this = _super.call(this) || this;
        if (typeof options !== 'undefined') {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, DEFAULTS, options);
        }
        return _this;
    }
    SoundBehavior.prototype.disconnectBehavior = function () {
        if (this.audio && this.audio.data) {
            this.audio.data.pause();
            this.audio.data.currentTime = 0;
        }
        return _super.prototype.disconnectBehavior.call(this);
    };
    SoundBehavior.prototype.connectBehavior = function () {
        var _this = this;
        if (!_super.prototype.connectBehavior.call(this) || !this.url) {
            return false;
        }
        if (this.audio && this.audio.data) {
            this.audio.data.currentTime = 0;
            this.audio.data.volume = this.volume;
            return true;
        }
        var world = __WEBPACK_IMPORTED_MODULE_2__app_services_game_world__["a" /* GameWorld */].get();
        if (!world || !world.loader) {
            return false;
        }
        world.loader.load(this.url).then(function (resources) {
            var res = resources[0];
            _this.audio = res;
            if (_this.audio.data) {
                _this.audio.data.currentTime = 0;
                _this.audio.data.volume = _this.volume;
                _this.audio.data.loop = _this.loop;
                _this.audio.data.play();
                _this.audio.data.addEventListener('timeupdate', function () {
                    if (_this.audio.data.currentTime >= _this.audio.data.duration) {
                        if (!_this.loop) {
                            _this.audio.data.pause();
                            _this.trigger('audio:done', _this);
                        }
                        else {
                            _this.trigger('audio:loop', _this);
                        }
                    }
                });
            }
        });
        return true;
    };
    return SoundBehavior;
}(__WEBPACK_IMPORTED_MODULE_1__scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_object__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene_view_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneView; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/**
 * A view that renders a `Scene` through a given HTMLCanvasElement.
 *
 *  - a camera that can be moved, sized, and scaled
 *  - utilities for converting coordinates between World and Screen.
 *  - render decorators via [SceneViewComponent]
 *  - rendering a set of sprites with [spriteName].json files that describe
 *    the frames and timing.
 */
var SceneView = (function (_super) {
    __extends(SceneView, _super);
    function SceneView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        _this.cameraComponent = null; // TODO: ICameraComponent
        _this.scene = null;
        _this._canvas = null;
        return _this;
    }
    Object.defineProperty(SceneView.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (value) {
            this._canvas = value;
            if (!value) {
                this.context = this.canvas = null;
                return;
            }
            this.context = value.getContext('2d');
            if (!this.context) {
                throw new Error('SceneView: could not retrieve 2d Canvas context');
            }
            var context = this.context;
            context.webkitImageSmoothingEnabled = false;
            context.mozImageSmoothingEnabled = false;
            this.camera = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */](0, 0, 9, 9);
            this.cameraScale = 1.0;
            this.unitSize = SceneView.UNIT;
        },
        enumerable: true,
        configurable: true
    });
    // Scene rendering interfaces
    // -----------------------------------------------------------------------------
    SceneView.prototype.renderToCanvas = function (width, height, renderFunction) {
        var buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        var context = buffer.getContext('2d');
        // Disable smoothing for nearest neighbor scaling.
        context.webkitImageSmoothingEnabled = false;
        context.mozImageSmoothingEnabled = false;
        renderFunction(context);
        return buffer;
    };
    // Render a frame. Subclass this to do your specific rendering.
    SceneView.prototype.renderFrame = function (elapsed) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (o) {
            if (o instanceof __WEBPACK_IMPORTED_MODULE_3__scene_view_component__["a" /* SceneViewComponent */]) {
                o.renderFrame(_this, elapsed);
            }
        });
    };
    // Render post effects
    SceneView.prototype.renderPost = function () {
        // nothing
    };
    // Set the render state for this scene view.
    SceneView.prototype.setRenderState = function () {
        if (!this.context) {
            return;
        }
        this.context.save();
        this.context.scale(this.cameraScale, this.cameraScale);
    };
    // Restore the render state to what it was before a call to setRenderState.
    SceneView.prototype.restoreRenderState = function () {
        if (!this.context) {
            return false;
        }
        this.context.restore();
        return true;
    };
    // Public render invocation.
    SceneView.prototype.render = function () {
        this._render(0);
    };
    // Render the scene
    SceneView.prototype._render = function (elapsed) {
        var _this = this;
        this.processCamera();
        this.setRenderState();
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (o) {
            if (o instanceof __WEBPACK_IMPORTED_MODULE_3__scene_view_component__["a" /* SceneViewComponent */]) {
                o.beforeFrame(_this, elapsed);
            }
        });
        this.renderFrame(elapsed);
        this.renderAnimations();
        this.renderPost();
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this._connectedBehaviors, function (o) {
            if (o instanceof __WEBPACK_IMPORTED_MODULE_3__scene_view_component__["a" /* SceneViewComponent */]) {
                o.afterFrame(_this, elapsed);
            }
        });
        this.restoreRenderState();
    };
    // Scene Camera updates
    // -----------------------------------------------------------------------------
    SceneView.prototype.processCamera = function () {
        if (this.cameraComponent) {
            this.cameraComponent.process(this);
        }
    };
    // Scene rendering utilities
    // -----------------------------------------------------------------------------
    SceneView.prototype.clearRect = function () {
        var renderPos;
        var x = 0;
        var y = 0;
        if (this.camera) {
            renderPos = this.worldToScreen(this.camera.point);
            x = renderPos.x;
            y = renderPos.y;
        }
        return this.context.clearRect(x, y, this.context.canvas.width, this.context.canvas.height);
    };
    SceneView.prototype.worldToScreen = function (value, scale) {
        if (scale === void 0) { scale = 1; }
        if (value instanceof __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */]) {
            var result = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */](value);
            result.point.multiply(this.unitSize * scale);
            result.extent.multiply(this.unitSize * scale);
            return result;
        }
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_4__pow_core_point__["a" /* Point */]) {
            return new __WEBPACK_IMPORTED_MODULE_4__pow_core_point__["a" /* Point */](value).multiply(this.unitSize * scale);
        }
        return value * (this.unitSize * scale);
    };
    SceneView.prototype.screenToWorld = function (value, scale) {
        if (scale === void 0) { scale = 1; }
        if (value instanceof __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */]) {
            var result = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */](value);
            result.point.multiply(1 / (this.unitSize * scale));
            result.extent.multiply(1 / (this.unitSize * scale));
            return result;
        }
        else if (value instanceof __WEBPACK_IMPORTED_MODULE_4__pow_core_point__["a" /* Point */]) {
            return new __WEBPACK_IMPORTED_MODULE_4__pow_core_point__["a" /* Point */](value).multiply(1 / (this.unitSize * scale));
        }
        return value * (1 / (this.unitSize * scale));
    };
    // Fast world to screen conversion, for high-volume usage situations.
    // avoid memory allocations.
    SceneView.prototype.fastWorldToScreenPoint = function (value, to, scale) {
        if (scale === void 0) { scale = 1; }
        to.set(value);
        to.multiply(this.unitSize * scale);
        return to;
    };
    SceneView.prototype.fastWorldToScreenRect = function (value, to, scale) {
        if (scale === void 0) { scale = 1; }
        to.set(value);
        to.point.multiply(this.unitSize * scale);
        to.extent.multiply(this.unitSize * scale);
        return to;
    };
    SceneView.prototype.fastWorldToScreenNumber = function (value, scale) {
        if (scale === void 0) { scale = 1; }
        return value * (this.unitSize * scale);
    };
    // Fast screen to world conversion, for high-volume usage situations.
    // avoid memory allocations.
    SceneView.prototype.fastScreenToWorldPoint = function (value, to, scale) {
        if (scale === void 0) { scale = 1; }
        to.set(value);
        to.multiply(1 / (this.unitSize * scale));
        return to;
    };
    SceneView.prototype.fastScreenToWorldRect = function (value, to, scale) {
        if (scale === void 0) { scale = 1; }
        to.set(value);
        to.point.multiply(1 / (this.unitSize * scale));
        to.extent.multiply(1 / (this.unitSize * scale));
        return to;
    };
    SceneView.prototype.fastScreenToWorldNumber = function (value, scale) {
        if (scale === void 0) { scale = 1; }
        return value * (1 / (this.unitSize * scale));
    };
    // Animations
    // -----------------------------------------------------------------------------
    SceneView.prototype.renderAnimations = function () {
        var len = this.animations.length;
        for (var i = 0; i < len; i++) {
            var animation = this.animations[i];
            animation.done = animation.fn(animation.frame);
            if (this.scene.time >= animation.time) {
                animation.frame += 1;
                animation.time = this.scene.time + animation.rate;
            }
        }
        return this.animations = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](this.animations, function (a) {
            return a.done !== true;
        });
    };
    return SceneView;
}(__WEBPACK_IMPORTED_MODULE_1__scene_object__["a" /* SceneObject */]));

SceneView.UNIT = 16;


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite_behavior__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimatedSpriteBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var AnimatedSpriteBehavior = (function (_super) {
    __extends(AnimatedSpriteBehavior, _super);
    function AnimatedSpriteBehavior(options) {
        if (options === void 0) { options = {
            lengthMS: 500,
            spriteName: null
        }; }
        var _this = _super.call(this) || this;
        _this._elapsed = 0;
        _this._renderFrame = 3;
        _this.lengthMS = 500;
        if (typeof options !== 'undefined') {
            __WEBPACK_IMPORTED_MODULE_0_underscore__["extend"](_this, options);
        }
        return _this;
    }
    AnimatedSpriteBehavior.prototype.connectBehavior = function () {
        this._renderFrame = 0;
        this._elapsed = 0;
        return _super.prototype.connectBehavior.call(this);
    };
    AnimatedSpriteBehavior.prototype.syncBehavior = function () {
        if (!_super.prototype.syncBehavior.call(this)) {
            return false;
        }
        var sprites = this.host.findBehaviors(__WEBPACK_IMPORTED_MODULE_1__sprite_behavior__["a" /* SpriteComponent */]);
        this.spriteComponent = __WEBPACK_IMPORTED_MODULE_0_underscore__["where"](sprites, { name: this.spriteName })[0];
        return !!this.spriteComponent;
    };
    AnimatedSpriteBehavior.prototype.tick = function (elapsed) {
        this._elapsed += elapsed;
        if (this._elapsed >= this.lengthMS) {
            this.trigger('animation:done', this);
            this._elapsed = this._elapsed % this.lengthMS;
        }
        _super.prototype.tick.call(this, elapsed);
    };
    AnimatedSpriteBehavior.prototype.interpolateTick = function (elapsed) {
        if (this.spriteComponent && this.spriteComponent.meta) {
            // Choose frame for interpolated position
            var factor = this._elapsed / this.lengthMS;
            /* tslint:disable */
            this.spriteComponent.frame = (factor * this.spriteComponent.meta.frames) | 0;
            /* tslint:enable */
        }
        _super.prototype.interpolateTick.call(this, elapsed);
    };
    return AnimatedSpriteBehavior;
}(__WEBPACK_IMPORTED_MODULE_2__scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));



/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_object_behavior__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tile_map__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_javascript_astar__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_javascript_astar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_javascript_astar__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMapPathBehavior; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/**
 * A component that can calculate A-star paths.
 */
var TileMapPathBehavior = (function (_super) {
    __extends(TileMapPathBehavior, _super);
    function TileMapPathBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._graph = null; // Astar graph object
        return _this;
    }
    TileMapPathBehavior.prototype.connectBehavior = function () {
        return _super.prototype.connectBehavior.call(this) && !!this.tileMap;
    };
    TileMapPathBehavior.prototype.syncBehavior = function () {
        this.tileMap.off(__WEBPACK_IMPORTED_MODULE_2__tile_map__["a" /* TileMap */].Events.LOADED, this._updateGraph, this);
        this.tileMap.on(__WEBPACK_IMPORTED_MODULE_2__tile_map__["a" /* TileMap */].Events.LOADED, this._updateGraph, this);
        return _super.prototype.syncBehavior.call(this);
    };
    TileMapPathBehavior.prototype.disconnectBehavior = function () {
        this.tileMap.off(__WEBPACK_IMPORTED_MODULE_2__tile_map__["a" /* TileMap */].Events.LOADED, this._updateGraph, this);
        this._graph = null;
        return _super.prototype.disconnectBehavior.call(this);
    };
    TileMapPathBehavior.prototype._updateGraph = function () {
        var nodes = this.buildWeightedGraph();
        this._graph = new __WEBPACK_IMPORTED_MODULE_4_javascript_astar__["Graph"](nodes);
    };
    /**
     * Build a two-dimensional graph of numbers that represent the map
     * to find paths on.  The higher the value at an index, the more
     * difficult it is to traverse.
     *
     * A grid might look like this:
     *
     *     [5,5,1,5]
     *     [1,1,1,5]
     *     [5,5,5,5]
     *
     */
    TileMapPathBehavior.prototype.buildWeightedGraph = function () {
        return [[]];
    };
    /**
     * Calculate the best path from one point to another in the current
     * A* graph.
     */
    TileMapPathBehavior.prototype.calculatePath = function (from, to) {
        if (!this._graph) {
            this._updateGraph();
        }
        if (!this._graph || !this._graph.grid) {
            throw new Error('Invalid AStar graph');
        }
        this._graph.init();
        // Treat out of range errors as non-critical, and just
        // return an empty array.
        if (from.x >= this._graph.grid.length || from.x < 0) {
            return [];
        }
        if (from.y >= this._graph.grid[from.x].length) {
            return [];
        }
        if (to.x >= this._graph.grid.length || to.x < 0) {
            return [];
        }
        if (to.y >= this._graph.grid[to.x].length) {
            return [];
        }
        var start = this._graph.grid[from.x][from.y];
        var end = this._graph.grid[to.x][to.y];
        var result = __WEBPACK_IMPORTED_MODULE_4_javascript_astar__["astar"].search(this._graph, start, end);
        return __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](result, function (graphNode) {
            return new __WEBPACK_IMPORTED_MODULE_3__pow_core_point__["a" /* Point */](graphNode.x, graphNode.y);
        });
    };
    return TileMapPathBehavior;
}(__WEBPACK_IMPORTED_MODULE_1__tile_object_behavior__["a" /* TileObjectBehavior */]));



/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_scene_object_renderer__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileMapRenderer; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var TileMapRenderer = (function (_super) {
    __extends(TileMapRenderer, _super);
    function TileMapRenderer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buffer = null; // A 2d grid of rendered canvas textures.
        _this.bufferMapName = null; // The name of the rendered map.  If the map name changes, the buffer is re-rendered.
        _this.bufferComplete = false; // True if the entire map was rendered with all textures loaded and ready.
        _this._clipRect = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */]();
        _this._renderRect = new __WEBPACK_IMPORTED_MODULE_2__pow_core_rect__["a" /* Rect */]();
        return _this;
    }
    // TODO: only render tiles that are in the clipRect.  This can be expensive at initial
    // load for expansive maps like the Browser Quest tmx.
    TileMapRenderer.prototype.render = function (object, view) {
        var _this = this;
        var row;
        var col;
        var rows;
        var squareUnits = 8;
        var squareSize = squareUnits * view.unitSize;
        if (!object.isLoaded()) {
            return;
        }
        if (object.dirtyLayers) {
            object.dirtyLayers = false;
            this.buffer = null;
            this.bufferComplete = false;
        }
        if (!this.bufferComplete || this.buffer === null ||
            this.bufferMapName === null || this.bufferMapName !== object.map.url) {
            var tileUnitSize = squareSize / view.unitSize;
            // Unit size is 16px, so rows/columns should be 16*16 for 256px each.
            var columns = Math.ceil(object.bounds.extent.x / squareUnits);
            rows = Math.ceil(object.bounds.extent.y / squareUnits);
            this.buffer = new Array(columns);
            for (col = 0; col < columns; col++) {
                this.buffer[col] = new Array(rows);
            }
            this.bufferComplete = true;
            var layers_1 = object.getLayers();
            for (col = 0; col < columns; col++) {
                var _loop_1 = function () {
                    var xOffset = col * tileUnitSize;
                    var xEnd = xOffset + tileUnitSize;
                    var yOffset = row * tileUnitSize;
                    var yEnd = yOffset + tileUnitSize;
                    this_1.buffer[col][row] = view.renderToCanvas(squareSize, squareSize, function (ctx) {
                        var _loop_2 = function (x) {
                            var _loop_3 = function (y) {
                                // Each layer
                                __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](layers_1, function (l) {
                                    if (!l.visible) {
                                        return;
                                    }
                                    var gid = object.getTileGid(l.name, x, y);
                                    var meta = object.getTileMeta(gid);
                                    if (meta) {
                                        var image = meta.image.data;
                                        if (!image || !image.complete) {
                                            _this.bufferComplete = false;
                                            return;
                                        }
                                        var srcX = meta.x;
                                        var srcY = meta.y;
                                        var srcW = meta.width;
                                        var srcH = meta.height;
                                        var dstX = (x - xOffset) * view.unitSize;
                                        var dstY = (y - yOffset) * view.unitSize;
                                        var dstW = view.unitSize;
                                        var dstH = view.unitSize;
                                        ctx.drawImage(image, srcX, srcY, srcW, srcH, dstX, dstY, dstW, dstH);
                                    }
                                });
                            };
                            for (var y = yOffset; y < yEnd; y++) {
                                _loop_3(y);
                            }
                        };
                        for (var x = xOffset; x < xEnd; x++) {
                            _loop_2(x);
                        }
                        // Append chunks to body (DEBUG HACKS)
                        // var dataImage = new Image();
                        // dataImage.src = ctx.canvas.toDataURL();
                        // $('body').append(dataImage);
                    });
                };
                var this_1 = this;
                for (row = 0; row < rows; row++) {
                    _loop_1();
                }
            }
            this.bufferMapName = object.map.url;
        }
        var squareScreen = view.fastWorldToScreenNumber(squareUnits);
        view.fastWorldToScreenRect(view.getCameraClip(), this._clipRect);
        var cols = this.buffer.length;
        rows = this.buffer[0].length;
        // Unit size is 16px, so rows/columns should be 16*16 for 256px each.
        for (col = 0; col < cols; col++) {
            for (row = 0; row < rows; row++) {
                this._renderRect.set(col * squareUnits - 0.5, row * squareUnits - 0.5, squareUnits, squareUnits);
                view.fastWorldToScreenRect(this._renderRect, this._renderRect);
                if (!this._renderRect.intersect(this._clipRect)) {
                    continue;
                }
                // console.log("Tile " + renderRect.toString())
                view.context.drawImage(this.buffer[col][row], 
                // From source
                0, 0, squareSize, squareSize, 
                // Scaled to camera
                this._renderRect.point.x, this._renderRect.point.y, squareScreen, squareScreen);
            }
        }
    };
    return TileMapRenderer;
}(__WEBPACK_IMPORTED_MODULE_1__scene_scene_object_renderer__["a" /* SceneObjectRenderer */]));



/***/ }),
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(13);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(131);

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(173);

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(178);

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(2);

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(203);

/***/ }),
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(415);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(428);

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(439);

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(512);

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(608);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(646);

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(247);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_combineLatest__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mapTo__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_pluck__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_pluck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_pluck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_sample__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_sample___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_operator_sample__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_switchMap__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_take__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_toArray__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_ReplaySubject__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_Observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_Subject__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_Subscription__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_Subscription___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_rxjs_Subscription__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngrx_core_add_operator_select__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngrx_core_add_operator_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__ngrx_core_add_operator_select__);
// RxJS



























/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__);

__WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__["install"]({
    onUpdateReady: function () { return __WEBPACK_IMPORTED_MODULE_0_offline_plugin_runtime__["applyUpdate"](); },
    onUpdated: function () { return location.reload(); },
});


/***/ }),
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(205);

/***/ }),
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_game_game_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_no_content_no_content__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_DECLARATIONS; });



var APP_DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_1__routes_no_content_no_content__["a" /* NoContentComponent */],
    __WEBPACK_IMPORTED_MODULE_0__routes_game_game_component__["a" /* GameComponent */]
];


/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_pow_core_index__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_index__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes_combat_index__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_game_state_game_state_effects__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_effects__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__routes_world__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__behaviors_index__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_combat_combat_effects__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_index__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__models_game_data_game_data_effects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__models_sprites_sprites_effects__ = __webpack_require__(261);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_IMPORTS; });




















var APP_IMPORTS = [
    __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
    __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
    // Components
    __WEBPACK_IMPORTED_MODULE_15__behaviors_index__["a" /* BehaviorsModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_17__components_index__["a" /* AppComponentsModule */].forRoot(),
    // Routes
    __WEBPACK_IMPORTED_MODULE_10__routes_combat_index__["b" /* CombatModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_14__routes_world__["b" /* WorldModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_7__game_pow_core_index__["a" /* PowCoreModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_0__angular_forms__["ReactiveFormsModule"],
    __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: true }),
    __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["c" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_9__models_index__["b" /* rootReducer */]),
    __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["c" /* RouterStoreModule */].connectRouter(),
    // TODO: store/devtools disabled because of poor performance.
    //
    // Because devtools serializes state to JSON, if you have a large amount of data in your stores (~500 objects)
    // the time it takes to serialize and deserialize the object becomes significant. This is crippling to the
    // performance of the app.
    //
    // To re-enable the devtools, [fix this](https://github.com/ngrx/store-devtools/issues/57) and then pass
    // the option to use [Immutable compatible devtools](https://goo.gl/Wym3eT).
    //
    // StoreDevtoolsModule.instrumentStore(),
    __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__models_game_state_game_state_effects__["a" /* GameStateEffects */]),
    __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_16__models_combat_combat_effects__["a" /* CombatEffects */]),
    __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_19__models_sprites_sprites_effects__["a" /* SpritesEffects */]),
    __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_18__models_game_data_game_data_effects__["a" /* GameDataEffects */]),
    __WEBPACK_IMPORTED_MODULE_12__ngrx_effects__["c" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_13__app_effects__["a" /* AppEffects */])
];


/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_providers__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_imports__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_declarations__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });








/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, _store) {
        this.appRef = appRef;
        this._store = _store;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.rootState) {
            return;
        }
        // restore state by dispatch a SET_ROOT_STATE action
        if (store.rootState) {
            this._store.dispatch({
                type: 'SET_ROOT_STATE',
                payload: store.rootState
            });
        }
        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }
        this.appRef.tick();
        Object.keys(store).forEach(function (prop) { return delete store[prop]; });
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        this._store.take(1).subscribe(function (s) { return store.rootState = s; });
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(cmpLocation);
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createInputTransfer"])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        declarations: __WEBPACK_IMPORTED_MODULE_6__app_declarations__["a" /* APP_DECLARATIONS */],
        imports: __WEBPACK_IMPORTED_MODULE_5__app_imports__["a" /* APP_IMPORTS */],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__environment__["b" /* ENV_PROVIDERS */],
            __WEBPACK_IMPORTED_MODULE_4__app_providers__["a" /* APP_PROVIDERS */]
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* Store */]])
], AppModule);



/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_resolver__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_world_index__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_effects__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_combat_index__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_PROVIDERS; });






var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_0__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat(__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* SERVICE_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* MODEL_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_3__routes_world_index__["a" /* WORLD_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_5__routes_combat_index__["a" /* COMBAT_PROVIDERS */], [
    __WEBPACK_IMPORTED_MODULE_4__app_effects__["a" /* AppEffects */]
]);


/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_game_game_resolver__ = __webpack_require__(146);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_0__routes_game_game_resolver__["a" /* GameResolver */]
];


/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes_no_content__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes_game_game_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes_game_game_resolver__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_world_world_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_world_world_guards__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_combat__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routes_combat_combat_guards__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });







var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__routes_game_game_component__["a" /* GameComponent */],
        resolve: {
            gameState: __WEBPACK_IMPORTED_MODULE_2__routes_game_game_resolver__["a" /* GameResolver */]
        }
    },
    {
        path: 'combat/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__routes_combat__["c" /* CombatComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__routes_combat_combat_guards__["a" /* CanActivateCombat */]]
    },
    {
        path: 'world/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__routes_world_world_component__["a" /* WorldComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__routes_world_world_guards__["a" /* CanActivateWorld */]]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__routes_no_content__["a" /* NoContentComponent */] }
];


/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_behaviors_animated_sprite_behavior__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_behaviors_sprite_behavior__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow2_scene_behaviors_sound_behavior__ = __webpack_require__(169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DamageComponent; });




var DamageComponent = (function (_super) {
    __extends(DamageComponent, _super);
    function DamageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.started = false;
        return _this;
    }
    DamageComponent.prototype.syncBehavior = function () {
        var _this = this;
        if (!_super.prototype.syncBehavior.call(this)) {
            return false;
        }
        this.animation = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_1__game_pow2_tile_behaviors_animated_sprite_behavior__["a" /* AnimatedSpriteBehavior */]);
        this.sprite = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_behaviors_sprite_behavior__["a" /* SpriteComponent */]);
        this.sound = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_3__game_pow2_scene_behaviors_sound_behavior__["a" /* SoundBehavior */]);
        var ok = !!(this.animation && this.sprite);
        if (!this.started && ok) {
            this.started = true;
            this.animation.once('animation:done', function () {
                _this.trigger('damage:done', _this);
            });
        }
        return ok;
    };
    return DamageComponent;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_rpg_game__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_combat_combat_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartyInventoryComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */









var PartyInventoryComponent = (function () {
    function PartyInventoryComponent(game, store, combatService, notify) {
        var _this = this;
        this.game = game;
        this.store = store;
        this.combatService = combatService;
        this.notify = notify;
        this.active = false;
        this.party$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["e" /* getGameParty */]);
        /** Stream of all inventory excluding items */
        this.inventory$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["f" /* getGameInventory */])
            .map(function (inventory) {
            return inventory.filter(function (i) {
                return i.type !== 'item';
            });
        });
        /**
         * Emit on this subject to update the current index.
         */
        this.doChangeIndex$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        /**
         * Emit on this subject to equip an item to a slot
         */
        this.doEquip$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        /**
         * Emit on this subject to unequip an item from a slot
         * @type {Subject<PartyInventoryEquipmentEvent>}
         */
        this.doUnequip$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        /**
         * The currently selected player index in the party list. If the index is out of bounds, wrap around
         * by moving to the opposite end of the list. i.e. if the index is greater than the length go back to
         * index 0, and if it's less than 0 go to the last index.
         */
        this.currentIndex$ = this.doChangeIndex$.combineLatest(this.party$, function (index, party) {
            if (index >= party.count()) {
                return 0;
            }
            else if (index < 0) {
                return party.count() - 1;
            }
            return index;
        });
        /** The currently selected player entity with its equipment resolved to items rather than item ids */
        this.currentEntity$ = this.currentIndex$
            .combineLatest(this.party$, function (index, party) {
            return party.get(index);
        })
            .switchMap(function (entity) {
            return _this.store.select(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["c" /* getEntityEquipment */])(entity.eid));
        });
        /** Action generator from equip stream */
        this._equipSubscription = this.doEquip$.withLatestFrom(this.currentEntity$, function (event, entity) {
            if (event.item.usedby && !event.item.usedby.find(function (e) { return e === entity.type; })) {
                return _this.notify.show(entity.name + " cannot equip this item");
            }
            if (entity[event.slot]) {
                return _this.notify.show(entity.name + " already has item in " + event.slot);
            }
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__models_game_state_game_state_actions__["g" /* GameStateEquipItemAction */]({
                entityId: entity.eid,
                slot: event.slot,
                itemId: event.item.eid
            }));
        }).subscribe();
        /** Action generator from unequip stream */
        this._unequipSubscription = this.doUnequip$.withLatestFrom(this.currentEntity$, function (event, entity) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__models_game_state_game_state_actions__["h" /* GameStateUnequipItemAction */]({
                entityId: entity.eid,
                slot: event.slot,
                itemId: event.item.eid
            }));
        }).subscribe();
    }
    PartyInventoryComponent.prototype.ngOnDestroy = function () {
        this._equipSubscription.unsubscribe();
        this._unequipSubscription.unsubscribe();
    };
    PartyInventoryComponent.prototype.nextCharacter = function () {
        var _this = this;
        this.currentIndex$.take(1).subscribe(function (curr) {
            _this.doChangeIndex$.next(curr + 1);
        });
    };
    PartyInventoryComponent.prototype.previousCharacter = function () {
        var _this = this;
        this.currentIndex$.take(1).subscribe(function (curr) {
            _this.doChangeIndex$.next(curr - 1);
        });
    };
    return PartyInventoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PartyInventoryComponent.prototype, "active", void 0);
PartyInventoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'party-inventory',
        template: __webpack_require__(313),
        styles: [__webpack_require__(333)]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_rpg_game__["a" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_8__models_combat_combat_service__["a" /* CombatService */],
        __WEBPACK_IMPORTED_MODULE_2__notification_notification_service__["a" /* NotificationService */]])
], PartyInventoryComponent);



/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCardComponent; });




var PlayerCardComponent = (function () {
    function PlayerCardComponent(game, store) {
        this.game = game;
        this.store = store;
        this._model$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.model$ = this._model$;
    }
    Object.defineProperty(PlayerCardComponent.prototype, "model", {
        set: function (value) {
            this._model$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    return PlayerCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PlayerCardComponent.prototype, "model", null);
PlayerCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'player-card',
        template: __webpack_require__(315),
        styles: [__webpack_require__(335)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
], PlayerCardComponent);



/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_levels__ = __webpack_require__(137);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStatsComponent; });








var PlayerStatsComponent = (function () {
    function PlayerStatsComponent(game, combatService, store) {
        var _this = this;
        this.game = game;
        this.combatService = combatService;
        this.store = store;
        this._showExperience$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.showExperience$ = this._showExperience$;
        this._showLevel$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.showLevel$ = this._showLevel$;
        this._showHP$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.showHP$ = this._showHP$;
        this._model$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.model$ = this._model$;
        /**
         * Resolve any entity equipment IDs to their equipment objects. This gives
         * access to the stats for calculating things like total attack or defense.
         */
        this.entityWithEquipment$ = this.model$.switchMap(function (entity) {
            return entity ? _this.store.select(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["c" /* getEntityEquipment */])(entity.eid)) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].empty();
        });
        this._showCombatStats$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.showCombatStats$ = this._showCombatStats$;
        /**
         * Total attack strength including weapons
         */
        this.attack$ = this.entityWithEquipment$.map(function (equipped) {
            return _this.combatService.getAttack(equipped);
        });
        /**
         * Total defense including armor and accessories
         */
        this.defense$ = this.entityWithEquipment$.map(function (equipped) {
            return _this.combatService.getDefense(equipped);
        });
        /**
         * Total speed
         */
        this.speed$ = this.entityWithEquipment$.map(function (equipped) {
            return _this.combatService.getSpeed(equipped);
        });
        /**
         * Total magic power
         */
        this.magic$ = this.entityWithEquipment$.map(function (equipped) {
            return _this.combatService.getMagic(equipped);
        });
        /**
         * The amount of experience needed to progress to the next level.
         */
        this.nextLevelExp$ = this.model$.map(function (entity) {
            return entity ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["a" /* getXPForLevel */])(entity.level + 1) : 0;
        });
        /**
         * Percentage of experience gathered toward progressing to the next level.
         */
        this.nextLevelPercentage$ = this.model$.map(function (entity) {
            if (!entity) {
                return 0;
            }
            var nextLevelExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["a" /* getXPForLevel */])(entity.level + 1);
            var currentLevelExp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__models_levels__["a" /* getXPForLevel */])(entity.level);
            var width = 0;
            if (entity) {
                width = (entity.exp - currentLevelExp) / (nextLevelExp - currentLevelExp) * 100;
            }
            return Math.round(width);
        });
        /**
         * Percentage of health that this player has remaining (0-100)
         */
        this.healthPercentage$ = this.model$.map(function (entity) {
            return entity ? Math.round(entity.hp / entity.maxhp * 100) : 0;
        });
    }
    Object.defineProperty(PlayerStatsComponent.prototype, "showExperience", {
        /**
         * Hide/show experience stats and progress bar to next level
         */
        set: function (value) {
            this._showExperience$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStatsComponent.prototype, "showLevel", {
        /**
         * Hide/show current level
         */
        set: function (value) {
            this._showLevel$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStatsComponent.prototype, "showHP", {
        /**
         * Hide/show current HP and progress bar indicating percentage health remaining
         * of the total.
         */
        set: function (value) {
            this._showHP$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStatsComponent.prototype, "model", {
        /**
         * Set the source entity to render stats for
         */
        set: function (value) {
            this._model$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlayerStatsComponent.prototype, "showCombatStats", {
        /**
         * Hide/show combat stats attack/defense/speed/magic
         */
        set: function (value) {
            this._showCombatStats$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    return PlayerStatsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PlayerStatsComponent.prototype, "showExperience", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PlayerStatsComponent.prototype, "showLevel", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PlayerStatsComponent.prototype, "showHP", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PlayerStatsComponent.prototype, "model", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], PlayerStatsComponent.prototype, "showCombatStats", null);
PlayerStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'player-stats',
        template: __webpack_require__(316),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* RPGGame */],
        __WEBPACK_IMPORTED_MODULE_6__models_combat_combat_service__["a" /* CombatService */],
        __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["a" /* Store */]])
], PlayerStatsComponent);



/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_notification_notification_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__game_state_game_state_actions__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatEffects; });











var CombatEffects = (function () {
    function CombatEffects(actions$, store, notificationService, combatService) {
        var _this = this;
        this.actions$ = actions$;
        this.store = store;
        this.notificationService = notificationService;
        this.combatService = combatService;
        this.beginCombat$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__combat_actions__["b" /* CombatEncounterAction */].typeId)
            .switchMap(function (action) {
            return _this.combatService.loadEncounter(action.payload);
        })
            .map(function (encounter) {
            return new __WEBPACK_IMPORTED_MODULE_3__combat_actions__["c" /* CombatEncounterReadyAction */](encounter);
        })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_3__combat_actions__["f" /* CombatEncounterErrorAction */](e.toString()));
        });
        /** route update to combat encounter */
        this.navigateToCombatRoute$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__combat_actions__["c" /* CombatEncounterReadyAction */].typeId)
            .debounceTime(100)
            .distinctUntilChanged()
            .map(function (action) {
            var encounter = action.payload;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util__["c" /* assertTrue */])(encounter.id || encounter.zone, 'combat must either be in a zone or have an id');
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* replace */])(['combat', encounter.id || encounter.zone]);
        });
        /**
         * When a combat victory action is dispatched, notify the user about what they've won.
         */
        this.combatVictory$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__combat_actions__["a" /* CombatVictoryAction */].typeId)
            .switchMap(function (action) {
            var data = action.payload;
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (subject) {
                // Gold
                _this.notificationService.show("Found " + data.gold + " gold!", null, 0);
                // Looted items
                if (data.items) {
                    data.items.forEach(function (item) {
                        _this.notificationService.show("Found " + item.name, null, 0);
                    });
                }
                // Experience
                _this.notificationService.show("Gained " + data.exp + " experience!", null, 0);
                // Party Level ups
                data.levels.forEach(function (hero) {
                    _this.notificationService.show(hero.name + " reached level " + hero.level + "!", null, 0);
                });
                // Fin.
                _this.notificationService.show('Enemies Defeated!', function () {
                    subject.next(action);
                    subject.complete();
                });
                // Also, hide the encounter if it was fixed.
                if (data.type === 'fixed') {
                    _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__game_state_game_state_actions__["t" /* GameStateSetKeyDataAction */](data.id, true));
                }
                return function () {
                    // No cleanup
                };
            });
        })
            .map(function (action) {
            return new __WEBPACK_IMPORTED_MODULE_3__combat_actions__["d" /* CombatVictoryCompleteAction */](action.payload);
        });
        /** route update back to map after a combat encounter */
        this.navigateToMapRoute$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__combat_actions__["d" /* CombatVictoryCompleteAction */].typeId)
            .debounceTime(100)
            .switchMap(function () { return _this.store.select(__WEBPACK_IMPORTED_MODULE_9__selectors__["v" /* getGameMap */]); })
            .map(function (map) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__util__["c" /* assertTrue */])(map, 'cannot return to invalid map from combat');
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* replace */])(['world', map]);
        });
    }
    return CombatEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], CombatEffects.prototype, "beginCombat$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], CombatEffects.prototype, "navigateToCombatRoute$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], CombatEffects.prototype, "combatVictory$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], CombatEffects.prototype, "navigateToMapRoute$", void 0);
CombatEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_8__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_5__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_4__combat_service__["a" /* CombatService */]])
], CombatEffects);



/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_data_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_data_actions__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDataEffects; });





var GameDataEffects = (function () {
    function GameDataEffects(actions$, gameDataService) {
        var _this = this;
        this.actions$ = actions$;
        this.gameDataService = gameDataService;
        /**
         * Load game data into the store from a remote spreadsheet
         */
        this.loadSpreadsheetData$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__game_data_actions__["b" /* GameDataFetchAction */].typeId)
            .switchMap(function (action) {
            return _this.gameDataService.loadGameData(action.payload).map(function () { return action.payload; });
        })
            .map(function (url) {
            return new __WEBPACK_IMPORTED_MODULE_3__game_data_actions__["d" /* GameDataFetchSuccessAction */](url);
        })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_3__game_data_actions__["c" /* GameDataFetchFailAction */](e.toString()));
        });
    }
    return GameDataEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameDataEffects.prototype, "loadSpreadsheetData$", void 0);
GameDataEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_2__game_data_service__["a" /* GameDataService */]])
], GameDataEffects);



/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Tabletop) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDataResource; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */


/**
 * Use TableTop to load a published google spreadsheet.
 */
var GameDataResource = (function (_super) {
    __extends(GameDataResource, _super);
    function GameDataResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameDataResource.prototype.fetch = function (url) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Tabletop.init({
                key: url,
                callback: function (data, tabletop) {
                    data = _this.data = _this.transformTypes(data);
                    resolve(_this);
                }
            });
        });
    };
    // TODO: More sophisticated deserializing of types, removing hardcoded keys.
    GameDataResource.prototype.transformTypes = function (data) {
        var results = {};
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](data, function (dataValue, dataKey) {
            var sheetElements = dataValue.elements.slice(0);
            var length = sheetElements.length;
            for (var i = 0; i < length; i++) {
                var entry = sheetElements[i];
                for (var key in entry) {
                    if (!entry.hasOwnProperty(key) || typeof entry[key] !== 'string') {
                        continue;
                    }
                    var value = entry[key];
                    // number values
                    if (value.match(GameDataResource.NUMBER_MATCHER)) {
                        entry[key] = parseInt(value, 10);
                    }
                    else if (key === 'benefit') {
                        switch (value.toLowerCase()) {
                            case 'true':
                            case 'yes':
                            case '1':
                                entry[key] = true;
                                break;
                            case 'false':
                            case 'no':
                            case '0':
                            case null:
                                entry[key] = false;
                                break;
                            default:
                                entry[key] = Boolean(value);
                        }
                    }
                    else if (key === 'usedby' || key === 'groups' || key === 'message' || key === 'zones' || key === 'enemies') {
                        if (/^\s*$/.test(value)) {
                            entry[key] = null;
                        }
                        else {
                            entry[key] = value.split('|');
                        }
                    }
                }
            }
            results[dataKey.toLowerCase()] = sheetElements;
        });
        return results;
    };
    return GameDataResource;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow_core_resource__["a" /* Resource */]));

// TODO: Do we need to match - and floating point?
GameDataResource.NUMBER_MATCHER = /^-?\d+$/;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(329)))

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_state_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_notification_notification_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStateEffects; });






var GameStateEffects = (function () {
    function GameStateEffects(actions$, notify, gameStateService) {
        var _this = this;
        this.actions$ = actions$;
        this.notify = notify;
        this.gameStateService = gameStateService;
        /**
         * When a load action is dispatched, async load the state and then dispatch
         * a Success action.
         */
        this.initLoadedGame$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["i" /* GameStateLoadAction */].typeId)
            .switchMap(function (action) { return _this.gameStateService.load(); })
            .map(function (state) { return new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["j" /* GameStateLoadSuccessAction */](state); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["k" /* GameStateLoadFailAction */](e.toString()));
        });
        /**
         * When a save action is dispatched, serialize the app state to local storage.
         */
        this.saveGameState$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["o" /* GameStateSaveAction */].typeId)
            .switchMap(function (state) { return _this.gameStateService.save(); })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["p" /* GameStateSaveSuccessAction */](); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["q" /* GameStateSaveFailAction */](e.toString()));
        });
        /** When the game has been saved, notify the user. */
        this.saveGameSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["p" /* GameStateSaveSuccessAction */].typeId)
            .do(function () {
            _this.notify.show('Game state saved!  Nice.');
        });
        /**
         * When a delete action is dispatched, remove the saved state in localstorage.
         */
        this.clearGameState$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["l" /* GameStateDeleteAction */].typeId)
            .switchMap(function (state) { return _this.gameStateService.resetGame(); })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["m" /* GameStateDeleteSuccessAction */](); })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["n" /* GameStateDeleteFailAction */](e.toString()));
        });
        /** When game data is deleted, notify the user. */
        this.clearGameSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["m" /* GameStateDeleteSuccessAction */].typeId)
            .do(function () {
            _this.notify.show('Game data deleted.  Next time you refresh you will begin a new game.');
        });
        /**
         * After a successful game create/load, travel to the initial location
         */
        this.afterLoadTravelToCurrentLocation$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["e" /* GameStateNewSuccessAction */].typeId, __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["j" /* GameStateLoadSuccessAction */].typeId)
            .debounceTime(10)
            .map(function (action) {
            var gameState;
            switch (action.type) {
                case __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["e" /* GameStateNewSuccessAction */].typeId:
                    gameState = action.payload;
                    break;
                case __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["j" /* GameStateLoadSuccessAction */].typeId:
                    gameState = action.payload.gameState;
                    break;
                default:
                    return;
            }
            return new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["a" /* GameStateTravelAction */](gameState);
        });
        this.travel$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__game_state_actions__["a" /* GameStateTravelAction */].typeId)
            .switchMap(function (action) {
            return _this.gameStateService.loadMap(action.payload.location)
                .map(function () { return action.payload.location; });
        })
            .debounceTime(10)
            .map(function (map) {
            return new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["b" /* GameStateTravelSuccessAction */](map);
        })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__game_state_actions__["c" /* GameStateTravelFailAction */](e.toString()));
        });
    }
    return GameStateEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "initLoadedGame$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "saveGameState$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "saveGameSuccess$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "clearGameState$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])({ dispatch: false }),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "clearGameSuccess$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "afterLoadTravelToCurrentLocation$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], GameStateEffects.prototype, "travel$", void 0);
GameStateEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_5__components_notification_notification_service__["a" /* NotificationService */],
        __WEBPACK_IMPORTED_MODULE_4__game_state_service__["a" /* GameStateService */]])
], GameStateEffects);



/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rpgLogger; });


/**
 * Wrapper class that will serialize the state tree for viewing, but not until you
 * click on the value in chrome console logs. This is much faster with large state trees
 * than serializing when the entries are printed to the console.
 */
var DeferredValue = (function () {
    function DeferredValue(value) {
        // If it's immutable, toJS it once, and cache the value
        if (!__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"].isMap(value) || __WEBPACK_IMPORTED_MODULE_0_immutable__["List"].isList(value)) {
            var cached_1;
            this._lazy = function () {
                return cached_1 || (cached_1 = value.toJS());
            };
        }
        else {
            this._lazy = function () { return value; };
        }
    }
    Object.defineProperty(DeferredValue.prototype, "value", {
        get: function () {
            return this._lazy();
        },
        enumerable: true,
        configurable: true
    });
    return DeferredValue;
}());
/**
 * Logger middleware that plays nice with the large RPG data state tree.
 */
var rpgLogger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ngrx_store_logger__["storeLogger"])({
    collapsed: true,
    stateTransformer: function (state) {
        // This is called for actions and for meta entries with timing data. Ignore those.
        if (state.action && state.nextState) {
            return state;
        }
        // Immutable objects are not very easy to navigate in the console, so we lazily convert
        // them toJS for inspection. This makes sure the logger doesn't bog down the app with
        // large state trees.
        var result = {};
        Object.keys(state).forEach(function (k) {
            result[k] = new DeferredValue(state[k]);
        });
        return result;
    }
});


/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pointFactory; });
/* unused harmony export entityFactory */

/** Create a {@see IPoint} record with x and y number values */
var pointFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* makeRecordFactory */])({
    x: 0,
    y: 0
});
/** Create an Entity with a given partial set of properties to override defaults */
var entityFactory = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* makeRecordFactory */])({
    eid: 'improperly-initialized-entity-' + new Date().getTime(),
    type: 'npc',
    name: 'unknown npc',
    icon: 'improperly-initialized-entity.png',
    level: 0,
    exp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    magic: 0,
    baseattack: 0,
    basespeed: 0,
    basemagic: 0,
    basedefense: 0,
    hp: 0,
    mp: 0,
    maxhp: 0,
    maxmp: 0,
    weapon: null,
    armor: null,
    helm: null,
    shield: null,
    boots: null,
    accessory: null,
});


/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprites_actions__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sprites_service__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpritesEffects; });





var SpritesEffects = (function () {
    function SpritesEffects(actions$, spritesService) {
        var _this = this;
        this.actions$ = actions$;
        this.spritesService = spritesService;
        this.loadSprites$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__sprites_actions__["d" /* SpritesLoadAction */].typeId)
            .switchMap(function (action) {
            return _this.spritesService.loadSprites(action.payload).map(function () { return action.payload; });
        })
            .map(function (url) {
            return new __WEBPACK_IMPORTED_MODULE_3__sprites_actions__["b" /* SpritesLoadSuccessAction */](url);
        })
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_3__sprites_actions__["c" /* SpritesLoadFailAction */](e.toString()));
        });
    }
    return SpritesEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Effect */])(),
    __metadata("design:type", Object)
], SpritesEffects.prototype, "loadSprites$", void 0);
SpritesEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Actions */],
        __WEBPACK_IMPORTED_MODULE_4__sprites_service__["a" /* SpritesService */]])
], SpritesEffects);



/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_action_behavior__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__states_combat_escape_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_combat_end_turn_state__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combat_component__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatRunBehavior; });






var CombatRunBehavior = (function (_super) {
    __extends(CombatRunBehavior, _super);
    function CombatRunBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "run";
        return _this;
    }
    CombatRunBehavior.prototype.canTarget = function () {
        return false;
    };
    CombatRunBehavior.prototype.act = function (then) {
        var _this = this;
        if (!this.isCurrentTurn()) {
            return false;
        }
        var success = this._rollEscape();
        var data = {
            success: success,
            player: this.combat.machine.current
        };
        this.combat.machine.notify("combat:run", data, function () {
            if (success) {
                _this.combat.machine.setCurrentState(__WEBPACK_IMPORTED_MODULE_2__states_combat_escape_state__["a" /* CombatEscapeStateComponent */].NAME);
            }
            else {
                _this.combat.machine.setCurrentState(__WEBPACK_IMPORTED_MODULE_3__states_combat_end_turn_state__["a" /* CombatEndTurnStateComponent */].NAME);
            }
            then && then(_this);
        });
        return true;
    };
    /**
     * Determine if a run action results in a successful escape from
     * combat.
     *
     * TODO: This should really consider character attributes.
     *
     * @returns {boolean} If the escape will succeed.
     * @private
     */
    CombatRunBehavior.prototype._rollEscape = function () {
        var roll = __WEBPACK_IMPORTED_MODULE_0_underscore__["random"](0, 200);
        var chance = 100;
        if (roll === 200) {
            return false;
        }
        if (roll === 0) {
            return true;
        }
        return roll <= chance;
    };
    return CombatRunBehavior;
}(__WEBPACK_IMPORTED_MODULE_1__combat_action_behavior__["a" /* CombatActionBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__combat_component__["a" /* CombatComponent */])
], CombatRunBehavior.prototype, "combat", void 0);
CombatRunBehavior = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'combat-run-behavior',
        template: '<ng-content></ng-content>'
    })
], CombatRunBehavior);



/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_core_state_machine__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__behaviors_combat_action_behavior__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_game_world__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ChooseActionStateMachine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseActionType; });
/* unused harmony export ChooseMagicSpell */
/* unused harmony export ChooseUsableItem */
/* unused harmony export ChooseActionTarget */
/* unused harmony export ChooseActionSubmit */






/**
 * A state machine to represent the various UI states involved in
 * choosing a combat action.
 *
 * ```
 *
 *     +------+   +--------+   +--------+
 *     | type |-->| target |-->| submit |
 *     +------+   +--------+   +--------+
 *
 * ```
 *
 * When the user properly selects an action type (Attack, Magic, Item)
 * and a target to apply the action to (Hero, All Enemies, etc.) the
 * submit state will apply the selection to the state machine at which
 * point the implementation may do whatever it wants.
 */
var ChooseActionStateMachine = (function (_super) {
    __extends(ChooseActionStateMachine, _super);
    function ChooseActionStateMachine(parent, scene, data, submit) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.scene = scene;
        _this.data = data;
        _this.current = null;
        _this.target = null;
        _this.player = null;
        _this.action = null;
        _this.spell = null;
        _this.item = null;
        _this.world = __WEBPACK_IMPORTED_MODULE_4__services_game_world__["a" /* GameWorld */].get();
        _this.states = [
            new ChooseActionTarget(),
            new ChooseActionType(),
            new ChooseUsableItem(),
            new ChooseMagicSpell(),
            new ChooseActionSubmit(submit)
        ];
        return _this;
    }
    return ChooseActionStateMachine;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_core_state_machine__["a" /* StateMachine */]));

/**
 * Choose a specific action type to apply in combat.
 */
var ChooseActionType = (function (_super) {
    __extends(ChooseActionType, _super);
    function ChooseActionType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = ChooseActionType.NAME;
        return _this;
    }
    ChooseActionType.prototype.enter = function (machine) {
        var _this = this;
        var clickSelect = function (mouse, hits) {
            machine.scene.off('click', clickSelect);
            machine.target = hits[0];
            machine.parent.items[0].select();
        };
        if (!machine.current) {
            throw new Error('Requires Current Player');
        }
        var p = machine.current;
        machine.player = p.render;
        if (!machine.player) {
            throw new Error('Requires player render component for combat animations.');
        }
        var pointerOffset = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](-1, -0.25);
        machine.action = machine.target = machine.spell = machine.item = null;
        // Enable menu selection of action type.
        var selectAction = function (action) {
            machine.action = action;
            machine.scene.off('click', clickSelect);
            // if (machine.action instanceof CombatMagicBehavior) {
            //   if (machine.current.getSpells().length === 1) {
            //     machine.spell = machine.current.getSpells()[0];
            //     machine.setCurrentState(ChooseActionTarget.NAME);
            //   }
            //   else {
            //     machine.setCurrentState(ChooseMagicSpell.NAME);
            //   }
            // }
            // else if (machine.action instanceof CombatItemBehavior) {
            //   machine.setCurrentState(ChooseUsableItem.NAME);
            // }
            // else
            if (machine.action.canTarget()) {
                machine.setCurrentState(ChooseActionTarget.NAME);
            }
            else {
                machine.setCurrentState(ChooseActionSubmit.NAME);
            }
        };
        var items = __WEBPACK_IMPORTED_MODULE_0_underscore__["filter"](p.findBehaviors(__WEBPACK_IMPORTED_MODULE_3__behaviors_combat_action_behavior__["a" /* CombatActionBehavior */]), function (c) { return c.canBeUsedBy(p); });
        machine.parent.items = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](items, function (a) {
            return {
                select: selectAction.bind(_this, a),
                label: a.getActionName()
            };
        });
        // No pointer target
        if (!p) {
            machine.parent.hidePointer();
            return;
        }
        machine.player.moveForward(function () {
            machine.parent.setPointerTarget(p, 'right', pointerOffset);
            machine.parent.showPointer();
            machine.scene.on('click', clickSelect);
        });
    };
    ChooseActionType.prototype.exit = function (machine) {
        machine.parent.items = [];
    };
    return ChooseActionType;
}(__WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__["a" /* State */]));

ChooseActionType.NAME = 'choose-type';
/**
 * Choose a magic spell to cast in combat.
 */
var ChooseMagicSpell = (function (_super) {
    __extends(ChooseMagicSpell, _super);
    function ChooseMagicSpell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = ChooseMagicSpell.NAME;
        return _this;
    }
    ChooseMagicSpell.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.current) {
            throw new Error('Requires Current Player');
        }
        var clickSelect = function (mouse, hits) {
            machine.scene.off('click', clickSelect);
            machine.target = hits[0];
            machine.parent.items[0].select();
        };
        var selectSpell = function (spell) {
            machine.scene.off('click', clickSelect);
            machine.spell = spell;
            if (spell.benefit) {
                machine.target = machine.current;
            }
            switch (spell.type) {
                case 'target':
                    machine.setCurrentState(ChooseActionTarget.NAME);
                    break;
                default:
                    console.info("Unknown spell type, submitting without target: " + spell.type);
                    machine.setCurrentState(ChooseActionSubmit.NAME);
            }
        };
        var spells = machine.current.getSpells();
        machine.parent.items = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](spells, function (a) {
            return {
                select: selectSpell.bind(_this, a),
                label: a.name
            };
        });
        machine.scene.on('click', clickSelect);
    };
    ChooseMagicSpell.prototype.exit = function (machine) {
        machine.parent.items = [];
    };
    return ChooseMagicSpell;
}(__WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__["a" /* State */]));

ChooseMagicSpell.NAME = 'choose-spell';
/**
 * Choose an item to use in combat.
 */
var ChooseUsableItem = (function (_super) {
    __extends(ChooseUsableItem, _super);
    function ChooseUsableItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = ChooseUsableItem.NAME;
        return _this;
    }
    ChooseUsableItem.prototype.enter = function (machine) {
        if (!machine.current) {
            throw new Error('Requires Current Player');
        }
        var selectItem = function (item) {
            machine.item = item;
            machine.target = machine.current;
            machine.setCurrentState(ChooseActionTarget.NAME);
        };
        console.warn('todo: combat items');
        // var items: any = machine.current.world.model.inventory;
        // machine.parent.items = _.map(items, (a: Item) => {
        //   return <any>{
        //     select: selectItem.bind(this, a),
        //     label: a.name
        //   };
        // });
    };
    ChooseUsableItem.prototype.exit = function (machine) {
        machine.parent.items = [];
    };
    return ChooseUsableItem;
}(__WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__["a" /* State */]));

ChooseUsableItem.NAME = 'choose-item';
/**
 * Choose a target to apply a combat action to
 */
var ChooseActionTarget = (function (_super) {
    __extends(ChooseActionTarget, _super);
    function ChooseActionTarget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = ChooseActionTarget.NAME;
        return _this;
    }
    ChooseActionTarget.prototype.enter = function (machine) {
        var _this = this;
        var enemies = machine.data.enemies;
        var p = machine.target || enemies[0];
        machine.parent.addPointerClass(machine.action.getActionName());
        if (!p) {
            machine.parent.hidePointer();
            return;
        }
        var clickTarget;
        var pointerOffset = new __WEBPACK_IMPORTED_MODULE_1__game_pow_core_point__["a" /* Point */](0.5, -0.25);
        var selectTarget = function (target) {
            if (machine.target && machine.target._uid === target._uid) {
                machine.target = target;
                machine.scene.off('click', clickTarget);
                machine.setCurrentState(ChooseActionSubmit.NAME);
                return;
            }
            machine.target = target;
            machine.parent.setPointerTarget(target, 'left', pointerOffset);
        };
        clickTarget = function (mouse, hits) {
            selectTarget(hits[0]);
        };
        var beneficial = !!(machine && ((machine.spell && machine.spell.benefit) || machine.item));
        var targets = beneficial ? machine.data.players : machine.data.enemies;
        machine.parent.items = __WEBPACK_IMPORTED_MODULE_0_underscore__["map"](targets, function (a) {
            return {
                select: selectTarget.bind(_this, a),
                label: a.model.name
            };
        });
        machine.parent.setPointerTarget(p, 'left', pointerOffset);
        machine.scene.on('click', clickTarget);
    };
    ChooseActionTarget.prototype.exit = function (machine) {
        machine.parent.items = [];
    };
    return ChooseActionTarget;
}(__WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__["a" /* State */]));

ChooseActionTarget.NAME = 'choose-target';
/**
 * Submit a selected action type and action target to the submit handler
 * implementation.
 */
var ChooseActionSubmit = (function (_super) {
    __extends(ChooseActionSubmit, _super);
    function ChooseActionSubmit(submit) {
        var _this = _super.call(this) || this;
        _this.submit = submit;
        _this.name = ChooseActionSubmit.NAME;
        return _this;
    }
    ChooseActionSubmit.prototype.enter = function (machine) {
        var _this = this;
        if (!machine.current || !machine.action || !this.submit) {
            throw new Error('Invalid state');
        }
        if (machine.action.canTarget() && !machine.target) {
            throw new Error('Invalid target');
        }
        machine.player.moveBackward(function () {
            machine.parent.hidePointer();
            machine.action.from = machine.current;
            machine.action.to = machine.target;
            machine.action.spell = machine.spell;
            machine.action.item = machine.item;
            machine.action.select();
            machine.parent.removePointerClass(machine.action.getActionName());
            _this.submit(machine.action);
        });
    };
    return ChooseActionSubmit;
}(__WEBPACK_IMPORTED_MODULE_5__game_pow2_core_state__["a" /* State */]));

ChooseActionSubmit.NAME = 'choose-submit';


/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_camera_behavior__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatCameraBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */




var CombatCameraBehaviorComponent = (function (_super) {
    __extends(CombatCameraBehaviorComponent, _super);
    function CombatCameraBehaviorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CombatCameraBehaviorComponent.prototype.connectBehavior = function () {
        return _super.prototype.connectBehavior.call(this) && this.host instanceof __WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__["a" /* GameTileMap */];
    };
    CombatCameraBehaviorComponent.prototype.process = function (view) {
        if (!this.host) {
            _super.prototype.process.call(this, view);
            return;
        }
        var w = view.context.canvas.width;
        var screenRect = new __WEBPACK_IMPORTED_MODULE_2__game_pow_core_rect__["a" /* Rect */](0, 0, view.context.canvas.width, view.context.canvas.height);
        view.cameraScale = w > 1024 ? 6 : (w > 768 ? 4 : (w > 480 ? 3 : 2));
        view.camera = view.screenToWorld(screenRect, view.cameraScale);
        view.camera.point.x = (this.host.bounds.extent.x / 2) - (view.camera.extent.x / 2);
    };
    return CombatCameraBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_camera_behavior__["a" /* CameraBehavior */]));
CombatCameraBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'combat-camera-behavior',
        template: "<ng-content></ng-content>"
    })
], CombatCameraBehaviorComponent);



/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loading_loading_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow_core_resource_manager__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatHUDComponent; });






var CombatHUDComponent = (function () {
    function CombatHUDComponent(store, loadingService, loader) {
        this.store = store;
        this.loadingService = loadingService;
        this.loader = loader;
        /** Observable<Entity[]> of player-card members */
        this.party$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__models_selectors__["i" /* getCombatEncounterParty */]);
    }
    CombatHUDComponent.prototype.getMemberClass = function (member, focused) {
        return {
            focused: focused && focused.model && member && member.model && member.model.name === focused.model.name
        };
    };
    return CombatHUDComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_scene__["a" /* Scene */])
], CombatHUDComponent.prototype, "scene", void 0);
CombatHUDComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'combat-hud',
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(338)],
        template: __webpack_require__(317)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */],
        __WEBPACK_IMPORTED_MODULE_4__components_loading_loading_service__["a" /* LoadingService */],
        __WEBPACK_IMPORTED_MODULE_5__game_pow_core_resource_manager__["a" /* ResourceManager */]])
], CombatHUDComponent);



/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combat_begin_turn_state__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combat_choose_action_state__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__combat_defeat_state__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combat_end_turn_state__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__combat_escape_state__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__combat_start_state__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__combat_victory_state__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__combat_machine__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__combat_base_state__ = __webpack_require__(27);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMBAT_STATE_COMPONENTS; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

















var COMBAT_STATE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_7__combat_machine__["a" /* CombatStateMachineComponent */],
    __WEBPACK_IMPORTED_MODULE_0__combat_begin_turn_state__["a" /* CombatBeginTurnStateComponent */],
    __WEBPACK_IMPORTED_MODULE_1__combat_choose_action_state__["a" /* CombatChooseActionStateComponent */],
    __WEBPACK_IMPORTED_MODULE_2__combat_defeat_state__["a" /* CombatDefeatStateComponent */],
    __WEBPACK_IMPORTED_MODULE_3__combat_end_turn_state__["a" /* CombatEndTurnStateComponent */],
    __WEBPACK_IMPORTED_MODULE_4__combat_escape_state__["a" /* CombatEscapeStateComponent */],
    __WEBPACK_IMPORTED_MODULE_5__combat_start_state__["a" /* CombatStartStateComponent */],
    __WEBPACK_IMPORTED_MODULE_6__combat_victory_state__["a" /* CombatVictoryStateComponent */]
];


/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content__ = __webpack_require__(147);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content__["a"]; });



/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scene_game_entity_object__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_selectors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_game_data_game_data_model__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutable__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_combat_combat_actions__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__player_behavior__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombatEncounterBehaviorComponent; });












/**
 * A behavior that decrements the party battleCounter each time a move
 * description is given to the `completeMove` method.
 *
 * When the party battleCounter reaches zero, a random encounter will
 * be started in the current combat zone. Combat zones are defined in
 * map files. See `wilderness.tmx` for an example.
 */
var CombatEncounterBehaviorComponent = (function (_super) {
    __extends(CombatEncounterBehaviorComponent, _super);
    function CombatEncounterBehaviorComponent(store) {
        var _this = _super.call(this) || this;
        _this.store = store;
        _this.battleCounter$ = _this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["t" /* getGameBattleCounter */]);
        return _this;
    }
    CombatEncounterBehaviorComponent.prototype.completeMove = function (move) {
        var _this = this;
        if (!this.tileMap) {
            return;
        }
        var map = this.tileMap.map;
        if (!map || !map.properties || !map.properties.combat) {
            return;
        }
        var terrain = this.tileMap.getTerrain('Terrain', move.to.x, move.to.y);
        var isDangerous = terrain && terrain.isDangerous;
        var dangerValue = isDangerous ? 10 : 6;
        this.battleCounter$.take(1).subscribe(function (currentCounter) {
            var newCounter = currentCounter - dangerValue;
            if (newCounter <= 0) {
                _this.triggerCombat(move);
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["s" /* GameStateSetBattleCounterAction */](newCounter));
            }
        });
    };
    CombatEncounterBehaviorComponent.prototype.rollBattleCounter = function () {
        var max = 255;
        var min = 64;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    CombatEncounterBehaviorComponent.prototype.triggerCombat = function (move) {
        var _this = this;
        var at = move.to;
        var zone = this.tileMap.getCombatZones(at);
        if (!zone) {
            throw new Error('missing combat zone at point: ' + at);
        }
        // Set a new battle counter value
        var newCounter = this.rollBattleCounter();
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__models_game_state_game_state_actions__["s" /* GameStateSetBattleCounterAction */](newCounter));
        // Stop the moving entity until it has defeated the combat encounter.
        var mover = this.player.findBehavior(__WEBPACK_IMPORTED_MODULE_11__player_behavior__["a" /* PlayerBehaviorComponent */]);
        if (mover) {
            mover.velocity.zero();
        }
        // Start combat
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["e" /* getGameParty */])
            .withLatestFrom(this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["u" /* getGameDataRandomEncounters */]), this.store.select(__WEBPACK_IMPORTED_MODULE_4__models_selectors__["q" /* getGameDataEnemies */]), function (party, encounters, enemies) {
            var viableEncounters = encounters.filter(function (enc) {
                return enc.zones.indexOf(zone.map) !== -1 || enc.zones.indexOf(zone.target) !== -1;
            });
            if (viableEncounters.count() === 0) {
                throw new Error('no valid encounters for this zone');
            }
            var max = viableEncounters.count() - 1;
            var min = 0;
            var encounter = viableEncounters.get(Math.floor(Math.random() * (max - min + 1)) + min);
            var toCombatant = function (id) {
                var itemTemplate = enemies.find(function (e) { return e.id === id; });
                return Object.assign({}, itemTemplate, {
                    eid: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__models_game_data_game_data_model__["c" /* entityId */])(itemTemplate.id),
                    maxhp: itemTemplate.hp,
                    maxmp: itemTemplate.mp
                });
            };
            var payload = {
                type: 'random',
                id: encounter.id,
                enemies: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_immutable__["List"])(encounter.enemies.map(toCombatant)),
                zone: zone.target || zone.map,
                message: encounter.message,
                party: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_immutable__["List"])(party)
            };
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__models_combat_combat_actions__["b" /* CombatEncounterAction */](payload));
        })
            .take(1)
            .subscribe();
    };
    return CombatEncounterBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_scene_object_behavior__["a" /* SceneObjectBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__game_pow2_scene_scene__["a" /* Scene */])
], CombatEncounterBehaviorComponent.prototype, "scene", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__scene_game_tile_map__["a" /* GameTileMap */])
], CombatEncounterBehaviorComponent.prototype, "tileMap", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__scene_game_entity_object__["a" /* GameEntityObject */])
], CombatEncounterBehaviorComponent.prototype, "player", void 0);
CombatEncounterBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'combat-encounter-behavior',
        template: "\n    <ng-content></ng-content>"
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* Store */]])
], CombatEncounterBehaviorComponent);



/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_pow2_scene_scene__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapFeatureInputBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */






var MapFeatureInputBehaviorComponent = (function (_super) {
    __extends(MapFeatureInputBehaviorComponent, _super);
    function MapFeatureInputBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hitBox = new __WEBPACK_IMPORTED_MODULE_3__game_pow_core_rect__["a" /* Rect */](0, 0, 1, 1);
        _this.hits = [];
        _this.mouse = null;
        return _this;
    }
    MapFeatureInputBehaviorComponent.prototype.syncBehavior = function () {
        if (!_super.prototype.syncBehavior.call(this) || !this.host.scene || !this.host.scene.world || !this.host.scene.world.input) {
            return false;
        }
        this.mouse = this.host.scene.world.input.getMouseHook('world');
        return !!this.mouse;
    };
    MapFeatureInputBehaviorComponent.prototype.tick = function (elapsed) {
        // Calculate hits in Scene for machine usage.
        if (!this.host.scene || !this.mouse) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this.hits, function (tile) {
            tile.scale = 1;
        });
        // Quick array clear
        this.hits.length = 0;
        this.hitBox.point.set(this.mouse.world);
        this.host.scene.db.queryRect(this.hitBox, __WEBPACK_IMPORTED_MODULE_1__scene_game_feature_object__["a" /* GameFeatureObject */], this.hits);
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this.hits, function (obj) {
            obj.scale = 1.25;
        });
        _super.prototype.tick.call(this, elapsed);
    };
    return MapFeatureInputBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__game_pow2_scene_scene__["a" /* Scene */])
], MapFeatureInputBehaviorComponent.prototype, "scene", void 0);
MapFeatureInputBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'map-feature-input-behavior',
        template: "<ng-content></ng-content>"
    })
], MapFeatureInputBehaviorComponent);



/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_camera_behavior__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerCameraBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



var PlayerCameraBehaviorComponent = (function (_super) {
    __extends(PlayerCameraBehaviorComponent, _super);
    function PlayerCameraBehaviorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerCameraBehaviorComponent.prototype.process = function (view) {
        var w = view.context.canvas.width;
        view.camera.point.set(this.host.point);
        view.cameraScale = w > 1024 ? 6 : (w > 768 ? 4 : (w > 480 ? 3 : 2));
        var screenRect = new __WEBPACK_IMPORTED_MODULE_2__game_pow_core_point__["a" /* Point */](view.context.canvas.width, view.context.canvas.height);
        var canvasSize = view.screenToWorld(screenRect, view.cameraScale);
        view.camera.extent.set(canvasSize);
        // Center on player object
        view.camera.setCenter(this.host.renderPoint || this.host.point);
        // Clamp to tile map if it is present.
        if (this.host.tileMap) {
            view.camera.point.x = Math.min(view.camera.point.x, this.host.tileMap.bounds.extent.x - view.camera.extent.x);
            view.camera.point.y = Math.min(view.camera.point.y, this.host.tileMap.bounds.extent.y - view.camera.extent.y);
            view.camera.point.x = Math.max(0, view.camera.point.x);
            view.camera.point.y = Math.max(0, view.camera.point.y);
            // Center in viewport if tilemap is smaller than camera.
            if (this.host.tileMap.bounds.extent.x < view.camera.extent.x) {
                view.camera.point.x = (this.host.tileMap.bounds.extent.x - view.camera.extent.x) / 2;
            }
            if (this.host.tileMap.bounds.extent.y < view.camera.extent.y) {
                view.camera.point.y = (this.host.tileMap.bounds.extent.y - view.camera.extent.y) / 2;
            }
        }
    };
    return PlayerCameraBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_0__game_pow2_scene_behaviors_camera_behavior__["a" /* CameraBehavior */]));
PlayerCameraBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'player-camera-behavior',
        template: "<ng-content></ng-content>"
    })
], PlayerCameraBehaviorComponent);



/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_game_feature_object__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_behaviors_ticked_behavior__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_collision_behavior__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_behavior__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerTriggerBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/**
 * A Component that collides with features that are directly in front
 * of a player, and fires enter/leave events for them.
 */
var PlayerTriggerBehaviorComponent = (function (_super) {
    __extends(PlayerTriggerBehaviorComponent, _super);
    function PlayerTriggerBehaviorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.collider = null;
        _this.player = null;
        _this.featureObject = null;
        /**
         * The player has touched a game feature.
         */
        _this.onLook = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        /**
         * The player was touching a game feature, and is now leaving.
         */
        _this.onLookAway = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        return _this;
    }
    PlayerTriggerBehaviorComponent.prototype.syncBehavior = function () {
        _super.prototype.syncBehavior.call(this);
        this.player = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_3__player_behavior__["a" /* PlayerBehaviorComponent */]);
        this.collider = this.host.findBehavior(__WEBPACK_IMPORTED_MODULE_2__behaviors_collision_behavior__["a" /* CollisionBehaviorComponent */]);
        return !!(this.player && this.collider);
    };
    PlayerTriggerBehaviorComponent.prototype.tick = function (elapsed) {
        _super.prototype.tick.call(this, elapsed);
        if (!this.player || !this.collider) {
            return;
        }
        var results = [];
        var headingX = this.host.point.x + this.player.heading.x;
        var headingY = this.host.point.y + this.player.heading.y;
        var isTouching = this.collider.collide(headingX, headingY, __WEBPACK_IMPORTED_MODULE_0__scene_game_feature_object__["a" /* GameFeatureObject */], results);
        var touched = results[0];
        var currentTouchId = this.featureObject ? this.featureObject._uid : null;
        var touchChanged = !!(touched && touched._uid !== currentTouchId);
        // No collisions for this tick
        if (!isTouching || !touched || touchChanged) {
            // If we were previously colliding with a feature, trigger the leave output.
            if (this.featureObject) {
                this.onLookAway.emit(this.featureObject);
                // And clean up the reference so we don't fire the event more than once
                this.featureObject = null;
            }
        }
        // Colliding with a feature
        if (touched && isTouching) {
            this.featureObject = touched;
            if (touchChanged) {
                this.onLook.emit(this.featureObject);
            }
        }
    };
    return PlayerTriggerBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_1__game_pow2_scene_behaviors_ticked_behavior__["a" /* TickedBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"])
], PlayerTriggerBehaviorComponent.prototype, "onLook", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"])
], PlayerTriggerBehaviorComponent.prototype, "onLookAway", void 0);
PlayerTriggerBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'player-look-behavior',
        template: "<ng-content></ng-content>"
    })
], PlayerTriggerBehaviorComponent);



/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_base_player_behavior__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_behaviors_tile_map_path_behavior__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scene_game_tile_map__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerMapPathBehaviorComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */





/**
 * Build Astar paths with GameFeatureObject tilemaps.
 */
var PlayerMapPathBehaviorComponent = (function (_super) {
    __extends(PlayerMapPathBehaviorComponent, _super);
    function PlayerMapPathBehaviorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayerMapPathBehaviorComponent.prototype.buildWeightedGraph = function () {
        var _this = this;
        var x;
        var layers = this.tileMap.getLayers();
        var l = layers.length;
        var grid = new Array(this.tileMap.bounds.extent.x);
        for (x = 0; x < this.tileMap.bounds.extent.x; x++) {
            grid[x] = new Array(this.tileMap.bounds.extent.y);
        }
        for (x = 0; x < this.tileMap.bounds.extent.x; x++) {
            for (var y = 0; y < this.tileMap.bounds.extent.y; y++) {
                // Tile Weights, the higher the value the more avoided the
                // tile will be in output paths.
                // 10   - neutral path, can walk, don't particularly care for it.
                // 1    - desired path, can walk and tend toward it over netural.
                // 1000 - blocked path, can't walk, avoid at all costs.
                var weight = 10;
                var blocked = false;
                for (var i = 0; i < l; i++) {
                    // If there is no metadata continue
                    var terrain = this.tileMap.getTileData(layers[i], x, y);
                    if (!terrain) {
                        continue;
                    }
                    // Check to see if any layer has a passable attribute set to false,
                    // if so block the path.
                    if (terrain.passable === false) {
                        weight = 1000;
                        blocked = true;
                    }
                    else if (terrain.isPath === true) {
                        weight = 1;
                    }
                }
                grid[x][y] = weight;
            }
        }
        // TOOD: Tiled Editor format is KILLIN' me.
        __WEBPACK_IMPORTED_MODULE_0_underscore__["each"](this.tileMap.features.objects, function (o) {
            var obj = o.properties;
            if (!obj) {
                return;
            }
            var collideTypes = __WEBPACK_IMPORTED_MODULE_1__behaviors_base_player_behavior__["a" /* BasePlayerComponent */].COLLIDE_TYPES;
            if (obj.passable === true || !obj.type) {
                return;
            }
            if (__WEBPACK_IMPORTED_MODULE_0_underscore__["indexOf"](collideTypes, obj.type) !== -1) {
                /* tslint:disable */
                var xPos = o.x / o.width | 0;
                var yPos = o.y / o.height | 0;
                /* tslint:enable */
                if (!obj.passable && _this.tileMap.bounds.pointInRect(xPos, yPos)) {
                    grid[xPos][yPos] = 100;
                }
            }
        });
        return grid;
    };
    return PlayerMapPathBehaviorComponent;
}(__WEBPACK_IMPORTED_MODULE_2__game_pow2_tile_behaviors_tile_map_path_behavior__["a" /* TileMapPathBehavior */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__scene_game_tile_map__["a" /* GameTileMap */])
], PlayerMapPathBehaviorComponent.prototype, "tileMap", void 0);
PlayerMapPathBehaviorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'player-map-path-behavior',
        template: "\n    <ng-content></ng-content>"
    })
], PlayerMapPathBehaviorComponent);



/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visibility; });

var Visibility = (function () {
    function Visibility() {
        var _this = this;
        /**
         * Is the visibility API supported?
         */
        this.supported = document.hasOwnProperty('hidden');
        this._changeVisibility = function () { return _this.onChange(); };
        if (this.supported) {
            document.addEventListener('visibilityChange', this._changeVisibility);
        }
    }
    Visibility.prototype.destroy = function () {
        if (this.supported) {
            document.removeEventListener('visibilityChange', this._changeVisibility);
        }
    };
    Visibility.prototype.onChange = function () {
        // switch (document.visibilityState) {
        //   case 'visible':
        //     break;
        //   case 'hidden':
        //     break;
        //   case 'prerender':
        //     break;
        //   case 'unloaded':
        //     break;
        //
        // }
    };
    return Visibility;
}());
Visibility = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Visibility);



/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animator; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * Really Janky class to play animations associated with a pow2 sprite.
 *
 * Give it a sprite name `setAnimationSource('ninja-female.png')` and
 * if it has `animations` associated with it from meta data, e.g. `ninja-female.json`
 * those animations will be available to play through this interface.
 *
 * The user has to call `updateTime` on the instance whenever time is
 * incremented.
 *
 * TODO: It's so ugly now.  Make it better.
 */
var Animator = (function () {
    function Animator() {
        this.interpFrame = 0;
        this.animElapsed = 0;
        this.animDuration = 0;
        this.frames = [0];
        this.sourceMeta = null;
        this.sourceAnims = null;
    }
    Animator.prototype.setAnimationSource = function (spriteName) {
        console.log("Sprite is " + spriteName);
        this.sourceMeta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api__["e" /* getSpriteMeta */])(spriteName);
        if (this.sourceMeta) {
            this.sourceAnims = this.sourceMeta.animations;
            this.setAnimation('down');
        }
    };
    Animator.prototype.setAnimation = function (name) {
        if (!this.sourceAnims) {
            throw new Error('Invalid source animations');
        }
        var data = this.sourceAnims[name];
        if (!data) {
            throw new Error("Invalid animation name - " + name);
        }
        this.frames = data.frames;
        this.animDuration = data.duration;
    };
    Animator.prototype.updateTime = function (elapsedMs) {
        this.animElapsed += elapsedMs;
        var factor = this.animElapsed / this.animDuration;
        var index = Math.round(this.interpolate(0, this.frames.length - 1, factor));
        this.interpFrame = this.frames[index];
        if (this.animElapsed > this.animDuration) {
            this.animElapsed = 0;
        }
    };
    Animator.prototype.interpolate = function (from, to, factor) {
        factor = Math.min(Math.max(factor, 0), 1);
        return (from * (1.0 - factor)) + (to * factor);
    };
    Animator.prototype.getFrame = function () {
        return this.interpFrame;
    };
    return Animator;
}());



/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneObjectRenderer; });
var SceneObjectRenderer = (function () {
    function SceneObjectRenderer() {
    }
    SceneObjectRenderer.prototype.render = function (object, data, view) {
        // nothing
    };
    return SceneObjectRenderer;
}());



/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pow_core_rect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pow_core_point__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneSpatialDatabase; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */



/**
 * Very, very simple spatial database.  Because all the game objects have
 * an extent of 1 unit, we can just do a point in rect to determine object hits.
 */
var SceneSpatialDatabase = (function () {
    function SceneSpatialDatabase() {
        this._pointRect = new __WEBPACK_IMPORTED_MODULE_1__pow_core_rect__["a" /* Rect */](0, 0, 1, 1);
        this._objects = [];
    }
    SceneSpatialDatabase.prototype.addSpatialObject = function (obj) {
        if (obj && obj.point instanceof __WEBPACK_IMPORTED_MODULE_2__pow_core_point__["a" /* Point */]) {
            this._objects.push(obj);
        }
    };
    SceneSpatialDatabase.prototype.removeSpatialObject = function (obj) {
        this._objects = __WEBPACK_IMPORTED_MODULE_0_underscore__["reject"](this._objects, function (o) {
            return o._uid === obj._uid;
        });
    };
    SceneSpatialDatabase.prototype.queryPoint = function (point, type, results) {
        this._pointRect.point.set(point);
        return this.queryRect(this._pointRect, type, results);
    };
    SceneSpatialDatabase.prototype.queryRect = function (rect, type, results) {
        var foundAny;
        if (!results) {
            throw new Error('Results array must be provided to query scene spatial database');
        }
        foundAny = false;
        var list = this._objects;
        var i;
        var len;
        var o;
        for (i = 0, len = list.length; i < len; i++) {
            o = list[i];
            if (type && !(o instanceof type)) {
                continue;
            }
            if (o.enabled === false) {
                continue;
            }
            if (o.point && rect.pointInRect(o.point)) {
                results.push(o);
                foundAny = true;
            }
        }
        return foundAny;
    };
    return SceneSpatialDatabase;
}());



/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SceneViewComponent; });
/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * A component that can be added to a [[SceneView]] to add additional
 * rendering to it.
 */
var SceneViewComponent = (function (_super) {
    __extends(SceneViewComponent, _super);
    function SceneViewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SceneViewComponent.prototype.beforeFrame = function (view, elapsed) {
        // nothing
    };
    SceneViewComponent.prototype.renderFrame = function (view, elapsed) {
        // nothing
    };
    SceneViewComponent.prototype.afterFrame = function (view, elapsed) {
        // nothing
    };
    return SceneViewComponent;
}(__WEBPACK_IMPORTED_MODULE_0__scene_object_behavior__["a" /* SceneObjectBehavior */]));



/***/ }),
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/*\n  Page Transitions from Tympanus article:\n\n  http://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/\n*/\n.pt-page {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  transform-style: preserve-3d; }\n\n.no-js body {\n  overflow: auto; }\n\n.pt-page-ontop, .scale-down.ng-hide-add {\n  z-index: 99; }\n\n.pt-page {\n  visibility: visible;\n  z-index: 1; }\n\n/* scale and fade */\n.pt-page-scaleDown {\n  -webkit-animation: scaleDown .7s ease both;\n  -moz-animation: scaleDown .7s ease both;\n  animation: scaleDown .7s ease both; }\n\n.pt-page-scaleUp, .scale-down.ng-hide-remove {\n  -webkit-animation: scaleUp .7s ease both;\n  -moz-animation: scaleUp .7s ease both;\n  animation: scaleUp .7s ease both; }\n\n.pt-page-scaleUpDown {\n  -webkit-animation: scaleUpDown .5s ease both;\n  -moz-animation: scaleUpDown .5s ease both;\n  animation: scaleUpDown .5s ease both; }\n\n.pt-page-scaleDownUp, .scale-down.ng-hide-add {\n  -webkit-animation: scaleDownUp .5s ease both;\n  -moz-animation: scaleDownUp .5s ease both;\n  animation: scaleDownUp .5s ease both; }\n\n.pt-page-scaleDownCenter {\n  -webkit-animation: scaleDownCenter .4s ease-in both;\n  -moz-animation: scaleDownCenter .4s ease-in both;\n  animation: scaleDownCenter .4s ease-in both; }\n\n.pt-page-scaleUpCenter {\n  -webkit-animation: scaleUpCenter .4s ease-out both;\n  -moz-animation: scaleUpCenter .4s ease-out both;\n  animation: scaleUpCenter .4s ease-out both; }\n\n/********************************* keyframes **************************************/\n/* scale and fade */\n@-webkit-keyframes scaleDown {\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.8); } }\n\n@-moz-keyframes scaleDown {\n  to {\n    opacity: 0;\n    -moz-transform: scale(0.8); } }\n\n@keyframes scaleDown {\n  to {\n    opacity: 0;\n    transform: scale(0.8); } }\n\n@-webkit-keyframes scaleUp {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.8); } }\n\n@-moz-keyframes scaleUp {\n  from {\n    opacity: 0;\n    -moz-transform: scale(0.8); } }\n\n@keyframes scaleUp {\n  from {\n    opacity: 0;\n    transform: scale(0.8); } }\n\n@-webkit-keyframes scaleUpDown {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(1.2); } }\n\n@-moz-keyframes scaleUpDown {\n  from {\n    opacity: 0;\n    -moz-transform: scale(1.2); } }\n\n@keyframes scaleUpDown {\n  from {\n    opacity: 0;\n    transform: scale(1.2); } }\n\n@-webkit-keyframes scaleDownUp {\n  to {\n    opacity: 0;\n    -webkit-transform: scale(1.2); } }\n\n@-moz-keyframes scaleDownUp {\n  to {\n    opacity: 0;\n    -moz-transform: scale(1.2); } }\n\n@keyframes scaleDownUp {\n  to {\n    opacity: 0;\n    transform: scale(1.2); } }\n\n@-webkit-keyframes scaleDownCenter {\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0.7); } }\n\n@-moz-keyframes scaleDownCenter {\n  to {\n    opacity: 0;\n    -moz-transform: scale(0.7); } }\n\n@keyframes scaleDownCenter {\n  to {\n    opacity: 0;\n    transform: scale(0.7); } }\n\n@-webkit-keyframes scaleUpCenter {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0.7); } }\n\n@-moz-keyframes scaleUpCenter {\n  from {\n    opacity: 0;\n    -moz-transform: scale(0.7); } }\n\n@keyframes scaleUpCenter {\n  from {\n    opacity: 0;\n    transform: scale(0.7); } }\n\n/* animation delay classes */\n.pt-page-delay100 {\n  -webkit-animation-delay: .1s;\n  -moz-animation-delay: .1s;\n  animation-delay: .1s; }\n\n.pt-page-delay180 {\n  -webkit-animation-delay: .180s;\n  -moz-animation-delay: .180s;\n  animation-delay: .180s; }\n\n.pt-page-delay200 {\n  -webkit-animation-delay: .2s;\n  -moz-animation-delay: .2s;\n  animation-delay: .2s; }\n\n.pt-page-delay300 {\n  -webkit-animation-delay: .3s;\n  -moz-animation-delay: .3s;\n  animation-delay: .3s; }\n\n.pt-page-delay400 {\n  -webkit-animation-delay: .4s;\n  -moz-animation-delay: .4s;\n  animation-delay: .4s; }\n\n.pt-page-delay500, .scale-down.ng-hide-add {\n  -webkit-animation-delay: .5s;\n  -moz-animation-delay: .5s;\n  animation-delay: .5s; }\n\n.pt-page-delay700 {\n  -webkit-animation-delay: .7s;\n  -moz-animation-delay: .7s;\n  animation-delay: .7s; }\n\n.pt-page-delay1000, .scale-down.ng-hide-remove {\n  -webkit-animation-delay: 1s;\n  -moz-animation-delay: 1s;\n  animation-delay: 1s; }\n\n.pt-page-moveToLeft {\n  -webkit-animation: moveToLeft .6s ease both;\n  -moz-animation: moveToLeft .6s ease both;\n  animation: moveToLeft .6s ease both; }\n\n.pt-page-moveFromLeft {\n  -webkit-animation: moveFromLeft .6s ease both;\n  -moz-animation: moveFromLeft .6s ease both;\n  animation: moveFromLeft .6s ease both; }\n\n.pt-page-moveToRight {\n  -webkit-animation: moveToRight .6s ease both;\n  -moz-animation: moveToRight .6s ease both;\n  animation: moveToRight .6s ease both; }\n\n.pt-page-moveFromRight {\n  -webkit-animation: moveFromRight .6s ease both;\n  -moz-animation: moveFromRight .6s ease both;\n  animation: moveFromRight .6s ease both; }\n\n.pt-page-moveToTop {\n  -webkit-animation: moveToTop .6s ease both;\n  -moz-animation: moveToTop .6s ease both;\n  animation: moveToTop .6s ease both; }\n\n.pt-page-moveFromTop {\n  -webkit-animation: moveFromTop .6s ease both;\n  -moz-animation: moveFromTop .6s ease both;\n  animation: moveFromTop .6s ease both; }\n\n.pt-page-moveToBottom {\n  -webkit-animation: moveToBottom .6s ease both;\n  -moz-animation: moveToBottom .6s ease both;\n  animation: moveToBottom .6s ease both; }\n\n.pt-page-moveFromBottom {\n  -webkit-animation: moveFromBottom .6s ease both;\n  -moz-animation: moveFromBottom .6s ease both;\n  animation: moveFromBottom .6s ease both; }\n\n/* fade */\n.pt-page-fade {\n  -webkit-animation: fade .7s ease both;\n  -moz-animation: fade .7s ease both;\n  animation: fade .7s ease both; }\n\n/* move from / to and fade */\n.pt-page-moveToLeftFade {\n  -webkit-animation: moveToLeftFade .7s ease both;\n  -moz-animation: moveToLeftFade .7s ease both;\n  animation: moveToLeftFade .7s ease both; }\n\n.pt-page-moveFromLeftFade {\n  -webkit-animation: moveFromLeftFade .7s ease both;\n  -moz-animation: moveFromLeftFade .7s ease both;\n  animation: moveFromLeftFade .7s ease both; }\n\n.pt-page-moveToRightFade {\n  -webkit-animation: moveToRightFade .7s ease both;\n  -moz-animation: moveToRightFade .7s ease both;\n  animation: moveToRightFade .7s ease both; }\n\n.pt-page-moveFromRightFade {\n  -webkit-animation: moveFromRightFade .7s ease both;\n  -moz-animation: moveFromRightFade .7s ease both;\n  animation: moveFromRightFade .7s ease both; }\n\n.pt-page-moveToTopFade {\n  -webkit-animation: moveToTopFade .7s ease both;\n  -moz-animation: moveToTopFade .7s ease both;\n  animation: moveToTopFade .7s ease both; }\n\n.pt-page-moveFromTopFade {\n  -webkit-animation: moveFromTopFade .7s ease both;\n  -moz-animation: moveFromTopFade .7s ease both;\n  animation: moveFromTopFade .7s ease both; }\n\n.pt-page-moveToBottomFade {\n  -webkit-animation: moveToBottomFade .7s ease both;\n  -moz-animation: moveToBottomFade .7s ease both;\n  animation: moveToBottomFade .7s ease both; }\n\n.pt-page-moveFromBottomFade {\n  -webkit-animation: moveFromBottomFade .7s ease both;\n  -moz-animation: moveFromBottomFade .7s ease both;\n  animation: moveFromBottomFade .7s ease both; }\n\n/* move to with different easing */\n.pt-page-moveToLeftEasing {\n  -webkit-animation: moveToLeft .7s ease-in-out both;\n  -moz-animation: moveToLeft .7s ease-in-out both;\n  animation: moveToLeft .7s ease-in-out both; }\n\n.pt-page-moveToRightEasing {\n  -webkit-animation: moveToRight .7s ease-in-out both;\n  -moz-animation: moveToRight .7s ease-in-out both;\n  animation: moveToRight .7s ease-in-out both; }\n\n.pt-page-moveToTopEasing {\n  -webkit-animation: moveToTop .7s ease-in-out both;\n  -moz-animation: moveToTop .7s ease-in-out both;\n  animation: moveToTop .7s ease-in-out both; }\n\n.pt-page-moveToBottomEasing {\n  -webkit-animation: moveToBottom .7s ease-in-out both;\n  -moz-animation: moveToBottom .7s ease-in-out both;\n  animation: moveToBottom .7s ease-in-out both; }\n\n/********************************* keyframes **************************************/\n/* move from / to  */\n@-webkit-keyframes moveToLeft {\n  to {\n    -webkit-transform: translateX(-100%); } }\n\n@-moz-keyframes moveToLeft {\n  to {\n    -moz-transform: translateX(-100%); } }\n\n@keyframes moveToLeft {\n  to {\n    transform: translateX(-100%); } }\n\n@-webkit-keyframes moveFromLeft {\n  from {\n    -webkit-transform: translateX(-100%); } }\n\n@-moz-keyframes moveFromLeft {\n  from {\n    -moz-transform: translateX(-100%); } }\n\n@keyframes moveFromLeft {\n  from {\n    transform: translateX(-100%); } }\n\n@-webkit-keyframes moveToRight {\n  to {\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveToRight {\n  to {\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveToRight {\n  to {\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveFromRight {\n  from {\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveFromRight {\n  from {\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveFromRight {\n  from {\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveToTop {\n  to {\n    -webkit-transform: translateY(-100%); } }\n\n@-moz-keyframes moveToTop {\n  to {\n    -moz-transform: translateY(-100%); } }\n\n@keyframes moveToTop {\n  to {\n    transform: translateY(-100%); } }\n\n@-webkit-keyframes moveFromTop {\n  from {\n    -webkit-transform: translateY(-100%); } }\n\n@-moz-keyframes moveFromTop {\n  from {\n    -moz-transform: translateY(-100%); } }\n\n@keyframes moveFromTop {\n  from {\n    transform: translateY(-100%); } }\n\n@-webkit-keyframes moveToBottom {\n  to {\n    -webkit-transform: translateY(100%); } }\n\n@-moz-keyframes moveToBottom {\n  to {\n    -moz-transform: translateY(100%); } }\n\n@keyframes moveToBottom {\n  to {\n    transform: translateY(100%); } }\n\n@-webkit-keyframes moveFromBottom {\n  from {\n    -webkit-transform: translateY(100%); } }\n\n@-moz-keyframes moveFromBottom {\n  from {\n    -moz-transform: translateY(100%); } }\n\n@keyframes moveFromBottom {\n  from {\n    transform: translateY(100%); } }\n\n/* fade */\n@-webkit-keyframes fade {\n  to {\n    opacity: 0.3; } }\n\n@-moz-keyframes fade {\n  to {\n    opacity: 0.3; } }\n\n@keyframes fade {\n  to {\n    opacity: 0.3; } }\n\n/* move from / to and fade */\n@-webkit-keyframes moveToLeftFade {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translateX(-100%); } }\n\n@-moz-keyframes moveToLeftFade {\n  to {\n    opacity: 0.3;\n    -moz-transform: translateX(-100%); } }\n\n@keyframes moveToLeftFade {\n  to {\n    opacity: 0.3;\n    transform: translateX(-100%); } }\n\n@-webkit-keyframes moveFromLeftFade {\n  from {\n    opacity: 0.3;\n    -webkit-transform: translateX(-100%); } }\n\n@-moz-keyframes moveFromLeftFade {\n  from {\n    opacity: 0.3;\n    -moz-transform: translateX(-100%); } }\n\n@keyframes moveFromLeftFade {\n  from {\n    opacity: 0.3;\n    transform: translateX(-100%); } }\n\n@-webkit-keyframes moveToRightFade {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveToRightFade {\n  to {\n    opacity: 0.3;\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveToRightFade {\n  to {\n    opacity: 0.3;\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveFromRightFade {\n  from {\n    opacity: 0.3;\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveFromRightFade {\n  from {\n    opacity: 0.3;\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveFromRightFade {\n  from {\n    opacity: 0.3;\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveToTopFade {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translateY(-100%); } }\n\n@-moz-keyframes moveToTopFade {\n  to {\n    opacity: 0.3;\n    -moz-transform: translateY(-100%); } }\n\n@keyframes moveToTopFade {\n  to {\n    opacity: 0.3;\n    transform: translateY(-100%); } }\n\n@-webkit-keyframes moveFromTopFade {\n  from {\n    opacity: 0.3;\n    -webkit-transform: translateY(-100%); } }\n\n@-moz-keyframes moveFromTopFade {\n  from {\n    opacity: 0.3;\n    -moz-transform: translateY(-100%); } }\n\n@keyframes moveFromTopFade {\n  from {\n    opacity: 0.3;\n    transform: translateY(-100%); } }\n\n@-webkit-keyframes moveToBottomFade {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translateY(100%); } }\n\n@-moz-keyframes moveToBottomFade {\n  to {\n    opacity: 0.3;\n    -moz-transform: translateY(100%); } }\n\n@keyframes moveToBottomFade {\n  to {\n    opacity: 0.3;\n    transform: translateY(100%); } }\n\n@-webkit-keyframes moveFromBottomFade {\n  from {\n    opacity: 0.3;\n    -webkit-transform: translateY(100%); } }\n\n@-moz-keyframes moveFromBottomFade {\n  from {\n    opacity: 0.3;\n    -moz-transform: translateY(100%); } }\n\n@keyframes moveFromBottomFade {\n  from {\n    opacity: 0.3;\n    transform: translateY(100%); } }\n\n@-webkit-keyframes moveFromRight {\n  from {\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveFromRight {\n  from {\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveFromRight {\n  from {\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveToRight {\n  to {\n    -webkit-transform: translateX(100%); } }\n\n@-moz-keyframes moveToRight {\n  to {\n    -moz-transform: translateX(100%); } }\n\n@keyframes moveToRight {\n  to {\n    transform: translateX(100%); } }\n\n@-webkit-keyframes moveFromTop {\n  from {\n    opacity: 0.3;\n    -webkit-transform: translateY(-100%); }\n  to {\n    opacity: 1; } }\n\n@-moz-keyframes moveFromTop {\n  from {\n    opacity: 0.3;\n    -moz-transform: translateY(-100%); }\n  to {\n    opacity: 1; } }\n\n@keyframes moveFromTop {\n  from {\n    opacity: 0.3;\n    transform: translateY(-100%); }\n  to {\n    opacity: 1;\n    transform: translateY(0%); } }\n\n@-webkit-keyframes moveToTop {\n  to {\n    opacity: 0.3;\n    -webkit-transform: translateY(100%); } }\n\n@-moz-keyframes moveToTop {\n  to {\n    opacity: 0.3;\n    -moz-transform: translateY(100%); } }\n\n@keyframes moveToTop {\n  to {\n    opacity: 0.3;\n    transform: translateY(100%); } }\n\n@-webkit-keyframes fadeOut {\n  to {\n    opacity: 0.0; } }\n\n@-moz-keyframes fadeOut {\n  to {\n    opacity: 0.0; } }\n\n@keyframes fadeOut {\n  to {\n    opacity: 0.0; } }\n\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 1.0; } }\n\n@-moz-keyframes fadeIn {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 1.0; } }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0.0; }\n  to {\n    opacity: 1.0; } }\n\n.moveFromRight, .slide-from-right.ng-hide-remove {\n  -webkit-animation: moveFromRight .6s ease both;\n  -moz-animation: moveFromRight .6s ease both;\n  animation: moveFromRight .6s ease both; }\n\n.moveToRight, .slide-from-right.ng-hide-add {\n  -webkit-animation: moveToRight .6s ease both;\n  -moz-animation: moveToRight .6s ease both;\n  animation: moveToRight .6s ease both; }\n\n.slide-from-right.ng-hide-add {\n  display: block !important; }\n\n.slide-from-right.ng-hide-remove {\n  display: block !important; }\n\n.fadeOut, .menu-fade.ng-hide-add, .fade.ng-hide-add {\n  -webkit-animation: fadeOut 0.3s ease both;\n  -moz-animation: fadeOut 0.3s ease both;\n  animation: fadeOut 0.3s ease both; }\n\n.fadeIn, .menu-fade.ng-hide-remove, .fade.ng-hide-remove {\n  -webkit-animation: fadeIn 0.3s ease both;\n  -moz-animation: fadeIn 0.3s ease both;\n  animation: fadeIn 0.3s ease both; }\n\n.menu-fade.ng-hide-add {\n  display: block !important; }\n\n.menu-fade.ng-hide-remove {\n  display: block !important; }\n\n.fade.ng-enter {\n  opacity: 0;\n  display: block !important; }\n\n.fade.ng-enter,\n.fade.ng-enter.ng-enter-active {\n  -webkit-animation: fadeIn 0.3s ease both;\n  -moz-animation: fadeIn 0.3s ease both;\n  animation: fadeIn 0.3s ease both;\n  display: block !important; }\n\n.fade.ng-leave {\n  opacity: 1;\n  display: block !important; }\n\n.fade.ng-leave,\n.fade.ng-leave-active {\n  -webkit-animation: fadeOut 0.3s ease both;\n  -moz-animation: fadeOut 0.3s ease both;\n  animation: fadeOut 0.3s ease both;\n  display: block !important; }\n\n.fade.ng-hide-add,\n.fade.ng-hide-remove {\n  display: block !important; }\n\n.fade.ng-hide-add-active,\n.fade.ng-hide-remove-active {\n  display: block !important; }\n\n.fade.ng-hide-add {\n  opacity: 1; }\n\n.fade.ng-hide-remove {\n  opacity: 0; }\n\n.scale-down.ng-hide-add {\n  display: block !important; }\n\n.scale-down.ng-hide-remove {\n  display: block !important; }\n\n/* Stroke Text Effect */\n/* Extra markup and styles for table-esque vertical and horizontal centering */\n.loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n  .loading .loading-wrapper {\n    display: table;\n    width: 100%;\n    height: 100%;\n    /* For at least Firefox */\n    min-height: 100%; }\n  .loading .loading-wrapper-inner {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center; }\n\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  transition: opacity 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.1); }\n\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n  background: rgba(255, 255, 255, 0.04); }\n\n.mat-option.mat-selected {\n  color: #004c62; }\n  .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(255, 255, 255, 0.04); }\n\n.mat-option.mat-active {\n  background: rgba(255, 255, 255, 0.04);\n  color: white; }\n\n.mat-option.mat-option-disabled {\n  color: rgba(255, 255, 255, 0.3); }\n\n.mat-pseudo-checkbox {\n  color: rgba(255, 255, 255, 0.7); }\n  .mat-pseudo-checkbox::after {\n    color: #303030; }\n\n.mat-pseudo-checkbox-checked.mat-primary, .mat-pseudo-checkbox-indeterminate.mat-primary {\n  background: #0088ad; }\n\n.mat-pseudo-checkbox-checked.mat-accent, .mat-pseudo-checkbox-indeterminate.mat-accent {\n  background: #ffe261; }\n\n.mat-pseudo-checkbox-checked.mat-warn, .mat-pseudo-checkbox-indeterminate.mat-warn {\n  background: #f44336; }\n\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #686868; }\n\n.mat-app-background {\n  background-color: #303030; }\n\n.mat-theme-loaded-marker {\n  display: none; }\n\n.mat-autocomplete-panel {\n  background: #424242;\n  color: white; }\n  .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active) {\n    background: #424242;\n    color: white; }\n\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-raised-button.mat-primary .mat-button-focus-overlay, .mat-fab.mat-primary .mat-button-focus-overlay, .mat-mini-fab.mat-primary .mat-button-focus-overlay {\n  background-color: rgba(0, 76, 98, 0.12); }\n\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-raised-button.mat-accent .mat-button-focus-overlay, .mat-fab.mat-accent .mat-button-focus-overlay, .mat-mini-fab.mat-accent .mat-button-focus-overlay {\n  background-color: rgba(217, 177, 0, 0.12); }\n\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-raised-button.mat-warn .mat-button-focus-overlay, .mat-fab.mat-warn .mat-button-focus-overlay, .mat-mini-fab.mat-warn .mat-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-raised-button[disabled] .mat-button-focus-overlay, .mat-fab[disabled] .mat-button-focus-overlay, .mat-mini-fab[disabled] .mat-button-focus-overlay {\n  background-color: transparent; }\n\n.mat-button, .mat-icon-button {\n  background: transparent; }\n  .mat-button.mat-primary, .mat-icon-button.mat-primary {\n    color: #004c62; }\n  .mat-button.mat-accent, .mat-icon-button.mat-accent {\n    color: #d9b100; }\n  .mat-button.mat-warn, .mat-icon-button.mat-warn {\n    color: #f44336; }\n  .mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(0, 76, 98, 0.26); }\n\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(217, 177, 0, 0.26); }\n\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: white;\n  background-color: #424242; }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #004c62; }\n  .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #d9b100; }\n  .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #f44336; }\n  .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-fab, .mat-mini-fab {\n  background-color: #d9b100;\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-button-toggle {\n  color: rgba(255, 255, 255, 0.3); }\n  .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n    background-color: rgba(255, 255, 255, 0.06); }\n\n.mat-button-toggle-checked {\n  background-color: #212121;\n  color: white; }\n\n.mat-button-toggle-disabled {\n  background-color: black;\n  color: rgba(255, 255, 255, 0.3); }\n  .mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #424242; }\n\n.mat-card {\n  background: #424242;\n  color: white; }\n\n.mat-card-subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.mat-checkbox-frame {\n  border-color: rgba(255, 255, 255, 0.7); }\n\n.mat-checkbox-checkmark {\n  fill: #303030; }\n\n.mat-checkbox-checkmark-path {\n  stroke: #303030 !important; }\n\n.mat-checkbox-mixedmark {\n  background-color: #303030; }\n\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #0088ad; }\n\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ffe261; }\n\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #f44336; }\n\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #686868; }\n\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #686868; }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(0, 76, 98, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(217, 177, 0, 0.26); }\n\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.mat-chip:not(.mat-basic-chip) {\n  background-color: #424242;\n  color: white; }\n\n.mat-chip.mat-chip-selected:not(.mat-basic-chip) {\n  background-color: #212121;\n  color: white; }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary {\n    background-color: #0088ad;\n    color: white; }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent {\n    background-color: #ffe261;\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn {\n    background-color: #f44336;\n    color: white; }\n\n.mat-dialog-container {\n  background: #424242; }\n\n.mat-icon.mat-primary {\n  color: #004c62; }\n\n.mat-icon.mat-accent {\n  color: #d9b100; }\n\n.mat-icon.mat-warn {\n  color: #f44336; }\n\n.mat-input-placeholder {\n  color: rgba(255, 255, 255, 0.3); }\n  .mat-focused .mat-input-placeholder {\n    color: #004c62; }\n    .mat-focused .mat-input-placeholder.mat-accent {\n      color: #d9b100; }\n    .mat-focused .mat-input-placeholder.mat-warn {\n      color: #f44336; }\n\n.mat-input-element:disabled {\n  color: rgba(255, 255, 255, 0.3); }\n\ninput.mat-input-element:-webkit-autofill + .mat-input-placeholder .mat-placeholder-required,\n.mat-focused .mat-input-placeholder.mat-float .mat-placeholder-required {\n  color: #d9b100; }\n\n.mat-input-underline {\n  border-color: rgba(255, 255, 255, 0.12); }\n  .mat-input-underline .mat-input-ripple {\n    background-color: #004c62; }\n    .mat-input-underline .mat-input-ripple.mat-accent {\n      background-color: #d9b100; }\n    .mat-input-underline .mat-input-ripple.mat-warn {\n      background-color: #f44336; }\n\n.mat-input-invalid .mat-input-placeholder,\n.mat-input-invalid .mat-placeholder-required {\n  color: #f44336; }\n\n.mat-input-invalid .mat-input-underline {\n  border-color: #f44336; }\n\n.mat-input-invalid .mat-input-ripple {\n  background-color: #f44336; }\n\n.mat-input-error {\n  color: #f44336; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  color: white; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  color: rgba(255, 255, 255, 0.7); }\n\n.mat-divider {\n  border-top-color: rgba(255, 255, 255, 0.12); }\n\n.mat-nav-list .mat-list-item-content:hover, .mat-nav-list .mat-list-item-content.mat-list-item-focus {\n  background: rgba(255, 255, 255, 0.04); }\n\n.mat-menu-content {\n  background: #424242; }\n\n.mat-menu-item {\n  background: transparent;\n  color: white; }\n  .mat-menu-item[disabled] {\n    color: rgba(255, 255, 255, 0.3); }\n  .mat-menu-item .mat-icon {\n    color: white;\n    vertical-align: middle; }\n  .mat-menu-item:hover:not([disabled]), .mat-menu-item:focus:not([disabled]) {\n    background: rgba(255, 255, 255, 0.04); }\n\n.mat-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ccf5ff%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar-buffer {\n  background-color: #ccf5ff; }\n\n.mat-progress-bar-fill::after {\n  background-color: #007494; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23fff5c7%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #fff5c7; }\n\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ffdd45; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.mat-progress-spinner path, .mat-spinner path {\n  stroke: #007494; }\n\n.mat-progress-spinner.mat-accent path, .mat-spinner.mat-accent path {\n  stroke: #ffdd45; }\n\n.mat-progress-spinner.mat-warn path, .mat-spinner.mat-warn path {\n  stroke: #e53935; }\n\n.mat-radio-outer-circle {\n  border-color: rgba(255, 255, 255, 0.7); }\n  .mat-radio-checked .mat-radio-outer-circle {\n    border-color: #d9b100; }\n  .mat-radio-disabled .mat-radio-outer-circle {\n    border-color: rgba(255, 255, 255, 0.3); }\n\n.mat-radio-inner-circle {\n  background-color: #d9b100; }\n  .mat-radio-disabled .mat-radio-inner-circle {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.mat-radio-ripple .mat-ripple-element {\n  background-color: rgba(217, 177, 0, 0.26); }\n  .mat-radio-disabled .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.3); }\n\n.mat-select-trigger {\n  color: rgba(255, 255, 255, 0.3); }\n  .mat-select:focus:not(.mat-select-disabled) .mat-select-trigger {\n    color: #004c62; }\n  .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger {\n    color: #f44336; }\n\n.mat-select-underline {\n  background-color: rgba(255, 255, 255, 0.12); }\n  .mat-select:focus:not(.mat-select-disabled) .mat-select-underline {\n    background-color: #004c62; }\n  .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline {\n    background-color: #f44336; }\n\n.mat-select-arrow {\n  color: rgba(255, 255, 255, 0.3); }\n  .mat-select:focus:not(.mat-select-disabled) .mat-select-arrow {\n    color: #004c62; }\n  .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow {\n    color: #f44336; }\n\n.mat-select-content, .mat-select-panel-done-animating {\n  background: #424242; }\n\n.mat-select-value {\n  color: white; }\n  .mat-select-disabled .mat-select-value {\n    color: rgba(255, 255, 255, 0.3); }\n\n.mat-sidenav-container {\n  background-color: #303030;\n  color: white; }\n\n.mat-sidenav {\n  background-color: #424242;\n  color: white; }\n  .mat-sidenav.mat-sidenav-push {\n    background-color: #424242; }\n\n.mat-sidenav-backdrop.mat-sidenav-shown {\n  background-color: rgba(189, 189, 189, 0.6); }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #fff0ad; }\n\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(255, 240, 173, 0.5); }\n\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-slide-toggle .mat-ripple-element {\n  background-color: rgba(255, 240, 173, 0.12); }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #7de1fa; }\n\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(125, 225, 250, 0.5); }\n\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-slide-toggle.mat-primary .mat-ripple-element {\n  background-color: rgba(125, 225, 250, 0.12); }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #ef9a9a; }\n\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: rgba(239, 154, 154, 0.5); }\n\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-slide-toggle.mat-warn .mat-ripple-element {\n  background-color: rgba(239, 154, 154, 0.12); }\n\n.mat-disabled .mat-slide-toggle-thumb {\n  background-color: #424242; }\n\n.mat-disabled .mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.12); }\n\n.mat-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.mat-slide-toggle-bar {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-primary .mat-slider-track-fill, .mat-primary\n.mat-slider-thumb, .mat-primary\n.mat-slider-thumb-label {\n  background-color: #004c62; }\n\n.mat-accent .mat-slider-track-fill, .mat-accent\n.mat-slider-thumb, .mat-accent\n.mat-slider-thumb-label {\n  background-color: #d9b100; }\n\n.mat-warn .mat-slider-track-fill, .mat-warn\n.mat-slider-thumb, .mat-warn\n.mat-slider-thumb-label {\n  background-color: #f44336; }\n\n.mat-slider-focus-ring {\n  background-color: rgba(217, 177, 0, 0.2); }\n\n.mat-primary .mat-slider-thumb-label-text {\n  color: rgba(255, 255, 255, 0.87); }\n\n.mat-accent .mat-slider-thumb-label-text {\n  color: rgba(0, 0, 0, 0.87); }\n\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: black; }\n\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid black; }\n  .mat-tab-group-inverted-header .mat-tab-nav-bar, .mat-tab-group-inverted-header\n  .mat-tab-header {\n    border-top: 1px solid black;\n    border-bottom: none; }\n\n.mat-tab-label:focus {\n  background-color: rgba(204, 245, 255, 0.3); }\n\n.mat-ink-bar {\n  background-color: #0088ad; }\n\n.mat-tab-label, .mat-tab-link {\n  color: currentColor; }\n  .mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.3); }\n\n.mat-toolbar {\n  background: #212121;\n  color: white; }\n  .mat-toolbar.mat-primary {\n    background: #004c62;\n    color: rgba(255, 255, 255, 0.87); }\n  .mat-toolbar.mat-accent {\n    background: #d9b100;\n    color: rgba(0, 0, 0, 0.87); }\n  .mat-toolbar.mat-warn {\n    background: #f44336;\n    color: white; }\n\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\nhtml,\nbody {\n  background-color: #222222;\n  overflow: hidden;\n  color: rgba(255, 255, 255, 0.9); }\n\ncanvas {\n  image-rendering: -moz-crisp-edges;\n  /* Firefox */\n  image-rendering: -o-crisp-edges;\n  /* Opera */\n  image-rendering: -webkit-optimize-contrast;\n  /* Webkit (non-standard naming) */\n  image-rendering: crisp-edges;\n  -ms-interpolation-mode: nearest-neighbor;\n  /* IE (non-standard property) */ }\n\n.ebp {\n  font-family: 'GraphicPixel', sans-serif;\n  background-color: #004c62;\n  color: white;\n  border: 6px solid white;\n  border-radius: 9px;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);\n  padding-top: 16px;\n  padding-bottom: 16px; }\n\n.select-map {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  margin: 1rem;\n  padding: 0.5rem;\n  opacity: 0.3;\n  pointer-events: none; }\n  .select-map:hover {\n    opacity: 1; }\n  .select-map select {\n    pointer-events: all; }\n", ""]);

// exports


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n:host {\n  display: inline-flex;\n  height: inherit; }\n  :host div {\n    height: inherit;\n    /* Damage states */ }\n    :host div.fine {\n      background-color: #2e6da6; }\n    :host div.hurt {\n      background-color: #e6c828; }\n    :host div.critical {\n      background-color: rgba(183, 0, 5, 0.5); }\n    :host div.dead {\n      background-color: rgba(255, 255, 255, 0.5); }\n", ""]);

// exports


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n:host {\n  padding: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  position: fixed;\n  background-color: transparent;\n  z-index: 50;\n  text-align: center;\n  font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n  pointer-events: none;\n  -webkit-transform: scale3d(1, 0, 1);\n  -moz-transform: scale3d(1, 0, 1);\n  transform: scale3d(1, 0, 1);\n  -webkit-transition: transform 0.2s ease-in-out;\n  -moz-transition: transform 0.2s ease-in-out;\n  transition: transform 0.2s ease-in-out; }\n  :host.active {\n    -webkit-transform: scale3d(1, 1, 1);\n    -moz-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n    pointer-events: auto; }\n  :host .message {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    top: 45%;\n    left: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    border: none;\n    box-shadow: none;\n    margin: auto;\n    position: absolute;\n    padding: 25px 10px;\n    font-size: 2.5em;\n    color: #fff;\n    text-shadow: 1px 1px 0 #000, -2px 0 #000, 0px 0 #000, -1px 1px 0 #000; }\n    :host .message.loading {\n      visibility: hidden; }\n", ""]);

// exports


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n:host {\n  text-align: center; }\n  :host ul {\n    list-style-type: none;\n    text-align: center;\n    margin: 0;\n    padding: 10px; }\n    :host ul > li {\n      position: relative;\n      padding-top: 36px;\n      height: 100px;\n      width: 64px; }\n      :host ul > li > * {\n        pointer-events: none; }\n      :host ul > li .desc {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        font-size: 0.9em;\n        line-height: 18px; }\n      :host ul > li .icon {\n        left: 0;\n        right: 0;\n        margin: auto; }\n        :host ul > li .icon img {\n          display: inline-block;\n          height: 64px;\n          width: 64px; }\n      :host ul > li .compare {\n        color: #0f0; }\n  :host .unequipped > li {\n    display: inline-block; }\n  :host ul, :host ul > li {\n    display: inline-block;\n    list-style-type: none; }\n  :host .character-equipment-map {\n    padding: 10px;\n    margin: 0;\n    position: relative; }\n    :host .character-equipment-map > li {\n      display: inline-block;\n      font-size: 16px; }\n", ""]);

// exports


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n:host {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white; }\n  :host *:not(md-icon):not([md-icon-button]):not([md-fab]) {\n    font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n    text-shadow: 1px 1px 0 #000, -2px 0 #000, 0px 0 #000, -1px 1px 0 #000; }\n  :host md-toolbar {\n    position: fixed;\n    border-bottom: 6px solid white; }\n    :host md-toolbar h1 {\n      line-height: 28px;\n      height: 32px;\n      margin: 0; }\n      :host md-toolbar h1 a {\n        color: white;\n        text-decoration: none; }\n    :host md-toolbar rpg-sprite {\n      height: 32px;\n      margin-left: 6px; }\n    :host md-toolbar button {\n      font-size: 20px; }\n      :host md-toolbar button.active {\n        color: #e6c828; }\n  :host button[md-fab] {\n    position: fixed;\n    bottom: 12px;\n    right: 12px; }\n  :host md-card {\n    background-color: #004c62;\n    color: white;\n    border: 6px solid white;\n    border-radius: 9px;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);\n    padding-top: 16px;\n    padding-bottom: 16px;\n    position: fixed;\n    margin: auto;\n    right: 24px;\n    bottom: -12px;\n    top: 88px;\n    padding-bottom: 36px;\n    left: 24px;\n    max-width: 600px;\n    overflow-y: auto; }\n", ""]);

// exports


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ":host .hero-card {\n  padding: 0 15px; }\n  :host .hero-card.dead {\n    color: #aaa; }\n  :host .hero-card hr {\n    margin-bottom: 5px;\n    margin-top: 5px; }\n  :host .hero-card h1, :host .hero-card .image {\n    margin-top: 5px;\n    text-align: center; }\n  :host .hero-card player-stats {\n    text-align: center; }\n", ""]);

// exports


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "rpg-sprite {\n  font-size: 0; }\n", ""]);

// exports


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n:host {\n  display: block; }\n  :host .damage-value {\n    background: none;\n    pointer-events: none;\n    position: absolute;\n    opacity: 0;\n    z-index: 20;\n    font-family: 'GraphicPixel', sans-serif;\n    font-size: 3em;\n    color: #F00;\n    transition: opacity 1s ease-out, transform 1s cubic-bezier(0.19, 1, 0.22, 1);\n    transform: translateY(0);\n    text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.9), -4px 0 rgba(255, 255, 255, 0.9), 0px 0 rgba(255, 255, 255, 0.9), -2px 2px 0 rgba(255, 255, 255, 0.9); }\n    :host .damage-value.miss {\n      color: #ccc;\n      text-shadow: 1px 1px 0 #222, -2px 0 #222, 0px 0 #222, -1px 1px 0 #222; }\n    :host .damage-value.heal {\n      color: #0E0;\n      text-shadow: 1px 1px 0 #222, -2px 0 #222, 0px 0 #222, -1px 1px 0 #222; }\n    :host .damage-value.active {\n      opacity: 1;\n      transform: translateY(-25%); }\n    :host .damage-value.remove {\n      display: none; }\n", ""]);

// exports


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n[data-icon]:before {\n  font-family: \"pow2\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n[class^=\"pow2-\"]:before,\n[class*=\" pow2-\"]:before {\n  font-family: \"pow2\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.pow2-aura:before {\n  content: \"a\"; }\n\n.pow2-back-forth:before {\n  content: \"b\"; }\n\n.pow2-barbute:before {\n  content: \"c\"; }\n\n.pow2-barefoot:before {\n  content: \"d\"; }\n\n.pow2-battle-gear:before {\n  content: \"e\"; }\n\n.pow2-black-flag:before {\n  content: \"f\"; }\n\n.pow2-bolt-shield:before {\n  content: \"g\"; }\n\n.pow2-bone-knife:before {\n  content: \"h\"; }\n\n.pow2-bookmark:before {\n  content: \"i\"; }\n\n.pow2-bookmarklet:before {\n  content: \"j\"; }\n\n.pow2-boot-prints:before {\n  content: \"k\"; }\n\n.pow2-boots:before {\n  content: \"l\"; }\n\n.pow2-bottle-vapors:before {\n  content: \"m\"; }\n\n.pow2-breastplate:before {\n  content: \"n\"; }\n\n.pow2-broadsword:before {\n  content: \"o\"; }\n\n.pow2-bubbling-flask:before {\n  content: \"p\"; }\n\n.pow2-burning-dot:before {\n  content: \"q\"; }\n\n.pow2-cash:before {\n  content: \"r\"; }\n\n.pow2-castle:before {\n  content: \"s\"; }\n\n.pow2-checked-shield:before {\n  content: \"t\"; }\n\n.pow2-cheese-wedge:before {\n  content: \"u\"; }\n\n.pow2-chemical-drop:before {\n  content: \"v\"; }\n\n.pow2-chicken-leg:before {\n  content: \"w\"; }\n\n.pow2-cog:before {\n  content: \"x\"; }\n\n.pow2-conversation:before {\n  content: \"y\"; }\n\n.pow2-death-note:before {\n  content: \"z\"; }\n\n.pow2-drink-me:before {\n  content: \"A\"; }\n\n.pow2-emerald:before {\n  content: \"B\"; }\n\n.pow2-envelope:before {\n  content: \"C\"; }\n\n.pow2-ice-bolt:before {\n  content: \"D\"; }\n\n.pow2-list:before {\n  content: \"E\"; }\n\n.pow2-social-github:before {\n  content: \"F\"; }\n\n.pow2-tablet-landscape:before {\n  content: \"G\"; }\n\n.pow2-tablet-portrait:before {\n  content: \"H\"; }\n\n.pow2-comment:before {\n  content: \"I\"; }\n\n.pow2-arrow-right:before {\n  content: \"J\"; }\n\n:host {\n  font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  font-size: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  z-index: 20;\n  display: block; }\n  :host .progress {\n    margin-bottom: 0; }\n  :host .status {\n    border-radius: 0;\n    text-align: right;\n    color: #fff;\n    position: relative;\n    min-height: 32px; }\n    @media (min-width: 600px) {\n      :host .status {\n        min-height: 64px; } }\n    :host .status rpg-health-bar, :host .status .text {\n      height: 100%;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0; }\n    :host .status .text {\n      padding: 0 15px;\n      z-index: 70; }\n    :host .status.focused {\n      color: #E8C627; }\n    :host .status.choosing {\n      background-color: #004c62; }\n    :host .status .name {\n      float: left;\n      text-align: left;\n      width: 25%;\n      text-shadow: 1px 1px 0 #000, -2px 0 #000, 0px 0 #000, -1px 1px 0 #000; }\n    :host .status .hp {\n      text-align: right;\n      text-shadow: 1px 1px 0 #000, -2px 0 #000, 0px 0 #000, -1px 1px 0 #000; }\n    :host .status rpg-health-bar {\n      opacity: 0.5;\n      min-width: 25%; }\n    @media (min-width: 600px) {\n      :host .status {\n        font-size: 2.2em; } }\n", ""]);

// exports


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n[data-icon]:before {\n  font-family: \"pow2\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n[class^=\"pow2-\"]:before,\n[class*=\" pow2-\"]:before {\n  font-family: \"pow2\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.pow2-aura:before {\n  content: \"a\"; }\n\n.pow2-back-forth:before {\n  content: \"b\"; }\n\n.pow2-barbute:before {\n  content: \"c\"; }\n\n.pow2-barefoot:before {\n  content: \"d\"; }\n\n.pow2-battle-gear:before {\n  content: \"e\"; }\n\n.pow2-black-flag:before {\n  content: \"f\"; }\n\n.pow2-bolt-shield:before {\n  content: \"g\"; }\n\n.pow2-bone-knife:before {\n  content: \"h\"; }\n\n.pow2-bookmark:before {\n  content: \"i\"; }\n\n.pow2-bookmarklet:before {\n  content: \"j\"; }\n\n.pow2-boot-prints:before {\n  content: \"k\"; }\n\n.pow2-boots:before {\n  content: \"l\"; }\n\n.pow2-bottle-vapors:before {\n  content: \"m\"; }\n\n.pow2-breastplate:before {\n  content: \"n\"; }\n\n.pow2-broadsword:before {\n  content: \"o\"; }\n\n.pow2-bubbling-flask:before {\n  content: \"p\"; }\n\n.pow2-burning-dot:before {\n  content: \"q\"; }\n\n.pow2-cash:before {\n  content: \"r\"; }\n\n.pow2-castle:before {\n  content: \"s\"; }\n\n.pow2-checked-shield:before {\n  content: \"t\"; }\n\n.pow2-cheese-wedge:before {\n  content: \"u\"; }\n\n.pow2-chemical-drop:before {\n  content: \"v\"; }\n\n.pow2-chicken-leg:before {\n  content: \"w\"; }\n\n.pow2-cog:before {\n  content: \"x\"; }\n\n.pow2-conversation:before {\n  content: \"y\"; }\n\n.pow2-death-note:before {\n  content: \"z\"; }\n\n.pow2-drink-me:before {\n  content: \"A\"; }\n\n.pow2-emerald:before {\n  content: \"B\"; }\n\n.pow2-envelope:before {\n  content: \"C\"; }\n\n.pow2-ice-bolt:before {\n  content: \"D\"; }\n\n.pow2-list:before {\n  content: \"E\"; }\n\n.pow2-social-github:before {\n  content: \"F\"; }\n\n.pow2-tablet-landscape:before {\n  content: \"G\"; }\n\n.pow2-tablet-portrait:before {\n  content: \"H\"; }\n\n.pow2-comment:before {\n  content: \"I\"; }\n\n.pow2-arrow-right:before {\n  content: \"J\"; }\n\n:host * {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n:host rpg-health-bar {\n  width: 100%;\n  display: -webkit-inline-flex;\n  display: -moz-inline-flex;\n  display: inline-flex; }\n", ""]);

// exports


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\n[data-icon]:before {\n  font-family: \"pow2\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n[class^=\"pow2-\"]:before,\n[class*=\" pow2-\"]:before {\n  font-family: \"pow2\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.pow2-aura:before {\n  content: \"a\"; }\n\n.pow2-back-forth:before {\n  content: \"b\"; }\n\n.pow2-barbute:before {\n  content: \"c\"; }\n\n.pow2-barefoot:before {\n  content: \"d\"; }\n\n.pow2-battle-gear:before {\n  content: \"e\"; }\n\n.pow2-black-flag:before {\n  content: \"f\"; }\n\n.pow2-bolt-shield:before {\n  content: \"g\"; }\n\n.pow2-bone-knife:before {\n  content: \"h\"; }\n\n.pow2-bookmark:before {\n  content: \"i\"; }\n\n.pow2-bookmarklet:before {\n  content: \"j\"; }\n\n.pow2-boot-prints:before {\n  content: \"k\"; }\n\n.pow2-boots:before {\n  content: \"l\"; }\n\n.pow2-bottle-vapors:before {\n  content: \"m\"; }\n\n.pow2-breastplate:before {\n  content: \"n\"; }\n\n.pow2-broadsword:before {\n  content: \"o\"; }\n\n.pow2-bubbling-flask:before {\n  content: \"p\"; }\n\n.pow2-burning-dot:before {\n  content: \"q\"; }\n\n.pow2-cash:before {\n  content: \"r\"; }\n\n.pow2-castle:before {\n  content: \"s\"; }\n\n.pow2-checked-shield:before {\n  content: \"t\"; }\n\n.pow2-cheese-wedge:before {\n  content: \"u\"; }\n\n.pow2-chemical-drop:before {\n  content: \"v\"; }\n\n.pow2-chicken-leg:before {\n  content: \"w\"; }\n\n.pow2-cog:before {\n  content: \"x\"; }\n\n.pow2-conversation:before {\n  content: \"y\"; }\n\n.pow2-death-note:before {\n  content: \"z\"; }\n\n.pow2-drink-me:before {\n  content: \"A\"; }\n\n.pow2-emerald:before {\n  content: \"B\"; }\n\n.pow2-envelope:before {\n  content: \"C\"; }\n\n.pow2-ice-bolt:before {\n  content: \"D\"; }\n\n.pow2-list:before {\n  content: \"E\"; }\n\n.pow2-social-github:before {\n  content: \"F\"; }\n\n.pow2-tablet-landscape:before {\n  content: \"G\"; }\n\n.pow2-tablet-portrait:before {\n  content: \"H\"; }\n\n.pow2-comment:before {\n  content: \"I\"; }\n\n.pow2-arrow-right:before {\n  content: \"J\"; }\n\n:host .action-menu, :host .targets-menu, :host .spells-menu {\n  position: absolute;\n  bottom: 100%;\n  width: 100%;\n  margin: 0;\n  text-align: center;\n  list-style-type: none;\n  padding: 0; }\n  :host .action-menu li, :host .targets-menu li, :host .spells-menu li {\n    text-transform: capitalize;\n    display: -webkit-inline-flex;\n    display: -moz-inline-flex;\n    display: inline-flex;\n    cursor: pointer;\n    padding: 10px 15px; }\n    :host .action-menu li:hover, :host .targets-menu li:hover, :host .spells-menu li:hover {\n      color: #E8C627; }\n\n:host .point-to-player {\n  font-size: 1em;\n  -webkit-transition: all 0.1s;\n  -moz-transition: all 0.1s;\n  transition: all 0.1s;\n  color: #fff;\n  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);\n  pointer-events: none;\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  z-index: 20;\n  position: absolute; }\n  :host .point-to-player.hidden {\n    display: none; }\n  :host .point-to-player.left {\n    content: '<'; }\n    :host .point-to-player.left:before {\n      content: \"\\E079\"; }\n  :host .point-to-player.right {\n    content: '>'; }\n    :host .point-to-player.right:before {\n      content: \"\\E080\"; }\n  :host .point-to-player.attack, :host .point-to-player.magic {\n    content: 'X';\n    color: red; }\n    :host .point-to-player.attack:before, :host .point-to-player.magic:before {\n      content: \"\\E087\"; }\n\n@media (min-width: 600px) {\n  :host .point-to-player {\n    font-size: 2em; }\n  :host .combat-view .action-menu, :host .combat-view .targets-menu, :host .combat-view .spells-menu {\n    margin: 20px;\n    width: auto;\n    padding: 5px 25px; } }\n\n@media (max-width: 599px) {\n  :host .combat-view .action-menu, :host .combat-view .targets-menu, :host .combat-view .spells-menu {\n    border-radius: 0;\n    border-left: none;\n    border-right: none; } }\n", ""]);

// exports


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\ndialog-feature .dialog {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n  font-size: 20px;\n  background-color: #004c62;\n  color: white;\n  border: 6px solid white;\n  border-radius: 9px;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);\n  padding-top: 16px;\n  padding-bottom: 16px;\n  max-height: 90%;\n  z-index: 20;\n  max-width: 800px;\n  text-align: center; }\n  dialog-feature .dialog h1 {\n    margin: 0; }\n  @media (min-width: 600px) {\n    dialog-feature .dialog {\n      max-height: 80%; }\n      dialog-feature .dialog h1 {\n        margin: auto; } }\n  dialog-feature .dialog .body-text {\n    pointer-events: none; }\n  dialog-feature .dialog button {\n    /* General button style (reset) */\n    border: none;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n    background: none;\n    cursor: pointer;\n    padding: 10px 30px;\n    display: inline-block;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    outline: none;\n    position: relative;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n    background: #cb4e4e;\n    color: #fff;\n    box-shadow: 0 6px #ab3c3c;\n    -webkit-transition: none;\n    -moz-transition: none;\n    transition: none;\n    border-radius: 0 0 5px 5px;\n    position: absolute;\n    font-size: 1.5em;\n    padding: 10px 20px 5px;\n    right: 0.5em;\n    top: 0; }\n    dialog-feature .dialog button:after {\n      content: '';\n      position: absolute;\n      z-index: -1;\n      -webkit-transition: all 0.3s;\n      -moz-transition: all 0.3s;\n      transition: all 0.3s; }\n    dialog-feature .dialog button:before {\n      speak: none;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n      position: relative;\n      -webkit-font-smoothing: antialiased; }\n    dialog-feature .dialog button:hover {\n      box-shadow: 0 4px #ab3c3c;\n      top: 2px; }\n    dialog-feature .dialog button:active, dialog-feature .dialog button.ng-click-active {\n      box-shadow: 0 0 #ab3c3c;\n      top: 6px; }\n    dialog-feature .dialog button > i {\n      pointer-events: none; }\n    dialog-feature .dialog button:hover {\n      top: 0;\n      padding-top: 12px;\n      outline: none; }\n    dialog-feature .dialog button:active {\n      top: 0;\n      padding-top: 16px;\n      outline: none; }\n  dialog-feature .dialog .character {\n    padding: 0; }\n    dialog-feature .dialog .character p {\n      margin: 0; }\n  dialog-feature .dialog .text {\n    text-align: center;\n    vertical-align: middle;\n    line-height: normal;\n    color: #fff;\n    text-shadow: 1px 1px 0 #000, -2px 0 #000, 0px 0 #000, -1px 1px 0 #000; }\n", ""]);

// exports


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\nstore-feature .store {\n  max-width: 600px;\n  min-width: 320px;\n  z-index: 20;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n  font-size: 20px;\n  background-color: #004c62;\n  color: white;\n  border: 6px solid white;\n  border-radius: 9px;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);\n  padding-top: 16px;\n  padding-bottom: 16px;\n  max-height: 90%;\n  text-align: center;\n  color: white;\n  display: block; }\n  store-feature .store h1 {\n    margin: 0; }\n  @media (min-width: 600px) {\n    store-feature .store {\n      max-height: 80%; }\n      store-feature .store h1 {\n        margin: auto; } }\n  store-feature .store .inventory {\n    min-height: 200px;\n    overflow-y: auto;\n    text-align: center; }\n    store-feature .store .inventory .item-price {\n      color: #E8C627; }\n  store-feature .store .btn-group {\n    text-align: center; }\n    store-feature .store .btn-group button {\n      /* General button style (reset) */\n      border: none;\n      font-family: inherit;\n      font-size: inherit;\n      color: inherit;\n      background: none;\n      cursor: pointer;\n      padding: 10px 30px;\n      display: inline-block;\n      text-transform: uppercase;\n      letter-spacing: 1px;\n      font-weight: 700;\n      outline: none;\n      position: relative;\n      -webkit-transition: all 0.3s;\n      -moz-transition: all 0.3s;\n      transition: all 0.3s;\n      border: 3px solid #fff;\n      color: #fff;\n      /* Button 1a */ }\n      store-feature .store .btn-group button:after {\n        content: '';\n        position: absolute;\n        z-index: -1;\n        -webkit-transition: all 0.3s;\n        -moz-transition: all 0.3s;\n        transition: all 0.3s; }\n      store-feature .store .btn-group button:before {\n        speak: none;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n        line-height: 1;\n        position: relative;\n        -webkit-font-smoothing: antialiased; }\n      store-feature .store .btn-group button:hover, store-feature .store .btn-group button:active, store-feature .store .btn-group button.ng-click-active {\n        color: #0e83cd;\n        background: #fff; }\n  store-feature .store ul {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n    list-style-type: none;\n    max-width: 100%; }\n    store-feature .store ul li.item {\n      margin: 10px;\n      cursor: pointer;\n      border: 1px solid transparent; }\n      store-feature .store ul li.item * {\n        pointer-events: none; }\n      store-feature .store ul li.item .item-name {\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      store-feature .store ul li.item:hover * {\n        color: #0FF !important; }\n", ""]);

// exports


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* Stroke Text Effect */\n/* Stroke Text Effect */\ntemple-feature .temple-view {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: \"GraphicPixel\", \"AdvoCut\", sans-serif;\n  font-size: 20px;\n  background-color: #004c62;\n  color: white;\n  border: 6px solid white;\n  border-radius: 9px;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.7);\n  padding-top: 16px;\n  padding-bottom: 16px;\n  max-height: 90%;\n  z-index: 20;\n  text-align: center;\n  margin: auto;\n  max-width: 800px; }\n  temple-feature .temple-view h1 {\n    margin: 0; }\n  @media (min-width: 600px) {\n    temple-feature .temple-view {\n      max-height: 80%; }\n      temple-feature .temple-view h1 {\n        margin: auto; } }\n  temple-feature .temple-view button {\n    /* General button style (reset) */\n    border: none;\n    font-family: inherit;\n    font-size: inherit;\n    color: inherit;\n    background: none;\n    cursor: pointer;\n    padding: 10px 30px;\n    display: inline-block;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    font-weight: 700;\n    outline: none;\n    position: relative;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n    border: 3px solid #fff;\n    color: #fff;\n    /* Button 1a */ }\n    temple-feature .temple-view button:after {\n      content: '';\n      position: absolute;\n      z-index: -1;\n      -webkit-transition: all 0.3s;\n      -moz-transition: all 0.3s;\n      transition: all 0.3s; }\n    temple-feature .temple-view button:before {\n      speak: none;\n      font-style: normal;\n      font-weight: normal;\n      font-variant: normal;\n      text-transform: none;\n      line-height: 1;\n      position: relative;\n      -webkit-font-smoothing: antialiased; }\n    temple-feature .temple-view button:hover, temple-feature .temple-view button:active, temple-feature .temple-view button.ng-click-active {\n      color: #0e83cd;\n      background: #fff; }\n  temple-feature .temple-view .header h1 {\n    margin: 0; }\n  temple-feature .temple-view ul.party {\n    list-style: none; }\n    temple-feature .temple-view ul.party li {\n      display: inline-block; }\n", ""]);

// exports


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */
/***/ (function(module, exports) {

module.exports = "<rpg-notification></rpg-notification>\n<loading></loading>\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n"

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let current of [currentEntity$ | async]\" fxLayout=\"column\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\n    <button md-icon-button (click)=\"previousCharacter()\">\n      <md-icon>chevron_left</md-icon>\n    </button>\n\n    <section fxLayout=\"row\" fxFlex fxLayoutAlign=\"space-around center\">\n      <div flex fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <rpg-sprite class=\"image\" [name]=\"current.icon\" frame=\"7\"></rpg-sprite>\n        <span>{{current.name}}</span>\n      </div>\n      <div>\n        <player-stats [model]=\"current\"\n                      [showExperience]=\"false\"\n                      [showHP]=\"false\"\n                      [showLevel]=\"false\"></player-stats>\n      </div>\n    </section>\n\n    <button md-icon-button (click)=\"nextCharacter()\">\n      <md-icon>chevron_right</md-icon>\n    </button>\n  </div>\n\n\n  <ul class=\"equipped\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n    <li class=\"weapon\" *ngIf=\"current.weapon\" (click)=\"doUnequip$.next({slot:'weapon', item: current.weapon})\">\n      <span class=\"desc\">Weapon</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.weapon.icon\"></rpg-sprite>\n    </li>\n    <li class=\"jewelry item\" *ngIf=\"current.accessory\" (click)=\"doUnequip$.next({slot:'accessory', item: current.accessory})\">\n      <span class=\"desc\">Accessory</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.accessory.icon\"></rpg-sprite>\n    </li>\n    <li class=\"head item\" *ngIf=\"current.helm\" (click)=\"doUnequip$.next({slot:'helm', item: current.helm})\">\n      <span class=\"desc\">Head</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.helm.icon\"></rpg-sprite>\n    </li>\n    <li class=\"body item\" *ngIf=\"current.armor\" (click)=\"doUnequip$.next({slot:'armor', item: current.armor})\">\n      <span class=\"desc\">Body</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.armor.icon\"></rpg-sprite>\n    </li>\n    <li class=\"arms item\" *ngIf=\"current.shield\" (click)=\"doUnequip$.next({slot:'shield', item: current.shield})\">\n      <span class=\"desc\">Arms</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.shield.icon\"></rpg-sprite>\n    </li>\n    <li class=\"feet item\" *ngIf=\"current.boots\" (click)=\"doUnequip$.next({slot:'boots', item: current.boots})\">\n      <span class=\"desc\">Feet</span>\n      <rpg-sprite class=\"icon\" [name]=\"current.boots.icon\"></rpg-sprite>\n    </li>\n  </ul>\n\n  <div class=\"container\" fxLayout=\"column\">\n    <strong>Inventory</strong>\n    <ul class=\"unequipped\">\n      <li class=\"item\" *ngFor=\"let item of (inventory$ | async)\" (click)=\"doEquip$.next({slot:item.type, item: item})\">\n        <span class=\"desc\">{{item.name}}</span>\n        <rpg-sprite class=\"icon\" [name]=\"item.icon\"></rpg-sprite>\n      </li>\n    </ul>\n  </div>\n\n</div>\n"

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"mat-elevation-z4\" *ngIf=\"open == true\" [@toolbar]=\"open\">\n  <h1 fxShow=\"false\" fxShow.gt-sm><a href=\"https://github.com/justindujardin/angular-rpg\" target=\"_blank\">RPG</a></h1>\n  <rpg-sprite [height]=\"32\" [width]=\"32\" name=\"longSword.png\"></rpg-sprite>\n  <span fxFlex></span>\n  <button md-button (click)=\"page = 'party'\" [ngClass]=\"{active: page == 'party'}\">Party</button>\n  <button md-button (click)=\"page = 'inventory'\" [ngClass]=\"{active: page == 'inventory'}\">Inventory</button>\n  <button md-button (click)=\"page = 'settings'\" [ngClass]=\"{active: page == 'settings'}\">Settings</button>\n</md-toolbar>\n\n<md-card class=\"mat-elevation-z3\" [@card]=\"open\" *ngIf=\"open == true\">\n  <party-inventory *ngIf=\"page == 'inventory'\"></party-inventory>\n\n  <md-card-title *ngIf=\"page == 'party'\">Party Gold: {{partyGold$ | async}}</md-card-title>\n  <md-card-content *ngIf=\"page == 'party'\"\n                   fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"space-around center\">\n    <player-card *ngFor=\"let member of party$ | async\" [model]=\"member\"></player-card>\n  </md-card-content>\n\n  <md-card-title *ngIf=\"page == 'settings'\">Game Save</md-card-title>\n  <md-card-actions *ngIf=\"page == 'settings'\">\n    <button md-button color=\"warn\" (click)=\"resetGame()\">Reset Game</button>\n    <button md-button (click)=\"saveGame()\">Save Game</button>\n  </md-card-actions>\n</md-card>\n<button md-fab color=\"accent\" (click)=\"open = !open\" [@fab]=\"open\">\n  <md-icon>{{open ? 'close' : 'menu'}}</md-icon>\n</button>\n"

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-card\"\n         *ngFor=\"let model of [model$ | async]\"\n         [class.dead]=\"model?.hp <= 0\"\n         fxLayout=\"column\"\n         fxLayoutAlign=\"space-between center\">\n  <h3 class=\"name\" [innerText]=\"model.name\"></h3>\n  <rpg-sprite class=\"image\" [name]=\"model.icon\" frame=\"7\" width=\"64\" height=\"72\"></rpg-sprite>\n  <player-stats [model]=\"model\"></player-stats>\n</section>\n"

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLevel$ | async\">Level {{(model$ | async)?.level}}</div>\n\n<section *ngIf=\"showHP$ | async\">\n  <div>HP {{(model$ | async)?.hp}} / {{(model$ | async)?.maxhp}}</div>\n  <md-progress-bar [value]=\"healthPercentage$ | async\"></md-progress-bar>\n</section>\n\n<section *ngIf=\"showExperience$ | async\">\n  <div>EXP {{(model$ | async)?.exp}} / {{nextLevelExp$ | async}}</div>\n  <md-progress-bar [value]=\"nextLevelPercentage$ | async\"></md-progress-bar>\n</section>\n\n<section *ngIf=\"showCombatStats$ | async\">\n  <div class=\"hero-stat\">Attack : {{attack$ | async}}</div>\n  <div class=\"hero-stat\">Defense : {{defense$ | async}}</div>\n  <div class=\"hero-stat\">Magic : {{magic$ | async}}</div>\n  <div class=\"hero-stat\">Speed : {{speed$ | async}}</div>\n</section>\n"

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "<div class=\"status\" *ngFor=\"let member of party$ | async\" [ngClass]=\"getMemberClass(member,combat?.focus)\">\n  <rpg-health-bar [model]=\"member\">\n  </rpg-health-bar>\n  <div class=\"text\">\n    <span class=\"name\">{{member.name}}</span>\n    <span class=\"hp\">HP {{member.hp}} / {{member.maxhp}}</span>\n  </div>\n</div>\n"

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = "<combat-camera-behavior></combat-camera-behavior>\n<combat-player\n  *ngFor=\"let p of (party$ | async); trackBy: combatTrackBy\"\n  [icon]=\"p.icon\"\n  [model]=\"p\"></combat-player>\n<combat-enemy\n  *ngFor=\"let e of (enemies$ | async); trackBy: combatTrackBy\"\n  [icon]=\"e.icon\"\n  [model]=\"e\"></combat-enemy>\n<ng-content></ng-content>\n"

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = "<canvas #combatCanvas>\n  Your browser doesn't support this.\n</canvas>\n\n<combat-damage *ngFor=\"let d of damages\"\n               [value]=\"d.value\"\n               [position]=\"d.position\"\n               [classes]=\"d.classes\"></combat-damage>\n\n<combat-map #map [scene]=\"scene\">\n  <combat-state-machine [scene]=\"scene\"\n                        [party]=\"map.party\"\n                        [enemies]=\"map.enemies\"\n                        [encounter]=\"map.encounter$ | async\"></combat-state-machine>\n\n</combat-map>\n<combat-hud [scene]=\"scene\"></combat-hud>\n"

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"row\" layout-padding class=\"dialog\" *ngIf=\"active$ | async\">\n  <rpg-sprite class=\"character\" [name]=\"icon$ | async\"></rpg-sprite>\n  <div flex class=\"body-text\">\n    <p [innerText]=\"title$ | async\"></p>\n    <span class=\"text\" [innerText]=\"text$ | async\"></span>\n  </div>\n  <button class=\"btn-close\" (click)=\"onClose.next($event)\">x</button>\n</div>\n"

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" class=\"store\" layout-padding *ngIf=\"active$ | async\">\n  <h1>{{actionVerb$ | async}} {{name$ | async}}</h1> <span>Gold: {{partyGold$ | async}}</span>\n\n  <div class=\"inventory\" layout-padding flex>\n    <ul *ngIf=\"isBuying$ | async\">\n      <li class=\"item\" *ngFor=\"let item of inventory$ | async\" (click)=\"_selected$.next(item)\" layout=\"row\">\n        <rpg-sprite width=\"32\" height=\"32\" class=\"icon\" [name]=\"item.icon\"></rpg-sprite>\n        <span flex class=\"item-name\" [innerText]=\"item.name\"></span>\n        <span class=\"item-price\" [innerText]=\"item.value\"></span>\n      </li>\n    </ul>\n\n    <ul *ngIf=\"isSelling$ | async\">\n      <li class=\"item\" *ngFor=\"let item of partyInventory$ | async\" (click)=\"_selected$.next(item)\" layout=\"row\">\n        <rpg-sprite width=\"32\" height=\"32\" class=\"icon\" [name]=\"item.icon\"></rpg-sprite>\n        <span flex class=\"item-name\" [innerText]=\"item.name\"></span>\n        <span class=\"item-price\" [innerText]=\"item.value\"></span>\n      </li>\n    </ul>\n    <ul *ngIf=\"selected$ | async\">\n      <li class=\"item selected\" layout=\"row\">\n        <rpg-sprite width=\"32\" height=\"32\" class=\"icon\" [name]=\"(selected$ | async)?.icon\"></rpg-sprite>\n        <span flex class=\"item-name\" [innerText]=\"(selected$ | async)?.name\"></span>\n        <span class=\"item-price\" [innerText]=\"(selected$ | async)?.value\"></span>\n      </li>\n    </ul>\n\n  </div>\n\n\n  <div class=\"prompt btn-group\" *ngIf=\"selected$ | async\">\n    <button (click)=\"_selected$.next(null)\">Back</button>\n    <button (click)=\"_onAction$.next()\" [innerText]=\"(selling$ | async)?'Sell':'Buy'\"></button>\n  </div>\n  <div class=\"prompt btn-group\" *ngIf=\"!(selected$ | async)\">\n    <button (click)=\"onClose.next($event)\">Done</button>\n    <button (click)=\"_onToggleAction$.next()\" [innerText]=\"(selling$ | async)?'Back':'Sell'\"></button>\n  </div>\n\n</div>\n"

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = "<div class=\"temple-view\" layout=\"column\" layout-padding *ngIf=\"active$ | async\">\n  <div class=\"header\" layout=\"row\" layout-align=\"center center\">\n    <rpg-sprite [name]=\"icon$ | async\"></rpg-sprite>\n    <h1>{{name$ | async}}</h1>\n  </div>\n\n  <div class=\"prompt\" flex>\n    <h2>It will cost you {{cost$ | async}} of your {{partyGold$ | async}} gold to recover here.</h2>\n\n    <p>Would you like to heal your party members?</p>\n  </div>\n  <div layout=\"row\" layout-padding>\n    <button flex=\"50\" (click)=\"_onRest$.next()\">Yes</button>\n    <button flex=\"50\" (click)=\"onClose.next($event)\">No</button>\n  </div>\n\n  <ul class=\"party\">\n    <li *ngFor=\"let hero of party$ | async\">\n      <h1>{{hero.name}}</h1>\n      <player-stats\n        [showLevel]=\"false\"\n        [showExperience]=\"false\"\n        [showCombatStats]=\"false\"\n        [model]=\"hero\"></player-stats>\n      <rpg-sprite class=\"image\" frame=\"7\" width=\"96\" height=\"96\" [name]=\"hero.icon\"></rpg-sprite>\n    </li>\n  </ul>\n</div>\n"

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<!-- TODO: Replace this mess with Material Portal components -->\n<portal-feature\n  [feature]=\"feature$ | async\"\n  #comp *ngIf=\"(type$ | async) ==='PortalFeatureComponent' && (enabled$ | async)\"></portal-feature>\n<dialog-feature\n  [feature]=\"feature$ | async\"\n  (onClose)=\"onClose.emit(featureQuery.first)\"\n  #comp *ngIf=\"(type$ | async) ==='DialogFeatureComponent' && (enabled$ | async)\"></dialog-feature>\n<temple-feature\n  [feature]=\"feature$ | async\"\n  (onClose)=\"onClose.emit(featureQuery.first)\"\n  #comp *ngIf=\"(type$ | async) ==='TempleFeatureComponent' && (enabled$ | async)\"></temple-feature>\n<store-feature\n  [feature]=\"feature$ | async\"\n  (onClose)=\"onClose.emit(featureQuery.first)\"\n  #comp *ngIf=\"(type$ | async) ==='StoreFeatureComponent' && (enabled$ | async)\"></store-feature>\n<ship-feature\n  [feature]=\"feature$ | async\"\n  #comp *ngIf=\"(type$ | async) ==='ShipFeatureComponent' && (enabled$ | async)\"></ship-feature>\n<treasure-feature\n  [feature]=\"feature$ | async\"\n  #comp *ngIf=\"(type$ | async) ==='TreasureFeatureComponent' && (enabled$ | async)\"></treasure-feature>\n<combat-feature\n  [feature]=\"feature$ | async\"\n  #comp *ngIf=\"(type$ | async) ==='CombatFeatureComponent' && (enabled$ | async)\"></combat-feature>\n"

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = "<map-feature-input-behavior [scene]=\"scene\" #input></map-feature-input-behavior>\n<map-feature *ngFor=\"let feature of activeFeatures$ | async\"\n             [tiledMap]=\"resource$ | async\"\n             [scene]=\"scene\"\n             (onClose)=\"player.escapeFeature()\"\n             [feature]=\"feature\"></map-feature>\n<world-player\n  #player\n  *ngIf=\"notTraveling$ | async\"\n  [map]=\"self\"\n  [scene]=\"scene\"\n  [point]=\"renderPoint$ | async\"\n  [model]=\"partyLeader$ | async\"></world-player>\n<ng-content></ng-content>\n"

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = "<party-menu></party-menu>\n\n<world-map #map [scene]=\"scene\"></world-map>\n\n<canvas #worldCanvas [hidden]=\"loadingService.loading$ | async\">\n  Your browser doesn't support this.\n</canvas>\n"

/***/ }),
/* 327 */,
/* 328 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 328;


/***/ }),
/* 329 */,
/* 330 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(291);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(292);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(293);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(294);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(295);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(296);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(297);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(298);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(299);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(300);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(301);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(302);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(303);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(304);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(305);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(306);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 346 */,
/* 347 */,
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(133);

/***/ }),
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(193);

/***/ }),
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(402);

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(407);

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(413);

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(414);

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(420);

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(421);

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(433);

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(448);

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(454);

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(456);

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(463);

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(466);

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(471);

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(473);

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(478);

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(487);

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(498);

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(502);

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(509);

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(514);

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(516);

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(524);

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(598);

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(619);

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(90);

/***/ }),
/* 512 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sw_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_imports__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_environment__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app__ = __webpack_require__(202);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;


/*
 * Angular bootstraping
 */



/*
 * AppComponent Module
 * our top level module that holds all of our map
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_3__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["bootloader"])(main);


/***/ })
],[512]);
//# sourceMappingURL=main.bundle.js.map
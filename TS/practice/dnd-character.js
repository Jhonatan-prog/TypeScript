"use strict";
exports.__esModule = true;
exports.DnDCharacter = void 0;
var DnDCharacter = /** @class */ (function () {
    function DnDCharacter() {
        // Points
        this.hitpoints = 10 + DnDCharacter.getModifierFor(DnDCharacter.generateAbilityScore());
        // Skills
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
    }
    DnDCharacter.generateAbilityScore = function () {
        var _this = this;
        var character = {
            strength: this.strength,
            dexterity: this.dexterity,
            constitution: this.constitution,
            intelligence: this.intelligence,
            wisdom: this.wisdom,
            charisma: this.charisma
        };
        Object.keys(character).forEach(function (ability) {
            var THROWS = [];
            for (var i = 0; i < 4; i++) {
                THROWS.push(Math.floor(Math.random() * (7 - 1)) + 1);
            }
            // sum values
            var value = 0;
            THROWS.splice(THROWS.indexOf(Math.min.apply(Math, THROWS)), 1);
            for (var indx in THROWS) {
                value += THROWS[indx];
            }
            return eval("".concat(_this, ".").concat(character[ability] = value));
        });
    };
    DnDCharacter.setter = function () {
    };
    DnDCharacter.getModifierFor = function (abilityValue) {
        return Math.floor((abilityValue - 10) / 2);
    };
    return DnDCharacter;
}());
exports.DnDCharacter = DnDCharacter;
const character = new DnDCharacter()
console.log(character.hitpoints)
console.log(character.strength, character.charisma)

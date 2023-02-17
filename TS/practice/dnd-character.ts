export class DnDCharacter {
    hitpoints: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    // static ones
    static hitpoints: number;
    static strength: number;
    static dexterity: number;
    static constitution: number;
    static intelligence: number;
    static wisdom: number;
    static charisma: number;
    
    constructor() {
        // Points
        this.hitpoints = 10 + DnDCharacter.getModifierFor(DnDCharacter.generateAbilityScore())

        // Skills
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
    }

    public static generateAbilityScore(): number {
        const character: {[key:string]: number} = {
            strength: this.strength,
            dexterity: this.dexterity,
            constitution: this.constitution,
            intelligence: this.intelligence,
            wisdom: this.wisdom,
            charisma: this.charisma
        }

        Object.keys(character).forEach(ability => {
            const THROWS: Array<number> = [];
            for (let i = 0; i < 4; i++) {
                THROWS.push(Math.floor(Math.random() * (7 - 1)) + 1)
            }
            // sum values
            let value = 0;
            THROWS.splice(THROWS.indexOf(Math.min(...THROWS)), 1)
            for (let indx in THROWS) {
                value += THROWS[indx]
            }
            return eval(`${this}.${character[ability] = value}`);
        })

        this.strength = character['strength']
        this.dexterity = character['dexterity']
        this.intelligence = character['intelligence']
        this.wisdom = character['wisdom']
        this.charisma = character['charisma']

        return this.constitution = character['constitution'];
    }

    public static setter() {

    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2)
    }
}

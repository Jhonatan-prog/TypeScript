export function age(planet: string, seconds: number): number {
    // in seconds
    const PLANETS_ORBITAL_PERIOD: 
    {[index: string]: number} = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 31557600,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    }
    let number: number;
    planet === 'earth'
        ? number = (seconds / PLANETS_ORBITAL_PERIOD[planet])
        : number = (seconds / PLANETS_ORBITAL_PERIOD[planet]) / 31557600;

    return Number(number.toFixed(2));
}

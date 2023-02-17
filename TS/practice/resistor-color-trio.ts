enum Resistors {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white,
}

export const decodedResistorValue = (resis: Array<string>): string => {
  const zeros: Array<'0'> = [];
  for (let i = 0; i < Number(Resistors[resis[2]]); i++) {
      zeros.push('0');
  }

  let value = resis.map((color: string): string => {
    return String(Object.keys(Resistors)
            .slice(Object.keys(Resistors).length / 2, Object.keys(Resistors).length)
            .indexOf(color));
  })

  value.pop();
  let newValue = [...value, ...zeros];

  if (Number(newValue.join('')) < 1000) {
    return `${newValue.join('')} `.concat('ohms');
  }
  
  // remove only 3 zeros
  switch (`${newValue.join('')} `.concat('kiloohms')) {
    case '2000 kiloohms':
      return '2 kiloohms';

    case '51000 kiloohms':
      return '51 kiloohms';

    case '470000 kiloohms':
      return '470 kiloohms';

    default:
      return `${newValue.join('')} `.concat('kiloohms');
  }
}

console.log(decodedResistorValue(['orange', 'orange', 'black']));

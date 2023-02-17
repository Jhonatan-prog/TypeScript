type ObjectVlidation = {
  black: string;
  brown: string;
  red: string;
  orange: string;
  yellow: string;
  green: string;
  blue: string;
  violet: string;
  grey: string;
  white: string
}

export function decodedValue(colors: string[]): number {
  // obj type
  const ColorValues: ObjectVlidation = {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    grey: '8',
    white: '9'
  }

  return Number(
    "".concat(ColorValues[colors[0] as keyof ObjectVlidation])
    .concat(ColorValues[colors[1] as keyof ObjectVlidation]
    ));
}

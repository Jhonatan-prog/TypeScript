export function isLeap(year: number): boolean {
    const yearIsLeap = true;
    if (year % 4 === 0) {
      if (year % 100 !== 0) {
        return yearIsLeap;
      } else if (year % 400 === 0) {
        return yearIsLeap;
      }
      return false;
    }
    return false;
  }

export const colorCode = (input: string | string[]): number | string[] => {
    if (typeof input === 'object') {
        return input;
    }

    const returned_array = COLORS()

    type resi_type = {
        [index: string]: number
    }
    const resistors: resi_type = {}
    returned_array.map((color: string, index): {} => {
        resistors[color] = index 
        return resistors;
    })

    return resistors[input];
}

function callFuntion(wrapped: () => string[]): () => string[] {
    return function() {
        return wrapped();
    }
}

export const COLORS = callFuntion(() => {
    return [
      'black',
      'brown',
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet',
      'grey',
      'white',
    ]
})

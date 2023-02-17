export function toRna(DNA: string): string {
    type stringOnly = {
        [index:string]: string
    }
    const pairs: stringOnly = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    }
    
    try {
        let RNA: Array<string> = [];
        if (DNA.split('').length > 1) {
            const DNAList = DNA.split('')
            DNAList.forEach((nucleotide) => {
                objDoesNotIncludeProp(pairs, nucleotide)
                RNA.push(pairs[nucleotide])
            })
            return RNA.join('');
        }
        
        objDoesNotIncludeProp(pairs, DNA);
        return pairs[DNA];
    } catch(error: any) {
        return error.message
    }

    // reusebale func
    function objDoesNotIncludeProp(
        obj: stringOnly, 
        prop: string, 
        message: string = 'Invalid input DNA.') {
        if (!obj.hasOwnProperty(prop)) throw new Error(message);
    }
}

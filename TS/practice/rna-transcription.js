"use strict";
exports.__esModule = true;
exports.toRna = void 0;
function toRna(DNA) {
    var pairs = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };
    try {
        var RNA_1 = [];
        if (DNA.split('').length > 1) {
            var DNAList = DNA.split('');
            DNAList.forEach(function (nucleotide) {
                objDoesNotIncludeProp(pairs, nucleotide);
                RNA_1.push(pairs[nucleotide]);
            });
            return RNA_1.join('');
        }
        objDoesNotIncludeProp(pairs, DNA);
        return pairs[DNA];
    }
    catch (error) {
        return error.message;
    }
    // reusebale func
    function objDoesNotIncludeProp(obj, prop, message) {
        if (message === void 0) { message = 'Invalid input DNA.'; }
        if (!obj.hasOwnProperty(prop))
            throw new Error(message);
    }
}
exports.toRna = toRna;
console.log(toRna('A'))
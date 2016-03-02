// complete the function
"use strict";
function vowelsAndConsonants(s) {
    const vocals = ['a', 'e', 'i', 'o' , 'u'];
    let vocalsInString = [], consonantsInString = [];
    for (let letter of s) {
        let isVocal = vocals.indexOf(letter) != -1;
        if (isVocal) {
            vocalsInString.push(letter);
        } else {
            consonantsInString.push(letter);
        }
    }
    for (let vocal of vocalsInString) {
        console.log(vocal);
    }
    for (let consonant of consonantsInString) {
        console.log(consonant);
    }
}
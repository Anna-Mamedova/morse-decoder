const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let letters = []
    let newLetters = []
    let morse = []
    for(let i = 0; i < expr.length; i += 10){
        letters.push(expr.slice(i, i + 10))
    }
    for(let i = 0; i < letters.length; i++){
        let letter = letters[i]
        for(let j = 0; j < 10; j++){
            if(letter[j] === '*'){
                newLetters.push('**********')
                break
            }
            if(letter[j] === '1'){
                newLetters.push(letter.slice(j))
                break
            }
        }
    }
    for(let i = 0; i < newLetters.length; i++){
        for(let j = 0; j <= newLetters[i].length; j += 2){
            if(newLetters[i][j] === '*'){
                morse.push('**********')
                j += 8
            }
            if(j === newLetters[i].length && i < newLetters.length - 1){
                morse.push(' ')
            }
            if(newLetters[i][j] + newLetters[i][j + 1] === '10'){
                morse.push('.')
            }
            if(newLetters[i][j] + newLetters[i][j + 1] === '11'){
                morse.push('-')
            }
        
        }
        
    }
    morse = morse.join('').split(' ')
    let result = ''
    for(let i = 0; i < morse.length; i++){
        if(morse[i].includes('*')){
            result += ' '
        }
        for(let j = 0; j < 36; j++){
            if(Object.keys(MORSE_TABLE)[j] === morse[i]){
                result += Object.values(MORSE_TABLE)[j]
            }
        }
    }

    return result
}

module.exports = {
    decode
}
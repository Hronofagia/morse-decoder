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


const obj = {
    '00': '',
    '10': '.',
    '11': '-',    
}

function decode(expr) {
    let result = ''
    for (let i=0; i < expr.length; i += 10) {
        const firstSlice = expr.slice(i, i+10)
        if (firstSlice === '**********') {
            result += ' '
        } else {
           let subresult = ''
                for (let j=0; j < firstSlice.length; j +=2) {                
                    const secondSlice = firstSlice.slice(j, j+2)
                    const twoSubols = obj[secondSlice] 
                    subresult += twoSubols
                }
                result += MORSE_TABLE[subresult]
            }     
    }
    return result
}

module.exports = {
    decode
}
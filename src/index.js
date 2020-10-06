const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    return expr.split("**********").map(i => {
        let word = ""
        
        while (i.length > 0) {
            let key = i.slice(0,10)

            let convert = Number.parseInt(key).toString()

            let str = "";
            while (convert.length > 0) {
                str += convert.slice(0, 2) == "10" ? "." : "-"
                convert = convert.substring(2)
            }
            word += MORSE_TABLE[str]
            i = i.substring(10)
        }

        return word
    }).join(" ")


/*

    expr = expr.split("   ");
    var result = "";
    expr.map(item => {
        item = item.split(" ");

        for (let a = 0; a < item.length; a++) {
            if (item[a] != "") {
                result += MORSE_TABLE[item[a]];
            }
        }

        if (i < (expr.length - 1)) {
            result += " ";
        }

    })

    for (var i = 0; i < expr.length; i++) {
        

    }

    return result.trim();

    // write your solution here*/
}

module.exports = {
    decode
}
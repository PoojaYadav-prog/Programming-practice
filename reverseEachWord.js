var string = 'Welcome to this Javascript Guide!'
let newStr =  string.split('').reverse().join('')
let finalStr = newStr.split(' ').reverse().join(' ')


var reverseEntireSentence = reverseBySeparator(string, "");

var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");


function reverseBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator);
}

console.log(newStr)
console.log(finalStr)
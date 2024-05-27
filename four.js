function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
console.log(capitalizeWords("i love cooking"));

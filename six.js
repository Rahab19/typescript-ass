function countVowels(words) {
    var count = 0;
    var vowels = "aeiouAEIOU";
    for (var i = 0; i < words.length; i++) {
        if (vowels.indexOf(words[i]) !== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Rahab"));

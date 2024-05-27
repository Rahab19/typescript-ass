function countVowels(words: string): number {
    let count = 0;
    const vowels: string = "aeiouAEIOU";
    for (let i = 0; i < words.length; i++) {
        if (vowels.indexOf(words[i])!== -1) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Rahab"));
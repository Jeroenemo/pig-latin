// Describe: `pigLatin()`
// Test: "It will add 'way' to the end of words that begin with a vowel"
// Expect(pigLatin("a")).toEqual("away");

// Test: "It will move all of the first consecutive consonants to the end, and add 'ay'."
// Expect(pigLatin("tie").toEqual("ietay"));

// Test: "It will move 'qu' to the end along with consonants, and add 'ay'."
// Expect(pigLatin("squeal").toEqual("ealsquay"));

// Test: "It will treat 'y' as a consonant, and move it to the end and add 'ay'"
// Expect(pigLatin("yellow").toEqual("ellowyay"));



function pigLatin(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.includes(word[0])) {
    return word + "way"
  } else if (!vowels.includes(word[0])) {
    for (let index = 0; index < word.length; index +=1) {
      if (vowels.includes(word[index])) {
        return word.slice(index, word.length-1) + word.slice(0,index) + "ay";
      }
    }
  } else {
    return word
  }
}

console.log(pigLatin("away"))

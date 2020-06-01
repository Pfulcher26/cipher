$(document).ready(function() {
  const sentence = prompt("Enter a sentence:");
  console.log(sentence);

  function firstLastCap (sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length-1).toUpperCase();
  }
  console.log(firstLastCap(sentence));
  
  function reverseOrder (letters) {
    return letters.charAt(1) + letters.charAt(0);
  }
  console.log(reverseOrder (firstLastCap(sentence)));

  function addReverseToEnd (sentence) {
    return sentence + reverseOrder (firstLastCap(sentence));
  }
  console.log(addReverseToEnd(sentence));

  function countLetterDivideByTwo (sentence) {
        return sentence.charAt(Math.floor(sentence.length / 2)) + addReverseToEnd(sentence);
  }
  console.log(sentence.charAt(Math.floor(sentence.length / 2)) + addReverseToEnd(sentence));

  function reverse (sentence) {
    return countLetterDivideByTwo(sentence).split("").reverse().join("");
  }
  console.log(countLetterDivideByTwo(sentence).split("").reverse().join(""));

  jQuery("img.left").click(function() {
    alert(sentence);
  });

  jQuery("img.right").click(function() {
    alert(reverse(sentence));
  });
});
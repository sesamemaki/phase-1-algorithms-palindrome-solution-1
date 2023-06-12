function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("");
  return word === reversed;
}

/* 
  Add your pseudocode here
  
  reverse the input string
    if the reversed string is the same as the input
      return true
    else
      return false

*/

/*
  Add written explanation of your solution here
  First word is needed to be split to its letter
  Reversed and order in the same order
  Check word is same previous one
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");
}

module.exports = isPalindrome;

function isPalindrome(word) {
    // Convert the word to lowercase for case-insensitive comparison
    word = word.toLowerCase();
    // Get the length of the word
    var len = word.length;
    // Loop through the word and compare characters from start and end
    for (var i = 0; i < Math.floor(len / 2); i++) {
        if (word[i] !== word[len - 1 - i]) {
            // If characters don't match, it's not a palindrome
            return false;
        }
    }
    // If all characters match, it's a palindrome
    return true;
}

// Test cases
var words = ["gag", "kayak", "php", "radar", "hello"];

words.forEach(function(word) {
    if (isPalindrome(word)) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }
});
//constructor for basic flashcard
function BasicCard(front, back) {
  this.front = front;
  this.back = back;
  this.displayCard = function() {
    console.log("Front: " + front);
    console.log("Back: " + back);
  }
}//close BasicCard constructor

//constructor for close flashcard
function ClozeCard(fullText, cloze, partial) {
  if (fullText.search(cloze) !== -1) {
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = this.fullText.split(this.cloze).join("...");
    this.displayCard = function() {
      console.log("Cloze: " + cloze);
      console.log("Partial: " + partial());
      console.log("Full Text: " + fullText);
    }
    //if it can not find the cloze in the full text. 
  } else {
    return "hmm... I cant seem to find that in the text - remember this has to be an exact match! Try again.";
  }
}//closes ClozeCard constructor

//
// Everything below is to test out the constructors
//    examples from the homework instructions
//

var firstPresident = new BasicCard(
  "Who was the first president of the United States?", "George Washington");

// Should return: "Who was the first president of the United States?"
console.log(firstPresident.front);

// Should return: "George Washington"
console.log(firstPresident.back);

var firstPresidentCloze = new ClozeCard(
  "George Washington was the first president of the United States.", "George Washington");

// Should return: "George Washington"
console.log(firstPresidentCloze.cloze);

// Should return: " ... was the first president of the United States."
console.log(firstPresidentCloze.partial);

// Should return: "George Washington was the first president of the United States."
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

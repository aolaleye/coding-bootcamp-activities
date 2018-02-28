//mystery word, clue
var words = {
    word1: ['titanic', 'An iceberg played a big part in this'],
    word2: ['door', 'Where Leo was at the end'],
    word3: ['painting', 'Rose posed for this']
}
var checker = {
    alreadyGuessed: [],
    correctLetters: []
}
var numberOfGuesses = 10;
var wins = 0;
var userWon = true;
var userLost = false;

$(".guesses-remaining").append(numberOfGuesses);
$(".already-guessed").append(checker.alreadyGuessed);
$(".wins").append(wins);

//gives clue for word
function giveClue(ObjectKey) {
    $(".clue").append(words[ObjectKey][1]);
}
giveClue("word1");

//creates list item for each letter of the word
function createListItem(ObjectKey) {
    for(i = 0; i < words[ObjectKey][0].length; i++) {
    $(".letter-guesses").append('<li id="' + i + '" style= "display: inline;"> _ </li>');
    }
}
createListItem("word1");

//on user key press
document.onkeyup = function(event) {
    var userGuess = event.key;
    
    function replaceLetter(ObjectKey) {
        for(i = 0; i < words[ObjectKey][0].length; i++) {
            if(userGuess === words[ObjectKey][0][i] && numberOfGuesses > 0) {
                $("#" + i + "").empty().append(' ' + userGuess + ' ');
                $(".guesses-remaining").empty().append(numberOfGuesses);
                if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
                    checker.alreadyGuessed.push(userGuess);
                    $(".already-guessed").empty().append(checker.alreadyGuessed);
                    numberOfGuesses -= 1;
                }
                if (checker.correctLetters.includes(userGuess) === false && numberOfGuesses > 0) {
                    checker.correctLetters.push(userGuess);
                    console.log(checker.correctLetters);
                }
            } else if ((userGuess !== words[ObjectKey][0][i]) && numberOfGuesses > 0) {
                $(".guesses-remaining").empty().append(numberOfGuesses);
                if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
                    checker.alreadyGuessed.push(userGuess);
                    $(".already-guessed").empty().append(checker.alreadyGuessed);
                    numberOfGuesses -= 1;
                }
            }
        }
    }
    replaceLetter("word1");

    if (checker.correctLetters.length === 5 && userWon === false && userLost === false) {
        userWon = true;
        wins += 1; 
    } else if (numberOfGuesses === 0) {
        userLost = true;
    }


} //<--- end document.onkeyup


// // --- Game 2 ---
// giveClue("word1");
// createListItem("word1");
// document.onkeyup = function(event) {
//     var userGuess = event.key;
    
//     function replaceLetter(ObjectKey) {
//         for(i = 0; i < words[ObjectKey][0].length; i++) {
//             if(userGuess === words[ObjectKey][0][i] && numberOfGuesses > 0) {
//                 $("#" + i + "").empty().append(' ' + userGuess + ' ');
//                 $(".guesses-remaining").empty().append(numberOfGuesses);
//                 if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.alreadyGuessed.push(userGuess);
//                     $(".already-guessed").empty().append(checker.alreadyGuessed);
//                     numberOfGuesses -= 1;
//                 }
//                 if (checker.correctLetters.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.correctLetters.push(userGuess);
//                     console.log(checker.correctLetters);
//                 }
//             } else if ((userGuess !== words[ObjectKey][0][i]) && numberOfGuesses > 0) {
//                 $(".guesses-remaining").empty().append(numberOfGuesses);
//                 if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.alreadyGuessed.push(userGuess);
//                     $(".already-guessed").empty().append(checker.alreadyGuessed);
//                     numberOfGuesses -= 1;
//                 }
//             }
//         }
//     }
//     replaceLetter("word2");
    
//     winOrLose();


// } //<--- end document.onkeyup


// // --- Game 3 ---
// giveClue("word1");
// createListItem("word1");
// document.onkeyup = function(event) {
//     var userGuess = event.key;
    
//     function replaceLetter(ObjectKey) {
//         for(i = 0; i < words[ObjectKey][0].length; i++) {
//             if(userGuess === words[ObjectKey][0][i] && numberOfGuesses > 0) {
//                 $("#" + i + "").empty().append(' ' + userGuess + ' ');
//                 $(".guesses-remaining").empty().append(numberOfGuesses);
//                 if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.alreadyGuessed.push(userGuess);
//                     $(".already-guessed").empty().append(checker.alreadyGuessed);
//                     numberOfGuesses -= 1;
//                 }
//                 if (checker.correctLetters.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.correctLetters.push(userGuess);
//                     console.log(checker.correctLetters);
//                 }
//             } else if ((userGuess !== words[ObjectKey][0][i]) && numberOfGuesses > 0) {
//                 $(".guesses-remaining").empty().append(numberOfGuesses);
//                 if (checker.alreadyGuessed.includes(userGuess) === false && numberOfGuesses > 0) {
//                     checker.alreadyGuessed.push(userGuess);
//                     $(".already-guessed").empty().append(checker.alreadyGuessed);
//                     numberOfGuesses -= 1;
//                 }
//             }
//         }
//     }
//     replaceLetter("word3");
    
//     winOrLose();


// } //<--- end document.onkeyup
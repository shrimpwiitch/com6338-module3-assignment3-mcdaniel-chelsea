var questionsArr = [
    {
        question: 'Libraries are still relevant in the modern day',
        answer: true
    },
    {
        question: 'The sun is a star',
        answer: true
    },
    {
        question: 'My fingers are worms',
        answer: true
    },
    {
        question: 'brain work good',
        answer: false
    },
    {
        question: 'A hee mee bee goo ba wa ba',
        answer: true
    }
];
function runQuiz () {
    var score =0;

    for (var i=0; i< questionsArr.length; i++){
        var userAnswer = confirm(questionsArr[i].question);
        if (userAnswer === questionsArr[i].answer){
            score++;
        }
    }
    var percent = Math.round((score / questionsArr.length) * 100);
    alert("You scored: " + percent + "%");
}

const questions = [
    {
        'que': "Which of the following is a markup language?",
        'a': "HTML",
        'b': "CSS",
        'c': "JavaScript",
        'correct': "a"
    },
    {
        'que': "What year was Javascript launched?",
        'a': "1996",
        'b': "1995",
        'c': "1994",
        'd': "none of the above",
        'correct': "b"
    },
    {
        'que': "What does CSS stand for?",
        'a': "Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c': "Jason object Notation",
        'd': "none of the above",
        'correct': "b",
    },
    
    {
        'que' : "What is programming?",

        'a' : "Writing essays",
        'b' : " Giving instructions to a computer to perform tasks",
        'c' : "Cooking recipes",
        'd' : "Painting pictures",
        'correct' : "b",
    },

    {
      'que' : " What is the role of a compiler in programming?",

    'a' : "Executes the program",
    'b' :"Translates the program code into machine code",
    'c' : "Writes the program",
    'd' : "Debugs the program",
    'correct' : "b",
    },

    {
    
    'que' : "What is the purpose of a variable in programming?",

    'a' : "To store and manage data",
    'b' : "To display text on the screen",
    'c' : "To create loops",
    'd' : " To design user interfaces",
    'correct' : "a",        
    }
    
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d || ""; // Added check for undefined "d"
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
};

const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3>Thank you for Attempt  the quiz</h3>
    <h2>${right} / ${total} are correct</h2>
    </div> 
    `;
};

loadQuestion();

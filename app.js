const quizData = [
    {
        question: "Which programming language is often used for creating Android applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "What is the primary language for developing iOS apps?",
        a: "Java",
        b: "C++",
        c: "Swift",
        d: "Python",
        correct: "c"
    },
    {
        question: "Which language is commonly used for game development?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "b"
    },
    {
        question: "What is the main language for backend web development?",
        a: "Java",
        b: "C#",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is frequently used for data analysis and machine learning?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What language is commonly used for scripting in web development?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which language is primarily used for building scalable and high-performance systems?",
        a: "Java",
        b: "C++",
        c: "Go",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What is the language often used for prototyping and quick development?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is associated with web development on the server side?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "a"
    },
    {
        question: "What language is widely used for developing web applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which language is essential for building interactive and dynamic web pages?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What language is typically used for system administration and automation?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is widely adopted for web scraping and data extraction?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What is the language primarily used for blockchain development?",
        a: "Java",
        b: "C++",
        c: "Solidity",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is commonly used for building cross-platform mobile applications?",
        a: "Java",
        b: "C++",
        c: "React Native",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What is the primary language for developing Microsoft Windows applications?",
        a: "Java",
        b: "C++",
        c: "C#",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is often used for scientific computing and numerical analysis?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What language is typically used for building RESTful APIs?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which language is widely employed for developing desktop GUI applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "C#",
        correct: "d"
    },
    {
        question: "What language is commonly used for natural language processing (NLP)?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "Which language is often used for building scalable and distributed systems?",
        a: "Java",
        b: "C++",
        c: "Scala",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What language is commonly used for game scripting and automation?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "Lua",
        correct: "d"
    },
    {
        question: "Which language is often used for developing enterprise-level applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "C#",
        correct: "d"
    },
    {
        question: "What language is primarily used for building microservices?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "Go",
        correct: "d"
    },
    {
        question: "Which language is associated with functional programming and data processing?",
        a: "Java",
        b: "C++",
        c: "Scala",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What is the main language for building machine learning models?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "R",
        correct: "c"
    },
    {
        question: "Which language is commonly used for building chatbots and AI applications?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    },
    {
        question: "What language is often used for developing browser extensions?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Which language is widely used for backend scripting in web development?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "c"
    }
];

const quiz = document.querySelector('#quiz')
const ans = document.querySelectorAll('.ans');
const questions = document.querySelector('#question')

const a_text =document.querySelector('#a_text')
const b_text =document.querySelector('#b_text')
const c_text =document.querySelector('#c_text')
const d_text =document.querySelector('#d_text')

const btn = document.querySelector('button');

let currentQuiz = 0;
let score = 0

loadquiz()

function loadquiz(){
    deselectAns()

    const currentquizData = quizData[currentQuiz]
    questions.innerText = currentquizData.question;
    a_text.innerText = currentquizData.a
    b_text.innerText = currentquizData.b
    c_text.innerText = currentquizData.c
    d_text.innerText = currentquizData.d
}

function deselectAns(){
    ans.forEach(ans => ans.checked = false)
}

function getselected(){
    let answer
    ans.forEach(ans => {
        if(ans.checked){
            answer = ans.id
        }
    })
    return answer
}


btn.addEventListener('click' ,function(){
    const answer = getselected()
    if(answer === quizData[currentQuiz].correct){
        score++
    }
    currentQuiz ++
    if(currentQuiz <quizData.length){
        loadquiz()
    }
    else{
        quiz.innerHTML = `
        <h2> You Ans Corrent At ${score}/${quizData.length} Questions Correct</h2>
        <button onclick = "location.reload()">Reload</button>
        `
    }
})


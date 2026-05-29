// script.js

let questions = [

    {
        question: "1. What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "2. Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: "CSS"
    },

    {
        question: "3. Which language is used for website functionality?",
        options: ["Java", "Python", "JavaScript", "C"],
        answer: "JavaScript"
    },

    {
        question: "4. Which tag is used for heading in HTML?",
        options: ["<head>", "<h1>", "<p>", "<title>"],
        answer: "<h1>"
    },

    {
        question: "5. CSS stands for?",
        options: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        question: "6. JavaScript is a ______ language.",
        options: ["Programming", "Styling", "Database", "Markup"],
        answer: "Programming"
    },

    {
        question: "7. Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!-- -->", "**"],
        answer: "//"
    },

    {
        question: "8. Which HTML tag is used to create a button?",
        options: ["<btn>", "<button>", "<click>", "<input>"],
        answer: "<button>"
    },

    {
        question: "9. Which company developed JavaScript?",
        options: ["Google", "Netscape", "Microsoft", "Apple"],
        answer: "Netscape"
    },

    {
        question: "10. Which CSS property changes text color?",
        options: ["background", "font-size", "color", "border"],
        answer: "color"
    }

];

let currentQuestion = 0;

let score = 0;

let studentName = "";

let rollNo = "";

let questionElement = document.getElementById("question");

let optionButtons = document.getElementsByClassName("option-btn");

/* Start Quiz */

function startQuiz(){

    studentName = document.getElementById("name").value;

    rollNo = document.getElementById("rollno").value;

    if(studentName == "" || rollNo == ""){

        alert("Please enter your details");

        return;
    }

    document.getElementById("start-page").classList.add("hide");

    document.getElementById("quiz-container").classList.remove("hide");

    document.getElementById("student-info").innerText =
        "Name: " + studentName + " | Roll No: " + rollNo;

    loadQuestion();
}

/* Load Question */

function loadQuestion(){

    let q = questions[currentQuestion];

    questionElement.innerText = q.question;

    for(let i = 0; i < optionButtons.length; i++){

        optionButtons[i].innerText = q.options[i];

        optionButtons[i].disabled = false;

        optionButtons[i].style.background = "#2575fc";
    }
}

/* Check Answer */

function checkAnswer(button){

    let selectedAnswer = button.innerText;

    if(selectedAnswer == questions[currentQuestion].answer){

        score++;

        button.style.background = "green";
    }
    else{

        button.style.background = "red";
    }

    for(let i = 0; i < optionButtons.length; i++){

        optionButtons[i].disabled = true;
    }
}

/* Next Question */

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        loadQuestion();
    }
    else{

        showResult();
    }
}

/* Show Result */

function showResult(){

    document.getElementById("quiz-container").classList.add("hide");

    document.getElementById("result-box").classList.remove("hide");

    document.getElementById("final-name").innerText =
        "Student Name: " + studentName;

    document.getElementById("score").innerText =
        "Your Score: " + score + " / 10";
}

/* Restart Quiz */

function restartQuiz(){

    currentQuestion = 0;

    score = 0;

    document.getElementById("result-box").classList.add("hide");

    document.getElementById("start-page").classList.remove("hide");

    document.getElementById("name").value = "";

    document.getElementById("rollno").value = "";
}
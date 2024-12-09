const emails = [
    { src: "email1.jpg", answer: "scam" },
    { src: "email2.jpg", answer: "legit" },
    { src: "email3.jpg", answer: "scam" },
    { src: "email4.jpg", answer: "legit" },
    { src: "email5.jpg", answer: "scam" }
];

let currentIndex = 0;
let score = 0;

function checkAnswer(userAnswer) {
    if (userAnswer === emails[currentIndex].answer) {
        score++;
    }
    currentIndex++;
    if (currentIndex < emails.length) {
        document.getElementById("email-image").src = emails[currentIndex].src;
    } else {
        document.getElementById("quiz").innerHTML = `
            <h1>Quiz Complete!</h1>
            <p>Your Score: ${score}/${emails.length}</p>
            <p>Tips: Always check the sender's address, grammar mistakes, and unexpected links.</p>
        `;
    }
}
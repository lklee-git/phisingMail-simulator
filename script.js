const emails = [
    { src: "assets/email1.jpg", answer: "scam" }, //By Isochrone, Wikimedia Foundation, Philip Metschan - Own work, Wikipedia-puzzleglobe-V2 back.png, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=151608495
    { src: "assets/email2.png", answer: "legit" },
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
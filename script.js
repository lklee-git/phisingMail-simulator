document.addEventListener("DOMContentLoaded", function() {
    const emails = [
        { src: "assets/email1.jpg", answer: "scam" },
        { src: "assets/email2.png", answer: "scam" },
        { src: "assets/email3.png", answer: "scam" },
        { src: "assets/email4.png", answer: "scam" },
        { src: "assets/email5.png", answer: "legit" }
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
                <a href = "https://www.oesterreich.gv.at/themen/onlinesicherheit_internet_und_neue_medien/internet_und_handy___sicher_durch_die_digitale_welt/3/2/2/Seite.1720520.html">More info here (Official ressources)</p>
            `;
        }
    }

    window.checkAnswer = checkAnswer;
});
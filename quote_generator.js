const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "The purpose of our lives is to be happy. — Dalai Lama",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
    "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford"
];

const quoteText = document.getElementById("quoteText");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generateRandomQuote);

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

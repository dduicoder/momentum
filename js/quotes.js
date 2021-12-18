const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "If you know the enemy and know yourself you need not fear the results of a hundred battles.",
        author: "Sun Tzu",
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa",
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        author: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Positive anything is better than negative nothing.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Miracles happen to those who believe in them.",
        author: "Bernhard Berenson",
    },
    {
        quote: "Be positive. Be true. Be kind.",
        author: "Roy T. Bennett",
    },
    {
        quote: "You cannot have a positive life and a negative mind.",
        author: "Joyce Meyer",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
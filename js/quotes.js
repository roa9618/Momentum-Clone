const quotes = [
  {
    quote: "Whoever ceases to be a student has never been a student.",
    author: "George Iles",
  },
  {
    quote: "If you don't risk anything you risk even more.",
    author: "Erica Jong",
  },
  {
    quote: "Only passions, great passions, can elevate the soul to great things.",
    author: "Denis Diderot",
  },
  {
    quote: "Self-confidence is the first requisite to great undertakings.",
    author: "Samuel Johnson",
  },
  {
    quote: "It's choice - not chance - that determines your destiny.",
    author: "Jean Nidetch",
  },
  {
    quote: "A goal without a plan is just a wish.",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
    author: "Michael Flatley",
  },
  {
    quote: "Do not turn back when you are just at the goal.",
    author: "Publilius Syrus",
  },
  {
    quote: "Why be a man when you can be a success?",
    author: "Bertolt Brecht",
  },
  {
    quote: "Everyone has his day and some days last longer than others.",
    author: "Sir Winston Churchill",
  }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.trunc(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
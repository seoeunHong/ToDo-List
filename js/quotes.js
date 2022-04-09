const quotes = [
  {
    quote:
      "I’m not a great programmer; I’m just a good programmer with great habits.",
    author: "Kent Beck",
  },
  {
    quote:
      "Good programmers know what to write. Great ones know what to rewrite and reuse.",
    author: "Eric S. Raymond",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote:
      "Good programmers use their brains, but good guidelines save us having to think out every case.",
    author: "Francis Glassborow",
  },
  {
    quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author: "Thomas Edison",
  },
  {
    quote: "The best way to get a project done faster is to start sooner.",
    author: "Jim Highsmith",
  },
  {
    quote:
      "In software systems it is often the early bird that makes the worm.",
    author: "Alan Perlis",
  },
  {
    quote:
      "People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.",
    author: "Donald Knuth",
  },
  {
    quote: "Programming is not about typing, it's about thinking.",
    author: "Rich Hickey",
  },
  {
    quote:
      "In programming, the hard part isn't solving problems, but deciding what problems to solve.",
    author: "Paul Graham",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

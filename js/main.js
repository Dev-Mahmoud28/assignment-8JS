var quoteBox = document.getElementById('quoteBox');

var quotesList = [
    {
        quote: "“Be yourself; everyone else is already taken.”",
        author: "― Oscar Wilde"
    },
    {
        quote: "“So many books, so little time.”",
        author: "― Frank Zappa"
    },
    {
        quote: "“A room without books is like a body without a soul.”",
        author: "― Marcus Tullius Cicero"
    },
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        author: "― Dr. Seuss"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        author: "― Mae West"
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        author: "― Mahatma Gandhi"
    },
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    }
];

var arr = [];
var randomQuote;
function showQuotes () {
    if(arr.length === quotesList.length){
        arr = []; // when this array is full this condition will empty it
    }
    do {
     randomQuote = Math.floor(Math.random() * quotesList.length);
    } while (arr.indexOf(randomQuote) !== -1); // if the random number is existing, it will generate another number (as indexOf() return -1 if the index not found)
    arr.push(randomQuote);
    // the repetition may be exist in one case if the last number of array before the condition empty it equals to the first number of new list (once in a blue moon)
    var box = `
    <p class="quote">${quotesList[randomQuote].quote}</p>
    <span class="author">${quotesList[randomQuote].author}</span>
    `
    quoteBox.innerHTML = box;
};
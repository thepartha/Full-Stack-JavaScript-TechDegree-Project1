
// quotes array 
const quotes = [
  {
    quote: "Nobody can hurt me without my permission.",
    source: "Mahatma Gandhi",
    citation:"Google",
    year: "1940",
    category: "Motivational"
  },
  {
    quote: "If you love a flower, don’t pick it up.Because if you pick it up it dies and it ceases to be what you love. So if you love a flower, let it be. Love is not about possession. Love is about appreciation.",
    source: "Osho",
    year: "1980",
    category: "philosophical"
  },
  {
    quote: "Millions of people are suffering: they want to be loved but they don't know how to love. And love cannot exist as a monologue; it is a dialogue, a very harmonious dialogue",
    source: "Osho",
    citation:"Goodreads.com",
    category: "philosophical"
  },
  {
    quote: "Kindness is the language which the deaf can hear and the blind can see.",
    source: "Mark Twain",
    year: "1900",
    category: "philosophical"
  },
  {
    quote: "I am a slow walker, but I never walk back.",
    source: "Abraham Lincoln",
    citation:"BrainyQuotes.com",
    year: "1860",
    category: "Motivational"
  }];

// Colors array to change background color
const colors = ["#CC0000","EF7215","#FFD300", "#50C878", "#6593E5"];

// get a randomequote from quotes
function getRandomQuote(quotes){
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//Display quote in  HTML
function printQuote() {
  var quote_box = document.getElementById("quote-box");
  var quote = getRandomQuote(quotes);
  
  //Set Quote to random quote
  var quoteHtml = "<p class='quote'>" + quote.quote +"</p>";

  //Setting Source and other attributes
  var attributesHTML ="";
  var categoryHTML = "";
  quote.source? attributesHTML+=  quote.source :attributesHTML+= "";
  quote.citation? attributesHTML+= "<span class='citation'>"+ quote.citation +"</span>":attributesHTML+="";
  quote.year? attributesHTML+= "<span class='year'>"+ quote.year +"</span>":attributesHTML+="";
  quote.category? categoryHTML += "<p class='category'>" + quote.category +"</p>":categoryHTML += "";
  
  // Adding Quote, Source and other attributes to the div.
  quote_box.innerHTML = quoteHtml + "<p class='source'>" + attributesHTML + categoryHTML + "</p>";
  
  //Change color of the page randomly
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

}

// Call the function to get and display a randowm quote every 5 seconds 
setInterval(printQuote, 5000);


//Click event to call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


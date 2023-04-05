const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");
const newQuoteBtn = document.querySelector(".new-quote-btn");
const quoteContainer = document.querySelector(".quote-container");

// Get quote from online API
async function getQuote() {
  const apiUrl = "https://api.quotable.io/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (response.ok) {
      quoteText.textContent = `"${data.content}"`;
      authorText.textContent = `- ${data.author}`;
    } else {
      throw new Error("Error: Unable to get a quote");
    }
  } catch (error) {
    console.log(error);
  }
}

// Get a new quote
newQuoteBtn.addEventListener("click", getQuote);

// On page load
getQuote();
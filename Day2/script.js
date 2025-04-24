
const quoteText = document.querySelector(".quote");
const authorText = document.querySelector(".author span:last-child");
const quoteBtn = document.querySelector("button");

async function randomQuote() {
  try {
    const response = await fetch("https://quotes-api-self.vercel.app/quote");
    const data = await response.json();
    console.log(data);

    quoteText.textContent = data.quote || "No quote found";
    authorText.textContent = data.author || "Unknown";
  } catch (error) {
    quoteText.textContent = "Could not fetch quote";
    authorText.textContent = "Error";
    console.error("Error fetching quote:", error);
  }
}

randomQuote();

quoteBtn.addEventListener("click", randomQuote);

const soundBtn = document.querySelector(".fa-volume-high");
const copyBtn = document.querySelector(".fa-copy");
const twitterBtn = document.querySelector(".fa-twitter");

soundBtn.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(`${quoteText.textContent} by ${authorText.textContent}`);
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  const fullQuote = `"${quoteText.textContent}" — ${authorText.textContent}`;
  navigator.clipboard.writeText(fullQuote);
  alert("Quote copied to clipboard!");
});

twitterBtn.addEventListener("click", () => {
  const tweetText = `"${quoteText.textContent}" — ${authorText.textContent}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(twitterUrl, "_blank");
});


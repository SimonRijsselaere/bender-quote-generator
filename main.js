const quotes = 'https://api.myjson.com/bins/u1359';
const quotediv = document.getElementById("quote");
fetch(quotes)
  .then((resp) => resp.json())
  .then((data) => displayQuote(data));

function displayQuote(data){
    console.log(data);

    quotediv.innerHTML = `<p>${data[Math.floor(Math.random() * 40)].quote}</p>`
  };

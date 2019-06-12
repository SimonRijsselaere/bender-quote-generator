const quotes = 'https://api.myjson.com/bins/u1359';
const quotediv = document.getElementById("quote");
const nextquote = document.getElementById("nextquote");

nextquote.addEventListener("click" , function updatePage() {
  fetch(quotes)
    .then((resp) => resp.json())
    .then((data) => displayQuote(data));

  function displayQuote(data){
      console.log(data);
      let randomNumber = Math.floor(Math.random() * 40);
      quotediv.innerHTML = `<p>${data[randomNumber].quote}</p>`

      setTimeout(function () {

        let string = quotediv.innerHTML;

        if (string.indexOf("Fry") > -1) {
          string = string.replace(/Fry/g, '<span style="color:orange;">Fry</span>');
        }

        if (string.indexOf("Leela") > -1) {
          string = string.replace(/Leela/g, '<span style="color:purple;">Leela</span>');
        }

        if (string.indexOf("Zoidberg") > -1) {
          string = string.replace(/Zoidberg/g, '<span style="color:red;">Zoidberg</span>');
        }

        if (string.indexOf("Bender") > -1) {
          string = string.replace(/Bender/g, '<span style="color:grey;">Bender</span>');
        }

        quotediv.innerHTML = string;

      }, 10);

    };
});

var heading = document.getElementsByTagName("h2");
var author = document.getElementsByTagName("p");

fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
.then(response => {
    return response.json()
})
.then(data =>{
    data.forEach(quote => {
        quoteValue = quote.quote;
        authorValue = quote.author;
        heading[0].innerHTML = quoteValue;
        author[0].innerHTML = "- " +authorValue;
    });
    
    

})

.catch(err=>alert("dicka shkoj gabim!"))

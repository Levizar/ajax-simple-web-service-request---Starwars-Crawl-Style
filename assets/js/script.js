(()=>{
    console.log('YOSH');
    window.addEventListener("load", async () => {
        console.log('yosh load');
        try {
            const quoteRequest   = await fetch("https://thatsthespir.it/api");
            const quoteReceived = await quoteRequest.json();
            console.log(quoteReceived);
            const author = quoteReceived.author;
            const quote = quoteReceived.quote;
            const photoSrc = quoteReceived.photo;

            document.getElementById("author").innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
            document.getElementById("photo").src = photoSrc;

        }catch (error){
            console.error(error); 
        }
    })

})();
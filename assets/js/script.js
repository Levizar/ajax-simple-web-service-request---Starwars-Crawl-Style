(()=>{
    console.log('YOSH');
    window.addEventListener("load", async () => {
        console.log('yosh load');
        try {
            const quoteRequest  = await fetch("https://thatsthespir.it/api");
            const quoteReceived = await quoteRequest.json();
            console.log(quoteReceived);
            const author   = await quoteReceived.author;
            const quote    = await quoteReceived.quote;
            const photoSrc = await quoteReceived.photo;

            document.getElementById("author").innerHTML = author;
            document.getElementById("quote").innerHTML = quote;
            document.getElementById("photo").src = photoSrc;

        }catch (error){
            console.error(error); 
        }
    })

})();
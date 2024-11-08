fetch("https://api.giphy.com/v1/gifs/random?api_key=xL4O132TUDmjb7SNHoCxgl6KtTCa2FxY&tag=Megaman&rating=g")
    .then(function(response)
    {
return response.json();

    })
    .then(function(jsonData)
    {
       console.log(jsonData);
            var productImg = jsonData.data.images.original.url;
           
            var image = document.createElement("img");
            image.setAttribute('src', productImg)
            document.body.appendChild(image)
    })
    

    
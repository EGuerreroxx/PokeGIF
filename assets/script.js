var giphyDisplay = document.querySelector(".giphy");
var pokeData = document.querySelector(".card-title");
var btn = document.getElementById("btn");



function getGifData(search) {
    btn.addEventListener('click', function() {
    fetch('http://api.giphy.com/v1/gifs/search?api_key=qV1xiffn8m3Ccvrhl7MV4hp9WtzV6bsq&limit=20&q=Pokemon')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);
            for (var i = 0; i < data.data.length; i++) {
                var display = document.createElement('p');
                display.textContent = data.data[i].url;
                giphyDisplay.append(display);
            }
        })
    })
}
getGifData();


function getPokeData(description) {
    btn.addEventListener('click', function() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?limit=20&offset=20')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.moves);
            for (var i = 0; i < data.moves.length; i++) {
                var display = document.createElement('p');
                display.textContent = data.moves[i];
                pokeData.append(display);
            }
            // for (var i = 0; i < data.data.length; i++) {
            //     var display = document.createElement('p');
            //     display.textContent = data.url[i].name;
            //     pokeData.append(display);
            // }
        })  
    })
}
getPokeData();


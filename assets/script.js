var giphyDisplay = document.querySelector(".giphy");



function getGifData(search) {
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
}
getGifData();


// function getPokeData(description) {
//     fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?limit=20&offset=20')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//         })
// }
// getPokeData();

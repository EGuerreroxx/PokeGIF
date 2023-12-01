function getGifData(search) {
    fetch('http://api.giphy.com/v1/gifs/search?api_key=qV1xiffn8m3Ccvrhl7MV4hp9WtzV6bsq&limit=20&q=Pokemon')
        .then(function(response) {
        return response.json();
        })
        .then(function(data) {
            console.log(data);
        })
    }
    getGifData();
  

    function getPokeData(description) {
        fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?limit=20&offset=20')
            .then(function(response) {
            return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
        }
     getPokeData();

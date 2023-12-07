var giphyDisplay = document.querySelector("#giphy");
var pokeData = document.querySelector("#poke-data");
var btn = document.getElementById("btn");
var searchInput = document.querySelector("#search");
var listContainer = document.querySelector("#list-of-pokemon");


function clearContent() {
    giphyDisplay.innerHTML = '';
    pokeData.innerHTML = '';
}

function getGifData(search) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=qV1xiffn8m3Ccvrhl7MV4hp9WtzV6bsq&limit=50&q=Pokemon ' + search)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);

            localStorage.setItem('giphyData', JSON.stringify(data.data));


            localStorage.setItem('giphyData', JSON.stringify(data.data));


            for (var i = 0; i < data.data.length; i++) {
                var display = document.createElement('img');
                display.src = data.data[i].images.preview_gif.url;
                giphyDisplay.append(display);
            }
        })
}

function getPokeData(value) {
    var search = value.toLowerCase();
    clearContent();
    var storedPokeData = localStorage.getItem(search);
    if (storedPokeData) {
        displayPokeData(JSON.parse(storedPokeData), search);
    } else {
        fetch('https://pokeapi.co/api/v2/pokemon/' + search + '/?limit=20&offset=20')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                localStorage.setItem(search, JSON.stringify(data));
                displayPokeData(data, search);
            });
    }
}
function displayPokeData(data, search) {
    for (var i = 0; i < data.stats.length; i++) {
        var colEl = document.createElement('div');
        colEl.classList.add('col', 'col-md-4');
        var cardEl = document.createElement('article');
        cardEl.classList.add('card', 'text-white', 'bg-info', 'mb-3');
        var headerEl = document.createElement('header');
        headerEl.classList.add('card-header');
        headerEl.textContent = 'Pokemon Stats:';
        var sectionEl = document.createElement('section');
        sectionEl.classList.add('card-body');
        var h4El = document.createElement('h4');
        h4El.classList.add('card-title');
        h4El.textContent = data.stats[i].stat.name.toUpperCase() + [" "] + data.stats[i].base_stat;
        var pEl = document.createElement('p');
        pEl.classList.add('card-text');
        pokeData.append(colEl);
        colEl.append(cardEl);
        cardEl.append(headerEl, sectionEl);
        sectionEl.append(h4El, pEl);
    }
    getGifData(search);
}


function getPokeData(value) {
    var search = value.toLowerCase();
    clearContent();

    var storedPokeData = localStorage.getItem(search);

    if (storedPokeData) {
        displayPokeData(JSON.parse(storedPokeData), search);
    } else {

    fetch('https://pokeapi.co/api/v2/pokemon/' + search + '/?limit=20&offset=20')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            localStorage.setItem(search, JSON.stringify(data));

            displayPokeData(data, search);
               
        });
}
}
    function displayPokeData(data, search) {
            for (var i = 0; i < data.stats.length; i++) {
                var colEl = document.createElement('div');
                colEl.classList.add('col', 'col-md-4');
                var cardEl = document.createElement('article');
                cardEl.classList.add('card', 'text-white', 'bg-info', 'mb-3');
                var headerEl = document.createElement('header');
                headerEl.classList.add('card-header');
                headerEl.textContent = 'Pokemon Stats:';
                var sectionEl = document.createElement('section');
                sectionEl.classList.add('card-body');
                var h4El = document.createElement('h4');
                h4El.classList.add('card-title');
                h4El.textContent = data.stats[i].stat.name.toUpperCase() + [" "] + data.stats[i].base_stat;
                var pEl = document.createElement('p');
                pEl.classList.add('card-text');
                pokeData.append(colEl);
                colEl.append(cardEl);
                cardEl.append(headerEl, sectionEl);
                sectionEl.append(h4El, pEl);
            }
            getGifData(search);
        
}

btn.addEventListener('click', function (event) {
    event.preventDefault();
    getPokeData(searchInput.value);
});


// btn.addEventListener('keypress', function (event) {
//     event.preventDefault();
//     if(event.key === 'Search'){
//     getPokeData(searchInput.value);
//     }
// });

// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
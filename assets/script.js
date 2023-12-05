var giphyDisplay = document.querySelector("#giphy");
var pokeData = document.querySelector("#poke-data");
var btn = document.getElementById("btn");
var searchInput = document.querySelector("#search");
var listContainer = document.querySelector("#list-of-pokemon");

function getGifData(search) {
    fetch('http://api.giphy.com/v1/gifs/search?api_key=qV1xiffn8m3Ccvrhl7MV4hp9WtzV6bsq&limit=20&q=Pokemon ' + search)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.data);

            for (var i = 0; i < data.data.length; i++) {
                var display = document.createElement('img');
                display.src = data.data[i].images.preview_gif.url;
                giphyDisplay.append(display);
            }
        })
}

function getPokeData(value) {
    var search = value.toLowerCase();
    fetch('https://pokeapi.co/api/v2/pokemon/' + search + '/?limit=20&offset=20')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.stats.length; i++) {
                //     <article class="card text-white bg-info mb-3">
                //     <header class="card-header">Pokemon Stats:</header>
                //     <section class="card-body">
                //       <h4 class="card-title">Pokemon Name</h4>
                //       <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio veniam asperiores perspiciatis dolorum incidunt a pariatur ex sapiente vitae in temporibus molestias minus, alias quo ea quod vel tenetur quaerat?</p>
                //       </section>
                //   </article>
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
        })
}

btn.addEventListener('click', function (event) {
    event.preventDefault();
    getPokeData(searchInput.value);
});

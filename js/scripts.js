// Event HamburgerMenu
document.getElementById("hamburgerMenu").addEventListener("click", () => {
  var navbarNav = document.getElementById("navbarNav");
  if (navbarNav.classList.contains("collapse")) {
    navbarNav.classList.remove("collapse");
  } else {
    navbarNav.classList.add("collapse");
  }
});

// Data Film
const movies = [
  {
    title: "The Shawshank Redemption",
    synopsis:
      "Dua pria yang dipenjara menjalin ikatan selama bertahun-tahun, menemukan pelipur lara dan penebusan melalui tindakan umum dari kesusilaan.",
    rating: 9.3,
    poster: "images/shawshank.jpg",
    link: "https://www.google.com/search?q=shawshank+redemption",
    stars: [
      { name: "Tim Robbins", photo: "images/tim_robbins.jpg" },
      { name: "Morgan Freeman", photo: "images/morgan_freeman.jpeg" }
    ],
    genre: "Drama",
    director: "Frank Darabont",
    producer: "Niki Marvin",
    writer: "Stephen King, Frank Darabont"
  },
  {
    title: "The Godfather",
    synopsis:
      "Seorang patriark tua dari sebuah dinasti kejahatan terorganisir menyerahkan kendali kerajaannya kepada putranya yang enggan.",
    rating: 9.2,
    poster: "images/godfather.jpg",
    link: "https://www.google.com/search?q=the+godfather",
    stars: [
      { name: "Marlon Brando", photo: "images/marlon_brando.jpg" },
      { name: "Al Pacino", photo: "images/al_pacino.jpg" }
    ],
    genre: "Crime, Drama",
    director: "Francis Ford Coppola",
    producer: "Albert S. Ruddy",
    writer: "Mario Puzo, Francis Ford Coppola"
  },
  {
    title: "The Dark Knight",
    synopsis:
      "Ketika ancaman yang dikenal sebagai Joker menyebabkan kekacauan dan kekacauan pada rakyat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar dari kemampuannya untuk melawan ketidakadilan.",
    rating: 9.0,
    poster: "images/darkknight.jpg",
    link: "https://www.google.com/search?q=the+dark+knight",
    stars: [
      { name: "Christian Bale", photo: "images/christian_bale.jpeg" },
      { name: "Heath Ledger", photo: "images/heath_ledger.jpg" }
    ],
    genre: "Action, Crime, Drama",
    director: "Christopher Nolan",
    producer: "Emma Thomas, Charles Roven, Christopher Nolan",
    writer: "Jonathan Nolan, Christopher Nolan"
  },
  {
    title: "12 Angry Men",
    synopsis:
      "Seorang juri yang bermasalah mencoba mencegah kesalahan peradilan dengan memaksa rekan-rekannya untuk mempertimbangkan kembali bukti-bukti tersebut.",
    rating: 9.0,
    poster: "images/12angrymen.jpg",
    link: "https://www.google.com/search?q=12+angry+men",
    stars: [
      { name: "Henry Fonda", photo: "images/henry_fonda.jpeg" },
      { name: "Lee J. Cobb", photo: "images/lee_j_cobb.jpg" }
    ],
    genre: "Drama",
    director: "Sidney Lumet",
    producer: "Henry Fonda, Reginald Rose",
    writer: "Reginald Rose"
  },
  {
    title: "Schindler's List",
    synopsis:
      "Di Polandia yang diduduki Jerman selama Perang Dunia II, Oskar Schindler secara bertahap menjadi prihatin atas tenaga kerjanya Yahudi setelah menyaksikan penganiayaan oleh Nazi.",
    rating: 9.0,
    poster: "images/schindler.jpg",
    link: "https://www.google.com/search?q=schindler%27s+list",
    stars: [
      { name: "Liam Neeson", photo: "images/liam_neeson.jpg" },
      { name: "Ralph Fiennes", photo: "images/ralph_fiennes.jpg" }
    ],
    genre: "Biography, Drama, History",
    director: "Steven Spielberg",
    producer: "Steven Spielberg, Gerald R. Molen, Branko Lustig",
    writer: "Thomas Keneally, Steven Zaillian "
  },
  {
    title: "Pulp Fiction",
    synopsis:
      "Kisah kejahatan yang penuh kekerasan dan menebarkan, menyatukan beberapa karakter utama dalam serangkaian insiden yang terkait.",
    rating: 8.9,
    poster: "images/pulpfiction.jpg",
    link: "https://www.google.com/search?q=pulp+fiction",
    stars: [
      { name: "John Travolta", photo: "images/john_travolta.jpg" },
      { name: "Uma Thurman", photo: "images/uma_thurman.jpg" }
    ],
    genre: "Crime, Drama",
    director: "Quentin Tarantino",
    producer: "Lawrence Bender",
    writer: "Quentin Tarantino, Roger Avary"
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    synopsis:
      "Gandalf dan Aragorn memimpin dunia orang-orang melawan tentara Sauron untuk mengalihkan perhatian darinya sehingga Frodo dan Sam bisa mencapai Gunung Doom dan menghancurkan Cincin Satu.",
    rating: 8.9,
    poster: "images/lotr.jpg",
    link: "https://www.google.com/search?q=lord+of+the+rings+the+return+of+the+king",
    stars: [
      { name: "Elijah Wood", photo: "images/elijah_wood.jpeg" },
      { name: "Karl Urban", photo: "images/karl_urban.jpg" }
    ],
    genre: "Action, Adventure, Drama",
    director: "Peter Jackson",
    producer: "Peter Jackson, Fran Walsh, Barrie M. Osborne",
    writer: "J.R.R. Tolkien, Fran Walsh, Philippa Boyens, Peter Jackson"
  },
  {
    title: "The Good, the Bad and the Ugly",
    synopsis:
      "Seorang pria yang baik hati dengan prinsip yang kuat, seorang pria jahat yang menyukai pembunuhan, dan seorang pria yang buruk yang hanya memikirkan uang bergabung untuk menemukan harta karun.",
    rating: 8.8,
    poster: "images/goodbadugly.jpg",
    link: "https://www.google.com/search?q=the+good+the+bad+and+the+ugly",
    stars: [
      { name: "Clint Eastwood", photo: "images/clint_eastwood.jpg" },
      { name: "Eli Wallach", photo: "images/eli_wallach.jpg" }
    ],
    genre: "Western",
    director: "Sergio Leone",
    producer: "Alberto Grimaldi",
    writer: "Luciano Vincenzoni, Sergio Leone"
  },
  {
    title: "Fight Club",
    synopsis:
      "Seorang pekerja kantoran dan seorang pembuat sabun tertekan membentuk klub pertarungan bawah tanah yang berkembang menjadi sesuatu yang jauh lebih besar.",
    rating: 8.8,
    poster: "images/fightclub.jpg",
    link: "https://www.google.com/search?q=fight+club",
    stars: [
      { name: "Brad Pitt", photo: "images/brad_pitt.jpg" },
      { name: "Edward Norton", photo: "images/edward_norton.jpg" }
    ],
    genre: "Drama",
    director: "David Fincher",
    producer: "Art Linson, Ceán Chaffin, Ross Grayson Bell",
    writer: "Chuck Palahniuk, Jim Uhls"
  },
  {
    title: "Forrest Gump",
    synopsis:
      "Kisah seorang pria sederhana yang menyaksikan, dan bahkan berpartisipasi dalam, banyak momen bersejarah dari paruh kedua abad ke-20 di Amerika.",
    rating: 8.8,
    poster: "images/forrestgump.jpg",
    link: "https://www.google.com/search?q=forrest+gump",
    stars: [
      { name: "Tom Hanks", photo: "images/tom_hanks.jpg" },
      { name: "Robin Wright", photo: "images/robin_wright.jpg" }
    ],
    genre: "Drama, Romance",
    director: "Robert Zemeckis",
    producer: "Wendy Finerman, Steve Starkey, Steve Tisch",
    writer: "Winston Groom, Eric Roth"
  }
];

// Menampilkan Movie
function loadMovies() {
  const movieList = document.getElementById("movie-list");
  let htmlContent = "";

  movies.forEach((movie, index) => {
    htmlContent += `
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-lg rounded" data-toggle="modal" data-target="#movieModal" onclick="showMovieDetails(${index})">
          <img src="${movie.poster}" alt="Poster Film" />
          <div class="card-body bg-light text-dark rounded-bottom">
            <h5 class="card-title">${index + 1}. ${movie.title}</h5>
            <p class="card-text"><strong>Rating:</strong> ${movie.rating}</p>
          </div>
        </div>
      </div>
    `;
  });
  movieList.innerHTML = htmlContent;
}

// Menampilkan detail film di modal
function showMovieDetails(index) {
  const movie = movies[index];
  document.getElementById("moviePoster").src = movie.poster;
  document.getElementById("movieTitle").innerText = movie.title;
  document.getElementById("movieSynopsis").innerText = movie.synopsis;
  document.getElementById("movieRating").innerText = movie.rating;
  
  document.getElementById("movieGenre").innerText = movie.genre;
  document.getElementById("movieDirector").innerText = movie.director;
  document.getElementById("movieProducer").innerText = movie.producer;
  document.getElementById("movieWriter").innerText = movie.writer;

  const starsContainer = document.getElementById("movieStarsContainer");
  starsContainer.innerHTML = ''; // Kosongkan kontainer sebelumnya
  
  movie.stars.forEach(star => {
    const starElement = document.createElement('div');
    starElement.className = "col-6 col-md-4"; 
    starElement.innerHTML = `
      <img src="${star.photo}" alt="${star.name}" class="img-fluid" />
      <p>${star.name}</p>
    `;
    starsContainer.appendChild(starElement);
  });

  document.getElementById("movieLink").href = movie.link;
}

// Embed Map
function initMap() {
  var mapDiv = document.getElementById("map");
  mapDiv.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.229777135866!2d107.50069655!3d-6.88372255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4dda9367feb%3A0x7b035f15d5882bb2!2sLaksanamekar%2C%20Kec.%20Padalarang%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1723528220471!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}
// Event Load
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("movie-list")) {
    loadMovies();
  }

  if (document.getElementById("map")) {
    initMap();
  }
});

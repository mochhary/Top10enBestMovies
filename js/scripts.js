// Fungsi untuk menampilkan menu navbar pada perangkat mobile
function toggleMenu() {
    var navbarNav = document.getElementById('navbarNav');
    if (navbarNav.classList.contains('collapse')) {
        navbarNav.classList.remove('collapse');
    } else {
        navbarNav.classList.add('collapse');
    }
}

// Data film dengan poster diintegrasikan langsung ke dalam JavaScript
const movies = [
    {
        "title": "The Shawshank Redemption",
        "synopsis": "Dua pria yang dipenjara menjalin ikatan selama bertahun-tahun, menemukan pelipur lara dan penebusan melalui tindakan umum dari kesusilaan.",
        "rating": 9.3,
        "poster": "images/shawshank.jpg"
    },
    {
        "title": "The Godfather",
        "synopsis": "Seorang patriark tua dari sebuah dinasti kejahatan terorganisir menyerahkan kendali kerajaannya kepada putranya yang enggan.",
        "rating": 9.2,
        "poster": "images/godfather.jpg"
    },
    {
        "title": "The Dark Knight",
        "synopsis": "Ketika ancaman yang dikenal sebagai Joker menyebabkan kekacauan dan kekacauan pada rakyat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar dari kemampuannya untuk melawan ketidakadilan.",
        "rating": 9.0,
        "poster": "images/darkknight.jpg"
    },
    {
        "title": "12 Angry Men",
        "synopsis": "Seorang juri yang bermasalah mencoba mencegah kesalahan peradilan dengan memaksa rekan-rekannya untuk mempertimbangkan kembali bukti-bukti tersebut.",
        "rating": 9.0,
        "poster": "images/12angrymen.jpg"
    },
    {
        "title": "Schindler's List",
        "synopsis": "Di Polandia yang diduduki Jerman selama Perang Dunia II, Oskar Schindler secara bertahap menjadi prihatin atas tenaga kerjanya Yahudi setelah menyaksikan penganiayaan oleh Nazi.",
        "rating": 9.0,
        "poster": "images/schindler.jpg"
    },
    {
        "title": "Pulp Fiction",
        "synopsis": "Kisah kejahatan yang penuh kekerasan dan menebarkan, menyatukan beberapa karakter utama dalam serangkaian insiden yang terkait.",
        "rating": 8.9,
        "poster": "images/pulpfiction.jpg"
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "synopsis": "Gandalf dan Aragorn memimpin dunia orang-orang melawan tentara Sauron untuk mengalihkan perhatian darinya sehingga Frodo dan Sam bisa mencapai Gunung Doom dan menghancurkan Cincin Satu.",
        "rating": 8.9,
        "poster": "images/lotr.jpg"
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "synopsis": "Seorang pria yang baik hati dengan prinsip yang kuat, seorang pria jahat yang menyukai pembunuhan, dan seorang pria yang buruk yang hanya memikirkan uang bergabung untuk menemukan harta karun.",
        "rating": 8.8,
        "poster": "images/goodbadugly.jpg"
    },
    {
        "title": "Fight Club",
        "synopsis": "Seorang pekerja kantoran dan seorang pembuat sabun tertekan membentuk klub pertarungan bawah tanah yang berkembang menjadi sesuatu yang jauh lebih besar.",
        "rating": 8.8,
        "poster": "images/fightclub.jpg"
    },
    {
        "title": "Forrest Gump",
        "synopsis": "Kisah seorang pria sederhana yang menyaksikan, dan bahkan berpartisipasi dalam, banyak momen bersejarah dari paruh kedua abad ke-20 di Amerika.",
        "rating": 8.8,
        "poster": "images/forrestgump.jpg"
    }
];

// Fungsi untuk memuat daftar film
function loadMovies() {
    const movieList = document.getElementById('movie-list');
    let htmlContent = '';

    movies.forEach(movie => {
        htmlContent += `
        <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-lg rounded">
                <img src="${movie.poster}" class="card-img-top rounded-top" alt="${movie.title}">
                <div class="card-body bg-light text-dark rounded-bottom">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.synopsis}</p>
                    <p class="card-text"><strong>Rating:</strong> ${movie.rating}</p>
                </div>
            </div>
        </div>
        `;
    });

    movieList.innerHTML = htmlContent;
}

// Panggil fungsi loadMovies saat dokumen telah dimuat
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('movie-list')) {
        loadMovies();
    }

    if (document.getElementById('map')) {
        initMap();
    }
});

// Fungsi untuk menginisialisasi peta (tanpa API, hanya embed)
function initMap() {
    var mapDiv = document.getElementById('map');
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.229777135866!2d107.50069655!3d-6.88372255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4dda9367feb%3A0x7b035f15d5882bb2!2sLaksanamekar%2C%20Kec.%20Padalarang%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1723528220471!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}

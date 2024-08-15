// Event HamburgerMenu
document.getElementById("hamburgerMenu").addEventListener("click", () => {
  var navbarNav = document.getElementById("navbarNav");
  if (navbarNav.classList.contains("collapse")) {
    navbarNav.classList.remove("collapse");
  } else {
    navbarNav.classList.add("collapse");
  }
});

// My JSON
const movies = [
  {
    title: "The Shawshank Redemption",
    synopsis:
      "Dua pria yang dipenjara menjalin ikatan selama bertahun-tahun, menemukan pelipur lara dan penebusan melalui tindakan umum dari kesusilaan.",
    rating: 9.3,
    poster: "images/shawshank.jpg",
    link: "https://www.google.com/search?gs_ssp=eJzj4tDP1Tcwz8orMWD0EinOSCwH4rxshaLUlNTcgpLM_DwAqcILPw&q=shawshank+redemption&oq=shaw&gs_lcrp=EgZjaHJvbWUqDwgBEC4YQxixAxiABBiKBTIGCAAQRRg5Mg8IARAuGEMYsQMYgAQYigUyDQgCEC4YgwEYsQMYgAQyDQgDEC4YrwEYxwEYgAQyDQgEEC4YgwEYsQMYgAQyCggFEC4YsQMYgAQyBggGEEUYPDIGCAcQRRg80gEIMTkzN2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Godfather",
    synopsis:
      "Seorang patriark tua dari sebuah dinasti kejahatan terorganisir menyerahkan kendali kerajaannya kepada putranya yang enggan.",
    rating: 9.2,
    poster: "images/godfather.jpg",
    link: "https://www.google.com/search?q=the+godfather&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIKmgs5ZsMohHkaUAa0xAP9GZD4gPQ%3A1723712202023&ei=ysK9ZtGTAZWM4-EPvL-GkA4&gs_ssp=eJzj4tTP1TcwTzcszjVg9OItyUhVSM9PSUsEMooAZoUIWw&oq=the+&gs_lp=Egxnd3Mtd2l6LXNlcnAiBHRoZSAqAggDMgoQIxiABBgnGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMgoQLhiABBhDGIoFMhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEBSK0fUABYtgNwAHgBkAEAmAGsAaABhwWqAQMwLjS4AQPIAQD4AQGYAgegArtDwgIEECMYJ8ICChAAGIAEGEMYigWYAwC6BgYIARABGBSSBwcwLjQuOC0zoAeoZA&sclient=gws-wiz-serp",
  },
  {
    title: "The Dark Knight",
    synopsis:
      "Ketika ancaman yang dikenal sebagai Joker menyebabkan kekacauan dan kekacauan pada rakyat Gotham, Batman harus menerima salah satu ujian psikologis dan fisik terbesar dari kemampuannya untuk melawan ketidakadilan.",
    rating: 9.0,
    poster: "images/darkknight.jpg",
    link: "https://www.google.com/search?q=the+dark+knight&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIKqPF3U4OZy6Ksr9azOsQYIWyFxgg%3A1723712223272&ei=38K9Zo6rEO-e4-EP89Ce4Ag&gs_ssp=eJzj4tTP1TdIKinINTNg9OIvyUhVSEksylbIzstMzygBAHx7CSo&oq=the+dark&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHRoZSBkYXJrKgIIADIQEC4YgAQYsQMYQxiDARiKBTIQEC4YgAQYsQMYQxiDARiKBTIIEC4YgAQYsQMyCBAuGIAEGNQCMggQLhiABBjLATIIEC4YgAQYywEyCBAuGIAEGMsBMg4QABiABBixAxiDARiKBTIIEC4YgAQY1AIyBRAuGIAEMh8QLhiABBixAxhDGIMBGIoFGJcFGNwEGN4EGOAE2AEDSLwdULoDWNYScAF4AZABAJgB5AGgAdUMqgEGMC4xMS4xuAEDyAEA-AEBmAIIoAK9CcICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECwgIWEC4YgAQYsAMYQxjUAhjIAxiKBdgBAsICChAuGIAEGCcYigXCAgsQLhiABBixAxiDAcICBRAAGIAEwgIIEAAYgAQYywHCAhcQLhiABBiKBRiXBRjcBBjeBBjgBNgBA8ICDRAuGIAEGEMY1AIYigXCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGNQCGMsBwgIKECMYgAQYJxiKBcICChAuGIAEGEMYigXCAgoQABiABBhDGIoFwgIOEC4YgAQYsQMYgwEYigXCAhkQLhiABBhDGIoFGJcFGNwEGN4EGOAE2AEDmAMAiAYBkAYSugYGCAEQARgJugYGCAIQARgIugYGCAMQARgUkgcFMS42LjGgB_2MAg&sclient=gws-wiz-serp",
  },
  {
    title: "12 Angry Men",
    synopsis:
      "Seorang juri yang bermasalah mencoba mencegah kesalahan peradilan dengan memaksa rekan-rekannya untuk mempertimbangkan kembali bukti-bukti tersebut.",
    rating: 9.0,
    poster: "images/12angrymen.jpg",
    link: "https://www.google.com/search?q=12+angry+men&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIIGWf8sLTUHf2eenYAzCE3YXEtHJw%3A1723712242561&ei=8sK9ZqX9IeqR4-EPsvqvgA0&gs_ssp=eJzj4tDP1TfIjS_JMmD04jE0UkjMSy-qVMhNzQMAVfEHQw&oq=12&gs_lp=Egxnd3Mtd2l6LXNlcnAiAjEyKgIIADINEC4YgAQYsQMYQxiKBTIKEC4YgAQYQxiKBTIQEAAYgAQYsQMYQxiDARiKBTIQEC4YgAQYsQMYQxiDARiKBTINEC4YgAQYQxjUAhiKBTIKEC4YgAQYQxiKBTINEC4YgAQYQxjUAhiKBTIKEC4YgAQYQxiKBTIKEAAYgAQYQxiKBTIKEC4YgAQYQxiKBTIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBAUjpClAAWOMBcAB4AZABAJgBtAGgAb8CqgEDMC4yuAEDyAEA-AEBmAICoALoAsICChAjGIAEGCcYigXCAgQQIxgnwgIFEAAYgATCAgUQLhiABMICCBAAGIAEGLEDwgIOEC4YgAQYsQMYgwEYigWYAwC6BgYIARABGBSSBwUwLjEuMaAHkSk&sclient=gws-wiz-serp",
  },
  {
    title: "Schindler's List",
    synopsis:
      "Di Polandia yang diduduki Jerman selama Perang Dunia II, Oskar Schindler secara bertahap menjadi prihatin atas tenaga kerjanya Yahudi setelah menyaksikan penganiayaan oleh Nazi.",
    rating: 9.0,
    poster: "images/schindler.jpg",
    link: "https://www.google.com/search?q=schindler%27s+list&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWII-k3PlyyqXyqKKSFkaWnN0hSuwKQ%3A1723712262473&ei=BsO9Zt3BHIDA4-EP2d7JuQ4&gs_ssp=eJzj4tDP1TfISKsqMmD0EihOzsjMS8lJLVIvVsjJLC4BAIKVCYU&oq=sc&gs_lp=Egxnd3Mtd2l6LXNlcnAiAnNjKgIIADIKEC4YgAQYQxiKBTIKEC4YgAQYQxiKBTIKEC4YgAQYQxiKBTIKEC4YgAQYQxiKBTINEC4YgAQYQxjUAhiKBTIKEC4YgAQYQxiKBTILEAAYgAQYsQMYgwEyChAAGIAEGEMYigUyCBAAGIAEGLEDMggQABiABBixAzIZEC4YgAQYQxiKBRiXBRjcBBjeBBjgBNgBAki1E1BpWMoMcAJ4AZABBJgB4AGgAZILqgEFMC45LjG4AQPIAQD4AQGYAgWgAs8DqAISwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIKEC4YgAQYJxiKBcICBRAAGIAEwgIIEC4YgAQYywHCAggQABiABBjLAcICFxAuGIAEGIoFGJcFGNwEGN4EGOAE2AECwgIHEC4YJxjqAsICBxAjGCcY6gLCAhYQLhiABBhDGLQCGMgDGIoFGOoC2AEBwgIKECMYgAQYJxiKBcICBBAjGCeYAxWIBgGQBhC6BgYIARABGAi6BgYIAhABGBSSBwMyLjOgB52TAQ&sclient=gws-wiz-serp",
  },
  {
    title: "Pulp Fiction",
    synopsis:
      "Kisah kejahatan yang penuh kekerasan dan menebarkan, menyatukan beberapa karakter utama dalam serangkaian insiden yang terkait.",
    rating: 8.9,
    poster: "images/pulpfiction.jpg",
    link: "https://www.google.com/search?gs_ssp=eJzj4tDP1TdIM4nPMWD04ikozSlQSMtMLsnMzwMAWG0Hxw&q=pulp+fiction&oq=pul&gs_lcrp=EgZjaHJvbWUqBwgCEC4YgAQyBggAEEUYOTIZCAEQLhivARjHARiABBiOBRiYBRiZBRieBTIHCAIQLhiABDIQCAMQLhjHARixAxjRAxiABDIHCAQQLhiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDE5NDhqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    synopsis:
      "Gandalf dan Aragorn memimpin dunia orang-orang melawan tentara Sauron untuk mengalihkan perhatian darinya sehingga Frodo dan Sam bisa mencapai Gunung Doom dan menghancurkan Cincin Satu.",
    rating: 8.9,
    poster: "images/lotr.jpg",
    link: "https://www.google.com/search?q=lord+of+the+rings+the+return+of+the+king&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIIxd5cMiOfgZLLRSP9dK1HUj51NhQ%3A1723712532381&ei=FMS9Zr_5FozV4-EPuJygqAQ&gs_ssp=eJzj4tTP1TcwNM9KsTRg9NLIyS9KUchPUyjJSFUoysxLL4awUktKi_Jg4tlAcQC-8hGr&oq=lord+of+the+rings+t&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2xvcmQgb2YgdGhlIHJpbmdzIHQqAggGMgUQABiABDIIEC4YgAQYywEyBRAAGIAEMggQLhiABBjLATIIEC4YgAQYywEyBRAAGIAEMggQLhiABBjLATIIEC4YgAQYywEyCBAuGIAEGMsBMgUQLhiABDIXEC4YgAQYywEYlwUY3AQY3gQY4ATYAQFI8yVQAFiWBHAAeAGQAQCYAcUBoAGuA6oBAzAuM7gBA8gBAPgBAZgCCaAC-rkBwgIKEAAYgAQYQxiKBcICCxAuGIAEGNQCGMsBwgIKEC4YgAQYQxiKBcICCBAAGIAEGMsBmAMAugYGCAEQARgUkgcJMC4yLjEuOS02oAfbPg&sclient=gws-wiz-serp",
  },
  {
    title: "The Good, the Bad and the Ugly",
    synopsis:
      "Seorang pria yang baik hati dengan prinsip yang kuat, seorang pria jahat yang menyukai pembunuhan, dan seorang pria yang buruk yang hanya memikirkan uang bergabung untuk menemukan harta karun.",
    rating: 8.8,
    poster: "images/goodbadugly.jpg",
    link: "https://www.google.com/search?q=the+good+the+bad+and+the+ugly+%281966%29&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIJWnohwqqjFdhCDGRxMbh1aKl8FbA%3A1723712569396&ei=OcS9Zu3tF8Sgg8UPjYb70A4&gs_ssp=eJzj4tDP1TcwLyqpNGD0UinJSFVIz89PUQAxkhJTFBLzIOzS9JxKBQ1DSzMzTQByNw7R&oq=the+good+the+bad+and+the+ugly+&gs_lp=Egxnd3Mtd2l6LXNlcnAiHnRoZSBnb29kIHRoZSBiYWQgYW5kIHRoZSB1Z2x5ICoCCAAyBRAuGIAEMgUQABiABDIIEC4YgAQYywEyCBAuGIAEGMsBMggQABiABBjLATIFEAAYgAQyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAuGIAEGMsBMhQQLhiABBiXBRjcBBjeBBjgBNgBA0igPlCkJljAMXABeAGQAQCYAYkBoAGvBqoBAzMuNbgBA8gBAPgBAZgCB6ACkgXCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICBhAAGBYYHsICCBAAGIAEGKIEmAMAiAYBkAYTugYGCAEQARgJugYGCAIQARgIugYGCAMQARgUkgcDNC4zoAeQSw&sclient=gws-wiz-serp",
  },
  {
    title: "Fight Club",
    synopsis:
      "Seorang pekerja kantoran dan seorang pembuat sabun tertekan membentuk klub pertarungan bawah tanah yang berkembang menjadi sesuatu yang jauh lebih besar.",
    rating: 8.8,
    poster: "images/fightclub.jpg",
    link: "https://www.google.com/search?gs_ssp=eJzj4tTP1TcwrixLMzJg9OJKy0zPKFFIzilNAgBQUAcm&q=fight+club&oq=fight&gs_lcrp=EgZjaHJvbWUqCggBEC4YsQMYgAQyDAgAECMYJxiABBiKBTIKCAEQLhixAxiABDIMCAIQRRg5GLEDGIAEMgoIAxAuGLEDGIAEMgoIBBAAGLEDGIAEMgoIBRAuGLEDGIAEMg0IBhAuGIMBGLEDGIAEMgoIBxAuGLEDGIAEMgcICBAAGIAEMhAICRAuGK8BGMcBGIAEGI4F0gEINjMyM2owajmoAgCwAgA&sourceid=chrome&ie=UTF-8",
  },
  {
    title: "Forrest Gump",
    synopsis:
      "Kisah seorang pria sederhana yang menyaksikan, dan bahkan berpartisipasi dalam, banyak momen bersejarah dari paruh kedua abad ke-20 di Amerika.",
    rating: 8.8,
    poster: "images/forrestgump.jpg",
    link: "https://www.google.com/search?q=forrest+gump&sca_esv=5a54ede1e073dd21&sxsrf=ADLYWIJQIX94_WzPR20X8kHwKXBxFCFm5g%3A1723712623302&ei=b8S9Zv6LEqCOseMP-JvWuQ8&gs_ssp=eJzj4tDP1TdISslKMWD04knLLypKLS5RSC_NLQAAXOMIBw&oq=forre&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWZvcnJlKgIIADINEC4YgAQYsQMYQxiKBTIIEAAYgAQYywEyBRAAGIAEMggQABiABBjLATIFEAAYgAQyCBAAGIAEGMsBMggQLhiABBixAzIFEAAYgAQyCBAAGIAEGMsBMhEQLhiABBjHARiYBRjLARivATIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBA0i2ElDTBliNDHABeAGQAQCYAZ0BoAGFBaoBAzAuNbgBA8gBAPgBAZgCBqAC7QXCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICDhAAGLADGOQCGNYE2AEBwgITEC4YgAQYsAMYQxjIAxiKBdgBAsICFhAuGIAEGLADGEMY1AIYyAMYigXYAQLCAgoQLhiABBgnGIoFwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAhEQLhiABBixAxjRAxiDARjHAcICCxAAGIAEGLEDGIMBwgIKEC4YgAQYQxiKBcICFxAuGIAEGIoFGJcFGNwEGN4EGOAE2AEDwgIQEC4YgAQY0QMYQxjHARiKBcICDRAuGIAEGEMY1AIYigXCAgsQLhiABBixAxiDAcICERAuGIAEGMcBGJgFGJkFGK8BwgIFEC4YgASYAwCIBgGQBhO6BgYIARABGAm6BgYIAhABGAi6BgYIAxABGBSSBwMxLjWgB-Vk&sclient=gws-wiz-serp",
  },
];
// Menampilkan Movie
function loadMovies() {
  const movieList = document.getElementById("movie-list");
  let htmlContent = "";

  movies.forEach((movie) => {
    htmlContent += `
        <div class="col-md-6 mb-4">
            <div class="card h-100 shadow-lg rounded">
            <a href="${movie.link}" target="_blank" class="text-decoration-none">
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
// Event Load
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("movie-list")) {
    loadMovies();
  }

  if (document.getElementById("map")) {
    initMap();
  }
});
// Embed Map
function initMap() {
  var mapDiv = document.getElementById("map");
  mapDiv.innerHTML =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.229777135866!2d107.50069655!3d-6.88372255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e4dda9367feb%3A0x7b035f15d5882bb2!2sLaksanamekar%2C%20Kec.%20Padalarang%2C%20Kabupaten%20Bandung%20Barat%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1723528220471!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
}

export const getMovieGallery = fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/')

export const getSelectedMovie = (movie) => {
return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie}`)
    .then(data => data.json())
}

export const getMovieTrailer = (trailer) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${trailer}/videos`)
      .then(data => data.json())
}

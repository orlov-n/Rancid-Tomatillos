export const getMovieGallery = fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/').then((data) => {
  console.log(data)
if(data.ok) {
  console.log('Passes If')
  return data.json()
} else {
  throw new window.Error('There seems to be an error at this time.')
}
})

export const getSelectedMovie = (movie) => {
return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie}`)
    .then(data => data.json())
}

export const getMovieTrailer = (trailer) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${trailer}/videos`)
      .then(data => data.json())
}

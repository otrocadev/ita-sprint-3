// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = []
  array.map((film) => {
    result.push(film.director)
  })
  return result
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(
    (direcrtorFilm) => direcrtorFilm.director === director
  )
  return result
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movieRatings = []
  getMoviesFromDirector(array, director).map((film) => {
    movieRatings.push(film.score)
  })
  let result =
    movieRatings.reduce((accumulated, current) => accumulated + current, 0) /
    movieRatings.length
  return Number(result.toFixed(2))
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  return array
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20)
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  return [...array].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year
    }
    return a.title.localeCompare(b.title)
  })
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categoryMovies = array.filter((movie) => movie.genre.includes(category))
  return (
    categoryMovies.reduce(
      (accumulated, current) => accumulated + current.score,
      0
    ) / categoryMovies.length
  )
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = []

  const passHoursToMinutes = (duration) => {
    if (duration.length < 3) {
      return parseInt(duration) * 60
    }
    const [hoursPart, minsPart] = duration.split(' ')
    const hours = parseInt(hoursPart)
    const mins = parseInt(minsPart)
    return (totalTimeInMins = hours * 60 + mins)
  }

  for (let n = 0; n < array.length; n++) {
    newArray.push({
      title: array[n].title,
      year: array[n].year,
      director: array[n].director,
      duration: passHoursToMinutes(array[n].duration),
      genre: array[n].genre,
      score: array[n].genre
    })
  }
  return newArray
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filmsOfYear = array.filter((film) => film.year === year)
  if (filmsOfYear.length === 0) return []
  let bestFilm = filmsOfYear.reduce((best, currentFilm) =>
    currentFilm.score > best.score ? currentFilm : best
  )
  return [bestFilm]
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  }
}

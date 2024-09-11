const movies = {
  name : "인사이드아웃",
  detail : {
    price : "50000",
    date : "20240911"
  }
}

const movies2 = {
  name : "애나벨",
  detail : {
    price : "50000",
  }
}

function printMovieDate(movie){
  return movie.detail.date
}

// console.log(printMovieDate(movies).split(""))
console.log(printMovieDate(movies2)?.split(""))
// printMovieDate(movies2).split("")
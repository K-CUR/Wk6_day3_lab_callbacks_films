const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const titleList = this.films.map((film) => film.title);
  return titleList;
}// Ally used find for this one


Cinema.prototype.filmByTitle = function(title){
  const film = this.films.filter((film) => film.title === title);
  return film[0];
}

Cinema.prototype.filterFilmsByGenre = function(genre){
  const filmList = this.films.filter((film) => film.genre === genre);
  return filmList;
}

Cinema.prototype.filmsByYear = function(year){
  const check = this.films.some((film) => film.year === year);
  return check;
} 

Cinema.prototype.checkOverLength = function(length){
  const check = this.films.every((film) => film.length > length);
  return check;
}

Cinema.prototype.totalLength = function(){
  const total = this.films.reduce((sum, film) => {return sum + film.length}, 0);
  return total;
}


module.exports = Cinema;

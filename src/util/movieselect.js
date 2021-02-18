import l from "lodash";

export function movieSelect(movies, currentPage, moviesOnPage) {
  const startIndex = (currentPage - 1) * moviesOnPage;
  return l(movies).slice(startIndex).take(moviesOnPage).value();
}

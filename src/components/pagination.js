import React from "react";
import l from "lodash";

const Pagination = (props) => {
  const { numberOfMovies, moviesOnPage } = props;

  const pageCount = Math.ceil(numberOfMovies / moviesOnPage);
  console.log(pageCount);
  if (pageCount === 1) return null;
  const numberOfPages = l.range(1, pageCount + 1);
  console.log(numberOfPages);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        {numberOfPages.map((page) => (
          <li
            className={
              props.currentPage === page ? "page-item active" : "page-item"
            }
            key={page}
          >
            <a className="page-link" onClick={() => props.pageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

import React from "react";

const Pagination = (props) => {
  console.log(props.movies);
  const pagesNumbers = Math.ceil(props.movies.length / 4);
  console.log(pagesNumbers);

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

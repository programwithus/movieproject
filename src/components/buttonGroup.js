import React from "react";

const ButtonGroup = (props) => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Movie Selector</h1>
          <p className="lead text-muted">You can find any movie here</p>
          <p>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              {props.genres.map((g) => (
                <button
                  onClick={() => props.clicking(g)}
                  type="button"
                  className={
                    props.currentGenre === g
                      ? "btn btn-outline-primary active"
                      : "btn btn-outline-primary"
                  }
                  key={g}
                >
                  {g}
                </button>
              ))}
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
export default ButtonGroup;

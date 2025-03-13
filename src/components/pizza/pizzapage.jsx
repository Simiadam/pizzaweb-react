import React from "react";

//Lapozás komponens
const PizzaPage = ({ currentPage, onPageChange, totalPages }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };
  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="d-flex justify-content-between align-items-center mb-3 page-control">
      <button
        className="btn btn-dark d-flex align-items-center"
        onClick={handlePrevious}
        disabled={currentPage == 1}
      >
        <i className="bi bi-caret-left-fill"></i>Előző
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        className="btn btn-dark d-flex align-items-center btn-right"
        onClick={handleNext}
        disabled={currentPage == totalPages}
      >
        Következő<i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default PizzaPage;

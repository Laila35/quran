"use client";

import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handlePageClick = (page) => {
    if (typeof page === "number") onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6 mt-10 text-gray-600">
      {/* Left side text */}
      <p>
        Showing{" "}
        <span className="font-medium text-[#0f7f76]">
          {indexOfFirstItem + 1}–
          {indexOfLastItem > totalItems ? totalItems : indexOfLastItem}
        </span>{" "}
        of <span className="font-medium text-[#0f7f76]">{totalItems}</span>{" "}
        results
      </p>

      {/* Pagination Numbers */}
      <div className="flex items-center space-x-1 mt-4 md:mt-0">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {renderPageNumbers().map((page, idx) => (
          <button
            key={idx}
            onClick={() => handlePageClick(page)}
            aria-label={
              page === "..." ? "More pages" : `Go to page ${page}`
            }
            aria-current={page === currentPage ? "page" : undefined}
            className={`w-8 h-8 flex items-center justify-center border rounded transition-all duration-200 ${
              page === currentPage
                ? "bg-[#0f7f76] text-white border-[#0f7f76]"
                : "text-gray-700 hover:bg-gray-100"
            } ${
              page === "..."
                ? "cursor-default border-none text-gray-400"
                : ""
            }`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`w-8 h-8 flex items-center justify-center border rounded ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

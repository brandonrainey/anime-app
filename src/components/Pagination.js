import React, { useState, useEffect } from "react";

export default function Pagination({
  page,
  setPage,
  animeList,
  scrollToTop,
}) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const handleClickPrev = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const handleClickNext = () => {
    setPage(page + 1);

    scrollToTop();
  };

  useEffect(() => {
    if (animeList < 50) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
    if (page !== 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }
  }, [animeList]);

  return (
    <div className="flex justify-center">
      <div className="flex">
        <button
          className="items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          disabled={disabledPrev}
          onClick={handleClickPrev}
          aria-label="previous page"
        >
          prev
        </button>
        <nav>
          <div className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
            {page}
          </div>
        </nav>
        <button
          className="items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          disabled={disabledNext}
          onClick={handleClickNext}
          aria-label="next page"
        >
          next
        </button>
      </div>
    </div>
  );
}

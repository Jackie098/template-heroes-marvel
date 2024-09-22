function ButtonsPagination({ totalPages, currentPage, handlePageClick }) {
  const PAGES_PER_INTERVAL = 5;

  const buttons = [];

  let startPage = 1;
  let endPage = totalPages;

  if (totalPages > PAGES_PER_INTERVAL) {
    const halfInterval = Math.floor(PAGES_PER_INTERVAL / 2);
    startPage = Math.max(currentPage - halfInterval, 1);
    endPage = startPage + PAGES_PER_INTERVAL - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - PAGES_PER_INTERVAL + 1, 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    buttons.push(
      <button
        key={`pagination-btn-${i}`}
        className="bg-red-600 text-white font-medium p-1 px-2 transition-all hover:scale-110 hover:cursor-pointer disabled:cursor-default disabled:scale-100 disabled:bg-white disabled:text-gray-900 disabled:skew-x-[-12deg] disabled:px-2 disabled:mx-2 disabled:font-bold "
        disabled={i === currentPage}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </button>
    );
  }

  if (startPage > 1) {
    buttons.unshift(
      <button
        key={`pagination-btn-prev`}
        className="bg-white p-2 text-black font-black transition-all hover:scale-125 hover:cursor-pointer"
        onClick={() => handlePageClick(startPage - 1)}
      >
        &laquo;
      </button>
    );
  }

  if (endPage < totalPages) {
    buttons.push(
      <button
        key={"pagination-btn-next"}
        className="bg-white p-2 text-black font-black transition-all hover:scale-125 hover:cursor-pointer"
        onClick={() => handlePageClick(endPage + 1)}
      >
        &raquo;
      </button>
    );
  }

  return buttons;
}

export function Pagination({ totalPages, currentPage, handlePageClick }) {
  return (
    <div className="flex justify-center gap-1">
      <ButtonsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageClick={handlePageClick}
      />
    </div>
  );
}

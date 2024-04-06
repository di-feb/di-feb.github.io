function Pagination({ totalPageCount, currentPage, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPageCount; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={currentPage === number ? 'active' : ''}
                >
                    {number}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
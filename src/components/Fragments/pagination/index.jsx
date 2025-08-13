import PaginationItem from "./PaginationItem";

const Pagination = ({currentPage, setCurrentPage, totalResult}) => {
    const firstMovieNumber = ((currentPage - 1) * 20) + 1;
    const lastMovieNumber = firstMovieNumber + totalResult.moviesPerPage - 1
    const handleChangePage = (pageDestination) => {
        if (pageDestination > 0) {
            setCurrentPage(pageDestination);
        }
    }

    return (
        <nav className="my-5 flex flex-col items-center">
            <ul className="flex items-center -space-x-px h-8 text-sm">
                {/* <PaginationItem onClick={() => handleChangePage(currentPage - 1)}>
                    <Icon icon="navArrow" size="10" />
                </PaginationItem> */}
                <PaginationItem onClick={() => handleChangePage(currentPage - 2)} totalPages={totalResult.totalPages}>{currentPage - 2}</PaginationItem>
                <PaginationItem onClick={() => handleChangePage(currentPage - 1)} totalPages={totalResult.totalPages}>{currentPage - 1}</PaginationItem>
                <PaginationItem isActive={true}>{currentPage}</PaginationItem>
                <PaginationItem onClick={() => handleChangePage(currentPage + 1)} totalPages={totalResult.totalPages}>{currentPage + 1}</PaginationItem>
                <PaginationItem onClick={() => handleChangePage(currentPage + 2)} totalPages={totalResult.totalPages}>{currentPage + 2}</PaginationItem>
                {/* <PaginationItem onClick={() => handleChangePage(currentPage + 1)}>
                    <Icon icon="navArrow" className="rotate-180" size="10" />
                </PaginationItem> */}
            </ul>
            <p className="text-sm mt-2">Showing {firstMovieNumber} to {lastMovieNumber} of {totalResult.totalResults} movies</p>
        </nav>
    );
}

export default Pagination;
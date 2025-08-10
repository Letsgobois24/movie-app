const PaginationItem = ({ children, isActive = false, onClick, totalPages }) => {
    return (
        <li
            onClick={onClick}
            className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer
                ${isActive ? 'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
                }
                ${(children <= 0 || children > totalPages) && 'hidden'}`

            }>
            {children}
        </li>
    );
}

export default PaginationItem;
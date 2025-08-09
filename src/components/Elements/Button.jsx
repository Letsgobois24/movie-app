const Button = ({children, color, onClick}) => {
    const classColor = {
        'blue' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300',
        'transparent' : 'hover:text-gray-900 text-white hover:bg-gray-100 focus:ring-gray-400 border border-white',
        'yellow' : 'bg-yellow-500 hover:bg-yellow-600 text-dark focus:ring-yellow-400'
    }
    
    return (
        <button onClick={onClick} className={`${classColor[color]} inline-flex cursor-pointer justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg focus:ring-4 shadow-md transition`}>
            {children}
        </button>
    )
}

export default Button;
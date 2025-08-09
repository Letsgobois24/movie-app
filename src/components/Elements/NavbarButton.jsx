const NavbarButton = ({children, className, onClick}) => {
    return (
        <button onClick={onClick} className={`${className} w-12 h-12 rounded-full hover:bg-slate-600 flex justify-center items-center text-light cursor-pointer`}>
            {children}
        </button>
    )
}

export default NavbarButton;
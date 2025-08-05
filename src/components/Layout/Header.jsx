const Header = ({onClickToggle}) => {
    return (
        <header className="bg-dark w-full h-15 flex items-center justify-start">
            <div onClick={onClickToggle} className="text-2xl w-12 h-12 cursor-pointer rounded-full hover:bg-slate-600 flex justify-center items-center text-light">
                ☰
            </div>
        </header>
    )
}

export default Header;
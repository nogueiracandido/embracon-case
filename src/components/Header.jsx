import logo from '../images/embracon-logo.svg'

export function Header(){
    return(
        <>
        <header>
                <nav id="navbar" className="">
                    <div className="nav-wrapper">
                        <div className="logo">
                            <a href="#">
                                <i className="fas fa-chess-knight"></i> 
                                <img src={logo} alt="Embracon Logomarca" />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-1 ms-lg-4">
                    <li className="nav-item active">
                        <a className="navbar-brand text-white" href="/">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="navbar-brand text-white" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="navbar-brand text-white" href="/profile">Profile</a>
                    </li>
                </ul>
            </div>
            <div className="justify-content-end collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-1 ms-lg-4">
                    <li className="nav-item d-flex">
                        <a className="navbar-brand text-white" href="/login">Login</a>
                    </li>
                    <li className="nav-item ml-5 d-flex">
                        <a className="navbar-brand text-white" href="/registration">Registration</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
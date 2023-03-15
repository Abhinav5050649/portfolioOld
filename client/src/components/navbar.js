import React from "react";

const Navbar = ()=> {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">AS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" href="/">About Me<span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/projects">Projects</a>
                    <a className="nav-link" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
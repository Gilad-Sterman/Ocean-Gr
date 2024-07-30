import { useState } from "react"

export function AppHeader({ showForm, setShowForm }) {

    const [menuOpen, setMenuOpen] = useState(false)

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    function toggleMenu(ev) {
        ev.stopPropagation()
        setMenuOpen(!menuOpen)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (
        <header className="app-header" onClick={closeMenu}>
            <div className="logo" onClick={() => scrollToTop()}>
                <div className="img-container">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1722258765/OCEAN%20Gr/drone_1_r8ccm9.png" alt="logo" />
                </div>
                <span>OCEAN Gr</span>
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <a href="#services">Services</a>
                <a href="#method">Our Method</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#team">Our Team</a>
                <a href="#contact">Contact</a>
            </nav>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={(ev) => toggleMenu(ev)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
        </header>
    )
}
export function AppFooter({ showForm, setShowForm }) {
    return (
        <footer className="app-footer" id="contact">
            <div className="footer-content">
                <div className="top">
                <h4>OCEAN Group</h4>
                <p>Aerial Inspections.<br />Remote Sensing.<br />3D Mapping Solutions.</p>
                </div>
                <div className="contact-info">
                    <div className="info email">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                        <a href="mailto:Drones3dModels@gmail.com">Drones3dModels@gmail.com</a>
                        <a href="mailto:Office@icd.org.il">Office@icd.org.il</a>
                        <a href="mailto:Shachar.hyman@gmail.com">Shachar.hyman@gmail.com</a>
                    </div>
                    <div className="info phone">
                        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716119137/icons/icons8-phone-50_q2ivfp.png" alt="phone" />
                        <a href="tel:+972586543129">+972-58-654-3129</a>
                        <a href="tel:+9725475866571">+972-54-758-6657</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <nav>
                    <a href="#services">Services</a>
                    <a href="#method">Our Method</a>
                    <a href="#team">Our Team</a>
                    <a href="#contact">Contact</a>
                </nav>
                <div className="links">
                    <a href="https://www.linkedin.com/in/gilad-sterman-7b2469278/" target="_blank" rel="noopener noreferrer">Created By Gilad Sterman 2024</a>
                </div>
            </div>
        </footer>
    )
}
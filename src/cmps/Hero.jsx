import { DownScroll } from "./DownScroll";

export function Hero({ showForm, setShowForm }) {
    return (
        <section className="hero">
            <div className="txt">
                <h3>OCEAN Group</h3>
                <p>Aerial Inspections. <br />Remote Sensing. <br />3D Mapping Solutions.</p>
                <a href="#contact">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716108050/icons8-email-50_k3jpwc.png" alt="email" />
                    <span>Contact Us</span>
                </a>
            </div>
            <img className="hero-img" src="https://res.cloudinary.com/dollaguij/image/upload/v1722260356/OCEAN%20Gr/her02_qud5ng.jpg" alt="Hero_img" />
        </section>
    )
}
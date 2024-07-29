import { useState } from "react"
import { DownScroll } from "./DownScroll"

export function Services() {
    const services = [
        {
            title: 'Water Leaking Inspection',
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243276/OCEAN%20Gr/Picture2_avzsfw.png',
            imgUrl1: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243277/OCEAN%20Gr/Picture8_uysssp.png',
            imgUrl2: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243276/OCEAN%20Gr/Picture7_uzsqqy.png'
        },
        {
            title: 'Road Inspections',
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243276/OCEAN%20Gr/Picture1_nsl4qi.jpg',
            imgUrl1: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243277/OCEAN%20Gr/Picture11_fg76ae.jpg',
            imgUrl2: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243277/OCEAN%20Gr/Picture12_dqmoyv.jpg'
        },
    ]

    const [selected, setSelected] = useState(services[0])

    return (
        <section id="services" className="services">
            <div className="title">
                <div className="first line">
                    <span className="small">Our</span>
                    <span>Services</span>
                </div>
                <div className="second line">
                    <span>Remote</span>
                    <span className="small">Sensing</span>
                </div>
            </div>
            <div className="service-container" data-aos="slide-up">
                {services.map((service, index) => (
                    <div key={index} className={`service-card c${index + 1} ${selected.title === service.title ? 'selected' : ''}`} onClick={() => setSelected(service)}>
                        <h4>{service.title}</h4>
                        <img src={service.imgUrl} alt={service.title} className="service-image" />
                    </div>
                ))}
            </div>
            <div className="service-details">
                <h4>{selected.title}</h4>
            </div>
        </section>
    )
}
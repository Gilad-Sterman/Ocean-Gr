import { DownScroll } from "./DownScroll"

export function Method() {
    const stages = [
        {
            title: 'Data Collection Via Aerial Sensors',
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243276/OCEAN%20Gr/Picture3_hjme4m.png'
        },
        {
            title: 'Analysis & Report',
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243275/OCEAN%20Gr/Picture15_cxgacy.jpg'
        },
        {
            title: 'GIS Layer',
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243275/OCEAN%20Gr/Picture16_sqgete.png'
        }
    ]

    return (
        <section id="method" className="method">
            <div className="title">
                    <span className="small">Our</span>
                    <span>Method</span>
            </div>
            <ul className="stage-list" data-aos="fade-up">
                {stages.map((stage, index) => (
                    <li key={index} className={`stage-item s${index + 1}`} >
                        <img className="stage-img" src={stage.imgUrl} alt={stage.title} />
                        <div className="stage-num">{index + 1}</div>
                        <h4 className="stage-name">{stage.title}</h4>
                    </li>
                ))}
            </ul>
        </section>
    )
}
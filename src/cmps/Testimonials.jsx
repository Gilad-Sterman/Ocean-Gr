export function Testimonials() {
    const testimonials = [
        {
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1716310059/icons/kord/account_me6aym.png',
            title: 'Excellent Service!',
            description: 'The 3D mapping provided was top-notch and very detailed. It helped us immensely in our project planning.',
            name: 'Moshe Cohen'
        },
        {
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1716310059/icons/kord/account_me6aym.png',
            title: 'Highly Recommend',
            description: 'Their drone mapping technology is state-of-the-art. The team was professional and delivered on time.',
            name: 'Jane Smith'
        },
        {
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1716310059/icons/kord/account_me6aym.png',
            title: 'Outstanding Results',
            description: 'We were impressed by the accuracy and clarity of the maps. Will definitely use their services again!',
            name: 'Michael Brown'
        }
    ]

    return (
        <section id="testimonials" className="testimonials">
            <div className="title">
                <span>Testimonials</span>
            </div>
            <ul className="testimonial-list">
                {testimonials.map((testimonial, index) => (
                    <li key={index} className={`testimonial-item s${index + 1}`} data-aos="flip-up">
                        <img className="testimonial-img" src={testimonial.imgUrl} alt={testimonial.title} />
                        <h4 className="testimonial-title">{testimonial.title}</h4>
                        <p className="description">{testimonial.description}</p>
                        <span className="testimonial-name">{testimonial.name}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
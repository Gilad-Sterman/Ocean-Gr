export function Contact({ selected, setSelected }) {
    return (
        <section id="contact" className="contact" >
            <div className="title">
                    <span>Contact</span>
                    <span className="small">Us</span>
            </div>
            <form data-aos="fade-in">
                <div className="my-input">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="my-input">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="my-input">
                    <label htmlFor="details">Additional Details:</label>
                    <textarea name="details" id="details"></textarea>
                </div>
            </form>
        </section>
    )
}
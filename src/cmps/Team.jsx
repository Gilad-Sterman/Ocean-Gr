import { DownScroll } from "./DownScroll"

export function Team() {
    const steps = [
        {
            title: 'Initial Consultation',
            description: 'Discuss the project requirements, goals, and timelines to ensure a clear understanding of the client’s needs.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126287/icons/Frame_87_jelyie.png"
        },
        {
            title: 'Project Proposal',
            description: 'Provide a detailed proposal outlining the project scope, deliverables, timeline, and cost estimate.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126283/icons/Frame_87_1_p2ua0a.png"
        },
        {
            title: 'Design & Development',
            description: 'Create design mockups for approval, then proceed with the development phase, ensuring continuous communication and updates.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126283/icons/Frame_87_2_mgzamy.png"
        },
        {
            title: 'Testing & Feedback',
            description: 'Conduct thorough testing to identify and fix any issues, and incorporate client feedback to refine the project.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126285/icons/Frame_87_4_rozrqj.png"
        },
        {
            title: 'Project Delivery',
            description: 'Deliver the completed project, provide necessary documentation, and offer training if required.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126286/icons/Frame_87_5_p9wliw.png"
        },
        {
            title: 'Post-Launch Support',
            description: 'Provide ongoing support and maintenance to ensure the project continues to run smoothly.',
            icon: "https://res.cloudinary.com/dollaguij/image/upload/v1716126284/icons/Frame_87_3_bcpapx.png"
        }
    ]
    const teamMembers = [
        {
            name: 'Shachar Hyman', 
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243275/OCEAN%20Gr/Hayman_hrjapy.png',
            title: 'CEO' 
        },
        {
            name: 'Vova Chernoluzski', 
            imgUrl: 'https://res.cloudinary.com/dollaguij/image/upload/v1722243276/OCEAN%20Gr/Chernoluzski_zj46dz.jpg',
            title: 'R&D Manager' 
        }
    ]

    return (
        <section id="team" className="team">
            <div className="title">
                    <span className="small">Our</span>
                    <span>Team</span>
            </div>
            <div className="team-members" data-aos="zoom-in-up" data-aos-duration="1500">
                {teamMembers.map((member, index) => (
                    <div key={index} className="member">
                        <img src={member.imgUrl} alt={member.name} />
                        <div className="info">
                            <h4>{member.name}</h4>
                            <p>{member.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
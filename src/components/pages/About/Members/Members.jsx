import image1 from '../../../../assets/images/about/team-1-members.png';
import image2 from '../../../../assets/images/about/team-2-members.png';
import image3 from '../../../../assets/images/about/team-3-members.png';

const cards = [
    {
        image: image1,
        title: 'Ricardo Lucachinski',
        content: "Founder & Business Consultant"
    },
    {
        image: image2,
        title: 'Rafael Macedo',
        content: "Head Development"
    },
    {
        image: image3,
        title: 'David Cassal',
        content: "Head Design"
    }
]


const Members = () => {
    return(
        <section className='members'>
            <div className='members__title'>
                <h2 className='members__title-content'>The team</h2>
            </div>
            <div className="members__cards">
                {
                    cards?.map((card,id) => (
                        <div key={id} className="members__card">
                            <img src={card.image} alt={card.title} />
                            <h2>{card.title}</h2>
                            <small>{card.content}</small>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Members;
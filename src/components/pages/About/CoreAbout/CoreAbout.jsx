import icon1 from '../../../../assets/icons/core_values/icon-1.svg';
import icon2 from '../../../../assets/icons/core_values/icon-2.svg';
import icon3 from '../../../../assets/icons/core_values/icon-3.svg';


const cards = [
    {
        image: icon1,
        title: 'Customer-focused',
        content: "Concentrating on our customers' requests first. We understand the value of providing high-quality service to our clients. We strive to obtain the best results possible by keeping our clients’ goals in mind and tailoring our services to their unique needs."
    },
    {
        image: icon2,
        title: 'Integrity',
        content: "We operate with strong moral principles that guide our decisions and actions. Integrity is the core of everything we do in BigApplePia. That’s why we only use the best technology and tools available to create the best possible products for our clients operating as one team, one soul."
    },
    {
        image: icon3,
        title: 'Courageous',
        content: "Ready to face any negative situation we may encounter in the technological path of the industry. Through our progressive process we’ll conquer any seo challenges for our customers' benefit in the way."
    }
]

const CoreAbout = () => {
    return(
        <section className="core__about">
            <div className='core__about-container'>
                <div className="core__about-row-1">
                    <h2 className="core__about-row-1-title">
                        {
                            window.innerWidth < 1024 ?
                                <span>Our values, <br/>Core values</span>
                            : 
                                <span>Our values, Core values</span>
                        }
                    </h2>
                    <p className="core__about-row-1-content">In BigApplePia we define excellency by practicing:</p>
                </div>

                <section className="core__about-cards">
                    {
                        cards?.map((card,id) => (
                            <div key={id} className="card">
                                <div className='card__icon-title'>
                                    <span className='card__icon'><img src={card.image} alt="Icone" /></span>
                                    <p className="card__customer">{card.title}</p>
                                </div>
                                <div className="card__content">
                                    <p>{card.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </div>
        </section>
    )
}

export default CoreAbout;
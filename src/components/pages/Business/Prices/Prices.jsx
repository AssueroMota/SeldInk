import { Link } from 'react-router-dom';

const cards = [
    { 
        title: 'Basic',
        description: 'We will build a template WordPress website based on your samples provided, direction and brand guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'Website from Scratch',
            '2 Page Custom Mock-up',
            'Custom WordPress CMS',
            '1 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            'Google Maps'
        ],
        price: '$5,000',
        plan: 'Basic Package'
    },
    { 
        title: 'Middle',
        description: 'We will build a template WordPress website based on your samples provided, direction and brand guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'Website from Scratch',
            '2 Page Custom Mock-up',
            'Custom WordPress CMS',
            '1 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            'Google Maps',
            'Mailing List Plugin',
            'Contact Form',
            'Social Sharing'
        ],
        price: '$10,000',
        plan: 'Middle Package'
    },
    { 
        title: 'Advanced',
        description: 'We will build a template WordPress website based on your samples provided, direction and brand guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'Website from Scratch',
            '2 Page Custom Mock-up',
            'Custom WordPress CMS',
            '1 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            'Google Maps',
            'Mailing List Plugin',
            'Contact Form',
            'Social Sharing',
            'Photo Sourcing',
            '404 Redirect',
            'XML Sitemap',
            'Google Analytics'
        ],
        price: '$15,000',
        plan: 'Advanced Package'
    },
    { 
        title: 'Enterprise',
        description: 'We will build a template WordPress website based on your samples provided, direction and brand guidelines.',
        subtitle: 'Website Package Details',
        technologies: [
            'Website from Scratch',
            '2 Page Custom Mock-up',
            'Custom WordPress CMS',
            '1 Hour Brainstorm',
            'Mobile Responsive',
            'Social Media Integration',
            '6 Custom Icons',
            'Google Maps',
            'Mailing List Plugin',
            'Contact Form',
            'Social Sharing',
            'Photo Sourcing',
            '404 Redirect',
            'XML Sitemap',
            'Google Analytics',
            '2 Hour “How To” Tutorial',
            '3 Rounds of Revisions'
        ],
        price: '$25,000',
        plan: 'Enterprise Package'
    }
]

const Prices = () => {
    return(

        <section className="price">
            <div className="price__title">
                {
                    window.innerWidth < 1024 ?
                        <h2 className="price__content-title">Our website <br/> princing</h2>
                    :
                        <h2 className="price__content-title">Our website princing</h2>
                }
            </div>
            <div className="price__cards">
                {
                    cards?.map((card,index) => (
                        <div key={index} className="price__card">
                            <h3 className="price__card-main-title">{card.title}</h3>
                            <p className="price__card-small-description">{card.description}</p>
                            <h4 className="price__card-subtitle">{card.subtitle}</h4>
                            <ul className="price__card-list">
                                {
                                    card?.technologies?.map((c,index) => (
                                        <li key={index}>{c}</li>
                                    ))
                                }
                            </ul>
                            <div className="price__card-item-1">
                                <p className="price">{card.price}</p>
                                <small className="tag">{card.plan}</small>
                            </div>
                            <div className="price__card-item-2">
                                <Link to="tel:19177892469">Contact Us</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Prices;
import piercing from '../../assets/icons/services/piercing.svg';
import tattoo from '../../assets/icons/services/tattoo.svg';

const Services = () => {
    return(
        <section className="services__bg">
            <div className='services'>
                <div className="services__col-left">
                    <img src={tattoo} alt="tattoo" />
                    <p>We have tattoo artists specializing in Color Realism, Black and Gray Realism, Black Work, Cover-ups, Fine Line, Water Color and Portraits.</p>
                </div>
                <div className="services__col-right">
                    <img src={piercing} alt="Piercing" />
                    <p>We offer quality piercing services, performed by experienced and protected professionals, who use the best techniques and materials available on the market.</p>
                </div>
            </div>
        </section>
    )
}

export default Services;
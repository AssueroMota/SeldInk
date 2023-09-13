import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import service1 from '../../assets/images/services/contrast-1.png';
import service2 from '../../assets/images/services/contrast-2.png';
import service3 from '../../assets/images/services/contrast-3.png';
import service4 from '../../assets/images/services/contrast-4.png';
import service5 from '../../assets/images/services/contrast-5.png';
import service6 from '../../assets/images/services/contrast-6.png';

import service1Large from '../../assets/images/services/services-1-large.webp';
import service2Large from '../../assets/images/services/services-2-large.webp';
import service3Large from '../../assets/images/services/services-3-large.webp';
import service4Large from '../../assets/images/services/services-4-large.webp';
import { useLayoutEffect } from "react";

const services = [
    {
        id: 1,
        image: service1,
        title: 'TYPE I',
        content: 'Light,<br /> pale white <br /> Always burns, <br /> never tans',
    },
    {
        id: 2,
        image: service2,
        title: 'TYPE II',
        content: 'White,<br /> fair <br /> Usually burns,<br/> tans with difficulty',
    },
    {
        id: 3,
        image: service3,
        title: 'TYPE III',
        content: 'Mediu,<br /> white to olive <br /><br /> Sometimes mild <br /> burn, gradually <br /> tans to olive',
    },
    {
        id: 4,
        image: service4,
        title: 'TYPE IV',
        content: 'Olive,<br /> moderate brown <br /> Rarely burns, tans <br /> with ease to a <br /> moderate brown',
    },
    {
        id: 5,
        image: service5,
        title: 'TYPE V',
        content: 'Brown,<br /> dark brown <br /> Very rarely burns, <br /> tans very easily',
    },
    {
        id: 6,
        image: service6,
        title: 'TYPE VI',
        content: 'Black, very dark <br /> brown to black <br /> Never burns, tans <br /> very easily, deeply <br /> pigmented',
    }
]

const serviceImages = [
    {
        id: 1,
        image: service1Large
    },
    {
        id: 2,
        image: service2Large
    },
    {
        id: 3,
        image: service3Large
    },
    {
        id: 4,
        image: service4Large
    }
]

const viewportScale = Math.round(window.visualViewport.scale * 100);
const ServicesTattoo = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const ImgTatto = Array.from(document.querySelectorAll('.detail-col-right img'));
            ImgTatto.map(tatoo => {
                //Efeito de Zoom
                if (viewportScale > 100) {
                    tatoo.classList.remove('grayed-out');
                }
                if (window.scrollY >= 400) {
                    tatoo.classList.add('grayed-out');
                } else {
                    tatoo.classList.remove('grayed-out');
                }
            })
        })
    }, []);


    return (
        <>
            <Header />

            <header className='title-mobile'>
                <h1 className='detail-title'>TATTOO</h1>
            </header>

            <section className='detail'>
                <div className='detail-col-left'>
                    <div className='detail-breadcrumb'>
                        <p className='detail-breadcrumb-content'>
                            Services /
                            <span className='detail-breadcrumb-styled'> Tattoo</span>
                        </p>
                    </div>
                    <h1 className='detail-title detail-title-tattoo'>TATTOO</h1>
                    <p className='detail-content detail-content-tattoo'>We have tattoo artists specializing in Color Realism, Black and Gray Realism, Black Work, Cover-ups, Fine Line, Water Color and Portraits.</p>
                    <h2 className='detail-process'>DESIGN PROCESS</h2>
                    <p className="detail-content-2">Our design process is entirely custom for each customer that comes into the shop. If you have an idea on the design that you would like, then we can start there and suggest adjustments accordingly based on your skin tone, size, placement and your unique body features.</p>

                    <div className='detail-services'>
                        {/* <Slider {...settings}> */}
                        {
                            services?.map(service => (
                                <div key={service.id} className='detail-services-item'>
                                    <img src={service.image} alt="" />
                                    <h4>{service.title}</h4>
                                    <p dangerouslySetInnerHTML={{ __html: service.content }}></p>
                                </div>
                            ))
                        }
                        {/* </Slider> */}
                    </div>

                    <div className='detail-infos'>
                        <p>Certain skin tones only allow for certain styles and types of tattoos. For more information on how melanin can effect the look of your tattoo please see these resources:</p>
                        <ul className="detail-list">
                            <li><Link to="https://www.medicalnewstoday.com/articles/tattoos-on-dark-skin" target={'_blank'}>What to know about tattoos on dark skin - Medical News Today</Link></li>
                            <li><Link to="https://authoritytattoo.com/do-tattoos-look-better-on-lighter-or-darker-skin/" target={'_blank'}>Do Tattoos Look Better on Lighter or Darker Skin? - Tattoo Authority</Link></li>
                        </ul>
                        <p>If you have any additional questions, feel free to contact the shop!</p>
                    </div>
                    <div className='detail-links details-links-tattoo'>
                        <span className='detail-schedule'><Link to="/contact">Book Now</Link></span>
                    </div>
                </div>
                <div className='detail-col-right detail-col-right-tattoo'>
                    {
                        serviceImages?.map(image => (
                            <figure key={image.id}>
                                <img key={image.id} src={image.image} alt="" />
                            </figure>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </>

    )
}

export default ServicesTattoo;
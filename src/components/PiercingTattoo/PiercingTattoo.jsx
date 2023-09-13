import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';
import piercing1Large from '../../assets/images/piercing/piercing-1.webp';
import piercing2Large from '../../assets/images/piercing/piercing-2.webp';
import piercing3Large from '../../assets/images/piercing/piercing-3.webp';
import piercing4Large from '../../assets/images/piercing/piercing-4.webp';
import { useLayoutEffect } from "react";


const serviceImages = [
    {
        id: 1,
        image: piercing1Large
    },
    {
        id: 2,
        image: piercing2Large
    },
    {
        id: 3,
        image: piercing3Large
    },
    {
        id: 4,
        image: piercing4Large
    }
]
const viewportScale = Math.round(window.visualViewport.scale * 100);
const PiercingTattoo = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const ImgPiercing = Array.from(document.querySelectorAll('.detail-col-right-piercing img'))
            ImgPiercing.map(i => {
                //Efeito de Zoom
                if (viewportScale > 100) {
                    i.classList.remove('grayed-out');
                }
                if (window.scrollY >= 380) {
                    i.classList.add('grayed-out');
                } else {
                    i.classList.remove('grayed-out');
                }
            })

        })
    }, []);
    return (
        <>
            <Header />
            <section className='detail'>
                <div className='detail-col-left'>
                    <div className='detail-breadcrumb'>
                        <p className='detail-breadcrumb-content'>
                            Services /
                            <span className='detail-breadcrumb-styled'> Piercing</span>
                        </p>
                    </div>
                    <h1 className='detail-title detail-title-piercing'>PIERCING</h1>
                    <p className='detail-content-2'>We offer quality piercing services, performed by experienced and protected professionals, who use the best techniques and materials available on the market. Our goal is to make sure the drilling process is as safe and comfortable as possible.</p>
                    <p className='detail-content detail-content-piercing'>In addition to piercing, we have a wide range of high quality jewelry and accessories options, so you can customize your piercing and make it even more unique and special.</p>

                    <div className='detail-links detail-links-piercing'>
                        <span className='detail-schedule'><Link to="/contact">Book Now</Link></span>
                    </div>
                </div>
                <div className='detail-col-right detail-col-right-piercing '>

                    {
                        serviceImages?.map(image => (
                            <figure>
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

export default PiercingTattoo;
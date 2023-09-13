import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { useParams, Link } from 'react-router-dom';
import artistImage1 from '../../../assets/images/artist/artist-detail/artist-photo-1.webp';
import artistImage2 from '../../../assets/images/artist/artist-detail/artist-photo-2.webp';
import artistImage3 from '../../../assets/images/artist/artist-detail/artist-photo-3.webp';
import videoDesktop from '../../../assets/video/video-banner-selden.mp4';
import { useLayoutEffect } from 'react';
import React, { useState } from 'react';

// import './style.css';

const details = [
    {
        id: 1,
        title: 'LUIZ LOPES',
        breadcrumb: 'Luiz Lopes',
        url: 'luiz-lopes',
        content: "<p>The owner of Selden ink Luiz A. Lopes is a Brazilian tattoo artist who has been working with color realism and black gray since 2003 He is specialist in portraits ,cover-up but also has knowledge of many other styles like dotwork, black work, Water Color, maori and other styles.<br /><br/>With a lot of dedication and hard work he managed to win more than 150 trophies at the biggest and toughest tattoo conventions such as Empire State Tattoo Expo, Golden State Tattoo, Boston Tattoo Expo, Philadelpia TAttoo Expo, Tattoo Week SP, Tattoo Week Rio and more!<br /><br/>He also has been a judge of many events such as Empire State Tattoo Expo, Golden State Tattoo,Tattoo Week SP, and more. Luiz A. Lopes is one of the most respected artists in his field. His work has been featured on several magazines such as Metal Head Tattoo, Freshly Inked Magazine, Tattoo Life Magazine, Inked Magazine, Tattoo Brasil Magazine, Tattoo Artistry Magazine, etc.<br /><br/>Luis has dedicated his life to this art and he does not stop growing as an artist. He's always trying new things, experimenting with color and different techniques. His work is full of energy and life, so you feel like you're being tattooed by a real artist when you look at his works.</p>",
        schedule: 'Book Now',
        linkSchedule: '/contact',
        portfolio: 'Visit your portfolio',
        linkPortfolio: '/portfolio',
        image: artistImage1
    },
    {
        id: 2,
        title: 'BELLA',
        breadcrumb: 'Bella',
        url: 'bella',
        content: '<p>BELLA is a professional Body Piercer and Tattoo Artist, she started her career in 2005 working as an Body Piercer with a lot of dedication and excellence in each job, after 5 years focused on specializing only in piercing, Bella decided to dedicate herself to tattooing. She is specializes in in fine line, water color but also has knowledge of many other styles like dotwork, black work, maori and other styles.<br /><br/>Bella is a true artist and loves what she does. She is dedicated to quality and perfection so that each client will leave their experience at the best possible state.<br /><br/>She loves her job because it allows her to meet all kinds of people from all over the world with different cultures and beliefs. She also likes being able to share with others her knowledge of her art as well as learning from them too!<br /><br/>I hope to see you soon!</p>',
        schedule: 'Book Now',
        linkSchedule: '/contact',
        portfolio: 'Visit your portfolio',
        linkPortfolio: '/portfolio',
        image: artistImage2
    },
    {
        id: 3,
        title: 'GUESTS',
        breadcrumb: 'Guests',
        content: '<p>Find the perfect workstation to serve your customers from anywhere! In partnership with My Ink, our studio is part of the My Ink Chair network.<br /><br/>We provide workstations for artists who can take advantage of our infrastructure to serve their clients. All our equipment is top of the line to bring comfort and quality during calls.<br /><br/>Visit our My Ink Chair profile!</p>',
        schedule: 'Book Now',
        linkSchedule: '/contact',
        portfolio: 'Visit your portfolio',
        linkPortfolio: '/portfolio',
        image: artistImage3
    }
]
const viewportScale = Math.round(window.visualViewport.scale * 100);
const Detail = () => {
    const { id } = useParams();

    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const images = Array.from(document.querySelectorAll('.detail-col-right-2 img'));
            images.map(image => {
                //Efeito de Zoom
                if (viewportScale > 100) {
                    image.classList.remove('grayed-out');
                }
                if (window.scrollY >= 300) {
                    image.classList.add('grayed-out');
                } else {
                    image.classList.remove('grayed-out');
                }
            })
        })
    }, [])

    return (
        <>
            <Header />
            <section className='detail detail-artist'>
                {
                    details?.map(detail => {
                        return detail.id == id ?
                            <div key={detail.id} className='detail-col-left'>
                                <div className='detail-breadcrumb'>
                                    <p className='detail-breadcrumb-content'>
                                        Artist /
                                        <span className='detail-breadcrumb-styled'> {detail.breadcrumb}</span>
                                    </p>
                                </div>
                                <h1 className='detail-title'>{detail.title}</h1>
                                <p className='detail-content' dangerouslySetInnerHTML={{ __html: detail.content }}></p>
                                <div className='detail-links'>
                                    <span className='detail-schedule'><Link to={detail.linkSchedule}>{detail.schedule}</Link></span>
                                    {
                                        detail.portfolio != '' && <span className='detail-portfolio'><Link to={detail.linkPortfolio}>{detail.portfolio}</Link></span>
                                    }
                                </div>
                            </div>
                            :
                            null
                    })
                }

                {/* <div className='detail-video'>
                    <video loop autoPlay muted>
                        <source src={window.innerWidth < 1024 ? videoDesktop : videoDesktop} type="video/mp4" />
                    </video>
                </div> */}
                <div className='detail-col-right-2'>
                    {
                        details?.map(detail => {
                            return detail.id == id ?
                                <img key={detail.id} src={detail.image} alt="Image right detail" />
                                :
                                null
                        })
                    }
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Detail;
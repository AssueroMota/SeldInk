import { Link } from 'react-router-dom';

import imageLarge from '../../assets/images/since/before-after.webp';
import imageSmall1 from '../../assets/images/since/since-small-1.webp';
import imageSmall2 from '../../assets/images/since/since-small-2.webp';
import imageSmall3 from '../../assets/images/since/since-small-3.webp';
import imageSmall4 from '../../assets/images/since/since-small-4.webp';
import { useLayoutEffect } from 'react';

const largeImage = [
    {
        id: 1,
        image: imageLarge,
        alt: 'Large Image 1'
    }
];

const smallImages = [
    {
        id: 1,
        image: imageSmall1,
        alt: 'Small Image 1'
    },
    {
        id: 2,
        image: imageSmall2,
        alt: 'Small Image 2'
    },
    {
        id: 3,
        image: imageSmall3,
        alt: 'Small Image 3'
    },
    {
        id: 4,
        image: imageSmall4,
        alt: 'Small Image 4'
    }
];
const viewportScale = Math.round(window.visualViewport.scale * 100);
const Since = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const ImgTattoo = Array.from(document.querySelectorAll('.since__container-photos .since__large-photos img'));
            const ImgTattooLitle = Array.from(document.querySelectorAll('.since__small-photos img'));

            if (window.innerWidth >= 380 && window.innerWidth <= 425) {
                ImgTattoo.map(i => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 2200 && window.scrollY <= 3200) || (window.scrollY >= 3590)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                })
            }
            if (window.innerWidth >= 320 && window.innerWidth <= 375) {
                ImgTattoo.map(i => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 1000 && window.scrollY <= 2900) || (window.scrollY >= 3590)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                })
            }
            // Tablet
            if (window.innerWidth >= 700 && window.innerWidth <= 920) {
                ImgTattoo.map(i => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 200 && window.scrollY <= 4110) || (window.scrollY >= 4600)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                })
            }

            //celular maior
            if (window.innerWidth >= 380 && window.innerWidth <= 425) {
                ImgTattooLitle.map(ii => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 2200 && window.scrollY <= 3200) || (window.scrollY >= 3820)) {
                        ii.classList.add('grayed-out');
                    } else {
                        ii.classList.remove('grayed-out');
                    }
                })
            }
            //Celular Menor
            if (window.innerWidth >= 320 && window.innerWidth <= 375) {
                ImgTattooLitle.map(ii => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 2200 && window.scrollY <= 2900) || (window.scrollY >= 3427)) {
                        ii.classList.add('grayed-out');
                    } else {
                        ii.classList.remove('grayed-out');
                    }
                })
            }//TABLET
            if (window.innerWidth >= 700 && window.innerWidth <= 920) {
                ImgTattooLitle.map(ii => {
                    //Efeito de Zoom
                    if (viewportScale > 100) {
                        i.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 2200 && window.scrollY <= 4220) || (window.scrollY >= 5260)) {
                        ii.classList.add('grayed-out');
                    } else {
                        ii.classList.remove('grayed-out');
                    }
                })
            }
        })
    }, [])
    return (
        <section className='since'>
            <div className='since__container'>
                <div className='since__title'>
                    <h5>SINCE <span>1958</span></h5>
                </div>
                <div className='since__container-cols'>
                    <div className='since__col-left'>
                        <address>
                            Tattoo Lou's <br />
                            Long Island, NY <br />
                            Est. 1958
                        </address>
                        <Link to="https://www.inkedmag.com/tattoo-history-2/visit-11-of-the-oldest-tattoo-shops-in-the-world" target="_blank">Check us out on Inkedmag.com</Link>
                    </div>
                    <div className='since__col-right'>
                        <p>Tattoo Lou’s Selden has been around since 1958 and has become a legend in the art of tattooing.</p>
                        <p>Selden.Ink is located at the same address as “Tattoo Lou’s Selden”.</p>
                        <p>We were honored to purchase this studio from the son of founder Lou Robino Jr, we are working under a new name and direction since January 2021, we work hard to maintain the best quality in each tattoo style.</p>
                    </div>
                </div>
                <div className='since__container-photos'>
                    <div className='since__large-photos'>
                        {
                            largeImage?.map(image => (
                                <div key={image.id}>
                                    <img src={image.image} alt={image.alt} />
                                </div>
                            ))
                        }
                    </div>
                    <div className='since__small-photos'>
                        {
                            smallImages?.map(image => (
                                <div key={image.id}>
                                    <img src={image.image} alt={image.alt} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Since;
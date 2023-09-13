import image1 from '../../assets/images/gallery/image.webp';
import image2 from '../../assets/images/gallery/image-2.webp';
import image3 from '../../assets/images/gallery/image-3.webp';
import image4 from '../../assets/images/gallery/image-4.webp';
import image5 from '../../assets/images/gallery/image-5.webp';
import image6 from '../../assets/images/gallery/image-6.webp';
import bannerImagePortfolio from '../../assets/images/portfolio-gallery.png';
import bannerImagePortfolioMobile from '../../assets/images/portfolio-gallery-mobile.png';
import { useLayoutEffect } from 'react';

const loadImages = [
    {
        id: 1,
        image: image1,
        alt: "Image tattoo 1"
    },
    {
        id: 2,
        image: image2,
        alt: "Image tattoo 2"
    },
    {
        id: 3,
        image: image3,
        alt: "Image tattoo 3"
    },
    {
        id: 4,
        image: image4,
        alt: "Image tattoo 4"
    },
    {
        id: 5,
        image: image5,
        alt: "Image tattoo 5"
    },
    {
        id: 6,
        image: image6,
        alt: "Image tattoo 6"
    }
]

const viewportScale = Math.round(window.visualViewport.scale * 100);
const Gallery = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const ImageGallery = Array.from(document.querySelectorAll('.gallery__container .gallery__image-item img'));
            ImageGallery.map(i => {  
                
                //Efeito de Zoom
                if (viewportScale > 100) {
                    i.classList.remove('grayed-out');
                }
                
                //Celular Maior
                if (window.innerWidth >= 376 && window.innerWidth <= 425) {
                    if ((window.scrollY >= 1000 && window.scrollY <= 1780) || (window.scrollY >= 2080)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                }
                
                //Celular Menor
                if (window.innerWidth >= 320 && window.innerWidth <= 375) {
                    if ((window.scrollY >= 500 && window.scrollY <= 1730) || (window.scrollY >= 2000)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                }
                
                //Tablet
                if (window.innerWidth >= 700 && window.innerWidth <= 920) {
                    if ((window.scrollY >= 500 && window.scrollY <= 2340) || (window.scrollY >= 3230)) {
                        i.classList.add('grayed-out');
                    } else {
                        i.classList.remove('grayed-out');
                    }
                }
            }
            )
        });
    }, []);
    return (
        <section className="gallery">

            <div className="gallery__main-title">
                <h4>PORTFOLIO <span>GALLERY</span></h4>
            </div>
            <div className='gallery__background' style={{
            }}></div>
            <div className="gallery__container">
                {
                    loadImages?.map(image => (
                        <figure className='gallery__image-item' key={image.id}>
                            <img src={image.image} alt={image.alt} />
                        </figure>
                    ))
                }
            </div>
        </section>
    )
}

export default Gallery;
import { Link } from 'react-router-dom';

import artist1 from '../../assets/images/artist/artist1.webp';
import artist2 from '../../assets/images/artist/artist2.webp';
import artist3 from '../../assets/images/artist/artist3.webp';
import { useLayoutEffect } from 'react';


const artistContent = [
    {
        id: 1,
        title: 'LUIZ LOPES',
        url: 'luiz-lopes',
        content: 'Owner and Tattoo Artist',
        image: artist1
    },
    {
        id: 2,
        title: 'BELLA',
        url: 'bella',
        content: 'Body Piercer and Tattoo Artist',
        image: artist2
    },
    {
        id: 3,
        title: 'GUESTS',
        url: 'guests',
        content: 'Meet some of our guest artists',
        image: artist3
    }
]
const iphone12Pro = (window.innerWidth >= 320 && window.innerWidth <= 425)
const viewportScale = Math.round(window.visualViewport.scale * 100);

const Artist = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const images = Array.from(document.querySelectorAll('.artist__content-list img'));
            images.map(image => {
                if (iphone12Pro) {
                    // Efeito de Zoom
                    if (viewportScale > 100) {
                        image.classList.remove('grayed-out');
                    }
                    //Efeito de Scroll
                    if ((window.scrollY >= 400 && window.scrollY <= 1250) || (window.scrollY >= 1350)) {
                        image.classList.add('grayed-out');
                    }
                    else {
                        image.classList.remove('grayed-out');
                    }
                }

                //Tablet
                if (window.innerWidth >= 700 && window.innerWidth <= 920) {
                     // Efeito de Zoom
                     if (viewportScale > 100) {
                        image.classList.remove('grayed-out');
                    }
                    if ((window.scrollY >= 400 && window.scrollY <= 1499) || (window.scrollY >= 1850)) {
                        image.classList.add('grayed-out');
                    }
                    else {
                        image.classList.remove('grayed-out');
                    }
                }
            })
        })
    }, [])

    return (
        <section className="artist">
            <div className="artist__content-title">
                <h2 className="artist__content-title-artist">OUR <span className="artist__styled">ARTISTS</span></h2>
            </div>
            <div className='artist__content'>
                <div className='artist__content-list'>
                    {
                        artistContent?.map((artist, index) => (
                            <Link key={index} to={`/artist/${artist.id}`}>
                                <h3 className='artist__content-list-title'>{artist.title}</h3>
                                <small className='artist__content-list-content'>{artist.content}</small>
                                <img src={artist.image} alt={artist.title} />
                            </Link>
                        ))
                    }
                </div>
                {/* <div className='artist__content-list-2'>
                    <h2 className="artist__content-title-artist">MEET THE <span className="artist__styled">MY INK CHAIR</span></h2>
                    <p className='artist__content-title-artist-content'>Lorem ipsum dolor sit amet consectetur. Vitae nec nullam pretium lacus laoreet vestibulum et sed aliquam. Quis scelerisque aliquam commodo erat sit ut pulvinar sit.</p>
                    <Link to="/">Read More</Link>
                </div> */}
            </div>
        </section>
    )
}

export default Artist;
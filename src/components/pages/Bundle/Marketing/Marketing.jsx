import bannerImage from '../../../../assets/images/marketing/marketing-mobile.png';
import bannerImageDesktop from '../../../../assets/images/marketing/marketing-desktop.png';
import bannerImage2 from '../../../../assets/images/marketing/marketing-mobile-2.png';
import bannerImageDesktop2 from '../../../../assets/images/marketing/marketing-desktop-2.png';


// import bannerImage from '../../../assets/images/'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className='marketing'>
            <div className='marketing__container'>
                <div className='marketing__container-child-1'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Cadence dunder one yet market brainstorming</h2>
                        <p className='marketing__content-description'>Hammer 4-blocker data space then items baked teams. Across dunder charts no synchronise hammer for deep eco-system. Streamline out algorithm shoot moving quick.</p>
                        <p className='marketing__content-description'> Hit responsible harvest eye to culture now feature opportunity. Move pain cross encourage no-brainer. Baked I functional nobody good users previous. Too one see masking base deep it's only.</p>
                        <span className='marketing__content-link'><Link to="#">Free Consultant</Link></span>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Cadence dunder one yet market brainstorming</h2>
                        <p className='marketing__content-description'>Hammer 4-blocker data space then items baked teams. Across dunder charts no synchronise hammer for deep eco-system. Streamline out algorithm shoot moving quick.</p>
                        <p className='marketing__content-description'> Hit responsible harvest eye to culture now feature opportunity. Move pain cross encourage no-brainer. Baked I functional nobody good users previous. Too one see masking base deep it's only.</p>
                        <span className='marketing__content-link'><Link to="#">Free Consultant</Link></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
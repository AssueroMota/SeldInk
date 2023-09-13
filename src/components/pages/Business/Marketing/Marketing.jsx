import bannerImage from '../../../../assets/images/business/business-marketing.png';
import bannerImageDesktop from '../../../../assets/images/business/business-marketing.png';
import bannerImage2 from '../../../../assets/images/business/business-marketing-2.png';
import bannerImageDesktop2 from '../../../../assets/images/business/business-marketing-2.png';


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
                        <h2 className='marketing__content-title'>Get a 360 degree view of success with PIA Solutions</h2>
                        <p className='marketing__content-description'>Our PIA 360 is the  perfect consultation service to help us get to know you and your <br />business needs. If you’re in need of some web design, SEO, digital marketing, or <br /> development assistance, we’ve got you covered.</p>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
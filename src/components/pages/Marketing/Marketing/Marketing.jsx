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
                        <h2 className='marketing__content-title'>Transform your website traffic in NYC with PIA Solutions</h2>
                        <p className='marketing__content-description'>Fear not, my friend! PIA Solutions is here to save the day with our top-notch SEO & <br /> Copywriting services.</p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Get ready to make more sales with digital ads and social media management</h2>
                        <p className='marketing__content-description'>PIA Solutions is here to take the reins of your social media management, so you can focus on running your business without the added stress.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
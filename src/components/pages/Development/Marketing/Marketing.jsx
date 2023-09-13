import bannerImage from '../../../../assets/images/development/banner-development-1.png';
import bannerImageDesktop from '../../../../assets/images/development/banner-development-1.png';
import bannerImage2 from '../../../../assets/images/development/banner-development-2.png';
import bannerImageDesktop2 from '../../../../assets/images/development/banner-development-2.png';


const Banner = () => {
    return (
        <section className='marketing'>
            <div className='marketing__container'>
                <div className='marketing__container-child-1'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Our New York City Agency will Do the Best Website Design for Your Business!</h2>
                        <p className='marketing__content-description'>From a landing page design to an iOS app that can book a flight to Mars. If you can <br />think it in your head, we make sure we build it so you can have it in your hands.</p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Get more Free time With our Web Application Systems</h2>
                        <p className='marketing__content-description'>Our team of development nerds and passion designers will do your website, iOS <br /> app, Android app, web app and eCommerce. We work with such quality that it is <br /> going to appear like they have no life outside the computer.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
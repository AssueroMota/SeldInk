import bannerImageDesktop from '../../assets/images/contact/background_banner.webp';
import bannerImageMobile from '../../assets/images/contact/background_banner-mobile.webp';

const BannerContactUs = () => {
    return(
        <section className="banner__contact" style={{backgroundImage: `url(${window.innerWidth < 1024 ? bannerImageMobile :  bannerImageDesktop})`}}>
            <div className="banner__contact-content">
                <h1 className="banner__contact-content-title">CONTACT US</h1>
            </div>
        </section>
    )
}

export default BannerContactUs;
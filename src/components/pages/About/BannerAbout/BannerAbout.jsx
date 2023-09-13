import bannerImageDesktop from '../../../../assets/images/banner-about-desktop.webp';

const BannerAbout = () => {
    return(
        <section className="banner__about"  style={{backgroundImage: `url(${bannerImageDesktop})`}}>
            <div className="banner__about-row-1">
                <h1 className="banner__about-title">About</h1>
            </div>
        </section>
    )
}

export default BannerAbout;
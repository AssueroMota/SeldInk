import bannerImageDesktop from './background-banner.png';

const BannerPortfolio = () => {
    return(
        <section className="banner__portifolio"  style={{backgroundImage: `url(${bannerImageDesktop})`}}>
            <div className="banner__portifolio-row-1">
                <h1 className="banner__portifolio-title">PORTFOLIO</h1>
            </div>
        </section>
    )
}

export default BannerPortfolio;
import videoDesktop from '../../assets/video/video-banner-selden.mp4';
import seldenBanner from '../../assets/images/seldenBanner.svg';

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner__logo'>
                <img src={seldenBanner} alt="Banner SeldenInk" />
                <h1 className='banner__title-desktop'>TATTOO STUDIO <br/>BASED IN SELDEN, NY</h1>
                <h1 className='banner__title-mobile'>TATTOO STUDIO <br/> BASED IN SELDEN, NY</h1>
            </div>
            <div className='banner__column-right'>
                <video loop autoPlay muted>
                    <source src={window.innerWidth < 1024 ? videoDesktop : videoDesktop} type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Banner;
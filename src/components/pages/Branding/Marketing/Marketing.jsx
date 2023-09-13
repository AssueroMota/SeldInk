import bannerImage from '../../../../assets/images/branding/branding-desktop-1.png';
import bannerImageDesktop from '../../../../assets/images/branding/branding-desktop-1.png';
import bannerImage2 from '../../../../assets/images/branding/branding-desktop-2.png';
import bannerImageDesktop2 from '../../../../assets/images/branding/branding-desktop-2.png';


const Banner = () => {
    return (
        <section className='marketing'>
            <div className='marketing__container'>
                <div className='marketing__container-child-1'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage : bannerImageDesktop} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Beautiful Designs that Make you Proud</h2>
                        <p className='marketing__content-description'>Hey there! So, have you heard of Pia Solutions?</p>
                        <p className='marketing__content-description'>The ultimate web design agency located right in the heart of New York City!</p>
                        <p className='marketing__content-description'>We're here to bring your wildest web design dreams to life!</p>
                    </div>
                </div>
                <div className='marketing__container-child-2'>
                    <div className='marketing__image'>
                        <img src={window.innerWidth < 1024 ? bannerImage2 : bannerImageDesktop2} alt="Pia agency banner" />
                    </div>
                    <div className='marketing__content'>
                        <h2 className='marketing__content-title'>Get Ready To Be the Digital Rock Star You Know You Are</h2>
                        <p className='marketing__content-description'>Let's be real, who doesn't want to feel like a digital rock star? So, what are you waiting for? Let's get creative and design something amazing together!</p>
                        <p className='marketing__content-description'>Who knows, you might just end up with a design that'll be the envy of all your competitors.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;
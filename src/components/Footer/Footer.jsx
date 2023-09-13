import { Link } from 'react-router-dom';
import seldenLogo from '../../assets/icons/selden-logo-icon.webp';
import facebookLogo from '../../assets/icons/social-media/facebook-selden.svg';
import instagram from '../../assets/icons/social-media/instagram-selden.svg';
import pinterest from '../../assets/icons/social-media/pinterest-selden.svg';


const socialMedia = [
    {
        id: 1,
        image: facebookLogo,
        alt: 'Facebook SeldenInk',
        url: 'https://www.facebook.com/profile.php?id=100023557787159'
    },
    {
        id: 2,
        image: instagram,
        alt: 'Instagram SeldenInk',
        url: 'https://www.instagram.com/selden.ink/'
    },
    {
        id: 3,
        image: pinterest,
        alt: 'Pinterest SeldenInk',
        url: 'https://pin.it/3vKmMMU'
    }
]

const Footer = () => {
    return(
        <footer className='footer'>
            <div className='footer__container'>
                <div className='footer__copy'>
                    <Link to="/"><img src={seldenLogo} alt="" /></Link>
                    {
                        window.innerWidth < 1024 &&
                            <div className='footer__links'>
                                {
                                    socialMedia?.map(social => (
                                        <div key={social.id}>
                                            <Link to={social.url} target={'_blank'}>
                                                <img src={social.image} alt={social.alt} />
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                    
                    <span>© Selden Ink by My Ink 2023. <Link to="/privacy-policy">Privacy policy</Link>.</span>
                </div>

                {
                    window.innerWidth > 1024 &&
                        <div className='footer__links'>
                            {
                                socialMedia?.map(social => (
                                    <div key={social.id}>
                                        <Link to={social.url} target={'_blank'}>
                                            <img src={social.image} alt={social.alt} />
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
        </footer>
    )
}

export default Footer;
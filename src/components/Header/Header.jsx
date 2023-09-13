import { useState, useEffect } from 'react';
import Logo from '../../assets/icons/selden-logo-icon.webp';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

const links = [
    {
        id: 1,
        link: '/artist/',
        content: 'Luiz Lopes',
        class: 'luiz'
    },
    {
        id: 2,
        link: '/artist/',
        content: 'Bella',
        class: 'bella'
    },
    {
        id: 3,
        link: '/artist/',
        content: 'Guests',
        class: 'guest'
    }
];

const linkServices = [
    {
        id: 1,
        link: '/services/tattoo',
        content: 'Tattoo'
    },
    {
        id: 2,
        link: '/services/piercing',
        content: 'Piercing'
    }
];

const linkProcess = [
    {
        id: 1,
        link: '/design-process',
        content: 'Design Process'
    },
    {
        id: 2,
        link: '/coverup-process',
        content: 'Cover-up Process'
    },

    {
        id: 4,
        link: '/sleeve-process',
        content: 'Sleeve Process'
    }
];



const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [subMenu, setSubMenu] = useState(false);
    const [subMenuServices, setSubMenuServices] = useState(false);
    const [subMenuProcess, setSubMenuProcess] = useState(false);
    const [artistSubmenu,  setArtistSubmenu] = useState(false);
    const [servicesSubmenu,  setServicesSubmenu] = useState(false);
    const [processSubmenu,  setProcessSubmenu] = useState(false);

    const onHandleSubmenu = () => {
        setSubMenu(!subMenu);
        setSubMenuServices(false);
    }

    const onHandleSubmenuServices = () => {
        setSubMenuServices(!subMenuServices);
        setSubMenu(false);
    }

    const onHandleSubmenuProcess = () => {
        setSubMenuProcess(!subMenuProcess);
        setSubMenu(false);
    }

    const onOpenMobileLinks = (event) => {
        setArtistSubmenu(prevState => !prevState);
    }

    const onOpenMobileLinksServices = (event) => {
        setServicesSubmenu(prevState => !prevState);
    }

    
    const onOpenMobileLinksProcess = (event) => {
        setProcessSubmenu(prevState => !prevState);
    }

    const onReloadPageArtist = (e) => {
        e.preventDefault();
        if(window.innerWidth < 1024){
            if(e.currentTarget.textContent == 'Luiz Lopes'){
                window.location.href = '/artist/1';
            }

            if(e.currentTarget.textContent == 'Bella'){
                window.location.href = '/artist/2';
            }

            if(e.currentTarget.textContent == 'Guests'){
                window.location.href = '/artist/3';
            }
        }
    }


    return (
        <section className='main_header'>
            {
                openMenu && window.innerWidth < 1024 ?
                    <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
                    :
                    <header className='header'>

                        {
                            window.innerWidth < 1024 ?
                                <div className='header__container'>
                                    <div className='header__column-left'>
                                        <Link to="/"><span className='header__logo'><img src={Logo} alt="Logo Selden Ink by My Ink" /></span></Link>
                                    </div>
                                    <div className='header__column-right'>
                                        <Link to='/contact' className='header__cta'>Book Now</Link>

                                        <input id='header__menu-toggle' type='checkbox' />
                                        <label htmlFor='header__menu-toggle' className='header__menu-btn-container'>
                                            <div className='header__menu-btn'></div>
                                        </label>

                                        <nav className='header__menu-mobile'>
                                            <ul>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/awards">Awards</a></li>
                                                <li><span className={`header__menu-mobile-submenu-artist ${artistSubmenu ? 'open' : 'close'}`} onClick={onOpenMobileLinks} >Artist</span></li>

                                                {
                                                    artistSubmenu &&
                                                        links?.map(link => (
                                                            <li className={link.class} key={link.id}><a href={`${link.link}${link.id}`} onClick={onReloadPageArtist}>{link.content}</a></li>
                                                        ))
                                                }

                                                <li><span className={`header__menu-mobile-submenu-artist ${servicesSubmenu ? 'open' : 'close'}`} onClick={onOpenMobileLinksServices}>Services</span></li>
                                                {
                                                    servicesSubmenu &&
                                                        linkServices?.map(link => (
                                                            <li key={link.id}><a href={`${link.link}`}>{link.content}</a></li>
                                                        ))
                                                } 

                                                <li><span className={`header__menu-mobile-submenu-artist ${processSubmenu ? 'open' : 'close'}`} onClick={onOpenMobileLinksProcess}>Process</span></li>
                                                {
                                                    processSubmenu &&
                                                        linkProcess?.map(link => (
                                                            <li key={link.id}><a href={`${link.link}`}>{link.content}</a></li>
                                                        ))
                                                }

                                                <li><a href="/portfolio">Portfolio</a></li>
                                                 
                                                {/* <li><Link to="https://stg.selden.ink/portifolio/">Portfolio</Link></li> */}
                                                <li><a href="/contact-us">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                :
                                <div className='header__container'>
                                    <div className='header__column-left'>
                                        <Link to="/"><span className='header__logo'><img src={Logo} alt="Logo Selden Ink by My Ink" /></span></Link>
                                        <div className='header__list'>
                                            <ul className='header__list-item'>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/awards">Awards</a></li>
                                                <li className='header__list-artist' onClick={onHandleSubmenu}><Link to="#">Artist</Link></li>
                                                <li className='header__list-services' onClick={onHandleSubmenuServices}><Link to="#">Services</Link></li>
                                                <li className='header__list-process' onClick={onHandleSubmenuProcess}><Link to="#">Process</Link></li>
                                                <li ><Link to="/portfolio">Portfolio</Link></li>
                                                {/* <li ><Link to="https://stg.selden.ink/portifolio/">Portfolio</Link></li> */}
                                                <li><Link to="/contact-us">Contact</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='header__column-right'>
                                        <Link to='/contact' className='header__cta'>Book Now</Link>
                                    </div>
                                </div>
                        }
                    </header>
            }
            <div className='header__submenu-item'>
                {
                    subMenu &&
                    <ul className='header__submenu-level-1'>
                        {
                            links?.map(link => (
                                <li key={link.id} className='business'><Link to={`${link.link}${link.id}`}>{link.content}</Link></li>
                            ))
                        }
                    </ul>
                }
            </div>
            <div className='header__submenu-item-services'>
                {
                    subMenuServices &&
                    <ul className='header__submenu-level-1-services'>
                        {
                            linkServices?.map(link => (
                                <li key={link.id} className='business'><Link to={`${link.link}`}>{link.content}</Link></li>
                            ))
                        }
                    </ul>
                }
            </div>
            <div className='header__submenu-item-process'>
                {
                    subMenuProcess &&
                    <ul className='header__submenu-level-1-process'>
                        {
                            linkProcess?.map(link => (
                                <li key={link.id} className='business'><Link to={`${link.link}`}>{link.content}</Link></li>
                            ))
                        }
                    </ul>
                }
            </div>
        </section>
    )
}

export default Header;
import { useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Bar from '../../assets/icons/close.svg';
import { Link } from 'react-router-dom'

import facebookIconMenu from '../../assets/icons/menu/facebook.svg'
import instagramIconMenu from '../../assets/icons/menu/instagram.svg'
import linkedinIconMenu from '../../assets/icons/menu/linkedin.svg'
import youtubeIconMenu from '../../assets/icons/menu/youtube.svg'

const Menu = ({ setOpenMenu, openMenu }) => {

    const onHandleCloseMenu = () => {
        setOpenMenu(false)
    }

    return(
        <>
            {
                openMenu &&
                    <section className='menu'>
                        <div className='menu__container'>
                            <div className='menu__column-left'>
                                <span className='menu__close' onClick={onHandleCloseMenu}><img src={Bar} alt="Pia Agency bar" /></span>
                                <span className='menu__logo'><img src={Logo} alt="Pia Agency logo" /></span>
                            </div>
                            <div className='menu__column-right'>
                                <Link to="/">Free Consultation</Link>
                            </div>
                        </div>
                        <div className='menu__list'>
                            <ul className='menu__list-item'>
                                <li><Link to="#">About</Link></li>
                                <li><Link to="#">Business Consultant</Link></li>
                                <li><Link to="#">Branding & Design</Link></li>
                                <li><Link to="#">Development</Link></li>
                                <li><Link to="#">Digital Marketing</Link></li>
                                <li><Link to="#">Portfolio</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='menu__social-media'>
                            <ul className='menu__social-media-list'>
                                <li>
                                    <Link to="https://www.facebook.com" target={'_blank'}><img src={facebookIconMenu} alt="Facebook icon menu" /></Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com" target={'_blank'}><img src={instagramIconMenu} alt="Instagram icon menu" /></Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com" target={'_blank'}><img src={linkedinIconMenu} alt="Linkedin icon menu" /></Link>
                                </li>
                                <li>
                                    <Link to="https://www.youtube.com" target={'_blank'}><img src={youtubeIconMenu} alt="Youtube icon menu" /></Link>
                                </li>
                            </ul>
                        </div>
                    </section>
            }
        </>
        
    )
}

export default Menu;
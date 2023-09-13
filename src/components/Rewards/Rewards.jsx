import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

import rewardsImage1 from '../../assets/images/rewards/reward_1.webp';
import rewardsImage2 from '../../assets/images/rewards/reward_2.webp';
import rewardsImage3 from '../../assets/images/rewards/reward_3.webp';
import rewardsImage4 from '../../assets/images/rewards/reward_4.webp';

import { useLayoutEffect } from "react";


const serviceImages = [
    {
        id: 1,
        image: rewardsImage1
    },
    {
        id: 2,
        image: rewardsImage2
    },
    {
        id: 3,
        image: rewardsImage3
    },
    {
        id: 4,
        image: rewardsImage4
    }
]


const Rewards = () => {
    useLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            const ImgPiercing = Array.from(document.querySelectorAll('.rewards-col-right img'))
            ImgPiercing.map(i => {
                if (window.scrollY >= 250) {
                    i.classList.add('grayed-out');
                } else {
                    i.classList.remove('grayed-out');
                }
            })

        })
    }, []);
    return(
        <>
            <Header />
            <section className='rewards'>    
                <div className='rewards-col-left'>
                    <div className='rewards-breadcrumb'>
                        <p className='rewards-breadcrumb-content'>
                            Home /  
                            <span className='rewards-breadcrumb-styled'> Awards</span>
                        </p>
                    </div>
                    <h1 className='rewards-title rewards-title-piercing'>AWARDS</h1>
                    <div className="rewards__trophies">
                        <div>
                            <h3>150,000+</h3>
                            <p>Tattoos</p>
                        </div>
                        <div>
                            <h3>21</h3>
                            <p>Years Experience</p>
                        </div>
                        <div>
                            <h3>150+</h3>
                            <p>Trophies Won</p>
                        </div>
                    </div>
                    <p className='rewards-content-2'>With a lot of dedication and hard work he has won over 150 trophies at the biggest and toughest domestic tattoo conventions such as Empire State Tattoo Expo, Golden State Tattoo, Boston Tattoo Expo, Philadelphia Tattoo Expo, Tattoo Week SP, Tattoo Week Rio and more!</p>
                    {/* <p className='rewards-content rewards-content-piercing'>In addition to piercing, we have a wide range of high quality jewelry and accessories options, so you can customize your piercing and make it even more unique and special.</p> */}

                    <div className='rewards-links rewards-links-piercing'>
                        <span className='rewards-schedule'><Link to="/contact">Book Now</Link></span>
                    </div>
                </div>
                <div className='rewards-col-right rewards-col-right-piercing '>

                    {
                        serviceImages?.map(image => (
                            <figure key={image.id}>
                                <img key={image.id} src={image.image} alt="" />
                            </figure>
                        ))
                    }
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Rewards;
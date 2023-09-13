import { Link } from 'react-router-dom';

const Store = () => {
    return (
        <section className='store'>
            <div className='store__title-content'>
                {
                    window.innerWidth < 1024 ? 
                        <section className='store__content'>
                            <div><h2 className='store__content-title'>My Ink <br /><span className='store__content-styled'>Store</span></h2></div>
                            <div className='store__content-paragraph-content'>
                                <p>Lorem ipsum dolor sit amet consectetur. Venenatis augue commodo dolor neque venenatis quam et. Amet risus morbi neque mattis eros pharetra ante. Nibh id pellentesque volutpat metus sapien duis. Habitasse mauris massa aliquet ullamcorper quis accumsan nibh. Massa amet venenatis sed tincidunt commodo eu sodales tempor. Sed vitae malesuada eu in sit porttitor. Sed venenatis praesent sit duis. Varius mattis maecenas tristique pretium ut id consectetur a lorem. Quis sem nunc sapien cursus diam rhoncus. Nunc pharetra ullamcorper libero non vestibulum dui. Facilisi senectus elementum non quis nunc quam mattis magna. Tristique consectetur molestie morbi ac platea dolor. Feugiat risus accumsan risus sagittis. Malesuada eu vel tristique diam pellentesque cras sed at. Purus ultrices consectetur malesuada sed curabitur. Sed donec tortor pretium arcu nibh tristique. Orci duis at eleifend interdum.</p>
                                <span className='store__content-link'><a href="">Shop Now</a></span>
                            </div>
                        </section>
                    :
                        <section className='store__content'>
                            <div><h2>My Ink <br /><span className='store__content-styled'>Store</span></h2></div>
                            <div className='store__content-paragraph-content'>
                                <p>Lorem ipsum dolor sit amet consectetur. Venenatis augue commodo dolor neque venenatis quam et. Amet risus morbi neque mattis eros pharetra ante. Nibh id pellentesque volutpat metus sapien duis. Habitasse mauris massa aliquet ullamcorper quis accumsan nibh. Massa amet venenatis sed tincidunt commodo eu sodales tempor. Sed vitae malesuada eu in sit porttitor. Sed venenatis praesent sit duis. Varius mattis maecenas tristique pretium ut id consectetur a lorem. Quis sem nunc sapien cursus diam rhoncus. Nunc pharetra ullamcorper libero non vestibulum dui. Facilisi senectus elementum non quis nunc quam mattis magna. Tristique consectetur molestie morbi ac platea dolor. Feugiat risus accumsan risus sagittis. Malesuada eu vel tristique diam pellentesque cras sed at. Purus ultrices consectetur malesuada sed curabitur. Sed donec tortor pretium arcu nibh tristique. Orci duis at eleifend interdum.</p>
                                <div className='store__content-link'><Link to="">Shop Now</Link></div>
                            </div>
                        </section>
                }
                
            </div>
        </section>
    )
}

export default Store;
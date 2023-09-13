import React from 'react';
import loadImage from '../../../assets/images/loading.gif'
import LottieAnimation from './LottieAnimation';

const LoadingImage = () => {
    return (
        <section className='loading-container'>
            <LottieAnimation/>
            {/* <img src={loadImage} alt='Loading image' className='loading-spinner' /> */}
        </section>
    );
}

export default LoadingImage;
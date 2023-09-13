import React from 'react';
import './Loading.scss';

const LottieAnimation = () => {
    return (
        <div className='lottieStyle'>
            <lottie-player
                src="https://lottie.host/efc6e217-48f0-43d8-8da8-9b4d0586347b/JhgjqBYl57.json"
                background="transparent"
                speed="1"
                style={{ width: '300px', height: '300px' }}
                loop
                autoplay
            ></lottie-player>
        </div>
    );
}

export default LottieAnimation;

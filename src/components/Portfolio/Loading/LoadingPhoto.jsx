import React from "react";
import loadImagePhotos from './ZKZg.gif';

const LoadingPhoto = props => {
    return (
        <section className='loading-container-photos'>
            <img src={loadImagePhotos} alt='Loading image' className='loading-spinner-photos' />
        </section>
    );
}
export default LoadingPhoto;
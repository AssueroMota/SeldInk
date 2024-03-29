import React from 'react';
import './Close.scss';

const CloseBox = (props) => {
    return (
        <>
            <img className={props.className} src={props.src} alt={props.alt} onClick={props.onClick} />
        </>
    );
}

export default CloseBox;
import { useLayoutEffect, useState } from "react";

const Exemplo = () => {
    const [ images, setImages ] = useState(null);

    useLayoutEffect(() => {
        fetch('https://rich-jade-leopard-shoe.cyclic.app/albums')
            .then(resp => resp.json())
            .then(data => {
                setImages(data);
            }).catch(err => console.error(err))
    },[]);
    
    // console.log(images.data);

    return(
        <ul>
            {
                images?.data?.map((image,index) => {
                    if(image.description == 'realismo'){
                        return <li key={index}><img src={image.link} alt={image.description} /></li>
                    }
                })
            }
        </ul>
    )
}

export default Exemplo;
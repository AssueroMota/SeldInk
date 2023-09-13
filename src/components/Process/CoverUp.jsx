// Components 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const contents = [
    { 
        id: 1,
        title: 'RESEARCH',
        description: "<li>Choose a design: The first step in getting a cover-up tattoo is choosing a design that will effectively cover up the existing tattoo. This can be done by working with a tattoo artist to create a custom design or by selecting a pre-existing design that will work well for a cover-up;</li><li>Find a reputable tattoo artist: It's important to find a tattoo artist who has experience with cover-up tattoos and who can provide examples of their previous work. They will be able to advise you on the best design and placement for your cover-up tattoo;</li><li>Assess the existing tattoo: The tattoo artist will need to assess the existing tattoo to determine the best approach for covering it up. They will consider factors such as the size, color, and location of the tattoo;</li><li>Design the cover-up tattoo: Once the artist has assessed the existing tattoo, they will work with you to design a cover-up tattoo that will effectively hide the old tattoo. This may involve incorporating elements of the old tattoo into the new design;</li><li>Get the cover-up tattoo: The tattoo artist will then apply the cover-up tattoo, using techniques such as shading and color blending to effectively hide the old tattoo;</li><li>Aftercare: After the tattoo is complete, the artist will provide aftercare instructions to ensure proper healing and to avoid infection;</li><li>It's important to keep in mind that cover-up tattoos may require multiple sessions to fully cover the old tattoo, and the final result may not be completely invisible;</li><li>However, with the right design and a skilled tattoo artist, a cover-up tattoo can effectively hide an unwanted tattoo and provide a fresh start.</li>",
        alt: 'image design process 1'
    }
]

const Design = () => {
    return(
        <>
            <Header></Header>
            <section className="process">
                <div className='process__breadcrumb'>
                    <small>
                        <span className='process__breadcrumb-white'>Process / </span> 
                        <span className='process__breadcrumb-dark'>COVER UP</span> 
                    </small>
                </div>
                <h1 className="process__title">COVER UP</h1>
                <div className="process__cards">
                    {
                        contents?.map(content => (
                            <div key={content.id} className="process_card">
                                <div>
                                    {/* <p className="process__card-icon"><span className={`process__card-icon-content-${content.id}`}>{content.title}</span></p> */}
                                    <ul className="process__card-description" dangerouslySetInnerHTML={{__html: `${content.description}`}}></ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Design;
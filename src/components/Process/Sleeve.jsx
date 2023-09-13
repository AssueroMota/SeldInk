// Components 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const contents = [
    { 
        id: 1,
        title: 'RESEARCH',
        description: "<li>Designing a full sleeve tattoo involves several steps, from deciding on the tattoo elements to finalizing the design with a professional tattoo artist. Here is a step-by-step guide:</li><li>Decide on your tattoo elements: Determine the styles, themes, symbols, images, and colors you want to include in your full sleeve tattoo. Consider what is important to you and what you want to express through your tattoo;</li><li>Choose the layout: Decide where you want the larger pieces of your tattoo to be and how you want to connect them with patterns or motifs. Consider the flow and composition of the tattoo on your arm;</li><li>Consult with a professional tattoo artist: Find a reputable tattoo artist who specializes in full sleeve tattoos. Discuss your ideas, inspirations, and preferences with them. They can provide guidance, offer suggestions, and help you refine your design;</li><li>Finalize the design: Work closely with the tattoo artist to finalize the design of your full sleeve tattoo. They will create a detailed and customized design that incorporates your chosen elements and fits the shape of your arm;</li><li>Prepare for multiple sessions: Keep in mind that a full sleeve tattoo is a significant undertaking that may require multiple sessions to complete. Be prepared for the time commitment and follow the artist's instructions for scheduling the sessions;</li><li>Get the tattoo: Once the design is finalized, the tattoo artist will begin the process of tattooing your full sleeve. They will outline the design and add details as necessary during subsequent sessions;</li><li>Aftercare: After each session, follow the tattoo artist's aftercare instructions to ensure proper healing and to maintain the quality of your tattoo;</li><li>Remember, designing a full sleeve tattoo is a collaborative process between you and the tattoo artist. It's important to communicate your ideas clearly and trust their expertise to create a tattoo that you will be proud to wear.</li>",
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
                        <span className='process__breadcrumb-dark'>Full Sleeve</span> 
                    </small>
                </div>
                <h1 className="process__title">FULL SLEEVE</h1>
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
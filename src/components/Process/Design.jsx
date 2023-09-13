// Components 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const contents = [
    { 
        id: 1,
        title: 'RESEARCH',
        description: '<li>Search for tattoo inspiration;</li><li>Determine the style and design;</li><li>Find a right tattoo artist.</li>',
        alt: 'image design process 1'
    },
    { 
        id: 2,
        title: 'CONSULTATION',
        description: '<li>Schedule an appointment with the chosen tattoo artist;</li><li>Discuss the design, size, and placement of the tattoo;</li><li>Talk about any specific request or modifications;</li><li>Idea of around price.</li>',
        alt: 'image design process 2'
    },
    { 
        id: 3,
        title: 'PREPARATION',
        description: '<li>Follow any instructions provided by the tattoo artist before the appointment;</li><li>Ensure proper hygiene and cleanliness;</li><li>Wear appropriate clothing for easy access to the tattoo area.</li>',
        alt: 'image design process 3'
    },
    { 
        id: 4,
        title: 'DESIGN AND PLACEMENT',
        description: "<li>The tattoo artist will finish design ,confirm the size and placement;</li><li>Confirm the final price, fixed price, by hour rate, ou by day, create a stencil of the design;</li><li>Make necessary modifications before starting the tattooing process;</li><li>Designing a tattoo involves several steps, including deciding on the tattoo elements, determining the placement, sketching out a rough design, and picking the artist;</li><li>Decide on the tattoo elements: Before designing a full sleeve tattoo, it's important to decide on the styles, themes, symbols, images, and colors you want to include;</li><li>You can get inspiration from online resources, such as tattoo galleries or social media platforms, or from your personal experiences and interests;</li><li>Determine the placement: Consider where you want the tattoo to be placed on your arm. Some factors to consider include visibility, pain level, and the size of the design;</li><li>Sketch out a rough design: Once you have a theme in mind, start sketching out a rough design for your tattoo. This doesn't have to be a detailed, final design – it can just be a rough outline of the elements you want to include in your tattoo;</li><li>You can even use online tools or print out reference images to help you visualize the design.</li>",
        alt: 'image design process 4'
    },
    { 
        id: 5,
        title: 'STERILIZATION AND SETUP',
        description: '<li>The tattoo artist will sterilize the work area and tattoo equipment;</li><li>Prepare the tattoo machine with the desired needles and ink colors;</li><li>Set up a comfortable chair or table for the client.</li>',
        alt: 'image design process 5'
    }, 
    {
        id: 6,
        title: 'TATTOOING',
        description: "<li>The tattoo artist will begin tattooing according to the design and placement;</li><li>Take breaks if required or as per the client's comfort;</li><li>Communicate any discomfort or concerns during the process.</li>",
        alt: 'image design process 6'
    },
    {
        id: 7,
        title: 'AFTERCARE INSTRUCTIONS',
        description: "<li>Once the tattoo is complete, the artist will clean the area and apply bandage;</li><li>Provide detailed aftercare instructions for proper healing;</li><li>Advise on activities to avoid and how to protect the tattoo from sun exposure.</li>",
        alt: 'image design process 7'
    },
    {
        id: 8,
        title: 'FOLLOW-UP APPOINTMENT',
        description: "<li>Schedule a follow-up appointment if necessary for touch-ups or additional work;</li><li>Discuss any further questions or concerns with the tattoo artist;</li><li>Show appreciation and provide feedback about the tattoo experience.</li>",
        alt: 'image design process 8'
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
                        <span className='process__breadcrumb-dark'>Design Process</span> 
                    </small>
                </div>
                <h1 className="process__title">DESIGN PROCESS</h1>
                <div className="process__cards">
                    {
                        contents?.map(content => (
                            <div key={content.id} className="process_card">
                                <div>
                                    <p className="process__card-icon"><span className={`process__card-icon-content-${content.id}`}>{content.title}</span></p>
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
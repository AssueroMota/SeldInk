import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom';

const links = [
    {
        id: 1,
        link: 'https://selden.ink/fullbackpiece/',
        content: 'Special Prices for Full Back Piece',
        classItem: 'calendar' 
    },
    {
        id: 2,
        link: 'https://seldenink.com/',
        content: 'Book Luiz Lopes',
        classItem: 'book' 
    },
    {
        id: 3,
        link: 'https://www.youtube.com/@seldenink',
        content: 'Youtube Channel',
        classItem: 'youtube' 
    },
    {
        id: 4,
        link: 'https://selden.ink/waitinglist/',
        content: 'Waiting List - To Start',
        classItem: 'clock' 
    },
    {
        id: 5,
        link: 'https://www.instagram.com/luizlopestattoo/',
        content: 'Instagram Luiz Lopes',
        classItem: 'instagram' 
    },
    {
        id: 6,
        link: 'https://www.instagram.com/rodrigo_zanello/',
        content: 'Instagram Rodrigo',
        classItem: 'instagram' 
    },
    {
        id: 7,
        link: 'https://www.instagram.com/luismagootattoo/',
        content: 'Instagram Magoo Tattoo',
        classItem: 'instagram' 
    },
    {
        id: 8,
        link: 'https://www.instagram.com/selden.ink/',
        content: 'Instagram Selden Ink by My Ink',
        classItem: 'instagram' 
    }
];

const LinkComponent = () => {
    return(
        <>
            <Header />
            <section className="link">
                <div className="link__title">
                    <h1 className="title">Links</h1>
                </div>
                <ul className="link__list">
                    {
                        links?.map(link => (
                            <li className={link.classItem} key={link.id}>
                                <Link to={link.link} target={'_blank'}>{link.content}</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <Footer />
        </>
    )
}

export default LinkComponent;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import dynamicWork from '../../assets/images/slide-photo.png';
// import sliderDesktopImage from '../../assets/images/slide-photo.png';
import image1 from '../../assets/images/projects/project-01.png';
import image2 from '../../assets/images/projects/project-02.png';
import image3 from '../../assets/images/projects/project-03.png';
import image4 from '../../assets/images/projects/project-04.png';
import image1Mobile from '../../assets/images/projects/project-01-mobile.png';
import image2Mobile from '../../assets/images/projects/project-02-mobile.png';
import image3Mobile from '../../assets/images/projects/project-03-mobile.png';
import image4Mobile from '../../assets/images/projects/project-04-mobile.png';
import { Link } from "react-router-dom";

const cards = [
    {
        title: 'Selden Ink',
        description: 'Lorem ipsum dolor sit amet consectetur, arcu amet dictum lectus praesent aliquam lacus.',
        link: 'Show more',
        image: window.innerWidth < 1024 ? image1Mobile : image1,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ]
    },
    {
        title: 'Monteiro Law',
        description: 'Lorem ipsum dolor sit amet consectetur, arcu amet dictum lectus praesent aliquam lacus.',
        link: 'Show more',
        image: window.innerWidth < 1024 ? image2Mobile : image2,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ]
    },
    {
        title: 'Selden Ink',
        description: 'Lorem ipsum dolor sit amet consectetur, arcu amet dictum lectus praesent aliquam lacus.',
        link: 'Show more',
        image: window.innerWidth < 1024 ? image3Mobile : image3,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ]
    },
    {
        title: 'Monteiro Law',
        description: 'Lorem ipsum dolor sit amet consectetur, arcu amet dictum lectus praesent aliquam lacus.',
        link: 'Show more',
        image: window.innerWidth < 1024 ? image4Mobile : image4,
        technologies: [
            { tag: 'Branding', color: '#DA00F0' },
            { tag: 'Development', color: '#24F0BE' },
            { tag: 'Digital Marketing', color: '#F08F24' }
        ]
    }
]

const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                infinite: true,
                centerMode: true,
                centerPadding: "0px"
            }
        },
        {
            breakpoint: 800,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                // adaptiveHeight: true,
                infinite: true
            }
        }
    ]
};

const Projects = () => {
    return(
        <section className="dynamic">
            <Slider {...settings}>
                {
                    cards?.map((card,index) => (
                        <div key={index} className="slide-item">
                            <img src={card.image} alt="Work banner" />
                        </div>
                    ))
                }
            </Slider>
        </section>
    )
}

export default Projects;
import Header from "../../Header/Header";
import BannerAbout from "./BannerAbout/BannerAbout";
import Footer from '../../Footer/Footer';
import History from "./History/History";
import Artist from '../../Artist/Artist';
import Maps from '../../Maps/Maps';

const About = () => {
    return(
        <section>
            <Header />
            <BannerAbout />
            <History />
            <Artist />
            <Maps />
            <Footer />
        </section>
    )
}

export default About;
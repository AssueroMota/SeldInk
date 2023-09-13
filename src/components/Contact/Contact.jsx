import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BannerContact from './Banner/Banner';
import FormContact from './Form/FormContact';


const Contact = () => {
    return(
        <>
            <Header />
            <BannerContact />
            <FormContact />            
            <Footer />
        </>
    )
}

export default Contact;
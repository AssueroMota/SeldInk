import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Artist from './components/Artist/Artist';
import Gallery from './components/Gallery/Gallery';
import Since from './components/Since/Since';
import Maps from './components/Maps/Maps';
import Services from './components/Services/Services';

const App = () => {
  return(
    <>
      <Header />
      <Banner />
      <Services />
      <Artist />
      <Gallery />
      <Since />    
      <Maps />
      <Footer />  
    </> 
  )
}

export default App;
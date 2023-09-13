import { Link } from 'react-router-dom';
import historyImage from '../../../../assets/images/about/history.png';

const History = () => {
    return(
        <section className="history">
            <div className='history__container'>
                <div className='history__columns'>
                    <div className='history__columns-1'>
                        <h2>OUR <span>HISTORY</span></h2>
                        <p>Tattoo Lou’s Selden has been around since 1958 and has become a legend in the art of tattooing.</p>
                        <p>Selden.Ink is located at the same address as “Tattoo Lou’s Selden”.</p>
                        <p>We were honored to purchase this studio from the son of founder Lou Robino Jr, we are working under a new name and direction since January 2021, we work hard to maintain the best quality in each tattoo style.</p>
                    </div>
                    {/* <div className='history__columns-2'>
                        <h2>ABOUT <span>MY INK</span></h2>
                        <p><Link to="https://www.myinktattoo.com/" target={'_blank'}>My Ink</Link> is much more than a tattoo studio. Our mission is to reinvent the tattoo world.</p>
                        <p>We are a technology company that came to make life easier for tattoo artists and their clients through our products, such as My Ink Chair, My Ink Store and other services to come.</p>
                        <p>Together, we will revolutionize the world of tattooing.</p>
                    </div> */}
                </div>
                <div className='history__columns-image'>
                    <img src={historyImage} alt="About image history" />
                </div>
            </div>
        </section>
    )
}

export default History;
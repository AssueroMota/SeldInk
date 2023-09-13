import { useState } from 'react';
import IconMessage from '../../assets/icons/message-success.svg';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import BannerContactUs from './BannerContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const SendContact = () => {
    //  --> [setTypeService]
    const [loading, setLoading] = useState(false);
    const [ fieldError, setFieldError ] = useState('');

    // Message 
    const [ messageSuccessfuly, setMessageSuccessfuly ] = useState(false);

    // Submit Data
    const onSendData = (e) => {
        e.preventDefault();

        // Inputs 
        const firstName   = document.getElementById('first_name');
        const lastName    = document.getElementById('last_name');
        const email       = document.getElementById('email');
        const phone       = document.getElementById('phone');
        const message     = document.getElementById('message');

        setLoading(true);

        if(firstName.value == '' || lastName.value == '' || email.value == '' || phone.value == '' || message.value == ''){
            setFieldError('All field marked are required');

            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setTimeout(() => {
                setFieldError('');
            }, 4000);
        }else {
            fetch('https://seldenink-backend.onrender.com/sendcontact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email.value,
                    phone: phone.value,
                    message: message.value
                })
            })
            .then(resp => resp.json())
            .then(data => {
                setMessageSuccessfuly(true);

                firstName.value == '';
                lastName.value == '';
                email.value == '';
                phone.value == '';
                message.value == '';

                setTimeout(() => {
                    setLoading(false);
                }, 100);
                setTimeout(() => {
                    setMessageSuccessfuly(false);
                }, 4000);
            })
        }
    }

    return(
        <>
            {
                messageSuccessfuly && 
                    <div className='form_contact-message'>
                        <div className='contents'>
                            <div>
                                <img src={IconMessage} alt="Icon Message success" />
                            </div>
                            <div>
                                <h2 className='form_contact-message-title'>Success</h2>
                                <p className='form_contact-messge-description'>Your email was sent</p>
                            </div>
                        </div>
                        <div className='progress'>
                            <div className='progress-message'></div>
                        </div>
                    </div>
            }

            <>
                <Header />
                <BannerContactUs />
                <section className="form_contact">
                    <div className="form_contact-description">
                        <p className="description">Get in touch with us to clear your query. We will love to serve you.</p>
                    </div>
                    <form className="form_contact-submit" onSubmit={onSendData}>
                        {/* Complete Name */}
                        <div className="form_contact-field form_contact-field-1">
                            <label htmlFor="first_name">Name *</label>
                            <div className="form_contact-field-grid">
                                <div>
                                    <input type="text" name="first_name" id="first_name" />
                                    <small>First</small>
                                </div>
                                <div>
                                    <input type="text" name="last_name" id="last_name" />
                                    <small>Last</small>
                                </div>
                            </div>
                        </div>


                        <div className="form_contact-field form_contact-field-2">
                            <div>
                                <label htmlFor="email">Email *</label>
                                <div>
                                    <input type="email" name="email" id="email" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone">Phone *</label>
                                <div>
                                    <input type="tel" name="phone" id="phone" />
                                </div>
                            </div>
                        </div>


                        <div className='form-message'>
                            <label htmlFor="message">Message *</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>



                        {
                            fieldError != '' && <div style={{ 
                                                        backgroundColor: 'red', 
                                                        color: '#FAFAFA',
                                                        padding: '2px 8px', 
                                                        width: 'fit-content',
                                                        display: 'flex',
                                                        margin: 'auto',
                                                        marginBottom: '16px',
                                                        fontFamily: 'effra',
                                                        borderRadius: '1.5px' 
                            }}>{fieldError != '' ? fieldError : ''}</div>
                        }
                        <div className="form_contact-submit-button">
                            <button type="submit">
                                {loading ? (
                                    <ClipLoader
                                        css={css` display: inline-block; vertical-align: middle; margin-right: 8px;`}
                                        size={15}
                                        color={'#101820'}
                                        loading={loading}
                                    />
                                ) : ('Submit')}</button>
                        </div>
                        
                    </form>
                </section>
                <Footer />
            </>
        </>
    )
}

export default SendContact;
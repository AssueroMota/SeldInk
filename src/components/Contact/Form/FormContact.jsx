import { useState, useLayoutEffect } from 'react';
import IconMessage from '../../../assets/icons/message-success.svg';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const FormContact = () => {
    //  --> [setTypeService]
    const [loading, setLoading] = useState(false);
    const [ fieldError, setFieldError ] = useState('');
    
    // Mobile
    const [ typeTattooMobileMode , setTypeTattooMobileMode ] = useState(false);
    const [ piercingMobileMode, setPiercingMobileMode ] = useState(false);

    // Desktop
    const [ typeTattooDesktopMode , setTypeTattooDesktopMode ] = useState(false);
    const [ piercingDesktopMode, setPiercingDesktopMode ] = useState(false);

    // Message 
    const [ messageSuccessfuly, setMessageSuccessfuly ] = useState(false);

    // Submit Data
    const onSendData = (e) => {
        e.preventDefault();

        // Inputs 
        let typeservice = '';
        const firstName   = document.getElementById('first_name');
        const lastName    = document.getElementById('last_name');
        const email       = document.getElementById('email');
        const phone       = document.getElementById('phone');
        const birth       = document.getElementById('birth');
        const gender      = document.getElementById('gender');
        const type_tattoo = document.getElementById('type_tattoo');
        const piercing    = document.getElementById('piercing');
        const size        = document.getElementById('size');

        setLoading(true);
            
        if(type_tattoo != null && size != null && piercing != null){
            if(type_tattoo.value != '' && size.value != '' && piercing.value != ''){
                typeservice = 'Tattoo, Body Piercing';
            }
        }else if(type_tattoo != null && size != null){
            if(type_tattoo.value != '' && size.value != ''){
                typeservice = 'Tattoo';
            }
        }else if(piercing != null){
            if(piercing.value != ''){
                typeservice = 'Body Piercing';
            }
        }else {
            typeservice = 'Error: select on option to proceed';
        }

        if(firstName.value == '' || lastName.value == '' || email.value == '' || phone.value == '' || birth.value == '' ||
           gender.value == ''){
            setFieldError('All field marked are required');

            setTimeout(() => {
                setLoading(false);
            }, 2000);
            setTimeout(() => {
                setFieldError('');
            }, 4000);
        }else {
            fetch('https://seldenink-backend.onrender.com/sendmailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name: firstName.value,
                    last_name: lastName.value,
                    email: email.value,
                    phone: phone.value,
                    birth: birth.value,
                    gender: gender.value,
                    interest: typeservice,
                    type_tattoo: type_tattoo != null && type_tattoo.value != '' ? type_tattoo.value : '',
                    piercing: piercing != null && piercing.value != '' ? piercing.value : '',
                    size: size != null && size.value != '' ? size.value : ''
                })
            })
            .then(resp => resp.json())
            .then(data => {
                setMessageSuccessfuly(true);

                firstName.value == '';
                lastName.value == '';
                email.value == '';
                phone.value == ''; 
                birth.value == '';
                gender.value == '';

                setTimeout(() => {
                    setLoading(false);
                }, 100);
                setTimeout(() => {
                    setMessageSuccessfuly(false);
                }, 4000);
                console.log(data);
            })
        }

    }

    // Mobile on handle click
    const mobileTypeTattooMode = () => {
        setTypeTattooMobileMode(!typeTattooMobileMode);
    }
    
    const mobilePiercingMode = () => {
        setPiercingMobileMode(!piercingMobileMode);
    }

    // Desktop on handle click
    const desktopTypeTattooMode = () => {
        setTypeTattooDesktopMode(!typeTattooDesktopMode);
    }
    
    const desktopPiercingMode = () => {
        setPiercingDesktopMode(!piercingDesktopMode);
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
            <section className="form_contact">
                <div className="form_contact-description">
                    <p className="description">Before scheduling a consultation, please see our tattoo guidelines and recommendations to ensure your satisfaction.</p>
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


                    <div className="form_contact-field form_contact-field-3">
                        <div>
                            <label htmlFor="birth">Date of Birth*</label>
                            <div>
                                <input type="date" name="birth" id="birth" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="gender">Gender*</label>
                            <select id="gender" name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Female">Private</option>
                            </select>
                        </div>
                    </div>


                    <div className="form_contact-field form_contact-field-4">
                        <div>
                            <label htmlFor="service">Service of Interest*</label>
                            <div className="form_contact-buttons">
                                {
                                    window.innerWidth < 1024 ? 
                                        <>
                                            <span style={{ 
                                                background: typeTattooMobileMode == true ? '#ACACAC' : null,
                                                color: typeTattooMobileMode == true ? '#101820' : null
                                            }} className="form_button form_tattoo-type" onClick={ window.innerWidth < 1024 ? mobileTypeTattooMode : desktopTypeTattooMode }>Tattoo</span>
                                            <span style={{
                                                background: piercingMobileMode == true ? '#ACACAC' : null,
                                                color: piercingMobileMode == true ? '#101820' : null
                                            }} className="form_button form_tattoo-piercing" onClick={ window.innerWidth < 1024 ? mobilePiercingMode : desktopPiercingMode }>Body Piercing</span>
                                        </>
                                    : 
                                        <>
                                            <span style={{ 
                                                background: typeTattooDesktopMode == true ? '#ACACAC' : null,
                                                color: typeTattooDesktopMode == true ? '#101820' : null
                                            }} className="form_button form_tattoo-type" onClick={ window.innerWidth < 1024 ? mobileTypeTattooMode : desktopTypeTattooMode }>Tattoo</span>
                                            <span style={{
                                                background: piercingDesktopMode == true ? '#ACACAC' : null,
                                                color: piercingDesktopMode == true ? '#101820' : null
                                            }} className="form_button form_tattoo-piercing" onClick={ window.innerWidth < 1024 ? mobilePiercingMode : desktopPiercingMode }>Body Piercing</span>
                                        </>
                                }
                            </div>
                        </div>
                        {/* Desktop only */}
                        <div className="form_contact-type-tattoo-mode-desktop-container">
                            {
                                typeTattooDesktopMode &&
                                    <div className="form_contact-type-tattoo-mode-desktop">
                                        <label htmlFor="type_tattoo">Type of Tattoo*</label>
                                        <select id="type_tattoo" name="type_tattoo">
                                            <option value="B&G Realism">B&G Realism</option>
                                            <option value="Water color">Water color</option>
                                            <option value="Black Work">Black Work</option>
                                            <option value="Fine Line">Fine Line</option>
                                            <option value="B&G Realism">Portrait</option>
                                            <option value="Cover Up">Cover Up</option>
                                        </select>
                                    </div>
                            }

                            {
                                piercingDesktopMode && 
                                    <div className="form_contact-piercing-mode-desktop">
                                        <label htmlFor="piercing">Piercing Location*</label>
                                        <select id="piercing" name="piercing">
                                            <option value="Ear">Ear</option>
                                            <option value="Nose">Nose</option>
                                            <option value="Naval">Naval</option> 
                                            <option value="Lip">Lip</option>
                                            <option value="Body">Body</option>
                                        </select>
                                    </div>
                            }

                        </div>
                    </div>
                    
                    {/* Mobile only */}
                    <div className="form_contact-field">
                        {
                            typeTattooMobileMode && 
                                <div className="form_contact-type-tattoo">
                                    <label htmlFor="type_tattoo">Type of Tattoo*</label>
                                    <select id="type_tattoo" name="type_tattoo">
                                        <option value="B&G Realism">B&G Realism</option>
                                        <option value="Water color">Water color</option>
                                        <option value="Black Work">Black Work</option>
                                        <option value="Fine Line">Fine Line</option>
                                        <option value="B&G Realism">Portrait</option>
                                        <option value="Cover Up">Cover Up</option>
                                    </select>
                                </div>
                        }


                        {
                            piercingMobileMode && 
                                <div className="form_contact-piercing">
                                    <label htmlFor="piercing">Piercing Location*</label>
                                    <select id="piercing" name="piercing">
                                        <option value="Ear">Ear</option>
                                        <option value="Nose">Nose</option>
                                        <option value="Naval">Naval</option> 
                                        <option value="Lip">Lip</option>
                                        <option value="Body">Body</option>
                                    </select>
                                </div>
                        }

                        {
                            typeTattooMobileMode &&
                                <div>
                                    <label htmlFor="size">Size*</label>
                                    <select id="size" name="size">
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option> 
                                        <option value="Full Sleeve">Full Sleeve</option>
                                    </select>
                                </div>
                        }

                        {
                            typeTattooDesktopMode &&
                                <div>
                                    <label htmlFor="size">Size*</label>
                                    <select id="size" name="size">
                                        <option value="Small">Small</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Large">Large</option> 
                                        <option value="Full Sleeve">Full Sleeve</option>
                                    </select>
                                </div>
                        }
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
        </>
    )
}

export default FormContact;
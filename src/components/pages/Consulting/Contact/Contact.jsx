import { useState } from 'react';

const Contact = () => {
    const [ message, setMessage ] = useState(false);

    const onSubmitMessage = (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const company = document.getElementById('company');
    
        setMessage(true);
        fetch('https://rich-jade-leopard-shoe.cyclic.app/sendemail', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                name: name.value, 
                email: email.value, 
                phone: phone.value, 
                company: company.value,
                message: messageInput.value
            })
        }).then(response => {
            console.log('RESPONSE ---> ' , response)
        })

        setTimeout(() => {
            name.value = '';
            email.value = ''; 
            phone.value = ''; 
            messageInput.value = '';
            company.value = ''
        }, 1500);

        setTimeout(() => {
            setMessage(false);
        }, 5000);
    }


    return (
        <section className="contact">
            <div>
                <span>{message ? 'Mensagem enviada com sucesso!' : ''}</span>
            </div>
            <div className="contact__main-title">
                <h3 className="contact__title">Contact Us</h3>
                {
                    window.innerWidth < 1024 ?
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your organization, and how we can help you achieve even greater success.</p>
                    :
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your <br /> organization, and how we can help you achieve even greater success.</p>
                }
            </div>
            <form className="contact__form" onSubmit={onSubmitMessage}>
                <div className="contact__form-control">
                    <label htmlFor="">Nome*</label>
                    <input type="text" id="name" name="name" placeholder="First name" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">E-mail*</label>
                    <input type="email" id="email" name="email" placeholder="Insert your e-mail" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Phone*</label>
                    <input type="tel" name="phone" id="phone" placeholder="+1 (000) 000-0000" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Company*</label>
                    <input type="text" name="company" id="company" placeholder="Insert your company name" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Project Details</label>
                    <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit">Send Request</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;
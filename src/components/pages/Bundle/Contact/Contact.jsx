const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__main-title">
                <h3 className="contact__title">Contact Us</h3>
                {
                    window.innerWidth < 1024 ?
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your organization, and how we can help you achieve even greater success.</p>
                    :
                        <p className="contact__description">Use the form below to contact us. We look forward to learning more about you, your <br /> organization, and how we can help you achieve even greater success.</p>
                }
            </div>
            <form className="contact__form">
                <div className="contact__form-control">
                    <label htmlFor="">Nome*</label>
                    <input type="text" name="name" placeholder="First name" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">E-mail*</label>
                    <input type="email" name="email" placeholder="Insert your e-mail" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Phone*</label>
                    <input type="tel" name="phone" placeholder="+1 (000) 000-0000" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Company*</label>
                    <input type="text" name="company" placeholder="Insert your company name" />
                </div>
                <div className="contact__form-control">
                    <label htmlFor="">Project Details</label>
                    <textarea name="project_detail" id="" cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button type="submit">Send Request</button>
                </div>
            </form>
        </section>
    )
}

export default Contact;
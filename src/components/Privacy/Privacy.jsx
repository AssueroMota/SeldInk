// Components 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const contents = [
    { 
        id: 1,
        title: 'RESEARCH',
        description: 
        `<p>Selden Ink (“us”, “we”, or “our”) operates https://seldeink.com websites (the “Service”). This page informs you of our policies regarding the collection, use and disclosure of Personal Information (as defined below) when you use our Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
        <p></p><strong>Information Collection and Use</strong></p>
        
        <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, your name (“Personal Information”), etc. We collect this information for the purpose of providing the Service, identifying and communicating with you, responding to your requests/inquiries, servicing your purchase orders, and improving our services.</p>
        
        <p><strong>Log Data</strong></p>
        
        <p>We may also collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
        
        <p>In addition, we may use third-party services such as Google Analytics that collect, monitor and analyze this type of information in order to increase our Service’s functionality. These thirdparty service providers have their own privacy policies addressing how they use such information.</p>
        
        <p><strong>Cookies</strong></p>
        
        <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.</p>
        
        <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The Help feature on most browsers provide information on how to accept cookies, disable cookies or to notify you when receiving a new cookie.</p>
        
        <p>If you do not accept cookies, you may not be able to use some features of our Service and we recommend that you leave them turned on.</p>
        
        <p><strong>Behavioral Remarketing</strong></p>
        
        <p>We may use remarketing services to advertise on third party web sites to you after you visited our Service. We, and our third-party vendors, use cookies to inform, optimize and serve ads based on your past visits to our Service.</p>
        
        <p><strong>Google</strong></p>
        
        <p>Google AdWords remarketing service is provided by Google Inc. You can opt-out of Google Analytics for Display Advertising and customize the Google Display Network ads by visiting the Google Ads Settings page. Google also recommends installing the Google Analytics Opt-out Browser Add-on for your web browser. Google Analytics Opt-out Browser Add-on provides visitors with the ability to prevent their data from being collected and used by Google Analytics. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page.</p>
        
        <p><strong>Facebook</strong></p>
        
        <p>Facebook remarketing service is provided by Facebook Inc. To opt-out from Facebook’s interest-based ads follow these instructions from Facebook. Facebook adheres to the Self-Regulatory Principles for Online Behavioral Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through the Digital Advertising Alliance in the USA , the Digital Advertising Alliance of Canada in Canada or the European Interactive Digital Advertising Alliance in Europe, or opt-out using your mobile device settings. For more information on the privacy practices of Facebook, please visit Facebook’s Data Policy.</p>
        
        <p><strong>Service Providers</strong></p>
        
        <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.</p>
        
        <p>These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.</p>
        
        <p><strong>Communications</strong></p>
        
        <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send or by contacting us.</p>
        
        <p><strong>Business</strong></p>
        
        <p>Transaction If we are involved in a merger, acquisition or asset sale, your Personal Information may be transferred as a business asset. In such cases, we will provide notice before your Personal Information is transferred and/or becomes subject to a different Privacy Policy.</p>
        
        <p><strong>Security</strong></p>
        
        <p>The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store, in order to protect it from unauthorized access, destruction, use, modification, or disclosure. However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure and we are unable to guarantee the absolute security of the Personal Information we have collected from you.</p>
        
        <p><strong>International Transfer</strong></p>
        
        <p>Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside United States and choose to provide information to us, please note that we transfer the information, including Personal Information, to United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
        
        <p><strong>Links to Other Sites</strong></p>
        
        <p>Our Service may contain links to other sites that are not operated by us. If you click on a thirdparty link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over, and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
        
        <p><strong>Children’s Privacy</strong></p>
        
        <p>Only persons age 18 or older have permission to access our Service. Our Service does not address anyone under the age of 13 (“Children”).</p>
        
        <p>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you learn that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a child under age 13 without verification of parental consent, we take steps to remove that information from our servers.</p>
        
        <p><strong>Changes to This Privacy Policy</strong></p>
        
        <p>This Privacy Policy will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.</p>
        
        <p>We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.</p>
        
        <p>If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.</p>
        
        <p><strong>Contact Us</strong></p>
        
        <p>If you have any questions about this Privacy Policy, please please contact us at contact@seldenink.com.",
        alt: 'image design process 1'</p>`
    }
]

const Privacy = () => {
    return(
        <>
            <Header></Header>
            <section className="process privacy-policy">
                {window.innerWidth < 1024 ? 
                    <h1 className="process__title">PRIVACY <br /> POLICY</h1>
                :
                    <h1 className="process__title">PRIVACY POLICY</h1>
                }
                <div className="process__cards">
                    {
                        contents?.map(content => (
                            <div key={content.id} className="process_card">
                                <div>
                                    {/* <p className="process__card-icon"><span className={`process__card-icon-content-${content.id}`}>{content.title}</span></p> */}
                                    <ul className="process__card-description" dangerouslySetInnerHTML={{__html: `${content.description}`}}></ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Privacy;
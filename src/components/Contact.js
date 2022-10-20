import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img2.svg'

export const Contact = () => {
    const formInitialDetails = {
        fullName: '',
        email: '',
        message: ''
    };
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (field, value) => {
        setFormDetails({
            ...formDetails,
            [field]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch('http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;chartset=utf-8'
            },
            body: JSON.stringify(formDetails)
        });

        if (!response.ok) {
           setStatus({success: false, message: 'HTTP ERROR. Your message was not sent'});
        }

        const res = await response.json();

        if (res.status === 200) {
            console.log('status is 200')
            console.log('response>>', response)
            setStatus({ success: true, message: 'Message sent successfully'});
        } else {
            console.log('status is not 200')
            console.log('response>>', response)
            setStatus({success: false, message: 'email server'});
        }
        setButtonText('Send');
        setFormDetails(formInitialDetails);
    };

    return(
        <section className='contact' id='connect'>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={contactImg} alt='Contact Me' />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.fullName} placeholder='Full Name' onChange={(e) => onFormUpdate('fullName', e.target.value)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col className='px-1'>
                                    <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            <Row className='py-2'>
                            {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                            }
                            </Row>
                            
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}
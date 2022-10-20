import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArriwRightCircle, ArrowRightCircle } from 'react-bootstrap-icons'
import TrackVisibility from 'react-on-screen'
import { HashLink  } from 'react-router-hash-link'
import { BrowserRouter as Router } from 'react-router-dom'

export const Hero = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]  = useState(false);
    const toRotate = ['BackEnd Dev', 'FrontEnd Dev', 'API Dev', 'Full Stack Dev'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 800;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) setDelta(prevDelta => prevDelta / 2)

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum (loopNum + 1);
            setDelta(300);
        }
    };

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    return(
        <Router>
            <section  className='banner' id='home'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {( { isVisible }) => 
                            <div className={isVisible ? 'animate__animated animate__fadeInLeft' : ''}>
                                <span className='tagline'>
                                    Welcome to my Portfolio
                                </span>
                                <h1>{`~Hi there! I'm a `}<br/></h1>
                                <h1>${text}</h1>
                                <p> Full Stack Dev with more than 10 years of experience developing desktop software, native apps and web applications. Since 2017 I have been highly immersed in the world of finance and fintech.</p>
                                <HashLink to='#connect'>
                                <button className='contact-me' onClick={() => console.log('Contact')}>Contact <ArrowRightCircle size={25} /></button>
                                </HashLink>
                            </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>

            </section>
        </Router>
    )
}
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/img/meter-1.svg'
import meter2 from '../assets/img/meter-2.svg'
import meter3 from '../assets/img/meter-3.svg'
import TrackVisibility from 'react-on-screen'

export const Skills = () => {
    const responsive = {
        superLargeDektop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {( { isVisible }) => 
                            <div className={isVisible ? 'skill-bx animate__animated animate__pulse' : 'skill-bx'}>
                                <h2> Skills</h2>
                                <p> Highly efficient in the development of financial data collection, analysis and management tools, high standard APIs for financial operations, risk assessment models and high frequency systems for the execution of orders in markets and trading venues.</p>
                                <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                        <img src={meter1} alt='Image' />
                                        <h5>NodeJS</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5>C/C++</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='Image' />
                                        <h5>Python</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='Image' />
                                        <h5>Solidity</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter3} alt='Image' />
                                        <h5>React / NextJS</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter2} alt='Image' />
                                        <h5>Vue / Django</h5>
                                    </div>
                                    <div className='item'>
                                        <img src={meter1} alt='Image' />
                                        <h5>Google Cloud Platform</h5>
                                    </div>
                                </Carousel>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}
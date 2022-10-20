import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'

export const Projects = () => {

    const projects = [
        {
            title: 'FTX Api',
            description: 'API + trading engine to execute advance orders in FTX',
            imgUrl: projImg1,
            projectUrl: 'https://github.com/cryptohabitat/ftx_engine_test'
        },
        {
            title: 'Web Portfolio',
            description: 'Simple Web Portfolio with small animations using React, Bootstrap and Animate.css',
            imgUrl: projImg2,
            projectUrl: 'https://github.com/cryptohabitat/ftx_engine_test'
        },
        {
            title: 'NFT Marketplace',
            description: 'Full responsive NFT Marketplace in Goerli Network, using Solidity for Smart Contracts and NextJS/TailwindCSS in frontend.',
            imgUrl: projImg3,
            projectUrl: 'https://arepanfts.vercel.app/'
        },
    ];

    return(
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I handle a wide variety of languages ​​(C/C++, C#, Java, nodeJS, Python, Solidity) and frameworks for web development (React, Next, Vue, Django).</p>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project} />
                                            )
                                            })
                                        }
                                    </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
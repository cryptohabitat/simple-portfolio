import { Col } from 'react-bootstrap'

export const ProjectCard = ({title, description, imgUrl, projectUrl}) => {
    return(
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={imgUrl} />
                <div className='proj-txt'>
                    <h4><a href={projectUrl} target="_blank" rel="noreferrer">{title}</a></h4>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    )
}
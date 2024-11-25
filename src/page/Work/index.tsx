import workMainImage from '../../images/work-main.png';
const Image = () => {
    return (
        <img  src={workMainImage} />
    )
}
const ProjectName = () => {
    return (
        <div className="main__content-txt">
            <span>Product Name</span>
            <span>Product Design</span>
        </div>
    )
}

const Content = () => {
    return (
        <div className="main__content">
            <Image />
            <ProjectName />
        </div>
    )
}

const Work = () => {

    return (
        <div className="main">
            <h2>I’m a digital product designer from the world</h2>
            <Content />
        </div>
    )

}

export default Work;
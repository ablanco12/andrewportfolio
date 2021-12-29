import "./about.css"
import ProjectsImage from '../../img/avi-richards-Z3ownETsdNQ-unsplash.jpg';

const About = () => {
    return(
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={ProjectsImage} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    Here I will have a placeholder for my about me section subtitle.. and it will be glorious.
                </p>
                <p className="about-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    suscipit ultrices justo, at pharetra orci condimentum eu. Mauris diam eros,
                    interdum in tincidunt id, tempus in ligula. Nulla felis lectus, pretium et
                    est quis, venenatis rutrum velit. Phasellus porttitor, lectus quis malesuada
                    luctus, justo purus ultrices felis, nec rhoncus lacus nisl vel enim. Nam ultricies
                    in dolor id venenatis. Mauris quis faucibus ex. Phasellus faucibus id quam id
                    molestie.
                </p>
                <div className="about-award">
                    <img src="" alt="" className="about-award-img" />
                </div>

            </div>
        </div>
    )
}

export default About;
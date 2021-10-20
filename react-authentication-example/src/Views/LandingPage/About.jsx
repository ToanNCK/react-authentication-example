import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="about" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Few words about me</h2>
                            <p className="p-large">My primary passion is writing. I love to write just about anything that inspires me. In time I developed a preference for the tech field, especially web development. Soon after that I also started to teach about writing and speak at conferences</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <img className="img-fluid" src="../src/assets/images/about.jpg" alt="alternative" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="skill-box">
                                <h4>Tech Writing</h4>
                                <p>I've been writing my entire life. Started with fiction, social issues but now settled on technology and web development</p>
                            </div>
                            <div className="skill-box">
                                <h4>Teaching Courses</h4>
                                <p>Most of my courses and videos are about copywriting and freelancing. Many viewers and students expressed their gratitude</p>
                            </div>
                            <div className="skill-box">
                                <h4>Public Speaking</h4>
                                <p>Public speaking was a natural progression after writing and teaching. I attend a couple of technology focused events per year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { About };
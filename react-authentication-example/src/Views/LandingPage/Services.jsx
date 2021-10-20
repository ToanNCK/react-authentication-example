import React from 'react';

class Services extends React.Component {
    render() {
        return (
            <div id="services" className="basic-2 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading">Offered services</h2>
                            <p className="p-heading">I would love to use my skills to help your project. My expertise spans from copywriting and tech writing to teaching courses and public speaking</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <ul className="list-unstyled first">
                                <li className="media">
                                    <i className="fas fa-rocket"></i>
                                    <div className="media-body">
                                        <h5>Business strategy</h5>
                                        <p>Based on my experience working with fast growing startups I can offer ideas for your business strategy</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-bullhorn"></i>
                                    <div className="media-body">
                                        <h5>Marketing planning</h5>
                                        <p>While trying to build my personal brand and sell my copywriting services I've learned a few marketing tricks</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-font"></i>
                                    <div className="media-body">
                                        <h5>Copywriting services</h5>
                                        <p>I can create marketing copy, sales literature even blog posts so don't hesitate to get in touch for a quote</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className="list-unstyled second">
                                <li className="media">
                                    <i className="fas fa-keyboard"></i>
                                    <div className="media-body">
                                        <h5>Tech writing services</h5>
                                        <p>You've built a software product and now you need to create your documentation? I am here to help with that</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-photo-video"></i>
                                    <div className="media-body">
                                        <h5>Teaching videos</h5>
                                        <p>The easiest way to help someone learn how to use your product is with video tutorials. I can create them for you</p>
                                    </div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-users"></i>
                                    <div className="media-body">
                                        <h5>Conference speaking</h5>
                                        <p>I can speak at your conference about writing, teaching and how to create a successful business based on skills</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Services };
import React from "react";

class FooterLandingPage extends React.Component {

    render() {

        return (
            <div className="copyright bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © <a href="#your-link">Your name</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { FooterLandingPage };
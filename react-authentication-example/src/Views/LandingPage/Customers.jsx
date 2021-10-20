import React from 'react';

class Customers extends React.Component {
    render() {
        return (
            <div className="basic-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Worked with the best</p>
                            <div className="image-container">
                                <img className="img-fluid" src="../src/assets/images/customer-logo-1.png" alt="alternative" />
                                <img className="img-fluid" src="../src/assets/images/customer-logo-2.png" alt="alternative" />
                                <img className="img-fluid" src="../src/assets/images/customer-logo-3.png" alt="alternative" />
                                <img className="img-fluid" src="../src/assets/images/customer-logo-4.png" alt="alternative" />
                                <img className="img-fluid" src="../src/assets/images/customer-logo-5.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Customers };
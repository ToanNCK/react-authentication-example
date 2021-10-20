import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="area-1">
                    <div className="text-container">
                        <h1 className="h1-large">Hi I am Nico and I <span id="js-rotating">write, teach, speak</span></h1>
                        <p className="p-large">Below you will find a few details about my life, skills, and my work in writing, teaching and speaking</p>
                        <a className="page-scroll" href="#about"><i className="fas fa-chevron-down"></i></a>
                    </div>
                </div>
                <div className="area-2"></div>
            </header>
        );
    }
}

export { Header };
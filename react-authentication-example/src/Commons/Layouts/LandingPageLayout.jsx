import React from 'react';
import { Router } from 'react-router-dom';
import { history } from '@/_helpers';
import { Helmet } from 'react-helmet';
import { FooterLandingPage, NavigationLandingPage } from '@/Commons';
import { Header, About, Services, Invitation, Projects, Customers, Contact } from '@/Views';

class LandingPageLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Helmet>
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta name="description" content="Your description" />
                        <meta name="author" content="Your name" />
                        <meta property="og:site_name" content="" />
                        <meta property="og:site" content="" />
                        <meta property="og:title" content="" />
                        <meta property="og:description" content="" />
                        <meta property="og:image" content="" />
                        <meta property="og:url" content="" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <title>Nico Webpage Title</title>
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap" rel="stylesheet" />
                        <link href="../src/assets/css/bootstrap.css" rel="stylesheet" />
                        <link href="../src/assets/css/fontawesome-all.css" rel="stylesheet" />
                        <link href="../src/assets/css/styles-landingpage.css" rel="stylesheet" />
                        <link href="../src/assets/styles.css" rel="stylesheet" />
                        <link rel="icon" href="../src/assets/images/favicon.png" />

                        <script src="../src/assets/js/jquery.min.js"></script>
                        <script src="../src/assets/js/bootstrap.min.js"></script>
                        <script src="../src/assets/js/jquery.easing.min.js"></script>
                        <script src="../src/assets/js/morphext.min.js"></script>
                        <script src="../src/assets/js/scripts.js"></script>
                    </Helmet>
                    <NavigationLandingPage />
                    <Header />
                    <About />
                    <Services />
                    <Invitation />
                    <Projects />
                    <Customers />
                    <Contact />
                    <FooterLandingPage />
                </div>
            </Router>
        );
    }
}

export { LandingPageLayout };
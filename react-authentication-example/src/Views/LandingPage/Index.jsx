import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { $ } from "react-jquery-plugin";

const validateLogin = Yup.object().shape({
  cname: Yup.string().required("Trường này không được để trống"),
  cemail: Yup.string()
    .required("Trường này không được để trống")
    .email("Email không đúng định dạng"),
  cmessage: Yup.string().required("Trường này không được để trống"),
});

class IndexLandingPage extends React.Component {
  componentDidMount() {
    $(document).find(".morphext-component").remove();
    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "../src/assets/js/morphext.min.js";
    s.className = "morphext-component";
    const s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.async = true;
    s2.src = "../src/assets/js/cus.morphext.js";
    s2.className = "morphext-component";
    document.body.appendChild(s);
    document.body.appendChild(s2);
  }

  render() {
    let linkDetail = "/landing-page/project";
    return (
      <div>
        {/* Header */}
        <header className="header">
          <div className="area-1">
            <div className="text-container">
              <h1 className="h1-large">
                Hi I am Nico and I{" "}
                <span id="js-rotating">write, teach, speak</span>
              </h1>
              <p className="p-large">
                Below you will find a few details about my life, skills, and my
                work in writing, teaching and speaking
              </p>
              <a className="page-scroll" href="#about">
                <i className="fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
          <div className="area-2"></div>
        </header>
        {/* end of haeader */}

        {/* About */}
        <div id="about" className="basic-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Few words about me</h2>
                <p className="p-large">
                  My primary passion is writing. I love to write just about
                  anything that inspires me. In time I developed a preference
                  for the tech field, especially web development. Soon after
                  that I also started to teach about writing and speak at
                  conferences
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="../src/assets/images/about.jpg"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="skill-box">
                  <h4>Tech Writing</h4>
                  <p>
                    I've been writing my entire life. Started with fiction,
                    social issues but now settled on technology and web
                    development
                  </p>
                </div>
                <div className="skill-box">
                  <h4>Teaching Courses</h4>
                  <p>
                    Most of my courses and videos are about copywriting and
                    freelancing. Many viewers and students expressed their
                    gratitude
                  </p>
                </div>
                <div className="skill-box">
                  <h4>Public Speaking</h4>
                  <p>
                    Public speaking was a natural progression after writing and
                    teaching. I attend a couple of technology focused events per
                    year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of about */}

        {/* Services */}
        <div id="services" className="basic-2 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Offered services</h2>
                <p className="p-heading">
                  I would love to use my skills to help your project. My
                  expertise spans from copywriting and tech writing to teaching
                  courses and public speaking
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled first">
                  <li className="media">
                    <i className="fas fa-rocket"></i>
                    <div className="media-body">
                      <h5>Business strategy</h5>
                      <p>
                        Based on my experience working with fast growing
                        startups I can offer ideas for your business strategy
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-bullhorn"></i>
                    <div className="media-body">
                      <h5>Marketing planning</h5>
                      <p>
                        While trying to build my personal brand and sell my
                        copywriting services I've learned a few marketing tricks
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-font"></i>
                    <div className="media-body">
                      <h5>Copywriting services</h5>
                      <p>
                        I can create marketing copy, sales literature even blog
                        posts so don't hesitate to get in touch for a quote
                      </p>
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
                      <p>
                        You've built a software product and now you need to
                        create your documentation? I am here to help with that
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-photo-video"></i>
                    <div className="media-body">
                      <h5>Teaching videos</h5>
                      <p>
                        The easiest way to help someone learn how to use your
                        product is with video tutorials. I can create them for
                        you
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-users"></i>
                    <div className="media-body">
                      <h5>Conference speaking</h5>
                      <p>
                        I can speak at your conference about writing, teaching
                        and how to create a successful business based on skills
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end of services */}

        {/* Invitation */}
        <div className="basic-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>
                  Contact me today if you have a writing, teaching or speaking
                  project. I am available anytime at moderate costs
                </h4>
                <a className="btn-solid-lg page-scroll" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of invitation */}

        {/* Projects */}
        <div id="projects" className="cards-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="h2-heading">Delivered projects</h2>
                <p className="p-heading">
                  Here are some of the projects I am most proud of. I am
                  grateful for working with some amazing people from which I had
                  the pleasure to learn a lot
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-1.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Freewriting.com</strong> - Blog about writing and
                    freelancing for starting copywriters
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-2.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Learntowrite.com</strong> - Video tutorials on how
                    to write about the subjects you love most
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-3.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Freelancelife.com</strong> - Dedicated course on how
                    to become a freelancer and work from home
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-4.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Buzzerpal.com</strong> - Here i teach about writing
                    marketing plans and business strategies
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-5.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Strategize.com</strong> - Articles and resources
                    about solopreneurship and making money online
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-6.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Copyresource.com</strong> - Resources lists about
                    copywriting, tech writing and all related
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-7.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Skycentral.com</strong> - List of the best public
                    speaking conferences around the world
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-8.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Coursestart.com</strong> - Together with my business
                    partner we created a courses marketplace
                  </div>
                </div>

                <div className="card">
                  <div className="card-image">
                    <Link to={linkDetail}>
                      <img
                        className="img-fluid"
                        src="../src/assets/images/project-9.jpg"
                        alt="alternative"
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <strong>Quicktuts.com</strong> - Short and to the point
                    video tutorials on just about everything tech related
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of projects */}

        {/* Customers */}
        <div className="basic-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>Worked with the best</p>
                <div className="image-container">
                  <img
                    className="img-fluid"
                    src="../src/assets/images/customer-logo-1.png"
                    alt="alternative"
                  />
                  <img
                    className="img-fluid"
                    src="../src/assets/images/customer-logo-2.png"
                    alt="alternative"
                  />
                  <img
                    className="img-fluid"
                    src="../src/assets/images/customer-logo-3.png"
                    alt="alternative"
                  />
                  <img
                    className="img-fluid"
                    src="../src/assets/images/customer-logo-4.png"
                    alt="alternative"
                  />
                  <img
                    className="img-fluid"
                    src="../src/assets/images/customer-logo-5.png"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of customers */}

        {/* Contact */}
        <div id="contact" className="form-1 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="text-container">
                  <h2>Contact details</h2>
                  <p className="sub-heading">
                    It's easy to get in touch with my main office and inquire
                    anything about my writing, teaching and speaking{" "}
                    <a className="orange no-line" href="#your-link">
                      services
                    </a>
                  </p>

                  <ul className="list-unstyled li-space-lg">
                    <li>22 Innovative, San Francisco, CA 94043, US</li>
                    <li>+40 721 455 377</li>
                    <li>+40 721 455 377</li>
                    <li>
                      <a
                        className="orange no-line"
                        href="mailto:office@domain.com"
                      >
                        office@domain.com
                      </a>
                    </li>
                    <li>
                      <a className="orange no-line" href="#your-link">
                        www.domain.com
                      </a>
                    </li>
                  </ul>

                  <div className="social-icons">
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-twitter fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-pinterest-p fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                      </a>
                    </span>
                    <span className="fa-stack">
                      <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fab fa-instagram fa-stack-1x"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <Formik
                  initialValues={{
                    cname: "",
                    cemail: "",
                    cmessage: "",
                  }}
                  validationSchema={validateLogin}
                  onSubmit={(
                    { cname, cemail, cmessage },
                    { setStatus, setSubmitting }
                  ) => {
                    setStatus();
                    console.log(cname + "_" + cemail + "_" + cmessage);
                  }}
                  render={({ errors, status, touched, isSubmitting }) => (
                    <Form id="contactForm">
                      <div className="form-group">
                        <Field
                          name="cname"
                          type="text"
                          className={
                            "form-control-input" +
                            (errors.cname && touched.cname ? " is-invalid" : "")
                          }
                        />
                        <label className="label-control" htmlFor="cname">
                          Name
                        </label>
                        <ErrorMessage
                          name="cname"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          name="cemail"
                          type="email"
                          className={
                            "form-control-input" +
                            (errors.cname && touched.cname ? " is-invalid" : "")
                          }
                        />
                        <label className="label-control" htmlFor="cemail">
                          Email
                        </label>
                        <ErrorMessage
                          name="cemail"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          id="cmessage"
                          name="cmessage"
                          className={
                            "form-control-textarea" +
                            (errors.cname && touched.cname ? " is-invalid" : "")
                          }
                        />
                        <label className="label-control" htmlFor="cmessage">
                          Project details
                        </label>
                        <ErrorMessage
                          name="cmessage"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="form-control-submit-button"
                        >
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of contact */}
      </div>
    );
  }
}

export { IndexLandingPage };

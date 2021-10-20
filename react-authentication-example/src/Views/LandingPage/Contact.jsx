import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validateLogin = Yup.object().shape({
    cname: Yup.string().required('Trường này không được để trống'),
    cemail: Yup.string().required('Trường này không được để trống').email('Email không đúng định dạng'),
    cmessage: Yup.string().required('Trường này không được để trống'),
});

class Contact extends React.Component {
    render() {
        return (
            <div id="contact" className="form-1 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h2>Contact details</h2>
                                <p className="sub-heading">It's easy to get in touch with my main office and inquire anything about my writing, teaching and speaking <a className="orange no-line" href="#your-link">services</a></p>

                                <ul className="list-unstyled li-space-lg">
                                    <li>22 Innovative, San Francisco, CA 94043, US</li>
                                    <li>+40 721 455 377</li>
                                    <li>+40 721 455 377</li>
                                    <li><a className="orange no-line" href="mailto:office@domain.com">office@domain.com</a></li>
                                    <li><a className="orange no-line" href="#your-link">www.domain.com</a></li>
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
                                    cname: '',
                                    cemail: '',
                                    cmessage: ''
                                }}
                                validationSchema={validateLogin}
                                onSubmit={({ cname, cemail , cmessage }, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    console.log(cname + '_' + cemail + '_' + cmessage)
                                }}
                                render={({ errors, status, touched, isSubmitting }) => (
                                    <Form id="contactForm">
                                        <div className="form-group">
                                            <Field name="cname" type="text" className={'form-control-input' + (errors.cname && touched.cname ? ' is-invalid' : '')} />
                                            <label className="label-control" htmlFor="cname">Name</label>
                                            <ErrorMessage name="cname" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <Field name="cemail" type="email" className={'form-control-input' + (errors.cname && touched.cname ? ' is-invalid' : '')} />
                                            <label className="label-control" htmlFor="cemail">Email</label>
                                            <ErrorMessage name="cemail" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <textarea id="cmessage" name="cmessage" className={'form-control-textarea' + (errors.cname && touched.cname ? ' is-invalid' : '')} />
                                            <label className="label-control" htmlFor="cmessage">Project details</label>
                                            <ErrorMessage name="cmessage" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control-submit-button">Submit</button>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Contact };
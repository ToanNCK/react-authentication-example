import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authenticationService } from "@/_services";

const validateLogin = Yup.object().shape({
  username: Yup.string()
    .required("Tên đăng nhập không được để trống")
    .email("Email không đúng định dạng"),
  password: Yup.string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ hoa, một số và một ký tự chữ hoa đặc biệt"
    ),
  confirmPassword: Yup.string()
    .required("Mật khẩu không được để trống")
    .oneOf([Yup.ref('password'), null], 'Nhập lại mật khẩu phải trùng mật khẩu')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Mật khẩu phải chứa ít nhất 8 ký tự, một chữ hoa, một số và một ký tự chữ hoa đặc biệt"
    )
});

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <h2>Register</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validateLogin}
          onSubmit={({ firstName, lastName, username, password, confirmPassword }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.register(firstName, lastName, username, password, confirmPassword).then(
              (rep) => {
                setStatus(rep);
              },
              (error) => {
                setSubmitting(false);
                setStatus(error);
              }
            );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-8">
                    <label htmlFor="firstName">Họ</label>
                    <Field
                      name="firstName"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="lastName">Tên</label>
                    <Field
                      name="lastName"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Tên đăng nhập <span className="text-danger">*</span></label>
                <Field
                  name="username"
                  type="text"
                  className={
                    "form-control" +
                    (errors.username && touched.username ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mật khẩu  <span className="text-danger">*</span></label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Nhập lại mật khẩu  <span className="text-danger">*</span></label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                  Register
                </button>
                <Link to="/login" className="float-right">
                  Login here!
                </Link>
              </div>
              {status && <div className={"alert alert-info text-center"}>{status}</div>}
            </Form>
          )}
        />
      </div>
    );
  }
}

export { RegisterPage };

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { $ } from "react-jquery-plugin";
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
});

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  componentDidMount() {
    $('input[name="username"]').on("change", function () {
      let data = this.value;
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <div className="alert alert-info">
          Tên đăng nhập: admin@gmail.com
          <br />
          Mật khẩu: Admin@123
        </div>
        <h2>Login</h2>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={validateLogin}
          onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.login(username, password).then(
              (user) => {
                const { from } = this.props.location.state || {
                  from: { pathname: "/" },
                };
                this.props.history.push(from);
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
                <label htmlFor="username">Tên đăng nhập</label>
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
                <label htmlFor="password">Mật khẩu</label>
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                  )}
                  Login
                </button>
              </div>
              {status && <div className={"alert alert-danger"}>{status}</div>}
            </Form>
          )}
        />
      </div>
    );
  }
}

export { LoginPage };

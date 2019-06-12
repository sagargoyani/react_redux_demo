import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Yup from 'yup';
import { userLogin } from '../../HomePage/action';
import { history } from '../../App';

class Login extends Component {
  constructor(props) {
    super(props);
    console.log('props', this.props);
  }

  componentDidUpdate() {
    const { loginResponse } = this.props;
    if (loginResponse && loginResponse.response.code === 1) {
      history.push('/dashboard');
    }
    console.log('componentDidUpdate********', history);
  }

  render() {
    // this.props.loginRes && this.props.loginRes.response && this.props.onHide()
    const { loginResponse } = this.props;
    console.log('props', this.props);
    console.log('loginResponse', loginResponse);
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.loginHandler(values);
            console.log(this.props.loginRes && this.props.loginRes.response);
            this.props.loginRes &&
              this.props.loginRes.response &&
              this.props.onHide();
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleSubmit,
              handleChange,
              handleBlur,
            } = props;
            return (
              <>
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Login
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <label htmlFor="username">User Name</label>
                    <Form.Control
                      id="username"
                      placeholder="Enter your Username"
                      type="text"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.username && touched.username}
                    />
                    {errors.username && touched.username && (
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    )}
                    <label htmlFor="password">Password</label>
                    <Form.Control
                      id="password"
                      placeholder="enter your password"
                      type="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.password && touched.password}
                    />
                    {errors.password && touched.password && (
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    )}
                    {loginResponse && loginResponse.response.code === 0 ? (
                      <label style={{ color: 'red' }} color="danger">
                        please enter valid usename or password
                      </label>
                    ) : (
                      ''
                    )}
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleSubmit}
                  >
                    > > Sign in
                  </Button>
                  <Button
                    as="input"
                    onClick={this.props.onHide}
                    value="Cancel"
                  />
                  />
                </Modal.Footer>
              </>
            );
          }}
        </Formik>
      </Modal>
    );
  }
}

// const mapStateToProps = (state, props) => {
//     console.log("state", state)
//     return ({
//         loginResponse: state.loginResponse
//     })
// }

// const mapActionsToProps = (dispatch, props) => {
//     return bindActionCreators({
//         loginHandler: userLogin
//     }, dispatch)
// }

// export default connect(mapStateToProps, mapActionsToProps)(Login);
export default Login;

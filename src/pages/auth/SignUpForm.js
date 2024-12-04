import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import SigninPhoto from "../../assets/signin-photo.png";

import { Form, Button, Image, Col, Row, Container, Alert, } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
        profession: "",
      });
    const { username, password1, password2, profession } = signUpData;
    const [professions, setProfessions] = useState([]);
    const history = useHistory();
    const [errors, setErrors] = useState({});

    useEffect(() => {
      const fetchProfessions = async () => {
        try {
          const { data } = await axios.get("/profiles/professions/");
          setProfessions(data);
        } catch (err) {
          // console.error("Error fetching professions:", err);
        }
      };
  
      fetchProfessions();
    }, []);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setSignUpData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    
      if (name === "profession" && !professions.includes(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          profession: ["Please select a valid profession."],
        }));
      } else if (name === "profession") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          profession: undefined,
        }));
      }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/registration/", signUpData);
          history.push("/signin");
        } catch (err) {
          setErrors(err.response?.data);
        }
      };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={7}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

{/* {Signup form} */}
    <Form onSubmit={handleSubmit}>
  <Form.Group as={Row} controlId="username">
    <Form.Label className="d-none">
      Username
    </Form.Label>
    
      <Form.Control
      className={styles.Input}
      type="text"
      placeholder="Username"
      name="username"
      value={username}
      onChange={handleChange} />
    
  </Form.Group>
  {errors.username?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

  <Form.Group as={Row} controlId="password1">
    <Form.Label className="d-none">
      Password
    </Form.Label>
    
      <Form.Control
      className={styles.Input}
      type="password"
      placeholder="Password"
      name="password1"
      value={password1}
      onChange={handleChange} />
    
  </Form.Group>
  {errors.password1?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

  <Form.Group as={Row} controlId="password2">
    <Form.Label className="d-none">
      Repeat Password
    </Form.Label>
    
      <Form.Control
      className={styles.Input}
      type="password"
      placeholder="Repeat Password"
      name="password2"
      value={password2}
      onChange={handleChange} />
    
  </Form.Group>
  {errors.password2?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

<Form.Group as={Row} controlId="profession">
              <Form.Label className="d-none">Profession</Form.Label>
              <Form.Control
                as="select"
                className={styles.Input}
                name="profession"
                value={profession}
                onChange={handleChange}
              >
                <option value="">Choose your profession</option>
                {professions.map((prof, idx) => (
                  <option key={idx} value={prof}>
                    {prof}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {errors.profession?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

  <Button
  className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
  type="submit">Sign Up</Button>
{errors.non_field_errors?.map((message, idx) => (
    <Alert key={idx} variant="warning" className="mt-3">
        {message}
    </Alert>
))}

</Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={5}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={SigninPhoto}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
// import {
//   useCurrentUser,
//   useSetCurrentUser,
// } from "../../contexts/CurrentUserContext";
import axios from "axios";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function ProfileEditForm() {
  const [errors, setErrors] = useState({});
  const [professions, setProfessions] = useState([]);
  const [profileData, setProfileData] = useState({
    full_name: "",
    about: "",
    avatar: "",
    profession: "",
    years_of_experience: "",
    website: "",
    location: "",
  });

  const { full_name, about, avatar, profession, years_of_experience, website, location } = profileData;

  const imageFile = useRef();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosReq.get(`/profiles/${id}/`);
        const { full_name, about, avatar, profession, years_of_experience, website, location, is_owner } = data;

        is_owner ? setProfileData({
          full_name,
          about,
          avatar,
          profession,
          years_of_experience,
          website,
          location
        }) : history.push("/");
      } catch (err) {
        // console.log(err)
      }
    };

    fetchProfile();
  }, [history, id]);

  useEffect(() => {
    const fetchProfessions = async () => {
      try {
        const { data } = await axios.get("/profiles/professions/");
        setProfessions(data);
      } catch (err) {
        console.error("Error fetching professions:", err);
      }
    };

    fetchProfessions();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("full_name", full_name);
    formData.append("about", about);
    formData.append("profession", profession);
    formData.append("years_of_experience", years_of_experience);
    formData.append("website", website);
    formData.append("location", location);

    if (imageFile?.current?.files[0]) {
      formData.append("avatar", imageFile.current.files[0]);
    }

    try {
      await axiosReq.put(`/profiles/${id}/`, formData);
      history.push(`/profiles/${id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <>
    <Form.Group controlId="full_name">
    <Form.Label>
      Full Name
    </Form.Label>
    
      <Form.Control
      type="text"
      placeholder="Full Name"
      name="full_name"
      value={full_name}
      onChange={handleChange} />
    
  </Form.Group>
  {errors.full_name?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

      <Form.Group>
    <Form.Label>Profession</Form.Label>
    <Form.Control
      as="select"
      value={profession}
      onChange={handleChange}
      name="profession"
    >
      <option value="">Select Profession</option>
      {professions.map((prof, idx) => (
        <option key={idx} value={prof}>
          {prof}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
  {errors?.profession?.map((message, idx) => (
    <Alert variant="warning" key={idx}>
      {message}
    </Alert>
  ))}

<Form.Group>
    <Form.Label>
      Years of experience
    </Form.Label>
    
      <Form.Control
      type="number"
      placeholder="Experience"
      name="years_of_experience"
      value={years_of_experience}
      onChange={handleChange}
      min="0" />
    
  </Form.Group>
  {errors.years_of_experience?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

<Form.Group>
    <Form.Label>
      Your website URL
    </Form.Label>
    
      <Form.Control
      type="url"
      placeholder="Website"
      name="website"
      value={website}
      onChange={handleChange}/>
    
  </Form.Group>
  {errors.website?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

<Form.Group>
    <Form.Label>
      Location
    </Form.Label>
    
      <Form.Control
      type="text"
      placeholder="Location"
      name="location"
      value={location}
      onChange={handleChange}/>
    
  </Form.Group>
  {errors.location?.map((message, idx) =>
    <Alert variant="warning" key={idx}>
    {message}
  </Alert>
)}

      <Form.Group>
        <Form.Label>About me</Form.Label>
        <Form.Control
          as="textarea"
          value={about}
          onChange={handleChange}
          name="about"
          rows={7}
        />
      </Form.Group>

      {errors?.about?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Gray}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Gray}`} type="submit">
        Save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            <Form.Group>
              {avatar && (
                <figure>
                  <Image src={avatar} fluid />
                </figure>
              )}
              {errors?.avatar?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Gray} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm;
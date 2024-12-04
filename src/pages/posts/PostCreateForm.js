import React, { useRef, useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [areaChoices, setAreaChoices] = useState([]);
  const [styleChoices, setStyleChoices] = useState([]);

  const [postData, setPostData] = useState({
    title: "",
    style: "",
    area_type: "",
    location: "",
    completion_date: "",
    content: "",
    image: "",
  });
  const { title, style, area_type, location, completion_date, content, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const fetchChoices = async () => {
      try {
        // Fetch area type choices
        const areaResponse = await axiosReq.get("/posts/area_type/");
        setAreaChoices(areaResponse.data);  // Assuming response is an array

        // Fetch style choices
        const styleResponse = await axiosReq.get("/posts/style/");
        setStyleChoices(styleResponse.data);  // Assuming response is an array
      } catch (err) {
        // console.error("Error fetching area or style choices:", err);
      }
    };

    fetchChoices();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Inline validation for style and area_type fields
    if (name === "area_type" && !areaChoices.includes(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        area_type: ["Please select a valid area type."],
      }));
    } else if (name === "area_type") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        area_type: undefined,
      }));
    }

    if (name === "style" && !styleChoices.includes(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        style: ["Please select a valid style."],
      }));
    } else if (name === "style") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        style: undefined,
      }));
    }
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleChangeDate = (event) => {
    const { name, value } = event.target;
    setPostData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("style", style);
    formData.append("area_type", area_type);
    formData.append("location", location);
    formData.append("completion_date", completion_date);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (err) {
      // console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label>Style</Form.Label>
        <Form.Control
          as="select"
          name="style"
          value={style}
          onChange={handleChange}
          className="text-capitalize"
        >
          <option value="">Select Style</option>
          {styleChoices.map((choice, idx) => (
            <option key={idx} value={choice}>
              {choice}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.style?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label>Area Type</Form.Label>
        <Form.Control
          as="select"
          name="area_type"
          value={area_type}
          onChange={handleChange}
          className="text-capitalize"
        >
          <option value="">Select Area Type</option>
          {areaChoices.map((choice, idx) => (
            <option key={idx} value={choice}>
              {choice}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      {errors?.area_type?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Completion Date</Form.Label>
        <Form.Control
          type="date"
          name="completion_date"
          value={completion_date}
          onChange={handleChangeDate}
        />
      </Form.Group>
      {errors?.completion_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Bright}`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Gray} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
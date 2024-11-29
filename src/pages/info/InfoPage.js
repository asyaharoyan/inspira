import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/InfoPage.module.css";
import appStyles from "../../App.module.css";

function InfoPage() {
  return (
    <>
    <Row className="d-flex justify-content-center">
        <Col className="my-auto p-0 p-md-2" md={8}>
            <Container 
                className={`${appStyles.Content} ${styles.InfoPage} d-flex justify-content-center align-items-center`}>
            <h2>Welcome to Inspira!</h2>            
            </Container>
        </Col>
        </Row>
        <Row className="d-flex justify-content-center">
        <Col className="my-auto p-0 p-md-2" md={8}>
            <Container 
                className={`${appStyles.Content} ${styles.InfoPage} d-flex flex-column justify-content-center align-items-center`}>
            <h3>About Us</h3>
            <p>Welcome to Inspira—a dynamic platform designed to empower designers, architects, and painters from around the world.
                Whether you're seeking fresh ideas, eager to share your latest project, or looking to engage with a global community,
                Inspira provides a space where creativity thrives.</p>
                <p>Our mission is to connect like-minded professionals and artists, enabling them to share their work, receive constructive
                feedback, and collaborate on inspiring new projects.</p>
                <p>Inspira fosters a community where learning, creativity, and collaboration come together to elevate the work of every individual. 
                    Whether you are a seasoned professional or an emerging artist, Inspira is the place to connect, learn, and grow.
                    Join us and be part of a global creative movement!</p>
            </Container>
        </Col>
        </Row>
        <Row className="d-flex justify-content-center">
        <Col className="my-auto p-0 p-md-2" md={8}>
            <Container 
                className={`${appStyles.Content} ${styles.InfoPage} d-flex flex-column justify-content-center`}>
            <h3 className="text-center">Terms</h3>
            <p>In order to access certain features of the Service, you may be required to create an account. You agree to provide accurate
                and complete information when registering and to keep your account details updated. You are responsible for maintaining the
                confidentiality of your account information and for all activity that occurs under your account.</p>
            <p>Inspira allows you to upload, share, and interact with various types of content, including images, designs, text, and comments 
                ("User Content"). You retain ownership of the content you post, but by submitting User Content, you grant Inspira a worldwide, 
                non-exclusive, royalty-free license to use, display, and distribute your content within the Service.</p>
                <p>You agree not to upload, share, or post content that is:</p>
                <ul>
                    <li>Infringing or violating the intellectual property rights of others.</li>
                    <li>Defamatory, harmful, or offensive.</li>
                    <li>In violation of any applicable laws or regulations.</li>
                </ul>
            <p>Inspira reserves the right to remove any User Content that violates these Terms and Conditions or our Community Guidelines.</p>
            <p>You agree not to use the Service for any unlawful or prohibited purpose. This includes, but is not limited to:</p>
                <ul>
                    <li>Harassing, threatening, or bullying other users.</li>
                    <li>Posting false or misleading information.</li>
                    <li>Engaging in any form of spam or unsolicited advertising.</li>
                    <li>Attempting to interfere with the functionality of the Service or disrupt other users' experience.</li>
                </ul>
            </Container>
        </Col>
        </Row>
        </>
  );
}

export default InfoPage;
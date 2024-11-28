import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
// import Asset from "../../components/Asset";
// import { useProfileData } from "../../contexts/ProfileDataContext";
// import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
//   const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      Popular profiles
    </Container>
  );
};

export default PopularProfiles;
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
// import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });
  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser()

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-post_count"
        );
        const filteredProfiles = data.results.filter(
          (profile) => profile.id !== currentUser?.profile_id
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: { results: filteredProfiles },
        }));
      } catch (err) {
        console.log(err)
      }
    };

    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularProfiles.results.length ? (
        <>
        <p>Most Active Profiles</p>
        {mobile ? (
          <div className="d-flex justify-content-around">
            {popularProfiles.results.slice(0, 4).map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
      ))}
          </div>
        ) : (
          popularProfiles.results.map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))
        )}
      </>
      ) : (
        <Asset spinner />
      )}
      
    </Container>
  );
};

export default PopularProfiles;

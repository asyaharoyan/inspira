import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profilePosts, setProfilePosts] = useState({ results: [] });

  const currentUser = useCurrentUser();
  const { id } = useParams();

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/posts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = currentUser ? (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <h2 className="m-2 text-center">{profile?.full_name}</h2>
      <br />
      <Row noGutters className="px-3 text-center">
        <Col lg={6} className="text-lg-center">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.avatar}
          />
        </Col>
        {profile?.about ? (
          <Col xs={6} className="my-2">
            <h3 className={styles.ProfilePage}>About Me</h3>
            <div>{profile?.about}</div>
            <br />
          </Col>
        ) : (
          <Col xs={6} className="my-2">
            <p>No bio provided yet.</p>
          </Col>
        )}

        <Col lg={12}>
          <Row className="justify-content-center no-gutters">
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Followers</h3>
              <div>{profile?.followers_count}</div>
            </Col>
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Following</h3>
              <div>{profile?.following_count}</div>
            </Col>
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Profession</h3>
              <div>{profile?.profession}</div>
            </Col>
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Experience</h3>
              <div>
                {profile?.years_of_experience ? (
                  `${profile.years_of_experience} years`
                ) : (
                  "- -"
                )}
              </div>
            </Col>
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Website</h3>
              <div>
                {profile?.website ? (
                  <a 
                    href={profile.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                ) : (
                  <p>- -</p>
                )}
              </div>
            </Col>
            <Col xs={4} className="my-2">
              <h3 className={styles.ProfilePage}>Location</h3>
              <div>{profile?.location ? (
                `${profile.location}`
              ) : ("- -")}</div>
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                Unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                Follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  ) : (
    <Link to="/signin">
      <p  className="text-center font-weight-bold">
      Please Sign in to view profile details.
      </p>
    </Link>
    
  );

  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">
      {profile?.full_name ? profile.full_name : profile?.owner}'s posts
      </p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} />
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)}
        />
      ) : (
        <Asset
          src={NoResults}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={10}>
        
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={8} className="d-none d-lg-block p-0 p-lg-2">
        
      </Col>
    </Row>
  );
}

export default ProfilePage;
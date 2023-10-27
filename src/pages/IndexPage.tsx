import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PostCard from "../components/PostCard";

const IndexPage = () => {
  const [page, setPage] = useState("for-you");

  const IndexPageButton = ({ name } : { name: string }) => {
    let formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

      return (
        <Col xs={6} className="my-auto p-0 border-r" >
          <Button
            bsPrefix=""
            variant=""
            onClick={() => setPage(name)}
            as={"div"}
            className="home-page-button"
            >
            { formattedName }
            </Button>
        </Col>
      );
  }

  let fyp_data = [{
      post_id               : 2,
      profile_picture_path  : "/public/images/default.jpg",
      display_name          : "Jay",
      username              : "jay123",
      user_id               : 3,
      post_timestamp        : "20h",
      post_content          : "New phone, new tweet",
      replies               : 1,
      shares                : 1,
      likes                 : 1,
      resources             : []
    },
  ];

  let following_data = [{
      post_id               : 1,
      profile_picture_path  : "/public/images/default.jpg",
      display_name          : "Among Us",
      username              : "amongus",
      user_id               : 1,
      post_timestamp        : "11h",
      post_content          : "This is the newest game i've played!",
      replies               : 1,
      shares                : 1,
      likes                 : 1,
      resources             : []
    },
    {
      post_id               : 1,
      profile_picture_path  : "/public/images/default.jpg",
      display_name          : "Among Us",
      username              : "amongus",
      user_id               : 1,
      post_timestamp        : "11h",
      post_content          : "This is the newest game i've played!",
      replies               : 1,
      shares                : 1,
      likes                 : 1,
      resources             : []
    },
    {
      post_id               : 1,
      profile_picture_path  : "/public/images/default.jpg",
      display_name          : "Among Us",
      username              : "amongus",
      user_id               : 1,
      post_timestamp        : "11h",
      post_content          : "This is the newest game i've played!",
      replies               : 1,
      shares                : 1,
      likes                 : 1,
      resources             : []
    },
  ];

  return (
    <Container fluid className="h-screen p-0">
      <Row className="h-screen m-0">
        <Col xs={12} md={6} className="p-0">
          <Row className="border-b m-0">
            <IndexPageButton name="for-you" />
            <IndexPageButton name="following" />
          </Row>
          <div className="h-full m-0 p-0 border-r">
            <Row className="m-0">
              {
                (page === "for-you") &&
                <>
                {
                  fyp_data.map(
                    datum => (
                      <PostCard 
                      post_id={datum.post_id}
                      profile_picture_path={datum.profile_picture_path}
                      display_name={datum.display_name}
                      username={datum.username}
                      user_id={datum.user_id}
                      post_timestamp={datum.post_timestamp}
                      post_content={datum.post_content}
                      replies={datum.replies}
                      shares={datum.shares}
                      likes={datum.likes}
                      resources={datum.resources}
                      />
                    )
                  )
                }
                </>
              }
              {
                (page === "following") &&
                <>
                {
                  following_data.map(
                    datum => (
                      <PostCard 
                      post_id={datum.post_id}
                      profile_picture_path={datum.profile_picture_path}
                      display_name={datum.display_name}
                      username={datum.username}
                      user_id={datum.user_id}
                      post_timestamp={datum.post_timestamp}
                      post_content={datum.post_content}
                      replies={datum.replies}
                      shares={datum.shares}
                      likes={datum.likes}
                      resources={datum.resources}
                      />
                    )
                  )
                }
                </>
              }
            </Row>
          </div>
        </Col>
        <Col xs={0} md={6} className="p-0">

        </Col>
      </Row>
    </Container>
  );
}

export default IndexPage
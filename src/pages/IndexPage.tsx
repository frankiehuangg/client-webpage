import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Image } from "react-bootstrap-icons";
import PostCard from "../components/PostCard";

const IndexPage = () => {
  const [page, setPage] = useState("for-you");

  const IndexPageButton = ({ name } : { name: string }) => {
    const formattedName = name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

      return (
        <Col xs={6} className="my-auto p-0 border-solid border-r border-slate-600" >
          <Button
            bsPrefix=""
            variant=""
            onClick={() => setPage(name)}
            as={"div"}
            className="home-page-button text-white"
            >
            { formattedName }
            </Button>
        </Col>
      );
  }

  const fyp_data = [{
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

  const following_data = [{
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
        <Col xs={12} className="p-0">
          <Row className="border-solid border-b border-slate-600 m-0">
            <IndexPageButton name="for-you" />
            <IndexPageButton name="following" />
          </Row>
          <div className="pb-2.5 border-solid border-b-4 border-slate-600">
              <form className="p-3 flex flex-row">
                  <div className="mr-2">
                      <img src="/public/images/default.jpg" alt="Profile Picture" className="w-10 h-10 mt-2 rounded-full" />
                  </div>
                  <div className="left-6 flex flex-col w-full">
                      <div className="flex py-3">
                          <input className="flex-1 text-xl border-none outline-none bg-inherit" type="text" placeholder="What is happening?!" />
                      </div>
                      <div className="mt-5 w-full flex justify-between">
                          <label className="mt-2 p-2 bg-sky-500 rounded-full text-sm outline-none border-none">
                              <Image className="w-5 h-5" />
                          </label>
                          <button type="submit" className="mt-2 py-2 px-3 bg-sky-500 rounded-full text-sm outline-none border-none font-bold">Tweet</button>
                      </div>
                  </div>
              </form>
          </div>
          <div className="m-0 p-0">
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
      </Row>
    </Container>
  );
}

export default IndexPage
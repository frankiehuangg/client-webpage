import { Container, Row } from "react-bootstrap"
import UserCard from "../components/UserCard";

const PostLikesPage = () => {
    const post_likes_data = [{
        user_id               : 3,
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        username              : "amongus",
        description           : "I'm the best impostor",
      },
      {
        user_id               : 3,
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        username              : "amongus",
        description           : "I'm the best impostor",
      },
      {
        user_id               : 3,
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        username              : "amongus",
        description           : "I'm the best impostor",
      },
      {
        user_id               : 3,
        profile_picture_path  : "/public/images/default.jpg",
        display_name          : "Jay",
        username              : "amongus",
        description           : "I'm the best impostor",
      },
    ];

    return (
        <Container fluid className="h-screen p-0">
          <div className="grow basis-2/5 z-30">
              <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                  <h2 className="text-xl font-bold">Likes</h2>
              </div>
              <div className="h-full m-0 p-0">
                  <Row className="m-0">
                    {
                      post_likes_data.map(
                        datum => (
                          <UserCard 
                            user_id={datum.user_id}
                            profile_picture_path={datum.profile_picture_path}
                            display_name={datum.display_name}
                            username={datum.username}
                            description={datum.description}
                          />
                        )
                      )
                    }
                  </Row>
              </div>
          </div>
        </Container>
      )
}

export default PostLikesPage
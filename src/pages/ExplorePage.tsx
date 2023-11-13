import { Search } from "react-bootstrap-icons"
import PostCard from "../components/PostCard";
import { Row } from "react-bootstrap";

const ExplorePage = () => {
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

    return (
        <div className="grow basis-2/5 z-30">
            <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                <div className="bg-slate-700 w-full flex items-center p-2.5 rounded-full">
                    <Search className="text-white" />
                    <input type="text" placeholder="Search" className="ml-3 bg-inherit outline-none" />
                </div>
            </div>
            <div className="h-full m-0 p-0">
                <Row className="m-0">
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
                </Row>
            </div>
        </div>
    );
}

export default ExplorePage
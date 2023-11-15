import profile from '../assets/default.jpg'
import { ArrowLeft, Calendar } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import PostCard from '../components/PostCard';


const UserRepliesPage = () => {
    const user_data = [{
        userId          : 1,
        profilePicture  : "/public/images/default.jpg",
        displayName     : "aaaa",
        username        :'bbbbbb',
        description     :'alalalallalalalla',
        joinDate        :'Februari 2022',
        following       : 10,
        followers       : 11
      },
    ];
    const post_data = [{
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
        <div className="grow basis-2/5 z-30">
            <div className="top-0 z-50 border-b border-slate-600 border-solid px-5 py-4 flex items-center">
                <Link to="" className="mr-4">
                    <ArrowLeft className="w-8 h-8 hover:bg-slate-500 p-1 rounded-full" />
                </Link>
                <h2 className="text-xl font-bold">{user_data[0].displayName}</h2>
            </div>
            <div className="h-max w-full bg-black">
                <div className="h-48 bg-slate-600"></div>
                <div className="px-4 py-4">
                    <img src={profile} className="w-32 h-32 -mt-20 border-4 border-solid border-slate-50 rounded-full" />
                    <div className="text-xl font-bold mt-2">
                        {user_data[0].displayName}
                    </div>
                    <div className="text-sm text-slate-500 mb-3">
                        @{user_data[0].username}
                    </div>
                    <div className="text-sm mb-3">
                        {user_data[0].description}
                    </div>
                    <div className="text-sm text-slate-500 flex items-centre mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        Joined {user_data[0].joinDate}
                    </div>
                    <div className="text-sm font-bold flex">
                        <div className="inline-flex mr-5 hover:underline">
                            {user_data[0].following} Following
                        </div>
                        <div className="inline-flex hover:underline">
                            {user_data[0].followers} Followers
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full justify-around flex flex-row bg-black border-b border-slate-600 border-solid">
                <Link to={"/user/" + user_data[0].userId}  className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Posts</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/replies"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 border-b-4 border-blue-500 border-solid font-bold">Replies</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/media"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Media</div>
                </Link>
                <Link to={"/user/" + user_data[0].userId + "/likes"} className="w-1/4 px-6 text-center hover:bg-slate-600">
                    <div className="py-4 text-slate-500">Likes</div>
                </Link>
            </div>
            <div className="m-0 p-0">
                <Row className='m-0'>
                    {
                      post_data.map(
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
                </Row>
            </div>
        </div>
        </Container>
    )
}

export default UserRepliesPage
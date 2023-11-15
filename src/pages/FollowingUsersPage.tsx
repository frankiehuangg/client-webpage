import { Col, Container, Row } from 'react-bootstrap'
import UserCard from '../components/UserCard.tsx'
import { NavLink, useParams } from 'react-router-dom'

const FollowingUsersPage = () => {
    document.title = "Following"

    const {user_id} = useParams()

    const users = [
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
          {
            user_id               : 3,
            profile_picture_path  : "/public/images/default.jpg",
            display_name          : "Jay",
            username              : "amongus",
            description           : "I'm the best impostor",
          },
        // Add more user objects here
      ];

    return (
        <Container fluid className="h-screen p-0">
            <Row className="h-screen m-0">
                <Col xs={12} className="p-0">
                    <div className="top-0 z-50 px-5 py-4 flex items-center">
                        <h2 className="text-xl font-bold">Username</h2>
                    </div>
                    <div className='flex flex-nowrap w-full items-center border-b border-slate-500 p-[1vh]'>
                        <div className='flex-1 items-center text-center'>
                            <NavLink to={`/user/${user_id}/block`}>
                                {({isActive}) => (
                                <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Blocked</p>
                                )}
                            </NavLink>
                        </div>
                        <div className='flex-1 items-center text-center'>
                            <NavLink to={`/user/${user_id}/followers`}>
                                {({isActive}) => (
                                    <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Followers</p>
                                )}
                            </NavLink>
                        </div>
                        <div className='flex-1 items-center text-center'>
                            <NavLink to={`/user/${user_id}/following`}>
                                {({isActive}) => (
                                    <p className={isActive ? "underline underline-offset-8 decoration-[5px] decoration-cyan-500 text-white" : "text-stone-600"}>Following</p>
                                )}
                            </NavLink>
                        </div>
                    </div>
                    <div className="h-full m-0 p-0">
                        <Row className="m-0">
                            {
                              users.map(
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
                </Col>
            </Row>
        </Container>
    );
}

export default FollowingUsersPage
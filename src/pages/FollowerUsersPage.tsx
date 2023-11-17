import { Col, Container, Row } from 'react-bootstrap'
import UserCard from '../components/UserCard.tsx'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchApi } from '../lib/fetchApi.ts'

const FollowerUsersPage = () => {
    document.title = "Followers"

    const {user_id} = useParams()

    const [followersData, setFollowersData] = useState<any[]>([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const headers = {
            'Content-Type': 'application/json'
          }

          const response = await fetchApi(
            'http://localhost:8000/followers?user_id=' + user_id,
            'GET',
            headers
          )

          const data = await response.json()          

          if (response.status === 200) {
            setFollowersData(data)
          }
        } catch (error) {
          alert('Unknown error, followers is missing')
        }
      }
      fetchData()
    }, [])

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
                              followersData.map(
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

export default FollowerUsersPage